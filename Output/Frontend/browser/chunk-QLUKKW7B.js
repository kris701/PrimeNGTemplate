import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  Console,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  Directive,
  ElementRef,
  EnvironmentInjector,
  EventEmitter,
  Host,
  HostBinding,
  HostListener,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgClass,
  NgIf,
  NgModule,
  NgStyle,
  NgTemplateOutlet,
  NgZone,
  Observable,
  Optional,
  Output,
  PLATFORM_ID,
  PendingTasksInternal,
  Pipe,
  Renderer2,
  RuntimeError,
  Self,
  SkipSelf,
  Subject,
  TemplateRef,
  Version,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  XhrFactory,
  animate,
  booleanAttribute,
  computed,
  concatMap,
  contentChild,
  defer,
  effect,
  filter,
  finalize,
  forkJoin,
  formatRuntimeError,
  forwardRef,
  from,
  getDOM,
  inject,
  input,
  isPlatformBrowser,
  isPlatformServer,
  isPromise,
  isSubscribable,
  makeEnvironmentProviders,
  map,
  mergeMap,
  numberAttribute,
  of,
  parseCookieValue,
  provideAppInitializer,
  runInInjectionContext,
  setClassMetadata,
  signal,
  style,
  switchMap,
  transition,
  trigger,
  untracked,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵcontentQuerySignal,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryAdvance,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-2DCWLZUQ.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// node_modules/@angular/common/fesm2022/http.mjs
var HttpHandler = class {
};
var HttpBackend = class {
};
var HttpHeaders = class _HttpHeaders {
  /**
   * Internal map of lowercase header names to values.
   */
  // TODO(issue/24571): remove '!'.
  headers;
  /**
   * Internal map of lowercased header names to the normalized
   * form of the name (the form seen first).
   */
  normalizedNames = /* @__PURE__ */ new Map();
  /**
   * Complete the lazy initialization of this object (needed before reading).
   */
  lazyInit;
  /**
   * Queued updates to be materialized the next initialization.
   */
  lazyUpdate = null;
  /**  Constructs a new HTTP header object with the given values.*/
  constructor(headers) {
    if (!headers) {
      this.headers = /* @__PURE__ */ new Map();
    } else if (typeof headers === "string") {
      this.lazyInit = () => {
        this.headers = /* @__PURE__ */ new Map();
        headers.split("\n").forEach((line) => {
          const index = line.indexOf(":");
          if (index > 0) {
            const name = line.slice(0, index);
            const value = line.slice(index + 1).trim();
            this.addHeaderEntry(name, value);
          }
        });
      };
    } else if (typeof Headers !== "undefined" && headers instanceof Headers) {
      this.headers = /* @__PURE__ */ new Map();
      headers.forEach((value, name) => {
        this.addHeaderEntry(name, value);
      });
    } else {
      this.lazyInit = () => {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          assertValidHeaders(headers);
        }
        this.headers = /* @__PURE__ */ new Map();
        Object.entries(headers).forEach(([name, values]) => {
          this.setHeaderEntries(name, values);
        });
      };
    }
  }
  /**
   * Checks for existence of a given header.
   *
   * @param name The header name to check for existence.
   *
   * @returns True if the header exists, false otherwise.
   */
  has(name) {
    this.init();
    return this.headers.has(name.toLowerCase());
  }
  /**
   * Retrieves the first value of a given header.
   *
   * @param name The header name.
   *
   * @returns The value string if the header exists, null otherwise
   */
  get(name) {
    this.init();
    const values = this.headers.get(name.toLowerCase());
    return values && values.length > 0 ? values[0] : null;
  }
  /**
   * Retrieves the names of the headers.
   *
   * @returns A list of header names.
   */
  keys() {
    this.init();
    return Array.from(this.normalizedNames.values());
  }
  /**
   * Retrieves a list of values for a given header.
   *
   * @param name The header name from which to retrieve values.
   *
   * @returns A string of values if the header exists, null otherwise.
   */
  getAll(name) {
    this.init();
    return this.headers.get(name.toLowerCase()) || null;
  }
  /**
   * Appends a new value to the existing set of values for a header
   * and returns them in a clone of the original instance.
   *
   * @param name The header name for which to append the values.
   * @param value The value to append.
   *
   * @returns A clone of the HTTP headers object with the value appended to the given header.
   */
  append(name, value) {
    return this.clone({
      name,
      value,
      op: "a"
    });
  }
  /**
   * Sets or modifies a value for a given header in a clone of the original instance.
   * If the header already exists, its value is replaced with the given value
   * in the returned object.
   *
   * @param name The header name.
   * @param value The value or values to set or override for the given header.
   *
   * @returns A clone of the HTTP headers object with the newly set header value.
   */
  set(name, value) {
    return this.clone({
      name,
      value,
      op: "s"
    });
  }
  /**
   * Deletes values for a given header in a clone of the original instance.
   *
   * @param name The header name.
   * @param value The value or values to delete for the given header.
   *
   * @returns A clone of the HTTP headers object with the given value deleted.
   */
  delete(name, value) {
    return this.clone({
      name,
      value,
      op: "d"
    });
  }
  maybeSetNormalizedName(name, lcName) {
    if (!this.normalizedNames.has(lcName)) {
      this.normalizedNames.set(lcName, name);
    }
  }
  init() {
    if (!!this.lazyInit) {
      if (this.lazyInit instanceof _HttpHeaders) {
        this.copyFrom(this.lazyInit);
      } else {
        this.lazyInit();
      }
      this.lazyInit = null;
      if (!!this.lazyUpdate) {
        this.lazyUpdate.forEach((update) => this.applyUpdate(update));
        this.lazyUpdate = null;
      }
    }
  }
  copyFrom(other) {
    other.init();
    Array.from(other.headers.keys()).forEach((key) => {
      this.headers.set(key, other.headers.get(key));
      this.normalizedNames.set(key, other.normalizedNames.get(key));
    });
  }
  clone(update) {
    const clone = new _HttpHeaders();
    clone.lazyInit = !!this.lazyInit && this.lazyInit instanceof _HttpHeaders ? this.lazyInit : this;
    clone.lazyUpdate = (this.lazyUpdate || []).concat([update]);
    return clone;
  }
  applyUpdate(update) {
    const key = update.name.toLowerCase();
    switch (update.op) {
      case "a":
      case "s":
        let value = update.value;
        if (typeof value === "string") {
          value = [value];
        }
        if (value.length === 0) {
          return;
        }
        this.maybeSetNormalizedName(update.name, key);
        const base2 = (update.op === "a" ? this.headers.get(key) : void 0) || [];
        base2.push(...value);
        this.headers.set(key, base2);
        break;
      case "d":
        const toDelete = update.value;
        if (!toDelete) {
          this.headers.delete(key);
          this.normalizedNames.delete(key);
        } else {
          let existing = this.headers.get(key);
          if (!existing) {
            return;
          }
          existing = existing.filter((value2) => toDelete.indexOf(value2) === -1);
          if (existing.length === 0) {
            this.headers.delete(key);
            this.normalizedNames.delete(key);
          } else {
            this.headers.set(key, existing);
          }
        }
        break;
    }
  }
  addHeaderEntry(name, value) {
    const key = name.toLowerCase();
    this.maybeSetNormalizedName(name, key);
    if (this.headers.has(key)) {
      this.headers.get(key).push(value);
    } else {
      this.headers.set(key, [value]);
    }
  }
  setHeaderEntries(name, values) {
    const headerValues = (Array.isArray(values) ? values : [values]).map((value) => value.toString());
    const key = name.toLowerCase();
    this.headers.set(key, headerValues);
    this.maybeSetNormalizedName(name, key);
  }
  /**
   * @internal
   */
  forEach(fn) {
    this.init();
    Array.from(this.normalizedNames.keys()).forEach((key) => fn(this.normalizedNames.get(key), this.headers.get(key)));
  }
};
function assertValidHeaders(headers) {
  for (const [key, value] of Object.entries(headers)) {
    if (!(typeof value === "string" || typeof value === "number") && !Array.isArray(value)) {
      throw new Error(`Unexpected value of the \`${key}\` header provided. Expecting either a string, a number or an array, but got: \`${value}\`.`);
    }
  }
}
var HttpUrlEncodingCodec = class {
  /**
   * Encodes a key name for a URL parameter or query-string.
   * @param key The key name.
   * @returns The encoded key name.
   */
  encodeKey(key) {
    return standardEncoding(key);
  }
  /**
   * Encodes the value of a URL parameter or query-string.
   * @param value The value.
   * @returns The encoded value.
   */
  encodeValue(value) {
    return standardEncoding(value);
  }
  /**
   * Decodes an encoded URL parameter or query-string key.
   * @param key The encoded key name.
   * @returns The decoded key name.
   */
  decodeKey(key) {
    return decodeURIComponent(key);
  }
  /**
   * Decodes an encoded URL parameter or query-string value.
   * @param value The encoded value.
   * @returns The decoded value.
   */
  decodeValue(value) {
    return decodeURIComponent(value);
  }
};
function paramParser(rawParams, codec) {
  const map2 = /* @__PURE__ */ new Map();
  if (rawParams.length > 0) {
    const params = rawParams.replace(/^\?/, "").split("&");
    params.forEach((param) => {
      const eqIdx = param.indexOf("=");
      const [key, val] = eqIdx == -1 ? [codec.decodeKey(param), ""] : [codec.decodeKey(param.slice(0, eqIdx)), codec.decodeValue(param.slice(eqIdx + 1))];
      const list = map2.get(key) || [];
      list.push(val);
      map2.set(key, list);
    });
  }
  return map2;
}
var STANDARD_ENCODING_REGEX = /%(\d[a-f0-9])/gi;
var STANDARD_ENCODING_REPLACEMENTS = {
  "40": "@",
  "3A": ":",
  "24": "$",
  "2C": ",",
  "3B": ";",
  "3D": "=",
  "3F": "?",
  "2F": "/"
};
function standardEncoding(v) {
  return encodeURIComponent(v).replace(STANDARD_ENCODING_REGEX, (s, t) => STANDARD_ENCODING_REPLACEMENTS[t] ?? s);
}
function valueToString(value) {
  return `${value}`;
}
var HttpParams = class _HttpParams {
  map;
  encoder;
  updates = null;
  cloneFrom = null;
  constructor(options = {}) {
    this.encoder = options.encoder || new HttpUrlEncodingCodec();
    if (!!options.fromString) {
      if (!!options.fromObject) {
        throw new Error(`Cannot specify both fromString and fromObject.`);
      }
      this.map = paramParser(options.fromString, this.encoder);
    } else if (!!options.fromObject) {
      this.map = /* @__PURE__ */ new Map();
      Object.keys(options.fromObject).forEach((key) => {
        const value = options.fromObject[key];
        const values = Array.isArray(value) ? value.map(valueToString) : [valueToString(value)];
        this.map.set(key, values);
      });
    } else {
      this.map = null;
    }
  }
  /**
   * Reports whether the body includes one or more values for a given parameter.
   * @param param The parameter name.
   * @returns True if the parameter has one or more values,
   * false if it has no value or is not present.
   */
  has(param) {
    this.init();
    return this.map.has(param);
  }
  /**
   * Retrieves the first value for a parameter.
   * @param param The parameter name.
   * @returns The first value of the given parameter,
   * or `null` if the parameter is not present.
   */
  get(param) {
    this.init();
    const res = this.map.get(param);
    return !!res ? res[0] : null;
  }
  /**
   * Retrieves all values for a  parameter.
   * @param param The parameter name.
   * @returns All values in a string array,
   * or `null` if the parameter not present.
   */
  getAll(param) {
    this.init();
    return this.map.get(param) || null;
  }
  /**
   * Retrieves all the parameters for this body.
   * @returns The parameter names in a string array.
   */
  keys() {
    this.init();
    return Array.from(this.map.keys());
  }
  /**
   * Appends a new value to existing values for a parameter.
   * @param param The parameter name.
   * @param value The new value to add.
   * @return A new body with the appended value.
   */
  append(param, value) {
    return this.clone({
      param,
      value,
      op: "a"
    });
  }
  /**
   * Constructs a new body with appended values for the given parameter name.
   * @param params parameters and values
   * @return A new body with the new value.
   */
  appendAll(params) {
    const updates = [];
    Object.keys(params).forEach((param) => {
      const value = params[param];
      if (Array.isArray(value)) {
        value.forEach((_value) => {
          updates.push({
            param,
            value: _value,
            op: "a"
          });
        });
      } else {
        updates.push({
          param,
          value,
          op: "a"
        });
      }
    });
    return this.clone(updates);
  }
  /**
   * Replaces the value for a parameter.
   * @param param The parameter name.
   * @param value The new value.
   * @return A new body with the new value.
   */
  set(param, value) {
    return this.clone({
      param,
      value,
      op: "s"
    });
  }
  /**
   * Removes a given value or all values from a parameter.
   * @param param The parameter name.
   * @param value The value to remove, if provided.
   * @return A new body with the given value removed, or with all values
   * removed if no value is specified.
   */
  delete(param, value) {
    return this.clone({
      param,
      value,
      op: "d"
    });
  }
  /**
   * Serializes the body to an encoded string, where key-value pairs (separated by `=`) are
   * separated by `&`s.
   */
  toString() {
    this.init();
    return this.keys().map((key) => {
      const eKey = this.encoder.encodeKey(key);
      return this.map.get(key).map((value) => eKey + "=" + this.encoder.encodeValue(value)).join("&");
    }).filter((param) => param !== "").join("&");
  }
  clone(update) {
    const clone = new _HttpParams({
      encoder: this.encoder
    });
    clone.cloneFrom = this.cloneFrom || this;
    clone.updates = (this.updates || []).concat(update);
    return clone;
  }
  init() {
    if (this.map === null) {
      this.map = /* @__PURE__ */ new Map();
    }
    if (this.cloneFrom !== null) {
      this.cloneFrom.init();
      this.cloneFrom.keys().forEach((key) => this.map.set(key, this.cloneFrom.map.get(key)));
      this.updates.forEach((update) => {
        switch (update.op) {
          case "a":
          case "s":
            const base2 = (update.op === "a" ? this.map.get(update.param) : void 0) || [];
            base2.push(valueToString(update.value));
            this.map.set(update.param, base2);
            break;
          case "d":
            if (update.value !== void 0) {
              let base3 = this.map.get(update.param) || [];
              const idx = base3.indexOf(valueToString(update.value));
              if (idx !== -1) {
                base3.splice(idx, 1);
              }
              if (base3.length > 0) {
                this.map.set(update.param, base3);
              } else {
                this.map.delete(update.param);
              }
            } else {
              this.map.delete(update.param);
              break;
            }
        }
      });
      this.cloneFrom = this.updates = null;
    }
  }
};
var HttpContext = class {
  map = /* @__PURE__ */ new Map();
  /**
   * Store a value in the context. If a value is already present it will be overwritten.
   *
   * @param token The reference to an instance of `HttpContextToken`.
   * @param value The value to store.
   *
   * @returns A reference to itself for easy chaining.
   */
  set(token, value) {
    this.map.set(token, value);
    return this;
  }
  /**
   * Retrieve the value associated with the given token.
   *
   * @param token The reference to an instance of `HttpContextToken`.
   *
   * @returns The stored value or default if one is defined.
   */
  get(token) {
    if (!this.map.has(token)) {
      this.map.set(token, token.defaultValue());
    }
    return this.map.get(token);
  }
  /**
   * Delete the value associated with the given token.
   *
   * @param token The reference to an instance of `HttpContextToken`.
   *
   * @returns A reference to itself for easy chaining.
   */
  delete(token) {
    this.map.delete(token);
    return this;
  }
  /**
   * Checks for existence of a given token.
   *
   * @param token The reference to an instance of `HttpContextToken`.
   *
   * @returns True if the token exists, false otherwise.
   */
  has(token) {
    return this.map.has(token);
  }
  /**
   * @returns a list of tokens currently stored in the context.
   */
  keys() {
    return this.map.keys();
  }
};
function mightHaveBody(method) {
  switch (method) {
    case "DELETE":
    case "GET":
    case "HEAD":
    case "OPTIONS":
    case "JSONP":
      return false;
    default:
      return true;
  }
}
function isArrayBuffer(value) {
  return typeof ArrayBuffer !== "undefined" && value instanceof ArrayBuffer;
}
function isBlob(value) {
  return typeof Blob !== "undefined" && value instanceof Blob;
}
function isFormData(value) {
  return typeof FormData !== "undefined" && value instanceof FormData;
}
function isUrlSearchParams(value) {
  return typeof URLSearchParams !== "undefined" && value instanceof URLSearchParams;
}
var HttpRequest = class _HttpRequest {
  url;
  /**
   * The request body, or `null` if one isn't set.
   *
   * Bodies are not enforced to be immutable, as they can include a reference to any
   * user-defined data type. However, interceptors should take care to preserve
   * idempotence by treating them as such.
   */
  body = null;
  /**
   * Outgoing headers for this request.
   */
  // TODO(issue/24571): remove '!'.
  headers;
  /**
   * Shared and mutable context that can be used by interceptors
   */
  context;
  /**
   * Whether this request should be made in a way that exposes progress events.
   *
   * Progress events are expensive (change detection runs on each event) and so
   * they should only be requested if the consumer intends to monitor them.
   *
   * Note: The `FetchBackend` doesn't support progress report on uploads.
   */
  reportProgress = false;
  /**
   * Whether this request should be sent with outgoing credentials (cookies).
   */
  withCredentials = false;
  /**
   * The expected response type of the server.
   *
   * This is used to parse the response appropriately before returning it to
   * the requestee.
   */
  responseType = "json";
  /**
   * The outgoing HTTP request method.
   */
  method;
  /**
   * Outgoing URL parameters.
   *
   * To pass a string representation of HTTP parameters in the URL-query-string format,
   * the `HttpParamsOptions`' `fromString` may be used. For example:
   *
   * ```
   * new HttpParams({fromString: 'angular=awesome'})
   * ```
   */
  // TODO(issue/24571): remove '!'.
  params;
  /**
   * The outgoing URL with all URL parameters set.
   */
  urlWithParams;
  /**
   * The HttpTransferCache option for the request
   */
  transferCache;
  constructor(method, url, third, fourth) {
    this.url = url;
    this.method = method.toUpperCase();
    let options;
    if (mightHaveBody(this.method) || !!fourth) {
      this.body = third !== void 0 ? third : null;
      options = fourth;
    } else {
      options = third;
    }
    if (options) {
      this.reportProgress = !!options.reportProgress;
      this.withCredentials = !!options.withCredentials;
      if (!!options.responseType) {
        this.responseType = options.responseType;
      }
      if (!!options.headers) {
        this.headers = options.headers;
      }
      if (!!options.context) {
        this.context = options.context;
      }
      if (!!options.params) {
        this.params = options.params;
      }
      this.transferCache = options.transferCache;
    }
    this.headers ??= new HttpHeaders();
    this.context ??= new HttpContext();
    if (!this.params) {
      this.params = new HttpParams();
      this.urlWithParams = url;
    } else {
      const params = this.params.toString();
      if (params.length === 0) {
        this.urlWithParams = url;
      } else {
        const qIdx = url.indexOf("?");
        const sep = qIdx === -1 ? "?" : qIdx < url.length - 1 ? "&" : "";
        this.urlWithParams = url + sep + params;
      }
    }
  }
  /**
   * Transform the free-form body into a serialized format suitable for
   * transmission to the server.
   */
  serializeBody() {
    if (this.body === null) {
      return null;
    }
    if (typeof this.body === "string" || isArrayBuffer(this.body) || isBlob(this.body) || isFormData(this.body) || isUrlSearchParams(this.body)) {
      return this.body;
    }
    if (this.body instanceof HttpParams) {
      return this.body.toString();
    }
    if (typeof this.body === "object" || typeof this.body === "boolean" || Array.isArray(this.body)) {
      return JSON.stringify(this.body);
    }
    return this.body.toString();
  }
  /**
   * Examine the body and attempt to infer an appropriate MIME type
   * for it.
   *
   * If no such type can be inferred, this method will return `null`.
   */
  detectContentTypeHeader() {
    if (this.body === null) {
      return null;
    }
    if (isFormData(this.body)) {
      return null;
    }
    if (isBlob(this.body)) {
      return this.body.type || null;
    }
    if (isArrayBuffer(this.body)) {
      return null;
    }
    if (typeof this.body === "string") {
      return "text/plain";
    }
    if (this.body instanceof HttpParams) {
      return "application/x-www-form-urlencoded;charset=UTF-8";
    }
    if (typeof this.body === "object" || typeof this.body === "number" || typeof this.body === "boolean") {
      return "application/json";
    }
    return null;
  }
  clone(update = {}) {
    const method = update.method || this.method;
    const url = update.url || this.url;
    const responseType = update.responseType || this.responseType;
    const transferCache = update.transferCache ?? this.transferCache;
    const body = update.body !== void 0 ? update.body : this.body;
    const withCredentials = update.withCredentials ?? this.withCredentials;
    const reportProgress = update.reportProgress ?? this.reportProgress;
    let headers = update.headers || this.headers;
    let params = update.params || this.params;
    const context = update.context ?? this.context;
    if (update.setHeaders !== void 0) {
      headers = Object.keys(update.setHeaders).reduce((headers2, name) => headers2.set(name, update.setHeaders[name]), headers);
    }
    if (update.setParams) {
      params = Object.keys(update.setParams).reduce((params2, param) => params2.set(param, update.setParams[param]), params);
    }
    return new _HttpRequest(method, url, body, {
      params,
      headers,
      context,
      reportProgress,
      responseType,
      withCredentials,
      transferCache
    });
  }
};
var HttpEventType;
(function(HttpEventType2) {
  HttpEventType2[HttpEventType2["Sent"] = 0] = "Sent";
  HttpEventType2[HttpEventType2["UploadProgress"] = 1] = "UploadProgress";
  HttpEventType2[HttpEventType2["ResponseHeader"] = 2] = "ResponseHeader";
  HttpEventType2[HttpEventType2["DownloadProgress"] = 3] = "DownloadProgress";
  HttpEventType2[HttpEventType2["Response"] = 4] = "Response";
  HttpEventType2[HttpEventType2["User"] = 5] = "User";
})(HttpEventType || (HttpEventType = {}));
var HttpResponseBase = class {
  /**
   * All response headers.
   */
  headers;
  /**
   * Response status code.
   */
  status;
  /**
   * Textual description of response status code, defaults to OK.
   *
   * Do not depend on this.
   */
  statusText;
  /**
   * URL of the resource retrieved, or null if not available.
   */
  url;
  /**
   * Whether the status code falls in the 2xx range.
   */
  ok;
  /**
   * Type of the response, narrowed to either the full response or the header.
   */
  // TODO(issue/24571): remove '!'.
  type;
  /**
   * Super-constructor for all responses.
   *
   * The single parameter accepted is an initialization hash. Any properties
   * of the response passed there will override the default values.
   */
  constructor(init, defaultStatus = 200, defaultStatusText = "OK") {
    this.headers = init.headers || new HttpHeaders();
    this.status = init.status !== void 0 ? init.status : defaultStatus;
    this.statusText = init.statusText || defaultStatusText;
    this.url = init.url || null;
    this.ok = this.status >= 200 && this.status < 300;
  }
};
var HttpHeaderResponse = class _HttpHeaderResponse extends HttpResponseBase {
  /**
   * Create a new `HttpHeaderResponse` with the given parameters.
   */
  constructor(init = {}) {
    super(init);
  }
  type = HttpEventType.ResponseHeader;
  /**
   * Copy this `HttpHeaderResponse`, overriding its contents with the
   * given parameter hash.
   */
  clone(update = {}) {
    return new _HttpHeaderResponse({
      headers: update.headers || this.headers,
      status: update.status !== void 0 ? update.status : this.status,
      statusText: update.statusText || this.statusText,
      url: update.url || this.url || void 0
    });
  }
};
var HttpResponse = class _HttpResponse extends HttpResponseBase {
  /**
   * The response body, or `null` if one was not returned.
   */
  body;
  /**
   * Construct a new `HttpResponse`.
   */
  constructor(init = {}) {
    super(init);
    this.body = init.body !== void 0 ? init.body : null;
  }
  type = HttpEventType.Response;
  clone(update = {}) {
    return new _HttpResponse({
      body: update.body !== void 0 ? update.body : this.body,
      headers: update.headers || this.headers,
      status: update.status !== void 0 ? update.status : this.status,
      statusText: update.statusText || this.statusText,
      url: update.url || this.url || void 0
    });
  }
};
var HttpErrorResponse = class extends HttpResponseBase {
  name = "HttpErrorResponse";
  message;
  error;
  /**
   * Errors are never okay, even when the status code is in the 2xx success range.
   */
  ok = false;
  constructor(init) {
    super(init, 0, "Unknown Error");
    if (this.status >= 200 && this.status < 300) {
      this.message = `Http failure during parsing for ${init.url || "(unknown url)"}`;
    } else {
      this.message = `Http failure response for ${init.url || "(unknown url)"}: ${init.status} ${init.statusText}`;
    }
    this.error = init.error || null;
  }
};
var HTTP_STATUS_CODE_OK = 200;
var HTTP_STATUS_CODE_NO_CONTENT = 204;
var HttpStatusCode;
(function(HttpStatusCode2) {
  HttpStatusCode2[HttpStatusCode2["Continue"] = 100] = "Continue";
  HttpStatusCode2[HttpStatusCode2["SwitchingProtocols"] = 101] = "SwitchingProtocols";
  HttpStatusCode2[HttpStatusCode2["Processing"] = 102] = "Processing";
  HttpStatusCode2[HttpStatusCode2["EarlyHints"] = 103] = "EarlyHints";
  HttpStatusCode2[HttpStatusCode2["Ok"] = 200] = "Ok";
  HttpStatusCode2[HttpStatusCode2["Created"] = 201] = "Created";
  HttpStatusCode2[HttpStatusCode2["Accepted"] = 202] = "Accepted";
  HttpStatusCode2[HttpStatusCode2["NonAuthoritativeInformation"] = 203] = "NonAuthoritativeInformation";
  HttpStatusCode2[HttpStatusCode2["NoContent"] = 204] = "NoContent";
  HttpStatusCode2[HttpStatusCode2["ResetContent"] = 205] = "ResetContent";
  HttpStatusCode2[HttpStatusCode2["PartialContent"] = 206] = "PartialContent";
  HttpStatusCode2[HttpStatusCode2["MultiStatus"] = 207] = "MultiStatus";
  HttpStatusCode2[HttpStatusCode2["AlreadyReported"] = 208] = "AlreadyReported";
  HttpStatusCode2[HttpStatusCode2["ImUsed"] = 226] = "ImUsed";
  HttpStatusCode2[HttpStatusCode2["MultipleChoices"] = 300] = "MultipleChoices";
  HttpStatusCode2[HttpStatusCode2["MovedPermanently"] = 301] = "MovedPermanently";
  HttpStatusCode2[HttpStatusCode2["Found"] = 302] = "Found";
  HttpStatusCode2[HttpStatusCode2["SeeOther"] = 303] = "SeeOther";
  HttpStatusCode2[HttpStatusCode2["NotModified"] = 304] = "NotModified";
  HttpStatusCode2[HttpStatusCode2["UseProxy"] = 305] = "UseProxy";
  HttpStatusCode2[HttpStatusCode2["Unused"] = 306] = "Unused";
  HttpStatusCode2[HttpStatusCode2["TemporaryRedirect"] = 307] = "TemporaryRedirect";
  HttpStatusCode2[HttpStatusCode2["PermanentRedirect"] = 308] = "PermanentRedirect";
  HttpStatusCode2[HttpStatusCode2["BadRequest"] = 400] = "BadRequest";
  HttpStatusCode2[HttpStatusCode2["Unauthorized"] = 401] = "Unauthorized";
  HttpStatusCode2[HttpStatusCode2["PaymentRequired"] = 402] = "PaymentRequired";
  HttpStatusCode2[HttpStatusCode2["Forbidden"] = 403] = "Forbidden";
  HttpStatusCode2[HttpStatusCode2["NotFound"] = 404] = "NotFound";
  HttpStatusCode2[HttpStatusCode2["MethodNotAllowed"] = 405] = "MethodNotAllowed";
  HttpStatusCode2[HttpStatusCode2["NotAcceptable"] = 406] = "NotAcceptable";
  HttpStatusCode2[HttpStatusCode2["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
  HttpStatusCode2[HttpStatusCode2["RequestTimeout"] = 408] = "RequestTimeout";
  HttpStatusCode2[HttpStatusCode2["Conflict"] = 409] = "Conflict";
  HttpStatusCode2[HttpStatusCode2["Gone"] = 410] = "Gone";
  HttpStatusCode2[HttpStatusCode2["LengthRequired"] = 411] = "LengthRequired";
  HttpStatusCode2[HttpStatusCode2["PreconditionFailed"] = 412] = "PreconditionFailed";
  HttpStatusCode2[HttpStatusCode2["PayloadTooLarge"] = 413] = "PayloadTooLarge";
  HttpStatusCode2[HttpStatusCode2["UriTooLong"] = 414] = "UriTooLong";
  HttpStatusCode2[HttpStatusCode2["UnsupportedMediaType"] = 415] = "UnsupportedMediaType";
  HttpStatusCode2[HttpStatusCode2["RangeNotSatisfiable"] = 416] = "RangeNotSatisfiable";
  HttpStatusCode2[HttpStatusCode2["ExpectationFailed"] = 417] = "ExpectationFailed";
  HttpStatusCode2[HttpStatusCode2["ImATeapot"] = 418] = "ImATeapot";
  HttpStatusCode2[HttpStatusCode2["MisdirectedRequest"] = 421] = "MisdirectedRequest";
  HttpStatusCode2[HttpStatusCode2["UnprocessableEntity"] = 422] = "UnprocessableEntity";
  HttpStatusCode2[HttpStatusCode2["Locked"] = 423] = "Locked";
  HttpStatusCode2[HttpStatusCode2["FailedDependency"] = 424] = "FailedDependency";
  HttpStatusCode2[HttpStatusCode2["TooEarly"] = 425] = "TooEarly";
  HttpStatusCode2[HttpStatusCode2["UpgradeRequired"] = 426] = "UpgradeRequired";
  HttpStatusCode2[HttpStatusCode2["PreconditionRequired"] = 428] = "PreconditionRequired";
  HttpStatusCode2[HttpStatusCode2["TooManyRequests"] = 429] = "TooManyRequests";
  HttpStatusCode2[HttpStatusCode2["RequestHeaderFieldsTooLarge"] = 431] = "RequestHeaderFieldsTooLarge";
  HttpStatusCode2[HttpStatusCode2["UnavailableForLegalReasons"] = 451] = "UnavailableForLegalReasons";
  HttpStatusCode2[HttpStatusCode2["InternalServerError"] = 500] = "InternalServerError";
  HttpStatusCode2[HttpStatusCode2["NotImplemented"] = 501] = "NotImplemented";
  HttpStatusCode2[HttpStatusCode2["BadGateway"] = 502] = "BadGateway";
  HttpStatusCode2[HttpStatusCode2["ServiceUnavailable"] = 503] = "ServiceUnavailable";
  HttpStatusCode2[HttpStatusCode2["GatewayTimeout"] = 504] = "GatewayTimeout";
  HttpStatusCode2[HttpStatusCode2["HttpVersionNotSupported"] = 505] = "HttpVersionNotSupported";
  HttpStatusCode2[HttpStatusCode2["VariantAlsoNegotiates"] = 506] = "VariantAlsoNegotiates";
  HttpStatusCode2[HttpStatusCode2["InsufficientStorage"] = 507] = "InsufficientStorage";
  HttpStatusCode2[HttpStatusCode2["LoopDetected"] = 508] = "LoopDetected";
  HttpStatusCode2[HttpStatusCode2["NotExtended"] = 510] = "NotExtended";
  HttpStatusCode2[HttpStatusCode2["NetworkAuthenticationRequired"] = 511] = "NetworkAuthenticationRequired";
})(HttpStatusCode || (HttpStatusCode = {}));
function addBody(options, body) {
  return {
    body,
    headers: options.headers,
    context: options.context,
    observe: options.observe,
    params: options.params,
    reportProgress: options.reportProgress,
    responseType: options.responseType,
    withCredentials: options.withCredentials,
    transferCache: options.transferCache
  };
}
var HttpClient = class _HttpClient {
  handler;
  constructor(handler2) {
    this.handler = handler2;
  }
  /**
   * Constructs an observable for a generic HTTP request that, when subscribed,
   * fires the request through the chain of registered interceptors and on to the
   * server.
   *
   * You can pass an `HttpRequest` directly as the only parameter. In this case,
   * the call returns an observable of the raw `HttpEvent` stream.
   *
   * Alternatively you can pass an HTTP method as the first parameter,
   * a URL string as the second, and an options hash containing the request body as the third.
   * See `addBody()`. In this case, the specified `responseType` and `observe` options determine the
   * type of returned observable.
   *   * The `responseType` value determines how a successful response body is parsed.
   *   * If `responseType` is the default `json`, you can pass a type interface for the resulting
   * object as a type parameter to the call.
   *
   * The `observe` value determines the return type, according to what you are interested in
   * observing.
   *   * An `observe` value of events returns an observable of the raw `HttpEvent` stream, including
   * progress events by default.
   *   * An `observe` value of response returns an observable of `HttpResponse<T>`,
   * where the `T` parameter depends on the `responseType` and any optionally provided type
   * parameter.
   *   * An `observe` value of body returns an observable of `<T>` with the same `T` body type.
   *
   */
  request(first, url, options = {}) {
    let req;
    if (first instanceof HttpRequest) {
      req = first;
    } else {
      let headers = void 0;
      if (options.headers instanceof HttpHeaders) {
        headers = options.headers;
      } else {
        headers = new HttpHeaders(options.headers);
      }
      let params = void 0;
      if (!!options.params) {
        if (options.params instanceof HttpParams) {
          params = options.params;
        } else {
          params = new HttpParams({
            fromObject: options.params
          });
        }
      }
      req = new HttpRequest(first, url, options.body !== void 0 ? options.body : null, {
        headers,
        context: options.context,
        params,
        reportProgress: options.reportProgress,
        // By default, JSON is assumed to be returned for all calls.
        responseType: options.responseType || "json",
        withCredentials: options.withCredentials,
        transferCache: options.transferCache
      });
    }
    const events$ = of(req).pipe(concatMap((req2) => this.handler.handle(req2)));
    if (first instanceof HttpRequest || options.observe === "events") {
      return events$;
    }
    const res$ = events$.pipe(filter((event) => event instanceof HttpResponse));
    switch (options.observe || "body") {
      case "body":
        switch (req.responseType) {
          case "arraybuffer":
            return res$.pipe(map((res) => {
              if (res.body !== null && !(res.body instanceof ArrayBuffer)) {
                throw new Error("Response is not an ArrayBuffer.");
              }
              return res.body;
            }));
          case "blob":
            return res$.pipe(map((res) => {
              if (res.body !== null && !(res.body instanceof Blob)) {
                throw new Error("Response is not a Blob.");
              }
              return res.body;
            }));
          case "text":
            return res$.pipe(map((res) => {
              if (res.body !== null && typeof res.body !== "string") {
                throw new Error("Response is not a string.");
              }
              return res.body;
            }));
          case "json":
          default:
            return res$.pipe(map((res) => res.body));
        }
      case "response":
        return res$;
      default:
        throw new Error(`Unreachable: unhandled observe type ${options.observe}}`);
    }
  }
  /**
   * Constructs an observable that, when subscribed, causes the configured
   * `DELETE` request to execute on the server. See the individual overloads for
   * details on the return type.
   *
   * @param url     The endpoint URL.
   * @param options The HTTP options to send with the request.
   *
   */
  delete(url, options = {}) {
    return this.request("DELETE", url, options);
  }
  /**
   * Constructs an observable that, when subscribed, causes the configured
   * `GET` request to execute on the server. See the individual overloads for
   * details on the return type.
   */
  get(url, options = {}) {
    return this.request("GET", url, options);
  }
  /**
   * Constructs an observable that, when subscribed, causes the configured
   * `HEAD` request to execute on the server. The `HEAD` method returns
   * meta information about the resource without transferring the
   * resource itself. See the individual overloads for
   * details on the return type.
   */
  head(url, options = {}) {
    return this.request("HEAD", url, options);
  }
  /**
   * Constructs an `Observable` that, when subscribed, causes a request with the special method
   * `JSONP` to be dispatched via the interceptor pipeline.
   * The [JSONP pattern](https://en.wikipedia.org/wiki/JSONP) works around limitations of certain
   * API endpoints that don't support newer,
   * and preferable [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) protocol.
   * JSONP treats the endpoint API as a JavaScript file and tricks the browser to process the
   * requests even if the API endpoint is not located on the same domain (origin) as the client-side
   * application making the request.
   * The endpoint API must support JSONP callback for JSONP requests to work.
   * The resource API returns the JSON response wrapped in a callback function.
   * You can pass the callback function name as one of the query parameters.
   * Note that JSONP requests can only be used with `GET` requests.
   *
   * @param url The resource URL.
   * @param callbackParam The callback function name.
   *
   */
  jsonp(url, callbackParam) {
    return this.request("JSONP", url, {
      params: new HttpParams().append(callbackParam, "JSONP_CALLBACK"),
      observe: "body",
      responseType: "json"
    });
  }
  /**
   * Constructs an `Observable` that, when subscribed, causes the configured
   * `OPTIONS` request to execute on the server. This method allows the client
   * to determine the supported HTTP methods and other capabilities of an endpoint,
   * without implying a resource action. See the individual overloads for
   * details on the return type.
   */
  options(url, options = {}) {
    return this.request("OPTIONS", url, options);
  }
  /**
   * Constructs an observable that, when subscribed, causes the configured
   * `PATCH` request to execute on the server. See the individual overloads for
   * details on the return type.
   */
  patch(url, body, options = {}) {
    return this.request("PATCH", url, addBody(options, body));
  }
  /**
   * Constructs an observable that, when subscribed, causes the configured
   * `POST` request to execute on the server. The server responds with the location of
   * the replaced resource. See the individual overloads for
   * details on the return type.
   */
  post(url, body, options = {}) {
    return this.request("POST", url, addBody(options, body));
  }
  /**
   * Constructs an observable that, when subscribed, causes the configured
   * `PUT` request to execute on the server. The `PUT` method replaces an existing resource
   * with a new set of values.
   * See the individual overloads for details on the return type.
   */
  put(url, body, options = {}) {
    return this.request("PUT", url, addBody(options, body));
  }
  static \u0275fac = function HttpClient_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HttpClient)(\u0275\u0275inject(HttpHandler));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _HttpClient,
    factory: _HttpClient.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpClient, [{
    type: Injectable
  }], () => [{
    type: HttpHandler
  }], null);
})();
var XSSI_PREFIX$1 = /^\)\]\}',?\n/;
var REQUEST_URL_HEADER = `X-Request-URL`;
function getResponseUrl$1(response) {
  if (response.url) {
    return response.url;
  }
  const xRequestUrl = REQUEST_URL_HEADER.toLocaleLowerCase();
  return response.headers.get(xRequestUrl);
}
var FetchBackend = class _FetchBackend {
  // We use an arrow function to always reference the current global implementation of `fetch`.
  // This is helpful for cases when the global `fetch` implementation is modified by external code,
  // see https://github.com/angular/angular/issues/57527.
  fetchImpl = inject(FetchFactory, {
    optional: true
  })?.fetch ?? ((...args) => globalThis.fetch(...args));
  ngZone = inject(NgZone);
  handle(request) {
    return new Observable((observer) => {
      const aborter = new AbortController();
      this.doRequest(request, aborter.signal, observer).then(noop, (error) => observer.error(new HttpErrorResponse({
        error
      })));
      return () => aborter.abort();
    });
  }
  doRequest(request, signal2, observer) {
    return __async(this, null, function* () {
      const init = this.createRequestInit(request);
      let response;
      try {
        const fetchPromise = this.ngZone.runOutsideAngular(() => this.fetchImpl(request.urlWithParams, __spreadValues({
          signal: signal2
        }, init)));
        silenceSuperfluousUnhandledPromiseRejection(fetchPromise);
        observer.next({
          type: HttpEventType.Sent
        });
        response = yield fetchPromise;
      } catch (error) {
        observer.error(new HttpErrorResponse({
          error,
          status: error.status ?? 0,
          statusText: error.statusText,
          url: request.urlWithParams,
          headers: error.headers
        }));
        return;
      }
      const headers = new HttpHeaders(response.headers);
      const statusText = response.statusText;
      const url = getResponseUrl$1(response) ?? request.urlWithParams;
      let status = response.status;
      let body = null;
      if (request.reportProgress) {
        observer.next(new HttpHeaderResponse({
          headers,
          status,
          statusText,
          url
        }));
      }
      if (response.body) {
        const contentLength = response.headers.get("content-length");
        const chunks = [];
        const reader = response.body.getReader();
        let receivedLength = 0;
        let decoder;
        let partialText;
        const reqZone = typeof Zone !== "undefined" && Zone.current;
        yield this.ngZone.runOutsideAngular(() => __async(this, null, function* () {
          while (true) {
            const {
              done,
              value
            } = yield reader.read();
            if (done) {
              break;
            }
            chunks.push(value);
            receivedLength += value.length;
            if (request.reportProgress) {
              partialText = request.responseType === "text" ? (partialText ?? "") + (decoder ??= new TextDecoder()).decode(value, {
                stream: true
              }) : void 0;
              const reportProgress = () => observer.next({
                type: HttpEventType.DownloadProgress,
                total: contentLength ? +contentLength : void 0,
                loaded: receivedLength,
                partialText
              });
              reqZone ? reqZone.run(reportProgress) : reportProgress();
            }
          }
        }));
        const chunksAll = this.concatChunks(chunks, receivedLength);
        try {
          const contentType = response.headers.get("Content-Type") ?? "";
          body = this.parseBody(request, chunksAll, contentType);
        } catch (error) {
          observer.error(new HttpErrorResponse({
            error,
            headers: new HttpHeaders(response.headers),
            status: response.status,
            statusText: response.statusText,
            url: getResponseUrl$1(response) ?? request.urlWithParams
          }));
          return;
        }
      }
      if (status === 0) {
        status = body ? HTTP_STATUS_CODE_OK : 0;
      }
      const ok = status >= 200 && status < 300;
      if (ok) {
        observer.next(new HttpResponse({
          body,
          headers,
          status,
          statusText,
          url
        }));
        observer.complete();
      } else {
        observer.error(new HttpErrorResponse({
          error: body,
          headers,
          status,
          statusText,
          url
        }));
      }
    });
  }
  parseBody(request, binContent, contentType) {
    switch (request.responseType) {
      case "json":
        const text = new TextDecoder().decode(binContent).replace(XSSI_PREFIX$1, "");
        return text === "" ? null : JSON.parse(text);
      case "text":
        return new TextDecoder().decode(binContent);
      case "blob":
        return new Blob([binContent], {
          type: contentType
        });
      case "arraybuffer":
        return binContent.buffer;
    }
  }
  createRequestInit(req) {
    const headers = {};
    const credentials = req.withCredentials ? "include" : void 0;
    req.headers.forEach((name, values) => headers[name] = values.join(","));
    if (!req.headers.has("Accept")) {
      headers["Accept"] = "application/json, text/plain, */*";
    }
    if (!req.headers.has("Content-Type")) {
      const detectedType = req.detectContentTypeHeader();
      if (detectedType !== null) {
        headers["Content-Type"] = detectedType;
      }
    }
    return {
      body: req.serializeBody(),
      method: req.method,
      headers,
      credentials
    };
  }
  concatChunks(chunks, totalLength) {
    const chunksAll = new Uint8Array(totalLength);
    let position = 0;
    for (const chunk of chunks) {
      chunksAll.set(chunk, position);
      position += chunk.length;
    }
    return chunksAll;
  }
  static \u0275fac = function FetchBackend_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FetchBackend)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _FetchBackend,
    factory: _FetchBackend.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FetchBackend, [{
    type: Injectable
  }], null, null);
})();
var FetchFactory = class {
};
function noop() {
}
function silenceSuperfluousUnhandledPromiseRejection(promise) {
  promise.then(noop, noop);
}
function interceptorChainEndFn(req, finalHandlerFn) {
  return finalHandlerFn(req);
}
function adaptLegacyInterceptorToChain(chainTailFn, interceptor) {
  return (initialRequest, finalHandlerFn) => interceptor.intercept(initialRequest, {
    handle: (downstreamRequest) => chainTailFn(downstreamRequest, finalHandlerFn)
  });
}
function chainedInterceptorFn(chainTailFn, interceptorFn, injector) {
  return (initialRequest, finalHandlerFn) => runInInjectionContext(injector, () => interceptorFn(initialRequest, (downstreamRequest) => chainTailFn(downstreamRequest, finalHandlerFn)));
}
var HTTP_INTERCEPTORS = new InjectionToken(ngDevMode ? "HTTP_INTERCEPTORS" : "");
var HTTP_INTERCEPTOR_FNS = new InjectionToken(ngDevMode ? "HTTP_INTERCEPTOR_FNS" : "");
var HTTP_ROOT_INTERCEPTOR_FNS = new InjectionToken(ngDevMode ? "HTTP_ROOT_INTERCEPTOR_FNS" : "");
var REQUESTS_CONTRIBUTE_TO_STABILITY = new InjectionToken(ngDevMode ? "REQUESTS_CONTRIBUTE_TO_STABILITY" : "", {
  providedIn: "root",
  factory: () => true
});
function legacyInterceptorFnFactory() {
  let chain = null;
  return (req, handler2) => {
    if (chain === null) {
      const interceptors = inject(HTTP_INTERCEPTORS, {
        optional: true
      }) ?? [];
      chain = interceptors.reduceRight(adaptLegacyInterceptorToChain, interceptorChainEndFn);
    }
    const pendingTasks = inject(PendingTasksInternal);
    const contributeToStability = inject(REQUESTS_CONTRIBUTE_TO_STABILITY);
    if (contributeToStability) {
      const taskId = pendingTasks.add();
      return chain(req, handler2).pipe(finalize(() => pendingTasks.remove(taskId)));
    } else {
      return chain(req, handler2);
    }
  };
}
var fetchBackendWarningDisplayed = false;
var HttpInterceptorHandler = class _HttpInterceptorHandler extends HttpHandler {
  backend;
  injector;
  chain = null;
  pendingTasks = inject(PendingTasksInternal);
  contributeToStability = inject(REQUESTS_CONTRIBUTE_TO_STABILITY);
  constructor(backend, injector) {
    super();
    this.backend = backend;
    this.injector = injector;
    if ((typeof ngDevMode === "undefined" || ngDevMode) && !fetchBackendWarningDisplayed) {
      const isServer = isPlatformServer(injector.get(PLATFORM_ID));
      const isTestingBackend = this.backend.isTestingBackend;
      if (isServer && !(this.backend instanceof FetchBackend) && !isTestingBackend) {
        fetchBackendWarningDisplayed = true;
        injector.get(Console).warn(formatRuntimeError(2801, "Angular detected that `HttpClient` is not configured to use `fetch` APIs. It's strongly recommended to enable `fetch` for applications that use Server-Side Rendering for better performance and compatibility. To enable `fetch`, add the `withFetch()` to the `provideHttpClient()` call at the root of the application."));
      }
    }
  }
  handle(initialRequest) {
    if (this.chain === null) {
      const dedupedInterceptorFns = Array.from(/* @__PURE__ */ new Set([...this.injector.get(HTTP_INTERCEPTOR_FNS), ...this.injector.get(HTTP_ROOT_INTERCEPTOR_FNS, [])]));
      this.chain = dedupedInterceptorFns.reduceRight((nextSequencedFn, interceptorFn) => chainedInterceptorFn(nextSequencedFn, interceptorFn, this.injector), interceptorChainEndFn);
    }
    if (this.contributeToStability) {
      const taskId = this.pendingTasks.add();
      return this.chain(initialRequest, (downstreamRequest) => this.backend.handle(downstreamRequest)).pipe(finalize(() => this.pendingTasks.remove(taskId)));
    } else {
      return this.chain(initialRequest, (downstreamRequest) => this.backend.handle(downstreamRequest));
    }
  }
  static \u0275fac = function HttpInterceptorHandler_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HttpInterceptorHandler)(\u0275\u0275inject(HttpBackend), \u0275\u0275inject(EnvironmentInjector));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _HttpInterceptorHandler,
    factory: _HttpInterceptorHandler.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpInterceptorHandler, [{
    type: Injectable
  }], () => [{
    type: HttpBackend
  }, {
    type: EnvironmentInjector
  }], null);
})();
var nextRequestId = 0;
var foreignDocument;
var JSONP_ERR_NO_CALLBACK = "JSONP injected script did not invoke callback.";
var JSONP_ERR_WRONG_METHOD = "JSONP requests must use JSONP request method.";
var JSONP_ERR_WRONG_RESPONSE_TYPE = "JSONP requests must use Json response type.";
var JSONP_ERR_HEADERS_NOT_SUPPORTED = "JSONP requests do not support headers.";
var JsonpCallbackContext = class {
};
function jsonpCallbackContext() {
  if (typeof window === "object") {
    return window;
  }
  return {};
}
var JsonpClientBackend = class _JsonpClientBackend {
  callbackMap;
  document;
  /**
   * A resolved promise that can be used to schedule microtasks in the event handlers.
   */
  resolvedPromise = Promise.resolve();
  constructor(callbackMap, document2) {
    this.callbackMap = callbackMap;
    this.document = document2;
  }
  /**
   * Get the name of the next callback method, by incrementing the global `nextRequestId`.
   */
  nextCallback() {
    return `ng_jsonp_callback_${nextRequestId++}`;
  }
  /**
   * Processes a JSONP request and returns an event stream of the results.
   * @param req The request object.
   * @returns An observable of the response events.
   *
   */
  handle(req) {
    if (req.method !== "JSONP") {
      throw new Error(JSONP_ERR_WRONG_METHOD);
    } else if (req.responseType !== "json") {
      throw new Error(JSONP_ERR_WRONG_RESPONSE_TYPE);
    }
    if (req.headers.keys().length > 0) {
      throw new Error(JSONP_ERR_HEADERS_NOT_SUPPORTED);
    }
    return new Observable((observer) => {
      const callback = this.nextCallback();
      const url = req.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/, `=${callback}$1`);
      const node = this.document.createElement("script");
      node.src = url;
      let body = null;
      let finished = false;
      this.callbackMap[callback] = (data) => {
        delete this.callbackMap[callback];
        body = data;
        finished = true;
      };
      const cleanup = () => {
        node.removeEventListener("load", onLoad);
        node.removeEventListener("error", onError);
        node.remove();
        delete this.callbackMap[callback];
      };
      const onLoad = (event) => {
        this.resolvedPromise.then(() => {
          cleanup();
          if (!finished) {
            observer.error(new HttpErrorResponse({
              url,
              status: 0,
              statusText: "JSONP Error",
              error: new Error(JSONP_ERR_NO_CALLBACK)
            }));
            return;
          }
          observer.next(new HttpResponse({
            body,
            status: HTTP_STATUS_CODE_OK,
            statusText: "OK",
            url
          }));
          observer.complete();
        });
      };
      const onError = (error) => {
        cleanup();
        observer.error(new HttpErrorResponse({
          error,
          status: 0,
          statusText: "JSONP Error",
          url
        }));
      };
      node.addEventListener("load", onLoad);
      node.addEventListener("error", onError);
      this.document.body.appendChild(node);
      observer.next({
        type: HttpEventType.Sent
      });
      return () => {
        if (!finished) {
          this.removeListeners(node);
        }
        cleanup();
      };
    });
  }
  removeListeners(script) {
    foreignDocument ??= this.document.implementation.createHTMLDocument();
    foreignDocument.adoptNode(script);
  }
  static \u0275fac = function JsonpClientBackend_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _JsonpClientBackend)(\u0275\u0275inject(JsonpCallbackContext), \u0275\u0275inject(DOCUMENT));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _JsonpClientBackend,
    factory: _JsonpClientBackend.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JsonpClientBackend, [{
    type: Injectable
  }], () => [{
    type: JsonpCallbackContext
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
function jsonpInterceptorFn(req, next) {
  if (req.method === "JSONP") {
    return inject(JsonpClientBackend).handle(req);
  }
  return next(req);
}
var JsonpInterceptor = class _JsonpInterceptor {
  injector;
  constructor(injector) {
    this.injector = injector;
  }
  /**
   * Identifies and handles a given JSONP request.
   * @param initialRequest The outgoing request object to handle.
   * @param next The next interceptor in the chain, or the backend
   * if no interceptors remain in the chain.
   * @returns An observable of the event stream.
   */
  intercept(initialRequest, next) {
    return runInInjectionContext(this.injector, () => jsonpInterceptorFn(initialRequest, (downstreamRequest) => next.handle(downstreamRequest)));
  }
  static \u0275fac = function JsonpInterceptor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _JsonpInterceptor)(\u0275\u0275inject(EnvironmentInjector));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _JsonpInterceptor,
    factory: _JsonpInterceptor.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JsonpInterceptor, [{
    type: Injectable
  }], () => [{
    type: EnvironmentInjector
  }], null);
})();
var XSSI_PREFIX = /^\)\]\}',?\n/;
function getResponseUrl(xhr) {
  if ("responseURL" in xhr && xhr.responseURL) {
    return xhr.responseURL;
  }
  if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
    return xhr.getResponseHeader("X-Request-URL");
  }
  return null;
}
var HttpXhrBackend = class _HttpXhrBackend {
  xhrFactory;
  constructor(xhrFactory) {
    this.xhrFactory = xhrFactory;
  }
  /**
   * Processes a request and returns a stream of response events.
   * @param req The request object.
   * @returns An observable of the response events.
   */
  handle(req) {
    if (req.method === "JSONP") {
      throw new RuntimeError(-2800, (typeof ngDevMode === "undefined" || ngDevMode) && `Cannot make a JSONP request without JSONP support. To fix the problem, either add the \`withJsonpSupport()\` call (if \`provideHttpClient()\` is used) or import the \`HttpClientJsonpModule\` in the root NgModule.`);
    }
    const xhrFactory = this.xhrFactory;
    const source = xhrFactory.\u0275loadImpl ? from(xhrFactory.\u0275loadImpl()) : of(null);
    return source.pipe(switchMap(() => {
      return new Observable((observer) => {
        const xhr = xhrFactory.build();
        xhr.open(req.method, req.urlWithParams);
        if (req.withCredentials) {
          xhr.withCredentials = true;
        }
        req.headers.forEach((name, values) => xhr.setRequestHeader(name, values.join(",")));
        if (!req.headers.has("Accept")) {
          xhr.setRequestHeader("Accept", "application/json, text/plain, */*");
        }
        if (!req.headers.has("Content-Type")) {
          const detectedType = req.detectContentTypeHeader();
          if (detectedType !== null) {
            xhr.setRequestHeader("Content-Type", detectedType);
          }
        }
        if (req.responseType) {
          const responseType = req.responseType.toLowerCase();
          xhr.responseType = responseType !== "json" ? responseType : "text";
        }
        const reqBody = req.serializeBody();
        let headerResponse = null;
        const partialFromXhr = () => {
          if (headerResponse !== null) {
            return headerResponse;
          }
          const statusText = xhr.statusText || "OK";
          const headers = new HttpHeaders(xhr.getAllResponseHeaders());
          const url = getResponseUrl(xhr) || req.url;
          headerResponse = new HttpHeaderResponse({
            headers,
            status: xhr.status,
            statusText,
            url
          });
          return headerResponse;
        };
        const onLoad = () => {
          let {
            headers,
            status,
            statusText,
            url
          } = partialFromXhr();
          let body = null;
          if (status !== HTTP_STATUS_CODE_NO_CONTENT) {
            body = typeof xhr.response === "undefined" ? xhr.responseText : xhr.response;
          }
          if (status === 0) {
            status = !!body ? HTTP_STATUS_CODE_OK : 0;
          }
          let ok = status >= 200 && status < 300;
          if (req.responseType === "json" && typeof body === "string") {
            const originalBody = body;
            body = body.replace(XSSI_PREFIX, "");
            try {
              body = body !== "" ? JSON.parse(body) : null;
            } catch (error) {
              body = originalBody;
              if (ok) {
                ok = false;
                body = {
                  error,
                  text: body
                };
              }
            }
          }
          if (ok) {
            observer.next(new HttpResponse({
              body,
              headers,
              status,
              statusText,
              url: url || void 0
            }));
            observer.complete();
          } else {
            observer.error(new HttpErrorResponse({
              // The error in this case is the response body (error from the server).
              error: body,
              headers,
              status,
              statusText,
              url: url || void 0
            }));
          }
        };
        const onError = (error) => {
          const {
            url
          } = partialFromXhr();
          const res = new HttpErrorResponse({
            error,
            status: xhr.status || 0,
            statusText: xhr.statusText || "Unknown Error",
            url: url || void 0
          });
          observer.error(res);
        };
        let sentHeaders = false;
        const onDownProgress = (event) => {
          if (!sentHeaders) {
            observer.next(partialFromXhr());
            sentHeaders = true;
          }
          let progressEvent = {
            type: HttpEventType.DownloadProgress,
            loaded: event.loaded
          };
          if (event.lengthComputable) {
            progressEvent.total = event.total;
          }
          if (req.responseType === "text" && !!xhr.responseText) {
            progressEvent.partialText = xhr.responseText;
          }
          observer.next(progressEvent);
        };
        const onUpProgress = (event) => {
          let progress = {
            type: HttpEventType.UploadProgress,
            loaded: event.loaded
          };
          if (event.lengthComputable) {
            progress.total = event.total;
          }
          observer.next(progress);
        };
        xhr.addEventListener("load", onLoad);
        xhr.addEventListener("error", onError);
        xhr.addEventListener("timeout", onError);
        xhr.addEventListener("abort", onError);
        if (req.reportProgress) {
          xhr.addEventListener("progress", onDownProgress);
          if (reqBody !== null && xhr.upload) {
            xhr.upload.addEventListener("progress", onUpProgress);
          }
        }
        xhr.send(reqBody);
        observer.next({
          type: HttpEventType.Sent
        });
        return () => {
          xhr.removeEventListener("error", onError);
          xhr.removeEventListener("abort", onError);
          xhr.removeEventListener("load", onLoad);
          xhr.removeEventListener("timeout", onError);
          if (req.reportProgress) {
            xhr.removeEventListener("progress", onDownProgress);
            if (reqBody !== null && xhr.upload) {
              xhr.upload.removeEventListener("progress", onUpProgress);
            }
          }
          if (xhr.readyState !== xhr.DONE) {
            xhr.abort();
          }
        };
      });
    }));
  }
  static \u0275fac = function HttpXhrBackend_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HttpXhrBackend)(\u0275\u0275inject(XhrFactory));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _HttpXhrBackend,
    factory: _HttpXhrBackend.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpXhrBackend, [{
    type: Injectable
  }], () => [{
    type: XhrFactory
  }], null);
})();
var XSRF_ENABLED = new InjectionToken(ngDevMode ? "XSRF_ENABLED" : "");
var XSRF_DEFAULT_COOKIE_NAME = "XSRF-TOKEN";
var XSRF_COOKIE_NAME = new InjectionToken(ngDevMode ? "XSRF_COOKIE_NAME" : "", {
  providedIn: "root",
  factory: () => XSRF_DEFAULT_COOKIE_NAME
});
var XSRF_DEFAULT_HEADER_NAME = "X-XSRF-TOKEN";
var XSRF_HEADER_NAME = new InjectionToken(ngDevMode ? "XSRF_HEADER_NAME" : "", {
  providedIn: "root",
  factory: () => XSRF_DEFAULT_HEADER_NAME
});
var HttpXsrfTokenExtractor = class {
};
var HttpXsrfCookieExtractor = class _HttpXsrfCookieExtractor {
  doc;
  platform;
  cookieName;
  lastCookieString = "";
  lastToken = null;
  /**
   * @internal for testing
   */
  parseCount = 0;
  constructor(doc, platform, cookieName) {
    this.doc = doc;
    this.platform = platform;
    this.cookieName = cookieName;
  }
  getToken() {
    if (this.platform === "server") {
      return null;
    }
    const cookieString = this.doc.cookie || "";
    if (cookieString !== this.lastCookieString) {
      this.parseCount++;
      this.lastToken = parseCookieValue(cookieString, this.cookieName);
      this.lastCookieString = cookieString;
    }
    return this.lastToken;
  }
  static \u0275fac = function HttpXsrfCookieExtractor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HttpXsrfCookieExtractor)(\u0275\u0275inject(DOCUMENT), \u0275\u0275inject(PLATFORM_ID), \u0275\u0275inject(XSRF_COOKIE_NAME));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _HttpXsrfCookieExtractor,
    factory: _HttpXsrfCookieExtractor.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpXsrfCookieExtractor, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [XSRF_COOKIE_NAME]
    }]
  }], null);
})();
function xsrfInterceptorFn(req, next) {
  const lcUrl = req.url.toLowerCase();
  if (!inject(XSRF_ENABLED) || req.method === "GET" || req.method === "HEAD" || lcUrl.startsWith("http://") || lcUrl.startsWith("https://")) {
    return next(req);
  }
  const token = inject(HttpXsrfTokenExtractor).getToken();
  const headerName = inject(XSRF_HEADER_NAME);
  if (token != null && !req.headers.has(headerName)) {
    req = req.clone({
      headers: req.headers.set(headerName, token)
    });
  }
  return next(req);
}
var HttpXsrfInterceptor = class _HttpXsrfInterceptor {
  injector;
  constructor(injector) {
    this.injector = injector;
  }
  intercept(initialRequest, next) {
    return runInInjectionContext(this.injector, () => xsrfInterceptorFn(initialRequest, (downstreamRequest) => next.handle(downstreamRequest)));
  }
  static \u0275fac = function HttpXsrfInterceptor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HttpXsrfInterceptor)(\u0275\u0275inject(EnvironmentInjector));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _HttpXsrfInterceptor,
    factory: _HttpXsrfInterceptor.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpXsrfInterceptor, [{
    type: Injectable
  }], () => [{
    type: EnvironmentInjector
  }], null);
})();
var HttpFeatureKind;
(function(HttpFeatureKind2) {
  HttpFeatureKind2[HttpFeatureKind2["Interceptors"] = 0] = "Interceptors";
  HttpFeatureKind2[HttpFeatureKind2["LegacyInterceptors"] = 1] = "LegacyInterceptors";
  HttpFeatureKind2[HttpFeatureKind2["CustomXsrfConfiguration"] = 2] = "CustomXsrfConfiguration";
  HttpFeatureKind2[HttpFeatureKind2["NoXsrfProtection"] = 3] = "NoXsrfProtection";
  HttpFeatureKind2[HttpFeatureKind2["JsonpSupport"] = 4] = "JsonpSupport";
  HttpFeatureKind2[HttpFeatureKind2["RequestsMadeViaParent"] = 5] = "RequestsMadeViaParent";
  HttpFeatureKind2[HttpFeatureKind2["Fetch"] = 6] = "Fetch";
})(HttpFeatureKind || (HttpFeatureKind = {}));
function makeHttpFeature(kind, providers) {
  return {
    \u0275kind: kind,
    \u0275providers: providers
  };
}
function provideHttpClient(...features) {
  if (ngDevMode) {
    const featureKinds = new Set(features.map((f) => f.\u0275kind));
    if (featureKinds.has(HttpFeatureKind.NoXsrfProtection) && featureKinds.has(HttpFeatureKind.CustomXsrfConfiguration)) {
      throw new Error(ngDevMode ? `Configuration error: found both withXsrfConfiguration() and withNoXsrfProtection() in the same call to provideHttpClient(), which is a contradiction.` : "");
    }
  }
  const providers = [HttpClient, HttpXhrBackend, HttpInterceptorHandler, {
    provide: HttpHandler,
    useExisting: HttpInterceptorHandler
  }, {
    provide: HttpBackend,
    useFactory: () => {
      return inject(FetchBackend, {
        optional: true
      }) ?? inject(HttpXhrBackend);
    }
  }, {
    provide: HTTP_INTERCEPTOR_FNS,
    useValue: xsrfInterceptorFn,
    multi: true
  }, {
    provide: XSRF_ENABLED,
    useValue: true
  }, {
    provide: HttpXsrfTokenExtractor,
    useClass: HttpXsrfCookieExtractor
  }];
  for (const feature of features) {
    providers.push(...feature.\u0275providers);
  }
  return makeEnvironmentProviders(providers);
}
function withInterceptors(interceptorFns) {
  return makeHttpFeature(HttpFeatureKind.Interceptors, interceptorFns.map((interceptorFn) => {
    return {
      provide: HTTP_INTERCEPTOR_FNS,
      useValue: interceptorFn,
      multi: true
    };
  }));
}
var LEGACY_INTERCEPTOR_FN = new InjectionToken(ngDevMode ? "LEGACY_INTERCEPTOR_FN" : "");
function withInterceptorsFromDi() {
  return makeHttpFeature(HttpFeatureKind.LegacyInterceptors, [{
    provide: LEGACY_INTERCEPTOR_FN,
    useFactory: legacyInterceptorFnFactory
  }, {
    provide: HTTP_INTERCEPTOR_FNS,
    useExisting: LEGACY_INTERCEPTOR_FN,
    multi: true
  }]);
}
function withXsrfConfiguration({
  cookieName,
  headerName
}) {
  const providers = [];
  if (cookieName !== void 0) {
    providers.push({
      provide: XSRF_COOKIE_NAME,
      useValue: cookieName
    });
  }
  if (headerName !== void 0) {
    providers.push({
      provide: XSRF_HEADER_NAME,
      useValue: headerName
    });
  }
  return makeHttpFeature(HttpFeatureKind.CustomXsrfConfiguration, providers);
}
function withNoXsrfProtection() {
  return makeHttpFeature(HttpFeatureKind.NoXsrfProtection, [{
    provide: XSRF_ENABLED,
    useValue: false
  }]);
}
function withJsonpSupport() {
  return makeHttpFeature(HttpFeatureKind.JsonpSupport, [JsonpClientBackend, {
    provide: JsonpCallbackContext,
    useFactory: jsonpCallbackContext
  }, {
    provide: HTTP_INTERCEPTOR_FNS,
    useValue: jsonpInterceptorFn,
    multi: true
  }]);
}
var HttpClientXsrfModule = class _HttpClientXsrfModule {
  /**
   * Disable the default XSRF protection.
   */
  static disable() {
    return {
      ngModule: _HttpClientXsrfModule,
      providers: [withNoXsrfProtection().\u0275providers]
    };
  }
  /**
   * Configure XSRF protection.
   * @param options An object that can specify either or both
   * cookie name or header name.
   * - Cookie name default is `XSRF-TOKEN`.
   * - Header name default is `X-XSRF-TOKEN`.
   *
   */
  static withOptions(options = {}) {
    return {
      ngModule: _HttpClientXsrfModule,
      providers: withXsrfConfiguration(options).\u0275providers
    };
  }
  static \u0275fac = function HttpClientXsrfModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HttpClientXsrfModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _HttpClientXsrfModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [HttpXsrfInterceptor, {
      provide: HTTP_INTERCEPTORS,
      useExisting: HttpXsrfInterceptor,
      multi: true
    }, {
      provide: HttpXsrfTokenExtractor,
      useClass: HttpXsrfCookieExtractor
    }, withXsrfConfiguration({
      cookieName: XSRF_DEFAULT_COOKIE_NAME,
      headerName: XSRF_DEFAULT_HEADER_NAME
    }).\u0275providers, {
      provide: XSRF_ENABLED,
      useValue: true
    }]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpClientXsrfModule, [{
    type: NgModule,
    args: [{
      providers: [HttpXsrfInterceptor, {
        provide: HTTP_INTERCEPTORS,
        useExisting: HttpXsrfInterceptor,
        multi: true
      }, {
        provide: HttpXsrfTokenExtractor,
        useClass: HttpXsrfCookieExtractor
      }, withXsrfConfiguration({
        cookieName: XSRF_DEFAULT_COOKIE_NAME,
        headerName: XSRF_DEFAULT_HEADER_NAME
      }).\u0275providers, {
        provide: XSRF_ENABLED,
        useValue: true
      }]
    }]
  }], null, null);
})();
var HttpClientModule = class _HttpClientModule {
  static \u0275fac = function HttpClientModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HttpClientModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _HttpClientModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [provideHttpClient(withInterceptorsFromDi())]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpClientModule, [{
    type: NgModule,
    args: [{
      /**
       * Configures the dependency injector where it is imported
       * with supporting services for HTTP communications.
       */
      providers: [provideHttpClient(withInterceptorsFromDi())]
    }]
  }], null, null);
})();
var HttpClientJsonpModule = class _HttpClientJsonpModule {
  static \u0275fac = function HttpClientJsonpModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HttpClientJsonpModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _HttpClientJsonpModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [withJsonpSupport().\u0275providers]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpClientJsonpModule, [{
    type: NgModule,
    args: [{
      providers: [withJsonpSupport().\u0275providers]
    }]
  }], null, null);
})();
var HTTP_TRANSFER_CACHE_ORIGIN_MAP = new InjectionToken(ngDevMode ? "HTTP_TRANSFER_CACHE_ORIGIN_MAP" : "");
var CACHE_OPTIONS = new InjectionToken(ngDevMode ? "HTTP_TRANSFER_STATE_CACHE_OPTIONS" : "");

// node_modules/@primeuix/utils/dom/index.mjs
function hasClass(element, className) {
  if (element) {
    if (element.classList) return element.classList.contains(className);
    else return new RegExp("(^| )" + className + "( |$)", "gi").test(element.className);
  }
  return false;
}
function addClass(element, className) {
  if (element && className) {
    const fn = (_className) => {
      if (!hasClass(element, _className)) {
        if (element.classList) element.classList.add(_className);
        else element.className += " " + _className;
      }
    };
    [className].flat().filter(Boolean).forEach((_classNames) => _classNames.split(" ").forEach(fn));
  }
}
function calculateBodyScrollbarWidth() {
  return window.innerWidth - document.documentElement.offsetWidth;
}
function getCSSVariableByRegex(variableRegex) {
  for (const sheet of document == null ? void 0 : document.styleSheets) {
    try {
      for (const rule of sheet == null ? void 0 : sheet.cssRules) {
        for (const property of rule == null ? void 0 : rule.style) {
          if (variableRegex.test(property)) {
            return {
              name: property,
              value: rule.style.getPropertyValue(property).trim()
            };
          }
        }
      }
    } catch (e) {
    }
  }
  return null;
}
function blockBodyScroll(className = "p-overflow-hidden") {
  const variableData = getCSSVariableByRegex(/-scrollbar-width$/);
  (variableData == null ? void 0 : variableData.name) && document.body.style.setProperty(variableData.name, calculateBodyScrollbarWidth() + "px");
  addClass(document.body, className);
}
function removeClass(element, className) {
  if (element && className) {
    const fn = (_className) => {
      if (element.classList) element.classList.remove(_className);
      else element.className = element.className.replace(new RegExp("(^|\\b)" + _className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    };
    [className].flat().filter(Boolean).forEach((_classNames) => _classNames.split(" ").forEach(fn));
  }
}
function unblockBodyScroll(className = "p-overflow-hidden") {
  const variableData = getCSSVariableByRegex(/-scrollbar-width$/);
  (variableData == null ? void 0 : variableData.name) && document.body.style.removeProperty(variableData.name);
  removeClass(document.body, className);
}
function getHiddenElementDimensions(element) {
  let dimensions = {
    width: 0,
    height: 0
  };
  if (element) {
    element.style.visibility = "hidden";
    element.style.display = "block";
    dimensions.width = element.offsetWidth;
    dimensions.height = element.offsetHeight;
    element.style.display = "none";
    element.style.visibility = "visible";
  }
  return dimensions;
}
function getViewport() {
  let win = window, d = document, e = d.documentElement, g = d.getElementsByTagName("body")[0], w = win.innerWidth || e.clientWidth || g.clientWidth, h = win.innerHeight || e.clientHeight || g.clientHeight;
  return {
    width: w,
    height: h
  };
}
function getWindowScrollLeft() {
  let doc = document.documentElement;
  return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
}
function getWindowScrollTop() {
  let doc = document.documentElement;
  return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
}
function absolutePosition(element, target, gutter = true) {
  var _a, _b, _c, _d;
  if (element) {
    const elementDimensions = element.offsetParent ? {
      width: element.offsetWidth,
      height: element.offsetHeight
    } : getHiddenElementDimensions(element);
    const elementOuterHeight = elementDimensions.height;
    const elementOuterWidth = elementDimensions.width;
    const targetOuterHeight = target.offsetHeight;
    const targetOuterWidth = target.offsetWidth;
    const targetOffset = target.getBoundingClientRect();
    const windowScrollTop = getWindowScrollTop();
    const windowScrollLeft = getWindowScrollLeft();
    const viewport = getViewport();
    let top, left, origin2 = "top";
    if (targetOffset.top + targetOuterHeight + elementOuterHeight > viewport.height) {
      top = targetOffset.top + windowScrollTop - elementOuterHeight;
      origin2 = "bottom";
      if (top < 0) {
        top = windowScrollTop;
      }
    } else {
      top = targetOuterHeight + targetOffset.top + windowScrollTop;
    }
    if (targetOffset.left + elementOuterWidth > viewport.width) left = Math.max(0, targetOffset.left + windowScrollLeft + targetOuterWidth - elementOuterWidth);
    else left = targetOffset.left + windowScrollLeft;
    element.style.top = top + "px";
    element.style.left = left + "px";
    element.style.transformOrigin = origin2;
    gutter && (element.style.marginTop = origin2 === "bottom" ? `calc(${(_b = (_a = getCSSVariableByRegex(/-anchor-gutter$/)) == null ? void 0 : _a.value) != null ? _b : "2px"} * -1)` : (_d = (_c = getCSSVariableByRegex(/-anchor-gutter$/)) == null ? void 0 : _c.value) != null ? _d : "");
  }
}
function addStyle(element, style2) {
  if (element) {
    if (typeof style2 === "string") {
      element.style.cssText = style2;
    } else {
      Object.entries(style2 || {}).forEach(([key, value]) => element.style[key] = value);
    }
  }
}
function getOuterWidth(element, margin) {
  if (element instanceof HTMLElement) {
    let width = element.offsetWidth;
    if (margin) {
      let style2 = getComputedStyle(element);
      width += parseFloat(style2.marginLeft) + parseFloat(style2.marginRight);
    }
    return width;
  }
  return 0;
}
function relativePosition(element, target, gutter = true) {
  var _a, _b, _c, _d;
  if (element) {
    const elementDimensions = element.offsetParent ? {
      width: element.offsetWidth,
      height: element.offsetHeight
    } : getHiddenElementDimensions(element);
    const targetHeight = target.offsetHeight;
    const targetOffset = target.getBoundingClientRect();
    const viewport = getViewport();
    let top, left, origin2 = "top";
    if (targetOffset.top + targetHeight + elementDimensions.height > viewport.height) {
      top = -1 * elementDimensions.height;
      origin2 = "bottom";
      if (targetOffset.top + top < 0) {
        top = -1 * targetOffset.top;
      }
    } else {
      top = targetHeight;
    }
    if (elementDimensions.width > viewport.width) {
      left = targetOffset.left * -1;
    } else if (targetOffset.left + elementDimensions.width > viewport.width) {
      left = (targetOffset.left + elementDimensions.width - viewport.width) * -1;
    } else {
      left = 0;
    }
    element.style.top = top + "px";
    element.style.left = left + "px";
    element.style.transformOrigin = origin2;
    gutter && (element.style.marginTop = origin2 === "bottom" ? `calc(${(_b = (_a = getCSSVariableByRegex(/-anchor-gutter$/)) == null ? void 0 : _a.value) != null ? _b : "2px"} * -1)` : (_d = (_c = getCSSVariableByRegex(/-anchor-gutter$/)) == null ? void 0 : _c.value) != null ? _d : "");
  }
}
function isElement(element) {
  return typeof HTMLElement === "object" ? element instanceof HTMLElement : element && typeof element === "object" && element !== null && element.nodeType === 1 && typeof element.nodeName === "string";
}
function toElement(element) {
  let target = element;
  if (element && typeof element === "object") {
    if (element.hasOwnProperty("current")) {
      target = element.current;
    } else if (element.hasOwnProperty("el")) {
      if (element.el.hasOwnProperty("nativeElement")) {
        target = element.el.nativeElement;
      } else {
        target = element.el;
      }
    }
  }
  return isElement(target) ? target : void 0;
}
function appendChild(element, child) {
  const target = toElement(element);
  if (target) target.appendChild(child);
  else throw new Error("Cannot append " + child + " to " + element);
}
function setAttributes(element, attributes = {}) {
  if (isElement(element)) {
    const computedStyles = (rule, value) => {
      var _a, _b;
      const styles = ((_a = element == null ? void 0 : element.$attrs) == null ? void 0 : _a[rule]) ? [(_b = element == null ? void 0 : element.$attrs) == null ? void 0 : _b[rule]] : [];
      return [value].flat().reduce((cv, v) => {
        if (v !== null && v !== void 0) {
          const type = typeof v;
          if (type === "string" || type === "number") {
            cv.push(v);
          } else if (type === "object") {
            const _cv = Array.isArray(v) ? computedStyles(rule, v) : Object.entries(v).map(([_k, _v]) => rule === "style" && (!!_v || _v === 0) ? `${_k.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${_v}` : !!_v ? _k : void 0);
            cv = _cv.length ? cv.concat(_cv.filter((c) => !!c)) : cv;
          }
        }
        return cv;
      }, styles);
    };
    Object.entries(attributes).forEach(([key, value]) => {
      if (value !== void 0 && value !== null) {
        const matchedEvent = key.match(/^on(.+)/);
        if (matchedEvent) {
          element.addEventListener(matchedEvent[1].toLowerCase(), value);
        } else if (key === "p-bind" || key === "pBind") {
          setAttributes(element, value);
        } else {
          value = key === "class" ? [...new Set(computedStyles("class", value))].join(" ").trim() : key === "style" ? computedStyles("style", value).join(";").trim() : value;
          (element.$attrs = element.$attrs || {}) && (element.$attrs[key] = value);
          element.setAttribute(key, value);
        }
      }
    });
  }
}
function createElement(type, attributes = {}, ...children) {
  if (type) {
    const element = document.createElement(type);
    setAttributes(element, attributes);
    element.append(...children);
    return element;
  }
  return void 0;
}
function fadeIn(element, duration) {
  if (element) {
    element.style.opacity = "0";
    let last = +/* @__PURE__ */ new Date();
    let opacity = "0";
    let tick = function() {
      opacity = `${+element.style.opacity + ((/* @__PURE__ */ new Date()).getTime() - last) / duration}`;
      element.style.opacity = opacity;
      last = +/* @__PURE__ */ new Date();
      if (+opacity < 1) {
        !!window.requestAnimationFrame && requestAnimationFrame(tick) || setTimeout(tick, 16);
      }
    };
    tick();
  }
}
function find(element, selector) {
  return isElement(element) ? Array.from(element.querySelectorAll(selector)) : [];
}
function findSingle(element, selector) {
  return isElement(element) ? element.matches(selector) ? element : element.querySelector(selector) : null;
}
function focus(element, options) {
  element && document.activeElement !== element && element.focus(options);
}
function getFocusableElements(element, selector = "") {
  let focusableElements = find(element, `button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
            [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector}`);
  let visibleFocusableElements = [];
  for (let focusableElement of focusableElements) {
    if (getComputedStyle(focusableElement).display != "none" && getComputedStyle(focusableElement).visibility != "hidden") visibleFocusableElements.push(focusableElement);
  }
  return visibleFocusableElements;
}
function getFirstFocusableElement(element, selector) {
  const focusableElements = getFocusableElements(element, selector);
  return focusableElements.length > 0 ? focusableElements[0] : null;
}
function getHeight(element) {
  if (element) {
    let height = element.offsetHeight;
    let style2 = getComputedStyle(element);
    height -= parseFloat(style2.paddingTop) + parseFloat(style2.paddingBottom) + parseFloat(style2.borderTopWidth) + parseFloat(style2.borderBottomWidth);
    return height;
  }
  return 0;
}
function getParentNode(element) {
  if (element) {
    let parent = element.parentNode;
    if (parent && parent instanceof ShadowRoot && parent.host) {
      parent = parent.host;
    }
    return parent;
  }
  return null;
}
function getIndex(element) {
  var _a;
  if (element) {
    let children = (_a = getParentNode(element)) == null ? void 0 : _a.childNodes;
    let num = 0;
    if (children) {
      for (let i = 0; i < children.length; i++) {
        if (children[i] === element) return num;
        if (children[i].nodeType === 1) num++;
      }
    }
  }
  return -1;
}
function getLastFocusableElement(element, selector) {
  const focusableElements = getFocusableElements(element, selector);
  return focusableElements.length > 0 ? focusableElements[focusableElements.length - 1] : null;
}
function getOffset(element) {
  if (element) {
    let rect = element.getBoundingClientRect();
    return {
      top: rect.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
      left: rect.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0)
    };
  }
  return {
    top: "auto",
    left: "auto"
  };
}
function getOuterHeight(element, margin) {
  if (element) {
    let height = element.offsetHeight;
    if (margin) {
      let style2 = getComputedStyle(element);
      height += parseFloat(style2.marginTop) + parseFloat(style2.marginBottom);
    }
    return height;
  }
  return 0;
}
function getSelection() {
  if (window.getSelection) return window.getSelection().toString();
  else if (document.getSelection) return document.getSelection().toString();
  return void 0;
}
function isExist(element) {
  return !!(element !== null && typeof element !== "undefined" && element.nodeName && getParentNode(element));
}
function getTargetElement(target, currentElement) {
  var _a;
  if (!target) return void 0;
  switch (target) {
    case "document":
      return document;
    case "window":
      return window;
    case "body":
      return document.body;
    case "@next":
      return currentElement == null ? void 0 : currentElement.nextElementSibling;
    case "@prev":
      return currentElement == null ? void 0 : currentElement.previousElementSibling;
    case "@parent":
      return currentElement == null ? void 0 : currentElement.parentElement;
    case "@grandparent":
      return (_a = currentElement == null ? void 0 : currentElement.parentElement) == null ? void 0 : _a.parentElement;
    default:
      if (typeof target === "string") {
        return document.querySelector(target);
      }
      const isFunction2 = (obj) => !!(obj && obj.constructor && obj.call && obj.apply);
      const element = toElement(isFunction2(target) ? target() : target);
      return (element == null ? void 0 : element.nodeType) === 9 || isExist(element) ? element : void 0;
  }
}
function getWidth(element) {
  if (element) {
    let width = element.offsetWidth;
    let style2 = getComputedStyle(element);
    width -= parseFloat(style2.paddingLeft) + parseFloat(style2.paddingRight) + parseFloat(style2.borderLeftWidth) + parseFloat(style2.borderRightWidth);
    return width;
  }
  return 0;
}
function isVisible(element) {
  return !!(element && element.offsetParent != null);
}
function isHidden(element) {
  return !isVisible(element);
}
function isTouchDevice() {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}
function remove(element) {
  var _a;
  if (element) {
    if (!("remove" in Element.prototype)) (_a = element.parentNode) == null ? void 0 : _a.removeChild(element);
    else element.remove();
  }
}
function removeChild(element, child) {
  const target = toElement(element);
  if (target) target.removeChild(child);
  else throw new Error("Cannot remove " + child + " from " + element);
}
function scrollInView(container, item) {
  let borderTopValue = getComputedStyle(container).getPropertyValue("borderTopWidth");
  let borderTop = borderTopValue ? parseFloat(borderTopValue) : 0;
  let paddingTopValue = getComputedStyle(container).getPropertyValue("paddingTop");
  let paddingTop = paddingTopValue ? parseFloat(paddingTopValue) : 0;
  let containerRect = container.getBoundingClientRect();
  let itemRect = item.getBoundingClientRect();
  let offset = itemRect.top + document.body.scrollTop - (containerRect.top + document.body.scrollTop) - borderTop - paddingTop;
  let scroll = container.scrollTop;
  let elementHeight = container.clientHeight;
  let itemHeight = getOuterHeight(item);
  if (offset < 0) {
    container.scrollTop = scroll + offset;
  } else if (offset + itemHeight > elementHeight) {
    container.scrollTop = scroll + offset - elementHeight + itemHeight;
  }
}
function setAttribute(element, attribute = "", value) {
  if (isElement(element) && value !== null && value !== void 0) {
    element.setAttribute(attribute, value);
  }
}

// node_modules/@primeuix/utils/eventbus/index.mjs
function EventBus() {
  const allHandlers = /* @__PURE__ */ new Map();
  return {
    on(type, handler2) {
      let handlers = allHandlers.get(type);
      if (!handlers) handlers = [handler2];
      else handlers.push(handler2);
      allHandlers.set(type, handlers);
      return this;
    },
    off(type, handler2) {
      let handlers = allHandlers.get(type);
      if (handlers) {
        handlers.splice(handlers.indexOf(handler2) >>> 0, 1);
      }
      return this;
    },
    emit(type, evt) {
      let handlers = allHandlers.get(type);
      if (handlers) {
        handlers.slice().map((handler2) => {
          handler2(evt);
        });
      }
    },
    clear() {
      allHandlers.clear();
    }
  };
}

// node_modules/@primeuix/utils/object/index.mjs
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
  enumerable: true,
  configurable: true,
  writable: true,
  value
}) : obj[key] = value;
var __spreadValues2 = (a, b) => {
  for (var prop in b || (b = {})) if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols) for (var prop of __getOwnPropSymbols(b)) {
    if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
  }
  return a;
};
function isEmpty(value) {
  return value === null || value === void 0 || value === "" || Array.isArray(value) && value.length === 0 || !(value instanceof Date) && typeof value === "object" && Object.keys(value).length === 0;
}
function _deepEquals(obj1, obj2, visited = /* @__PURE__ */ new WeakSet()) {
  if (obj1 === obj2) return true;
  if (!obj1 || !obj2 || typeof obj1 !== "object" || typeof obj2 !== "object") return false;
  if (visited.has(obj1) || visited.has(obj2)) return false;
  visited.add(obj1).add(obj2);
  let arrObj1 = Array.isArray(obj1), arrObj2 = Array.isArray(obj2), i, length, key;
  if (arrObj1 && arrObj2) {
    length = obj1.length;
    if (length != obj2.length) return false;
    for (i = length; i-- !== 0; ) if (!_deepEquals(obj1[i], obj2[i], visited)) return false;
    return true;
  }
  if (arrObj1 != arrObj2) return false;
  let dateObj1 = obj1 instanceof Date, dateObj2 = obj2 instanceof Date;
  if (dateObj1 != dateObj2) return false;
  if (dateObj1 && dateObj2) return obj1.getTime() == obj2.getTime();
  let regexpObj1 = obj1 instanceof RegExp, regexpObj2 = obj2 instanceof RegExp;
  if (regexpObj1 != regexpObj2) return false;
  if (regexpObj1 && regexpObj2) return obj1.toString() == obj2.toString();
  let keys = Object.keys(obj1);
  length = keys.length;
  if (length !== Object.keys(obj2).length) return false;
  for (i = length; i-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(obj2, keys[i])) return false;
  for (i = length; i-- !== 0; ) {
    key = keys[i];
    if (!_deepEquals(obj1[key], obj2[key], visited)) return false;
  }
  return true;
}
function deepEquals(obj1, obj2) {
  return _deepEquals(obj1, obj2);
}
function isFunction(value) {
  return !!(value && value.constructor && value.call && value.apply);
}
function isNotEmpty(value) {
  return !isEmpty(value);
}
function resolveFieldData(data, field) {
  if (!data || !field) {
    return null;
  }
  try {
    const value = data[field];
    if (isNotEmpty(value)) return value;
  } catch (e) {
  }
  if (Object.keys(data).length) {
    if (isFunction(field)) {
      return field(data);
    } else if (field.indexOf(".") === -1) {
      return data[field];
    } else {
      let fields = field.split(".");
      let value = data;
      for (let i = 0, len = fields.length; i < len; ++i) {
        if (value == null) {
          return null;
        }
        value = value[fields[i]];
      }
      return value;
    }
  }
  return null;
}
function equals(obj1, obj2, field) {
  if (field) return resolveFieldData(obj1, field) === resolveFieldData(obj2, field);
  else return deepEquals(obj1, obj2);
}
function contains(value, list) {
  if (value != null && list && list.length) {
    for (let val of list) {
      if (equals(value, val)) return true;
    }
  }
  return false;
}
function findLastIndex(arr, callback) {
  let index = -1;
  if (isNotEmpty(arr)) {
    try {
      index = arr.findLastIndex(callback);
    } catch (e) {
      index = arr.lastIndexOf([...arr].reverse().find(callback));
    }
  }
  return index;
}
function isObject(value, empty = true) {
  return value instanceof Object && value.constructor === Object && (empty || Object.keys(value).length !== 0);
}
function resolve(obj, ...params) {
  return isFunction(obj) ? obj(...params) : obj;
}
function isString(value, empty = true) {
  return typeof value === "string" && (empty || value !== "");
}
function toFlatCase(str) {
  return isString(str) ? str.replace(/(-|_)/g, "").toLowerCase() : str;
}
function getKeyValue(obj, key = "", params = {}) {
  const fKeys = toFlatCase(key).split(".");
  const fKey = fKeys.shift();
  return fKey ? isObject(obj) ? getKeyValue(resolve(obj[Object.keys(obj).find((k) => toFlatCase(k) === fKey) || ""], params), fKeys.join("."), params) : void 0 : resolve(obj, params);
}
function isArray(value, empty = true) {
  return Array.isArray(value) && (empty || value.length !== 0);
}
function isDate(value) {
  return value instanceof Date && value.constructor === Date;
}
function isNumber(value) {
  return isNotEmpty(value) && !isNaN(value);
}
function isPrintableCharacter(char = "") {
  return isNotEmpty(char) && char.length === 1 && !!char.match(/\S| /);
}
function matchRegex(str, regex) {
  if (regex) {
    const match = regex.test(str);
    regex.lastIndex = 0;
    return match;
  }
  return false;
}
function mergeKeys(...args) {
  const _mergeKeys = (target = {}, source = {}) => {
    const mergedObj = __spreadValues2({}, target);
    Object.keys(source).forEach((key) => {
      if (isObject(source[key]) && key in target && isObject(target[key])) {
        mergedObj[key] = _mergeKeys(target[key], source[key]);
      } else {
        mergedObj[key] = source[key];
      }
    });
    return mergedObj;
  };
  return args.reduce((acc, obj, i) => i === 0 ? obj : _mergeKeys(acc, obj), {});
}
function minifyCSS(css3) {
  return css3 ? css3.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!").replace(/: /g, ":") : css3;
}
function removeAccents(str) {
  const accentCheckRegex = /[\xC0-\xFF\u0100-\u017E]/;
  if (str && accentCheckRegex.test(str)) {
    const accentsMap = {
      A: /[\xC0-\xC5\u0100\u0102\u0104]/g,
      AE: /[\xC6]/g,
      C: /[\xC7\u0106\u0108\u010A\u010C]/g,
      D: /[\xD0\u010E\u0110]/g,
      E: /[\xC8-\xCB\u0112\u0114\u0116\u0118\u011A]/g,
      G: /[\u011C\u011E\u0120\u0122]/g,
      H: /[\u0124\u0126]/g,
      I: /[\xCC-\xCF\u0128\u012A\u012C\u012E\u0130]/g,
      IJ: /[\u0132]/g,
      J: /[\u0134]/g,
      K: /[\u0136]/g,
      L: /[\u0139\u013B\u013D\u013F\u0141]/g,
      N: /[\xD1\u0143\u0145\u0147\u014A]/g,
      O: /[\xD2-\xD6\xD8\u014C\u014E\u0150]/g,
      OE: /[\u0152]/g,
      R: /[\u0154\u0156\u0158]/g,
      S: /[\u015A\u015C\u015E\u0160]/g,
      T: /[\u0162\u0164\u0166]/g,
      U: /[\xD9-\xDC\u0168\u016A\u016C\u016E\u0170\u0172]/g,
      W: /[\u0174]/g,
      Y: /[\xDD\u0176\u0178]/g,
      Z: /[\u0179\u017B\u017D]/g,
      a: /[\xE0-\xE5\u0101\u0103\u0105]/g,
      ae: /[\xE6]/g,
      c: /[\xE7\u0107\u0109\u010B\u010D]/g,
      d: /[\u010F\u0111]/g,
      e: /[\xE8-\xEB\u0113\u0115\u0117\u0119\u011B]/g,
      g: /[\u011D\u011F\u0121\u0123]/g,
      i: /[\xEC-\xEF\u0129\u012B\u012D\u012F\u0131]/g,
      ij: /[\u0133]/g,
      j: /[\u0135]/g,
      k: /[\u0137,\u0138]/g,
      l: /[\u013A\u013C\u013E\u0140\u0142]/g,
      n: /[\xF1\u0144\u0146\u0148\u014B]/g,
      p: /[\xFE]/g,
      o: /[\xF2-\xF6\xF8\u014D\u014F\u0151]/g,
      oe: /[\u0153]/g,
      r: /[\u0155\u0157\u0159]/g,
      s: /[\u015B\u015D\u015F\u0161]/g,
      t: /[\u0163\u0165\u0167]/g,
      u: /[\xF9-\xFC\u0169\u016B\u016D\u016F\u0171\u0173]/g,
      w: /[\u0175]/g,
      y: /[\xFD\xFF\u0177]/g,
      z: /[\u017A\u017C\u017E]/g
    };
    for (let key in accentsMap) {
      str = str.replace(accentsMap[key], key);
    }
  }
  return str;
}
function toKebabCase(str) {
  return isString(str) ? str.replace(/(_)/g, "-").replace(/[A-Z]/g, (c, i) => i === 0 ? c : "-" + c.toLowerCase()).toLowerCase() : str;
}
function toTokenKey(str) {
  return isString(str) ? str.replace(/[A-Z]/g, (c, i) => i === 0 ? c : "." + c.toLowerCase()).toLowerCase() : str;
}

// node_modules/@primeuix/utils/uuid/index.mjs
var lastIds = {};
function uuid(prefix = "pui_id_") {
  if (!lastIds.hasOwnProperty(prefix)) {
    lastIds[prefix] = 0;
  }
  lastIds[prefix]++;
  return `${prefix}${lastIds[prefix]}`;
}

// node_modules/@primeuix/utils/zindex/index.mjs
function handler() {
  let zIndexes = [];
  const generateZIndex = (key, autoZIndex, baseZIndex = 999) => {
    const lastZIndex = getLastZIndex(key, autoZIndex, baseZIndex);
    const newZIndex = lastZIndex.value + (lastZIndex.key === key ? 0 : baseZIndex) + 1;
    zIndexes.push({
      key,
      value: newZIndex
    });
    return newZIndex;
  };
  const revertZIndex = (zIndex) => {
    zIndexes = zIndexes.filter((obj) => obj.value !== zIndex);
  };
  const getCurrentZIndex = (key, autoZIndex) => {
    return getLastZIndex(key, autoZIndex).value;
  };
  const getLastZIndex = (key, autoZIndex, baseZIndex = 0) => {
    return [...zIndexes].reverse().find((obj) => autoZIndex ? true : obj.key === key) || {
      key,
      value: baseZIndex
    };
  };
  const getZIndex = (element) => {
    return element ? parseInt(element.style.zIndex, 10) || 0 : 0;
  };
  return {
    get: getZIndex,
    set: (key, element, baseZIndex) => {
      if (element) {
        element.style.zIndex = String(generateZIndex(key, true, baseZIndex));
      }
    },
    clear: (element) => {
      if (element) {
        revertZIndex(getZIndex(element));
        element.style.zIndex = "";
      }
    },
    getCurrent: (key) => getCurrentZIndex(key, true)
  };
}
var ZIndex = handler();

// node_modules/primeng/fesm2022/primeng-api.mjs
var ConfirmEventType;
(function(ConfirmEventType2) {
  ConfirmEventType2[ConfirmEventType2["ACCEPT"] = 0] = "ACCEPT";
  ConfirmEventType2[ConfirmEventType2["REJECT"] = 1] = "REJECT";
  ConfirmEventType2[ConfirmEventType2["CANCEL"] = 2] = "CANCEL";
})(ConfirmEventType || (ConfirmEventType = {}));
var ConfirmationService = class _ConfirmationService {
  requireConfirmationSource = new Subject();
  acceptConfirmationSource = new Subject();
  requireConfirmation$ = this.requireConfirmationSource.asObservable();
  accept = this.acceptConfirmationSource.asObservable();
  /**
   * Callback to invoke on confirm.
   * @param {Confirmation} confirmation - Represents a confirmation dialog configuration.
   * @group Method
   */
  confirm(confirmation) {
    this.requireConfirmationSource.next(confirmation);
    return this;
  }
  /**
   * Closes the dialog.
   * @group Method
   */
  close() {
    this.requireConfirmationSource.next(null);
    return this;
  }
  /**
   * Accepts the dialog.
   * @group Method
   */
  onAccept() {
    this.acceptConfirmationSource.next(null);
  }
  static \u0275fac = function ConfirmationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ConfirmationService,
    factory: _ConfirmationService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmationService, [{
    type: Injectable
  }], null, null);
})();
var ContextMenuService = class _ContextMenuService {
  activeItemKeyChange = new Subject();
  activeItemKeyChange$ = this.activeItemKeyChange.asObservable();
  activeItemKey;
  changeKey(key) {
    this.activeItemKey = key;
    this.activeItemKeyChange.next(this.activeItemKey);
  }
  reset() {
    this.activeItemKey = null;
    this.activeItemKeyChange.next(this.activeItemKey);
  }
  static \u0275fac = function ContextMenuService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContextMenuService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ContextMenuService,
    factory: _ContextMenuService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContextMenuService, [{
    type: Injectable
  }], null, null);
})();
var FilterMatchMode = class {
  static STARTS_WITH = "startsWith";
  static CONTAINS = "contains";
  static NOT_CONTAINS = "notContains";
  static ENDS_WITH = "endsWith";
  static EQUALS = "equals";
  static NOT_EQUALS = "notEquals";
  static IN = "in";
  static LESS_THAN = "lt";
  static LESS_THAN_OR_EQUAL_TO = "lte";
  static GREATER_THAN = "gt";
  static GREATER_THAN_OR_EQUAL_TO = "gte";
  static BETWEEN = "between";
  static IS = "is";
  static IS_NOT = "isNot";
  static BEFORE = "before";
  static AFTER = "after";
  static DATE_IS = "dateIs";
  static DATE_IS_NOT = "dateIsNot";
  static DATE_BEFORE = "dateBefore";
  static DATE_AFTER = "dateAfter";
};
var FilterOperator = class {
  static AND = "and";
  static OR = "or";
};
var FilterService = class _FilterService {
  filter(value, fields, filterValue, filterMatchMode, filterLocale) {
    let filteredItems = [];
    if (value) {
      for (let item of value) {
        for (let field of fields) {
          let fieldValue = resolveFieldData(item, field);
          if (this.filters[filterMatchMode](fieldValue, filterValue, filterLocale)) {
            filteredItems.push(item);
            break;
          }
        }
      }
    }
    return filteredItems;
  }
  filters = {
    startsWith: (value, filter2, filterLocale) => {
      if (filter2 === void 0 || filter2 === null || filter2.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      let filterValue = removeAccents(filter2.toString()).toLocaleLowerCase(filterLocale);
      let stringValue = removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.slice(0, filterValue.length) === filterValue;
    },
    contains: (value, filter2, filterLocale) => {
      if (filter2 === void 0 || filter2 === null || typeof filter2 === "string" && filter2.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      let filterValue = removeAccents(filter2.toString()).toLocaleLowerCase(filterLocale);
      let stringValue = removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.indexOf(filterValue) !== -1;
    },
    notContains: (value, filter2, filterLocale) => {
      if (filter2 === void 0 || filter2 === null || typeof filter2 === "string" && filter2.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      let filterValue = removeAccents(filter2.toString()).toLocaleLowerCase(filterLocale);
      let stringValue = removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.indexOf(filterValue) === -1;
    },
    endsWith: (value, filter2, filterLocale) => {
      if (filter2 === void 0 || filter2 === null || filter2.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      let filterValue = removeAccents(filter2.toString()).toLocaleLowerCase(filterLocale);
      let stringValue = removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.indexOf(filterValue, stringValue.length - filterValue.length) !== -1;
    },
    equals: (value, filter2, filterLocale) => {
      if (filter2 === void 0 || filter2 === null || typeof filter2 === "string" && filter2.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter2.getTime) return value.getTime() === filter2.getTime();
      else if (value == filter2) return true;
      else return removeAccents(value.toString()).toLocaleLowerCase(filterLocale) == removeAccents(filter2.toString()).toLocaleLowerCase(filterLocale);
    },
    notEquals: (value, filter2, filterLocale) => {
      if (filter2 === void 0 || filter2 === null || typeof filter2 === "string" && filter2.trim() === "") {
        return false;
      }
      if (value === void 0 || value === null) {
        return true;
      }
      if (value.getTime && filter2.getTime) return value.getTime() !== filter2.getTime();
      else if (value == filter2) return false;
      else return removeAccents(value.toString()).toLocaleLowerCase(filterLocale) != removeAccents(filter2.toString()).toLocaleLowerCase(filterLocale);
    },
    in: (value, filter2) => {
      if (filter2 === void 0 || filter2 === null || filter2.length === 0) {
        return true;
      }
      for (let i = 0; i < filter2.length; i++) {
        if (equals(value, filter2[i])) {
          return true;
        }
      }
      return false;
    },
    between: (value, filter2) => {
      if (filter2 == null || filter2[0] == null || filter2[1] == null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime) return filter2[0].getTime() <= value.getTime() && value.getTime() <= filter2[1].getTime();
      else return filter2[0] <= value && value <= filter2[1];
    },
    lt: (value, filter2, filterLocale) => {
      if (filter2 === void 0 || filter2 === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter2.getTime) return value.getTime() < filter2.getTime();
      else return value < filter2;
    },
    lte: (value, filter2, filterLocale) => {
      if (filter2 === void 0 || filter2 === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter2.getTime) return value.getTime() <= filter2.getTime();
      else return value <= filter2;
    },
    gt: (value, filter2, filterLocale) => {
      if (filter2 === void 0 || filter2 === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter2.getTime) return value.getTime() > filter2.getTime();
      else return value > filter2;
    },
    gte: (value, filter2, filterLocale) => {
      if (filter2 === void 0 || filter2 === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter2.getTime) return value.getTime() >= filter2.getTime();
      else return value >= filter2;
    },
    is: (value, filter2, filterLocale) => {
      return this.filters.equals(value, filter2, filterLocale);
    },
    isNot: (value, filter2, filterLocale) => {
      return this.filters.notEquals(value, filter2, filterLocale);
    },
    before: (value, filter2, filterLocale) => {
      return this.filters.lt(value, filter2, filterLocale);
    },
    after: (value, filter2, filterLocale) => {
      return this.filters.gt(value, filter2, filterLocale);
    },
    dateIs: (value, filter2) => {
      if (filter2 === void 0 || filter2 === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      return value.toDateString() === filter2.toDateString();
    },
    dateIsNot: (value, filter2) => {
      if (filter2 === void 0 || filter2 === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      return value.toDateString() !== filter2.toDateString();
    },
    dateBefore: (value, filter2) => {
      if (filter2 === void 0 || filter2 === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      return value.getTime() < filter2.getTime();
    },
    dateAfter: (value, filter2) => {
      if (filter2 === void 0 || filter2 === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      value.setHours(0, 0, 0, 0);
      return value.getTime() > filter2.getTime();
    }
  };
  register(rule, fn) {
    this.filters[rule] = fn;
  }
  static \u0275fac = function FilterService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FilterService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _FilterService,
    factory: _FilterService.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FilterService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var MessageService = class _MessageService {
  messageSource = new Subject();
  clearSource = new Subject();
  messageObserver = this.messageSource.asObservable();
  clearObserver = this.clearSource.asObservable();
  /**
   * Inserts single message.
   * @param {ToastMessageOptions} message - Message to be added.
   * @group Method
   */
  add(message) {
    if (message) {
      this.messageSource.next(message);
    }
  }
  /**
   * Inserts new messages.
   * @param {Message[]} messages - Messages to be added.
   * @group Method
   */
  addAll(messages) {
    if (messages && messages.length) {
      this.messageSource.next(messages);
    }
  }
  /**
   * Clears the message with the given key.
   * @param {string} key - Key of the message to be cleared.
   * @group Method
   */
  clear(key) {
    this.clearSource.next(key || null);
  }
  static \u0275fac = function MessageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MessageService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _MessageService,
    factory: _MessageService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessageService, [{
    type: Injectable
  }], null, null);
})();
var OverlayService = class _OverlayService {
  clickSource = new Subject();
  clickObservable = this.clickSource.asObservable();
  add(event) {
    if (event) {
      this.clickSource.next(event);
    }
  }
  static \u0275fac = function OverlayService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OverlayService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _OverlayService,
    factory: _OverlayService.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _c0 = ["*"];
var Header = class _Header {
  static \u0275fac = function Header_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Header)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Header,
    selectors: [["p-header"]],
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function Header_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Header, [{
    type: Component,
    args: [{
      selector: "p-header",
      template: "<ng-content></ng-content>",
      standalone: false
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Header, {
    className: "Header",
    filePath: "shared.ts",
    lineNumber: 9
  });
})();
var Footer = class _Footer {
  static \u0275fac = function Footer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Footer)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Footer,
    selectors: [["p-footer"]],
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function Footer_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Footer, [{
    type: Component,
    args: [{
      selector: "p-footer",
      template: "<ng-content></ng-content>",
      standalone: false
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Footer, {
    className: "Footer",
    filePath: "shared.ts",
    lineNumber: 16
  });
})();
var PrimeTemplate = class _PrimeTemplate {
  template;
  type;
  name;
  constructor(template) {
    this.template = template;
  }
  getType() {
    return this.name;
  }
  static \u0275fac = function PrimeTemplate_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PrimeTemplate)(\u0275\u0275directiveInject(TemplateRef));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _PrimeTemplate,
    selectors: [["", "pTemplate", ""]],
    inputs: {
      type: "type",
      name: [0, "pTemplate", "name"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrimeTemplate, [{
    type: Directive,
    args: [{
      selector: "[pTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], {
    type: [{
      type: Input
    }],
    name: [{
      type: Input,
      args: ["pTemplate"]
    }]
  });
})();
var SharedModule = class _SharedModule {
  static \u0275fac = function SharedModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SharedModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _SharedModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SharedModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, PrimeTemplate],
      exports: [Header, Footer, PrimeTemplate],
      declarations: [Header, Footer]
    }]
  }], null, null);
})();
var TranslationKeys = class {
  static STARTS_WITH = "startsWith";
  static CONTAINS = "contains";
  static NOT_CONTAINS = "notContains";
  static ENDS_WITH = "endsWith";
  static EQUALS = "equals";
  static NOT_EQUALS = "notEquals";
  static NO_FILTER = "noFilter";
  static LT = "lt";
  static LTE = "lte";
  static GT = "gt";
  static GTE = "gte";
  static IS = "is";
  static IS_NOT = "isNot";
  static BEFORE = "before";
  static AFTER = "after";
  static CLEAR = "clear";
  static APPLY = "apply";
  static MATCH_ALL = "matchAll";
  static MATCH_ANY = "matchAny";
  static ADD_RULE = "addRule";
  static REMOVE_RULE = "removeRule";
  static ACCEPT = "accept";
  static REJECT = "reject";
  static CHOOSE = "choose";
  static UPLOAD = "upload";
  static CANCEL = "cancel";
  static PENDING = "pending";
  static FILE_SIZE_TYPES = "fileSizeTypes";
  static DAY_NAMES = "dayNames";
  static DAY_NAMES_SHORT = "dayNamesShort";
  static DAY_NAMES_MIN = "dayNamesMin";
  static MONTH_NAMES = "monthNames";
  static MONTH_NAMES_SHORT = "monthNamesShort";
  static FIRST_DAY_OF_WEEK = "firstDayOfWeek";
  static TODAY = "today";
  static WEEK_HEADER = "weekHeader";
  static WEAK = "weak";
  static MEDIUM = "medium";
  static STRONG = "strong";
  static PASSWORD_PROMPT = "passwordPrompt";
  static EMPTY_MESSAGE = "emptyMessage";
  static EMPTY_FILTER_MESSAGE = "emptyFilterMessage";
  static SHOW_FILTER_MENU = "showFilterMenu";
  static HIDE_FILTER_MENU = "hideFilterMenu";
  static SELECTION_MESSAGE = "selectionMessage";
  static ARIA = "aria";
  static SELECT_COLOR = "selectColor";
  static BROWSE_FILES = "browseFiles";
};
var TreeDragDropService = class _TreeDragDropService {
  dragStartSource = new Subject();
  dragStopSource = new Subject();
  dragStart$ = this.dragStartSource.asObservable();
  dragStop$ = this.dragStopSource.asObservable();
  startDrag(event) {
    this.dragStartSource.next(event);
  }
  stopDrag(event) {
    this.dragStopSource.next(event);
  }
  static \u0275fac = function TreeDragDropService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TreeDragDropService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TreeDragDropService,
    factory: _TreeDragDropService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TreeDragDropService, [{
    type: Injectable
  }], null, null);
})();

// node_modules/@primeuix/styled/index.mjs
var __defProp2 = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols2 = Object.getOwnPropertySymbols;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __propIsEnum2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, {
  enumerable: true,
  configurable: true,
  writable: true,
  value
}) : obj[key] = value;
var __spreadValues3 = (a, b) => {
  for (var prop in b || (b = {})) if (__hasOwnProp2.call(b, prop)) __defNormalProp2(a, prop, b[prop]);
  if (__getOwnPropSymbols2) for (var prop of __getOwnPropSymbols2(b)) {
    if (__propIsEnum2.call(b, prop)) __defNormalProp2(a, prop, b[prop]);
  }
  return a;
};
var __spreadProps2 = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest2 = (source, exclude) => {
  var target = {};
  for (var prop in source) if (__hasOwnProp2.call(source, prop) && exclude.indexOf(prop) < 0) target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols2) for (var prop of __getOwnPropSymbols2(source)) {
    if (exclude.indexOf(prop) < 0 && __propIsEnum2.call(source, prop)) target[prop] = source[prop];
  }
  return target;
};
var ThemeService = EventBus();
var service_default = ThemeService;
function merge(value1, value2) {
  if (isArray(value1)) {
    value1.push(...value2 || []);
  } else if (isObject(value1)) {
    Object.assign(value1, value2);
  }
}
function toValue(value) {
  return isObject(value) && value.hasOwnProperty("value") && value.hasOwnProperty("type") ? value.value : value;
}
function toNormalizePrefix(prefix) {
  return prefix.replaceAll(/ /g, "").replace(/[^\w]/g, "-");
}
function toNormalizeVariable(prefix = "", variable = "") {
  return toNormalizePrefix(`${isString(prefix, false) && isString(variable, false) ? `${prefix}-` : prefix}${variable}`);
}
function getVariableName(prefix = "", variable = "") {
  return `--${toNormalizeVariable(prefix, variable)}`;
}
function hasOddBraces(str = "") {
  const openBraces = (str.match(/{/g) || []).length;
  const closeBraces = (str.match(/}/g) || []).length;
  return (openBraces + closeBraces) % 2 !== 0;
}
function getVariableValue(value, variable = "", prefix = "", excludedKeyRegexes = [], fallback) {
  if (isString(value)) {
    const regex = /{([^}]*)}/g;
    const val = value.trim();
    if (hasOddBraces(val)) {
      return void 0;
    } else if (matchRegex(val, regex)) {
      const _val = val.replaceAll(regex, (v) => {
        const path = v.replace(/{|}/g, "");
        const keys = path.split(".").filter((_v) => !excludedKeyRegexes.some((_r) => matchRegex(_v, _r)));
        return `var(${getVariableName(prefix, toKebabCase(keys.join("-")))}${isNotEmpty(fallback) ? `, ${fallback}` : ""})`;
      });
      const calculationRegex = /(\d+\s+[\+\-\*\/]\s+\d+)/g;
      const cleanedVarRegex = /var\([^)]+\)/g;
      return matchRegex(_val.replace(cleanedVarRegex, "0"), calculationRegex) ? `calc(${_val})` : _val;
    }
    return val;
  } else if (isNumber(value)) {
    return value;
  }
  return void 0;
}
function setProperty(properties, key, value) {
  if (isString(key, false)) {
    properties.push(`${key}:${value};`);
  }
}
function getRule(selector, properties) {
  if (selector) {
    return `${selector}{${properties}}`;
  }
  return "";
}
var dt = (...args) => {
  return dtwt(config_default.getTheme(), ...args);
};
var dtwt = (theme12 = {}, tokenPath, fallback, type) => {
  if (tokenPath) {
    const {
      variable: VARIABLE,
      options: OPTIONS
    } = config_default.defaults || {};
    const {
      prefix,
      transform
    } = (theme12 == null ? void 0 : theme12.options) || OPTIONS || {};
    const regex = /{([^}]*)}/g;
    const token = matchRegex(tokenPath, regex) ? tokenPath : `{${tokenPath}}`;
    const isStrictTransform = type === "value" || isEmpty(type) && transform === "strict";
    return isStrictTransform ? config_default.getTokenValue(tokenPath) : getVariableValue(token, void 0, prefix, [VARIABLE.excludedKeyRegex], fallback);
  }
  return "";
};
var $t = (theme12 = {}) => {
  let {
    preset: _preset,
    options: _options
  } = theme12;
  return {
    preset(value) {
      _preset = _preset ? mergeKeys(_preset, value) : value;
      return this;
    },
    options(value) {
      _options = _options ? __spreadValues3(__spreadValues3({}, _options), value) : value;
      return this;
    },
    // features
    primaryPalette(primary) {
      const {
        semantic
      } = _preset || {};
      _preset = __spreadProps2(__spreadValues3({}, _preset), {
        semantic: __spreadProps2(__spreadValues3({}, semantic), {
          primary
        })
      });
      return this;
    },
    surfacePalette(surface) {
      var _a, _b;
      const {
        semantic
      } = _preset || {};
      const lightSurface = (surface == null ? void 0 : surface.hasOwnProperty("light")) ? surface == null ? void 0 : surface.light : surface;
      const darkSurface = (surface == null ? void 0 : surface.hasOwnProperty("dark")) ? surface == null ? void 0 : surface.dark : surface;
      const newColorScheme = {
        colorScheme: {
          light: __spreadValues3(__spreadValues3({}, (_a = semantic == null ? void 0 : semantic.colorScheme) == null ? void 0 : _a.light), !!lightSurface && {
            surface: lightSurface
          }),
          dark: __spreadValues3(__spreadValues3({}, (_b = semantic == null ? void 0 : semantic.colorScheme) == null ? void 0 : _b.dark), !!darkSurface && {
            surface: darkSurface
          })
        }
      };
      _preset = __spreadProps2(__spreadValues3({}, _preset), {
        semantic: __spreadValues3(__spreadValues3({}, semantic), newColorScheme)
      });
      return this;
    },
    // actions
    define({
      useDefaultPreset = false,
      useDefaultOptions = false
    } = {}) {
      return {
        preset: useDefaultPreset ? config_default.getPreset() : _preset,
        options: useDefaultOptions ? config_default.getOptions() : _options
      };
    },
    update({
      mergePresets = true,
      mergeOptions = true
    } = {}) {
      const newTheme = {
        preset: mergePresets ? mergeKeys(config_default.getPreset(), _preset) : _preset,
        options: mergeOptions ? __spreadValues3(__spreadValues3({}, config_default.getOptions()), _options) : _options
      };
      config_default.setTheme(newTheme);
      return newTheme;
    },
    use(options) {
      const newTheme = this.define(options);
      config_default.setTheme(newTheme);
      return newTheme;
    }
  };
};
function toVariables_default(theme12, options = {}) {
  const VARIABLE = config_default.defaults.variable;
  const {
    prefix = VARIABLE.prefix,
    selector = VARIABLE.selector,
    excludedKeyRegex = VARIABLE.excludedKeyRegex
  } = options;
  const _toVariables = (_theme, _prefix = "") => {
    return Object.entries(_theme).reduce((acc, [key, value]) => {
      const px = matchRegex(key, excludedKeyRegex) ? toNormalizeVariable(_prefix) : toNormalizeVariable(_prefix, toKebabCase(key));
      const v = toValue(value);
      if (isObject(v)) {
        const {
          variables: variables2,
          tokens: tokens2
        } = _toVariables(v, px);
        merge(acc["tokens"], tokens2);
        merge(acc["variables"], variables2);
      } else {
        acc["tokens"].push((prefix ? px.replace(`${prefix}-`, "") : px).replaceAll("-", "."));
        setProperty(acc["variables"], getVariableName(px), getVariableValue(v, px, prefix, [excludedKeyRegex]));
      }
      return acc;
    }, {
      variables: [],
      tokens: []
    });
  };
  const {
    variables,
    tokens
  } = _toVariables(theme12, prefix);
  return {
    value: variables,
    tokens,
    declarations: variables.join(""),
    css: getRule(selector, variables.join(""))
  };
}
var themeUtils_default = {
  regex: {
    rules: {
      class: {
        pattern: /^\.([a-zA-Z][\w-]*)$/,
        resolve(value) {
          return {
            type: "class",
            selector: value,
            matched: this.pattern.test(value.trim())
          };
        }
      },
      attr: {
        pattern: /^\[(.*)\]$/,
        resolve(value) {
          return {
            type: "attr",
            selector: `:root${value}`,
            matched: this.pattern.test(value.trim())
          };
        }
      },
      media: {
        pattern: /^@media (.*)$/,
        resolve(value) {
          return {
            type: "media",
            selector: `${value}{:root{[CSS]}}`,
            matched: this.pattern.test(value.trim())
          };
        }
      },
      system: {
        pattern: /^system$/,
        resolve(value) {
          return {
            type: "system",
            selector: "@media (prefers-color-scheme: dark){:root{[CSS]}}",
            matched: this.pattern.test(value.trim())
          };
        }
      },
      custom: {
        resolve(value) {
          return {
            type: "custom",
            selector: value,
            matched: true
          };
        }
      }
    },
    resolve(value) {
      const rules = Object.keys(this.rules).filter((k) => k !== "custom").map((r) => this.rules[r]);
      return [value].flat().map((v) => {
        var _a;
        return (_a = rules.map((r) => r.resolve(v)).find((rr) => rr.matched)) != null ? _a : this.rules.custom.resolve(v);
      });
    }
  },
  _toVariables(theme12, options) {
    return toVariables_default(theme12, {
      prefix: options == null ? void 0 : options.prefix
    });
  },
  getCommon({
    name = "",
    theme: theme12 = {},
    params,
    set,
    defaults
  }) {
    var _e, _f, _g, _h, _i, _j, _k;
    const {
      preset,
      options
    } = theme12;
    let primitive_css, primitive_tokens, semantic_css, semantic_tokens, global_css, global_tokens, style2;
    if (isNotEmpty(preset) && options.transform !== "strict") {
      const {
        primitive,
        semantic,
        extend
      } = preset;
      const _a = semantic || {}, {
        colorScheme
      } = _a, sRest = __objRest2(_a, ["colorScheme"]);
      const _b = extend || {}, {
        colorScheme: eColorScheme
      } = _b, eRest = __objRest2(_b, ["colorScheme"]);
      const _c = colorScheme || {}, {
        dark
      } = _c, csRest = __objRest2(_c, ["dark"]);
      const _d = eColorScheme || {}, {
        dark: eDark
      } = _d, ecsRest = __objRest2(_d, ["dark"]);
      const prim_var = isNotEmpty(primitive) ? this._toVariables({
        primitive
      }, options) : {};
      const sRest_var = isNotEmpty(sRest) ? this._toVariables({
        semantic: sRest
      }, options) : {};
      const csRest_var = isNotEmpty(csRest) ? this._toVariables({
        light: csRest
      }, options) : {};
      const csDark_var = isNotEmpty(dark) ? this._toVariables({
        dark
      }, options) : {};
      const eRest_var = isNotEmpty(eRest) ? this._toVariables({
        semantic: eRest
      }, options) : {};
      const ecsRest_var = isNotEmpty(ecsRest) ? this._toVariables({
        light: ecsRest
      }, options) : {};
      const ecsDark_var = isNotEmpty(eDark) ? this._toVariables({
        dark: eDark
      }, options) : {};
      const [prim_css, prim_tokens] = [(_e = prim_var.declarations) != null ? _e : "", prim_var.tokens];
      const [sRest_css, sRest_tokens] = [(_f = sRest_var.declarations) != null ? _f : "", sRest_var.tokens || []];
      const [csRest_css, csRest_tokens] = [(_g = csRest_var.declarations) != null ? _g : "", csRest_var.tokens || []];
      const [csDark_css, csDark_tokens] = [(_h = csDark_var.declarations) != null ? _h : "", csDark_var.tokens || []];
      const [eRest_css, eRest_tokens] = [(_i = eRest_var.declarations) != null ? _i : "", eRest_var.tokens || []];
      const [ecsRest_css, ecsRest_tokens] = [(_j = ecsRest_var.declarations) != null ? _j : "", ecsRest_var.tokens || []];
      const [ecsDark_css, ecsDark_tokens] = [(_k = ecsDark_var.declarations) != null ? _k : "", ecsDark_var.tokens || []];
      primitive_css = this.transformCSS(name, prim_css, "light", "variable", options, set, defaults);
      primitive_tokens = prim_tokens;
      const semantic_light_css = this.transformCSS(name, `${sRest_css}${csRest_css}`, "light", "variable", options, set, defaults);
      const semantic_dark_css = this.transformCSS(name, `${csDark_css}`, "dark", "variable", options, set, defaults);
      semantic_css = `${semantic_light_css}${semantic_dark_css}`;
      semantic_tokens = [.../* @__PURE__ */ new Set([...sRest_tokens, ...csRest_tokens, ...csDark_tokens])];
      const global_light_css = this.transformCSS(name, `${eRest_css}${ecsRest_css}color-scheme:light`, "light", "variable", options, set, defaults);
      const global_dark_css = this.transformCSS(name, `${ecsDark_css}color-scheme:dark`, "dark", "variable", options, set, defaults);
      global_css = `${global_light_css}${global_dark_css}`;
      global_tokens = [.../* @__PURE__ */ new Set([...eRest_tokens, ...ecsRest_tokens, ...ecsDark_tokens])];
      style2 = resolve(preset.css, {
        dt
      });
    }
    return {
      primitive: {
        css: primitive_css,
        tokens: primitive_tokens
      },
      semantic: {
        css: semantic_css,
        tokens: semantic_tokens
      },
      global: {
        css: global_css,
        tokens: global_tokens
      },
      style: style2
    };
  },
  getPreset({
    name = "",
    preset = {},
    options,
    params,
    set,
    defaults,
    selector
  }) {
    var _e, _f, _g;
    let p_css, p_tokens, p_style;
    if (isNotEmpty(preset) && options.transform !== "strict") {
      const _name = name.replace("-directive", "");
      const _a = preset, {
        colorScheme,
        extend,
        css: css22
      } = _a, vRest = __objRest2(_a, ["colorScheme", "extend", "css"]);
      const _b = extend || {}, {
        colorScheme: eColorScheme
      } = _b, evRest = __objRest2(_b, ["colorScheme"]);
      const _c = colorScheme || {}, {
        dark
      } = _c, csRest = __objRest2(_c, ["dark"]);
      const _d = eColorScheme || {}, {
        dark: ecsDark
      } = _d, ecsRest = __objRest2(_d, ["dark"]);
      const vRest_var = isNotEmpty(vRest) ? this._toVariables({
        [_name]: __spreadValues3(__spreadValues3({}, vRest), evRest)
      }, options) : {};
      const csRest_var = isNotEmpty(csRest) ? this._toVariables({
        [_name]: __spreadValues3(__spreadValues3({}, csRest), ecsRest)
      }, options) : {};
      const csDark_var = isNotEmpty(dark) ? this._toVariables({
        [_name]: __spreadValues3(__spreadValues3({}, dark), ecsDark)
      }, options) : {};
      const [vRest_css, vRest_tokens] = [(_e = vRest_var.declarations) != null ? _e : "", vRest_var.tokens || []];
      const [csRest_css, csRest_tokens] = [(_f = csRest_var.declarations) != null ? _f : "", csRest_var.tokens || []];
      const [csDark_css, csDark_tokens] = [(_g = csDark_var.declarations) != null ? _g : "", csDark_var.tokens || []];
      const light_variable_css = this.transformCSS(_name, `${vRest_css}${csRest_css}`, "light", "variable", options, set, defaults, selector);
      const dark_variable_css = this.transformCSS(_name, csDark_css, "dark", "variable", options, set, defaults, selector);
      p_css = `${light_variable_css}${dark_variable_css}`;
      p_tokens = [.../* @__PURE__ */ new Set([...vRest_tokens, ...csRest_tokens, ...csDark_tokens])];
      p_style = resolve(css22, {
        dt
      });
    }
    return {
      css: p_css,
      tokens: p_tokens,
      style: p_style
    };
  },
  getPresetC({
    name = "",
    theme: theme12 = {},
    params,
    set,
    defaults
  }) {
    var _a;
    const {
      preset,
      options
    } = theme12;
    const cPreset = (_a = preset == null ? void 0 : preset.components) == null ? void 0 : _a[name];
    return this.getPreset({
      name,
      preset: cPreset,
      options,
      params,
      set,
      defaults
    });
  },
  getPresetD({
    name = "",
    theme: theme12 = {},
    params,
    set,
    defaults
  }) {
    var _a;
    const dName = name.replace("-directive", "");
    const {
      preset,
      options
    } = theme12;
    const dPreset = (_a = preset == null ? void 0 : preset.directives) == null ? void 0 : _a[dName];
    return this.getPreset({
      name: dName,
      preset: dPreset,
      options,
      params,
      set,
      defaults
    });
  },
  applyDarkColorScheme(options) {
    return !(options.darkModeSelector === "none" || options.darkModeSelector === false);
  },
  getColorSchemeOption(options, defaults) {
    var _a;
    return this.applyDarkColorScheme(options) ? this.regex.resolve(options.darkModeSelector === true ? defaults.options.darkModeSelector : (_a = options.darkModeSelector) != null ? _a : defaults.options.darkModeSelector) : [];
  },
  getLayerOrder(name, options = {}, params, defaults) {
    const {
      cssLayer
    } = options;
    if (cssLayer) {
      const order = resolve(cssLayer.order || "primeui", params);
      return `@layer ${order}`;
    }
    return "";
  },
  getCommonStyleSheet({
    name = "",
    theme: theme12 = {},
    params,
    props = {},
    set,
    defaults
  }) {
    const common = this.getCommon({
      name,
      theme: theme12,
      params,
      set,
      defaults
    });
    const _props = Object.entries(props).reduce((acc, [k, v]) => acc.push(`${k}="${v}"`) && acc, []).join(" ");
    return Object.entries(common || {}).reduce((acc, [key, value]) => {
      if (value == null ? void 0 : value.css) {
        const _css = minifyCSS(value == null ? void 0 : value.css);
        const id = `${key}-variables`;
        acc.push(`<style type="text/css" data-primevue-style-id="${id}" ${_props}>${_css}</style>`);
      }
      return acc;
    }, []).join("");
  },
  getStyleSheet({
    name = "",
    theme: theme12 = {},
    params,
    props = {},
    set,
    defaults
  }) {
    var _a;
    const options = {
      name,
      theme: theme12,
      params,
      set,
      defaults
    };
    const preset_css = (_a = name.includes("-directive") ? this.getPresetD(options) : this.getPresetC(options)) == null ? void 0 : _a.css;
    const _props = Object.entries(props).reduce((acc, [k, v]) => acc.push(`${k}="${v}"`) && acc, []).join(" ");
    return preset_css ? `<style type="text/css" data-primevue-style-id="${name}-variables" ${_props}>${minifyCSS(preset_css)}</style>` : "";
  },
  createTokens(obj = {}, defaults, parentKey = "", parentPath = "", tokens = {}) {
    Object.entries(obj).forEach(([key, value]) => {
      const currentKey = matchRegex(key, defaults.variable.excludedKeyRegex) ? parentKey : parentKey ? `${parentKey}.${toTokenKey(key)}` : toTokenKey(key);
      const currentPath = parentPath ? `${parentPath}.${key}` : key;
      if (isObject(value)) {
        this.createTokens(value, defaults, currentKey, currentPath, tokens);
      } else {
        tokens[currentKey] || (tokens[currentKey] = {
          paths: [],
          computed(colorScheme, tokenPathMap = {}) {
            var _a, _b;
            if (this.paths.length === 1) {
              return (_a = this.paths[0]) == null ? void 0 : _a.computed(this.paths[0].scheme, tokenPathMap["binding"]);
            } else if (colorScheme && colorScheme !== "none") {
              return (_b = this.paths.find((p) => p.scheme === colorScheme)) == null ? void 0 : _b.computed(colorScheme, tokenPathMap["binding"]);
            }
            return this.paths.map((p) => p.computed(p.scheme, tokenPathMap[p.scheme]));
          }
        });
        tokens[currentKey].paths.push({
          path: currentPath,
          value,
          scheme: currentPath.includes("colorScheme.light") ? "light" : currentPath.includes("colorScheme.dark") ? "dark" : "none",
          computed(colorScheme, tokenPathMap = {}) {
            const regex = /{([^}]*)}/g;
            let computedValue = value;
            tokenPathMap["name"] = this.path;
            tokenPathMap["binding"] || (tokenPathMap["binding"] = {});
            if (matchRegex(value, regex)) {
              const val = value.trim();
              const _val = val.replaceAll(regex, (v) => {
                var _a;
                const path = v.replace(/{|}/g, "");
                const computed2 = (_a = tokens[path]) == null ? void 0 : _a.computed(colorScheme, tokenPathMap);
                return isArray(computed2) && computed2.length === 2 ? `light-dark(${computed2[0].value},${computed2[1].value})` : computed2 == null ? void 0 : computed2.value;
              });
              const calculationRegex = /(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g;
              const cleanedVarRegex = /var\([^)]+\)/g;
              computedValue = matchRegex(_val.replace(cleanedVarRegex, "0"), calculationRegex) ? `calc(${_val})` : _val;
            }
            isEmpty(tokenPathMap["binding"]) && delete tokenPathMap["binding"];
            return {
              colorScheme,
              path: this.path,
              paths: tokenPathMap,
              value: computedValue.includes("undefined") ? void 0 : computedValue
            };
          }
        });
      }
    });
    return tokens;
  },
  getTokenValue(tokens, path, defaults) {
    var _a;
    const normalizePath = (str) => {
      const strArr = str.split(".");
      return strArr.filter((s) => !matchRegex(s.toLowerCase(), defaults.variable.excludedKeyRegex)).join(".");
    };
    const token = normalizePath(path);
    const colorScheme = path.includes("colorScheme.light") ? "light" : path.includes("colorScheme.dark") ? "dark" : void 0;
    const computedValues = [(_a = tokens[token]) == null ? void 0 : _a.computed(colorScheme)].flat().filter((computed2) => computed2);
    return computedValues.length === 1 ? computedValues[0].value : computedValues.reduce((acc = {}, computed2) => {
      const _a2 = computed2, {
        colorScheme: cs
      } = _a2, rest = __objRest2(_a2, ["colorScheme"]);
      acc[cs] = rest;
      return acc;
    }, void 0);
  },
  getSelectorRule(selector1, selector2, type, css22) {
    return type === "class" || type === "attr" ? getRule(isNotEmpty(selector2) ? `${selector1}${selector2},${selector1} ${selector2}` : selector1, css22) : getRule(selector1, isNotEmpty(selector2) ? getRule(selector2, css22) : css22);
  },
  transformCSS(name, css22, mode, type, options = {}, set, defaults, selector) {
    if (isNotEmpty(css22)) {
      const {
        cssLayer
      } = options;
      if (type !== "style") {
        const colorSchemeOption = this.getColorSchemeOption(options, defaults);
        css22 = mode === "dark" ? colorSchemeOption.reduce((acc, {
          type: type2,
          selector: _selector
        }) => {
          if (isNotEmpty(_selector)) {
            acc += _selector.includes("[CSS]") ? _selector.replace("[CSS]", css22) : this.getSelectorRule(_selector, selector, type2, css22);
          }
          return acc;
        }, "") : getRule(selector != null ? selector : ":root", css22);
      }
      if (cssLayer) {
        const layerOptions = {
          name: "primeui",
          order: "primeui"
        };
        isObject(cssLayer) && (layerOptions.name = resolve(cssLayer.name, {
          name,
          type
        }));
        if (isNotEmpty(layerOptions.name)) {
          css22 = getRule(`@layer ${layerOptions.name}`, css22);
          set == null ? void 0 : set.layerNames(layerOptions.name);
        }
      }
      return css22;
    }
    return "";
  }
};
var config_default = {
  defaults: {
    variable: {
      prefix: "p",
      selector: ":root",
      excludedKeyRegex: /^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi
    },
    options: {
      prefix: "p",
      darkModeSelector: "system",
      cssLayer: false
    }
  },
  _theme: void 0,
  _layerNames: /* @__PURE__ */ new Set(),
  _loadedStyleNames: /* @__PURE__ */ new Set(),
  _loadingStyles: /* @__PURE__ */ new Set(),
  _tokens: {},
  update(newValues = {}) {
    const {
      theme: theme12
    } = newValues;
    if (theme12) {
      this._theme = __spreadProps2(__spreadValues3({}, theme12), {
        options: __spreadValues3(__spreadValues3({}, this.defaults.options), theme12.options)
      });
      this._tokens = themeUtils_default.createTokens(this.preset, this.defaults);
      this.clearLoadedStyleNames();
    }
  },
  get theme() {
    return this._theme;
  },
  get preset() {
    var _a;
    return ((_a = this.theme) == null ? void 0 : _a.preset) || {};
  },
  get options() {
    var _a;
    return ((_a = this.theme) == null ? void 0 : _a.options) || {};
  },
  get tokens() {
    return this._tokens;
  },
  getTheme() {
    return this.theme;
  },
  setTheme(newValue) {
    this.update({
      theme: newValue
    });
    service_default.emit("theme:change", newValue);
  },
  getPreset() {
    return this.preset;
  },
  setPreset(newValue) {
    this._theme = __spreadProps2(__spreadValues3({}, this.theme), {
      preset: newValue
    });
    this._tokens = themeUtils_default.createTokens(newValue, this.defaults);
    this.clearLoadedStyleNames();
    service_default.emit("preset:change", newValue);
    service_default.emit("theme:change", this.theme);
  },
  getOptions() {
    return this.options;
  },
  setOptions(newValue) {
    this._theme = __spreadProps2(__spreadValues3({}, this.theme), {
      options: newValue
    });
    this.clearLoadedStyleNames();
    service_default.emit("options:change", newValue);
    service_default.emit("theme:change", this.theme);
  },
  getLayerNames() {
    return [...this._layerNames];
  },
  setLayerNames(layerName) {
    this._layerNames.add(layerName);
  },
  getLoadedStyleNames() {
    return this._loadedStyleNames;
  },
  isStyleNameLoaded(name) {
    return this._loadedStyleNames.has(name);
  },
  setLoadedStyleName(name) {
    this._loadedStyleNames.add(name);
  },
  deleteLoadedStyleName(name) {
    this._loadedStyleNames.delete(name);
  },
  clearLoadedStyleNames() {
    this._loadedStyleNames.clear();
  },
  getTokenValue(tokenPath) {
    return themeUtils_default.getTokenValue(this.tokens, tokenPath, this.defaults);
  },
  getCommon(name = "", params) {
    return themeUtils_default.getCommon({
      name,
      theme: this.theme,
      params,
      defaults: this.defaults,
      set: {
        layerNames: this.setLayerNames.bind(this)
      }
    });
  },
  getComponent(name = "", params) {
    const options = {
      name,
      theme: this.theme,
      params,
      defaults: this.defaults,
      set: {
        layerNames: this.setLayerNames.bind(this)
      }
    };
    return themeUtils_default.getPresetC(options);
  },
  getDirective(name = "", params) {
    const options = {
      name,
      theme: this.theme,
      params,
      defaults: this.defaults,
      set: {
        layerNames: this.setLayerNames.bind(this)
      }
    };
    return themeUtils_default.getPresetD(options);
  },
  getCustomPreset(name = "", preset, selector, params) {
    const options = {
      name,
      preset,
      options: this.options,
      selector,
      params,
      defaults: this.defaults,
      set: {
        layerNames: this.setLayerNames.bind(this)
      }
    };
    return themeUtils_default.getPreset(options);
  },
  getLayerOrderCSS(name = "") {
    return themeUtils_default.getLayerOrder(name, this.options, {
      names: this.getLayerNames()
    }, this.defaults);
  },
  transformCSS(name = "", css22, type = "style", mode) {
    return themeUtils_default.transformCSS(name, css22, mode, type, this.options, {
      layerNames: this.setLayerNames.bind(this)
    }, this.defaults);
  },
  getCommonStyleSheet(name = "", params, props = {}) {
    return themeUtils_default.getCommonStyleSheet({
      name,
      theme: this.theme,
      params,
      props,
      defaults: this.defaults,
      set: {
        layerNames: this.setLayerNames.bind(this)
      }
    });
  },
  getStyleSheet(name, params, props = {}) {
    return themeUtils_default.getStyleSheet({
      name,
      theme: this.theme,
      params,
      props,
      defaults: this.defaults,
      set: {
        layerNames: this.setLayerNames.bind(this)
      }
    });
  },
  onStyleMounted(name) {
    this._loadingStyles.add(name);
  },
  onStyleUpdated(name) {
    this._loadingStyles.add(name);
  },
  onStyleLoaded(event, {
    name
  }) {
    if (this._loadingStyles.size) {
      this._loadingStyles.delete(name);
      service_default.emit(`theme:${name}:load`, event);
      !this._loadingStyles.size && service_default.emit("theme:load");
    }
  }
};
function updatePreset(...presets) {
  const newPreset = mergeKeys(config_default.getPreset(), ...presets);
  config_default.setPreset(newPreset);
  return newPreset;
}
function updateSurfacePalette(palette) {
  return $t().surfacePalette(palette).update().preset;
}

// node_modules/primeng/fesm2022/primeng-usestyle.mjs
var _id = 0;
var UseStyle = class _UseStyle {
  document = inject(DOCUMENT);
  use(css3, options = {}) {
    let isLoaded = false;
    let cssRef = css3;
    let styleRef = null;
    const {
      immediate = true,
      manual = false,
      name = `style_${++_id}`,
      id = void 0,
      media = void 0,
      nonce = void 0,
      first = false,
      props = {}
    } = options;
    if (!this.document) return;
    styleRef = this.document.querySelector(`style[data-primeng-style-id="${name}"]`) || id && this.document.getElementById(id) || this.document.createElement("style");
    if (!styleRef.isConnected) {
      cssRef = css3;
      setAttributes(styleRef, {
        type: "text/css",
        media,
        nonce
      });
      const HEAD = this.document.head;
      first && HEAD.firstChild ? HEAD.insertBefore(styleRef, HEAD.firstChild) : HEAD.appendChild(styleRef);
      setAttribute(styleRef, "data-primeng-style-id", name);
    }
    if (styleRef.textContent !== cssRef) {
      styleRef.textContent = cssRef;
    }
    return {
      id,
      name,
      el: styleRef,
      css: cssRef
    };
  }
  static \u0275fac = function UseStyle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UseStyle)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _UseStyle,
    factory: _UseStyle.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UseStyle, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-base.mjs
var base = {
  _loadedStyleNames: /* @__PURE__ */ new Set(),
  getLoadedStyleNames() {
    return this._loadedStyleNames;
  },
  isStyleNameLoaded(name) {
    return this._loadedStyleNames.has(name);
  },
  setLoadedStyleName(name) {
    this._loadedStyleNames.add(name);
  },
  deleteLoadedStyleName(name) {
    this._loadedStyleNames.delete(name);
  },
  clearLoadedStyleNames() {
    this._loadedStyleNames.clear();
  }
};
var theme = ({
  dt: dt2
}) => `
*,
::before,
::after {
    box-sizing: border-box;
}

/* Non ng overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* NG based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: ${dt2("disabled.opacity")};
}

.pi {
    font-size: ${dt2("icon.size")};
}

.p-icon {
    width: ${dt2("icon.size")};
    height: ${dt2("icon.size")};
}

.p-overlay-mask {
    background: ${dt2("mask.background")};
    color: ${dt2("mask.color")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation ${dt2("mask.transition.duration")} forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation ${dt2("mask.transition.duration")} forwards;
}
/* Temporarily disabled, distrupts PrimeNG overlay animations */
/* @keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: ${dt2("mask.background")};
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: ${dt2("mask.background")};
    }
    to {
        background: transparent;
    }
}*/

.p-iconwrapper {
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
`;
var css = ({
  dt: dt2
}) => `
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: ${dt2("scrollbar.width")};
}

/* @todo move to baseiconstyle.ts */

.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`;
var BaseStyle = class _BaseStyle {
  name = "base";
  useStyle = inject(UseStyle);
  theme = theme;
  css = css;
  classes = {};
  inlineStyles = {};
  load = (style2, options = {}, transform = (cs) => cs) => {
    const computedStyle = transform(resolve(style2, {
      dt
    }));
    return computedStyle ? this.useStyle.use(minifyCSS(computedStyle), __spreadValues({
      name: this.name
    }, options)) : {};
  };
  loadCSS = (options = {}) => {
    return this.load(this.css, options);
  };
  loadTheme = (options = {}, style2 = "") => {
    return this.load(this.theme, options, (computedStyle = "") => config_default.transformCSS(options.name || this.name, `${computedStyle}${style2}`));
  };
  getCommonTheme = (params) => {
    return config_default.getCommon(this.name, params);
  };
  getComponentTheme = (params) => {
    return config_default.getComponent(this.name, params);
  };
  getDirectiveTheme = (params) => {
    return config_default.getDirective(this.name, params);
  };
  getPresetTheme = (preset, selector, params) => {
    return config_default.getCustomPreset(this.name, preset, selector, params);
  };
  getLayerOrderThemeCSS = () => {
    return config_default.getLayerOrderCSS(this.name);
  };
  getStyleSheet = (extendedCSS = "", props = {}) => {
    if (this.css) {
      const _css = resolve(this.css, {
        dt
      });
      const _style = minifyCSS(`${_css}${extendedCSS}`);
      const _props = Object.entries(props).reduce((acc, [k, v]) => acc.push(`${k}="${v}"`) && acc, []).join(" ");
      return `<style type="text/css" data-primeng-style-id="${this.name}" ${_props}>${_style}</style>`;
    }
    return "";
  };
  getCommonThemeStyleSheet = (params, props = {}) => {
    return config_default.getCommonStyleSheet(this.name, params, props);
  };
  getThemeStyleSheet = (params, props = {}) => {
    let css3 = [config_default.getStyleSheet(this.name, params, props)];
    if (this.theme) {
      const name = this.name === "base" ? "global-style" : `${this.name}-style`;
      const _css = resolve(this.theme, {
        dt
      });
      const _style = minifyCSS(config_default.transformCSS(name, _css));
      const _props = Object.entries(props).reduce((acc, [k, v]) => acc.push(`${k}="${v}"`) && acc, []).join(" ");
      css3.push(`<style type="text/css" data-primeng-style-id="${name}" ${_props}>${_style}</style>`);
    }
    return css3.join("");
  };
  static \u0275fac = function BaseStyle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BaseStyle)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _BaseStyle,
    factory: _BaseStyle.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseStyle, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-config.mjs
var ThemeProvider = class _ThemeProvider {
  // @todo define type for theme
  theme = signal(void 0);
  csp = signal({
    nonce: void 0
  });
  isThemeChanged = false;
  document = inject(DOCUMENT);
  baseStyle = inject(BaseStyle);
  constructor() {
    effect(() => {
      service_default.on("theme:change", (newTheme) => {
        untracked(() => {
          this.isThemeChanged = true;
          this.theme.set(newTheme);
        });
      });
    });
    effect(() => {
      const themeValue = this.theme();
      if (this.document && themeValue) {
        if (!this.isThemeChanged) {
          this.onThemeChange(themeValue);
        }
        this.isThemeChanged = false;
      }
    });
  }
  ngOnDestroy() {
    config_default.clearLoadedStyleNames();
    service_default.clear();
  }
  onThemeChange(value) {
    config_default.setTheme(value);
    if (this.document) {
      this.loadCommonTheme();
    }
  }
  loadCommonTheme() {
    if (this.theme() === "none") return;
    if (!config_default.isStyleNameLoaded("common")) {
      const {
        primitive,
        semantic,
        global,
        style: style2
      } = this.baseStyle.getCommonTheme?.() || {};
      const styleOptions = {
        nonce: this.csp?.()?.nonce
      };
      this.baseStyle.load(primitive?.css, __spreadValues({
        name: "primitive-variables"
      }, styleOptions));
      this.baseStyle.load(semantic?.css, __spreadValues({
        name: "semantic-variables"
      }, styleOptions));
      this.baseStyle.load(global?.css, __spreadValues({
        name: "global-variables"
      }, styleOptions));
      this.baseStyle.loadTheme(__spreadValues({
        name: "global-style"
      }, styleOptions), style2);
      config_default.setLoadedStyleName("common");
    }
  }
  setThemeConfig(config) {
    const {
      theme: theme12,
      csp
    } = config || {};
    if (theme12) this.theme.set(theme12);
    if (csp) this.csp.set(csp);
  }
  static \u0275fac = function ThemeProvider_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ThemeProvider)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ThemeProvider,
    factory: _ThemeProvider.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeProvider, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var PrimeNG = class _PrimeNG extends ThemeProvider {
  ripple = signal(false);
  platformId = inject(PLATFORM_ID);
  inputStyle = signal("outlined");
  inputVariant = signal("outlined");
  overlayOptions = {};
  csp = signal({
    nonce: void 0
  });
  filterMatchModeOptions = {
    text: [FilterMatchMode.STARTS_WITH, FilterMatchMode.CONTAINS, FilterMatchMode.NOT_CONTAINS, FilterMatchMode.ENDS_WITH, FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS],
    numeric: [FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS, FilterMatchMode.LESS_THAN, FilterMatchMode.LESS_THAN_OR_EQUAL_TO, FilterMatchMode.GREATER_THAN, FilterMatchMode.GREATER_THAN_OR_EQUAL_TO],
    date: [FilterMatchMode.DATE_IS, FilterMatchMode.DATE_IS_NOT, FilterMatchMode.DATE_BEFORE, FilterMatchMode.DATE_AFTER]
  };
  translation = {
    startsWith: "Starts with",
    contains: "Contains",
    notContains: "Not contains",
    endsWith: "Ends with",
    equals: "Equals",
    notEquals: "Not equals",
    noFilter: "No Filter",
    lt: "Less than",
    lte: "Less than or equal to",
    gt: "Greater than",
    gte: "Greater than or equal to",
    is: "Is",
    isNot: "Is not",
    before: "Before",
    after: "After",
    dateIs: "Date is",
    dateIsNot: "Date is not",
    dateBefore: "Date is before",
    dateAfter: "Date is after",
    clear: "Clear",
    apply: "Apply",
    matchAll: "Match All",
    matchAny: "Match Any",
    addRule: "Add Rule",
    removeRule: "Remove Rule",
    accept: "Yes",
    reject: "No",
    choose: "Choose",
    upload: "Upload",
    cancel: "Cancel",
    pending: "Pending",
    fileSizeTypes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    chooseYear: "Choose Year",
    chooseMonth: "Choose Month",
    chooseDate: "Choose Date",
    prevDecade: "Previous Decade",
    nextDecade: "Next Decade",
    prevYear: "Previous Year",
    nextYear: "Next Year",
    prevMonth: "Previous Month",
    nextMonth: "Next Month",
    prevHour: "Previous Hour",
    nextHour: "Next Hour",
    prevMinute: "Previous Minute",
    nextMinute: "Next Minute",
    prevSecond: "Previous Second",
    nextSecond: "Next Second",
    am: "am",
    pm: "pm",
    dateFormat: "mm/dd/yy",
    firstDayOfWeek: 0,
    today: "Today",
    weekHeader: "Wk",
    weak: "Weak",
    medium: "Medium",
    strong: "Strong",
    passwordPrompt: "Enter a password",
    emptyMessage: "No results found",
    searchMessage: "Search results are available",
    selectionMessage: "{0} items selected",
    emptySelectionMessage: "No selected item",
    emptySearchMessage: "No results found",
    emptyFilterMessage: "No results found",
    fileChosenMessage: "Files",
    noFileChosenMessage: "No file chosen",
    aria: {
      trueLabel: "True",
      falseLabel: "False",
      nullLabel: "Not Selected",
      star: "1 star",
      stars: "{star} stars",
      selectAll: "All items selected",
      unselectAll: "All items unselected",
      close: "Close",
      previous: "Previous",
      next: "Next",
      navigation: "Navigation",
      scrollTop: "Scroll Top",
      moveTop: "Move Top",
      moveUp: "Move Up",
      moveDown: "Move Down",
      moveBottom: "Move Bottom",
      moveToTarget: "Move to Target",
      moveToSource: "Move to Source",
      moveAllToTarget: "Move All to Target",
      moveAllToSource: "Move All to Source",
      pageLabel: "{page}",
      firstPageLabel: "First Page",
      lastPageLabel: "Last Page",
      nextPageLabel: "Next Page",
      prevPageLabel: "Previous Page",
      rowsPerPageLabel: "Rows per page",
      previousPageLabel: "Previous Page",
      jumpToPageDropdownLabel: "Jump to Page Dropdown",
      jumpToPageInputLabel: "Jump to Page Input",
      selectRow: "Row Selected",
      unselectRow: "Row Unselected",
      expandRow: "Row Expanded",
      collapseRow: "Row Collapsed",
      showFilterMenu: "Show Filter Menu",
      hideFilterMenu: "Hide Filter Menu",
      filterOperator: "Filter Operator",
      filterConstraint: "Filter Constraint",
      editRow: "Row Edit",
      saveEdit: "Save Edit",
      cancelEdit: "Cancel Edit",
      listView: "List View",
      gridView: "Grid View",
      slide: "Slide",
      slideNumber: "{slideNumber}",
      zoomImage: "Zoom Image",
      zoomIn: "Zoom In",
      zoomOut: "Zoom Out",
      rotateRight: "Rotate Right",
      rotateLeft: "Rotate Left",
      listLabel: "Option List",
      selectColor: "Select a color",
      removeLabel: "Remove",
      browseFiles: "Browse Files",
      maximizeLabel: "Maximize"
    }
  };
  zIndex = {
    modal: 1100,
    overlay: 1e3,
    menu: 1e3,
    tooltip: 1100
  };
  translationSource = new Subject();
  translationObserver = this.translationSource.asObservable();
  getTranslation(key) {
    return this.translation[key];
  }
  setTranslation(value) {
    this.translation = __spreadValues(__spreadValues({}, this.translation), value);
    this.translationSource.next(this.translation);
  }
  setConfig(config) {
    const {
      csp,
      ripple,
      inputStyle,
      theme: theme12,
      overlayOptions,
      translation
    } = config || {};
    if (csp) this.csp.set(csp);
    if (ripple) this.ripple.set(ripple);
    if (inputStyle) this.inputStyle.set(inputStyle);
    if (overlayOptions) this.overlayOptions = overlayOptions;
    if (translation) this.setTranslation(translation);
    if (theme12) this.setThemeConfig({
      theme: theme12,
      csp
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275PrimeNG_BaseFactory;
    return function PrimeNG_Factory(__ngFactoryType__) {
      return (\u0275PrimeNG_BaseFactory || (\u0275PrimeNG_BaseFactory = \u0275\u0275getInheritedFactory(_PrimeNG)))(__ngFactoryType__ || _PrimeNG);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _PrimeNG,
    factory: _PrimeNG.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrimeNG, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var PRIME_NG_CONFIG = new InjectionToken("PRIME_NG_CONFIG");
function providePrimeNG(...features) {
  const providers = features?.map((feature) => ({
    provide: PRIME_NG_CONFIG,
    useValue: feature,
    multi: false
  }));
  const initializer = provideAppInitializer(() => {
    const PrimeNGConfig = inject(PrimeNG);
    features?.forEach((feature) => PrimeNGConfig.setConfig(feature));
    return;
  });
  return makeEnvironmentProviders([...providers, initializer]);
}

// node_modules/@angular/forms/fesm2022/forms.mjs
var BaseControlValueAccessor = class _BaseControlValueAccessor {
  _renderer;
  _elementRef;
  /**
   * The registered callback function called when a change or input event occurs on the input
   * element.
   * @nodoc
   */
  onChange = (_) => {
  };
  /**
   * The registered callback function called when a blur event occurs on the input element.
   * @nodoc
   */
  onTouched = () => {
  };
  constructor(_renderer, _elementRef) {
    this._renderer = _renderer;
    this._elementRef = _elementRef;
  }
  /**
   * Helper method that sets a property on a target element using the current Renderer
   * implementation.
   * @nodoc
   */
  setProperty(key, value) {
    this._renderer.setProperty(this._elementRef.nativeElement, key, value);
  }
  /**
   * Registers a function called when the control is touched.
   * @nodoc
   */
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = fn;
  }
  /**
   * Sets the "disabled" property on the range input element.
   * @nodoc
   */
  setDisabledState(isDisabled) {
    this.setProperty("disabled", isDisabled);
  }
  static \u0275fac = function BaseControlValueAccessor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BaseControlValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _BaseControlValueAccessor
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseControlValueAccessor, [{
    type: Directive
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], null);
})();
var BuiltInControlValueAccessor = class _BuiltInControlValueAccessor extends BaseControlValueAccessor {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BuiltInControlValueAccessor_BaseFactory;
    return function BuiltInControlValueAccessor_Factory(__ngFactoryType__) {
      return (\u0275BuiltInControlValueAccessor_BaseFactory || (\u0275BuiltInControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_BuiltInControlValueAccessor)))(__ngFactoryType__ || _BuiltInControlValueAccessor);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _BuiltInControlValueAccessor,
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuiltInControlValueAccessor, [{
    type: Directive
  }], null, null);
})();
var NG_VALUE_ACCESSOR = new InjectionToken(ngDevMode ? "NgValueAccessor" : "");
var CHECKBOX_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckboxControlValueAccessor),
  multi: true
};
var CheckboxControlValueAccessor = class _CheckboxControlValueAccessor extends BuiltInControlValueAccessor {
  /**
   * Sets the "checked" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    this.setProperty("checked", value);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275CheckboxControlValueAccessor_BaseFactory;
    return function CheckboxControlValueAccessor_Factory(__ngFactoryType__) {
      return (\u0275CheckboxControlValueAccessor_BaseFactory || (\u0275CheckboxControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_CheckboxControlValueAccessor)))(__ngFactoryType__ || _CheckboxControlValueAccessor);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CheckboxControlValueAccessor,
    selectors: [["input", "type", "checkbox", "formControlName", ""], ["input", "type", "checkbox", "formControl", ""], ["input", "type", "checkbox", "ngModel", ""]],
    hostBindings: function CheckboxControlValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("change", function CheckboxControlValueAccessor_change_HostBindingHandler($event) {
          return ctx.onChange($event.target.checked);
        })("blur", function CheckboxControlValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([CHECKBOX_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]",
      host: {
        "(change)": "onChange($event.target.checked)",
        "(blur)": "onTouched()"
      },
      providers: [CHECKBOX_VALUE_ACCESSOR],
      standalone: false
    }]
  }], null, null);
})();
var DEFAULT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DefaultValueAccessor),
  multi: true
};
function _isAndroid() {
  const userAgent = getDOM() ? getDOM().getUserAgent() : "";
  return /android (\d+)/.test(userAgent.toLowerCase());
}
var COMPOSITION_BUFFER_MODE = new InjectionToken(ngDevMode ? "CompositionEventMode" : "");
var DefaultValueAccessor = class _DefaultValueAccessor extends BaseControlValueAccessor {
  _compositionMode;
  /** Whether the user is creating a composition string (IME events). */
  _composing = false;
  constructor(renderer, elementRef, _compositionMode) {
    super(renderer, elementRef);
    this._compositionMode = _compositionMode;
    if (this._compositionMode == null) {
      this._compositionMode = !_isAndroid();
    }
  }
  /**
   * Sets the "value" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    const normalizedValue = value == null ? "" : value;
    this.setProperty("value", normalizedValue);
  }
  /** @internal */
  _handleInput(value) {
    if (!this._compositionMode || this._compositionMode && !this._composing) {
      this.onChange(value);
    }
  }
  /** @internal */
  _compositionStart() {
    this._composing = true;
  }
  /** @internal */
  _compositionEnd(value) {
    this._composing = false;
    this._compositionMode && this.onChange(value);
  }
  static \u0275fac = function DefaultValueAccessor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DefaultValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(COMPOSITION_BUFFER_MODE, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _DefaultValueAccessor,
    selectors: [["input", "formControlName", "", 3, "type", "checkbox"], ["textarea", "formControlName", ""], ["input", "formControl", "", 3, "type", "checkbox"], ["textarea", "formControl", ""], ["input", "ngModel", "", 3, "type", "checkbox"], ["textarea", "ngModel", ""], ["", "ngDefaultControl", ""]],
    hostBindings: function DefaultValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("input", function DefaultValueAccessor_input_HostBindingHandler($event) {
          return ctx._handleInput($event.target.value);
        })("blur", function DefaultValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        })("compositionstart", function DefaultValueAccessor_compositionstart_HostBindingHandler() {
          return ctx._compositionStart();
        })("compositionend", function DefaultValueAccessor_compositionend_HostBindingHandler($event) {
          return ctx._compositionEnd($event.target.value);
        });
      }
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([DEFAULT_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]",
      // TODO: vsavkin replace the above selector with the one below it once
      // https://github.com/angular/angular/issues/3011 is implemented
      // selector: '[ngModel],[formControl],[formControlName]',
      host: {
        "(input)": "$any(this)._handleInput($event.target.value)",
        "(blur)": "onTouched()",
        "(compositionstart)": "$any(this)._compositionStart()",
        "(compositionend)": "$any(this)._compositionEnd($event.target.value)"
      },
      providers: [DEFAULT_VALUE_ACCESSOR],
      standalone: false
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [COMPOSITION_BUFFER_MODE]
    }]
  }], null);
})();
function isEmptyInputValue(value) {
  return value == null || (typeof value === "string" || Array.isArray(value)) && value.length === 0;
}
function hasValidLength(value) {
  return value != null && typeof value.length === "number";
}
var NG_VALIDATORS = new InjectionToken(ngDevMode ? "NgValidators" : "");
var NG_ASYNC_VALIDATORS = new InjectionToken(ngDevMode ? "NgAsyncValidators" : "");
var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
function minValidator(min) {
  return (control) => {
    if (isEmptyInputValue(control.value) || isEmptyInputValue(min)) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value < min ? {
      "min": {
        "min": min,
        "actual": control.value
      }
    } : null;
  };
}
function maxValidator(max) {
  return (control) => {
    if (isEmptyInputValue(control.value) || isEmptyInputValue(max)) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value > max ? {
      "max": {
        "max": max,
        "actual": control.value
      }
    } : null;
  };
}
function requiredValidator(control) {
  return isEmptyInputValue(control.value) ? {
    "required": true
  } : null;
}
function requiredTrueValidator(control) {
  return control.value === true ? null : {
    "required": true
  };
}
function emailValidator(control) {
  if (isEmptyInputValue(control.value)) {
    return null;
  }
  return EMAIL_REGEXP.test(control.value) ? null : {
    "email": true
  };
}
function minLengthValidator(minLength) {
  return (control) => {
    if (isEmptyInputValue(control.value) || !hasValidLength(control.value)) {
      return null;
    }
    return control.value.length < minLength ? {
      "minlength": {
        "requiredLength": minLength,
        "actualLength": control.value.length
      }
    } : null;
  };
}
function maxLengthValidator(maxLength) {
  return (control) => {
    return hasValidLength(control.value) && control.value.length > maxLength ? {
      "maxlength": {
        "requiredLength": maxLength,
        "actualLength": control.value.length
      }
    } : null;
  };
}
function patternValidator(pattern) {
  if (!pattern) return nullValidator;
  let regex;
  let regexStr;
  if (typeof pattern === "string") {
    regexStr = "";
    if (pattern.charAt(0) !== "^") regexStr += "^";
    regexStr += pattern;
    if (pattern.charAt(pattern.length - 1) !== "$") regexStr += "$";
    regex = new RegExp(regexStr);
  } else {
    regexStr = pattern.toString();
    regex = pattern;
  }
  return (control) => {
    if (isEmptyInputValue(control.value)) {
      return null;
    }
    const value = control.value;
    return regex.test(value) ? null : {
      "pattern": {
        "requiredPattern": regexStr,
        "actualValue": value
      }
    };
  };
}
function nullValidator(control) {
  return null;
}
function isPresent(o) {
  return o != null;
}
function toObservable(value) {
  const obs = isPromise(value) ? from(value) : value;
  if ((typeof ngDevMode === "undefined" || ngDevMode) && !isSubscribable(obs)) {
    let errorMessage = `Expected async validator to return Promise or Observable.`;
    if (typeof value === "object") {
      errorMessage += " Are you using a synchronous validator where an async validator is expected?";
    }
    throw new RuntimeError(-1101, errorMessage);
  }
  return obs;
}
function mergeErrors(arrayOfErrors) {
  let res = {};
  arrayOfErrors.forEach((errors) => {
    res = errors != null ? __spreadValues(__spreadValues({}, res), errors) : res;
  });
  return Object.keys(res).length === 0 ? null : res;
}
function executeValidators(control, validators) {
  return validators.map((validator) => validator(control));
}
function isValidatorFn(validator) {
  return !validator.validate;
}
function normalizeValidators(validators) {
  return validators.map((validator) => {
    return isValidatorFn(validator) ? validator : (c) => validator.validate(c);
  });
}
function compose(validators) {
  if (!validators) return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0) return null;
  return function(control) {
    return mergeErrors(executeValidators(control, presentValidators));
  };
}
function composeValidators(validators) {
  return validators != null ? compose(normalizeValidators(validators)) : null;
}
function composeAsync(validators) {
  if (!validators) return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0) return null;
  return function(control) {
    const observables = executeValidators(control, presentValidators).map(toObservable);
    return forkJoin(observables).pipe(map(mergeErrors));
  };
}
function composeAsyncValidators(validators) {
  return validators != null ? composeAsync(normalizeValidators(validators)) : null;
}
function mergeValidators(controlValidators, dirValidator) {
  if (controlValidators === null) return [dirValidator];
  return Array.isArray(controlValidators) ? [...controlValidators, dirValidator] : [controlValidators, dirValidator];
}
function getControlValidators(control) {
  return control._rawValidators;
}
function getControlAsyncValidators(control) {
  return control._rawAsyncValidators;
}
function makeValidatorsArray(validators) {
  if (!validators) return [];
  return Array.isArray(validators) ? validators : [validators];
}
function hasValidator(validators, validator) {
  return Array.isArray(validators) ? validators.includes(validator) : validators === validator;
}
function addValidators(validators, currentValidators) {
  const current = makeValidatorsArray(currentValidators);
  const validatorsToAdd = makeValidatorsArray(validators);
  validatorsToAdd.forEach((v) => {
    if (!hasValidator(current, v)) {
      current.push(v);
    }
  });
  return current;
}
function removeValidators(validators, currentValidators) {
  return makeValidatorsArray(currentValidators).filter((v) => !hasValidator(validators, v));
}
var AbstractControlDirective = class {
  /**
   * @description
   * Reports the value of the control if it is present, otherwise null.
   */
  get value() {
    return this.control ? this.control.value : null;
  }
  /**
   * @description
   * Reports whether the control is valid. A control is considered valid if no
   * validation errors exist with the current value.
   * If the control is not present, null is returned.
   */
  get valid() {
    return this.control ? this.control.valid : null;
  }
  /**
   * @description
   * Reports whether the control is invalid, meaning that an error exists in the input value.
   * If the control is not present, null is returned.
   */
  get invalid() {
    return this.control ? this.control.invalid : null;
  }
  /**
   * @description
   * Reports whether a control is pending, meaning that async validation is occurring and
   * errors are not yet available for the input value. If the control is not present, null is
   * returned.
   */
  get pending() {
    return this.control ? this.control.pending : null;
  }
  /**
   * @description
   * Reports whether the control is disabled, meaning that the control is disabled
   * in the UI and is exempt from validation checks and excluded from aggregate
   * values of ancestor controls. If the control is not present, null is returned.
   */
  get disabled() {
    return this.control ? this.control.disabled : null;
  }
  /**
   * @description
   * Reports whether the control is enabled, meaning that the control is included in ancestor
   * calculations of validity or value. If the control is not present, null is returned.
   */
  get enabled() {
    return this.control ? this.control.enabled : null;
  }
  /**
   * @description
   * Reports the control's validation errors. If the control is not present, null is returned.
   */
  get errors() {
    return this.control ? this.control.errors : null;
  }
  /**
   * @description
   * Reports whether the control is pristine, meaning that the user has not yet changed
   * the value in the UI. If the control is not present, null is returned.
   */
  get pristine() {
    return this.control ? this.control.pristine : null;
  }
  /**
   * @description
   * Reports whether the control is dirty, meaning that the user has changed
   * the value in the UI. If the control is not present, null is returned.
   */
  get dirty() {
    return this.control ? this.control.dirty : null;
  }
  /**
   * @description
   * Reports whether the control is touched, meaning that the user has triggered
   * a `blur` event on it. If the control is not present, null is returned.
   */
  get touched() {
    return this.control ? this.control.touched : null;
  }
  /**
   * @description
   * Reports the validation status of the control. Possible values include:
   * 'VALID', 'INVALID', 'DISABLED', and 'PENDING'.
   * If the control is not present, null is returned.
   */
  get status() {
    return this.control ? this.control.status : null;
  }
  /**
   * @description
   * Reports whether the control is untouched, meaning that the user has not yet triggered
   * a `blur` event on it. If the control is not present, null is returned.
   */
  get untouched() {
    return this.control ? this.control.untouched : null;
  }
  /**
   * @description
   * Returns a multicasting observable that emits a validation status whenever it is
   * calculated for the control. If the control is not present, null is returned.
   */
  get statusChanges() {
    return this.control ? this.control.statusChanges : null;
  }
  /**
   * @description
   * Returns a multicasting observable of value changes for the control that emits every time the
   * value of the control changes in the UI or programmatically.
   * If the control is not present, null is returned.
   */
  get valueChanges() {
    return this.control ? this.control.valueChanges : null;
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return null;
  }
  /**
   * Contains the result of merging synchronous validators into a single validator function
   * (combined using `Validators.compose`).
   */
  _composedValidatorFn;
  /**
   * Contains the result of merging asynchronous validators into a single validator function
   * (combined using `Validators.composeAsync`).
   */
  _composedAsyncValidatorFn;
  /**
   * Set of synchronous validators as they were provided while calling `setValidators` function.
   * @internal
   */
  _rawValidators = [];
  /**
   * Set of asynchronous validators as they were provided while calling `setAsyncValidators`
   * function.
   * @internal
   */
  _rawAsyncValidators = [];
  /**
   * Sets synchronous validators for this directive.
   * @internal
   */
  _setValidators(validators) {
    this._rawValidators = validators || [];
    this._composedValidatorFn = composeValidators(this._rawValidators);
  }
  /**
   * Sets asynchronous validators for this directive.
   * @internal
   */
  _setAsyncValidators(validators) {
    this._rawAsyncValidators = validators || [];
    this._composedAsyncValidatorFn = composeAsyncValidators(this._rawAsyncValidators);
  }
  /**
   * @description
   * Synchronous validator function composed of all the synchronous validators registered with this
   * directive.
   */
  get validator() {
    return this._composedValidatorFn || null;
  }
  /**
   * @description
   * Asynchronous validator function composed of all the asynchronous validators registered with
   * this directive.
   */
  get asyncValidator() {
    return this._composedAsyncValidatorFn || null;
  }
  /*
   * The set of callbacks to be invoked when directive instance is being destroyed.
   */
  _onDestroyCallbacks = [];
  /**
   * Internal function to register callbacks that should be invoked
   * when directive instance is being destroyed.
   * @internal
   */
  _registerOnDestroy(fn) {
    this._onDestroyCallbacks.push(fn);
  }
  /**
   * Internal function to invoke all registered "on destroy" callbacks.
   * Note: calling this function also clears the list of callbacks.
   * @internal
   */
  _invokeOnDestroyCallbacks() {
    this._onDestroyCallbacks.forEach((fn) => fn());
    this._onDestroyCallbacks = [];
  }
  /**
   * @description
   * Resets the control with the provided value if the control is present.
   */
  reset(value = void 0) {
    if (this.control) this.control.reset(value);
  }
  /**
   * @description
   * Reports whether the control with the given path has the error specified.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * If no path is given, this method checks for the error on the current control.
   *
   * @returns whether the given error is present in the control at the given path.
   *
   * If the control is not present, false is returned.
   */
  hasError(errorCode, path) {
    return this.control ? this.control.hasError(errorCode, path) : false;
  }
  /**
   * @description
   * Reports error data for the control with the given path.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * @returns error data for that particular error. If the control or error is not present,
   * null is returned.
   */
  getError(errorCode, path) {
    return this.control ? this.control.getError(errorCode, path) : null;
  }
};
var ControlContainer = class extends AbstractControlDirective {
  /**
   * @description
   * The name for the control
   */
  // TODO(issue/24571): remove '!'.
  name;
  /**
   * @description
   * The top-level form directive for the control.
   */
  get formDirective() {
    return null;
  }
  /**
   * @description
   * The path to this group.
   */
  get path() {
    return null;
  }
};
var NgControl = class extends AbstractControlDirective {
  /**
   * @description
   * The parent form for the control.
   *
   * @internal
   */
  _parent = null;
  /**
   * @description
   * The name for the control
   */
  name = null;
  /**
   * @description
   * The value accessor for the control
   */
  valueAccessor = null;
};
var AbstractControlStatus = class {
  _cd;
  constructor(cd) {
    this._cd = cd;
  }
  get isTouched() {
    this._cd?.control?._touched?.();
    return !!this._cd?.control?.touched;
  }
  get isUntouched() {
    return !!this._cd?.control?.untouched;
  }
  get isPristine() {
    this._cd?.control?._pristine?.();
    return !!this._cd?.control?.pristine;
  }
  get isDirty() {
    return !!this._cd?.control?.dirty;
  }
  get isValid() {
    this._cd?.control?._status?.();
    return !!this._cd?.control?.valid;
  }
  get isInvalid() {
    return !!this._cd?.control?.invalid;
  }
  get isPending() {
    return !!this._cd?.control?.pending;
  }
  get isSubmitted() {
    this._cd?._submitted?.();
    return !!this._cd?.submitted;
  }
};
var ngControlStatusHost = {
  "[class.ng-untouched]": "isUntouched",
  "[class.ng-touched]": "isTouched",
  "[class.ng-pristine]": "isPristine",
  "[class.ng-dirty]": "isDirty",
  "[class.ng-valid]": "isValid",
  "[class.ng-invalid]": "isInvalid",
  "[class.ng-pending]": "isPending"
};
var ngGroupStatusHost = __spreadProps(__spreadValues({}, ngControlStatusHost), {
  "[class.ng-submitted]": "isSubmitted"
});
var NgControlStatus = class _NgControlStatus extends AbstractControlStatus {
  constructor(cd) {
    super(cd);
  }
  static \u0275fac = function NgControlStatus_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgControlStatus)(\u0275\u0275directiveInject(NgControl, 2));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgControlStatus,
    selectors: [["", "formControlName", ""], ["", "ngModel", ""], ["", "formControl", ""]],
    hostVars: 14,
    hostBindings: function NgControlStatus_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("ng-untouched", ctx.isUntouched)("ng-touched", ctx.isTouched)("ng-pristine", ctx.isPristine)("ng-dirty", ctx.isDirty)("ng-valid", ctx.isValid)("ng-invalid", ctx.isInvalid)("ng-pending", ctx.isPending);
      }
    },
    standalone: false,
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgControlStatus, [{
    type: Directive,
    args: [{
      selector: "[formControlName],[ngModel],[formControl]",
      host: ngControlStatusHost,
      standalone: false
    }]
  }], () => [{
    type: NgControl,
    decorators: [{
      type: Self
    }]
  }], null);
})();
var NgControlStatusGroup = class _NgControlStatusGroup extends AbstractControlStatus {
  constructor(cd) {
    super(cd);
  }
  static \u0275fac = function NgControlStatusGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgControlStatusGroup)(\u0275\u0275directiveInject(ControlContainer, 10));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgControlStatusGroup,
    selectors: [["", "formGroupName", ""], ["", "formArrayName", ""], ["", "ngModelGroup", ""], ["", "formGroup", ""], ["form", 3, "ngNoForm", ""], ["", "ngForm", ""]],
    hostVars: 16,
    hostBindings: function NgControlStatusGroup_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("ng-untouched", ctx.isUntouched)("ng-touched", ctx.isTouched)("ng-pristine", ctx.isPristine)("ng-dirty", ctx.isDirty)("ng-valid", ctx.isValid)("ng-invalid", ctx.isInvalid)("ng-pending", ctx.isPending)("ng-submitted", ctx.isSubmitted);
      }
    },
    standalone: false,
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgControlStatusGroup, [{
    type: Directive,
    args: [{
      selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]",
      host: ngGroupStatusHost,
      standalone: false
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }]
  }], null);
})();
var formControlNameExample = `
  <div [formGroup]="myGroup">
    <input formControlName="firstName">
  </div>

  In your class:

  this.myGroup = new FormGroup({
      firstName: new FormControl()
  });`;
var formGroupNameExample = `
  <div [formGroup]="myGroup">
      <div formGroupName="person">
        <input formControlName="firstName">
      </div>
  </div>

  In your class:

  this.myGroup = new FormGroup({
      person: new FormGroup({ firstName: new FormControl() })
  });`;
var formArrayNameExample = `
  <div [formGroup]="myGroup">
    <div formArrayName="cities">
      <div *ngFor="let city of cityArray.controls; index as i">
        <input [formControlName]="i">
      </div>
    </div>
  </div>

  In your class:

  this.cityArray = new FormArray([new FormControl('SF')]);
  this.myGroup = new FormGroup({
    cities: this.cityArray
  });`;
var ngModelGroupExample = `
  <form>
      <div ngModelGroup="person">
        <input [(ngModel)]="person.name" name="firstName">
      </div>
  </form>`;
var ngModelWithFormGroupExample = `
  <div [formGroup]="myGroup">
      <input formControlName="firstName">
      <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">
  </div>
`;
function controlParentException(nameOrIndex) {
  return new RuntimeError(1050, `formControlName must be used with a parent formGroup directive. You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

      ${describeFormControl(nameOrIndex)}

    Example:

    ${formControlNameExample}`);
}
function describeFormControl(nameOrIndex) {
  if (nameOrIndex == null || nameOrIndex === "") {
    return "";
  }
  const valueType = typeof nameOrIndex === "string" ? "name" : "index";
  return `Affected Form Control ${valueType}: "${nameOrIndex}"`;
}
function ngModelGroupException() {
  return new RuntimeError(1051, `formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents
      that also have a "form" prefix: formGroupName, formArrayName, or formGroup.

      Option 1:  Update the parent to be formGroupName (reactive form strategy)

      ${formGroupNameExample}

      Option 2: Use ngModel instead of formControlName (template-driven strategy)

      ${ngModelGroupExample}`);
}
function missingFormException() {
  return new RuntimeError(1052, `formGroup expects a FormGroup instance. Please pass one in.

      Example:

      ${formControlNameExample}`);
}
function groupParentException() {
  return new RuntimeError(1053, `formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup
    directive and pass it an existing FormGroup instance (you can create one in your class).

    Example:

    ${formGroupNameExample}`);
}
function arrayParentException() {
  return new RuntimeError(1054, `formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

      Example:

      ${formArrayNameExample}`);
}
var disabledAttrWarning = `
  It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true
  when you set up this control in your component class, the disabled attribute will actually be set in the DOM for
  you. We recommend using this approach to avoid 'changed after checked' errors.

  Example:
  // Specify the \`disabled\` property at control creation time:
  form = new FormGroup({
    first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),
    last: new FormControl('Drew', Validators.required)
  });

  // Controls can also be enabled/disabled after creation:
  form.get('first')?.enable();
  form.get('last')?.disable();
`;
var asyncValidatorsDroppedWithOptsWarning = `
  It looks like you're constructing using a FormControl with both an options argument and an
  async validators argument. Mixing these arguments will cause your async validators to be dropped.
  You should either put all your validators in the options object, or in separate validators
  arguments. For example:

  // Using validators arguments
  fc = new FormControl(42, Validators.required, myAsyncValidator);

  // Using AbstractControlOptions
  fc = new FormControl(42, {validators: Validators.required, asyncValidators: myAV});

  // Do NOT mix them: async validators will be dropped!
  fc = new FormControl(42, {validators: Validators.required}, /* Oops! */ myAsyncValidator);
`;
function ngModelWarning(directiveName) {
  return `
  It looks like you're using ngModel on the same form field as ${directiveName}.
  Support for using the ngModel input property and ngModelChange event with
  reactive form directives has been deprecated in Angular v6 and will be removed
  in a future version of Angular.

  For more information on this, see our API docs here:
  https://angular.io/api/forms/${directiveName === "formControl" ? "FormControlDirective" : "FormControlName"}#use-with-ngmodel
  `;
}
function describeKey(isFormGroup, key) {
  return isFormGroup ? `with name: '${key}'` : `at index: ${key}`;
}
function noControlsError(isFormGroup) {
  return `
    There are no form controls registered with this ${isFormGroup ? "group" : "array"} yet. If you're using ngModel,
    you may want to check next tick (e.g. use setTimeout).
  `;
}
function missingControlError(isFormGroup, key) {
  return `Cannot find form control ${describeKey(isFormGroup, key)}`;
}
function missingControlValueError(isFormGroup, key) {
  return `Must supply a value for form control ${describeKey(isFormGroup, key)}`;
}
var VALID = "VALID";
var INVALID = "INVALID";
var PENDING = "PENDING";
var DISABLED = "DISABLED";
var ControlEvent = class {
};
var ValueChangeEvent = class extends ControlEvent {
  value;
  source;
  constructor(value, source) {
    super();
    this.value = value;
    this.source = source;
  }
};
var PristineChangeEvent = class extends ControlEvent {
  pristine;
  source;
  constructor(pristine, source) {
    super();
    this.pristine = pristine;
    this.source = source;
  }
};
var TouchedChangeEvent = class extends ControlEvent {
  touched;
  source;
  constructor(touched, source) {
    super();
    this.touched = touched;
    this.source = source;
  }
};
var StatusChangeEvent = class extends ControlEvent {
  status;
  source;
  constructor(status, source) {
    super();
    this.status = status;
    this.source = source;
  }
};
var FormSubmittedEvent = class extends ControlEvent {
  source;
  constructor(source) {
    super();
    this.source = source;
  }
};
var FormResetEvent = class extends ControlEvent {
  source;
  constructor(source) {
    super();
    this.source = source;
  }
};
function pickValidators(validatorOrOpts) {
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.validators : validatorOrOpts) || null;
}
function coerceToValidator(validator) {
  return Array.isArray(validator) ? composeValidators(validator) : validator || null;
}
function pickAsyncValidators(asyncValidator, validatorOrOpts) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (isOptionsObj(validatorOrOpts) && asyncValidator) {
      console.warn(asyncValidatorsDroppedWithOptsWarning);
    }
  }
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.asyncValidators : asyncValidator) || null;
}
function coerceToAsyncValidator(asyncValidator) {
  return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator || null;
}
function isOptionsObj(validatorOrOpts) {
  return validatorOrOpts != null && !Array.isArray(validatorOrOpts) && typeof validatorOrOpts === "object";
}
function assertControlPresent(parent, isGroup, key) {
  const controls = parent.controls;
  const collection = isGroup ? Object.keys(controls) : controls;
  if (!collection.length) {
    throw new RuntimeError(1e3, typeof ngDevMode === "undefined" || ngDevMode ? noControlsError(isGroup) : "");
  }
  if (!controls[key]) {
    throw new RuntimeError(1001, typeof ngDevMode === "undefined" || ngDevMode ? missingControlError(isGroup, key) : "");
  }
}
function assertAllValuesPresent(control, isGroup, value) {
  control._forEachChild((_, key) => {
    if (value[key] === void 0) {
      throw new RuntimeError(1002, typeof ngDevMode === "undefined" || ngDevMode ? missingControlValueError(isGroup, key) : "");
    }
  });
}
var AbstractControl = class {
  /** @internal */
  _pendingDirty = false;
  /**
   * Indicates that a control has its own pending asynchronous validation in progress.
   * It also stores if the control should emit events when the validation status changes.
   *
   * @internal
   */
  _hasOwnPendingAsyncValidator = null;
  /** @internal */
  _pendingTouched = false;
  /** @internal */
  _onCollectionChange = () => {
  };
  /** @internal */
  _updateOn;
  _parent = null;
  _asyncValidationSubscription;
  /**
   * Contains the result of merging synchronous validators into a single validator function
   * (combined using `Validators.compose`).
   *
   * @internal
   */
  _composedValidatorFn;
  /**
   * Contains the result of merging asynchronous validators into a single validator function
   * (combined using `Validators.composeAsync`).
   *
   * @internal
   */
  _composedAsyncValidatorFn;
  /**
   * Synchronous validators as they were provided:
   *  - in `AbstractControl` constructor
   *  - as an argument while calling `setValidators` function
   *  - while calling the setter on the `validator` field (e.g. `control.validator = validatorFn`)
   *
   * @internal
   */
  _rawValidators;
  /**
   * Asynchronous validators as they were provided:
   *  - in `AbstractControl` constructor
   *  - as an argument while calling `setAsyncValidators` function
   *  - while calling the setter on the `asyncValidator` field (e.g. `control.asyncValidator =
   * asyncValidatorFn`)
   *
   * @internal
   */
  _rawAsyncValidators;
  /**
   * The current value of the control.
   *
   * * For a `FormControl`, the current value.
   * * For an enabled `FormGroup`, the values of enabled controls as an object
   * with a key-value pair for each member of the group.
   * * For a disabled `FormGroup`, the values of all controls as an object
   * with a key-value pair for each member of the group.
   * * For a `FormArray`, the values of enabled controls as an array.
   *
   */
  value;
  /**
   * Initialize the AbstractControl instance.
   *
   * @param validators The function or array of functions that is used to determine the validity of
   *     this control synchronously.
   * @param asyncValidators The function or array of functions that is used to determine validity of
   *     this control asynchronously.
   */
  constructor(validators, asyncValidators) {
    this._assignValidators(validators);
    this._assignAsyncValidators(asyncValidators);
  }
  /**
   * Returns the function that is used to determine the validity of this control synchronously.
   * If multiple validators have been added, this will be a single composed function.
   * See `Validators.compose()` for additional information.
   */
  get validator() {
    return this._composedValidatorFn;
  }
  set validator(validatorFn) {
    this._rawValidators = this._composedValidatorFn = validatorFn;
  }
  /**
   * Returns the function that is used to determine the validity of this control asynchronously.
   * If multiple validators have been added, this will be a single composed function.
   * See `Validators.compose()` for additional information.
   */
  get asyncValidator() {
    return this._composedAsyncValidatorFn;
  }
  set asyncValidator(asyncValidatorFn) {
    this._rawAsyncValidators = this._composedAsyncValidatorFn = asyncValidatorFn;
  }
  /**
   * The parent control.
   */
  get parent() {
    return this._parent;
  }
  /**
   * The validation status of the control.
   *
   * @see {@link FormControlStatus}
   *
   * These status values are mutually exclusive, so a control cannot be
   * both valid AND invalid or invalid AND disabled.
   */
  get status() {
    return untracked(this.statusReactive);
  }
  set status(v) {
    untracked(() => this.statusReactive.set(v));
  }
  /** @internal */
  _status = computed(() => this.statusReactive());
  statusReactive = signal(void 0);
  /**
   * A control is `valid` when its `status` is `VALID`.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if the control has passed all of its validation tests,
   * false otherwise.
   */
  get valid() {
    return this.status === VALID;
  }
  /**
   * A control is `invalid` when its `status` is `INVALID`.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if this control has failed one or more of its validation checks,
   * false otherwise.
   */
  get invalid() {
    return this.status === INVALID;
  }
  /**
   * A control is `pending` when its `status` is `PENDING`.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if this control is in the process of conducting a validation check,
   * false otherwise.
   */
  get pending() {
    return this.status == PENDING;
  }
  /**
   * A control is `disabled` when its `status` is `DISABLED`.
   *
   * Disabled controls are exempt from validation checks and
   * are not included in the aggregate value of their ancestor
   * controls.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if the control is disabled, false otherwise.
   */
  get disabled() {
    return this.status === DISABLED;
  }
  /**
   * A control is `enabled` as long as its `status` is not `DISABLED`.
   *
   * @returns True if the control has any status other than 'DISABLED',
   * false if the status is 'DISABLED'.
   *
   * @see {@link AbstractControl.status}
   *
   */
  get enabled() {
    return this.status !== DISABLED;
  }
  /**
   * An object containing any errors generated by failing validation,
   * or null if there are no errors.
   */
  errors;
  /**
   * A control is `pristine` if the user has not yet changed
   * the value in the UI.
   *
   * @returns True if the user has not yet changed the value in the UI; compare `dirty`.
   * Programmatic changes to a control's value do not mark it dirty.
   */
  get pristine() {
    return untracked(this.pristineReactive);
  }
  set pristine(v) {
    untracked(() => this.pristineReactive.set(v));
  }
  /** @internal */
  _pristine = computed(() => this.pristineReactive());
  pristineReactive = signal(true);
  /**
   * A control is `dirty` if the user has changed the value
   * in the UI.
   *
   * @returns True if the user has changed the value of this control in the UI; compare `pristine`.
   * Programmatic changes to a control's value do not mark it dirty.
   */
  get dirty() {
    return !this.pristine;
  }
  /**
   * True if the control is marked as `touched`.
   *
   * A control is marked `touched` once the user has triggered
   * a `blur` event on it.
   */
  get touched() {
    return untracked(this.touchedReactive);
  }
  set touched(v) {
    untracked(() => this.touchedReactive.set(v));
  }
  /** @internal */
  _touched = computed(() => this.touchedReactive());
  touchedReactive = signal(false);
  /**
   * True if the control has not been marked as touched
   *
   * A control is `untouched` if the user has not yet triggered
   * a `blur` event on it.
   */
  get untouched() {
    return !this.touched;
  }
  /**
   * Exposed as observable, see below.
   *
   * @internal
   */
  _events = new Subject();
  /**
   * A multicasting observable that emits an event every time the state of the control changes.
   * It emits for value, status, pristine or touched changes.
   *
   * **Note**: On value change, the emit happens right after a value of this control is updated. The
   * value of a parent control (for example if this FormControl is a part of a FormGroup) is updated
   * later, so accessing a value of a parent control (using the `value` property) from the callback
   * of this event might result in getting a value that has not been updated yet. Subscribe to the
   * `events` of the parent control instead.
   * For other event types, the events are emitted after the parent control has been updated.
   *
   */
  events = this._events.asObservable();
  /**
   * A multicasting observable that emits an event every time the value of the control changes, in
   * the UI or programmatically. It also emits an event each time you call enable() or disable()
   * without passing along {emitEvent: false} as a function argument.
   *
   * **Note**: the emit happens right after a value of this control is updated. The value of a
   * parent control (for example if this FormControl is a part of a FormGroup) is updated later, so
   * accessing a value of a parent control (using the `value` property) from the callback of this
   * event might result in getting a value that has not been updated yet. Subscribe to the
   * `valueChanges` event of the parent control instead.
   *
   * TODO: this should be piped from events() but is breaking in G3
   */
  valueChanges;
  /**
   * A multicasting observable that emits an event every time the validation `status` of the control
   * recalculates.
   *
   * @see {@link FormControlStatus}
   * @see {@link AbstractControl.status}
   *
   * TODO: this should be piped from events() but is breaking in G3
   */
  statusChanges;
  /**
   * Reports the update strategy of the `AbstractControl` (meaning
   * the event on which the control updates itself).
   * Possible values: `'change'` | `'blur'` | `'submit'`
   * Default value: `'change'`
   */
  get updateOn() {
    return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change";
  }
  /**
   * Sets the synchronous validators that are active on this control.  Calling
   * this overwrites any existing synchronous validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * If you want to add a new validator without affecting existing ones, consider
   * using `addValidators()` method instead.
   */
  setValidators(validators) {
    this._assignValidators(validators);
  }
  /**
   * Sets the asynchronous validators that are active on this control. Calling this
   * overwrites any existing asynchronous validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * If you want to add a new validator without affecting existing ones, consider
   * using `addAsyncValidators()` method instead.
   */
  setAsyncValidators(validators) {
    this._assignAsyncValidators(validators);
  }
  /**
   * Add a synchronous validator or validators to this control, without affecting other validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * Adding a validator that already exists will have no effect. If duplicate validator functions
   * are present in the `validators` array, only the first instance would be added to a form
   * control.
   *
   * @param validators The new validator function or functions to add to this control.
   */
  addValidators(validators) {
    this.setValidators(addValidators(validators, this._rawValidators));
  }
  /**
   * Add an asynchronous validator or validators to this control, without affecting other
   * validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * Adding a validator that already exists will have no effect.
   *
   * @param validators The new asynchronous validator function or functions to add to this control.
   */
  addAsyncValidators(validators) {
    this.setAsyncValidators(addValidators(validators, this._rawAsyncValidators));
  }
  /**
   * Remove a synchronous validator from this control, without affecting other validators.
   * Validators are compared by function reference; you must pass a reference to the exact same
   * validator function as the one that was originally set. If a provided validator is not found,
   * it is ignored.
   *
   * @usageNotes
   *
   * ### Reference to a ValidatorFn
   *
   * ```
   * // Reference to the RequiredValidator
   * const ctrl = new FormControl<string | null>('', Validators.required);
   * ctrl.removeValidators(Validators.required);
   *
   * // Reference to anonymous function inside MinValidator
   * const minValidator = Validators.min(3);
   * const ctrl = new FormControl<string | null>('', minValidator);
   * expect(ctrl.hasValidator(minValidator)).toEqual(true)
   * expect(ctrl.hasValidator(Validators.min(3))).toEqual(false)
   *
   * ctrl.removeValidators(minValidator);
   * ```
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * @param validators The validator or validators to remove.
   */
  removeValidators(validators) {
    this.setValidators(removeValidators(validators, this._rawValidators));
  }
  /**
   * Remove an asynchronous validator from this control, without affecting other validators.
   * Validators are compared by function reference; you must pass a reference to the exact same
   * validator function as the one that was originally set. If a provided validator is not found, it
   * is ignored.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * @param validators The asynchronous validator or validators to remove.
   */
  removeAsyncValidators(validators) {
    this.setAsyncValidators(removeValidators(validators, this._rawAsyncValidators));
  }
  /**
   * Check whether a synchronous validator function is present on this control. The provided
   * validator must be a reference to the exact same function that was provided.
   *
   * @usageNotes
   *
   * ### Reference to a ValidatorFn
   *
   * ```
   * // Reference to the RequiredValidator
   * const ctrl = new FormControl<number | null>(0, Validators.required);
   * expect(ctrl.hasValidator(Validators.required)).toEqual(true)
   *
   * // Reference to anonymous function inside MinValidator
   * const minValidator = Validators.min(3);
   * const ctrl = new FormControl<number | null>(0, minValidator);
   * expect(ctrl.hasValidator(minValidator)).toEqual(true)
   * expect(ctrl.hasValidator(Validators.min(3))).toEqual(false)
   * ```
   *
   * @param validator The validator to check for presence. Compared by function reference.
   * @returns Whether the provided validator was found on this control.
   */
  hasValidator(validator) {
    return hasValidator(this._rawValidators, validator);
  }
  /**
   * Check whether an asynchronous validator function is present on this control. The provided
   * validator must be a reference to the exact same function that was provided.
   *
   * @param validator The asynchronous validator to check for presence. Compared by function
   *     reference.
   * @returns Whether the provided asynchronous validator was found on this control.
   */
  hasAsyncValidator(validator) {
    return hasValidator(this._rawAsyncValidators, validator);
  }
  /**
   * Empties out the synchronous validator list.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   */
  clearValidators() {
    this.validator = null;
  }
  /**
   * Empties out the async validator list.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   */
  clearAsyncValidators() {
    this.asyncValidator = null;
  }
  markAsTouched(opts = {}) {
    const changed = this.touched === false;
    this.touched = true;
    const sourceControl = opts.sourceControl ?? this;
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsTouched(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new TouchedChangeEvent(true, sourceControl));
    }
  }
  /**
   * Marks the control and all its descendant controls as `touched`.
   * @see {@link markAsTouched()}
   *
   * @param opts Configuration options that determine how the control propagates changes
   * and emits events after marking is applied.
   * * `emitEvent`: When true or not supplied (the default), the `events`
   * observable emits a `TouchedChangeEvent` with the `touched` property being `true`.
   * When false, no events are emitted.
   */
  markAllAsTouched(opts = {}) {
    this.markAsTouched({
      onlySelf: true,
      emitEvent: opts.emitEvent,
      sourceControl: this
    });
    this._forEachChild((control) => control.markAllAsTouched(opts));
  }
  markAsUntouched(opts = {}) {
    const changed = this.touched === true;
    this.touched = false;
    this._pendingTouched = false;
    const sourceControl = opts.sourceControl ?? this;
    this._forEachChild((control) => {
      control.markAsUntouched({
        onlySelf: true,
        emitEvent: opts.emitEvent,
        sourceControl
      });
    });
    if (this._parent && !opts.onlySelf) {
      this._parent._updateTouched(opts, sourceControl);
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new TouchedChangeEvent(false, sourceControl));
    }
  }
  markAsDirty(opts = {}) {
    const changed = this.pristine === true;
    this.pristine = false;
    const sourceControl = opts.sourceControl ?? this;
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsDirty(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new PristineChangeEvent(false, sourceControl));
    }
  }
  markAsPristine(opts = {}) {
    const changed = this.pristine === false;
    this.pristine = true;
    this._pendingDirty = false;
    const sourceControl = opts.sourceControl ?? this;
    this._forEachChild((control) => {
      control.markAsPristine({
        onlySelf: true,
        emitEvent: opts.emitEvent
      });
    });
    if (this._parent && !opts.onlySelf) {
      this._parent._updatePristine(opts, sourceControl);
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new PristineChangeEvent(true, sourceControl));
    }
  }
  markAsPending(opts = {}) {
    this.status = PENDING;
    const sourceControl = opts.sourceControl ?? this;
    if (opts.emitEvent !== false) {
      this._events.next(new StatusChangeEvent(this.status, sourceControl));
      this.statusChanges.emit(this.status);
    }
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsPending(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
  }
  disable(opts = {}) {
    const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
    this.status = DISABLED;
    this.errors = null;
    this._forEachChild((control) => {
      control.disable(__spreadProps(__spreadValues({}, opts), {
        onlySelf: true
      }));
    });
    this._updateValue();
    const sourceControl = opts.sourceControl ?? this;
    if (opts.emitEvent !== false) {
      this._events.next(new ValueChangeEvent(this.value, sourceControl));
      this._events.next(new StatusChangeEvent(this.status, sourceControl));
      this.valueChanges.emit(this.value);
      this.statusChanges.emit(this.status);
    }
    this._updateAncestors(__spreadProps(__spreadValues({}, opts), {
      skipPristineCheck
    }), this);
    this._onDisabledChange.forEach((changeFn) => changeFn(true));
  }
  /**
   * Enables the control. This means the control is included in validation checks and
   * the aggregate value of its parent. Its status recalculates based on its value and
   * its validators.
   *
   * By default, if the control has children, all children are enabled.
   *
   * @see {@link AbstractControl.status}
   *
   * @param opts Configure options that control how the control propagates changes and
   * emits events when marked as untouched
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   * * `emitEvent`: When true or not supplied (the default), the `statusChanges`,
   * `valueChanges` and `events`
   * observables emit events with the latest status and value when the control is enabled.
   * When false, no events are emitted.
   */
  enable(opts = {}) {
    const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
    this.status = VALID;
    this._forEachChild((control) => {
      control.enable(__spreadProps(__spreadValues({}, opts), {
        onlySelf: true
      }));
    });
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: opts.emitEvent
    });
    this._updateAncestors(__spreadProps(__spreadValues({}, opts), {
      skipPristineCheck
    }), this);
    this._onDisabledChange.forEach((changeFn) => changeFn(false));
  }
  _updateAncestors(opts, sourceControl) {
    if (this._parent && !opts.onlySelf) {
      this._parent.updateValueAndValidity(opts);
      if (!opts.skipPristineCheck) {
        this._parent._updatePristine({}, sourceControl);
      }
      this._parent._updateTouched({}, sourceControl);
    }
  }
  /**
   * Sets the parent of the control
   *
   * @param parent The new parent.
   */
  setParent(parent) {
    this._parent = parent;
  }
  /**
   * The raw value of this control. For most control implementations, the raw value will include
   * disabled children.
   */
  getRawValue() {
    return this.value;
  }
  updateValueAndValidity(opts = {}) {
    this._setInitialStatus();
    this._updateValue();
    if (this.enabled) {
      const shouldHaveEmitted = this._cancelExistingSubscription();
      this.errors = this._runValidator();
      this.status = this._calculateStatus();
      if (this.status === VALID || this.status === PENDING) {
        this._runAsyncValidator(shouldHaveEmitted, opts.emitEvent);
      }
    }
    const sourceControl = opts.sourceControl ?? this;
    if (opts.emitEvent !== false) {
      this._events.next(new ValueChangeEvent(this.value, sourceControl));
      this._events.next(new StatusChangeEvent(this.status, sourceControl));
      this.valueChanges.emit(this.value);
      this.statusChanges.emit(this.status);
    }
    if (this._parent && !opts.onlySelf) {
      this._parent.updateValueAndValidity(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
  }
  /** @internal */
  _updateTreeValidity(opts = {
    emitEvent: true
  }) {
    this._forEachChild((ctrl) => ctrl._updateTreeValidity(opts));
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: opts.emitEvent
    });
  }
  _setInitialStatus() {
    this.status = this._allControlsDisabled() ? DISABLED : VALID;
  }
  _runValidator() {
    return this.validator ? this.validator(this) : null;
  }
  _runAsyncValidator(shouldHaveEmitted, emitEvent) {
    if (this.asyncValidator) {
      this.status = PENDING;
      this._hasOwnPendingAsyncValidator = {
        emitEvent: emitEvent !== false
      };
      const obs = toObservable(this.asyncValidator(this));
      this._asyncValidationSubscription = obs.subscribe((errors) => {
        this._hasOwnPendingAsyncValidator = null;
        this.setErrors(errors, {
          emitEvent,
          shouldHaveEmitted
        });
      });
    }
  }
  _cancelExistingSubscription() {
    if (this._asyncValidationSubscription) {
      this._asyncValidationSubscription.unsubscribe();
      const shouldHaveEmitted = this._hasOwnPendingAsyncValidator?.emitEvent ?? false;
      this._hasOwnPendingAsyncValidator = null;
      return shouldHaveEmitted;
    }
    return false;
  }
  setErrors(errors, opts = {}) {
    this.errors = errors;
    this._updateControlsErrors(opts.emitEvent !== false, this, opts.shouldHaveEmitted);
  }
  /**
   * Retrieves a child control given the control's name or path.
   *
   * @param path A dot-delimited string or array of string/number values that define the path to the
   * control. If a string is provided, passing it as a string literal will result in improved type
   * information. Likewise, if an array is provided, passing it `as const` will cause improved type
   * information to be available.
   *
   * @usageNotes
   * ### Retrieve a nested control
   *
   * For example, to get a `name` control nested within a `person` sub-group:
   *
   * * `this.form.get('person.name');`
   *
   * -OR-
   *
   * * `this.form.get(['person', 'name'] as const);` // `as const` gives improved typings
   *
   * ### Retrieve a control in a FormArray
   *
   * When accessing an element inside a FormArray, you can use an element index.
   * For example, to get a `price` control from the first element in an `items` array you can use:
   *
   * * `this.form.get('items.0.price');`
   *
   * -OR-
   *
   * * `this.form.get(['items', 0, 'price']);`
   */
  get(path) {
    let currPath = path;
    if (currPath == null) return null;
    if (!Array.isArray(currPath)) currPath = currPath.split(".");
    if (currPath.length === 0) return null;
    return currPath.reduce((control, name) => control && control._find(name), this);
  }
  /**
   * @description
   * Reports error data for the control with the given path.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * @returns error data for that particular error. If the control or error is not present,
   * null is returned.
   */
  getError(errorCode, path) {
    const control = path ? this.get(path) : this;
    return control && control.errors ? control.errors[errorCode] : null;
  }
  /**
   * @description
   * Reports whether the control with the given path has the error specified.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * If no path is given, this method checks for the error on the current control.
   *
   * @returns whether the given error is present in the control at the given path.
   *
   * If the control is not present, false is returned.
   */
  hasError(errorCode, path) {
    return !!this.getError(errorCode, path);
  }
  /**
   * Retrieves the top-level ancestor of this control.
   */
  get root() {
    let x = this;
    while (x._parent) {
      x = x._parent;
    }
    return x;
  }
  /** @internal */
  _updateControlsErrors(emitEvent, changedControl, shouldHaveEmitted) {
    this.status = this._calculateStatus();
    if (emitEvent) {
      this.statusChanges.emit(this.status);
    }
    if (emitEvent || shouldHaveEmitted) {
      this._events.next(new StatusChangeEvent(this.status, changedControl));
    }
    if (this._parent) {
      this._parent._updateControlsErrors(emitEvent, changedControl, shouldHaveEmitted);
    }
  }
  /** @internal */
  _initObservables() {
    this.valueChanges = new EventEmitter();
    this.statusChanges = new EventEmitter();
  }
  _calculateStatus() {
    if (this._allControlsDisabled()) return DISABLED;
    if (this.errors) return INVALID;
    if (this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(PENDING)) return PENDING;
    if (this._anyControlsHaveStatus(INVALID)) return INVALID;
    return VALID;
  }
  /** @internal */
  _anyControlsHaveStatus(status) {
    return this._anyControls((control) => control.status === status);
  }
  /** @internal */
  _anyControlsDirty() {
    return this._anyControls((control) => control.dirty);
  }
  /** @internal */
  _anyControlsTouched() {
    return this._anyControls((control) => control.touched);
  }
  /** @internal */
  _updatePristine(opts, changedControl) {
    const newPristine = !this._anyControlsDirty();
    const changed = this.pristine !== newPristine;
    this.pristine = newPristine;
    if (this._parent && !opts.onlySelf) {
      this._parent._updatePristine(opts, changedControl);
    }
    if (changed) {
      this._events.next(new PristineChangeEvent(this.pristine, changedControl));
    }
  }
  /** @internal */
  _updateTouched(opts = {}, changedControl) {
    this.touched = this._anyControlsTouched();
    this._events.next(new TouchedChangeEvent(this.touched, changedControl));
    if (this._parent && !opts.onlySelf) {
      this._parent._updateTouched(opts, changedControl);
    }
  }
  /** @internal */
  _onDisabledChange = [];
  /** @internal */
  _registerOnCollectionChange(fn) {
    this._onCollectionChange = fn;
  }
  /** @internal */
  _setUpdateStrategy(opts) {
    if (isOptionsObj(opts) && opts.updateOn != null) {
      this._updateOn = opts.updateOn;
    }
  }
  /**
   * Check to see if parent has been marked artificially dirty.
   *
   * @internal
   */
  _parentMarkedDirty(onlySelf) {
    const parentDirty = this._parent && this._parent.dirty;
    return !onlySelf && !!parentDirty && !this._parent._anyControlsDirty();
  }
  /** @internal */
  _find(name) {
    return null;
  }
  /**
   * Internal implementation of the `setValidators` method. Needs to be separated out into a
   * different method, because it is called in the constructor and it can break cases where
   * a control is extended.
   */
  _assignValidators(validators) {
    this._rawValidators = Array.isArray(validators) ? validators.slice() : validators;
    this._composedValidatorFn = coerceToValidator(this._rawValidators);
  }
  /**
   * Internal implementation of the `setAsyncValidators` method. Needs to be separated out into a
   * different method, because it is called in the constructor and it can break cases where
   * a control is extended.
   */
  _assignAsyncValidators(validators) {
    this._rawAsyncValidators = Array.isArray(validators) ? validators.slice() : validators;
    this._composedAsyncValidatorFn = coerceToAsyncValidator(this._rawAsyncValidators);
  }
};
var FormGroup = class extends AbstractControl {
  /**
   * Creates a new `FormGroup` instance.
   *
   * @param controls A collection of child controls. The key for each child is the name
   * under which it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or an `AbstractControlOptions` object that contains validation functions
   * and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions
   *
   */
  constructor(controls, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    (typeof ngDevMode === "undefined" || ngDevMode) && validateFormGroupControls(controls);
    this.controls = controls;
    this._initObservables();
    this._setUpdateStrategy(validatorOrOpts);
    this._setUpControls();
    this.updateValueAndValidity({
      onlySelf: true,
      // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
      // `VALID` or `INVALID`. The status should be broadcasted via the `statusChanges` observable,
      // so we set `emitEvent` to `true` to allow that during the control creation process.
      emitEvent: !!this.asyncValidator
    });
  }
  controls;
  registerControl(name, control) {
    if (this.controls[name]) return this.controls[name];
    this.controls[name] = control;
    control.setParent(this);
    control._registerOnCollectionChange(this._onCollectionChange);
    return control;
  }
  addControl(name, control, options = {}) {
    this.registerControl(name, control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  /**
   * Remove a control from this group. In a strongly-typed group, required controls cannot be
   * removed.
   *
   * This method also updates the value and validity of the control.
   *
   * @param name The control name to remove from the collection
   * @param options Specifies whether this FormGroup instance should emit events after a
   *     control is removed.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * removed. When false, no events are emitted.
   */
  removeControl(name, options = {}) {
    if (this.controls[name]) this.controls[name]._registerOnCollectionChange(() => {
    });
    delete this.controls[name];
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  setControl(name, control, options = {}) {
    if (this.controls[name]) this.controls[name]._registerOnCollectionChange(() => {
    });
    delete this.controls[name];
    if (control) this.registerControl(name, control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  contains(controlName) {
    return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
  }
  /**
   * Sets the value of the `FormGroup`. It accepts an object that matches
   * the structure of the group, with control names as keys.
   *
   * @usageNotes
   * ### Set the complete value for the form group
   *
   * ```
   * const form = new FormGroup({
   *   first: new FormControl(),
   *   last: new FormControl()
   * });
   *
   * console.log(form.value);   // {first: null, last: null}
   *
   * form.setValue({first: 'Nancy', last: 'Drew'});
   * console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
   * ```
   *
   * @throws When strict checks fail, such as setting the value of a control
   * that doesn't exist or if you exclude a value of a control that does exist.
   *
   * @param value The new value for the control that matches the structure of the group.
   * @param options Configuration options that determine how the control propagates changes
   * and emits events after the value changes.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
   * false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control value is updated.
   * When false, no events are emitted.
   */
  setValue(value, options = {}) {
    assertAllValuesPresent(this, true, value);
    Object.keys(value).forEach((name) => {
      assertControlPresent(this, true, name);
      this.controls[name].setValue(value[name], {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Patches the value of the `FormGroup`. It accepts an object with control
   * names as keys, and does its best to match the values to the correct controls
   * in the group.
   *
   * It accepts both super-sets and sub-sets of the group without throwing an error.
   *
   * @usageNotes
   * ### Patch the value for a form group
   *
   * ```
   * const form = new FormGroup({
   *    first: new FormControl(),
   *    last: new FormControl()
   * });
   * console.log(form.value);   // {first: null, last: null}
   *
   * form.patchValue({first: 'Nancy'});
   * console.log(form.value);   // {first: 'Nancy', last: null}
   * ```
   *
   * @param value The object that matches the structure of the group.
   * @param options Configuration options that determine how the control propagates changes and
   * emits events after the value is patched.
   * * `onlySelf`: When true, each change only affects this control and not its parent. Default is
   * true.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control value
   * is updated. When false, no events are emitted. The configuration options are passed to
   * the {@link AbstractControl#updateValueAndValidity updateValueAndValidity} method.
   */
  patchValue(value, options = {}) {
    if (value == null) return;
    Object.keys(value).forEach((name) => {
      const control = this.controls[name];
      if (control) {
        control.patchValue(
          /* Guaranteed to be present, due to the outer forEach. */
          value[name],
          {
            onlySelf: true,
            emitEvent: options.emitEvent
          }
        );
      }
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Resets the `FormGroup`, marks all descendants `pristine` and `untouched` and sets
   * the value of all descendants to their default values, or null if no defaults were provided.
   *
   * You reset to a specific form state by passing in a map of states
   * that matches the structure of your form, with control names as keys. The state
   * is a standalone value or a form state object with both a value and a disabled
   * status.
   *
   * @param value Resets the control with an initial value,
   * or an object that defines the initial value and disabled state.
   *
   * @param options Configuration options that determine how the control propagates changes
   * and emits events when the group is reset.
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
   * false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is reset.
   * When false, no events are emitted.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   *
   * @usageNotes
   *
   * ### Reset the form group values
   *
   * ```ts
   * const form = new FormGroup({
   *   first: new FormControl('first name'),
   *   last: new FormControl('last name')
   * });
   *
   * console.log(form.value);  // {first: 'first name', last: 'last name'}
   *
   * form.reset({ first: 'name', last: 'last name' });
   *
   * console.log(form.value);  // {first: 'name', last: 'last name'}
   * ```
   *
   * ### Reset the form group values and disabled status
   *
   * ```
   * const form = new FormGroup({
   *   first: new FormControl('first name'),
   *   last: new FormControl('last name')
   * });
   *
   * form.reset({
   *   first: {value: 'name', disabled: true},
   *   last: 'last'
   * });
   *
   * console.log(form.value);  // {last: 'last'}
   * console.log(form.get('first').status);  // 'DISABLED'
   * ```
   */
  reset(value = {}, options = {}) {
    this._forEachChild((control, name) => {
      control.reset(value ? value[name] : null, {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this._updatePristine(options, this);
    this._updateTouched(options, this);
    this.updateValueAndValidity(options);
  }
  /**
   * The aggregate value of the `FormGroup`, including any disabled controls.
   *
   * Retrieves all values regardless of disabled status.
   */
  getRawValue() {
    return this._reduceChildren({}, (acc, control, name) => {
      acc[name] = control.getRawValue();
      return acc;
    });
  }
  /** @internal */
  _syncPendingControls() {
    let subtreeUpdated = this._reduceChildren(false, (updated, child) => {
      return child._syncPendingControls() ? true : updated;
    });
    if (subtreeUpdated) this.updateValueAndValidity({
      onlySelf: true
    });
    return subtreeUpdated;
  }
  /** @internal */
  _forEachChild(cb) {
    Object.keys(this.controls).forEach((key) => {
      const control = this.controls[key];
      control && cb(control, key);
    });
  }
  /** @internal */
  _setUpControls() {
    this._forEachChild((control) => {
      control.setParent(this);
      control._registerOnCollectionChange(this._onCollectionChange);
    });
  }
  /** @internal */
  _updateValue() {
    this.value = this._reduceValue();
  }
  /** @internal */
  _anyControls(condition) {
    for (const [controlName, control] of Object.entries(this.controls)) {
      if (this.contains(controlName) && condition(control)) {
        return true;
      }
    }
    return false;
  }
  /** @internal */
  _reduceValue() {
    let acc = {};
    return this._reduceChildren(acc, (acc2, control, name) => {
      if (control.enabled || this.disabled) {
        acc2[name] = control.value;
      }
      return acc2;
    });
  }
  /** @internal */
  _reduceChildren(initValue, fn) {
    let res = initValue;
    this._forEachChild((control, name) => {
      res = fn(res, control, name);
    });
    return res;
  }
  /** @internal */
  _allControlsDisabled() {
    for (const controlName of Object.keys(this.controls)) {
      if (this.controls[controlName].enabled) {
        return false;
      }
    }
    return Object.keys(this.controls).length > 0 || this.disabled;
  }
  /** @internal */
  _find(name) {
    return this.controls.hasOwnProperty(name) ? this.controls[name] : null;
  }
};
function validateFormGroupControls(controls) {
  const invalidKeys = Object.keys(controls).filter((key) => key.includes("."));
  if (invalidKeys.length > 0) {
    console.warn(`FormGroup keys cannot include \`.\`, please replace the keys for: ${invalidKeys.join(",")}.`);
  }
}
var FormRecord = class extends FormGroup {
};
var CALL_SET_DISABLED_STATE = new InjectionToken("CallSetDisabledState", {
  providedIn: "root",
  factory: () => setDisabledStateDefault
});
var setDisabledStateDefault = "always";
function controlPath(name, parent) {
  return [...parent.path, name];
}
function setUpControl(control, dir, callSetDisabledState = setDisabledStateDefault) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (!control) _throwError(dir, "Cannot find control with");
    if (!dir.valueAccessor) _throwMissingValueAccessorError(dir);
  }
  setUpValidators(control, dir);
  dir.valueAccessor.writeValue(control.value);
  if (control.disabled || callSetDisabledState === "always") {
    dir.valueAccessor.setDisabledState?.(control.disabled);
  }
  setUpViewChangePipeline(control, dir);
  setUpModelChangePipeline(control, dir);
  setUpBlurPipeline(control, dir);
  setUpDisabledChangeHandler(control, dir);
}
function cleanUpControl(control, dir, validateControlPresenceOnChange = true) {
  const noop2 = () => {
    if (validateControlPresenceOnChange && (typeof ngDevMode === "undefined" || ngDevMode)) {
      _noControlError(dir);
    }
  };
  if (dir.valueAccessor) {
    dir.valueAccessor.registerOnChange(noop2);
    dir.valueAccessor.registerOnTouched(noop2);
  }
  cleanUpValidators(control, dir);
  if (control) {
    dir._invokeOnDestroyCallbacks();
    control._registerOnCollectionChange(() => {
    });
  }
}
function registerOnValidatorChange(validators, onChange) {
  validators.forEach((validator) => {
    if (validator.registerOnValidatorChange) validator.registerOnValidatorChange(onChange);
  });
}
function setUpDisabledChangeHandler(control, dir) {
  if (dir.valueAccessor.setDisabledState) {
    const onDisabledChange = (isDisabled) => {
      dir.valueAccessor.setDisabledState(isDisabled);
    };
    control.registerOnDisabledChange(onDisabledChange);
    dir._registerOnDestroy(() => {
      control._unregisterOnDisabledChange(onDisabledChange);
    });
  }
}
function setUpValidators(control, dir) {
  const validators = getControlValidators(control);
  if (dir.validator !== null) {
    control.setValidators(mergeValidators(validators, dir.validator));
  } else if (typeof validators === "function") {
    control.setValidators([validators]);
  }
  const asyncValidators = getControlAsyncValidators(control);
  if (dir.asyncValidator !== null) {
    control.setAsyncValidators(mergeValidators(asyncValidators, dir.asyncValidator));
  } else if (typeof asyncValidators === "function") {
    control.setAsyncValidators([asyncValidators]);
  }
  const onValidatorChange = () => control.updateValueAndValidity();
  registerOnValidatorChange(dir._rawValidators, onValidatorChange);
  registerOnValidatorChange(dir._rawAsyncValidators, onValidatorChange);
}
function cleanUpValidators(control, dir) {
  let isControlUpdated = false;
  if (control !== null) {
    if (dir.validator !== null) {
      const validators = getControlValidators(control);
      if (Array.isArray(validators) && validators.length > 0) {
        const updatedValidators = validators.filter((validator) => validator !== dir.validator);
        if (updatedValidators.length !== validators.length) {
          isControlUpdated = true;
          control.setValidators(updatedValidators);
        }
      }
    }
    if (dir.asyncValidator !== null) {
      const asyncValidators = getControlAsyncValidators(control);
      if (Array.isArray(asyncValidators) && asyncValidators.length > 0) {
        const updatedAsyncValidators = asyncValidators.filter((asyncValidator) => asyncValidator !== dir.asyncValidator);
        if (updatedAsyncValidators.length !== asyncValidators.length) {
          isControlUpdated = true;
          control.setAsyncValidators(updatedAsyncValidators);
        }
      }
    }
  }
  const noop2 = () => {
  };
  registerOnValidatorChange(dir._rawValidators, noop2);
  registerOnValidatorChange(dir._rawAsyncValidators, noop2);
  return isControlUpdated;
}
function setUpViewChangePipeline(control, dir) {
  dir.valueAccessor.registerOnChange((newValue) => {
    control._pendingValue = newValue;
    control._pendingChange = true;
    control._pendingDirty = true;
    if (control.updateOn === "change") updateControl(control, dir);
  });
}
function setUpBlurPipeline(control, dir) {
  dir.valueAccessor.registerOnTouched(() => {
    control._pendingTouched = true;
    if (control.updateOn === "blur" && control._pendingChange) updateControl(control, dir);
    if (control.updateOn !== "submit") control.markAsTouched();
  });
}
function updateControl(control, dir) {
  if (control._pendingDirty) control.markAsDirty();
  control.setValue(control._pendingValue, {
    emitModelToViewChange: false
  });
  dir.viewToModelUpdate(control._pendingValue);
  control._pendingChange = false;
}
function setUpModelChangePipeline(control, dir) {
  const onChange = (newValue, emitModelEvent) => {
    dir.valueAccessor.writeValue(newValue);
    if (emitModelEvent) dir.viewToModelUpdate(newValue);
  };
  control.registerOnChange(onChange);
  dir._registerOnDestroy(() => {
    control._unregisterOnChange(onChange);
  });
}
function setUpFormContainer(control, dir) {
  if (control == null && (typeof ngDevMode === "undefined" || ngDevMode)) _throwError(dir, "Cannot find control with");
  setUpValidators(control, dir);
}
function cleanUpFormContainer(control, dir) {
  return cleanUpValidators(control, dir);
}
function _noControlError(dir) {
  return _throwError(dir, "There is no FormControl instance attached to form control element with");
}
function _throwError(dir, message) {
  const messageEnd = _describeControlLocation(dir);
  throw new Error(`${message} ${messageEnd}`);
}
function _describeControlLocation(dir) {
  const path = dir.path;
  if (path && path.length > 1) return `path: '${path.join(" -> ")}'`;
  if (path?.[0]) return `name: '${path}'`;
  return "unspecified name attribute";
}
function _throwMissingValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(-1203, `No value accessor for form control ${loc}.`);
}
function _throwInvalidValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(1200, `Value accessor was not provided as an array for form control with ${loc}. Check that the \`NG_VALUE_ACCESSOR\` token is configured as a \`multi: true\` provider.`);
}
function isPropertyUpdated(changes, viewModel) {
  if (!changes.hasOwnProperty("model")) return false;
  const change = changes["model"];
  if (change.isFirstChange()) return true;
  return !Object.is(viewModel, change.currentValue);
}
function isBuiltInAccessor(valueAccessor) {
  return Object.getPrototypeOf(valueAccessor.constructor) === BuiltInControlValueAccessor;
}
function syncPendingControls(form, directives) {
  form._syncPendingControls();
  directives.forEach((dir) => {
    const control = dir.control;
    if (control.updateOn === "submit" && control._pendingChange) {
      dir.viewToModelUpdate(control._pendingValue);
      control._pendingChange = false;
    }
  });
}
function selectValueAccessor(dir, valueAccessors) {
  if (!valueAccessors) return null;
  if (!Array.isArray(valueAccessors) && (typeof ngDevMode === "undefined" || ngDevMode)) _throwInvalidValueAccessorError(dir);
  let defaultAccessor = void 0;
  let builtinAccessor = void 0;
  let customAccessor = void 0;
  valueAccessors.forEach((v) => {
    if (v.constructor === DefaultValueAccessor) {
      defaultAccessor = v;
    } else if (isBuiltInAccessor(v)) {
      if (builtinAccessor && (typeof ngDevMode === "undefined" || ngDevMode)) _throwError(dir, "More than one built-in value accessor matches form control with");
      builtinAccessor = v;
    } else {
      if (customAccessor && (typeof ngDevMode === "undefined" || ngDevMode)) _throwError(dir, "More than one custom value accessor matches form control with");
      customAccessor = v;
    }
  });
  if (customAccessor) return customAccessor;
  if (builtinAccessor) return builtinAccessor;
  if (defaultAccessor) return defaultAccessor;
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    _throwError(dir, "No valid value accessor for form control with");
  }
  return null;
}
function removeListItem$1(list, el) {
  const index = list.indexOf(el);
  if (index > -1) list.splice(index, 1);
}
function _ngModelWarning(name, type, instance, warningConfig) {
  if (warningConfig === "never") return;
  if ((warningConfig === null || warningConfig === "once") && !type._ngModelWarningSentOnce || warningConfig === "always" && !instance._ngModelWarningSent) {
    console.warn(ngModelWarning(name));
    type._ngModelWarningSentOnce = true;
    instance._ngModelWarningSent = true;
  }
}
var formDirectiveProvider$1 = {
  provide: ControlContainer,
  useExisting: forwardRef(() => NgForm)
};
var resolvedPromise$1 = (() => Promise.resolve())();
var NgForm = class _NgForm extends ControlContainer {
  callSetDisabledState;
  /**
   * @description
   * Returns whether the form submission has been triggered.
   */
  get submitted() {
    return untracked(this.submittedReactive);
  }
  /** @internal */
  _submitted = computed(() => this.submittedReactive());
  submittedReactive = signal(false);
  _directives = /* @__PURE__ */ new Set();
  /**
   * @description
   * The `FormGroup` instance created for this form.
   */
  form;
  /**
   * @description
   * Event emitter for the "ngSubmit" event
   */
  ngSubmit = new EventEmitter();
  /**
   * @description
   * Tracks options for the `NgForm` instance.
   *
   * **updateOn**: Sets the default `updateOn` value for all child `NgModels` below it
   * unless explicitly set by a child `NgModel` using `ngModelOptions`). Defaults to 'change'.
   * Possible values: `'change'` | `'blur'` | `'submit'`.
   *
   */
  // TODO(issue/24571): remove '!'.
  options;
  constructor(validators, asyncValidators, callSetDisabledState) {
    super();
    this.callSetDisabledState = callSetDisabledState;
    this.form = new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
  }
  /** @nodoc */
  ngAfterViewInit() {
    this._setUpdateStrategy();
  }
  /**
   * @description
   * The directive instance.
   */
  get formDirective() {
    return this;
  }
  /**
   * @description
   * The internal `FormGroup` instance.
   */
  get control() {
    return this.form;
  }
  /**
   * @description
   * Returns an array representing the path to this group. Because this directive
   * always lives at the top level of a form, it is always an empty array.
   */
  get path() {
    return [];
  }
  /**
   * @description
   * Returns a map of the controls in this group.
   */
  get controls() {
    return this.form.controls;
  }
  /**
   * @description
   * Method that sets up the control directive in this group, re-calculates its value
   * and validity, and adds the instance to the internal list of directives.
   *
   * @param dir The `NgModel` directive instance.
   */
  addControl(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      dir.control = container.registerControl(dir.name, dir.control);
      setUpControl(dir.control, dir, this.callSetDisabledState);
      dir.control.updateValueAndValidity({
        emitEvent: false
      });
      this._directives.add(dir);
    });
  }
  /**
   * @description
   * Retrieves the `FormControl` instance from the provided `NgModel` directive.
   *
   * @param dir The `NgModel` directive instance.
   */
  getControl(dir) {
    return this.form.get(dir.path);
  }
  /**
   * @description
   * Removes the `NgModel` instance from the internal list of directives
   *
   * @param dir The `NgModel` directive instance.
   */
  removeControl(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      if (container) {
        container.removeControl(dir.name);
      }
      this._directives.delete(dir);
    });
  }
  /**
   * @description
   * Adds a new `NgModelGroup` directive instance to the form.
   *
   * @param dir The `NgModelGroup` directive instance.
   */
  addFormGroup(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      const group = new FormGroup({});
      setUpFormContainer(group, dir);
      container.registerControl(dir.name, group);
      group.updateValueAndValidity({
        emitEvent: false
      });
    });
  }
  /**
   * @description
   * Removes the `NgModelGroup` directive instance from the form.
   *
   * @param dir The `NgModelGroup` directive instance.
   */
  removeFormGroup(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      if (container) {
        container.removeControl(dir.name);
      }
    });
  }
  /**
   * @description
   * Retrieves the `FormGroup` for a provided `NgModelGroup` directive instance
   *
   * @param dir The `NgModelGroup` directive instance.
   */
  getFormGroup(dir) {
    return this.form.get(dir.path);
  }
  /**
   * Sets the new value for the provided `NgControl` directive.
   *
   * @param dir The `NgControl` directive instance.
   * @param value The new value for the directive's control.
   */
  updateModel(dir, value) {
    resolvedPromise$1.then(() => {
      const ctrl = this.form.get(dir.path);
      ctrl.setValue(value);
    });
  }
  /**
   * @description
   * Sets the value for this `FormGroup`.
   *
   * @param value The new value
   */
  setValue(value) {
    this.control.setValue(value);
  }
  /**
   * @description
   * Method called when the "submit" event is triggered on the form.
   * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
   *
   * @param $event The "submit" event object
   */
  onSubmit($event) {
    this.submittedReactive.set(true);
    syncPendingControls(this.form, this._directives);
    this.ngSubmit.emit($event);
    return $event?.target?.method === "dialog";
  }
  /**
   * @description
   * Method called when the "reset" event is triggered on the form.
   */
  onReset() {
    this.resetForm();
  }
  /**
   * @description
   * Resets the form to an initial value and resets its submitted status.
   *
   * @param value The new value for the form.
   */
  resetForm(value = void 0) {
    this.form.reset(value);
    this.submittedReactive.set(false);
  }
  _setUpdateStrategy() {
    if (this.options && this.options.updateOn != null) {
      this.form._updateOn = this.options.updateOn;
    }
  }
  _findContainer(path) {
    path.pop();
    return path.length ? this.form.get(path) : this.form;
  }
  static \u0275fac = function NgForm_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgForm)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgForm,
    selectors: [["form", 3, "ngNoForm", "", 3, "formGroup", ""], ["ng-form"], ["", "ngForm", ""]],
    hostBindings: function NgForm_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("submit", function NgForm_submit_HostBindingHandler($event) {
          return ctx.onSubmit($event);
        })("reset", function NgForm_reset_HostBindingHandler() {
          return ctx.onReset();
        });
      }
    },
    inputs: {
      options: [0, "ngFormOptions", "options"]
    },
    outputs: {
      ngSubmit: "ngSubmit"
    },
    exportAs: ["ngForm"],
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formDirectiveProvider$1]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgForm, [{
    type: Directive,
    args: [{
      selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]",
      providers: [formDirectiveProvider$1],
      host: {
        "(submit)": "onSubmit($event)",
        "(reset)": "onReset()"
      },
      outputs: ["ngSubmit"],
      exportAs: "ngForm",
      standalone: false
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    options: [{
      type: Input,
      args: ["ngFormOptions"]
    }]
  });
})();
function removeListItem(list, el) {
  const index = list.indexOf(el);
  if (index > -1) list.splice(index, 1);
}
function isFormControlState(formState) {
  return typeof formState === "object" && formState !== null && Object.keys(formState).length === 2 && "value" in formState && "disabled" in formState;
}
var FormControl = class FormControl2 extends AbstractControl {
  /** @publicApi */
  defaultValue = null;
  /** @internal */
  _onChange = [];
  /** @internal */
  _pendingValue;
  /** @internal */
  _pendingChange = false;
  constructor(formState = null, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    this._applyFormState(formState);
    this._setUpdateStrategy(validatorOrOpts);
    this._initObservables();
    this.updateValueAndValidity({
      onlySelf: true,
      // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
      // `VALID` or `INVALID`.
      // The status should be broadcasted via the `statusChanges` observable, so we set
      // `emitEvent` to `true` to allow that during the control creation process.
      emitEvent: !!this.asyncValidator
    });
    if (isOptionsObj(validatorOrOpts) && (validatorOrOpts.nonNullable || validatorOrOpts.initialValueIsDefault)) {
      if (isFormControlState(formState)) {
        this.defaultValue = formState.value;
      } else {
        this.defaultValue = formState;
      }
    }
  }
  setValue(value, options = {}) {
    this.value = this._pendingValue = value;
    if (this._onChange.length && options.emitModelToViewChange !== false) {
      this._onChange.forEach((changeFn) => changeFn(this.value, options.emitViewToModelChange !== false));
    }
    this.updateValueAndValidity(options);
  }
  patchValue(value, options = {}) {
    this.setValue(value, options);
  }
  reset(formState = this.defaultValue, options = {}) {
    this._applyFormState(formState);
    this.markAsPristine(options);
    this.markAsUntouched(options);
    this.setValue(this.value, options);
    this._pendingChange = false;
  }
  /**  @internal */
  _updateValue() {
  }
  /**  @internal */
  _anyControls(condition) {
    return false;
  }
  /**  @internal */
  _allControlsDisabled() {
    return this.disabled;
  }
  registerOnChange(fn) {
    this._onChange.push(fn);
  }
  /** @internal */
  _unregisterOnChange(fn) {
    removeListItem(this._onChange, fn);
  }
  registerOnDisabledChange(fn) {
    this._onDisabledChange.push(fn);
  }
  /** @internal */
  _unregisterOnDisabledChange(fn) {
    removeListItem(this._onDisabledChange, fn);
  }
  /** @internal */
  _forEachChild(cb) {
  }
  /** @internal */
  _syncPendingControls() {
    if (this.updateOn === "submit") {
      if (this._pendingDirty) this.markAsDirty();
      if (this._pendingTouched) this.markAsTouched();
      if (this._pendingChange) {
        this.setValue(this._pendingValue, {
          onlySelf: true,
          emitModelToViewChange: false
        });
        return true;
      }
    }
    return false;
  }
  _applyFormState(formState) {
    if (isFormControlState(formState)) {
      this.value = this._pendingValue = formState.value;
      formState.disabled ? this.disable({
        onlySelf: true,
        emitEvent: false
      }) : this.enable({
        onlySelf: true,
        emitEvent: false
      });
    } else {
      this.value = this._pendingValue = formState;
    }
  }
};
var isFormControl = (control) => control instanceof FormControl;
var AbstractFormGroupDirective = class _AbstractFormGroupDirective extends ControlContainer {
  /**
   * @description
   * The parent control for the group
   *
   * @internal
   */
  // TODO(issue/24571): remove '!'.
  _parent;
  /** @nodoc */
  ngOnInit() {
    this._checkParentType();
    this.formDirective.addFormGroup(this);
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.formDirective) {
      this.formDirective.removeFormGroup(this);
    }
  }
  /**
   * @description
   * The `FormGroup` bound to this directive.
   */
  get control() {
    return this.formDirective.getFormGroup(this);
  }
  /**
   * @description
   * The path to this group from the top-level directive.
   */
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  /**
   * @description
   * The top-level directive for this group if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  /** @internal */
  _checkParentType() {
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AbstractFormGroupDirective_BaseFactory;
    return function AbstractFormGroupDirective_Factory(__ngFactoryType__) {
      return (\u0275AbstractFormGroupDirective_BaseFactory || (\u0275AbstractFormGroupDirective_BaseFactory = \u0275\u0275getInheritedFactory(_AbstractFormGroupDirective)))(__ngFactoryType__ || _AbstractFormGroupDirective);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _AbstractFormGroupDirective,
    standalone: false,
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractFormGroupDirective, [{
    type: Directive,
    args: [{
      standalone: false
    }]
  }], null, null);
})();
function modelParentException() {
  return new RuntimeError(1350, `
    ngModel cannot be used to register form controls with a parent formGroup directive.  Try using
    formGroup's partner directive "formControlName" instead.  Example:

    ${formControlNameExample}

    Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:

    Example:

    ${ngModelWithFormGroupExample}`);
}
function formGroupNameException() {
  return new RuntimeError(1351, `
    ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.

    Option 1: Use formControlName instead of ngModel (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):

    ${ngModelGroupExample}`);
}
function missingNameException() {
  return new RuntimeError(1352, `If ngModel is used within a form tag, either the name attribute must be set or the form
    control must be defined as 'standalone' in ngModelOptions.

    Example 1: <input [(ngModel)]="person.firstName" name="first">
    Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">`);
}
function modelGroupParentException() {
  return new RuntimeError(1353, `
    ngModelGroup cannot be used with a parent formGroup directive.

    Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):

    ${ngModelGroupExample}`);
}
var modelGroupProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => NgModelGroup)
};
var NgModelGroup = class _NgModelGroup extends AbstractFormGroupDirective {
  /**
   * @description
   * Tracks the name of the `NgModelGroup` bound to the directive. The name corresponds
   * to a key in the parent `NgForm`.
   */
  name = "";
  constructor(parent, validators, asyncValidators) {
    super();
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /** @internal */
  _checkParentType() {
    if (!(this._parent instanceof _NgModelGroup) && !(this._parent instanceof NgForm) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw modelGroupParentException();
    }
  }
  static \u0275fac = function NgModelGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgModelGroup)(\u0275\u0275directiveInject(ControlContainer, 5), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgModelGroup,
    selectors: [["", "ngModelGroup", ""]],
    inputs: {
      name: [0, "ngModelGroup", "name"]
    },
    exportAs: ["ngModelGroup"],
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([modelGroupProvider]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgModelGroup, [{
    type: Directive,
    args: [{
      selector: "[ngModelGroup]",
      providers: [modelGroupProvider],
      exportAs: "ngModelGroup",
      standalone: false
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["ngModelGroup"]
    }]
  });
})();
var formControlBinding$1 = {
  provide: NgControl,
  useExisting: forwardRef(() => NgModel)
};
var resolvedPromise = (() => Promise.resolve())();
var NgModel = class _NgModel extends NgControl {
  _changeDetectorRef;
  callSetDisabledState;
  control = new FormControl();
  // At runtime we coerce arbitrary values assigned to the "disabled" input to a "boolean".
  // This is not reflected in the type of the property because outside of templates, consumers
  // should only deal with booleans. In templates, a string is allowed for convenience and to
  // match the native "disabled attribute" semantics which can be observed on input elements.
  // This static member tells the compiler that values of type "string" can also be assigned
  // to the input in a template.
  /** @nodoc */
  static ngAcceptInputType_isDisabled;
  /** @internal */
  _registered = false;
  /**
   * Internal reference to the view model value.
   * @nodoc
   */
  viewModel;
  /**
   * @description
   * Tracks the name bound to the directive. If a parent form exists, it
   * uses this name as a key to retrieve this control's value.
   */
  name = "";
  /**
   * @description
   * Tracks whether the control is disabled.
   */
  // TODO(issue/24571): remove '!'.
  isDisabled;
  /**
   * @description
   * Tracks the value bound to this directive.
   */
  model;
  /**
   * @description
   * Tracks the configuration options for this `ngModel` instance.
   *
   * **name**: An alternative to setting the name attribute on the form control element. See
   * the [example](api/forms/NgModel#using-ngmodel-on-a-standalone-control) for using `NgModel`
   * as a standalone control.
   *
   * **standalone**: When set to true, the `ngModel` will not register itself with its parent form,
   * and acts as if it's not in the form. Defaults to false. If no parent form exists, this option
   * has no effect.
   *
   * **updateOn**: Defines the event upon which the form control value and validity update.
   * Defaults to 'change'. Possible values: `'change'` | `'blur'` | `'submit'`.
   *
   */
  // TODO(issue/24571): remove '!'.
  options;
  /**
   * @description
   * Event emitter for producing the `ngModelChange` event after
   * the view model updates.
   */
  update = new EventEmitter();
  constructor(parent, validators, asyncValidators, valueAccessors, _changeDetectorRef, callSetDisabledState) {
    super();
    this._changeDetectorRef = _changeDetectorRef;
    this.callSetDisabledState = callSetDisabledState;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    this._checkForErrors();
    if (!this._registered || "name" in changes) {
      if (this._registered) {
        this._checkName();
        if (this.formDirective) {
          const oldName = changes["name"].previousValue;
          this.formDirective.removeControl({
            name: oldName,
            path: this._getPath(oldName)
          });
        }
      }
      this._setUpControl();
    }
    if ("isDisabled" in changes) {
      this._updateDisabled(changes);
    }
    if (isPropertyUpdated(changes, this.viewModel)) {
      this._updateValue(this.model);
      this.viewModel = this.model;
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    this.formDirective && this.formDirective.removeControl(this);
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return this._getPath(this.name);
  }
  /**
   * @description
   * The top-level directive for this control if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  /**
   * @description
   * Sets the new value for the view model and emits an `ngModelChange` event.
   *
   * @param newValue The new value emitted by `ngModelChange`.
   */
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  _setUpControl() {
    this._setUpdateStrategy();
    this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this);
    this._registered = true;
  }
  _setUpdateStrategy() {
    if (this.options && this.options.updateOn != null) {
      this.control._updateOn = this.options.updateOn;
    }
  }
  _isStandalone() {
    return !this._parent || !!(this.options && this.options.standalone);
  }
  _setUpStandalone() {
    setUpControl(this.control, this, this.callSetDisabledState);
    this.control.updateValueAndValidity({
      emitEvent: false
    });
  }
  _checkForErrors() {
    if (!this._isStandalone()) {
      this._checkParentType();
    }
    this._checkName();
  }
  _checkParentType() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!(this._parent instanceof NgModelGroup) && this._parent instanceof AbstractFormGroupDirective) {
        throw formGroupNameException();
      } else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
        throw modelParentException();
      }
    }
  }
  _checkName() {
    if (this.options && this.options.name) this.name = this.options.name;
    if (!this._isStandalone() && !this.name && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw missingNameException();
    }
  }
  _updateValue(value) {
    resolvedPromise.then(() => {
      this.control.setValue(value, {
        emitViewToModelChange: false
      });
      this._changeDetectorRef?.markForCheck();
    });
  }
  _updateDisabled(changes) {
    const disabledValue = changes["isDisabled"].currentValue;
    const isDisabled = disabledValue !== 0 && booleanAttribute(disabledValue);
    resolvedPromise.then(() => {
      if (isDisabled && !this.control.disabled) {
        this.control.disable();
      } else if (!isDisabled && this.control.disabled) {
        this.control.enable();
      }
      this._changeDetectorRef?.markForCheck();
    });
  }
  _getPath(controlName) {
    return this._parent ? controlPath(controlName, this._parent) : [controlName];
  }
  static \u0275fac = function NgModel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgModel)(\u0275\u0275directiveInject(ControlContainer, 9), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(ChangeDetectorRef, 8), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgModel,
    selectors: [["", "ngModel", "", 3, "formControlName", "", 3, "formControl", ""]],
    inputs: {
      name: "name",
      isDisabled: [0, "disabled", "isDisabled"],
      model: [0, "ngModel", "model"],
      options: [0, "ngModelOptions", "options"]
    },
    outputs: {
      update: "ngModelChange"
    },
    exportAs: ["ngModel"],
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formControlBinding$1]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgModel, [{
    type: Directive,
    args: [{
      selector: "[ngModel]:not([formControlName]):not([formControl])",
      providers: [formControlBinding$1],
      exportAs: "ngModel",
      standalone: false
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: ChangeDetectorRef,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ChangeDetectorRef]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    name: [{
      type: Input
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    options: [{
      type: Input,
      args: ["ngModelOptions"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
var \u0275NgNoValidate = class _\u0275NgNoValidate {
  static \u0275fac = function \u0275NgNoValidate_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _\u0275NgNoValidate)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _\u0275NgNoValidate,
    selectors: [["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]],
    hostAttrs: ["novalidate", ""],
    standalone: false
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275NgNoValidate, [{
    type: Directive,
    args: [{
      selector: "form:not([ngNoForm]):not([ngNativeValidate])",
      host: {
        "novalidate": ""
      },
      standalone: false
    }]
  }], null, null);
})();
var NUMBER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NumberValueAccessor),
  multi: true
};
var NumberValueAccessor = class _NumberValueAccessor extends BuiltInControlValueAccessor {
  /**
   * Sets the "value" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    const normalizedValue = value == null ? "" : value;
    this.setProperty("value", normalizedValue);
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (value) => {
      fn(value == "" ? null : parseFloat(value));
    };
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275NumberValueAccessor_BaseFactory;
    return function NumberValueAccessor_Factory(__ngFactoryType__) {
      return (\u0275NumberValueAccessor_BaseFactory || (\u0275NumberValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_NumberValueAccessor)))(__ngFactoryType__ || _NumberValueAccessor);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NumberValueAccessor,
    selectors: [["input", "type", "number", "formControlName", ""], ["input", "type", "number", "formControl", ""], ["input", "type", "number", "ngModel", ""]],
    hostBindings: function NumberValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("input", function NumberValueAccessor_input_HostBindingHandler($event) {
          return ctx.onChange($event.target.value);
        })("blur", function NumberValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([NUMBER_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NumberValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]",
      host: {
        "(input)": "onChange($event.target.value)",
        "(blur)": "onTouched()"
      },
      providers: [NUMBER_VALUE_ACCESSOR],
      standalone: false
    }]
  }], null, null);
})();
var RADIO_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioControlValueAccessor),
  multi: true
};
function throwNameError() {
  throw new RuntimeError(1202, `
      If you define both a name and a formControlName attribute on your radio button, their values
      must match. Ex: <input type="radio" formControlName="food" name="food">
    `);
}
var RadioControlRegistry = class _RadioControlRegistry {
  _accessors = [];
  /**
   * @description
   * Adds a control to the internal registry. For internal use only.
   */
  add(control, accessor) {
    this._accessors.push([control, accessor]);
  }
  /**
   * @description
   * Removes a control from the internal registry. For internal use only.
   */
  remove(accessor) {
    for (let i = this._accessors.length - 1; i >= 0; --i) {
      if (this._accessors[i][1] === accessor) {
        this._accessors.splice(i, 1);
        return;
      }
    }
  }
  /**
   * @description
   * Selects a radio button. For internal use only.
   */
  select(accessor) {
    this._accessors.forEach((c) => {
      if (this._isSameGroup(c, accessor) && c[1] !== accessor) {
        c[1].fireUncheck(accessor.value);
      }
    });
  }
  _isSameGroup(controlPair, accessor) {
    if (!controlPair[0].control) return false;
    return controlPair[0]._parent === accessor._control._parent && controlPair[1].name === accessor.name;
  }
  static \u0275fac = function RadioControlRegistry_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RadioControlRegistry)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _RadioControlRegistry,
    factory: _RadioControlRegistry.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlRegistry, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var RadioControlValueAccessor = class _RadioControlValueAccessor extends BuiltInControlValueAccessor {
  _registry;
  _injector;
  /** @internal */
  // TODO(issue/24571): remove '!'.
  _state;
  /** @internal */
  // TODO(issue/24571): remove '!'.
  _control;
  /** @internal */
  // TODO(issue/24571): remove '!'.
  _fn;
  setDisabledStateFired = false;
  /**
   * The registered callback function called when a change event occurs on the input element.
   * Note: we declare `onChange` here (also used as host listener) as a function with no arguments
   * to override the `onChange` function (which expects 1 argument) in the parent
   * `BaseControlValueAccessor` class.
   * @nodoc
   */
  onChange = () => {
  };
  /**
   * @description
   * Tracks the name of the radio input element.
   */
  // TODO(issue/24571): remove '!'.
  name;
  /**
   * @description
   * Tracks the name of the `FormControl` bound to the directive. The name corresponds
   * to a key in the parent `FormGroup` or `FormArray`.
   */
  // TODO(issue/24571): remove '!'.
  formControlName;
  /**
   * @description
   * Tracks the value of the radio input element
   */
  value;
  callSetDisabledState = inject(CALL_SET_DISABLED_STATE, {
    optional: true
  }) ?? setDisabledStateDefault;
  constructor(renderer, elementRef, _registry, _injector) {
    super(renderer, elementRef);
    this._registry = _registry;
    this._injector = _injector;
  }
  /** @nodoc */
  ngOnInit() {
    this._control = this._injector.get(NgControl);
    this._checkName();
    this._registry.add(this._control, this);
  }
  /** @nodoc */
  ngOnDestroy() {
    this._registry.remove(this);
  }
  /**
   * Sets the "checked" property value on the radio input element.
   * @nodoc
   */
  writeValue(value) {
    this._state = value === this.value;
    this.setProperty("checked", this._state);
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this._fn = fn;
    this.onChange = () => {
      fn(this.value);
      this._registry.select(this);
    };
  }
  /** @nodoc */
  setDisabledState(isDisabled) {
    if (this.setDisabledStateFired || isDisabled || this.callSetDisabledState === "whenDisabledForLegacyCode") {
      this.setProperty("disabled", isDisabled);
    }
    this.setDisabledStateFired = true;
  }
  /**
   * Sets the "value" on the radio input element and unchecks it.
   *
   * @param value
   */
  fireUncheck(value) {
    this.writeValue(value);
  }
  _checkName() {
    if (this.name && this.formControlName && this.name !== this.formControlName && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwNameError();
    }
    if (!this.name && this.formControlName) this.name = this.formControlName;
  }
  static \u0275fac = function RadioControlValueAccessor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RadioControlValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(RadioControlRegistry), \u0275\u0275directiveInject(Injector));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _RadioControlValueAccessor,
    selectors: [["input", "type", "radio", "formControlName", ""], ["input", "type", "radio", "formControl", ""], ["input", "type", "radio", "ngModel", ""]],
    hostBindings: function RadioControlValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("change", function RadioControlValueAccessor_change_HostBindingHandler() {
          return ctx.onChange();
        })("blur", function RadioControlValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    inputs: {
      name: "name",
      formControlName: "formControlName",
      value: "value"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([RADIO_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]",
      host: {
        "(change)": "onChange()",
        "(blur)": "onTouched()"
      },
      providers: [RADIO_VALUE_ACCESSOR],
      standalone: false
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: RadioControlRegistry
  }, {
    type: Injector
  }], {
    name: [{
      type: Input
    }],
    formControlName: [{
      type: Input
    }],
    value: [{
      type: Input
    }]
  });
})();
var RANGE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RangeValueAccessor),
  multi: true
};
var RangeValueAccessor = class _RangeValueAccessor extends BuiltInControlValueAccessor {
  /**
   * Sets the "value" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    this.setProperty("value", parseFloat(value));
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (value) => {
      fn(value == "" ? null : parseFloat(value));
    };
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275RangeValueAccessor_BaseFactory;
    return function RangeValueAccessor_Factory(__ngFactoryType__) {
      return (\u0275RangeValueAccessor_BaseFactory || (\u0275RangeValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_RangeValueAccessor)))(__ngFactoryType__ || _RangeValueAccessor);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _RangeValueAccessor,
    selectors: [["input", "type", "range", "formControlName", ""], ["input", "type", "range", "formControl", ""], ["input", "type", "range", "ngModel", ""]],
    hostBindings: function RangeValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("change", function RangeValueAccessor_change_HostBindingHandler($event) {
          return ctx.onChange($event.target.value);
        })("input", function RangeValueAccessor_input_HostBindingHandler($event) {
          return ctx.onChange($event.target.value);
        })("blur", function RangeValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([RANGE_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RangeValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]",
      host: {
        "(change)": "onChange($event.target.value)",
        "(input)": "onChange($event.target.value)",
        "(blur)": "onTouched()"
      },
      providers: [RANGE_VALUE_ACCESSOR],
      standalone: false
    }]
  }], null, null);
})();
var NG_MODEL_WITH_FORM_CONTROL_WARNING = new InjectionToken(ngDevMode ? "NgModelWithFormControlWarning" : "");
var formControlBinding = {
  provide: NgControl,
  useExisting: forwardRef(() => FormControlDirective)
};
var FormControlDirective = class _FormControlDirective extends NgControl {
  _ngModelWarningConfig;
  callSetDisabledState;
  /**
   * Internal reference to the view model value.
   * @nodoc
   */
  viewModel;
  /**
   * @description
   * Tracks the `FormControl` instance bound to the directive.
   */
  // TODO(issue/24571): remove '!'.
  form;
  /**
   * @description
   * Triggers a warning in dev mode that this input should not be used with reactive forms.
   */
  set isDisabled(isDisabled) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.warn(disabledAttrWarning);
    }
  }
  // TODO(kara): remove next 4 properties once deprecation period is over
  /** @deprecated as of v6 */
  model;
  /** @deprecated as of v6 */
  update = new EventEmitter();
  /**
   * @description
   * Static property used to track whether any ngModel warnings have been sent across
   * all instances of FormControlDirective. Used to support warning config of "once".
   *
   * @internal
   */
  static _ngModelWarningSentOnce = false;
  /**
   * @description
   * Instance property used to track whether an ngModel warning has been sent out for this
   * particular `FormControlDirective` instance. Used to support warning config of "always".
   *
   * @internal
   */
  _ngModelWarningSent = false;
  constructor(validators, asyncValidators, valueAccessors, _ngModelWarningConfig, callSetDisabledState) {
    super();
    this._ngModelWarningConfig = _ngModelWarningConfig;
    this.callSetDisabledState = callSetDisabledState;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    if (this._isControlChanged(changes)) {
      const previousForm = changes["form"].previousValue;
      if (previousForm) {
        cleanUpControl(
          previousForm,
          this,
          /* validateControlPresenceOnChange */
          false
        );
      }
      setUpControl(this.form, this, this.callSetDisabledState);
      this.form.updateValueAndValidity({
        emitEvent: false
      });
    }
    if (isPropertyUpdated(changes, this.viewModel)) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        _ngModelWarning("formControl", _FormControlDirective, this, this._ngModelWarningConfig);
      }
      this.form.setValue(this.model);
      this.viewModel = this.model;
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.form) {
      cleanUpControl(
        this.form,
        this,
        /* validateControlPresenceOnChange */
        false
      );
    }
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return [];
  }
  /**
   * @description
   * The `FormControl` bound to this directive.
   */
  get control() {
    return this.form;
  }
  /**
   * @description
   * Sets the new value for the view model and emits an `ngModelChange` event.
   *
   * @param newValue The new value for the view model.
   */
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  _isControlChanged(changes) {
    return changes.hasOwnProperty("form");
  }
  static \u0275fac = function FormControlDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormControlDirective)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(NG_MODEL_WITH_FORM_CONTROL_WARNING, 8), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormControlDirective,
    selectors: [["", "formControl", ""]],
    inputs: {
      form: [0, "formControl", "form"],
      isDisabled: [0, "disabled", "isDisabled"],
      model: [0, "ngModel", "model"]
    },
    outputs: {
      update: "ngModelChange"
    },
    exportAs: ["ngForm"],
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formControlBinding]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormControlDirective, [{
    type: Directive,
    args: [{
      selector: "[formControl]",
      providers: [formControlBinding],
      exportAs: "ngForm",
      standalone: false
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    form: [{
      type: Input,
      args: ["formControl"]
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
var formDirectiveProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormGroupDirective)
};
var FormGroupDirective = class _FormGroupDirective extends ControlContainer {
  callSetDisabledState;
  /**
   * @description
   * Reports whether the form submission has been triggered.
   */
  get submitted() {
    return untracked(this._submittedReactive);
  }
  // TODO(atscott): Remove once invalid API usage is cleaned up internally
  set submitted(value) {
    this._submittedReactive.set(value);
  }
  /** @internal */
  _submitted = computed(() => this._submittedReactive());
  _submittedReactive = signal(false);
  /**
   * Reference to an old form group input value, which is needed to cleanup
   * old instance in case it was replaced with a new one.
   */
  _oldForm;
  /**
   * Callback that should be invoked when controls in FormGroup or FormArray collection change
   * (added or removed). This callback triggers corresponding DOM updates.
   */
  _onCollectionChange = () => this._updateDomValue();
  /**
   * @description
   * Tracks the list of added `FormControlName` instances
   */
  directives = [];
  /**
   * @description
   * Tracks the `FormGroup` bound to this directive.
   */
  form = null;
  /**
   * @description
   * Emits an event when the form submission has been triggered.
   */
  ngSubmit = new EventEmitter();
  constructor(validators, asyncValidators, callSetDisabledState) {
    super();
    this.callSetDisabledState = callSetDisabledState;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    this._checkFormPresent();
    if (changes.hasOwnProperty("form")) {
      this._updateValidators();
      this._updateDomValue();
      this._updateRegistrations();
      this._oldForm = this.form;
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.form) {
      cleanUpValidators(this.form, this);
      if (this.form._onCollectionChange === this._onCollectionChange) {
        this.form._registerOnCollectionChange(() => {
        });
      }
    }
  }
  /**
   * @description
   * Returns this directive's instance.
   */
  get formDirective() {
    return this;
  }
  /**
   * @description
   * Returns the `FormGroup` bound to this directive.
   */
  get control() {
    return this.form;
  }
  /**
   * @description
   * Returns an array representing the path to this group. Because this directive
   * always lives at the top level of a form, it always an empty array.
   */
  get path() {
    return [];
  }
  /**
   * @description
   * Method that sets up the control directive in this group, re-calculates its value
   * and validity, and adds the instance to the internal list of directives.
   *
   * @param dir The `FormControlName` directive instance.
   */
  addControl(dir) {
    const ctrl = this.form.get(dir.path);
    setUpControl(ctrl, dir, this.callSetDisabledState);
    ctrl.updateValueAndValidity({
      emitEvent: false
    });
    this.directives.push(dir);
    return ctrl;
  }
  /**
   * @description
   * Retrieves the `FormControl` instance from the provided `FormControlName` directive
   *
   * @param dir The `FormControlName` directive instance.
   */
  getControl(dir) {
    return this.form.get(dir.path);
  }
  /**
   * @description
   * Removes the `FormControlName` instance from the internal list of directives
   *
   * @param dir The `FormControlName` directive instance.
   */
  removeControl(dir) {
    cleanUpControl(
      dir.control || null,
      dir,
      /* validateControlPresenceOnChange */
      false
    );
    removeListItem$1(this.directives, dir);
  }
  /**
   * Adds a new `FormGroupName` directive instance to the form.
   *
   * @param dir The `FormGroupName` directive instance.
   */
  addFormGroup(dir) {
    this._setUpFormContainer(dir);
  }
  /**
   * Performs the necessary cleanup when a `FormGroupName` directive instance is removed from the
   * view.
   *
   * @param dir The `FormGroupName` directive instance.
   */
  removeFormGroup(dir) {
    this._cleanUpFormContainer(dir);
  }
  /**
   * @description
   * Retrieves the `FormGroup` for a provided `FormGroupName` directive instance
   *
   * @param dir The `FormGroupName` directive instance.
   */
  getFormGroup(dir) {
    return this.form.get(dir.path);
  }
  /**
   * Performs the necessary setup when a `FormArrayName` directive instance is added to the view.
   *
   * @param dir The `FormArrayName` directive instance.
   */
  addFormArray(dir) {
    this._setUpFormContainer(dir);
  }
  /**
   * Performs the necessary cleanup when a `FormArrayName` directive instance is removed from the
   * view.
   *
   * @param dir The `FormArrayName` directive instance.
   */
  removeFormArray(dir) {
    this._cleanUpFormContainer(dir);
  }
  /**
   * @description
   * Retrieves the `FormArray` for a provided `FormArrayName` directive instance.
   *
   * @param dir The `FormArrayName` directive instance.
   */
  getFormArray(dir) {
    return this.form.get(dir.path);
  }
  /**
   * Sets the new value for the provided `FormControlName` directive.
   *
   * @param dir The `FormControlName` directive instance.
   * @param value The new value for the directive's control.
   */
  updateModel(dir, value) {
    const ctrl = this.form.get(dir.path);
    ctrl.setValue(value);
  }
  /**
   * @description
   * Method called with the "submit" event is triggered on the form.
   * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
   *
   * @param $event The "submit" event object
   */
  onSubmit($event) {
    this._submittedReactive.set(true);
    syncPendingControls(this.form, this.directives);
    this.ngSubmit.emit($event);
    this.form._events.next(new FormSubmittedEvent(this.control));
    return $event?.target?.method === "dialog";
  }
  /**
   * @description
   * Method called when the "reset" event is triggered on the form.
   */
  onReset() {
    this.resetForm();
  }
  /**
   * @description
   * Resets the form to an initial value and resets its submitted status.
   *
   * @param value The new value for the form.
   */
  resetForm(value = void 0) {
    this.form.reset(value);
    this._submittedReactive.set(false);
    this.form._events.next(new FormResetEvent(this.form));
  }
  /** @internal */
  _updateDomValue() {
    this.directives.forEach((dir) => {
      const oldCtrl = dir.control;
      const newCtrl = this.form.get(dir.path);
      if (oldCtrl !== newCtrl) {
        cleanUpControl(oldCtrl || null, dir);
        if (isFormControl(newCtrl)) {
          setUpControl(newCtrl, dir, this.callSetDisabledState);
          dir.control = newCtrl;
        }
      }
    });
    this.form._updateTreeValidity({
      emitEvent: false
    });
  }
  _setUpFormContainer(dir) {
    const ctrl = this.form.get(dir.path);
    setUpFormContainer(ctrl, dir);
    ctrl.updateValueAndValidity({
      emitEvent: false
    });
  }
  _cleanUpFormContainer(dir) {
    if (this.form) {
      const ctrl = this.form.get(dir.path);
      if (ctrl) {
        const isControlUpdated = cleanUpFormContainer(ctrl, dir);
        if (isControlUpdated) {
          ctrl.updateValueAndValidity({
            emitEvent: false
          });
        }
      }
    }
  }
  _updateRegistrations() {
    this.form._registerOnCollectionChange(this._onCollectionChange);
    if (this._oldForm) {
      this._oldForm._registerOnCollectionChange(() => {
      });
    }
  }
  _updateValidators() {
    setUpValidators(this.form, this);
    if (this._oldForm) {
      cleanUpValidators(this._oldForm, this);
    }
  }
  _checkFormPresent() {
    if (!this.form && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw missingFormException();
    }
  }
  static \u0275fac = function FormGroupDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormGroupDirective)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormGroupDirective,
    selectors: [["", "formGroup", ""]],
    hostBindings: function FormGroupDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("submit", function FormGroupDirective_submit_HostBindingHandler($event) {
          return ctx.onSubmit($event);
        })("reset", function FormGroupDirective_reset_HostBindingHandler() {
          return ctx.onReset();
        });
      }
    },
    inputs: {
      form: [0, "formGroup", "form"]
    },
    outputs: {
      ngSubmit: "ngSubmit"
    },
    exportAs: ["ngForm"],
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formDirectiveProvider]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormGroupDirective, [{
    type: Directive,
    args: [{
      selector: "[formGroup]",
      providers: [formDirectiveProvider],
      host: {
        "(submit)": "onSubmit($event)",
        "(reset)": "onReset()"
      },
      exportAs: "ngForm",
      standalone: false
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    form: [{
      type: Input,
      args: ["formGroup"]
    }],
    ngSubmit: [{
      type: Output
    }]
  });
})();
var formGroupNameProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormGroupName)
};
var FormGroupName = class _FormGroupName extends AbstractFormGroupDirective {
  /**
   * @description
   * Tracks the name of the `FormGroup` bound to the directive. The name corresponds
   * to a key in the parent `FormGroup` or `FormArray`.
   * Accepts a name as a string or a number.
   * The name in the form of a string is useful for individual forms,
   * while the numerical form allows for form groups to be bound
   * to indices when iterating over groups in a `FormArray`.
   */
  name = null;
  constructor(parent, validators, asyncValidators) {
    super();
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /** @internal */
  _checkParentType() {
    if (_hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw groupParentException();
    }
  }
  static \u0275fac = function FormGroupName_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormGroupName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormGroupName,
    selectors: [["", "formGroupName", ""]],
    inputs: {
      name: [0, "formGroupName", "name"]
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formGroupNameProvider]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormGroupName, [{
    type: Directive,
    args: [{
      selector: "[formGroupName]",
      providers: [formGroupNameProvider],
      standalone: false
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formGroupName"]
    }]
  });
})();
var formArrayNameProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormArrayName)
};
var FormArrayName = class _FormArrayName extends ControlContainer {
  /** @internal */
  _parent;
  /**
   * @description
   * Tracks the name of the `FormArray` bound to the directive. The name corresponds
   * to a key in the parent `FormGroup` or `FormArray`.
   * Accepts a name as a string or a number.
   * The name in the form of a string is useful for individual forms,
   * while the numerical form allows for form arrays to be bound
   * to indices when iterating over arrays in a `FormArray`.
   */
  name = null;
  constructor(parent, validators, asyncValidators) {
    super();
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /**
   * A lifecycle method called when the directive's inputs are initialized. For internal use only.
   * @throws If the directive does not have a valid parent.
   * @nodoc
   */
  ngOnInit() {
    this._checkParentType();
    this.formDirective.addFormArray(this);
  }
  /**
   * A lifecycle method called before the directive's instance is destroyed. For internal use only.
   * @nodoc
   */
  ngOnDestroy() {
    if (this.formDirective) {
      this.formDirective.removeFormArray(this);
    }
  }
  /**
   * @description
   * The `FormArray` bound to this directive.
   */
  get control() {
    return this.formDirective.getFormArray(this);
  }
  /**
   * @description
   * The top-level directive for this group if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  _checkParentType() {
    if (_hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw arrayParentException();
    }
  }
  static \u0275fac = function FormArrayName_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormArrayName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormArrayName,
    selectors: [["", "formArrayName", ""]],
    inputs: {
      name: [0, "formArrayName", "name"]
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formArrayNameProvider]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormArrayName, [{
    type: Directive,
    args: [{
      selector: "[formArrayName]",
      providers: [formArrayNameProvider],
      standalone: false
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formArrayName"]
    }]
  });
})();
function _hasInvalidParent(parent) {
  return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) && !(parent instanceof FormArrayName);
}
var controlNameBinding = {
  provide: NgControl,
  useExisting: forwardRef(() => FormControlName)
};
var FormControlName = class _FormControlName extends NgControl {
  _ngModelWarningConfig;
  _added = false;
  /**
   * Internal reference to the view model value.
   * @internal
   */
  viewModel;
  /**
   * @description
   * Tracks the `FormControl` instance bound to the directive.
   */
  // TODO(issue/24571): remove '!'.
  control;
  /**
   * @description
   * Tracks the name of the `FormControl` bound to the directive. The name corresponds
   * to a key in the parent `FormGroup` or `FormArray`.
   * Accepts a name as a string or a number.
   * The name in the form of a string is useful for individual forms,
   * while the numerical form allows for form controls to be bound
   * to indices when iterating over controls in a `FormArray`.
   */
  name = null;
  /**
   * @description
   * Triggers a warning in dev mode that this input should not be used with reactive forms.
   */
  set isDisabled(isDisabled) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.warn(disabledAttrWarning);
    }
  }
  // TODO(kara): remove next 4 properties once deprecation period is over
  /** @deprecated as of v6 */
  model;
  /** @deprecated as of v6 */
  update = new EventEmitter();
  /**
   * @description
   * Static property used to track whether any ngModel warnings have been sent across
   * all instances of FormControlName. Used to support warning config of "once".
   *
   * @internal
   */
  static _ngModelWarningSentOnce = false;
  /**
   * @description
   * Instance property used to track whether an ngModel warning has been sent out for this
   * particular FormControlName instance. Used to support warning config of "always".
   *
   * @internal
   */
  _ngModelWarningSent = false;
  constructor(parent, validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
    super();
    this._ngModelWarningConfig = _ngModelWarningConfig;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    if (!this._added) this._setUpControl();
    if (isPropertyUpdated(changes, this.viewModel)) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        _ngModelWarning("formControlName", _FormControlName, this, this._ngModelWarningConfig);
      }
      this.viewModel = this.model;
      this.formDirective.updateModel(this, this.model);
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.formDirective) {
      this.formDirective.removeControl(this);
    }
  }
  /**
   * @description
   * Sets the new value for the view model and emits an `ngModelChange` event.
   *
   * @param newValue The new value for the view model.
   */
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  /**
   * @description
   * The top-level directive for this group if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  _checkParentType() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!(this._parent instanceof FormGroupName) && this._parent instanceof AbstractFormGroupDirective) {
        throw ngModelGroupException();
      } else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) && !(this._parent instanceof FormArrayName)) {
        throw controlParentException(this.name);
      }
    }
  }
  _setUpControl() {
    this._checkParentType();
    this.control = this.formDirective.addControl(this);
    this._added = true;
  }
  static \u0275fac = function FormControlName_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormControlName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(NG_MODEL_WITH_FORM_CONTROL_WARNING, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormControlName,
    selectors: [["", "formControlName", ""]],
    inputs: {
      name: [0, "formControlName", "name"],
      isDisabled: [0, "disabled", "isDisabled"],
      model: [0, "ngModel", "model"]
    },
    outputs: {
      update: "ngModelChange"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([controlNameBinding]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormControlName, [{
    type: Directive,
    args: [{
      selector: "[formControlName]",
      providers: [controlNameBinding],
      standalone: false
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formControlName"]
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
var SELECT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectControlValueAccessor),
  multi: true
};
function _buildValueString$1(id, value) {
  if (id == null) return `${value}`;
  if (value && typeof value === "object") value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId$1(valueString) {
  return valueString.split(":")[0];
}
var SelectControlValueAccessor = class _SelectControlValueAccessor extends BuiltInControlValueAccessor {
  /** @nodoc */
  value;
  /** @internal */
  _optionMap = /* @__PURE__ */ new Map();
  /** @internal */
  _idCounter = 0;
  /**
   * @description
   * Tracks the option comparison algorithm for tracking identities when
   * checking for changes.
   */
  set compareWith(fn) {
    if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
    }
    this._compareWith = fn;
  }
  _compareWith = Object.is;
  /**
   * Sets the "value" property on the select element.
   * @nodoc
   */
  writeValue(value) {
    this.value = value;
    const id = this._getOptionId(value);
    const valueString = _buildValueString$1(id, value);
    this.setProperty("value", valueString);
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (valueString) => {
      this.value = this._getOptionValue(valueString);
      fn(this.value);
    };
  }
  /** @internal */
  _registerOption() {
    return (this._idCounter++).toString();
  }
  /** @internal */
  _getOptionId(value) {
    for (const id of this._optionMap.keys()) {
      if (this._compareWith(this._optionMap.get(id), value)) return id;
    }
    return null;
  }
  /** @internal */
  _getOptionValue(valueString) {
    const id = _extractId$1(valueString);
    return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SelectControlValueAccessor_BaseFactory;
    return function SelectControlValueAccessor_Factory(__ngFactoryType__) {
      return (\u0275SelectControlValueAccessor_BaseFactory || (\u0275SelectControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_SelectControlValueAccessor)))(__ngFactoryType__ || _SelectControlValueAccessor);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _SelectControlValueAccessor,
    selectors: [["select", "formControlName", "", 3, "multiple", ""], ["select", "formControl", "", 3, "multiple", ""], ["select", "ngModel", "", 3, "multiple", ""]],
    hostBindings: function SelectControlValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("change", function SelectControlValueAccessor_change_HostBindingHandler($event) {
          return ctx.onChange($event.target.value);
        })("blur", function SelectControlValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    inputs: {
      compareWith: "compareWith"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([SELECT_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]",
      host: {
        "(change)": "onChange($event.target.value)",
        "(blur)": "onTouched()"
      },
      providers: [SELECT_VALUE_ACCESSOR],
      standalone: false
    }]
  }], null, {
    compareWith: [{
      type: Input
    }]
  });
})();
var NgSelectOption = class _NgSelectOption {
  _element;
  _renderer;
  _select;
  /**
   * @description
   * ID of the option element
   */
  // TODO(issue/24571): remove '!'.
  id;
  constructor(_element, _renderer, _select) {
    this._element = _element;
    this._renderer = _renderer;
    this._select = _select;
    if (this._select) this.id = this._select._registerOption();
  }
  /**
   * @description
   * Tracks the value bound to the option element. Unlike the value binding,
   * ngValue supports binding to objects.
   */
  set ngValue(value) {
    if (this._select == null) return;
    this._select._optionMap.set(this.id, value);
    this._setElementValue(_buildValueString$1(this.id, value));
    this._select.writeValue(this._select.value);
  }
  /**
   * @description
   * Tracks simple string values bound to the option element.
   * For objects, use the `ngValue` input binding.
   */
  set value(value) {
    this._setElementValue(value);
    if (this._select) this._select.writeValue(this._select.value);
  }
  /** @internal */
  _setElementValue(value) {
    this._renderer.setProperty(this._element.nativeElement, "value", value);
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this._select) {
      this._select._optionMap.delete(this.id);
      this._select.writeValue(this._select.value);
    }
  }
  static \u0275fac = function NgSelectOption_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgSelectOption)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(SelectControlValueAccessor, 9));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgSelectOption,
    selectors: [["option"]],
    inputs: {
      ngValue: "ngValue",
      value: "value"
    },
    standalone: false
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgSelectOption, [{
    type: Directive,
    args: [{
      selector: "option",
      standalone: false
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: SelectControlValueAccessor,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }], {
    ngValue: [{
      type: Input,
      args: ["ngValue"]
    }],
    value: [{
      type: Input,
      args: ["value"]
    }]
  });
})();
var SELECT_MULTIPLE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectMultipleControlValueAccessor),
  multi: true
};
function _buildValueString(id, value) {
  if (id == null) return `${value}`;
  if (typeof value === "string") value = `'${value}'`;
  if (value && typeof value === "object") value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId(valueString) {
  return valueString.split(":")[0];
}
var SelectMultipleControlValueAccessor = class _SelectMultipleControlValueAccessor extends BuiltInControlValueAccessor {
  /**
   * The current value.
   * @nodoc
   */
  value;
  /** @internal */
  _optionMap = /* @__PURE__ */ new Map();
  /** @internal */
  _idCounter = 0;
  /**
   * @description
   * Tracks the option comparison algorithm for tracking identities when
   * checking for changes.
   */
  set compareWith(fn) {
    if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
    }
    this._compareWith = fn;
  }
  _compareWith = Object.is;
  /**
   * Sets the "value" property on one or of more of the select's options.
   * @nodoc
   */
  writeValue(value) {
    this.value = value;
    let optionSelectedStateSetter;
    if (Array.isArray(value)) {
      const ids = value.map((v) => this._getOptionId(v));
      optionSelectedStateSetter = (opt, o) => {
        opt._setSelected(ids.indexOf(o.toString()) > -1);
      };
    } else {
      optionSelectedStateSetter = (opt, o) => {
        opt._setSelected(false);
      };
    }
    this._optionMap.forEach(optionSelectedStateSetter);
  }
  /**
   * Registers a function called when the control value changes
   * and writes an array of the selected options.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (element) => {
      const selected = [];
      const selectedOptions = element.selectedOptions;
      if (selectedOptions !== void 0) {
        const options = selectedOptions;
        for (let i = 0; i < options.length; i++) {
          const opt = options[i];
          const val = this._getOptionValue(opt.value);
          selected.push(val);
        }
      } else {
        const options = element.options;
        for (let i = 0; i < options.length; i++) {
          const opt = options[i];
          if (opt.selected) {
            const val = this._getOptionValue(opt.value);
            selected.push(val);
          }
        }
      }
      this.value = selected;
      fn(selected);
    };
  }
  /** @internal */
  _registerOption(value) {
    const id = (this._idCounter++).toString();
    this._optionMap.set(id, value);
    return id;
  }
  /** @internal */
  _getOptionId(value) {
    for (const id of this._optionMap.keys()) {
      if (this._compareWith(this._optionMap.get(id)._value, value)) return id;
    }
    return null;
  }
  /** @internal */
  _getOptionValue(valueString) {
    const id = _extractId(valueString);
    return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SelectMultipleControlValueAccessor_BaseFactory;
    return function SelectMultipleControlValueAccessor_Factory(__ngFactoryType__) {
      return (\u0275SelectMultipleControlValueAccessor_BaseFactory || (\u0275SelectMultipleControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_SelectMultipleControlValueAccessor)))(__ngFactoryType__ || _SelectMultipleControlValueAccessor);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _SelectMultipleControlValueAccessor,
    selectors: [["select", "multiple", "", "formControlName", ""], ["select", "multiple", "", "formControl", ""], ["select", "multiple", "", "ngModel", ""]],
    hostBindings: function SelectMultipleControlValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("change", function SelectMultipleControlValueAccessor_change_HostBindingHandler($event) {
          return ctx.onChange($event.target);
        })("blur", function SelectMultipleControlValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    inputs: {
      compareWith: "compareWith"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([SELECT_MULTIPLE_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectMultipleControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]",
      host: {
        "(change)": "onChange($event.target)",
        "(blur)": "onTouched()"
      },
      providers: [SELECT_MULTIPLE_VALUE_ACCESSOR],
      standalone: false
    }]
  }], null, {
    compareWith: [{
      type: Input
    }]
  });
})();
var \u0275NgSelectMultipleOption = class _\u0275NgSelectMultipleOption {
  _element;
  _renderer;
  _select;
  // TODO(issue/24571): remove '!'.
  id;
  /** @internal */
  _value;
  constructor(_element, _renderer, _select) {
    this._element = _element;
    this._renderer = _renderer;
    this._select = _select;
    if (this._select) {
      this.id = this._select._registerOption(this);
    }
  }
  /**
   * @description
   * Tracks the value bound to the option element. Unlike the value binding,
   * ngValue supports binding to objects.
   */
  set ngValue(value) {
    if (this._select == null) return;
    this._value = value;
    this._setElementValue(_buildValueString(this.id, value));
    this._select.writeValue(this._select.value);
  }
  /**
   * @description
   * Tracks simple string values bound to the option element.
   * For objects, use the `ngValue` input binding.
   */
  set value(value) {
    if (this._select) {
      this._value = value;
      this._setElementValue(_buildValueString(this.id, value));
      this._select.writeValue(this._select.value);
    } else {
      this._setElementValue(value);
    }
  }
  /** @internal */
  _setElementValue(value) {
    this._renderer.setProperty(this._element.nativeElement, "value", value);
  }
  /** @internal */
  _setSelected(selected) {
    this._renderer.setProperty(this._element.nativeElement, "selected", selected);
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this._select) {
      this._select._optionMap.delete(this.id);
      this._select.writeValue(this._select.value);
    }
  }
  static \u0275fac = function \u0275NgSelectMultipleOption_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _\u0275NgSelectMultipleOption)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(SelectMultipleControlValueAccessor, 9));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _\u0275NgSelectMultipleOption,
    selectors: [["option"]],
    inputs: {
      ngValue: "ngValue",
      value: "value"
    },
    standalone: false
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275NgSelectMultipleOption, [{
    type: Directive,
    args: [{
      selector: "option",
      standalone: false
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: SelectMultipleControlValueAccessor,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }], {
    ngValue: [{
      type: Input,
      args: ["ngValue"]
    }],
    value: [{
      type: Input,
      args: ["value"]
    }]
  });
})();
function toInteger(value) {
  return typeof value === "number" ? value : parseInt(value, 10);
}
function toFloat(value) {
  return typeof value === "number" ? value : parseFloat(value);
}
var AbstractValidatorDirective = class _AbstractValidatorDirective {
  _validator = nullValidator;
  _onChange;
  /**
   * A flag that tracks whether this validator is enabled.
   *
   * Marking it `internal` (vs `protected`), so that this flag can be used in host bindings of
   * directive classes that extend this base class.
   * @internal
   */
  _enabled;
  /** @nodoc */
  ngOnChanges(changes) {
    if (this.inputName in changes) {
      const input2 = this.normalizeInput(changes[this.inputName].currentValue);
      this._enabled = this.enabled(input2);
      this._validator = this._enabled ? this.createValidator(input2) : nullValidator;
      if (this._onChange) {
        this._onChange();
      }
    }
  }
  /** @nodoc */
  validate(control) {
    return this._validator(control);
  }
  /** @nodoc */
  registerOnValidatorChange(fn) {
    this._onChange = fn;
  }
  /**
   * @description
   * Determines whether this validator should be active or not based on an input.
   * Base class implementation checks whether an input is defined (if the value is different from
   * `null` and `undefined`). Validator classes that extend this base class can override this
   * function with the logic specific to a particular validator directive.
   */
  enabled(input2) {
    return input2 != null;
  }
  static \u0275fac = function AbstractValidatorDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AbstractValidatorDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _AbstractValidatorDirective,
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractValidatorDirective, [{
    type: Directive
  }], null, null);
})();
var MAX_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxValidator),
  multi: true
};
var MaxValidator = class _MaxValidator extends AbstractValidatorDirective {
  /**
   * @description
   * Tracks changes to the max bound to this directive.
   */
  max;
  /** @internal */
  inputName = "max";
  /** @internal */
  normalizeInput = (input2) => toFloat(input2);
  /** @internal */
  createValidator = (max) => maxValidator(max);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MaxValidator_BaseFactory;
    return function MaxValidator_Factory(__ngFactoryType__) {
      return (\u0275MaxValidator_BaseFactory || (\u0275MaxValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MaxValidator)))(__ngFactoryType__ || _MaxValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MaxValidator,
    selectors: [["input", "type", "number", "max", "", "formControlName", ""], ["input", "type", "number", "max", "", "formControl", ""], ["input", "type", "number", "max", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function MaxValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("max", ctx._enabled ? ctx.max : null);
      }
    },
    inputs: {
      max: "max"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([MAX_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaxValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=number][max][formControlName],input[type=number][max][formControl],input[type=number][max][ngModel]",
      providers: [MAX_VALIDATOR],
      host: {
        "[attr.max]": "_enabled ? max : null"
      },
      standalone: false
    }]
  }], null, {
    max: [{
      type: Input
    }]
  });
})();
var MIN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinValidator),
  multi: true
};
var MinValidator = class _MinValidator extends AbstractValidatorDirective {
  /**
   * @description
   * Tracks changes to the min bound to this directive.
   */
  min;
  /** @internal */
  inputName = "min";
  /** @internal */
  normalizeInput = (input2) => toFloat(input2);
  /** @internal */
  createValidator = (min) => minValidator(min);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MinValidator_BaseFactory;
    return function MinValidator_Factory(__ngFactoryType__) {
      return (\u0275MinValidator_BaseFactory || (\u0275MinValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MinValidator)))(__ngFactoryType__ || _MinValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MinValidator,
    selectors: [["input", "type", "number", "min", "", "formControlName", ""], ["input", "type", "number", "min", "", "formControl", ""], ["input", "type", "number", "min", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function MinValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("min", ctx._enabled ? ctx.min : null);
      }
    },
    inputs: {
      min: "min"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([MIN_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=number][min][formControlName],input[type=number][min][formControl],input[type=number][min][ngModel]",
      providers: [MIN_VALIDATOR],
      host: {
        "[attr.min]": "_enabled ? min : null"
      },
      standalone: false
    }]
  }], null, {
    min: [{
      type: Input
    }]
  });
})();
var REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => RequiredValidator),
  multi: true
};
var CHECKBOX_REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => CheckboxRequiredValidator),
  multi: true
};
var RequiredValidator = class _RequiredValidator extends AbstractValidatorDirective {
  /**
   * @description
   * Tracks changes to the required attribute bound to this directive.
   */
  required;
  /** @internal */
  inputName = "required";
  /** @internal */
  normalizeInput = booleanAttribute;
  /** @internal */
  createValidator = (input2) => requiredValidator;
  /** @nodoc */
  enabled(input2) {
    return input2;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275RequiredValidator_BaseFactory;
    return function RequiredValidator_Factory(__ngFactoryType__) {
      return (\u0275RequiredValidator_BaseFactory || (\u0275RequiredValidator_BaseFactory = \u0275\u0275getInheritedFactory(_RequiredValidator)))(__ngFactoryType__ || _RequiredValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _RequiredValidator,
    selectors: [["", "required", "", "formControlName", "", 3, "type", "checkbox"], ["", "required", "", "formControl", "", 3, "type", "checkbox"], ["", "required", "", "ngModel", "", 3, "type", "checkbox"]],
    hostVars: 1,
    hostBindings: function RequiredValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("required", ctx._enabled ? "" : null);
      }
    },
    inputs: {
      required: "required"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([REQUIRED_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequiredValidator, [{
    type: Directive,
    args: [{
      selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]",
      providers: [REQUIRED_VALIDATOR],
      host: {
        "[attr.required]": '_enabled ? "" : null'
      },
      standalone: false
    }]
  }], null, {
    required: [{
      type: Input
    }]
  });
})();
var CheckboxRequiredValidator = class _CheckboxRequiredValidator extends RequiredValidator {
  /** @internal */
  createValidator = (input2) => requiredTrueValidator;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275CheckboxRequiredValidator_BaseFactory;
    return function CheckboxRequiredValidator_Factory(__ngFactoryType__) {
      return (\u0275CheckboxRequiredValidator_BaseFactory || (\u0275CheckboxRequiredValidator_BaseFactory = \u0275\u0275getInheritedFactory(_CheckboxRequiredValidator)))(__ngFactoryType__ || _CheckboxRequiredValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CheckboxRequiredValidator,
    selectors: [["input", "type", "checkbox", "required", "", "formControlName", ""], ["input", "type", "checkbox", "required", "", "formControl", ""], ["input", "type", "checkbox", "required", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function CheckboxRequiredValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("required", ctx._enabled ? "" : null);
      }
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([CHECKBOX_REQUIRED_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxRequiredValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]",
      providers: [CHECKBOX_REQUIRED_VALIDATOR],
      host: {
        "[attr.required]": '_enabled ? "" : null'
      },
      standalone: false
    }]
  }], null, null);
})();
var EMAIL_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => EmailValidator),
  multi: true
};
var EmailValidator = class _EmailValidator extends AbstractValidatorDirective {
  /**
   * @description
   * Tracks changes to the email attribute bound to this directive.
   */
  email;
  /** @internal */
  inputName = "email";
  /** @internal */
  normalizeInput = booleanAttribute;
  /** @internal */
  createValidator = (input2) => emailValidator;
  /** @nodoc */
  enabled(input2) {
    return input2;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275EmailValidator_BaseFactory;
    return function EmailValidator_Factory(__ngFactoryType__) {
      return (\u0275EmailValidator_BaseFactory || (\u0275EmailValidator_BaseFactory = \u0275\u0275getInheritedFactory(_EmailValidator)))(__ngFactoryType__ || _EmailValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _EmailValidator,
    selectors: [["", "email", "", "formControlName", ""], ["", "email", "", "formControl", ""], ["", "email", "", "ngModel", ""]],
    inputs: {
      email: "email"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([EMAIL_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailValidator, [{
    type: Directive,
    args: [{
      selector: "[email][formControlName],[email][formControl],[email][ngModel]",
      providers: [EMAIL_VALIDATOR],
      standalone: false
    }]
  }], null, {
    email: [{
      type: Input
    }]
  });
})();
var MIN_LENGTH_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinLengthValidator),
  multi: true
};
var MinLengthValidator = class _MinLengthValidator extends AbstractValidatorDirective {
  /**
   * @description
   * Tracks changes to the minimum length bound to this directive.
   */
  minlength;
  /** @internal */
  inputName = "minlength";
  /** @internal */
  normalizeInput = (input2) => toInteger(input2);
  /** @internal */
  createValidator = (minlength) => minLengthValidator(minlength);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MinLengthValidator_BaseFactory;
    return function MinLengthValidator_Factory(__ngFactoryType__) {
      return (\u0275MinLengthValidator_BaseFactory || (\u0275MinLengthValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MinLengthValidator)))(__ngFactoryType__ || _MinLengthValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MinLengthValidator,
    selectors: [["", "minlength", "", "formControlName", ""], ["", "minlength", "", "formControl", ""], ["", "minlength", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function MinLengthValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("minlength", ctx._enabled ? ctx.minlength : null);
      }
    },
    inputs: {
      minlength: "minlength"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([MIN_LENGTH_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinLengthValidator, [{
    type: Directive,
    args: [{
      selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]",
      providers: [MIN_LENGTH_VALIDATOR],
      host: {
        "[attr.minlength]": "_enabled ? minlength : null"
      },
      standalone: false
    }]
  }], null, {
    minlength: [{
      type: Input
    }]
  });
})();
var MAX_LENGTH_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxLengthValidator),
  multi: true
};
var MaxLengthValidator = class _MaxLengthValidator extends AbstractValidatorDirective {
  /**
   * @description
   * Tracks changes to the maximum length bound to this directive.
   */
  maxlength;
  /** @internal */
  inputName = "maxlength";
  /** @internal */
  normalizeInput = (input2) => toInteger(input2);
  /** @internal */
  createValidator = (maxlength) => maxLengthValidator(maxlength);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MaxLengthValidator_BaseFactory;
    return function MaxLengthValidator_Factory(__ngFactoryType__) {
      return (\u0275MaxLengthValidator_BaseFactory || (\u0275MaxLengthValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MaxLengthValidator)))(__ngFactoryType__ || _MaxLengthValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MaxLengthValidator,
    selectors: [["", "maxlength", "", "formControlName", ""], ["", "maxlength", "", "formControl", ""], ["", "maxlength", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function MaxLengthValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("maxlength", ctx._enabled ? ctx.maxlength : null);
      }
    },
    inputs: {
      maxlength: "maxlength"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([MAX_LENGTH_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaxLengthValidator, [{
    type: Directive,
    args: [{
      selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]",
      providers: [MAX_LENGTH_VALIDATOR],
      host: {
        "[attr.maxlength]": "_enabled ? maxlength : null"
      },
      standalone: false
    }]
  }], null, {
    maxlength: [{
      type: Input
    }]
  });
})();
var PATTERN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => PatternValidator),
  multi: true
};
var PatternValidator = class _PatternValidator extends AbstractValidatorDirective {
  /**
   * @description
   * Tracks changes to the pattern bound to this directive.
   */
  pattern;
  // This input is always defined, since the name matches selector.
  /** @internal */
  inputName = "pattern";
  /** @internal */
  normalizeInput = (input2) => input2;
  /** @internal */
  createValidator = (input2) => patternValidator(input2);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275PatternValidator_BaseFactory;
    return function PatternValidator_Factory(__ngFactoryType__) {
      return (\u0275PatternValidator_BaseFactory || (\u0275PatternValidator_BaseFactory = \u0275\u0275getInheritedFactory(_PatternValidator)))(__ngFactoryType__ || _PatternValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _PatternValidator,
    selectors: [["", "pattern", "", "formControlName", ""], ["", "pattern", "", "formControl", ""], ["", "pattern", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function PatternValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("pattern", ctx._enabled ? ctx.pattern : null);
      }
    },
    inputs: {
      pattern: "pattern"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([PATTERN_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PatternValidator, [{
    type: Directive,
    args: [{
      selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]",
      providers: [PATTERN_VALIDATOR],
      host: {
        "[attr.pattern]": "_enabled ? pattern : null"
      },
      standalone: false
    }]
  }], null, {
    pattern: [{
      type: Input
    }]
  });
})();
var SHARED_FORM_DIRECTIVES = [\u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, MinValidator, MaxValidator];
var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
var \u0275InternalFormsSharedModule = class _\u0275InternalFormsSharedModule {
  static \u0275fac = function \u0275InternalFormsSharedModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _\u0275InternalFormsSharedModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _\u0275InternalFormsSharedModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275InternalFormsSharedModule, [{
    type: NgModule,
    args: [{
      declarations: SHARED_FORM_DIRECTIVES,
      exports: SHARED_FORM_DIRECTIVES
    }]
  }], null, null);
})();
var FormArray = class extends AbstractControl {
  /**
   * Creates a new `FormArray` instance.
   *
   * @param controls An array of child controls. Each child control is given an index
   * where it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or an `AbstractControlOptions` object that contains validation functions
   * and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions
   *
   */
  constructor(controls, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    this.controls = controls;
    this._initObservables();
    this._setUpdateStrategy(validatorOrOpts);
    this._setUpControls();
    this.updateValueAndValidity({
      onlySelf: true,
      // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
      // `VALID` or `INVALID`.
      // The status should be broadcasted via the `statusChanges` observable, so we set `emitEvent`
      // to `true` to allow that during the control creation process.
      emitEvent: !!this.asyncValidator
    });
  }
  controls;
  /**
   * Get the `AbstractControl` at the given `index` in the array.
   *
   * @param index Index in the array to retrieve the control. If `index` is negative, it will wrap
   *     around from the back, and if index is greatly negative (less than `-length`), the result is
   * undefined. This behavior is the same as `Array.at(index)`.
   */
  at(index) {
    return this.controls[this._adjustIndex(index)];
  }
  /**
   * Insert a new `AbstractControl` at the end of the array.
   *
   * @param control Form control to be inserted
   * @param options Specifies whether this FormArray instance should emit events after a new
   *     control is added.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * inserted. When false, no events are emitted.
   */
  push(control, options = {}) {
    this.controls.push(control);
    this._registerControl(control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  /**
   * Insert a new `AbstractControl` at the given `index` in the array.
   *
   * @param index Index in the array to insert the control. If `index` is negative, wraps around
   *     from the back. If `index` is greatly negative (less than `-length`), prepends to the array.
   * This behavior is the same as `Array.splice(index, 0, control)`.
   * @param control Form control to be inserted
   * @param options Specifies whether this FormArray instance should emit events after a new
   *     control is inserted.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * inserted. When false, no events are emitted.
   */
  insert(index, control, options = {}) {
    this.controls.splice(index, 0, control);
    this._registerControl(control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  /**
   * Remove the control at the given `index` in the array.
   *
   * @param index Index in the array to remove the control.  If `index` is negative, wraps around
   *     from the back. If `index` is greatly negative (less than `-length`), removes the first
   *     element. This behavior is the same as `Array.splice(index, 1)`.
   * @param options Specifies whether this FormArray instance should emit events after a
   *     control is removed.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * removed. When false, no events are emitted.
   */
  removeAt(index, options = {}) {
    let adjustedIndex = this._adjustIndex(index);
    if (adjustedIndex < 0) adjustedIndex = 0;
    if (this.controls[adjustedIndex]) this.controls[adjustedIndex]._registerOnCollectionChange(() => {
    });
    this.controls.splice(adjustedIndex, 1);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  /**
   * Replace an existing control.
   *
   * @param index Index in the array to replace the control. If `index` is negative, wraps around
   *     from the back. If `index` is greatly negative (less than `-length`), replaces the first
   *     element. This behavior is the same as `Array.splice(index, 1, control)`.
   * @param control The `AbstractControl` control to replace the existing control
   * @param options Specifies whether this FormArray instance should emit events after an
   *     existing control is replaced with a new one.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * replaced with a new one. When false, no events are emitted.
   */
  setControl(index, control, options = {}) {
    let adjustedIndex = this._adjustIndex(index);
    if (adjustedIndex < 0) adjustedIndex = 0;
    if (this.controls[adjustedIndex]) this.controls[adjustedIndex]._registerOnCollectionChange(() => {
    });
    this.controls.splice(adjustedIndex, 1);
    if (control) {
      this.controls.splice(adjustedIndex, 0, control);
      this._registerControl(control);
    }
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  /**
   * Length of the control array.
   */
  get length() {
    return this.controls.length;
  }
  /**
   * Sets the value of the `FormArray`. It accepts an array that matches
   * the structure of the control.
   *
   * This method performs strict checks, and throws an error if you try
   * to set the value of a control that doesn't exist or if you exclude the
   * value of a control.
   *
   * @usageNotes
   * ### Set the values for the controls in the form array
   *
   * ```
   * const arr = new FormArray([
   *   new FormControl(),
   *   new FormControl()
   * ]);
   * console.log(arr.value);   // [null, null]
   *
   * arr.setValue(['Nancy', 'Drew']);
   * console.log(arr.value);   // ['Nancy', 'Drew']
   * ```
   *
   * @param value Array of values for the controls
   * @param options Configure options that determine how the control propagates changes and
   * emits events after the value changes
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
   * is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control value is updated.
   * When false, no events are emitted.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   */
  setValue(value, options = {}) {
    assertAllValuesPresent(this, false, value);
    value.forEach((newValue, index) => {
      assertControlPresent(this, false, index);
      this.at(index).setValue(newValue, {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Patches the value of the `FormArray`. It accepts an array that matches the
   * structure of the control, and does its best to match the values to the correct
   * controls in the group.
   *
   * It accepts both super-sets and sub-sets of the array without throwing an error.
   *
   * @usageNotes
   * ### Patch the values for controls in a form array
   *
   * ```
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   * console.log(arr.value);   // [null, null]
   *
   * arr.patchValue(['Nancy']);
   * console.log(arr.value);   // ['Nancy', null]
   * ```
   *
   * @param value Array of latest values for the controls
   * @param options Configure options that determine how the control propagates changes and
   * emits events after the value changes
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
   * is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control
   * value is updated. When false, no events are emitted. The configuration options are passed to
   * the {@link AbstractControl#updateValueAndValidity updateValueAndValidity} method.
   */
  patchValue(value, options = {}) {
    if (value == null) return;
    value.forEach((newValue, index) => {
      if (this.at(index)) {
        this.at(index).patchValue(newValue, {
          onlySelf: true,
          emitEvent: options.emitEvent
        });
      }
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Resets the `FormArray` and all descendants are marked `pristine` and `untouched`, and the
   * value of all descendants to null or null maps.
   *
   * You reset to a specific form state by passing in an array of states
   * that matches the structure of the control. The state is a standalone value
   * or a form state object with both a value and a disabled status.
   *
   * @usageNotes
   * ### Reset the values in a form array
   *
   * ```ts
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   * arr.reset(['name', 'last name']);
   *
   * console.log(arr.value);  // ['name', 'last name']
   * ```
   *
   * ### Reset the values in a form array and the disabled status for the first control
   *
   * ```
   * arr.reset([
   *   {value: 'name', disabled: true},
   *   'last'
   * ]);
   *
   * console.log(arr.value);  // ['last']
   * console.log(arr.at(0).status);  // 'DISABLED'
   * ```
   *
   * @param value Array of values for the controls
   * @param options Configure options that determine how the control propagates changes and
   * emits events after the value changes
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
   * is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is reset.
   * When false, no events are emitted.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   */
  reset(value = [], options = {}) {
    this._forEachChild((control, index) => {
      control.reset(value[index], {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this._updatePristine(options, this);
    this._updateTouched(options, this);
    this.updateValueAndValidity(options);
  }
  /**
   * The aggregate value of the array, including any disabled controls.
   *
   * Reports all values regardless of disabled status.
   */
  getRawValue() {
    return this.controls.map((control) => control.getRawValue());
  }
  /**
   * Remove all controls in the `FormArray`.
   *
   * @param options Specifies whether this FormArray instance should emit events after all
   *     controls are removed.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when all controls
   * in this FormArray instance are removed. When false, no events are emitted.
   *
   * @usageNotes
   * ### Remove all elements from a FormArray
   *
   * ```ts
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   * console.log(arr.length);  // 2
   *
   * arr.clear();
   * console.log(arr.length);  // 0
   * ```
   *
   * It's a simpler and more efficient alternative to removing all elements one by one:
   *
   * ```ts
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   *
   * while (arr.length) {
   *    arr.removeAt(0);
   * }
   * ```
   */
  clear(options = {}) {
    if (this.controls.length < 1) return;
    this._forEachChild((control) => control._registerOnCollectionChange(() => {
    }));
    this.controls.splice(0);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  /**
   * Adjusts a negative index by summing it with the length of the array. For very negative
   * indices, the result may remain negative.
   * @internal
   */
  _adjustIndex(index) {
    return index < 0 ? index + this.length : index;
  }
  /** @internal */
  _syncPendingControls() {
    let subtreeUpdated = this.controls.reduce((updated, child) => {
      return child._syncPendingControls() ? true : updated;
    }, false);
    if (subtreeUpdated) this.updateValueAndValidity({
      onlySelf: true
    });
    return subtreeUpdated;
  }
  /** @internal */
  _forEachChild(cb) {
    this.controls.forEach((control, index) => {
      cb(control, index);
    });
  }
  /** @internal */
  _updateValue() {
    this.value = this.controls.filter((control) => control.enabled || this.disabled).map((control) => control.value);
  }
  /** @internal */
  _anyControls(condition) {
    return this.controls.some((control) => control.enabled && condition(control));
  }
  /** @internal */
  _setUpControls() {
    this._forEachChild((control) => this._registerControl(control));
  }
  /** @internal */
  _allControlsDisabled() {
    for (const control of this.controls) {
      if (control.enabled) return false;
    }
    return this.controls.length > 0 || this.disabled;
  }
  _registerControl(control) {
    control.setParent(this);
    control._registerOnCollectionChange(this._onCollectionChange);
  }
  /** @internal */
  _find(name) {
    return this.at(name) ?? null;
  }
};
function isAbstractControlOptions(options) {
  return !!options && (options.asyncValidators !== void 0 || options.validators !== void 0 || options.updateOn !== void 0);
}
var FormBuilder = class _FormBuilder {
  useNonNullable = false;
  /**
   * @description
   * Returns a FormBuilder in which automatically constructed `FormControl` elements
   * have `{nonNullable: true}` and are non-nullable.
   *
   * **Constructing non-nullable controls**
   *
   * When constructing a control, it will be non-nullable, and will reset to its initial value.
   *
   * ```ts
   * let nnfb = new FormBuilder().nonNullable;
   * let name = nnfb.control('Alex'); // FormControl<string>
   * name.reset();
   * console.log(name); // 'Alex'
   * ```
   *
   * **Constructing non-nullable groups or arrays**
   *
   * When constructing a group or array, all automatically created inner controls will be
   * non-nullable, and will reset to their initial values.
   *
   * ```ts
   * let nnfb = new FormBuilder().nonNullable;
   * let name = nnfb.group({who: 'Alex'}); // FormGroup<{who: FormControl<string>}>
   * name.reset();
   * console.log(name); // {who: 'Alex'}
   * ```
   * **Constructing *nullable* fields on groups or arrays**
   *
   * It is still possible to have a nullable field. In particular, any `FormControl` which is
   * *already* constructed will not be altered. For example:
   *
   * ```ts
   * let nnfb = new FormBuilder().nonNullable;
   * // FormGroup<{who: FormControl<string|null>}>
   * let name = nnfb.group({who: new FormControl('Alex')});
   * name.reset(); console.log(name); // {who: null}
   * ```
   *
   * Because the inner control is constructed explicitly by the caller, the builder has
   * no control over how it is created, and cannot exclude the `null`.
   */
  get nonNullable() {
    const nnfb = new _FormBuilder();
    nnfb.useNonNullable = true;
    return nnfb;
  }
  group(controls, options = null) {
    const reducedControls = this._reduceControls(controls);
    let newOptions = {};
    if (isAbstractControlOptions(options)) {
      newOptions = options;
    } else if (options !== null) {
      newOptions.validators = options.validator;
      newOptions.asyncValidators = options.asyncValidator;
    }
    return new FormGroup(reducedControls, newOptions);
  }
  /**
   * @description
   * Constructs a new `FormRecord` instance. Accepts a single generic argument, which is an object
   * containing all the keys and corresponding inner control types.
   *
   * @param controls A collection of child controls. The key for each child is the name
   * under which it is registered.
   *
   * @param options Configuration options object for the `FormRecord`. The object should have the
   * `AbstractControlOptions` type and might contain the following fields:
   * * `validators`: A synchronous validator function, or an array of validator functions.
   * * `asyncValidators`: A single async validator or array of async validator functions.
   * * `updateOn`: The event upon which the control should be updated (options: 'change' | 'blur'
   * | submit').
   */
  record(controls, options = null) {
    const reducedControls = this._reduceControls(controls);
    return new FormRecord(reducedControls, options);
  }
  /**
   * @description
   * Constructs a new `FormControl` with the given state, validators and options. Sets
   * `{nonNullable: true}` in the options to get a non-nullable control. Otherwise, the
   * control will be nullable. Accepts a single generic argument, which is the type  of the
   * control's value.
   *
   * @param formState Initializes the control with an initial state value, or
   * with an object that contains both a value and a disabled status.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or a `FormControlOptions` object that contains
   * validation functions and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator
   * functions.
   *
   * @usageNotes
   *
   * ### Initialize a control as disabled
   *
   * The following example returns a control with an initial value in a disabled state.
   *
   * {@example forms/ts/formBuilder/form_builder_example.ts region='disabled-control'}
   */
  control(formState, validatorOrOpts, asyncValidator) {
    let newOptions = {};
    if (!this.useNonNullable) {
      return new FormControl(formState, validatorOrOpts, asyncValidator);
    }
    if (isAbstractControlOptions(validatorOrOpts)) {
      newOptions = validatorOrOpts;
    } else {
      newOptions.validators = validatorOrOpts;
      newOptions.asyncValidators = asyncValidator;
    }
    return new FormControl(formState, __spreadProps(__spreadValues({}, newOptions), {
      nonNullable: true
    }));
  }
  /**
   * Constructs a new `FormArray` from the given array of configurations,
   * validators and options. Accepts a single generic argument, which is the type of each control
   * inside the array.
   *
   * @param controls An array of child controls or control configs. Each child control is given an
   *     index when it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of such functions, or an
   *     `AbstractControlOptions` object that contains
   * validation functions and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions.
   */
  array(controls, validatorOrOpts, asyncValidator) {
    const createdControls = controls.map((c) => this._createControl(c));
    return new FormArray(createdControls, validatorOrOpts, asyncValidator);
  }
  /** @internal */
  _reduceControls(controls) {
    const createdControls = {};
    Object.keys(controls).forEach((controlName) => {
      createdControls[controlName] = this._createControl(controls[controlName]);
    });
    return createdControls;
  }
  /** @internal */
  _createControl(controls) {
    if (controls instanceof FormControl) {
      return controls;
    } else if (controls instanceof AbstractControl) {
      return controls;
    } else if (Array.isArray(controls)) {
      const value = controls[0];
      const validator = controls.length > 1 ? controls[1] : null;
      const asyncValidator = controls.length > 2 ? controls[2] : null;
      return this.control(value, validator, asyncValidator);
    } else {
      return this.control(controls);
    }
  }
  static \u0275fac = function FormBuilder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormBuilder)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _FormBuilder,
    factory: _FormBuilder.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NonNullableFormBuilder = class _NonNullableFormBuilder {
  static \u0275fac = function NonNullableFormBuilder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NonNullableFormBuilder)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NonNullableFormBuilder,
    factory: () => (() => inject(FormBuilder).nonNullable)(),
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NonNullableFormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(FormBuilder).nonNullable
    }]
  }], null, null);
})();
var UntypedFormBuilder = class _UntypedFormBuilder extends FormBuilder {
  group(controlsConfig, options = null) {
    return super.group(controlsConfig, options);
  }
  /**
   * Like `FormBuilder#control`, except the resulting control is untyped.
   */
  control(formState, validatorOrOpts, asyncValidator) {
    return super.control(formState, validatorOrOpts, asyncValidator);
  }
  /**
   * Like `FormBuilder#array`, except the resulting array is untyped.
   */
  array(controlsConfig, validatorOrOpts, asyncValidator) {
    return super.array(controlsConfig, validatorOrOpts, asyncValidator);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275UntypedFormBuilder_BaseFactory;
    return function UntypedFormBuilder_Factory(__ngFactoryType__) {
      return (\u0275UntypedFormBuilder_BaseFactory || (\u0275UntypedFormBuilder_BaseFactory = \u0275\u0275getInheritedFactory(_UntypedFormBuilder)))(__ngFactoryType__ || _UntypedFormBuilder);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _UntypedFormBuilder,
    factory: _UntypedFormBuilder.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UntypedFormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var VERSION = new Version("19.0.5");
var FormsModule = class _FormsModule {
  /**
   * @description
   * Provides options for configuring the forms module.
   *
   * @param opts An object of configuration options
   * * `callSetDisabledState` Configures whether to `always` call `setDisabledState`, which is more
   * correct, or to only call it `whenDisabled`, which is the legacy behavior.
   */
  static withConfig(opts) {
    return {
      ngModule: _FormsModule,
      providers: [{
        provide: CALL_SET_DISABLED_STATE,
        useValue: opts.callSetDisabledState ?? setDisabledStateDefault
      }]
    };
  }
  static \u0275fac = function FormsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _FormsModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [\u0275InternalFormsSharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormsModule, [{
    type: NgModule,
    args: [{
      declarations: TEMPLATE_DRIVEN_DIRECTIVES,
      exports: [\u0275InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
    }]
  }], null, null);
})();
var ReactiveFormsModule = class _ReactiveFormsModule {
  /**
   * @description
   * Provides options for configuring the reactive forms module.
   *
   * @param opts An object of configuration options
   * * `warnOnNgModelWithFormControl` Configures when to emit a warning when an `ngModel`
   * binding is used with reactive form directives.
   * * `callSetDisabledState` Configures whether to `always` call `setDisabledState`, which is more
   * correct, or to only call it `whenDisabled`, which is the legacy behavior.
   */
  static withConfig(opts) {
    return {
      ngModule: _ReactiveFormsModule,
      providers: [{
        provide: NG_MODEL_WITH_FORM_CONTROL_WARNING,
        useValue: opts.warnOnNgModelWithFormControl ?? "always"
      }, {
        provide: CALL_SET_DISABLED_STATE,
        useValue: opts.callSetDisabledState ?? setDisabledStateDefault
      }]
    };
  }
  static \u0275fac = function ReactiveFormsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReactiveFormsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ReactiveFormsModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [\u0275InternalFormsSharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReactiveFormsModule, [{
    type: NgModule,
    args: [{
      declarations: [REACTIVE_DRIVEN_DIRECTIVES],
      exports: [\u0275InternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-basecomponent.mjs
var BaseComponentStyle = class _BaseComponentStyle extends BaseStyle {
  name = "common";
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BaseComponentStyle_BaseFactory;
    return function BaseComponentStyle_Factory(__ngFactoryType__) {
      return (\u0275BaseComponentStyle_BaseFactory || (\u0275BaseComponentStyle_BaseFactory = \u0275\u0275getInheritedFactory(_BaseComponentStyle)))(__ngFactoryType__ || _BaseComponentStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _BaseComponentStyle,
    factory: _BaseComponentStyle.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseComponentStyle, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var BaseComponent = class _BaseComponent {
  document = inject(DOCUMENT);
  platformId = inject(PLATFORM_ID);
  el = inject(ElementRef);
  injector = inject(Injector);
  cd = inject(ChangeDetectorRef);
  renderer = inject(Renderer2);
  config = inject(PrimeNG);
  baseComponentStyle = inject(BaseComponentStyle);
  baseStyle = inject(BaseStyle);
  scopedStyleEl;
  rootEl;
  dt;
  get styleOptions() {
    return {
      nonce: this.config?.csp().nonce
    };
  }
  get _name() {
    return this.constructor.name.replace(/^_/, "").toLowerCase();
  }
  get componentStyle() {
    return this["_componentStyle"];
  }
  attrSelector = uuid("pc");
  _getHostInstance(instance) {
    if (instance) {
      return instance ? this["hostName"] ? instance["name"] === this["hostName"] ? instance : this._getHostInstance(instance.parentInstance) : instance.parentInstance : void 0;
    }
  }
  _getOptionValue(options, key = "", params = {}) {
    return getKeyValue(options, key, params);
  }
  ngOnInit() {
    if (this.document) {
      this._loadStyles();
    }
  }
  ngAfterViewInit() {
    this.rootEl = this.el?.nativeElement;
    if (this.rootEl) {
      this.rootEl?.setAttribute(this.attrSelector, "");
    }
  }
  ngOnChanges(changes) {
    if (this.document && !isPlatformServer(this.platformId)) {
      const {
        dt: dt2
      } = changes;
      if (dt2 && dt2.currentValue) {
        this._loadScopedThemeStyles(dt2.currentValue);
        this._themeChangeListener(() => this._loadScopedThemeStyles(dt2.currentValue));
      }
    }
  }
  ngOnDestroy() {
    this._unloadScopedThemeStyles();
  }
  _loadStyles() {
    const _load = () => {
      if (!base.isStyleNameLoaded("base")) {
        this.baseStyle.loadCSS(this.styleOptions);
        base.setLoadedStyleName("base");
      }
      this._loadThemeStyles();
    };
    _load();
    this._themeChangeListener(() => _load());
  }
  _loadCoreStyles() {
    if (!base.isStyleNameLoaded("base") && this._name) {
      this.baseComponentStyle.loadCSS(this.styleOptions);
      this.componentStyle && this.componentStyle?.loadCSS(this.styleOptions);
      base.setLoadedStyleName(this.componentStyle?.name);
    }
  }
  _loadThemeStyles() {
    if (!config_default.isStyleNameLoaded("common")) {
      const {
        primitive,
        semantic,
        global,
        style: style2
      } = this.componentStyle?.getCommonTheme?.() || {};
      this.baseStyle.load(primitive?.css, __spreadValues({
        name: "primitive-variables"
      }, this.styleOptions));
      this.baseStyle.load(semantic?.css, __spreadValues({
        name: "semantic-variables"
      }, this.styleOptions));
      this.baseStyle.load(global?.css, __spreadValues({
        name: "global-variables"
      }, this.styleOptions));
      this.baseStyle.loadTheme(__spreadValues({
        name: "global-style"
      }, this.styleOptions), style2);
      config_default.setLoadedStyleName("common");
    }
    if (!config_default.isStyleNameLoaded(this.componentStyle?.name) && this.componentStyle?.name) {
      const {
        css: css3,
        style: style2
      } = this.componentStyle?.getComponentTheme?.() || {};
      this.componentStyle?.load(css3, __spreadValues({
        name: `${this.componentStyle?.name}-variables`
      }, this.styleOptions));
      this.componentStyle?.loadTheme(__spreadValues({
        name: `${this.componentStyle?.name}-style`
      }, this.styleOptions), style2);
      config_default.setLoadedStyleName(this.componentStyle?.name);
    }
    if (!config_default.isStyleNameLoaded("layer-order")) {
      const layerOrder = this.componentStyle?.getLayerOrderThemeCSS?.();
      this.baseStyle.load(layerOrder, __spreadValues({
        name: "layer-order",
        first: true
      }, this.styleOptions));
      config_default.setLoadedStyleName("layer-order");
    }
    if (this.dt) {
      this._loadScopedThemeStyles(this.dt);
      this._themeChangeListener(() => this._loadScopedThemeStyles(this.dt));
    }
  }
  _loadScopedThemeStyles(preset) {
    const {
      css: css3
    } = this.componentStyle?.getPresetTheme?.(preset, `[${this.attrSelector}]`) || {};
    const scopedStyle = this.componentStyle?.load(css3, __spreadValues({
      name: `${this.attrSelector}-${this.componentStyle?.name}`
    }, this.styleOptions));
    this.scopedStyleEl = scopedStyle?.el;
  }
  _unloadScopedThemeStyles() {
    this.scopedStyleEl?.remove();
  }
  _themeChangeListener(callback = () => {
  }) {
    base.clearLoadedStyleNames();
    service_default.on("theme:change", callback);
  }
  cx(arg, rest) {
    const classes11 = this.parent ? this.parent.componentStyle?.classes?.[arg] : this.componentStyle?.classes?.[arg];
    if (typeof classes11 === "function") {
      return classes11({
        instance: this
      });
    }
    return typeof classes11 === "string" ? classes11 : arg;
  }
  sx(arg) {
    const styles = this.componentStyle?.inlineStyles?.[arg];
    if (typeof styles === "function") {
      return styles({
        instance: this
      });
    }
    if (typeof styles === "string") {
      return styles;
    } else {
      return __spreadValues({}, styles);
    }
  }
  // cx(key = '', params = {}) {
  //     const classes = this.parent ? this.parent.componentStyle?.classes : this.componentStyle?.classes;
  //     return this._getOptionValue(classes({ instance: this._getHostInstance(this) }), key, { ...params });
  // }
  get parent() {
    return this["parentInstance"];
  }
  static \u0275fac = function BaseComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BaseComponent)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _BaseComponent,
    inputs: {
      dt: "dt"
    },
    features: [\u0275\u0275ProvidersFeature([BaseComponentStyle, BaseStyle]), \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseComponent, [{
    type: Directive,
    args: [{
      standalone: true,
      providers: [BaseComponentStyle, BaseStyle]
    }]
  }], null, {
    dt: [{
      type: Input
    }]
  });
})();

// node_modules/primeng/fesm2022/primeng-ripple.mjs
var theme2 = ({
  dt: dt2
}) => `
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${dt2("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`;
var classes = {
  root: "p-ink"
};
var RippleStyle = class _RippleStyle extends BaseStyle {
  name = "ripple";
  theme = theme2;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275RippleStyle_BaseFactory;
    return function RippleStyle_Factory(__ngFactoryType__) {
      return (\u0275RippleStyle_BaseFactory || (\u0275RippleStyle_BaseFactory = \u0275\u0275getInheritedFactory(_RippleStyle)))(__ngFactoryType__ || _RippleStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _RippleStyle,
    factory: _RippleStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RippleStyle, [{
    type: Injectable
  }], null, null);
})();
var RippleClasses;
(function(RippleClasses2) {
  RippleClasses2["root"] = "p-ink";
})(RippleClasses || (RippleClasses = {}));
var Ripple = class _Ripple extends BaseComponent {
  zone = inject(NgZone);
  _componentStyle = inject(RippleStyle);
  animationListener;
  mouseDownListener;
  timeout;
  constructor() {
    super();
    effect(() => {
      if (isPlatformBrowser(this.platformId)) {
        if (this.config.ripple()) {
          this.zone.runOutsideAngular(() => {
            this.create();
            this.mouseDownListener = this.renderer.listen(this.el.nativeElement, "mousedown", this.onMouseDown.bind(this));
          });
        } else {
          this.remove();
        }
      }
    });
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
  }
  onMouseDown(event) {
    let ink = this.getInk();
    if (!ink || this.document.defaultView?.getComputedStyle(ink, null).display === "none") {
      return;
    }
    removeClass(ink, "p-ink-active");
    if (!getHeight(ink) && !getWidth(ink)) {
      let d = Math.max(getOuterWidth(this.el.nativeElement), getOuterHeight(this.el.nativeElement));
      ink.style.height = d + "px";
      ink.style.width = d + "px";
    }
    let offset = getOffset(this.el.nativeElement);
    let x = event.pageX - offset.left + this.document.body.scrollTop - getWidth(ink) / 2;
    let y = event.pageY - offset.top + this.document.body.scrollLeft - getHeight(ink) / 2;
    this.renderer.setStyle(ink, "top", y + "px");
    this.renderer.setStyle(ink, "left", x + "px");
    addClass(ink, "p-ink-active");
    this.timeout = setTimeout(() => {
      let ink2 = this.getInk();
      if (ink2) {
        removeClass(ink2, "p-ink-active");
      }
    }, 401);
  }
  getInk() {
    const children = this.el.nativeElement.children;
    for (let i = 0; i < children.length; i++) {
      if (typeof children[i].className === "string" && children[i].className.indexOf("p-ink") !== -1) {
        return children[i];
      }
    }
    return null;
  }
  resetInk() {
    let ink = this.getInk();
    if (ink) {
      removeClass(ink, "p-ink-active");
    }
  }
  onAnimationEnd(event) {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    removeClass(event.currentTarget, "p-ink-active");
  }
  create() {
    let ink = this.renderer.createElement("span");
    this.renderer.addClass(ink, "p-ink");
    this.renderer.appendChild(this.el.nativeElement, ink);
    this.renderer.setAttribute(ink, "aria-hidden", "true");
    this.renderer.setAttribute(ink, "role", "presentation");
    if (!this.animationListener) {
      this.animationListener = this.renderer.listen(ink, "animationend", this.onAnimationEnd.bind(this));
    }
  }
  remove() {
    let ink = this.getInk();
    if (ink) {
      this.mouseDownListener && this.mouseDownListener();
      this.animationListener && this.animationListener();
      this.mouseDownListener = null;
      this.animationListener = null;
      remove(ink);
    }
  }
  ngOnDestroy() {
    if (this.config && this.config.ripple()) {
      this.remove();
    }
    super.ngOnDestroy();
  }
  static \u0275fac = function Ripple_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Ripple)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _Ripple,
    selectors: [["", "pRipple", ""]],
    hostAttrs: [1, "p-ripple"],
    features: [\u0275\u0275ProvidersFeature([RippleStyle]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Ripple, [{
    type: Directive,
    args: [{
      selector: "[pRipple]",
      host: {
        class: "p-ripple"
      },
      standalone: true,
      providers: [RippleStyle]
    }]
  }], () => [], null);
})();
var RippleModule = class _RippleModule {
  static \u0275fac = function RippleModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RippleModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _RippleModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RippleModule, [{
    type: NgModule,
    args: [{
      imports: [Ripple],
      exports: [Ripple]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-dom.mjs
var DomHandler = class _DomHandler {
  static zindex = 1e3;
  static calculatedScrollbarWidth = null;
  static calculatedScrollbarHeight = null;
  static browser;
  static addClass(element, className) {
    if (element && className) {
      if (element.classList) element.classList.add(className);
      else element.className += " " + className;
    }
  }
  static addMultipleClasses(element, className) {
    if (element && className) {
      if (element.classList) {
        let styles = className.trim().split(" ");
        for (let i = 0; i < styles.length; i++) {
          element.classList.add(styles[i]);
        }
      } else {
        let styles = className.split(" ");
        for (let i = 0; i < styles.length; i++) {
          element.className += " " + styles[i];
        }
      }
    }
  }
  static removeClass(element, className) {
    if (element && className) {
      if (element.classList) element.classList.remove(className);
      else element.className = element.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    }
  }
  static removeMultipleClasses(element, classNames) {
    if (element && classNames) {
      [classNames].flat().filter(Boolean).forEach((cNames) => cNames.split(" ").forEach((className) => this.removeClass(element, className)));
    }
  }
  static hasClass(element, className) {
    if (element && className) {
      if (element.classList) return element.classList.contains(className);
      else return new RegExp("(^| )" + className + "( |$)", "gi").test(element.className);
    }
    return false;
  }
  static siblings(element) {
    return Array.prototype.filter.call(element.parentNode.children, function(child) {
      return child !== element;
    });
  }
  static find(element, selector) {
    return Array.from(element.querySelectorAll(selector));
  }
  static findSingle(element, selector) {
    return this.isElement(element) ? element.querySelector(selector) : null;
  }
  static index(element) {
    let children = element.parentNode.childNodes;
    let num = 0;
    for (var i = 0; i < children.length; i++) {
      if (children[i] == element) return num;
      if (children[i].nodeType == 1) num++;
    }
    return -1;
  }
  static indexWithinGroup(element, attributeName) {
    let children = element.parentNode ? element.parentNode.childNodes : [];
    let num = 0;
    for (var i = 0; i < children.length; i++) {
      if (children[i] == element) return num;
      if (children[i].attributes && children[i].attributes[attributeName] && children[i].nodeType == 1) num++;
    }
    return -1;
  }
  static appendOverlay(overlay, target, appendTo = "self") {
    if (appendTo !== "self" && overlay && target) {
      this.appendChild(overlay, target);
    }
  }
  static alignOverlay(overlay, target, appendTo = "self", calculateMinWidth = true) {
    if (overlay && target) {
      if (calculateMinWidth) {
        overlay.style.minWidth = `${_DomHandler.getOuterWidth(target)}px`;
      }
      if (appendTo === "self") {
        this.relativePosition(overlay, target);
      } else {
        this.absolutePosition(overlay, target);
      }
    }
  }
  static relativePosition(element, target, gutter = true) {
    const getClosestRelativeElement = (el) => {
      if (!el) return;
      return getComputedStyle(el).getPropertyValue("position") === "relative" ? el : getClosestRelativeElement(el.parentElement);
    };
    const elementDimensions = element.offsetParent ? {
      width: element.offsetWidth,
      height: element.offsetHeight
    } : this.getHiddenElementDimensions(element);
    const targetHeight = target.offsetHeight;
    const targetOffset = target.getBoundingClientRect();
    const windowScrollTop = this.getWindowScrollTop();
    const windowScrollLeft = this.getWindowScrollLeft();
    const viewport = this.getViewport();
    const relativeElement = getClosestRelativeElement(element);
    const relativeElementOffset = relativeElement?.getBoundingClientRect() || {
      top: -1 * windowScrollTop,
      left: -1 * windowScrollLeft
    };
    let top, left;
    if (targetOffset.top + targetHeight + elementDimensions.height > viewport.height) {
      top = targetOffset.top - relativeElementOffset.top - elementDimensions.height;
      element.style.transformOrigin = "bottom";
      if (targetOffset.top + top < 0) {
        top = -1 * targetOffset.top;
      }
    } else {
      top = targetHeight + targetOffset.top - relativeElementOffset.top;
      element.style.transformOrigin = "top";
    }
    const horizontalOverflow = targetOffset.left + elementDimensions.width - viewport.width;
    const targetLeftOffsetInSpaceOfRelativeElement = targetOffset.left - relativeElementOffset.left;
    if (elementDimensions.width > viewport.width) {
      left = (targetOffset.left - relativeElementOffset.left) * -1;
    } else if (horizontalOverflow > 0) {
      left = targetLeftOffsetInSpaceOfRelativeElement - horizontalOverflow;
    } else {
      left = targetOffset.left - relativeElementOffset.left;
    }
    element.style.top = top + "px";
    element.style.left = left + "px";
    gutter && (element.style.marginTop = origin === "bottom" ? "calc(var(--p-anchor-gutter) * -1)" : "calc(var(--p-anchor-gutter))");
  }
  static absolutePosition(element, target, gutter = true) {
    const elementDimensions = element.offsetParent ? {
      width: element.offsetWidth,
      height: element.offsetHeight
    } : this.getHiddenElementDimensions(element);
    const elementOuterHeight = elementDimensions.height;
    const elementOuterWidth = elementDimensions.width;
    const targetOuterHeight = target.offsetHeight;
    const targetOuterWidth = target.offsetWidth;
    const targetOffset = target.getBoundingClientRect();
    const windowScrollTop = this.getWindowScrollTop();
    const windowScrollLeft = this.getWindowScrollLeft();
    const viewport = this.getViewport();
    let top, left;
    if (targetOffset.top + targetOuterHeight + elementOuterHeight > viewport.height) {
      top = targetOffset.top + windowScrollTop - elementOuterHeight;
      element.style.transformOrigin = "bottom";
      if (top < 0) {
        top = windowScrollTop;
      }
    } else {
      top = targetOuterHeight + targetOffset.top + windowScrollTop;
      element.style.transformOrigin = "top";
    }
    if (targetOffset.left + elementOuterWidth > viewport.width) left = Math.max(0, targetOffset.left + windowScrollLeft + targetOuterWidth - elementOuterWidth);
    else left = targetOffset.left + windowScrollLeft;
    element.style.top = top + "px";
    element.style.left = left + "px";
    gutter && (element.style.marginTop = origin === "bottom" ? "calc(var(--p-anchor-gutter) * -1)" : "calc(var(--p-anchor-gutter))");
  }
  static getParents(element, parents = []) {
    return element["parentNode"] === null ? parents : this.getParents(element.parentNode, parents.concat([element.parentNode]));
  }
  static getScrollableParents(element) {
    let scrollableParents = [];
    if (element) {
      let parents = this.getParents(element);
      const overflowRegex = /(auto|scroll)/;
      const overflowCheck = (node) => {
        let styleDeclaration = window["getComputedStyle"](node, null);
        return overflowRegex.test(styleDeclaration.getPropertyValue("overflow")) || overflowRegex.test(styleDeclaration.getPropertyValue("overflowX")) || overflowRegex.test(styleDeclaration.getPropertyValue("overflowY"));
      };
      for (let parent of parents) {
        let scrollSelectors = parent.nodeType === 1 && parent.dataset["scrollselectors"];
        if (scrollSelectors) {
          let selectors = scrollSelectors.split(",");
          for (let selector of selectors) {
            let el = this.findSingle(parent, selector);
            if (el && overflowCheck(el)) {
              scrollableParents.push(el);
            }
          }
        }
        if (parent.nodeType !== 9 && overflowCheck(parent)) {
          scrollableParents.push(parent);
        }
      }
    }
    return scrollableParents;
  }
  static getHiddenElementOuterHeight(element) {
    element.style.visibility = "hidden";
    element.style.display = "block";
    let elementHeight = element.offsetHeight;
    element.style.display = "none";
    element.style.visibility = "visible";
    return elementHeight;
  }
  static getHiddenElementOuterWidth(element) {
    element.style.visibility = "hidden";
    element.style.display = "block";
    let elementWidth = element.offsetWidth;
    element.style.display = "none";
    element.style.visibility = "visible";
    return elementWidth;
  }
  static getHiddenElementDimensions(element) {
    let dimensions = {};
    element.style.visibility = "hidden";
    element.style.display = "block";
    dimensions.width = element.offsetWidth;
    dimensions.height = element.offsetHeight;
    element.style.display = "none";
    element.style.visibility = "visible";
    return dimensions;
  }
  static scrollInView(container, item) {
    let borderTopValue = getComputedStyle(container).getPropertyValue("borderTopWidth");
    let borderTop = borderTopValue ? parseFloat(borderTopValue) : 0;
    let paddingTopValue = getComputedStyle(container).getPropertyValue("paddingTop");
    let paddingTop = paddingTopValue ? parseFloat(paddingTopValue) : 0;
    let containerRect = container.getBoundingClientRect();
    let itemRect = item.getBoundingClientRect();
    let offset = itemRect.top + document.body.scrollTop - (containerRect.top + document.body.scrollTop) - borderTop - paddingTop;
    let scroll = container.scrollTop;
    let elementHeight = container.clientHeight;
    let itemHeight = this.getOuterHeight(item);
    if (offset < 0) {
      container.scrollTop = scroll + offset;
    } else if (offset + itemHeight > elementHeight) {
      container.scrollTop = scroll + offset - elementHeight + itemHeight;
    }
  }
  static fadeIn(element, duration) {
    element.style.opacity = 0;
    let last = +/* @__PURE__ */ new Date();
    let opacity = 0;
    let tick = function() {
      opacity = +element.style.opacity.replace(",", ".") + ((/* @__PURE__ */ new Date()).getTime() - last) / duration;
      element.style.opacity = opacity;
      last = +/* @__PURE__ */ new Date();
      if (+opacity < 1) {
        window.requestAnimationFrame && requestAnimationFrame(tick) || setTimeout(tick, 16);
      }
    };
    tick();
  }
  static fadeOut(element, ms) {
    var opacity = 1, interval = 50, duration = ms, gap = interval / duration;
    let fading = setInterval(() => {
      opacity = opacity - gap;
      if (opacity <= 0) {
        opacity = 0;
        clearInterval(fading);
      }
      element.style.opacity = opacity;
    }, interval);
  }
  static getWindowScrollTop() {
    let doc = document.documentElement;
    return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
  }
  static getWindowScrollLeft() {
    let doc = document.documentElement;
    return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
  }
  static matches(element, selector) {
    var p = Element.prototype;
    var f = p["matches"] || p.webkitMatchesSelector || p["mozMatchesSelector"] || p["msMatchesSelector"] || function(s) {
      return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
    };
    return f.call(element, selector);
  }
  static getOuterWidth(el, margin) {
    let width = el.offsetWidth;
    if (margin) {
      let style2 = getComputedStyle(el);
      width += parseFloat(style2.marginLeft) + parseFloat(style2.marginRight);
    }
    return width;
  }
  static getHorizontalPadding(el) {
    let style2 = getComputedStyle(el);
    return parseFloat(style2.paddingLeft) + parseFloat(style2.paddingRight);
  }
  static getHorizontalMargin(el) {
    let style2 = getComputedStyle(el);
    return parseFloat(style2.marginLeft) + parseFloat(style2.marginRight);
  }
  static innerWidth(el) {
    let width = el.offsetWidth;
    let style2 = getComputedStyle(el);
    width += parseFloat(style2.paddingLeft) + parseFloat(style2.paddingRight);
    return width;
  }
  static width(el) {
    let width = el.offsetWidth;
    let style2 = getComputedStyle(el);
    width -= parseFloat(style2.paddingLeft) + parseFloat(style2.paddingRight);
    return width;
  }
  static getInnerHeight(el) {
    let height = el.offsetHeight;
    let style2 = getComputedStyle(el);
    height += parseFloat(style2.paddingTop) + parseFloat(style2.paddingBottom);
    return height;
  }
  static getOuterHeight(el, margin) {
    let height = el.offsetHeight;
    if (margin) {
      let style2 = getComputedStyle(el);
      height += parseFloat(style2.marginTop) + parseFloat(style2.marginBottom);
    }
    return height;
  }
  static getHeight(el) {
    let height = el.offsetHeight;
    let style2 = getComputedStyle(el);
    height -= parseFloat(style2.paddingTop) + parseFloat(style2.paddingBottom) + parseFloat(style2.borderTopWidth) + parseFloat(style2.borderBottomWidth);
    return height;
  }
  static getWidth(el) {
    let width = el.offsetWidth;
    let style2 = getComputedStyle(el);
    width -= parseFloat(style2.paddingLeft) + parseFloat(style2.paddingRight) + parseFloat(style2.borderLeftWidth) + parseFloat(style2.borderRightWidth);
    return width;
  }
  static getViewport() {
    let win = window, d = document, e = d.documentElement, g = d.getElementsByTagName("body")[0], w = win.innerWidth || e.clientWidth || g.clientWidth, h = win.innerHeight || e.clientHeight || g.clientHeight;
    return {
      width: w,
      height: h
    };
  }
  static getOffset(el) {
    var rect = el.getBoundingClientRect();
    return {
      top: rect.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
      left: rect.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0)
    };
  }
  static replaceElementWith(element, replacementElement) {
    let parentNode = element.parentNode;
    if (!parentNode) throw `Can't replace element`;
    return parentNode.replaceChild(replacementElement, element);
  }
  static getUserAgent() {
    if (navigator && this.isClient()) {
      return navigator.userAgent;
    }
  }
  static isIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    if (msie > 0) {
      return true;
    }
    var trident = ua.indexOf("Trident/");
    if (trident > 0) {
      var rv = ua.indexOf("rv:");
      return true;
    }
    var edge = ua.indexOf("Edge/");
    if (edge > 0) {
      return true;
    }
    return false;
  }
  static isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window["MSStream"];
  }
  static isAndroid() {
    return /(android)/i.test(navigator.userAgent);
  }
  static isTouchDevice() {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
  }
  static appendChild(element, target) {
    if (this.isElement(target)) target.appendChild(element);
    else if (target && target.el && target.el.nativeElement) target.el.nativeElement.appendChild(element);
    else throw "Cannot append " + target + " to " + element;
  }
  static removeChild(element, target) {
    if (this.isElement(target)) target.removeChild(element);
    else if (target.el && target.el.nativeElement) target.el.nativeElement.removeChild(element);
    else throw "Cannot remove " + element + " from " + target;
  }
  static removeElement(element) {
    if (!("remove" in Element.prototype)) element.parentNode.removeChild(element);
    else element.remove();
  }
  static isElement(obj) {
    return typeof HTMLElement === "object" ? obj instanceof HTMLElement : obj && typeof obj === "object" && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === "string";
  }
  static calculateScrollbarWidth(el) {
    if (el) {
      let style2 = getComputedStyle(el);
      return el.offsetWidth - el.clientWidth - parseFloat(style2.borderLeftWidth) - parseFloat(style2.borderRightWidth);
    } else {
      if (this.calculatedScrollbarWidth !== null) return this.calculatedScrollbarWidth;
      let scrollDiv = document.createElement("div");
      scrollDiv.className = "p-scrollbar-measure";
      document.body.appendChild(scrollDiv);
      let scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      this.calculatedScrollbarWidth = scrollbarWidth;
      return scrollbarWidth;
    }
  }
  static calculateScrollbarHeight() {
    if (this.calculatedScrollbarHeight !== null) return this.calculatedScrollbarHeight;
    let scrollDiv = document.createElement("div");
    scrollDiv.className = "p-scrollbar-measure";
    document.body.appendChild(scrollDiv);
    let scrollbarHeight = scrollDiv.offsetHeight - scrollDiv.clientHeight;
    document.body.removeChild(scrollDiv);
    this.calculatedScrollbarWidth = scrollbarHeight;
    return scrollbarHeight;
  }
  static invokeElementMethod(element, methodName, args) {
    element[methodName].apply(element, args);
  }
  static clearSelection() {
    if (window.getSelection) {
      if (window.getSelection().empty) {
        window.getSelection().empty();
      } else if (window.getSelection().removeAllRanges && window.getSelection().rangeCount > 0 && window.getSelection().getRangeAt(0).getClientRects().length > 0) {
        window.getSelection().removeAllRanges();
      }
    } else if (document["selection"] && document["selection"].empty) {
      try {
        document["selection"].empty();
      } catch (error) {
      }
    }
  }
  static getBrowser() {
    if (!this.browser) {
      let matched = this.resolveUserAgent();
      this.browser = {};
      if (matched.browser) {
        this.browser[matched.browser] = true;
        this.browser["version"] = matched.version;
      }
      if (this.browser["chrome"]) {
        this.browser["webkit"] = true;
      } else if (this.browser["webkit"]) {
        this.browser["safari"] = true;
      }
    }
    return this.browser;
  }
  static resolveUserAgent() {
    let ua = navigator.userAgent.toLowerCase();
    let match = /(chrome)[ \/]([\w.]+)/.exec(ua) || /(webkit)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
    return {
      browser: match[1] || "",
      version: match[2] || "0"
    };
  }
  static isInteger(value) {
    if (Number.isInteger) {
      return Number.isInteger(value);
    } else {
      return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
    }
  }
  static isHidden(element) {
    return !element || element.offsetParent === null;
  }
  static isVisible(element) {
    return element && element.offsetParent != null;
  }
  static isExist(element) {
    return element !== null && typeof element !== "undefined" && element.nodeName && element.parentNode;
  }
  static focus(element, options) {
    element && document.activeElement !== element && element.focus(options);
  }
  static getFocusableSelectorString(selector = "") {
    return `button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector}`;
  }
  static getFocusableElements(element, selector = "") {
    let focusableElements = this.find(element, this.getFocusableSelectorString(selector));
    let visibleFocusableElements = [];
    for (let focusableElement of focusableElements) {
      const computedStyle = getComputedStyle(focusableElement);
      if (this.isVisible(focusableElement) && computedStyle.display != "none" && computedStyle.visibility != "hidden") visibleFocusableElements.push(focusableElement);
    }
    return visibleFocusableElements;
  }
  static getFocusableElement(element, selector = "") {
    let focusableElement = this.findSingle(element, this.getFocusableSelectorString(selector));
    if (focusableElement) {
      const computedStyle = getComputedStyle(focusableElement);
      if (this.isVisible(focusableElement) && computedStyle.display != "none" && computedStyle.visibility != "hidden") return focusableElement;
    }
    return null;
  }
  static getFirstFocusableElement(element, selector = "") {
    const focusableElements = this.getFocusableElements(element, selector);
    return focusableElements.length > 0 ? focusableElements[0] : null;
  }
  static getLastFocusableElement(element, selector) {
    const focusableElements = this.getFocusableElements(element, selector);
    return focusableElements.length > 0 ? focusableElements[focusableElements.length - 1] : null;
  }
  static getNextFocusableElement(element, reverse = false) {
    const focusableElements = _DomHandler.getFocusableElements(element);
    let index = 0;
    if (focusableElements && focusableElements.length > 0) {
      const focusedIndex = focusableElements.indexOf(focusableElements[0].ownerDocument.activeElement);
      if (reverse) {
        if (focusedIndex == -1 || focusedIndex === 0) {
          index = focusableElements.length - 1;
        } else {
          index = focusedIndex - 1;
        }
      } else if (focusedIndex != -1 && focusedIndex !== focusableElements.length - 1) {
        index = focusedIndex + 1;
      }
    }
    return focusableElements[index];
  }
  static generateZIndex() {
    this.zindex = this.zindex || 999;
    return ++this.zindex;
  }
  static getSelection() {
    if (window.getSelection) return window.getSelection().toString();
    else if (document.getSelection) return document.getSelection().toString();
    else if (document["selection"]) return document["selection"].createRange().text;
    return null;
  }
  static getTargetElement(target, el) {
    if (!target) return null;
    switch (target) {
      case "document":
        return document;
      case "window":
        return window;
      case "@next":
        return el?.nextElementSibling;
      case "@prev":
        return el?.previousElementSibling;
      case "@parent":
        return el?.parentElement;
      case "@grandparent":
        return el?.parentElement.parentElement;
      default:
        const type = typeof target;
        if (type === "string") {
          return document.querySelector(target);
        } else if (type === "object" && target.hasOwnProperty("nativeElement")) {
          return this.isExist(target.nativeElement) ? target.nativeElement : void 0;
        }
        const isFunction2 = (obj) => !!(obj && obj.constructor && obj.call && obj.apply);
        const element = isFunction2(target) ? target() : target;
        return element && element.nodeType === 9 || this.isExist(element) ? element : null;
    }
  }
  static isClient() {
    return !!(typeof window !== "undefined" && window.document && window.document.createElement);
  }
  static getAttribute(element, name) {
    if (element) {
      const value = element.getAttribute(name);
      if (!isNaN(value)) {
        return +value;
      }
      if (value === "true" || value === "false") {
        return value === "true";
      }
      return value;
    }
    return void 0;
  }
  static calculateBodyScrollbarWidth() {
    return window.innerWidth - document.documentElement.offsetWidth;
  }
  static blockBodyScroll(className = "p-overflow-hidden") {
    document.body.style.setProperty("--scrollbar-width", this.calculateBodyScrollbarWidth() + "px");
    this.addClass(document.body, className);
  }
  static unblockBodyScroll(className = "p-overflow-hidden") {
    document.body.style.removeProperty("--scrollbar-width");
    this.removeClass(document.body, className);
  }
  static createElement(type, attributes = {}, ...children) {
    if (type) {
      const element = document.createElement(type);
      this.setAttributes(element, attributes);
      element.append(...children);
      return element;
    }
    return void 0;
  }
  static setAttribute(element, attribute = "", value) {
    if (this.isElement(element) && value !== null && value !== void 0) {
      element.setAttribute(attribute, value);
    }
  }
  static setAttributes(element, attributes = {}) {
    if (this.isElement(element)) {
      const computedStyles = (rule, value) => {
        const styles = element?.$attrs?.[rule] ? [element?.$attrs?.[rule]] : [];
        return [value].flat().reduce((cv, v) => {
          if (v !== null && v !== void 0) {
            const type = typeof v;
            if (type === "string" || type === "number") {
              cv.push(v);
            } else if (type === "object") {
              const _cv = Array.isArray(v) ? computedStyles(rule, v) : Object.entries(v).map(([_k, _v]) => rule === "style" && (!!_v || _v === 0) ? `${_k.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${_v}` : !!_v ? _k : void 0);
              cv = _cv.length ? cv.concat(_cv.filter((c) => !!c)) : cv;
            }
          }
          return cv;
        }, styles);
      };
      Object.entries(attributes).forEach(([key, value]) => {
        if (value !== void 0 && value !== null) {
          const matchedEvent = key.match(/^on(.+)/);
          if (matchedEvent) {
            element.addEventListener(matchedEvent[1].toLowerCase(), value);
          } else if (key === "pBind") {
            this.setAttributes(element, value);
          } else {
            value = key === "class" ? [...new Set(computedStyles("class", value))].join(" ").trim() : key === "style" ? computedStyles("style", value).join(";").trim() : value;
            (element.$attrs = element.$attrs || {}) && (element.$attrs[key] = value);
            element.setAttribute(key, value);
          }
        }
      });
    }
  }
  static isFocusableElement(element, selector = "") {
    return this.isElement(element) ? element.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector}`) : false;
  }
};
var ConnectedOverlayScrollHandler = class {
  element;
  listener;
  scrollableParents;
  constructor(element, listener = () => {
  }) {
    this.element = element;
    this.listener = listener;
  }
  bindScrollListener() {
    this.scrollableParents = DomHandler.getScrollableParents(this.element);
    for (let i = 0; i < this.scrollableParents.length; i++) {
      this.scrollableParents[i].addEventListener("scroll", this.listener);
    }
  }
  unbindScrollListener() {
    if (this.scrollableParents) {
      for (let i = 0; i < this.scrollableParents.length; i++) {
        this.scrollableParents[i].removeEventListener("scroll", this.listener);
      }
    }
  }
  destroy() {
    this.unbindScrollListener();
    this.element = null;
    this.listener = null;
    this.scrollableParents = null;
  }
};

// node_modules/primeng/fesm2022/primeng-autofocus.mjs
var AutoFocus = class _AutoFocus extends BaseComponent {
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @deprecated use [pAutoFocus]="true"
   * @group Props
   */
  autofocus = false;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  _autofocus = false;
  focused = false;
  platformId = inject(PLATFORM_ID);
  document = inject(DOCUMENT);
  host = inject(ElementRef);
  ngAfterContentChecked() {
    if (this.autofocus === false) {
      this.host.nativeElement.removeAttribute("autofocus");
    } else {
      this.host.nativeElement.setAttribute("autofocus", true);
    }
    if (!this.focused) {
      this.autoFocus();
    }
  }
  ngAfterViewChecked() {
    if (!this.focused) {
      this.autoFocus();
    }
  }
  autoFocus() {
    if (isPlatformBrowser(this.platformId) && this._autofocus) {
      setTimeout(() => {
        const focusableElements = DomHandler.getFocusableElements(this.host?.nativeElement);
        if (focusableElements.length === 0) {
          this.host.nativeElement.focus();
        }
        if (focusableElements.length > 0) {
          focusableElements[0].focus();
        }
        this.focused = true;
      });
    }
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AutoFocus_BaseFactory;
    return function AutoFocus_Factory(__ngFactoryType__) {
      return (\u0275AutoFocus_BaseFactory || (\u0275AutoFocus_BaseFactory = \u0275\u0275getInheritedFactory(_AutoFocus)))(__ngFactoryType__ || _AutoFocus);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _AutoFocus,
    selectors: [["", "pAutoFocus", ""]],
    inputs: {
      autofocus: [2, "autofocus", "autofocus", booleanAttribute],
      _autofocus: [0, "pAutoFocus", "_autofocus"]
    },
    features: [\u0275\u0275InputTransformsFeature, \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoFocus, [{
    type: Directive,
    args: [{
      selector: "[pAutoFocus]",
      standalone: true
    }]
  }], null, {
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    _autofocus: [{
      type: Input,
      args: ["pAutoFocus"]
    }]
  });
})();
var AutoFocusModule = class _AutoFocusModule {
  static \u0275fac = function AutoFocusModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AutoFocusModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _AutoFocusModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoFocusModule, [{
    type: NgModule,
    args: [{
      imports: [AutoFocus],
      exports: [AutoFocus]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-badge.mjs
var theme3 = ({
  dt: dt2
}) => `
.p-badge {
    display: inline-flex;
    border-radius: ${dt2("badge.border.radius")};
    justify-content: center;
    padding: ${dt2("badge.padding")};
    background: ${dt2("badge.primary.background")};
    color: ${dt2("badge.primary.color")};
    font-size: ${dt2("badge.font.size")};
    font-weight: ${dt2("badge.font.weight")};
    min-width: ${dt2("badge.min.width")};
    height: ${dt2("badge.height")};
    line-height: ${dt2("badge.height")};
}

.p-badge-dot {
    width: ${dt2("badge.dot.size")};
    min-width: ${dt2("badge.dot.size")};
    height: ${dt2("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${dt2("badge.secondary.background")};
    color: ${dt2("badge.secondary.color")};
}

.p-badge-success {
    background: ${dt2("badge.success.background")};
    color: ${dt2("badge.success.color")};
}

.p-badge-info {
    background: ${dt2("badge.info.background")};
    color: ${dt2("badge.info.color")};
}

.p-badge-warn {
    background: ${dt2("badge.warn.background")};
    color: ${dt2("badge.warn.color")};
}

.p-badge-danger {
    background: ${dt2("badge.danger.background")};
    color: ${dt2("badge.danger.color")};
}

.p-badge-contrast {
    background: ${dt2("badge.contrast.background")};
    color: ${dt2("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${dt2("badge.sm.font.size")};
    min-width: ${dt2("badge.sm.min.width")};
    height: ${dt2("badge.sm.height")};
    line-height: ${dt2("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${dt2("badge.lg.font.size")};
    min-width: ${dt2("badge.lg.min.width")};
    height: ${dt2("badge.lg.height")};
    line-height: ${dt2("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${dt2("badge.xl.font.size")};
    min-width: ${dt2("badge.xl.min.width")};
    height: ${dt2("badge.xl.height")};
    line-height: ${dt2("badge.xl.height")};
}

/* For PrimeNG (directive)*/

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge > .p-badge {
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
}
`;
var classes2 = {
  root: ({
    props,
    instance
  }) => ["p-badge p-component", {
    "p-badge-circle": isNotEmpty(props.value) && String(props.value).length === 1,
    "p-badge-dot": isEmpty(props.value) && !instance.$slots.default,
    "p-badge-sm": props.size === "small",
    "p-badge-lg": props.size === "large",
    "p-badge-xl": props.size === "xlarge",
    "p-badge-info": props.severity === "info",
    "p-badge-success": props.severity === "success",
    "p-badge-warn": props.severity === "warn",
    "p-badge-danger": props.severity === "danger",
    "p-badge-secondary": props.severity === "secondary",
    "p-badge-contrast": props.severity === "contrast"
  }]
};
var BadgeStyle = class _BadgeStyle extends BaseStyle {
  name = "badge";
  theme = theme3;
  classes = classes2;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BadgeStyle_BaseFactory;
    return function BadgeStyle_Factory(__ngFactoryType__) {
      return (\u0275BadgeStyle_BaseFactory || (\u0275BadgeStyle_BaseFactory = \u0275\u0275getInheritedFactory(_BadgeStyle)))(__ngFactoryType__ || _BadgeStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _BadgeStyle,
    factory: _BadgeStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BadgeStyle, [{
    type: Injectable
  }], null, null);
})();
var BadgeClasses;
(function(BadgeClasses2) {
  BadgeClasses2["root"] = "p-badge";
})(BadgeClasses || (BadgeClasses = {}));
var BadgeDirective = class _BadgeDirective extends BaseComponent {
  /**
   * When specified, disables the component.
   * @group Props
   */
  disabled;
  /**
   * Size of the badge, valid options are "large" and "xlarge".
   * @group Props
   */
  badgeSize;
  /**
   * Size of the badge, valid options are "large" and "xlarge".
   * @group Props
   * @deprecated use badgeSize instead.
   */
  set size(value) {
    this._size = value;
    console.log("size property is deprecated and will removed in v18, use badgeSize instead.");
  }
  get size() {
    return this._size;
  }
  _size;
  /**
   * Severity type of the badge.
   * @group Props
   */
  severity;
  /**
   * Value to display inside the badge.
   * @group Props
   */
  value;
  /**
   * Inline style of the element.
   * @group Props
   */
  badgeStyle;
  /**
   * Class of the element.
   * @group Props
   */
  badgeStyleClass;
  id;
  badgeEl;
  _componentStyle = inject(BadgeStyle);
  get activeElement() {
    return this.el.nativeElement.nodeName.indexOf("-") != -1 ? this.el.nativeElement.firstChild : this.el.nativeElement;
  }
  get canUpdateBadge() {
    return this.id && !this.disabled;
  }
  constructor() {
    super();
  }
  ngOnChanges({
    value,
    size,
    severity,
    disabled,
    badgeStyle,
    badgeStyleClass
  }) {
    super.ngOnChanges({
      value,
      size,
      severity,
      disabled
    });
    if (disabled) {
      this.toggleDisableState();
    }
    if (!this.canUpdateBadge) {
      return;
    }
    if (severity) {
      this.setSeverity(severity.previousValue);
    }
    if (size) {
      this.setSizeClasses();
    }
    if (value) {
      this.setValue();
    }
    if (badgeStyle || badgeStyleClass) {
      this.applyStyles();
    }
  }
  ngAfterViewInit() {
    this.id = uuid("pn_id_") + "_badge";
    this.renderBadgeContent();
  }
  setValue(element) {
    const badge = element ?? this.document.getElementById(this.id);
    if (!badge) {
      return;
    }
    if (this.value != null) {
      if (hasClass(badge, "p-badge-dot")) {
        removeClass(badge, "p-badge-dot");
      }
      if (this.value && String(this.value).length === 1) {
        addClass(badge, "p-badge-circle");
      } else {
        removeClass(badge, "p-badge-circle");
      }
    } else {
      if (!hasClass(badge, "p-badge-dot")) {
        addClass(badge, "p-badge-dot");
      }
      removeClass(badge, "p-badge-circle");
    }
    badge.innerHTML = "";
    const badgeValue = this.value != null ? String(this.value) : "";
    this.renderer.appendChild(badge, this.document.createTextNode(badgeValue));
  }
  setSizeClasses(element) {
    const badge = element ?? this.document.getElementById(this.id);
    if (!badge) {
      return;
    }
    if (this.badgeSize) {
      if (this.badgeSize === "large") {
        addClass(badge, "p-badge-lg");
        removeClass(badge, "p-badge-xl");
      }
      if (this.badgeSize === "xlarge") {
        addClass(badge, "p-badge-xl");
        removeClass(badge, "p-badge-lg");
      }
    } else if (this.size && !this.badgeSize) {
      if (this.size === "large") {
        addClass(badge, "p-badge-lg");
        removeClass(badge, "p-badge-xl");
      }
      if (this.size === "xlarge") {
        addClass(badge, "p-badge-xl");
        removeClass(badge, "p-badge-lg");
      }
    } else {
      removeClass(badge, "p-badge-lg");
      removeClass(badge, "p-badge-xl");
    }
  }
  renderBadgeContent() {
    if (this.disabled) {
      return null;
    }
    const el = this.activeElement;
    const badge = this.document.createElement("span");
    badge.id = this.id;
    badge.className = "p-badge p-component";
    this.setSeverity(null, badge);
    this.setSizeClasses(badge);
    this.setValue(badge);
    addClass(el, "p-overlay-badge");
    this.renderer.appendChild(el, badge);
    this.badgeEl = badge;
    this.applyStyles();
  }
  applyStyles() {
    if (this.badgeEl && this.badgeStyle && typeof this.badgeStyle === "object") {
      for (const [key, value] of Object.entries(this.badgeStyle)) {
        this.renderer.setStyle(this.badgeEl, key, value);
      }
    }
    if (this.badgeEl && this.badgeStyleClass) {
      this.badgeEl.classList.add(...this.badgeStyleClass.split(" "));
    }
  }
  setSeverity(oldSeverity, element) {
    const badge = element ?? this.document.getElementById(this.id);
    if (!badge) {
      return;
    }
    if (this.severity) {
      addClass(badge, `p-badge-${this.severity}`);
    }
    if (oldSeverity) {
      removeClass(badge, `p-badge-${oldSeverity}`);
    }
  }
  toggleDisableState() {
    if (!this.id) {
      return;
    }
    if (this.disabled) {
      const badge = this.activeElement?.querySelector(`#${this.id}`);
      if (badge) {
        this.renderer.removeChild(this.activeElement, badge);
      }
    } else {
      this.renderBadgeContent();
    }
  }
  static \u0275fac = function BadgeDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BadgeDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _BadgeDirective,
    selectors: [["", "pBadge", ""]],
    inputs: {
      disabled: [0, "badgeDisabled", "disabled"],
      badgeSize: "badgeSize",
      size: "size",
      severity: "severity",
      value: "value",
      badgeStyle: "badgeStyle",
      badgeStyleClass: "badgeStyleClass"
    },
    features: [\u0275\u0275ProvidersFeature([BadgeStyle]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BadgeDirective, [{
    type: Directive,
    args: [{
      selector: "[pBadge]",
      providers: [BadgeStyle],
      standalone: true
    }]
  }], () => [], {
    disabled: [{
      type: Input,
      args: ["badgeDisabled"]
    }],
    badgeSize: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    severity: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    badgeStyle: [{
      type: Input
    }],
    badgeStyleClass: [{
      type: Input
    }]
  });
})();
var Badge = class _Badge extends BaseComponent {
  /**
   * Class of the element.
   * @group Props
   */
  styleClass = input();
  /**
   * Inline style of the element.
   * @group Props
   */
  style = input();
  /**
   * Size of the badge, valid options are "large" and "xlarge".
   * @group Props
   */
  badgeSize = input();
  /**
   * Size of the badge, valid options are "large" and "xlarge".
   * @group Props
   */
  size = input();
  /**
   * Severity type of the badge.
   * @group Props
   */
  severity = input();
  /**
   * Value to display inside the badge.
   * @group Props
   */
  value = input();
  /**
   * When specified, disables the component.
   * @group Props
   */
  badgeDisabled = input(false, {
    transform: booleanAttribute
  });
  _componentStyle = inject(BadgeStyle);
  /**
   * Computes the container class for the badge element based on its properties.
   * @returns An object representing the CSS classes to be applied to the badge container.
   */
  containerClass = computed(() => {
    let classes11 = "p-badge p-component";
    if (isNotEmpty(this.value()) && String(this.value()).length === 1) {
      classes11 += " p-badge-circle";
    }
    if (this.badgeSize() === "large") {
      classes11 += " p-badge-lg";
    } else if (this.badgeSize() === "xlarge") {
      classes11 += " p-badge-xl";
    } else if (this.badgeSize() === "small") {
      classes11 += " p-badge-sm";
    }
    if (isEmpty(this.value())) {
      classes11 += " p-badge-dot";
    }
    if (this.styleClass()) {
      classes11 += ` ${this.styleClass()}`;
    }
    if (this.severity()) {
      classes11 += ` p-badge-${this.severity()}`;
    }
    return classes11;
  });
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Badge_BaseFactory;
    return function Badge_Factory(__ngFactoryType__) {
      return (\u0275Badge_BaseFactory || (\u0275Badge_BaseFactory = \u0275\u0275getInheritedFactory(_Badge)))(__ngFactoryType__ || _Badge);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Badge,
    selectors: [["p-badge"]],
    hostVars: 6,
    hostBindings: function Badge_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275styleMap(ctx.style());
        \u0275\u0275classMap(ctx.containerClass());
        \u0275\u0275styleProp("display", ctx.badgeDisabled() && "none");
      }
    },
    inputs: {
      styleClass: [1, "styleClass"],
      style: [1, "style"],
      badgeSize: [1, "badgeSize"],
      size: [1, "size"],
      severity: [1, "severity"],
      value: [1, "value"],
      badgeDisabled: [1, "badgeDisabled"]
    },
    features: [\u0275\u0275ProvidersFeature([BadgeStyle]), \u0275\u0275InheritDefinitionFeature],
    decls: 1,
    vars: 1,
    template: function Badge_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275text(0);
      }
      if (rf & 2) {
        \u0275\u0275textInterpolate(ctx.value());
      }
    },
    dependencies: [CommonModule, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Badge, [{
    type: Component,
    args: [{
      selector: "p-badge",
      template: `{{ value() }}`,
      standalone: true,
      imports: [CommonModule, SharedModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [BadgeStyle],
      host: {
        "[class]": "containerClass()",
        "[style.display]": 'badgeDisabled() && "none"',
        "[style]": "style()"
      }
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Badge, {
    className: "Badge",
    filePath: "badge.ts",
    lineNumber: 255
  });
})();
var BadgeModule = class _BadgeModule {
  static \u0275fac = function BadgeModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BadgeModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _BadgeModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Badge, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BadgeModule, [{
    type: NgModule,
    args: [{
      imports: [Badge, BadgeDirective, SharedModule],
      exports: [Badge, BadgeDirective, SharedModule]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-baseicon.mjs
var css2 = `
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`;
var BaseIconStyle = class _BaseIconStyle extends BaseStyle {
  name = "baseicon";
  inlineStyles = css2;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BaseIconStyle_BaseFactory;
    return function BaseIconStyle_Factory(__ngFactoryType__) {
      return (\u0275BaseIconStyle_BaseFactory || (\u0275BaseIconStyle_BaseFactory = \u0275\u0275getInheritedFactory(_BaseIconStyle)))(__ngFactoryType__ || _BaseIconStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _BaseIconStyle,
    factory: _BaseIconStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseIconStyle, [{
    type: Injectable
  }], null, null);
})();
var BaseIconClasses;
(function(BaseIconClasses2) {
  BaseIconClasses2["root"] = "p-icon";
})(BaseIconClasses || (BaseIconClasses = {}));
var _c02 = ["*"];
var BaseIcon = class _BaseIcon extends BaseComponent {
  label;
  spin = false;
  styleClass;
  role;
  ariaLabel;
  ariaHidden;
  ngOnInit() {
    super.ngOnInit();
    this.getAttributes();
  }
  getAttributes() {
    const isLabelEmpty = isEmpty(this.label);
    this.role = !isLabelEmpty ? "img" : void 0;
    this.ariaLabel = !isLabelEmpty ? this.label : void 0;
    this.ariaHidden = isLabelEmpty;
  }
  getClassNames() {
    return `p-icon ${this.styleClass ? this.styleClass + " " : ""}${this.spin ? "p-icon-spin" : ""}`;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BaseIcon_BaseFactory;
    return function BaseIcon_Factory(__ngFactoryType__) {
      return (\u0275BaseIcon_BaseFactory || (\u0275BaseIcon_BaseFactory = \u0275\u0275getInheritedFactory(_BaseIcon)))(__ngFactoryType__ || _BaseIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _BaseIcon,
    selectors: [["ng-component"]],
    hostAttrs: [1, "p-component", "p-iconwrapper"],
    inputs: {
      label: "label",
      spin: [2, "spin", "spin", booleanAttribute],
      styleClass: "styleClass"
    },
    features: [\u0275\u0275ProvidersFeature([BaseIconStyle]), \u0275\u0275InputTransformsFeature, \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function BaseIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseIcon, [{
    type: Component,
    args: [{
      template: ` <ng-content></ng-content> `,
      standalone: true,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [BaseIconStyle],
      host: {
        class: "p-component p-iconwrapper"
      }
    }]
  }], null, {
    label: [{
      type: Input
    }],
    spin: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    styleClass: [{
      type: Input
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BaseIcon, {
    className: "BaseIcon",
    filePath: "baseicon.ts",
    lineNumber: 16
  });
})();

// node_modules/primeng/fesm2022/primeng-icons-check.mjs
var CheckIcon = class _CheckIcon extends BaseIcon {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275CheckIcon_BaseFactory;
    return function CheckIcon_Factory(__ngFactoryType__) {
      return (\u0275CheckIcon_BaseFactory || (\u0275CheckIcon_BaseFactory = \u0275\u0275getInheritedFactory(_CheckIcon)))(__ngFactoryType__ || _CheckIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CheckIcon,
    selectors: [["CheckIcon"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z", "fill", "currentColor"]],
    template: function CheckIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(0, "svg", 0);
        \u0275\u0275element(1, "path", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.getClassNames());
        \u0275\u0275attribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckIcon, [{
    type: Component,
    args: [{
      selector: "CheckIcon",
      standalone: true,
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                d="M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckIcon, {
    className: "CheckIcon",
    filePath: "check.ts",
    lineNumber: 16
  });
})();

// node_modules/primeng/fesm2022/primeng-icons-eye.mjs
var EyeIcon = class _EyeIcon extends BaseIcon {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275EyeIcon_BaseFactory;
    return function EyeIcon_Factory(__ngFactoryType__) {
      return (\u0275EyeIcon_BaseFactory || (\u0275EyeIcon_BaseFactory = \u0275\u0275getInheritedFactory(_EyeIcon)))(__ngFactoryType__ || _EyeIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _EyeIcon,
    selectors: [["EyeIcon"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M0.0535499 7.25213C0.208567 7.59162 2.40413 12.4 7 12.4C11.5959 12.4 13.7914 7.59162 13.9465 7.25213C13.9487 7.2471 13.9506 7.24304 13.952 7.24001C13.9837 7.16396 14 7.08239 14 7.00001C14 6.91762 13.9837 6.83605 13.952 6.76001C13.9506 6.75697 13.9487 6.75292 13.9465 6.74788C13.7914 6.4084 11.5959 1.60001 7 1.60001C2.40413 1.60001 0.208567 6.40839 0.0535499 6.74788C0.0512519 6.75292 0.0494023 6.75697 0.048 6.76001C0.0163137 6.83605 0 6.91762 0 7.00001C0 7.08239 0.0163137 7.16396 0.048 7.24001C0.0494023 7.24304 0.0512519 7.2471 0.0535499 7.25213ZM7 11.2C3.664 11.2 1.736 7.92001 1.264 7.00001C1.736 6.08001 3.664 2.80001 7 2.80001C10.336 2.80001 12.264 6.08001 12.736 7.00001C12.264 7.92001 10.336 11.2 7 11.2ZM5.55551 9.16182C5.98308 9.44751 6.48576 9.6 7 9.6C7.68891 9.59789 8.349 9.32328 8.83614 8.83614C9.32328 8.349 9.59789 7.68891 9.59999 7C9.59999 6.48576 9.44751 5.98308 9.16182 5.55551C8.87612 5.12794 8.47006 4.7947 7.99497 4.59791C7.51988 4.40112 6.99711 4.34963 6.49276 4.44995C5.98841 4.55027 5.52513 4.7979 5.16152 5.16152C4.7979 5.52513 4.55027 5.98841 4.44995 6.49276C4.34963 6.99711 4.40112 7.51988 4.59791 7.99497C4.7947 8.47006 5.12794 8.87612 5.55551 9.16182ZM6.2222 5.83594C6.45243 5.6821 6.7231 5.6 7 5.6C7.37065 5.6021 7.72553 5.75027 7.98762 6.01237C8.24972 6.27446 8.39789 6.62934 8.4 7C8.4 7.27689 8.31789 7.54756 8.16405 7.77779C8.01022 8.00802 7.79157 8.18746 7.53575 8.29343C7.27994 8.39939 6.99844 8.42711 6.72687 8.37309C6.4553 8.31908 6.20584 8.18574 6.01005 7.98994C5.81425 7.79415 5.68091 7.54469 5.6269 7.27312C5.57288 7.00155 5.6006 6.72006 5.70656 6.46424C5.81253 6.20842 5.99197 5.98977 6.2222 5.83594Z", "fill", "currentColor"]],
    template: function EyeIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(0, "svg", 0);
        \u0275\u0275element(1, "path", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.getClassNames());
        \u0275\u0275attribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EyeIcon, [{
    type: Component,
    args: [{
      selector: "EyeIcon",
      standalone: true,
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.0535499 7.25213C0.208567 7.59162 2.40413 12.4 7 12.4C11.5959 12.4 13.7914 7.59162 13.9465 7.25213C13.9487 7.2471 13.9506 7.24304 13.952 7.24001C13.9837 7.16396 14 7.08239 14 7.00001C14 6.91762 13.9837 6.83605 13.952 6.76001C13.9506 6.75697 13.9487 6.75292 13.9465 6.74788C13.7914 6.4084 11.5959 1.60001 7 1.60001C2.40413 1.60001 0.208567 6.40839 0.0535499 6.74788C0.0512519 6.75292 0.0494023 6.75697 0.048 6.76001C0.0163137 6.83605 0 6.91762 0 7.00001C0 7.08239 0.0163137 7.16396 0.048 7.24001C0.0494023 7.24304 0.0512519 7.2471 0.0535499 7.25213ZM7 11.2C3.664 11.2 1.736 7.92001 1.264 7.00001C1.736 6.08001 3.664 2.80001 7 2.80001C10.336 2.80001 12.264 6.08001 12.736 7.00001C12.264 7.92001 10.336 11.2 7 11.2ZM5.55551 9.16182C5.98308 9.44751 6.48576 9.6 7 9.6C7.68891 9.59789 8.349 9.32328 8.83614 8.83614C9.32328 8.349 9.59789 7.68891 9.59999 7C9.59999 6.48576 9.44751 5.98308 9.16182 5.55551C8.87612 5.12794 8.47006 4.7947 7.99497 4.59791C7.51988 4.40112 6.99711 4.34963 6.49276 4.44995C5.98841 4.55027 5.52513 4.7979 5.16152 5.16152C4.7979 5.52513 4.55027 5.98841 4.44995 6.49276C4.34963 6.99711 4.40112 7.51988 4.59791 7.99497C4.7947 8.47006 5.12794 8.87612 5.55551 9.16182ZM6.2222 5.83594C6.45243 5.6821 6.7231 5.6 7 5.6C7.37065 5.6021 7.72553 5.75027 7.98762 6.01237C8.24972 6.27446 8.39789 6.62934 8.4 7C8.4 7.27689 8.31789 7.54756 8.16405 7.77779C8.01022 8.00802 7.79157 8.18746 7.53575 8.29343C7.27994 8.39939 6.99844 8.42711 6.72687 8.37309C6.4553 8.31908 6.20584 8.18574 6.01005 7.98994C5.81425 7.79415 5.68091 7.54469 5.6269 7.27312C5.57288 7.00155 5.6006 6.72006 5.70656 6.46424C5.81253 6.20842 5.99197 5.98977 6.2222 5.83594Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EyeIcon, {
    className: "EyeIcon",
    filePath: "eye.ts",
    lineNumber: 18
  });
})();

// node_modules/primeng/fesm2022/primeng-icons-eyeslash.mjs
var EyeSlashIcon = class _EyeSlashIcon extends BaseIcon {
  pathId;
  ngOnInit() {
    this.pathId = "url(#" + uuid() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275EyeSlashIcon_BaseFactory;
    return function EyeSlashIcon_Factory(__ngFactoryType__) {
      return (\u0275EyeSlashIcon_BaseFactory || (\u0275EyeSlashIcon_BaseFactory = \u0275\u0275getInheritedFactory(_EyeSlashIcon)))(__ngFactoryType__ || _EyeSlashIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _EyeSlashIcon,
    selectors: [["EyeSlashIcon"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 6,
    vars: 7,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M13.9414 6.74792C13.9437 6.75295 13.9455 6.757 13.9469 6.76003C13.982 6.8394 14.0001 6.9252 14.0001 7.01195C14.0001 7.0987 13.982 7.1845 13.9469 7.26386C13.6004 8.00059 13.1711 8.69549 12.6674 9.33515C12.6115 9.4071 12.54 9.46538 12.4582 9.50556C12.3765 9.54574 12.2866 9.56678 12.1955 9.56707C12.0834 9.56671 11.9737 9.53496 11.8788 9.47541C11.7838 9.41586 11.7074 9.3309 11.6583 9.23015C11.6092 9.12941 11.5893 9.01691 11.6008 8.90543C11.6124 8.79394 11.6549 8.68793 11.7237 8.5994C12.1065 8.09726 12.4437 7.56199 12.7313 6.99995C12.2595 6.08027 10.3402 2.8014 6.99732 2.8014C6.63723 2.80218 6.27816 2.83969 5.92569 2.91336C5.77666 2.93304 5.62568 2.89606 5.50263 2.80972C5.37958 2.72337 5.29344 2.59398 5.26125 2.44714C5.22907 2.30031 5.2532 2.14674 5.32885 2.01685C5.40451 1.88696 5.52618 1.79021 5.66978 1.74576C6.10574 1.64961 6.55089 1.60134 6.99732 1.60181C11.5916 1.60181 13.7864 6.40856 13.9414 6.74792ZM2.20333 1.61685C2.35871 1.61411 2.5091 1.67179 2.6228 1.77774L12.2195 11.3744C12.3318 11.4869 12.3949 11.6393 12.3949 11.7983C12.3949 11.9572 12.3318 12.1097 12.2195 12.2221C12.107 12.3345 11.9546 12.3976 11.7956 12.3976C11.6367 12.3976 11.4842 12.3345 11.3718 12.2221L10.5081 11.3584C9.46549 12.0426 8.24432 12.4042 6.99729 12.3981C2.403 12.3981 0.208197 7.59135 0.0532336 7.25198C0.0509364 7.24694 0.0490875 7.2429 0.0476856 7.23986C0.0162332 7.16518 3.05176e-05 7.08497 3.05176e-05 7.00394C3.05176e-05 6.92291 0.0162332 6.8427 0.0476856 6.76802C0.631261 5.47831 1.46902 4.31959 2.51084 3.36119L1.77509 2.62545C1.66914 2.51175 1.61146 2.36136 1.61421 2.20597C1.61695 2.05059 1.6799 1.90233 1.78979 1.79244C1.89968 1.68254 2.04794 1.6196 2.20333 1.61685ZM7.45314 8.35147L5.68574 6.57609V6.5361C5.5872 6.78938 5.56498 7.06597 5.62183 7.33173C5.67868 7.59749 5.8121 7.84078 6.00563 8.03158C6.19567 8.21043 6.43052 8.33458 6.68533 8.39089C6.94014 8.44721 7.20543 8.43359 7.45314 8.35147ZM1.26327 6.99994C1.7351 7.91163 3.64645 11.1985 6.99729 11.1985C7.9267 11.2048 8.8408 10.9618 9.64438 10.4947L8.35682 9.20718C7.86027 9.51441 7.27449 9.64491 6.69448 9.57752C6.11446 9.51014 5.57421 9.24881 5.16131 8.83592C4.74842 8.42303 4.4871 7.88277 4.41971 7.30276C4.35232 6.72274 4.48282 6.13697 4.79005 5.64041L3.35855 4.2089C2.4954 5.00336 1.78523 5.94935 1.26327 6.99994Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function EyeSlashIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(0, "svg", 0)(1, "g");
        \u0275\u0275element(2, "path", 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "defs")(4, "clipPath", 2);
        \u0275\u0275element(5, "rect", 3);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.getClassNames());
        \u0275\u0275attribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
        \u0275\u0275advance();
        \u0275\u0275attribute("clip-path", ctx.pathId);
        \u0275\u0275advance(3);
        \u0275\u0275property("id", ctx.pathId);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EyeSlashIcon, [{
    type: Component,
    args: [{
      selector: "EyeSlashIcon",
      standalone: true,
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.9414 6.74792C13.9437 6.75295 13.9455 6.757 13.9469 6.76003C13.982 6.8394 14.0001 6.9252 14.0001 7.01195C14.0001 7.0987 13.982 7.1845 13.9469 7.26386C13.6004 8.00059 13.1711 8.69549 12.6674 9.33515C12.6115 9.4071 12.54 9.46538 12.4582 9.50556C12.3765 9.54574 12.2866 9.56678 12.1955 9.56707C12.0834 9.56671 11.9737 9.53496 11.8788 9.47541C11.7838 9.41586 11.7074 9.3309 11.6583 9.23015C11.6092 9.12941 11.5893 9.01691 11.6008 8.90543C11.6124 8.79394 11.6549 8.68793 11.7237 8.5994C12.1065 8.09726 12.4437 7.56199 12.7313 6.99995C12.2595 6.08027 10.3402 2.8014 6.99732 2.8014C6.63723 2.80218 6.27816 2.83969 5.92569 2.91336C5.77666 2.93304 5.62568 2.89606 5.50263 2.80972C5.37958 2.72337 5.29344 2.59398 5.26125 2.44714C5.22907 2.30031 5.2532 2.14674 5.32885 2.01685C5.40451 1.88696 5.52618 1.79021 5.66978 1.74576C6.10574 1.64961 6.55089 1.60134 6.99732 1.60181C11.5916 1.60181 13.7864 6.40856 13.9414 6.74792ZM2.20333 1.61685C2.35871 1.61411 2.5091 1.67179 2.6228 1.77774L12.2195 11.3744C12.3318 11.4869 12.3949 11.6393 12.3949 11.7983C12.3949 11.9572 12.3318 12.1097 12.2195 12.2221C12.107 12.3345 11.9546 12.3976 11.7956 12.3976C11.6367 12.3976 11.4842 12.3345 11.3718 12.2221L10.5081 11.3584C9.46549 12.0426 8.24432 12.4042 6.99729 12.3981C2.403 12.3981 0.208197 7.59135 0.0532336 7.25198C0.0509364 7.24694 0.0490875 7.2429 0.0476856 7.23986C0.0162332 7.16518 3.05176e-05 7.08497 3.05176e-05 7.00394C3.05176e-05 6.92291 0.0162332 6.8427 0.0476856 6.76802C0.631261 5.47831 1.46902 4.31959 2.51084 3.36119L1.77509 2.62545C1.66914 2.51175 1.61146 2.36136 1.61421 2.20597C1.61695 2.05059 1.6799 1.90233 1.78979 1.79244C1.89968 1.68254 2.04794 1.6196 2.20333 1.61685ZM7.45314 8.35147L5.68574 6.57609V6.5361C5.5872 6.78938 5.56498 7.06597 5.62183 7.33173C5.67868 7.59749 5.8121 7.84078 6.00563 8.03158C6.19567 8.21043 6.43052 8.33458 6.68533 8.39089C6.94014 8.44721 7.20543 8.43359 7.45314 8.35147ZM1.26327 6.99994C1.7351 7.91163 3.64645 11.1985 6.99729 11.1985C7.9267 11.2048 8.8408 10.9618 9.64438 10.4947L8.35682 9.20718C7.86027 9.51441 7.27449 9.64491 6.69448 9.57752C6.11446 9.51014 5.57421 9.24881 5.16131 8.83592C4.74842 8.42303 4.4871 7.88277 4.41971 7.30276C4.35232 6.72274 4.48282 6.13697 4.79005 5.64041L3.35855 4.2089C2.4954 5.00336 1.78523 5.94935 1.26327 6.99994Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath [id]="pathId">
                    <rect width="14" height="14" fill="white" />
                </clipPath>
            </defs>
        </svg>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EyeSlashIcon, {
    className: "EyeSlashIcon",
    filePath: "eyeslash.ts",
    lineNumber: 26
  });
})();

// node_modules/primeng/fesm2022/primeng-icons-minus.mjs
var MinusIcon = class _MinusIcon extends BaseIcon {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MinusIcon_BaseFactory;
    return function MinusIcon_Factory(__ngFactoryType__) {
      return (\u0275MinusIcon_BaseFactory || (\u0275MinusIcon_BaseFactory = \u0275\u0275getInheritedFactory(_MinusIcon)))(__ngFactoryType__ || _MinusIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MinusIcon,
    selectors: [["MinusIcon"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z", "fill", "currentColor"]],
    template: function MinusIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(0, "svg", 0);
        \u0275\u0275element(1, "path", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.getClassNames());
        \u0275\u0275attribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinusIcon, [{
    type: Component,
    args: [{
      selector: "MinusIcon",
      standalone: true,
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                d="M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MinusIcon, {
    className: "MinusIcon",
    filePath: "minus.ts",
    lineNumber: 16
  });
})();

// node_modules/primeng/fesm2022/primeng-icons-spinner.mjs
var SpinnerIcon = class _SpinnerIcon extends BaseIcon {
  pathId;
  ngOnInit() {
    this.pathId = "url(#" + uuid() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SpinnerIcon_BaseFactory;
    return function SpinnerIcon_Factory(__ngFactoryType__) {
      return (\u0275SpinnerIcon_BaseFactory || (\u0275SpinnerIcon_BaseFactory = \u0275\u0275getInheritedFactory(_SpinnerIcon)))(__ngFactoryType__ || _SpinnerIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _SpinnerIcon,
    selectors: [["SpinnerIcon"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 6,
    vars: 7,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function SpinnerIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(0, "svg", 0)(1, "g");
        \u0275\u0275element(2, "path", 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "defs")(4, "clipPath", 2);
        \u0275\u0275element(5, "rect", 3);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.getClassNames());
        \u0275\u0275attribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
        \u0275\u0275advance();
        \u0275\u0275attribute("clip-path", ctx.pathId);
        \u0275\u0275advance(3);
        \u0275\u0275property("id", ctx.pathId);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpinnerIcon, [{
    type: Component,
    args: [{
      selector: "SpinnerIcon",
      standalone: true,
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath [id]="pathId">
                    <rect width="14" height="14" fill="white" />
                </clipPath>
            </defs>
        </svg>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SpinnerIcon, {
    className: "SpinnerIcon",
    filePath: "spinner.ts",
    lineNumber: 24
  });
})();

// node_modules/primeng/fesm2022/primeng-icons-times.mjs
var TimesIcon = class _TimesIcon extends BaseIcon {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TimesIcon_BaseFactory;
    return function TimesIcon_Factory(__ngFactoryType__) {
      return (\u0275TimesIcon_BaseFactory || (\u0275TimesIcon_BaseFactory = \u0275\u0275getInheritedFactory(_TimesIcon)))(__ngFactoryType__ || _TimesIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _TimesIcon,
    selectors: [["TimesIcon"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z", "fill", "currentColor"]],
    template: function TimesIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(0, "svg", 0);
        \u0275\u0275element(1, "path", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.getClassNames());
        \u0275\u0275attribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimesIcon, [{
    type: Component,
    args: [{
      selector: "TimesIcon",
      standalone: true,
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                d="M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TimesIcon, {
    className: "TimesIcon",
    filePath: "times.ts",
    lineNumber: 16
  });
})();

// node_modules/primeng/fesm2022/primeng-button.mjs
var theme4 = ({
  dt: dt2
}) => `
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${dt2("button.primary.color")};
    background: ${dt2("button.primary.background")};
    border: 1px solid ${dt2("button.primary.border.color")};
    padding-block: ${dt2("button.padding.y")};
    padding-inline: ${dt2("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${dt2("button.transition.duration")}, color ${dt2("button.transition.duration")}, border-color ${dt2("button.transition.duration")},
            outline-color ${dt2("button.transition.duration")}, box-shadow ${dt2("button.transition.duration")};
    border-radius: ${dt2("button.border.radius")};
    outline-color: transparent;
    gap: ${dt2("button.gap")};
}

.p-button-icon,
.p-button-icon:before,
.p-button-icon:after {
    line-height: inherit;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: ${dt2("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${dt2("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${dt2("button.sm.font.size")};
    padding-block: ${dt2("button.sm.padding.y")};
    padding-inline: ${dt2("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${dt2("button.sm.font.size")};
}

.p-button-lg {
    font-size: ${dt2("button.lg.font.size")};
    padding-block: ${dt2("button.lg.padding.y")};
    padding-inline: ${dt2("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${dt2("button.lg.font.size")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${dt2("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${dt2("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${dt2("button.primary.hover.background")};
    border: 1px solid ${dt2("button.primary.hover.border.color")};
    color: ${dt2("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${dt2("button.primary.active.background")};
    border: 1px solid ${dt2("button.primary.active.border.color")};
    color: ${dt2("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${dt2("button.primary.focus.ring.shadow")};
    outline: ${dt2("button.focus.ring.width")} ${dt2("button.focus.ring.style")} ${dt2("button.primary.focus.ring.color")};
    outline-offset: ${dt2("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${dt2("button.badge.size")};
    height: ${dt2("button.badge.size")};
    line-height: ${dt2("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${dt2("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${dt2("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${dt2("button.secondary.background")};
    border: 1px solid ${dt2("button.secondary.border.color")};
    color: ${dt2("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${dt2("button.secondary.hover.background")};
    border: 1px solid ${dt2("button.secondary.hover.border.color")};
    color: ${dt2("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${dt2("button.secondary.active.background")};
    border: 1px solid ${dt2("button.secondary.active.border.color")};
    color: ${dt2("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${dt2("button.secondary.focus.ring.color")};
    box-shadow: ${dt2("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${dt2("button.success.background")};
    border: 1px solid ${dt2("button.success.border.color")};
    color: ${dt2("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${dt2("button.success.hover.background")};
    border: 1px solid ${dt2("button.success.hover.border.color")};
    color: ${dt2("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${dt2("button.success.active.background")};
    border: 1px solid ${dt2("button.success.active.border.color")};
    color: ${dt2("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${dt2("button.success.focus.ring.color")};
    box-shadow: ${dt2("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${dt2("button.info.background")};
    border: 1px solid ${dt2("button.info.border.color")};
    color: ${dt2("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${dt2("button.info.hover.background")};
    border: 1px solid ${dt2("button.info.hover.border.color")};
    color: ${dt2("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${dt2("button.info.active.background")};
    border: 1px solid ${dt2("button.info.active.border.color")};
    color: ${dt2("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${dt2("button.info.focus.ring.color")};
    box-shadow: ${dt2("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${dt2("button.warn.background")};
    border: 1px solid ${dt2("button.warn.border.color")};
    color: ${dt2("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${dt2("button.warn.hover.background")};
    border: 1px solid ${dt2("button.warn.hover.border.color")};
    color: ${dt2("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${dt2("button.warn.active.background")};
    border: 1px solid ${dt2("button.warn.active.border.color")};
    color: ${dt2("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${dt2("button.warn.focus.ring.color")};
    box-shadow: ${dt2("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${dt2("button.help.background")};
    border: 1px solid ${dt2("button.help.border.color")};
    color: ${dt2("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${dt2("button.help.hover.background")};
    border: 1px solid ${dt2("button.help.hover.border.color")};
    color: ${dt2("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${dt2("button.help.active.background")};
    border: 1px solid ${dt2("button.help.active.border.color")};
    color: ${dt2("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${dt2("button.help.focus.ring.color")};
    box-shadow: ${dt2("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${dt2("button.danger.background")};
    border: 1px solid ${dt2("button.danger.border.color")};
    color: ${dt2("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${dt2("button.danger.hover.background")};
    border: 1px solid ${dt2("button.danger.hover.border.color")};
    color: ${dt2("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${dt2("button.danger.active.background")};
    border: 1px solid ${dt2("button.danger.active.border.color")};
    color: ${dt2("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${dt2("button.danger.focus.ring.color")};
    box-shadow: ${dt2("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${dt2("button.contrast.background")};
    border: 1px solid ${dt2("button.contrast.border.color")};
    color: ${dt2("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${dt2("button.contrast.hover.background")};
    border: 1px solid ${dt2("button.contrast.hover.border.color")};
    color: ${dt2("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${dt2("button.contrast.active.background")};
    border: 1px solid ${dt2("button.contrast.active.border.color")};
    color: ${dt2("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${dt2("button.contrast.focus.ring.color")};
    box-shadow: ${dt2("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${dt2("button.outlined.primary.border.color")};
    color: ${dt2("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${dt2("button.outlined.primary.hover.background")};
    border-color: ${dt2("button.outlined.primary.border.color")};
    color: ${dt2("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${dt2("button.outlined.primary.active.background")};
    border-color: ${dt2("button.outlined.primary.border.color")};
    color: ${dt2("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${dt2("button.outlined.secondary.border.color")};
    color: ${dt2("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${dt2("button.outlined.secondary.hover.background")};
    border-color: ${dt2("button.outlined.secondary.border.color")};
    color: ${dt2("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${dt2("button.outlined.secondary.active.background")};
    border-color: ${dt2("button.outlined.secondary.border.color")};
    color: ${dt2("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${dt2("button.outlined.success.border.color")};
    color: ${dt2("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${dt2("button.outlined.success.hover.background")};
    border-color: ${dt2("button.outlined.success.border.color")};
    color: ${dt2("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${dt2("button.outlined.success.active.background")};
    border-color: ${dt2("button.outlined.success.border.color")};
    color: ${dt2("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${dt2("button.outlined.info.border.color")};
    color: ${dt2("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${dt2("button.outlined.info.hover.background")};
    border-color: ${dt2("button.outlined.info.border.color")};
    color: ${dt2("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${dt2("button.outlined.info.active.background")};
    border-color: ${dt2("button.outlined.info.border.color")};
    color: ${dt2("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${dt2("button.outlined.warn.border.color")};
    color: ${dt2("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${dt2("button.outlined.warn.hover.background")};
    border-color: ${dt2("button.outlined.warn.border.color")};
    color: ${dt2("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${dt2("button.outlined.warn.active.background")};
    border-color: ${dt2("button.outlined.warn.border.color")};
    color: ${dt2("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${dt2("button.outlined.help.border.color")};
    color: ${dt2("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${dt2("button.outlined.help.hover.background")};
    border-color: ${dt2("button.outlined.help.border.color")};
    color: ${dt2("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${dt2("button.outlined.help.active.background")};
    border-color: ${dt2("button.outlined.help.border.color")};
    color: ${dt2("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${dt2("button.outlined.danger.border.color")};
    color: ${dt2("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${dt2("button.outlined.danger.hover.background")};
    border-color: ${dt2("button.outlined.danger.border.color")};
    color: ${dt2("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${dt2("button.outlined.danger.active.background")};
    border-color: ${dt2("button.outlined.danger.border.color")};
    color: ${dt2("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${dt2("button.outlined.contrast.border.color")};
    color: ${dt2("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${dt2("button.outlined.contrast.hover.background")};
    border-color: ${dt2("button.outlined.contrast.border.color")};
    color: ${dt2("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${dt2("button.outlined.contrast.active.background")};
    border-color: ${dt2("button.outlined.contrast.border.color")};
    color: ${dt2("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${dt2("button.outlined.plain.border.color")};
    color: ${dt2("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${dt2("button.outlined.plain.hover.background")};
    border-color: ${dt2("button.outlined.plain.border.color")};
    color: ${dt2("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${dt2("button.outlined.plain.active.background")};
    border-color: ${dt2("button.outlined.plain.border.color")};
    color: ${dt2("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${dt2("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${dt2("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${dt2("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${dt2("button.text.primary.active.background")};
    border-color: transparent;
    color: ${dt2("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${dt2("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${dt2("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${dt2("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${dt2("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${dt2("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${dt2("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${dt2("button.text.success.hover.background")};
    border-color: transparent;
    color: ${dt2("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${dt2("button.text.success.active.background")};
    border-color: transparent;
    color: ${dt2("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${dt2("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${dt2("button.text.info.hover.background")};
    border-color: transparent;
    color: ${dt2("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${dt2("button.text.info.active.background")};
    border-color: transparent;
    color: ${dt2("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${dt2("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${dt2("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${dt2("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${dt2("button.text.warn.active.background")};
    border-color: transparent;
    color: ${dt2("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${dt2("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${dt2("button.text.help.hover.background")};
    border-color: transparent;
    color: ${dt2("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${dt2("button.text.help.active.background")};
    border-color: transparent;
    color: ${dt2("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${dt2("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${dt2("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${dt2("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${dt2("button.text.danger.active.background")};
    border-color: transparent;
    color: ${dt2("button.text.danger.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${dt2("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${dt2("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${dt2("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${dt2("button.text.plain.active.background")};
    border-color: transparent;
    color: ${dt2("button.text.plain.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${dt2("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${dt2("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${dt2("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${dt2("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${dt2("button.text.contrast.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${dt2("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${dt2("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${dt2("button.link.active.color")};
}

/* For PrimeNG */
.p-button-icon-right {
    order: 1;
}

p-button[iconpos='right'] spinnericon {
    order: 1;
}
`;
var classes3 = {
  root: ({
    instance,
    props
  }) => ["p-button p-component", {
    "p-button-icon-only": instance.hasIcon && !props.label && !props.badge,
    "p-button-vertical": (props.iconPos === "top" || props.iconPos === "bottom") && props.label,
    "p-button-loading": props.loading,
    "p-button-link": props.link,
    [`p-button-${props.severity}`]: props.severity,
    "p-button-raised": props.raised,
    "p-button-rounded": props.rounded,
    "p-button-text": props.text,
    "p-button-outlined": props.outlined,
    "p-button-sm": props.size === "small",
    "p-button-lg": props.size === "large",
    "p-button-plain": props.plain,
    "p-button-fluid": props.fluid
  }],
  loadingIcon: "p-button-loading-icon",
  icon: ({
    props
  }) => ["p-button-icon", {
    [`p-button-icon-${props.iconPos}`]: props.label
  }],
  label: "p-button-label"
};
var ButtonStyle = class _ButtonStyle extends BaseStyle {
  name = "button";
  theme = theme4;
  classes = classes3;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ButtonStyle_BaseFactory;
    return function ButtonStyle_Factory(__ngFactoryType__) {
      return (\u0275ButtonStyle_BaseFactory || (\u0275ButtonStyle_BaseFactory = \u0275\u0275getInheritedFactory(_ButtonStyle)))(__ngFactoryType__ || _ButtonStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ButtonStyle,
    factory: _ButtonStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonStyle, [{
    type: Injectable
  }], null, null);
})();
var ButtonClasses;
(function(ButtonClasses2) {
  ButtonClasses2["root"] = "p-button";
  ButtonClasses2["loadingIcon"] = "p-button-loading-icon";
  ButtonClasses2["icon"] = "p-button-icon";
  ButtonClasses2["label"] = "p-button-label";
})(ButtonClasses || (ButtonClasses = {}));
var _c03 = ["content"];
var _c1 = ["loading"];
var _c2 = ["icon"];
var _c3 = ["*"];
var _c4 = (a0) => ({
  class: a0
});
function Button_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Button_ng_container_3_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r0.iconClass());
    \u0275\u0275attribute("aria-hidden", true)("data-pc-section", "loadingicon");
  }
}
function Button_ng_container_3_ng_container_1_SpinnerIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "SpinnerIcon", 9);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("styleClass", ctx_r0.spinnerIconClass())("spin", true);
    \u0275\u0275attribute("aria-hidden", true)("data-pc-section", "loadingicon");
  }
}
function Button_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Button_ng_container_3_ng_container_1_span_1_Template, 1, 3, "span", 6)(2, Button_ng_container_3_ng_container_1_SpinnerIcon_2_Template, 1, 4, "SpinnerIcon", 7);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.loadingIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loadingIcon);
  }
}
function Button_ng_container_3_2_ng_template_0_Template(rf, ctx) {
}
function Button_ng_container_3_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Button_ng_container_3_2_ng_template_0_Template, 0, 0, "ng-template", 10);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", ctx_r0.loadingIconTemplate || ctx_r0._loadingIconTemplate);
  }
}
function Button_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Button_ng_container_3_ng_container_1_Template, 3, 2, "ng-container", 2)(2, Button_ng_container_3_2_Template, 1, 1, null, 5);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loadingIconTemplate && !ctx_r0._loadingIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.loadingIconTemplate || ctx_r0._loadingIconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(3, _c4, ctx_r0.iconClass()));
  }
}
function Button_ng_container_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.icon);
    \u0275\u0275property("ngClass", ctx_r0.iconClass());
    \u0275\u0275attribute("data-pc-section", "icon");
  }
}
function Button_ng_container_4_2_ng_template_0_Template(rf, ctx) {
}
function Button_ng_container_4_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Button_ng_container_4_2_ng_template_0_Template, 0, 0, "ng-template", 10);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", !ctx_r0.icon && (ctx_r0.iconTemplate || ctx_r0._iconTemplate));
  }
}
function Button_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Button_ng_container_4_span_1_Template, 1, 4, "span", 11)(2, Button_ng_container_4_2_Template, 1, 1, null, 5);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.icon && !ctx_r0.iconTemplate && !ctx_r0._iconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.iconTemplate || ctx_r0._iconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(3, _c4, ctx_r0.iconClass()));
  }
}
function Button_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-hidden", ctx_r0.icon && !ctx_r0.label)("data-pc-section", "label");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.label);
  }
}
function Button_p_badge_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-badge", 13);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r0.badge)("severity", ctx_r0.badgeSeverity);
  }
}
var INTERNAL_BUTTON_CLASSES = {
  button: "p-button",
  component: "p-component",
  iconOnly: "p-button-icon-only",
  disabled: "p-disabled",
  loading: "p-button-loading",
  labelOnly: "p-button-loading-label-only"
};
var ButtonLabel = class _ButtonLabel extends BaseComponent {
  _componentStyle = inject(ButtonStyle);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ButtonLabel_BaseFactory;
    return function ButtonLabel_Factory(__ngFactoryType__) {
      return (\u0275ButtonLabel_BaseFactory || (\u0275ButtonLabel_BaseFactory = \u0275\u0275getInheritedFactory(_ButtonLabel)))(__ngFactoryType__ || _ButtonLabel);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _ButtonLabel,
    selectors: [["", "pButtonLabel", ""]],
    hostVars: 2,
    hostBindings: function ButtonLabel_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("p-button-label", true);
      }
    },
    features: [\u0275\u0275ProvidersFeature([ButtonStyle]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonLabel, [{
    type: Directive,
    args: [{
      selector: "[pButtonLabel]",
      providers: [ButtonStyle],
      standalone: true,
      host: {
        "[class.p-button-label]": "true"
      }
    }]
  }], null, null);
})();
var ButtonIcon = class _ButtonIcon extends BaseComponent {
  _componentStyle = inject(ButtonStyle);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ButtonIcon_BaseFactory;
    return function ButtonIcon_Factory(__ngFactoryType__) {
      return (\u0275ButtonIcon_BaseFactory || (\u0275ButtonIcon_BaseFactory = \u0275\u0275getInheritedFactory(_ButtonIcon)))(__ngFactoryType__ || _ButtonIcon);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _ButtonIcon,
    selectors: [["", "pButtonIcon", ""]],
    hostVars: 2,
    hostBindings: function ButtonIcon_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("p-button-icon", true);
      }
    },
    features: [\u0275\u0275ProvidersFeature([ButtonStyle]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonIcon, [{
    type: Directive,
    args: [{
      selector: "[pButtonIcon]",
      providers: [ButtonStyle],
      standalone: true,
      host: {
        "[class.p-button-icon]": "true"
      }
    }]
  }], null, null);
})();
var ButtonDirective = class _ButtonDirective extends BaseComponent {
  /**
   * Position of the icon.
   * @deprecated utilize pButtonIcon and pButtonLabel directives.
   * @group Props
   */
  iconPos = "left";
  /**
   * Uses to pass attributes to the loading icon's DOM element.
   * @deprecated utilize pButonIcon instead.
   * @group Props
   */
  loadingIcon;
  set label(val) {
    this._label = val;
    if (this.initialized) {
      this.updateLabel();
      this.updateIcon();
      this.setStyleClass();
    }
  }
  set icon(val) {
    this._icon = val;
    if (this.initialized) {
      this.updateIcon();
      this.setStyleClass();
    }
  }
  /**
   * Whether the button is in loading state.
   * @group Props
   */
  get loading() {
    return this._loading;
  }
  set loading(val) {
    this._loading = val;
    if (this.initialized) {
      this.updateIcon();
      this.setStyleClass();
    }
  }
  _buttonProps;
  iconSignal = contentChild(ButtonIcon);
  labelSignal = contentChild(ButtonLabel);
  isIconOnly = computed(() => !!(!this.labelSignal() && this.iconSignal()));
  set buttonProps(val) {
    this._buttonProps = val;
    if (val && typeof val === "object") {
      Object.entries(val).forEach(([k, v]) => this[`_${k}`] !== v && (this[`_${k}`] = v));
    }
  }
  /**
   * Defines the style of the button.
   * @group Props
   */
  severity;
  /**
   * Add a shadow to indicate elevation.
   * @group Props
   */
  raised = false;
  /**
   * Add a circular border radius to the button.
   * @group Props
   */
  rounded = false;
  /**
   * Add a textual class to the button without a background initially.
   * @group Props
   */
  text = false;
  /**
   * Add a border class without a background initially.
   * @group Props
   */
  outlined = false;
  /**
   * Defines the size of the button.
   * @group Props
   */
  size = null;
  /**
   * Add a plain textual class to the button without a background initially.
   * @deprecated use variant property instead.
   * @group Props
   */
  plain = false;
  /**
   * Spans 100% width of the container when enabled.
   * @group Props
   */
  fluid;
  _label;
  _icon;
  _loading = false;
  initialized;
  get htmlElement() {
    return this.el.nativeElement;
  }
  _internalClasses = Object.values(INTERNAL_BUTTON_CLASSES);
  isTextButton = computed(() => !!(!this.iconSignal() && this.labelSignal() && this.text));
  /**
   * Text of the button.
   * @deprecated use pButtonLabel directive instead.
   * @group Props
   */
  get label() {
    return this._label;
  }
  /**
   * Name of the icon.
   * @deprecated use pButtonIcon directive instead
   * @group Props
   */
  get icon() {
    return this._icon;
  }
  /**
   * Used to pass all properties of the ButtonProps to the Button component.
   * @deprecated assign props directly to the button element.
   * @group Props
   */
  get buttonProps() {
    return this._buttonProps;
  }
  spinnerIcon = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
        <g clip-path="url(#clip0_417_21408)">
            <path
                d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                fill="currentColor"
            />
        </g>
        <defs>
            <clipPath id="clip0_417_21408">
                <rect width="14" height="14" fill="white" />
            </clipPath>
        </defs>
    </svg>`;
  _componentStyle = inject(ButtonStyle);
  ngAfterViewInit() {
    super.ngAfterViewInit();
    addClass(this.htmlElement, this.getStyleClass().join(" "));
    this.createIcon();
    this.createLabel();
    this.initialized = true;
  }
  ngOnChanges(simpleChanges) {
    super.ngOnChanges(simpleChanges);
    const {
      buttonProps
    } = simpleChanges;
    if (buttonProps) {
      const props = buttonProps.currentValue;
      for (const property in props) {
        this[property] = props[property];
      }
    }
  }
  getStyleClass() {
    const styleClass = [INTERNAL_BUTTON_CLASSES.button, INTERNAL_BUTTON_CLASSES.component];
    if (this.icon && !this.label && isEmpty(this.htmlElement.textContent)) {
      styleClass.push(INTERNAL_BUTTON_CLASSES.iconOnly);
    }
    if (this.loading) {
      styleClass.push(INTERNAL_BUTTON_CLASSES.disabled, INTERNAL_BUTTON_CLASSES.loading);
      if (!this.icon && this.label) {
        styleClass.push(INTERNAL_BUTTON_CLASSES.labelOnly);
      }
      if (this.icon && !this.label && !isEmpty(this.htmlElement.textContent)) {
        styleClass.push(INTERNAL_BUTTON_CLASSES.iconOnly);
      }
    }
    if (this.text) {
      styleClass.push("p-button-text");
    }
    if (this.severity) {
      styleClass.push(`p-button-${this.severity}`);
    }
    if (this.plain) {
      styleClass.push("p-button-plain");
    }
    if (this.raised) {
      styleClass.push("p-button-raised");
    }
    if (this.size) {
      styleClass.push(`p-button-${this.size}`);
    }
    if (this.outlined) {
      styleClass.push("p-button-outlined");
    }
    if (this.rounded) {
      styleClass.push("p-button-rounded");
    }
    if (this.size === "small") {
      styleClass.push("p-button-sm");
    }
    if (this.size === "large") {
      styleClass.push("p-button-lg");
    }
    if (this.hasFluid) {
      styleClass.push("p-button-fluid");
    }
    return styleClass;
  }
  get hasFluid() {
    const nativeElement = this.el.nativeElement;
    const fluidComponent = nativeElement.closest("p-fluid");
    return isEmpty(this.fluid) ? !!fluidComponent : this.fluid;
  }
  setStyleClass() {
    const styleClass = this.getStyleClass();
    this.htmlElement.classList.remove(...this._internalClasses);
    this.htmlElement.classList.add(...styleClass);
  }
  createLabel() {
    const created = findSingle(this.htmlElement, ".p-button-label");
    if (!created && this.label) {
      let labelElement = this.document.createElement("span");
      if (this.icon && !this.label) {
        labelElement.setAttribute("aria-hidden", "true");
      }
      labelElement.className = "p-button-label";
      labelElement.appendChild(this.document.createTextNode(this.label));
      this.htmlElement.appendChild(labelElement);
    }
  }
  createIcon() {
    const created = findSingle(this.htmlElement, ".p-button-icon");
    if (!created && (this.icon || this.loading)) {
      let iconElement = this.document.createElement("span");
      iconElement.className = "p-button-icon";
      iconElement.setAttribute("aria-hidden", "true");
      let iconPosClass = this.label ? "p-button-icon-" + this.iconPos : null;
      if (iconPosClass) {
        addClass(iconElement, iconPosClass);
      }
      let iconClass = this.getIconClass();
      if (iconClass) {
        addClass(iconElement, iconClass);
      }
      if (!this.loadingIcon && this.loading) {
        iconElement.innerHTML = this.spinnerIcon;
      }
      this.htmlElement.insertBefore(iconElement, this.htmlElement.firstChild);
    }
  }
  updateLabel() {
    let labelElement = findSingle(this.htmlElement, ".p-button-label");
    if (!this.label) {
      labelElement && this.htmlElement.removeChild(labelElement);
      return;
    }
    labelElement ? labelElement.textContent = this.label : this.createLabel();
  }
  updateIcon() {
    let iconElement = findSingle(this.htmlElement, ".p-button-icon");
    let labelElement = findSingle(this.htmlElement, ".p-button-label");
    if (this.loading && !this.loadingIcon && iconElement) {
      iconElement.innerHTML = this.spinnerIcon;
    } else if (iconElement?.innerHTML) {
      iconElement.innerHTML = "";
    }
    if (iconElement) {
      if (this.iconPos) {
        iconElement.className = "p-button-icon " + (labelElement ? "p-button-icon-" + this.iconPos : "") + " " + this.getIconClass();
      } else {
        iconElement.className = "p-button-icon " + this.getIconClass();
      }
    } else {
      this.createIcon();
    }
  }
  getIconClass() {
    return this.loading ? "p-button-loading-icon " + (this.loadingIcon ? this.loadingIcon : "p-icon") : this.icon || "p-hidden";
  }
  ngOnDestroy() {
    this.initialized = false;
    super.ngOnDestroy();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ButtonDirective_BaseFactory;
    return function ButtonDirective_Factory(__ngFactoryType__) {
      return (\u0275ButtonDirective_BaseFactory || (\u0275ButtonDirective_BaseFactory = \u0275\u0275getInheritedFactory(_ButtonDirective)))(__ngFactoryType__ || _ButtonDirective);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _ButtonDirective,
    selectors: [["", "pButton", ""]],
    contentQueries: function ButtonDirective_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuerySignal(dirIndex, ctx.iconSignal, ButtonIcon, 5);
        \u0275\u0275contentQuerySignal(dirIndex, ctx.labelSignal, ButtonLabel, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(2);
      }
    },
    hostVars: 4,
    hostBindings: function ButtonDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("p-button-icon-only", ctx.isIconOnly())("p-button-text", ctx.isTextButton());
      }
    },
    inputs: {
      iconPos: "iconPos",
      loadingIcon: "loadingIcon",
      loading: "loading",
      severity: "severity",
      raised: [2, "raised", "raised", booleanAttribute],
      rounded: [2, "rounded", "rounded", booleanAttribute],
      text: [2, "text", "text", booleanAttribute],
      outlined: [2, "outlined", "outlined", booleanAttribute],
      size: "size",
      plain: [2, "plain", "plain", booleanAttribute],
      fluid: [2, "fluid", "fluid", booleanAttribute],
      label: "label",
      icon: "icon",
      buttonProps: "buttonProps"
    },
    features: [\u0275\u0275ProvidersFeature([ButtonStyle]), \u0275\u0275InputTransformsFeature, \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonDirective, [{
    type: Directive,
    args: [{
      selector: "[pButton]",
      standalone: true,
      providers: [ButtonStyle],
      host: {
        "[class.p-button-icon-only]": "isIconOnly()",
        "[class.p-button-text]": "isTextButton()"
      }
    }]
  }], null, {
    iconPos: [{
      type: Input
    }],
    loadingIcon: [{
      type: Input
    }],
    loading: [{
      type: Input
    }],
    severity: [{
      type: Input
    }],
    raised: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    rounded: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    text: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    outlined: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    size: [{
      type: Input
    }],
    plain: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    fluid: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    label: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    buttonProps: [{
      type: Input
    }]
  });
})();
var Button = class _Button extends BaseComponent {
  /**
   * Type of the button.
   * @group Props
   */
  type = "button";
  /**
   * Position of the icon.
   * @group Props
   */
  iconPos = "left";
  /**
   * Name of the icon.
   * @group Props
   */
  icon;
  /**
   * Value of the badge.
   * @group Props
   */
  badge;
  /**
   * Uses to pass attributes to the label's DOM element.
   * @group Props
   */
  label;
  /**
   * When present, it specifies that the component should be disabled.
   * @group Props
   */
  disabled;
  /**
   * Whether the button is in loading state.
   * @group Props
   */
  loading = false;
  /**
   * Icon to display in loading state.
   * @group Props
   */
  loadingIcon;
  /**
   * Add a shadow to indicate elevation.
   * @group Props
   */
  raised = false;
  /**
   * Add a circular border radius to the button.
   * @group Props
   */
  rounded = false;
  /**
   * Add a textual class to the button without a background initially.
   * @group Props
   */
  text = false;
  /**
   * Add a plain textual class to the button without a background initially.
   * @deprecated use variant property instead.
   * @group Props
   */
  plain = false;
  /**
   * Defines the style of the button.
   * @group Props
   */
  severity;
  /**
   * Add a border class without a background initially.
   * @group Props
   */
  outlined = false;
  /**
   * Add a link style to the button.
   * @group Props
   */
  link = false;
  /**
   * Add a tabindex to the button.
   * @group Props
   */
  tabindex;
  /**
   * Defines the size of the button.
   * @group Props
   */
  size;
  /**
   * Specifies the variant of the component.
   * @group Props
   */
  variant;
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Style class of the badge.
   * @group Props
   * @deprecated use badgeSeverity instead.
   */
  badgeClass;
  /**
   * Severity type of the badge.
   * @group Props
   * @defaultValue secondary
   */
  badgeSeverity = "secondary";
  /**
   * Used to define a string that autocomplete attribute the current element.
   * @group Props
   */
  ariaLabel;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Spans 100% width of the container when enabled.
   * @group Props
   */
  fluid;
  /**
   * Callback to execute when button is clicked.
   * This event is intended to be used with the <p-button> component. Using a regular <button> element, use (click).
   * @param {MouseEvent} event - Mouse event.
   * @group Emits
   */
  onClick = new EventEmitter();
  /**
   * Callback to execute when button is focused.
   * This event is intended to be used with the <p-button> component. Using a regular <button> element, use (focus).
   * @param {FocusEvent} event - Focus event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to execute when button loses focus.
   * This event is intended to be used with the <p-button> component. Using a regular <button> element, use (blur).
   * @param {FocusEvent} event - Focus event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  /**
   * Template of the content.
   * @group Templates
   **/
  contentTemplate;
  /**
   * Template of the loading.
   * @group Templates
   **/
  loadingIconTemplate;
  /**
   * Template of the icon.
   * @group Templates
   **/
  iconTemplate;
  _buttonProps;
  /**
   * Used to pass all properties of the ButtonProps to the Button component.
   * @group Props
   */
  get buttonProps() {
    return this._buttonProps;
  }
  set buttonProps(val) {
    this._buttonProps = val;
    if (val && typeof val === "object") {
      Object.entries(val).forEach(([k, v]) => this[`_${k}`] !== v && (this[`_${k}`] = v));
    }
  }
  get hasFluid() {
    const nativeElement = this.el.nativeElement;
    const fluidComponent = nativeElement.closest("p-fluid");
    return isEmpty(this.fluid) ? !!fluidComponent : this.fluid;
  }
  _componentStyle = inject(ButtonStyle);
  templates;
  _contentTemplate;
  _iconTemplate;
  _loadingIconTemplate;
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this.contentTemplate = item.template;
          break;
        case "icon":
          this.iconTemplate = item.template;
          break;
        case "loadingicon":
          this.loadingIconTemplate = item.template;
          break;
        default:
          this.contentTemplate = item.template;
          break;
      }
    });
  }
  ngOnChanges(simpleChanges) {
    super.ngOnChanges(simpleChanges);
    const {
      buttonProps
    } = simpleChanges;
    if (buttonProps) {
      const props = buttonProps.currentValue;
      for (const property in props) {
        this[property] = props[property];
      }
    }
  }
  spinnerIconClass() {
    return Object.entries(this.iconClass()).filter(([, value]) => !!value).reduce((acc, [key]) => acc + ` ${key}`, "p-button-loading-icon");
  }
  iconClass() {
    return {
      [`p-button-loading-icon pi-spin ${this.loadingIcon ?? ""}`]: this.loading,
      "p-button-icon": true,
      "p-button-icon-left": this.iconPos === "left" && this.label,
      "p-button-icon-right": this.iconPos === "right" && this.label,
      "p-button-icon-top": this.iconPos === "top" && this.label,
      "p-button-icon-bottom": this.iconPos === "bottom" && this.label
    };
  }
  get buttonClass() {
    return {
      "p-button p-component": true,
      "p-button-icon-only": (this.icon || this.iconTemplate || this.loadingIcon || this.loadingIconTemplate || this._loadingIconTemplate) && !this.label,
      "p-button-vertical": (this.iconPos === "top" || this.iconPos === "bottom") && this.label,
      "p-button-loading": this.loading,
      "p-button-loading-label-only": this.loading && !this.icon && this.label && !this.loadingIcon && this.iconPos === "left",
      "p-button-link": this.link,
      [`p-button-${this.severity}`]: this.severity,
      "p-button-raised": this.raised,
      "p-button-rounded": this.rounded,
      "p-button-text": this.text || this.variant == "text",
      "p-button-outlined": this.outlined || this.variant == "outlined",
      "p-button-sm": this.size === "small",
      "p-button-lg": this.size === "large",
      "p-button-plain": this.plain,
      "p-button-fluid": this.hasFluid,
      [`${this.styleClass}`]: this.styleClass
    };
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Button_BaseFactory;
    return function Button_Factory(__ngFactoryType__) {
      return (\u0275Button_BaseFactory || (\u0275Button_BaseFactory = \u0275\u0275getInheritedFactory(_Button)))(__ngFactoryType__ || _Button);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Button,
    selectors: [["p-button"]],
    contentQueries: function Button_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c03, 5);
        \u0275\u0275contentQuery(dirIndex, _c1, 5);
        \u0275\u0275contentQuery(dirIndex, _c2, 5);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.loadingIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.iconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    inputs: {
      type: "type",
      iconPos: "iconPos",
      icon: "icon",
      badge: "badge",
      label: "label",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      loading: [2, "loading", "loading", booleanAttribute],
      loadingIcon: "loadingIcon",
      raised: [2, "raised", "raised", booleanAttribute],
      rounded: [2, "rounded", "rounded", booleanAttribute],
      text: [2, "text", "text", booleanAttribute],
      plain: [2, "plain", "plain", booleanAttribute],
      severity: "severity",
      outlined: [2, "outlined", "outlined", booleanAttribute],
      link: [2, "link", "link", booleanAttribute],
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      size: "size",
      variant: "variant",
      style: "style",
      styleClass: "styleClass",
      badgeClass: "badgeClass",
      badgeSeverity: "badgeSeverity",
      ariaLabel: "ariaLabel",
      autofocus: [2, "autofocus", "autofocus", booleanAttribute],
      fluid: [2, "fluid", "fluid", booleanAttribute],
      buttonProps: "buttonProps"
    },
    outputs: {
      onClick: "onClick",
      onFocus: "onFocus",
      onBlur: "onBlur"
    },
    features: [\u0275\u0275ProvidersFeature([ButtonStyle]), \u0275\u0275InputTransformsFeature, \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c3,
    decls: 7,
    vars: 14,
    consts: [["pRipple", "", 3, "click", "focus", "blur", "ngStyle", "disabled", "ngClass", "pAutoFocus"], [4, "ngTemplateOutlet"], [4, "ngIf"], ["class", "p-button-label", 4, "ngIf"], [3, "value", "severity", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngClass", 4, "ngIf"], [3, "styleClass", "spin", 4, "ngIf"], [3, "ngClass"], [3, "styleClass", "spin"], [3, "ngIf"], [3, "class", "ngClass", 4, "ngIf"], [1, "p-button-label"], [3, "value", "severity"]],
    template: function Button_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "button", 0);
        \u0275\u0275listener("click", function Button_Template_button_click_0_listener($event) {
          return ctx.onClick.emit($event);
        })("focus", function Button_Template_button_focus_0_listener($event) {
          return ctx.onFocus.emit($event);
        })("blur", function Button_Template_button_blur_0_listener($event) {
          return ctx.onBlur.emit($event);
        });
        \u0275\u0275projection(1);
        \u0275\u0275template(2, Button_ng_container_2_Template, 1, 0, "ng-container", 1)(3, Button_ng_container_3_Template, 3, 5, "ng-container", 2)(4, Button_ng_container_4_Template, 3, 5, "ng-container", 2)(5, Button_span_5_Template, 2, 3, "span", 3)(6, Button_p_badge_6_Template, 1, 2, "p-badge", 4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("ngStyle", ctx.style)("disabled", ctx.disabled || ctx.loading)("ngClass", ctx.buttonClass)("pAutoFocus", ctx.autofocus);
        \u0275\u0275attribute("type", ctx.type)("aria-label", ctx.ariaLabel)("data-pc-name", "button")("data-pc-section", "root")("tabindex", ctx.tabindex);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngTemplateOutlet", ctx.contentTemplate || ctx._contentTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.contentTemplate && !ctx._contentTemplate && ctx.label);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.contentTemplate && !ctx._contentTemplate && ctx.badge);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, NgStyle, Ripple, AutoFocus, SpinnerIcon, BadgeModule, Badge, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Button, [{
    type: Component,
    args: [{
      selector: "p-button",
      standalone: true,
      imports: [CommonModule, Ripple, AutoFocus, SpinnerIcon, BadgeModule, SharedModule],
      template: `
        <button
            [attr.type]="type"
            [attr.aria-label]="ariaLabel"
            [ngStyle]="style"
            [disabled]="disabled || loading"
            [ngClass]="buttonClass"
            (click)="onClick.emit($event)"
            (focus)="onFocus.emit($event)"
            (blur)="onBlur.emit($event)"
            pRipple
            [attr.data-pc-name]="'button'"
            [attr.data-pc-section]="'root'"
            [attr.tabindex]="tabindex"
            [pAutoFocus]="autofocus"
        >
            <ng-content></ng-content>
            <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate"></ng-container>
            <ng-container *ngIf="loading">
                <ng-container *ngIf="!loadingIconTemplate && !_loadingIconTemplate">
                    <span *ngIf="loadingIcon" [ngClass]="iconClass()" [attr.aria-hidden]="true" [attr.data-pc-section]="'loadingicon'"></span>
                    <SpinnerIcon *ngIf="!loadingIcon" [styleClass]="spinnerIconClass()" [spin]="true" [attr.aria-hidden]="true" [attr.data-pc-section]="'loadingicon'" />
                </ng-container>
                <ng-template [ngIf]="loadingIconTemplate || _loadingIconTemplate" *ngTemplateOutlet="loadingIconTemplate || _loadingIconTemplate; context: { class: iconClass() }"></ng-template>
            </ng-container>
            <ng-container *ngIf="!loading">
                <span *ngIf="icon && !iconTemplate && !_iconTemplate" [class]="icon" [ngClass]="iconClass()" [attr.data-pc-section]="'icon'"></span>
                <ng-template [ngIf]="!icon && (iconTemplate || _iconTemplate)" *ngTemplateOutlet="iconTemplate || _iconTemplate; context: { class: iconClass() }"></ng-template>
            </ng-container>
            <span class="p-button-label" [attr.aria-hidden]="icon && !label" *ngIf="!contentTemplate && !_contentTemplate && label" [attr.data-pc-section]="'label'">{{ label }}</span>
            <p-badge *ngIf="!contentTemplate && !_contentTemplate && badge" [value]="badge" [severity]="badgeSeverity"></p-badge>
        </button>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [ButtonStyle]
    }]
  }], null, {
    type: [{
      type: Input
    }],
    iconPos: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    badge: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    loading: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    loadingIcon: [{
      type: Input
    }],
    raised: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    rounded: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    text: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    plain: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    severity: [{
      type: Input
    }],
    outlined: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    link: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    size: [{
      type: Input
    }],
    variant: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    badgeClass: [{
      type: Input
    }],
    badgeSeverity: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    fluid: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onClick: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    contentTemplate: [{
      type: ContentChild,
      args: ["content"]
    }],
    loadingIconTemplate: [{
      type: ContentChild,
      args: ["loading"]
    }],
    iconTemplate: [{
      type: ContentChild,
      args: ["icon"]
    }],
    buttonProps: [{
      type: Input
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Button, {
    className: "Button",
    filePath: "button.ts",
    lineNumber: 471
  });
})();
var ButtonModule = class _ButtonModule {
  static \u0275fac = function ButtonModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ButtonModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ButtonModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule, Button, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ButtonDirective, Button, SharedModule, ButtonLabel, ButtonIcon],
      exports: [ButtonDirective, Button, ButtonLabel, ButtonIcon, SharedModule]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-inputtext.mjs
var theme5 = ({
  dt: dt2
}) => `
.p-inputtext {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: ${dt2("inputtext.color")};
    background: ${dt2("inputtext.background")};
    padding-block: ${dt2("inputtext.padding.y")};
    padding-inline: ${dt2("inputtext.padding.x")};
    border: 1px solid ${dt2("inputtext.border.color")};
    transition: background ${dt2("inputtext.transition.duration")}, color ${dt2("inputtext.transition.duration")}, border-color ${dt2("inputtext.transition.duration")}, outline-color ${dt2("inputtext.transition.duration")}, box-shadow ${dt2("inputtext.transition.duration")};
    appearance: none;
    border-radius: ${dt2("inputtext.border.radius")};
    outline-color: transparent;
    box-shadow: ${dt2("inputtext.shadow")};
}

.p-inputtext.ng-invalid.ng-dirty {
    border-color: ${dt2("inputtext.invalid.border.color")};
}

.p-inputtext:enabled:hover {
    border-color: ${dt2("inputtext.hover.border.color")};
}

.p-inputtext:enabled:focus {
    border-color: ${dt2("inputtext.focus.border.color")};
    box-shadow: ${dt2("inputtext.focus.ring.shadow")};
    outline: ${dt2("inputtext.focus.ring.width")} ${dt2("inputtext.focus.ring.style")} ${dt2("inputtext.focus.ring.color")};
    outline-offset: ${dt2("inputtext.focus.ring.offset")};
}

.p-inputtext.p-invalid {
    border-color: ${dt2("inputtext.invalid.border.color")};
}

.p-inputtext.p-variant-filled {
    background: ${dt2("inputtext.filled.background")};
}

.p-inputtext.p-variant-filled:enabled:focus {
    background: ${dt2("inputtext.filled.focus.background")};
}

.p-inputtext:disabled {
    opacity: 1;
    background: ${dt2("inputtext.disabled.background")};
    color: ${dt2("inputtext.disabled.color")};
}

.p-inputtext::placeholder {
    color: ${dt2("inputtext.placeholder.color")};
}

.p-inputtext.ng-invalid.ng-dirty::placeholder {
    color: ${dt2("inputtext.invalid.placeholder.color")};
}

.p-inputtext-sm {
    font-size: ${dt2("inputtext.sm.font.size")};
    padding-block: ${dt2("inputtext.sm.padding.y")};
    padding-inline: ${dt2("inputtext.sm.padding.x")};
}

.p-inputtext-lg {
    font-size: ${dt2("inputtext.lg.font.size")};
    padding-block: ${dt2("inputtext.lg.padding.y")};
    padding-inline: ${dt2("inputtext.lg.padding.x")};
}

.p-inputtext-fluid {
    width: 100%;
}
`;
var classes4 = {
  root: ({
    instance,
    props
  }) => ["p-inputtext p-component", {
    "p-filled": instance.filled,
    "p-inputtext-sm": props.size === "small",
    "p-inputtext-lg": props.size === "large",
    "p-invalid": props.invalid,
    "p-variant-filled": props.variant === "filled",
    "p-inputtext-fluid": props.fluid
  }]
};
var InputTextStyle = class _InputTextStyle extends BaseStyle {
  name = "inputtext";
  theme = theme5;
  classes = classes4;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275InputTextStyle_BaseFactory;
    return function InputTextStyle_Factory(__ngFactoryType__) {
      return (\u0275InputTextStyle_BaseFactory || (\u0275InputTextStyle_BaseFactory = \u0275\u0275getInheritedFactory(_InputTextStyle)))(__ngFactoryType__ || _InputTextStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _InputTextStyle,
    factory: _InputTextStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputTextStyle, [{
    type: Injectable
  }], null, null);
})();
var InputTextClasses;
(function(InputTextClasses2) {
  InputTextClasses2["root"] = "p-inputtext";
})(InputTextClasses || (InputTextClasses = {}));
var InputText = class _InputText extends BaseComponent {
  ngModel;
  /**
   * Specifies the input variant of the component.
   * @group Props
   */
  variant = "outlined";
  /**
   * Spans 100% width of the container when enabled.
   * @group Props
   */
  fluid;
  /**
   * Defines the size of the component.
   * @group Props
   */
  pSize;
  filled;
  _componentStyle = inject(InputTextStyle);
  get hasFluid() {
    const nativeElement = this.el.nativeElement;
    const fluidComponent = nativeElement.closest("p-fluid");
    return isEmpty(this.fluid) ? !!fluidComponent : this.fluid;
  }
  constructor(ngModel) {
    super();
    this.ngModel = ngModel;
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
    this.updateFilledState();
    this.cd.detectChanges();
  }
  ngDoCheck() {
    this.updateFilledState();
  }
  onInput() {
    this.updateFilledState();
  }
  updateFilledState() {
    this.filled = this.el.nativeElement.value && this.el.nativeElement.value.length || this.ngModel && this.ngModel.model;
  }
  static \u0275fac = function InputText_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputText)(\u0275\u0275directiveInject(NgModel, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _InputText,
    selectors: [["", "pInputText", ""]],
    hostAttrs: [1, "p-inputtext", "p-component"],
    hostVars: 14,
    hostBindings: function InputText_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("input", function InputText_input_HostBindingHandler($event) {
          return ctx.onInput($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275classProp("p-filled", ctx.filled)("p-variant-filled", ctx.variant === "filled" || ctx.config.inputStyle() === "filled" || ctx.config.inputVariant() === "filled")("p-inputtext-fluid", ctx.hasFluid)("p-inputtext-sm", ctx.pSize === "small")("p-inputfield-sm", ctx.pSize === "small")("p-inputtext-lg", ctx.pSize === "large")("p-inputfield-lg", ctx.pSize === "large");
      }
    },
    inputs: {
      variant: "variant",
      fluid: [2, "fluid", "fluid", booleanAttribute],
      pSize: "pSize"
    },
    features: [\u0275\u0275ProvidersFeature([InputTextStyle]), \u0275\u0275InputTransformsFeature, \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputText, [{
    type: Directive,
    args: [{
      selector: "[pInputText]",
      standalone: true,
      host: {
        class: "p-inputtext p-component",
        "[class.p-filled]": "filled",
        "[class.p-variant-filled]": 'variant === "filled" || config.inputStyle() === "filled" || config.inputVariant() === "filled"',
        "[class.p-inputtext-fluid]": "hasFluid",
        "[class.p-inputtext-sm]": 'pSize === "small"',
        "[class.p-inputfield-sm]": 'pSize === "small"',
        "[class.p-inputtext-lg]": 'pSize === "large"',
        "[class.p-inputfield-lg]": 'pSize === "large"'
      },
      providers: [InputTextStyle]
    }]
  }], () => [{
    type: NgModel,
    decorators: [{
      type: Optional
    }]
  }], {
    variant: [{
      type: Input
    }],
    fluid: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    pSize: [{
      type: Input,
      args: ["pSize"]
    }],
    onInput: [{
      type: HostListener,
      args: ["input", ["$event"]]
    }]
  });
})();
var InputTextModule = class _InputTextModule {
  static \u0275fac = function InputTextModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputTextModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _InputTextModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputTextModule, [{
    type: NgModule,
    args: [{
      imports: [InputText],
      exports: [InputText]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-utils.mjs
var ObjectUtils = class _ObjectUtils {
  static isArray(value, empty = true) {
    return Array.isArray(value) && (empty || value.length !== 0);
  }
  static isObject(value, empty = true) {
    return typeof value === "object" && !Array.isArray(value) && value != null && (empty || Object.keys(value).length !== 0);
  }
  static equals(obj1, obj2, field) {
    if (field) return this.resolveFieldData(obj1, field) === this.resolveFieldData(obj2, field);
    else return this.equalsByValue(obj1, obj2);
  }
  static equalsByValue(obj1, obj2) {
    if (obj1 === obj2) return true;
    if (obj1 && obj2 && typeof obj1 == "object" && typeof obj2 == "object") {
      var arrA = Array.isArray(obj1), arrB = Array.isArray(obj2), i, length, key;
      if (arrA && arrB) {
        length = obj1.length;
        if (length != obj2.length) return false;
        for (i = length; i-- !== 0; ) if (!this.equalsByValue(obj1[i], obj2[i])) return false;
        return true;
      }
      if (arrA != arrB) return false;
      var dateA = this.isDate(obj1), dateB = this.isDate(obj2);
      if (dateA != dateB) return false;
      if (dateA && dateB) return obj1.getTime() == obj2.getTime();
      var regexpA = obj1 instanceof RegExp, regexpB = obj2 instanceof RegExp;
      if (regexpA != regexpB) return false;
      if (regexpA && regexpB) return obj1.toString() == obj2.toString();
      var keys = Object.keys(obj1);
      length = keys.length;
      if (length !== Object.keys(obj2).length) return false;
      for (i = length; i-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(obj2, keys[i])) return false;
      for (i = length; i-- !== 0; ) {
        key = keys[i];
        if (!this.equalsByValue(obj1[key], obj2[key])) return false;
      }
      return true;
    }
    return obj1 !== obj1 && obj2 !== obj2;
  }
  static resolveFieldData(data, field) {
    if (data && field) {
      if (this.isFunction(field)) {
        return field(data);
      } else if (field.indexOf(".") == -1) {
        return data[field];
      } else {
        let fields = field.split(".");
        let value = data;
        for (let i = 0, len = fields.length; i < len; ++i) {
          if (value == null) {
            return null;
          }
          value = value[fields[i]];
        }
        return value;
      }
    } else {
      return null;
    }
  }
  static isFunction(obj) {
    return !!(obj && obj.constructor && obj.call && obj.apply);
  }
  static reorderArray(value, from2, to) {
    let target;
    if (value && from2 !== to) {
      if (to >= value.length) {
        to %= value.length;
        from2 %= value.length;
      }
      value.splice(to, 0, value.splice(from2, 1)[0]);
    }
  }
  static insertIntoOrderedArray(item, index, arr, sourceArr) {
    if (arr.length > 0) {
      let injected = false;
      for (let i = 0; i < arr.length; i++) {
        let currentItemIndex = this.findIndexInList(arr[i], sourceArr);
        if (currentItemIndex > index) {
          arr.splice(i, 0, item);
          injected = true;
          break;
        }
      }
      if (!injected) {
        arr.push(item);
      }
    } else {
      arr.push(item);
    }
  }
  static findIndexInList(item, list) {
    let index = -1;
    if (list) {
      for (let i = 0; i < list.length; i++) {
        if (list[i] == item) {
          index = i;
          break;
        }
      }
    }
    return index;
  }
  static contains(value, list) {
    if (value != null && list && list.length) {
      for (let val of list) {
        if (this.equals(value, val)) return true;
      }
    }
    return false;
  }
  static removeAccents(str) {
    if (str) {
      str = str.normalize("NFKD").replace(new RegExp("\\p{Diacritic}", "gu"), "");
    }
    return str;
  }
  static isDate(input2) {
    return Object.prototype.toString.call(input2) === "[object Date]";
  }
  static isEmpty(value) {
    return value === null || value === void 0 || value === "" || Array.isArray(value) && value.length === 0 || !this.isDate(value) && typeof value === "object" && Object.keys(value).length === 0;
  }
  static isNotEmpty(value) {
    return !this.isEmpty(value);
  }
  static compare(value1, value2, locale, order = 1) {
    let result = -1;
    const emptyValue1 = this.isEmpty(value1);
    const emptyValue2 = this.isEmpty(value2);
    if (emptyValue1 && emptyValue2) result = 0;
    else if (emptyValue1) result = order;
    else if (emptyValue2) result = -order;
    else if (typeof value1 === "string" && typeof value2 === "string") result = value1.localeCompare(value2, locale, {
      numeric: true
    });
    else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
    return result;
  }
  static sort(value1, value2, order = 1, locale, nullSortOrder = 1) {
    const result = _ObjectUtils.compare(value1, value2, locale, order);
    let finalSortOrder = order;
    if (_ObjectUtils.isEmpty(value1) || _ObjectUtils.isEmpty(value2)) {
      finalSortOrder = nullSortOrder === 1 ? order : nullSortOrder;
    }
    return finalSortOrder * result;
  }
  static merge(obj1, obj2) {
    if (obj1 == void 0 && obj2 == void 0) {
      return void 0;
    } else if ((obj1 == void 0 || typeof obj1 === "object") && (obj2 == void 0 || typeof obj2 === "object")) {
      return __spreadValues(__spreadValues({}, obj1 || {}), obj2 || {});
    } else if ((obj1 == void 0 || typeof obj1 === "string") && (obj2 == void 0 || typeof obj2 === "string")) {
      return [obj1 || "", obj2 || ""].join(" ");
    }
    return obj2 || obj1;
  }
  static isPrintableCharacter(char = "") {
    return this.isNotEmpty(char) && char.length === 1 && char.match(/\S| /);
  }
  static getItemValue(obj, ...params) {
    return this.isFunction(obj) ? obj(...params) : obj;
  }
  static findLastIndex(arr, callback) {
    let index = -1;
    if (this.isNotEmpty(arr)) {
      try {
        index = arr.findLastIndex(callback);
      } catch {
        index = arr.lastIndexOf([...arr].reverse().find(callback));
      }
    }
    return index;
  }
  static findLast(arr, callback) {
    let item;
    if (this.isNotEmpty(arr)) {
      try {
        item = arr.findLast(callback);
      } catch {
        item = [...arr].reverse().find(callback);
      }
    }
    return item;
  }
  static deepEquals(a, b) {
    if (a === b) return true;
    if (a && b && typeof a == "object" && typeof b == "object") {
      var arrA = Array.isArray(a), arrB = Array.isArray(b), i, length, key;
      if (arrA && arrB) {
        length = a.length;
        if (length != b.length) return false;
        for (i = length; i-- !== 0; ) if (!this.deepEquals(a[i], b[i])) return false;
        return true;
      }
      if (arrA != arrB) return false;
      var dateA = a instanceof Date, dateB = b instanceof Date;
      if (dateA != dateB) return false;
      if (dateA && dateB) return a.getTime() == b.getTime();
      var regexpA = a instanceof RegExp, regexpB = b instanceof RegExp;
      if (regexpA != regexpB) return false;
      if (regexpA && regexpB) return a.toString() == b.toString();
      var keys = Object.keys(a);
      length = keys.length;
      if (length !== Object.keys(b).length) return false;
      for (i = length; i-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
      for (i = length; i-- !== 0; ) {
        key = keys[i];
        if (!this.deepEquals(a[key], b[key])) return false;
      }
      return true;
    }
    return a !== a && b !== b;
  }
  static minifyCSS(css3) {
    return css3 ? css3.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!").replace(/: /g, ":") : css3;
  }
  static toFlatCase(str) {
    return this.isString(str) ? str.replace(/(-|_)/g, "").toLowerCase() : str;
  }
  static isString(value, empty = true) {
    return typeof value === "string" && (empty || value !== "");
  }
};
var lastId = 0;
function UniqueComponentId(prefix = "pn_id_") {
  lastId++;
  return `${prefix}${lastId}`;
}
function ZIndexUtils() {
  let zIndexes = [];
  const generateZIndex = (key, baseZIndex) => {
    let lastZIndex = zIndexes.length > 0 ? zIndexes[zIndexes.length - 1] : {
      key,
      value: baseZIndex
    };
    let newZIndex = lastZIndex.value + (lastZIndex.key === key ? 0 : baseZIndex) + 2;
    zIndexes.push({
      key,
      value: newZIndex
    });
    return newZIndex;
  };
  const revertZIndex = (zIndex) => {
    zIndexes = zIndexes.filter((obj) => obj.value !== zIndex);
  };
  const getCurrentZIndex = () => {
    return zIndexes.length > 0 ? zIndexes[zIndexes.length - 1].value : 0;
  };
  const getZIndex = (el) => {
    return el ? parseInt(el.style.zIndex, 10) || 0 : 0;
  };
  return {
    get: getZIndex,
    set: (key, el, baseZIndex) => {
      if (el) {
        el.style.zIndex = String(generateZIndex(key, baseZIndex));
      }
    },
    clear: (el) => {
      if (el) {
        revertZIndex(getZIndex(el));
        el.style.zIndex = "";
      }
    },
    getCurrent: () => getCurrentZIndex()
  };
}
var zindexutils = ZIndexUtils();

// node_modules/primeng/fesm2022/primeng-password.mjs
var theme6 = ({
  dt: dt2
}) => `
.p-password {
    display: inline-flex;
    position: relative;
}

.p-password .p-password-overlay {
    min-width: 100%;
}

.p-password-meter {
    height: ${dt2("password.meter.height")};
    background: ${dt2("password.meter.background")};
    border-radius: ${dt2("password.meter.border.radius")};
}

.p-password-meter-label {
    height: 100%;
    width: 0;
    transition: width 1s ease-in-out;
    border-radius: ${dt2("password.meter.border.radius")};
}

.p-password-meter-weak {
    background: ${dt2("password.strength.weak.background")};
}

.p-password-meter-medium {
    background: ${dt2("password.strength.medium.background")};
}

.p-password-meter-strong {
    background: ${dt2("password.strength.strong.background")};
}

.p-password-fluid {
    display: flex;
}

.p-password-fluid .p-password-input {
    width: 100%;
}

.p-password-input::-ms-reveal,
.p-password-input::-ms-clear {
    display: none;
}

.p-password-overlay {
    position: absolute;
    padding: ${dt2("password.overlay.padding")};
    background: ${dt2("password.overlay.background")};
    color: ${dt2("password.overlay.color")};
    border: 1px solid ${dt2("password.overlay.border.color")};
    box-shadow: ${dt2("password.overlay.shadow")};
    border-radius: ${dt2("password.overlay.border.radius")};
}

.p-password-content {
    display: flex;
    flex-direction: column;
    gap: ${dt2("password.content.gap")};
}

.p-password-toggle-mask-icon {
    inset-inline-end: ${dt2("form.field.padding.x")};
    color: ${dt2("password.icon.color")};
    position: absolute;
    top: 50%;
    margin-top: calc(-1 * calc(${dt2("icon.size")} / 2));
    width: ${dt2("icon.size")};
    height: ${dt2("icon.size")};
}

.p-password:has(.p-password-toggle-mask-icon) .p-password-input {
    padding-inline-end: calc((${dt2("form.field.padding.x")} * 2) + ${dt2("icon.size")});
}

/* For PrimeNG */
p-password.ng-invalid.ng-dirty .p-inputtext {
    border-color: ${dt2("inputtext.invalid.border.color")};
}

p-password.ng-invalid.ng-dirty .p-inputtext:enabled:focus {
    border-color: ${dt2("inputtext.focus.border.color")};
}

p-password.ng-invalid.ng-dirty .p-inputtext::placeholder {
    color: ${dt2("inputtext.invalid.placeholder.color")};
}

.p-password-clear-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    cursor: pointer;
    inset-inline-end: ${dt2("form.field.padding.x")};
    color: ${dt2("form.field.icon.color")};
}

.p-password-fluid-directive {
    width:100%
}
`;
var inlineStyles = {
  root: ({
    instance
  }) => ({
    position: instance.appendTo === "self" ? "relative" : void 0
  })
};
var classes5 = {
  root: ({
    instance
  }) => ({
    "p-password p-component p-inputwrapper": true,
    "p-inputwrapper-filled": instance.filled(),
    "p-inputwrapper-focus": instance.focused,
    "p-password-fluid": instance.hasFluid
  }),
  pcInput: "p-password-input",
  maskIcon: "p-password-toggle-mask-icon p-password-mask-icon",
  unmaskIcon: "p-password-toggle-mask-icon p-password-unmask-icon",
  overlay: "p-password-overlay p-component",
  content: "p-password-content",
  meter: "p-password-meter",
  meterLabel: ({
    instance
  }) => `p-password-meter-label ${instance.meter ? "p-password-meter-" + instance.meter.strength : ""}`,
  meterText: "p-password-meter-text"
};
var PasswordStyle = class _PasswordStyle extends BaseStyle {
  name = "password";
  theme = theme6;
  classes = classes5;
  inlineStyles = inlineStyles;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275PasswordStyle_BaseFactory;
    return function PasswordStyle_Factory(__ngFactoryType__) {
      return (\u0275PasswordStyle_BaseFactory || (\u0275PasswordStyle_BaseFactory = \u0275\u0275getInheritedFactory(_PasswordStyle)))(__ngFactoryType__ || _PasswordStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _PasswordStyle,
    factory: _PasswordStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PasswordStyle, [{
    type: Injectable
  }], null, null);
})();
var PasswordClasses;
(function(PasswordClasses2) {
  PasswordClasses2["root"] = "p-password";
  PasswordClasses2["pcInput"] = "p-password-input";
  PasswordClasses2["maskIcon"] = "p-password-mask-icon";
  PasswordClasses2["unmaskIcon"] = "p-password-unmask-icon";
  PasswordClasses2["overlay"] = "p-password-overlay";
  PasswordClasses2["meter"] = "p-password-meter";
  PasswordClasses2["meterLabel"] = "p-password-meter-label";
  PasswordClasses2["meterText"] = "p-password-meter-text";
})(PasswordClasses || (PasswordClasses = {}));
var _c04 = ["content"];
var _c12 = ["footer"];
var _c22 = ["header"];
var _c32 = ["clearicon"];
var _c42 = ["headericon"];
var _c5 = ["showicon"];
var _c6 = ["input"];
var _c7 = () => ({
  class: "p-password-toggle-mask-icon p-password-mask-icon"
});
var _c8 = (a0, a1) => ({
  showTransitionParams: a0,
  hideTransitionParams: a1
});
var _c9 = (a0) => ({
  value: "visible",
  params: a0
});
var _c10 = (a0) => ({
  width: a0
});
function Password_ng_container_5_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "TimesIcon", 8);
    \u0275\u0275listener("click", function Password_ng_container_5_TimesIcon_1_Template_TimesIcon_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.clear());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275attribute("data-pc-section", "clearIcon");
  }
}
function Password_ng_container_5_3_ng_template_0_Template(rf, ctx) {
}
function Password_ng_container_5_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Password_ng_container_5_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Password_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Password_ng_container_5_TimesIcon_1_Template, 1, 1, "TimesIcon", 7);
    \u0275\u0275elementStart(2, "span", 8);
    \u0275\u0275listener("click", function Password_ng_container_5_Template_span_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.clear());
    });
    \u0275\u0275template(3, Password_ng_container_5_3_Template, 1, 0, null, 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.clearIconTemplate && !ctx_r3._clearIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275attribute("data-pc-section", "clearIcon");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r3.clearIconTemplate || ctx_r3._clearIconTemplate);
  }
}
function Password_ng_container_6_ng_container_1_EyeSlashIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "EyeSlashIcon", 12);
    \u0275\u0275listener("click", function Password_ng_container_6_ng_container_1_EyeSlashIcon_1_Template_EyeSlashIcon_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.onMaskToggle());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275attribute("data-pc-section", "hideIcon");
  }
}
function Password_ng_container_6_ng_container_1_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Password_ng_container_6_ng_container_1_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Password_ng_container_6_ng_container_1_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Password_ng_container_6_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275listener("click", function Password_ng_container_6_ng_container_1_span_2_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.onMaskToggle());
    });
    \u0275\u0275template(1, Password_ng_container_6_ng_container_1_span_2_1_Template, 1, 0, null, 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r3.hideIconTemplate || ctx_r3._hideIconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction0(2, _c7));
  }
}
function Password_ng_container_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Password_ng_container_6_ng_container_1_EyeSlashIcon_1_Template, 1, 1, "EyeSlashIcon", 10)(2, Password_ng_container_6_ng_container_1_span_2_Template, 2, 3, "span", 11);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.hideIconTemplate && !ctx_r3._hideIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.hideIconTemplate || ctx_r3._hideIconTemplate);
  }
}
function Password_ng_container_6_ng_container_2_EyeIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "EyeIcon", 12);
    \u0275\u0275listener("click", function Password_ng_container_6_ng_container_2_EyeIcon_1_Template_EyeIcon_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.onMaskToggle());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275attribute("data-pc-section", "showIcon");
  }
}
function Password_ng_container_6_ng_container_2_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Password_ng_container_6_ng_container_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Password_ng_container_6_ng_container_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Password_ng_container_6_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275listener("click", function Password_ng_container_6_ng_container_2_span_2_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.onMaskToggle());
    });
    \u0275\u0275template(1, Password_ng_container_6_ng_container_2_span_2_1_Template, 1, 0, null, 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r3.showIconTemplate || ctx_r3._showIconTemplate);
  }
}
function Password_ng_container_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Password_ng_container_6_ng_container_2_EyeIcon_1_Template, 1, 1, "EyeIcon", 10)(2, Password_ng_container_6_ng_container_2_span_2_Template, 2, 1, "span", 11);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.showIconTemplate && !ctx_r3._showIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.showIconTemplate || ctx_r3._showIconTemplate);
  }
}
function Password_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Password_ng_container_6_ng_container_1_Template, 3, 2, "ng-container", 5)(2, Password_ng_container_6_ng_container_2_Template, 3, 2, "ng-container", 5);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.unmasked);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.unmasked);
  }
}
function Password_div_7_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Password_div_7_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Password_div_7_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Password_div_7_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 9);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r3.contentTemplate || ctx_r3._contentTemplate);
  }
}
function Password_div_7_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18);
    \u0275\u0275element(2, "div", 3);
    \u0275\u0275pipe(3, "mapper");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 19);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("data-pc-section", "meter");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pipeBind2(3, 6, ctx_r3.meter, ctx_r3.strengthClass))("ngStyle", \u0275\u0275pureFunction1(9, _c10, ctx_r3.meter ? ctx_r3.meter.width : ""));
    \u0275\u0275attribute("data-pc-section", "meterLabel");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-pc-section", "info");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.infoText);
  }
}
function Password_div_7_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Password_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15, 1);
    \u0275\u0275listener("click", function Password_div_7_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onOverlayClick($event));
    })("@overlayAnimation.start", function Password_div_7_Template_div_animation_overlayAnimation_start_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onAnimationStart($event));
    })("@overlayAnimation.done", function Password_div_7_Template_div_animation_overlayAnimation_done_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onAnimationEnd($event));
    });
    \u0275\u0275template(2, Password_div_7_ng_container_2_Template, 1, 0, "ng-container", 9)(3, Password_div_7_ng_container_3_Template, 2, 1, "ng-container", 16)(4, Password_div_7_ng_template_4_Template, 6, 11, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(6, Password_div_7_ng_container_6_Template, 1, 0, "ng-container", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const content_r10 = \u0275\u0275reference(5);
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("@overlayAnimation", \u0275\u0275pureFunction1(9, _c9, \u0275\u0275pureFunction2(6, _c8, ctx_r3.showTransitionOptions, ctx_r3.hideTransitionOptions)));
    \u0275\u0275attribute("data-pc-section", "panel");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r3.headerTemplate || ctx_r3._headerTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.contentTemplate || ctx_r3._contentTemplate)("ngIfElse", content_r10);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r3.footerTemplate || ctx_r3._footerTemplate);
  }
}
var PasswordDirective = class _PasswordDirective extends BaseComponent {
  zone;
  /**
   * Text to prompt password entry. Defaults to PrimeNG I18N API configuration.
   * @group Props
   */
  promptLabel = "Enter a password";
  /**
   * Text for a weak password. Defaults to PrimeNG I18N API configuration.
   * @group Props
   */
  weakLabel = "Weak";
  /**
   * Text for a medium password. Defaults to PrimeNG I18N API configuration.
   * @group Props
   */
  mediumLabel = "Medium";
  /**
   * Text for a strong password. Defaults to PrimeNG I18N API configuration.
   * @group Props
   */
  strongLabel = "Strong";
  /**
   * Whether to show the strength indicator or not.
   * @group Props
   */
  feedback = true;
  /**
   * Sets the visibility of the password field.
   * @group Props
   */
  set showPassword(show) {
    this.el.nativeElement.type = show ? "text" : "password";
  }
  /**
   * Specifies the input variant of the component.
   * @group Props
   */
  variant = "outlined";
  /**
   * Spans 100% width of the container when enabled.
   * @group Props
   */
  fluid = false;
  panel;
  meter;
  info;
  filled;
  content;
  label;
  scrollHandler;
  documentResizeListener;
  _componentStyle = inject(PasswordStyle);
  get hasFluid() {
    const nativeElement = this.el.nativeElement;
    const fluidComponent = nativeElement.closest("p-fluid");
    return this.fluid || !!fluidComponent;
  }
  constructor(zone) {
    super();
    this.zone = zone;
  }
  ngDoCheck() {
    this.updateFilledState();
  }
  onInput(e) {
    this.updateFilledState();
  }
  updateFilledState() {
    this.filled = this.el.nativeElement.value && this.el.nativeElement.value.length;
  }
  createPanel() {
    if (isPlatformBrowser(this.platformId)) {
      this.panel = this.renderer.createElement("div");
      this.renderer.addClass(this.panel, "p-password-overlay");
      this.renderer.addClass(this.panel, "p-component");
      this.content = this.renderer.createElement("div");
      this.renderer.addClass(this.content, "p-password-content");
      this.renderer.appendChild(this.panel, this.content);
      this.meter = this.renderer.createElement("div");
      this.renderer.addClass(this.meter, "p-password-meter");
      this.renderer.appendChild(this.content, this.meter);
      this.label = this.renderer.createElement("div");
      this.renderer.addClass(this.label, "p-password-meter-label");
      this.renderer.appendChild(this.meter, this.label);
      this.info = this.renderer.createElement("div");
      this.renderer.addClass(this.info, "p-password-meter-text");
      this.renderer.setProperty(this.info, "textContent", this.promptLabel);
      this.renderer.appendChild(this.content, this.info);
      this.renderer.setStyle(this.panel, "minWidth", `${this.el.nativeElement.offsetWidth}px`);
      this.renderer.appendChild(document.body, this.panel);
      this.updateMeter();
    }
  }
  showOverlay() {
    if (this.feedback) {
      if (!this.panel) {
        this.createPanel();
      }
      this.renderer.setStyle(this.panel, "zIndex", String(++DomHandler.zindex));
      this.renderer.setStyle(this.panel, "display", "block");
      this.zone.runOutsideAngular(() => {
        setTimeout(() => {
          addClass(this.panel, "p-connected-overlay-visible");
          this.bindScrollListener();
          this.bindDocumentResizeListener();
        }, 1);
      });
      absolutePosition(this.panel, this.el.nativeElement);
    }
  }
  hideOverlay() {
    if (this.feedback && this.panel) {
      addClass(this.panel, "p-connected-overlay-hidden");
      removeClass(this.panel, "p-connected-overlay-visible");
      this.unbindScrollListener();
      this.unbindDocumentResizeListener();
      this.zone.runOutsideAngular(() => {
        setTimeout(() => {
          this.ngOnDestroy();
        }, 150);
      });
    }
  }
  onFocus() {
    this.showOverlay();
  }
  onBlur() {
    this.hideOverlay();
  }
  labelSignal = signal("");
  onKeyup(e) {
    if (this.feedback) {
      let value = e.target.value, label = null, meterPos = null;
      if (value.length === 0) {
        label = this.promptLabel;
        meterPos = "0px 0px";
      } else {
        var score = this.testStrength(value);
        if (score < 30) {
          label = this.weakLabel;
          meterPos = "0px -10px";
        } else if (score >= 30 && score < 80) {
          label = this.mediumLabel;
          meterPos = "0px -20px";
        } else if (score >= 80) {
          label = this.strongLabel;
          meterPos = "0px -30px";
        }
        this.labelSignal.set(label);
        this.updateMeter();
      }
      if (!this.panel || !hasClass(this.panel, "p-connected-overlay-visible")) {
        this.showOverlay();
      }
      this.renderer.setStyle(this.meter, "backgroundPosition", meterPos);
      this.info.textContent = label;
    }
  }
  updateMeter() {
    if (this.labelSignal()) {
      const label = this.labelSignal();
      const strengthClass = this.strengthClass(label.toLowerCase());
      const width = this.getWidth(label.toLowerCase());
      this.renderer.addClass(this.meter, strengthClass);
      this.renderer.setStyle(this.meter, "width", width);
      this.info.textContent = label;
    }
  }
  getWidth(label) {
    return label === "weak" ? "33.33%" : label === "medium" ? "66.66%" : label === "strong" ? "100%" : "";
  }
  strengthClass(label) {
    return `p-password-meter${label ? `-${label}` : ""}`;
  }
  testStrength(str) {
    let grade = 0;
    let val;
    val = str.match("[0-9]");
    grade += this.normalize(val ? val.length : 1 / 4, 1) * 25;
    val = str.match("[a-zA-Z]");
    grade += this.normalize(val ? val.length : 1 / 2, 3) * 10;
    val = str.match("[!@#$%^&*?_~.,;=]");
    grade += this.normalize(val ? val.length : 1 / 6, 1) * 35;
    val = str.match("[A-Z]");
    grade += this.normalize(val ? val.length : 1 / 6, 1) * 30;
    grade *= str.length / 8;
    return grade > 100 ? 100 : grade;
  }
  normalize(x, y) {
    let diff = x - y;
    if (diff <= 0) return x / y;
    else return 1 + 0.5 * (x / (x + y / 4));
  }
  get disabled() {
    return this.el.nativeElement.disabled;
  }
  bindScrollListener() {
    if (!this.scrollHandler) {
      this.scrollHandler = new ConnectedOverlayScrollHandler(this.el.nativeElement, () => {
        if (hasClass(this.panel, "p-connected-overlay-visible")) {
          this.hideOverlay();
        }
      });
    }
    this.scrollHandler.bindScrollListener();
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
    }
  }
  bindDocumentResizeListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.documentResizeListener) {
        const window2 = this.document.defaultView;
        this.documentResizeListener = this.renderer.listen(window2, "resize", this.onWindowResize.bind(this));
      }
    }
  }
  unbindDocumentResizeListener() {
    if (this.documentResizeListener) {
      this.documentResizeListener();
      this.documentResizeListener = null;
    }
  }
  onWindowResize() {
    if (!isTouchDevice()) {
      this.hideOverlay();
    }
  }
  ngOnDestroy() {
    if (this.panel) {
      if (this.scrollHandler) {
        this.scrollHandler.destroy();
        this.scrollHandler = null;
      }
      this.unbindDocumentResizeListener();
      this.renderer.removeChild(this.document.body, this.panel);
      this.panel = null;
      this.meter = null;
      this.info = null;
    }
    super.ngOnDestroy();
  }
  static \u0275fac = function PasswordDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PasswordDirective)(\u0275\u0275directiveInject(NgZone));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _PasswordDirective,
    selectors: [["", "pPassword", ""]],
    hostAttrs: [1, "p-password", "p-inputtext", "p-component", "p-inputwrapper"],
    hostVars: 6,
    hostBindings: function PasswordDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("input", function PasswordDirective_input_HostBindingHandler($event) {
          return ctx.onInput($event);
        })("focus", function PasswordDirective_focus_HostBindingHandler() {
          return ctx.onFocus();
        })("blur", function PasswordDirective_blur_HostBindingHandler() {
          return ctx.onBlur();
        })("keyup", function PasswordDirective_keyup_HostBindingHandler($event) {
          return ctx.onKeyup($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275classProp("p-inputwrapper-filled", ctx.filled)("p-variant-filled", ctx.variant === "filled" || ctx.config.inputStyle() === "filled" || ctx.config.inputVariant() === "filled")("p-password-fluid-directive", ctx.hasFluid);
      }
    },
    inputs: {
      promptLabel: "promptLabel",
      weakLabel: "weakLabel",
      mediumLabel: "mediumLabel",
      strongLabel: "strongLabel",
      feedback: [2, "feedback", "feedback", booleanAttribute],
      showPassword: "showPassword",
      variant: "variant",
      fluid: [2, "fluid", "fluid", booleanAttribute]
    },
    features: [\u0275\u0275ProvidersFeature([PasswordStyle]), \u0275\u0275InputTransformsFeature, \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PasswordDirective, [{
    type: Directive,
    args: [{
      selector: "[pPassword]",
      standalone: true,
      host: {
        class: "p-password p-inputtext p-component p-inputwrapper",
        "[class.p-inputwrapper-filled]": "filled",
        "[class.p-variant-filled]": 'variant === "filled" || config.inputStyle() === "filled" || config.inputVariant() === "filled"',
        "[class.p-password-fluid-directive]": "hasFluid"
      },
      providers: [PasswordStyle]
    }]
  }], () => [{
    type: NgZone
  }], {
    promptLabel: [{
      type: Input
    }],
    weakLabel: [{
      type: Input
    }],
    mediumLabel: [{
      type: Input
    }],
    strongLabel: [{
      type: Input
    }],
    feedback: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showPassword: [{
      type: Input
    }],
    variant: [{
      type: Input
    }],
    fluid: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onInput: [{
      type: HostListener,
      args: ["input", ["$event"]]
    }],
    onFocus: [{
      type: HostListener,
      args: ["focus"]
    }],
    onBlur: [{
      type: HostListener,
      args: ["blur"]
    }],
    onKeyup: [{
      type: HostListener,
      args: ["keyup", ["$event"]]
    }]
  });
})();
var MapperPipe = class _MapperPipe {
  transform(value, mapper, ...args) {
    return mapper(value, ...args);
  }
  static \u0275fac = function MapperPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MapperPipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({
    name: "mapper",
    type: _MapperPipe,
    pure: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapperPipe, [{
    type: Pipe,
    args: [{
      name: "mapper",
      pure: true,
      standalone: true
    }]
  }], null, null);
})();
var Password_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => Password),
  multi: true
};
var Password = class _Password extends BaseComponent {
  /**
   * Defines a string that labels the input for accessibility.
   * @group Props
   */
  ariaLabel;
  /**
   * Whether the component should span the full width of its parent.
   * @group Props
   */
  fluid;
  /**
   * Specifies one or more IDs in the DOM that labels the input field.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Label of the input for accessibility.
   * @group Props
   */
  label;
  /**
   * Indicates whether the component is disabled or not.
   * @group Props
   */
  disabled;
  /**
   * Text to prompt password entry. Defaults to PrimeNG I18N API configuration.
   * @group Props
   */
  promptLabel;
  /**
   * Regex value for medium regex.
   * @group Props
   */
  mediumRegex = "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})";
  /**
   * Regex value for strong regex.
   * @group Props
   */
  strongRegex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})";
  /**
   * Text for a weak password. Defaults to PrimeNG I18N API configuration.
   * @group Props
   */
  weakLabel;
  /**
   * Text for a medium password. Defaults to PrimeNG I18N API configuration.
   * @group Props
   */
  mediumLabel;
  /**
   * specifies the maximum number of characters allowed in the input element.
   * @group Props
   */
  maxLength;
  /**
   * Text for a strong password. Defaults to PrimeNG I18N API configuration.
   * @group Props
   */
  strongLabel;
  /**
   * Identifier of the accessible input element.
   * @group Props
   */
  inputId;
  /**
   * Whether to show the strength indicator or not.
   * @group Props
   */
  feedback = true;
  /**
   * Id of the element or "body" for document where the overlay should be appended to.
   * @group Props
   */
  appendTo;
  /**
   * Whether to show an icon to display the password as plain text.
   * @group Props
   */
  toggleMask;
  /**
   * Defines the size of the component.
   * @group Props
   */
  size;
  /**
   * Style class of the input field.
   * @group Props
   */
  inputStyleClass;
  /**
   * Style class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Inline style of the input field.
   * @group Props
   */
  inputStyle;
  /**
   * Transition options of the show animation.
   * @group Props
   */
  showTransitionOptions = ".12s cubic-bezier(0, 0, 0.2, 1)";
  /**
   * Transition options of the hide animation.
   * @group Props
   */
  hideTransitionOptions = ".1s linear";
  /**
   * Specify automated assistance in filling out password by browser.
   * @group Props
   */
  autocomplete;
  /**
   * Advisory information to display on input.
   * @group Props
   */
  placeholder;
  /**
   * When enabled, a clear icon is displayed to clear the value.
   * @group Props
   */
  showClear = false;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Specifies the input variant of the component.
   * @group Props
   */
  variant = "outlined";
  /**
   * Callback to invoke when the component receives focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to invoke when the component loses focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  /**
   * Callback to invoke when clear button is clicked.
   * @group Emits
   */
  onClear = new EventEmitter();
  input;
  contentTemplate;
  footerTemplate;
  headerTemplate;
  clearIconTemplate;
  hideIconTemplate;
  showIconTemplate;
  templates;
  _contentTemplate;
  _footerTemplate;
  _headerTemplate;
  _clearIconTemplate;
  _hideIconTemplate;
  _showIconTemplate;
  overlayVisible = false;
  meter;
  infoText;
  focused = false;
  unmasked = false;
  mediumCheckRegExp;
  strongCheckRegExp;
  resizeListener;
  scrollHandler;
  overlay;
  value = null;
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  translationSubscription;
  _componentStyle = inject(PasswordStyle);
  get hasFluid() {
    const nativeElement = this.el.nativeElement;
    const fluidComponent = nativeElement.closest("p-fluid");
    return this.fluid || !!fluidComponent;
  }
  overlayService = inject(OverlayService);
  ngOnInit() {
    super.ngOnInit();
    this.infoText = this.promptText();
    this.mediumCheckRegExp = new RegExp(this.mediumRegex);
    this.strongCheckRegExp = new RegExp(this.strongRegex);
    this.translationSubscription = this.config.translationObserver.subscribe(() => {
      this.updateUI(this.value || "");
    });
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this._contentTemplate = item.template;
          break;
        case "header":
          this._headerTemplate = item.template;
          break;
        case "footer":
          this._footerTemplate = item.template;
          break;
        case "clearicon":
          this._clearIconTemplate = item.template;
          break;
        case "hideicon":
          this._hideIconTemplate = item.template;
          break;
        case "showicon":
          this._showIconTemplate = item.template;
          break;
        default:
          this._contentTemplate = item.template;
          break;
      }
    });
  }
  onAnimationStart(event) {
    switch (event.toState) {
      case "visible":
        this.overlay = event.element;
        zindexutils.set("overlay", this.overlay, this.config.zIndex.overlay);
        this.appendContainer();
        this.alignOverlay();
        this.bindScrollListener();
        this.bindResizeListener();
        break;
      case "void":
        this.unbindScrollListener();
        this.unbindResizeListener();
        this.overlay = null;
        break;
    }
  }
  onAnimationEnd(event) {
    switch (event.toState) {
      case "void":
        zindexutils.clear(event.element);
        break;
    }
  }
  appendContainer() {
    if (this.appendTo) {
      if (this.appendTo === "body") this.renderer.appendChild(this.document.body, this.overlay);
      else this.document.getElementById(this.appendTo).appendChild(this.overlay);
    }
  }
  alignOverlay() {
    if (this.appendTo) {
      this.overlay.style.minWidth = getOuterWidth(this.input.nativeElement) + "px";
      absolutePosition(this.overlay, this.input.nativeElement);
    } else {
      relativePosition(this.overlay, this.input.nativeElement);
    }
  }
  onInput(event) {
    this.value = event.target.value;
    this.onModelChange(this.value);
  }
  onInputFocus(event) {
    this.focused = true;
    if (this.feedback) {
      this.overlayVisible = true;
    }
    this.onFocus.emit(event);
  }
  onInputBlur(event) {
    this.focused = false;
    if (this.feedback) {
      this.overlayVisible = false;
    }
    this.onModelTouched();
    this.onBlur.emit(event);
  }
  onKeyUp(event) {
    if (this.feedback) {
      let value = event.target.value;
      this.updateUI(value);
      if (event.code === "Escape") {
        this.overlayVisible && (this.overlayVisible = false);
        return;
      }
      if (!this.overlayVisible) {
        this.overlayVisible = true;
      }
    }
  }
  updateUI(value) {
    let label = null;
    let meter = null;
    switch (this.testStrength(value)) {
      case 1:
        label = this.weakText();
        meter = {
          strength: "weak",
          width: "33.33%"
        };
        break;
      case 2:
        label = this.mediumText();
        meter = {
          strength: "medium",
          width: "66.66%"
        };
        break;
      case 3:
        label = this.strongText();
        meter = {
          strength: "strong",
          width: "100%"
        };
        break;
      default:
        label = this.promptText();
        meter = null;
        break;
    }
    this.meter = meter;
    this.infoText = label;
  }
  onMaskToggle() {
    this.unmasked = !this.unmasked;
  }
  onOverlayClick(event) {
    this.overlayService.add({
      originalEvent: event,
      target: this.el.nativeElement
    });
  }
  testStrength(str) {
    let level = 0;
    if (this.strongCheckRegExp.test(str)) level = 3;
    else if (this.mediumCheckRegExp.test(str)) level = 2;
    else if (str.length) level = 1;
    return level;
  }
  writeValue(value) {
    if (value === void 0) this.value = null;
    else this.value = value;
    if (this.feedback) this.updateUI(this.value || "");
    this.cd.markForCheck();
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  setDisabledState(val) {
    this.disabled = val;
    this.cd.markForCheck();
  }
  bindScrollListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.scrollHandler) {
        this.scrollHandler = new ConnectedOverlayScrollHandler(this.input.nativeElement, () => {
          if (this.overlayVisible) {
            this.overlayVisible = false;
          }
        });
      }
      this.scrollHandler.bindScrollListener();
    }
  }
  bindResizeListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.resizeListener) {
        const window2 = this.document.defaultView;
        this.resizeListener = this.renderer.listen(window2, "resize", () => {
          if (this.overlayVisible && !isTouchDevice()) {
            this.overlayVisible = false;
          }
        });
      }
    }
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
    }
  }
  unbindResizeListener() {
    if (this.resizeListener) {
      this.resizeListener();
      this.resizeListener = null;
    }
  }
  containerClass(toggleMask) {
    return {
      "p-password p-component p-inputwrapper": true,
      "p-input-icon-right": toggleMask
    };
  }
  get rootClass() {
    return this._componentStyle.classes.root({
      instance: this
    });
  }
  inputFieldClass(disabled) {
    return {
      "p-password-input": true,
      "p-disabled": disabled
    };
  }
  strengthClass(meter) {
    return `p-password-meter-label p-password-meter${meter?.strength ? `-${meter.strength}` : ""}`;
  }
  filled() {
    return this.value != null && this.value.toString().length > 0;
  }
  promptText() {
    return this.promptLabel || this.getTranslation(TranslationKeys.PASSWORD_PROMPT);
  }
  weakText() {
    return this.weakLabel || this.getTranslation(TranslationKeys.WEAK);
  }
  mediumText() {
    return this.mediumLabel || this.getTranslation(TranslationKeys.MEDIUM);
  }
  strongText() {
    return this.strongLabel || this.getTranslation(TranslationKeys.STRONG);
  }
  restoreAppend() {
    if (this.overlay && this.appendTo) {
      if (this.appendTo === "body") this.renderer.removeChild(this.document.body, this.overlay);
      else this.document.getElementById(this.appendTo).removeChild(this.overlay);
    }
  }
  inputType(unmasked) {
    return unmasked ? "text" : "password";
  }
  getTranslation(option) {
    return this.config.getTranslation(option);
  }
  clear() {
    this.value = null;
    this.onModelChange(this.value);
    this.writeValue(this.value);
    this.onClear.emit();
  }
  ngOnDestroy() {
    if (this.overlay) {
      zindexutils.clear(this.overlay);
      this.overlay = null;
    }
    this.restoreAppend();
    this.unbindResizeListener();
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    if (this.translationSubscription) {
      this.translationSubscription.unsubscribe();
    }
    super.ngOnDestroy();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Password_BaseFactory;
    return function Password_Factory(__ngFactoryType__) {
      return (\u0275Password_BaseFactory || (\u0275Password_BaseFactory = \u0275\u0275getInheritedFactory(_Password)))(__ngFactoryType__ || _Password);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Password,
    selectors: [["p-password"]],
    contentQueries: function Password_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c04, 4);
        \u0275\u0275contentQuery(dirIndex, _c12, 4);
        \u0275\u0275contentQuery(dirIndex, _c22, 4);
        \u0275\u0275contentQuery(dirIndex, _c32, 4);
        \u0275\u0275contentQuery(dirIndex, _c42, 4);
        \u0275\u0275contentQuery(dirIndex, _c5, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.footerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.clearIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.hideIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.showIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Password_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c6, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.input = _t.first);
      }
    },
    inputs: {
      ariaLabel: "ariaLabel",
      fluid: [2, "fluid", "fluid", booleanAttribute],
      ariaLabelledBy: "ariaLabelledBy",
      label: "label",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      promptLabel: "promptLabel",
      mediumRegex: "mediumRegex",
      strongRegex: "strongRegex",
      weakLabel: "weakLabel",
      mediumLabel: "mediumLabel",
      maxLength: [2, "maxLength", "maxLength", numberAttribute],
      strongLabel: "strongLabel",
      inputId: "inputId",
      feedback: [2, "feedback", "feedback", booleanAttribute],
      appendTo: "appendTo",
      toggleMask: [2, "toggleMask", "toggleMask", booleanAttribute],
      size: "size",
      inputStyleClass: "inputStyleClass",
      styleClass: "styleClass",
      style: "style",
      inputStyle: "inputStyle",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      autocomplete: "autocomplete",
      placeholder: "placeholder",
      showClear: [2, "showClear", "showClear", booleanAttribute],
      autofocus: [2, "autofocus", "autofocus", booleanAttribute],
      variant: "variant"
    },
    outputs: {
      onFocus: "onFocus",
      onBlur: "onBlur",
      onClear: "onClear"
    },
    features: [\u0275\u0275ProvidersFeature([Password_VALUE_ACCESSOR, PasswordStyle]), \u0275\u0275InputTransformsFeature, \u0275\u0275InheritDefinitionFeature],
    decls: 8,
    vars: 33,
    consts: [["input", ""], ["overlay", ""], ["content", ""], [3, "ngClass", "ngStyle"], ["pInputText", "", 3, "input", "focus", "blur", "keyup", "disabled", "pSize", "ngClass", "ngStyle", "value", "variant", "pAutoFocus"], [4, "ngIf"], ["class", "p-password-overlay p-component", 3, "click", 4, "ngIf"], ["class", "p-password-clear-icon", 3, "click", 4, "ngIf"], [1, "p-password-clear-icon", 3, "click"], [4, "ngTemplateOutlet"], ["class", "p-password-toggle-mask-icon p-password-mask-icon", 3, "click", 4, "ngIf"], [3, "click", 4, "ngIf"], [1, "p-password-toggle-mask-icon", "p-password-mask-icon", 3, "click"], [3, "click"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-password-overlay", "p-component", 3, "click"], [4, "ngIf", "ngIfElse"], [1, "p-password-content"], [1, "p-password-meter"], [1, "p-password-meter-text"]],
    template: function Password_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 3)(1, "input", 4, 0);
        \u0275\u0275pipe(3, "mapper");
        \u0275\u0275pipe(4, "mapper");
        \u0275\u0275listener("input", function Password_Template_input_input_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onInput($event));
        })("focus", function Password_Template_input_focus_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onInputFocus($event));
        })("blur", function Password_Template_input_blur_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onInputBlur($event));
        })("keyup", function Password_Template_input_keyup_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onKeyUp($event));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, Password_ng_container_5_Template, 4, 3, "ng-container", 5)(6, Password_ng_container_6_Template, 3, 2, "ng-container", 5)(7, Password_div_7_Template, 7, 11, "div", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.styleClass);
        \u0275\u0275property("ngClass", ctx.rootClass)("ngStyle", ctx.style);
        \u0275\u0275attribute("data-pc-name", "password")("data-pc-section", "root");
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.inputStyleClass);
        \u0275\u0275property("disabled", ctx.disabled)("pSize", ctx.size)("ngClass", \u0275\u0275pipeBind2(3, 27, ctx.disabled, ctx.inputFieldClass))("ngStyle", ctx.inputStyle)("value", ctx.value)("variant", ctx.variant)("pAutoFocus", ctx.autofocus);
        \u0275\u0275attribute("label", ctx.label)("aria-label", ctx.ariaLabel)("aria-labelledBy", ctx.ariaLabelledBy)("id", ctx.inputId)("type", \u0275\u0275pipeBind2(4, 30, ctx.unmasked, ctx.inputType))("placeholder", ctx.placeholder)("autocomplete", ctx.autocomplete)("maxlength", ctx.maxLength)("data-pc-section", "input");
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.showClear && ctx.value != null);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.toggleMask);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.overlayVisible);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, NgStyle, InputText, AutoFocus, TimesIcon, EyeSlashIcon, EyeIcon, MapperPipe, SharedModule],
    encapsulation: 2,
    data: {
      animation: [trigger("overlayAnimation", [transition(":enter", [style({
        opacity: 0,
        transform: "scaleY(0.8)"
      }), animate("{{showTransitionParams}}")]), transition(":leave", [animate("{{hideTransitionParams}}", style({
        opacity: 0
      }))])])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Password, [{
    type: Component,
    args: [{
      selector: "p-password",
      standalone: true,
      imports: [CommonModule, InputText, AutoFocus, TimesIcon, EyeSlashIcon, EyeIcon, MapperPipe, SharedModule],
      template: `
        <div [ngClass]="rootClass" [ngStyle]="style" [class]="styleClass" [attr.data-pc-name]="'password'" [attr.data-pc-section]="'root'">
            <input
                #input
                [attr.label]="label"
                [attr.aria-label]="ariaLabel"
                [attr.aria-labelledBy]="ariaLabelledBy"
                [attr.id]="inputId"
                pInputText
                [disabled]="disabled"
                [pSize]="size"
                [ngClass]="disabled | mapper: inputFieldClass"
                [ngStyle]="inputStyle"
                [class]="inputStyleClass"
                [attr.type]="unmasked | mapper: inputType"
                [attr.placeholder]="placeholder"
                [attr.autocomplete]="autocomplete"
                [value]="value"
                [variant]="variant"
                (input)="onInput($event)"
                (focus)="onInputFocus($event)"
                (blur)="onInputBlur($event)"
                (keyup)="onKeyUp($event)"
                [attr.maxlength]="maxLength"
                [attr.data-pc-section]="'input'"
                [pAutoFocus]="autofocus"
            />
            <ng-container *ngIf="showClear && value != null">
                <TimesIcon *ngIf="!clearIconTemplate && !_clearIconTemplate" class="p-password-clear-icon" (click)="clear()" [attr.data-pc-section]="'clearIcon'" />
                <span (click)="clear()" class="p-password-clear-icon" [attr.data-pc-section]="'clearIcon'">
                    <ng-template *ngTemplateOutlet="clearIconTemplate || _clearIconTemplate"></ng-template>
                </span>
            </ng-container>

            <ng-container *ngIf="toggleMask">
                <ng-container *ngIf="unmasked">
                    <EyeSlashIcon class="p-password-toggle-mask-icon p-password-mask-icon" *ngIf="!hideIconTemplate && !_hideIconTemplate" (click)="onMaskToggle()" [attr.data-pc-section]="'hideIcon'" />
                    <span *ngIf="hideIconTemplate || _hideIconTemplate" (click)="onMaskToggle()">
                        <ng-template *ngTemplateOutlet="hideIconTemplate || _hideIconTemplate; context: { class: 'p-password-toggle-mask-icon p-password-mask-icon' }"></ng-template>
                    </span>
                </ng-container>
                <ng-container *ngIf="!unmasked">
                    <EyeIcon *ngIf="!showIconTemplate && !_showIconTemplate" class="p-password-toggle-mask-icon p-password-mask-icon" (click)="onMaskToggle()" [attr.data-pc-section]="'showIcon'" />
                    <span *ngIf="showIconTemplate || _showIconTemplate" (click)="onMaskToggle()">
                        <ng-template *ngTemplateOutlet="showIconTemplate || _showIconTemplate"></ng-template>
                    </span>
                </ng-container>
            </ng-container>

            <div
                #overlay
                *ngIf="overlayVisible"
                class="p-password-overlay p-component"
                (click)="onOverlayClick($event)"
                [@overlayAnimation]="{
                    value: 'visible',
                    params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions }
                }"
                (@overlayAnimation.start)="onAnimationStart($event)"
                (@overlayAnimation.done)="onAnimationEnd($event)"
                [attr.data-pc-section]="'panel'"
            >
                <ng-container *ngTemplateOutlet="headerTemplate || _headerTemplate"></ng-container>
                <ng-container *ngIf="contentTemplate || _contentTemplate; else content">
                    <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate"></ng-container>
                </ng-container>
                <ng-template #content>
                    <div class="p-password-content">
                        <div class="p-password-meter" [attr.data-pc-section]="'meter'">
                            <div [ngClass]="meter | mapper: strengthClass" [ngStyle]="{ width: meter ? meter.width : '' }" [attr.data-pc-section]="'meterLabel'"></div>
                        </div>
                        <div class="p-password-meter-text" [attr.data-pc-section]="'info'">{{ infoText }}</div>
                    </div>
                </ng-template>
                <ng-container *ngTemplateOutlet="footerTemplate || _footerTemplate"></ng-container>
            </div>
        </div>
    `,
      animations: [trigger("overlayAnimation", [transition(":enter", [style({
        opacity: 0,
        transform: "scaleY(0.8)"
      }), animate("{{showTransitionParams}}")]), transition(":leave", [animate("{{hideTransitionParams}}", style({
        opacity: 0
      }))])])],
      providers: [Password_VALUE_ACCESSOR, PasswordStyle],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None
    }]
  }], null, {
    ariaLabel: [{
      type: Input
    }],
    fluid: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    promptLabel: [{
      type: Input
    }],
    mediumRegex: [{
      type: Input
    }],
    strongRegex: [{
      type: Input
    }],
    weakLabel: [{
      type: Input
    }],
    mediumLabel: [{
      type: Input
    }],
    maxLength: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    strongLabel: [{
      type: Input
    }],
    inputId: [{
      type: Input
    }],
    feedback: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    appendTo: [{
      type: Input
    }],
    toggleMask: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    size: [{
      type: Input
    }],
    inputStyleClass: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    inputStyle: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    autocomplete: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    showClear: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    variant: [{
      type: Input
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    onClear: [{
      type: Output
    }],
    input: [{
      type: ViewChild,
      args: ["input"]
    }],
    contentTemplate: [{
      type: ContentChild,
      args: ["content", {
        descendants: false
      }]
    }],
    footerTemplate: [{
      type: ContentChild,
      args: ["footer", {
        descendants: false
      }]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: ["header", {
        descendants: false
      }]
    }],
    clearIconTemplate: [{
      type: ContentChild,
      args: ["clearicon", {
        descendants: false
      }]
    }],
    hideIconTemplate: [{
      type: ContentChild,
      args: ["headericon", {
        descendants: false
      }]
    }],
    showIconTemplate: [{
      type: ContentChild,
      args: ["showicon", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Password, {
    className: "Password",
    filePath: "password.ts",
    lineNumber: 486
  });
})();
var PasswordModule = class _PasswordModule {
  static \u0275fac = function PasswordModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PasswordModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _PasswordModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Password, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PasswordModule, [{
    type: NgModule,
    args: [{
      imports: [Password, PasswordDirective, SharedModule],
      exports: [PasswordDirective, Password, SharedModule]
    }]
  }], null, null);
})();

// src/globals.ts
var APIURL = "https://localhost:7273/";
var VersionTag = "(DEBUG)";

// src/Endpoints.ts
var Endpoints = {
  Name: "Endpoints",
  Core: {
    Name: "Core",
    Authentication: {
      Name: "Authentication",
      Post_Authenticate: "endpoints/core/authentication",
      Post_UpdatePassword: "endpoints/core/authentication/updatepassword",
      Post_Impersonate: "endpoints/core/authentication/impersonate",
      Get_AllPermissions: "endpoints/core/authentication/permissions"
    },
    Users: {
      Name: "Users",
      Post_AddUser: "endpoints/core/users",
      Patch_UpdateUser: "endpoints/core/users",
      Get_AllUsers: "endpoints/core/users/users",
      Get_User: "endpoints/core/users",
      Delete_User: "endpoints/core/users"
    }
  }
};

// node_modules/@auth0/angular-jwt/fesm2020/auth0-angular-jwt.mjs
var JWT_OPTIONS = new InjectionToken("JWT_OPTIONS");
var JwtHelperService = class {
  constructor(config = null) {
    this.tokenGetter = config && config.tokenGetter || function() {
    };
  }
  urlBase64Decode(str) {
    let output = str.replace(/-/g, "+").replace(/_/g, "/");
    switch (output.length % 4) {
      case 0: {
        break;
      }
      case 2: {
        output += "==";
        break;
      }
      case 3: {
        output += "=";
        break;
      }
      default: {
        throw new Error("Illegal base64url string!");
      }
    }
    return this.b64DecodeUnicode(output);
  }
  // credits for decoder goes to https://github.com/atk
  b64decode(str) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    let output = "";
    str = String(str).replace(/=+$/, "");
    if (str.length % 4 === 1) {
      throw new Error(`'atob' failed: The string to be decoded is not correctly encoded.`);
    }
    for (
      let bc = 0, bs, buffer, idx = 0;
      // get next character
      buffer = str.charAt(idx++);
      // character found in table? initialize bit storage and add its ascii value;
      ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer, // and if not first of each 4 characters,
      // convert the first 8 bits to one ascii character
      bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0
    ) {
      buffer = chars.indexOf(buffer);
    }
    return output;
  }
  b64DecodeUnicode(str) {
    return decodeURIComponent(Array.prototype.map.call(this.b64decode(str), (c) => {
      return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(""));
  }
  decodeToken(token = this.tokenGetter()) {
    if (token instanceof Promise) {
      return token.then((t) => this._decodeToken(t));
    }
    return this._decodeToken(token);
  }
  _decodeToken(token) {
    if (!token || token === "") {
      return null;
    }
    const parts = token.split(".");
    if (parts.length !== 3) {
      throw new Error(`The inspected token doesn't appear to be a JWT. Check to make sure it has three parts and see https://jwt.io for more.`);
    }
    const decoded = this.urlBase64Decode(parts[1]);
    if (!decoded) {
      throw new Error("Cannot decode the token.");
    }
    return JSON.parse(decoded);
  }
  getTokenExpirationDate(token = this.tokenGetter()) {
    if (token instanceof Promise) {
      return token.then((t) => this._getTokenExpirationDate(t));
    }
    return this._getTokenExpirationDate(token);
  }
  _getTokenExpirationDate(token) {
    let decoded;
    decoded = this.decodeToken(token);
    if (!decoded || !decoded.hasOwnProperty("exp")) {
      return null;
    }
    const date = /* @__PURE__ */ new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }
  isTokenExpired(token = this.tokenGetter(), offsetSeconds) {
    if (token instanceof Promise) {
      return token.then((t) => this._isTokenExpired(t, offsetSeconds));
    }
    return this._isTokenExpired(token, offsetSeconds);
  }
  _isTokenExpired(token, offsetSeconds) {
    if (!token || token === "") {
      return true;
    }
    const date = this.getTokenExpirationDate(token);
    offsetSeconds = offsetSeconds || 0;
    if (date === null) {
      return false;
    }
    return !(date.valueOf() > (/* @__PURE__ */ new Date()).valueOf() + offsetSeconds * 1e3);
  }
  getAuthScheme(authScheme, request) {
    if (typeof authScheme === "function") {
      return authScheme(request);
    }
    return authScheme;
  }
};
JwtHelperService.\u0275fac = function JwtHelperService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || JwtHelperService)(\u0275\u0275inject(JWT_OPTIONS));
};
JwtHelperService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: JwtHelperService,
  factory: JwtHelperService.\u0275fac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JwtHelperService, [{
    type: Injectable
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [JWT_OPTIONS]
      }]
    }];
  }, null);
})();
var fromPromiseOrValue = (input2) => {
  if (input2 instanceof Promise) {
    return defer(() => input2);
  }
  return of(input2);
};
var JwtInterceptor = class {
  constructor(config, jwtHelper, document2) {
    this.jwtHelper = jwtHelper;
    this.document = document2;
    this.standardPorts = ["80", "443"];
    this.tokenGetter = config.tokenGetter;
    this.headerName = config.headerName || "Authorization";
    this.authScheme = config.authScheme || config.authScheme === "" ? config.authScheme : "Bearer ";
    this.allowedDomains = config.allowedDomains || [];
    this.disallowedRoutes = config.disallowedRoutes || [];
    this.throwNoTokenError = config.throwNoTokenError || false;
    this.skipWhenExpired = config.skipWhenExpired;
  }
  isAllowedDomain(request) {
    const requestUrl = new URL(request.url, this.document.location.origin);
    if (requestUrl.host === this.document.location.host) {
      return true;
    }
    const hostName = `${requestUrl.hostname}${requestUrl.port && !this.standardPorts.includes(requestUrl.port) ? ":" + requestUrl.port : ""}`;
    return this.allowedDomains.findIndex((domain) => typeof domain === "string" ? domain === hostName : domain instanceof RegExp ? domain.test(hostName) : false) > -1;
  }
  isDisallowedRoute(request) {
    const requestedUrl = new URL(request.url, this.document.location.origin);
    return this.disallowedRoutes.findIndex((route) => {
      if (typeof route === "string") {
        const parsedRoute = new URL(route, this.document.location.origin);
        return parsedRoute.hostname === requestedUrl.hostname && parsedRoute.pathname === requestedUrl.pathname;
      }
      if (route instanceof RegExp) {
        return route.test(request.url);
      }
      return false;
    }) > -1;
  }
  handleInterception(token, request, next) {
    const authScheme = this.jwtHelper.getAuthScheme(this.authScheme, request);
    if (!token && this.throwNoTokenError) {
      throw new Error("Could not get token from tokenGetter function.");
    }
    let tokenIsExpired = of(false);
    if (this.skipWhenExpired) {
      tokenIsExpired = token ? fromPromiseOrValue(this.jwtHelper.isTokenExpired(token)) : of(true);
    }
    if (token) {
      return tokenIsExpired.pipe(map((isExpired) => isExpired && this.skipWhenExpired ? request.clone() : request.clone({
        setHeaders: {
          [this.headerName]: `${authScheme}${token}`
        }
      })), mergeMap((innerRequest) => next.handle(innerRequest)));
    }
    return next.handle(request);
  }
  intercept(request, next) {
    if (!this.isAllowedDomain(request) || this.isDisallowedRoute(request)) {
      return next.handle(request);
    }
    const token = this.tokenGetter(request);
    return fromPromiseOrValue(token).pipe(mergeMap((asyncToken) => {
      return this.handleInterception(asyncToken, request, next);
    }));
  }
};
JwtInterceptor.\u0275fac = function JwtInterceptor_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || JwtInterceptor)(\u0275\u0275inject(JWT_OPTIONS), \u0275\u0275inject(JwtHelperService), \u0275\u0275inject(DOCUMENT));
};
JwtInterceptor.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: JwtInterceptor,
  factory: JwtInterceptor.\u0275fac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JwtInterceptor, [{
    type: Injectable
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [JWT_OPTIONS]
      }]
    }, {
      type: JwtHelperService
    }, {
      type: Document,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }];
  }, null);
})();
var JwtModule = class _JwtModule {
  constructor(parentModule) {
    if (parentModule) {
      throw new Error(`JwtModule is already loaded. It should only be imported in your application's main module.`);
    }
  }
  static forRoot(options) {
    return {
      ngModule: _JwtModule,
      providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: JwtInterceptor,
        multi: true
      }, options.jwtOptionsProvider || {
        provide: JWT_OPTIONS,
        useValue: options.config
      }, JwtHelperService]
    };
  }
};
JwtModule.\u0275fac = function JwtModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || JwtModule)(\u0275\u0275inject(JwtModule, 12));
};
JwtModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: JwtModule
});
JwtModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JwtModule, [{
    type: NgModule
  }], function() {
    return [{
      type: JwtModule,
      decorators: [{
        type: Optional
      }, {
        type: SkipSelf
      }]
    }];
  }, null);
})();

// node_modules/primeng/fesm2022/primeng-checkbox.mjs
var theme7 = ({
  dt: dt2
}) => `
.p-checkbox {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    width: ${dt2("checkbox.width")};
    height: ${dt2("checkbox.height")};
}

.p-checkbox-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border: 1px solid transparent;
    border-radius: ${dt2("checkbox.border.radius")};
}

.p-checkbox-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${dt2("checkbox.border.radius")};
    border: 1px solid ${dt2("checkbox.border.color")};
    background: ${dt2("checkbox.background")};
    width: ${dt2("checkbox.width")};
    height: ${dt2("checkbox.height")};
    transition: background ${dt2("checkbox.transition.duration")}, color ${dt2("checkbox.transition.duration")}, border-color ${dt2("checkbox.transition.duration")}, box-shadow ${dt2("checkbox.transition.duration")}, outline-color ${dt2("checkbox.transition.duration")};
    outline-color: transparent;
    box-shadow: ${dt2("checkbox.shadow")};
}

.p-checkbox-icon {
    transition-duration: ${dt2("checkbox.transition.duration")};
    color: ${dt2("checkbox.icon.color")};
    font-size: ${dt2("checkbox.icon.size")};
    width: ${dt2("checkbox.icon.size")};
    height: ${dt2("checkbox.icon.size")};
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    border-color: ${dt2("checkbox.hover.border.color")};
}

.p-checkbox-checked .p-checkbox-box {
    border-color: ${dt2("checkbox.checked.border.color")};
    background: ${dt2("checkbox.checked.background")};
}

.p-checkbox-checked .p-checkbox-icon {
    color: ${dt2("checkbox.icon.checked.color")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: ${dt2("checkbox.checked.hover.background")};
    border-color: ${dt2("checkbox.checked.hover.border.color")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
    color: ${dt2("checkbox.icon.checked.hover.color")};
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: ${dt2("checkbox.focus.border.color")};
    box-shadow: ${dt2("checkbox.focus.ring.shadow")};
    outline: ${dt2("checkbox.focus.ring.width")} ${dt2("checkbox.focus.ring.style")} ${dt2("checkbox.focus.ring.color")};
    outline-offset: ${dt2("checkbox.focus.ring.offset")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: ${dt2("checkbox.checked.focus.border.color")};
}

.p-checkbox.ng-invalid.ng-dirty > .p-checkbox-box {
    border-color: ${dt2("checkbox.invalid.border.color")};
}

.p-checkbox.p-variant-filled .p-checkbox-box {
    background: ${dt2("checkbox.filled.background")};
}

.p-checkbox-checked.p-variant-filled .p-checkbox-box {
    background: ${dt2("checkbox.checked.background")};
}

.p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: ${dt2("checkbox.checked.hover.background")};
}

.p-checkbox.p-disabled {
    opacity: 1;
}

.p-checkbox.p-disabled .p-checkbox-box {
    background: ${dt2("checkbox.disabled.background")};
    border-color: ${dt2("checkbox.checked.disabled.border.color")};
}

.p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
    color: ${dt2("checkbox.icon.disabled.color")};
}

.p-checkbox-sm,
.p-checkbox-sm .p-checkbox-box {
    width: ${dt2("checkbox.sm.width")};
    height: ${dt2("checkbox.sm.height")};
}

.p-checkbox-sm .p-checkbox-icon {
    font-size: ${dt2("checkbox.icon.sm.size")};
    width: ${dt2("checkbox.icon.sm.size")};
    height: ${dt2("checkbox.icon.sm.size")};
}

.p-checkbox-lg,
.p-checkbox-lg .p-checkbox-box {
    width: ${dt2("checkbox.lg.width")};
    height: ${dt2("checkbox.lg.height")};
}

.p-checkbox-lg .p-checkbox-icon {
    font-size: ${dt2("checkbox.icon.lg.size")};
    width: ${dt2("checkbox.icon.lg.size")};
    height: ${dt2("checkbox.icon.lg.size")};
}
`;
var classes6 = {
  root: ({
    instance,
    props
  }) => ["p-checkbox p-component", {
    "p-checkbox-checked": instance.checked,
    "p-disabled": props.disabled,
    "p-invalid": props.invalid,
    "p-variant-filled": props.variant ? props.variant === "filled" : instance.config.inputStyle === "filled" || instance.config.inputVariant === "filled"
  }],
  box: "p-checkbox-box",
  input: "p-checkbox-input",
  icon: "p-checkbox-icon"
};
var CheckboxStyle = class _CheckboxStyle extends BaseStyle {
  name = "checkbox";
  theme = theme7;
  classes = classes6;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275CheckboxStyle_BaseFactory;
    return function CheckboxStyle_Factory(__ngFactoryType__) {
      return (\u0275CheckboxStyle_BaseFactory || (\u0275CheckboxStyle_BaseFactory = \u0275\u0275getInheritedFactory(_CheckboxStyle)))(__ngFactoryType__ || _CheckboxStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _CheckboxStyle,
    factory: _CheckboxStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxStyle, [{
    type: Injectable
  }], null, null);
})();
var CheckboxClasses;
(function(CheckboxClasses2) {
  CheckboxClasses2["root"] = "p-checkbox";
  CheckboxClasses2["box"] = "p-checkbox-box";
  CheckboxClasses2["input"] = "p-checkbox-input";
  CheckboxClasses2["icon"] = "p-checkbox-icon";
})(CheckboxClasses || (CheckboxClasses = {}));
var _c05 = ["checkboxicon"];
var _c13 = ["input"];
var _c23 = () => ({
  "p-checkbox-input": true
});
var _c33 = (a0) => ({
  checked: a0,
  class: "p-checkbox-icon"
});
function Checkbox_ng_container_4_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r1.checkboxIcon);
    \u0275\u0275attribute("data-pc-section", "icon");
  }
}
function Checkbox_ng_container_4_ng_container_1_CheckIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "CheckIcon", 9);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-checkbox-icon");
    \u0275\u0275attribute("data-pc-section", "icon");
  }
}
function Checkbox_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Checkbox_ng_container_4_ng_container_1_span_1_Template, 1, 2, "span", 7)(2, Checkbox_ng_container_4_ng_container_1_CheckIcon_2_Template, 1, 2, "CheckIcon", 6);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.checkboxIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.checkboxIcon);
  }
}
function Checkbox_ng_container_4_MinusIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "MinusIcon", 9);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-checkbox-icon");
    \u0275\u0275attribute("data-pc-section", "icon");
  }
}
function Checkbox_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Checkbox_ng_container_4_ng_container_1_Template, 3, 2, "ng-container", 4)(2, Checkbox_ng_container_4_MinusIcon_2_Template, 1, 2, "MinusIcon", 6);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.checked);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1._indeterminate());
  }
}
function Checkbox_5_ng_template_0_Template(rf, ctx) {
}
function Checkbox_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Checkbox_5_ng_template_0_Template, 0, 0, "ng-template");
  }
}
var CHECKBOX_VALUE_ACCESSOR2 = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => Checkbox),
  multi: true
};
var Checkbox = class _Checkbox extends BaseComponent {
  /**
   * Value of the checkbox.
   * @group Props
   */
  value;
  /**
   * Name of the checkbox group.
   * @group Props
   */
  name;
  /**
   * When present, it specifies that the element should be disabled.
   * @group Props
   */
  disabled;
  /**
   * Allows to select a boolean value instead of multiple values.
   * @group Props
   */
  binary;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Used to define a string that labels the input element.
   * @group Props
   */
  ariaLabel;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex;
  /**
   * Identifier of the focus input to match a label defined for the component.
   * @group Props
   */
  inputId;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Inline style of the input element.
   * @group Props
   */
  inputStyle;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Style class of the input element.
   * @group Props
   */
  inputClass;
  /**
   * When present, it specifies input state as indeterminate.
   * @group Props
   */
  indeterminate = false;
  /**
   * Defines the size of the component.
   * @group Props
   */
  size;
  /**
   * Form control value.
   * @group Props
   */
  formControl;
  /**
   * Icon class of the checkbox icon.
   * @group Props
   */
  checkboxIcon;
  /**
   * When present, it specifies that the component cannot be edited.
   * @group Props
   */
  readonly;
  /**
   * When present, it specifies that checkbox must be checked before submitting the form.
   * @group Props
   */
  required;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Value in checked state.
   * @group Props
   */
  trueValue = true;
  /**
   * Value in unchecked state.
   * @group Props
   */
  falseValue = false;
  /**
   * Specifies the input variant of the component.
   * @group Props
   */
  variant = "outlined";
  /**
   * Callback to invoke on value change.
   * @param {CheckboxChangeEvent} event - Custom value change event.
   * @group Emits
   */
  onChange = new EventEmitter();
  /**
   * Callback to invoke when the receives focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to invoke when the loses focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  inputViewChild;
  get checked() {
    return this._indeterminate() ? false : this.binary ? this.model === this.trueValue : contains(this.value, this.model);
  }
  get containerClass() {
    return {
      "p-checkbox p-component": true,
      "p-checkbox-checked p-highlight": this.checked,
      "p-disabled": this.disabled,
      "p-variant-filled": this.variant === "filled" || this.config.inputStyle() === "filled" || this.config.inputVariant() === "filled",
      "p-checkbox-sm p-inputfield-sm": this.size === "small",
      "p-checkbox-lg p-inputfield-lg": this.size === "large"
    };
  }
  _indeterminate = signal(void 0);
  /**
   * The template of the checkbox icon.
   * @group Templates
   */
  checkboxIconTemplate;
  templates;
  _checkboxIconTemplate;
  model;
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  focused = false;
  _componentStyle = inject(CheckboxStyle);
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "icon":
          this._checkboxIconTemplate = item.template;
          break;
        case "checkboxicon":
          this._checkboxIconTemplate = item.template;
          break;
      }
    });
  }
  ngOnChanges(changes) {
    super.ngOnChanges(changes);
    if (changes.indeterminate) {
      this._indeterminate.set(changes.indeterminate.currentValue);
    }
  }
  updateModel(event) {
    let newModelValue;
    const selfControl = this.injector.get(NgControl, null, {
      optional: true,
      self: true
    });
    const currentModelValue = selfControl && !this.formControl ? selfControl.value : this.model;
    if (!this.binary) {
      if (this.checked || this._indeterminate()) newModelValue = currentModelValue.filter((val) => !equals(val, this.value));
      else newModelValue = currentModelValue ? [...currentModelValue, this.value] : [this.value];
      this.onModelChange(newModelValue);
      this.model = newModelValue;
      if (this.formControl) {
        this.formControl.setValue(newModelValue);
      }
    } else {
      newModelValue = this._indeterminate() ? this.trueValue : this.checked ? this.falseValue : this.trueValue;
      this.model = newModelValue;
      this.onModelChange(newModelValue);
    }
    if (this._indeterminate()) {
      this._indeterminate.set(false);
    }
    this.onChange.emit({
      checked: newModelValue,
      originalEvent: event
    });
  }
  handleChange(event) {
    if (!this.readonly) {
      this.updateModel(event);
    }
  }
  onInputFocus(event) {
    this.focused = true;
    this.onFocus.emit(event);
  }
  onInputBlur(event) {
    this.focused = false;
    this.onBlur.emit(event);
    this.onModelTouched();
  }
  focus() {
    this.inputViewChild.nativeElement.focus();
  }
  writeValue(model) {
    this.model = model;
    this.cd.markForCheck();
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  setDisabledState(val) {
    setTimeout(() => {
      this.disabled = val;
      this.cd.markForCheck();
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Checkbox_BaseFactory;
    return function Checkbox_Factory(__ngFactoryType__) {
      return (\u0275Checkbox_BaseFactory || (\u0275Checkbox_BaseFactory = \u0275\u0275getInheritedFactory(_Checkbox)))(__ngFactoryType__ || _Checkbox);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Checkbox,
    selectors: [["p-checkbox"], ["p-checkBox"], ["p-check-box"]],
    contentQueries: function Checkbox_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c05, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.checkboxIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Checkbox_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c13, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.inputViewChild = _t.first);
      }
    },
    inputs: {
      value: "value",
      name: "name",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      binary: [2, "binary", "binary", booleanAttribute],
      ariaLabelledBy: "ariaLabelledBy",
      ariaLabel: "ariaLabel",
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      inputId: "inputId",
      style: "style",
      inputStyle: "inputStyle",
      styleClass: "styleClass",
      inputClass: "inputClass",
      indeterminate: [2, "indeterminate", "indeterminate", booleanAttribute],
      size: "size",
      formControl: "formControl",
      checkboxIcon: "checkboxIcon",
      readonly: [2, "readonly", "readonly", booleanAttribute],
      required: [2, "required", "required", booleanAttribute],
      autofocus: [2, "autofocus", "autofocus", booleanAttribute],
      trueValue: "trueValue",
      falseValue: "falseValue",
      variant: "variant"
    },
    outputs: {
      onChange: "onChange",
      onFocus: "onFocus",
      onBlur: "onBlur"
    },
    features: [\u0275\u0275ProvidersFeature([CHECKBOX_VALUE_ACCESSOR2, CheckboxStyle]), \u0275\u0275InputTransformsFeature, \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature],
    decls: 6,
    vars: 29,
    consts: [["input", ""], [3, "ngClass"], ["type", "checkbox", 3, "focus", "blur", "change", "value", "checked", "disabled", "readonly", "ngClass"], [1, "p-checkbox-box"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "styleClass", 4, "ngIf"], ["class", "p-checkbox-icon", 3, "ngClass", 4, "ngIf"], [1, "p-checkbox-icon", 3, "ngClass"], [3, "styleClass"]],
    template: function Checkbox_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "input", 2, 0);
        \u0275\u0275listener("focus", function Checkbox_Template_input_focus_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onInputFocus($event));
        })("blur", function Checkbox_Template_input_blur_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onInputBlur($event));
        })("change", function Checkbox_Template_input_change_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.handleChange($event));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 3);
        \u0275\u0275template(4, Checkbox_ng_container_4_Template, 3, 2, "ng-container", 4)(5, Checkbox_5_Template, 1, 0, null, 5);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275styleMap(ctx.style);
        \u0275\u0275classMap(ctx.styleClass);
        \u0275\u0275property("ngClass", ctx.containerClass);
        \u0275\u0275attribute("data-p-highlight", ctx.checked)("data-p-checked", ctx.checked)("data-p-disabled", ctx.disabled);
        \u0275\u0275advance();
        \u0275\u0275styleMap(ctx.inputStyle);
        \u0275\u0275classMap(ctx.inputClass);
        \u0275\u0275property("value", ctx.value)("checked", ctx.checked)("disabled", ctx.disabled)("readonly", ctx.readonly)("ngClass", \u0275\u0275pureFunction0(26, _c23));
        \u0275\u0275attribute("id", ctx.inputId)("name", ctx.name)("tabindex", ctx.tabindex)("required", ctx.required)("aria-labelledby", ctx.ariaLabelledBy)("aria-label", ctx.ariaLabel);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", !ctx.checkboxIconTemplate && !ctx._checkboxIconTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngTemplateOutlet", ctx.checkboxIconTemplate || ctx._checkboxIconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(27, _c33, ctx.checked));
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, CheckIcon, MinusIcon, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Checkbox, [{
    type: Component,
    args: [{
      selector: "p-checkbox, p-checkBox, p-check-box",
      standalone: true,
      imports: [CommonModule, CheckIcon, MinusIcon, SharedModule],
      template: `
        <div [style]="style" [class]="styleClass" [ngClass]="containerClass" [attr.data-p-highlight]="checked" [attr.data-p-checked]="checked" [attr.data-p-disabled]="disabled">
            <input
                #input
                [attr.id]="inputId"
                type="checkbox"
                [value]="value"
                [attr.name]="name"
                [checked]="checked"
                [attr.tabindex]="tabindex"
                [disabled]="disabled"
                [readonly]="readonly"
                [attr.required]="required"
                [attr.aria-labelledby]="ariaLabelledBy"
                [attr.aria-label]="ariaLabel"
                [style]="inputStyle"
                [class]="inputClass"
                [ngClass]="{ 'p-checkbox-input': true }"
                (focus)="onInputFocus($event)"
                (blur)="onInputBlur($event)"
                (change)="handleChange($event)"
            />
            <div class="p-checkbox-box">
                <ng-container *ngIf="!checkboxIconTemplate && !_checkboxIconTemplate">
                    <ng-container *ngIf="checked">
                        <span *ngIf="checkboxIcon" class="p-checkbox-icon" [ngClass]="checkboxIcon" [attr.data-pc-section]="'icon'"></span>
                        <CheckIcon *ngIf="!checkboxIcon" [styleClass]="'p-checkbox-icon'" [attr.data-pc-section]="'icon'" />
                    </ng-container>
                    <MinusIcon *ngIf="_indeterminate()" [styleClass]="'p-checkbox-icon'" [attr.data-pc-section]="'icon'" />
                </ng-container>
                <ng-template *ngTemplateOutlet="checkboxIconTemplate || _checkboxIconTemplate; context: { checked: checked, class: 'p-checkbox-icon' }"></ng-template>
            </div>
        </div>
    `,
      providers: [CHECKBOX_VALUE_ACCESSOR2, CheckboxStyle],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None
    }]
  }], null, {
    value: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    binary: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    inputId: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    inputStyle: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    inputClass: [{
      type: Input
    }],
    indeterminate: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    size: [{
      type: Input
    }],
    formControl: [{
      type: Input
    }],
    checkboxIcon: [{
      type: Input
    }],
    readonly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    trueValue: [{
      type: Input
    }],
    falseValue: [{
      type: Input
    }],
    variant: [{
      type: Input
    }],
    onChange: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    inputViewChild: [{
      type: ViewChild,
      args: ["input"]
    }],
    checkboxIconTemplate: [{
      type: ContentChild,
      args: ["checkboxicon", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Checkbox, {
    className: "Checkbox",
    filePath: "checkbox.ts",
    lineNumber: 84
  });
})();
var CheckboxModule = class _CheckboxModule {
  static \u0275fac = function CheckboxModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CheckboxModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _CheckboxModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Checkbox, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxModule, [{
    type: NgModule,
    args: [{
      imports: [Checkbox, SharedModule],
      exports: [Checkbox, SharedModule]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-tag.mjs
var theme8 = ({
  dt: dt2
}) => `
.p-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${dt2("tag.primary.background")};
    color: ${dt2("tag.primary.color")};
    font-size: ${dt2("tag.font.size")};
    font-weight: ${dt2("tag.font.weight")};
    padding: ${dt2("tag.padding")};
    border-radius: ${dt2("tag.border.radius")};
    gap: ${dt2("tag.gap")};
}

.p-tag-icon {
    font-size: ${dt2("tag.icon.size")};
    width: ${dt2("tag.icon.size")};
    height:${dt2("tag.icon.size")};
}

.p-tag-rounded {
    border-radius: ${dt2("tag.rounded.border.radius")};
}

.p-tag-success {
    background: ${dt2("tag.success.background")};
    color: ${dt2("tag.success.color")};
}

.p-tag-info {
    background: ${dt2("tag.info.background")};
    color: ${dt2("tag.info.color")};
}

.p-tag-warn {
    background: ${dt2("tag.warn.background")};
    color: ${dt2("tag.warn.color")};
}

.p-tag-danger {
    background: ${dt2("tag.danger.background")};
    color: ${dt2("tag.danger.color")};
}

.p-tag-secondary {
    background: ${dt2("tag.secondary.background")};
    color: ${dt2("tag.secondary.color")};
}

.p-tag-contrast {
    background: ${dt2("tag.contrast.background")};
    color: ${dt2("tag.contrast.color")};
}
`;
var classes7 = {
  root: ({
    props
  }) => ["p-tag p-component", {
    "p-tag-info": props.severity === "info",
    "p-tag-success": props.severity === "success",
    "p-tag-warn": props.severity === "warn",
    "p-tag-danger": props.severity === "danger",
    "p-tag-secondary": props.severity === "secondary",
    "p-tag-contrast": props.severity === "contrast",
    "p-tag-rounded": props.rounded
  }],
  icon: "p-tag-icon",
  label: "p-tag-label"
};
var TagStyle = class _TagStyle extends BaseStyle {
  name = "tag";
  theme = theme8;
  classes = classes7;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TagStyle_BaseFactory;
    return function TagStyle_Factory(__ngFactoryType__) {
      return (\u0275TagStyle_BaseFactory || (\u0275TagStyle_BaseFactory = \u0275\u0275getInheritedFactory(_TagStyle)))(__ngFactoryType__ || _TagStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TagStyle,
    factory: _TagStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TagStyle, [{
    type: Injectable
  }], null, null);
})();
var TagClasses;
(function(TagClasses2) {
  TagClasses2["root"] = "p-tag";
  TagClasses2["icon"] = "p-tag-icon";
  TagClasses2["label"] = "p-tag-label";
})(TagClasses || (TagClasses = {}));
var _c06 = ["icon"];
var _c14 = ["*"];
function Tag_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r0.icon);
  }
}
function Tag_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Tag_ng_container_1_span_1_Template, 1, 1, "span", 3);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.icon);
  }
}
function Tag_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Tag_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Tag_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Tag_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275template(1, Tag_span_2_1_Template, 1, 0, null, 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.iconTemplate || ctx_r0._iconTemplate);
  }
}
var Tag = class _Tag extends BaseComponent {
  /**
   * Inline style of the component.
   * @group Props
   */
  get style() {
    return this._style;
  }
  set style(value) {
    this._style = value;
    this.cd.markForCheck();
  }
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Severity type of the tag.
   * @group Props
   */
  severity;
  /**
   * Value to display inside the tag.
   * @group Props
   */
  value;
  /**
   * Icon of the tag to display next to the value.
   * @group Props
   */
  icon;
  /**
   * Whether the corners of the tag are rounded.
   * @group Props
   */
  rounded;
  iconTemplate;
  templates;
  _iconTemplate;
  _style;
  _componentStyle = inject(TagStyle);
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "icon":
          this._iconTemplate = item.template;
          break;
      }
    });
  }
  containerClass() {
    let classes11 = "p-tag p-component";
    if (this.severity) {
      classes11 += ` p-tag-${this.severity}`;
    }
    if (this.rounded) {
      classes11 += " p-tag-rounded";
    }
    if (this.styleClass) {
      classes11 += ` ${this.styleClass}`;
    }
    return classes11;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Tag_BaseFactory;
    return function Tag_Factory(__ngFactoryType__) {
      return (\u0275Tag_BaseFactory || (\u0275Tag_BaseFactory = \u0275\u0275getInheritedFactory(_Tag)))(__ngFactoryType__ || _Tag);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Tag,
    selectors: [["p-tag"]],
    contentQueries: function Tag_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c06, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.iconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostVars: 4,
    hostBindings: function Tag_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275styleMap(ctx.style);
        \u0275\u0275classMap(ctx.containerClass());
      }
    },
    inputs: {
      style: "style",
      styleClass: "styleClass",
      severity: "severity",
      value: "value",
      icon: "icon",
      rounded: [2, "rounded", "rounded", booleanAttribute]
    },
    features: [\u0275\u0275ProvidersFeature([TagStyle]), \u0275\u0275InputTransformsFeature, \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c14,
    decls: 5,
    vars: 3,
    consts: [[4, "ngIf"], ["class", "p-tag-icon", 4, "ngIf"], [1, "p-tag-label"], ["class", "p-tag-icon", 3, "ngClass", 4, "ngIf"], [1, "p-tag-icon", 3, "ngClass"], [1, "p-tag-icon"], [4, "ngTemplateOutlet"]],
    template: function Tag_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
        \u0275\u0275template(1, Tag_ng_container_1_Template, 2, 1, "ng-container", 0)(2, Tag_span_2_Template, 2, 1, "span", 1);
        \u0275\u0275elementStart(3, "span", 2);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.iconTemplate && !ctx._iconTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.iconTemplate || ctx._iconTemplate);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.value);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Tag, [{
    type: Component,
    args: [{
      selector: "p-tag",
      standalone: true,
      imports: [CommonModule, SharedModule],
      template: `
        <ng-content></ng-content>
        <ng-container *ngIf="!iconTemplate && !_iconTemplate">
            <span class="p-tag-icon" [ngClass]="icon" *ngIf="icon"></span>
        </ng-container>
        <span class="p-tag-icon" *ngIf="iconTemplate || _iconTemplate">
            <ng-template *ngTemplateOutlet="iconTemplate || _iconTemplate"></ng-template>
        </span>
        <span class="p-tag-label">{{ value }}</span>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [TagStyle],
      host: {
        "[class]": "containerClass()",
        "[style]": "style"
      }
    }]
  }], null, {
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    severity: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    rounded: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    iconTemplate: [{
      type: ContentChild,
      args: ["icon", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Tag, {
    className: "Tag",
    filePath: "tag.ts",
    lineNumber: 33
  });
})();
var TagModule = class _TagModule {
  static \u0275fac = function TagModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TagModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _TagModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Tag, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TagModule, [{
    type: NgModule,
    args: [{
      imports: [Tag, SharedModule],
      exports: [Tag, SharedModule]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-togglebutton.mjs
var theme9 = ({
  dt: dt2
}) => `
.p-togglebutton {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${dt2("togglebutton.color")};
    background: ${dt2("togglebutton.background")};
    border: 1px solid ${dt2("togglebutton.border.color")};
    padding: ${dt2("togglebutton.padding")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${dt2("togglebutton.transition.duration")}, color ${dt2("togglebutton.transition.duration")}, border-color ${dt2("togglebutton.transition.duration")},
        outline-color ${dt2("togglebutton.transition.duration")}, box-shadow ${dt2("togglebutton.transition.duration")};
    border-radius: ${dt2("togglebutton.border.radius")};
    outline-color: transparent;
    font-weight: ${dt2("togglebutton.font.weight")};
}

.p-togglebutton-content {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: ${dt2("togglebutton.gap")};
}

.p-togglebutton-label,
.p-togglebutton-icon {
    position: relative;
    transition: none;
}

.p-togglebutton::before {
    content: "";
    background: transparent;
    transition: background ${dt2("togglebutton.transition.duration")}, color ${dt2("togglebutton.transition.duration")}, border-color ${dt2("togglebutton.transition.duration")},
            outline-color ${dt2("togglebutton.transition.duration")}, box-shadow ${dt2("togglebutton.transition.duration")};
    position: absolute;
    inset-inline-start: ${dt2("togglebutton.content.left")};
    top: ${dt2("togglebutton.content.top")};
    width: calc(100% - calc(2 *  ${dt2("togglebutton.content.left")}));
    height: calc(100% - calc(2 *  ${dt2("togglebutton.content.top")}));
    border-radius: ${dt2("togglebutton.border.radius")};
}

.p-togglebutton.p-togglebutton-checked::before {
    background: ${dt2("togglebutton.content.checked.background")};
    box-shadow: ${dt2("togglebutton.content.checked.shadow")};
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
    background: ${dt2("togglebutton.hover.background")};
    color: ${dt2("togglebutton.hover.color")};
}

.p-togglebutton.p-togglebutton-checked {
    background: ${dt2("togglebutton.checked.background")};
    border-color: ${dt2("togglebutton.checked.border.color")};
    color: ${dt2("togglebutton.checked.color")};
}

.p-togglebutton:focus-visible {
    box-shadow: ${dt2("togglebutton.focus.ring.shadow")};
    outline: ${dt2("togglebutton.focus.ring.width")} ${dt2("togglebutton.focus.ring.style")} ${dt2("togglebutton.focus.ring.color")};
    outline-offset: ${dt2("togglebutton.focus.ring.offset")};
}

.p-togglebutton.p-invalid {
    border-color: ${dt2("togglebutton.invalid.border.color")};
}

.p-togglebutton:disabled {
    opacity: 1;
    cursor: default;
    background: ${dt2("togglebutton.disabled.background")};
    border-color: ${dt2("togglebutton.disabled.border.color")};
    color: ${dt2("togglebutton.disabled.color")};
}

.p-togglebutton-icon {
    color: ${dt2("togglebutton.icon.color")};
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
    color: ${dt2("togglebutton.icon.hover.color")};
}

.p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
    color: ${dt2("togglebutton.icon.checked.color")};
}

.p-togglebutton:disabled .p-togglebutton-icon {
    color: ${dt2("togglebutton.icon.disabled.color")};
}

.p-togglebutton-sm {
    padding: ${dt2("togglebutton.sm.padding")};
    font-size: ${dt2("togglebutton.sm.font.size")};
}

.p-togglebutton-lg {
    padding: ${dt2("togglebutton.lg.padding")};
    font-size: ${dt2("togglebutton.lg.font.size")};
}

/* For PrimeNG (iconPos) */

.p-togglebutton-icon-right {
    order: 1;
}

p-togglebutton.ng-invalid.ng-dirty > .p-togglebutton {
    border-color: ${dt2("togglebutton.invalid.border.color")};
}
`;
var classes8 = {
  root: ({
    instance
  }) => ({
    "p-togglebutton p-component": true,
    "p-togglebutton-checked": instance.checked,
    "p-disabled": instance.disabled,
    "p-togglebutton-sm p-inputfield-sm": instance.size === "small",
    "p-togglebutton-lg p-inputfield-lg": instance.size === "large"
  }),
  content: "p-togglebutton-content",
  icon: "p-togglebutton-icon",
  label: "p-togglebutton-label"
};
var ToggleButtonStyle = class _ToggleButtonStyle extends BaseStyle {
  name = "togglebutton";
  theme = theme9;
  classes = classes8;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ToggleButtonStyle_BaseFactory;
    return function ToggleButtonStyle_Factory(__ngFactoryType__) {
      return (\u0275ToggleButtonStyle_BaseFactory || (\u0275ToggleButtonStyle_BaseFactory = \u0275\u0275getInheritedFactory(_ToggleButtonStyle)))(__ngFactoryType__ || _ToggleButtonStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ToggleButtonStyle,
    factory: _ToggleButtonStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleButtonStyle, [{
    type: Injectable
  }], null, null);
})();
var ToggleButtonClasses;
(function(ToggleButtonClasses2) {
  ToggleButtonClasses2["root"] = "p-togglebutton";
  ToggleButtonClasses2["icon"] = "p-togglebutton-icon";
  ToggleButtonClasses2["label"] = "p-togglebutton-label";
})(ToggleButtonClasses || (ToggleButtonClasses = {}));
var _c07 = ["icon"];
var _c15 = ["content"];
var _c24 = (a0) => ({
  $implicit: a0
});
var _c34 = (a0, a1) => ({
  "p-togglebutton-icon": true,
  "p-togglebutton-icon-left": a0,
  "p-togglebutton-icon-right": a1
});
function ToggleButton_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ToggleButton_Conditional_3_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r0.checked ? ctx_r0.onIcon : ctx_r0.offIcon);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(4, _c34, ctx_r0.iconPos === "left", ctx_r0.iconPos === "right"));
    \u0275\u0275attribute("data-pc-section", "icon");
  }
}
function ToggleButton_Conditional_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ToggleButton_Conditional_3_Conditional_0_Conditional_0_Template, 1, 7, "span", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.onIcon || ctx_r0.offIcon ? 0 : -1);
  }
}
function ToggleButton_Conditional_3_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ToggleButton_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ToggleButton_Conditional_3_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.iconTemplate || ctx_r0._iconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c24, ctx_r0.checked));
  }
}
function ToggleButton_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ToggleButton_Conditional_3_Conditional_0_Template, 1, 1)(1, ToggleButton_Conditional_3_Conditional_1_Template, 1, 4, "ng-container");
    \u0275\u0275elementStart(2, "span", 1);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!ctx_r0.iconTemplate ? 0 : 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.cx("label"));
    \u0275\u0275attribute("data-pc-section", "label");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.checked ? ctx_r0.hasOnLabel ? ctx_r0.onLabel : "\xA0" : ctx_r0.hasOffLabel ? ctx_r0.offLabel : "\xA0");
  }
}
var TOGGLEBUTTON_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ToggleButton),
  multi: true
};
var ToggleButton = class _ToggleButton extends BaseComponent {
  /**
   * Label for the on state.
   * @group Props
   */
  onLabel = "Yes";
  /**
   * Label for the off state.
   * @group Props
   */
  offLabel = "No";
  /**
   * Icon for the on state.
   * @group Props
   */
  onIcon;
  /**
   * Icon for the off state.
   * @group Props
   */
  offIcon;
  /**
   * Defines a string that labels the input for accessibility.
   * @group Props
   */
  ariaLabel;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * When present, it specifies that the element should be disabled.
   * @group Props
   */
  disabled;
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Style class of the element.
   * @group Props
   */
  styleClass;
  get hostClass() {
    return this.styleClass || "";
  }
  /**
   * Identifier of the focus input to match a label defined for the component.
   * @group Props
   */
  inputId;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = 0;
  /**
   * Defines the size of the component.
   * @group Props
   */
  size;
  /**
   * Position of the icon.
   * @group Props
   */
  iconPos = "left";
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Whether selection can not be cleared.
   * @group Props
   */
  allowEmpty;
  /**
   * Callback to invoke on value change.
   * @param {ToggleButtonChangeEvent} event - Custom change event.
   * @group Emits
   */
  onChange = new EventEmitter();
  /**
   * Custom icon template.
   * @group Templates
   */
  iconTemplate;
  /**
   * Custom content template.
   * @group Templates
   */
  contentTemplate;
  templates;
  checked = false;
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  _componentStyle = inject(ToggleButtonStyle);
  toggle(event) {
    if (!this.disabled && !(this.allowEmpty === false && this.checked)) {
      this.checked = !this.checked;
      this.onModelChange(this.checked);
      this.onModelTouched();
      this.onChange.emit({
        originalEvent: event,
        checked: this.checked
      });
      this.cd.markForCheck();
    }
  }
  onKeyDown(event) {
    switch (event.code) {
      case "Enter":
        this.toggle(event);
        event.preventDefault();
        break;
      case "Space":
        this.toggle(event);
        event.preventDefault();
        break;
    }
  }
  onBlur() {
    this.onModelTouched();
  }
  writeValue(value) {
    this.checked = value;
    this.cd.markForCheck();
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  setDisabledState(val) {
    this.disabled = val;
    this.cd.markForCheck();
  }
  get hasOnLabel() {
    return this.onLabel && this.onLabel.length > 0;
  }
  get hasOffLabel() {
    return this.onLabel && this.onLabel.length > 0;
  }
  get active() {
    return this.checked === true;
  }
  _iconTemplate;
  _contentTemplate;
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "icon":
          this._iconTemplate = item.template;
          break;
        case "content":
          this._contentTemplate = item.template;
          break;
        default:
          this._contentTemplate = item.template;
          break;
      }
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ToggleButton_BaseFactory;
    return function ToggleButton_Factory(__ngFactoryType__) {
      return (\u0275ToggleButton_BaseFactory || (\u0275ToggleButton_BaseFactory = \u0275\u0275getInheritedFactory(_ToggleButton)))(__ngFactoryType__ || _ToggleButton);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ToggleButton,
    selectors: [["p-toggleButton"], ["p-togglebutton"], ["p-toggle-button"]],
    contentQueries: function ToggleButton_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c07, 4);
        \u0275\u0275contentQuery(dirIndex, _c15, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.iconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostVars: 2,
    hostBindings: function ToggleButton_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.hostClass);
      }
    },
    inputs: {
      onLabel: "onLabel",
      offLabel: "offLabel",
      onIcon: "onIcon",
      offIcon: "offIcon",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      style: "style",
      styleClass: "styleClass",
      inputId: "inputId",
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      size: "size",
      iconPos: "iconPos",
      autofocus: [2, "autofocus", "autofocus", booleanAttribute],
      allowEmpty: "allowEmpty"
    },
    outputs: {
      onChange: "onChange"
    },
    features: [\u0275\u0275ProvidersFeature([TOGGLEBUTTON_VALUE_ACCESSOR, ToggleButtonStyle]), \u0275\u0275InputTransformsFeature, \u0275\u0275InheritDefinitionFeature],
    decls: 4,
    vars: 15,
    consts: [["pRipple", "", "type", "button", 3, "click", "ngClass", "tabindex", "disabled"], [3, "ngClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "class", "ngClass"]],
    template: function ToggleButton_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "button", 0);
        \u0275\u0275listener("click", function ToggleButton_Template_button_click_0_listener($event) {
          return ctx.toggle($event);
        });
        \u0275\u0275elementStart(1, "span", 1);
        \u0275\u0275template(2, ToggleButton_ng_container_2_Template, 1, 0, "ng-container", 2)(3, ToggleButton_Conditional_3_Template, 4, 4);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.styleClass);
        \u0275\u0275property("ngClass", ctx.cx("root"))("tabindex", ctx.tabindex)("disabled", ctx.disabled);
        \u0275\u0275attribute("aria-labelledby", ctx.ariaLabelledBy)("aria-pressed", ctx.checked)("data-p-checked", ctx.active)("data-p-disabled", ctx.disabled);
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", ctx.cx("content"));
        \u0275\u0275advance();
        \u0275\u0275property("ngTemplateOutlet", ctx.contentTemplate || ctx._contentTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(13, _c24, ctx.checked));
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.contentTemplate ? 3 : -1);
      }
    },
    dependencies: [Ripple, CommonModule, NgClass, NgTemplateOutlet, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleButton, [{
    type: Component,
    args: [{
      selector: "p-toggleButton, p-togglebutton, p-toggle-button",
      standalone: true,
      imports: [Ripple, CommonModule, SharedModule],
      template: `
        <button
            pRipple
            type="button"
            [ngClass]="cx('root')"
            [class]="styleClass"
            [tabindex]="tabindex"
            [disabled]="disabled"
            (click)="toggle($event)"
            [attr.aria-labelledby]="ariaLabelledBy"
            [attr.aria-pressed]="checked"
            [attr.data-p-checked]="active"
            [attr.data-p-disabled]="disabled"
        >
            <span [ngClass]="cx('content')">
                <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate; context: { $implicit: checked }"></ng-container>
                @if (!contentTemplate) {
                    @if (!iconTemplate) {
                        @if (onIcon || offIcon) {
                            <span
                                [class]="checked ? this.onIcon : this.offIcon"
                                [ngClass]="{
                                    'p-togglebutton-icon': true,
                                    'p-togglebutton-icon-left': iconPos === 'left',
                                    'p-togglebutton-icon-right': iconPos === 'right'
                                }"
                                [attr.data-pc-section]="'icon'"
                            ></span>
                        }
                    } @else {
                        <ng-container *ngTemplateOutlet="iconTemplate || _iconTemplate; context: { $implicit: checked }"></ng-container>
                    }
                    <span [ngClass]="cx('label')" [attr.data-pc-section]="'label'">{{ checked ? (hasOnLabel ? onLabel : '\xA0') : hasOffLabel ? offLabel : '\xA0' }}</span>
                }
            </span>
        </button>
    `,
      providers: [TOGGLEBUTTON_VALUE_ACCESSOR, ToggleButtonStyle],
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    onLabel: [{
      type: Input
    }],
    offLabel: [{
      type: Input
    }],
    onIcon: [{
      type: Input
    }],
    offIcon: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    hostClass: [{
      type: HostBinding,
      args: ["class"]
    }],
    inputId: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    size: [{
      type: Input
    }],
    iconPos: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    allowEmpty: [{
      type: Input
    }],
    onChange: [{
      type: Output
    }],
    iconTemplate: [{
      type: ContentChild,
      args: ["icon", {
        descendants: false
      }]
    }],
    contentTemplate: [{
      type: ContentChild,
      args: ["content", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ToggleButton, {
    className: "ToggleButton",
    filePath: "togglebutton.ts",
    lineNumber: 64
  });
})();
var ToggleButtonModule = class _ToggleButtonModule {
  static \u0275fac = function ToggleButtonModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToggleButtonModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ToggleButtonModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [ToggleButton, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleButtonModule, [{
    type: NgModule,
    args: [{
      imports: [ToggleButton, SharedModule],
      exports: [ToggleButton, SharedModule]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-selectbutton.mjs
var theme10 = ({
  dt: dt2
}) => `
.p-selectbutton {
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    outline-color: transparent;
    border-radius: ${dt2("selectbutton.border.radius")};
}

.p-selectbutton .p-togglebutton {
    border-radius: 0;
    border-width: 1px 1px 1px 0;
}

.p-selectbutton .p-togglebutton:focus-visible {
    position: relative;
    z-index: 1;
}

.p-selectbutton p-togglebutton:first-child .p-togglebutton {
    border-left-width: 1px;
    border-start-start-radius: ${dt2("selectbutton.border.radius")};
    border-end-start-radius: ${dt2("selectbutton.border.radius")};
}

.p-selectbutton p-togglebutton:last-child .p-togglebutton{
    border-start-end-radius: ${dt2("selectbutton.border.radius")};
    border-end-end-radius: ${dt2("selectbutton.border.radius")};
}

.p-selectbutton.ng-invalid.ng-dirty {
    outline: 1px solid ${dt2("selectbutton.invalid.border.color")};
    outline-offset: 0;
}
`;
var classes9 = {
  root: ({
    props
  }) => ["p-selectbutton p-component", {
    "p-invalid": props.invalid
  }]
};
var SelectButtonStyle = class _SelectButtonStyle extends BaseStyle {
  name = "selectbutton";
  theme = theme10;
  classes = classes9;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SelectButtonStyle_BaseFactory;
    return function SelectButtonStyle_Factory(__ngFactoryType__) {
      return (\u0275SelectButtonStyle_BaseFactory || (\u0275SelectButtonStyle_BaseFactory = \u0275\u0275getInheritedFactory(_SelectButtonStyle)))(__ngFactoryType__ || _SelectButtonStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _SelectButtonStyle,
    factory: _SelectButtonStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectButtonStyle, [{
    type: Injectable
  }], null, null);
})();
var SelectButtonClasses;
(function(SelectButtonClasses2) {
  SelectButtonClasses2["root"] = "p-selectbutton";
})(SelectButtonClasses || (SelectButtonClasses = {}));
var _c08 = ["item"];
var _c16 = (a0, a1) => ({
  $implicit: a0,
  index: a1
});
function SelectButton_For_1_Conditional_1_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function SelectButton_For_1_Conditional_1_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SelectButton_For_1_Conditional_1_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 3);
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    const option_r3 = ctx_r5.$implicit;
    const \u0275$index_1_r4 = ctx_r5.$index;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r4.itemTemplate || ctx_r4._itemTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c16, option_r3, \u0275$index_1_r4));
  }
}
function SelectButton_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SelectButton_For_1_Conditional_1_ng_template_0_Template, 1, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
}
function SelectButton_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-toggleButton", 2);
    \u0275\u0275listener("onChange", function SelectButton_For_1_Template_p_toggleButton_onChange_0_listener($event) {
      const ctx_r1 = \u0275\u0275restoreView(_r1);
      const option_r3 = ctx_r1.$implicit;
      const \u0275$index_1_r4 = ctx_r1.$index;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onOptionSelect($event, option_r3, \u0275$index_1_r4));
    });
    \u0275\u0275template(1, SelectButton_For_1_Conditional_1_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275property("autofocus", ctx_r4.autofocus)("styleClass", ctx_r4.styleClass)("ngModel", ctx_r4.isSelected(option_r3))("onLabel", ctx_r4.getOptionLabel(option_r3))("offLabel", ctx_r4.getOptionLabel(option_r3))("disabled", ctx_r4.disabled || ctx_r4.isOptionDisabled(option_r3))("allowEmpty", ctx_r4.allowEmpty)("size", ctx_r4.size);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.itemTemplate || ctx_r4._itemTemplate ? 1 : -1);
  }
}
var SELECTBUTTON_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectButton),
  multi: true
};
var SelectButton = class _SelectButton extends BaseComponent {
  /**
   * An array of selectitems to display as the available options.
   * @group Props
   */
  options;
  /**
   * Name of the label field of an option.
   * @group Props
   */
  optionLabel;
  /**
   * Name of the value field of an option.
   * @group Props
   */
  optionValue;
  /**
   * Name of the disabled field of an option.
   * @group Props
   */
  optionDisabled;
  /**
   * Whether selection can be cleared.
   * @group Props
   */
  unselectable = false;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = 0;
  /**
   * When specified, allows selecting multiple values.
   * @group Props
   */
  multiple;
  /**
   * Whether selection can not be cleared.
   * @group Props
   */
  allowEmpty = true;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Defines the size of the component.
   * @group Props
   */
  size;
  /**
   * When present, it specifies that the element should be disabled.
   * @group Props
   */
  disabled;
  /**
   * A property to uniquely identify a value in options.
   * @group Props
   */
  dataKey;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Callback to invoke on input click.
   * @param {SelectButtonOptionClickEvent} event - Custom click event.
   * @group Emits
   */
  onOptionClick = new EventEmitter();
  /**
   * Callback to invoke on selection change.
   * @param {SelectButtonChangeEvent} event - Custom change event.
   * @group Emits
   */
  onChange = new EventEmitter();
  /**
   * Template of an item in the list.
   * @group Templates
   */
  itemTemplate;
  _itemTemplate;
  get equalityKey() {
    return this.optionValue ? null : this.dataKey;
  }
  value;
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  focusedIndex = 0;
  _componentStyle = inject(SelectButtonStyle);
  getOptionLabel(option) {
    return this.optionLabel ? resolveFieldData(option, this.optionLabel) : option.label != void 0 ? option.label : option;
  }
  getOptionValue(option) {
    return this.optionValue ? resolveFieldData(option, this.optionValue) : this.optionLabel || option.value === void 0 ? option : option.value;
  }
  isOptionDisabled(option) {
    return this.optionDisabled ? resolveFieldData(option, this.optionDisabled) : option.disabled !== void 0 ? option.disabled : false;
  }
  writeValue(value) {
    this.value = value;
    this.cd.markForCheck();
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  setDisabledState(val) {
    this.disabled = val;
    this.cd.markForCheck();
  }
  onOptionSelect(event, option, index) {
    if (this.disabled || this.isOptionDisabled(option)) {
      return;
    }
    let selected = this.isSelected(option);
    if (selected && this.unselectable) {
      return;
    }
    let optionValue = this.getOptionValue(option);
    let newValue;
    if (this.multiple) {
      if (selected) newValue = this.value.filter((val) => !equals(val, optionValue, this.equalityKey));
      else newValue = this.value ? [...this.value, optionValue] : [optionValue];
    } else {
      if (selected && !this.allowEmpty) {
        return;
      }
      newValue = selected ? null : optionValue;
    }
    this.focusedIndex = index;
    this.value = newValue;
    this.onModelChange(this.value);
    this.onChange.emit({
      originalEvent: event,
      value: this.value
    });
    this.onOptionClick.emit({
      originalEvent: event,
      option,
      index
    });
  }
  changeTabIndexes(event, direction) {
    let firstTabableChild, index;
    for (let i = 0; i <= this.el.nativeElement.children.length - 1; i++) {
      if (this.el.nativeElement.children[i].getAttribute("tabindex") === "0") firstTabableChild = {
        elem: this.el.nativeElement.children[i],
        index: i
      };
    }
    if (direction === "prev") {
      if (firstTabableChild.index === 0) index = this.el.nativeElement.children.length - 1;
      else index = firstTabableChild.index - 1;
    } else {
      if (firstTabableChild.index === this.el.nativeElement.children.length - 1) index = 0;
      else index = firstTabableChild.index + 1;
    }
    this.focusedIndex = index;
    this.el.nativeElement.children[index].focus();
  }
  onFocus(event, index) {
    this.focusedIndex = index;
  }
  onBlur() {
    this.onModelTouched();
  }
  removeOption(option) {
    this.value = this.value.filter((val) => !equals(val, this.getOptionValue(option), this.dataKey));
  }
  isSelected(option) {
    let selected = false;
    const optionValue = this.getOptionValue(option);
    if (this.multiple) {
      if (this.value && Array.isArray(this.value)) {
        for (let val of this.value) {
          if (equals(val, optionValue, this.dataKey)) {
            selected = true;
            break;
          }
        }
      }
    } else {
      selected = equals(this.getOptionValue(option), this.value, this.equalityKey);
    }
    return selected;
  }
  templates;
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "item":
          this._itemTemplate = item.template;
          break;
      }
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SelectButton_BaseFactory;
    return function SelectButton_Factory(__ngFactoryType__) {
      return (\u0275SelectButton_BaseFactory || (\u0275SelectButton_BaseFactory = \u0275\u0275getInheritedFactory(_SelectButton)))(__ngFactoryType__ || _SelectButton);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _SelectButton,
    selectors: [["p-selectButton"], ["p-selectbutton"], ["p-select-button"]],
    contentQueries: function SelectButton_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c08, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.itemTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostVars: 10,
    hostBindings: function SelectButton_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("role", ctx.group)("aria-labelledby", ctx.ariaLabelledBy)("data-pc-section", "root")("data-pc-name", "selectbutton");
        \u0275\u0275styleMap(ctx.style);
        \u0275\u0275classProp("p-selectbutton", true)("p-component", true);
      }
    },
    inputs: {
      options: "options",
      optionLabel: "optionLabel",
      optionValue: "optionValue",
      optionDisabled: "optionDisabled",
      unselectable: [2, "unselectable", "unselectable", booleanAttribute],
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      multiple: [2, "multiple", "multiple", booleanAttribute],
      allowEmpty: [2, "allowEmpty", "allowEmpty", booleanAttribute],
      style: "style",
      styleClass: "styleClass",
      ariaLabelledBy: "ariaLabelledBy",
      size: "size",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      dataKey: "dataKey",
      autofocus: [2, "autofocus", "autofocus", booleanAttribute]
    },
    outputs: {
      onOptionClick: "onOptionClick",
      onChange: "onChange"
    },
    features: [\u0275\u0275ProvidersFeature([SELECTBUTTON_VALUE_ACCESSOR, SelectButtonStyle]), \u0275\u0275InputTransformsFeature, \u0275\u0275InheritDefinitionFeature],
    decls: 2,
    vars: 0,
    consts: [["content", ""], [3, "autofocus", "styleClass", "ngModel", "onLabel", "offLabel", "disabled", "allowEmpty", "size"], [3, "onChange", "autofocus", "styleClass", "ngModel", "onLabel", "offLabel", "disabled", "allowEmpty", "size"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function SelectButton_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275repeaterCreate(0, SelectButton_For_1_Template, 2, 9, "p-toggleButton", 1, \u0275\u0275repeaterTrackByIdentity);
      }
      if (rf & 2) {
        \u0275\u0275repeater(ctx.options);
      }
    },
    dependencies: [ToggleButton, FormsModule, NgControlStatus, NgModel, CommonModule, NgTemplateOutlet, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectButton, [{
    type: Component,
    args: [{
      selector: "p-selectButton, p-selectbutton, p-select-button",
      standalone: true,
      imports: [ToggleButton, FormsModule, CommonModule, SharedModule],
      template: `
        @for (option of options; track option; let i = $index) {
            <p-toggleButton
                [autofocus]="autofocus"
                [styleClass]="styleClass"
                [ngModel]="isSelected(option)"
                [onLabel]="this.getOptionLabel(option)"
                [offLabel]="this.getOptionLabel(option)"
                [disabled]="disabled || isOptionDisabled(option)"
                (onChange)="onOptionSelect($event, option, i)"
                [allowEmpty]="allowEmpty"
                [size]="size"
            >
                @if (itemTemplate || _itemTemplate) {
                    <ng-template #content>
                        <ng-container *ngTemplateOutlet="itemTemplate || _itemTemplate; context: { $implicit: option, index: i }"></ng-container>
                    </ng-template>
                }
            </p-toggleButton>
        }
    `,
      providers: [SELECTBUTTON_VALUE_ACCESSOR, SelectButtonStyle],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class.p-selectbutton]": "true",
        "[class.p-component]": "true",
        "[style]": "style",
        "[attr.role]": "group",
        "[attr.aria-labelledby]": "ariaLabelledBy",
        "[attr.data-pc-section]": "'root'",
        "[attr.data-pc-name]": "'selectbutton'"
      }
    }]
  }], null, {
    options: [{
      type: Input
    }],
    optionLabel: [{
      type: Input
    }],
    optionValue: [{
      type: Input
    }],
    optionDisabled: [{
      type: Input
    }],
    unselectable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    multiple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    allowEmpty: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    dataKey: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onOptionClick: [{
      type: Output
    }],
    onChange: [{
      type: Output
    }],
    itemTemplate: [{
      type: ContentChild,
      args: ["item", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SelectButton, {
    className: "SelectButton",
    filePath: "selectbutton.ts",
    lineNumber: 75
  });
})();
var SelectButtonModule = class _SelectButtonModule {
  static \u0275fac = function SelectButtonModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SelectButtonModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _SelectButtonModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [SelectButton, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectButtonModule, [{
    type: NgModule,
    args: [{
      imports: [SelectButton, SharedModule],
      exports: [SelectButton, SharedModule]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-tooltip.mjs
var theme11 = ({
  dt: dt2
}) => `
.p-tooltip {
    position: absolute;
    display: none;
    max-width: ${dt2("tooltip.max.width")};
}

.p-tooltip-right,
.p-tooltip-left {
    padding: 0 ${dt2("tooltip.gutter")};
}

.p-tooltip-top,
.p-tooltip-bottom {
    padding: ${dt2("tooltip.gutter")} 0;
}

.p-tooltip-text {
    white-space: pre-line;
    word-break: break-word;
    background: ${dt2("tooltip.background")};
    color: ${dt2("tooltip.color")};
    padding: ${dt2("tooltip.padding")};
    box-shadow: ${dt2("tooltip.shadow")};
    border-radius: ${dt2("tooltip.border.radius")};
}

.p-tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    scale: 2;
}

.p-tooltip-right .p-tooltip-arrow {
    top: 50%;
    left: 0;
    margin-top: calc(-1 * ${dt2("tooltip.gutter")});
    border-width: ${dt2("tooltip.gutter")} ${dt2("tooltip.gutter")} ${dt2("tooltip.gutter")} 0;
    border-right-color: ${dt2("tooltip.background")};
}

.p-tooltip-left .p-tooltip-arrow {
    top: 50%;
    right: 0;
    margin-top: calc(-1 * ${dt2("tooltip.gutter")});
    border-width: ${dt2("tooltip.gutter")} 0 ${dt2("tooltip.gutter")} ${dt2("tooltip.gutter")};
    border-left-color: ${dt2("tooltip.background")};
}

.p-tooltip-top .p-tooltip-arrow {
    bottom: 0;
    left: 50%;
    margin-left: calc(-1 * ${dt2("tooltip.gutter")});
    border-width: ${dt2("tooltip.gutter")} ${dt2("tooltip.gutter")} 0 ${dt2("tooltip.gutter")};
    border-top-color: ${dt2("tooltip.background")};
    border-bottom-color: ${dt2("tooltip.background")};
}

.p-tooltip-bottom .p-tooltip-arrow {
    top: 0;
    left: 50%;
    margin-left: calc(-1 * ${dt2("tooltip.gutter")});
    border-width: 0 ${dt2("tooltip.gutter")} ${dt2("tooltip.gutter")} ${dt2("tooltip.gutter")};
    border-top-color: ${dt2("tooltip.background")};
    border-bottom-color: ${dt2("tooltip.background")};
}
`;
var classes10 = {
  root: "p-tooltip p-component",
  arrow: "p-tooltip-arrow",
  text: "p-tooltip-text"
};
var TooltipStyle = class _TooltipStyle extends BaseStyle {
  name = "tooltip";
  theme = theme11;
  classes = classes10;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TooltipStyle_BaseFactory;
    return function TooltipStyle_Factory(__ngFactoryType__) {
      return (\u0275TooltipStyle_BaseFactory || (\u0275TooltipStyle_BaseFactory = \u0275\u0275getInheritedFactory(_TooltipStyle)))(__ngFactoryType__ || _TooltipStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TooltipStyle,
    factory: _TooltipStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipStyle, [{
    type: Injectable
  }], null, null);
})();
var TooltipClasses;
(function(TooltipClasses2) {
  TooltipClasses2["root"] = "p-tooltip";
  TooltipClasses2["arrow"] = "p-tooltip-arrow";
  TooltipClasses2["text"] = "p-tooltip-text";
})(TooltipClasses || (TooltipClasses = {}));
var Tooltip = class _Tooltip extends BaseComponent {
  zone;
  viewContainer;
  /**
   * Position of the tooltip.
   * @group Props
   */
  tooltipPosition;
  /**
   * Event to show the tooltip.
   * @group Props
   */
  tooltipEvent = "hover";
  /**
   *  Target element to attach the overlay, valid values are "body", "target" or a local ng-F variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  appendTo;
  /**
   * Type of CSS position.
   * @group Props
   */
  positionStyle;
  /**
   * Style class of the tooltip.
   * @group Props
   */
  tooltipStyleClass;
  /**
   * Whether the z-index should be managed automatically to always go on top or have a fixed value.
   * @group Props
   */
  tooltipZIndex;
  /**
   * By default the tooltip contents are rendered as text. Set to false to support html tags in the content.
   * @group Props
   */
  escape = true;
  /**
   * Delay to show the tooltip in milliseconds.
   * @group Props
   */
  showDelay;
  /**
   * Delay to hide the tooltip in milliseconds.
   * @group Props
   */
  hideDelay;
  /**
   * Time to wait in milliseconds to hide the tooltip even it is active.
   * @group Props
   */
  life;
  /**
   * Specifies the additional vertical offset of the tooltip from its default position.
   * @group Props
   */
  positionTop;
  /**
   * Specifies the additional horizontal offset of the tooltip from its default position.
   * @group Props
   */
  positionLeft;
  /**
   * Whether to hide tooltip when hovering over tooltip content.
   * @group Props
   */
  autoHide = true;
  /**
   * Automatically adjusts the element position when there is not enough space on the selected position.
   * @group Props
   */
  fitContent = true;
  /**
   * Whether to hide tooltip on escape key press.
   * @group Props
   */
  hideOnEscape = true;
  /**
   * Content of the tooltip.
   * @group Props
   */
  content;
  /**
   * When present, it specifies that the component should be disabled.
   * @defaultValue false
   * @group Props
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(val) {
    this._disabled = val;
    this.deactivate();
  }
  /**
   * Specifies the tooltip configuration options for the component.
   * @group Props
   */
  tooltipOptions;
  _tooltipOptions = {
    tooltipLabel: null,
    tooltipPosition: "right",
    tooltipEvent: "hover",
    appendTo: "body",
    positionStyle: null,
    tooltipStyleClass: null,
    tooltipZIndex: "auto",
    escape: true,
    disabled: null,
    showDelay: null,
    hideDelay: null,
    positionTop: null,
    positionLeft: null,
    life: null,
    autoHide: true,
    hideOnEscape: true,
    id: uuid("pn_id_") + "_tooltip"
  };
  _disabled;
  container;
  styleClass;
  tooltipText;
  showTimeout;
  hideTimeout;
  active;
  mouseEnterListener;
  mouseLeaveListener;
  containerMouseleaveListener;
  clickListener;
  focusListener;
  blurListener;
  documentEscapeListener;
  scrollHandler;
  resizeListener;
  _componentStyle = inject(TooltipStyle);
  interactionInProgress = false;
  constructor(zone, viewContainer) {
    super();
    this.zone = zone;
    this.viewContainer = viewContainer;
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        const tooltipEvent = this.getOption("tooltipEvent");
        if (tooltipEvent === "hover" || tooltipEvent === "both") {
          this.mouseEnterListener = this.onMouseEnter.bind(this);
          this.mouseLeaveListener = this.onMouseLeave.bind(this);
          this.clickListener = this.onInputClick.bind(this);
          this.el.nativeElement.addEventListener("mouseenter", this.mouseEnterListener);
          this.el.nativeElement.addEventListener("click", this.clickListener);
          this.el.nativeElement.addEventListener("mouseleave", this.mouseLeaveListener);
        }
        if (tooltipEvent === "focus" || tooltipEvent === "both") {
          this.focusListener = this.onFocus.bind(this);
          this.blurListener = this.onBlur.bind(this);
          let target = this.el.nativeElement.querySelector(".p-component");
          if (!target) {
            target = this.getTarget(this.el.nativeElement);
          }
          target.addEventListener("focus", this.focusListener);
          target.addEventListener("blur", this.blurListener);
        }
      });
    }
  }
  ngOnChanges(simpleChange) {
    super.ngOnChanges(simpleChange);
    if (simpleChange.tooltipPosition) {
      this.setOption({
        tooltipPosition: simpleChange.tooltipPosition.currentValue
      });
    }
    if (simpleChange.tooltipEvent) {
      this.setOption({
        tooltipEvent: simpleChange.tooltipEvent.currentValue
      });
    }
    if (simpleChange.appendTo) {
      this.setOption({
        appendTo: simpleChange.appendTo.currentValue
      });
    }
    if (simpleChange.positionStyle) {
      this.setOption({
        positionStyle: simpleChange.positionStyle.currentValue
      });
    }
    if (simpleChange.tooltipStyleClass) {
      this.setOption({
        tooltipStyleClass: simpleChange.tooltipStyleClass.currentValue
      });
    }
    if (simpleChange.tooltipZIndex) {
      this.setOption({
        tooltipZIndex: simpleChange.tooltipZIndex.currentValue
      });
    }
    if (simpleChange.escape) {
      this.setOption({
        escape: simpleChange.escape.currentValue
      });
    }
    if (simpleChange.showDelay) {
      this.setOption({
        showDelay: simpleChange.showDelay.currentValue
      });
    }
    if (simpleChange.hideDelay) {
      this.setOption({
        hideDelay: simpleChange.hideDelay.currentValue
      });
    }
    if (simpleChange.life) {
      this.setOption({
        life: simpleChange.life.currentValue
      });
    }
    if (simpleChange.positionTop) {
      this.setOption({
        positionTop: simpleChange.positionTop.currentValue
      });
    }
    if (simpleChange.positionLeft) {
      this.setOption({
        positionLeft: simpleChange.positionLeft.currentValue
      });
    }
    if (simpleChange.disabled) {
      this.setOption({
        disabled: simpleChange.disabled.currentValue
      });
    }
    if (simpleChange.content) {
      this.setOption({
        tooltipLabel: simpleChange.content.currentValue
      });
      if (this.active) {
        if (simpleChange.content.currentValue) {
          if (this.container && this.container.offsetParent) {
            this.updateText();
            this.align();
          } else {
            this.show();
          }
        } else {
          this.hide();
        }
      }
    }
    if (simpleChange.autoHide) {
      this.setOption({
        autoHide: simpleChange.autoHide.currentValue
      });
    }
    if (simpleChange.id) {
      this.setOption({
        id: simpleChange.id.currentValue
      });
    }
    if (simpleChange.tooltipOptions) {
      this._tooltipOptions = __spreadValues(__spreadValues({}, this._tooltipOptions), simpleChange.tooltipOptions.currentValue);
      this.deactivate();
      if (this.active) {
        if (this.getOption("tooltipLabel")) {
          if (this.container && this.container.offsetParent) {
            this.updateText();
            this.align();
          } else {
            this.show();
          }
        } else {
          this.hide();
        }
      }
    }
  }
  isAutoHide() {
    return this.getOption("autoHide");
  }
  onMouseEnter(e) {
    if (!this.container && !this.showTimeout) {
      this.activate();
    }
  }
  onMouseLeave(e) {
    if (!this.isAutoHide()) {
      const valid = hasClass(e.relatedTarget, "p-tooltip") || hasClass(e.relatedTarget, "p-tooltip-text") || hasClass(e.relatedTarget, "p-tooltip-arrow");
      !valid && this.deactivate();
    } else {
      this.deactivate();
    }
  }
  onFocus(e) {
    this.activate();
  }
  onBlur(e) {
    this.deactivate();
  }
  onInputClick(e) {
    this.deactivate();
  }
  activate() {
    if (!this.interactionInProgress) {
      this.active = true;
      this.clearHideTimeout();
      if (this.getOption("showDelay")) this.showTimeout = setTimeout(() => {
        this.show();
      }, this.getOption("showDelay"));
      else this.show();
      if (this.getOption("life")) {
        let duration = this.getOption("showDelay") ? this.getOption("life") + this.getOption("showDelay") : this.getOption("life");
        this.hideTimeout = setTimeout(() => {
          this.hide();
        }, duration);
      }
      if (this.getOption("hideOnEscape")) {
        this.documentEscapeListener = this.renderer.listen("document", "keydown.escape", () => {
          this.deactivate();
          this.documentEscapeListener();
        });
      }
      this.interactionInProgress = true;
    }
  }
  deactivate() {
    this.interactionInProgress = false;
    this.active = false;
    this.clearShowTimeout();
    if (this.getOption("hideDelay")) {
      this.clearHideTimeout();
      this.hideTimeout = setTimeout(() => {
        this.hide();
      }, this.getOption("hideDelay"));
    } else {
      this.hide();
    }
    if (this.documentEscapeListener) {
      this.documentEscapeListener();
    }
  }
  create() {
    if (this.container) {
      this.clearHideTimeout();
      this.remove();
    }
    this.container = document.createElement("div");
    this.container.setAttribute("id", this.getOption("id"));
    this.container.setAttribute("role", "tooltip");
    let tooltipArrow = document.createElement("div");
    tooltipArrow.className = "p-tooltip-arrow";
    this.container.appendChild(tooltipArrow);
    this.tooltipText = document.createElement("div");
    this.tooltipText.className = "p-tooltip-text";
    this.updateText();
    if (this.getOption("positionStyle")) {
      this.container.style.position = this.getOption("positionStyle");
    }
    this.container.appendChild(this.tooltipText);
    if (this.getOption("appendTo") === "body") document.body.appendChild(this.container);
    else if (this.getOption("appendTo") === "target") appendChild(this.container, this.el.nativeElement);
    else appendChild(this.getOption("appendTo"), this.container);
    this.container.style.display = "none";
    if (this.fitContent) {
      this.container.style.width = "fit-content";
    }
    if (this.isAutoHide()) {
      this.container.style.pointerEvents = "none";
    } else {
      this.container.style.pointerEvents = "unset";
      this.bindContainerMouseleaveListener();
    }
  }
  bindContainerMouseleaveListener() {
    if (!this.containerMouseleaveListener) {
      const targetEl = this.container ?? this.container.nativeElement;
      this.containerMouseleaveListener = this.renderer.listen(targetEl, "mouseleave", (e) => {
        this.deactivate();
      });
    }
  }
  unbindContainerMouseleaveListener() {
    if (this.containerMouseleaveListener) {
      this.bindContainerMouseleaveListener();
      this.containerMouseleaveListener = null;
    }
  }
  show() {
    if (!this.getOption("tooltipLabel") || this.getOption("disabled")) {
      return;
    }
    this.create();
    const nativeElement = this.el.nativeElement;
    const pDialogWrapper = nativeElement.closest("p-dialog");
    if (pDialogWrapper) {
      setTimeout(() => {
        this.container && (this.container.style.display = "inline-block");
        this.container && this.align();
      }, 100);
    } else {
      this.container.style.display = "inline-block";
      this.align();
    }
    fadeIn(this.container, 250);
    if (this.getOption("tooltipZIndex") === "auto") zindexutils.set("tooltip", this.container, this.config.zIndex.tooltip);
    else this.container.style.zIndex = this.getOption("tooltipZIndex");
    this.bindDocumentResizeListener();
    this.bindScrollListener();
  }
  hide() {
    if (this.getOption("tooltipZIndex") === "auto") {
      zindexutils.clear(this.container);
    }
    this.remove();
  }
  updateText() {
    const content = this.getOption("tooltipLabel");
    if (content instanceof TemplateRef) {
      const embeddedViewRef = this.viewContainer.createEmbeddedView(content);
      embeddedViewRef.detectChanges();
      embeddedViewRef.rootNodes.forEach((node) => this.tooltipText.appendChild(node));
    } else if (this.getOption("escape")) {
      this.tooltipText.innerHTML = "";
      this.tooltipText.appendChild(document.createTextNode(content));
    } else {
      this.tooltipText.innerHTML = content;
    }
  }
  align() {
    let position = this.getOption("tooltipPosition");
    const positionPriority = {
      top: [this.alignTop, this.alignBottom, this.alignRight, this.alignLeft],
      bottom: [this.alignBottom, this.alignTop, this.alignRight, this.alignLeft],
      left: [this.alignLeft, this.alignRight, this.alignTop, this.alignBottom],
      right: [this.alignRight, this.alignLeft, this.alignTop, this.alignBottom]
    };
    for (let [index, alignmentFn] of positionPriority[position].entries()) {
      if (index === 0) alignmentFn.call(this);
      else if (this.isOutOfBounds()) alignmentFn.call(this);
      else break;
    }
  }
  getHostOffset() {
    if (this.getOption("appendTo") === "body" || this.getOption("appendTo") === "target") {
      let offset = this.el.nativeElement.getBoundingClientRect();
      let targetLeft = offset.left + getWindowScrollLeft();
      let targetTop = offset.top + getWindowScrollTop();
      return {
        left: targetLeft,
        top: targetTop
      };
    } else {
      return {
        left: 0,
        top: 0
      };
    }
  }
  get activeElement() {
    return this.el.nativeElement.nodeName.includes("P-") ? findSingle(this.el.nativeElement, ".p-component") : this.el.nativeElement;
  }
  alignRight() {
    this.preAlign("right");
    const el = this.activeElement;
    const offsetLeft = getOuterWidth(el);
    const offsetTop = (getOuterHeight(el) - getOuterHeight(this.container)) / 2;
    this.alignTooltip(offsetLeft, offsetTop);
  }
  alignLeft() {
    this.preAlign("left");
    let offsetLeft = getOuterWidth(this.container);
    let offsetTop = (getOuterHeight(this.el.nativeElement) - getOuterHeight(this.container)) / 2;
    this.alignTooltip(-offsetLeft, offsetTop);
  }
  alignTop() {
    this.preAlign("top");
    let offsetLeft = (getOuterWidth(this.el.nativeElement) - getOuterWidth(this.container)) / 2;
    let offsetTop = getOuterHeight(this.container);
    this.alignTooltip(offsetLeft, -offsetTop);
  }
  alignBottom() {
    this.preAlign("bottom");
    let offsetLeft = (getOuterWidth(this.el.nativeElement) - getOuterWidth(this.container)) / 2;
    let offsetTop = getOuterHeight(this.el.nativeElement);
    this.alignTooltip(offsetLeft, offsetTop);
  }
  alignTooltip(offsetLeft, offsetTop) {
    let hostOffset = this.getHostOffset();
    let left = hostOffset.left + offsetLeft;
    let top = hostOffset.top + offsetTop;
    this.container.style.left = left + this.getOption("positionLeft") + "px";
    this.container.style.top = top + this.getOption("positionTop") + "px";
  }
  setOption(option) {
    this._tooltipOptions = __spreadValues(__spreadValues({}, this._tooltipOptions), option);
  }
  getOption(option) {
    return this._tooltipOptions[option];
  }
  getTarget(el) {
    return hasClass(el, "p-inputwrapper") ? findSingle(el, "input") : el;
  }
  preAlign(position) {
    this.container.style.left = "-999px";
    this.container.style.top = "-999px";
    let defaultClassName = "p-tooltip p-component p-tooltip-" + position;
    this.container.className = this.getOption("tooltipStyleClass") ? defaultClassName + " " + this.getOption("tooltipStyleClass") : defaultClassName;
  }
  isOutOfBounds() {
    let offset = this.container.getBoundingClientRect();
    let targetTop = offset.top;
    let targetLeft = offset.left;
    let width = getOuterWidth(this.container);
    let height = getOuterHeight(this.container);
    let viewport = getViewport();
    return targetLeft + width > viewport.width || targetLeft < 0 || targetTop < 0 || targetTop + height > viewport.height;
  }
  onWindowResize(e) {
    this.hide();
  }
  bindDocumentResizeListener() {
    this.zone.runOutsideAngular(() => {
      this.resizeListener = this.onWindowResize.bind(this);
      window.addEventListener("resize", this.resizeListener);
    });
  }
  unbindDocumentResizeListener() {
    if (this.resizeListener) {
      window.removeEventListener("resize", this.resizeListener);
      this.resizeListener = null;
    }
  }
  bindScrollListener() {
    if (!this.scrollHandler) {
      this.scrollHandler = new ConnectedOverlayScrollHandler(this.el.nativeElement, () => {
        if (this.container) {
          this.hide();
        }
      });
    }
    this.scrollHandler.bindScrollListener();
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
    }
  }
  unbindEvents() {
    const tooltipEvent = this.getOption("tooltipEvent");
    if (tooltipEvent === "hover" || tooltipEvent === "both") {
      this.el.nativeElement.removeEventListener("mouseenter", this.mouseEnterListener);
      this.el.nativeElement.removeEventListener("mouseleave", this.mouseLeaveListener);
      this.el.nativeElement.removeEventListener("click", this.clickListener);
    }
    if (tooltipEvent === "focus" || tooltipEvent === "both") {
      let target = this.el.nativeElement.querySelector(".p-component");
      if (!target) {
        target = this.getTarget(this.el.nativeElement);
      }
      target.removeEventListener("focus", this.focusListener);
      target.removeEventListener("blur", this.blurListener);
    }
    this.unbindDocumentResizeListener();
  }
  remove() {
    if (this.container && this.container.parentElement) {
      if (this.getOption("appendTo") === "body") document.body.removeChild(this.container);
      else if (this.getOption("appendTo") === "target") this.el.nativeElement.removeChild(this.container);
      else removeChild(this.container, this.getOption("appendTo"));
    }
    this.unbindDocumentResizeListener();
    this.unbindScrollListener();
    this.unbindContainerMouseleaveListener();
    this.clearTimeouts();
    this.container = null;
    this.scrollHandler = null;
  }
  clearShowTimeout() {
    if (this.showTimeout) {
      clearTimeout(this.showTimeout);
      this.showTimeout = null;
    }
  }
  clearHideTimeout() {
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = null;
    }
  }
  clearTimeouts() {
    this.clearShowTimeout();
    this.clearHideTimeout();
  }
  ngOnDestroy() {
    this.unbindEvents();
    super.ngOnDestroy();
    if (this.container) {
      zindexutils.clear(this.container);
    }
    this.remove();
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    if (this.documentEscapeListener) {
      this.documentEscapeListener();
    }
  }
  static \u0275fac = function Tooltip_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Tooltip)(\u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ViewContainerRef));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _Tooltip,
    selectors: [["", "pTooltip", ""]],
    inputs: {
      tooltipPosition: "tooltipPosition",
      tooltipEvent: "tooltipEvent",
      appendTo: "appendTo",
      positionStyle: "positionStyle",
      tooltipStyleClass: "tooltipStyleClass",
      tooltipZIndex: "tooltipZIndex",
      escape: [2, "escape", "escape", booleanAttribute],
      showDelay: [2, "showDelay", "showDelay", numberAttribute],
      hideDelay: [2, "hideDelay", "hideDelay", numberAttribute],
      life: [2, "life", "life", numberAttribute],
      positionTop: [2, "positionTop", "positionTop", numberAttribute],
      positionLeft: [2, "positionLeft", "positionLeft", numberAttribute],
      autoHide: [2, "autoHide", "autoHide", booleanAttribute],
      fitContent: [2, "fitContent", "fitContent", booleanAttribute],
      hideOnEscape: [2, "hideOnEscape", "hideOnEscape", booleanAttribute],
      content: [0, "pTooltip", "content"],
      disabled: [0, "tooltipDisabled", "disabled"],
      tooltipOptions: "tooltipOptions"
    },
    features: [\u0275\u0275ProvidersFeature([TooltipStyle]), \u0275\u0275InputTransformsFeature, \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Tooltip, [{
    type: Directive,
    args: [{
      selector: "[pTooltip]",
      standalone: true,
      providers: [TooltipStyle]
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ViewContainerRef
  }], {
    tooltipPosition: [{
      type: Input
    }],
    tooltipEvent: [{
      type: Input
    }],
    appendTo: [{
      type: Input
    }],
    positionStyle: [{
      type: Input
    }],
    tooltipStyleClass: [{
      type: Input
    }],
    tooltipZIndex: [{
      type: Input
    }],
    escape: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showDelay: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    hideDelay: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    life: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    positionTop: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    positionLeft: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    autoHide: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    fitContent: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hideOnEscape: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    content: [{
      type: Input,
      args: ["pTooltip"]
    }],
    disabled: [{
      type: Input,
      args: ["tooltipDisabled"]
    }],
    tooltipOptions: [{
      type: Input
    }]
  });
})();
var TooltipModule = class _TooltipModule {
  static \u0275fac = function TooltipModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TooltipModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _TooltipModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipModule, [{
    type: NgModule,
    args: [{
      imports: [Tooltip],
      exports: [Tooltip]
    }]
  }], null, null);
})();

export {
  HttpErrorResponse,
  HttpClient,
  provideHttpClient,
  withInterceptors,
  hasClass,
  addClass,
  blockBodyScroll,
  removeClass,
  unblockBodyScroll,
  getViewport,
  absolutePosition,
  addStyle,
  getOuterWidth,
  relativePosition,
  appendChild,
  createElement,
  find,
  findSingle,
  focus,
  getFocusableElements,
  getFirstFocusableElement,
  getHeight,
  getIndex,
  getLastFocusableElement,
  getOuterHeight,
  getSelection,
  getTargetElement,
  getWidth,
  isVisible,
  isHidden,
  isTouchDevice,
  scrollInView,
  setAttribute,
  isEmpty,
  deepEquals,
  isNotEmpty,
  resolveFieldData,
  equals,
  findLastIndex,
  isObject,
  isArray,
  isDate,
  isPrintableCharacter,
  uuid,
  FilterMatchMode,
  FilterOperator,
  FilterService,
  MessageService,
  OverlayService,
  Header,
  Footer,
  PrimeTemplate,
  SharedModule,
  TranslationKeys,
  $t,
  updatePreset,
  updateSurfacePalette,
  BaseStyle,
  PrimeNG,
  providePrimeNG,
  NG_VALUE_ACCESSOR,
  DefaultValueAccessor,
  NgControl,
  NgControlStatus,
  NgModel,
  FormsModule,
  BaseComponent,
  Ripple,
  RippleModule,
  SelectButton,
  SelectButtonModule,
  DomHandler,
  ConnectedOverlayScrollHandler,
  ObjectUtils,
  UniqueComponentId,
  zindexutils,
  Tooltip,
  TooltipModule,
  AutoFocus,
  Badge,
  BadgeModule,
  BaseIcon,
  CheckIcon,
  SpinnerIcon,
  TimesIcon,
  Button,
  ButtonModule,
  InputText,
  InputTextModule,
  Password,
  PasswordModule,
  APIURL,
  VersionTag,
  Endpoints,
  JwtHelperService,
  Checkbox,
  CheckboxModule,
  Tag,
  TagModule
};
/*! Bundled license information:

@angular/common/fesm2022/http.mjs:
  (**
   * @license Angular v19.0.5
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)

@angular/forms/fesm2022/forms.mjs:
  (**
   * @license Angular v19.0.5
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-QLUKKW7B.js.map
