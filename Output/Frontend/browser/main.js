import {
  AppConfigurator,
  AppFloatingConfigurator,
  DomRendererFactory2,
  LayoutService,
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  StyleClass,
  StyleClassModule,
  aura_default,
  bootstrapApplication,
  provideRouter,
  withEnabledBlockingInitialNavigation,
  withInMemoryScrolling
} from "./chunk-P5D2DZOB.js";
import {
  ChipModule,
  Dialog,
  DialogModule,
  FloatLabel,
  FloatLabelModule,
  JWTTokenHelpers,
  MultiSelectModule,
  PermissionHelpers,
  PermissionsTable,
  Select,
  SelectModule,
  TimesCircleIcon
} from "./chunk-RVQ7VANK.js";
import {
  APIURL,
  Badge,
  BadgeModule,
  BaseComponent,
  BaseIcon,
  BaseStyle,
  Button,
  ButtonModule,
  CheckIcon,
  DefaultValueAccessor,
  Endpoints,
  FormsModule,
  HttpClient,
  HttpErrorResponse,
  InputText,
  InputTextModule,
  JwtHelperService,
  MessageService,
  NgControlStatus,
  NgModel,
  Password,
  PasswordModule,
  PrimeTemplate,
  Ripple,
  RippleModule,
  SelectButtonModule,
  SharedModule,
  Tag,
  TagModule,
  TimesIcon,
  Tooltip,
  TooltipModule,
  VersionTag,
  isEmpty,
  provideHttpClient,
  providePrimeNG,
  setAttribute,
  uuid,
  withInterceptors,
  zindexutils
} from "./chunk-QLUKKW7B.js";
import {
  ANIMATION_MODULE_TYPE,
  ChangeDetectionScheduler,
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  ElementRef,
  EventEmitter,
  Injectable,
  InjectionToken,
  Input,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgStyle,
  NgTemplateOutlet,
  NgZone,
  Output,
  Renderer2,
  RendererFactory2,
  RuntimeError,
  ViewChild,
  ViewEncapsulation,
  animate,
  animateChild,
  booleanAttribute,
  catchError,
  filter,
  inject,
  makeEnvironmentProviders,
  numberAttribute,
  performanceMarkFeature,
  query,
  setClassMetadata,
  state,
  style,
  throwError,
  transition,
  trigger,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
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
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-2DCWLZUQ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// node_modules/@angular/platform-browser/fesm2022/animations/async.mjs
var ANIMATION_PREFIX = "@";
var AsyncAnimationRendererFactory = class _AsyncAnimationRendererFactory {
  doc;
  delegate;
  zone;
  animationType;
  moduleImpl;
  _rendererFactoryPromise = null;
  scheduler = inject(ChangeDetectionScheduler, {
    optional: true
  });
  loadingSchedulerFn = inject(\u0275ASYNC_ANIMATION_LOADING_SCHEDULER_FN, {
    optional: true
  });
  _engine;
  /**
   *
   * @param moduleImpl allows to provide a mock implmentation (or will load the animation module)
   */
  constructor(doc, delegate, zone, animationType, moduleImpl) {
    this.doc = doc;
    this.delegate = delegate;
    this.zone = zone;
    this.animationType = animationType;
    this.moduleImpl = moduleImpl;
  }
  /** @nodoc */
  ngOnDestroy() {
    this._engine?.flush();
  }
  /**
   * @internal
   */
  loadImpl() {
    const loadFn = () => this.moduleImpl ?? import("./chunk-S7QOGYTB.js").then((m) => m);
    let moduleImplPromise;
    if (this.loadingSchedulerFn) {
      moduleImplPromise = this.loadingSchedulerFn(loadFn);
    } else {
      moduleImplPromise = loadFn();
    }
    return moduleImplPromise.catch((e) => {
      throw new RuntimeError(5300, (typeof ngDevMode === "undefined" || ngDevMode) && "Async loading for animations package was enabled, but loading failed. Angular falls back to using regular rendering. No animations will be displayed and their styles won't be applied.");
    }).then(({
      \u0275createEngine,
      \u0275AnimationRendererFactory
    }) => {
      this._engine = \u0275createEngine(this.animationType, this.doc);
      const rendererFactory = new \u0275AnimationRendererFactory(this.delegate, this._engine, this.zone);
      this.delegate = rendererFactory;
      return rendererFactory;
    });
  }
  /**
   * This method is delegating the renderer creation to the factories.
   * It uses default factory while the animation factory isn't loaded
   * and will rely on the animation factory once it is loaded.
   *
   * Calling this method will trigger as side effect the loading of the animation module
   * if the renderered component uses animations.
   */
  createRenderer(hostElement, rendererType) {
    const renderer = this.delegate.createRenderer(hostElement, rendererType);
    if (renderer.\u0275type === 0) {
      return renderer;
    }
    if (typeof renderer.throwOnSyntheticProps === "boolean") {
      renderer.throwOnSyntheticProps = false;
    }
    const dynamicRenderer = new DynamicDelegationRenderer(renderer);
    if (rendererType?.data?.["animation"] && !this._rendererFactoryPromise) {
      this._rendererFactoryPromise = this.loadImpl();
    }
    this._rendererFactoryPromise?.then((animationRendererFactory) => {
      const animationRenderer = animationRendererFactory.createRenderer(hostElement, rendererType);
      dynamicRenderer.use(animationRenderer);
      this.scheduler?.notify(
        11
        /* NotificationSource.AsyncAnimationsLoaded */
      );
    }).catch((e) => {
      dynamicRenderer.use(renderer);
    });
    return dynamicRenderer;
  }
  begin() {
    this.delegate.begin?.();
  }
  end() {
    this.delegate.end?.();
  }
  whenRenderingDone() {
    return this.delegate.whenRenderingDone?.() ?? Promise.resolve();
  }
  static \u0275fac = function AsyncAnimationRendererFactory_Factory(__ngFactoryType__) {
    \u0275\u0275invalidFactory();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AsyncAnimationRendererFactory,
    factory: _AsyncAnimationRendererFactory.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsyncAnimationRendererFactory, [{
    type: Injectable
  }], () => [{
    type: Document
  }, {
    type: RendererFactory2
  }, {
    type: NgZone
  }, {
    type: void 0
  }, {
    type: Promise
  }], null);
})();
var DynamicDelegationRenderer = class {
  delegate;
  // List of callbacks that need to be replayed on the animation renderer once its loaded
  replay = [];
  \u0275type = 1;
  constructor(delegate) {
    this.delegate = delegate;
  }
  use(impl) {
    this.delegate = impl;
    if (this.replay !== null) {
      for (const fn of this.replay) {
        fn(impl);
      }
      this.replay = null;
    }
  }
  get data() {
    return this.delegate.data;
  }
  destroy() {
    this.replay = null;
    this.delegate.destroy();
  }
  createElement(name, namespace) {
    return this.delegate.createElement(name, namespace);
  }
  createComment(value) {
    return this.delegate.createComment(value);
  }
  createText(value) {
    return this.delegate.createText(value);
  }
  get destroyNode() {
    return this.delegate.destroyNode;
  }
  appendChild(parent, newChild) {
    this.delegate.appendChild(parent, newChild);
  }
  insertBefore(parent, newChild, refChild, isMove) {
    this.delegate.insertBefore(parent, newChild, refChild, isMove);
  }
  removeChild(parent, oldChild, isHostElement) {
    this.delegate.removeChild(parent, oldChild, isHostElement);
  }
  selectRootElement(selectorOrNode, preserveContent) {
    return this.delegate.selectRootElement(selectorOrNode, preserveContent);
  }
  parentNode(node) {
    return this.delegate.parentNode(node);
  }
  nextSibling(node) {
    return this.delegate.nextSibling(node);
  }
  setAttribute(el, name, value, namespace) {
    this.delegate.setAttribute(el, name, value, namespace);
  }
  removeAttribute(el, name, namespace) {
    this.delegate.removeAttribute(el, name, namespace);
  }
  addClass(el, name) {
    this.delegate.addClass(el, name);
  }
  removeClass(el, name) {
    this.delegate.removeClass(el, name);
  }
  setStyle(el, style2, value, flags) {
    this.delegate.setStyle(el, style2, value, flags);
  }
  removeStyle(el, style2, flags) {
    this.delegate.removeStyle(el, style2, flags);
  }
  setProperty(el, name, value) {
    if (this.shouldReplay(name)) {
      this.replay.push((renderer) => renderer.setProperty(el, name, value));
    }
    this.delegate.setProperty(el, name, value);
  }
  setValue(node, value) {
    this.delegate.setValue(node, value);
  }
  listen(target, eventName, callback) {
    if (this.shouldReplay(eventName)) {
      this.replay.push((renderer) => renderer.listen(target, eventName, callback));
    }
    return this.delegate.listen(target, eventName, callback);
  }
  shouldReplay(propOrEventName) {
    return this.replay !== null && propOrEventName.startsWith(ANIMATION_PREFIX);
  }
};
var \u0275ASYNC_ANIMATION_LOADING_SCHEDULER_FN = new InjectionToken(ngDevMode ? "async_animation_loading_scheduler_fn" : "");
function provideAnimationsAsync(type = "animations") {
  performanceMarkFeature("NgAsyncAnimations");
  return makeEnvironmentProviders([{
    provide: RendererFactory2,
    useFactory: (doc, renderer, zone) => {
      return new AsyncAnimationRendererFactory(doc, renderer, zone, type);
    },
    deps: [DOCUMENT, DomRendererFactory2, NgZone]
  }, {
    provide: ANIMATION_MODULE_TYPE,
    useValue: type === "noop" ? "NoopAnimations" : "BrowserAnimations"
  }]);
}

