import {
  UsersService
} from "./chunk-VZKHM6JD.js";
import "./chunk-L6NSXISC.js";
import "./chunk-IPDCSBCV.js";
import {
  RouterModule
} from "./chunk-K7XYKDLO.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NG_VALUE_ACCESSOR,
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
} from "./chunk-PK4NVWGP.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  ElementRef,
  EventEmitter,
  HttpClient,
  Inject,
  Injectable,
  Input,
  LangService,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgZone,
  Output,
  SlicePipe,
  Subject,
  TranslationService,
  VERSION,
  ViewChild,
  first,
  forwardRef,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
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
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate6,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-T743GANX.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-EVSPGG2W.js";

// src/app/models/letter.model.ts
var LetterDirection;
(function(LetterDirection2) {
  LetterDirection2[LetterDirection2["In"] = 0] = "In";
  LetterDirection2[LetterDirection2["Out"] = 1] = "Out";
})(LetterDirection || (LetterDirection = {}));
var LetterType;
(function(LetterType2) {
  LetterType2[LetterType2["Internal"] = 0] = "Internal";
  LetterType2[LetterType2["External"] = 1] = "External";
})(LetterType || (LetterType = {}));
var LetterConfidentiality;
(function(LetterConfidentiality2) {
  LetterConfidentiality2[LetterConfidentiality2["Public"] = 0] = "Public";
  LetterConfidentiality2[LetterConfidentiality2["Restricted"] = 1] = "Restricted";
  LetterConfidentiality2[LetterConfidentiality2["Secret"] = 2] = "Secret";
})(LetterConfidentiality || (LetterConfidentiality = {}));
var LetterStatus;
(function(LetterStatus2) {
  LetterStatus2[LetterStatus2["Draft"] = 0] = "Draft";
  LetterStatus2[LetterStatus2["PendingApproval"] = 1] = "PendingApproval";
  LetterStatus2[LetterStatus2["Approved"] = 2] = "Approved";
  LetterStatus2[LetterStatus2["Rejected"] = 3] = "Rejected";
  LetterStatus2[LetterStatus2["Sent"] = 4] = "Sent";
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
    if (params.Status !== void 0)
      queryParams.append("Status", params.Status.toString());
    if (params.From)
      queryParams.append("From", params.From);
    if (params.To)
      queryParams.append("To", params.To);
    if (queryParams.toString()) {
      url += "?" + queryParams.toString();
    }
    console.log("API URL:", url);
    console.log("Query params:", queryParams.toString());
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
  // New approval workflow methods
  submitForApproval(id) {
    return this.http.post(`${this.apiUrl}/${id}/submit-for-approval`, {});
  }
  getLettersForApproval() {
    return this.http.get(`${this.apiUrl}/approval`);
  }
  approveLetter(id, signature, approvalNotes) {
    const formData = new FormData();
    formData.append("SignatureImage", signature);
    if (approvalNotes && approvalNotes.trim()) {
      formData.append("ApprovalNotes", approvalNotes.trim());
    }
    return this.http.post(`${this.apiUrl}/${id}/approve`, formData);
  }
  rejectLetter(id, rejectionReason) {
    const body = rejectionReason ? { rejectionReason } : {};
    return this.http.post(`${this.apiUrl}/${id}/reject`, body);
  }
  sendEmail(id, emailData) {
    return this.http.post(`${this.apiUrl}/${id}/send-email`, emailData || {});
  }
  downloadLetterPdf(letterId) {
    return this.http.get(`${this.apiUrl}/${letterId}/download-pdf`, {
      responseType: "blob"
    });
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

// node_modules/@ckeditor/ckeditor5-integrations-common/dist/index.js
function waitFor(callback, {
  timeOutAfter = 500,
  retryAfter = 100
} = {}) {
  return new Promise((resolve, reject) => {
    const startTime = Date.now();
    let lastError = null;
    const timeoutTimerId = setTimeout(() => {
      reject(lastError ?? new Error("Timeout"));
    }, timeOutAfter);
    const tick = () => __async(null, null, function* () {
      try {
        const result = yield callback();
        clearTimeout(timeoutTimerId);
        resolve(result);
      } catch (err) {
        lastError = err;
        if (Date.now() - startTime > timeOutAfter) {
          reject(err);
        } else {
          setTimeout(tick, retryAfter);
        }
      }
    });
    tick();
  });
}
var INJECTED_SCRIPTS = /* @__PURE__ */ new Map();
function injectScript(src, { attributes } = {}) {
  if (INJECTED_SCRIPTS.has(src)) {
    return INJECTED_SCRIPTS.get(src);
  }
  const maybePrevScript = document.querySelector(`script[src="${src}"]`);
  if (maybePrevScript) {
    console.warn(`Script with "${src}" src is already present in DOM!`);
    maybePrevScript.remove();
  }
  const promise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.onerror = reject;
    script.onload = () => {
      resolve();
    };
    for (const [key, value] of Object.entries(attributes || {})) {
      script.setAttribute(key, value);
    }
    script.setAttribute("data-injected-by", "ckeditor-integration");
    script.type = "text/javascript";
    script.async = true;
    script.src = src;
    document.head.appendChild(script);
    const observer = new MutationObserver((mutations) => {
      const removedNodes = mutations.flatMap((mutation) => Array.from(mutation.removedNodes));
      if (removedNodes.includes(script)) {
        INJECTED_SCRIPTS.delete(src);
        observer.disconnect();
      }
    });
    observer.observe(document.head, {
      childList: true,
      subtree: true
    });
  });
  INJECTED_SCRIPTS.set(src, promise);
  return promise;
}
function injectScriptsInParallel(sources, props) {
  return __async(this, null, function* () {
    yield Promise.all(
      sources.map((src) => injectScript(src, props))
    );
  });
}
var INJECTED_STYLESHEETS = /* @__PURE__ */ new Map();
function injectStylesheet({
  href,
  placementInHead = "start",
  attributes = {}
}) {
  if (INJECTED_STYLESHEETS.has(href)) {
    return INJECTED_STYLESHEETS.get(href);
  }
  const maybePrevStylesheet = document.querySelector(`link[href="${href}"][rel="stylesheet"]`);
  if (maybePrevStylesheet) {
    console.warn(`Stylesheet with "${href}" href is already present in DOM!`);
    maybePrevStylesheet.remove();
  }
  const appendLinkTagToHead = (link) => {
    const previouslyInjectedLinks = Array.from(
      document.head.querySelectorAll('link[data-injected-by="ckeditor-integration"]')
    );
    switch (placementInHead) {
      case "start":
        if (previouslyInjectedLinks.length) {
          previouslyInjectedLinks.slice(-1)[0].after(link);
        } else {
          document.head.insertBefore(link, document.head.firstChild);
        }
        break;
      case "end":
        document.head.appendChild(link);
        break;
    }
  };
  const promise = new Promise((resolve, reject) => {
    const link = document.createElement("link");
    for (const [key, value] of Object.entries(attributes || {})) {
      link.setAttribute(key, value);
    }
    link.setAttribute("data-injected-by", "ckeditor-integration");
    link.rel = "stylesheet";
    link.href = href;
    link.onerror = reject;
    link.onload = () => {
      resolve();
    };
    appendLinkTagToHead(link);
    const observer = new MutationObserver((mutations) => {
      const removedNodes = mutations.flatMap((mutation) => Array.from(mutation.removedNodes));
      if (removedNodes.includes(link)) {
        INJECTED_STYLESHEETS.delete(href);
        observer.disconnect();
      }
    });
    observer.observe(document.head, {
      childList: true,
      subtree: true
    });
  });
  INJECTED_STYLESHEETS.set(href, promise);
  return promise;
}
function preloadResource(url, { attributes } = {}) {
  if (document.head.querySelector(`link[href="${url}"][rel="preload"]`)) {
    return;
  }
  const link = document.createElement("link");
  for (const [key, value] of Object.entries(attributes || {})) {
    link.setAttribute(key, value);
  }
  link.setAttribute("data-injected-by", "ckeditor-integration");
  link.rel = "preload";
  link.as = detectTypeOfResource(url);
  link.href = url;
  document.head.insertBefore(link, document.head.firstChild);
}
function detectTypeOfResource(url) {
  switch (true) {
    case /\.css$/.test(url):
      return "style";
    case /\.js$/.test(url):
      return "script";
    default:
      return "fetch";
  }
}
var HEX_NUMBERS = new Array(256).fill("").map((_, index) => ("0" + index.toString(16)).slice(-2));
function uid() {
  const [r1, r2, r3, r4] = crypto.getRandomValues(new Uint32Array(4));
  return "e" + HEX_NUMBERS[r1 >> 0 & 255] + HEX_NUMBERS[r1 >> 8 & 255] + HEX_NUMBERS[r1 >> 16 & 255] + HEX_NUMBERS[r1 >> 24 & 255] + HEX_NUMBERS[r2 >> 0 & 255] + HEX_NUMBERS[r2 >> 8 & 255] + HEX_NUMBERS[r2 >> 16 & 255] + HEX_NUMBERS[r2 >> 24 & 255] + HEX_NUMBERS[r3 >> 0 & 255] + HEX_NUMBERS[r3 >> 8 & 255] + HEX_NUMBERS[r3 >> 16 & 255] + HEX_NUMBERS[r3 >> 24 & 255] + HEX_NUMBERS[r4 >> 0 & 255] + HEX_NUMBERS[r4 >> 8 & 255] + HEX_NUMBERS[r4 >> 16 & 255] + HEX_NUMBERS[r4 >> 24 & 255];
}
function uniq(source) {
  return Array.from(new Set(source));
}
function waitForWindowEntry(entryNames, config) {
  return __async(this, null, function* () {
    const tryPickBundle = () => entryNames.map((name) => window[name]).filter(Boolean)[0];
    return waitFor(
      () => {
        const result = tryPickBundle();
        if (!result) {
          throw new Error(`Window entry "${entryNames.join(",")}" not found.`);
        }
        return result;
      },
      config
    );
  });
}
function filterObjectValues(obj, filter) {
  const filteredEntries = Object.entries(obj).filter(([key, value]) => filter(value, key));
  return Object.fromEntries(filteredEntries);
}
function filterBlankObjectValues(obj) {
  return filterObjectValues(
    obj,
    (value) => value !== null && value !== void 0
  );
}
function mapObjectValues(obj, mapper) {
  const mappedEntries = Object.entries(obj).map(([key, value]) => [key, mapper(value, key)]);
  return Object.fromEntries(mappedEntries);
}
function without(itemsToRemove, items) {
  return items.filter((item) => !itemsToRemove.includes(item));
}
function appendExtraPluginsToEditorConfig(config, plugins) {
  const extraPlugins = config.extraPlugins || [];
  return __spreadProps(__spreadValues({}, config), {
    extraPlugins: [
      ...extraPlugins,
      ...plugins.filter((item) => !extraPlugins.includes(item))
    ]
  });
}
function isSemanticVersion(version) {
  return !!version && /^\d+\.\d+\.\d+/.test(version);
}
function isCKCdnTestingVersion(version) {
  if (!version) {
    return false;
  }
  return ["nightly", "alpha", "internal", "nightly-", "staging"].some((testVersion) => version.includes(testVersion));
}
function isCKCdnVersion(version) {
  return isSemanticVersion(version) || isCKCdnTestingVersion(version);
}
function destructureSemanticVersion(version) {
  if (!isSemanticVersion(version)) {
    throw new Error(`Invalid semantic version: ${version || "<blank>"}.`);
  }
  const [major, minor, patch] = version.split(".");
  return {
    major: Number.parseInt(major, 10),
    minor: Number.parseInt(minor, 10),
    patch: Number.parseInt(patch, 10)
  };
}
function getLicenseVersionFromEditorVersion(version) {
  if (isCKCdnTestingVersion(version)) {
    return 3;
  }
  const { major } = destructureSemanticVersion(version);
  switch (true) {
    case major >= 44:
      return 3;
    case major >= 38:
      return 2;
    default:
      return 1;
  }
}
function getCKBaseBundleInstallationInfo() {
  const { CKEDITOR_VERSION, CKEDITOR } = window;
  if (!isCKCdnVersion(CKEDITOR_VERSION)) {
    return null;
  }
  return {
    source: CKEDITOR ? "cdn" : "npm",
    version: CKEDITOR_VERSION
  };
}
function getSupportedLicenseVersionInstallationInfo() {
  const installationInfo = getCKBaseBundleInstallationInfo();
  if (!installationInfo) {
    return null;
  }
  return getLicenseVersionFromEditorVersion(installationInfo.version);
}
function isCKEditorFreeLicense(licenseKey, licenseVersion) {
  licenseVersion ||= getSupportedLicenseVersionInstallationInfo() || void 0;
  switch (licenseVersion) {
    case 1:
    case 2:
      return licenseKey === void 0;
    case 3:
      return licenseKey === "GPL";
    default: {
      return false;
    }
  }
}
function createIntegrationUsageDataPlugin(integrationName, usageData) {
  return function IntegrationUsageDataPlugin(editor) {
    if (isCKEditorFreeLicense(editor.config.get("licenseKey"))) {
      return;
    }
    editor.on("collectUsageData", (source, { setUsageData }) => {
      setUsageData(`integration.${integrationName}`, usageData);
    });
  };
}
var CK_CDN_URL = "https://cdn.ckeditor.com";
function createCKCdnUrl(bundle, file, version) {
  return `${CK_CDN_URL}/${bundle}/${version}/${file}`;
}
var CKBOX_CDN_URL = "https://cdn.ckbox.io";
function createCKBoxCdnUrl(bundle, file, version) {
  return `${CKBOX_CDN_URL}/${bundle}/${version}/${file}`;
}
var CK_DOCS_URL = "https://ckeditor.com/docs/ckeditor5";
function createCKDocsUrl(path, version = "latest") {
  return `${CK_DOCS_URL}/${version}/${path}`;
}
function createCKCdnBaseBundlePack({
  version,
  translations,
  createCustomCdnUrl = createCKCdnUrl
}) {
  const urls = {
    scripts: [
      // Load the main script of the base features.
      createCustomCdnUrl("ckeditor5", "ckeditor5.umd.js", version),
      // Load all JavaScript files from the base features.
      // EN bundle is prebuilt into the main script, so we don't need to load it separately.
      ...without(["en"], translations || []).map(
        (translation) => createCustomCdnUrl("ckeditor5", `translations/${translation}.umd.js`, version)
      )
    ],
    stylesheets: [
      createCustomCdnUrl("ckeditor5", "ckeditor5.css", version)
    ]
  };
  return {
    // Preload resources specified in the pack, before loading the main script.
    preload: [
      ...urls.stylesheets,
      ...urls.scripts
    ],
    scripts: [
      // It's safe to load translations and the main script in parallel.
      (attributes) => __async(null, null, function* () {
        return injectScriptsInParallel(urls.scripts, attributes);
      })
    ],
    // Load all stylesheets of the base features.
    stylesheets: urls.stylesheets,
    // Pick the exported global variables from the window object.
    checkPluginLoaded: () => __async(null, null, function* () {
      return waitForWindowEntry(["CKEDITOR"]);
    }),
    // Check if the CKEditor base bundle is already loaded and throw an error if it is.
    beforeInject: () => {
      const installationInfo = getCKBaseBundleInstallationInfo();
      switch (installationInfo?.source) {
        case "npm":
          throw new Error(
            "CKEditor 5 is already loaded from npm. Check the migration guide for more details: " + createCKDocsUrl("updating/migration-to-cdn/vanilla-js.html")
          );
        case "cdn":
          if (installationInfo.version !== version) {
            throw new Error(
              `CKEditor 5 is already loaded from CDN in version ${installationInfo.version}. Remove the old <script> and <link> tags loading CKEditor 5 to allow loading the ${version} version.`
            );
          }
          break;
      }
    }
  };
}
function createCKCdnPremiumBundlePack({
  version,
  translations,
  createCustomCdnUrl = createCKCdnUrl
}) {
  const urls = {
    scripts: [
      // Load the main script of the premium features.
      createCustomCdnUrl("ckeditor5-premium-features", "ckeditor5-premium-features.umd.js", version),
      // Load all JavaScript files from the premium features.
      // EN bundle is prebuilt into the main script, so we don't need to load it separately.
      ...without(["en"], translations || []).map(
        (translation) => createCustomCdnUrl("ckeditor5-premium-features", `translations/${translation}.umd.js`, version)
      )
    ],
    stylesheets: [
      createCustomCdnUrl("ckeditor5-premium-features", "ckeditor5-premium-features.css", version)
    ]
  };
  return {
    // Preload resources specified in the pack, before loading the main script.
    preload: [
      ...urls.stylesheets,
      ...urls.scripts
    ],
    scripts: [
      // It's safe to load translations and the main script in parallel.
      (attributes) => __async(null, null, function* () {
        return injectScriptsInParallel(urls.scripts, attributes);
      })
    ],
    // Load all stylesheets of the premium features.
    stylesheets: urls.stylesheets,
    // Pick the exported global variables from the window object.
    checkPluginLoaded: () => __async(null, null, function* () {
      return waitForWindowEntry(["CKEDITOR_PREMIUM_FEATURES"]);
    })
  };
}
function loadCKCdnResourcesPack(pack) {
  return __async(this, null, function* () {
    let {
      htmlAttributes = {},
      scripts = [],
      stylesheets = [],
      preload,
      beforeInject,
      checkPluginLoaded
    } = normalizeCKCdnResourcesPack(pack);
    beforeInject?.();
    if (!preload) {
      preload = uniq([
        ...stylesheets.filter((item) => typeof item === "string"),
        ...scripts.filter((item) => typeof item === "string")
      ]);
    }
    for (const url of preload) {
      preloadResource(url, {
        attributes: htmlAttributes
      });
    }
    yield Promise.all(
      uniq(stylesheets).map((href) => injectStylesheet({
        href,
        attributes: htmlAttributes,
        placementInHead: "start"
      }))
    );
    for (const script of uniq(scripts)) {
      const injectorProps = {
        attributes: htmlAttributes
      };
      if (typeof script === "string") {
        yield injectScript(script, injectorProps);
      } else {
        yield script(injectorProps);
      }
    }
    return checkPluginLoaded?.();
  });
}
function normalizeCKCdnResourcesPack(pack) {
  if (Array.isArray(pack)) {
    return {
      scripts: pack.filter(
        (item) => typeof item === "function" || item.endsWith(".js")
      ),
      stylesheets: pack.filter(
        (item) => item.endsWith(".css")
      )
    };
  }
  if (typeof pack === "function") {
    return {
      checkPluginLoaded: pack
    };
  }
  return pack;
}
function combineCKCdnBundlesPacks(packs) {
  const normalizedPacks = mapObjectValues(
    filterBlankObjectValues(packs),
    normalizeCKCdnResourcesPack
  );
  const mergedPacks = Object.values(normalizedPacks).reduce(
    (acc, pack) => {
      acc.scripts.push(...pack.scripts ?? []);
      acc.stylesheets.push(...pack.stylesheets ?? []);
      acc.preload.push(...pack.preload ?? []);
      return acc;
    },
    {
      preload: [],
      scripts: [],
      stylesheets: []
    }
  );
  const checkPluginLoaded = () => __async(null, null, function* () {
    const exportedGlobalVariables = /* @__PURE__ */ Object.create(null);
    for (const [name, pack] of Object.entries(normalizedPacks)) {
      exportedGlobalVariables[name] = yield pack?.checkPluginLoaded?.();
    }
    return exportedGlobalVariables;
  });
  const beforeInject = () => {
    for (const pack of Object.values(normalizedPacks)) {
      pack.beforeInject?.();
    }
  };
  return __spreadProps(__spreadValues({}, mergedPacks), {
    beforeInject,
    checkPluginLoaded
  });
}
function getCKBoxInstallationInfo() {
  const version = window.CKBox?.version;
  if (!isSemanticVersion(version)) {
    return null;
  }
  return {
    source: "cdn",
    version
  };
}
function createCKBoxBundlePack({
  version,
  theme = "lark",
  translations,
  createCustomCdnUrl = createCKBoxCdnUrl
}) {
  return __spreadProps(__spreadValues({
    // Load the main script of the base features.
    scripts: [
      createCustomCdnUrl("ckbox", "ckbox.js", version),
      // EN bundle is prebuilt into the main script, so we don't need to load it separately.
      ...without(["en"], translations || []).map(
        (translation) => createCustomCdnUrl("ckbox", `translations/${translation}.js`, version)
      )
    ]
  }, theme && {
    stylesheets: [
      createCustomCdnUrl("ckbox", `styles/themes/${theme}.css`, version)
    ]
  }), {
    // Pick the exported global variables from the window object.
    checkPluginLoaded: () => __async(null, null, function* () {
      return waitForWindowEntry(["CKBox"]);
    }),
    // Check if the CKBox bundle is already loaded and throw an error if it is.
    beforeInject: () => {
      const installationInfo = getCKBoxInstallationInfo();
      if (installationInfo && installationInfo.version !== version) {
        throw new Error(
          `CKBox is already loaded from CDN in version ${installationInfo.version}. Remove the old <script> and <link> tags loading CKBox to allow loading the ${version} version.`
        );
      }
    }
  });
}
function isCKCdnSupportedByEditorVersion(version) {
  if (isCKCdnTestingVersion(version)) {
    return true;
  }
  const { major } = destructureSemanticVersion(version);
  const licenseVersion = getLicenseVersionFromEditorVersion(version);
  switch (licenseVersion) {
    case 3:
      return true;
    default:
      return major === 43;
  }
}
function combineCdnPluginsPacks(pluginsPacks) {
  const normalizedPluginsPacks = mapObjectValues(pluginsPacks, (pluginPack, pluginName) => {
    if (!pluginPack) {
      return void 0;
    }
    const normalizedPluginPack = normalizeCKCdnResourcesPack(pluginPack);
    return __spreadValues({
      // Provide default window accessor object if the plugin pack does not define it.
      checkPluginLoaded: () => __async(null, null, function* () {
        return waitForWindowEntry([pluginName]);
      })
    }, normalizedPluginPack);
  });
  return combineCKCdnBundlesPacks(
    normalizedPluginsPacks
  );
}
function loadCKEditorCloud(config) {
  const {
    version,
    translations,
    plugins,
    premium,
    ckbox,
    createCustomCdnUrl,
    injectedHtmlElementsAttributes = {
      crossorigin: "anonymous"
    }
  } = config;
  validateCKEditorVersion(version);
  const pack = combineCKCdnBundlesPacks(__spreadProps(__spreadValues(__spreadValues({
    CKEditor: createCKCdnBaseBundlePack({
      version,
      translations,
      createCustomCdnUrl
    })
  }, premium && {
    CKEditorPremiumFeatures: createCKCdnPremiumBundlePack({
      version,
      translations,
      createCustomCdnUrl
    })
  }), ckbox && {
    CKBox: createCKBoxBundlePack(ckbox)
  }), {
    loadedPlugins: combineCdnPluginsPacks(plugins ?? {})
  }));
  return loadCKCdnResourcesPack(
    __spreadProps(__spreadValues({}, pack), {
      htmlAttributes: injectedHtmlElementsAttributes
    })
  );
}
function validateCKEditorVersion(version) {
  if (isCKCdnTestingVersion(version)) {
    console.warn(
      "You are using a testing version of CKEditor 5. Please remember that it is not suitable for production environments."
    );
  }
  if (!isCKCdnSupportedByEditorVersion(version)) {
    throw new Error(
      `The CKEditor 5 CDN can't be used with the given editor version: ${version}. Please make sure you are using at least the CKEditor 5 version 44.`
    );
  }
}

// node_modules/@ckeditor/ckeditor5-angular/fesm2022/ckeditor-ckeditor5-angular.mjs
function CKEditorComponent_ng_template_0_Template(rf, ctx) {
}
var AngularIntegrationUsageDataPlugin = createIntegrationUsageDataPlugin("angular", {
  version: (
    /* replace-version:start */
    "10.0.0"
  ),
  frameworkVersion: VERSION.full
});
function appendAllIntegrationPluginsToConfig(editorConfig) {
  const extraPlugins = [];
  if (!isCKEditorFreeLicense(editorConfig.licenseKey)) {
    extraPlugins.push(AngularIntegrationUsageDataPlugin);
  }
  return appendExtraPluginsToEditorConfig(editorConfig, extraPlugins);
}
var ANGULAR_INTEGRATION_READ_ONLY_LOCK_ID = "Lock from Angular integration (@ckeditor/ckeditor5-angular)";
var CKEditorComponent = class _CKEditorComponent {
  /**
   * The reference to the DOM element created by the component.
   */
  elementRef;
  /**
   * The constructor of the editor to be used for the instance of the component.
   * It can be e.g. the `ClassicEditorBuild`, `InlineEditorBuild` or some custom editor.
   */
  editor;
  /**
   * The configuration of the editor.
   * See https://ckeditor.com/docs/ckeditor5/latest/api/module_core_editor_editorconfig-EditorConfig.html
   * to learn more.
   */
  config = {
    licenseKey: "GPL"
  };
  /**
   * The initial data of the editor. Useful when not using the ngModel.
   * See https://angular.io/api/forms/NgModel to learn more.
   */
  data = "";
  /**
   * Tag name of the editor component.
   *
   * The default tag is 'div'.
   */
  tagName = "div";
  // TODO Change to ContextWatchdog<Editor, HTMLElement> after new ckeditor5 alpha release
  /**
   * The context watchdog.
   */
  watchdog;
  /**
   * Config for the EditorWatchdog.
   */
  editorWatchdogConfig;
  /**
   * Allows disabling the two-way data binding mechanism. Disabling it can boost performance for large documents.
   *
   * When a component is connected using the [(ngModel)] or [formControl] directives and this value is set to true then none of the data
   * will ever be synchronized.
   *
   * An integrator must call `editor.data.get()` manually once the application needs the editor's data.
   * An editor instance can be received in the `ready()` callback.
   */
  disableTwoWayDataBinding = false;
  /**
   * When set `true`, the editor becomes read-only.
   * See https://ckeditor.com/docs/ckeditor5/latest/api/module_core_editor_editor-Editor.html#member-isReadOnly
   * to learn more.
   */
  set disabled(isDisabled) {
    this.setDisabledState(isDisabled);
  }
  get disabled() {
    if (this.editorInstance) {
      return this.editorInstance.isReadOnly;
    }
    return this.initiallyDisabled;
  }
  /**
   * Fires when the editor is ready. It corresponds with the `editor#ready`
   * https://ckeditor.com/docs/ckeditor5/latest/api/module_core_editor_editor-Editor.html#event-ready
   * event.
   */
  ready = new EventEmitter();
  /**
   * Fires when the content of the editor has changed. It corresponds with the `editor.model.document#change`
   * https://ckeditor.com/docs/ckeditor5/latest/api/module_engine_model_document-Document.html#event-change
   * event.
   */
  change = new EventEmitter();
  /**
   * Fires when the editing view of the editor is blurred. It corresponds with the `editor.editing.view.document#blur`
   * https://ckeditor.com/docs/ckeditor5/latest/api/module_engine_view_document-Document.html#event-event:blur
   * event.
   */
  blur = new EventEmitter();
  /**
   * Fires when the editing view of the editor is focused. It corresponds with the `editor.editing.view.document#focus`
   * https://ckeditor.com/docs/ckeditor5/latest/api/module_engine_view_document-Document.html#event-event:focus
   * event.
   */
  focus = new EventEmitter();
  /**
   * Fires when the editor component crashes.
   */
  error = new EventEmitter();
  /**
   * The instance of the editor created by this component.
   */
  get editorInstance() {
    let editorWatchdog = this.editorWatchdog;
    if (this.watchdog) {
      editorWatchdog = this.watchdog._watchdogs.get(this.id);
    }
    if (editorWatchdog) {
      return editorWatchdog.editor;
    }
    return null;
  }
  /**
   * The editor watchdog. It is created when the context watchdog is not passed to the component.
   * It keeps the editor running.
   */
  editorWatchdog;
  /**
   * If the component is read–only before the editor instance is created, it remembers that state,
   * so the editor can become read–only once it is ready.
   */
  initiallyDisabled = false;
  /**
   * An instance of https://angular.io/api/core/NgZone to allow the interaction with the editor
   * withing the Angular event loop.
   */
  ngZone;
  /**
   * A callback executed when the content of the editor changes. Part of the
   * `ControlValueAccessor` (https://angular.io/api/forms/ControlValueAccessor) interface.
   *
   * Note: Unset unless the component uses the `ngModel`.
   */
  cvaOnChange;
  /**
   * A callback executed when the editor has been blurred. Part of the
   * `ControlValueAccessor` (https://angular.io/api/forms/ControlValueAccessor) interface.
   *
   * Note: Unset unless the component uses the `ngModel`.
   */
  cvaOnTouched;
  /**
   * Reference to the source element used by the editor.
   */
  editorElement;
  /**
   * A lock flag preventing from calling the `cvaOnChange()` during setting editor data.
   */
  isEditorSettingData = false;
  id = uid();
  getId() {
    return this.id;
  }
  constructor(elementRef, ngZone) {
    this.ngZone = ngZone;
    this.elementRef = elementRef;
    this.checkVersion();
  }
  checkVersion() {
    const {
      CKEDITOR_VERSION
    } = window;
    if (!CKEDITOR_VERSION) {
      return console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.');
    }
    const [major] = CKEDITOR_VERSION.split(".").map(Number);
    if (major >= 42 || CKEDITOR_VERSION.startsWith("0.0.0")) {
      return;
    }
    console.warn("The <CKEditor> component requires using CKEditor 5 in version 42+ or nightly build.");
  }
  // Implementing the OnChanges interface. Whenever the `data` property is changed, update the editor content.
  ngOnChanges(changes) {
    if (Object.prototype.hasOwnProperty.call(changes, "data") && changes.data && !changes.data.isFirstChange()) {
      this.writeValue(changes.data.currentValue);
    }
  }
  // Implementing the AfterViewInit interface.
  ngAfterViewInit() {
    this.attachToWatchdog();
  }
  // Implementing the OnDestroy interface.
  ngOnDestroy() {
    return __async(this, null, function* () {
      if (this.watchdog) {
        yield this.watchdog.remove(this.id);
      } else if (this.editorWatchdog && this.editorWatchdog.editor) {
        yield this.editorWatchdog.destroy();
        this.editorWatchdog = void 0;
      }
    });
  }
  // Implementing the ControlValueAccessor interface (only when binding to ngModel).
  writeValue(value) {
    if (value === null) {
      value = "";
    }
    if (this.editorInstance) {
      this.isEditorSettingData = true;
      this.editorInstance.data.set(value);
      this.isEditorSettingData = false;
    } else {
      this.data = value;
      this.ready.pipe(first()).subscribe((editor) => {
        editor.data.set(this.data);
      });
    }
  }
  // Implementing the ControlValueAccessor interface (only when binding to ngModel).
  registerOnChange(callback) {
    this.cvaOnChange = callback;
  }
  // Implementing the ControlValueAccessor interface (only when binding to ngModel).
  registerOnTouched(callback) {
    this.cvaOnTouched = callback;
  }
  // Implementing the ControlValueAccessor interface (only when binding to ngModel).
  setDisabledState(isDisabled) {
    if (this.editorInstance) {
      if (isDisabled) {
        this.editorInstance.enableReadOnlyMode(ANGULAR_INTEGRATION_READ_ONLY_LOCK_ID);
      } else {
        this.editorInstance.disableReadOnlyMode(ANGULAR_INTEGRATION_READ_ONLY_LOCK_ID);
      }
    }
    this.initiallyDisabled = isDisabled;
  }
  /**
   * Creates the editor instance, sets initial editor data, then integrates
   * the editor with the Angular component. This method does not use the `editor.data.set()`
   * because of the issue in the collaboration mode (#6).
   */
  attachToWatchdog() {
    const creator = (elementOrData, config2) => {
      return this.ngZone.runOutsideAngular(() => __async(this, null, function* () {
        this.elementRef.nativeElement.appendChild(elementOrData);
        const editor = yield this.editor.create(elementOrData, config2);
        if (this.initiallyDisabled) {
          editor.enableReadOnlyMode(ANGULAR_INTEGRATION_READ_ONLY_LOCK_ID);
        }
        this.ngZone.run(() => {
          this.ready.emit(editor);
        });
        this.setUpEditorEvents(editor);
        return editor;
      }));
    };
    const destructor = (editor) => __async(this, null, function* () {
      yield editor.destroy();
      this.elementRef.nativeElement.removeChild(this.editorElement);
    });
    const emitError = (e) => {
      if (hasObservers(this.error)) {
        this.ngZone.run(() => this.error.emit(e));
      } else {
        console.error(e);
      }
    };
    const element = document.createElement(this.tagName);
    const config = this.getConfig();
    this.editorElement = element;
    if (this.watchdog) {
      this.watchdog.add({
        id: this.id,
        type: "editor",
        creator,
        destructor,
        sourceElementOrData: element,
        config
      }).catch((e) => {
        emitError(e);
      });
      this.watchdog.on("itemError", (_, {
        itemId
      }) => {
        if (itemId === this.id) {
          emitError();
        }
      });
    } else {
      const editorWatchdog = new this.editor.EditorWatchdog(this.editor, this.editorWatchdogConfig);
      editorWatchdog.setCreator(creator);
      editorWatchdog.setDestructor(destructor);
      editorWatchdog.on("error", emitError);
      this.editorWatchdog = editorWatchdog;
      this.ngZone.runOutsideAngular(() => {
        editorWatchdog.create(element, config).catch((e) => {
          emitError(e);
        });
      });
    }
  }
  getConfig() {
    if (this.data && this.config.initialData) {
      throw new Error("Editor data should be provided either using `config.initialData` or `data` properties.");
    }
    const config = __spreadValues({}, this.config);
    const initialData = this.config.initialData || this.data;
    if (initialData) {
      config.initialData = initialData;
    }
    return appendAllIntegrationPluginsToConfig(config);
  }
  /**
   * Integrates the editor with the component by attaching related event listeners.
   */
  setUpEditorEvents(editor) {
    const modelDocument = editor.model.document;
    const viewDocument = editor.editing.view.document;
    modelDocument.on("change:data", (evt) => {
      this.ngZone.run(() => {
        if (this.disableTwoWayDataBinding) {
          return;
        }
        if (this.cvaOnChange && !this.isEditorSettingData) {
          const data = editor.data.get();
          this.cvaOnChange(data);
        }
        this.change.emit({
          event: evt,
          editor
        });
      });
    });
    viewDocument.on("focus", (evt) => {
      this.ngZone.run(() => {
        this.focus.emit({
          event: evt,
          editor
        });
      });
    });
    viewDocument.on("blur", (evt) => {
      this.ngZone.run(() => {
        if (this.cvaOnTouched) {
          this.cvaOnTouched();
        }
        this.blur.emit({
          event: evt,
          editor
        });
      });
    });
  }
  static \u0275fac = function CKEditorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CKEditorComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CKEditorComponent,
    selectors: [["ckeditor"]],
    inputs: {
      editor: "editor",
      config: "config",
      data: "data",
      tagName: "tagName",
      watchdog: "watchdog",
      editorWatchdogConfig: "editorWatchdogConfig",
      disableTwoWayDataBinding: "disableTwoWayDataBinding",
      disabled: "disabled"
    },
    outputs: {
      ready: "ready",
      change: "change",
      blur: "blur",
      focus: "focus",
      error: "error"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _CKEditorComponent),
      multi: true
    }]), \u0275\u0275NgOnChangesFeature],
    decls: 1,
    vars: 0,
    template: function CKEditorComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, CKEditorComponent_ng_template_0_Template, 0, 0, "ng-template");
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CKEditorComponent, [{
    type: Component,
    args: [{
      selector: "ckeditor",
      template: "<ng-template></ng-template>",
      // Integration with @angular/forms.
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => CKEditorComponent),
        multi: true
      }]
    }]
  }], function() {
    return [{
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }, {
      type: NgZone,
      decorators: [{
        type: Inject,
        args: [NgZone]
      }]
    }];
  }, {
    editor: [{
      type: Input
    }],
    config: [{
      type: Input
    }],
    data: [{
      type: Input
    }],
    tagName: [{
      type: Input
    }],
    watchdog: [{
      type: Input
    }],
    editorWatchdogConfig: [{
      type: Input
    }],
    disableTwoWayDataBinding: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    ready: [{
      type: Output
    }],
    change: [{
      type: Output
    }],
    blur: [{
      type: Output
    }],
    focus: [{
      type: Output
    }],
    error: [{
      type: Output
    }]
  });
})();
function hasObservers(emitter) {
  return emitter.observed || emitter.observers.length > 0;
}
var CKEditorModule = class _CKEditorModule {
  static \u0275fac = function CKEditorModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CKEditorModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _CKEditorModule,
    declarations: [CKEditorComponent],
    imports: [FormsModule, CommonModule],
    exports: [CKEditorComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [FormsModule, CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CKEditorModule, [{
    type: NgModule,
    args: [{
      imports: [FormsModule, CommonModule],
      declarations: [CKEditorComponent],
      exports: [CKEditorComponent]
    }]
  }], null, null);
})();

// src/app/components/letters/shared/ckeditor-config.ts
var cloudConfig = {
  version: "43.1.0"
  // Using a stable version with all free plugins
};
var CKEditorService = class {
  static Editor = null;
  static config = null;
  static initializeEditor() {
    return __async(this, null, function* () {
      if (this.Editor && this.config) {
        return;
      }
      const cloud = yield loadCKEditorCloud(cloudConfig);
      this.setupEditor(cloud);
    });
  }
  static getConfigForLanguage(language) {
    if (!this.config) {
      return null;
    }
    const languageConfig = __spreadValues({}, this.config);
    if (language === "ar") {
      languageConfig.language = "ar";
      languageConfig.placeholder = "\u0627\u0643\u062A\u0628 \u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u0631\u0633\u0627\u0644\u0629 \u0647\u0646\u0627...";
    } else {
      languageConfig.language = "en";
      languageConfig.placeholder = "Type or paste your content here...";
    }
    return languageConfig;
  }
  static setupEditor(cloud) {
    const { ClassicEditor, Alignment, Bold, Essentials, FontBackgroundColor, FontColor, FontFamily, FontSize, Heading, Indent, IndentBlock, Italic, List, Paragraph, SpecialCharacters, SpecialCharactersEssentials, Table, TableCaption, TableCellProperties, TableColumnResize, TableProperties, TableToolbar, Underline } = cloud.CKEditor;
    this.Editor = ClassicEditor;
    this.config = {
      toolbar: {
        items: [
          "undo",
          "redo",
          "|",
          "heading",
          "|",
          "fontSize",
          "fontFamily",
          "fontColor",
          "fontBackgroundColor",
          "|",
          "bold",
          "italic",
          "underline",
          "|",
          "numberedList",
          "bulletedList",
          "|",
          "insertTable",
          "|",
          "specialCharacters",
          "|",
          "alignment",
          "|",
          "outdent",
          "indent"
        ],
        shouldNotGroupWhenFull: false
      },
      plugins: [
        Alignment,
        Bold,
        Essentials,
        FontBackgroundColor,
        FontColor,
        FontFamily,
        FontSize,
        Heading,
        Indent,
        IndentBlock,
        Italic,
        List,
        Paragraph,
        SpecialCharacters,
        SpecialCharactersEssentials,
        Table,
        TableCaption,
        TableCellProperties,
        TableColumnResize,
        TableProperties,
        TableToolbar,
        Underline
      ],
      fontFamily: {
        supportAllValues: true
      },
      fontSize: {
        options: [10, 12, 14, "default", 18, 20, 22],
        supportAllValues: true
      },
      heading: {
        options: [
          {
            model: "paragraph",
            title: "Paragraph",
            class: "ck-heading_paragraph"
          },
          {
            model: "heading1",
            view: "h1",
            title: "Heading 1",
            class: "ck-heading_heading1"
          },
          {
            model: "heading2",
            view: "h2",
            title: "Heading 2",
            class: "ck-heading_heading2"
          },
          {
            model: "heading3",
            view: "h3",
            title: "Heading 3",
            class: "ck-heading_heading3"
          }
        ]
      },
      language: "en",
      // Will be overridden by getConfigForLanguage
      placeholder: "Type or paste your content here...",
      // Will be overridden by getConfigForLanguage
      list: {
        properties: {
          styles: true,
          startIndex: true,
          reversed: true
        }
      },
      table: {
        contentToolbar: ["tableColumn", "tableRow", "mergeTableCells", "tableProperties", "tableCellProperties"]
      }
    };
  }
  static getEditor() {
    return this.Editor;
  }
  static getConfig() {
    return this.config;
  }
};
var CKEDITOR_EDITOR = CKEditorService.getEditor();
var CKEDITOR_CONFIG = CKEditorService.getConfig();

// src/app/components/letters/letters-confirmation-modal/letters-confirmation-modal.component.ts
function LettersConfirmationModalComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function LettersConfirmationModalComponent_button_9_Template_button_click_0_listener() {
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
function LettersConfirmationModalComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 12);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("show", ctx_r1.isVisible);
  }
}
var LettersConfirmationModalComponent = class _LettersConfirmationModalComponent {
  translationService;
  data = null;
  confirm = new EventEmitter();
  cancel = new EventEmitter();
  isVisible = false;
  confirmSubject = new Subject();
  cancelSubject = new Subject();
  resolvePromise = null;
  constructor(translationService) {
    this.translationService = translationService;
  }
  isRTL() {
    return this.translationService.isRTL();
  }
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
    return new (__ngFactoryType__ || _LettersConfirmationModalComponent)(\u0275\u0275directiveInject(TranslationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LettersConfirmationModalComponent, selectors: [["app-letters-confirmation-modal"]], inputs: { data: "data" }, outputs: { confirm: "confirm", cancel: "cancel" }, standalone: false, decls: 13, vars: 33, consts: [["tabindex", "-1", "role", "dialog", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header", 2, "background", "#D4AF5F !important", 3, "dir"], [1, "modal-title", "text-white"], [1, "modal-body"], [3, "innerHTML"], [1, "modal-footer"], ["type", "button", "class", "btn btn-secondary", 3, "click", 4, "ngIf"], ["type", "button", 3, "click"], ["class", "modal-backdrop fade", 3, "show", 4, "ngIf"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "modal-backdrop", "fade"]], template: function LettersConfirmationModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h5", 4);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 5);
      \u0275\u0275element(7, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 7);
      \u0275\u0275template(9, LettersConfirmationModalComponent_button_9_Template, 2, 1, "button", 8);
      \u0275\u0275elementStart(10, "button", 9);
      \u0275\u0275listener("click", function LettersConfirmationModalComponent_Template_button_click_10_listener() {
        return ctx.onConfirm();
      });
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(12, LettersConfirmationModalComponent_div_12_Template, 1, 2, "div", 10);
    }
    if (rf & 2) {
      \u0275\u0275styleProp("display", ctx.isVisible ? "block" : "none");
      \u0275\u0275classProp("show", ctx.isVisible);
      \u0275\u0275attribute("aria-hidden", !ctx.isVisible);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("bg-danger", (ctx.data == null ? null : ctx.data.type) === "delete")("bg-warning", (ctx.data == null ? null : ctx.data.type) === "warning")("bg-info", (ctx.data == null ? null : ctx.data.type) === "info")("bg-success", (ctx.data == null ? null : ctx.data.type) === "success")("rtl-header", ctx.isRTL())("ltr-header", !ctx.isRTL());
      \u0275\u0275property("dir", ctx.isRTL() ? "rtl" : "ltr");
      \u0275\u0275advance();
      \u0275\u0275classProp("text-end", ctx.isRTL())("text-start", !ctx.isRTL())("rtl-title", ctx.isRTL())("ltr-title", !ctx.isRTL());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.data == null ? null : ctx.data.title);
      \u0275\u0275advance(2);
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
  }, dependencies: [NgIf], styles: ["\n\n.modal.show[_ngcontent-%COMP%] {\n  display: block !important;\n}\n.modal-backdrop.show[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.modal-header[dir=rtl][_ngcontent-%COMP%], \n.rtl-header[_ngcontent-%COMP%] {\n  flex-direction: row-reverse !important;\n  justify-content: flex-end !important;\n  display: flex !important;\n  align-items: center !important;\n}\n.modal-header[dir=rtl][_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%], \n.rtl-title[_ngcontent-%COMP%] {\n  text-align: right !important;\n  margin-left: auto !important;\n  margin-right: 0 !important;\n  flex: 1 !important;\n}\n.modal-header[dir=ltr][_ngcontent-%COMP%], \n.ltr-header[_ngcontent-%COMP%] {\n  flex-direction: row !important;\n  justify-content: flex-start !important;\n  display: flex !important;\n  align-items: center !important;\n}\n.modal-header[dir=ltr][_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%], \n.ltr-title[_ngcontent-%COMP%] {\n  text-align: left !important;\n  margin-left: 0 !important;\n  margin-right: auto !important;\n  flex: 1 !important;\n}\n/*# sourceMappingURL=letters-confirmation-modal.component-2JMXEW7W.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LettersConfirmationModalComponent, [{
    type: Component,
    args: [{ selector: "app-letters-confirmation-modal", standalone: false, template: `
    <div class="modal fade" [class.show]="isVisible" [style.display]="isVisible ? 'block' : 'none'" 
         tabindex="-1" role="dialog" [attr.aria-hidden]="!isVisible">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header" style="background: #D4AF5F !important" [class.bg-danger]="data?.type === 'delete'" 
               [class.bg-warning]="data?.type === 'warning'" 
               [class.bg-info]="data?.type === 'info'"
               [class.bg-success]="data?.type === 'success'"
               [dir]="isRTL() ? 'rtl' : 'ltr'"
               [class.rtl-header]="isRTL()"
               [class.ltr-header]="!isRTL()">
            <h5 class="modal-title text-white" [class.text-end]="isRTL()" [class.text-start]="!isRTL()" [class.rtl-title]="isRTL()" [class.ltr-title]="!isRTL()">{{ data?.title }}</h5>
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
  `, styles: ["/* angular:styles/component:css;0c1ea7eda529ab4d3b1d95243bc8d54a62a719d25b456c0eb990025ed42dca6f;D:/web/EXSUS/\u062B\u0624\u062E\u0629/v2/echo-office-new/src/app/components/letters/letters-confirmation-modal/letters-confirmation-modal.component.ts */\n.modal.show {\n  display: block !important;\n}\n.modal-backdrop.show {\n  opacity: 0.5;\n}\n.modal-header[dir=rtl],\n.rtl-header {\n  flex-direction: row-reverse !important;\n  justify-content: flex-end !important;\n  display: flex !important;\n  align-items: center !important;\n}\n.modal-header[dir=rtl] .modal-title,\n.rtl-title {\n  text-align: right !important;\n  margin-left: auto !important;\n  margin-right: 0 !important;\n  flex: 1 !important;\n}\n.modal-header[dir=ltr],\n.ltr-header {\n  flex-direction: row !important;\n  justify-content: flex-start !important;\n  display: flex !important;\n  align-items: center !important;\n}\n.modal-header[dir=ltr] .modal-title,\n.ltr-title {\n  text-align: left !important;\n  margin-left: 0 !important;\n  margin-right: auto !important;\n  flex: 1 !important;\n}\n/*# sourceMappingURL=letters-confirmation-modal.component-2JMXEW7W.css.map */\n"] }]
  }], () => [{ type: TranslationService }], { data: [{
    type: Input
  }], confirm: [{
    type: Output
  }], cancel: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LettersConfirmationModalComponent, { className: "LettersConfirmationModalComponent", filePath: "src/app/components/letters/letters-confirmation-modal/letters-confirmation-modal.component.ts", lineNumber: 90 });
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
    const letterType_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("value", letterType_r4.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getLetterTypeLabel(letterType_r4.key), " ");
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
    \u0275\u0275textInterpolate1(" ", ctx_r2.getErrorMessage("letterType"), " ");
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
    \u0275\u0275textInterpolate1(" ", ctx_r2.getServerErrorMessage("letterType"), " ");
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
function AddLetter_ckeditor_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ckeditor", 32);
    \u0275\u0275twoWayListener("ngModelChange", function AddLetter_ckeditor_45_Template_ckeditor_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.editorContent, $event) || (ctx_r2.editorContent = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ready", function AddLetter_ckeditor_45_Template_ckeditor_ready_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onEditorReady($event));
    })("change", function AddLetter_ckeditor_45_Template_ckeditor_change_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onContentChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("editor", ctx_r2.Editor)("config", ctx_r2.config);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.editorContent);
  }
}
function AddLetter_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34)(2, "span", 35);
    \u0275\u0275text(3, "Loading editor...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "p", 36);
    \u0275\u0275text(5, "Loading editor...");
    \u0275\u0275elementEnd()();
  }
}
function AddLetter_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getErrorMessage("content"), " ");
  }
}
function AddLetter_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getServerErrorMessage("content"), " ");
  }
}
function AddLetter_div_49_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getErrorMessage("to"), " ");
  }
}
function AddLetter_div_49_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getServerErrorMessage("to"), " ");
  }
}
function AddLetter_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "label", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "span", 11);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "input", 37);
    \u0275\u0275template(6, AddLetter_div_49_div_6_Template, 2, 1, "div", 15)(7, AddLetter_div_49_div_7_Template, 2, 1, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.translate("letters.to"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("is-invalid", ctx_r2.isFieldValid("to") || ctx_r2.hasServerError("to"));
    \u0275\u0275property("placeholder", ctx_r2.translate("letters.to_placeholder"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isFieldValid("to"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.hasServerError("to"));
  }
}
function AddLetter_div_50_option_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r6 = ctx.$implicit;
    \u0275\u0275property("value", user_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", user_r6.name, " (", user_r6.departmentName, ") ");
  }
}
function AddLetter_div_50_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getErrorMessage("internalUserId"), " ");
  }
}
function AddLetter_div_50_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getServerErrorMessage("internalUserId"), " ");
  }
}
function AddLetter_div_50_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("common.loading"), "... ");
  }
}
function AddLetter_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "label", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "span", 11);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "select", 38)(6, "option", 13);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, AddLetter_div_50_option_8_Template, 2, 3, "option", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, AddLetter_div_50_div_9_Template, 2, 1, "div", 15)(10, AddLetter_div_50_div_10_Template, 2, 1, "div", 15)(11, AddLetter_div_50_div_11_Template, 2, 1, "div", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.translate("letters.internal_user"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("is-invalid", ctx_r2.isFieldValid("internalUserId") || ctx_r2.hasServerError("internalUserId"));
    \u0275\u0275property("disabled", ctx_r2.isLoadingUsers);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.translate("letters.select_user"));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.users);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isFieldValid("internalUserId"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.hasServerError("internalUserId"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isLoadingUsers);
  }
}
function AddLetter_div_57_Template(rf, ctx) {
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
function AddLetter_div_58_Template(rf, ctx) {
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
function AddLetter_div_63_Template(rf, ctx) {
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
function AddLetter_div_64_Template(rf, ctx) {
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
function AddLetter_div_69_Template(rf, ctx) {
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
function AddLetter_div_70_Template(rf, ctx) {
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
function AddLetter_div_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 41);
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
  usersService;
  cdr;
  langService;
  confirmationModal;
  letterAdded = new EventEmitter();
  // Custom modal properties
  isOpen = false;
  addForm;
  users = [];
  isLoadingUsers = false;
  currentLetterType = LetterType.External;
  // CKEditor 5 configuration
  Editor = null;
  config = null;
  editorContent = "";
  constructor(lettersService, fb, translationService, usersService, cdr, langService) {
    this.lettersService = lettersService;
    this.fb = fb;
    this.translationService = translationService;
    this.usersService = usersService;
    this.cdr = cdr;
    this.langService = langService;
  }
  ngAfterViewInit() {
    return __async(this, null, function* () {
      yield CKEditorService.initializeEditor();
      this.Editor = CKEditorService.getEditor();
      this.updateEditorConfig();
    });
  }
  updateEditorConfig() {
    const currentLang = this.langService.getCurrentLang();
    this.config = CKEditorService.getConfigForLanguage(currentLang);
  }
  open() {
    this.isOpen = true;
    this.loadUsers();
    this.updateEditorConfig();
    this.addForm.reset();
    this.currentLetterType = LetterType.External;
    this.addForm.patchValue({
      direction: LetterDirection.In,
      letterType: LetterType.External,
      letterDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
    });
    const toControl = this.addForm.get("to");
    const internalUserIdControl = this.addForm.get("internalUserId");
    toControl?.setValidators([Validators.required, Validators.email]);
    internalUserIdControl?.clearValidators();
    toControl?.updateValueAndValidity();
    internalUserIdControl?.updateValueAndValidity();
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
  letterTypes = [
    { key: LetterType.Internal, value: "Internal" },
    { key: LetterType.External, value: "External" }
  ];
  confidentialities = [
    { key: LetterConfidentiality.Public, value: "Public" },
    { key: LetterConfidentiality.Restricted, value: "Restricted" },
    { key: LetterConfidentiality.Secret, value: "Secret" }
  ];
  statuses = [
    { key: LetterStatus.Draft, value: "Draft" },
    { key: LetterStatus.PendingApproval, value: "PendingApproval" },
    { key: LetterStatus.Approved, value: "Approved" },
    { key: LetterStatus.Rejected, value: "Rejected" },
    { key: LetterStatus.Sent, value: "Sent" }
  ];
  ngOnInit() {
    this.initializeForm();
  }
  initializeForm() {
    this.addForm = this.fb.group({
      direction: ["", Validators.required],
      letterType: ["", Validators.required],
      subject: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
      content: ["", [Validators.required, Validators.minLength(10)]],
      body: [""],
      bodyHtml: [""],
      to: ["", [Validators.required, Validators.email]],
      cc: [""],
      bcc: [""],
      letterDate: ["", Validators.required],
      internalUserId: [""]
    });
    this.addForm.get("letterType")?.valueChanges.subscribe((letterType) => {
      this.currentLetterType = parseInt(letterType, 10);
      const toControl = this.addForm.get("to");
      const internalUserIdControl = this.addForm.get("internalUserId");
      if (this.currentLetterType === LetterType.Internal) {
        toControl?.clearValidators();
        toControl?.setValue("");
        internalUserIdControl?.setValidators([Validators.required]);
      } else {
        toControl?.setValidators([Validators.required, Validators.email]);
        internalUserIdControl?.clearValidators();
        internalUserIdControl?.setValue("");
      }
      toControl?.updateValueAndValidity();
      internalUserIdControl?.updateValueAndValidity();
      this.cdr.detectChanges();
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
  loadUsers() {
    this.isLoadingUsers = true;
    this.usersService.getUserNames().subscribe({
      next: (users) => {
        this.users = users;
        this.isLoadingUsers = false;
      },
      error: (error) => {
        console.error("Error loading users:", error);
        this.isLoadingUsers = false;
      }
    });
  }
  getErrorMessage(field) {
    const control = this.addForm.get(field);
    if (!control?.errors)
      return "";
    if (control.errors["required"]) {
      return this.translate("common.field_required");
    }
    if (control.errors["email"]) {
      return this.translate("common.invalid_email");
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
      letterType: parseInt(formValue.letterType),
      subject: formValue.subject,
      body: formValue.content || "",
      bodyHtml: this.editorContent || "",
      to: formValue.to || "",
      cc: formValue.cc || "",
      bcc: formValue.bcc || "",
      letterDate: new Date(formValue.letterDate).toISOString(),
      internalUserId: formValue.internalUserId || void 0
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
  getLetterTypeLabel(letterType) {
    return this.translate("letters.letter_types." + letterType);
  }
  isInternalLetter() {
    return this.currentLetterType === LetterType.Internal;
  }
  // CKEditor 5 event handlers
  onEditorReady(editor) {
    console.log("CKEditor 5 is ready to use!", editor);
    const editable = editor.editing.view.document.getRoot();
    const domElement = editor.editing.view.domConverter.viewToDom(editable);
    if (domElement) {
      domElement.style.minHeight = "600px";
      domElement.style.height = "600px";
      domElement.style.maxHeight = "800px";
    }
    const editorElement = editor.ui.element;
    if (editorElement) {
      const mainElement = editorElement.querySelector(".ck-editor__main");
      const editableElement = editorElement.querySelector(".ck-editor__editable");
      if (mainElement) {
        mainElement.style.minHeight = "600px";
        mainElement.style.height = "600px";
      }
      if (editableElement) {
        editableElement.style.minHeight = "600px";
        editableElement.style.height = "600px";
      }
    }
  }
  onContentChange(event) {
    if (event.editor) {
      const data = event.editor.getData();
      this.editorContent = data;
      this.addForm.patchValue({
        content: data,
        bodyHtml: data
      });
    }
  }
  static \u0275fac = function AddLetter_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddLetter)(\u0275\u0275directiveInject(LettersService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(UsersService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(LangService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddLetter, selectors: [["app-add-letter"]], viewQuery: function AddLetter_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.confirmationModal = _t.first);
    }
  }, outputs: { letterAdded: "letterAdded" }, standalone: false, decls: 79, vars: 62, consts: [["confirmationModal", ""], ["tabindex", "-1", "role", "dialog", 1, "modal", "fade", 3, "click"], ["role", "document", 1, "modal-dialog", "modal-lg", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header", "bg-primary", "text-white", 3, "dir"], [1, "modal-title"], [3, "ngSubmit", "formGroup"], [1, "modal-body"], [1, "row", "g-3"], [1, "col-md-6"], [1, "form-label"], [1, "text-danger"], ["formControlName", "direction", 1, "form-select"], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["formControlName", "letterType", 1, "form-select"], [1, "col-12"], ["type", "text", "formControlName", "subject", 1, "form-control", 3, "placeholder"], [1, "ckeditor-container"], [3, "editor", "config", "ngModel", "ngModelChange", "ready", "change", 4, "ngIf"], ["class", "text-center p-4", 4, "ngIf"], ["class", "col-md-6", 4, "ngIf"], ["type", "date", "formControlName", "letterDate", 1, "form-control"], ["type", "text", "formControlName", "cc", 1, "form-control", 3, "placeholder"], ["type", "text", "formControlName", "bcc", 1, "form-control", 3, "placeholder"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["class", "modal-backdrop fade", 3, "show", 4, "ngIf"], [3, "value"], [1, "invalid-feedback"], [3, "ngModelChange", "ready", "change", "editor", "config", "ngModel"], [1, "text-center", "p-4"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "mt-2", "text-muted"], ["type", "email", "formControlName", "to", 1, "form-control", 3, "placeholder"], ["formControlName", "internalUserId", 1, "form-select", 3, "disabled"], ["class", "form-text", 4, "ngIf"], [1, "form-text"], [1, "modal-backdrop", "fade"]], template: function AddLetter_Template(rf, ctx) {
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
      \u0275\u0275elementStart(44, "div", 19);
      \u0275\u0275template(45, AddLetter_ckeditor_45_Template, 1, 3, "ckeditor", 20)(46, AddLetter_div_46_Template, 6, 0, "div", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275template(47, AddLetter_div_47_Template, 2, 1, "div", 15)(48, AddLetter_div_48_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275template(49, AddLetter_div_49_Template, 8, 6, "div", 22)(50, AddLetter_div_50_Template, 12, 9, "div", 22);
      \u0275\u0275elementStart(51, "div", 9)(52, "label", 10);
      \u0275\u0275text(53);
      \u0275\u0275elementStart(54, "span", 11);
      \u0275\u0275text(55, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(56, "input", 23);
      \u0275\u0275template(57, AddLetter_div_57_Template, 2, 1, "div", 15)(58, AddLetter_div_58_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "div", 9)(60, "label", 10);
      \u0275\u0275text(61);
      \u0275\u0275elementEnd();
      \u0275\u0275element(62, "input", 24);
      \u0275\u0275template(63, AddLetter_div_63_Template, 2, 1, "div", 15)(64, AddLetter_div_64_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "div", 9)(66, "label", 10);
      \u0275\u0275text(67);
      \u0275\u0275elementEnd();
      \u0275\u0275element(68, "input", 25);
      \u0275\u0275template(69, AddLetter_div_69_Template, 2, 1, "div", 15)(70, AddLetter_div_70_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(71, "div", 26)(72, "button", 27);
      \u0275\u0275text(73);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "button", 28);
      \u0275\u0275listener("click", function AddLetter_Template_button_click_74_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.close());
      });
      \u0275\u0275text(75);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275template(76, AddLetter_div_76_Template, 1, 2, "div", 29);
      \u0275\u0275element(77, "app-letters-confirmation-modal", null, 0);
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
      \u0275\u0275textInterpolate1("", ctx.translate("letters.letter_type"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("is-invalid", ctx.isFieldValid("letterType") || ctx.hasServerError("letterType"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("letters.letter_type_required"));
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.letterTypes);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldValid("letterType"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasServerError("letterType"));
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
      \u0275\u0275classProp("is-invalid", ctx.isFieldValid("content") || ctx.hasServerError("content"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.Editor && ctx.config);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.Editor || !ctx.config);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldValid("content"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasServerError("content"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isInternalLetter());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isInternalLetter());
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
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.addForm.invalid);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.translate("letters.create"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.cancel"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isOpen);
    }
  }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, NgModel, CKEditorComponent, LettersConfirmationModalComponent], styles: [`@import "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap";



.ckeditor-container[_ngcontent-%COMP%] {
  width: 100%;
  max-width: 100%;
  min-width: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  border: 1px solid #CED4DA;
  border-radius: 0.5rem;
  overflow: hidden;
  background: #fff;
  min-height: 650px;
}
.ckeditor-container.is-invalid[_ngcontent-%COMP%] {
  border-color: #dc3545;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor[_ngcontent-%COMP%] {
  width: 100%;
  max-width: 100%;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__main[_ngcontent-%COMP%] {
  width: 100%;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%] {
  min-height: 600px !important;
  max-height: 800px !important;
  height: 600px !important;
  overflow-y: auto;
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    sans-serif;
  font-size: 14px;
  line-height: 1.6;
  background: #fff;
  border: none;
  padding: 24px;
}
.rtl[_ngcontent-%COMP%]   .ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%] {
  direction: rtl;
  text-align: right;
}
.ltr[_ngcontent-%COMP%]   .ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%] {
  direction: ltr;
  text-align: left;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[dir=rtl][_ngcontent-%COMP%] {
  direction: rtl;
  text-align: right;
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    sans-serif;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[dir=ltr][_ngcontent-%COMP%] {
  direction: ltr;
  text-align: left;
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    sans-serif;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-toolbar[_ngcontent-%COMP%] {
  background: #F8F9FA;
  border-bottom: 1px solid #E5E7EB;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  padding: 8px;
  flex-wrap: wrap;
  gap: 5px;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-toolbar__separator[_ngcontent-%COMP%] {
  background: #dee2e6;
  margin: 0 4px;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-button[_ngcontent-%COMP%] {
  border-radius: 3px;
  transition: all 0.2s ease;
  min-width: 28px;
  height: 28px;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-button[_ngcontent-%COMP%]:hover {
  background-color: #e9ecef;
  transform: scale(1.05);
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-button.ck-on[_ngcontent-%COMP%] {
  background-color: #B68A35;
  color: white;
  box-shadow: 0 2px 4px rgba(212, 170, 58, 0.3);
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-dropdown__panel[_ngcontent-%COMP%] {
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-list__item[_ngcontent-%COMP%] {
  padding: 6px 12px;
  cursor: pointer;
  text-align: right;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-list__item[_ngcontent-%COMP%]:hover {
  background-color: #f0f0f0;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {
  border-collapse: collapse;
  margin: 10px 0;
  width: 100%;
  max-width: 100%;
  table-layout: fixed;
  direction: rtl;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], 
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: right;
  vertical-align: top;
  min-width: 50px;
  word-wrap: break-word;
  position: relative;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {
  background-color: #f5f5f5;
  font-weight: bold;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .table-selected[_ngcontent-%COMP%] {
  background-color: rgba(0, 123, 255, 0.1) !important;
  border: 2px solid #007bff !important;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-table-toolbar[_ngcontent-%COMP%] {
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 5px;
  z-index: 1000;
  min-width: 200px;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-table-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
  margin: 2px;
  padding: 6px 12px;
  font-size: 12px;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
  border-radius: 3px;
  display: block;
  width: 100%;
  text-align: right;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-table-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {
  background: #f0f0f0;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-font-family-dropdown[_ngcontent-%COMP%] {
  min-width: 120px;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-font-size-dropdown[_ngcontent-%COMP%] {
  min-width: 80px;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-color-picker[_ngcontent-%COMP%] {
  width: 28px;
  height: 28px;
  padding: 0;
  border: 1px solid #ccc;
  border-radius: 3px;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-special-characters-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30px, 1fr));
  gap: 2px;
  padding: 10px;
  max-height: 200px;
  overflow-y: auto;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-special-characters-grid[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
  width: 30px;
  height: 30px;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
  border-radius: 3px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-special-characters-grid[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {
  background: #f0f0f0;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   .page-break[_ngcontent-%COMP%] {
  display: block;
  margin: 20px 0;
  text-align: center;
  border: none;
  border-top: 2px dashed #ccc;
  color: #666;
  font-size: 12px;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   .page-break[_ngcontent-%COMP%]::before {
  content: "--- Page Break ---";
  background: white;
  padding: 0 10px;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {
  border-left: 4px solid #ced4da;
  padding-left: 15px;
  margin-left: 0;
  margin-right: 15px;
  font-style: italic;
  color: #6c757d;
  direction: rtl;
  border-right: 4px solid #ced4da;
  border-left: none;
  padding-right: 15px;
  padding-left: 0;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 4px;
  padding: 12px;
  font-family:
    "Courier New",
    Courier,
    monospace;
  font-size: 13px;
  line-height: 1.4;
  overflow-x: auto;
  direction: ltr;
  text-align: left;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], 
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {
  margin: 0 0 1rem 0;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {
  list-style-type: disc;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {
  list-style-type: decimal;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  margin: 0;
  padding: 0.25rem 0;
}
.rtl[_ngcontent-%COMP%]   .ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], 
.rtl[_ngcontent-%COMP%]   .ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {
  padding-inline-start: 0;
  padding-inline-end: 2.5rem;
  direction: rtl;
}
.rtl[_ngcontent-%COMP%]   .ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {
  padding-inline-end: 3rem;
}
.rtl[_ngcontent-%COMP%]   .ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  padding-inline-end: 0.5rem;
}
.rtl[_ngcontent-%COMP%]   .ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  padding-inline-end: 0.5rem;
  margin-inline-end: 0.5rem;
}
.ltr[_ngcontent-%COMP%]   .ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], 
.ltr[_ngcontent-%COMP%]   .ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {
  padding-inline-start: 2.5rem;
  padding-inline-end: 0;
  direction: ltr;
}
.ltr[_ngcontent-%COMP%]   .ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {
  padding-inline-start: 3rem;
}
.ltr[_ngcontent-%COMP%]   .ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  padding-inline-start: 0.5rem;
}
.ltr[_ngcontent-%COMP%]   .ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  padding-inline-start: 0.5rem;
  margin-inline-start: 0.5rem;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], 
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], 
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], 
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], 
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], 
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {
  margin: 0 0 0.5rem 0;
  font-weight: 600;
  line-height: 1.2;
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    sans-serif;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
  font-size: 2rem;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  font-size: 1.75rem;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  font-size: 1.5rem;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {
  font-size: 1.25rem;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {
  font-size: 1rem;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {
  font-size: 0.875rem;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {
  color: #B68A35;
  text-decoration: none;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {
  text-decoration: underline;
}
@media (max-width: 768px) {
  .ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%] {
    min-height: 450px;
    max-height: 600px;
    padding: 12px;
  }
  .ckeditor-container[_ngcontent-%COMP%]   .ck-toolbar[_ngcontent-%COMP%] {
    padding: 4px;
    flex-wrap: wrap;
  }
  .ckeditor-container[_ngcontent-%COMP%]   .ck-button[_ngcontent-%COMP%] {
    min-width: 24px;
    height: 24px;
    font-size: 12px;
  }
}
.ck-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {
  list-style-type: decimal !important;
  direction: rtl;
  unicode-bidi: bidi-override;
  padding-right: 20px;
}
.ck-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {
  list-style-type: disc !important;
  direction: rtl;
  unicode-bidi: bidi-override;
  padding-right: 20px;
}
.ckeditor-container[_ngcontent-%COMP%]:focus-within {
  border-color: #B68A35;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(212, 170, 58, 0.25);
}
.ckeditor-container.is-invalid[_ngcontent-%COMP%] {
  border-color: #dc3545;
}
.ckeditor-container.is-invalid[_ngcontent-%COMP%]:focus-within {
  border-color: #dc3545;
  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
}



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
  max-width: 1200px;
  width: 90vw;
}
.modal-header[_ngcontent-%COMP%] {
  background: #D4AF5F !important;
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
  max-height: 85vh;
  min-height: 60vh;
  overflow-y: auto;
  width: 100%;
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
  border-color: #B68A35;
  box-shadow: 0 0 0 0.2rem rgba(212, 170, 58, 0.25);
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
  background-color: #B68A35;
  border-color: #B68A35;
  color: #fff;
}
.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {
  background-color: #B68A35;
  border-color: #B68A35;
}
.btn-primary[_ngcontent-%COMP%]:disabled {
  background-color: #6c757d;
  border-color: #6c757d;
  opacity: 0.65;
}
.btn-secondary[_ngcontent-%COMP%] {
  background-color: transparent;
  color: #1B1D21 !important;
  border: 1px solid #1B1D21 !important;
}
.btn-secondary[_ngcontent-%COMP%]:hover {
  background-color: #1B1D21;
  color: #FFFFFF !important;
}
.text-danger[_ngcontent-%COMP%] {
  color: #dc3545 !important;
}
.row.g-3[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
  padding: 0.75rem;
}
.col-12[_ngcontent-%COMP%] {
  width: 100%;
  max-width: 100%;
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
    width: calc(100% - 1rem);
  }
  .modal-body[_ngcontent-%COMP%] {
    padding: 1rem;
    max-height: 70vh;
    min-height: 50vh;
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
  border-color: #B68A35;
  box-shadow: 0 0 0 0.2rem rgba(212, 170, 58, 0.25);
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
/*# sourceMappingURL=add-letter-NQS6LSAF.css.map */`] });
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
                <option value="" disabled>{{ translate('letters.direction_required') }}</option>\r
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
            <!-- Letter Type -->\r
            <div class="col-md-6">\r
              <label class="form-label">{{ translate('letters.letter_type') }} <span class="text-danger">*</span></label>\r
              <select class="form-select" formControlName="letterType" \r
                      [class.is-invalid]="isFieldValid('letterType') || hasServerError('letterType')">\r
                <option value="" disabled>{{ translate('letters.letter_type_required') }}</option>\r
                <option *ngFor="let letterType of letterTypes" [value]="letterType.key">\r
                  {{ getLetterTypeLabel(letterType.key) }}\r
                </option>\r
              </select>\r
              <div class="invalid-feedback" *ngIf="isFieldValid('letterType')">\r
                {{ getErrorMessage('letterType') }}\r
              </div>\r
              <div class="invalid-feedback" *ngIf="hasServerError('letterType')">\r
                {{ getServerErrorMessage('letterType') }}\r
              </div>\r
            </div>\r
\r
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
              <div class="ckeditor-container" [class.is-invalid]="isFieldValid('content') || hasServerError('content')">\r
                <ckeditor\r
                  *ngIf="Editor && config"\r
                  [editor]="Editor"\r
                  [config]="config"\r
                  [(ngModel)]="editorContent"\r
                  (ready)="onEditorReady($event)"\r
                  (change)="onContentChange($event)">\r
                </ckeditor>\r
                <div *ngIf="!Editor || !config" class="text-center p-4">\r
                  <div class="spinner-border text-primary" role="status">\r
                    <span class="visually-hidden">Loading editor...</span>\r
                  </div>\r
                  <p class="mt-2 text-muted">Loading editor...</p>\r
                </div>\r
              </div>\r
              <div class="invalid-feedback" *ngIf="isFieldValid('content')">\r
                {{ getErrorMessage('content') }}\r
              </div>\r
              <div class="invalid-feedback" *ngIf="hasServerError('content')">\r
                {{ getServerErrorMessage('content') }}\r
              </div>\r
            </div>\r
\r
            <!-- To (External Letters Only) -->\r
            <div class="col-md-6" *ngIf="!isInternalLetter()">\r
              <label class="form-label">{{ translate('letters.to') }} <span class="text-danger">*</span></label>\r
              <input type="email" class="form-control" formControlName="to" \r
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
            <!-- Internal User (Internal Letters Only) -->\r
            <div class="col-md-6" *ngIf="isInternalLetter()">\r
              <label class="form-label">{{ translate('letters.internal_user') }} <span class="text-danger">*</span></label>\r
              <select class="form-select" formControlName="internalUserId" \r
                      [class.is-invalid]="isFieldValid('internalUserId') || hasServerError('internalUserId')"\r
                      [disabled]="isLoadingUsers">\r
                <option value="" disabled>{{ translate('letters.select_user') }}</option>\r
                <option *ngFor="let user of users" [value]="user.id">\r
                  {{ user.name }} ({{ user.departmentName }})\r
                </option>\r
              </select>\r
              <div class="invalid-feedback" *ngIf="isFieldValid('internalUserId')">\r
                {{ getErrorMessage('internalUserId') }}\r
              </div>\r
              <div class="invalid-feedback" *ngIf="hasServerError('internalUserId')">\r
                {{ getServerErrorMessage('internalUserId') }}\r
              </div>\r
              <div class="form-text" *ngIf="isLoadingUsers">\r
                {{ translate('common.loading') }}...\r
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
\r
          </div>\r
        </div>\r
        \r
        <div class="modal-footer">\r
          \r
          <button type="submit" class="btn btn-primary" [disabled]="addForm.invalid">\r
            {{ translate('letters.create') }}\r
          </button>\r
          <button type="button" class="btn btn-secondary" (click)="close()">\r
            {{ translate('common.cancel') }}\r
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
`, styles: [`@import "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap";

/* src/app/components/letters/shared/ckeditor-styles.css */
.ckeditor-container {
  width: 100%;
  max-width: 100%;
  min-width: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  border: 1px solid #CED4DA;
  border-radius: 0.5rem;
  overflow: hidden;
  background: #fff;
  min-height: 650px;
}
.ckeditor-container.is-invalid {
  border-color: #dc3545;
}
.ckeditor-container .ck-editor {
  width: 100%;
  max-width: 100%;
}
.ckeditor-container .ck-editor__main {
  width: 100%;
}
.ckeditor-container .ck-editor__editable {
  min-height: 600px !important;
  max-height: 800px !important;
  height: 600px !important;
  overflow-y: auto;
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    sans-serif;
  font-size: 14px;
  line-height: 1.6;
  background: #fff;
  border: none;
  padding: 24px;
}
.rtl .ckeditor-container .ck-editor__editable {
  direction: rtl;
  text-align: right;
}
.ltr .ckeditor-container .ck-editor__editable {
  direction: ltr;
  text-align: left;
}
.ckeditor-container .ck-editor__editable[dir=rtl] {
  direction: rtl;
  text-align: right;
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    sans-serif;
}
.ckeditor-container .ck-editor__editable[dir=ltr] {
  direction: ltr;
  text-align: left;
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    sans-serif;
}
.ckeditor-container .ck-toolbar {
  background: #F8F9FA;
  border-bottom: 1px solid #E5E7EB;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  padding: 8px;
  flex-wrap: wrap;
  gap: 5px;
}
.ckeditor-container .ck-toolbar__separator {
  background: #dee2e6;
  margin: 0 4px;
}
.ckeditor-container .ck-button {
  border-radius: 3px;
  transition: all 0.2s ease;
  min-width: 28px;
  height: 28px;
}
.ckeditor-container .ck-button:hover {
  background-color: #e9ecef;
  transform: scale(1.05);
}
.ckeditor-container .ck-button.ck-on {
  background-color: #B68A35;
  color: white;
  box-shadow: 0 2px 4px rgba(212, 170, 58, 0.3);
}
.ckeditor-container .ck-dropdown__panel {
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}
.ckeditor-container .ck-list__item {
  padding: 6px 12px;
  cursor: pointer;
  text-align: right;
}
.ckeditor-container .ck-list__item:hover {
  background-color: #f0f0f0;
}
.ckeditor-container .ck-editor__editable table {
  border-collapse: collapse;
  margin: 10px 0;
  width: 100%;
  max-width: 100%;
  table-layout: fixed;
  direction: rtl;
}
.ckeditor-container .ck-editor__editable table td,
.ckeditor-container .ck-editor__editable table th {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: right;
  vertical-align: top;
  min-width: 50px;
  word-wrap: break-word;
  position: relative;
}
.ckeditor-container .ck-editor__editable table th {
  background-color: #f5f5f5;
  font-weight: bold;
}
.ckeditor-container .ck-editor__editable table .table-selected {
  background-color: rgba(0, 123, 255, 0.1) !important;
  border: 2px solid #007bff !important;
}
.ckeditor-container .ck-table-toolbar {
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 5px;
  z-index: 1000;
  min-width: 200px;
}
.ckeditor-container .ck-table-toolbar button {
  margin: 2px;
  padding: 6px 12px;
  font-size: 12px;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
  border-radius: 3px;
  display: block;
  width: 100%;
  text-align: right;
}
.ckeditor-container .ck-table-toolbar button:hover {
  background: #f0f0f0;
}
.ckeditor-container .ck-font-family-dropdown {
  min-width: 120px;
}
.ckeditor-container .ck-font-size-dropdown {
  min-width: 80px;
}
.ckeditor-container .ck-color-picker {
  width: 28px;
  height: 28px;
  padding: 0;
  border: 1px solid #ccc;
  border-radius: 3px;
}
.ckeditor-container .ck-special-characters-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30px, 1fr));
  gap: 2px;
  padding: 10px;
  max-height: 200px;
  overflow-y: auto;
}
.ckeditor-container .ck-special-characters-grid button {
  width: 30px;
  height: 30px;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
  border-radius: 3px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.ckeditor-container .ck-special-characters-grid button:hover {
  background: #f0f0f0;
}
.ckeditor-container .ck-editor__editable .page-break {
  display: block;
  margin: 20px 0;
  text-align: center;
  border: none;
  border-top: 2px dashed #ccc;
  color: #666;
  font-size: 12px;
}
.ckeditor-container .ck-editor__editable .page-break::before {
  content: "--- Page Break ---";
  background: white;
  padding: 0 10px;
}
.ckeditor-container .ck-editor__editable blockquote {
  border-left: 4px solid #ced4da;
  padding-left: 15px;
  margin-left: 0;
  margin-right: 15px;
  font-style: italic;
  color: #6c757d;
  direction: rtl;
  border-right: 4px solid #ced4da;
  border-left: none;
  padding-right: 15px;
  padding-left: 0;
}
.ckeditor-container .ck-editor__editable pre {
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 4px;
  padding: 12px;
  font-family:
    "Courier New",
    Courier,
    monospace;
  font-size: 13px;
  line-height: 1.4;
  overflow-x: auto;
  direction: ltr;
  text-align: left;
}
.ckeditor-container .ck-editor__editable ul,
.ckeditor-container .ck-editor__editable ol {
  margin: 0 0 1rem 0;
}
.ckeditor-container .ck-editor__editable ul {
  list-style-type: disc;
}
.ckeditor-container .ck-editor__editable ol {
  list-style-type: decimal;
}
.ckeditor-container .ck-editor__editable li {
  margin: 0;
  padding: 0.25rem 0;
}
.rtl .ckeditor-container .ck-editor__editable ul,
.rtl .ckeditor-container .ck-editor__editable ol {
  padding-inline-start: 0;
  padding-inline-end: 2.5rem;
  direction: rtl;
}
.rtl .ckeditor-container .ck-editor__editable ol {
  padding-inline-end: 3rem;
}
.rtl .ckeditor-container .ck-editor__editable li {
  padding-inline-end: 0.5rem;
}
.rtl .ckeditor-container .ck-editor__editable ol li {
  padding-inline-end: 0.5rem;
  margin-inline-end: 0.5rem;
}
.ltr .ckeditor-container .ck-editor__editable ul,
.ltr .ckeditor-container .ck-editor__editable ol {
  padding-inline-start: 2.5rem;
  padding-inline-end: 0;
  direction: ltr;
}
.ltr .ckeditor-container .ck-editor__editable ol {
  padding-inline-start: 3rem;
}
.ltr .ckeditor-container .ck-editor__editable li {
  padding-inline-start: 0.5rem;
}
.ltr .ckeditor-container .ck-editor__editable ol li {
  padding-inline-start: 0.5rem;
  margin-inline-start: 0.5rem;
}
.ckeditor-container .ck-editor__editable h1,
.ckeditor-container .ck-editor__editable h2,
.ckeditor-container .ck-editor__editable h3,
.ckeditor-container .ck-editor__editable h4,
.ckeditor-container .ck-editor__editable h5,
.ckeditor-container .ck-editor__editable h6 {
  margin: 0 0 0.5rem 0;
  font-weight: 600;
  line-height: 1.2;
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    sans-serif;
}
.ckeditor-container .ck-editor__editable h1 {
  font-size: 2rem;
}
.ckeditor-container .ck-editor__editable h2 {
  font-size: 1.75rem;
}
.ckeditor-container .ck-editor__editable h3 {
  font-size: 1.5rem;
}
.ckeditor-container .ck-editor__editable h4 {
  font-size: 1.25rem;
}
.ckeditor-container .ck-editor__editable h5 {
  font-size: 1rem;
}
.ckeditor-container .ck-editor__editable h6 {
  font-size: 0.875rem;
}
.ckeditor-container .ck-editor__editable a {
  color: #B68A35;
  text-decoration: none;
}
.ckeditor-container .ck-editor__editable a:hover {
  text-decoration: underline;
}
@media (max-width: 768px) {
  .ckeditor-container .ck-editor__editable {
    min-height: 450px;
    max-height: 600px;
    padding: 12px;
  }
  .ckeditor-container .ck-toolbar {
    padding: 4px;
    flex-wrap: wrap;
  }
  .ckeditor-container .ck-button {
    min-width: 24px;
    height: 24px;
    font-size: 12px;
  }
}
.ck-content ol {
  list-style-type: decimal !important;
  direction: rtl;
  unicode-bidi: bidi-override;
  padding-right: 20px;
}
.ck-content ul {
  list-style-type: disc !important;
  direction: rtl;
  unicode-bidi: bidi-override;
  padding-right: 20px;
}
.ckeditor-container:focus-within {
  border-color: #B68A35;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(212, 170, 58, 0.25);
}
.ckeditor-container.is-invalid {
  border-color: #dc3545;
}
.ckeditor-container.is-invalid:focus-within {
  border-color: #dc3545;
  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
}

/* src/app/components/letters/add-letter/add-letter.css */
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
  max-width: 1200px;
  width: 90vw;
}
.modal-header {
  background: #D4AF5F !important;
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
  max-height: 85vh;
  min-height: 60vh;
  overflow-y: auto;
  width: 100%;
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
  border-color: #B68A35;
  box-shadow: 0 0 0 0.2rem rgba(212, 170, 58, 0.25);
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
  background-color: #B68A35;
  border-color: #B68A35;
  color: #fff;
}
.btn-primary:hover:not(:disabled) {
  background-color: #B68A35;
  border-color: #B68A35;
}
.btn-primary:disabled {
  background-color: #6c757d;
  border-color: #6c757d;
  opacity: 0.65;
}
.btn-secondary {
  background-color: transparent;
  color: #1B1D21 !important;
  border: 1px solid #1B1D21 !important;
}
.btn-secondary:hover {
  background-color: #1B1D21;
  color: #FFFFFF !important;
}
.text-danger {
  color: #dc3545 !important;
}
.row.g-3 > * {
  padding: 0.75rem;
}
.col-12 {
  width: 100%;
  max-width: 100%;
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
    width: calc(100% - 1rem);
  }
  .modal-body {
    padding: 1rem;
    max-height: 70vh;
    min-height: 50vh;
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
  border-color: #B68A35;
  box-shadow: 0 0 0 0.2rem rgba(212, 170, 58, 0.25);
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
/*# sourceMappingURL=add-letter-NQS6LSAF.css.map */
`] }]
  }], () => [{ type: LettersService }, { type: FormBuilder }, { type: TranslationService }, { type: UsersService }, { type: ChangeDetectorRef }, { type: LangService }], { confirmationModal: [{
    type: ViewChild,
    args: ["confirmationModal"]
  }], letterAdded: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddLetter, { className: "AddLetter", filePath: "src/app/components/letters/add-letter/add-letter.ts", lineNumber: 17 });
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
    const letterType_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("value", letterType_r4.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getLetterTypeLabel(letterType_r4.key), " ");
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
    \u0275\u0275textInterpolate1(" ", ctx_r2.getErrorMessage("letterType"), " ");
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
    \u0275\u0275textInterpolate1(" ", ctx_r2.getServerErrorMessage("letterType"), " ");
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
function EditLetter_ckeditor_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ckeditor", 34);
    \u0275\u0275twoWayListener("ngModelChange", function EditLetter_ckeditor_45_Template_ckeditor_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.editorContent, $event) || (ctx_r2.editorContent = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ready", function EditLetter_ckeditor_45_Template_ckeditor_ready_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onEditorReady($event));
    })("change", function EditLetter_ckeditor_45_Template_ckeditor_change_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onContentChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("editor", ctx_r2.Editor)("config", ctx_r2.config);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.editorContent);
  }
}
function EditLetter_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 36)(2, "span", 37);
    \u0275\u0275text(3, "Loading editor...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "p", 38);
    \u0275\u0275text(5, "Loading editor...");
    \u0275\u0275elementEnd()();
  }
}
function EditLetter_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getErrorMessage("content"), " ");
  }
}
function EditLetter_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getServerErrorMessage("content"), " ");
  }
}
function EditLetter_div_49_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getErrorMessage("to"), " ");
  }
}
function EditLetter_div_49_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getServerErrorMessage("to"), " ");
  }
}
function EditLetter_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "label", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "span", 11);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "input", 39);
    \u0275\u0275template(6, EditLetter_div_49_div_6_Template, 2, 1, "div", 15)(7, EditLetter_div_49_div_7_Template, 2, 1, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.translate("letters.to"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("is-invalid", ctx_r2.isFieldValid("to") || ctx_r2.hasServerError("to"));
    \u0275\u0275property("placeholder", ctx_r2.translate("letters.to_placeholder"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isFieldValid("to"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.hasServerError("to"));
  }
}
function EditLetter_div_50_option_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r6 = ctx.$implicit;
    \u0275\u0275property("value", user_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", user_r6.name, " (", user_r6.departmentName, ") ");
  }
}
function EditLetter_div_50_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getErrorMessage("internalUserId"), " ");
  }
}
function EditLetter_div_50_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getServerErrorMessage("internalUserId"), " ");
  }
}
function EditLetter_div_50_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("common.loading"), "... ");
  }
}
function EditLetter_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "label", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "span", 11);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "select", 40)(6, "option", 41);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, EditLetter_div_50_option_8_Template, 2, 3, "option", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, EditLetter_div_50_div_9_Template, 2, 1, "div", 15)(10, EditLetter_div_50_div_10_Template, 2, 1, "div", 15)(11, EditLetter_div_50_div_11_Template, 2, 1, "div", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.translate("letters.internal_user"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("is-invalid", ctx_r2.isFieldValid("internalUserId") || ctx_r2.hasServerError("internalUserId"));
    \u0275\u0275property("disabled", ctx_r2.isLoadingUsers);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.translate("letters.select_user"));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.users);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isFieldValid("internalUserId"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.hasServerError("internalUserId"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isLoadingUsers);
  }
}
function EditLetter_div_57_Template(rf, ctx) {
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
function EditLetter_div_58_Template(rf, ctx) {
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
function EditLetter_div_63_Template(rf, ctx) {
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
function EditLetter_div_64_Template(rf, ctx) {
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
function EditLetter_div_69_Template(rf, ctx) {
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
function EditLetter_div_70_Template(rf, ctx) {
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
function EditLetter_div_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 44);
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
  usersService;
  langService;
  confirmationModal;
  letterUpdated = new EventEmitter();
  // Custom modal properties
  isOpen = false;
  currentLetter = null;
  editForm;
  users = [];
  isLoadingUsers = false;
  currentLetterType = LetterType.External;
  // CKEditor 5 configuration
  Editor = null;
  config = null;
  editorContent = "";
  constructor(lettersService, fb, translationService, usersService, langService) {
    this.lettersService = lettersService;
    this.fb = fb;
    this.translationService = translationService;
    this.usersService = usersService;
    this.langService = langService;
  }
  ngAfterViewInit() {
    return __async(this, null, function* () {
      yield CKEditorService.initializeEditor();
      this.Editor = CKEditorService.getEditor();
      this.updateEditorConfig();
    });
  }
  updateEditorConfig() {
    const currentLang = this.langService.getCurrentLang();
    this.config = CKEditorService.getConfigForLanguage(currentLang);
  }
  open(letter) {
    this.currentLetter = letter;
    this.isOpen = true;
    this.updateEditorConfig();
    this.initializeForm();
    this.populateForm(letter);
    this.loadUsers();
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
  letterTypes = [
    { key: LetterType.Internal, value: "Internal" },
    { key: LetterType.External, value: "External" }
  ];
  confidentialities = [
    { key: LetterConfidentiality.Public, value: "Public" },
    { key: LetterConfidentiality.Restricted, value: "Restricted" },
    { key: LetterConfidentiality.Secret, value: "Secret" }
  ];
  statuses = [
    { key: LetterStatus.Draft, value: "Draft" },
    { key: LetterStatus.PendingApproval, value: "PendingApproval" },
    { key: LetterStatus.Approved, value: "Approved" },
    { key: LetterStatus.Rejected, value: "Rejected" },
    { key: LetterStatus.Sent, value: "Sent" }
  ];
  ngOnInit() {
    this.initializeForm();
  }
  initializeForm() {
    this.editForm = this.fb.group({
      direction: ["", Validators.required],
      letterType: ["", Validators.required],
      subject: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
      content: ["", [Validators.required, Validators.minLength(10)]],
      body: [""],
      bodyHtml: [""],
      to: ["", [Validators.required, Validators.email]],
      cc: [""],
      bcc: [""],
      letterDate: ["", Validators.required],
      internalUserId: [""]
    });
    this.editForm.get("letterType")?.valueChanges.subscribe((letterType) => {
      this.currentLetterType = parseInt(letterType, 10);
      const toControl = this.editForm.get("to");
      const internalUserIdControl = this.editForm.get("internalUserId");
      if (this.currentLetterType === LetterType.Internal) {
        toControl?.clearValidators();
        toControl?.setValue("");
        internalUserIdControl?.setValidators([Validators.required]);
      } else {
        toControl?.setValidators([Validators.required, Validators.email]);
        internalUserIdControl?.clearValidators();
        internalUserIdControl?.setValue("");
      }
      toControl?.updateValueAndValidity();
      internalUserIdControl?.updateValueAndValidity();
    });
  }
  populateForm(letter) {
    const letterDate = new Date(letter.letterDate);
    const formattedDate = letterDate.toISOString().split("T")[0];
    const letterType = letter.letterType || LetterType.External;
    this.currentLetterType = letterType;
    this.editForm.patchValue({
      direction: letter.direction,
      letterType,
      subject: letter.subject,
      content: letter.body,
      body: letter.body,
      bodyHtml: letter.bodyHtml || "",
      to: letter.to,
      cc: letter.cc || "",
      bcc: letter.bcc || "",
      letterDate: formattedDate,
      internalUserId: letter.internalUserId || ""
    });
    this.editorContent = letter.bodyHtml || "";
    const toControl = this.editForm.get("to");
    const internalUserIdControl = this.editForm.get("internalUserId");
    if (letterType === LetterType.Internal) {
      toControl?.clearValidators();
      internalUserIdControl?.setValidators([Validators.required]);
    } else {
      toControl?.setValidators([Validators.required, Validators.email]);
      internalUserIdControl?.clearValidators();
    }
    toControl?.updateValueAndValidity();
    internalUserIdControl?.updateValueAndValidity();
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
  loadUsers() {
    this.isLoadingUsers = true;
    this.usersService.getUserNames().subscribe({
      next: (users) => {
        this.users = users;
        this.isLoadingUsers = false;
      },
      error: (error) => {
        console.error("Error loading users:", error);
        this.isLoadingUsers = false;
      }
    });
  }
  getErrorMessage(field) {
    const control = this.editForm.get(field);
    if (!control?.errors)
      return "";
    if (control.errors["required"]) {
      return this.translate("common.field_required");
    }
    if (control.errors["email"]) {
      return this.translate("common.invalid_email");
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
      letterType: parseInt(formValue.letterType),
      subject: formValue.subject,
      body: formValue.content || "",
      bodyHtml: this.editorContent || "",
      to: formValue.to || "",
      cc: formValue.cc || "",
      bcc: formValue.bcc || "",
      letterDate: new Date(formValue.letterDate).toISOString(),
      internalUserId: formValue.internalUserId || void 0
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
  getLetterTypeLabel(letterType) {
    return this.translate("letters.letter_types." + letterType);
  }
  isInternalLetter() {
    return this.currentLetterType === LetterType.Internal;
  }
  // CKEditor 5 event handlers
  onEditorReady(editor) {
    console.log("CKEditor 5 is ready to use!", editor);
    const editable = editor.editing.view.document.getRoot();
    const domElement = editor.editing.view.domConverter.viewToDom(editable);
    if (domElement) {
      domElement.style.minHeight = "600px";
      domElement.style.height = "600px";
      domElement.style.maxHeight = "800px";
    }
    const editorElement = editor.ui.element;
    if (editorElement) {
      const mainElement = editorElement.querySelector(".ck-editor__main");
      const editableElement = editorElement.querySelector(".ck-editor__editable");
      if (mainElement) {
        mainElement.style.minHeight = "600px";
        mainElement.style.height = "600px";
      }
      if (editableElement) {
        editableElement.style.minHeight = "600px";
        editableElement.style.height = "600px";
      }
    }
  }
  onContentChange(event) {
    if (event.editor) {
      const data = event.editor.getData();
      this.editorContent = data;
      this.editForm.patchValue({
        content: data,
        bodyHtml: data
      });
    }
  }
  static \u0275fac = function EditLetter_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditLetter)(\u0275\u0275directiveInject(LettersService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(UsersService), \u0275\u0275directiveInject(LangService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditLetter, selectors: [["app-edit-letter"]], viewQuery: function EditLetter_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.confirmationModal = _t.first);
    }
  }, outputs: { letterUpdated: "letterUpdated" }, standalone: false, decls: 81, vars: 62, consts: [["confirmationModal", ""], ["tabindex", "-1", "role", "dialog", 1, "modal", "fade", 3, "click"], ["role", "document", 1, "modal-dialog", "modal-lg", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header", "bg-warning", "text-dark", 3, "dir"], [1, "modal-title"], [3, "ngSubmit", "formGroup"], [1, "modal-body"], [1, "row", "g-3"], [1, "col-md-6"], [1, "form-label"], [1, "text-danger"], ["formControlName", "direction", 1, "form-select"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["formControlName", "letterType", 1, "form-select"], [1, "col-12"], ["type", "text", "formControlName", "subject", 1, "form-control", 3, "placeholder"], [1, "ckeditor-container"], [3, "editor", "config", "ngModel", "ngModelChange", "ready", "change", 4, "ngIf"], ["class", "text-center p-4", 4, "ngIf"], ["class", "col-md-6", 4, "ngIf"], ["type", "date", "formControlName", "letterDate", 1, "form-control"], ["type", "text", "formControlName", "cc", 1, "form-control", 3, "placeholder"], ["type", "text", "formControlName", "bcc", 1, "form-control", 3, "placeholder"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-warning", 3, "disabled"], [1, "fas", "fa-save", "me-2"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "fas", "fa-times", "me-2"], ["class", "modal-backdrop fade", 3, "show", 4, "ngIf"], [3, "value"], [1, "invalid-feedback"], [3, "ngModelChange", "ready", "change", "editor", "config", "ngModel"], [1, "text-center", "p-4"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "mt-2", "text-muted"], ["type", "email", "formControlName", "to", 1, "form-control", 3, "placeholder"], ["formControlName", "internalUserId", 1, "form-select", 3, "disabled"], ["value", "", "disabled", ""], ["class", "form-text", 4, "ngIf"], [1, "form-text"], [1, "modal-backdrop", "fade"]], template: function EditLetter_Template(rf, ctx) {
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
      \u0275\u0275elementStart(44, "div", 19);
      \u0275\u0275template(45, EditLetter_ckeditor_45_Template, 1, 3, "ckeditor", 20)(46, EditLetter_div_46_Template, 6, 0, "div", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275template(47, EditLetter_div_47_Template, 2, 1, "div", 15)(48, EditLetter_div_48_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275template(49, EditLetter_div_49_Template, 8, 6, "div", 22)(50, EditLetter_div_50_Template, 12, 9, "div", 22);
      \u0275\u0275elementStart(51, "div", 9)(52, "label", 10);
      \u0275\u0275text(53);
      \u0275\u0275elementStart(54, "span", 11);
      \u0275\u0275text(55, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(56, "input", 23);
      \u0275\u0275template(57, EditLetter_div_57_Template, 2, 1, "div", 15)(58, EditLetter_div_58_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "div", 9)(60, "label", 10);
      \u0275\u0275text(61);
      \u0275\u0275elementEnd();
      \u0275\u0275element(62, "input", 24);
      \u0275\u0275template(63, EditLetter_div_63_Template, 2, 1, "div", 15)(64, EditLetter_div_64_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "div", 9)(66, "label", 10);
      \u0275\u0275text(67);
      \u0275\u0275elementEnd();
      \u0275\u0275element(68, "input", 25);
      \u0275\u0275template(69, EditLetter_div_69_Template, 2, 1, "div", 15)(70, EditLetter_div_70_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(71, "div", 26)(72, "button", 27);
      \u0275\u0275element(73, "i", 28);
      \u0275\u0275text(74);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "button", 29);
      \u0275\u0275listener("click", function EditLetter_Template_button_click_75_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.close());
      });
      \u0275\u0275element(76, "i", 30);
      \u0275\u0275text(77);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275template(78, EditLetter_div_78_Template, 1, 2, "div", 31);
      \u0275\u0275element(79, "app-letters-confirmation-modal", null, 0);
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
      \u0275\u0275textInterpolate1("", ctx.translate("letters.letter_type"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("is-invalid", ctx.isFieldValid("letterType") || ctx.hasServerError("letterType"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("letters.letter_type_required"));
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.letterTypes);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldValid("letterType"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasServerError("letterType"));
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
      \u0275\u0275classProp("is-invalid", ctx.isFieldValid("content") || ctx.hasServerError("content"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.Editor && ctx.config);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.Editor || !ctx.config);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldValid("content"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasServerError("content"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isInternalLetter());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isInternalLetter());
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
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.editForm.invalid);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("", ctx.translate("letters.update"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.translate("common.cancel"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isOpen);
    }
  }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, NgModel, CKEditorComponent, LettersConfirmationModalComponent], styles: [`@import "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap";



.ckeditor-container[_ngcontent-%COMP%] {
  width: 100%;
  max-width: 100%;
  min-width: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  border: 1px solid #CED4DA;
  border-radius: 0.5rem;
  overflow: hidden;
  background: #fff;
  min-height: 650px;
}
.ckeditor-container.is-invalid[_ngcontent-%COMP%] {
  border-color: #dc3545;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor[_ngcontent-%COMP%] {
  width: 100%;
  max-width: 100%;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__main[_ngcontent-%COMP%] {
  width: 100%;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%] {
  min-height: 600px !important;
  max-height: 800px !important;
  height: 600px !important;
  overflow-y: auto;
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    sans-serif;
  font-size: 14px;
  line-height: 1.6;
  background: #fff;
  border: none;
  padding: 24px;
}
.rtl[_ngcontent-%COMP%]   .ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%] {
  direction: rtl;
  text-align: right;
}
.ltr[_ngcontent-%COMP%]   .ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%] {
  direction: ltr;
  text-align: left;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[dir=rtl][_ngcontent-%COMP%] {
  direction: rtl;
  text-align: right;
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    sans-serif;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[dir=ltr][_ngcontent-%COMP%] {
  direction: ltr;
  text-align: left;
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    sans-serif;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-toolbar[_ngcontent-%COMP%] {
  background: #F8F9FA;
  border-bottom: 1px solid #E5E7EB;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  padding: 8px;
  flex-wrap: wrap;
  gap: 5px;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-toolbar__separator[_ngcontent-%COMP%] {
  background: #dee2e6;
  margin: 0 4px;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-button[_ngcontent-%COMP%] {
  border-radius: 3px;
  transition: all 0.2s ease;
  min-width: 28px;
  height: 28px;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-button[_ngcontent-%COMP%]:hover {
  background-color: #e9ecef;
  transform: scale(1.05);
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-button.ck-on[_ngcontent-%COMP%] {
  background-color: #B68A35;
  color: white;
  box-shadow: 0 2px 4px rgba(212, 170, 58, 0.3);
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-dropdown__panel[_ngcontent-%COMP%] {
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-list__item[_ngcontent-%COMP%] {
  padding: 6px 12px;
  cursor: pointer;
  text-align: right;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-list__item[_ngcontent-%COMP%]:hover {
  background-color: #f0f0f0;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {
  border-collapse: collapse;
  margin: 10px 0;
  width: 100%;
  max-width: 100%;
  table-layout: fixed;
  direction: rtl;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], 
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: right;
  vertical-align: top;
  min-width: 50px;
  word-wrap: break-word;
  position: relative;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {
  background-color: #f5f5f5;
  font-weight: bold;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .table-selected[_ngcontent-%COMP%] {
  background-color: rgba(0, 123, 255, 0.1) !important;
  border: 2px solid #007bff !important;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-table-toolbar[_ngcontent-%COMP%] {
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 5px;
  z-index: 1000;
  min-width: 200px;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-table-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
  margin: 2px;
  padding: 6px 12px;
  font-size: 12px;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
  border-radius: 3px;
  display: block;
  width: 100%;
  text-align: right;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-table-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {
  background: #f0f0f0;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-font-family-dropdown[_ngcontent-%COMP%] {
  min-width: 120px;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-font-size-dropdown[_ngcontent-%COMP%] {
  min-width: 80px;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-color-picker[_ngcontent-%COMP%] {
  width: 28px;
  height: 28px;
  padding: 0;
  border: 1px solid #ccc;
  border-radius: 3px;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-special-characters-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30px, 1fr));
  gap: 2px;
  padding: 10px;
  max-height: 200px;
  overflow-y: auto;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-special-characters-grid[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
  width: 30px;
  height: 30px;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
  border-radius: 3px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-special-characters-grid[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {
  background: #f0f0f0;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   .page-break[_ngcontent-%COMP%] {
  display: block;
  margin: 20px 0;
  text-align: center;
  border: none;
  border-top: 2px dashed #ccc;
  color: #666;
  font-size: 12px;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   .page-break[_ngcontent-%COMP%]::before {
  content: "--- Page Break ---";
  background: white;
  padding: 0 10px;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {
  border-left: 4px solid #ced4da;
  padding-left: 15px;
  margin-left: 0;
  margin-right: 15px;
  font-style: italic;
  color: #6c757d;
  direction: rtl;
  border-right: 4px solid #ced4da;
  border-left: none;
  padding-right: 15px;
  padding-left: 0;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 4px;
  padding: 12px;
  font-family:
    "Courier New",
    Courier,
    monospace;
  font-size: 13px;
  line-height: 1.4;
  overflow-x: auto;
  direction: ltr;
  text-align: left;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], 
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {
  margin: 0 0 1rem 0;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {
  list-style-type: disc;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {
  list-style-type: decimal;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  margin: 0;
  padding: 0.25rem 0;
}
.rtl[_ngcontent-%COMP%]   .ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], 
.rtl[_ngcontent-%COMP%]   .ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {
  padding-inline-start: 0;
  padding-inline-end: 2.5rem;
  direction: rtl;
}
.rtl[_ngcontent-%COMP%]   .ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {
  padding-inline-end: 3rem;
}
.rtl[_ngcontent-%COMP%]   .ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  padding-inline-end: 0.5rem;
}
.rtl[_ngcontent-%COMP%]   .ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  padding-inline-end: 0.5rem;
  margin-inline-end: 0.5rem;
}
.ltr[_ngcontent-%COMP%]   .ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], 
.ltr[_ngcontent-%COMP%]   .ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {
  padding-inline-start: 2.5rem;
  padding-inline-end: 0;
  direction: ltr;
}
.ltr[_ngcontent-%COMP%]   .ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {
  padding-inline-start: 3rem;
}
.ltr[_ngcontent-%COMP%]   .ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  padding-inline-start: 0.5rem;
}
.ltr[_ngcontent-%COMP%]   .ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  padding-inline-start: 0.5rem;
  margin-inline-start: 0.5rem;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], 
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], 
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], 
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], 
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], 
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {
  margin: 0 0 0.5rem 0;
  font-weight: 600;
  line-height: 1.2;
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    sans-serif;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
  font-size: 2rem;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  font-size: 1.75rem;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  font-size: 1.5rem;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {
  font-size: 1.25rem;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {
  font-size: 1rem;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {
  font-size: 0.875rem;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {
  color: #B68A35;
  text-decoration: none;
}
.ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {
  text-decoration: underline;
}
@media (max-width: 768px) {
  .ckeditor-container[_ngcontent-%COMP%]   .ck-editor__editable[_ngcontent-%COMP%] {
    min-height: 450px;
    max-height: 600px;
    padding: 12px;
  }
  .ckeditor-container[_ngcontent-%COMP%]   .ck-toolbar[_ngcontent-%COMP%] {
    padding: 4px;
    flex-wrap: wrap;
  }
  .ckeditor-container[_ngcontent-%COMP%]   .ck-button[_ngcontent-%COMP%] {
    min-width: 24px;
    height: 24px;
    font-size: 12px;
  }
}
.ck-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {
  list-style-type: decimal !important;
  direction: rtl;
  unicode-bidi: bidi-override;
  padding-right: 20px;
}
.ck-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {
  list-style-type: disc !important;
  direction: rtl;
  unicode-bidi: bidi-override;
  padding-right: 20px;
}
.ckeditor-container[_ngcontent-%COMP%]:focus-within {
  border-color: #B68A35;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(212, 170, 58, 0.25);
}
.ckeditor-container.is-invalid[_ngcontent-%COMP%] {
  border-color: #dc3545;
}
.ckeditor-container.is-invalid[_ngcontent-%COMP%]:focus-within {
  border-color: #dc3545;
  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
}



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
  max-width: 1200px;
  width: 90vw;
}
.modal-header[_ngcontent-%COMP%] {
  border-bottom: 1px solid rgba(255, 193, 7, 0.2);
  background: #D4AF5F !important;
  color: #5F646D;
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
  max-height: 85vh;
  min-height: 60vh;
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
  border-color: #B68A35;
  box-shadow: 0 0 0 0.2rem rgba(212, 170, 58, 0.25);
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
  background-color: #B68A35;
  border-color: #B68A35;
  color: #FFFFFF;
}
.btn-warning[_ngcontent-%COMP%]:hover:not(:disabled) {
  background-color: #B68A35;
  border-color: #B68A35;
}
.btn-warning[_ngcontent-%COMP%]:disabled {
  background-color: #6c757d;
  border-color: #6c757d;
  opacity: 0.65;
}
.btn-secondary[_ngcontent-%COMP%] {
  background-color: transparent;
  color: #1B1D21 !important;
  border: 1px solid #1B1D21 !important;
}
.btn-secondary[_ngcontent-%COMP%]:hover {
  background-color: #1B1D21;
  color: #FFFFFF !important;
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
    width: calc(100% - 1rem);
  }
  .modal-body[_ngcontent-%COMP%] {
    padding: 1rem;
    max-height: 70vh;
    min-height: 50vh;
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
  border-color: #B68A35;
  box-shadow: 0 0 0 0.2rem rgba(212, 170, 58, 0.25);
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
/*# sourceMappingURL=edit-letter-6TY4ZIRO.css.map */`] });
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
            <!-- Letter Type -->\r
            <div class="col-md-6">\r
              <label class="form-label">{{ translate('letters.letter_type') }} <span class="text-danger">*</span></label>\r
              <select class="form-select" formControlName="letterType" \r
                      [class.is-invalid]="isFieldValid('letterType') || hasServerError('letterType')">\r
                <option value="">{{ translate('letters.letter_type_required') }}</option>\r
                <option *ngFor="let letterType of letterTypes" [value]="letterType.key">\r
                  {{ getLetterTypeLabel(letterType.key) }}\r
                </option>\r
              </select>\r
              <div class="invalid-feedback" *ngIf="isFieldValid('letterType')">\r
                {{ getErrorMessage('letterType') }}\r
              </div>\r
              <div class="invalid-feedback" *ngIf="hasServerError('letterType')">\r
                {{ getServerErrorMessage('letterType') }}\r
              </div>\r
            </div>\r
\r
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
              <div class="ckeditor-container" [class.is-invalid]="isFieldValid('content') || hasServerError('content')">\r
                <ckeditor\r
                  *ngIf="Editor && config"\r
                  [editor]="Editor"\r
                  [config]="config"\r
                  [(ngModel)]="editorContent"\r
                  (ready)="onEditorReady($event)"\r
                  (change)="onContentChange($event)">\r
                </ckeditor>\r
                <div *ngIf="!Editor || !config" class="text-center p-4">\r
                  <div class="spinner-border text-primary" role="status">\r
                    <span class="visually-hidden">Loading editor...</span>\r
                  </div>\r
                  <p class="mt-2 text-muted">Loading editor...</p>\r
                </div>\r
              </div>\r
              <div class="invalid-feedback" *ngIf="isFieldValid('content')">\r
                {{ getErrorMessage('content') }}\r
              </div>\r
              <div class="invalid-feedback" *ngIf="hasServerError('content')">\r
                {{ getServerErrorMessage('content') }}\r
              </div>\r
            </div>\r
\r
            <!-- To (External Letters Only) -->\r
            <div class="col-md-6" *ngIf="!isInternalLetter()">\r
              <label class="form-label">{{ translate('letters.to') }} <span class="text-danger">*</span></label>\r
              <input type="email" class="form-control" formControlName="to" \r
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
            <!-- Internal User (Internal Letters Only) -->\r
            <div class="col-md-6" *ngIf="isInternalLetter()">\r
              <label class="form-label">{{ translate('letters.internal_user') }} <span class="text-danger">*</span></label>\r
              <select class="form-select" formControlName="internalUserId" \r
                      [class.is-invalid]="isFieldValid('internalUserId') || hasServerError('internalUserId')"\r
                      [disabled]="isLoadingUsers">\r
                <option value="" disabled>{{ translate('letters.select_user') }}</option>\r
                <option *ngFor="let user of users" [value]="user.id">\r
                  {{ user.name }} ({{ user.departmentName }})\r
                </option>\r
              </select>\r
              <div class="invalid-feedback" *ngIf="isFieldValid('internalUserId')">\r
                {{ getErrorMessage('internalUserId') }}\r
              </div>\r
              <div class="invalid-feedback" *ngIf="hasServerError('internalUserId')">\r
                {{ getServerErrorMessage('internalUserId') }}\r
              </div>\r
              <div class="form-text" *ngIf="isLoadingUsers">\r
                {{ translate('common.loading') }}...\r
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
\r
          </div>\r
        </div>\r
        \r
        <div class="modal-footer">\r
          \r
          <button type="submit" class="btn btn-warning" [disabled]="editForm.invalid">\r
            <i class="fas fa-save me-2"></i>{{ translate('letters.update') }}\r
          </button>\r
          <button type="button" class="btn btn-secondary" (click)="close()">\r
            <i class="fas fa-times me-2"></i>{{ translate('common.cancel') }}\r
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
`, styles: [`@import "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap";

/* src/app/components/letters/shared/ckeditor-styles.css */
.ckeditor-container {
  width: 100%;
  max-width: 100%;
  min-width: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  border: 1px solid #CED4DA;
  border-radius: 0.5rem;
  overflow: hidden;
  background: #fff;
  min-height: 650px;
}
.ckeditor-container.is-invalid {
  border-color: #dc3545;
}
.ckeditor-container .ck-editor {
  width: 100%;
  max-width: 100%;
}
.ckeditor-container .ck-editor__main {
  width: 100%;
}
.ckeditor-container .ck-editor__editable {
  min-height: 600px !important;
  max-height: 800px !important;
  height: 600px !important;
  overflow-y: auto;
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    sans-serif;
  font-size: 14px;
  line-height: 1.6;
  background: #fff;
  border: none;
  padding: 24px;
}
.rtl .ckeditor-container .ck-editor__editable {
  direction: rtl;
  text-align: right;
}
.ltr .ckeditor-container .ck-editor__editable {
  direction: ltr;
  text-align: left;
}
.ckeditor-container .ck-editor__editable[dir=rtl] {
  direction: rtl;
  text-align: right;
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    sans-serif;
}
.ckeditor-container .ck-editor__editable[dir=ltr] {
  direction: ltr;
  text-align: left;
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    sans-serif;
}
.ckeditor-container .ck-toolbar {
  background: #F8F9FA;
  border-bottom: 1px solid #E5E7EB;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  padding: 8px;
  flex-wrap: wrap;
  gap: 5px;
}
.ckeditor-container .ck-toolbar__separator {
  background: #dee2e6;
  margin: 0 4px;
}
.ckeditor-container .ck-button {
  border-radius: 3px;
  transition: all 0.2s ease;
  min-width: 28px;
  height: 28px;
}
.ckeditor-container .ck-button:hover {
  background-color: #e9ecef;
  transform: scale(1.05);
}
.ckeditor-container .ck-button.ck-on {
  background-color: #B68A35;
  color: white;
  box-shadow: 0 2px 4px rgba(212, 170, 58, 0.3);
}
.ckeditor-container .ck-dropdown__panel {
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}
.ckeditor-container .ck-list__item {
  padding: 6px 12px;
  cursor: pointer;
  text-align: right;
}
.ckeditor-container .ck-list__item:hover {
  background-color: #f0f0f0;
}
.ckeditor-container .ck-editor__editable table {
  border-collapse: collapse;
  margin: 10px 0;
  width: 100%;
  max-width: 100%;
  table-layout: fixed;
  direction: rtl;
}
.ckeditor-container .ck-editor__editable table td,
.ckeditor-container .ck-editor__editable table th {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: right;
  vertical-align: top;
  min-width: 50px;
  word-wrap: break-word;
  position: relative;
}
.ckeditor-container .ck-editor__editable table th {
  background-color: #f5f5f5;
  font-weight: bold;
}
.ckeditor-container .ck-editor__editable table .table-selected {
  background-color: rgba(0, 123, 255, 0.1) !important;
  border: 2px solid #007bff !important;
}
.ckeditor-container .ck-table-toolbar {
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 5px;
  z-index: 1000;
  min-width: 200px;
}
.ckeditor-container .ck-table-toolbar button {
  margin: 2px;
  padding: 6px 12px;
  font-size: 12px;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
  border-radius: 3px;
  display: block;
  width: 100%;
  text-align: right;
}
.ckeditor-container .ck-table-toolbar button:hover {
  background: #f0f0f0;
}
.ckeditor-container .ck-font-family-dropdown {
  min-width: 120px;
}
.ckeditor-container .ck-font-size-dropdown {
  min-width: 80px;
}
.ckeditor-container .ck-color-picker {
  width: 28px;
  height: 28px;
  padding: 0;
  border: 1px solid #ccc;
  border-radius: 3px;
}
.ckeditor-container .ck-special-characters-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30px, 1fr));
  gap: 2px;
  padding: 10px;
  max-height: 200px;
  overflow-y: auto;
}
.ckeditor-container .ck-special-characters-grid button {
  width: 30px;
  height: 30px;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
  border-radius: 3px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.ckeditor-container .ck-special-characters-grid button:hover {
  background: #f0f0f0;
}
.ckeditor-container .ck-editor__editable .page-break {
  display: block;
  margin: 20px 0;
  text-align: center;
  border: none;
  border-top: 2px dashed #ccc;
  color: #666;
  font-size: 12px;
}
.ckeditor-container .ck-editor__editable .page-break::before {
  content: "--- Page Break ---";
  background: white;
  padding: 0 10px;
}
.ckeditor-container .ck-editor__editable blockquote {
  border-left: 4px solid #ced4da;
  padding-left: 15px;
  margin-left: 0;
  margin-right: 15px;
  font-style: italic;
  color: #6c757d;
  direction: rtl;
  border-right: 4px solid #ced4da;
  border-left: none;
  padding-right: 15px;
  padding-left: 0;
}
.ckeditor-container .ck-editor__editable pre {
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 4px;
  padding: 12px;
  font-family:
    "Courier New",
    Courier,
    monospace;
  font-size: 13px;
  line-height: 1.4;
  overflow-x: auto;
  direction: ltr;
  text-align: left;
}
.ckeditor-container .ck-editor__editable ul,
.ckeditor-container .ck-editor__editable ol {
  margin: 0 0 1rem 0;
}
.ckeditor-container .ck-editor__editable ul {
  list-style-type: disc;
}
.ckeditor-container .ck-editor__editable ol {
  list-style-type: decimal;
}
.ckeditor-container .ck-editor__editable li {
  margin: 0;
  padding: 0.25rem 0;
}
.rtl .ckeditor-container .ck-editor__editable ul,
.rtl .ckeditor-container .ck-editor__editable ol {
  padding-inline-start: 0;
  padding-inline-end: 2.5rem;
  direction: rtl;
}
.rtl .ckeditor-container .ck-editor__editable ol {
  padding-inline-end: 3rem;
}
.rtl .ckeditor-container .ck-editor__editable li {
  padding-inline-end: 0.5rem;
}
.rtl .ckeditor-container .ck-editor__editable ol li {
  padding-inline-end: 0.5rem;
  margin-inline-end: 0.5rem;
}
.ltr .ckeditor-container .ck-editor__editable ul,
.ltr .ckeditor-container .ck-editor__editable ol {
  padding-inline-start: 2.5rem;
  padding-inline-end: 0;
  direction: ltr;
}
.ltr .ckeditor-container .ck-editor__editable ol {
  padding-inline-start: 3rem;
}
.ltr .ckeditor-container .ck-editor__editable li {
  padding-inline-start: 0.5rem;
}
.ltr .ckeditor-container .ck-editor__editable ol li {
  padding-inline-start: 0.5rem;
  margin-inline-start: 0.5rem;
}
.ckeditor-container .ck-editor__editable h1,
.ckeditor-container .ck-editor__editable h2,
.ckeditor-container .ck-editor__editable h3,
.ckeditor-container .ck-editor__editable h4,
.ckeditor-container .ck-editor__editable h5,
.ckeditor-container .ck-editor__editable h6 {
  margin: 0 0 0.5rem 0;
  font-weight: 600;
  line-height: 1.2;
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    sans-serif;
}
.ckeditor-container .ck-editor__editable h1 {
  font-size: 2rem;
}
.ckeditor-container .ck-editor__editable h2 {
  font-size: 1.75rem;
}
.ckeditor-container .ck-editor__editable h3 {
  font-size: 1.5rem;
}
.ckeditor-container .ck-editor__editable h4 {
  font-size: 1.25rem;
}
.ckeditor-container .ck-editor__editable h5 {
  font-size: 1rem;
}
.ckeditor-container .ck-editor__editable h6 {
  font-size: 0.875rem;
}
.ckeditor-container .ck-editor__editable a {
  color: #B68A35;
  text-decoration: none;
}
.ckeditor-container .ck-editor__editable a:hover {
  text-decoration: underline;
}
@media (max-width: 768px) {
  .ckeditor-container .ck-editor__editable {
    min-height: 450px;
    max-height: 600px;
    padding: 12px;
  }
  .ckeditor-container .ck-toolbar {
    padding: 4px;
    flex-wrap: wrap;
  }
  .ckeditor-container .ck-button {
    min-width: 24px;
    height: 24px;
    font-size: 12px;
  }
}
.ck-content ol {
  list-style-type: decimal !important;
  direction: rtl;
  unicode-bidi: bidi-override;
  padding-right: 20px;
}
.ck-content ul {
  list-style-type: disc !important;
  direction: rtl;
  unicode-bidi: bidi-override;
  padding-right: 20px;
}
.ckeditor-container:focus-within {
  border-color: #B68A35;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(212, 170, 58, 0.25);
}
.ckeditor-container.is-invalid {
  border-color: #dc3545;
}
.ckeditor-container.is-invalid:focus-within {
  border-color: #dc3545;
  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
}

/* src/app/components/letters/edit-letter/edit-letter.css */
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
  max-width: 1200px;
  width: 90vw;
}
.modal-header {
  border-bottom: 1px solid rgba(255, 193, 7, 0.2);
  background: #D4AF5F !important;
  color: #5F646D;
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
  max-height: 85vh;
  min-height: 60vh;
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
  border-color: #B68A35;
  box-shadow: 0 0 0 0.2rem rgba(212, 170, 58, 0.25);
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
  background-color: #B68A35;
  border-color: #B68A35;
  color: #FFFFFF;
}
.btn-warning:hover:not(:disabled) {
  background-color: #B68A35;
  border-color: #B68A35;
}
.btn-warning:disabled {
  background-color: #6c757d;
  border-color: #6c757d;
  opacity: 0.65;
}
.btn-secondary {
  background-color: transparent;
  color: #1B1D21 !important;
  border: 1px solid #1B1D21 !important;
}
.btn-secondary:hover {
  background-color: #1B1D21;
  color: #FFFFFF !important;
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
    width: calc(100% - 1rem);
  }
  .modal-body {
    padding: 1rem;
    max-height: 70vh;
    min-height: 50vh;
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
  border-color: #B68A35;
  box-shadow: 0 0 0 0.2rem rgba(212, 170, 58, 0.25);
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
/*# sourceMappingURL=edit-letter-6TY4ZIRO.css.map */
`] }]
  }], () => [{ type: LettersService }, { type: FormBuilder }, { type: TranslationService }, { type: UsersService }, { type: LangService }], { confirmationModal: [{
    type: ViewChild,
    args: ["confirmationModal"]
  }], letterUpdated: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditLetter, { className: "EditLetter", filePath: "src/app/components/letters/edit-letter/edit-letter.ts", lineNumber: 17 });
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
function AddAttachment_span_42_Template(rf, ctx) {
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
  isRTL() {
    return this.translationService.isRTL();
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
  }, outputs: { attachmentAdded: "attachmentAdded" }, standalone: false, decls: 49, vars: 39, consts: [["fileInput", ""], ["confirmationModal", ""], ["tabindex", "-1", "role", "dialog", 1, "modal", "fade", 3, "click"], ["role", "document", 1, "modal-dialog", "modal-lg", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header", "text-white", 2, "background", "#D4AF5F !important", 3, "dir"], [1, "modal-title"], [3, "ngSubmit", "formGroup"], [1, "modal-body"], ["class", "alert alert-info", 4, "ngIf"], [1, "row", "g-3"], [1, "col-12"], [1, "form-label"], [1, "text-danger"], [1, "file-drop-zone", 3, "dragover", "dragleave", "drop", "click"], ["class", "file-drop-content", 4, "ngIf"], ["class", "selected-file-display", 4, "ngIf"], ["type", "file", "accept", ".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.jpg,.jpeg,.png,.gif", 1, "d-none", 3, "change"], ["formControlName", "description", "rows", "3", 1, "form-control", 3, "placeholder"], ["class", "invalid-feedback", 4, "ngIf"], ["formControlName", "documentSource", 1, "form-select"], ["value", ""], ["value", "1"], ["value", "2"], ["value", "3"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-info", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], ["class", "modal-backdrop fade", 3, "show", 4, "ngIf"], [1, "alert", "alert-info"], [1, "file-drop-content"], [1, "text-muted"], [1, "text-muted", "small"], ["type", "button", 1, "btn", "btn-outline-primary"], [1, "selected-file-display"], [1, "d-flex", "align-items-center"], [1, "flex-grow-1"], [1, "mb-1"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "invalid-feedback"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "modal-backdrop", "fade"]], template: function AddAttachment_Template(rf, ctx) {
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
      \u0275\u0275template(42, AddAttachment_span_42_Template, 1, 0, "span", 27);
      \u0275\u0275text(43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "button", 28);
      \u0275\u0275listener("click", function AddAttachment_Template_button_click_44_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.close());
      });
      \u0275\u0275text(45);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275template(46, AddAttachment_div_46_Template, 1, 2, "div", 29);
      \u0275\u0275element(47, "app-letters-confirmation-modal", null, 1);
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
      \u0275\u0275property("disabled", !ctx.selectedFile || ctx.isUploading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isUploading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isUploading ? ctx.translate("letters.uploading") : ctx.translate("letters.add_attachment"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isUploading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.cancel"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isOpen);
    }
  }, dependencies: [NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, LettersConfirmationModalComponent], styles: ["\n\n.modal[_ngcontent-%COMP%] {\n  z-index: 1055;\n}\n.modal.show[_ngcontent-%COMP%] {\n  display: block !important;\n}\n.modal-backdrop.show[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.modal-dialog[_ngcontent-%COMP%] {\n  max-width: 600px;\n}\n.modal-header[_ngcontent-%COMP%] {\n  background: #D4AF5F !important;\n  color: #5F646D;\n  border-bottom: 1px solid rgba(233, 236, 20, 0.2);\n  padding: 1rem 1.5rem;\n  display: flex;\n  align-items: center !important;\n  flex-direction: row;\n}\n.modal-header[dir=rtl][_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n  justify-content: flex-end;\n}\n.modal-header[dir=ltr][_ngcontent-%COMP%] {\n  flex-direction: row;\n  justify-content: flex-start;\n}\n.modal-title[dir=rtl][_ngcontent-%COMP%] {\n  text-align: right !important;\n  margin-left: auto !important;\n  margin-right: 0 !important;\n  order: 2;\n}\n.modal-title[dir=ltr][_ngcontent-%COMP%] {\n  text-align: left !important;\n  margin-left: 0 !important;\n  margin-right: auto !important;\n  order: 1;\n}\n.modal-header[dir=rtl][_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  margin-left: auto !important;\n  margin-right: 0 !important;\n  text-align: right !important;\n}\n.modal-header[dir=ltr][_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  margin-left: 0 !important;\n  margin-right: auto !important;\n  text-align: left !important;\n}\n.modal-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin: 0;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  max-height: 70vh;\n  overflow-y: auto;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  border-top: 1px solid #dee2e6;\n  padding: 1rem 1.5rem;\n  background-color: #f8f9fa;\n}\n.file-drop-zone[_ngcontent-%COMP%] {\n  border: 2px dashed #ced4da;\n  border-radius: 0.5rem;\n  padding: 2rem;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  background-color: #f8f9fa;\n  min-height: 200px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.file-drop-zone[_ngcontent-%COMP%]:hover {\n  border-color: #B68A35;\n  background-color: #f8f9fa;\n}\n.file-drop-zone.has-file[_ngcontent-%COMP%] {\n  border-color: #B68A35;\n  background-color: #e8f5e8;\n}\n.file-drop-content[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.file-drop-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.file-drop-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.selected-file-display[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1rem;\n  background-color: #fff;\n  border-radius: 0.375rem;\n  border: 1px solid #dee2e6;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #495057;\n  margin-bottom: 0.5rem;\n}\n.form-control[_ngcontent-%COMP%], \n.form-select[_ngcontent-%COMP%] {\n  border: 1px solid #ced4da;\n  border-radius: 0.375rem;\n  padding: 0.5rem 0.75rem;\n  font-size: 0.875rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n.form-control[_ngcontent-%COMP%]:focus, \n.form-select[_ngcontent-%COMP%]:focus {\n  border-color: #B68A35;\n  box-shadow: 0 0 0 0.2rem rgba(212, 170, 58, 0.25);\n  outline: 0;\n}\n.form-control.is-invalid[_ngcontent-%COMP%], \n.form-select.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.form-control.is-invalid[_ngcontent-%COMP%]:focus, \n.form-select.is-invalid[_ngcontent-%COMP%]:focus {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n.invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 0.875rem;\n  color: #dc3545;\n}\ntextarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.btn[_ngcontent-%COMP%] {\n  border-radius: 0.375rem;\n  font-weight: 500;\n  padding: 0.5rem 1rem;\n  transition: all 0.15s ease-in-out;\n}\n.btn-info[_ngcontent-%COMP%] {\n  background-color: #B68A35;\n  border-color: #B68A35;\n  color: #fff;\n}\n.btn-info[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #B68A35;\n  border-color: #B68A35;\n}\n.btn-info[_ngcontent-%COMP%]:disabled {\n  background-color: #6c757d;\n  border-color: #6c757d;\n  opacity: 0.65;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: #1B1D21 !important;\n  color: #1B1D21 !important;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #1B1D21;\n  border-color: #1B1D21 !important;\n  color: #FFFFFF !important;\n}\n.btn-outline-primary[_ngcontent-%COMP%] {\n  color: #B68A35;\n  border-color: #B68A35;\n}\n.btn-outline-primary[_ngcontent-%COMP%]:hover {\n  background-color: #B68A35;\n  border-color: #B68A35;\n  color: #fff;\n}\n.btn-outline-danger[_ngcontent-%COMP%] {\n  color: #dc3545;\n  border-color: #dc3545;\n}\n.btn-outline-danger[_ngcontent-%COMP%]:hover {\n  background-color: #dc3545;\n  border-color: #dc3545;\n  color: #fff;\n}\n.text-danger[_ngcontent-%COMP%] {\n  color: #dc3545 !important;\n}\n.row.g-3[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n}\n.fas[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.fa-file-pdf[_ngcontent-%COMP%] {\n  color: #dc3545 !important;\n}\n.fa-file-word[_ngcontent-%COMP%] {\n  color: #043DFF !important;\n}\n.fa-file-excel[_ngcontent-%COMP%] {\n  color: #28a745 !important;\n}\n.fa-file-powerpoint[_ngcontent-%COMP%] {\n  color: #ffc107 !important;\n}\n.fa-file-image[_ngcontent-%COMP%] {\n  color: #17a2b8 !important;\n}\n.fa-file[_ngcontent-%COMP%] {\n  color: #6c757d !important;\n}\n.btn-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 1;\n  color: #fff;\n  opacity: 0.5;\n  transition: opacity 0.15s ease-in-out;\n}\n.btn-close[_ngcontent-%COMP%]:hover {\n  opacity: 0.75;\n}\n.btn-close[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n}\n.alert-info[_ngcontent-%COMP%] {\n  background-color: #d1ecf1;\n  border-color: #bee5eb;\n  color: #0c5460;\n}\n.spinner-border-sm[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n@media (max-width: 768px) {\n  .modal-dialog[_ngcontent-%COMP%] {\n    margin: 0.5rem;\n    max-width: calc(100% - 1rem);\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    padding: 1rem;\n    max-height: 60vh;\n  }\n  .modal-header[_ngcontent-%COMP%], \n   .modal-footer[_ngcontent-%COMP%] {\n    padding: 0.75rem 1rem;\n  }\n  .row.g-3[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n  }\n  .file-drop-zone[_ngcontent-%COMP%] {\n    padding: 1rem;\n    min-height: 150px;\n  }\n  .file-drop-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n[dir=rtl][_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  text-align: right;\n}\n[dir=rtl][_ngcontent-%COMP%]   .me-2[_ngcontent-%COMP%] {\n  margin-right: 0 !important;\n  margin-left: 0.5rem !important;\n}\n[dir=rtl][_ngcontent-%COMP%]   .ms-2[_ngcontent-%COMP%] {\n  margin-left: 0 !important;\n  margin-right: 0.5rem !important;\n}\n.modal.fade[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\n  transition: transform 0.3s ease-out;\n  transform: translate(0, -50px);\n}\n.modal.show[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\n  transform: none;\n}\n.form-control[_ngcontent-%COMP%]:valid:focus {\n  border-color: #B68A35;\n  box-shadow: 0 0 0 0.2rem rgba(223, 241, 59, 0.25);\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 3px;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 3px;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #a8a8a8;\n}\n.file-drop-zone.drag-over[_ngcontent-%COMP%] {\n  border-color: #B68A35;\n  background-color: #f8f9fa;\n  transform: scale(1.02);\n}\n.selected-file-display[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideIn 0.3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=add-attachment-U7FMLC3I.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddAttachment, [{
    type: Component,
    args: [{ selector: "app-add-attachment", standalone: false, template: `<!-- Add Attachment Modal -->\r
<div class="modal fade" [class.show]="isOpen" [style.display]="isOpen ? 'block' : 'none'" \r
     tabindex="-1" role="dialog" [attr.aria-hidden]="!isOpen" (click)="onBackdropClick($event)">\r
  <div class="modal-dialog modal-lg modal-dialog-centered" role="document">\r
    <div class="modal-content">\r
      <div class="modal-header text-white" style="background: #D4AF5F !important" [dir]="isRTL() ? 'rtl' : 'ltr'">\r
        <h5 class="modal-title" [class.text-end]="isRTL()" [class.text-start]="!isRTL()">\r
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
         \r
          <button type="submit" class="btn btn-info" [disabled]="!selectedFile || isUploading">\r
            \r
            <span class="spinner-border spinner-border-sm me-2" *ngIf="isUploading"></span>\r
            {{ isUploading ? translate('letters.uploading') : translate('letters.add_attachment') }}\r
          </button>\r
          <button type="button" class="btn btn-secondary" (click)="close()" [disabled]="isUploading">\r
            {{ translate('common.cancel') }}\r
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
`, styles: ["/* src/app/components/letters/add-attachment/add-attachment.css */\n.modal {\n  z-index: 1055;\n}\n.modal.show {\n  display: block !important;\n}\n.modal-backdrop.show {\n  opacity: 0.5;\n}\n.modal-dialog {\n  max-width: 600px;\n}\n.modal-header {\n  background: #D4AF5F !important;\n  color: #5F646D;\n  border-bottom: 1px solid rgba(233, 236, 20, 0.2);\n  padding: 1rem 1.5rem;\n  display: flex;\n  align-items: center !important;\n  flex-direction: row;\n}\n.modal-header[dir=rtl] {\n  flex-direction: row-reverse;\n  justify-content: flex-end;\n}\n.modal-header[dir=ltr] {\n  flex-direction: row;\n  justify-content: flex-start;\n}\n.modal-title[dir=rtl] {\n  text-align: right !important;\n  margin-left: auto !important;\n  margin-right: 0 !important;\n  order: 2;\n}\n.modal-title[dir=ltr] {\n  text-align: left !important;\n  margin-left: 0 !important;\n  margin-right: auto !important;\n  order: 1;\n}\n.modal-header[dir=rtl] .modal-title {\n  margin-left: auto !important;\n  margin-right: 0 !important;\n  text-align: right !important;\n}\n.modal-header[dir=ltr] .modal-title {\n  margin-left: 0 !important;\n  margin-right: auto !important;\n  text-align: left !important;\n}\n.modal-title {\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin: 0;\n}\n.modal-body {\n  padding: 1.5rem;\n  max-height: 70vh;\n  overflow-y: auto;\n}\n.modal-footer {\n  border-top: 1px solid #dee2e6;\n  padding: 1rem 1.5rem;\n  background-color: #f8f9fa;\n}\n.file-drop-zone {\n  border: 2px dashed #ced4da;\n  border-radius: 0.5rem;\n  padding: 2rem;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  background-color: #f8f9fa;\n  min-height: 200px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.file-drop-zone:hover {\n  border-color: #B68A35;\n  background-color: #f8f9fa;\n}\n.file-drop-zone.has-file {\n  border-color: #B68A35;\n  background-color: #e8f5e8;\n}\n.file-drop-content {\n  width: 100%;\n}\n.file-drop-content h5 {\n  margin-bottom: 0.5rem;\n}\n.file-drop-content p {\n  margin-bottom: 1rem;\n}\n.selected-file-display {\n  width: 100%;\n  padding: 1rem;\n  background-color: #fff;\n  border-radius: 0.375rem;\n  border: 1px solid #dee2e6;\n}\n.form-label {\n  font-weight: 500;\n  color: #495057;\n  margin-bottom: 0.5rem;\n}\n.form-control,\n.form-select {\n  border: 1px solid #ced4da;\n  border-radius: 0.375rem;\n  padding: 0.5rem 0.75rem;\n  font-size: 0.875rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n.form-control:focus,\n.form-select:focus {\n  border-color: #B68A35;\n  box-shadow: 0 0 0 0.2rem rgba(212, 170, 58, 0.25);\n  outline: 0;\n}\n.form-control.is-invalid,\n.form-select.is-invalid {\n  border-color: #dc3545;\n}\n.form-control.is-invalid:focus,\n.form-select.is-invalid:focus {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n.invalid-feedback {\n  display: block;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 0.875rem;\n  color: #dc3545;\n}\ntextarea.form-control {\n  resize: vertical;\n  min-height: 80px;\n}\n.btn {\n  border-radius: 0.375rem;\n  font-weight: 500;\n  padding: 0.5rem 1rem;\n  transition: all 0.15s ease-in-out;\n}\n.btn-info {\n  background-color: #B68A35;\n  border-color: #B68A35;\n  color: #fff;\n}\n.btn-info:hover:not(:disabled) {\n  background-color: #B68A35;\n  border-color: #B68A35;\n}\n.btn-info:disabled {\n  background-color: #6c757d;\n  border-color: #6c757d;\n  opacity: 0.65;\n}\n.btn-secondary {\n  background-color: transparent;\n  border-color: #1B1D21 !important;\n  color: #1B1D21 !important;\n}\n.btn-secondary:hover:not(:disabled) {\n  background-color: #1B1D21;\n  border-color: #1B1D21 !important;\n  color: #FFFFFF !important;\n}\n.btn-outline-primary {\n  color: #B68A35;\n  border-color: #B68A35;\n}\n.btn-outline-primary:hover {\n  background-color: #B68A35;\n  border-color: #B68A35;\n  color: #fff;\n}\n.btn-outline-danger {\n  color: #dc3545;\n  border-color: #dc3545;\n}\n.btn-outline-danger:hover {\n  background-color: #dc3545;\n  border-color: #dc3545;\n  color: #fff;\n}\n.text-danger {\n  color: #dc3545 !important;\n}\n.row.g-3 > * {\n  padding: 0.75rem;\n}\n.fas {\n  font-size: 0.875rem;\n}\n.fa-file-pdf {\n  color: #dc3545 !important;\n}\n.fa-file-word {\n  color: #043DFF !important;\n}\n.fa-file-excel {\n  color: #28a745 !important;\n}\n.fa-file-powerpoint {\n  color: #ffc107 !important;\n}\n.fa-file-image {\n  color: #17a2b8 !important;\n}\n.fa-file {\n  color: #6c757d !important;\n}\n.btn-close {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 1;\n  color: #fff;\n  opacity: 0.5;\n  transition: opacity 0.15s ease-in-out;\n}\n.btn-close:hover {\n  opacity: 0.75;\n}\n.btn-close:focus {\n  outline: none;\n  box-shadow: none;\n}\n.alert-info {\n  background-color: #d1ecf1;\n  border-color: #bee5eb;\n  color: #0c5460;\n}\n.spinner-border-sm {\n  width: 1rem;\n  height: 1rem;\n}\n@media (max-width: 768px) {\n  .modal-dialog {\n    margin: 0.5rem;\n    max-width: calc(100% - 1rem);\n  }\n  .modal-body {\n    padding: 1rem;\n    max-height: 60vh;\n  }\n  .modal-header,\n  .modal-footer {\n    padding: 0.75rem 1rem;\n  }\n  .row.g-3 > * {\n    padding: 0.5rem;\n  }\n  .file-drop-zone {\n    padding: 1rem;\n    min-height: 150px;\n  }\n  .file-drop-content h5 {\n    font-size: 1rem;\n  }\n}\n[dir=rtl] .modal-header {\n  text-align: right;\n}\n[dir=rtl] .me-2 {\n  margin-right: 0 !important;\n  margin-left: 0.5rem !important;\n}\n[dir=rtl] .ms-2 {\n  margin-left: 0 !important;\n  margin-right: 0.5rem !important;\n}\n.modal.fade .modal-dialog {\n  transition: transform 0.3s ease-out;\n  transform: translate(0, -50px);\n}\n.modal.show .modal-dialog {\n  transform: none;\n}\n.form-control:valid:focus {\n  border-color: #B68A35;\n  box-shadow: 0 0 0 0.2rem rgba(223, 241, 59, 0.25);\n}\n.btn:disabled {\n  cursor: not-allowed;\n}\n.modal-body::-webkit-scrollbar {\n  width: 6px;\n}\n.modal-body::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 3px;\n}\n.modal-body::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 3px;\n}\n.modal-body::-webkit-scrollbar-thumb:hover {\n  background: #a8a8a8;\n}\n.file-drop-zone.drag-over {\n  border-color: #B68A35;\n  background-color: #f8f9fa;\n  transform: scale(1.02);\n}\n.selected-file-display {\n  animation: slideIn 0.3s ease-out;\n}\n@keyframes slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=add-attachment-U7FMLC3I.css.map */\n"] }]
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
    \u0275\u0275textInterpolate1(" ", ctx_r1.currentAttachment.uploadedByName || "Unknown", " ");
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
function EditAttachment_span_34_Template(rf, ctx) {
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
  isRTL() {
    return this.translationService.isRTL();
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
      description: "",
      documentSource: ""
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
      fileName: formValue.description || this.currentAttachment.fileName
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
  }, outputs: { attachmentUpdated: "attachmentUpdated" }, standalone: false, decls: 41, vars: 35, consts: [["confirmationModal", ""], ["tabindex", "-1", "role", "dialog", 1, "modal", "fade", 3, "click"], ["role", "document", 1, "modal-dialog", "modal-lg", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header", "bg-warning", "text-dark", 3, "dir"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [3, "ngSubmit", "formGroup"], [1, "modal-body"], ["class", "alert alert-info", 4, "ngIf"], ["class", "attachment-info", 4, "ngIf"], [1, "row", "g-3", "mt-3"], [1, "col-12"], [1, "form-label"], ["formControlName", "description", "rows", "3", 1, "form-control", 3, "placeholder"], ["class", "invalid-feedback", 4, "ngIf"], ["formControlName", "documentSource", 1, "form-select"], ["value", ""], ["value", "1"], ["value", "2"], ["value", "3"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-warning", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], ["class", "modal-backdrop fade", 3, "show", 4, "ngIf"], [1, "alert", "alert-info"], [1, "attachment-info"], [1, "card"], [1, "card-body"], [1, "d-flex", "align-items-center"], [1, "flex-grow-1"], [1, "mb-1"], [1, "text-muted"], [1, "invalid-feedback"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "modal-backdrop", "fade"]], template: function EditAttachment_Template(rf, ctx) {
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
      \u0275\u0275template(9, EditAttachment_div_9_Template, 4, 2, "div", 9)(10, EditAttachment_div_10_Template, 10, 4, "div", 10);
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
      \u0275\u0275template(34, EditAttachment_span_34_Template, 1, 0, "span", 23);
      \u0275\u0275text(35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "button", 24);
      \u0275\u0275listener("click", function EditAttachment_Template_button_click_36_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.close());
      });
      \u0275\u0275text(37);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275template(38, EditAttachment_div_38_Template, 1, 2, "div", 25);
      \u0275\u0275element(39, "app-letters-confirmation-modal", null, 0);
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
      \u0275\u0275property("disabled", ctx.editForm.invalid || ctx.isUpdating);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isUpdating);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isUpdating ? ctx.translate("common.updating") : ctx.translate("letters.update"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isUpdating);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.cancel"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isOpen);
    }
  }, dependencies: [NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, LettersConfirmationModalComponent], styles: ["\n\n.modal[_ngcontent-%COMP%] {\n  z-index: 1055;\n}\n.modal.show[_ngcontent-%COMP%] {\n  display: block !important;\n}\n.modal-backdrop.show[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.modal-dialog[_ngcontent-%COMP%] {\n  max-width: 600px;\n}\n.modal-header[_ngcontent-%COMP%] {\n  background: #D4AF5F !important;\n  color: #5F646D;\n  border-bottom: 1px solid rgba(233, 236, 20, 0.2);\n  padding: 1rem 1.5rem;\n  display: flex;\n  align-items: center !important;\n  flex-direction: row;\n}\n.modal-header[dir=rtl][_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n  justify-content: flex-end;\n}\n.modal-header[dir=ltr][_ngcontent-%COMP%] {\n  flex-direction: row;\n  justify-content: flex-start;\n}\n.modal-title[dir=rtl][_ngcontent-%COMP%] {\n  text-align: right !important;\n  margin-left: auto !important;\n  margin-right: 0 !important;\n  order: 2;\n}\n.modal-title[dir=ltr][_ngcontent-%COMP%] {\n  text-align: left !important;\n  margin-left: 0 !important;\n  margin-right: auto !important;\n  order: 1;\n}\n.modal-header[dir=rtl][_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  margin-left: auto !important;\n  margin-right: 0 !important;\n  text-align: right !important;\n}\n.modal-header[dir=ltr][_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  margin-left: 0 !important;\n  margin-right: auto !important;\n  text-align: left !important;\n}\n.modal-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin: 0;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  max-height: 70vh;\n  overflow-y: auto;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  border-top: 1px solid #dee2e6;\n  padding: 1rem 1.5rem;\n  background-color: #f8f9fa;\n}\n.attachment-info[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  border: 1px solid #dee2e6;\n  border-radius: 0.5rem;\n  background-color: #f8f9fa;\n}\n.attachment-info[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #495057;\n  margin-bottom: 0.5rem;\n}\n.form-control[_ngcontent-%COMP%], \n.form-select[_ngcontent-%COMP%] {\n  border: 1px solid #ced4da;\n  border-radius: 0.375rem;\n  padding: 0.5rem 0.75rem;\n  font-size: 0.875rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n.form-control[_ngcontent-%COMP%]:focus, \n.form-select[_ngcontent-%COMP%]:focus {\n  border-color: #B68A35;\n  box-shadow: 0 0 0 0.2rem rgba(212, 170, 58, 0.25);\n  outline: 0;\n}\n.form-control.is-invalid[_ngcontent-%COMP%], \n.form-select.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.form-control.is-invalid[_ngcontent-%COMP%]:focus, \n.form-select.is-invalid[_ngcontent-%COMP%]:focus {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n.invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 0.875rem;\n  color: #dc3545;\n}\ntextarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.btn[_ngcontent-%COMP%] {\n  border-radius: 0.375rem;\n  font-weight: 500;\n  padding: 0.5rem 1rem;\n  transition: all 0.15s ease-in-out;\n}\n.btn-warning[_ngcontent-%COMP%] {\n  background-color: #B68A35;\n  border-color: #B68A35;\n  color: #FFFFFF;\n}\n.btn-warning[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #B68A35;\n  border-color: #B68A35;\n}\n.btn-warning[_ngcontent-%COMP%]:disabled {\n  background-color: #6c757d;\n  border-color: #6c757d;\n  opacity: 0.65;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: #1B1D21;\n  color: #1B1D21;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #2a2d33;\n  color: #ffff;\n}\n.text-danger[_ngcontent-%COMP%] {\n  color: #dc3545 !important;\n}\n.row.g-3[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n}\n.fas[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.fa-file-pdf[_ngcontent-%COMP%] {\n  color: #dc3545 !important;\n}\n.fa-file-word[_ngcontent-%COMP%] {\n  color: #043DFF !important;\n}\n.fa-file-excel[_ngcontent-%COMP%] {\n  color: #28a745 !important;\n}\n.fa-file-powerpoint[_ngcontent-%COMP%] {\n  color: #ffc107 !important;\n}\n.fa-file-image[_ngcontent-%COMP%] {\n  color: #17a2b8 !important;\n}\n.fa-file[_ngcontent-%COMP%] {\n  color: #6c757d !important;\n}\n.btn-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 1;\n  color: #000;\n  opacity: 0.5;\n  transition: opacity 0.15s ease-in-out;\n}\n.btn-close[_ngcontent-%COMP%]:hover {\n  opacity: 0.75;\n}\n.btn-close[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n}\n.alert-info[_ngcontent-%COMP%] {\n  background-color: #d1ecf1;\n  border-color: #bee5eb;\n  color: #0c5460;\n}\n.spinner-border-sm[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n@media (max-width: 768px) {\n  .modal-dialog[_ngcontent-%COMP%] {\n    margin: 0.5rem;\n    max-width: calc(100% - 1rem);\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    padding: 1rem;\n    max-height: 60vh;\n  }\n  .modal-header[_ngcontent-%COMP%], \n   .modal-footer[_ngcontent-%COMP%] {\n    padding: 0.75rem 1rem;\n  }\n  .row.g-3[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n  }\n  .attachment-info[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n}\n[dir=rtl][_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  text-align: right;\n}\n[dir=rtl][_ngcontent-%COMP%]   .me-2[_ngcontent-%COMP%] {\n  margin-right: 0 !important;\n  margin-left: 0.5rem !important;\n}\n[dir=rtl][_ngcontent-%COMP%]   .ms-2[_ngcontent-%COMP%] {\n  margin-left: 0 !important;\n  margin-right: 0.5rem !important;\n}\n.modal.fade[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\n  transition: transform 0.3s ease-out;\n  transform: translate(0, -50px);\n}\n.modal.show[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\n  transform: none;\n}\n.form-control[_ngcontent-%COMP%]:valid:focus {\n  border-color: #B68A35;\n  box-shadow: 0 0 0 0.2rem rgba(212, 170, 58, 0.25);\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 3px;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 3px;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #a8a8a8;\n}\n.attachment-info[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideIn 0.3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=edit-attachment-5L6RKA25.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditAttachment, [{
    type: Component,
    args: [{ selector: "app-edit-attachment", standalone: false, template: `<!-- Edit Attachment Modal -->\r
<div class="modal fade" [class.show]="isOpen" [style.display]="isOpen ? 'block' : 'none'" \r
     tabindex="-1" role="dialog" [attr.aria-hidden]="!isOpen" (click)="onBackdropClick($event)">\r
  <div class="modal-dialog modal-lg modal-dialog-centered" role="document">\r
    <div class="modal-content">\r
      <div class="modal-header bg-warning text-dark" [dir]="isRTL() ? 'rtl' : 'ltr'">\r
        <h5 class="modal-title" [class.text-end]="isRTL()" [class.text-start]="!isRTL()">\r
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
                      {{ currentAttachment.uploadedByName || 'Unknown' }}\r
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
          \r
          <button type="submit" class="btn btn-warning" [disabled]="editForm.invalid || isUpdating">\r
            \r
            <span class="spinner-border spinner-border-sm me-2" *ngIf="isUpdating"></span>\r
            {{ isUpdating ? translate('common.updating') : translate('letters.update') }}\r
          </button>\r
          <button type="button" class="btn btn-secondary" (click)="close()" [disabled]="isUpdating">\r
            {{ translate('common.cancel') }}\r
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
`, styles: ["/* src/app/components/letters/edit-attachment/edit-attachment.css */\n.modal {\n  z-index: 1055;\n}\n.modal.show {\n  display: block !important;\n}\n.modal-backdrop.show {\n  opacity: 0.5;\n}\n.modal-dialog {\n  max-width: 600px;\n}\n.modal-header {\n  background: #D4AF5F !important;\n  color: #5F646D;\n  border-bottom: 1px solid rgba(233, 236, 20, 0.2);\n  padding: 1rem 1.5rem;\n  display: flex;\n  align-items: center !important;\n  flex-direction: row;\n}\n.modal-header[dir=rtl] {\n  flex-direction: row-reverse;\n  justify-content: flex-end;\n}\n.modal-header[dir=ltr] {\n  flex-direction: row;\n  justify-content: flex-start;\n}\n.modal-title[dir=rtl] {\n  text-align: right !important;\n  margin-left: auto !important;\n  margin-right: 0 !important;\n  order: 2;\n}\n.modal-title[dir=ltr] {\n  text-align: left !important;\n  margin-left: 0 !important;\n  margin-right: auto !important;\n  order: 1;\n}\n.modal-header[dir=rtl] .modal-title {\n  margin-left: auto !important;\n  margin-right: 0 !important;\n  text-align: right !important;\n}\n.modal-header[dir=ltr] .modal-title {\n  margin-left: 0 !important;\n  margin-right: auto !important;\n  text-align: left !important;\n}\n.modal-title {\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin: 0;\n}\n.modal-body {\n  padding: 1.5rem;\n  max-height: 70vh;\n  overflow-y: auto;\n}\n.modal-footer {\n  border-top: 1px solid #dee2e6;\n  padding: 1rem 1.5rem;\n  background-color: #f8f9fa;\n}\n.attachment-info .card {\n  border: 1px solid #dee2e6;\n  border-radius: 0.5rem;\n  background-color: #f8f9fa;\n}\n.attachment-info .card-body {\n  padding: 1rem;\n}\n.form-label {\n  font-weight: 500;\n  color: #495057;\n  margin-bottom: 0.5rem;\n}\n.form-control,\n.form-select {\n  border: 1px solid #ced4da;\n  border-radius: 0.375rem;\n  padding: 0.5rem 0.75rem;\n  font-size: 0.875rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n.form-control:focus,\n.form-select:focus {\n  border-color: #B68A35;\n  box-shadow: 0 0 0 0.2rem rgba(212, 170, 58, 0.25);\n  outline: 0;\n}\n.form-control.is-invalid,\n.form-select.is-invalid {\n  border-color: #dc3545;\n}\n.form-control.is-invalid:focus,\n.form-select.is-invalid:focus {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n.invalid-feedback {\n  display: block;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 0.875rem;\n  color: #dc3545;\n}\ntextarea.form-control {\n  resize: vertical;\n  min-height: 80px;\n}\n.btn {\n  border-radius: 0.375rem;\n  font-weight: 500;\n  padding: 0.5rem 1rem;\n  transition: all 0.15s ease-in-out;\n}\n.btn-warning {\n  background-color: #B68A35;\n  border-color: #B68A35;\n  color: #FFFFFF;\n}\n.btn-warning:hover:not(:disabled) {\n  background-color: #B68A35;\n  border-color: #B68A35;\n}\n.btn-warning:disabled {\n  background-color: #6c757d;\n  border-color: #6c757d;\n  opacity: 0.65;\n}\n.btn-secondary {\n  background-color: transparent;\n  border-color: #1B1D21;\n  color: #1B1D21;\n}\n.btn-secondary:hover:not(:disabled) {\n  background-color: #2a2d33;\n  color: #ffff;\n}\n.text-danger {\n  color: #dc3545 !important;\n}\n.row.g-3 > * {\n  padding: 0.75rem;\n}\n.fas {\n  font-size: 0.875rem;\n}\n.fa-file-pdf {\n  color: #dc3545 !important;\n}\n.fa-file-word {\n  color: #043DFF !important;\n}\n.fa-file-excel {\n  color: #28a745 !important;\n}\n.fa-file-powerpoint {\n  color: #ffc107 !important;\n}\n.fa-file-image {\n  color: #17a2b8 !important;\n}\n.fa-file {\n  color: #6c757d !important;\n}\n.btn-close {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 1;\n  color: #000;\n  opacity: 0.5;\n  transition: opacity 0.15s ease-in-out;\n}\n.btn-close:hover {\n  opacity: 0.75;\n}\n.btn-close:focus {\n  outline: none;\n  box-shadow: none;\n}\n.alert-info {\n  background-color: #d1ecf1;\n  border-color: #bee5eb;\n  color: #0c5460;\n}\n.spinner-border-sm {\n  width: 1rem;\n  height: 1rem;\n}\n@media (max-width: 768px) {\n  .modal-dialog {\n    margin: 0.5rem;\n    max-width: calc(100% - 1rem);\n  }\n  .modal-body {\n    padding: 1rem;\n    max-height: 60vh;\n  }\n  .modal-header,\n  .modal-footer {\n    padding: 0.75rem 1rem;\n  }\n  .row.g-3 > * {\n    padding: 0.5rem;\n  }\n  .attachment-info .card-body {\n    padding: 0.75rem;\n  }\n}\n[dir=rtl] .modal-header {\n  text-align: right;\n}\n[dir=rtl] .me-2 {\n  margin-right: 0 !important;\n  margin-left: 0.5rem !important;\n}\n[dir=rtl] .ms-2 {\n  margin-left: 0 !important;\n  margin-right: 0.5rem !important;\n}\n.modal.fade .modal-dialog {\n  transition: transform 0.3s ease-out;\n  transform: translate(0, -50px);\n}\n.modal.show .modal-dialog {\n  transform: none;\n}\n.form-control:valid:focus {\n  border-color: #B68A35;\n  box-shadow: 0 0 0 0.2rem rgba(212, 170, 58, 0.25);\n}\n.btn:disabled {\n  cursor: not-allowed;\n}\n.modal-body::-webkit-scrollbar {\n  width: 6px;\n}\n.modal-body::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 3px;\n}\n.modal-body::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 3px;\n}\n.modal-body::-webkit-scrollbar-thumb:hover {\n  background: #a8a8a8;\n}\n.attachment-info .card {\n  animation: slideIn 0.3s ease-out;\n}\n@keyframes slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=edit-attachment-5L6RKA25.css.map */\n"] }]
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

// src/app/components/letters/signature-pad-modal/signature-pad-modal.component.ts
var _c05 = ["signatureCanvas"];
var SignaturePadModalComponent = class _SignaturePadModalComponent {
  translationService;
  signatureCanvas;
  isOpen = false;
  signatureSaved = new EventEmitter();
  modalClosed = new EventEmitter();
  canvas;
  ctx;
  isDrawing = false;
  lastX = 0;
  lastY = 0;
  uploadedFile = null;
  approvalNotes = "";
  constructor(translationService) {
    this.translationService = translationService;
  }
  ngAfterViewInit() {
    if (this.signatureCanvas) {
      this.initializeCanvas();
    }
  }
  open() {
    console.log("Opening signature pad modal");
    this.isOpen = true;
    console.log("Set isOpen to true, new value:", this.isOpen);
    this.approvalNotes = "";
    this.initializeCanvas();
    console.log("Signature pad modal opened");
  }
  close() {
    console.log("Closing signature pad modal, current isOpen:", this.isOpen);
    this.clearSignature();
    this.uploadedFile = null;
    this.approvalNotes = "";
    const backdrops = document.querySelectorAll(".modal-backdrop");
    console.log("Found backdrops:", backdrops.length);
    backdrops.forEach((backdrop, index) => {
      console.log(`Removing backdrop ${index}`);
      backdrop.remove();
    });
    document.body.classList.remove("modal-open");
    console.log("Removed modal-open class from body");
    this.isOpen = false;
    console.log("Set isOpen to false, new value:", this.isOpen);
    const modalElements = document.querySelectorAll(".modal");
    console.log("Found modal elements:", modalElements.length);
    modalElements.forEach((modalElement, index) => {
      console.log(`Hiding modal ${index}`);
      modalElement.classList.remove("show");
      modalElement.style.display = "none";
    });
    console.log("Force hidden all modals via DOM manipulation");
    this.modalClosed.emit();
    console.log("Signature pad modal closed, isOpen:", this.isOpen);
    setTimeout(() => {
      console.log("After timeout - isOpen:", this.isOpen);
    }, 100);
  }
  initializeCanvas() {
    if (!this.signatureCanvas)
      return;
    this.canvas = this.signatureCanvas.nativeElement;
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = 600;
    this.canvas.height = 200;
    this.ctx.strokeStyle = "#000000";
    this.ctx.lineWidth = 2;
    this.ctx.lineCap = "round";
    this.ctx.lineJoin = "round";
    this.ctx.fillStyle = "#ffffff";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.addEventListeners();
  }
  addEventListeners() {
    this.canvas.addEventListener("mousedown", this.startDrawing.bind(this));
    this.canvas.addEventListener("mousemove", this.draw.bind(this));
    this.canvas.addEventListener("mouseup", this.stopDrawing.bind(this));
    this.canvas.addEventListener("mouseout", this.stopDrawing.bind(this));
    this.canvas.addEventListener("touchstart", this.handleTouch.bind(this));
    this.canvas.addEventListener("touchmove", this.handleTouch.bind(this));
    this.canvas.addEventListener("touchend", this.stopDrawing.bind(this));
  }
  startDrawing(e) {
    this.isDrawing = true;
    const rect = this.canvas.getBoundingClientRect();
    this.lastX = e.clientX - rect.left;
    this.lastY = e.clientY - rect.top;
  }
  draw(e) {
    if (!this.isDrawing)
      return;
    const rect = this.canvas.getBoundingClientRect();
    const currentX = e.clientX - rect.left;
    const currentY = e.clientY - rect.top;
    this.ctx.beginPath();
    this.ctx.moveTo(this.lastX, this.lastY);
    this.ctx.lineTo(currentX, currentY);
    this.ctx.stroke();
    this.lastX = currentX;
    this.lastY = currentY;
  }
  stopDrawing() {
    this.isDrawing = false;
  }
  handleTouch(e) {
    e.preventDefault();
    const touch = e.touches[0];
    const mouseEvent = new MouseEvent(e.type === "touchstart" ? "mousedown" : "mousemove", {
      clientX: touch.clientX,
      clientY: touch.clientY
    });
    this.canvas.dispatchEvent(mouseEvent);
  }
  clearSignature() {
    if (this.ctx) {
      this.ctx.fillStyle = "#ffffff";
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
    this.uploadedFile = null;
  }
  onFileSelected(event) {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      this.uploadedFile = file;
      this.loadImageToCanvas(file);
    } else {
      alert(this.translate("letters.invalid_image_format"));
    }
  }
  loadImageToCanvas(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        this.ctx.fillStyle = "#ffffff";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        const scale = Math.min(this.canvas.width / img.width, this.canvas.height / img.height);
        const x = (this.canvas.width - img.width * scale) / 2;
        const y = (this.canvas.height - img.height * scale) / 2;
        this.ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
  saveSignature(event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    const approvalNotes = this.approvalNotes?.trim();
    if (this.uploadedFile) {
      this.signatureSaved.emit({
        signature: this.uploadedFile,
        approvalNotes
      });
      this.close();
      return;
    }
    if (!this.canvas)
      return;
    const imageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
    const hasContent = imageData.data.some((channel, index) => {
      return index % 4 !== 3 && channel !== 255;
    });
    if (!hasContent) {
      alert(this.translate("letters.signature_required"));
      return;
    }
    this.canvas.toBlob((blob) => {
      if (blob) {
        const file = new File([blob], "signature.png", { type: "image/png" });
        this.signatureSaved.emit({
          signature: file,
          approvalNotes
        });
        this.close();
      }
    }, "image/png");
  }
  onBackdropClick(event) {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }
  translate(key) {
    return this.translationService.translate(key);
  }
  isRTL() {
    return this.translationService.isRTL();
  }
  static \u0275fac = function SignaturePadModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SignaturePadModalComponent)(\u0275\u0275directiveInject(TranslationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignaturePadModalComponent, selectors: [["app-signature-pad-modal"]], viewQuery: function SignaturePadModalComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c05, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.signatureCanvas = _t.first);
    }
  }, inputs: { isOpen: "isOpen" }, outputs: { signatureSaved: "signatureSaved", modalClosed: "modalClosed" }, standalone: false, decls: 44, vars: 30, consts: [["signatureCanvas", ""], ["tabindex", "-1", "role", "dialog", 1, "modal", "fade", 3, "click"], ["role", "document", 1, "modal-dialog", "modal-lg", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header", "bg-primary", 3, "dir"], [1, "modal-title", "text-white"], [1, "fas", "fa-signature"], [1, "modal-body"], [1, "signature-container"], [1, "signature-instructions", "mb-3"], [1, "text-muted", "mb-2"], [1, "fas", "fa-info-circle", "me-2"], [1, "signature-canvas-container"], [1, "signature-canvas"], [1, "signature-actions", "mt-3"], [1, "row"], [1, "col-md-6"], ["type", "button", 1, "btn", "btn-outline-secondary", "w-100", 3, "click"], [1, "fas", "fa-eraser", "me-1"], ["for", "signatureUpload", 1, "btn", "btn-outline-primary", "w-100"], [1, "fas", "fa-upload", "me-1"], ["type", "file", "id", "signatureUpload", "accept", "image/*", 2, "display", "none", 3, "change"], [1, "approval-notes-section", "mt-4"], [1, "mb-3"], [1, "fas", "fa-sticky-note", "me-2"], ["rows", "3", 1, "form-control", 3, "ngModelChange", "placeholder", "ngModel"], [1, "form-text", "text-muted"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "fas", "fa-times", "me-1"], ["type", "button", 1, "btn", "btn-success", 3, "click"], [1, "fas", "fa-check", "me-1"], [1, "modal-backdrop", "fade"]], template: function SignaturePadModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275listener("click", function SignaturePadModalComponent_Template_div_click_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onBackdropClick($event));
      });
      \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "h5", 5);
      \u0275\u0275element(5, "i", 6);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "p", 10);
      \u0275\u0275element(11, "i", 11);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 12);
      \u0275\u0275element(14, "canvas", 13, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 14)(17, "div", 15)(18, "div", 16)(19, "button", 17);
      \u0275\u0275listener("click", function SignaturePadModalComponent_Template_button_click_19_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.clearSignature());
      });
      \u0275\u0275element(20, "i", 18);
      \u0275\u0275text(21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 16)(23, "label", 19);
      \u0275\u0275element(24, "i", 20);
      \u0275\u0275text(25);
      \u0275\u0275elementStart(26, "input", 21);
      \u0275\u0275listener("change", function SignaturePadModalComponent_Template_input_change_26_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFileSelected($event));
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(27, "div", 22)(28, "h6", 23);
      \u0275\u0275element(29, "i", 24);
      \u0275\u0275text(30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 23)(32, "textarea", 25);
      \u0275\u0275twoWayListener("ngModelChange", function SignaturePadModalComponent_Template_textarea_ngModelChange_32_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.approvalNotes, $event) || (ctx.approvalNotes = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275text(33, "              ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "small", 26);
      \u0275\u0275text(35);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(36, "div", 27)(37, "button", 28);
      \u0275\u0275listener("click", function SignaturePadModalComponent_Template_button_click_37_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.close());
      });
      \u0275\u0275element(38, "i", 29);
      \u0275\u0275text(39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "button", 30);
      \u0275\u0275listener("click", function SignaturePadModalComponent_Template_button_click_40_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.saveSignature($event));
      });
      \u0275\u0275element(41, "i", 31);
      \u0275\u0275text(42);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275element(43, "div", 32);
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
      \u0275\u0275classProp("me-2", !ctx.isRTL())("ms-2", ctx.isRTL());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.translate("letters.signature_pad"), " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.translate("letters.draw_signature"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("rtl", ctx.isRTL());
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", ctx.translate("letters.clear_signature"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.translate("letters.upload_signature"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.translate("letters.approval_notes"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("placeholder", ctx.translate("letters.approval_notes_placeholder"));
      \u0275\u0275twoWayProperty("ngModel", ctx.approvalNotes);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("letters.approval_notes_help"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.cancel"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.save"), " ");
      \u0275\u0275advance();
      \u0275\u0275styleProp("display", ctx.isOpen ? "block" : "none");
      \u0275\u0275classProp("show", ctx.isOpen);
    }
  }, dependencies: [DefaultValueAccessor, NgControlStatus, NgModel], styles: ['\n\n.modal.show[_ngcontent-%COMP%] {\n  display: block !important;\n}\n.modal[_ngcontent-%COMP%]:not(.show) {\n  display: none !important;\n}\n.modal-backdrop.show[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.modal-backdrop[_ngcontent-%COMP%]:not(.show) {\n  opacity: 0;\n}\n.signature-container[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.signature-instructions[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border: 1px solid #dee2e6;\n  border-radius: 0.375rem;\n  padding: 1rem;\n}\n.signature-canvas-container[_ngcontent-%COMP%] {\n  border: 2px dashed #dee2e6;\n  border-radius: 0.375rem;\n  padding: 1rem;\n  background-color: #ffffff;\n  position: relative;\n  overflow: hidden;\n}\n.signature-canvas[_ngcontent-%COMP%] {\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  cursor: crosshair;\n  background-color: #ffffff;\n  display: block;\n  margin: 0 auto;\n  max-width: 100%;\n  height: auto;\n}\n.signature-canvas[_ngcontent-%COMP%]:hover {\n  border-color: #86b7fe;\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n.signature-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 0.5rem;\n}\n.signature-canvas.rtl[_ngcontent-%COMP%] {\n  direction: rtl;\n}\n@media (max-width: 768px) {\n  .modal-dialog[_ngcontent-%COMP%] {\n    margin: 0.5rem;\n  }\n  .signature-canvas[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 150px;\n  }\n  .signature-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .signature-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 0.5rem;\n  }\n}\n@media (hover: none) and (pointer: coarse) {\n  .signature-canvas[_ngcontent-%COMP%] {\n    touch-action: none;\n  }\n}\n.signature-canvas-container[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-image:\n    linear-gradient(\n      to right,\n      #f0f0f0 1px,\n      transparent 1px),\n    linear-gradient(\n      to bottom,\n      #f0f0f0 1px,\n      transparent 1px);\n  background-size: 20px 20px;\n  opacity: 0.3;\n  pointer-events: none;\n  z-index: 1;\n}\n.signature-canvas[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n}\n.signature-canvas-container[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n}\n.signature-canvas-container[_ngcontent-%COMP%]:hover {\n  border-color: #86b7fe;\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.1);\n}\n.btn-outline-secondary[_ngcontent-%COMP%] {\n  border-color: #6c757d;\n  color: #6c757d;\n}\n.btn-outline-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #6c757d;\n  border-color: #6c757d;\n  color: #fff;\n}\n.btn-success[_ngcontent-%COMP%] {\n  background-color: #198754;\n  border-color: #198754;\n}\n.btn-success[_ngcontent-%COMP%]:hover {\n  background-color: #157347;\n  border-color: #146c43;\n}\n.modal-header.bg-primary[_ngcontent-%COMP%] {\n  background-color: #D4AF5F !important;\n}\n.modal-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.signature-instructions[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9rem;\n}\n.signature-instructions[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #0d6efd;\n}\n.approval-notes-section[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border: 1px solid #dee2e6;\n  border-radius: 0.375rem;\n  padding: 1rem;\n  margin-top: 1rem;\n}\n.approval-notes-section[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: #495057;\n  font-weight: 600;\n  margin-bottom: 0.75rem;\n}\n.approval-notes-section[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.approval-notes-section[_ngcontent-%COMP%]   .form-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  margin-top: 0.25rem;\n}\n/*# sourceMappingURL=signature-pad-modal.component-LRLW2BHT.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignaturePadModalComponent, [{
    type: Component,
    args: [{ selector: "app-signature-pad-modal", standalone: false, template: `<div class="modal fade" [class.show]="isOpen" [style.display]="isOpen ? 'block' : 'none'" \r
     tabindex="-1" role="dialog" [attr.aria-hidden]="!isOpen" (click)="onBackdropClick($event)">\r
  <div class="modal-dialog modal-lg modal-dialog-centered" role="document">\r
    <div class="modal-content">\r
      <div class="modal-header bg-primary" [dir]="isRTL() ? 'rtl' : 'ltr'">\r
        <h5 class="modal-title text-white" [class.text-end]="isRTL()" [class.text-start]="!isRTL()">\r
          <i class="fas fa-signature" [class.me-2]="!isRTL()" [class.ms-2]="isRTL()"></i>\r
          {{ translate('letters.signature_pad') }}\r
        </h5>\r
      </div>\r
      <div class="modal-body">\r
        <div class="signature-container">\r
          <div class="signature-instructions mb-3">\r
            <p class="text-muted mb-2">\r
              <i class="fas fa-info-circle me-2"></i>\r
              {{ translate('letters.draw_signature') }}\r
            </p>\r
          </div>\r
          \r
          <div class="signature-canvas-container">\r
            <canvas #signatureCanvas \r
                    class="signature-canvas"\r
                    [class.rtl]="isRTL()">\r
            </canvas>\r
          </div>\r
          <div class="signature-actions mt-3">\r
            <div class="row">\r
              <div class="col-md-6">\r
                <button type="button" \r
                        class="btn btn-outline-secondary w-100" \r
                        (click)="clearSignature()">\r
                  <i class="fas fa-eraser me-1"></i>\r
                  {{ translate('letters.clear_signature') }}\r
                </button>\r
              </div>\r
              <div class="col-md-6">\r
                <label class="btn btn-outline-primary w-100" for="signatureUpload">\r
                  <i class="fas fa-upload me-1"></i>\r
                  {{ translate('letters.upload_signature') }}\r
                  <input type="file" \r
                         id="signatureUpload" \r
                         accept="image/*" \r
                         (change)="onFileSelected($event)" \r
                         style="display: none;">\r
                </label>\r
              </div>\r
            </div>\r
          </div>\r
          <!-- Approval Notes Section -->\r
          <div class="approval-notes-section mt-4">\r
            <h6 class="mb-3">\r
              <i class="fas fa-sticky-note me-2"></i>\r
              {{ translate('letters.approval_notes') }}\r
            </h6>\r
            <div class="mb-3">\r
              <textarea \r
                class="form-control" \r
                rows="3" \r
                [placeholder]="translate('letters.approval_notes_placeholder')"\r
                [(ngModel)]="approvalNotes">\r
              </textarea>\r
              <small class="form-text text-muted">\r
                {{ translate('letters.approval_notes_help') }}\r
              </small>\r
            </div>\r
          </div>\r
\r
          \r
        </div>\r
      </div>\r
      <div class="modal-footer">\r
        <button type="button" class="btn btn-secondary" (click)="close()">\r
          <i class="fas fa-times me-1"></i>\r
          {{ translate('common.cancel') }}\r
        </button>\r
        <button type="button" class="btn btn-success" (click)="saveSignature($event)">\r
          <i class="fas fa-check me-1"></i>\r
          {{ translate('common.save') }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
<div class="modal-backdrop fade" [class.show]="isOpen" [style.display]="isOpen ? 'block' : 'none'"></div>\r
`, styles: ['/* src/app/components/letters/signature-pad-modal/signature-pad-modal.component.css */\n.modal.show {\n  display: block !important;\n}\n.modal:not(.show) {\n  display: none !important;\n}\n.modal-backdrop.show {\n  opacity: 0.5;\n}\n.modal-backdrop:not(.show) {\n  opacity: 0;\n}\n.signature-container {\n  text-align: center;\n}\n.signature-instructions {\n  background-color: #f8f9fa;\n  border: 1px solid #dee2e6;\n  border-radius: 0.375rem;\n  padding: 1rem;\n}\n.signature-canvas-container {\n  border: 2px dashed #dee2e6;\n  border-radius: 0.375rem;\n  padding: 1rem;\n  background-color: #ffffff;\n  position: relative;\n  overflow: hidden;\n}\n.signature-canvas {\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  cursor: crosshair;\n  background-color: #ffffff;\n  display: block;\n  margin: 0 auto;\n  max-width: 100%;\n  height: auto;\n}\n.signature-canvas:hover {\n  border-color: #86b7fe;\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n.signature-actions {\n  display: flex;\n  justify-content: center;\n  gap: 0.5rem;\n}\n.signature-canvas.rtl {\n  direction: rtl;\n}\n@media (max-width: 768px) {\n  .modal-dialog {\n    margin: 0.5rem;\n  }\n  .signature-canvas {\n    width: 100%;\n    height: 150px;\n  }\n  .signature-actions {\n    flex-direction: column;\n    align-items: center;\n  }\n  .signature-actions .btn {\n    width: 100%;\n    margin-bottom: 0.5rem;\n  }\n}\n@media (hover: none) and (pointer: coarse) {\n  .signature-canvas {\n    touch-action: none;\n  }\n}\n.signature-canvas-container::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-image:\n    linear-gradient(\n      to right,\n      #f0f0f0 1px,\n      transparent 1px),\n    linear-gradient(\n      to bottom,\n      #f0f0f0 1px,\n      transparent 1px);\n  background-size: 20px 20px;\n  opacity: 0.3;\n  pointer-events: none;\n  z-index: 1;\n}\n.signature-canvas {\n  position: relative;\n  z-index: 2;\n}\n.signature-canvas-container {\n  transition: all 0.3s ease;\n}\n.signature-canvas-container:hover {\n  border-color: #86b7fe;\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.1);\n}\n.btn-outline-secondary {\n  border-color: #6c757d;\n  color: #6c757d;\n}\n.btn-outline-secondary:hover {\n  background-color: #6c757d;\n  border-color: #6c757d;\n  color: #fff;\n}\n.btn-success {\n  background-color: #198754;\n  border-color: #198754;\n}\n.btn-success:hover {\n  background-color: #157347;\n  border-color: #146c43;\n}\n.modal-header.bg-primary {\n  background-color: #D4AF5F !important;\n}\n.modal-title {\n  font-weight: 600;\n}\n.signature-instructions p {\n  margin: 0;\n  font-size: 0.9rem;\n}\n.signature-instructions i {\n  color: #0d6efd;\n}\n.approval-notes-section {\n  background-color: #f8f9fa;\n  border: 1px solid #dee2e6;\n  border-radius: 0.375rem;\n  padding: 1rem;\n  margin-top: 1rem;\n}\n.approval-notes-section h6 {\n  color: #495057;\n  font-weight: 600;\n  margin-bottom: 0.75rem;\n}\n.approval-notes-section textarea {\n  resize: vertical;\n  min-height: 80px;\n}\n.approval-notes-section .form-text {\n  font-size: 0.875rem;\n  margin-top: 0.25rem;\n}\n/*# sourceMappingURL=signature-pad-modal.component-LRLW2BHT.css.map */\n'] }]
  }], () => [{ type: TranslationService }], { signatureCanvas: [{
    type: ViewChild,
    args: ["signatureCanvas", { static: false }]
  }], isOpen: [{
    type: Input
  }], signatureSaved: [{
    type: Output
  }], modalClosed: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignaturePadModalComponent, { className: "SignaturePadModalComponent", filePath: "src/app/components/letters/signature-pad-modal/signature-pad-modal.component.ts", lineNumber: 10 });
})();

// src/app/components/letters/letter-details-modal/letter-details-modal.component.ts
function LetterDetailsModalComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "span", 14);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "p", 15);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.translate("common.loading"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("letter_details.loading"), " ");
  }
}
function LetterDetailsModalComponent_div_8_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 37)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 38);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.translate("letters.to"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.letter.to);
  }
}
function LetterDetailsModalComponent_div_8_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 37)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 38);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.translate("letters.internal_user"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.letter.internalUserName);
  }
}
function LetterDetailsModalComponent_div_8_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 37)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 38);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.translate("letters.cc"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.letter.cc);
  }
}
function LetterDetailsModalComponent_div_8_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 37)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 38);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.translate("letters.bcc"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.letter.bcc);
  }
}
function LetterDetailsModalComponent_div_8_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 37)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 38);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.translate("letters.reference_numbers"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.letter.referenceNumbers);
  }
}
function LetterDetailsModalComponent_div_8_div_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 37)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 38);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.translate("letters.approved_by"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.letter.approvedByName);
  }
}
function LetterDetailsModalComponent_div_8_div_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 37)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 38);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.translate("letter_details.approved_at"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(ctx_r0.letter.approvedAt));
  }
}
function LetterDetailsModalComponent_div_8_div_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 37)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 38);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.translate("letters.approval_notes"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.letter.approvalNotes);
  }
}
function LetterDetailsModalComponent_div_8_div_64_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 37)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 38);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.translate("letter_details.email_sent_at"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(ctx_r0.letter.emailSentAt));
  }
}
function LetterDetailsModalComponent_div_8_div_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "h6", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 33)(4, "div", 36)(5, "div", 37)(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 38)(9, "span", 39);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(11, LetterDetailsModalComponent_div_8_div_64_div_11_Template, 6, 2, "div", 35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("letter_details.email_info"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r0.translate("letters.email_sent"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.letter.isEmailSent ? "bg-success" : "bg-secondary");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.letter.isEmailSent ? ctx_r0.translate("common.yes") : ctx_r0.translate("common.no"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.letter.emailSentAt);
  }
}
function LetterDetailsModalComponent_div_8_div_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "h6", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 46);
    \u0275\u0275element(4, "img", 47);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("letter_details.signature"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r0.letter.signatureImagePath, \u0275\u0275sanitizeUrl);
  }
}
function LetterDetailsModalComponent_div_8_div_66_div_4_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64)(1, "small", 65);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const attachment_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(attachment_r3.description);
  }
}
function LetterDetailsModalComponent_div_8_div_66_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51)(1, "div", 52)(2, "div", 19)(3, "div", 53)(4, "div", 54);
    \u0275\u0275element(5, "i", 55);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 56)(8, "span", 57);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 57);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, LetterDetailsModalComponent_div_8_div_66_div_4_div_14_Template, 3, 1, "div", 58);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 23)(16, "div", 59)(17, "button", 60);
    \u0275\u0275listener("click", function LetterDetailsModalComponent_div_8_div_66_div_4_Template_button_click_17_listener() {
      const attachment_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.viewAttachment(attachment_r3));
    });
    \u0275\u0275element(18, "i", 61);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 62);
    \u0275\u0275listener("click", function LetterDetailsModalComponent_div_8_div_66_div_4_Template_button_click_20_listener() {
      const attachment_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.downloadAttachment(attachment_r3));
    });
    \u0275\u0275element(21, "i", 63);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const attachment_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", attachment_r3.fileName, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r0.translate("letters.file_type"), ": ", attachment_r3.fileType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r0.translate("letters.uploaded_by"), ": ", attachment_r3.uploadedByName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r0.translate("letters.uploaded_at"), ": ", ctx_r0.formatDate(attachment_r3.uploadedAt));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", attachment_r3.description);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("common.view"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("common.download"), " ");
  }
}
function LetterDetailsModalComponent_div_8_div_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "h6", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 49);
    \u0275\u0275template(4, LetterDetailsModalComponent_div_8_div_66_div_4_Template, 23, 10, "div", 50);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r0.translate("letters.attachments"), " (", ctx_r0.letter.attachments.length, ") ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.letter.attachments);
  }
}
function LetterDetailsModalComponent_div_8_div_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 37)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 38)(5, "small", 65);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.translate("letter_details.pdf_path"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.letter.pdfPath);
  }
}
function LetterDetailsModalComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "div", 18)(3, "div", 19)(4, "h4", 20);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 21)(7, "span", 22);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 22);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 22);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 23)(14, "div", 24)(15, "small", 25);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "small", 25);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(19, "div", 26)(20, "div", 18)(21, "div", 27)(22, "h6", 28);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 29);
    \u0275\u0275element(25, "div", 30);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(26, "div", 31)(27, "div", 18)(28, "div", 32)(29, "h6", 28);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 33);
    \u0275\u0275template(32, LetterDetailsModalComponent_div_8_div_32_Template, 6, 2, "div", 34)(33, LetterDetailsModalComponent_div_8_div_33_Template, 6, 2, "div", 34)(34, LetterDetailsModalComponent_div_8_div_34_Template, 6, 2, "div", 34)(35, LetterDetailsModalComponent_div_8_div_35_Template, 6, 2, "div", 34)(36, LetterDetailsModalComponent_div_8_div_36_Template, 6, 2, "div", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 32)(38, "h6", 28);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 33)(41, "div", 36)(42, "div", 37)(43, "strong");
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 38);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 36)(48, "div", 37)(49, "strong");
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 38)(52, "span", 39);
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(54, "div", 36)(55, "div", 37)(56, "strong");
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 38)(59, "span", 39);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(61, LetterDetailsModalComponent_div_8_div_61_Template, 6, 2, "div", 34)(62, LetterDetailsModalComponent_div_8_div_62_Template, 6, 2, "div", 34)(63, LetterDetailsModalComponent_div_8_div_63_Template, 6, 2, "div", 35);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(64, LetterDetailsModalComponent_div_8_div_64_Template, 12, 6, "div", 40)(65, LetterDetailsModalComponent_div_8_div_65_Template, 5, 2, "div", 41)(66, LetterDetailsModalComponent_div_8_div_66_Template, 5, 3, "div", 42);
    \u0275\u0275elementStart(67, "div", 43)(68, "h6", 28);
    \u0275\u0275text(69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "div", 33)(71, "div", 18)(72, "div", 32)(73, "div", 36)(74, "div", 37)(75, "strong");
    \u0275\u0275text(76);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "div", 38);
    \u0275\u0275text(78);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "div", 18)(80, "div", 37)(81, "strong");
    \u0275\u0275text(82);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(83, "div", 38);
    \u0275\u0275text(84);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(85, "div", 32)(86, "div", 36)(87, "div", 37)(88, "strong");
    \u0275\u0275text(89);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(90, "div", 38);
    \u0275\u0275text(91);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(92, LetterDetailsModalComponent_div_8_div_92_Template, 7, 2, "div", 35);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.letter.subject);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.getDirectionBadgeClass(ctx_r0.letter.direction));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getDirectionLabel(ctx_r0.letter.direction), " ");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.getLetterTypeBadgeClass(ctx_r0.letter.letterType || 1));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getLetterTypeLabel(ctx_r0.letter.letterType || 1), " ");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.getStatusBadgeClass(ctx_r0.letter.status || 0));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getStatusLabel(ctx_r0.letter.status || 0), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r0.translate("letter_details.letter_id"), ": ", ctx_r0.letter.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r0.translate("letters.letter_date"), ": ", ctx_r0.formatDate(ctx_r0.letter.letterDate));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("letter_details.content"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", ctx_r0.getLetterContent(), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("letter_details.recipient_info"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.letter.letterType !== 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.letter.letterType === 0 && ctx_r0.letter.internalUserName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.letter.cc);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.letter.bcc);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.letter.referenceNumbers);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("letter_details.letter_info"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r0.translate("letters.direction"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.getDirectionLabel(ctx_r0.letter.direction), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r0.translate("letters.letter_type"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.getLetterTypeBadgeClass(ctx_r0.letter.letterType || 1));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getLetterTypeLabel(ctx_r0.letter.letterType || 1), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r0.translate("letters.status"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.getStatusBadgeClass(ctx_r0.letter.status || 0));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getStatusLabel(ctx_r0.letter.status || 0), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.letter.approvedByName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.letter.approvedAt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.letter.approvalNotes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.letter.isEmailSent !== void 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.letter.signatureImagePath);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.letter.attachments && ctx_r0.letter.attachments.length > 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("letter_details.system_info"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r0.translate("common.created_by"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.letter.createdByName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r0.translate("letter_details.created_at"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(ctx_r0.letter.createdAt));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r0.translate("letter_details.updated_at"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(ctx_r0.letter.updatedAt));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.letter.pdfPath);
  }
}
function LetterDetailsModalComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "i", 66);
    \u0275\u0275elementStart(2, "h5", 15);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 65);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("letter_details.error_loading"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("letter_details.try_again_later"), " ");
  }
}
function LetterDetailsModalComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 67);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("show", ctx_r0.isVisible);
  }
}
var LetterDetailsModalComponent = class _LetterDetailsModalComponent {
  lettersService;
  translationService;
  letterId = null;
  letter = null;
  isLoading = false;
  isVisible = false;
  constructor(lettersService, translationService) {
    this.lettersService = lettersService;
    this.translationService = translationService;
  }
  ngOnInit() {
  }
  open(letterId) {
    this.letterId = letterId;
    this.isVisible = true;
    this.loadLetterDetails();
  }
  close() {
    this.isVisible = false;
    this.letter = null;
    this.letterId = null;
  }
  loadLetterDetails() {
    if (!this.letterId)
      return;
    this.isLoading = true;
    this.lettersService.getLetter(this.letterId).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.letter = response.data;
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error("Error loading letter details:", error);
        this.isLoading = false;
      }
    });
  }
  translate(key) {
    return this.translationService.translate(key);
  }
  isRTL() {
    return this.translationService.isRTL();
  }
  formatDate(dateString) {
    if (!dateString)
      return "";
    const date = new Date(dateString);
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
  }
  getDirectionLabel(direction) {
    const directions = {
      0: this.translate("letters.directions.0"),
      1: this.translate("letters.directions.1")
    };
    return directions[direction] || "Unknown";
  }
  getLetterTypeLabel(letterType) {
    const letterTypes = {
      0: this.translate("letters.letter_types.0"),
      1: this.translate("letters.letter_types.1")
    };
    return letterTypes[letterType] || "Unknown";
  }
  getStatusLabel(status) {
    const statuses = {
      0: this.translate("letters.statuses.0"),
      1: this.translate("letters.statuses.1"),
      2: this.translate("letters.statuses.2"),
      3: this.translate("letters.statuses.3"),
      4: this.translate("letters.statuses.4")
    };
    return statuses[status] || "Unknown";
  }
  getDirectionBadgeClass(direction) {
    return direction === 0 ? "bg-primary" : "bg-success";
  }
  getLetterTypeBadgeClass(letterType) {
    return letterType === 0 ? "bg-info" : "bg-warning";
  }
  getStatusBadgeClass(status) {
    switch (status) {
      case 0:
        return "bg-secondary";
      // Draft
      case 1:
        return "bg-warning";
      // Pending
      case 2:
        return "bg-success";
      // Approved
      case 3:
        return "bg-danger";
      // Rejected
      case 4:
        return "bg-info";
      // Sent
      default:
        return "bg-secondary";
    }
  }
  downloadAttachment(attachment) {
    console.log("Download attachment:", attachment);
  }
  viewAttachment(attachment) {
    console.log("View attachment:", attachment);
  }
  getLetterContent() {
    if (!this.letter)
      return "";
    if (this.letter.bodyHtml && this.letter.bodyHtml.trim() !== "") {
      return this.letter.bodyHtml;
    }
    return this.letter.body ? this.letter.body.replace(/\n/g, "<br>") : "";
  }
  static \u0275fac = function LetterDetailsModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LetterDetailsModalComponent)(\u0275\u0275directiveInject(LettersService), \u0275\u0275directiveInject(TranslationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LetterDetailsModalComponent, selectors: [["app-letter-details-modal"]], inputs: { letterId: "letterId" }, standalone: false, decls: 15, vars: 11, consts: [["tabindex", "-1", "role", "dialog", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-xl", "modal-dialog-scrollable"], [1, "modal-content"], [1, "modal-header", "d-flex", "justify-content-between", "align-items-center"], [1, "modal-title"], [1, "modal-body"], ["class", "text-center py-5", 4, "ngIf"], ["class", "letter-details", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "bi", "bi-x-circle", "me-2"], ["class", "modal-backdrop fade", 3, "show", 4, "ngIf"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "mt-3", "text-muted"], [1, "letter-details"], [1, "letter-header", "mb-4"], [1, "row"], [1, "col-md-8"], [1, "letter-subject", "mb-2"], [1, "letter-badges", "mb-3"], [1, "badge", "me-2"], [1, "col-md-4", "text-end"], [1, "letter-meta"], [1, "text-muted", "d-block"], [1, "letter-content", "mb-4"], [1, "col-12"], [1, "section-title"], [1, "content-body", "p-3", "bg-light", "rounded"], [1, "letter-content-display", 3, "innerHTML"], [1, "letter-info", "mb-4"], [1, "col-md-6"], [1, "info-section", "p-3", "bg-light", "rounded"], ["class", "row mb-2", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "row", "mb-2"], [1, "col-4"], [1, "col-8"], [1, "badge"], ["class", "email-info mb-4", 4, "ngIf"], ["class", "signature-section mb-4", 4, "ngIf"], ["class", "attachments-section mb-4", 4, "ngIf"], [1, "system-info"], [1, "email-info", "mb-4"], [1, "signature-section", "mb-4"], [1, "signature-container", "p-3", "bg-light", "rounded", "text-center"], ["alt", "Signature", 1, "signature-image", "img-fluid", 2, "max-height", "200px", 3, "src"], [1, "attachments-section", "mb-4"], [1, "attachments-list"], ["class", "attachment-item p-3 bg-light rounded mb-2", 4, "ngFor", "ngForOf"], [1, "attachment-item", "p-3", "bg-light", "rounded", "mb-2"], [1, "row", "align-items-center"], [1, "attachment-info"], [1, "attachment-name", "fw-medium", "mb-1"], [1, "bi", "bi-paperclip", "me-2"], [1, "attachment-meta", "text-muted", "small"], [1, "me-3"], ["class", "attachment-description mt-1", 4, "ngIf"], [1, "attachment-actions"], [1, "btn", "btn-sm", "btn-outline-primary", "me-2", 3, "click"], [1, "bi", "bi-eye", "me-1"], [1, "btn", "btn-sm", "btn-outline-success", 3, "click"], [1, "bi", "bi-download", "me-1"], [1, "attachment-description", "mt-1"], [1, "text-muted"], [1, "bi", "bi-exclamation-triangle", "text-warning", 2, "font-size", "3rem"], [1, "modal-backdrop", "fade"]], template: function LetterDetailsModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h5", 4);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 5);
      \u0275\u0275template(7, LetterDetailsModalComponent_div_7_Template, 6, 2, "div", 6)(8, LetterDetailsModalComponent_div_8_Template, 93, 47, "div", 7)(9, LetterDetailsModalComponent_div_9_Template, 6, 2, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 8)(11, "button", 9);
      \u0275\u0275listener("click", function LetterDetailsModalComponent_Template_button_click_11_listener() {
        return ctx.close();
      });
      \u0275\u0275element(12, "i", 10);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(14, LetterDetailsModalComponent_div_14_Template, 1, 2, "div", 11);
    }
    if (rf & 2) {
      \u0275\u0275styleProp("display", ctx.isVisible ? "block" : "none");
      \u0275\u0275classProp("show", ctx.isVisible);
      \u0275\u0275attribute("aria-hidden", !ctx.isVisible);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.translate("letter_details.title"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.letter);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && !ctx.letter);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.close"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isVisible);
    }
  }, dependencies: [NgForOf, NgIf], styles: ['\n\n.quill-editor-container[_ngcontent-%COMP%] {\n  isolation: isolate;\n  background: #fff;\n  border: 1px solid #CED4DA;\n  border-radius: 0.5rem;\n  overflow: hidden;\n  width: 100%;\n  max-width: 100%;\n  min-width: 0;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.quill-editor-container.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.quill-editor-container[_ngcontent-%COMP%]   .ql-toolbar.ql-snow[_ngcontent-%COMP%] {\n  display: flex !important;\n  border: 0;\n  border-bottom: 1px solid #E5E7EB;\n  background: #F8F9FA;\n  padding: 8px;\n  width: 100%;\n  flex-shrink: 0;\n}\n.quill-editor-container[_ngcontent-%COMP%]   .ql-container.ql-snow[_ngcontent-%COMP%] {\n  display: flex !important;\n  border: 0;\n  height: 340px;\n  background: #fff;\n  width: 100%;\n  flex: 1;\n  flex-direction: column;\n}\n.quill-editor-container[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%] {\n  min-height: 300px;\n  padding: 14px 16px;\n  overflow-y: auto;\n  direction: rtl;\n  text-align: right;\n  font-family:\n    "IBM Plex Sans Arabic",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  font-size: 14px;\n  line-height: 1.6;\n  background: #fff;\n  border: none;\n  width: 100%;\n  max-width: 100%;\n  box-sizing: border-box;\n  flex: 1;\n}\n.quill-editor-container[_ngcontent-%COMP%]   .ql-editor[dir=rtl][_ngcontent-%COMP%] {\n  direction: rtl;\n  text-align: right;\n}\n.quill-editor-container[_ngcontent-%COMP%]   .ql-editor[dir=ltr][_ngcontent-%COMP%] {\n  direction: ltr;\n  text-align: left;\n}\n.quill-editor-container[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: none !important;\n  background: transparent !important;\n  cursor: pointer !important;\n  padding: 5px !important;\n  border-radius: 3px !important;\n  display: inline-block !important;\n  visibility: visible !important;\n  opacity: 1 !important;\n  margin: 0 2px !important;\n  min-width: 28px !important;\n  height: 28px !important;\n  line-height: 1 !important;\n  transition: all 0.2s ease !important;\n}\n.quill-editor-container[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #e9ecef !important;\n  transform: scale(1.05) !important;\n}\n.quill-editor-container[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   button.ql-active[_ngcontent-%COMP%] {\n  background-color: #007bff !important;\n  color: white !important;\n  box-shadow: 0 2px 4px rgba(0, 123, 255, 0.3) !important;\n}\n.quill-editor-container[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   button.ql-bold.ql-active[_ngcontent-%COMP%], \n.quill-editor-container[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   button.ql-italic.ql-active[_ngcontent-%COMP%], \n.quill-editor-container[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   button.ql-underline.ql-active[_ngcontent-%COMP%], \n.quill-editor-container[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   button.ql-strike.ql-active[_ngcontent-%COMP%] {\n  background-color: #007bff !important;\n  color: white !important;\n}\n.quill-editor-container[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   .ql-bold[_ngcontent-%COMP%]::before {\n  content: "B" !important;\n  font-weight: bold !important;\n}\n.quill-editor-container[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   .ql-italic[_ngcontent-%COMP%]::before {\n  content: "I" !important;\n  font-style: italic !important;\n}\n.quill-editor-container[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   .ql-underline[_ngcontent-%COMP%]::before {\n  content: "U" !important;\n  text-decoration: underline !important;\n}\n.quill-editor-container[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   .ql-strike[_ngcontent-%COMP%]::before {\n  content: "S" !important;\n  text-decoration: line-through !important;\n}\n.quill-editor-container[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   .ql-formats[_ngcontent-%COMP%] {\n  margin-right: 15px !important;\n  display: inline-block !important;\n  vertical-align: middle !important;\n}\n.quill-editor-container[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   .ql-picker[_ngcontent-%COMP%] {\n  display: inline-block !important;\n  visibility: visible !important;\n  opacity: 1 !important;\n  margin: 0 2px !important;\n}\n.quill-editor-container[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   .ql-picker-label[_ngcontent-%COMP%] {\n  border: 1px solid transparent !important;\n  padding: 5px 8px !important;\n  border-radius: 3px !important;\n  cursor: pointer !important;\n  display: inline-block !important;\n  min-width: 60px !important;\n  height: 28px !important;\n  line-height: 1.2 !important;\n  font-size: 12px !important;\n}\n.quill-editor-container[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   .ql-picker-label[_ngcontent-%COMP%]:hover {\n  background-color: #e9ecef !important;\n}\n.quill-editor-container[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  margin: 10px 0;\n  width: 100%;\n  max-width: 100%;\n  table-layout: fixed;\n  direction: rtl;\n}\n.quill-editor-container[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \n.quill-editor-container[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  padding: 8px;\n  text-align: right;\n  vertical-align: top;\n  min-width: 50px;\n  word-wrap: break-word;\n  position: relative;\n}\n.quill-editor-container[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  font-weight: bold;\n}\n.quill-editor-container[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:focus, \n.quill-editor-container[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:focus {\n  outline: 2px solid #007bff;\n  outline-offset: -2px;\n}\n.quill-editor-container[_ngcontent-%COMP%]   .ql-better-table[_ngcontent-%COMP%] {\n  position: relative;\n}\n.quill-editor-container[_ngcontent-%COMP%]   .ql-better-table[_ngcontent-%COMP%]   .qlbt-operation-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  background: white;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  padding: 5px;\n  z-index: 1000;\n  min-width: 200px;\n}\n.quill-editor-container[_ngcontent-%COMP%]   .ql-better-table[_ngcontent-%COMP%]   .qlbt-operation-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 2px;\n  padding: 6px 12px;\n  font-size: 12px;\n  border: 1px solid #ddd;\n  background: white;\n  cursor: pointer;\n  border-radius: 3px;\n  display: block;\n  width: 100%;\n  text-align: right;\n}\n.quill-editor-container[_ngcontent-%COMP%]   .ql-better-table[_ngcontent-%COMP%]   .qlbt-operation-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #f0f0f0;\n}\n.quill-editor-container[_ngcontent-%COMP%]   .ql-better-table[_ngcontent-%COMP%]   .qlbt-cell-operations[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 2px;\n  margin-bottom: 5px;\n}\n.quill-editor-container[_ngcontent-%COMP%]   .ql-better-table[_ngcontent-%COMP%]   .qlbt-cell-operations[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  font-size: 11px;\n  border: 1px solid #ddd;\n  background: #f8f9fa;\n  cursor: pointer;\n  border-radius: 3px;\n  flex: 1;\n  min-width: 60px;\n}\n.quill-editor-container[_ngcontent-%COMP%]   .ql-better-table[_ngcontent-%COMP%]   .qlbt-cell-operations[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n}\n.quill-editor-container[_ngcontent-%COMP%]   .ql-better-table[_ngcontent-%COMP%]   .qlbt-row-operations[_ngcontent-%COMP%], \n.quill-editor-container[_ngcontent-%COMP%]   .ql-better-table[_ngcontent-%COMP%]   .qlbt-column-operations[_ngcontent-%COMP%] {\n  margin: 5px 0;\n  padding: 5px;\n  border-top: 1px solid #eee;\n}\n.quill-editor-container[_ngcontent-%COMP%]   .ql-better-table[_ngcontent-%COMP%]   .qlbt-row-operations[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n.quill-editor-container[_ngcontent-%COMP%]   .ql-better-table[_ngcontent-%COMP%]   .qlbt-column-operations[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 2px;\n  padding: 4px 8px;\n  font-size: 11px;\n  border: 1px solid #ddd;\n  background: white;\n  cursor: pointer;\n  border-radius: 3px;\n  display: inline-block;\n}\n.quill-editor-container[_ngcontent-%COMP%]   .ql-better-table[_ngcontent-%COMP%]   .qlbt-row-operations[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, \n.quill-editor-container[_ngcontent-%COMP%]   .ql-better-table[_ngcontent-%COMP%]   .qlbt-column-operations[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #f0f0f0;\n}\n.quill-editor-container[_ngcontent-%COMP%]   .ql-better-table[_ngcontent-%COMP%]   .qlbt-selected-cell[_ngcontent-%COMP%] {\n  background-color: rgba(0, 123, 255, 0.1) !important;\n  border: 2px solid #007bff !important;\n}\n.quill-editor-container[_ngcontent-%COMP%]   .ql-better-table[_ngcontent-%COMP%]   .qlbt-selected-row[_ngcontent-%COMP%] {\n  background-color: rgba(0, 123, 255, 0.05) !important;\n}\n.quill-editor-container[_ngcontent-%COMP%]   .ql-better-table[_ngcontent-%COMP%]   .qlbt-selected-column[_ngcontent-%COMP%] {\n  background-color: rgba(0, 123, 255, 0.05) !important;\n}\n.quill-editor-container[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%]   .ql-pagebreak[_ngcontent-%COMP%] {\n  display: block;\n  margin: 20px 0;\n  text-align: center;\n  border: none;\n  border-top: 2px dashed #ccc;\n  color: #666;\n  font-size: 12px;\n}\n.quill-editor-container[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%]   .ql-pagebreak[_ngcontent-%COMP%]::before {\n  content: "--- Page Break ---";\n  background: white;\n  padding: 0 10px;\n}\n.quill-editor-container[_ngcontent-%COMP%]   .ql-special-char[_ngcontent-%COMP%] {\n  font-family: "Times New Roman", serif;\n  font-size: 16px;\n}\n.quill-editor-container[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   button[data-value=special-char][_ngcontent-%COMP%] {\n  position: relative;\n}\n.quill-editor-container[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   button[data-value=special-char][_ngcontent-%COMP%]::before {\n  content: "\\3a9";\n  font-size: 14px;\n  font-weight: bold;\n}\n.quill-editor-container[_ngcontent-%COMP%]   .ql-size-small[_ngcontent-%COMP%] {\n  font-size: 0.75em;\n}\n.quill-editor-container[_ngcontent-%COMP%]   .ql-size-large[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n}\n.quill-editor-container[_ngcontent-%COMP%]   .ql-size-huge[_ngcontent-%COMP%] {\n  font-size: 2.5em;\n}\n.quill-editor-container[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%]   .ql-align-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.quill-editor-container[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%]   .ql-align-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.quill-editor-container[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%]   .ql-align-left[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.quill-editor-container[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%]   .ql-align-justify[_ngcontent-%COMP%] {\n  text-align: justify;\n}\n.quill-editor-container[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%] {\n  flex-wrap: wrap !important;\n  gap: 5px !important;\n  padding: 10px !important;\n}\n.quill-editor-container[_ngcontent-%COMP%]   .ql-color-picker[_ngcontent-%COMP%], \n.quill-editor-container[_ngcontent-%COMP%]   .ql-background-picker[_ngcontent-%COMP%] {\n  width: 28px !important;\n  height: 28px !important;\n  padding: 0 !important;\n  border: 1px solid #ccc !important;\n  border-radius: 3px !important;\n}\n.quill-editor-container[_ngcontent-%COMP%]   .ql-picker-options[_ngcontent-%COMP%] {\n  background: white !important;\n  border: 1px solid #ccc !important;\n  border-radius: 4px !important;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1) !important;\n  z-index: 1000 !important;\n}\n.quill-editor-container[_ngcontent-%COMP%]   .ql-picker-item[_ngcontent-%COMP%] {\n  padding: 5px 10px !important;\n  cursor: pointer !important;\n}\n.quill-editor-container[_ngcontent-%COMP%]   .ql-picker-item[_ngcontent-%COMP%]:hover {\n  background-color: #f0f0f0 !important;\n}\n.quill-editor-container[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: disc;\n  padding-inline-start: 1.25rem;\n  margin: 0 0 1rem 0;\n}\n.quill-editor-container[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  list-style: decimal;\n  padding-inline-start: 1.25rem;\n  margin: 0 0 1rem 0;\n}\n.quill-editor-container[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: static;\n  list-style: inherit;\n  margin: 0;\n  padding: 0;\n}\n.quill-editor-container[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before, \n.quill-editor-container[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::after, \n.quill-editor-container[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]::before, \n.quill-editor-container[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]::after {\n  content: none !important;\n  border: 0 !important;\n  background: none !important;\n  display: none !important;\n  visibility: hidden !important;\n  opacity: 0 !important;\n  width: 0 !important;\n  height: 0 !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  position: static !important;\n  float: none !important;\n  clear: none !important;\n}\n.quill-editor-container[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem;\n}\n.quill-editor-container[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n.quill-editor-container[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.quill-editor-container[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.quill-editor-container[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.quill-editor-container[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], \n.quill-editor-container[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem 0;\n  font-weight: 600;\n  line-height: 1.2;\n}\n.quill-editor-container[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.quill-editor-container[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n}\n.quill-editor-container[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.quill-editor-container[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.quill-editor-container[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.quill-editor-container[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.quill-editor-container[_ngcontent-%COMP%]:focus-within {\n  border-color: #86b7fe;\n  outline: 0;\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n.letter-content-display[_ngcontent-%COMP%] {\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    "Helvetica Neue",\n    Arial,\n    sans-serif;\n  font-size: 14px;\n  line-height: 1.6;\n  color: #343a40;\n}\n.letter-content-display[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n.letter-content-display[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.letter-content-display[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.letter-content-display[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.letter-content-display[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], \n.letter-content-display[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  margin-bottom: 0.75rem;\n  font-weight: 600;\n  line-height: 1.2;\n}\n.letter-content-display[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.letter-content-display[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n}\n.letter-content-display[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.letter-content-display[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.letter-content-display[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.letter-content-display[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.letter-content-display[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.letter-content-display[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], \n.letter-content-display[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  padding-left: 20px;\n}\n.letter-content-display[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.letter-content-display[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.letter-content-display[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n.letter-content-display[_ngcontent-%COMP%]   u[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n.letter-content-display[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #007bff;\n  text-decoration: none;\n}\n.letter-content-display[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.letter-content-display[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {\n  border-left: 4px solid #ced4da;\n  padding-left: 15px;\n  margin-left: 0;\n  font-style: italic;\n  color: #6c757d;\n}\n.letter-content-display[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  margin-bottom: 1rem;\n  background-color: #f8f9fa;\n  border: 1px solid #dee2e6;\n}\n.letter-content-display[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.letter-content-display[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid #dee2e6;\n  padding: 0.75rem;\n  text-align: left;\n  vertical-align: top;\n}\n.letter-content-display[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #e9ecef;\n  font-weight: bold;\n  color: #495057;\n}\n.letter-content-display[_ngcontent-%COMP%]   .ql-align-left[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.letter-content-display[_ngcontent-%COMP%]   .ql-align-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.letter-content-display[_ngcontent-%COMP%]   .ql-align-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.letter-content-display[_ngcontent-%COMP%]   .ql-align-justify[_ngcontent-%COMP%] {\n  text-align: justify;\n}\n.letter-content-display[_ngcontent-%COMP%]   .ql-size-small[_ngcontent-%COMP%] {\n  font-size: 0.75em;\n}\n.letter-content-display[_ngcontent-%COMP%]   .ql-size-large[_ngcontent-%COMP%] {\n  font-size: 1.25em;\n}\n.letter-content-display[_ngcontent-%COMP%]   .ql-size-huge[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n}\n.letter-content-display[_ngcontent-%COMP%]   .ql-indent-1[_ngcontent-%COMP%] {\n  padding-left: 3em;\n}\n.letter-content-display[_ngcontent-%COMP%]   .ql-indent-2[_ngcontent-%COMP%] {\n  padding-left: 6em;\n}\n.letter-content-display[_ngcontent-%COMP%]   .ql-indent-3[_ngcontent-%COMP%] {\n  padding-left: 9em;\n}\n.letter-content-display[_ngcontent-%COMP%]   .ql-indent-4[_ngcontent-%COMP%] {\n  padding-left: 12em;\n}\n.letter-content-display[_ngcontent-%COMP%]   .ql-indent-5[_ngcontent-%COMP%] {\n  padding-left: 15em;\n}\n.letter-content-display[_ngcontent-%COMP%]   .ql-indent-6[_ngcontent-%COMP%] {\n  padding-left: 18em;\n}\n.letter-content-display[_ngcontent-%COMP%]   .ql-indent-7[_ngcontent-%COMP%] {\n  padding-left: 21em;\n}\n.letter-content-display[_ngcontent-%COMP%]   .ql-indent-8[_ngcontent-%COMP%] {\n  padding-left: 24em;\n}\n@media (max-width: 768px) {\n  .quill-editor-container[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%] {\n    min-height: 250px;\n    max-height: 400px;\n  }\n  .quill-editor-container[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%] {\n    padding: 4px;\n  }\n  .quill-editor-container[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   .ql-formats[_ngcontent-%COMP%] {\n    margin-right: 8px;\n  }\n  .quill-editor-container[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 3px;\n    font-size: 12px;\n  }\n  .letter-content-display[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .letter-content-display[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .letter-content-display[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .letter-content-display[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .letter-content-display[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n  }\n}\n[dir=rtl][_ngcontent-%COMP%]   .letter-content-display[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n\n\n.modal[_ngcontent-%COMP%] {\n  z-index: 1055;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  z-index: 1050;\n}\n.modal-xl[_ngcontent-%COMP%] {\n  max-width: 1200px;\n}\n.modal-content[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 12px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);\n}\n.modal-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #B68A35 0%,\n      #b68a35 100%);\n  color: white;\n  border-bottom: none;\n  border-radius: 12px 12px 0 0;\n  padding: 1.5rem;\n}\n.modal-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 1.25rem;\n  margin: 0;\n}\n.btn-close[_ngcontent-%COMP%] {\n  filter: brightness(0) invert(1);\n  opacity: 0.8;\n}\n.btn-close[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 2rem;\n  max-height: 70vh;\n  overflow-y: auto;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  border-top: 1px solid #e9ecef;\n  padding: 1rem 2rem;\n  background-color: #f8f9fa;\n  border-radius: 0 0 12px 12px;\n}\n.letter-details[_ngcontent-%COMP%] {\n  color: #495057;\n}\n.letter-header[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #e9ecef;\n  padding-bottom: 1.5rem;\n}\n.letter-subject[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  font-weight: 700;\n  font-size: 1.5rem;\n  line-height: 1.3;\n}\n.letter-badges[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  padding: 0.5rem 0.75rem;\n  border-radius: 6px;\n}\n.letter-meta[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.section-title[_ngcontent-%COMP%] {\n  color: #B68A35;\n  font-weight: 600;\n  font-size: 1.1rem;\n  margin-bottom: 1rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 2px solid #e9ecef;\n}\n.content-body[_ngcontent-%COMP%] {\n  border: 1px solid #e9ecef;\n  border-radius: 8px;\n  line-height: 1.6;\n  font-size: 1rem;\n}\n.info-section[_ngcontent-%COMP%] {\n  border: 1px solid #e9ecef;\n  border-radius: 8px;\n}\n.info-section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.info-section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.info-section[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #495057;\n  font-weight: 600;\n}\n.signature-container[_ngcontent-%COMP%] {\n  border: 1px solid #e9ecef;\n  border-radius: 8px;\n}\n.signature-image[_ngcontent-%COMP%] {\n  border: 1px solid #dee2e6;\n  border-radius: 4px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.attachments-list[_ngcontent-%COMP%] {\n  max-height: 400px;\n  overflow-y: auto;\n}\n.attachment-item[_ngcontent-%COMP%] {\n  border: 1px solid #e9ecef;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n}\n.attachment-item[_ngcontent-%COMP%]:hover {\n  border-color: #B68A35;\n  box-shadow: 0 2px 8px rgba(191, 171, 134, 0.15);\n}\n.attachment-name[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  font-size: 1rem;\n}\n.attachment-meta[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  line-height: 1.4;\n}\n.attachment-description[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6c757d;\n  font-style: italic;\n}\n.attachment-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  padding: 0.375rem 0.75rem;\n}\n.bg-primary[_ngcontent-%COMP%] {\n  background-color: #B68A35 !important;\n}\n.bg-success[_ngcontent-%COMP%] {\n  background-color: #d4af5f !important;\n}\n.bg-warning[_ngcontent-%COMP%] {\n  background-color: #A2563F !important;\n  color: #ffffff !important;\n}\n.bg-danger[_ngcontent-%COMP%] {\n  background-color: #b45253 !important;\n}\n.bg-info[_ngcontent-%COMP%] {\n  background-color: #34495e !important;\n}\n.bg-secondary[_ngcontent-%COMP%] {\n  background-color: #555555 !important;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background-color: #6c757d;\n  border-color: #6c757d;\n  color: white;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #5a6268;\n  border-color: #545b62;\n  color: white;\n}\n.btn-outline-primary[_ngcontent-%COMP%] {\n  color: #B68A35;\n  border-color: #B68A35;\n}\n.btn-outline-primary[_ngcontent-%COMP%]:hover {\n  background-color: #B68A35;\n  border-color: #B68A35;\n  color: white;\n}\n.btn-outline-success[_ngcontent-%COMP%] {\n  color: #28a745;\n  border-color: #28a745;\n}\n.btn-outline-success[_ngcontent-%COMP%]:hover {\n  background-color: #28a745;\n  border-color: #28a745;\n  color: white;\n}\n.spinner-border[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n}\n[dir=rtl][_ngcontent-%COMP%]   .letter-meta[_ngcontent-%COMP%] {\n  text-align: left;\n}\n[dir=rtl][_ngcontent-%COMP%]   .attachment-actions[_ngcontent-%COMP%] {\n  text-align: left;\n}\n[dir=rtl][_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  text-align: right;\n}\n[dir=rtl][_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  text-align: right;\n}\n@media (max-width: 768px) {\n  .modal-xl[_ngcontent-%COMP%] {\n    max-width: 95%;\n    margin: 1rem auto;\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    padding: 1rem;\n    max-height: 60vh;\n  }\n  .modal-header[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .modal-footer[_ngcontent-%COMP%] {\n    padding: 0.75rem 1rem;\n  }\n  .letter-subject[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .section-title[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .attachment-actions[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n    text-align: left !important;\n  }\n  .attachment-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 0.5rem;\n  }\n  .attachment-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:last-child {\n    margin-bottom: 0;\n  }\n}\n@media (max-width: 576px) {\n  .modal-xl[_ngcontent-%COMP%] {\n    max-width: 100%;\n    margin: 0;\n    height: 100vh;\n    border-radius: 0;\n  }\n  .modal-content[_ngcontent-%COMP%] {\n    height: 100vh;\n    border-radius: 0;\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    max-height: calc(100vh - 140px);\n  }\n  .letter-subject[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .info-section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .info-section[_ngcontent-%COMP%]   .col-4[_ngcontent-%COMP%], \n   .info-section[_ngcontent-%COMP%]   .col-8[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 100%;\n    flex: 0 0 100%;\n  }\n  .info-section[_ngcontent-%COMP%]   .col-4[_ngcontent-%COMP%] {\n    margin-bottom: 0.25rem;\n  }\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar, \n.attachments-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-track, \n.attachments-list[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 3px;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, \n.attachments-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #B68A35;\n  border-radius: 3px;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover, \n.attachments-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #b68a35;\n}\n/*# sourceMappingURL=letter-details-modal.component-VLMFS645.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LetterDetailsModalComponent, [{
    type: Component,
    args: [{ selector: "app-letter-details-modal", standalone: false, template: `<!-- Letter Details Modal -->\r
<div\r
  class="modal fade"\r
  [class.show]="isVisible"\r
  [style.display]="isVisible ? 'block' : 'none'"\r
  tabindex="-1"\r
  role="dialog"\r
  [attr.aria-hidden]="!isVisible"\r
>\r
  <div class="modal-dialog modal-xl modal-dialog-scrollable" role="document">\r
    <div class="modal-content">\r
      <!-- Modal Header -->\r
      <div class="modal-header d-flex justify-content-between align-items-center">\r
        <h5 class="modal-title">\r
          {{ translate("letter_details.title") }}\r
        </h5>\r
      </div>\r
\r
      <!-- Modal Body -->\r
      <div class="modal-body">\r
        <!-- Loading State -->\r
        <div class="text-center py-5" *ngIf="isLoading">\r
          <div class="spinner-border text-primary" role="status">\r
            <span class="visually-hidden">{{\r
              translate("common.loading")\r
            }}</span>\r
          </div>\r
          <p class="mt-3 text-muted">\r
            {{ translate("letter_details.loading") }}\r
          </p>\r
        </div>\r
\r
        <!-- Letter Details -->\r
        <div *ngIf="!isLoading && letter" class="letter-details">\r
          <!-- Letter Header -->\r
          <div class="letter-header mb-4">\r
            <div class="row">\r
              <div class="col-md-8">\r
                <h4 class="letter-subject mb-2">{{ letter.subject }}</h4>\r
                <div class="letter-badges mb-3">\r
                  <span\r
                    class="badge me-2"\r
                    [class]="getDirectionBadgeClass(letter.direction)"\r
                  >\r
                    {{ getDirectionLabel(letter.direction) }}\r
                  </span>\r
                  <span\r
                    class="badge me-2"\r
                    [class]="getLetterTypeBadgeClass(letter.letterType || 1)"\r
                  >\r
                    {{ getLetterTypeLabel(letter.letterType || 1) }}\r
                  </span>\r
                  <span\r
                    class="badge me-2"\r
                    [class]="getStatusBadgeClass(letter.status || 0)"\r
                  >\r
                    {{ getStatusLabel(letter.status || 0) }}\r
                  </span>\r
                </div>\r
              </div>\r
              <div class="col-md-4 text-end">\r
                <div class="letter-meta">\r
                  <small class="text-muted d-block"\r
                    >{{ translate("letter_details.letter_id") }}:\r
                    {{ letter.id }}</small\r
                  >\r
                  <small class="text-muted d-block"\r
                    >{{ translate("letters.letter_date") }}:\r
                    {{ formatDate(letter.letterDate) }}</small\r
                  >\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Letter Content -->\r
          <div class="letter-content mb-4">\r
            <div class="row">\r
              <div class="col-12">\r
                <h6 class="section-title">\r
                  {{ translate("letter_details.content") }}\r
                </h6>\r
                <div class="content-body p-3 bg-light rounded">\r
                  <div class="letter-content-display" [innerHTML]="getLetterContent()"></div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Letter Information -->\r
          <div class="letter-info mb-4">\r
            <div class="row">\r
              <div class="col-md-6">\r
                <h6 class="section-title">\r
                  {{ translate("letter_details.recipient_info") }}\r
                </h6>\r
                <div class="info-section p-3 bg-light rounded">\r
                  <div class="row mb-2" *ngIf="letter.letterType !== 0">\r
                    <div class="col-4">\r
                      <strong>{{ translate("letters.to") }}:</strong>\r
                    </div>\r
                    <div class="col-8">{{ letter.to }}</div>\r
                  </div>\r
                  <div class="row mb-2" *ngIf="letter.letterType === 0 && letter.internalUserName">\r
                    <div class="col-4">\r
                      <strong>{{ translate("letters.internal_user") }}:</strong>\r
                    </div>\r
                    <div class="col-8">{{ letter.internalUserName }}</div>\r
                  </div>\r
                  <div class="row mb-2" *ngIf="letter.cc">\r
                    <div class="col-4">\r
                      <strong>{{ translate("letters.cc") }}:</strong>\r
                    </div>\r
                    <div class="col-8">{{ letter.cc }}</div>\r
                  </div>\r
                  <div class="row mb-2" *ngIf="letter.bcc">\r
                    <div class="col-4">\r
                      <strong>{{ translate("letters.bcc") }}:</strong>\r
                    </div>\r
                    <div class="col-8">{{ letter.bcc }}</div>\r
                  </div>\r
                  <div class="row" *ngIf="letter.referenceNumbers">\r
                    <div class="col-4">\r
                      <strong\r
                        >{{ translate("letters.reference_numbers") }}:</strong\r
                      >\r
                    </div>\r
                    <div class="col-8">{{ letter.referenceNumbers }}</div>\r
                  </div>\r
                </div>\r
              </div>\r
              <div class="col-md-6">\r
                <h6 class="section-title">\r
                  {{ translate("letter_details.letter_info") }}\r
                </h6>\r
                <div class="info-section p-3 bg-light rounded">\r
                  <div class="row mb-2">\r
                    <div class="col-4">\r
                      <strong>{{ translate("letters.direction") }}:</strong>\r
                    </div>\r
                    <div class="col-8">\r
                      {{ getDirectionLabel(letter.direction) }}\r
                    </div>\r
                  </div>\r
                  <div class="row mb-2">\r
                    <div class="col-4">\r
                      <strong>{{ translate("letters.letter_type") }}:</strong>\r
                    </div>\r
                    <div class="col-8">\r
                      <span\r
                        class="badge"\r
                        [class]="getLetterTypeBadgeClass(letter.letterType || 1)"\r
                      >\r
                        {{ getLetterTypeLabel(letter.letterType || 1) }}\r
                      </span>\r
                    </div>\r
                  </div>\r
                  <div class="row mb-2">\r
                    <div class="col-4">\r
                      <strong>{{ translate("letters.status") }}:</strong>\r
                    </div>\r
                    <div class="col-8">\r
                      <span\r
                        class="badge"\r
                        [class]="getStatusBadgeClass(letter.status || 0)"\r
                      >\r
                        {{ getStatusLabel(letter.status || 0) }}\r
                      </span>\r
                    </div>\r
                  </div>\r
                  <div class="row mb-2" *ngIf="letter.approvedByName">\r
                    <div class="col-4">\r
                      <strong>{{ translate("letters.approved_by") }}:</strong>\r
                    </div>\r
                    <div class="col-8">{{ letter.approvedByName }}</div>\r
                  </div>\r
                  <div class="row mb-2" *ngIf="letter.approvedAt">\r
                    <div class="col-4">\r
                      <strong\r
                        >{{ translate("letter_details.approved_at") }}:</strong\r
                      >\r
                    </div>\r
                    <div class="col-8">{{ formatDate(letter.approvedAt) }}</div>\r
                  </div>\r
                  <div class="row" *ngIf="letter.approvalNotes">\r
                    <div class="col-4">\r
                      <strong\r
                        >{{ translate("letters.approval_notes") }}:</strong\r
                      >\r
                    </div>\r
                    <div class="col-8">{{ letter.approvalNotes }}</div>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Email Information -->\r
          <div class="email-info mb-4" *ngIf="letter.isEmailSent !== undefined">\r
            <h6 class="section-title">\r
              {{ translate("letter_details.email_info") }}\r
            </h6>\r
            <div class="info-section p-3 bg-light rounded">\r
              <div class="row mb-2">\r
                <div class="col-4">\r
                  <strong>{{ translate("letters.email_sent") }}:</strong>\r
                </div>\r
                <div class="col-8">\r
                  <span\r
                    class="badge"\r
                    [class]="letter.isEmailSent ? 'bg-success' : 'bg-secondary'"\r
                  >\r
                    {{\r
                      letter.isEmailSent\r
                        ? translate("common.yes")\r
                        : translate("common.no")\r
                    }}\r
                  </span>\r
                </div>\r
              </div>\r
              <div class="row" *ngIf="letter.emailSentAt">\r
                <div class="col-4">\r
                  <strong\r
                    >{{ translate("letter_details.email_sent_at") }}:</strong\r
                  >\r
                </div>\r
                <div class="col-8">{{ formatDate(letter.emailSentAt) }}</div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Signature -->\r
          <div class="signature-section mb-4" *ngIf="letter.signatureImagePath">\r
            <h6 class="section-title">\r
              {{ translate("letter_details.signature") }}\r
            </h6>\r
            <div class="signature-container p-3 bg-light rounded text-center">\r
              <img\r
                [src]="letter.signatureImagePath"\r
                alt="Signature"\r
                class="signature-image img-fluid"\r
                style="max-height: 200px"\r
              />\r
            </div>\r
          </div>\r
\r
          <!-- Attachments -->\r
          <div\r
            class="attachments-section mb-4"\r
            *ngIf="letter.attachments && letter.attachments.length > 0"\r
          >\r
            <h6 class="section-title">\r
              {{ translate("letters.attachments") }} ({{\r
                letter.attachments.length\r
              }})\r
            </h6>\r
            <div class="attachments-list">\r
              <div\r
                class="attachment-item p-3 bg-light rounded mb-2"\r
                *ngFor="let attachment of letter.attachments"\r
              >\r
                <div class="row align-items-center">\r
                  <div class="col-md-8">\r
                    <div class="attachment-info">\r
                      <div class="attachment-name fw-medium mb-1">\r
                        <i class="bi bi-paperclip me-2"></i>\r
                        {{ attachment.fileName }}\r
                      </div>\r
                      <div class="attachment-meta text-muted small">\r
                        <span class="me-3"\r
                          >{{ translate("letters.file_type") }}:\r
                          {{ attachment.fileType }}</span\r
                        >\r
                        <span class="me-3"\r
                          >{{ translate("letters.uploaded_by") }}:\r
                          {{ attachment.uploadedByName }}</span\r
                        >\r
                        <span\r
                          >{{ translate("letters.uploaded_at") }}:\r
                          {{ formatDate(attachment.uploadedAt) }}</span\r
                        >\r
                      </div>\r
                      <div\r
                        class="attachment-description mt-1"\r
                        *ngIf="attachment.description"\r
                      >\r
                        <small class="text-muted">{{\r
                          attachment.description\r
                        }}</small>\r
                      </div>\r
                    </div>\r
                  </div>\r
                  <div class="col-md-4 text-end">\r
                    <div class="attachment-actions">\r
                      <button\r
                        class="btn btn-sm btn-outline-primary me-2"\r
                        (click)="viewAttachment(attachment)"\r
                      >\r
                        <i class="bi bi-eye me-1"></i>\r
                        {{ translate("common.view") }}\r
                      </button>\r
                      <button\r
                        class="btn btn-sm btn-outline-success"\r
                        (click)="downloadAttachment(attachment)"\r
                      >\r
                        <i class="bi bi-download me-1"></i>\r
                        {{ translate("common.download") }}\r
                      </button>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- System Information -->\r
          <div class="system-info">\r
            <h6 class="section-title">\r
              {{ translate("letter_details.system_info") }}\r
            </h6>\r
            <div class="info-section p-3 bg-light rounded">\r
              <div class="row">\r
                <div class="col-md-6">\r
                  <div class="row mb-2">\r
                    <div class="col-4">\r
                      <strong>{{ translate("common.created_by") }}:</strong>\r
                    </div>\r
                    <div class="col-8">{{ letter.createdByName }}</div>\r
                  </div>\r
                  <div class="row">\r
                    <div class="col-4">\r
                      <strong\r
                        >{{ translate("letter_details.created_at") }}:</strong\r
                      >\r
                    </div>\r
                    <div class="col-8">{{ formatDate(letter.createdAt) }}</div>\r
                  </div>\r
                </div>\r
                <div class="col-md-6">\r
                  <div class="row mb-2">\r
                    <div class="col-4">\r
                      <strong\r
                        >{{ translate("letter_details.updated_at") }}:</strong\r
                      >\r
                    </div>\r
                    <div class="col-8">{{ formatDate(letter.updatedAt) }}</div>\r
                  </div>\r
                  <div class="row" *ngIf="letter.pdfPath">\r
                    <div class="col-4">\r
                      <strong\r
                        >{{ translate("letter_details.pdf_path") }}:</strong\r
                      >\r
                    </div>\r
                    <div class="col-8">\r
                      <small class="text-muted">{{ letter.pdfPath }}</small>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Error State -->\r
        <div class="text-center py-5" *ngIf="!isLoading && !letter">\r
          <i\r
            class="bi bi-exclamation-triangle text-warning"\r
            style="font-size: 3rem"\r
          ></i>\r
          <h5 class="mt-3 text-muted">\r
            {{ translate("letter_details.error_loading") }}\r
          </h5>\r
          <p class="text-muted">\r
            {{ translate("letter_details.try_again_later") }}\r
          </p>\r
        </div>\r
      </div>\r
\r
      <!-- Modal Footer -->\r
      <div class="modal-footer">\r
        <button type="button" class="btn btn-secondary" (click)="close()">\r
          <i class="bi bi-x-circle me-2"></i>\r
          {{ translate("common.close") }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Modal Backdrop -->\r
<div\r
  class="modal-backdrop fade"\r
  [class.show]="isVisible"\r
  *ngIf="isVisible"\r
></div>\r
`, styles: ['/* src/app/components/letters/shared/letters-editor.css */\n.quill-editor-container {\n  isolation: isolate;\n  background: #fff;\n  border: 1px solid #CED4DA;\n  border-radius: 0.5rem;\n  overflow: hidden;\n  width: 100%;\n  max-width: 100%;\n  min-width: 0;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.quill-editor-container.is-invalid {\n  border-color: #dc3545;\n}\n.quill-editor-container .ql-toolbar.ql-snow {\n  display: flex !important;\n  border: 0;\n  border-bottom: 1px solid #E5E7EB;\n  background: #F8F9FA;\n  padding: 8px;\n  width: 100%;\n  flex-shrink: 0;\n}\n.quill-editor-container .ql-container.ql-snow {\n  display: flex !important;\n  border: 0;\n  height: 340px;\n  background: #fff;\n  width: 100%;\n  flex: 1;\n  flex-direction: column;\n}\n.quill-editor-container .ql-editor {\n  min-height: 300px;\n  padding: 14px 16px;\n  overflow-y: auto;\n  direction: rtl;\n  text-align: right;\n  font-family:\n    "IBM Plex Sans Arabic",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  font-size: 14px;\n  line-height: 1.6;\n  background: #fff;\n  border: none;\n  width: 100%;\n  max-width: 100%;\n  box-sizing: border-box;\n  flex: 1;\n}\n.quill-editor-container .ql-editor[dir=rtl] {\n  direction: rtl;\n  text-align: right;\n}\n.quill-editor-container .ql-editor[dir=ltr] {\n  direction: ltr;\n  text-align: left;\n}\n.quill-editor-container .ql-toolbar button {\n  border: none !important;\n  background: transparent !important;\n  cursor: pointer !important;\n  padding: 5px !important;\n  border-radius: 3px !important;\n  display: inline-block !important;\n  visibility: visible !important;\n  opacity: 1 !important;\n  margin: 0 2px !important;\n  min-width: 28px !important;\n  height: 28px !important;\n  line-height: 1 !important;\n  transition: all 0.2s ease !important;\n}\n.quill-editor-container .ql-toolbar button:hover {\n  background-color: #e9ecef !important;\n  transform: scale(1.05) !important;\n}\n.quill-editor-container .ql-toolbar button.ql-active {\n  background-color: #007bff !important;\n  color: white !important;\n  box-shadow: 0 2px 4px rgba(0, 123, 255, 0.3) !important;\n}\n.quill-editor-container .ql-toolbar button.ql-bold.ql-active,\n.quill-editor-container .ql-toolbar button.ql-italic.ql-active,\n.quill-editor-container .ql-toolbar button.ql-underline.ql-active,\n.quill-editor-container .ql-toolbar button.ql-strike.ql-active {\n  background-color: #007bff !important;\n  color: white !important;\n}\n.quill-editor-container .ql-toolbar .ql-bold::before {\n  content: "B" !important;\n  font-weight: bold !important;\n}\n.quill-editor-container .ql-toolbar .ql-italic::before {\n  content: "I" !important;\n  font-style: italic !important;\n}\n.quill-editor-container .ql-toolbar .ql-underline::before {\n  content: "U" !important;\n  text-decoration: underline !important;\n}\n.quill-editor-container .ql-toolbar .ql-strike::before {\n  content: "S" !important;\n  text-decoration: line-through !important;\n}\n.quill-editor-container .ql-toolbar .ql-formats {\n  margin-right: 15px !important;\n  display: inline-block !important;\n  vertical-align: middle !important;\n}\n.quill-editor-container .ql-toolbar .ql-picker {\n  display: inline-block !important;\n  visibility: visible !important;\n  opacity: 1 !important;\n  margin: 0 2px !important;\n}\n.quill-editor-container .ql-toolbar .ql-picker-label {\n  border: 1px solid transparent !important;\n  padding: 5px 8px !important;\n  border-radius: 3px !important;\n  cursor: pointer !important;\n  display: inline-block !important;\n  min-width: 60px !important;\n  height: 28px !important;\n  line-height: 1.2 !important;\n  font-size: 12px !important;\n}\n.quill-editor-container .ql-toolbar .ql-picker-label:hover {\n  background-color: #e9ecef !important;\n}\n.quill-editor-container .ql-editor table {\n  border-collapse: collapse;\n  margin: 10px 0;\n  width: 100%;\n  max-width: 100%;\n  table-layout: fixed;\n  direction: rtl;\n}\n.quill-editor-container .ql-editor table td,\n.quill-editor-container .ql-editor table th {\n  border: 1px solid #ddd;\n  padding: 8px;\n  text-align: right;\n  vertical-align: top;\n  min-width: 50px;\n  word-wrap: break-word;\n  position: relative;\n}\n.quill-editor-container .ql-editor table th {\n  background-color: #f5f5f5;\n  font-weight: bold;\n}\n.quill-editor-container .ql-editor table td:focus,\n.quill-editor-container .ql-editor table th:focus {\n  outline: 2px solid #007bff;\n  outline-offset: -2px;\n}\n.quill-editor-container .ql-better-table {\n  position: relative;\n}\n.quill-editor-container .ql-better-table .qlbt-operation-menu {\n  position: absolute;\n  background: white;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  padding: 5px;\n  z-index: 1000;\n  min-width: 200px;\n}\n.quill-editor-container .ql-better-table .qlbt-operation-menu button {\n  margin: 2px;\n  padding: 6px 12px;\n  font-size: 12px;\n  border: 1px solid #ddd;\n  background: white;\n  cursor: pointer;\n  border-radius: 3px;\n  display: block;\n  width: 100%;\n  text-align: right;\n}\n.quill-editor-container .ql-better-table .qlbt-operation-menu button:hover {\n  background: #f0f0f0;\n}\n.quill-editor-container .ql-better-table .qlbt-cell-operations {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 2px;\n  margin-bottom: 5px;\n}\n.quill-editor-container .ql-better-table .qlbt-cell-operations button {\n  padding: 4px 8px;\n  font-size: 11px;\n  border: 1px solid #ddd;\n  background: #f8f9fa;\n  cursor: pointer;\n  border-radius: 3px;\n  flex: 1;\n  min-width: 60px;\n}\n.quill-editor-container .ql-better-table .qlbt-cell-operations button:hover {\n  background: #e9ecef;\n}\n.quill-editor-container .ql-better-table .qlbt-row-operations,\n.quill-editor-container .ql-better-table .qlbt-column-operations {\n  margin: 5px 0;\n  padding: 5px;\n  border-top: 1px solid #eee;\n}\n.quill-editor-container .ql-better-table .qlbt-row-operations button,\n.quill-editor-container .ql-better-table .qlbt-column-operations button {\n  margin: 2px;\n  padding: 4px 8px;\n  font-size: 11px;\n  border: 1px solid #ddd;\n  background: white;\n  cursor: pointer;\n  border-radius: 3px;\n  display: inline-block;\n}\n.quill-editor-container .ql-better-table .qlbt-row-operations button:hover,\n.quill-editor-container .ql-better-table .qlbt-column-operations button:hover {\n  background: #f0f0f0;\n}\n.quill-editor-container .ql-better-table .qlbt-selected-cell {\n  background-color: rgba(0, 123, 255, 0.1) !important;\n  border: 2px solid #007bff !important;\n}\n.quill-editor-container .ql-better-table .qlbt-selected-row {\n  background-color: rgba(0, 123, 255, 0.05) !important;\n}\n.quill-editor-container .ql-better-table .qlbt-selected-column {\n  background-color: rgba(0, 123, 255, 0.05) !important;\n}\n.quill-editor-container .ql-editor .ql-pagebreak {\n  display: block;\n  margin: 20px 0;\n  text-align: center;\n  border: none;\n  border-top: 2px dashed #ccc;\n  color: #666;\n  font-size: 12px;\n}\n.quill-editor-container .ql-editor .ql-pagebreak::before {\n  content: "--- Page Break ---";\n  background: white;\n  padding: 0 10px;\n}\n.quill-editor-container .ql-special-char {\n  font-family: "Times New Roman", serif;\n  font-size: 16px;\n}\n.quill-editor-container .ql-toolbar button[data-value=special-char] {\n  position: relative;\n}\n.quill-editor-container .ql-toolbar button[data-value=special-char]::before {\n  content: "\\3a9";\n  font-size: 14px;\n  font-weight: bold;\n}\n.quill-editor-container .ql-size-small {\n  font-size: 0.75em;\n}\n.quill-editor-container .ql-size-large {\n  font-size: 1.5em;\n}\n.quill-editor-container .ql-size-huge {\n  font-size: 2.5em;\n}\n.quill-editor-container .ql-editor .ql-align-right {\n  text-align: right;\n}\n.quill-editor-container .ql-editor .ql-align-center {\n  text-align: center;\n}\n.quill-editor-container .ql-editor .ql-align-left {\n  text-align: left;\n}\n.quill-editor-container .ql-editor .ql-align-justify {\n  text-align: justify;\n}\n.quill-editor-container .ql-toolbar {\n  flex-wrap: wrap !important;\n  gap: 5px !important;\n  padding: 10px !important;\n}\n.quill-editor-container .ql-color-picker,\n.quill-editor-container .ql-background-picker {\n  width: 28px !important;\n  height: 28px !important;\n  padding: 0 !important;\n  border: 1px solid #ccc !important;\n  border-radius: 3px !important;\n}\n.quill-editor-container .ql-picker-options {\n  background: white !important;\n  border: 1px solid #ccc !important;\n  border-radius: 4px !important;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1) !important;\n  z-index: 1000 !important;\n}\n.quill-editor-container .ql-picker-item {\n  padding: 5px 10px !important;\n  cursor: pointer !important;\n}\n.quill-editor-container .ql-picker-item:hover {\n  background-color: #f0f0f0 !important;\n}\n.quill-editor-container .ql-editor ul {\n  list-style: disc;\n  padding-inline-start: 1.25rem;\n  margin: 0 0 1rem 0;\n}\n.quill-editor-container .ql-editor ol {\n  list-style: decimal;\n  padding-inline-start: 1.25rem;\n  margin: 0 0 1rem 0;\n}\n.quill-editor-container .ql-editor li {\n  position: static;\n  list-style: inherit;\n  margin: 0;\n  padding: 0;\n}\n.quill-editor-container .ql-editor li::before,\n.quill-editor-container .ql-editor li::after,\n.quill-editor-container .ql-editor *::before,\n.quill-editor-container .ql-editor *::after {\n  content: none !important;\n  border: 0 !important;\n  background: none !important;\n  display: none !important;\n  visibility: hidden !important;\n  opacity: 0 !important;\n  width: 0 !important;\n  height: 0 !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  position: static !important;\n  float: none !important;\n  clear: none !important;\n}\n.quill-editor-container .ql-editor p {\n  margin: 0 0 0.5rem;\n}\n.quill-editor-container .ql-editor h1,\n.quill-editor-container .ql-editor h2,\n.quill-editor-container .ql-editor h3,\n.quill-editor-container .ql-editor h4,\n.quill-editor-container .ql-editor h5,\n.quill-editor-container .ql-editor h6 {\n  margin: 0 0 0.5rem 0;\n  font-weight: 600;\n  line-height: 1.2;\n}\n.quill-editor-container .ql-editor h1 {\n  font-size: 2rem;\n}\n.quill-editor-container .ql-editor h2 {\n  font-size: 1.75rem;\n}\n.quill-editor-container .ql-editor h3 {\n  font-size: 1.5rem;\n}\n.quill-editor-container .ql-editor h4 {\n  font-size: 1.25rem;\n}\n.quill-editor-container .ql-editor h5 {\n  font-size: 1rem;\n}\n.quill-editor-container .ql-editor h6 {\n  font-size: 0.875rem;\n}\n.quill-editor-container:focus-within {\n  border-color: #86b7fe;\n  outline: 0;\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n.letter-content-display {\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    "Helvetica Neue",\n    Arial,\n    sans-serif;\n  font-size: 14px;\n  line-height: 1.6;\n  color: #343a40;\n}\n.letter-content-display h1,\n.letter-content-display h2,\n.letter-content-display h3,\n.letter-content-display h4,\n.letter-content-display h5,\n.letter-content-display h6 {\n  margin-top: 1.5rem;\n  margin-bottom: 0.75rem;\n  font-weight: 600;\n  line-height: 1.2;\n}\n.letter-content-display h1 {\n  font-size: 2rem;\n}\n.letter-content-display h2 {\n  font-size: 1.75rem;\n}\n.letter-content-display h3 {\n  font-size: 1.5rem;\n}\n.letter-content-display h4 {\n  font-size: 1.25rem;\n}\n.letter-content-display h5 {\n  font-size: 1rem;\n}\n.letter-content-display h6 {\n  font-size: 0.875rem;\n}\n.letter-content-display p {\n  margin-bottom: 1rem;\n}\n.letter-content-display ul,\n.letter-content-display ol {\n  margin-bottom: 1rem;\n  padding-left: 20px;\n}\n.letter-content-display li {\n  margin-bottom: 0.5rem;\n}\n.letter-content-display strong {\n  font-weight: bold;\n}\n.letter-content-display em {\n  font-style: italic;\n}\n.letter-content-display u {\n  text-decoration: underline;\n}\n.letter-content-display a {\n  color: #007bff;\n  text-decoration: none;\n}\n.letter-content-display a:hover {\n  text-decoration: underline;\n}\n.letter-content-display blockquote {\n  border-left: 4px solid #ced4da;\n  padding-left: 15px;\n  margin-left: 0;\n  font-style: italic;\n  color: #6c757d;\n}\n.letter-content-display table {\n  width: 100%;\n  border-collapse: collapse;\n  margin-bottom: 1rem;\n  background-color: #f8f9fa;\n  border: 1px solid #dee2e6;\n}\n.letter-content-display th,\n.letter-content-display td {\n  border: 1px solid #dee2e6;\n  padding: 0.75rem;\n  text-align: left;\n  vertical-align: top;\n}\n.letter-content-display th {\n  background-color: #e9ecef;\n  font-weight: bold;\n  color: #495057;\n}\n.letter-content-display .ql-align-left {\n  text-align: left;\n}\n.letter-content-display .ql-align-center {\n  text-align: center;\n}\n.letter-content-display .ql-align-right {\n  text-align: right;\n}\n.letter-content-display .ql-align-justify {\n  text-align: justify;\n}\n.letter-content-display .ql-size-small {\n  font-size: 0.75em;\n}\n.letter-content-display .ql-size-large {\n  font-size: 1.25em;\n}\n.letter-content-display .ql-size-huge {\n  font-size: 1.5em;\n}\n.letter-content-display .ql-indent-1 {\n  padding-left: 3em;\n}\n.letter-content-display .ql-indent-2 {\n  padding-left: 6em;\n}\n.letter-content-display .ql-indent-3 {\n  padding-left: 9em;\n}\n.letter-content-display .ql-indent-4 {\n  padding-left: 12em;\n}\n.letter-content-display .ql-indent-5 {\n  padding-left: 15em;\n}\n.letter-content-display .ql-indent-6 {\n  padding-left: 18em;\n}\n.letter-content-display .ql-indent-7 {\n  padding-left: 21em;\n}\n.letter-content-display .ql-indent-8 {\n  padding-left: 24em;\n}\n@media (max-width: 768px) {\n  .quill-editor-container .ql-editor {\n    min-height: 250px;\n    max-height: 400px;\n  }\n  .quill-editor-container .ql-toolbar {\n    padding: 4px;\n  }\n  .quill-editor-container .ql-toolbar .ql-formats {\n    margin-right: 8px;\n  }\n  .quill-editor-container .ql-toolbar button {\n    padding: 3px;\n    font-size: 12px;\n  }\n  .letter-content-display h1 {\n    font-size: 1.5rem;\n  }\n  .letter-content-display h2 {\n    font-size: 1.25rem;\n  }\n  .letter-content-display table {\n    font-size: 12px;\n  }\n  .letter-content-display th,\n  .letter-content-display td {\n    padding: 0.5rem;\n  }\n}\n[dir=rtl] .letter-content-display {\n  text-align: right;\n}\n\n/* src/app/components/letters/letter-details-modal/letter-details-modal.component.css */\n.modal {\n  z-index: 1055;\n}\n.modal-backdrop {\n  z-index: 1050;\n}\n.modal-xl {\n  max-width: 1200px;\n}\n.modal-content {\n  border: none;\n  border-radius: 12px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);\n}\n.modal-header {\n  background:\n    linear-gradient(\n      135deg,\n      #B68A35 0%,\n      #b68a35 100%);\n  color: white;\n  border-bottom: none;\n  border-radius: 12px 12px 0 0;\n  padding: 1.5rem;\n}\n.modal-title {\n  font-weight: 600;\n  font-size: 1.25rem;\n  margin: 0;\n}\n.btn-close {\n  filter: brightness(0) invert(1);\n  opacity: 0.8;\n}\n.btn-close:hover {\n  opacity: 1;\n}\n.modal-body {\n  padding: 2rem;\n  max-height: 70vh;\n  overflow-y: auto;\n}\n.modal-footer {\n  border-top: 1px solid #e9ecef;\n  padding: 1rem 2rem;\n  background-color: #f8f9fa;\n  border-radius: 0 0 12px 12px;\n}\n.letter-details {\n  color: #495057;\n}\n.letter-header {\n  border-bottom: 2px solid #e9ecef;\n  padding-bottom: 1.5rem;\n}\n.letter-subject {\n  color: #2c3e50;\n  font-weight: 700;\n  font-size: 1.5rem;\n  line-height: 1.3;\n}\n.letter-badges .badge {\n  font-size: 0.875rem;\n  padding: 0.5rem 0.75rem;\n  border-radius: 6px;\n}\n.letter-meta {\n  text-align: right;\n}\n.section-title {\n  color: #B68A35;\n  font-weight: 600;\n  font-size: 1.1rem;\n  margin-bottom: 1rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 2px solid #e9ecef;\n}\n.content-body {\n  border: 1px solid #e9ecef;\n  border-radius: 8px;\n  line-height: 1.6;\n  font-size: 1rem;\n}\n.info-section {\n  border: 1px solid #e9ecef;\n  border-radius: 8px;\n}\n.info-section .row {\n  margin-bottom: 0.5rem;\n}\n.info-section .row:last-child {\n  margin-bottom: 0;\n}\n.info-section strong {\n  color: #495057;\n  font-weight: 600;\n}\n.signature-container {\n  border: 1px solid #e9ecef;\n  border-radius: 8px;\n}\n.signature-image {\n  border: 1px solid #dee2e6;\n  border-radius: 4px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.attachments-list {\n  max-height: 400px;\n  overflow-y: auto;\n}\n.attachment-item {\n  border: 1px solid #e9ecef;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n}\n.attachment-item:hover {\n  border-color: #B68A35;\n  box-shadow: 0 2px 8px rgba(191, 171, 134, 0.15);\n}\n.attachment-name {\n  color: #2c3e50;\n  font-size: 1rem;\n}\n.attachment-meta {\n  font-size: 0.875rem;\n  line-height: 1.4;\n}\n.attachment-description {\n  font-size: 0.875rem;\n  color: #6c757d;\n  font-style: italic;\n}\n.attachment-actions .btn {\n  font-size: 0.875rem;\n  padding: 0.375rem 0.75rem;\n}\n.bg-primary {\n  background-color: #B68A35 !important;\n}\n.bg-success {\n  background-color: #d4af5f !important;\n}\n.bg-warning {\n  background-color: #A2563F !important;\n  color: #ffffff !important;\n}\n.bg-danger {\n  background-color: #b45253 !important;\n}\n.bg-info {\n  background-color: #34495e !important;\n}\n.bg-secondary {\n  background-color: #555555 !important;\n}\n.btn-secondary {\n  background-color: #6c757d;\n  border-color: #6c757d;\n  color: white;\n}\n.btn-secondary:hover {\n  background-color: #5a6268;\n  border-color: #545b62;\n  color: white;\n}\n.btn-outline-primary {\n  color: #B68A35;\n  border-color: #B68A35;\n}\n.btn-outline-primary:hover {\n  background-color: #B68A35;\n  border-color: #B68A35;\n  color: white;\n}\n.btn-outline-success {\n  color: #28a745;\n  border-color: #28a745;\n}\n.btn-outline-success:hover {\n  background-color: #28a745;\n  border-color: #28a745;\n  color: white;\n}\n.spinner-border {\n  width: 3rem;\n  height: 3rem;\n}\n[dir=rtl] .letter-meta {\n  text-align: left;\n}\n[dir=rtl] .attachment-actions {\n  text-align: left;\n}\n[dir=rtl] .modal-header {\n  text-align: right;\n}\n[dir=rtl] .modal-footer {\n  text-align: right;\n}\n@media (max-width: 768px) {\n  .modal-xl {\n    max-width: 95%;\n    margin: 1rem auto;\n  }\n  .modal-body {\n    padding: 1rem;\n    max-height: 60vh;\n  }\n  .modal-header {\n    padding: 1rem;\n  }\n  .modal-footer {\n    padding: 0.75rem 1rem;\n  }\n  .letter-subject {\n    font-size: 1.25rem;\n  }\n  .section-title {\n    font-size: 1rem;\n  }\n  .attachment-actions {\n    margin-top: 1rem;\n    text-align: left !important;\n  }\n  .attachment-actions .btn {\n    width: 100%;\n    margin-bottom: 0.5rem;\n  }\n  .attachment-actions .btn:last-child {\n    margin-bottom: 0;\n  }\n}\n@media (max-width: 576px) {\n  .modal-xl {\n    max-width: 100%;\n    margin: 0;\n    height: 100vh;\n    border-radius: 0;\n  }\n  .modal-content {\n    height: 100vh;\n    border-radius: 0;\n  }\n  .modal-body {\n    max-height: calc(100vh - 140px);\n  }\n  .letter-subject {\n    font-size: 1.1rem;\n  }\n  .info-section .row {\n    flex-direction: column;\n  }\n  .info-section .col-4,\n  .info-section .col-8 {\n    width: 100%;\n    max-width: 100%;\n    flex: 0 0 100%;\n  }\n  .info-section .col-4 {\n    margin-bottom: 0.25rem;\n  }\n}\n.modal-body::-webkit-scrollbar,\n.attachments-list::-webkit-scrollbar {\n  width: 6px;\n}\n.modal-body::-webkit-scrollbar-track,\n.attachments-list::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 3px;\n}\n.modal-body::-webkit-scrollbar-thumb,\n.attachments-list::-webkit-scrollbar-thumb {\n  background: #B68A35;\n  border-radius: 3px;\n}\n.modal-body::-webkit-scrollbar-thumb:hover,\n.attachments-list::-webkit-scrollbar-thumb:hover {\n  background: #b68a35;\n}\n/*# sourceMappingURL=letter-details-modal.component-VLMFS645.css.map */\n'] }]
  }], () => [{ type: LettersService }, { type: TranslationService }], { letterId: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LetterDetailsModalComponent, { className: "LetterDetailsModalComponent", filePath: "src/app/components/letters/letter-details-modal/letter-details-modal.component.ts", lineNumber: 12 });
})();

// src/app/components/letters/letters-list/letters-list.ts
var _c06 = ["addLetterModal"];
var _c12 = ["editLetterModal"];
var _c2 = ["addAttachmentModal"];
var _c3 = ["editAttachmentModal"];
var _c4 = ["confirmationModal"];
var _c5 = ["signaturePadModal"];
var _c6 = ["letterDetailsModal"];
function LettersList_span_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getStatusCount(null));
  }
}
function LettersList_span_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getStatusCount(ctx_r1.LetterStatus.Draft));
  }
}
function LettersList_span_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getStatusCount(ctx_r1.LetterStatus.PendingApproval));
  }
}
function LettersList_span_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getStatusCount(ctx_r1.LetterStatus.Approved));
  }
}
function LettersList_span_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getStatusCount(ctx_r1.LetterStatus.Rejected));
  }
}
function LettersList_span_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getStatusCount(ctx_r1.LetterStatus.Sent));
  }
}
function LettersList_div_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 54)(2, "div", 55)(3, "div", 56)(4, "span", 57);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 58);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.translate("letters.loading_letters"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("letters.loading_letters"), " ");
  }
}
function LettersList_div_65_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 61);
    \u0275\u0275element(2, "path", 62)(3, "polyline", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h4", 64);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 64);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 12);
    \u0275\u0275listener("click", function LettersList_div_65_div_2_Template_button_click_8_listener() {
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
function LettersList_div_65_div_3_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 70);
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
function LettersList_div_65_div_3_div_1_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "div", 54)(2, "small", 77);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small", 78);
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
function LettersList_div_65_div_3_div_1_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "div", 54)(2, "small", 77);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small", 78);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const letter_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("letters.approval_notes"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(letter_r5.approvalNotes);
  }
}
function LettersList_div_65_div_3_div_1_div_28_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 104)(1, "div", 105);
    \u0275\u0275listener("click", function LettersList_div_65_div_3_div_1_div_28_div_13_Template_div_click_1_listener() {
      const attachment_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const letter_r5 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.showAttachmentDetails(letter_r5.id, attachment_r8));
    });
    \u0275\u0275elementStart(2, "div", 106)(3, "div", 107)(4, "div", 108);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 109);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 110)(9, "button", 89);
    \u0275\u0275listener("click", function LettersList_div_65_div_3_div_1_div_28_div_13_Template_button_click_9_listener($event) {
      const attachment_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const letter_r5 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.editAttachment(letter_r5, attachment_r8);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 99);
    \u0275\u0275element(11, "path", 111)(12, "path", 112);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(13, "button", 113);
    \u0275\u0275listener("click", function LettersList_div_65_div_3_div_1_div_28_div_13_Template_button_click_13_listener($event) {
      const attachment_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const letter_r5 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.deleteAttachment(letter_r5.id, attachment_r8.id, attachment_r8.fileName);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 99);
    \u0275\u0275element(15, "path", 114)(16, "path", 115)(17, "path", 116);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const attachment_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getAttachmentDisplayName(attachment_r8), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.translate("letters.uploaded_by"), ": ", attachment_r8.uploadedByName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("title", \u0275\u0275interpolate(ctx_r1.translate("letters.edit")));
    \u0275\u0275advance(4);
    \u0275\u0275property("title", \u0275\u0275interpolate(ctx_r1.translate("letters.delete")));
  }
}
function LettersList_div_65_div_3_div_1_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 94)(1, "div", 95)(2, "div", 96);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 97);
    \u0275\u0275element(4, "path", 62)(5, "polyline", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "span", 98);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 89);
    \u0275\u0275listener("click", function LettersList_div_65_div_3_div_1_div_28_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r6);
      const letter_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.addAttachment(letter_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 99);
    \u0275\u0275element(10, "line", 100)(11, "line", 101);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "div", 102);
    \u0275\u0275template(13, LettersList_div_65_div_3_div_1_div_28_div_13_Template, 18, 7, "div", 103);
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
function LettersList_div_65_div_3_div_1_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 94)(1, "div", 9)(2, "small", 64);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 117);
    \u0275\u0275element(4, "path", 62)(5, "polyline", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "button", 118);
    \u0275\u0275listener("click", function LettersList_div_65_div_3_div_1_div_29_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r9);
      const letter_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.addAttachment(letter_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 119);
    \u0275\u0275element(9, "line", 100)(10, "line", 101);
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
function LettersList_div_65_div_3_div_1_button_40_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 122)(1, "span", 57);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("common.loading"));
  }
}
function LettersList_div_65_div_3_div_1_button_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 120);
    \u0275\u0275listener("click", function LettersList_div_65_div_3_div_1_button_40_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const letter_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.submitForApproval(letter_r5));
    });
    \u0275\u0275template(1, LettersList_div_65_div_3_div_1_button_40_span_1_Template, 3, 1, "span", 92);
    \u0275\u0275element(2, "i", 121);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const letter_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("title", \u0275\u0275interpolate(ctx_r1.translate("letters.submit_for_approval")))("disabled", !ctx_r1.canSubmitForApproval(letter_r5) || ctx_r1.isProcessingLetter(letter_r5));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isProcessingLetter(letter_r5));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("letters.submit_for_approval"), " ");
  }
}
function LettersList_div_65_div_3_div_1_button_41_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 122)(1, "span", 57);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("common.loading"));
  }
}
function LettersList_div_65_div_3_div_1_button_41_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 126);
  }
}
function LettersList_div_65_div_3_div_1_button_41_i_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 127);
  }
}
function LettersList_div_65_div_3_div_1_button_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 123);
    \u0275\u0275listener("click", function LettersList_div_65_div_3_div_1_button_41_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const letter_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.sendEmail(letter_r5));
    });
    \u0275\u0275template(1, LettersList_div_65_div_3_div_1_button_41_span_1_Template, 3, 1, "span", 92)(2, LettersList_div_65_div_3_div_1_button_41_i_2_Template, 1, 0, "i", 124)(3, LettersList_div_65_div_3_div_1_button_41_i_3_Template, 1, 0, "i", 125);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const letter_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("btn-outline-secondary", !ctx_r1.isEmailSent(letter_r5))("btn-success", ctx_r1.isEmailSent(letter_r5));
    \u0275\u0275property("disabled", !ctx_r1.canSendEmail(letter_r5) || ctx_r1.isProcessingLetter(letter_r5) || ctx_r1.isEmailSent(letter_r5))("title", ctx_r1.getSendEmailButtonText(letter_r5));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isProcessingLetter(letter_r5));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isEmailSent(letter_r5));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isEmailSent(letter_r5));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getSendEmailButtonText(letter_r5), " ");
  }
}
function LettersList_div_65_div_3_div_1_button_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 128);
    \u0275\u0275listener("click", function LettersList_div_65_div_3_div_1_button_42_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const letter_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.downloadPdf(letter_r5));
    });
    \u0275\u0275element(1, "i", 129);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("title", \u0275\u0275interpolate(ctx_r1.translate("letters.download_pdf")));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("letters.download_pdf"), " ");
  }
}
function LettersList_div_65_div_3_div_1_span_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 122)(1, "span", 57);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("common.loading"));
  }
}
function LettersList_div_65_div_3_div_1_i_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 130);
  }
}
function LettersList_div_65_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 67)(1, "div", 68)(2, "div", 69)(3, "div", 11)(4, "span", 70);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, LettersList_div_65_div_3_div_1_span_6_Template, 2, 3, "span", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "small", 64);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 72)(10, "h5", 73);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 74);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 75)(16, "div", 76)(17, "small", 77);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "small", 78);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 76)(22, "small", 77);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "small", 78);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(26, LettersList_div_65_div_3_div_1_div_26_Template, 6, 2, "div", 79)(27, LettersList_div_65_div_3_div_1_div_27_Template, 6, 2, "div", 79)(28, LettersList_div_65_div_3_div_1_div_28_Template, 14, 5, "div", 80)(29, LettersList_div_65_div_3_div_1_div_29_Template, 12, 2, "div", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 81)(31, "div", 82)(32, "small", 64);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "small", 64);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 83)(37, "button", 84);
    \u0275\u0275listener("click", function LettersList_div_65_div_3_div_1_Template_button_click_37_listener() {
      const letter_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.viewLetterDetails(letter_r5));
    });
    \u0275\u0275element(38, "i", 85);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275template(40, LettersList_div_65_div_3_div_1_button_40_Template, 4, 5, "button", 86)(41, LettersList_div_65_div_3_div_1_button_41_Template, 5, 10, "button", 87)(42, LettersList_div_65_div_3_div_1_button_42_Template, 3, 3, "button", 88);
    \u0275\u0275elementStart(43, "button", 89);
    \u0275\u0275listener("click", function LettersList_div_65_div_3_div_1_Template_button_click_43_listener() {
      const letter_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.editLetter(letter_r5));
    });
    \u0275\u0275element(44, "i", 90);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "button", 91);
    \u0275\u0275listener("click", function LettersList_div_65_div_3_div_1_Template_button_click_46_listener() {
      const letter_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteLetter(letter_r5.id, letter_r5.subject));
    });
    \u0275\u0275template(47, LettersList_div_65_div_3_div_1_span_47_Template, 3, 1, "span", 92)(48, LettersList_div_65_div_3_div_1_i_48_Template, 1, 0, "i", 93);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const letter_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275classMap(ctx_r1.getDirectionBadgeClass(letter_r5.direction));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("letters.directions." + letter_r5.direction), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", letter_r5.status !== void 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(letter_r5.letterDate));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(letter_r5.subject);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind3(14, 34, letter_r5.body, 0, 100), "", letter_r5.body.length > 100 ? "..." : "", " ");
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
    \u0275\u0275property("ngIf", letter_r5.approvalNotes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", letter_r5.attachments && letter_r5.attachments.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !letter_r5.attachments || letter_r5.attachments.length === 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", ctx_r1.translate("common.created_by"), ": ", letter_r5.createdByName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDate(letter_r5.createdAt), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("title", \u0275\u0275interpolate(ctx_r1.translate("letter_details.view_details")));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("letter_details.view_details"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canSubmitForApproval(letter_r5));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", letter_r5.status === ctx_r1.LetterStatus.Approved);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", letter_r5.status === ctx_r1.LetterStatus.Approved);
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275interpolate(ctx_r1.translate("letters.edit")));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("letters.edit"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275interpolate(ctx_r1.translate("letters.delete")))("disabled", ctx_r1.isDeleting && ctx_r1.deletingLetterId === letter_r5.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isDeleting && ctx_r1.deletingLetterId === letter_r5.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r1.isDeleting && ctx_r1.deletingLetterId === letter_r5.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("letters.delete"), " ");
  }
}
function LettersList_div_65_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275template(1, LettersList_div_65_div_3_div_1_Template, 50, 38, "div", 66);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.filteredLetters);
  }
}
function LettersList_div_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 54);
    \u0275\u0275template(2, LettersList_div_65_div_2_Template, 10, 3, "div", 59)(3, LettersList_div_65_div_3_Template, 2, 1, "div", 60);
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
function LettersList_div_66_li_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 143)(1, "button", 148);
    \u0275\u0275listener("click", function LettersList_div_66_li_23_Template_button_click_1_listener() {
      const page_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageChange(page_r15));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const page_r15 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", page_r15 === ctx_r1.currentPage);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", page_r15, " ");
  }
}
function LettersList_div_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 131)(1, "div", 132)(2, "div", 133)(3, "label", 134);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "select", 135);
    \u0275\u0275twoWayListener("ngModelChange", function LettersList_div_66_Template_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.pageSize, $event) || (ctx_r1.pageSize = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function LettersList_div_66_Template_select_change_5_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageSizeChange());
    });
    \u0275\u0275elementStart(6, "option", 136);
    \u0275\u0275text(7, "5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "option", 137);
    \u0275\u0275text(9, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 138);
    \u0275\u0275text(11, "20");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 139);
    \u0275\u0275text(13, "50");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 140)(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "nav", 141)(18, "ul", 142)(19, "li", 143)(20, "button", 144);
    \u0275\u0275listener("click", function LettersList_div_66_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.currentPage - 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(21, "svg", 61);
    \u0275\u0275element(22, "polyline", 145);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(23, LettersList_div_66_li_23_Template, 3, 3, "li", 146);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(24, "li", 143)(25, "button", 144);
    \u0275\u0275listener("click", function LettersList_div_66_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.currentPage + 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(26, "svg", 61);
    \u0275\u0275element(27, "polyline", 147);
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
  signaturePadModal;
  letterDetailsModal;
  // Make LetterStatus available in template
  LetterStatus = LetterStatus;
  allLetters = [];
  filteredLetters = [];
  searchTerm = "";
  isLoading = false;
  isDeleting = false;
  deletingLetterId = null;
  expandedAttachments = {};
  sentEmails = /* @__PURE__ */ new Set();
  // Track which letters have had emails sent
  isProcessing = false;
  processingLetterId = null;
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
  // Status counts for tabs
  statusCounts = {};
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
    3: "Archived",
    4: ""
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
      Confidentiality: this.selectedConfidentiality || void 0,
      Status: this.selectedStatus !== null ? this.selectedStatus : void 0
    };
    console.log("Loading letters with params:", params);
    console.log("Selected status:", this.selectedStatus);
    this.lettersService.getAllLetters(params).subscribe({
      next: (res) => {
        console.log("Letters loaded:", res.data.items);
        this.allLetters = res.data.items;
        this.totalCount = res.data.totalCount;
        this.currentPage = res.data.page;
        this.pageSize = res.data.pageSize;
        if (this.selectedStatus !== null) {
          this.filteredLetters = this.allLetters.filter((letter) => (letter.status || 0) === this.selectedStatus);
        } else {
          this.filteredLetters = [...this.allLetters];
        }
        this.loadStatusCounts();
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
  // Status tab methods
  onStatusTabClick(status) {
    console.log("Status tab clicked:", status);
    this.selectedStatus = status;
    this.currentPage = 1;
    this.loadLetters();
  }
  getStatusCount(status) {
    if (status === null) {
      return this.totalCount;
    }
    const count = this.statusCounts[status] || 0;
    return count;
  }
  loadStatusCounts() {
    const params = {
      search: this.searchTerm || void 0,
      PageSize: 1e3,
      // Load a large number to get all letters
      PageNumber: 1,
      Direction: this.selectedDirection || void 0,
      Confidentiality: this.selectedConfidentiality || void 0
      // Don't include Status filter here to get all letters
    };
    this.lettersService.getAllLetters(params).subscribe({
      next: (res) => {
        console.log("Status counts loaded:", res.data.items.length, "letters");
        this.updateStatusCounts(res.data.items);
      },
      error: (error) => {
        console.error("Error loading status counts:", error);
        this.updateStatusCounts(this.allLetters);
      }
    });
  }
  updateStatusCounts(letters) {
    this.statusCounts = {};
    letters.forEach((letter) => {
      const status = letter.status || 0;
      this.statusCounts[status] = (this.statusCounts[status] || 0) + 1;
    });
    console.log("Status counts updated:", this.statusCounts);
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
      // 555555 - Gray for draft
      case LetterStatus.PendingApproval:
        return "bg-warning";
      // E54B1D - Orange for pending
      case LetterStatus.Approved:
        return "bg-success";
      // D4AF5F - Green for approved
      case LetterStatus.Rejected:
        return "bg-danger";
      // B45253 - Red for rejected
      case LetterStatus.Sent:
        return "bg-info";
      // 34495E - Blue for sent
      default:
        return "bg-secondary";
    }
  }
  // New approval workflow methods
  submitForApproval(letter) {
    if (this.isProcessing || this.processingLetterId === letter.id) {
      return;
    }
    this.isProcessing = true;
    this.processingLetterId = letter.id;
    this.lettersService.submitForApproval(letter.id).pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        console.log("Letter submitted for approval successfully");
        this.showSuccessMessage(this.translate("letters.submit_approval_success"));
        this.loadLetters();
        this.isProcessing = false;
        this.processingLetterId = null;
      },
      error: (error) => {
        console.error("Error submitting letter for approval:", error);
        const errorMessage = error.error?.message || error.message || "Unknown error occurred";
        this.showErrorMessage(this.translate("common.error") + ": " + errorMessage);
        this.isProcessing = false;
        this.processingLetterId = null;
      }
    });
  }
  sendEmail(letter) {
    if (this.isProcessing || this.processingLetterId === letter.id || this.sentEmails.has(letter.id)) {
      return;
    }
    this.isProcessing = true;
    this.processingLetterId = letter.id;
    this.lettersService.sendEmail(letter.id).pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        console.log("Email sent successfully");
        this.sentEmails.add(letter.id);
        this.showSuccessMessage(this.translate("letters.send_email_success"));
        this.isProcessing = false;
        this.processingLetterId = null;
      },
      error: (error) => {
        console.error("Error sending email:", error);
        const errorMessage = error.error?.message || error.message || "Unknown error occurred";
        this.showErrorMessage(this.translate("common.error") + ": " + errorMessage);
        this.isProcessing = false;
        this.processingLetterId = null;
      }
    });
  }
  downloadPdf(letter) {
    this.lettersService.downloadLetterPdf(letter.id).pipe(takeUntil(this.destroy$)).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `Letter_${letter.id}.pdf`;
        link.click();
        window.URL.revokeObjectURL(url);
        this.showSuccessMessage(this.translate("letters.download_pdf_success"));
      },
      error: (error) => {
        console.error("Error downloading PDF:", error);
        if (error.status === 404) {
          this.showErrorMessage(this.translate("letters.no_pdf_available"));
        } else {
          const errorMessage = error.error?.message || error.message || "Unknown error occurred";
          this.showErrorMessage(this.translate("common.error") + ": " + errorMessage);
        }
      }
    });
  }
  canSubmitForApproval(letter) {
    return letter.status === LetterStatus.Draft;
  }
  canSendEmail(letter) {
    return letter.status === LetterStatus.Approved && !this.sentEmails.has(letter.id);
  }
  canDownloadPdf(letter) {
    return letter.status === LetterStatus.Approved && !!letter.pdfPath;
  }
  isProcessingLetter(letter) {
    return this.isProcessing && this.processingLetterId === letter.id;
  }
  isEmailSent(letter) {
    return this.sentEmails.has(letter.id);
  }
  getSendEmailButtonText(letter) {
    if (this.isEmailSent(letter)) {
      return this.translate("letters.email_sent");
    }
    return this.translate("letters.send_email");
  }
  shouldShowPdfButton(letter) {
    const shouldShow = letter.status === LetterStatus.Approved;
    if (letter.status === LetterStatus.Approved) {
      console.log("PDF Button Debug - Letter:", letter.subject, "Status:", letter.status, "Should Show:", shouldShow);
    }
    return shouldShow;
  }
  viewLetterDetails(letter) {
    this.letterDetailsModal.open(letter.id);
  }
  static \u0275fac = function LettersList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LettersList)(\u0275\u0275directiveInject(LettersService), \u0275\u0275directiveInject(TranslationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LettersList, selectors: [["app-letters-list"]], viewQuery: function LettersList_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c06, 5);
      \u0275\u0275viewQuery(_c12, 5);
      \u0275\u0275viewQuery(_c2, 5);
      \u0275\u0275viewQuery(_c3, 5);
      \u0275\u0275viewQuery(_c4, 5);
      \u0275\u0275viewQuery(_c5, 5);
      \u0275\u0275viewQuery(_c6, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.addLetterModal = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.editLetterModal = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.addAttachmentModal = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.editAttachmentModal = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.confirmationModal = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.signaturePadModal = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.letterDetailsModal = _t.first);
    }
  }, standalone: false, decls: 81, vars: 41, consts: [["addLetterModal", ""], ["editLetterModal", ""], ["addAttachmentModal", ""], ["editAttachmentModal", ""], ["confirmationModal", ""], ["signaturePadModal", ""], ["letterDetailsModal", ""], [1, "letters-container", "rounded-5", "custom-scrollbar", 3, "dir"], [1, "letters-header", "mb-4"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "letters-title"], [1, "d-flex", "gap-2"], [1, "btn", "btn-primary", 3, "click"], [1, "bi", "bi-plus-circle", "me-2"], [1, "search-section", "mb-4"], [1, "row"], [1, "col-md-5"], [1, "search-input-wrapper"], [1, "bi", "bi-search", "search-icon"], ["type", "text", 1, "form-control", "search-input", 3, "ngModelChange", "keyup.enter", "placeholder", "ngModel"], [1, "col-md-2"], [1, "btn", "btn-primary", "w-100", 3, "click"], [1, "bi", "bi-search", "me-2"], [1, "form-control", 3, "ngModelChange", "change", "ngModel"], [3, "value"], [1, "col-md-1"], [1, "btn", "btn-outline-secondary", "w-100", 3, "click"], [1, "bi", "bi-x-circle", "me-2"], [1, "status-tabs-section", "mb-4"], [1, "status-tabs-container"], ["role", "tablist", 1, "nav", "nav-tabs", "status-tabs"], ["role", "presentation", 1, "nav-item"], ["type", "button", 1, "nav-link", "status-tab", 3, "click"], [1, "bi", "bi-list-ul", "me-2"], ["class", "badge bg-secondary ms-2", 4, "ngIf"], [1, "bi", "bi-file-earmark-text", "me-2"], [1, "bi", "bi-clock-history", "me-2"], ["class", "badge bg-warning ms-2", 4, "ngIf"], [1, "bi", "bi-check-circle", "me-2"], ["class", "badge bg-success ms-2", 4, "ngIf"], ["class", "badge bg-danger ms-2", 4, "ngIf"], [1, "bi", "bi-send", "me-2"], ["class", "badge bg-info ms-2", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["class", "pagination-section ltr", 4, "ngIf"], [3, "letterAdded"], [3, "letterUpdated"], [3, "attachmentAdded"], [3, "attachmentUpdated"], [1, "badge", "bg-secondary", "ms-2"], [1, "badge", "bg-warning", "ms-2"], [1, "badge", "bg-success", "ms-2"], [1, "badge", "bg-danger", "ms-2"], [1, "badge", "bg-info", "ms-2"], [1, "col-12"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "mt-3", "text-muted"], ["class", "text-center py-5", 4, "ngIf"], ["class", "row g-4", 4, "ngIf"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"], ["points", "14,2 14,8 20,8"], [1, "text-muted"], [1, "row", "g-4"], ["class", "col-lg-6 col-xl-4", 4, "ngFor", "ngForOf"], [1, "col-lg-6", "col-xl-4"], [1, "card", "h-100", "shadow-sm"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "badge"], ["class", "badge", 3, "class", 4, "ngIf"], [1, "card-body"], [1, "card-title"], [1, "card-text", "text-muted", "small", "mb-2"], [1, "row", "g-2", "mb-3"], [1, "col-6"], [1, "text-muted", "d-block"], [1, "fw-medium"], ["class", "row g-2 mb-3", 4, "ngIf"], ["class", "attachments-section", 4, "ngIf"], [1, "card-footer", "bg-transparent"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "d-flex", "gap-2", "flex-wrap", "justify-content-center", "mb-2"], [1, "btn", "btn-sm", "btn-outline-info", 3, "click", "title"], [1, "bi", "bi-eye", "me-1"], ["class", "btn btn-sm btn-warning", 3, "disabled", "title", "click", 4, "ngIf"], ["class", "btn btn-sm", 3, "btn-outline-secondary", "btn-success", "disabled", "title", "click", 4, "ngIf"], ["class", "btn btn-sm btn-success", 3, "title", "click", 4, "ngIf"], [1, "btn", "btn-sm", "btn-outline-primary", 3, "click", "title"], [1, "fas", "fa-edit", "me-1"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click", "disabled", "title"], ["class", "spinner-border spinner-border-sm me-1", "role", "status", 4, "ngIf"], ["class", "fas fa-trash me-1", 4, "ngIf"], [1, "attachments-section"], [1, "attachments-header", "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "d-flex", "align-items-center"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "me-2", "text-muted"], [1, "fw-medium", "text-muted"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], [1, "attachments-list"], ["class", "attachment-item", 4, "ngFor", "ngForOf"], [1, "attachment-item"], [1, "attachment-content", "d-flex", "justify-content-between", "align-items-center", "p-2", "rounded", 2, "cursor", "pointer", "transition", "background-color 0.2s", 3, "click"], [1, "d-flex", "align-items-center", "flex-grow-1"], [1, "attachment-info"], [1, "attachment-name", "fw-medium"], [1, "attachment-meta", "text-muted", "small"], [1, "d-flex", "gap-1"], ["d", "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"], ["d", "m18.5 2.5 3 3L12 15l-4 1 1-4 9.5-9.5z"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click", "title"], ["d", "M3 6h18"], ["d", "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"], ["d", "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "me-1"], [1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "me-1"], [1, "btn", "btn-sm", "btn-warning", 3, "click", "disabled", "title"], [1, "fas", "fa-paper-plane", "me-1"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "me-1"], [1, "btn", "btn-sm", 3, "click", "disabled", "title"], ["class", "fas fa-envelope me-1", 4, "ngIf"], ["class", "fas fa-check me-1", 4, "ngIf"], [1, "fas", "fa-envelope", "me-1"], [1, "fas", "fa-check", "me-1"], [1, "btn", "btn-sm", "btn-success", 3, "click", "title"], [1, "fas", "fa-download", "me-1"], [1, "fas", "fa-trash", "me-1"], [1, "pagination-section", "ltr"], [1, "pagination-controls"], [1, "page-size-control"], ["for", "pageSize"], ["id", "pageSize", 3, "ngModelChange", "change", "ngModel"], ["value", "5"], ["value", "10"], ["value", "20"], ["value", "50"], [1, "pagination-info"], ["aria-label", "Letters pagination"], [1, "pagination"], [1, "page-item"], [1, "page-link", 3, "click", "disabled"], ["points", "15,18 9,12 15,6"], ["class", "page-item", 3, "active", 4, "ngFor", "ngForOf"], ["points", "9,18 15,12 9,6"], [1, "page-link", 3, "click"]], template: function LettersList_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "h1", 10);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 11)(6, "button", 12);
      \u0275\u0275listener("click", function LettersList_Template_button_click_6_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openAddModal());
      });
      \u0275\u0275element(7, "i", 13);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(9, "div", 14)(10, "div", 15)(11, "div", 16)(12, "div", 17);
      \u0275\u0275element(13, "i", 18);
      \u0275\u0275elementStart(14, "input", 19);
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
      \u0275\u0275elementStart(15, "div", 20)(16, "button", 21);
      \u0275\u0275listener("click", function LettersList_Template_button_click_16_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSearchClick());
      });
      \u0275\u0275element(17, "i", 22);
      \u0275\u0275text(18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 20)(20, "select", 23);
      \u0275\u0275twoWayListener("ngModelChange", function LettersList_Template_select_ngModelChange_20_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedDirection, $event) || (ctx.selectedDirection = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("change", function LettersList_Template_select_change_20_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFilterChange());
      });
      \u0275\u0275elementStart(21, "option", 24);
      \u0275\u0275text(22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "option", 24);
      \u0275\u0275text(24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "option", 24);
      \u0275\u0275text(26);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "div", 25)(28, "button", 26);
      \u0275\u0275listener("click", function LettersList_Template_button_click_28_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.clearFilters());
      });
      \u0275\u0275element(29, "i", 27);
      \u0275\u0275text(30);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(31, "div", 28)(32, "div", 29)(33, "ul", 30)(34, "li", 31)(35, "button", 32);
      \u0275\u0275listener("click", function LettersList_Template_button_click_35_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onStatusTabClick(null));
      });
      \u0275\u0275element(36, "i", 33);
      \u0275\u0275text(37);
      \u0275\u0275template(38, LettersList_span_38_Template, 2, 1, "span", 34);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "li", 31)(40, "button", 32);
      \u0275\u0275listener("click", function LettersList_Template_button_click_40_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onStatusTabClick(ctx.LetterStatus.Draft));
      });
      \u0275\u0275element(41, "i", 35);
      \u0275\u0275text(42);
      \u0275\u0275template(43, LettersList_span_43_Template, 2, 1, "span", 34);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "li", 31)(45, "button", 32);
      \u0275\u0275listener("click", function LettersList_Template_button_click_45_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onStatusTabClick(ctx.LetterStatus.PendingApproval));
      });
      \u0275\u0275element(46, "i", 36);
      \u0275\u0275text(47);
      \u0275\u0275template(48, LettersList_span_48_Template, 2, 1, "span", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "li", 31)(50, "button", 32);
      \u0275\u0275listener("click", function LettersList_Template_button_click_50_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onStatusTabClick(ctx.LetterStatus.Approved));
      });
      \u0275\u0275element(51, "i", 38);
      \u0275\u0275text(52);
      \u0275\u0275template(53, LettersList_span_53_Template, 2, 1, "span", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "li", 31)(55, "button", 32);
      \u0275\u0275listener("click", function LettersList_Template_button_click_55_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onStatusTabClick(ctx.LetterStatus.Rejected));
      });
      \u0275\u0275element(56, "i", 27);
      \u0275\u0275text(57);
      \u0275\u0275template(58, LettersList_span_58_Template, 2, 1, "span", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "li", 31)(60, "button", 32);
      \u0275\u0275listener("click", function LettersList_Template_button_click_60_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onStatusTabClick(ctx.LetterStatus.Sent));
      });
      \u0275\u0275element(61, "i", 41);
      \u0275\u0275text(62);
      \u0275\u0275template(63, LettersList_span_63_Template, 2, 1, "span", 42);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(64, LettersList_div_64_Template, 8, 2, "div", 43)(65, LettersList_div_65_Template, 4, 2, "div", 43)(66, LettersList_div_66_Template, 28, 15, "div", 44);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "app-add-letter", 45, 0);
      \u0275\u0275listener("letterAdded", function LettersList_Template_app_add_letter_letterAdded_67_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.loadLetters());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "app-edit-letter", 46, 1);
      \u0275\u0275listener("letterUpdated", function LettersList_Template_app_edit_letter_letterUpdated_69_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.loadLetters());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "app-add-attachment", 47, 2);
      \u0275\u0275listener("attachmentAdded", function LettersList_Template_app_add_attachment_attachmentAdded_71_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.loadLetters());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "app-edit-attachment", 48, 3);
      \u0275\u0275listener("attachmentUpdated", function LettersList_Template_app_edit_attachment_attachmentUpdated_73_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.loadLetters());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(75, "app-letters-confirmation-modal", null, 4)(77, "app-signature-pad-modal", null, 5)(79, "app-letter-details-modal", null, 6);
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
      \u0275\u0275textInterpolate1(" ", ctx.translate("letters.all_directions"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("value", 0);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.translate("letters.directions.0"));
      \u0275\u0275advance();
      \u0275\u0275property("value", 1);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.translate("letters.directions.1"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.clear"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275classProp("active", ctx.selectedStatus === null);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("letters.all_letters"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getStatusCount(null) > 0);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.selectedStatus === ctx.LetterStatus.Draft);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("letters.statuses.0"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getStatusCount(ctx.LetterStatus.Draft) > 0);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.selectedStatus === ctx.LetterStatus.PendingApproval);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("letters.statuses.1"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getStatusCount(ctx.LetterStatus.PendingApproval) > 0);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.selectedStatus === ctx.LetterStatus.Approved);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("letters.statuses.2"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getStatusCount(ctx.LetterStatus.Approved) > 0);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.selectedStatus === ctx.LetterStatus.Rejected);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("letters.statuses.3"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getStatusCount(ctx.LetterStatus.Rejected) > 0);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.selectedStatus === ctx.LetterStatus.Sent);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("letters.statuses.4"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getStatusCount(ctx.LetterStatus.Sent) > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.filteredLetters.length > 0);
    }
  }, dependencies: [NgForOf, NgIf, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, AddLetter, EditLetter, AddAttachment, EditAttachment, LettersConfirmationModalComponent, SignaturePadModalComponent, LetterDetailsModalComponent, SlicePipe], styles: ["\n\n.letters-container[_ngcontent-%COMP%] {\n  padding: 2rem;\n  min-height: 100vh;\n}\n.letters-header[_ngcontent-%COMP%] {\n  background: white;\n  padding: 1.5rem;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.letters-title[_ngcontent-%COMP%] {\n  color: #5f646d;\n  font-weight: 700;\n  font-size: 2rem;\n  margin: 0;\n}\n.status-tabs-section[_ngcontent-%COMP%] {\n  background: white;\n  padding: 1rem 1.5rem;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.status-tabs-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.status-tabs[_ngcontent-%COMP%] {\n  border-bottom: none;\n  display: flex;\n  flex-wrap: nowrap;\n  min-width: max-content;\n  gap: 0.5rem;\n}\n.status-tab[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0.75rem 1rem;\n  border: 1px solid #e9ecef;\n  border-radius: 8px;\n  background: #f8f9fa;\n  color: #6c757d;\n  font-weight: 500;\n  font-size: 0.875rem;\n  white-space: nowrap;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  position: relative;\n  min-width: fit-content;\n}\n.status-tab[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  border-color: #dee2e6;\n  color: #495057;\n  transform: translateY(-1px);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.status-tab.active[_ngcontent-%COMP%] {\n  background: #B68A35;\n  border-color: #B68A35;\n  color: white;\n  box-shadow: 0 2px 8px rgba(191, 171, 134, 0.3);\n}\n.status-tab.active[_ngcontent-%COMP%]:hover {\n  background: #b68a35;\n  border-color: #b68a35;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(191, 171, 134, 0.4);\n}\n.status-tab[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  padding: 0.25rem 0.5rem;\n  border-radius: 12px;\n  font-weight: 600;\n}\n.status-tab.active[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2) !important;\n  color: white !important;\n}\n.search-section[_ngcontent-%COMP%] {\n  background: white;\n  padding: 1.5rem;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.search-input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6c757d;\n  z-index: 10;\n}\n.search-input[_ngcontent-%COMP%] {\n  padding-left: 40px;\n  border-radius: 8px;\n  border: 2px solid #e9ecef;\n  transition: all 0.3s ease;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: #B68A35;\n  box-shadow: 0 0 0 0.2rem rgba(212, 170, 58, 0.25);\n}\n.card[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n  border: 1px solid #f4f4f4;\n}\n.card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1) !important;\n  border: 1px solid #cba344;\n}\n.card-header[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n  padding: 0.75rem 1rem;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #2c3e50;\n  margin-bottom: 0.5rem;\n}\n.card-text[_ngcontent-%COMP%] {\n  line-height: 1.5;\n  color: #6c757d;\n}\n.badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 0.375rem 0.5rem;\n}\n.bg-primary[_ngcontent-%COMP%] {\n  background-color: #B68A35 !important;\n}\n.bg-success[_ngcontent-%COMP%] {\n  background-color: #d4af5f !important;\n}\n.btn-warning[_ngcontent-%COMP%] {\n  border: 1px solid #d67909;\n  color: #b6550b;\n  background-color: #fff3cd;\n}\n.btn-warning[_ngcontent-%COMP%]:hover {\n  background-color: #78260D;\n  color: #fff3cd;\n}\n.bg-warning[_ngcontent-%COMP%] {\n  background-color: #A2563F !important;\n  color: #ffffff !important;\n}\n.bg-danger[_ngcontent-%COMP%] {\n  background-color: #b45253 !important;\n}\n.bg-info[_ngcontent-%COMP%] {\n  background-color: #34495e !important;\n}\n.bg-dark[_ngcontent-%COMP%] {\n  background-color: #343a40 !important;\n}\n.bg-secondary[_ngcontent-%COMP%] {\n  background-color: #555555 !important;\n}\n.btn-success[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #2ba149;\n}\n.btn-success[_ngcontent-%COMP%]:hover {\n  background: #2ba149;\n  color: white;\n}\n.attachments-section[_ngcontent-%COMP%] {\n  border-top: 1px solid #e9ecef;\n  padding-top: 0.75rem;\n  margin-top: 0.75rem;\n}\n.attachments-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f8f9fa;\n  padding-bottom: 0.5rem;\n}\n.attachment-item[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.attachment-content[_ngcontent-%COMP%] {\n  border: 1px solid #f8f9fa;\n  border-radius: 0.375rem;\n  transition: all 0.2s ease;\n}\n.attachment-content[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n  border-color: #dee2e6;\n  transform: translateY(-1px);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.attachment-info[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.attachment-name[_ngcontent-%COMP%] {\n  color: #495057;\n  margin-bottom: 0.25rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 200px;\n}\n.attachment-meta[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  line-height: 1.2;\n}\n.form-control[_ngcontent-%COMP%], \n.form-select[_ngcontent-%COMP%] {\n  border: 1px solid #ced4da;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n.form-control[_ngcontent-%COMP%]:focus, \n.form-select[_ngcontent-%COMP%]:focus {\n  border-color: #B68A35;\n  box-shadow: 0 0 0 0.2rem rgba(212, 170, 58, 0.25);\n}\n.pagination[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  color: #B68A35;\n  border: 1px solid #dee2e6;\n  padding: 0.5rem 0.75rem;\n}\n.pagination[_ngcontent-%COMP%]   .page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  background-color: #B68A35;\n  border-color: #B68A35;\n}\n.pagination[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]:hover {\n  color: #b68a35;\n  background-color: #e9ecef;\n  border-color: #dee2e6;\n}\n.spinner-border[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n}\n.dropdown-menu[_ngcontent-%COMP%] {\n  border: 1px solid #e9ecef;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n}\n.dropdown-item[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  transition: background-color 0.15s ease-in-out;\n}\n.dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n.dropdown-item.text-danger[_ngcontent-%COMP%]:hover {\n  background-color: #f8d7da;\n  color: #721c24 !important;\n}\n[dir=rtl][_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  text-align: right;\n}\n[dir=rtl][_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  right: 0;\n  left: auto;\n}\n[dir=rtl][_ngcontent-%COMP%]   .me-2[_ngcontent-%COMP%] {\n  margin-right: 0 !important;\n  margin-left: 0.5rem !important;\n}\n[dir=rtl][_ngcontent-%COMP%]   .ms-2[_ngcontent-%COMP%] {\n  margin-left: 0 !important;\n  margin-right: 0.5rem !important;\n}\n.card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;\n}\n.text-center.py-5[_ngcontent-%COMP%] {\n  padding: 3rem 0;\n}\n.fa-envelope[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #495057;\n  margin-bottom: 0.5rem;\n}\n.btn[_ngcontent-%COMP%] {\n  border-radius: 0.375rem;\n  font-weight: 500;\n  transition: all 0.15s ease-in-out;\n}\n.attachment-details[_ngcontent-%COMP%] {\n  padding: 1rem 0;\n}\n.attachment-details[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.attachment-details[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n}\n.attachment-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n  line-height: 1.6;\n}\n.attachment-details[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #495057;\n  font-weight: 600;\n}\n.attachment-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #B68A35;\n  border-color: #B68A35;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #b68a35;\n  border-color: #b68a35;\n}\n.btn-outline-secondary[_ngcontent-%COMP%] {\n  color: #6c757d;\n  border-color: #6c757d;\n}\n.btn-outline-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #6c757d;\n  border-color: #6c757d;\n  color: #fff;\n}\n.btn-outline-primary[_ngcontent-%COMP%] {\n  color: #B68A35;\n  border-color: #B68A35;\n}\n.edit-letter[_ngcontent-%COMP%] {\n  color: #29abe2 !important;\n  border-color: #29abe2 !important;\n}\n.edit-letter[_ngcontent-%COMP%]:hover {\n  background-color: #bbdefb !important;\n  border-color: #29abe2 !important;\n  color: #29abe2 !important;\n}\n.btn-outline-primary[_ngcontent-%COMP%]:hover {\n  background-color: #B68A35;\n  border-color: #B68A35;\n  color: #fff;\n}\n.btn-outline-info[_ngcontent-%COMP%] {\n  color: #17a2b8;\n  border-color: #17a2b8;\n}\n.btn-outline-info[_ngcontent-%COMP%]:hover {\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n  color: #fff;\n}\n.pagination-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-top: 2rem;\n  padding: 1.5rem;\n  background-color: #f9fafb;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n}\n.pagination-info[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #6b7280;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.pagination-controls[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n}\n.page-size-control[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.page-size-control[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #374151;\n  font-weight: 500;\n  font-size: 0.875rem;\n}\n.page-size-control[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  background: white;\n  color: #374151;\n  font-size: 0.875rem;\n  cursor: pointer;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  gap: 0.25rem;\n}\n.page-item[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.page-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 40px;\n  height: 40px;\n  padding: 0.5rem;\n  border: 1px solid #dee2e6;\n  background: white;\n  color: #043dff;\n  text-decoration: none;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.page-link[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  border-color: #adb5bd;\n  color: #0056b3;\n}\n.page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  background: #B68A35;\n  border-color: #B68A35;\n  color: white;\n}\n.page-item.disabled[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-color: #dee2e6;\n  color: #6c757d;\n  cursor: not-allowed;\n}\n[dir=rtl][_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  left: auto;\n  right: 12px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  padding-left: 12px;\n  padding-right: 40px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .letters-container[_ngcontent-%COMP%] {\n  text-align: right;\n}\n@media (max-width: 768px) {\n  .letters-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .letters-header[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .letters-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .status-tabs-section[_ngcontent-%COMP%] {\n    padding: 0.75rem 1rem;\n  }\n  .status-tab[_ngcontent-%COMP%] {\n    padding: 0.5rem 0.75rem;\n    font-size: 0.8rem;\n  }\n  .status-tab[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n    font-size: 0.65rem;\n    padding: 0.2rem 0.4rem;\n  }\n  .search-section[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .pagination-controls[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n    justify-content: center;\n  }\n  .pagination[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .page-size-control[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .card-title[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .badge[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n    padding: 0.25rem 0.375rem;\n  }\n  .d-flex.gap-2[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 0.25rem !important;\n  }\n  .search-section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    display: flex !important;\n    flex-direction: row !important;\n    align-items: center !important;\n    justify-content: center !important;\n    gap: 1rem !important;\n  }\n}\n/*# sourceMappingURL=letters-list-6LGLJYLR.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LettersList, [{
    type: Component,
    args: [{ selector: "app-letters-list", standalone: false, template: `<div\r
  class="letters-container rounded-5 custom-scrollbar"\r
  [dir]="isRTL() ? 'rtl' : 'ltr'"\r
>\r
  <!-- Header Section -->\r
  <div class="letters-header mb-4">\r
    <div class="d-flex justify-content-between align-items-center">\r
      <h1 class="letters-title">{{ translate("letters.title") }}</h1>\r
      <div class="d-flex gap-2">\r
        <button class="btn btn-primary" (click)="openAddModal()">\r
          <i class="bi bi-plus-circle me-2"></i>\r
          {{ translate("letters.add_letter") }}\r
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
          <input\r
            type="text"\r
            class="form-control search-input"\r
            [placeholder]="translate('letters.search_letters')"\r
            [(ngModel)]="searchTerm"\r
            (keyup.enter)="onSearchClick()"\r
          />\r
        </div>\r
      </div>\r
      <div class="col-md-2">\r
        <button class="btn btn-primary w-100" (click)="onSearchClick()">\r
          <i class="bi bi-search me-2"></i>\r
          {{ translate("common.search") }}\r
        </button>\r
      </div>\r
      <div class="col-md-2">\r
        <select\r
          class="form-control"\r
          [(ngModel)]="selectedDirection"\r
          (change)="onFilterChange()"\r
        >\r
          <option [value]="null">\r
            {{ translate("letters.all_directions") }}\r
          </option>\r
          <option [value]="0">{{ translate("letters.directions.0") }}</option>\r
          <option [value]="1">{{ translate("letters.directions.1") }}</option>\r
        </select>\r
      </div>\r
      <div class="col-md-1">\r
        <button\r
          class="btn btn-outline-secondary w-100"\r
          (click)="clearFilters()"\r
        >\r
          <i class="bi bi-x-circle me-2"></i>\r
          {{ translate("common.clear") }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Status Tabs -->\r
  <div class="status-tabs-section mb-4">\r
    <div class="status-tabs-container">\r
      <ul class="nav nav-tabs status-tabs" role="tablist">\r
        <li class="nav-item" role="presentation">\r
          <button\r
            class="nav-link status-tab"\r
            [class.active]="selectedStatus === null"\r
            (click)="onStatusTabClick(null)"\r
            type="button"\r
          >\r
            <i class="bi bi-list-ul me-2"></i>\r
            {{ translate("letters.all_letters") }}\r
            <span\r
              class="badge bg-secondary ms-2"\r
              *ngIf="getStatusCount(null) > 0"\r
              >{{ getStatusCount(null) }}</span\r
            >\r
          </button>\r
        </li>\r
        <li class="nav-item" role="presentation">\r
          <button\r
            class="nav-link status-tab"\r
            [class.active]="selectedStatus === LetterStatus.Draft"\r
            (click)="onStatusTabClick(LetterStatus.Draft)"\r
            type="button"\r
          >\r
            <i class="bi bi-file-earmark-text me-2"></i>\r
            {{ translate("letters.statuses.0") }}\r
            <span\r
              class="badge bg-secondary ms-2"\r
              *ngIf="getStatusCount(LetterStatus.Draft) > 0"\r
              >{{ getStatusCount(LetterStatus.Draft) }}</span\r
            >\r
          </button>\r
        </li>\r
        <li class="nav-item" role="presentation">\r
          <button\r
            class="nav-link status-tab"\r
            [class.active]="selectedStatus === LetterStatus.PendingApproval"\r
            (click)="onStatusTabClick(LetterStatus.PendingApproval)"\r
            type="button"\r
          >\r
            <i class="bi bi-clock-history me-2"></i>\r
            {{ translate("letters.statuses.1") }}\r
            <span\r
              class="badge bg-warning ms-2"\r
              *ngIf="getStatusCount(LetterStatus.PendingApproval) > 0"\r
              >{{ getStatusCount(LetterStatus.PendingApproval) }}</span\r
            >\r
          </button>\r
        </li>\r
        <li class="nav-item" role="presentation">\r
          <button\r
            class="nav-link status-tab"\r
            [class.active]="selectedStatus === LetterStatus.Approved"\r
            (click)="onStatusTabClick(LetterStatus.Approved)"\r
            type="button"\r
          >\r
            <i class="bi bi-check-circle me-2"></i>\r
            {{ translate("letters.statuses.2") }}\r
            <span\r
              class="badge bg-success ms-2"\r
              *ngIf="getStatusCount(LetterStatus.Approved) > 0"\r
              >{{ getStatusCount(LetterStatus.Approved) }}</span\r
            >\r
          </button>\r
        </li>\r
        <li class="nav-item" role="presentation">\r
          <button\r
            class="nav-link status-tab"\r
            [class.active]="selectedStatus === LetterStatus.Rejected"\r
            (click)="onStatusTabClick(LetterStatus.Rejected)"\r
            type="button"\r
          >\r
            <i class="bi bi-x-circle me-2"></i>\r
            {{ translate("letters.statuses.3") }}\r
            <span\r
              class="badge bg-danger ms-2"\r
              *ngIf="getStatusCount(LetterStatus.Rejected) > 0"\r
              >{{ getStatusCount(LetterStatus.Rejected) }}</span\r
            >\r
          </button>\r
        </li>\r
        <li class="nav-item" role="presentation">\r
          <button\r
            class="nav-link status-tab"\r
            [class.active]="selectedStatus === LetterStatus.Sent"\r
            (click)="onStatusTabClick(LetterStatus.Sent)"\r
            type="button"\r
          >\r
            <i class="bi bi-send me-2"></i>\r
            {{ translate("letters.statuses.4") }}\r
            <span\r
              class="badge bg-info ms-2"\r
              *ngIf="getStatusCount(LetterStatus.Sent) > 0"\r
              >{{ getStatusCount(LetterStatus.Sent) }}</span\r
            >\r
          </button>\r
        </li>\r
      </ul>\r
    </div>\r
  </div>\r
\r
  <!-- Loading State -->\r
  <div class="row" *ngIf="isLoading">\r
    <div class="col-12">\r
      <div class="text-center py-5">\r
        <div class="spinner-border text-primary" role="status">\r
          <span class="visually-hidden">{{\r
            translate("letters.loading_letters")\r
          }}</span>\r
        </div>\r
        <p class="mt-3 text-muted">\r
          {{ translate("letters.loading_letters") }}\r
        </p>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Letters List -->\r
  <div class="row" *ngIf="!isLoading">\r
    <div class="col-12">\r
      <!-- No Letters Found -->\r
      <div class="text-center py-5" *ngIf="filteredLetters.length === 0">\r
        <svg\r
          width="16"\r
          height="16"\r
          viewBox="0 0 24 24"\r
          fill="none"\r
          stroke="currentColor"\r
          stroke-width="2"\r
        >\r
          <path\r
            d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"\r
          ></path>\r
          <polyline points="14,2 14,8 20,8"></polyline>\r
        </svg>\r
        <h4 class="text-muted">{{ translate("letters.no_letters_found") }}</h4>\r
        <p class="text-muted">{{ translate("letters.get_started_message") }}</p>\r
        <button class="btn btn-primary" (click)="openAddModal()">\r
          {{ translate("letters.add_letter") }}\r
        </button>\r
      </div>\r
\r
      <!-- Letters Cards -->\r
      <div class="row g-4" *ngIf="filteredLetters.length > 0">\r
        <div class="col-lg-6 col-xl-4" *ngFor="let letter of filteredLetters">\r
          <div class="card h-100 shadow-sm">\r
            <div\r
              class="card-header d-flex justify-content-between align-items-center"\r
            >\r
              <div class="d-flex gap-2">\r
                <span\r
                  class="badge"\r
                  [class]="getDirectionBadgeClass(letter.direction)"\r
                >\r
                  {{ translate("letters.directions." + letter.direction) }}\r
                </span>\r
                <span\r
                  class="badge"\r
                  [class]="getStatusBadgeClass(letter.status || 0)"\r
                  *ngIf="letter.status !== undefined"\r
                >\r
                  {{ translate("letters.statuses." + letter.status) }}\r
                </span>\r
              </div>\r
              <small class="text-muted">{{\r
                formatDate(letter.letterDate)\r
              }}</small>\r
            </div>\r
\r
            <div class="card-body">\r
              <h5 class="card-title">{{ letter.subject }}</h5>\r
              <p class="card-text text-muted small mb-2">\r
                {{ letter.body | slice : 0 : 100\r
                }}{{ letter.body.length > 100 ? "..." : "" }}\r
              </p>\r
\r
              <div class="row g-2 mb-3">\r
                <div class="col-6">\r
                  <small class="text-muted d-block"\r
                    >{{ translate("letters.to") }}:</small\r
                  >\r
                  <small class="fw-medium">{{ letter.to }}</small>\r
                </div>\r
                <div class="col-6">\r
                  <small class="text-muted d-block"\r
                    >{{ translate("letters.letter_date") }}:</small\r
                  >\r
                  <small class="fw-medium">{{\r
                    formatDate(letter.letterDate)\r
                  }}</small>\r
                </div>\r
              </div>\r
\r
              <div class="row g-2 mb-3" *ngIf="letter.referenceNumbers">\r
                <div class="col-12">\r
                  <small class="text-muted d-block"\r
                    >{{ translate("letters.reference_numbers") }}:</small\r
                  >\r
                  <small class="fw-medium">{{ letter.referenceNumbers }}</small>\r
                </div>\r
              </div>\r
\r
              <!-- Approval Notes Section -->\r
              <div class="row g-2 mb-3" *ngIf="letter.approvalNotes">\r
                <div class="col-12">\r
                  <small class="text-muted d-block"\r
                    >{{ translate("letters.approval_notes") }}:</small\r
                  >\r
                  <small class="fw-medium">{{ letter.approvalNotes }}</small>\r
                </div>\r
              </div>\r
\r
              <!-- Attachments Section -->\r
              <div\r
                class="attachments-section"\r
                *ngIf="letter.attachments && letter.attachments.length > 0"\r
              >\r
                <div\r
                  class="attachments-header d-flex justify-content-between align-items-center mb-3"\r
                >\r
                  <div class="d-flex align-items-center">\r
                    <svg\r
                      width="16"\r
                      height="16"\r
                      viewBox="0 0 24 24"\r
                      fill="none"\r
                      stroke="currentColor"\r
                      stroke-width="2"\r
                      class="me-2 text-muted"\r
                    >\r
                      <path\r
                        d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"\r
                      ></path>\r
                      <polyline points="14,2 14,8 20,8"></polyline>\r
                    </svg>\r
                    <span class="fw-medium text-muted"\r
                      >{{ translate("letters.attachments") }} ({{\r
                        letter.attachments.length\r
                      }})</span\r
                    >\r
                  </div>\r
                  <button\r
                    class="btn btn-sm btn-outline-primary"\r
                    (click)="addAttachment(letter)"\r
                    title="{{ translate('letters.add_attachment') }}"\r
                  >\r
                    <svg\r
                      width="14"\r
                      height="14"\r
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
\r
                <!-- Attachments List -->\r
                <div class="attachments-list">\r
                  <div\r
                    class="attachment-item"\r
                    *ngFor="let attachment of letter.attachments"\r
                  >\r
                    <div\r
                      class="attachment-content d-flex justify-content-between align-items-center p-2 rounded"\r
                      (click)="showAttachmentDetails(letter.id, attachment)"\r
                      style="cursor: pointer; transition: background-color 0.2s"\r
                    >\r
                      <div class="d-flex align-items-center flex-grow-1">\r
                        <!--\r
                         -->\r
                        <div class="attachment-info">\r
                          <div class="attachment-name fw-medium">\r
                            {{ getAttachmentDisplayName(attachment) }}\r
                          </div>\r
                          <div class="attachment-meta text-muted small">\r
                            {{ translate("letters.uploaded_by") }}:\r
                            {{ attachment.uploadedByName }}\r
                          </div>\r
                        </div>\r
                      </div>\r
                      <div class="d-flex gap-1">\r
                        <button\r
                          class="btn btn-sm btn-outline-primary"\r
                          (click)="\r
                            editAttachment(letter, attachment);\r
                            $event.stopPropagation()\r
                          "\r
                          title="{{ translate('letters.edit') }}"\r
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
                              d="m18.5 2.5 3 3L12 15l-4 1 1-4 9.5-9.5z"\r
                            ></path>\r
                          </svg>\r
                        </button>\r
                        <button\r
                          class="btn btn-sm btn-outline-danger"\r
                          (click)="\r
                            deleteAttachment(\r
                              letter.id,\r
                              attachment.id,\r
                              attachment.fileName\r
                            );\r
                            $event.stopPropagation()\r
                          "\r
                          title="{{ translate('letters.delete') }}"\r
                        >\r
                          <svg\r
                            width="14"\r
                            height="14"\r
                            viewBox="0 0 24 24"\r
                            fill="none"\r
                            stroke="currentColor"\r
                            stroke-width="2"\r
                          >\r
                            <path d="M3 6h18"></path>\r
                            <path\r
                              d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"\r
                            ></path>\r
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
              <div\r
                class="attachments-section"\r
                *ngIf="!letter.attachments || letter.attachments.length === 0"\r
              >\r
                <div class="d-flex justify-content-between align-items-center">\r
                  <small class="text-muted">\r
                    <svg\r
                      width="16"\r
                      height="16"\r
                      viewBox="0 0 24 24"\r
                      fill="none"\r
                      stroke="currentColor"\r
                      stroke-width="2"\r
                      class="me-1"\r
                    >\r
                      <path\r
                        d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"\r
                      ></path>\r
                      <polyline points="14,2 14,8 20,8"></polyline>\r
                    </svg>\r
                    {{ translate("letters.no_attachments") }}\r
                  </small>\r
                  <button\r
                    class="btn btn-sm btn-outline-primary"\r
                    (click)="addAttachment(letter)"\r
                  >\r
                    <svg\r
                      width="14"\r
                      height="14"\r
                      viewBox="0 0 24 24"\r
                      fill="none"\r
                      stroke="currentColor"\r
                      stroke-width="2"\r
                      class="me-1"\r
                    >\r
                      <line x1="12" y1="5" x2="12" y2="19"></line>\r
                      <line x1="5" y1="12" x2="19" y2="12"></line>\r
                    </svg>\r
                    {{ translate("letters.add_attachment") }}\r
                  </button>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <div class="card-footer bg-transparent">\r
              <!-- Letter Info Row -->\r
              <div\r
                class="d-flex justify-content-between align-items-center mb-3"\r
              >\r
                <small class="text-muted">\r
                  {{ translate("common.created_by") }}:\r
                  {{ letter.createdByName }}\r
                </small>\r
                <small class="text-muted">\r
                  {{ formatDate(letter.createdAt) }}\r
                </small>\r
              </div>\r
              <!-- Action Buttons Row -->\r
              <div class="d-flex gap-2 flex-wrap justify-content-center mb-2">\r
                <!-- View Details Button -->\r
                <button\r
                  class="btn btn-sm btn-outline-info"\r
                  (click)="viewLetterDetails(letter)"\r
                  title="{{ translate('letter_details.view_details') }}"\r
                >\r
                  <i class="bi bi-eye me-1"></i>\r
                  {{ translate("letter_details.view_details") }}\r
                </button>\r
\r
                <!-- Submit for Approval Button -->\r
                <button\r
                  class="btn btn-sm btn-warning"\r
                  (click)="submitForApproval(letter)"\r
                  [disabled]="\r
                    !canSubmitForApproval(letter) || isProcessingLetter(letter)\r
                  "\r
                  title="{{ translate('letters.submit_for_approval') }}"\r
                  *ngIf="canSubmitForApproval(letter)"\r
                >\r
                  <span\r
                    *ngIf="isProcessingLetter(letter)"\r
                    class="spinner-border spinner-border-sm me-1"\r
                    role="status"\r
                  >\r
                    <span class="visually-hidden">{{\r
                      translate("common.loading")\r
                    }}</span>\r
                  </span>\r
                  <i class="fas fa-paper-plane me-1"></i>\r
                  {{ translate("letters.submit_for_approval") }}\r
                </button>\r
\r
                <!-- Send Email Button -->\r
                <button\r
                  class="btn btn-sm"\r
                  [class.btn-outline-secondary]="!isEmailSent(letter)"\r
                  [class.btn-success]="isEmailSent(letter)"\r
                  (click)="sendEmail(letter)"\r
                  [disabled]="\r
                    !canSendEmail(letter) ||\r
                    isProcessingLetter(letter) ||\r
                    isEmailSent(letter)\r
                  "\r
                  [title]="getSendEmailButtonText(letter)"\r
                  *ngIf="letter.status === LetterStatus.Approved"\r
                >\r
                  <span\r
                    *ngIf="isProcessingLetter(letter)"\r
                    class="spinner-border spinner-border-sm me-1"\r
                    role="status"\r
                  >\r
                    <span class="visually-hidden">{{\r
                      translate("common.loading")\r
                    }}</span>\r
                  </span>\r
                  <i\r
                    class="fas fa-envelope me-1"\r
                    *ngIf="!isEmailSent(letter)"\r
                  ></i>\r
                  <i class="fas fa-check me-1" *ngIf="isEmailSent(letter)"></i>\r
                  {{ getSendEmailButtonText(letter) }}\r
                </button>\r
\r
                <!-- Download PDF Button - Only show for approved letters -->\r
                <button\r
                  class="btn btn-sm btn-success"\r
                  (click)="downloadPdf(letter)"\r
                  title="{{ translate('letters.download_pdf') }}"\r
                  *ngIf="letter.status === LetterStatus.Approved"\r
                >\r
                  <i class="fas fa-download me-1"></i>\r
                  {{ translate("letters.download_pdf") }}\r
                </button>\r
\r
                <!-- Edit Button -->\r
                <button\r
                  class="btn btn-sm btn-outline-primary"\r
                  (click)="editLetter(letter)"\r
                  title="{{ translate('letters.edit') }}"\r
                >\r
                  <i class="fas fa-edit me-1"></i>\r
                  {{ translate("letters.edit") }}\r
                </button>\r
\r
                <!-- Delete Button -->\r
                <button\r
                  class="btn btn-sm btn-outline-danger"\r
                  (click)="deleteLetter(letter.id, letter.subject)"\r
                  [disabled]="isDeleting && deletingLetterId === letter.id"\r
                  title="{{ translate('letters.delete') }}"\r
                >\r
                  <span\r
                    *ngIf="isDeleting && deletingLetterId === letter.id"\r
                    class="spinner-border spinner-border-sm me-1"\r
                    role="status"\r
                  >\r
                    <span class="visually-hidden">{{\r
                      translate("common.loading")\r
                    }}</span>\r
                  </span>\r
                  <i\r
                    class="fas fa-trash me-1"\r
                    *ngIf="!(isDeleting && deletingLetterId === letter.id)"\r
                  ></i>\r
                  {{ translate("letters.delete") }}\r
                </button>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Pagination Info and Controls -->\r
  <div\r
    class="pagination-section ltr"\r
    *ngIf="!isLoading && filteredLetters.length > 0"\r
  >\r
    <div class="pagination-controls">\r
      <div class="page-size-control">\r
        <label for="pageSize">{{ translate("common.page_size") }}:</label>\r
        <select\r
          id="pageSize"\r
          [(ngModel)]="pageSize"\r
          (change)="onPageSizeChange()"\r
        >\r
          <option value="5">5</option>\r
          <option value="10">10</option>\r
          <option value="20">20</option>\r
          <option value="50">50</option>\r
        </select>\r
      </div>\r
      <div class="pagination-info">\r
        <span\r
          >{{ translate("common.showing") }}\r
          {{ (currentPage - 1) * pageSize + 1 }}-{{\r
            Math.min(currentPage * pageSize, totalCount)\r
          }}\r
          {{ translate("common.of") }} {{ totalCount }}\r
          {{ translate("letters.title") }}</span\r
        >\r
      </div>\r
\r
      <nav aria-label="Letters pagination">\r
        <ul class="pagination">\r
          <li class="page-item" [class.disabled]="currentPage === 1">\r
            <button\r
              class="page-link"\r
              (click)="onPageChange(currentPage - 1)"\r
              [disabled]="currentPage === 1"\r
            >\r
              <svg\r
                width="16"\r
                height="16"\r
                viewBox="0 0 24 24"\r
                fill="none"\r
                stroke="currentColor"\r
                stroke-width="2"\r
              >\r
                <polyline points="15,18 9,12 15,6" />\r
              </svg>\r
            </button>\r
          </li>\r
\r
          <li\r
            *ngFor="let page of pages"\r
            class="page-item"\r
            [class.active]="page === currentPage"\r
          >\r
            <button class="page-link" (click)="onPageChange(page)">\r
              {{ page }}\r
            </button>\r
          </li>\r
\r
          <li class="page-item" [class.disabled]="currentPage === totalPages">\r
            <button\r
              class="page-link"\r
              (click)="onPageChange(currentPage + 1)"\r
              [disabled]="currentPage === totalPages"\r
            >\r
              <svg\r
                width="16"\r
                height="16"\r
                viewBox="0 0 24 24"\r
                fill="none"\r
                stroke="currentColor"\r
                stroke-width="2"\r
              >\r
                <polyline points="9,18 15,12 9,6" />\r
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
<app-edit-letter\r
  #editLetterModal\r
  (letterUpdated)="loadLetters()"\r
></app-edit-letter>\r
<app-add-attachment\r
  #addAttachmentModal\r
  (attachmentAdded)="loadLetters()"\r
></app-add-attachment>\r
<app-edit-attachment\r
  #editAttachmentModal\r
  (attachmentUpdated)="loadLetters()"\r
></app-edit-attachment>\r
<app-letters-confirmation-modal\r
  #confirmationModal\r
></app-letters-confirmation-modal>\r
<app-signature-pad-modal #signaturePadModal></app-signature-pad-modal>\r
<app-letter-details-modal #letterDetailsModal></app-letter-details-modal>\r
`, styles: ["/* src/app/components/letters/letters-list/letters-list.css */\n.letters-container {\n  padding: 2rem;\n  min-height: 100vh;\n}\n.letters-header {\n  background: white;\n  padding: 1.5rem;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.letters-title {\n  color: #5f646d;\n  font-weight: 700;\n  font-size: 2rem;\n  margin: 0;\n}\n.status-tabs-section {\n  background: white;\n  padding: 1rem 1.5rem;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.status-tabs-container {\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.status-tabs {\n  border-bottom: none;\n  display: flex;\n  flex-wrap: nowrap;\n  min-width: max-content;\n  gap: 0.5rem;\n}\n.status-tab {\n  display: flex;\n  align-items: center;\n  padding: 0.75rem 1rem;\n  border: 1px solid #e9ecef;\n  border-radius: 8px;\n  background: #f8f9fa;\n  color: #6c757d;\n  font-weight: 500;\n  font-size: 0.875rem;\n  white-space: nowrap;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  position: relative;\n  min-width: fit-content;\n}\n.status-tab:hover {\n  background: #e9ecef;\n  border-color: #dee2e6;\n  color: #495057;\n  transform: translateY(-1px);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.status-tab.active {\n  background: #B68A35;\n  border-color: #B68A35;\n  color: white;\n  box-shadow: 0 2px 8px rgba(191, 171, 134, 0.3);\n}\n.status-tab.active:hover {\n  background: #b68a35;\n  border-color: #b68a35;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(191, 171, 134, 0.4);\n}\n.status-tab .badge {\n  font-size: 0.7rem;\n  padding: 0.25rem 0.5rem;\n  border-radius: 12px;\n  font-weight: 600;\n}\n.status-tab.active .badge {\n  background: rgba(255, 255, 255, 0.2) !important;\n  color: white !important;\n}\n.search-section {\n  background: white;\n  padding: 1.5rem;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.search-input-wrapper {\n  position: relative;\n}\n.search-icon {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6c757d;\n  z-index: 10;\n}\n.search-input {\n  padding-left: 40px;\n  border-radius: 8px;\n  border: 2px solid #e9ecef;\n  transition: all 0.3s ease;\n}\n.search-input:focus {\n  border-color: #B68A35;\n  box-shadow: 0 0 0 0.2rem rgba(212, 170, 58, 0.25);\n}\n.card {\n  transition: all 0.3s ease;\n  border: 1px solid #f4f4f4;\n}\n.card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1) !important;\n  border: 1px solid #cba344;\n}\n.card-header {\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n  padding: 0.75rem 1rem;\n}\n.card-title {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #2c3e50;\n  margin-bottom: 0.5rem;\n}\n.card-text {\n  line-height: 1.5;\n  color: #6c757d;\n}\n.badge {\n  font-size: 0.75rem;\n  padding: 0.375rem 0.5rem;\n}\n.bg-primary {\n  background-color: #B68A35 !important;\n}\n.bg-success {\n  background-color: #d4af5f !important;\n}\n.btn-warning {\n  border: 1px solid #d67909;\n  color: #b6550b;\n  background-color: #fff3cd;\n}\n.btn-warning:hover {\n  background-color: #78260D;\n  color: #fff3cd;\n}\n.bg-warning {\n  background-color: #A2563F !important;\n  color: #ffffff !important;\n}\n.bg-danger {\n  background-color: #b45253 !important;\n}\n.bg-info {\n  background-color: #34495e !important;\n}\n.bg-dark {\n  background-color: #343a40 !important;\n}\n.bg-secondary {\n  background-color: #555555 !important;\n}\n.btn-success {\n  background: transparent;\n  color: #2ba149;\n}\n.btn-success:hover {\n  background: #2ba149;\n  color: white;\n}\n.attachments-section {\n  border-top: 1px solid #e9ecef;\n  padding-top: 0.75rem;\n  margin-top: 0.75rem;\n}\n.attachments-header {\n  border-bottom: 1px solid #f8f9fa;\n  padding-bottom: 0.5rem;\n}\n.attachment-item {\n  margin-bottom: 0.5rem;\n}\n.attachment-content {\n  border: 1px solid #f8f9fa;\n  border-radius: 0.375rem;\n  transition: all 0.2s ease;\n}\n.attachment-content:hover {\n  background-color: #f8f9fa;\n  border-color: #dee2e6;\n  transform: translateY(-1px);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.attachment-info {\n  min-width: 0;\n}\n.attachment-name {\n  color: #495057;\n  margin-bottom: 0.25rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 200px;\n}\n.attachment-meta {\n  font-size: 0.75rem;\n  line-height: 1.2;\n}\n.form-control,\n.form-select {\n  border: 1px solid #ced4da;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n.form-control:focus,\n.form-select:focus {\n  border-color: #B68A35;\n  box-shadow: 0 0 0 0.2rem rgba(212, 170, 58, 0.25);\n}\n.pagination .page-link {\n  color: #B68A35;\n  border: 1px solid #dee2e6;\n  padding: 0.5rem 0.75rem;\n}\n.pagination .page-item.active .page-link {\n  background-color: #B68A35;\n  border-color: #B68A35;\n}\n.pagination .page-link:hover {\n  color: #b68a35;\n  background-color: #e9ecef;\n  border-color: #dee2e6;\n}\n.spinner-border {\n  width: 3rem;\n  height: 3rem;\n}\n.dropdown-menu {\n  border: 1px solid #e9ecef;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n}\n.dropdown-item {\n  padding: 0.5rem 1rem;\n  transition: background-color 0.15s ease-in-out;\n}\n.dropdown-item:hover {\n  background-color: #f8f9fa;\n}\n.dropdown-item.text-danger:hover {\n  background-color: #f8d7da;\n  color: #721c24 !important;\n}\n[dir=rtl] .card-header {\n  text-align: right;\n}\n[dir=rtl] .dropdown-menu {\n  right: 0;\n  left: auto;\n}\n[dir=rtl] .me-2 {\n  margin-right: 0 !important;\n  margin-left: 0.5rem !important;\n}\n[dir=rtl] .ms-2 {\n  margin-left: 0 !important;\n  margin-right: 0.5rem !important;\n}\n.card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;\n}\n.text-center.py-5 {\n  padding: 3rem 0;\n}\n.fa-envelope {\n  opacity: 0.5;\n}\n.form-label {\n  font-weight: 500;\n  color: #495057;\n  margin-bottom: 0.5rem;\n}\n.btn {\n  border-radius: 0.375rem;\n  font-weight: 500;\n  transition: all 0.15s ease-in-out;\n}\n.attachment-details {\n  padding: 1rem 0;\n}\n.attachment-details .row {\n  margin: 0;\n}\n.attachment-details .col-md-6 {\n  padding: 0.5rem 1rem;\n}\n.attachment-details p {\n  margin-bottom: 0.75rem;\n  line-height: 1.6;\n}\n.attachment-details strong {\n  color: #495057;\n  font-weight: 600;\n}\n.attachment-details p:last-child {\n  margin-bottom: 0;\n}\n.btn-primary {\n  background-color: #B68A35;\n  border-color: #B68A35;\n}\n.btn-primary:hover {\n  background-color: #b68a35;\n  border-color: #b68a35;\n}\n.btn-outline-secondary {\n  color: #6c757d;\n  border-color: #6c757d;\n}\n.btn-outline-secondary:hover {\n  background-color: #6c757d;\n  border-color: #6c757d;\n  color: #fff;\n}\n.btn-outline-primary {\n  color: #B68A35;\n  border-color: #B68A35;\n}\n.edit-letter {\n  color: #29abe2 !important;\n  border-color: #29abe2 !important;\n}\n.edit-letter:hover {\n  background-color: #bbdefb !important;\n  border-color: #29abe2 !important;\n  color: #29abe2 !important;\n}\n.btn-outline-primary:hover {\n  background-color: #B68A35;\n  border-color: #B68A35;\n  color: #fff;\n}\n.btn-outline-info {\n  color: #17a2b8;\n  border-color: #17a2b8;\n}\n.btn-outline-info:hover {\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n  color: #fff;\n}\n.pagination-section {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-top: 2rem;\n  padding: 1.5rem;\n  background-color: #f9fafb;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n}\n.pagination-info {\n  text-align: center;\n  color: #6b7280;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.pagination-controls {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n}\n.page-size-control {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.page-size-control label {\n  color: #374151;\n  font-weight: 500;\n  font-size: 0.875rem;\n}\n.page-size-control select {\n  padding: 0.5rem;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  background: white;\n  color: #374151;\n  font-size: 0.875rem;\n  cursor: pointer;\n}\n.pagination {\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  gap: 0.25rem;\n}\n.page-item {\n  margin: 0;\n}\n.page-link {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 40px;\n  height: 40px;\n  padding: 0.5rem;\n  border: 1px solid #dee2e6;\n  background: white;\n  color: #043dff;\n  text-decoration: none;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.page-link:hover {\n  background: #e9ecef;\n  border-color: #adb5bd;\n  color: #0056b3;\n}\n.page-item.active .page-link {\n  background: #B68A35;\n  border-color: #B68A35;\n  color: white;\n}\n.page-item.disabled .page-link {\n  background: #f8f9fa;\n  border-color: #dee2e6;\n  color: #6c757d;\n  cursor: not-allowed;\n}\n[dir=rtl] .search-icon {\n  left: auto;\n  right: 12px;\n}\n[dir=rtl] .search-input {\n  padding-left: 12px;\n  padding-right: 40px;\n}\n[dir=rtl] .letters-container {\n  text-align: right;\n}\n@media (max-width: 768px) {\n  .letters-container {\n    padding: 1rem;\n  }\n  .letters-header {\n    padding: 1rem;\n  }\n  .letters-title {\n    font-size: 1.5rem;\n  }\n  .status-tabs-section {\n    padding: 0.75rem 1rem;\n  }\n  .status-tab {\n    padding: 0.5rem 0.75rem;\n    font-size: 0.8rem;\n  }\n  .status-tab .badge {\n    font-size: 0.65rem;\n    padding: 0.2rem 0.4rem;\n  }\n  .search-section {\n    padding: 1rem;\n  }\n  .pagination-controls {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n    justify-content: center;\n  }\n  .pagination {\n    justify-content: center;\n  }\n  .page-size-control {\n    justify-content: center;\n  }\n  .card-title {\n    font-size: 1rem;\n  }\n  .badge {\n    font-size: 0.7rem;\n    padding: 0.25rem 0.375rem;\n  }\n  .d-flex.gap-2 {\n    flex-wrap: wrap;\n    gap: 0.25rem !important;\n  }\n  .search-section .row {\n    display: flex !important;\n    flex-direction: row !important;\n    align-items: center !important;\n    justify-content: center !important;\n    gap: 1rem !important;\n  }\n}\n/*# sourceMappingURL=letters-list-6LGLJYLR.css.map */\n"] }]
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
  }], signaturePadModal: [{
    type: ViewChild,
    args: ["signaturePadModal"]
  }], letterDetailsModal: [{
    type: ViewChild,
    args: ["letterDetailsModal"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LettersList, { className: "LettersList", filePath: "src/app/components/letters/letters-list/letters-list.ts", lineNumber: 28 });
})();

// src/app/components/letters/rejection-modal/rejection-modal.component.ts
var _c07 = ["rejectionTextarea"];
function RejectionModalComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 17);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("show", ctx_r1.isOpen);
  }
}
var RejectionModalComponent = class _RejectionModalComponent {
  translationService;
  isOpen = false;
  rejectionConfirmed = new EventEmitter();
  modalClosed = new EventEmitter();
  rejectionTextarea;
  rejectionReason = "";
  constructor(translationService) {
    this.translationService = translationService;
  }
  isRTL() {
    return this.translationService.isRTL();
  }
  open() {
    this.isOpen = true;
    this.rejectionReason = "";
    document.body.classList.add("modal-open");
    setTimeout(() => {
      if (this.rejectionTextarea) {
        this.rejectionTextarea.nativeElement.focus();
      }
    }, 100);
  }
  close() {
    this.isOpen = false;
    this.rejectionReason = "";
    document.body.classList.remove("modal-open");
    this.modalClosed.emit();
  }
  confirmReject() {
    if (this.rejectionReason && this.rejectionReason.trim()) {
      this.rejectionConfirmed.emit(this.rejectionReason.trim());
      this.close();
    }
  }
  onBackdropClick(event) {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }
  translate(key) {
    return this.translationService.translate(key);
  }
  static \u0275fac = function RejectionModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RejectionModalComponent)(\u0275\u0275directiveInject(TranslationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RejectionModalComponent, selectors: [["app-rejection-modal"]], viewQuery: function RejectionModalComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c07, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.rejectionTextarea = _t.first);
    }
  }, inputs: { isOpen: "isOpen" }, outputs: { rejectionConfirmed: "rejectionConfirmed", modalClosed: "modalClosed" }, standalone: false, decls: 23, vars: 30, consts: [["rejectionTextarea", ""], ["tabindex", "-1", "role", "dialog", 1, "modal", "fade", 3, "click"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header", 2, "background", "#D4AF5F !important", 3, "dir"], [1, "modal-title", "text-white"], [1, "fas", "fa-exclamation-triangle"], ["type", "button", "aria-label", "Close", 1, "btn-close", "btn-close-white", 3, "click"], [1, "modal-body"], [1, "mb-3"], ["for", "rejectionReason", 1, "form-label"], ["id", "rejectionReason", "rows", "4", 1, "form-control", 3, "ngModelChange", "placeholder", "ngModel"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "fas", "fa-times", "me-1"], ["type", "button", 1, "btn", "btn-danger", 3, "click", "disabled"], ["class", "modal-backdrop fade", 3, "show", 4, "ngIf"], [1, "modal-backdrop", "fade"]], template: function RejectionModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275listener("click", function RejectionModalComponent_Template_div_click_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onBackdropClick($event));
      });
      \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "h5", 5);
      \u0275\u0275element(5, "i", 6);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "button", 7);
      \u0275\u0275listener("click", function RejectionModalComponent_Template_button_click_7_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.close());
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 8)(9, "div", 9)(10, "label", 10);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "textarea", 11, 0);
      \u0275\u0275twoWayListener("ngModelChange", function RejectionModalComponent_Template_textarea_ngModelChange_12_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.rejectionReason, $event) || (ctx.rejectionReason = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275text(14, "              ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "div", 12)(16, "button", 13);
      \u0275\u0275listener("click", function RejectionModalComponent_Template_button_click_16_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.close());
      });
      \u0275\u0275element(17, "i", 14);
      \u0275\u0275text(18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "button", 15);
      \u0275\u0275listener("click", function RejectionModalComponent_Template_button_click_19_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.confirmReject());
      });
      \u0275\u0275element(20, "i", 14);
      \u0275\u0275text(21);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(22, RejectionModalComponent_div_22_Template, 1, 2, "div", 16);
    }
    if (rf & 2) {
      \u0275\u0275styleProp("display", ctx.isOpen ? "block" : "none");
      \u0275\u0275classProp("show", ctx.isOpen);
      \u0275\u0275attribute("aria-hidden", !ctx.isOpen);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("rtl-header", ctx.isRTL())("ltr-header", !ctx.isRTL());
      \u0275\u0275property("dir", ctx.isRTL() ? "rtl" : "ltr");
      \u0275\u0275advance();
      \u0275\u0275classProp("text-end", ctx.isRTL())("text-start", !ctx.isRTL())("rtl-title", ctx.isRTL())("ltr-title", !ctx.isRTL());
      \u0275\u0275advance();
      \u0275\u0275classProp("me-2", !ctx.isRTL())("ms-2", ctx.isRTL());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.translate("letters.reject_letter"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.translate("letters.rejection_notes"), ": ");
      \u0275\u0275advance();
      \u0275\u0275property("placeholder", ctx.translate("letters.rejection_notes"));
      \u0275\u0275twoWayProperty("ngModel", ctx.rejectionReason);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.cancel"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !ctx.rejectionReason || !ctx.rejectionReason.trim());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("letters.reject"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isOpen);
    }
  }, dependencies: [NgIf, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.modal.show[_ngcontent-%COMP%] {\n  display: block !important;\n}\n.modal-backdrop.show[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.modal-header[dir=rtl][_ngcontent-%COMP%], \n.rtl-header[_ngcontent-%COMP%] {\n  flex-direction: row-reverse !important;\n  justify-content: flex-end !important;\n  display: flex !important;\n  align-items: center !important;\n}\n.modal-header[dir=rtl][_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%], \n.rtl-title[_ngcontent-%COMP%] {\n  text-align: right !important;\n  margin-left: auto !important;\n  margin-right: 0 !important;\n  flex: 1 !important;\n}\n.modal-header[dir=ltr][_ngcontent-%COMP%], \n.ltr-header[_ngcontent-%COMP%] {\n  flex-direction: row !important;\n  justify-content: flex-start !important;\n  display: flex !important;\n  align-items: center !important;\n}\n.modal-header[dir=ltr][_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%], \n.ltr-title[_ngcontent-%COMP%] {\n  text-align: left !important;\n  margin-left: 0 !important;\n  margin-right: auto !important;\n  flex: 1 !important;\n}\n/*# sourceMappingURL=rejection-modal.component-4SL7HQGW.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RejectionModalComponent, [{
    type: Component,
    args: [{ selector: "app-rejection-modal", standalone: false, template: `
    <div class="modal fade" [class.show]="isOpen" [style.display]="isOpen ? 'block' : 'none'" 
         tabindex="-1" role="dialog" [attr.aria-hidden]="!isOpen" (click)="onBackdropClick($event)">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header" style="background: #D4AF5F !important" [dir]="isRTL() ? 'rtl' : 'ltr'"
               [class.rtl-header]="isRTL()"
               [class.ltr-header]="!isRTL()">
            <h5 class="modal-title text-white" [class.text-end]="isRTL()" [class.text-start]="!isRTL()" [class.rtl-title]="isRTL()" [class.ltr-title]="!isRTL()">
              <i class="fas fa-exclamation-triangle" [class.me-2]="!isRTL()" [class.ms-2]="isRTL()"></i>
              {{ translate('letters.reject_letter') }}
            </h5>
            <button type="button" class="btn-close btn-close-white" (click)="close()" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label for="rejectionReason" class="form-label">
                {{ translate('letters.rejection_notes') }}:
              </label>
              <textarea 
                #rejectionTextarea
                class="form-control" 
                id="rejectionReason" 
                rows="4" 
                [placeholder]="translate('letters.rejection_notes')"
                [(ngModel)]="rejectionReason">
              </textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" (click)="close()">
              <i class="fas fa-times me-1"></i>
              {{ translate('common.cancel') }}
            </button>
            <button type="button" class="btn btn-danger" (click)="confirmReject()" [disabled]="!rejectionReason || !rejectionReason.trim()">
              <i class="fas fa-times me-1"></i>
              {{ translate('letters.reject') }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-backdrop fade" [class.show]="isOpen" *ngIf="isOpen"></div>
  `, styles: ["/* angular:styles/component:css;0c1ea7eda529ab4d3b1d95243bc8d54a62a719d25b456c0eb990025ed42dca6f;D:/web/EXSUS/\u062B\u0624\u062E\u0629/v2/echo-office-new/src/app/components/letters/rejection-modal/rejection-modal.component.ts */\n.modal.show {\n  display: block !important;\n}\n.modal-backdrop.show {\n  opacity: 0.5;\n}\n.modal-header[dir=rtl],\n.rtl-header {\n  flex-direction: row-reverse !important;\n  justify-content: flex-end !important;\n  display: flex !important;\n  align-items: center !important;\n}\n.modal-header[dir=rtl] .modal-title,\n.rtl-title {\n  text-align: right !important;\n  margin-left: auto !important;\n  margin-right: 0 !important;\n  flex: 1 !important;\n}\n.modal-header[dir=ltr],\n.ltr-header {\n  flex-direction: row !important;\n  justify-content: flex-start !important;\n  display: flex !important;\n  align-items: center !important;\n}\n.modal-header[dir=ltr] .modal-title,\n.ltr-title {\n  text-align: left !important;\n  margin-left: 0 !important;\n  margin-right: auto !important;\n  flex: 1 !important;\n}\n/*# sourceMappingURL=rejection-modal.component-4SL7HQGW.css.map */\n"] }]
  }], () => [{ type: TranslationService }], { isOpen: [{
    type: Input
  }], rejectionConfirmed: [{
    type: Output
  }], modalClosed: [{
    type: Output
  }], rejectionTextarea: [{
    type: ViewChild,
    args: ["rejectionTextarea"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RejectionModalComponent, { className: "RejectionModalComponent", filePath: "src/app/components/letters/rejection-modal/rejection-modal.component.ts", lineNumber: 93 });
})();

// src/app/components/letters/letters-approval/letters-approval.component.ts
var _c08 = ["confirmationModal"];
var _c13 = ["signaturePadModal"];
var _c22 = ["rejectionModal"];
var _c32 = ["letterDetailsModal"];
function LettersApprovalComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "span", 18);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "p", 19);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.translate("common.loading"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("common.loading"));
  }
}
function LettersApprovalComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 20);
    \u0275\u0275element(2, "i", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4", 22);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 23);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("letters.no_pending_letters"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("letters.approval_workflow_description"), " ");
  }
}
function LettersApprovalComponent_div_14_div_3_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "small", 36);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "small", 37);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const letter_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("letters.cc"), ":");
    \u0275\u0275advance();
    \u0275\u0275property("title", letter_r4.cc);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(letter_r4.cc);
  }
}
function LettersApprovalComponent_div_14_div_3_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "small", 36);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "small", 37);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const letter_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("letters.reference_numbers"), ":");
    \u0275\u0275advance();
    \u0275\u0275property("title", letter_r4.referenceNumbers);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", letter_r4.referenceNumbers, " ");
  }
}
function LettersApprovalComponent_div_14_div_3_div_23_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53);
    \u0275\u0275element(1, "i", 54);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const attachment_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", attachment_r5.fileName, " ");
  }
}
function LettersApprovalComponent_div_14_div_3_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "small", 36);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 51);
    \u0275\u0275template(4, LettersApprovalComponent_div_14_div_3_div_23_span_4_Template, 3, 1, "span", 52);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const letter_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("letters.attachments"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", letter_r4.attachments);
  }
}
function LettersApprovalComponent_div_14_div_3_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "div", 28)(2, "div", 56)(3, "span", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "small", 23);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.translate("common.loading"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("common.processing"));
  }
}
function LettersApprovalComponent_div_14_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26)(2, "div", 27)(3, "div", 28)(4, "span", 29);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "small", 23);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 30)(9, "h6", 31);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 32);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 33)(15, "div", 34)(16, "div", 35)(17, "small", 36);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "small", 37);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(21, LettersApprovalComponent_div_14_div_3_div_21_Template, 5, 3, "div", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, LettersApprovalComponent_div_14_div_3_div_22_Template, 5, 3, "div", 39)(23, LettersApprovalComponent_div_14_div_3_div_23_Template, 5, 2, "div", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 40)(25, "div", 41)(26, "button", 42);
    \u0275\u0275listener("click", function LettersApprovalComponent_div_14_div_3_Template_button_click_26_listener() {
      const letter_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewLetterDetails(letter_r4));
    });
    \u0275\u0275element(27, "i", 43);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 44);
    \u0275\u0275listener("click", function LettersApprovalComponent_div_14_div_3_Template_button_click_29_listener() {
      const letter_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.downloadPdf(letter_r4));
    });
    \u0275\u0275element(30, "i", 45);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 46);
    \u0275\u0275listener("click", function LettersApprovalComponent_div_14_div_3_Template_button_click_32_listener() {
      const letter_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.approveLetter(letter_r4));
    });
    \u0275\u0275element(33, "i", 47);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "button", 48);
    \u0275\u0275listener("click", function LettersApprovalComponent_div_14_div_3_Template_button_click_35_listener() {
      const letter_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.rejectLetter(letter_r4));
    });
    \u0275\u0275element(36, "i", 49);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(38, LettersApprovalComponent_div_14_div_3_div_38_Template, 7, 2, "div", 50);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const letter_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ctx_r1.getDirectionBadgeClass(letter_r4.direction));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getDirectionLabel(letter_r4.direction), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(letter_r4.letterDate));
    \u0275\u0275advance(2);
    \u0275\u0275property("title", letter_r4.subject);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", letter_r4.subject, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind3(13, 24, letter_r4.body, 0, 100), "", letter_r4.body.length > 100 ? "..." : "", " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("letters.to"), ":");
    \u0275\u0275advance();
    \u0275\u0275property("title", letter_r4.to);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(letter_r4.to);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", letter_r4.cc);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", letter_r4.referenceNumbers);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", letter_r4.attachments && letter_r4.attachments.length > 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275interpolate(ctx_r1.translate("letter_details.view_details")));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("letter_details.view_details"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275interpolate(ctx_r1.translate("letters.download_pdf")));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("letters.download_pdf"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isProcessing && ctx_r1.processingLetterId === letter_r4.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("letters.approve"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isProcessing && ctx_r1.processingLetterId === letter_r4.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("letters.reject"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isProcessing && ctx_r1.processingLetterId === letter_r4.id);
  }
}
function LettersApprovalComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "div", 5);
    \u0275\u0275template(3, LettersApprovalComponent_div_14_div_3_Template, 39, 28, "div", 24);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.pendingLetters)("ngForTrackBy", ctx_r1.trackByLetterId);
  }
}
var LettersApprovalComponent = class _LettersApprovalComponent {
  lettersService;
  translationService;
  cdr;
  confirmationModal;
  signaturePadModal;
  rejectionModal;
  letterDetailsModal;
  pendingLetters = [];
  isLoading = false;
  isProcessing = false;
  processingLetterId = null;
  destroy$ = new Subject();
  constructor(lettersService, translationService, cdr) {
    this.lettersService = lettersService;
    this.translationService = translationService;
    this.cdr = cdr;
  }
  ngOnInit() {
    this.loadPendingLetters();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadPendingLetters() {
    this.isLoading = true;
    this.lettersService.getLettersForApproval().pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        console.log("Pending letters loaded:", res.data.items);
        this.pendingLetters = res.data.items;
        this.isLoading = false;
      },
      error: (error) => {
        console.error("Error loading pending letters:", error);
        this.isLoading = false;
      }
    });
  }
  approveLetter(letter) {
    return __async(this, null, function* () {
      if (this.isProcessing || this.processingLetterId === letter.id) {
        return;
      }
      this.processingLetterId = letter.id;
      this.signaturePadModal.open();
    });
  }
  onSignatureSaved(data) {
    if (!this.processingLetterId)
      return;
    this.isProcessing = true;
    this.lettersService.approveLetter(this.processingLetterId, data.signature, data.approvalNotes).pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        console.log("Letter approved successfully");
        const letterIdToRemove = this.processingLetterId;
        console.log("Letter ID to remove:", letterIdToRemove);
        this.signaturePadModal.close();
        console.log("Signature pad modal closed");
        if (letterIdToRemove) {
          this.removeLetterFromList(letterIdToRemove);
          console.log("Letter removed from list");
        } else {
          console.error("No letter ID to remove!");
        }
        this.isProcessing = false;
        this.processingLetterId = null;
        console.log("Processing state reset");
        this.cdr.detectChanges();
        console.log("Final change detection triggered");
        setTimeout(() => {
          this.showSuccessMessage(this.translate("letters.approve_success"));
          console.log("Success message shown");
        }, 100);
      },
      error: (error) => {
        console.error("Error approving letter:", error);
        const errorMessage = error.error?.message || error.message || "Unknown error occurred";
        this.showErrorMessage(this.translate("common.error") + ": " + errorMessage);
        this.isProcessing = false;
        this.processingLetterId = null;
      }
    });
  }
  rejectLetter(letter) {
    return __async(this, null, function* () {
      if (this.isProcessing || this.processingLetterId === letter.id) {
        return;
      }
      this.processingLetterId = letter.id;
      this.rejectionModal.open();
    });
  }
  onRejectionConfirmed(rejectionReason) {
    if (!this.processingLetterId)
      return;
    this.isProcessing = true;
    this.lettersService.rejectLetter(this.processingLetterId, rejectionReason).pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        console.log("Letter rejected successfully");
        this.removeLetterFromList(this.processingLetterId);
        this.isProcessing = false;
        this.processingLetterId = null;
        this.showSuccessMessage(this.translate("letters.reject_success"));
      },
      error: (error) => {
        console.error("Error rejecting letter:", error);
        const errorMessage = error.error?.message || error.message || "Unknown error occurred";
        this.showErrorMessage(this.translate("common.error") + ": " + errorMessage);
        this.isProcessing = false;
        this.processingLetterId = null;
      }
    });
  }
  sendEmail(letter) {
    return __async(this, null, function* () {
      if (this.isProcessing || this.processingLetterId === letter.id) {
        return;
      }
      const confirmData = {
        title: this.translate("letters.send_email"),
        message: this.translate("letters.confirm_send_email"),
        confirmText: this.translate("letters.send_email"),
        cancelText: this.translate("common.cancel"),
        type: "info"
      };
      try {
        const confirmed = yield this.confirmationModal.show(confirmData);
        if (!confirmed) {
          return;
        }
        this.isProcessing = true;
        this.processingLetterId = letter.id;
        this.lettersService.sendEmail(letter.id).pipe(takeUntil(this.destroy$)).subscribe({
          next: (res) => {
            console.log("Email sent successfully");
            this.showSuccessMessage(this.translate("letters.send_email_success"));
            this.isProcessing = false;
            this.processingLetterId = null;
          },
          error: (error) => {
            console.error("Error sending email:", error);
            const errorMessage = error.error?.message || error.message || "Unknown error occurred";
            this.showErrorMessage(this.translate("common.error") + ": " + errorMessage);
            this.isProcessing = false;
            this.processingLetterId = null;
          }
        });
      } catch (error) {
        console.error("Error in send email confirmation:", error);
        this.isProcessing = false;
        this.processingLetterId = null;
      }
    });
  }
  downloadPdf(letter) {
    this.lettersService.downloadLetterPdf(letter.id).pipe(takeUntil(this.destroy$)).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `Letter_${letter.id}.pdf`;
        link.click();
        window.URL.revokeObjectURL(url);
        this.showSuccessMessage(this.translate("letters.download_pdf_success"));
      },
      error: (error) => {
        console.error("Error downloading PDF:", error);
        if (error.status === 404) {
          this.showErrorMessage(this.translate("letters.no_pdf_available"));
        } else {
          const errorMessage = error.error?.message || error.message || "Unknown error occurred";
          this.showErrorMessage(this.translate("common.error") + ": " + errorMessage);
        }
      }
    });
  }
  removeLetterFromList(letterId) {
    console.log("Removing letter with ID:", letterId);
    console.log("Letters before removal:", this.pendingLetters.map((l) => l.id));
    this.pendingLetters = [
      ...this.pendingLetters.filter((letter) => letter.id !== letterId)
    ];
    console.log("Letters after removal:", this.pendingLetters.map((l) => l.id));
    console.log("Total letters remaining:", this.pendingLetters.length);
    this.cdr.detectChanges();
    console.log("Change detection triggered");
  }
  showSuccessMessage(message) {
    console.log("Success:", message);
    const successDiv = document.createElement("div");
    successDiv.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #28a745;
      color: white;
      padding: 12px 20px;
      border-radius: 6px;
      z-index: 9999;
      font-weight: 500;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    `;
    successDiv.textContent = message;
    document.body.appendChild(successDiv);
    setTimeout(() => {
      if (successDiv.parentNode) {
        successDiv.parentNode.removeChild(successDiv);
      }
    }, 1e3);
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
  translate(key) {
    return this.translationService.translate(key);
  }
  isRTL() {
    return this.translationService.isRTL();
  }
  formatDate(dateString) {
    if (!dateString)
      return "";
    const date = new Date(dateString);
    return date.toLocaleDateString();
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
  getDirectionBadgeClass(direction) {
    return direction === 0 ? "bg-primary" : "bg-success";
  }
  getConfidentialityBadgeClass(confidentiality) {
    switch (confidentiality) {
      case 0:
        return "bg-success";
      case 1:
        return "bg-warning";
      case 2:
        return "bg-danger";
      default:
        return "bg-secondary";
    }
  }
  getStatusBadgeClass(status) {
    switch (status) {
      case 0:
        return "bg-secondary";
      case 1:
        return "bg-info";
      case 2:
        return "bg-success";
      case 3:
        return "bg-dark";
      case 4:
        return "bg-danger";
      default:
        return "bg-secondary";
    }
  }
  trackByLetterId(index, letter) {
    return letter.id;
  }
  viewLetterDetails(letter) {
    this.letterDetailsModal.open(letter.id);
  }
  static \u0275fac = function LettersApprovalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LettersApprovalComponent)(\u0275\u0275directiveInject(LettersService), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LettersApprovalComponent, selectors: [["app-letters-approval"]], viewQuery: function LettersApprovalComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c08, 5);
      \u0275\u0275viewQuery(_c13, 5);
      \u0275\u0275viewQuery(_c22, 5);
      \u0275\u0275viewQuery(_c32, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.confirmationModal = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.signaturePadModal = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.rejectionModal = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.letterDetailsModal = _t.first);
    }
  }, standalone: false, decls: 23, vars: 9, consts: [["confirmationModal", ""], ["signaturePadModal", ""], ["rejectionModal", ""], ["letterDetailsModal", ""], [1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "mb-1", "title"], [1, "text-muted", "mb-0"], [1, "btn", "btn-outline-primary", 3, "click", "disabled"], [1, "fas", "fa-sync-alt", "me-1"], ["class", "text-center py-5", 4, "ngIf"], ["class", "row", 4, "ngIf"], [3, "signatureSaved"], [3, "rejectionConfirmed"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "mt-3", "text-muted"], [1, "mb-4"], [1, "fas", "fa-clipboard-check", "fa-4x", "text-muted"], [1, "text-muted", "mb-3"], [1, "text-muted"], ["class", "col-lg-6 col-xl-4 mb-4", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "col-lg-6", "col-xl-4", "mb-4"], [1, "card", "h-100", "shadow-sm"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "d-flex", "align-items-center"], [1, "badge", "me-2", 3, "ngClass"], [1, "card-body"], [1, "card-title", "text-truncate", 3, "title"], [1, "card-text", "text-muted", "small", "mb-3"], [1, "mb-3"], [1, "row", "g-2"], [1, "col-6"], [1, "text-muted", "d-block"], [1, "text-truncate", "d-block", 3, "title"], ["class", "col-6", 4, "ngIf"], ["class", "mb-3", 4, "ngIf"], [1, "card-footer", "bg-transparent"], [1, "d-flex", "gap-2", "flex-wrap"], [1, "btn", "btn-info", "btn-sm", 3, "click", "title"], [1, "fas", "fa-eye", "me-1"], [1, "btn", "btn-primary", "btn-sm", 3, "click", "title"], [1, "fas", "fa-download", "me-1"], [1, "btn", "btn-success", "btn-sm", 3, "click", "disabled"], [1, "fas", "fa-check", "me-1"], [1, "btn", "btn-danger", "btn-sm", 3, "click", "disabled"], [1, "fas", "fa-times", "me-1"], ["class", "mt-2", 4, "ngIf"], [1, "d-flex", "flex-wrap", "gap-1"], ["class", "badge bg-light text-dark border", 4, "ngFor", "ngForOf"], [1, "badge", "bg-light", "text-dark", "border"], [1, "fas", "fa-paperclip", "me-1"], [1, "mt-2"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "text-primary", "me-2"]], template: function LettersApprovalComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "div")(5, "h2", 8);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 9);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "button", 10);
      \u0275\u0275listener("click", function LettersApprovalComponent_Template_button_click_9_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.loadPendingLetters());
      });
      \u0275\u0275element(10, "i", 11);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(12, LettersApprovalComponent_div_12_Template, 6, 2, "div", 12)(13, LettersApprovalComponent_div_13_Template, 7, 2, "div", 12)(14, LettersApprovalComponent_div_14_Template, 4, 2, "div", 13);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(15, "app-letters-confirmation-modal", null, 0);
      \u0275\u0275elementStart(17, "app-signature-pad-modal", 14, 1);
      \u0275\u0275listener("signatureSaved", function LettersApprovalComponent_Template_app_signature_pad_modal_signatureSaved_17_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSignatureSaved($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "app-rejection-modal", 15, 2);
      \u0275\u0275listener("rejectionConfirmed", function LettersApprovalComponent_Template_app_rejection_modal_rejectionConfirmed_19_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onRejectionConfirmed($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(21, "app-letter-details-modal", null, 3);
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.translate("letters.letters_pending_approval"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("letters.approval_workflow_description"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275classProp("fa-spin", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.refresh"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.pendingLetters.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.pendingLetters.length > 0);
    }
  }, dependencies: [NgClass, NgForOf, NgIf, LettersConfirmationModalComponent, SignaturePadModalComponent, LetterDetailsModalComponent, RejectionModalComponent, SlicePipe], styles: ['\n\n.card[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n  border: 1px solid #e9ecef;\n}\n.card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1) !important;\n  border: 1px solid #e4b758;\n}\n.card-header[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n  padding: 0.75rem 1rem;\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.card-footer[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border-top: 1px solid #e9ecef;\n}\n.badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.btn[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  transition: all 0.2s ease;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  transform: none;\n  opacity: 0.6;\n}\n.btn-success[_ngcontent-%COMP%] {\n  background-color: #198754;\n  border-color: #198754;\n}\n.btn-success[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #157347;\n  border-color: #146c43;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n.btn-danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #c82333;\n  border-color: #bd2130;\n}\n.btn-info[_ngcontent-%COMP%] {\n  background-color: #0dcaf0;\n  border-color: #0dcaf0;\n  color: #000;\n}\n.btn-info[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #3dd5f3;\n  border-color: #25cff2;\n}\n.btn-outline-primary[_ngcontent-%COMP%] {\n  color: #0d6efd;\n  border-color: #0d6efd;\n}\n.btn-outline-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #0d6efd;\n  border-color: #0d6efd;\n  color: #fff;\n}\n.spinner-border-sm[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.title[_ngcontent-%COMP%] {\n  color: #5F646D;\n}\n.text-truncate[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n[dir=rtl][_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  text-align: right;\n}\n[dir=rtl][_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%] {\n  text-align: right;\n}\n[dir=rtl][_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n[dir=rtl][_ngcontent-%COMP%]   .me-1[_ngcontent-%COMP%] {\n  margin-left: 0.25rem !important;\n  margin-right: 0 !important;\n}\n[dir=rtl][_ngcontent-%COMP%]   .me-2[_ngcontent-%COMP%] {\n  margin-left: 0.5rem !important;\n  margin-right: 0 !important;\n}\n[dir=rtl][_ngcontent-%COMP%]   .ms-1[_ngcontent-%COMP%] {\n  margin-right: 0.25rem !important;\n  margin-left: 0 !important;\n}\n[dir=rtl][_ngcontent-%COMP%]   .ms-2[_ngcontent-%COMP%] {\n  margin-right: 0.5rem !important;\n  margin-left: 0 !important;\n}\n@media (max-width: 768px) {\n  .card-footer[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n  .card-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .card-header[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.5rem;\n  }\n  .card-header[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n    margin-bottom: 0.25rem;\n  }\n}\n.spinner-border[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spinner-border 0.75s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spinner-border {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.text-center.py-5[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-radius: 0.5rem;\n  margin: 2rem 0;\n}\n.text-center.py-5[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.bg-primary[_ngcontent-%COMP%] {\n  background-color: #0d6efd !important;\n}\n.bg-success[_ngcontent-%COMP%] {\n  background-color: #198754 !important;\n}\n.bg-warning[_ngcontent-%COMP%] {\n  background-color: #ffc107 !important;\n  color: #000 !important;\n}\n.bg-danger[_ngcontent-%COMP%] {\n  background-color: #dc3545 !important;\n}\n.bg-info[_ngcontent-%COMP%] {\n  background-color: #0dcaf0 !important;\n  color: #000 !important;\n}\n.bg-dark[_ngcontent-%COMP%] {\n  background-color: #212529 !important;\n}\n.bg-secondary[_ngcontent-%COMP%] {\n  background-color: #6c757d !important;\n}\n.bg-light[_ngcontent-%COMP%] {\n  background-color: #f8f9fa !important;\n  color: #000 !important;\n}\n.card[_ngcontent-%COMP%]:hover   .card-title[_ngcontent-%COMP%] {\n  color: #0d6efd;\n}\n.card[_ngcontent-%COMP%]:hover   .badge[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.gap-1[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 0.25rem;\n}\n.gap-2[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n.card-title[_ngcontent-%COMP%] {\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.badge.bg-light[_ngcontent-%COMP%] {\n  border: 1px solid #dee2e6;\n  color: #495057;\n  font-size: 0.7rem;\n  padding: 0.25rem 0.5rem;\n}\n.processing-indicator[_ngcontent-%COMP%] {\n  position: relative;\n}\n.processing-indicator[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(255, 255, 255, 0.8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10;\n}\n/*# sourceMappingURL=letters-approval.component-VLJWWA2P.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LettersApprovalComponent, [{
    type: Component,
    args: [{ selector: "app-letters-approval", standalone: false, template: `<div class="container-fluid">\r
  <div class="row">\r
    <div class="col-12">\r
      <!-- Header -->\r
      <div class="d-flex justify-content-between align-items-center mb-4">\r
        <div>\r
          <h2 class="mb-1 title">\r
            {{ translate("letters.letters_pending_approval") }}\r
          </h2>\r
          <p class="text-muted mb-0">\r
            {{ translate("letters.approval_workflow_description") }}\r
          </p>\r
        </div>\r
        <button\r
          class="btn btn-outline-primary"\r
          (click)="loadPendingLetters()"\r
          [disabled]="isLoading"\r
        >\r
          <i class="fas fa-sync-alt me-1" [class.fa-spin]="isLoading"></i>\r
          {{ translate("common.refresh") }}\r
        </button>\r
      </div>\r
\r
      <!-- Loading State -->\r
      <div *ngIf="isLoading" class="text-center py-5">\r
        <div class="spinner-border text-primary" role="status">\r
          <span class="visually-hidden">{{ translate("common.loading") }}</span>\r
        </div>\r
        <p class="mt-3 text-muted">{{ translate("common.loading") }}</p>\r
      </div>\r
\r
      <!-- No Letters State -->\r
      <div\r
        *ngIf="!isLoading && pendingLetters.length === 0"\r
        class="text-center py-5"\r
      >\r
        <div class="mb-4">\r
          <i class="fas fa-clipboard-check fa-4x text-muted"></i>\r
        </div>\r
        <h4 class="text-muted mb-3">\r
          {{ translate("letters.no_pending_letters") }}\r
        </h4>\r
        <p class="text-muted">\r
          {{ translate("letters.approval_workflow_description") }}\r
        </p>\r
      </div>\r
\r
      <!-- Letters List -->\r
      <div *ngIf="!isLoading && pendingLetters.length > 0" class="row">\r
        <div class="col-12">\r
          <div class="row">\r
            <div\r
              *ngFor="let letter of pendingLetters; trackBy: trackByLetterId"\r
              class="col-lg-6 col-xl-4 mb-4"\r
            >\r
              <div class="card h-100 shadow-sm">\r
                <div\r
                  class="card-header d-flex justify-content-between align-items-center"\r
                >\r
                  <div class="d-flex align-items-center">\r
                    <span\r
                      class="badge me-2"\r
                      [ngClass]="getDirectionBadgeClass(letter.direction)"\r
                    >\r
                      {{ getDirectionLabel(letter.direction) }}\r
                    </span>\r
                  </div>\r
                  <small class="text-muted">{{\r
                    formatDate(letter.letterDate)\r
                  }}</small>\r
                </div>\r
\r
                <div class="card-body">\r
                  <h6 class="card-title text-truncate" [title]="letter.subject">\r
                    {{ letter.subject }}\r
                  </h6>\r
\r
                  <p class="card-text text-muted small mb-3">\r
                    {{ letter.body | slice : 0 : 100\r
                    }}{{ letter.body.length > 100 ? "..." : "" }}\r
                  </p>\r
\r
                  <div class="mb-3">\r
                    <div class="row g-2">\r
                      <div class="col-6">\r
                        <small class="text-muted d-block"\r
                          >{{ translate("letters.to") }}:</small\r
                        >\r
                        <small\r
                          class="text-truncate d-block"\r
                          [title]="letter.to"\r
                          >{{ letter.to }}</small\r
                        >\r
                      </div>\r
                      <div class="col-6" *ngIf="letter.cc">\r
                        <small class="text-muted d-block"\r
                          >{{ translate("letters.cc") }}:</small\r
                        >\r
                        <small\r
                          class="text-truncate d-block"\r
                          [title]="letter.cc"\r
                          >{{ letter.cc }}</small\r
                        >\r
                      </div>\r
                    </div>\r
                  </div>\r
\r
                  <div class="mb-3" *ngIf="letter.referenceNumbers">\r
                    <small class="text-muted d-block"\r
                      >{{ translate("letters.reference_numbers") }}:</small\r
                    >\r
                    <small\r
                      class="text-truncate d-block"\r
                      [title]="letter.referenceNumbers"\r
                    >\r
                      {{ letter.referenceNumbers }}\r
                    </small>\r
                  </div>\r
\r
                  <div\r
                    class="mb-3"\r
                    *ngIf="letter.attachments && letter.attachments.length > 0"\r
                  >\r
                    <small class="text-muted d-block"\r
                      >{{ translate("letters.attachments") }}:</small\r
                    >\r
                    <div class="d-flex flex-wrap gap-1">\r
                      <span\r
                        *ngFor="let attachment of letter.attachments"\r
                        class="badge bg-light text-dark border"\r
                      >\r
                        <i class="fas fa-paperclip me-1"></i>\r
                        {{ attachment.fileName }}\r
                      </span>\r
                    </div>\r
                  </div>\r
                </div>\r
\r
                <div class="card-footer bg-transparent">\r
                  <div class="d-flex gap-2 flex-wrap">\r
                    <!-- View Details Button -->\r
                    <button\r
                      class="btn btn-info btn-sm"\r
                      (click)="viewLetterDetails(letter)"\r
                      title="{{ translate('letter_details.view_details') }}"\r
                    >\r
                      <i class="fas fa-eye me-1"></i>\r
                      {{ translate("letter_details.view_details") }}\r
                    </button>\r
\r
                    <!-- Download PDF Button - Always visible -->\r
                    <button\r
                      class="btn btn-primary btn-sm"\r
                      (click)="downloadPdf(letter)"\r
                      title="{{ translate('letters.download_pdf') }}"\r
                    >\r
                      <i class="fas fa-download me-1"></i>\r
                      {{ translate("letters.download_pdf") }}\r
                    </button>\r
\r
                    <button\r
                      class="btn btn-success btn-sm"\r
                      (click)="approveLetter(letter)"\r
                      [disabled]="\r
                        isProcessing && processingLetterId === letter.id\r
                      "\r
                    >\r
                      <i class="fas fa-check me-1"></i>\r
                      {{ translate("letters.approve") }}\r
                    </button>\r
\r
                    <button\r
                      class="btn btn-danger btn-sm"\r
                      (click)="rejectLetter(letter)"\r
                      [disabled]="\r
                        isProcessing && processingLetterId === letter.id\r
                      "\r
                    >\r
                      <i class="fas fa-times me-1"></i>\r
                      {{ translate("letters.reject") }}\r
                    </button>\r
                  </div>\r
\r
                  <div\r
                    *ngIf="isProcessing && processingLetterId === letter.id"\r
                    class="mt-2"\r
                  >\r
                    <div class="d-flex align-items-center">\r
                      <div\r
                        class="spinner-border spinner-border-sm text-primary me-2"\r
                        role="status"\r
                      >\r
                        <span class="visually-hidden">{{\r
                          translate("common.loading")\r
                        }}</span>\r
                      </div>\r
                      <small class="text-muted">{{\r
                        translate("common.processing")\r
                      }}</small>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Modals -->\r
<app-letters-confirmation-modal\r
  #confirmationModal\r
></app-letters-confirmation-modal>\r
<app-signature-pad-modal\r
  #signaturePadModal\r
  (signatureSaved)="onSignatureSaved($event)"\r
></app-signature-pad-modal>\r
<app-rejection-modal\r
  #rejectionModal\r
  (rejectionConfirmed)="onRejectionConfirmed($event)"\r
></app-rejection-modal>\r
<app-letter-details-modal #letterDetailsModal></app-letter-details-modal>\r
`, styles: ['/* src/app/components/letters/letters-approval/letters-approval.component.css */\n.card {\n  transition: all 0.3s ease;\n  border: 1px solid #e9ecef;\n}\n.card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1) !important;\n  border: 1px solid #e4b758;\n}\n.card-header {\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n  padding: 0.75rem 1rem;\n}\n.card-body {\n  padding: 1rem;\n}\n.card-footer {\n  padding: 0.75rem 1rem;\n  border-top: 1px solid #e9ecef;\n}\n.badge {\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.btn {\n  font-size: 0.875rem;\n  font-weight: 500;\n  transition: all 0.2s ease;\n}\n.btn:disabled {\n  transform: none;\n  opacity: 0.6;\n}\n.btn-success {\n  background-color: #198754;\n  border-color: #198754;\n}\n.btn-success:hover:not(:disabled) {\n  background-color: #157347;\n  border-color: #146c43;\n}\n.btn-danger {\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n.btn-danger:hover:not(:disabled) {\n  background-color: #c82333;\n  border-color: #bd2130;\n}\n.btn-info {\n  background-color: #0dcaf0;\n  border-color: #0dcaf0;\n  color: #000;\n}\n.btn-info:hover:not(:disabled) {\n  background-color: #3dd5f3;\n  border-color: #25cff2;\n}\n.btn-outline-primary {\n  color: #0d6efd;\n  border-color: #0d6efd;\n}\n.btn-outline-primary:hover:not(:disabled) {\n  background-color: #0d6efd;\n  border-color: #0d6efd;\n  color: #fff;\n}\n.spinner-border-sm {\n  width: 1rem;\n  height: 1rem;\n}\n.title {\n  color: #5F646D;\n}\n.text-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n[dir=rtl] .card-header {\n  text-align: right;\n}\n[dir=rtl] .card-footer {\n  text-align: right;\n}\n[dir=rtl] .d-flex {\n  flex-direction: row-reverse;\n}\n[dir=rtl] .me-1 {\n  margin-left: 0.25rem !important;\n  margin-right: 0 !important;\n}\n[dir=rtl] .me-2 {\n  margin-left: 0.5rem !important;\n  margin-right: 0 !important;\n}\n[dir=rtl] .ms-1 {\n  margin-right: 0.25rem !important;\n  margin-left: 0 !important;\n}\n[dir=rtl] .ms-2 {\n  margin-right: 0.5rem !important;\n  margin-left: 0 !important;\n}\n@media (max-width: 768px) {\n  .card-footer .d-flex {\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n  .card-footer .btn {\n    width: 100%;\n    justify-content: center;\n  }\n  .card-header .d-flex {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.5rem;\n  }\n  .card-header .badge {\n    margin-bottom: 0.25rem;\n  }\n}\n.spinner-border {\n  animation: spinner-border 0.75s linear infinite;\n}\n@keyframes spinner-border {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.text-center.py-5 {\n  background-color: #f8f9fa;\n  border-radius: 0.5rem;\n  margin: 2rem 0;\n}\n.text-center.py-5 i {\n  opacity: 0.5;\n}\n.bg-primary {\n  background-color: #0d6efd !important;\n}\n.bg-success {\n  background-color: #198754 !important;\n}\n.bg-warning {\n  background-color: #ffc107 !important;\n  color: #000 !important;\n}\n.bg-danger {\n  background-color: #dc3545 !important;\n}\n.bg-info {\n  background-color: #0dcaf0 !important;\n  color: #000 !important;\n}\n.bg-dark {\n  background-color: #212529 !important;\n}\n.bg-secondary {\n  background-color: #6c757d !important;\n}\n.bg-light {\n  background-color: #f8f9fa !important;\n  color: #000 !important;\n}\n.card:hover .card-title {\n  color: #0d6efd;\n}\n.card:hover .badge {\n  transform: scale(1.05);\n}\n.gap-1 > * + * {\n  margin-left: 0.25rem;\n}\n.gap-2 > * + * {\n  margin-left: 0.5rem;\n}\n.card-title {\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.badge.bg-light {\n  border: 1px solid #dee2e6;\n  color: #495057;\n  font-size: 0.7rem;\n  padding: 0.25rem 0.5rem;\n}\n.processing-indicator {\n  position: relative;\n}\n.processing-indicator::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(255, 255, 255, 0.8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10;\n}\n/*# sourceMappingURL=letters-approval.component-VLJWWA2P.css.map */\n'] }]
  }], () => [{ type: LettersService }, { type: TranslationService }, { type: ChangeDetectorRef }], { confirmationModal: [{
    type: ViewChild,
    args: ["confirmationModal"]
  }], signaturePadModal: [{
    type: ViewChild,
    args: ["signaturePadModal"]
  }], rejectionModal: [{
    type: ViewChild,
    args: ["rejectionModal"]
  }], letterDetailsModal: [{
    type: ViewChild,
    args: ["letterDetailsModal"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LettersApprovalComponent, { className: "LettersApprovalComponent", filePath: "src/app/components/letters/letters-approval/letters-approval.component.ts", lineNumber: 24 });
})();

// src/app/components/letters/letters-routing.module.ts
var routes = [
  {
    path: "",
    component: LettersList
  },
  {
    path: "approval",
    component: LettersApprovalComponent
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
    FormsModule,
    CKEditorModule
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
        LettersConfirmationModalComponent,
        SignaturePadModalComponent,
        LetterDetailsModalComponent,
        LettersApprovalComponent,
        RejectionModalComponent
      ],
      imports: [
        CommonModule,
        LettersRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        CKEditorModule
      ]
    }]
  }], null, null);
})();
export {
  LettersModule
};
/*! Bundled license information:

@ckeditor/ckeditor5-integrations-common/dist/index.js:
@ckeditor/ckeditor5-integrations-common/dist/index.js:
@ckeditor/ckeditor5-integrations-common/dist/index.js:
@ckeditor/ckeditor5-integrations-common/dist/index.js:
@ckeditor/ckeditor5-integrations-common/dist/index.js:
@ckeditor/ckeditor5-integrations-common/dist/index.js:
@ckeditor/ckeditor5-integrations-common/dist/index.js:
@ckeditor/ckeditor5-angular/fesm2022/ckeditor-ckeditor5-angular.mjs:
  (**
   * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
   *)
*/
//# sourceMappingURL=chunk-Q5TIJ2G7.js.map