// node_modules/primeng/fesm2022/primeng-icons-exclamationtriangle.mjs
var ExclamationTriangleIcon = class _ExclamationTriangleIcon extends BaseIcon {
  pathId;
  ngOnInit() {
    this.pathId = "url(#" + uuid() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ExclamationTriangleIcon_BaseFactory;
    return function ExclamationTriangleIcon_Factory(__ngFactoryType__) {
      return (\u0275ExclamationTriangleIcon_BaseFactory || (\u0275ExclamationTriangleIcon_BaseFactory = \u0275\u0275getInheritedFactory(_ExclamationTriangleIcon)))(__ngFactoryType__ || _ExclamationTriangleIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ExclamationTriangleIcon,
    selectors: [["ExclamationTriangleIcon"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 8,
    vars: 7,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z", "fill", "currentColor"], ["d", "M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z", "fill", "currentColor"], ["d", "M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function ExclamationTriangleIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(0, "svg", 0)(1, "g");
        \u0275\u0275element(2, "path", 1)(3, "path", 2)(4, "path", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "defs")(6, "clipPath", 4);
        \u0275\u0275element(7, "rect", 5);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.getClassNames());
        \u0275\u0275attribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
        \u0275\u0275advance();
        \u0275\u0275attribute("clip-path", ctx.pathId);
        \u0275\u0275advance(5);
        \u0275\u0275property("id", ctx.pathId);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExclamationTriangleIcon, [{
    type: Component,
    args: [{
      selector: "ExclamationTriangleIcon",
      standalone: true,
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    d="M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z"
                    fill="currentColor"
                />
                <path
                    d="M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z"
                    fill="currentColor"
                />
                <path
                    d="M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z"
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExclamationTriangleIcon, {
    className: "ExclamationTriangleIcon",
    filePath: "exclamationtriangle.ts",
    lineNumber: 32
  });
})();

// node_modules/primeng/fesm2022/primeng-icons-infocircle.mjs
var InfoCircleIcon = class _InfoCircleIcon extends BaseIcon {
  pathId;
  ngOnInit() {
    this.pathId = "url(#" + uuid() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275InfoCircleIcon_BaseFactory;
    return function InfoCircleIcon_Factory(__ngFactoryType__) {
      return (\u0275InfoCircleIcon_BaseFactory || (\u0275InfoCircleIcon_BaseFactory = \u0275\u0275getInheritedFactory(_InfoCircleIcon)))(__ngFactoryType__ || _InfoCircleIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _InfoCircleIcon,
    selectors: [["InfoCircleIcon"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 6,
    vars: 7,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function InfoCircleIcon_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InfoCircleIcon, [{
    type: Component,
    args: [{
      selector: "InfoCircleIcon",
      standalone: true,
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z"
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InfoCircleIcon, {
    className: "InfoCircleIcon",
    filePath: "infocircle.ts",
    lineNumber: 26
  });
})();

// src/app/layout/component/app.usermenu.ts
var _c0 = () => ({ width: "100%" });
var _c1 = () => ({ width: "30vw" });
var _c2 = () => ({ width: "50vw" });
var _c3 = () => ({ "960px": "95vw" });
function UserMenu_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 23);
    \u0275\u0275listener("click", function UserMenu_ng_template_9_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.changePassword());
    });
    \u0275\u0275elementEnd();
  }
}
function UserMenu_ng_template_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 24);
    \u0275\u0275listener("click", function UserMenu_ng_template_42_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateUser());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("hidden", !ctx_r2.canEditProfile);
  }
}
var UserMenu = class _UserMenu {
  router;
  http;
  service;
  changePasswordVisible = false;
  oldPassword = "";
  newPassword1 = "";
  newPassword2 = "";
  canChangePassword = PermissionHelpers.HasPermission(PermissionsTable.Core_User_ChangePassword);
  canEditProfile = PermissionHelpers.HasPermission(PermissionsTable.Core_User_EditProfile);
  isImpersonating = localStorage.getItem("impersonating") ? true : false;
  editProfileVisible = false;
  currentUser = {};
  constructor(router, http, service) {
    this.router = router;
    this.http = http;
    this.service = service;
  }
  ngOnInit() {
    this.http.get(APIURL + Endpoints.Core.Users.Get_User + "?ID=" + JWTTokenHelpers.GetUserID()).subscribe((r) => {
      this.currentUser = r;
    });
  }
  logOut() {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("perms");
    this.router.navigate(["/auth/login"]);
  }
  showChangePassword() {
    this.changePasswordVisible = true;
  }
  changePassword() {
    if (this.newPassword1 != this.newPassword2) {
      alert("New passwords are not identical!");
      return;
    }
    var input = {
      oldPassword: this.oldPassword,
      newPassword: this.newPassword1
    };
    this.http.post(APIURL + Endpoints.Core.Authentication.Post_UpdatePassword, input).subscribe(() => {
      this.router.navigate(["/auth/login"]);
    });
  }
  showEditProfile() {
    this.editProfileVisible = true;
  }
  updateUser() {
    this.http.patch(APIURL + Endpoints.Core.Users.Patch_UpdateUser, this.currentUser).subscribe(() => {
      this.editProfileVisible = false;
      this.service.add({ severity: "info", summary: "Info Message", detail: "Profile updated!" });
    });
  }
  static \u0275fac = function UserMenu_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserMenu)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(MessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserMenu, selectors: [["app-usermenu"]], hostAttrs: [1, "hidden", "absolute", "top-[3.25rem]", "right-0", "w-72", "p-4", "card", "border", "border-surface", "rounded-border", "origin-top", "shadow-[0px_3px_5px_rgba(0,0,0,0.02),0px_0px_2px_rgba(0,0,0,0.05),0px_1px_4px_rgba(0,0,0,0.08)]"], decls: 44, vars: 60, consts: [["footer", ""], [1, "flex", "flex-col", "gap-2"], ["icon", "pi pi-key", "label", "Change Password", "pTooltip", "Change your password", 3, "click", "hidden"], ["icon", "pi pi-user", "label", "View Profile", "pTooltip", "View and edit profile", 3, "click"], ["icon", "pi pi-sign-out", "label", "Log Out", "severity", "danger", "pTooltip", "Log out and return to the login screen", 3, "click", "disabled"], ["header", "Change Password", 3, "visibleChange", "visible", "modal"], [1, "card", "flex", "flex-col", "gap-2"], ["id", "password1", "placeholder", "Old Password", "styleClass", "mb-1", 3, "ngModelChange", "ngModel", "toggleMask", "fluid", "feedback"], ["id", "password2", "placeholder", "New Password", "styleClass", "mb-1", 3, "ngModelChange", "ngModel", "toggleMask", "fluid", "feedback"], ["id", "password3", "placeholder", "Repeat new Password", "styleClass", "mb-1", 3, "ngModelChange", "ngModel", "toggleMask", "fluid", "feedback"], ["header", "Profile", 3, "visibleChange", "visible", "breakpoints", "modal"], [1, "card", "flex", "flex-col"], ["variant", "on"], ["pInputText", "", "id", "loginname", "type", "text", 3, "ngModelChange", "ngModel", "disabled"], ["for", "loginname"], ["pInputText", "", "id", "firstname", "type", "text", 3, "ngModelChange", "ngModel", "disabled"], ["for", "firstname"], ["pInputText", "", "id", "lastname", "type", "text", 3, "ngModelChange", "ngModel", "disabled"], ["for", "lastname"], ["pInputText", "", "id", "email", "type", "text", 3, "ngModelChange", "ngModel", "disabled"], ["for", "email"], ["pInputText", "", "id", "phonenumber", "type", "text", 3, "ngModelChange", "ngModel", "disabled"], ["for", "phonenumber"], ["label", "Confirm", 3, "click"], ["label", "Save", 3, "click", "hidden"]], template: function UserMenu_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "p-button", 2);
      \u0275\u0275listener("click", function UserMenu_Template_p_button_click_1_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.showChangePassword());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "p-button", 3);
      \u0275\u0275listener("click", function UserMenu_Template_p_button_click_2_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.showEditProfile());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p-button", 4);
      \u0275\u0275listener("click", function UserMenu_Template_p_button_click_3_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.logOut());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p-dialog", 5);
      \u0275\u0275twoWayListener("visibleChange", function UserMenu_Template_p_dialog_visibleChange_4_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.changePasswordVisible, $event) || (ctx.changePasswordVisible = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(5, "div", 6)(6, "p-password", 7);
      \u0275\u0275twoWayListener("ngModelChange", function UserMenu_Template_p_password_ngModelChange_6_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.oldPassword, $event) || (ctx.oldPassword = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p-password", 8);
      \u0275\u0275twoWayListener("ngModelChange", function UserMenu_Template_p_password_ngModelChange_7_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.newPassword1, $event) || (ctx.newPassword1 = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p-password", 9);
      \u0275\u0275twoWayListener("ngModelChange", function UserMenu_Template_p_password_ngModelChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.newPassword2, $event) || (ctx.newPassword2 = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(9, UserMenu_ng_template_9_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "p-dialog", 10);
      \u0275\u0275twoWayListener("visibleChange", function UserMenu_Template_p_dialog_visibleChange_11_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.editProfileVisible, $event) || (ctx.editProfileVisible = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(12, "div", 11)(13, "p");
      \u0275\u0275text(14, "Here you can view and modify your current profile information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "h3");
      \u0275\u0275text(16, "Login Information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "p");
      \u0275\u0275text(18, "Your login name must be unique!");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "p-floatlabel", 12)(20, "input", 13);
      \u0275\u0275twoWayListener("ngModelChange", function UserMenu_Template_input_ngModelChange_20_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.currentUser.loginName, $event) || (ctx.currentUser.loginName = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "label", 14);
      \u0275\u0275text(22, "Login Name");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "h3");
      \u0275\u0275text(24, "General Information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 1)(26, "p-floatlabel", 12)(27, "input", 15);
      \u0275\u0275twoWayListener("ngModelChange", function UserMenu_Template_input_ngModelChange_27_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.currentUser.firstName, $event) || (ctx.currentUser.firstName = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "label", 16);
      \u0275\u0275text(29, "First Name");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "p-floatlabel", 12)(31, "input", 17);
      \u0275\u0275twoWayListener("ngModelChange", function UserMenu_Template_input_ngModelChange_31_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.currentUser.lastName, $event) || (ctx.currentUser.lastName = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "label", 18);
      \u0275\u0275text(33, "Last Name");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "p-floatlabel", 12)(35, "input", 19);
      \u0275\u0275twoWayListener("ngModelChange", function UserMenu_Template_input_ngModelChange_35_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.currentUser.email, $event) || (ctx.currentUser.email = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "label", 20);
      \u0275\u0275text(37, "Email");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "p-floatlabel", 12)(39, "input", 21);
      \u0275\u0275twoWayListener("ngModelChange", function UserMenu_Template_input_ngModelChange_39_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.currentUser.phoneNumber, $event) || (ctx.currentUser.phoneNumber = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "label", 22);
      \u0275\u0275text(41, "Phone Number");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(42, UserMenu_ng_template_42_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(49, _c0));
      \u0275\u0275property("hidden", !ctx.canChangePassword);
      \u0275\u0275advance();
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(50, _c0));
      \u0275\u0275advance();
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(51, _c0));
      \u0275\u0275property("disabled", ctx.isImpersonating);
      \u0275\u0275advance();
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(52, _c1));
      \u0275\u0275twoWayProperty("visible", ctx.changePasswordVisible);
      \u0275\u0275property("modal", true);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.oldPassword);
      \u0275\u0275property("toggleMask", true)("fluid", true)("feedback", false);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.newPassword1);
      \u0275\u0275property("toggleMask", true)("fluid", true)("feedback", true);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.newPassword2);
      \u0275\u0275property("toggleMask", true)("fluid", true)("feedback", true);
      \u0275\u0275advance(3);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(53, _c2));
      \u0275\u0275twoWayProperty("visible", ctx.editProfileVisible);
      \u0275\u0275property("breakpoints", \u0275\u0275pureFunction0(54, _c3))("modal", true);
      \u0275\u0275advance(9);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(55, _c0));
      \u0275\u0275twoWayProperty("ngModel", ctx.currentUser.loginName);
      \u0275\u0275property("disabled", !ctx.canEditProfile);
      \u0275\u0275advance(7);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(56, _c0));
      \u0275\u0275twoWayProperty("ngModel", ctx.currentUser.firstName);
      \u0275\u0275property("disabled", !ctx.canEditProfile);
      \u0275\u0275advance(4);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(57, _c0));
      \u0275\u0275twoWayProperty("ngModel", ctx.currentUser.lastName);
      \u0275\u0275property("disabled", !ctx.canEditProfile);
      \u0275\u0275advance(4);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(58, _c0));
      \u0275\u0275twoWayProperty("ngModel", ctx.currentUser.email);
      \u0275\u0275property("disabled", !ctx.canEditProfile);
      \u0275\u0275advance(4);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(59, _c0));
      \u0275\u0275twoWayProperty("ngModel", ctx.currentUser.phoneNumber);
      \u0275\u0275property("disabled", !ctx.canEditProfile);
    }
  }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, SelectButtonModule, DialogModule, Dialog, PasswordModule, Password, ButtonModule, Button, FloatLabelModule, FloatLabel, MultiSelectModule, InputTextModule, InputText, TooltipModule, Tooltip, ChipModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserMenu, { className: "UserMenu", filePath: "src/app/layout/component/app.usermenu.ts", lineNumber: 86 });
})();

// src/app/interfaces/usersinterface.ts
var UserInterface = class _UserInterface {
  http;
  allUsers = [];
  loaded = false;
  constructor(http) {
    this.http = http;
    this.loadAllUsers();
  }
  GetUserNameByID(id) {
    if (id == void 0 || id == null || id == "")
      return "None";
    var user = this.allUsers.find((x) => x.id == id);
    if (user)
      return user.firstName + "@" + user.lastName;
    return "Unknown User";
  }
  loadAllUsers() {
    this.allUsers = [];
    this.http.get(APIURL + Endpoints.Core.Users.Get_AllUsers).subscribe((l) => {
      this.allUsers = l;
      this.loaded = true;
    });
  }
  static \u0275fac = function UserInterface_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserInterface)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserInterface, factory: _UserInterface.\u0275fac, providedIn: "root" });
};

// src/app/layout/component/app.impersonationmenu.ts
var _c02 = () => ({ width: "100%" });
function ImpersonationMenu_div_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.userInterface.GetUserNameByID(user_r3.id));
  }
}
function ImpersonationMenu_div_0_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.userInterface.GetUserNameByID(user_r4.id));
  }
}
function ImpersonationMenu_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "p-select", 4);
    \u0275\u0275twoWayListener("ngModelChange", function ImpersonationMenu_div_0_Template_p_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.targetID, $event) || (ctx_r1.targetID = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(2, ImpersonationMenu_div_0_ng_template_2_Template, 3, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, ImpersonationMenu_div_0_ng_template_4_Template, 3, 1, "ng-template", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p-button", 6);
    \u0275\u0275listener("click", function ImpersonationMenu_div_0_Template_p_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.impersonate());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("options", ctx_r1.userInterface.allUsers);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.targetID);
    \u0275\u0275property("filter", true);
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(5, _c02));
  }
}
function ImpersonationMenu_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "p-button", 10);
    \u0275\u0275listener("click", function ImpersonationMenu_div_1_Template_p_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.stopImpersonate());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(2, _c02));
  }
}
var ImpersonationMenu = class _ImpersonationMenu {
  router;
  http;
  userInterface;
  targetID = "";
  constructor(router, http, userInterface) {
    this.router = router;
    this.http = http;
    this.userInterface = userInterface;
  }
  ngOnInit() {
    if (this.isImpersonating())
      return;
  }
  impersonate() {
    if (this.targetID == null || this.targetID == "")
      return;
    var token = localStorage.getItem("jwtToken");
    if (token)
      localStorage.setItem("impersonating", token);
    var input = {
      targetUser: this.targetID
    };
    this.http.post(APIURL + Endpoints.Core.Authentication.Post_Impersonate, input).subscribe((c) => {
      if (c.jwtToken != "") {
        localStorage.removeItem("perms");
        const helper = new JwtHelperService();
        var result = helper.decodeToken(c.jwtToken);
        if (!result)
          return;
        if (result.role == null)
          result.role = [];
        var permsStr = "";
        result.role.forEach((p) => {
          permsStr += p + ";";
        });
        localStorage.setItem("perms", permsStr);
        localStorage.setItem("jwtToken", c.jwtToken);
        window.location.replace("/");
      }
    });
  }
  stopImpersonate() {
    var impToken = localStorage.getItem("impersonating");
    var token = localStorage.getItem("jwtToken");
    if (token && impToken) {
      localStorage.removeItem("perms");
      const helper = new JwtHelperService();
      var result = helper.decodeToken(impToken);
      if (!result)
        return;
      if (result.role == null)
        result.role = [];
      var permsStr = "";
      result.role.forEach((p) => {
        permsStr += p + ";";
      });
      localStorage.setItem("perms", permsStr);
      localStorage.setItem("jwtToken", impToken);
      localStorage.removeItem("impersonating");
      window.location.replace("/");
    }
  }
  isImpersonating() {
    if (localStorage.getItem("impersonating"))
      return true;
    return false;
  }
  static \u0275fac = function ImpersonationMenu_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ImpersonationMenu)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(UserInterface));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ImpersonationMenu, selectors: [["app-impersonationmenu"]], hostAttrs: [1, "hidden", "absolute", "top-[3.25rem]", "right-0", "w-72", "p-4", "card", "border", "border-surface", "rounded-border", "origin-top", "shadow-[0px_3px_5px_rgba(0,0,0,0.02),0px_0px_2px_rgba(0,0,0,0.05),0px_1px_4px_rgba(0,0,0,0.08)]"], decls: 2, vars: 2, consts: [["item", ""], ["class", "flex flex-col gap-2", 4, "ngIf"], ["class", "flex flex-col gap-4", 4, "ngIf"], [1, "flex", "flex-col", "gap-2"], ["optionValue", "id", "placeholder", "Select User", "display", "chip", 3, "ngModelChange", "options", "ngModel", "filter"], ["pTemplate", "selectedItem"], ["icon", "pi pi-user", "label", "Impersonate", "pTooltip", "Impersonate the selected user", 3, "click"], [1, "flex", "items-center"], [1, "item"], [1, "flex", "flex-col", "gap-4"], ["icon", "pi pi-eject", "severity", "danger", "label", "Stop Impersonating", 3, "click"]], template: function ImpersonationMenu_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ImpersonationMenu_div_0_Template, 6, 6, "div", 1)(1, ImpersonationMenu_div_1_Template, 2, 3, "div", 2);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", !ctx.isImpersonating());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isImpersonating());
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, NgControlStatus, NgModel, SelectButtonModule, PrimeTemplate, DialogModule, PasswordModule, ButtonModule, Button, SelectModule, Select, TooltipModule, Tooltip], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ImpersonationMenu, { className: "ImpersonationMenu", filePath: "src/app/layout/component/app.impersonationmenu.ts", lineNumber: 54 });
})();

// node_modules/primeng/fesm2022/primeng-overlaybadge.mjs
var theme = ({
  dt
}) => `
.p-overlaybadge {
    position: relative;
}

.p-overlaybadge .p-badge {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
    outline-width: ${dt("overlaybadge.outline.width")};
    outline-style: solid;
    outline-color: ${dt("overlaybadge.outline.color")};
}
`;
var classes = {
  root: "p-overlaybadge"
};
var OverlayBadgeStyle = class _OverlayBadgeStyle extends BaseStyle {
  name = "overlaybadge";
  theme = theme;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275OverlayBadgeStyle_BaseFactory;
    return function OverlayBadgeStyle_Factory(__ngFactoryType__) {
      return (\u0275OverlayBadgeStyle_BaseFactory || (\u0275OverlayBadgeStyle_BaseFactory = \u0275\u0275getInheritedFactory(_OverlayBadgeStyle)))(__ngFactoryType__ || _OverlayBadgeStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _OverlayBadgeStyle,
    factory: _OverlayBadgeStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayBadgeStyle, [{
    type: Injectable
  }], null, null);
})();
var _c03 = ["*"];
var OverlayBadge = class _OverlayBadge extends BaseComponent {
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Size of the badge, valid options are "large" and "xlarge".
   * @group Props
   */
  badgeSize;
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
   * When specified, disables the component.
   * @group Props
   */
  badgeDisabled = false;
  /**
   * Size of the badge, valid options are "large" and "xlarge".
   * @group Props
   * @deprecated use badgeSize instead.
   */
  set size(value) {
    this._size = value;
    !this.badgeSize && this.size && console.log("size property is deprecated and will removed in v18, use badgeSize instead.");
  }
  get size() {
    return this._size;
  }
  _size;
  _componentStyle = inject(OverlayBadgeStyle);
  constructor() {
    super();
  }
  static \u0275fac = function OverlayBadge_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OverlayBadge)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _OverlayBadge,
    selectors: [["p-overlayBadge"], ["p-overlay-badge"], ["p-overlaybadge"]],
    inputs: {
      styleClass: "styleClass",
      style: "style",
      badgeSize: "badgeSize",
      severity: "severity",
      value: "value",
      badgeDisabled: [2, "badgeDisabled", "badgeDisabled", booleanAttribute],
      size: "size"
    },
    features: [\u0275\u0275ProvidersFeature([OverlayBadgeStyle]), \u0275\u0275InputTransformsFeature, \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c03,
    decls: 3,
    vars: 7,
    consts: [[1, "p-overlaybadge"], [3, "styleClass", "badgeSize", "severity", "value", "badgeDisabled"]],
    template: function OverlayBadge_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275projection(1);
        \u0275\u0275element(2, "p-badge", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275styleMap(ctx.style);
        \u0275\u0275property("styleClass", ctx.styleClass)("badgeSize", ctx.badgeSize)("severity", ctx.severity)("value", ctx.value)("badgeDisabled", ctx.badgeDisabled);
      }
    },
    dependencies: [CommonModule, BadgeModule, Badge, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayBadge, [{
    type: Component,
    args: [{
      selector: "p-overlayBadge, p-overlay-badge, p-overlaybadge",
      standalone: true,
      imports: [CommonModule, BadgeModule, SharedModule],
      template: `
        <div class="p-overlaybadge">
            <ng-content></ng-content>
            <p-badge [styleClass]="styleClass" [style]="style" [badgeSize]="badgeSize" [severity]="severity" [value]="value" [badgeDisabled]="badgeDisabled" />
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [OverlayBadgeStyle]
    }]
  }], () => [], {
    styleClass: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    badgeSize: [{
      type: Input
    }],
    severity: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    badgeDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    size: [{
      type: Input
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OverlayBadge, {
    className: "OverlayBadge",
    filePath: "overlaybadge.ts",
    lineNumber: 26
  });
})();
var OverlayBadgeModule = class _OverlayBadgeModule {
  static \u0275fac = function OverlayBadgeModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OverlayBadgeModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _OverlayBadgeModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [OverlayBadge, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayBadgeModule, [{
    type: NgModule,
    args: [{
      imports: [OverlayBadge, SharedModule],
      exports: [OverlayBadge, SharedModule]
    }]
  }], null, null);
})();

// src/app/layout/component/app.topbar.ts
var _c04 = (a0, a1) => ({ "pi ": true, "pi-moon": a0, "pi-sun": a1 });
var _c12 = () => ({ height: "45px" });
function AppTopbar_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 22);
  }
  if (rf & 2) {
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(2, _c12));
  }
}
function AppTopbar_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 23);
  }
  if (rf & 2) {
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(2, _c12));
  }
}
var AppTopbar = class _AppTopbar {
  layoutService;
  items;
  userInterface;
  unreadMessages = 0;
  constructor(layoutService, userInterface) {
    this.layoutService = layoutService;
    this.userInterface = userInterface;
  }
  showUnreadMessageBadge() {
    return this.unreadMessages == 0;
  }
  getPrettyUsername() {
    return this.userInterface.GetUserNameByID(JWTTokenHelpers.GetUserID());
  }
  toggleDarkMode() {
    this.layoutService.layoutConfig.update((state2) => __spreadProps(__spreadValues({}, state2), { darkTheme: !state2.darkTheme }));
  }
  CanImpersonate() {
    if (PermissionHelpers.HasPermission(PermissionsTable.Core_User_Impersonate) == true || localStorage.getItem("impersonating"))
      return true;
    return false;
  }
  static \u0275fac = function AppTopbar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppTopbar)(\u0275\u0275directiveInject(LayoutService), \u0275\u0275directiveInject(UserInterface));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppTopbar, selectors: [["app-topbar"]], decls: 31, vars: 11, consts: [[1, "layout-topbar"], [1, "layout-topbar-logo-container"], [1, "layout-menu-button", "layout-topbar-action", 3, "click"], [1, "pi", "pi-bars"], ["routerLink", "/", 1, "layout-topbar-logo"], ["src", "src/assets/images/logo_small_transparant.png", 3, "style"], ["src", "src/assets/images/logo_small_transparant_inv.png", 3, "style"], [1, "layout-topbar-actions"], [1, "layout-config-menu"], ["type", "button", 1, "layout-topbar-action", 3, "click"], [3, "ngClass"], [1, "relative"], ["pStyleClass", "@next", "enterFromClass", "hidden", "enterActiveClass", "animate-scalein", "leaveToClass", "hidden", "leaveActiveClass", "animate-fadeout", 1, "layout-topbar-action", "layout-topbar-action-highlight", 3, "hideOnOutsideClick"], [1, "pi", "pi-palette"], ["pStyleClass", "@next", "enterFromClass", "hidden", "enterActiveClass", "animate-scalein", "leaveToClass", "hidden", "leaveActiveClass", "animate-fadeout", 1, "layout-topbar-menu-button", "layout-topbar-action", 3, "hideOnOutsideClick"], [1, "pi", "pi-ellipsis-v"], [1, "layout-topbar-menu", "hidden", "lg:block"], [1, "layout-topbar-menu-content"], [1, "flex", "flex-row", "items-center", "justify-between"], [1, "pi", "pi-user"], [1, "relative", 3, "hidden"], [1, "pi", "pi-at"], ["src", "src/assets/images/logo_small_transparant.png"], ["src", "src/assets/images/logo_small_transparant_inv.png"]], template: function AppTopbar_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
      \u0275\u0275listener("click", function AppTopbar_Template_button_click_2_listener() {
        return ctx.layoutService.onMenuToggle();
      });
      \u0275\u0275element(3, "i", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "a", 4);
      \u0275\u0275template(5, AppTopbar_Conditional_5_Template, 1, 3, "img", 5)(6, AppTopbar_Conditional_6_Template, 1, 3, "img", 6);
      \u0275\u0275elementStart(7, "span");
      \u0275\u0275text(8, "HelForm");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "div", 7)(10, "div", 8)(11, "button", 9);
      \u0275\u0275listener("click", function AppTopbar_Template_button_click_11_listener() {
        return ctx.toggleDarkMode();
      });
      \u0275\u0275element(12, "i", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 11)(14, "button", 12);
      \u0275\u0275element(15, "i", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275element(16, "app-configurator");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "button", 14);
      \u0275\u0275element(18, "i", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 16)(20, "div", 17)(21, "div", 18);
      \u0275\u0275text(22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 11)(24, "button", 12);
      \u0275\u0275element(25, "i", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275element(26, "app-usermenu");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 20)(28, "button", 12);
      \u0275\u0275element(29, "i", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275element(30, "app-impersonationmenu");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.layoutService.isDarkTheme() ? 5 : 6);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(8, _c04, ctx.layoutService.isDarkTheme(), !ctx.layoutService.isDarkTheme()));
      \u0275\u0275advance(2);
      \u0275\u0275property("hideOnOutsideClick", true);
      \u0275\u0275advance(3);
      \u0275\u0275property("hideOnOutsideClick", true);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.getPrettyUsername(), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("hideOnOutsideClick", true);
      \u0275\u0275advance(3);
      \u0275\u0275property("hidden", !ctx.CanImpersonate());
      \u0275\u0275advance();
      \u0275\u0275property("hideOnOutsideClick", true);
    }
  }, dependencies: [RouterModule, RouterLink, CommonModule, NgClass, StyleClassModule, StyleClass, AppConfigurator, UserMenu, ImpersonationMenu, OverlayBadgeModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppTopbar, { className: "AppTopbar", filePath: "src/app/layout/component/app.topbar.ts", lineNumber: 103 });
})();

// src/app/layout/component/app.menuitem.ts
var _c05 = ["app-menuitem", ""];
var _c13 = () => ({ paths: "exact", queryParams: "ignored", matrixParams: "ignored", fragment: "ignored" });
function AppMenuitem_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.item.label);
  }
}
function AppMenuitem_a_2_i_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 9);
  }
}
function AppMenuitem_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 5);
    \u0275\u0275listener("click", function AppMenuitem_a_2_Template_a_click_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.itemClick($event));
    });
    \u0275\u0275element(1, "i", 6);
    \u0275\u0275elementStart(2, "span", 7);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AppMenuitem_a_2_i_4_Template, 1, 0, "i", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r0.item.styleClass);
    \u0275\u0275attribute("href", ctx_r0.item.url, \u0275\u0275sanitizeUrl)("target", ctx_r0.item.target);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.item.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.item.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.item.items);
  }
}
function AppMenuitem_a_3_i_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 9);
  }
}
function AppMenuitem_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 10);
    \u0275\u0275listener("click", function AppMenuitem_a_3_Template_a_click_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.itemClick($event));
    });
    \u0275\u0275element(1, "i", 6);
    \u0275\u0275elementStart(2, "span", 7);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AppMenuitem_a_3_i_4_Template, 1, 0, "i", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r0.item.styleClass)("routerLink", ctx_r0.item.routerLink)("routerLinkActiveOptions", ctx_r0.item.routerLinkActiveOptions || \u0275\u0275pureFunction0(14, _c13))("fragment", ctx_r0.item.fragment)("queryParamsHandling", ctx_r0.item.queryParamsHandling)("preserveFragment", ctx_r0.item.preserveFragment)("skipLocationChange", ctx_r0.item.skipLocationChange)("replaceUrl", ctx_r0.item.replaceUrl)("state", ctx_r0.item.state)("queryParams", ctx_r0.item.queryParams);
    \u0275\u0275attribute("target", ctx_r0.item.target);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.item.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.item.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.item.items);
  }
}
function AppMenuitem_ul_4_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "li", 12);
  }
  if (rf & 2) {
    const child_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(child_r4["badgeClass"]);
    \u0275\u0275property("item", child_r4)("index", i_r5)("parentKey", ctx_r0.key);
  }
}
function AppMenuitem_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul");
    \u0275\u0275template(1, AppMenuitem_ul_4_ng_template_1_Template, 1, 5, "ng-template", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("@children", ctx_r0.submenuAnimation);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.item.items);
  }
}
var AppMenuitem = class _AppMenuitem {
  router;
  layoutService;
  item;
  index;
  root;
  parentKey;
  active = false;
  menuSourceSubscription;
  menuResetSubscription;
  key = "";
  constructor(router, layoutService) {
    this.router = router;
    this.layoutService = layoutService;
    this.menuSourceSubscription = this.layoutService.menuSource$.subscribe((value) => {
      Promise.resolve(null).then(() => {
        if (value.routeEvent) {
          this.active = value.key === this.key || value.key.startsWith(this.key + "-") ? true : false;
        } else {
          if (value.key !== this.key && !value.key.startsWith(this.key + "-")) {
            this.active = false;
          }
        }
      });
    });
    this.menuResetSubscription = this.layoutService.resetSource$.subscribe(() => {
      this.active = false;
    });
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((params) => {
      if (this.item.routerLink) {
        this.updateActiveStateFromRoute();
      }
    });
  }
  ngOnInit() {
    this.key = this.parentKey ? this.parentKey + "-" + this.index : String(this.index);
    if (this.item.routerLink) {
      this.updateActiveStateFromRoute();
    }
  }
  updateActiveStateFromRoute() {
    let activeRoute = this.router.isActive(this.item.routerLink[0], { paths: "exact", queryParams: "ignored", matrixParams: "ignored", fragment: "ignored" });
    if (activeRoute) {
      this.layoutService.onMenuStateChange({ key: this.key, routeEvent: true });
    }
  }
  itemClick(event) {
    if (this.item.disabled) {
      event.preventDefault();
      return;
    }
    if (this.item.command) {
      this.item.command({ originalEvent: event, item: this.item });
    }
    if (this.item.items) {
      this.active = !this.active;
    }
    this.layoutService.onMenuStateChange({ key: this.key });
  }
  get submenuAnimation() {
    return this.root ? "expanded" : this.active ? "expanded" : "collapsed";
  }
  get activeClass() {
    return this.active && !this.root;
  }
  ngOnDestroy() {
    if (this.menuSourceSubscription) {
      this.menuSourceSubscription.unsubscribe();
    }
    if (this.menuResetSubscription) {
      this.menuResetSubscription.unsubscribe();
    }
  }
  static \u0275fac = function AppMenuitem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppMenuitem)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(LayoutService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppMenuitem, selectors: [["", "app-menuitem", ""]], hostVars: 4, hostBindings: function AppMenuitem_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("layout-root-menuitem", ctx.root)("active-menuitem", ctx.activeClass);
    }
  }, inputs: { item: "item", index: "index", root: "root", parentKey: "parentKey" }, features: [\u0275\u0275ProvidersFeature([LayoutService])], attrs: _c05, decls: 5, vars: 4, consts: [["class", "layout-menuitem-root-text", 4, "ngIf"], ["tabindex", "0", "pRipple", "", 3, "ngClass", "click", 4, "ngIf"], ["routerLinkActive", "active-route", "tabindex", "0", "pRipple", "", 3, "ngClass", "routerLink", "routerLinkActiveOptions", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "queryParams", "click", 4, "ngIf"], [4, "ngIf"], [1, "layout-menuitem-root-text"], ["tabindex", "0", "pRipple", "", 3, "click", "ngClass"], [1, "layout-menuitem-icon", 3, "ngClass"], [1, "layout-menuitem-text"], ["class", "pi pi-fw pi-angle-down layout-submenu-toggler", 4, "ngIf"], [1, "pi", "pi-fw", "pi-angle-down", "layout-submenu-toggler"], ["routerLinkActive", "active-route", "tabindex", "0", "pRipple", "", 3, "click", "ngClass", "routerLink", "routerLinkActiveOptions", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "queryParams"], ["ngFor", "", 3, "ngForOf"], ["app-menuitem", "", 3, "item", "index", "parentKey"]], template: function AppMenuitem_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementContainerStart(0);
      \u0275\u0275template(1, AppMenuitem_div_1_Template, 2, 1, "div", 0)(2, AppMenuitem_a_2_Template, 5, 6, "a", 1)(3, AppMenuitem_a_3_Template, 5, 15, "a", 2)(4, AppMenuitem_ul_4_Template, 2, 2, "ul", 3);
      \u0275\u0275elementContainerEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.root && ctx.item.visible !== false);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (!ctx.item.routerLink || ctx.item.items) && ctx.item.visible !== false);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.item.routerLink && !ctx.item.items && ctx.item.visible !== false);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.item.items && ctx.item.visible !== false);
    }
  }, dependencies: [_AppMenuitem, CommonModule, NgClass, NgForOf, NgIf, RouterModule, RouterLink, RouterLinkActive, RippleModule, Ripple], encapsulation: 2, data: { animation: [
    trigger("children", [
      state("collapsed", style({
        height: "0"
      })),
      state("expanded", style({
        height: "*"
      })),
      transition("collapsed <=> expanded", animate("400ms cubic-bezier(0.86, 0, 0.07, 1)"))
    ])
  ] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppMenuitem, { className: "AppMenuitem", filePath: "src/app/layout/component/app.menuitem.ts", lineNumber: 72 });
})();

// src/app/layout/component/app.menu.ts
function AppMenu_ng_container_1_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "li", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const item_r2 = ctx_r0.$implicit;
    const i_r3 = ctx_r0.index;
    \u0275\u0275property("item", item_r2)("index", i_r3)("root", true);
  }
}
function AppMenu_ng_container_1_li_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "li", 5);
  }
}
function AppMenu_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AppMenu_ng_container_1_li_1_Template, 1, 3, "li", 2)(2, AppMenu_ng_container_1_li_2_Template, 1, 0, "li", 3);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !item_r2.separator);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r2.separator);
  }
}
var AppMenu = class _AppMenu {
  model = [];
  ngOnInit() {
    this.model = [
      {
        label: "Home",
        items: [
          {
            label: "Dashboard",
            icon: "pi pi-fw pi-home",
            routerLink: ["/"]
          }
        ]
      },
      {
        label: "Core",
        visible: PermissionHelpers.HasPermission(PermissionsTable.Core_Users_Read),
        items: [
          {
            label: "Edit Users",
            routerLink: ["/pages/core/editusers"],
            visible: PermissionHelpers.HasPermission(PermissionsTable.Core_Users_Read),
            icon: "pi pi-user"
          },
          {
            label: "Permissions",
            routerLink: ["/pages/core/permissions"],
            visible: PermissionHelpers.HasPermission(PermissionsTable.Core_Permission_Read),
            icon: "pi pi-lock"
          }
        ]
      }
    ];
  }
  static \u0275fac = function AppMenu_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppMenu)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppMenu, selectors: [["app-menu"]], decls: 2, vars: 1, consts: [[1, "layout-menu"], [4, "ngFor", "ngForOf"], ["app-menuitem", "", 3, "item", "index", "root", 4, "ngIf"], ["class", "menu-separator", 4, "ngIf"], ["app-menuitem", "", 3, "item", "index", "root"], [1, "menu-separator"]], template: function AppMenu_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ul", 0);
      \u0275\u0275template(1, AppMenu_ng_container_1_Template, 3, 2, "ng-container", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.model);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, AppMenuitem, RouterModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppMenu, { className: "AppMenu", filePath: "src/app/layout/component/app.menu.ts", lineNumber: 20 });
})();

// src/app/layout/component/app.sidebar.ts
var _c06 = () => ({ "position": "absolute", "opacity": "0.1", "max-width": "80%", "margin-left": "-20px", "margin-top": "-10px" });
function AppSidebar_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 3);
  }
  if (rf & 2) {
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(2, _c06));
  }
}
function AppSidebar_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 4);
  }
  if (rf & 2) {
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(2, _c06));
  }
}
var AppSidebar = class _AppSidebar {
  el;
  layoutService;
  constructor(el, layoutService) {
    this.el = el;
    this.layoutService = layoutService;
  }
  static \u0275fac = function AppSidebar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppSidebar)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(LayoutService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppSidebar, selectors: [["app-sidebar"]], decls: 4, vars: 1, consts: [[1, "layout-sidebar"], ["src", "src/assets/images/logo_menu.png", 3, "style"], ["src", "src/assets/images/logo_menu_inv.png", 3, "style"], ["src", "src/assets/images/logo_menu.png"], ["src", "src/assets/images/logo_menu_inv.png"]], template: function AppSidebar_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, AppSidebar_Conditional_1_Template, 1, 3, "img", 1)(2, AppSidebar_Conditional_2_Template, 1, 3, "img", 2);
      \u0275\u0275element(3, "app-menu");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.layoutService.isDarkTheme() ? 1 : 2);
    }
  }, dependencies: [AppMenu], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppSidebar, { className: "AppSidebar", filePath: "src/app/layout/component/app.sidebar.ts", lineNumber: 21 });
})();

// src/app/layout/component/app.footer.ts
function AppFooter_p_tag_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-tag", 2);
  }
}
var AppFooter = class _AppFooter {
  isImpersonating = false;
  ngOnInit() {
    if (localStorage.getItem("impersonating"))
      this.isImpersonating = true;
  }
  static \u0275fac = function AppFooter_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppFooter)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppFooter, selectors: [["app-footer"]], decls: 3, vars: 1, consts: [[1, "layout-footer"], ["severity", "warn", "value", "Impersonating user", 4, "ngIf"], ["severity", "warn", "value", "Impersonating user"]], template: function AppFooter_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275text(1, " primengtemplate \xA9 2025 ");
      \u0275\u0275template(2, AppFooter_p_tag_2_Template, 1, 0, "p-tag", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isImpersonating);
    }
  }, dependencies: [TagModule, Tag, CommonModule, NgIf], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppFooter, { className: "AppFooter", filePath: "src/app/layout/component/app.footer.ts", lineNumber: 14 });
})();

// src/app/layout/component/app.layout.ts
var AppLayout = class _AppLayout {
  layoutService;
  renderer;
  router;
  overlayMenuOpenSubscription;
  menuOutsideClickListener;
  appSidebar;
  appTopBar;
  constructor(layoutService, renderer, router) {
    this.layoutService = layoutService;
    this.renderer = renderer;
    this.router = router;
    this.overlayMenuOpenSubscription = this.layoutService.overlayOpen$.subscribe(() => {
      if (!this.menuOutsideClickListener) {
        this.menuOutsideClickListener = this.renderer.listen("document", "click", (event) => {
          if (this.isOutsideClicked(event)) {
            this.hideMenu();
          }
        });
      }
      if (this.layoutService.layoutState().staticMenuMobileActive) {
        this.blockBodyScroll();
      }
    });
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.hideMenu();
    });
  }
  isOutsideClicked(event) {
    const sidebarEl = document.querySelector(".layout-sidebar");
    const topbarEl = document.querySelector(".layout-menu-button");
    const eventTarget = event.target;
    return !(sidebarEl?.isSameNode(eventTarget) || sidebarEl?.contains(eventTarget) || topbarEl?.isSameNode(eventTarget) || topbarEl?.contains(eventTarget));
  }
  hideMenu() {
    this.layoutService.layoutState.update((prev) => __spreadProps(__spreadValues({}, prev), { overlayMenuActive: false, staticMenuMobileActive: false, menuHoverActive: false }));
    if (this.menuOutsideClickListener) {
      this.menuOutsideClickListener();
      this.menuOutsideClickListener = null;
    }
    this.unblockBodyScroll();
  }
  blockBodyScroll() {
    if (document.body.classList) {
      document.body.classList.add("blocked-scroll");
    } else {
      document.body.className += " blocked-scroll";
    }
  }
  unblockBodyScroll() {
    if (document.body.classList) {
      document.body.classList.remove("blocked-scroll");
    } else {
      document.body.className = document.body.className.replace(new RegExp("(^|\\b)" + "blocked-scroll".split(" ").join("|") + "(\\b|$)", "gi"), " ");
    }
  }
  get containerClass() {
    return {
      "layout-overlay": this.layoutService.layoutConfig().menuMode === "overlay",
      "layout-static": this.layoutService.layoutConfig().menuMode === "static",
      "layout-static-inactive": this.layoutService.layoutState().staticMenuDesktopInactive && this.layoutService.layoutConfig().menuMode === "static",
      "layout-overlay-active": this.layoutService.layoutState().overlayMenuActive,
      "layout-mobile-active": this.layoutService.layoutState().staticMenuMobileActive
    };
  }
  ngOnDestroy() {
    if (this.overlayMenuOpenSubscription) {
      this.overlayMenuOpenSubscription.unsubscribe();
    }
    if (this.menuOutsideClickListener) {
      this.menuOutsideClickListener();
    }
  }
  static \u0275fac = function AppLayout_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppLayout)(\u0275\u0275directiveInject(LayoutService), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppLayout, selectors: [["app-layout"]], viewQuery: function AppLayout_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(AppSidebar, 5);
      \u0275\u0275viewQuery(AppTopbar, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.appSidebar = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.appTopBar = _t.first);
    }
  }, decls: 8, vars: 1, consts: [[1, "layout-wrapper", 3, "ngClass"], [1, "layout-main-container"], [1, "layout-main"], [1, "layout-mask", "animate-fadein"]], template: function AppLayout_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-topbar")(2, "app-sidebar");
      \u0275\u0275elementStart(3, "div", 1)(4, "div", 2);
      \u0275\u0275element(5, "router-outlet");
      \u0275\u0275elementEnd();
      \u0275\u0275element(6, "app-footer");
      \u0275\u0275elementEnd();
      \u0275\u0275element(7, "div", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", ctx.containerClass);
    }
  }, dependencies: [CommonModule, NgClass, AppTopbar, AppSidebar, RouterModule, RouterOutlet, AppFooter, TagModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppLayout, { className: "AppLayout", filePath: "src/app/layout/component/app.layout.ts", lineNumber: 27 });
})();

// src/app/pages/dashboard/dashboard.ts
var Dashboard = class _Dashboard {
  static \u0275fac = function Dashboard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Dashboard)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Dashboard, selectors: [["app-dashboard"]], decls: 2, vars: 0, consts: [[1, "card"]], template: function Dashboard_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275text(1, " Dashboard ");
      \u0275\u0275elementEnd();
    }
  }, dependencies: [CommonModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Dashboard, { className: "Dashboard", filePath: "src/app/pages/dashboard/dashboard.ts", lineNumber: 13 });
})();

// src/app/pages/notfound/notfound.ts
function Notfound_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 2);
  }
}
function Notfound_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 3);
  }
}
var Notfound = class _Notfound {
  layoutService;
  constructor(layoutService) {
    this.layoutService = layoutService;
  }
  static \u0275fac = function Notfound_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Notfound)(\u0275\u0275directiveInject(LayoutService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Notfound, selectors: [["app-notfound"]], decls: 14, vars: 1, consts: [[1, "flex", "items-center", "justify-center", "min-h-screen", "overflow-hidden"], [1, "flex", "flex-col", "items-center", "justify-center"], ["src", "src/assets/images/logo_small_transparant.png", 1, "mb-8", "w-32", "shrink-0", "mx-auto"], ["src", "src/assets/images/logo_small_transparant_inv.png", 1, "mb-8", "w-32", "shrink-0", "mx-auto"], [2, "border-radius", "56px", "padding", "0.3rem", "background", "linear-gradient(180deg, var(--primary-color) 2%, rgba(33, 150, 243, 0) 110%)"], [1, "w-full", "card", "py-20", "px-8", "sm:px-20", 2, "border-radius", "53px"], [1, "text-primary", "font-bold", "text-3xl"], [1, "font-bold", "text-3xl", "lg:text-5xl", "mb-2"], [1, "mb-8"], ["label", "Go to Dashboard", "routerLink", "/"]], template: function Notfound_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-floating-configurator");
      \u0275\u0275elementStart(1, "div", 0)(2, "div", 1);
      \u0275\u0275template(3, Notfound_Conditional_3_Template, 1, 0, "img", 2)(4, Notfound_Conditional_4_Template, 1, 0, "img", 3);
      \u0275\u0275elementStart(5, "div", 4)(6, "div", 5)(7, "span", 6);
      \u0275\u0275text(8, "404");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "h1", 7);
      \u0275\u0275text(10, "Not Found");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 8);
      \u0275\u0275text(12, "Requested resource is not available.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(13, "p-button", 9);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.layoutService.isDarkTheme() ? 3 : 4);
    }
  }, dependencies: [RouterModule, RouterLink, AppFloatingConfigurator, ButtonModule, Button], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Notfound, { className: "Notfound", filePath: "src/app/pages/notfound/notfound.ts", lineNumber: 33 });
})();

// src/app.routes.ts
var appRoutes = [
  { path: "auth", loadChildren: () => import("./chunk-2FK5RSDT.js") },
  {
    path: "",
    component: AppLayout,
    children: [
      { path: "", component: Dashboard },
      { path: "pages", loadChildren: () => import("./chunk-ZVWY6VQD.js") }
    ]
  },
  { path: "notfound", component: Notfound },
  { path: "**", redirectTo: "/notfound" }
];

// src/app/auth-interceptor.interceptor.ts
var authInterceptor = (req, next) => {
  const messageService = inject(MessageService);
  const router = inject(Router);
  var authToken = localStorage.getItem("jwtToken");
  if (authToken) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`
      }
    });
  }
  return next(req).pipe(catchError((error) => {
    if (error instanceof HttpErrorResponse && error.status === 401) {
      router.navigate(["/auth/login"]);
    }
    messageService.add({ severity: "error", summary: "Error Message", detail: "Error during request: " + error.message });
    return throwError(() => error);
  }));
};

// src/app.config.ts
var appConfig = {
  providers: [
    provideRouter(appRoutes, withInMemoryScrolling({ anchorScrolling: "enabled", scrollPositionRestoration: "enabled" }), withEnabledBlockingInitialNavigation()),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideAnimationsAsync(),
    MessageService,
    providePrimeNG({ theme: { preset: aura_default, options: { darkModeSelector: ".app-dark" } } })
  ]
};

// node_modules/primeng/fesm2022/primeng-toast.mjs
var theme2 = ({
  dt
}) => `
.p-toast {
    width: ${dt("toast.width")};
    white-space: pre-line;
    word-break: break-word;
}

.p-toast-message {
    margin: 0 0 1rem 0;
}

.p-toast-message-icon {
    flex-shrink: 0;
    font-size: ${dt("toast.icon.size")};
    width: ${dt("toast.icon.size")};
    height: ${dt("toast.icon.size")};
}

.p-toast-message-content {
    display: flex;
    align-items: flex-start;
    padding: ${dt("toast.content.padding")};
    gap: ${dt("toast.content.gap")};
}

.p-toast-message-text {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    gap: ${dt("toast.text.gap")};
}

.p-toast-summary {
    font-weight: ${dt("toast.summary.font.weight")};
    font-size: ${dt("toast.summary.font.size")};
}

.p-toast-detail {
    font-weight: ${dt("toast.detail.font.weight")};
    font-size: ${dt("toast.detail.font.size")};
}

.p-toast-close-button {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    background: transparent;
    transition: background ${dt("toast.transition.duration")}, color ${dt("toast.transition.duration")}, outline-color ${dt("toast.transition.duration")}, box-shadow ${dt("toast.transition.duration")};
    outline-color: transparent;
    color: inherit;
    width: ${dt("toast.close.button.width")};
    height: ${dt("toast.close.button.height")};
    border-radius: ${dt("toast.close.button.border.radius")};
    margin: -25% 0 0 0;
    right: -25%;
    padding: 0;
    border: none;
    user-select: none;
}

.p-toast-close-button:dir(rtl) {
    margin: -25% 0 0 auto;
    left: -25%;
    right: auto;
}

.p-toast-message-info,
.p-toast-message-success,
.p-toast-message-warn,
.p-toast-message-error,
.p-toast-message-secondary,
.p-toast-message-contrast {
    border-width: ${dt("toast.border.width")};
    border-style: solid;
    backdrop-filter: blur(${dt("toast.blur")});
    border-radius: ${dt("toast.border.radius")};
}

.p-toast-close-icon {
    font-size: ${dt("toast.close.icon.size")};
    width: ${dt("toast.close.icon.size")};
    height: ${dt("toast.close.icon.size")};
}

.p-toast-close-button:focus-visible {
    outline-width: ${dt("focus.ring.width")};
    outline-style: ${dt("focus.ring.style")};
    outline-offset: ${dt("focus.ring.offset")};
}

.p-toast-message-info {
    background: ${dt("toast.info.background")};
    border-color: ${dt("toast.info.border.color")};
    color: ${dt("toast.info.color")};
    box-shadow: ${dt("toast.info.shadow")};
}

.p-toast-message-info .p-toast-detail {
    color: ${dt("toast.info.detail.color")};
}

.p-toast-message-info .p-toast-close-button:focus-visible {
    outline-color: ${dt("toast.info.close.button.focus.ring.color")};
    box-shadow: ${dt("toast.info.close.button.focus.ring.shadow")};
}

.p-toast-message-info .p-toast-close-button:hover {
    background: ${dt("toast.info.close.button.hover.background")};
}

.p-toast-message-success {
    background: ${dt("toast.success.background")};
    border-color: ${dt("toast.success.border.color")};
    color: ${dt("toast.success.color")};
    box-shadow: ${dt("toast.success.shadow")};
}

.p-toast-message-success .p-toast-detail {
    color: ${dt("toast.success.detail.color")};
}

.p-toast-message-success .p-toast-close-button:focus-visible {
    outline-color: ${dt("toast.success.close.button.focus.ring.color")};
    box-shadow: ${dt("toast.success.close.button.focus.ring.shadow")};
}

.p-toast-message-success .p-toast-close-button:hover {
    background: ${dt("toast.success.close.button.hover.background")};
}

.p-toast-message-warn {
    background: ${dt("toast.warn.background")};
    border-color: ${dt("toast.warn.border.color")};
    color: ${dt("toast.warn.color")};
    box-shadow: ${dt("toast.warn.shadow")};
}

.p-toast-message-warn .p-toast-detail {
    color: ${dt("toast.warn.detail.color")};
}

.p-toast-message-warn .p-toast-close-button:focus-visible {
    outline-color: ${dt("toast.warn.close.button.focus.ring.color")};
    box-shadow: ${dt("toast.warn.close.button.focus.ring.shadow")};
}

.p-toast-message-warn .p-toast-close-button:hover {
    background: ${dt("toast.warn.close.button.hover.background")};
}

.p-toast-message-error {
    background: ${dt("toast.error.background")};
    border-color: ${dt("toast.error.border.color")};
    color: ${dt("toast.error.color")};
    box-shadow: ${dt("toast.error.shadow")};
}

.p-toast-message-error .p-toast-detail {
    color: ${dt("toast.error.detail.color")};
}

.p-toast-message-error .p-toast-close-button:focus-visible {
    outline-color: ${dt("toast.error.close.button.focus.ring.color")};
    box-shadow: ${dt("toast.error.close.button.focus.ring.shadow")};
}

.p-toast-message-error .p-toast-close-button:hover {
    background: ${dt("toast.error.close.button.hover.background")};
}

.p-toast-message-secondary {
    background: ${dt("toast.secondary.background")};
    border-color: ${dt("toast.secondary.border.color")};
    color: ${dt("toast.secondary.color")};
    box-shadow: ${dt("toast.secondary.shadow")};
}

.p-toast-message-secondary .p-toast-detail {
    color: ${dt("toast.secondary.detail.color")};
}

.p-toast-message-secondary .p-toast-close-button:focus-visible {
    outline-color: ${dt("toast.secondary.close.button.focus.ring.color")};
    box-shadow: ${dt("toast.secondary.close.button.focus.ring.shadow")};
}

.p-toast-message-secondary .p-toast-close-button:hover {
    background: ${dt("toast.secondary.close.button.hover.background")};
}

.p-toast-message-contrast {
    background: ${dt("toast.contrast.background")};
    border-color: ${dt("toast.contrast.border.color")};
    color: ${dt("toast.contrast.color")};
    box-shadow: ${dt("toast.contrast.shadow")};
}

.p-toast-message-contrast .p-toast-detail {
    color: ${dt("toast.contrast.detail.color")};
}

.p-toast-message-contrast .p-toast-close-button:focus-visible {
    outline-color: ${dt("toast.contrast.close.button.focus.ring.color")};
    box-shadow: ${dt("toast.contrast.close.button.focus.ring.shadow")};
}

.p-toast-message-contrast .p-toast-close-button:hover {
    background: ${dt("toast.contrast.close.button.hover.background")};
}

.p-toast-top-center {
    transform: translateX(-50%);
}

.p-toast-bottom-center {
    transform: translateX(-50%);
}

.p-toast-center {
    min-width: 20vw;
    transform: translate(-50%, -50%);
}

.p-toast-message-enter-from {
    opacity: 0;
    transform: translateY(50%);
}

.p-toast-message-leave-from {
    max-height: 1000px;
}

.p-toast .p-toast-message.p-toast-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin-bottom: 0;
    overflow: hidden;
}

.p-toast-message-enter-active {
    transition: transform 0.3s, opacity 0.3s;
}

.p-toast-message-leave-active {
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin-bottom 0.3s;
}
`;
var inlineStyles = {
  root: ({
    instance
  }) => {
    const {
      _position
    } = instance;
    return {
      position: "fixed",
      top: _position === "top-right" || _position === "top-left" || _position === "top-center" ? "20px" : _position === "center" ? "50%" : null,
      right: (_position === "top-right" || _position === "bottom-right") && "20px",
      bottom: (_position === "bottom-left" || _position === "bottom-right" || _position === "bottom-center") && "20px",
      left: _position === "top-left" || _position === "bottom-left" ? "20px" : _position === "center" || _position === "top-center" || _position === "bottom-center" ? "50%" : null
    };
  }
};
var classes2 = {
  root: ({
    instance
  }) => ({
    "p-toast p-component": true,
    [`p-toast-${instance._position}`]: !!instance._position
  }),
  message: ({
    instance
  }) => ({
    "p-toast-message": true,
    "p-toast-message-info": instance.message.severity === "info" || instance.message.severity === void 0,
    "p-toast-message-warn": instance.message.severity === "warn",
    "p-toast-message-error": instance.message.severity === "error",
    "p-toast-message-success": instance.message.severity === "success",
    "p-toast-message-secondary": instance.message.severity === "secondary",
    "p-toast-message-contrast": instance.message.severity === "contrast"
  }),
  messageContent: "p-toast-message-content",
  messageIcon: ({
    instance
  }) => ({
    "p-toast-message-icon": true,
    [`pi ${instance.message.icon}`]: !!instance.message.icon
  }),
  messageText: "p-toast-message-text",
  summary: "p-toast-summary",
  detail: "p-toast-detail",
  closeButton: "p-toast-close-button",
  closeIcon: ({
    instance
  }) => ({
    "p-toast-close-icon": true,
    [`pi ${instance.message.closeIcon}`]: !!instance.message.closeIcon
  })
};
var ToastStyle = class _ToastStyle extends BaseStyle {
  name = "toast";
  theme = theme2;
  classes = classes2;
  inlineStyles = inlineStyles;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ToastStyle_BaseFactory;
    return function ToastStyle_Factory(__ngFactoryType__) {
      return (\u0275ToastStyle_BaseFactory || (\u0275ToastStyle_BaseFactory = \u0275\u0275getInheritedFactory(_ToastStyle)))(__ngFactoryType__ || _ToastStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ToastStyle,
    factory: _ToastStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastStyle, [{
    type: Injectable
  }], null, null);
})();
var ToastClasses;
(function(ToastClasses2) {
  ToastClasses2["root"] = "p-toast";
  ToastClasses2["message"] = "p-toast-message";
  ToastClasses2["messageContent"] = "p-toast-message-content";
  ToastClasses2["messageIcon"] = "p-toast-message-icon";
  ToastClasses2["messageText"] = "p-toast-message-text";
  ToastClasses2["summary"] = "p-toast-summary";
  ToastClasses2["detail"] = "p-toast-detail";
  ToastClasses2["closeButton"] = "p-toast-close-button";
  ToastClasses2["closeIcon"] = "p-toast-close-icon";
})(ToastClasses || (ToastClasses = {}));
var _c07 = ["container"];
var _c14 = (a0, a1, a2, a3) => ({
  showTransformParams: a0,
  hideTransformParams: a1,
  showTransitionParams: a2,
  hideTransitionParams: a3
});
var _c22 = (a0) => ({
  value: "visible",
  params: a0
});
var _c32 = (a0, a1) => ({
  $implicit: a0,
  closeFn: a1
});
var _c4 = (a0) => ({
  $implicit: a0
});
function ToastItem_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ToastItem_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ToastItem_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 3);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.headlessTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c32, ctx_r1.message, ctx_r1.onCloseIconClick));
  }
}
function ToastItem_Conditional_3_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 4);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r1.cx("messageIcon"));
  }
}
function ToastItem_Conditional_3_ng_container_1_span_2_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "CheckIcon");
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-hidden", true)("data-pc-section", "icon");
  }
}
function ToastItem_Conditional_3_ng_container_1_span_2_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "InfoCircleIcon");
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-hidden", true)("data-pc-section", "icon");
  }
}
function ToastItem_Conditional_3_ng_container_1_span_2_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "TimesCircleIcon");
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-hidden", true)("data-pc-section", "icon");
  }
}
function ToastItem_Conditional_3_ng_container_1_span_2_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ExclamationTriangleIcon");
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-hidden", true)("data-pc-section", "icon");
  }
}
function ToastItem_Conditional_3_ng_container_1_span_2_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "InfoCircleIcon");
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-hidden", true)("data-pc-section", "icon");
  }
}
function ToastItem_Conditional_3_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275template(1, ToastItem_Conditional_3_ng_container_1_span_2_Case_1_Template, 1, 2, "CheckIcon")(2, ToastItem_Conditional_3_ng_container_1_span_2_Case_2_Template, 1, 2, "InfoCircleIcon")(3, ToastItem_Conditional_3_ng_container_1_span_2_Case_3_Template, 1, 2, "TimesCircleIcon")(4, ToastItem_Conditional_3_ng_container_1_span_2_Case_4_Template, 1, 2, "ExclamationTriangleIcon")(5, ToastItem_Conditional_3_ng_container_1_span_2_Case_5_Template, 1, 2, "InfoCircleIcon");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r1.cx("messageIcon"));
    \u0275\u0275attribute("aria-hidden", true)("data-pc-section", "icon");
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_7_0 = ctx_r1.message.severity) === "success" ? 1 : tmp_7_0 === "info" ? 2 : tmp_7_0 === "error" ? 3 : tmp_7_0 === "warn" ? 4 : 5);
  }
}
function ToastItem_Conditional_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ToastItem_Conditional_3_ng_container_1_span_1_Template, 1, 1, "span", 7)(2, ToastItem_Conditional_3_ng_container_1_span_2_Template, 6, 4, "span", 7);
    \u0275\u0275elementStart(3, "div", 4)(4, "div", 4);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 4);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.message.icon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.message.icon);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.cx("messageText"));
    \u0275\u0275attribute("data-pc-section", "text");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.cx("summary"));
    \u0275\u0275attribute("data-pc-section", "summary");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.message.summary, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.cx("detail"));
    \u0275\u0275attribute("data-pc-section", "detail");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.message.detail);
  }
}
function ToastItem_Conditional_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ToastItem_Conditional_3_Conditional_3_Conditional_1_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 4);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngClass", ctx_r1.cx("closeIcon"));
  }
}
function ToastItem_Conditional_3_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ToastItem_Conditional_3_Conditional_3_Conditional_1_span_0_Template, 1, 1, "span", 7);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", ctx_r1.message.closeIcon);
  }
}
function ToastItem_Conditional_3_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "TimesIcon", 4);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r1.cx("closeIcon"));
    \u0275\u0275attribute("aria-hidden", true)("data-pc-section", "closeicon");
  }
}
function ToastItem_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 8);
    \u0275\u0275listener("onClick", function ToastItem_Conditional_3_Conditional_3_Template_p_button_onClick_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCloseIconClick($event));
    })("keydown.enter", function ToastItem_Conditional_3_Conditional_3_Template_p_button_keydown_enter_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCloseIconClick($event));
    });
    \u0275\u0275template(1, ToastItem_Conditional_3_Conditional_3_Conditional_1_Template, 1, 1, "span", 4)(2, ToastItem_Conditional_3_Conditional_3_Conditional_2_Template, 1, 3, "TimesIcon", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("styleClass", ctx_r1.cx("closeButton"));
    \u0275\u0275attribute("ariaLabel", ctx_r1.closeAriaLabel)("data-pc-section", "closebutton");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.message.closeIcon ? 1 : 2);
  }
}
function ToastItem_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275template(1, ToastItem_Conditional_3_ng_container_1_Template, 8, 10, "ng-container", 5)(2, ToastItem_Conditional_3_ng_container_2_Template, 1, 0, "ng-container", 3)(3, ToastItem_Conditional_3_Conditional_3_Template, 3, 4, "p-button", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.message == null ? null : ctx_r1.message.contentStyleClass);
    \u0275\u0275property("ngClass", ctx_r1.cx("messageContent"));
    \u0275\u0275attribute("data-pc-section", "content");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.template);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.template)("ngTemplateOutletContext", \u0275\u0275pureFunction1(8, _c4, ctx_r1.message));
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.message == null ? null : ctx_r1.message.closable) !== false ? 3 : -1);
  }
}
var _c5 = ["message"];
var _c6 = ["headless"];
function Toast_p_toastItem_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-toastItem", 3);
    \u0275\u0275listener("onClose", function Toast_p_toastItem_2_Template_p_toastItem_onClose_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onMessageClose($event));
    })("@toastAnimation.start", function Toast_p_toastItem_2_Template_p_toastItem_animation_toastAnimation_start_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAnimationStart($event));
    })("@toastAnimation.done", function Toast_p_toastItem_2_Template_p_toastItem_animation_toastAnimation_done_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAnimationEnd($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const msg_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("message", msg_r3)("index", i_r4)("life", ctx_r1.life)("template", ctx_r1.template || ctx_r1._template)("headlessTemplate", ctx_r1.headlessTemplate || ctx_r1._headlessTemplate)("@toastAnimation", void 0)("showTransformOptions", ctx_r1.showTransformOptions)("hideTransformOptions", ctx_r1.hideTransformOptions)("showTransitionOptions", ctx_r1.showTransitionOptions)("hideTransitionOptions", ctx_r1.hideTransitionOptions);
  }
}
var ToastItem = class _ToastItem extends BaseComponent {
  zone;
  message;
  index;
  life;
  template;
  headlessTemplate;
  showTransformOptions;
  hideTransformOptions;
  showTransitionOptions;
  hideTransitionOptions;
  onClose = new EventEmitter();
  containerViewChild;
  _componentStyle = inject(ToastStyle);
  timeout;
  constructor(zone) {
    super();
    this.zone = zone;
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
    this.initTimeout();
  }
  initTimeout() {
    if (!this.message?.sticky) {
      this.zone.runOutsideAngular(() => {
        this.timeout = setTimeout(() => {
          this.onClose.emit({
            index: this.index,
            message: this.message
          });
        }, this.message?.life || this.life || 3e3);
      });
    }
  }
  clearTimeout() {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
  }
  onMouseEnter() {
    this.clearTimeout();
  }
  onMouseLeave() {
    this.initTimeout();
  }
  onCloseIconClick = (event) => {
    this.clearTimeout();
    this.onClose.emit({
      index: this.index,
      message: this.message
    });
    event.preventDefault();
  };
  get closeAriaLabel() {
    return this.config.translation.aria ? this.config.translation.aria.close : void 0;
  }
  ngOnDestroy() {
    this.clearTimeout();
    super.ngOnDestroy();
  }
  static \u0275fac = function ToastItem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastItem)(\u0275\u0275directiveInject(NgZone));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ToastItem,
    selectors: [["p-toastItem"]],
    viewQuery: function ToastItem_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c07, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.containerViewChild = _t.first);
      }
    },
    inputs: {
      message: "message",
      index: [2, "index", "index", numberAttribute],
      life: [2, "life", "life", numberAttribute],
      template: "template",
      headlessTemplate: "headlessTemplate",
      showTransformOptions: "showTransformOptions",
      hideTransformOptions: "hideTransformOptions",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions"
    },
    outputs: {
      onClose: "onClose"
    },
    features: [\u0275\u0275ProvidersFeature([ToastStyle]), \u0275\u0275InputTransformsFeature, \u0275\u0275InheritDefinitionFeature],
    decls: 4,
    vars: 15,
    consts: [["container", ""], ["role", "alert", "aria-live", "assertive", "aria-atomic", "true", 3, "mouseenter", "mouseleave", "ngClass"], [3, "ngClass", "class"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngClass"], [4, "ngIf"], ["rounded", "", "text", "", 3, "styleClass"], [3, "ngClass", 4, "ngIf"], ["rounded", "", "text", "", 3, "onClick", "keydown.enter", "styleClass"]],
    template: function ToastItem_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1, 0);
        \u0275\u0275listener("mouseenter", function ToastItem_Template_div_mouseenter_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onMouseEnter());
        })("mouseleave", function ToastItem_Template_div_mouseleave_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onMouseLeave());
        });
        \u0275\u0275template(2, ToastItem_Conditional_2_Template, 1, 5, "ng-container")(3, ToastItem_Conditional_3_Template, 4, 10, "div", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.message == null ? null : ctx.message.styleClass);
        \u0275\u0275property("ngClass", ctx.cx("message"))("@messageState", \u0275\u0275pureFunction1(13, _c22, \u0275\u0275pureFunction4(8, _c14, ctx.showTransformOptions, ctx.hideTransformOptions, ctx.showTransitionOptions, ctx.hideTransitionOptions)));
        \u0275\u0275attribute("id", ctx.message == null ? null : ctx.message.id)("data-pc-name", "toast")("data-pc-section", "root");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.headlessTemplate ? 2 : 3);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, CheckIcon, ExclamationTriangleIcon, InfoCircleIcon, TimesIcon, TimesCircleIcon, Button, SharedModule],
    encapsulation: 2,
    data: {
      animation: [trigger("messageState", [state("visible", style({
        transform: "translateY(0)",
        opacity: 1
      })), transition("void => *", [style({
        transform: "{{showTransformParams}}",
        opacity: 0
      }), animate("{{showTransitionParams}}")]), transition("* => void", [animate("{{hideTransitionParams}}", style({
        height: 0,
        opacity: 0,
        transform: "{{hideTransformParams}}"
      }))])])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastItem, [{
    type: Component,
    args: [{
      selector: "p-toastItem",
      standalone: true,
      imports: [CommonModule, CheckIcon, ExclamationTriangleIcon, InfoCircleIcon, TimesIcon, TimesCircleIcon, Button, SharedModule],
      template: `
        <div
            #container
            [attr.id]="message?.id"
            [class]="message?.styleClass"
            [ngClass]="cx('message')"
            [@messageState]="{
                value: 'visible',
                params: {
                    showTransformParams: showTransformOptions,
                    hideTransformParams: hideTransformOptions,
                    showTransitionParams: showTransitionOptions,
                    hideTransitionParams: hideTransitionOptions
                }
            }"
            (mouseenter)="onMouseEnter()"
            (mouseleave)="onMouseLeave()"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            [attr.data-pc-name]="'toast'"
            [attr.data-pc-section]="'root'"
        >
            @if (headlessTemplate) {
                <ng-container *ngTemplateOutlet="headlessTemplate; context: { $implicit: message, closeFn: onCloseIconClick }"></ng-container>
            } @else {
                <div [ngClass]="cx('messageContent')" [class]="message?.contentStyleClass" [attr.data-pc-section]="'content'">
                    <ng-container *ngIf="!template">
                        <span *ngIf="message.icon" [ngClass]="cx('messageIcon')"></span>
                        <span [ngClass]="cx('messageIcon')" *ngIf="!message.icon" [attr.aria-hidden]="true" [attr.data-pc-section]="'icon'">
                            @switch (message.severity) {
                                @case ('success') {
                                    <CheckIcon [attr.aria-hidden]="true" [attr.data-pc-section]="'icon'" />
                                }
                                @case ('info') {
                                    <InfoCircleIcon [attr.aria-hidden]="true" [attr.data-pc-section]="'icon'" />
                                }
                                @case ('error') {
                                    <TimesCircleIcon [attr.aria-hidden]="true" [attr.data-pc-section]="'icon'" />
                                }
                                @case ('warn') {
                                    <ExclamationTriangleIcon [attr.aria-hidden]="true" [attr.data-pc-section]="'icon'" />
                                }
                                @default {
                                    <InfoCircleIcon [attr.aria-hidden]="true" [attr.data-pc-section]="'icon'" />
                                }
                            }
                        </span>
                        <div [ngClass]="cx('messageText')" [attr.data-pc-section]="'text'">
                            <div [ngClass]="cx('summary')" [attr.data-pc-section]="'summary'">
                                {{ message.summary }}
                            </div>
                            <div [ngClass]="cx('detail')" [attr.data-pc-section]="'detail'">{{ message.detail }}</div>
                        </div>
                    </ng-container>
                    <ng-container *ngTemplateOutlet="template; context: { $implicit: message }"></ng-container>
                    @if (message?.closable !== false) {
                        <p-button [styleClass]="cx('closeButton')" (onClick)="onCloseIconClick($event)" (keydown.enter)="onCloseIconClick($event)" [attr.ariaLabel]="closeAriaLabel" [attr.data-pc-section]="'closebutton'" rounded text>
                            @if (message.closeIcon) {
                                <span *ngIf="message.closeIcon" [ngClass]="cx('closeIcon')"></span>
                            } @else {
                                <TimesIcon [ngClass]="cx('closeIcon')" [attr.aria-hidden]="true" [attr.data-pc-section]="'closeicon'" />
                            }
                        </p-button>
                    }
                </div>
            }
        </div>
    `,
      animations: [trigger("messageState", [state("visible", style({
        transform: "translateY(0)",
        opacity: 1
      })), transition("void => *", [style({
        transform: "{{showTransformParams}}",
        opacity: 0
      }), animate("{{showTransitionParams}}")]), transition("* => void", [animate("{{hideTransitionParams}}", style({
        height: 0,
        opacity: 0,
        transform: "{{hideTransformParams}}"
      }))])])],
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [ToastStyle]
    }]
  }], () => [{
    type: NgZone
  }], {
    message: [{
      type: Input
    }],
    index: [{
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
    template: [{
      type: Input
    }],
    headlessTemplate: [{
      type: Input
    }],
    showTransformOptions: [{
      type: Input
    }],
    hideTransformOptions: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    onClose: [{
      type: Output
    }],
    containerViewChild: [{
      type: ViewChild,
      args: ["container"]
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ToastItem, {
    className: "ToastItem",
    filePath: "toast.ts",
    lineNumber: 140
  });
})();
var Toast = class _Toast extends BaseComponent {
  /**
   * Key of the message in case message is targeted to a specific toast component.
   * @group Props
   */
  key;
  /**
   * Whether to automatically manage layering.
   * @group Props
   */
  autoZIndex = true;
  /**
   * Base zIndex value to use in layering.
   * @group Props
   */
  baseZIndex = 0;
  /**
   * The default time to display messages for in milliseconds.
   * @group Props
   */
  life = 3e3;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Inline class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Position of the toast in viewport.
   * @group Props
   */
  get position() {
    return this._position;
  }
  set position(value) {
    this._position = value;
    this.cd.markForCheck();
  }
  /**
   * It does not add the new message if there is already a toast displayed with the same content
   * @group Props
   */
  preventOpenDuplicates = false;
  /**
   * Displays only once a message with the same content.
   * @group Props
   */
  preventDuplicates = false;
  /**
   * Transform options of the show animation.
   * @group Props
   */
  showTransformOptions = "translateY(100%)";
  /**
   * Transform options of the hide animation.
   * @group Props
   */
  hideTransformOptions = "translateY(-100%)";
  /**
   * Transition options of the show animation.
   * @group Props
   */
  showTransitionOptions = "300ms ease-out";
  /**
   * Transition options of the hide animation.
   * @group Props
   */
  hideTransitionOptions = "250ms ease-in";
  /**
   * Object literal to define styles per screen size.
   * @group Props
   */
  breakpoints;
  /**
   * Callback to invoke when a message is closed.
   * @param {ToastCloseEvent} event - custom close event.
   * @group Emits
   */
  onClose = new EventEmitter();
  /**
   * Custom template of message.
   * @group Templates
   */
  template;
  /**
   * Custom headless template.
   * @group Templates
   */
  headlessTemplate;
  containerViewChild;
  messageSubscription;
  clearSubscription;
  messages;
  messagesArchieve;
  _position = "top-right";
  messageService = inject(MessageService);
  _componentStyle = inject(ToastStyle);
  styleElement;
  id = uuid("pn_id_");
  templates;
  ngOnInit() {
    super.ngOnInit();
    this.messageSubscription = this.messageService.messageObserver.subscribe((messages) => {
      if (messages) {
        if (Array.isArray(messages)) {
          const filteredMessages = messages.filter((m) => this.canAdd(m));
          this.add(filteredMessages);
        } else if (this.canAdd(messages)) {
          this.add([messages]);
        }
      }
    });
    this.clearSubscription = this.messageService.clearObserver.subscribe((key) => {
      if (key) {
        if (this.key === key) {
          this.messages = null;
        }
      } else {
        this.messages = null;
      }
      this.cd.markForCheck();
    });
  }
  _template;
  _headlessTemplate;
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "message":
          this._template = item.template;
          break;
        case "headless":
          this._headlessTemplate = item.template;
          break;
        default:
          this._template = item.template;
          break;
      }
    });
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
    if (this.breakpoints) {
      this.createStyle();
    }
  }
  add(messages) {
    this.messages = this.messages ? [...this.messages, ...messages] : [...messages];
    if (this.preventDuplicates) {
      this.messagesArchieve = this.messagesArchieve ? [...this.messagesArchieve, ...messages] : [...messages];
    }
    this.cd.markForCheck();
  }
  canAdd(message) {
    let allow = this.key === message.key;
    if (allow && this.preventOpenDuplicates) {
      allow = !this.containsMessage(this.messages, message);
    }
    if (allow && this.preventDuplicates) {
      allow = !this.containsMessage(this.messagesArchieve, message);
    }
    return allow;
  }
  containsMessage(collection, message) {
    if (!collection) {
      return false;
    }
    return collection.find((m) => {
      return m.summary === message.summary && m.detail == message.detail && m.severity === message.severity;
    }) != null;
  }
  onMessageClose(event) {
    this.messages?.splice(event.index, 1);
    this.onClose.emit({
      message: event.message
    });
    this.cd.detectChanges();
  }
  onAnimationStart(event) {
    if (event.fromState === "void") {
      this.renderer.setAttribute(this.containerViewChild?.nativeElement, this.id, "");
      if (this.autoZIndex && this.containerViewChild?.nativeElement.style.zIndex === "") {
        zindexutils.set("modal", this.containerViewChild?.nativeElement, this.baseZIndex || this.config.zIndex.modal);
      }
    }
  }
  onAnimationEnd(event) {
    if (event.toState === "void") {
      if (this.autoZIndex && isEmpty(this.messages)) {
        zindexutils.clear(this.containerViewChild?.nativeElement);
      }
    }
  }
  createStyle() {
    if (!this.styleElement) {
      this.styleElement = this.renderer.createElement("style");
      this.styleElement.type = "text/css";
      this.renderer.appendChild(this.document.head, this.styleElement);
      let innerHTML = "";
      for (let breakpoint in this.breakpoints) {
        let breakpointStyle = "";
        for (let styleProp in this.breakpoints[breakpoint]) {
          breakpointStyle += styleProp + ":" + this.breakpoints[breakpoint][styleProp] + " !important;";
        }
        innerHTML += `
                    @media screen and (max-width: ${breakpoint}) {
                        .p-toast[${this.id}] {
                           ${breakpointStyle}
                        }
                    }
                `;
      }
      this.renderer.setProperty(this.styleElement, "innerHTML", innerHTML);
      setAttribute(this.styleElement, "nonce", this.config?.csp()?.nonce);
    }
  }
  destroyStyle() {
    if (this.styleElement) {
      this.renderer.removeChild(this.document.head, this.styleElement);
      this.styleElement = null;
    }
  }
  ngOnDestroy() {
    if (this.messageSubscription) {
      this.messageSubscription.unsubscribe();
    }
    if (this.containerViewChild && this.autoZIndex) {
      zindexutils.clear(this.containerViewChild.nativeElement);
    }
    if (this.clearSubscription) {
      this.clearSubscription.unsubscribe();
    }
    this.destroyStyle();
    super.ngOnDestroy();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Toast_BaseFactory;
    return function Toast_Factory(__ngFactoryType__) {
      return (\u0275Toast_BaseFactory || (\u0275Toast_BaseFactory = \u0275\u0275getInheritedFactory(_Toast)))(__ngFactoryType__ || _Toast);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Toast,
    selectors: [["p-toast"]],
    contentQueries: function Toast_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c5, 5);
        \u0275\u0275contentQuery(dirIndex, _c6, 5);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.template = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headlessTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Toast_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c07, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.containerViewChild = _t.first);
      }
    },
    inputs: {
      key: "key",
      autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
      baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
      life: [2, "life", "life", numberAttribute],
      style: "style",
      styleClass: "styleClass",
      position: "position",
      preventOpenDuplicates: [2, "preventOpenDuplicates", "preventOpenDuplicates", booleanAttribute],
      preventDuplicates: [2, "preventDuplicates", "preventDuplicates", booleanAttribute],
      showTransformOptions: "showTransformOptions",
      hideTransformOptions: "hideTransformOptions",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      breakpoints: "breakpoints"
    },
    outputs: {
      onClose: "onClose"
    },
    features: [\u0275\u0275ProvidersFeature([ToastStyle]), \u0275\u0275InputTransformsFeature, \u0275\u0275InheritDefinitionFeature],
    decls: 3,
    vars: 7,
    consts: [["container", ""], [3, "ngClass", "ngStyle"], [3, "message", "index", "life", "template", "headlessTemplate", "showTransformOptions", "hideTransformOptions", "showTransitionOptions", "hideTransitionOptions", "onClose", 4, "ngFor", "ngForOf"], [3, "onClose", "message", "index", "life", "template", "headlessTemplate", "showTransformOptions", "hideTransformOptions", "showTransitionOptions", "hideTransitionOptions"]],
    template: function Toast_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1, 0);
        \u0275\u0275template(2, Toast_p_toastItem_2_Template, 1, 10, "p-toastItem", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275styleMap(ctx.style);
        \u0275\u0275classMap(ctx.styleClass);
        \u0275\u0275property("ngClass", ctx.cx("root"))("ngStyle", ctx.sx("root"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.messages);
      }
    },
    dependencies: [CommonModule, NgClass, NgForOf, NgStyle, ToastItem, SharedModule],
    encapsulation: 2,
    data: {
      animation: [trigger("toastAnimation", [transition(":enter, :leave", [query("@*", animateChild())])])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Toast, [{
    type: Component,
    args: [{
      selector: "p-toast",
      standalone: true,
      imports: [CommonModule, ToastItem, SharedModule],
      template: `
        <div #container [ngClass]="cx('root')" [ngStyle]="sx('root')" [style]="style" [class]="styleClass">
            <p-toastItem
                *ngFor="let msg of messages; let i = index"
                [message]="msg"
                [index]="i"
                [life]="life"
                (onClose)="onMessageClose($event)"
                [template]="template || _template"
                [headlessTemplate]="headlessTemplate || _headlessTemplate"
                @toastAnimation
                (@toastAnimation.start)="onAnimationStart($event)"
                (@toastAnimation.done)="onAnimationEnd($event)"
                [showTransformOptions]="showTransformOptions"
                [hideTransformOptions]="hideTransformOptions"
                [showTransitionOptions]="showTransitionOptions"
                [hideTransitionOptions]="hideTransitionOptions"
            ></p-toastItem>
        </div>
    `,
      animations: [trigger("toastAnimation", [transition(":enter, :leave", [query("@*", animateChild())])])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [ToastStyle]
    }]
  }], null, {
    key: [{
      type: Input
    }],
    autoZIndex: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    baseZIndex: [{
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
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    preventOpenDuplicates: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    preventDuplicates: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showTransformOptions: [{
      type: Input
    }],
    hideTransformOptions: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    breakpoints: [{
      type: Input
    }],
    onClose: [{
      type: Output
    }],
    template: [{
      type: ContentChild,
      args: ["message"]
    }],
    headlessTemplate: [{
      type: ContentChild,
      args: ["headless"]
    }],
    containerViewChild: [{
      type: ViewChild,
      args: ["container"]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Toast, {
    className: "Toast",
    filePath: "toast.ts",
    lineNumber: 261
  });
})();
var ToastModule = class _ToastModule {
  static \u0275fac = function ToastModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ToastModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Toast, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastModule, [{
    type: NgModule,
    args: [{
      imports: [Toast, SharedModule],
      exports: [Toast, SharedModule]
    }]
  }], null, null);
})();

// src/app.component.ts
var _c08 = () => ({ "position": "fixed", "right": "15px", "bottom": "15px", "z-index": "9999" });
var AppComponent = class _AppComponent {
  router;
  service;
  versionTag = VersionTag;
  constructor(router, service) {
    this.router = router;
    this.service = service;
  }
  ngOnInit() {
    if (!JWTTokenHelpers.IsTokenSet())
      this.router.navigate(["/auth/login"]);
    else if (JWTTokenHelpers.IsExpired()) {
      this.router.navigate(["/auth/login"]);
      this.service.add({ severity: "warning", summary: "Warning Message", detail: "JWT Token expired! Please login again." });
    }
  }
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 4, vars: 4, template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "p-toast")(1, "router-outlet");
      \u0275\u0275elementStart(2, "p-tag");
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(3, _c08));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1("Version ", ctx.versionTag, "");
    }
  }, dependencies: [RouterModule, RouterOutlet, ToastModule, Toast, TagModule, Tag], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app.component.ts", lineNumber: 15 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
/*! Bundled license information:

@angular/platform-browser/fesm2022/animations/async.mjs:
  (**
   * @license Angular v19.0.5
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=main.js.map
