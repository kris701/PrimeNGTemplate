import {
  AutoFocus,
  BaseComponent,
  BaseIcon,
  BaseStyle,
  Button,
  CheckIcon,
  Checkbox,
  ConnectedOverlayScrollHandler,
  DomHandler,
  FilterService,
  Footer,
  FormsModule,
  Header,
  InputText,
  JwtHelperService,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel,
  ObjectUtils,
  OverlayService,
  PrimeTemplate,
  Ripple,
  SharedModule,
  SpinnerIcon,
  TimesIcon,
  Tooltip,
  TranslationKeys,
  addClass,
  appendChild,
  blockBodyScroll,
  createElement,
  deepEquals,
  equals,
  findLastIndex,
  findSingle,
  focus,
  getFirstFocusableElement,
  getFocusableElements,
  getHeight,
  getLastFocusableElement,
  getOuterHeight,
  getOuterWidth,
  getTargetElement,
  getViewport,
  getWidth,
  hasClass,
  isArray,
  isEmpty,
  isHidden,
  isNotEmpty,
  isObject,
  isPrintableCharacter,
  isTouchDevice,
  isVisible,
  removeClass,
  resolveFieldData,
  scrollInView,
  setAttribute,
  unblockBodyScroll,
  uuid,
  zindexutils
} from "./chunk-QLUKKW7B.js";
import {
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  Directive,
  EventEmitter,
  HostBinding,
  Injectable,
  Input,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgStyle,
  NgTemplateOutlet,
  NgZone,
  Output,
  PLATFORM_ID,
  ViewChild,
  ViewEncapsulation,
  animate,
  animation,
  booleanAttribute,
  computed,
  effect,
  forwardRef,
  inject,
  isPlatformBrowser,
  numberAttribute,
  setClassMetadata,
  signal,
  style,
  transition,
  trigger,
  useAnimation,
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
  ɵɵdefineComponent,
  ɵɵdefineDirective,
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
  ɵɵpureFunction3,
  ɵɵpureFunctionV,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵstyleProp,
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

// src/app/helpers/permissionHelpers.ts
var PermissionHelpers = class {
  static HasPermission(to) {
    if (localStorage.getItem("perms")?.includes(to))
      return true;
    return false;
  }
};

// src/PermissionsTable.ts
var PermissionsTable = {
  Core_Users_Read: "core.users.read",
  Core_Users_Write: "core.users.read",
  Core_User_Impersonate: "core.impersonate",
  Core_User_ChangePassword: "core.user.changepassword",
  Core_User_EditProfile: "core.user.editprofile",
  Core_Permission_Read: "core.permission.read"
};

// node_modules/primeng/fesm2022/primeng-icons-blank.mjs
var BlankIcon = class _BlankIcon extends BaseIcon {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BlankIcon_BaseFactory;
    return function BlankIcon_Factory(__ngFactoryType__) {
      return (\u0275BlankIcon_BaseFactory || (\u0275BlankIcon_BaseFactory = \u0275\u0275getInheritedFactory(_BlankIcon)))(__ngFactoryType__ || _BlankIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _BlankIcon,
    selectors: [["BlankIcon"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 2,
    vars: 0,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["width", "1", "height", "1", "fill", "currentColor", "fill-opacity", "0"]],
    template: function BlankIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(0, "svg", 0);
        \u0275\u0275element(1, "rect", 1);
        \u0275\u0275elementEnd();
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BlankIcon, [{
    type: Component,
    args: [{
      selector: "BlankIcon",
      standalone: true,
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="1" height="1" fill="currentColor" fill-opacity="0" />
        </svg>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlankIcon, {
    className: "BlankIcon",
    filePath: "blank.ts",
    lineNumber: 13
  });
})();

// node_modules/primeng/fesm2022/primeng-icons-chevrondown.mjs
var ChevronDownIcon = class _ChevronDownIcon extends BaseIcon {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ChevronDownIcon_BaseFactory;
    return function ChevronDownIcon_Factory(__ngFactoryType__) {
      return (\u0275ChevronDownIcon_BaseFactory || (\u0275ChevronDownIcon_BaseFactory = \u0275\u0275getInheritedFactory(_ChevronDownIcon)))(__ngFactoryType__ || _ChevronDownIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ChevronDownIcon,
    selectors: [["ChevronDownIcon"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z", "fill", "currentColor"]],
    template: function ChevronDownIcon_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChevronDownIcon, [{
    type: Component,
    args: [{
      selector: "ChevronDownIcon",
      standalone: true,
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                d="M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChevronDownIcon, {
    className: "ChevronDownIcon",
    filePath: "chevrondown.ts",
    lineNumber: 16
  });
})();

// node_modules/primeng/fesm2022/primeng-icons-search.mjs
var SearchIcon = class _SearchIcon extends BaseIcon {
  pathId;
  ngOnInit() {
    this.pathId = "url(#" + uuid() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SearchIcon_BaseFactory;
    return function SearchIcon_Factory(__ngFactoryType__) {
      return (\u0275SearchIcon_BaseFactory || (\u0275SearchIcon_BaseFactory = \u0275\u0275getInheritedFactory(_SearchIcon)))(__ngFactoryType__ || _SearchIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _SearchIcon,
    selectors: [["SearchIcon"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 6,
    vars: 7,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M2.67602 11.0265C3.6661 11.688 4.83011 12.0411 6.02086 12.0411C6.81149 12.0411 7.59438 11.8854 8.32483 11.5828C8.87005 11.357 9.37808 11.0526 9.83317 10.6803L12.9769 13.8241C13.0323 13.8801 13.0983 13.9245 13.171 13.9548C13.2438 13.985 13.3219 14.0003 13.4007 14C13.4795 14.0003 13.5575 13.985 13.6303 13.9548C13.7031 13.9245 13.7691 13.8801 13.8244 13.8241C13.9367 13.7116 13.9998 13.5592 13.9998 13.4003C13.9998 13.2414 13.9367 13.089 13.8244 12.9765L10.6807 9.8328C11.053 9.37773 11.3573 8.86972 11.5831 8.32452C11.8857 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0268 2.67572C10.3652 1.68564 9.42494 0.913972 8.32483 0.45829C7.22472 0.00260857 6.01418 -0.116618 4.84631 0.115686C3.67844 0.34799 2.60568 0.921393 1.76369 1.76338C0.921698 2.60537 0.348296 3.67813 0.115991 4.84601C-0.116313 6.01388 0.00291375 7.22441 0.458595 8.32452C0.914277 9.42464 1.68595 10.3649 2.67602 11.0265ZM3.35565 2.0158C4.14456 1.48867 5.07206 1.20731 6.02086 1.20731C7.29317 1.20731 8.51338 1.71274 9.41304 2.6124C10.3127 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5368 7.88088 10.0096 8.66978C9.48251 9.45868 8.73328 10.0736 7.85669 10.4367C6.98011 10.7997 6.01554 10.8947 5.08496 10.7096C4.15439 10.5245 3.2996 10.0676 2.62869 9.39674C1.95778 8.72583 1.50089 7.87104 1.31579 6.94046C1.13068 6.00989 1.22568 5.04532 1.58878 4.16874C1.95187 3.29215 2.56675 2.54292 3.35565 2.0158Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function SearchIcon_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchIcon, [{
    type: Component,
    args: [{
      selector: "SearchIcon",
      standalone: true,
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.67602 11.0265C3.6661 11.688 4.83011 12.0411 6.02086 12.0411C6.81149 12.0411 7.59438 11.8854 8.32483 11.5828C8.87005 11.357 9.37808 11.0526 9.83317 10.6803L12.9769 13.8241C13.0323 13.8801 13.0983 13.9245 13.171 13.9548C13.2438 13.985 13.3219 14.0003 13.4007 14C13.4795 14.0003 13.5575 13.985 13.6303 13.9548C13.7031 13.9245 13.7691 13.8801 13.8244 13.8241C13.9367 13.7116 13.9998 13.5592 13.9998 13.4003C13.9998 13.2414 13.9367 13.089 13.8244 12.9765L10.6807 9.8328C11.053 9.37773 11.3573 8.86972 11.5831 8.32452C11.8857 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0268 2.67572C10.3652 1.68564 9.42494 0.913972 8.32483 0.45829C7.22472 0.00260857 6.01418 -0.116618 4.84631 0.115686C3.67844 0.34799 2.60568 0.921393 1.76369 1.76338C0.921698 2.60537 0.348296 3.67813 0.115991 4.84601C-0.116313 6.01388 0.00291375 7.22441 0.458595 8.32452C0.914277 9.42464 1.68595 10.3649 2.67602 11.0265ZM3.35565 2.0158C4.14456 1.48867 5.07206 1.20731 6.02086 1.20731C7.29317 1.20731 8.51338 1.71274 9.41304 2.6124C10.3127 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5368 7.88088 10.0096 8.66978C9.48251 9.45868 8.73328 10.0736 7.85669 10.4367C6.98011 10.7997 6.01554 10.8947 5.08496 10.7096C4.15439 10.5245 3.2996 10.0676 2.62869 9.39674C1.95778 8.72583 1.50089 7.87104 1.31579 6.94046C1.13068 6.00989 1.22568 5.04532 1.58878 4.16874C1.95187 3.29215 2.56675 2.54292 3.35565 2.0158Z"
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SearchIcon, {
    className: "SearchIcon",
    filePath: "search.ts",
    lineNumber: 26
  });
})();

// node_modules/primeng/fesm2022/primeng-icons-timescircle.mjs
var TimesCircleIcon = class _TimesCircleIcon extends BaseIcon {
  pathId;
  ngOnInit() {
    this.pathId = "url(#" + uuid() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TimesCircleIcon_BaseFactory;
    return function TimesCircleIcon_Factory(__ngFactoryType__) {
      return (\u0275TimesCircleIcon_BaseFactory || (\u0275TimesCircleIcon_BaseFactory = \u0275\u0275getInheritedFactory(_TimesCircleIcon)))(__ngFactoryType__ || _TimesCircleIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _TimesCircleIcon,
    selectors: [["TimesCircleIcon"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 6,
    vars: 7,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function TimesCircleIcon_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimesCircleIcon, [{
    type: Component,
    args: [{
      selector: "TimesCircleIcon",
      standalone: true,
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z"
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TimesCircleIcon, {
    className: "TimesCircleIcon",
    filePath: "timescircle.ts",
    lineNumber: 26
  });
})();

// node_modules/primeng/fesm2022/primeng-icons-windowmaximize.mjs
var WindowMaximizeIcon = class _WindowMaximizeIcon extends BaseIcon {
  pathId;
  ngOnInit() {
    this.pathId = "url(#" + uuid() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275WindowMaximizeIcon_BaseFactory;
    return function WindowMaximizeIcon_Factory(__ngFactoryType__) {
      return (\u0275WindowMaximizeIcon_BaseFactory || (\u0275WindowMaximizeIcon_BaseFactory = \u0275\u0275getInheritedFactory(_WindowMaximizeIcon)))(__ngFactoryType__ || _WindowMaximizeIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _WindowMaximizeIcon,
    selectors: [["WindowMaximizeIcon"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 6,
    vars: 7,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function WindowMaximizeIcon_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WindowMaximizeIcon, [{
    type: Component,
    args: [{
      selector: "WindowMaximizeIcon",
      standalone: true,
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z"
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WindowMaximizeIcon, {
    className: "WindowMaximizeIcon",
    filePath: "windowmaximize.ts",
    lineNumber: 26
  });
})();

// node_modules/primeng/fesm2022/primeng-icons-windowminimize.mjs
var WindowMinimizeIcon = class _WindowMinimizeIcon extends BaseIcon {
  pathId;
  ngOnInit() {
    this.pathId = "url(#" + uuid() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275WindowMinimizeIcon_BaseFactory;
    return function WindowMinimizeIcon_Factory(__ngFactoryType__) {
      return (\u0275WindowMinimizeIcon_BaseFactory || (\u0275WindowMinimizeIcon_BaseFactory = \u0275\u0275getInheritedFactory(_WindowMinimizeIcon)))(__ngFactoryType__ || _WindowMinimizeIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _WindowMinimizeIcon,
    selectors: [["WindowMinimizeIcon"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 6,
    vars: 7,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0ZM6.368 7.952C6.44137 7.98326 6.52025 7.99958 6.6 8H9.8C9.95913 8 10.1117 7.93678 10.2243 7.82426C10.3368 7.71174 10.4 7.55913 10.4 7.4C10.4 7.24087 10.3368 7.08826 10.2243 6.97574C10.1117 6.86321 9.95913 6.8 9.8 6.8H8.048L10.624 4.224C10.73 4.11026 10.7877 3.95982 10.7849 3.80438C10.7822 3.64894 10.7192 3.50063 10.6093 3.3907C10.4994 3.28077 10.3511 3.2178 10.1956 3.21506C10.0402 3.21232 9.88974 3.27002 9.776 3.376L7.2 5.952V4.2C7.2 4.04087 7.13679 3.88826 7.02426 3.77574C6.91174 3.66321 6.75913 3.6 6.6 3.6C6.44087 3.6 6.28826 3.66321 6.17574 3.77574C6.06321 3.88826 6 4.04087 6 4.2V7.4C6.00042 7.47975 6.01674 7.55862 6.048 7.632C6.07656 7.70442 6.11971 7.7702 6.17475 7.82524C6.2298 7.88029 6.29558 7.92344 6.368 7.952ZM1.4 8.80005H3.8C4.17066 8.80215 4.52553 8.95032 4.78763 9.21242C5.04973 9.47452 5.1979 9.82939 5.2 10.2V12.6C5.1979 12.9707 5.04973 13.3256 4.78763 13.5877C4.52553 13.8498 4.17066 13.9979 3.8 14H1.4C1.02934 13.9979 0.674468 13.8498 0.412371 13.5877C0.150274 13.3256 0.00210008 12.9707 0 12.6V10.2C0.00210008 9.82939 0.150274 9.47452 0.412371 9.21242C0.674468 8.95032 1.02934 8.80215 1.4 8.80005ZM3.94142 12.7415C3.97893 12.704 4 12.6531 4 12.6V10.2C4 10.147 3.97893 10.0961 3.94142 10.0586C3.90391 10.0211 3.85304 10 3.8 10H1.4C1.34696 10 1.29609 10.0211 1.25858 10.0586C1.22107 10.0961 1.2 10.147 1.2 10.2V12.6C1.2 12.6531 1.22107 12.704 1.25858 12.7415C1.29609 12.779 1.34696 12.8 1.4 12.8H3.8C3.85304 12.8 3.90391 12.779 3.94142 12.7415Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function WindowMinimizeIcon_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WindowMinimizeIcon, [{
    type: Component,
    args: [{
      selector: "WindowMinimizeIcon",
      standalone: true,
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0ZM6.368 7.952C6.44137 7.98326 6.52025 7.99958 6.6 8H9.8C9.95913 8 10.1117 7.93678 10.2243 7.82426C10.3368 7.71174 10.4 7.55913 10.4 7.4C10.4 7.24087 10.3368 7.08826 10.2243 6.97574C10.1117 6.86321 9.95913 6.8 9.8 6.8H8.048L10.624 4.224C10.73 4.11026 10.7877 3.95982 10.7849 3.80438C10.7822 3.64894 10.7192 3.50063 10.6093 3.3907C10.4994 3.28077 10.3511 3.2178 10.1956 3.21506C10.0402 3.21232 9.88974 3.27002 9.776 3.376L7.2 5.952V4.2C7.2 4.04087 7.13679 3.88826 7.02426 3.77574C6.91174 3.66321 6.75913 3.6 6.6 3.6C6.44087 3.6 6.28826 3.66321 6.17574 3.77574C6.06321 3.88826 6 4.04087 6 4.2V7.4C6.00042 7.47975 6.01674 7.55862 6.048 7.632C6.07656 7.70442 6.11971 7.7702 6.17475 7.82524C6.2298 7.88029 6.29558 7.92344 6.368 7.952ZM1.4 8.80005H3.8C4.17066 8.80215 4.52553 8.95032 4.78763 9.21242C5.04973 9.47452 5.1979 9.82939 5.2 10.2V12.6C5.1979 12.9707 5.04973 13.3256 4.78763 13.5877C4.52553 13.8498 4.17066 13.9979 3.8 14H1.4C1.02934 13.9979 0.674468 13.8498 0.412371 13.5877C0.150274 13.3256 0.00210008 12.9707 0 12.6V10.2C0.00210008 9.82939 0.150274 9.47452 0.412371 9.21242C0.674468 8.95032 1.02934 8.80215 1.4 8.80005ZM3.94142 12.7415C3.97893 12.704 4 12.6531 4 12.6V10.2C4 10.147 3.97893 10.0961 3.94142 10.0586C3.90391 10.0211 3.85304 10 3.8 10H1.4C1.34696 10 1.29609 10.0211 1.25858 10.0586C1.22107 10.0961 1.2 10.147 1.2 10.2V12.6C1.2 12.6531 1.22107 12.704 1.25858 12.7415C1.29609 12.779 1.34696 12.8 1.4 12.8H3.8C3.85304 12.8 3.90391 12.779 3.94142 12.7415Z"
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WindowMinimizeIcon, {
    className: "WindowMinimizeIcon",
    filePath: "windowminimize.ts",
    lineNumber: 26
  });
})();

// node_modules/primeng/fesm2022/primeng-focustrap.mjs
var FocusTrap = class _FocusTrap extends BaseComponent {
  /**
   * When set as true, focus wouldn't be managed.
   * @group Props
   */
  pFocusTrapDisabled = false;
  platformId = inject(PLATFORM_ID);
  document = inject(DOCUMENT);
  firstHiddenFocusableElement;
  lastHiddenFocusableElement;
  ngOnInit() {
    super.ngOnInit();
    if (isPlatformBrowser(this.platformId) && !this.pFocusTrapDisabled) {
      !this.firstHiddenFocusableElement && !this.lastHiddenFocusableElement && this.createHiddenFocusableElements();
    }
  }
  ngOnChanges(changes) {
    super.ngOnChanges(changes);
    if (changes.pFocusTrapDisabled && isPlatformBrowser(this.platformId)) {
      if (changes.pFocusTrapDisabled.currentValue) {
        this.removeHiddenFocusableElements();
      } else {
        this.createHiddenFocusableElements();
      }
    }
  }
  removeHiddenFocusableElements() {
    if (this.firstHiddenFocusableElement && this.firstHiddenFocusableElement.parentNode) {
      this.firstHiddenFocusableElement.parentNode.removeChild(this.firstHiddenFocusableElement);
    }
    if (this.lastHiddenFocusableElement && this.lastHiddenFocusableElement.parentNode) {
      this.lastHiddenFocusableElement.parentNode.removeChild(this.lastHiddenFocusableElement);
    }
  }
  getComputedSelector(selector) {
    return `:not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])${selector ?? ""}`;
  }
  createHiddenFocusableElements() {
    const tabindex = "0";
    const createFocusableElement = (onFocus) => {
      return createElement("span", {
        class: "p-hidden-accessible p-hidden-focusable",
        tabindex,
        role: "presentation",
        "aria-hidden": true,
        "data-p-hidden-accessible": true,
        "data-p-hidden-focusable": true,
        onFocus: onFocus?.bind(this)
      });
    };
    this.firstHiddenFocusableElement = createFocusableElement(this.onFirstHiddenElementFocus);
    this.lastHiddenFocusableElement = createFocusableElement(this.onLastHiddenElementFocus);
    this.firstHiddenFocusableElement.setAttribute("data-pc-section", "firstfocusableelement");
    this.lastHiddenFocusableElement.setAttribute("data-pc-section", "lastfocusableelement");
    this.el.nativeElement.prepend(this.firstHiddenFocusableElement);
    this.el.nativeElement.append(this.lastHiddenFocusableElement);
  }
  onFirstHiddenElementFocus(event) {
    const {
      currentTarget,
      relatedTarget
    } = event;
    const focusableElement = relatedTarget === this.lastHiddenFocusableElement || !this.el.nativeElement?.contains(relatedTarget) ? getFirstFocusableElement(currentTarget.parentElement, ":not(.p-hidden-focusable)") : this.lastHiddenFocusableElement;
    focus(focusableElement);
  }
  onLastHiddenElementFocus(event) {
    const {
      currentTarget,
      relatedTarget
    } = event;
    const focusableElement = relatedTarget === this.firstHiddenFocusableElement || !this.el.nativeElement?.contains(relatedTarget) ? getLastFocusableElement(currentTarget.parentElement, ":not(.p-hidden-focusable)") : this.firstHiddenFocusableElement;
    focus(focusableElement);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275FocusTrap_BaseFactory;
    return function FocusTrap_Factory(__ngFactoryType__) {
      return (\u0275FocusTrap_BaseFactory || (\u0275FocusTrap_BaseFactory = \u0275\u0275getInheritedFactory(_FocusTrap)))(__ngFactoryType__ || _FocusTrap);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FocusTrap,
    selectors: [["", "pFocusTrap", ""]],
    inputs: {
      pFocusTrapDisabled: [2, "pFocusTrapDisabled", "pFocusTrapDisabled", booleanAttribute]
    },
    features: [\u0275\u0275InputTransformsFeature, \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusTrap, [{
    type: Directive,
    args: [{
      selector: "[pFocusTrap]",
      standalone: true
    }]
  }], null, {
    pFocusTrapDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var FocusTrapModule = class _FocusTrapModule {
  static \u0275fac = function FocusTrapModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FocusTrapModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _FocusTrapModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusTrapModule, [{
    type: NgModule,
    args: [{
      imports: [FocusTrap],
      exports: [FocusTrap]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-dialog.mjs
var theme = ({
  dt
}) => `
.p-dialog {
    max-height: 90%;
    transform: scale(1);
    border-radius: ${dt("dialog.border.radius")};
    box-shadow: ${dt("dialog.shadow")};
    background: ${dt("dialog.background")};
    border: 1px solid ${dt("dialog.border.color")};
    color: ${dt("dialog.color")};
    display: flex;
    flex-direction: column;
    pointer-events: auto
}

.p-dialog-content {
    overflow-y: auto;
    padding: ${dt("dialog.content.padding")};
    flex-grow: 1;
}

.p-dialog-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    padding: ${dt("dialog.header.padding")};
}

.p-dialog-title {
    font-weight: ${dt("dialog.title.font.weight")};
    font-size: ${dt("dialog.title.font.size")};
}

.p-dialog-footer {
    flex-shrink: 0;
    padding: ${dt("dialog.footer.padding")};
    display: flex;
    justify-content: flex-end;
    gap: ${dt("dialog.footer.gap")};
}

.p-dialog-header-actions {
    display: flex;
    align-items: center;
    gap: ${dt("dialog.header.gap")};
}

.p-dialog-enter-active {
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}

.p-dialog-leave-active {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.p-dialog-enter-from,
.p-dialog-leave-to {
    opacity: 0;
    transform: scale(0.7);
}

.p-dialog-top .p-dialog,
.p-dialog-bottom .p-dialog,
.p-dialog-left .p-dialog,
.p-dialog-right .p-dialog,
.p-dialog-topleft .p-dialog,
.p-dialog-topright .p-dialog,
.p-dialog-bottomleft .p-dialog,
.p-dialog-bottomright .p-dialog {
    margin: 0.75rem;
    transform: translate3d(0px, 0px, 0px);
}

.p-dialog-top .p-dialog-enter-active,
.p-dialog-top .p-dialog-leave-active,
.p-dialog-bottom .p-dialog-enter-active,
.p-dialog-bottom .p-dialog-leave-active,
.p-dialog-left .p-dialog-enter-active,
.p-dialog-left .p-dialog-leave-active,
.p-dialog-right .p-dialog-enter-active,
.p-dialog-right .p-dialog-leave-active,
.p-dialog-topleft .p-dialog-enter-active,
.p-dialog-topleft .p-dialog-leave-active,
.p-dialog-topright .p-dialog-enter-active,
.p-dialog-topright .p-dialog-leave-active,
.p-dialog-bottomleft .p-dialog-enter-active,
.p-dialog-bottomleft .p-dialog-leave-active,
.p-dialog-bottomright .p-dialog-enter-active,
.p-dialog-bottomright .p-dialog-leave-active {
    transition: all 0.3s ease-out;
}

.p-dialog-top .p-dialog-enter-from,
.p-dialog-top .p-dialog-leave-to {
    transform: translate3d(0px, -100%, 0px);
}

.p-dialog-bottom .p-dialog-enter-from,
.p-dialog-bottom .p-dialog-leave-to {
    transform: translate3d(0px, 100%, 0px);
}

.p-dialog-left .p-dialog-enter-from,
.p-dialog-left .p-dialog-leave-to,
.p-dialog-topleft .p-dialog-enter-from,
.p-dialog-topleft .p-dialog-leave-to,
.p-dialog-bottomleft .p-dialog-enter-from,
.p-dialog-bottomleft .p-dialog-leave-to {
    transform: translate3d(-100%, 0px, 0px);
}

.p-dialog-right .p-dialog-enter-from,
.p-dialog-right .p-dialog-leave-to,
.p-dialog-topright .p-dialog-enter-from,
.p-dialog-topright .p-dialog-leave-to,
.p-dialog-bottomright .p-dialog-enter-from,
.p-dialog-bottomright .p-dialog-leave-to {
    transform: translate3d(100%, 0px, 0px);
}

.p-dialog-left:dir(rtl) .p-dialog-enter-from,
.p-dialog-left:dir(rtl) .p-dialog-leave-to,
.p-dialog-topleft:dir(rtl) .p-dialog-enter-from,
.p-dialog-topleft:dir(rtl) .p-dialog-leave-to,
.p-dialog-bottomleft:dir(rtl) .p-dialog-enter-from,
.p-dialog-bottomleft:dir(rtl) .p-dialog-leave-to {
    transform: translate3d(100%, 0px, 0px);
}

.p-dialog-right:dir(rtl) .p-dialog-enter-from,
.p-dialog-right:dir(rtl) .p-dialog-leave-to,
.p-dialog-topright:dir(rtl) .p-dialog-enter-from,
.p-dialog-topright:dir(rtl) .p-dialog-leave-to,
.p-dialog-bottomright:dir(rtl) .p-dialog-enter-from,
.p-dialog-bottomright:dir(rtl) .p-dialog-leave-to {
    transform: translate3d(-100%, 0px, 0px);
}

.p-dialog-maximized {
    width: 100vw !important;
    height: 100vh !important;
    top: 0px !important;
    left: 0px !important;
    max-height: 100%;
    height: 100%;
    border-radius: 0;
}

.p-dialog-maximized .p-dialog-content {
    flex-grow: 1;
}

.p-overlay-mask:dir(rtl) {
    flex-direction: row-reverse;
}

/* For PrimeNG */

.p-dialog .p-resizable-handle {
    position: absolute;
    font-size: 0.1px;
    display: block;
    cursor: se-resize;
    width: 12px;
    height: 12px;
    right: 1px;
    bottom: 1px;
}

.p-confirm-dialog .p-dialog-content {
    display: flex;
    align-items: center;
}
`;
var inlineStyles = {
  mask: ({
    instance
  }) => ({
    position: "fixed",
    height: "100%",
    width: "100%",
    left: 0,
    top: 0,
    display: "flex",
    justifyContent: instance.position === "left" || instance.position === "topleft" || instance.position === "bottomleft" ? "flex-start" : instance.position === "right" || instance.position === "topright" || instance.position === "bottomright" ? "flex-end" : "center",
    alignItems: instance.position === "top" || instance.position === "topleft" || instance.position === "topright" ? "flex-start" : instance.position === "bottom" || instance.position === "bottomleft" || instance.position === "bottomright" ? "flex-end" : "center",
    pointerEvents: instance.modal ? "auto" : "none"
  }),
  root: {
    display: "flex",
    flexDirection: "column",
    pointerEvents: "auto"
  }
};
var classes = {
  mask: ({
    instance
  }) => {
    const positions = ["left", "right", "top", "topleft", "topright", "bottom", "bottomleft", "bottomright"];
    const pos = positions.find((item) => item === instance.position);
    return {
      "p-dialog-mask": true,
      "p-overlay-mask p-overlay-mask-enter": instance.modal,
      [`p-dialog-${pos}`]: pos
    };
  },
  root: ({
    instance
  }) => ({
    "p-dialog p-component": true,
    "p-dialog-maximized": instance.maximizable && instance.maximized
  }),
  header: "p-dialog-header",
  title: "p-dialog-title",
  resizeHandle: "p-resizable-handle",
  headerActions: "p-dialog-header-actions",
  pcMaximizeButton: "p-dialog-maximize-button",
  pcCloseButton: "p-dialog-close-button",
  content: "p-dialog-content",
  footer: "p-dialog-footer"
};
var DialogStyle = class _DialogStyle extends BaseStyle {
  name = "dialog";
  theme = theme;
  classes = classes;
  inlineStyles = inlineStyles;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275DialogStyle_BaseFactory;
    return function DialogStyle_Factory(__ngFactoryType__) {
      return (\u0275DialogStyle_BaseFactory || (\u0275DialogStyle_BaseFactory = \u0275\u0275getInheritedFactory(_DialogStyle)))(__ngFactoryType__ || _DialogStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _DialogStyle,
    factory: _DialogStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogStyle, [{
    type: Injectable
  }], null, null);
})();
var DialogClasses;
(function(DialogClasses2) {
  DialogClasses2["mask"] = "p-dialog-mask";
  DialogClasses2["root"] = "p-dialog";
  DialogClasses2["header"] = "p-dialog-header";
  DialogClasses2["title"] = "p-dialog-title";
  DialogClasses2["headerActions"] = "p-dialog-header-actions";
  DialogClasses2["pcMaximizeButton"] = "p-dialog-maximize-button";
  DialogClasses2["pcCloseButton"] = "p-dialog-close-button";
  DialogClasses2["content"] = "p-dialog-content";
  DialogClasses2["footer"] = "p-dialog-footer";
})(DialogClasses || (DialogClasses = {}));
var _c0 = ["header"];
var _c1 = ["content"];
var _c2 = ["footer"];
var _c3 = ["closeicon"];
var _c4 = ["maximizeicon"];
var _c5 = ["minimizeicon"];
var _c6 = ["headless"];
var _c7 = ["titlebar"];
var _c8 = ["*", [["p-footer"]]];
var _c9 = ["*", "p-footer"];
var _c10 = (a0, a1, a2) => ({
  position: "fixed",
  height: "100%",
  width: "100%",
  left: 0,
  top: 0,
  display: "flex",
  "justify-content": a0,
  "align-items": a1,
  "pointer-events": a2
});
var _c11 = (a0) => ({
  "p-dialog p-component": true,
  "p-dialog-maximized": a0
});
var _c12 = () => ({
  display: "flex",
  "flex-direction": "column",
  "pointer-events": "auto"
});
var _c13 = (a0, a1) => ({
  transform: a0,
  transition: a1
});
var _c14 = (a0) => ({
  value: "visible",
  params: a0
});
function Dialog_div_0_div_1_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Dialog_div_0_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Dialog_div_0_div_1_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 11);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1._headlessTemplate || ctx_r1.headlessTemplate || ctx_r1.headlessT);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275listener("mousedown", function Dialog_div_0_div_1_ng_template_3_div_0_Template_div_mousedown_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.initResize($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngClass", ctx_r1.cx("resizeHandle"));
  }
}
function Dialog_div_0_div_1_ng_template_3_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("id", ctx_r1.ariaLabelledBy)("ngClass", ctx_r1.cx("title"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.header);
  }
}
function Dialog_div_0_div_1_ng_template_3_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Dialog_div_0_div_1_ng_template_3_p_button_6_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 15);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("ngClass", ctx_r1.maximized ? ctx_r1.minimizeIcon : ctx_r1.maximizeIcon);
  }
}
function Dialog_div_0_div_1_ng_template_3_p_button_6_ng_container_2_WindowMaximizeIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "WindowMaximizeIcon");
  }
}
function Dialog_div_0_div_1_ng_template_3_p_button_6_ng_container_2_WindowMinimizeIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "WindowMinimizeIcon");
  }
}
function Dialog_div_0_div_1_ng_template_3_p_button_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Dialog_div_0_div_1_ng_template_3_p_button_6_ng_container_2_WindowMaximizeIcon_1_Template, 1, 0, "WindowMaximizeIcon", 22)(2, Dialog_div_0_div_1_ng_template_3_p_button_6_ng_container_2_WindowMinimizeIcon_2_Template, 1, 0, "WindowMinimizeIcon", 22);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.maximized && !ctx_r1._maximizeiconTemplate && !ctx_r1.maximizeIconTemplate && !ctx_r1.maximizeIconT);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.maximized && !ctx_r1._minimizeiconTemplate && !ctx_r1.minimizeIconTemplate && !ctx_r1.minimizeIconT);
  }
}
function Dialog_div_0_div_1_ng_template_3_p_button_6_ng_container_3_1_ng_template_0_Template(rf, ctx) {
}
function Dialog_div_0_div_1_ng_template_3_p_button_6_ng_container_3_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Dialog_div_0_div_1_ng_template_3_p_button_6_ng_container_3_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Dialog_div_0_div_1_ng_template_3_p_button_6_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Dialog_div_0_div_1_ng_template_3_p_button_6_ng_container_3_1_Template, 1, 0, null, 11);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1._maximizeiconTemplate || ctx_r1.maximizeIconTemplate || ctx_r1.maximizeIconT);
  }
}
function Dialog_div_0_div_1_ng_template_3_p_button_6_ng_container_4_1_ng_template_0_Template(rf, ctx) {
}
function Dialog_div_0_div_1_ng_template_3_p_button_6_ng_container_4_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Dialog_div_0_div_1_ng_template_3_p_button_6_ng_container_4_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Dialog_div_0_div_1_ng_template_3_p_button_6_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Dialog_div_0_div_1_ng_template_3_p_button_6_ng_container_4_1_Template, 1, 0, null, 11);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1._minimizeiconTemplate || ctx_r1.minimizeIconTemplate || ctx_r1.minimizeIconT);
  }
}
function Dialog_div_0_div_1_ng_template_3_p_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 21);
    \u0275\u0275listener("onClick", function Dialog_div_0_div_1_ng_template_3_p_button_6_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.maximize());
    })("keydown.enter", function Dialog_div_0_div_1_ng_template_3_p_button_6_Template_p_button_keydown_enter_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.maximize());
    });
    \u0275\u0275template(1, Dialog_div_0_div_1_ng_template_3_p_button_6_span_1_Template, 1, 1, "span", 18)(2, Dialog_div_0_div_1_ng_template_3_p_button_6_ng_container_2_Template, 3, 2, "ng-container", 22)(3, Dialog_div_0_div_1_ng_template_3_p_button_6_ng_container_3_Template, 2, 1, "ng-container", 22)(4, Dialog_div_0_div_1_ng_template_3_p_button_6_ng_container_4_Template, 2, 1, "ng-container", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("styleClass", ctx_r1.cx("pcMaximizeButton"))("tabindex", ctx_r1.maximizable ? "0" : "-1")("ariaLabel", ctx_r1.maximizeLabel)("buttonProps", ctx_r1.maximizeButtonProps);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.maximizeIcon && !ctx_r1._maximizeiconTemplate && !ctx_r1._minimizeiconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.maximizeIcon && !(ctx_r1.maximizeButtonProps == null ? null : ctx_r1.maximizeButtonProps.icon));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.maximized);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.maximized);
  }
}
function Dialog_div_0_div_1_ng_template_3_p_button_7_ng_template_1_ng_container_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 15);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275property("ngClass", ctx_r1.closeIcon);
  }
}
function Dialog_div_0_div_1_ng_template_3_p_button_7_ng_template_1_ng_container_0_TimesIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "TimesIcon");
  }
}
function Dialog_div_0_div_1_ng_template_3_p_button_7_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Dialog_div_0_div_1_ng_template_3_p_button_7_ng_template_1_ng_container_0_span_1_Template, 1, 1, "span", 18)(2, Dialog_div_0_div_1_ng_template_3_p_button_7_ng_template_1_ng_container_0_TimesIcon_2_Template, 1, 0, "TimesIcon", 22);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.closeIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.closeIcon);
  }
}
function Dialog_div_0_div_1_ng_template_3_p_button_7_ng_template_1_span_1_1_ng_template_0_Template(rf, ctx) {
}
function Dialog_div_0_div_1_ng_template_3_p_button_7_ng_template_1_span_1_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Dialog_div_0_div_1_ng_template_3_p_button_7_ng_template_1_span_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Dialog_div_0_div_1_ng_template_3_p_button_7_ng_template_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275template(1, Dialog_div_0_div_1_ng_template_3_p_button_7_ng_template_1_span_1_1_Template, 1, 0, null, 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1._closeiconTemplate || ctx_r1.closeIconTemplate || ctx_r1.closeIconT);
  }
}
function Dialog_div_0_div_1_ng_template_3_p_button_7_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Dialog_div_0_div_1_ng_template_3_p_button_7_ng_template_1_ng_container_0_Template, 3, 2, "ng-container", 22)(1, Dialog_div_0_div_1_ng_template_3_p_button_7_ng_template_1_span_1_Template, 2, 1, "span", 22);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("ngIf", !ctx_r1._closeiconTemplate && !ctx_r1.closeIconTemplate && !ctx_r1.closeIconT && !(ctx_r1.closeButtonProps == null ? null : ctx_r1.closeButtonProps.icon));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1._closeiconTemplate || ctx_r1.closeIconTemplate || ctx_r1.closeIconT);
  }
}
function Dialog_div_0_div_1_ng_template_3_p_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 23);
    \u0275\u0275listener("onClick", function Dialog_div_0_div_1_ng_template_3_p_button_7_Template_p_button_onClick_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.close($event));
    })("keydown.enter", function Dialog_div_0_div_1_ng_template_3_p_button_7_Template_p_button_keydown_enter_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.close($event));
    });
    \u0275\u0275template(1, Dialog_div_0_div_1_ng_template_3_p_button_7_ng_template_1_Template, 2, 2, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("styleClass", ctx_r1.cx("pcCloseButton"))("ariaLabel", ctx_r1.closeAriaLabel)("tabindex", ctx_r1.closeTabindex)("buttonProps", ctx_r1.closeButtonProps);
  }
}
function Dialog_div_0_div_1_ng_template_3_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_12_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15, 5);
    \u0275\u0275projection(2, 1);
    \u0275\u0275template(3, Dialog_div_0_div_1_ng_template_3_div_12_ng_container_3_Template, 1, 0, "ng-container", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngClass", ctx_r1.cx("footer"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1._footerTemplate || ctx_r1.footerTemplate || ctx_r1.footerT);
  }
}
function Dialog_div_0_div_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275template(0, Dialog_div_0_div_1_ng_template_3_div_0_Template, 1, 1, "div", 12);
    \u0275\u0275elementStart(1, "div", 13, 2);
    \u0275\u0275listener("mousedown", function Dialog_div_0_div_1_ng_template_3_Template_div_mousedown_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.initDrag($event));
    });
    \u0275\u0275template(3, Dialog_div_0_div_1_ng_template_3_span_3_Template, 2, 3, "span", 14)(4, Dialog_div_0_div_1_ng_template_3_ng_container_4_Template, 1, 0, "ng-container", 11);
    \u0275\u0275elementStart(5, "div", 15);
    \u0275\u0275template(6, Dialog_div_0_div_1_ng_template_3_p_button_6_Template, 5, 8, "p-button", 16)(7, Dialog_div_0_div_1_ng_template_3_p_button_7_Template, 3, 4, "p-button", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 7, 3);
    \u0275\u0275projection(10);
    \u0275\u0275template(11, Dialog_div_0_div_1_ng_template_3_ng_container_11_Template, 1, 0, "ng-container", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, Dialog_div_0_div_1_ng_template_3_div_12_Template, 4, 2, "div", 18);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", ctx_r1.resizable);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.cx("header"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1._headerTemplate && !ctx_r1.headerTemplate && !ctx_r1.headerT);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1._headerTemplate || ctx_r1.headerTemplate || ctx_r1.headerT);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.cx("headerActions"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.maximizable);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.closable);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.contentStyleClass);
    \u0275\u0275property("ngClass", ctx_r1.cx("content"))("ngStyle", ctx_r1.contentStyle);
    \u0275\u0275attribute("data-pc-section", "content");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1._contentTemplate || ctx_r1.contentTemplate || ctx_r1.contentT);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1._footerTemplate || ctx_r1.footerTemplate || ctx_r1.footerT);
  }
}
function Dialog_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9, 0);
    \u0275\u0275listener("@animation.start", function Dialog_div_0_div_1_Template_div_animation_animation_start_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAnimationStart($event));
    })("@animation.done", function Dialog_div_0_div_1_Template_div_animation_animation_done_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAnimationEnd($event));
    });
    \u0275\u0275template(2, Dialog_div_0_div_1_ng_container_2_Template, 2, 1, "ng-container", 10)(3, Dialog_div_0_div_1_ng_template_3_Template, 13, 14, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const notHeadless_r7 = \u0275\u0275reference(4);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleMap(ctx_r1.style);
    \u0275\u0275classMap(ctx_r1.styleClass);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(13, _c11, ctx_r1.maximizable && ctx_r1.maximized))("ngStyle", \u0275\u0275pureFunction0(15, _c12))("pFocusTrapDisabled", ctx_r1.focusTrap === false)("@animation", \u0275\u0275pureFunction1(19, _c14, \u0275\u0275pureFunction2(16, _c13, ctx_r1.transformOptions, ctx_r1.transitionOptions)));
    \u0275\u0275attribute("role", ctx_r1.role)("aria-labelledby", ctx_r1.ariaLabelledBy)("aria-modal", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1._headlessTemplate || ctx_r1.headlessTemplate || ctx_r1.headlessT)("ngIfElse", notHeadless_r7);
  }
}
function Dialog_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275template(1, Dialog_div_0_div_1_Template, 5, 21, "div", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(ctx_r1.maskStyle);
    \u0275\u0275classMap(ctx_r1.maskStyleClass);
    \u0275\u0275property("ngClass", ctx_r1.maskClass)("ngStyle", \u0275\u0275pureFunction3(7, _c10, ctx_r1.position === "left" || ctx_r1.position === "topleft" || ctx_r1.position === "bottomleft" ? "flex-start" : ctx_r1.position === "right" || ctx_r1.position === "topright" || ctx_r1.position === "bottomright" ? "flex-end" : "center", ctx_r1.position === "top" || ctx_r1.position === "topleft" || ctx_r1.position === "topright" ? "flex-start" : ctx_r1.position === "bottom" || ctx_r1.position === "bottomleft" || ctx_r1.position === "bottomright" ? "flex-end" : "center", ctx_r1.modal ? "auto" : "none"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.visible);
  }
}
var showAnimation = animation([style({
  transform: "{{transform}}",
  opacity: 0
}), animate("{{transition}}")]);
var hideAnimation = animation([animate("{{transition}}", style({
  transform: "{{transform}}",
  opacity: 0
}))]);
var Dialog = class _Dialog extends BaseComponent {
  /**
   * Title text of the dialog.
   * @group Props
   */
  header;
  /**
   * Enables dragging to change the position using header.
   * @group Props
   */
  draggable = true;
  /**
   * Enables resizing of the content.
   * @group Props
   */
  resizable = true;
  /**
   * Defines the left offset of dialog.
   * @group Props
   * @deprecated positionLeft property is deprecated.
   */
  get positionLeft() {
    return 0;
  }
  set positionLeft(_positionLeft) {
    console.log("positionLeft property is deprecated.");
  }
  /**
   * Defines the top offset of dialog.
   * @group Props
   * @deprecated positionTop property is deprecated.
   */
  get positionTop() {
    return 0;
  }
  set positionTop(_positionTop) {
    console.log("positionTop property is deprecated.");
  }
  /**
   * Style of the content section.
   * @group Props
   */
  contentStyle;
  /**
   * Style class of the content.
   * @group Props
   */
  contentStyleClass;
  /**
   * Defines if background should be blocked when dialog is displayed.
   * @group Props
   */
  modal = false;
  /**
   * Specifies if pressing escape key should hide the dialog.
   * @group Props
   */
  closeOnEscape = true;
  /**
   * Specifies if clicking the modal background should hide the dialog.
   * @group Props
   */
  dismissableMask = false;
  /**
   * When enabled dialog is displayed in RTL direction.
   * @group Props
   */
  rtl = false;
  /**
   * Adds a close icon to the header to hide the dialog.
   * @group Props
   */
  closable = true;
  /**
   * Defines if the component is responsive.
   * @group Props
   * @deprecated Responsive property is deprecated.
   */
  get responsive() {
    return false;
  }
  set responsive(_responsive) {
    console.log("Responsive property is deprecated.");
  }
  /**
   * Target element to attach the dialog, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  appendTo;
  /**
   * Object literal to define widths per screen size.
   * @group Props
   */
  breakpoints;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Style class of the mask.
   * @group Props
   */
  maskStyleClass;
  /**
   * Style of the mask.
   * @group Props
   */
  maskStyle;
  /**
   * Whether to show the header or not.
   * @group Props
   */
  showHeader = true;
  /**
   * Defines the breakpoint of the component responsive.
   * @group Props
   * @deprecated Breakpoint property is not utilized and deprecated. Use breakpoints or CSS media queries instead.
   */
  get breakpoint() {
    return 649;
  }
  set breakpoint(_breakpoint) {
    console.log("Breakpoint property is not utilized and deprecated, use breakpoints or CSS media queries instead.");
  }
  /**
   * Whether background scroll should be blocked when dialog is visible.
   * @group Props
   */
  blockScroll = false;
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
   * Minimum value for the left coordinate of dialog in dragging.
   * @group Props
   */
  minX = 0;
  /**
   * Minimum value for the top coordinate of dialog in dragging.
   * @group Props
   */
  minY = 0;
  /**
   * When enabled, first focusable element receives focus on show.
   * @group Props
   */
  focusOnShow = true;
  /**
   * Whether the dialog can be displayed full screen.
   * @group Props
   */
  maximizable = false;
  /**
   * Keeps dialog in the viewport.
   * @group Props
   */
  keepInViewport = true;
  /**
   * When enabled, can only focus on elements inside the dialog.
   * @group Props
   */
  focusTrap = true;
  /**
   * Transition options of the animation.
   * @group Props
   */
  transitionOptions = "150ms cubic-bezier(0, 0, 0.2, 1)";
  /**
   * Name of the close icon.
   * @group Props
   */
  closeIcon;
  /**
   * Defines a string that labels the close button for accessibility.
   * @group Props
   */
  closeAriaLabel;
  /**
   * Index of the close button in tabbing order.
   * @group Props
   */
  closeTabindex = "0";
  /**
   * Name of the minimize icon.
   * @group Props
   */
  minimizeIcon;
  /**
   * Name of the maximize icon.
   * @group Props
   */
  maximizeIcon;
  /**
   * Used to pass all properties of the ButtonProps to the Button component.
   * @group Props
   */
  closeButtonProps = {
    severity: "secondary",
    text: true,
    rounded: true
  };
  /**
   * Used to pass all properties of the ButtonProps to the Button component.
   * @group Props
   */
  maximizeButtonProps = {
    severity: "secondary",
    text: true,
    rounded: true
  };
  /**
   * Specifies the visibility of the dialog.
   * @group Props
   */
  get visible() {
    return this._visible;
  }
  set visible(value) {
    this._visible = value;
    if (this._visible && !this.maskVisible) {
      this.maskVisible = true;
    }
  }
  /**
   * Inline style of the component.
   * @group Props
   */
  get style() {
    return this._style;
  }
  set style(value) {
    if (value) {
      this._style = __spreadValues({}, value);
      this.originalStyle = value;
    }
  }
  /**
   * Position of the dialog.
   * @group Props
   */
  get position() {
    return this._position;
  }
  set position(value) {
    this._position = value;
    switch (value) {
      case "topleft":
      case "bottomleft":
      case "left":
        this.transformOptions = "translate3d(-100%, 0px, 0px)";
        break;
      case "topright":
      case "bottomright":
      case "right":
        this.transformOptions = "translate3d(100%, 0px, 0px)";
        break;
      case "bottom":
        this.transformOptions = "translate3d(0px, 100%, 0px)";
        break;
      case "top":
        this.transformOptions = "translate3d(0px, -100%, 0px)";
        break;
      default:
        this.transformOptions = "scale(0.7)";
        break;
    }
  }
  /**
   * Role attribute of html element.
   * @group Emits
   */
  role = "dialog";
  /**
   * Callback to invoke when dialog is shown.
   * @group Emits
   */
  onShow = new EventEmitter();
  /**
   * Callback to invoke when dialog is hidden.
   * @group Emits
   */
  onHide = new EventEmitter();
  /**
   * This EventEmitter is used to notify changes in the visibility state of a component.
   * @param {boolean} value - New value.
   * @group Emits
   */
  visibleChange = new EventEmitter();
  /**
   * Callback to invoke when dialog resizing is initiated.
   * @param {MouseEvent} event - Mouse event.
   * @group Emits
   */
  onResizeInit = new EventEmitter();
  /**
   * Callback to invoke when dialog resizing is completed.
   * @param {MouseEvent} event - Mouse event.
   * @group Emits
   */
  onResizeEnd = new EventEmitter();
  /**
   * Callback to invoke when dialog dragging is completed.
   * @param {DragEvent} event - Drag event.
   * @group Emits
   */
  onDragEnd = new EventEmitter();
  /**
   * Callback to invoke when dialog maximized or unmaximized.
   * @group Emits
   */
  onMaximize = new EventEmitter();
  headerViewChild;
  contentViewChild;
  footerViewChild;
  /**
   * Header template.
   * @group Props
   */
  headerTemplate;
  /**
   * Content template.
   * @group Props
   */
  contentTemplate;
  /**
   * Footer template.
   * @group Props
   */
  footerTemplate;
  /**
   * Close icon template.
   * @group Props
   */
  closeIconTemplate;
  /**
   * Maximize icon template.
   * @group Props
   */
  maximizeIconTemplate;
  /**
   * Minimize icon template.
   * @group Props
   */
  minimizeIconTemplate;
  /**
   * Headless template.
   * @group Props
   */
  headlessTemplate;
  _headerTemplate;
  _contentTemplate;
  _footerTemplate;
  _closeiconTemplate;
  _maximizeiconTemplate;
  _minimizeiconTemplate;
  _headlessTemplate;
  _visible = false;
  maskVisible;
  container;
  wrapper;
  dragging;
  ariaLabelledBy = this.getAriaLabelledBy();
  documentDragListener;
  documentDragEndListener;
  resizing;
  documentResizeListener;
  documentResizeEndListener;
  documentEscapeListener;
  maskClickListener;
  lastPageX;
  lastPageY;
  preventVisibleChangePropagation;
  maximized;
  preMaximizeContentHeight;
  preMaximizeContainerWidth;
  preMaximizeContainerHeight;
  preMaximizePageX;
  preMaximizePageY;
  id = uuid("pn_id_");
  _style = {};
  _position = "center";
  originalStyle;
  transformOptions = "scale(0.7)";
  styleElement;
  window;
  _componentStyle = inject(DialogStyle);
  headerT;
  contentT;
  footerT;
  closeIconT;
  maximizeIconT;
  minimizeIconT;
  headlessT;
  get maximizeLabel() {
    return this.config.getTranslation(TranslationKeys.ARIA)["maximizeLabel"];
  }
  zone = inject(NgZone);
  get maskClass() {
    const positions = ["left", "right", "top", "topleft", "topright", "bottom", "bottomleft", "bottomright"];
    const pos = positions.find((item) => item === this.position);
    return {
      "p-dialog-mask": true,
      "p-overlay-mask p-overlay-mask-enter": this.modal || this.dismissableMask,
      [`p-dialog-${pos}`]: pos
    };
  }
  ngOnInit() {
    super.ngOnInit();
    if (this.breakpoints) {
      this.createStyle();
    }
  }
  templates;
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "header":
          this.headerT = item.template;
          break;
        case "content":
          this.contentT = item.template;
          break;
        case "footer":
          this.footerT = item.template;
          break;
        case "closeicon":
          this.closeIconT = item.template;
          break;
        case "maximizeicon":
          this.maximizeIconT = item.template;
          break;
        case "minimizeicon":
          this.minimizeIconT = item.template;
          break;
        case "headless":
          this.headlessT = item.template;
          break;
        default:
          this.contentT = item.template;
          break;
      }
    });
  }
  getAriaLabelledBy() {
    return this.header !== null ? uuid("pn_id_") + "_header" : null;
  }
  parseDurationToMilliseconds(durationString) {
    const transitionTimeRegex = /([\d\.]+)(ms|s)\b/g;
    let totalMilliseconds = 0;
    let match;
    while ((match = transitionTimeRegex.exec(durationString)) !== null) {
      const value = parseFloat(match[1]);
      const unit = match[2];
      if (unit === "ms") {
        totalMilliseconds += value;
      } else if (unit === "s") {
        totalMilliseconds += value * 1e3;
      }
    }
    if (totalMilliseconds === 0) {
      return void 0;
    }
    return totalMilliseconds;
  }
  _focus(focusParentElement) {
    if (focusParentElement) {
      const timeoutDuration = this.parseDurationToMilliseconds(this.transitionOptions);
      let _focusableElements = DomHandler.getFocusableElements(focusParentElement);
      if (_focusableElements && _focusableElements.length > 0) {
        this.zone.runOutsideAngular(() => {
          setTimeout(() => _focusableElements[0].focus(), timeoutDuration || 5);
        });
        return true;
      }
    }
    return false;
  }
  focus(focusParentElement) {
    let focused = this._focus(focusParentElement);
    if (!focused) {
      focused = this._focus(this.footerViewChild?.nativeElement);
      if (!focused) {
        focused = this._focus(this.headerViewChild?.nativeElement);
        if (!focused) {
          this._focus(this.contentViewChild?.nativeElement);
        }
      }
    }
  }
  close(event) {
    this.visibleChange.emit(false);
    event.preventDefault();
  }
  enableModality() {
    if (this.closable && this.dismissableMask) {
      this.maskClickListener = this.renderer.listen(this.wrapper, "mousedown", (event) => {
        if (this.wrapper && this.wrapper.isSameNode(event.target)) {
          this.close(event);
        }
      });
    }
    if (this.modal) {
      blockBodyScroll();
    }
  }
  disableModality() {
    if (this.wrapper) {
      if (this.dismissableMask) {
        this.unbindMaskClickListener();
      }
      const scrollBlockers = document.querySelectorAll(".p-dialog-mask-scrollblocker");
      if (this.modal && scrollBlockers && scrollBlockers.length == 1) {
        unblockBodyScroll();
      }
      if (!this.cd.destroyed) {
        this.cd.detectChanges();
      }
    }
  }
  maximize() {
    this.maximized = !this.maximized;
    if (!this.modal && !this.blockScroll) {
      if (this.maximized) {
        blockBodyScroll();
      } else {
        unblockBodyScroll();
      }
    }
    this.onMaximize.emit({
      maximized: this.maximized
    });
  }
  unbindMaskClickListener() {
    if (this.maskClickListener) {
      this.maskClickListener();
      this.maskClickListener = null;
    }
  }
  moveOnTop() {
    if (this.autoZIndex) {
      zindexutils.set("modal", this.container, this.baseZIndex + this.config.zIndex.modal);
      this.wrapper.style.zIndex = String(parseInt(this.container.style.zIndex, 10) - 1);
    }
  }
  createStyle() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.styleElement) {
        this.styleElement = this.renderer.createElement("style");
        this.styleElement.type = "text/css";
        this.renderer.appendChild(this.document.head, this.styleElement);
        let innerHTML = "";
        for (let breakpoint in this.breakpoints) {
          innerHTML += `
                        @media screen and (max-width: ${breakpoint}) {
                            .p-dialog[${this.id}]:not(.p-dialog-maximized) {
                                width: ${this.breakpoints[breakpoint]} !important;
                            }
                        }
                    `;
        }
        this.renderer.setProperty(this.styleElement, "innerHTML", innerHTML);
        setAttribute(this.styleElement, "nonce", this.config?.csp()?.nonce);
      }
    }
  }
  initDrag(event) {
    if (hasClass(event.target, "p-dialog-maximize-icon") || hasClass(event.target, "p-dialog-header-close-icon") || hasClass(event.target.parentElement, "p-dialog-header-icon")) {
      return;
    }
    if (this.draggable) {
      this.dragging = true;
      this.lastPageX = event.pageX;
      this.lastPageY = event.pageY;
      this.container.style.margin = "0";
      addClass(this.document.body, "p-unselectable-text");
    }
  }
  onDrag(event) {
    if (this.dragging) {
      const containerWidth = getOuterWidth(this.container);
      const containerHeight = getOuterHeight(this.container);
      const deltaX = event.pageX - this.lastPageX;
      const deltaY = event.pageY - this.lastPageY;
      const offset = this.container.getBoundingClientRect();
      const containerComputedStyle = getComputedStyle(this.container);
      const leftMargin = parseFloat(containerComputedStyle.marginLeft);
      const topMargin = parseFloat(containerComputedStyle.marginTop);
      const leftPos = offset.left + deltaX - leftMargin;
      const topPos = offset.top + deltaY - topMargin;
      const viewport = getViewport();
      this.container.style.position = "fixed";
      if (this.keepInViewport) {
        if (leftPos >= this.minX && leftPos + containerWidth < viewport.width) {
          this._style.left = `${leftPos}px`;
          this.lastPageX = event.pageX;
          this.container.style.left = `${leftPos}px`;
        }
        if (topPos >= this.minY && topPos + containerHeight < viewport.height) {
          this._style.top = `${topPos}px`;
          this.lastPageY = event.pageY;
          this.container.style.top = `${topPos}px`;
        }
      } else {
        this.lastPageX = event.pageX;
        this.container.style.left = `${leftPos}px`;
        this.lastPageY = event.pageY;
        this.container.style.top = `${topPos}px`;
      }
    }
  }
  endDrag(event) {
    if (this.dragging) {
      this.dragging = false;
      removeClass(this.document.body, "p-unselectable-text");
      this.cd.detectChanges();
      this.onDragEnd.emit(event);
    }
  }
  resetPosition() {
    this.container.style.position = "";
    this.container.style.left = "";
    this.container.style.top = "";
    this.container.style.margin = "";
  }
  //backward compatibility
  center() {
    this.resetPosition();
  }
  initResize(event) {
    if (this.resizable) {
      this.resizing = true;
      this.lastPageX = event.pageX;
      this.lastPageY = event.pageY;
      addClass(this.document.body, "p-unselectable-text");
      this.onResizeInit.emit(event);
    }
  }
  onResize(event) {
    if (this.resizing) {
      let deltaX = event.pageX - this.lastPageX;
      let deltaY = event.pageY - this.lastPageY;
      let containerWidth = getOuterWidth(this.container);
      let containerHeight = getOuterHeight(this.container);
      let contentHeight = getOuterHeight(this.contentViewChild?.nativeElement);
      let newWidth = containerWidth + deltaX;
      let newHeight = containerHeight + deltaY;
      let minWidth = this.container.style.minWidth;
      let minHeight = this.container.style.minHeight;
      let offset = this.container.getBoundingClientRect();
      let viewport = getViewport();
      let hasBeenDragged = !parseInt(this.container.style.top) || !parseInt(this.container.style.left);
      if (hasBeenDragged) {
        newWidth += deltaX;
        newHeight += deltaY;
      }
      if ((!minWidth || newWidth > parseInt(minWidth)) && offset.left + newWidth < viewport.width) {
        this._style.width = newWidth + "px";
        this.container.style.width = this._style.width;
      }
      if ((!minHeight || newHeight > parseInt(minHeight)) && offset.top + newHeight < viewport.height) {
        this.contentViewChild.nativeElement.style.height = contentHeight + newHeight - containerHeight + "px";
        if (this._style.height) {
          this._style.height = newHeight + "px";
          this.container.style.height = this._style.height;
        }
      }
      this.lastPageX = event.pageX;
      this.lastPageY = event.pageY;
    }
  }
  resizeEnd(event) {
    if (this.resizing) {
      this.resizing = false;
      removeClass(this.document.body, "p-unselectable-text");
      this.onResizeEnd.emit(event);
    }
  }
  bindGlobalListeners() {
    if (this.draggable) {
      this.bindDocumentDragListener();
      this.bindDocumentDragEndListener();
    }
    if (this.resizable) {
      this.bindDocumentResizeListeners();
    }
    if (this.closeOnEscape && this.closable) {
      this.bindDocumentEscapeListener();
    }
  }
  unbindGlobalListeners() {
    this.unbindDocumentDragListener();
    this.unbindDocumentDragEndListener();
    this.unbindDocumentResizeListeners();
    this.unbindDocumentEscapeListener();
  }
  bindDocumentDragListener() {
    if (!this.documentDragListener) {
      this.zone.runOutsideAngular(() => {
        this.documentDragListener = this.renderer.listen(this.document.defaultView, "mousemove", this.onDrag.bind(this));
      });
    }
  }
  unbindDocumentDragListener() {
    if (this.documentDragListener) {
      this.documentDragListener();
      this.documentDragListener = null;
    }
  }
  bindDocumentDragEndListener() {
    if (!this.documentDragEndListener) {
      this.zone.runOutsideAngular(() => {
        this.documentDragEndListener = this.renderer.listen(this.document.defaultView, "mouseup", this.endDrag.bind(this));
      });
    }
  }
  unbindDocumentDragEndListener() {
    if (this.documentDragEndListener) {
      this.documentDragEndListener();
      this.documentDragEndListener = null;
    }
  }
  bindDocumentResizeListeners() {
    if (!this.documentResizeListener && !this.documentResizeEndListener) {
      this.zone.runOutsideAngular(() => {
        this.documentResizeListener = this.renderer.listen(this.document.defaultView, "mousemove", this.onResize.bind(this));
        this.documentResizeEndListener = this.renderer.listen(this.document.defaultView, "mouseup", this.resizeEnd.bind(this));
      });
    }
  }
  unbindDocumentResizeListeners() {
    if (this.documentResizeListener && this.documentResizeEndListener) {
      this.documentResizeListener();
      this.documentResizeEndListener();
      this.documentResizeListener = null;
      this.documentResizeEndListener = null;
    }
  }
  bindDocumentEscapeListener() {
    const documentTarget = this.el ? this.el.nativeElement.ownerDocument : "document";
    this.documentEscapeListener = this.renderer.listen(documentTarget, "keydown", (event) => {
      if (event.key == "Escape") {
        this.close(event);
      }
    });
  }
  unbindDocumentEscapeListener() {
    if (this.documentEscapeListener) {
      this.documentEscapeListener();
      this.documentEscapeListener = null;
    }
  }
  appendContainer() {
    if (this.appendTo) {
      if (this.appendTo === "body") this.renderer.appendChild(this.document.body, this.wrapper);
      else appendChild(this.appendTo, this.wrapper);
    }
  }
  restoreAppend() {
    if (this.container && this.appendTo) {
      this.renderer.appendChild(this.el.nativeElement, this.wrapper);
    }
  }
  onAnimationStart(event) {
    switch (event.toState) {
      case "visible":
        this.container = event.element;
        this.wrapper = this.container?.parentElement;
        this.appendContainer();
        this.moveOnTop();
        this.bindGlobalListeners();
        this.container?.setAttribute(this.id, "");
        if (this.modal) {
          this.enableModality();
        }
        if (this.focusOnShow) {
          this.focus();
        }
        break;
      case "void":
        if (this.wrapper && this.modal) {
          addClass(this.wrapper, "p-overlay-mask-leave");
        }
        break;
    }
  }
  onAnimationEnd(event) {
    switch (event.toState) {
      case "void":
        this.onContainerDestroy();
        this.onHide.emit({});
        this.cd.markForCheck();
        break;
      case "visible":
        this.onShow.emit({});
        break;
    }
  }
  onContainerDestroy() {
    this.unbindGlobalListeners();
    this.dragging = false;
    this.maskVisible = false;
    if (this.maximized) {
      this.document.body.style.removeProperty("--scrollbar;-width");
      this.maximized = false;
    }
    if (this.modal) {
      this.disableModality();
    }
    if (hasClass(this.document.body, "p-overflow-hidden")) {
      removeClass(this.document.body, "p-overflow-hidden");
    }
    if (this.container && this.autoZIndex) {
      zindexutils.clear(this.container);
    }
    this.container = null;
    this.wrapper = null;
    this._style = this.originalStyle ? __spreadValues({}, this.originalStyle) : {};
  }
  destroyStyle() {
    if (this.styleElement) {
      this.renderer.removeChild(this.document.head, this.styleElement);
      this.styleElement = null;
    }
  }
  ngOnDestroy() {
    if (this.container) {
      this.restoreAppend();
      this.onContainerDestroy();
    }
    this.destroyStyle();
    super.ngOnDestroy();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Dialog_BaseFactory;
    return function Dialog_Factory(__ngFactoryType__) {
      return (\u0275Dialog_BaseFactory || (\u0275Dialog_BaseFactory = \u0275\u0275getInheritedFactory(_Dialog)))(__ngFactoryType__ || _Dialog);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Dialog,
    selectors: [["p-dialog"]],
    contentQueries: function Dialog_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c0, 4);
        \u0275\u0275contentQuery(dirIndex, _c1, 4);
        \u0275\u0275contentQuery(dirIndex, _c2, 4);
        \u0275\u0275contentQuery(dirIndex, _c3, 4);
        \u0275\u0275contentQuery(dirIndex, _c4, 4);
        \u0275\u0275contentQuery(dirIndex, _c5, 4);
        \u0275\u0275contentQuery(dirIndex, _c6, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._headerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._contentTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._footerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._closeiconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._maximizeiconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._minimizeiconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._headlessTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Dialog_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c7, 5);
        \u0275\u0275viewQuery(_c1, 5);
        \u0275\u0275viewQuery(_c2, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.footerViewChild = _t.first);
      }
    },
    inputs: {
      header: "header",
      draggable: [2, "draggable", "draggable", booleanAttribute],
      resizable: [2, "resizable", "resizable", booleanAttribute],
      positionLeft: "positionLeft",
      positionTop: "positionTop",
      contentStyle: "contentStyle",
      contentStyleClass: "contentStyleClass",
      modal: [2, "modal", "modal", booleanAttribute],
      closeOnEscape: [2, "closeOnEscape", "closeOnEscape", booleanAttribute],
      dismissableMask: [2, "dismissableMask", "dismissableMask", booleanAttribute],
      rtl: [2, "rtl", "rtl", booleanAttribute],
      closable: [2, "closable", "closable", booleanAttribute],
      responsive: "responsive",
      appendTo: "appendTo",
      breakpoints: "breakpoints",
      styleClass: "styleClass",
      maskStyleClass: "maskStyleClass",
      maskStyle: "maskStyle",
      showHeader: [2, "showHeader", "showHeader", booleanAttribute],
      breakpoint: "breakpoint",
      blockScroll: [2, "blockScroll", "blockScroll", booleanAttribute],
      autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
      baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
      minX: [2, "minX", "minX", numberAttribute],
      minY: [2, "minY", "minY", numberAttribute],
      focusOnShow: [2, "focusOnShow", "focusOnShow", booleanAttribute],
      maximizable: [2, "maximizable", "maximizable", booleanAttribute],
      keepInViewport: [2, "keepInViewport", "keepInViewport", booleanAttribute],
      focusTrap: [2, "focusTrap", "focusTrap", booleanAttribute],
      transitionOptions: "transitionOptions",
      closeIcon: "closeIcon",
      closeAriaLabel: "closeAriaLabel",
      closeTabindex: "closeTabindex",
      minimizeIcon: "minimizeIcon",
      maximizeIcon: "maximizeIcon",
      closeButtonProps: "closeButtonProps",
      maximizeButtonProps: "maximizeButtonProps",
      visible: "visible",
      style: "style",
      position: "position",
      role: "role",
      headerTemplate: [0, "content", "headerTemplate"],
      contentTemplate: "contentTemplate",
      footerTemplate: "footerTemplate",
      closeIconTemplate: "closeIconTemplate",
      maximizeIconTemplate: "maximizeIconTemplate",
      minimizeIconTemplate: "minimizeIconTemplate",
      headlessTemplate: "headlessTemplate"
    },
    outputs: {
      onShow: "onShow",
      onHide: "onHide",
      visibleChange: "visibleChange",
      onResizeInit: "onResizeInit",
      onResizeEnd: "onResizeEnd",
      onDragEnd: "onDragEnd",
      onMaximize: "onMaximize"
    },
    features: [\u0275\u0275ProvidersFeature([DialogStyle]), \u0275\u0275InputTransformsFeature, \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c9,
    decls: 1,
    vars: 1,
    consts: [["container", ""], ["notHeadless", ""], ["titlebar", ""], ["content", ""], ["icon", ""], ["footer", ""], [3, "ngClass", "class", "ngStyle", "style", 4, "ngIf"], [3, "ngClass", "ngStyle"], ["pFocusTrap", "", 3, "class", "ngClass", "ngStyle", "style", "pFocusTrapDisabled", 4, "ngIf"], ["pFocusTrap", "", 3, "ngClass", "ngStyle", "pFocusTrapDisabled"], [4, "ngIf", "ngIfElse"], [4, "ngTemplateOutlet"], ["style", "z-index: 90;", 3, "ngClass", "mousedown", 4, "ngIf"], [3, "mousedown", "ngClass"], [3, "id", "ngClass", 4, "ngIf"], [3, "ngClass"], [3, "styleClass", "tabindex", "ariaLabel", "buttonProps", "onClick", "keydown.enter", 4, "ngIf"], [3, "styleClass", "ariaLabel", "tabindex", "buttonProps", "onClick", "keydown.enter", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], [2, "z-index", "90", 3, "mousedown", "ngClass"], [3, "id", "ngClass"], [3, "onClick", "keydown.enter", "styleClass", "tabindex", "ariaLabel", "buttonProps"], [4, "ngIf"], [3, "onClick", "keydown.enter", "styleClass", "ariaLabel", "tabindex", "buttonProps"]],
    template: function Dialog_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c8);
        \u0275\u0275template(0, Dialog_div_0_Template, 2, 11, "div", 6);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.maskVisible);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, NgStyle, Button, FocusTrap, TimesIcon, WindowMaximizeIcon, WindowMinimizeIcon, SharedModule],
    encapsulation: 2,
    data: {
      animation: [trigger("animation", [transition("void => visible", [useAnimation(showAnimation)]), transition("visible => void", [useAnimation(hideAnimation)])])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dialog, [{
    type: Component,
    args: [{
      selector: "p-dialog",
      standalone: true,
      imports: [CommonModule, Button, FocusTrap, TimesIcon, WindowMaximizeIcon, WindowMinimizeIcon, SharedModule],
      template: `
        <div
            *ngIf="maskVisible"
            [ngClass]="maskClass"
            [class]="maskStyleClass"
            [ngStyle]="{
                position: 'fixed',
                height: '100%',
                width: '100%',
                left: 0,
                top: 0,
                display: 'flex',
                'justify-content': position === 'left' || position === 'topleft' || position === 'bottomleft' ? 'flex-start' : position === 'right' || position === 'topright' || position === 'bottomright' ? 'flex-end' : 'center',
                'align-items': position === 'top' || position === 'topleft' || position === 'topright' ? 'flex-start' : position === 'bottom' || position === 'bottomleft' || position === 'bottomright' ? 'flex-end' : 'center',
                'pointer-events': modal ? 'auto' : 'none'
            }"
            [style]="maskStyle"
        >
            <div
                *ngIf="visible"
                #container
                [class]="styleClass"
                [ngClass]="{ 'p-dialog p-component': true, 'p-dialog-maximized': maximizable && maximized }"
                [ngStyle]="{ display: 'flex', 'flex-direction': 'column', 'pointer-events': 'auto' }"
                [style]="style"
                pFocusTrap
                [pFocusTrapDisabled]="focusTrap === false"
                [@animation]="{
                    value: 'visible',
                    params: { transform: transformOptions, transition: transitionOptions }
                }"
                (@animation.start)="onAnimationStart($event)"
                (@animation.done)="onAnimationEnd($event)"
                [attr.role]="role"
                [attr.aria-labelledby]="ariaLabelledBy"
                [attr.aria-modal]="true"
            >
                <ng-container *ngIf="_headlessTemplate || headlessTemplate || headlessT; else notHeadless">
                    <ng-container *ngTemplateOutlet="_headlessTemplate || headlessTemplate || headlessT"></ng-container>
                </ng-container>

                <ng-template #notHeadless>
                    <div *ngIf="resizable" [ngClass]="cx('resizeHandle')" style="z-index: 90;" (mousedown)="initResize($event)"></div>
                    <div #titlebar [ngClass]="cx('header')" (mousedown)="initDrag($event)">
                        <span [id]="ariaLabelledBy" [ngClass]="cx('title')" *ngIf="!_headerTemplate && !headerTemplate && !headerT">{{ header }}</span>
                        <ng-container *ngTemplateOutlet="_headerTemplate || headerTemplate || headerT"></ng-container>
                        <div [ngClass]="cx('headerActions')">
                            <p-button *ngIf="maximizable" [styleClass]="cx('pcMaximizeButton')" (onClick)="maximize()" (keydown.enter)="maximize()" [tabindex]="maximizable ? '0' : '-1'" [ariaLabel]="maximizeLabel" [buttonProps]="maximizeButtonProps">
                                <span *ngIf="maximizeIcon && !_maximizeiconTemplate && !_minimizeiconTemplate" [ngClass]="maximized ? minimizeIcon : maximizeIcon"></span>
                                <ng-container *ngIf="!maximizeIcon && !maximizeButtonProps?.icon">
                                    <WindowMaximizeIcon *ngIf="!maximized && !_maximizeiconTemplate && !maximizeIconTemplate && !maximizeIconT" />
                                    <WindowMinimizeIcon *ngIf="maximized && !_minimizeiconTemplate && !minimizeIconTemplate && !minimizeIconT" />
                                </ng-container>
                                <ng-container *ngIf="!maximized">
                                    <ng-template *ngTemplateOutlet="_maximizeiconTemplate || maximizeIconTemplate || maximizeIconT"></ng-template>
                                </ng-container>
                                <ng-container *ngIf="maximized">
                                    <ng-template *ngTemplateOutlet="_minimizeiconTemplate || minimizeIconTemplate || minimizeIconT"></ng-template>
                                </ng-container>
                            </p-button>
                            <p-button *ngIf="closable" [styleClass]="cx('pcCloseButton')" [ariaLabel]="closeAriaLabel" (onClick)="close($event)" (keydown.enter)="close($event)" [tabindex]="closeTabindex" [buttonProps]="closeButtonProps">
                                <ng-template #icon>
                                    <ng-container *ngIf="!_closeiconTemplate && !closeIconTemplate && !closeIconT && !closeButtonProps?.icon">
                                        <span *ngIf="closeIcon" [ngClass]="closeIcon"></span>
                                        <TimesIcon *ngIf="!closeIcon" />
                                    </ng-container>
                                    <span *ngIf="_closeiconTemplate || closeIconTemplate || closeIconT">
                                        <ng-template *ngTemplateOutlet="_closeiconTemplate || closeIconTemplate || closeIconT"></ng-template>
                                    </span>
                                </ng-template>
                            </p-button>
                        </div>
                    </div>
                    <div #content [ngClass]="cx('content')" [class]="contentStyleClass" [ngStyle]="contentStyle" [attr.data-pc-section]="'content'">
                        <ng-content></ng-content>
                        <ng-container *ngTemplateOutlet="_contentTemplate || contentTemplate || contentT"></ng-container>
                    </div>
                    <div #footer [ngClass]="cx('footer')" *ngIf="_footerTemplate || footerTemplate || footerT">
                        <ng-content select="p-footer"></ng-content>
                        <ng-container *ngTemplateOutlet="_footerTemplate || footerTemplate || footerT"></ng-container>
                    </div>
                </ng-template>
            </div>
        </div>
    `,
      animations: [trigger("animation", [transition("void => visible", [useAnimation(showAnimation)]), transition("visible => void", [useAnimation(hideAnimation)])])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [DialogStyle]
    }]
  }], null, {
    header: [{
      type: Input
    }],
    draggable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    resizable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    positionLeft: [{
      type: Input
    }],
    positionTop: [{
      type: Input
    }],
    contentStyle: [{
      type: Input
    }],
    contentStyleClass: [{
      type: Input
    }],
    modal: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    closeOnEscape: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    dismissableMask: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    rtl: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    closable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    responsive: [{
      type: Input
    }],
    appendTo: [{
      type: Input
    }],
    breakpoints: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    maskStyleClass: [{
      type: Input
    }],
    maskStyle: [{
      type: Input
    }],
    showHeader: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    breakpoint: [{
      type: Input
    }],
    blockScroll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
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
    minX: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    minY: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    focusOnShow: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    maximizable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    keepInViewport: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    focusTrap: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    transitionOptions: [{
      type: Input
    }],
    closeIcon: [{
      type: Input
    }],
    closeAriaLabel: [{
      type: Input
    }],
    closeTabindex: [{
      type: Input
    }],
    minimizeIcon: [{
      type: Input
    }],
    maximizeIcon: [{
      type: Input
    }],
    closeButtonProps: [{
      type: Input
    }],
    maximizeButtonProps: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    role: [{
      type: Input
    }],
    onShow: [{
      type: Output
    }],
    onHide: [{
      type: Output
    }],
    visibleChange: [{
      type: Output
    }],
    onResizeInit: [{
      type: Output
    }],
    onResizeEnd: [{
      type: Output
    }],
    onDragEnd: [{
      type: Output
    }],
    onMaximize: [{
      type: Output
    }],
    headerViewChild: [{
      type: ViewChild,
      args: ["titlebar"]
    }],
    contentViewChild: [{
      type: ViewChild,
      args: ["content"]
    }],
    footerViewChild: [{
      type: ViewChild,
      args: ["footer"]
    }],
    headerTemplate: [{
      type: Input,
      args: ["content"]
    }],
    contentTemplate: [{
      type: Input
    }],
    footerTemplate: [{
      type: Input
    }],
    closeIconTemplate: [{
      type: Input
    }],
    maximizeIconTemplate: [{
      type: Input
    }],
    minimizeIconTemplate: [{
      type: Input
    }],
    headlessTemplate: [{
      type: Input
    }],
    _headerTemplate: [{
      type: ContentChild,
      args: ["header", {
        descendants: false
      }]
    }],
    _contentTemplate: [{
      type: ContentChild,
      args: ["content", {
        descendants: false
      }]
    }],
    _footerTemplate: [{
      type: ContentChild,
      args: ["footer", {
        descendants: false
      }]
    }],
    _closeiconTemplate: [{
      type: ContentChild,
      args: ["closeicon", {
        descendants: false
      }]
    }],
    _maximizeiconTemplate: [{
      type: ContentChild,
      args: ["maximizeicon", {
        descendants: false
      }]
    }],
    _minimizeiconTemplate: [{
      type: ContentChild,
      args: ["minimizeicon", {
        descendants: false
      }]
    }],
    _headlessTemplate: [{
      type: ContentChild,
      args: ["headless", {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Dialog, {
    className: "Dialog",
    filePath: "dialog.ts",
    lineNumber: 138
  });
})();
var DialogModule = class _DialogModule {
  static \u0275fac = function DialogModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DialogModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _DialogModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Dialog, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogModule, [{
    type: NgModule,
    args: [{
      imports: [Dialog, SharedModule],
      exports: [Dialog, SharedModule]
    }]
  }], null, null);
})();

// src/app/helpers/jwtTokenHelpers.ts
var JWTTokenHelpers = class {
  static IsTokenSet() {
    var token = localStorage.getItem("jwtToken");
    if (token)
      return true;
    return false;
  }
  static GetUserID() {
    var token = localStorage.getItem("jwtToken");
    if (token) {
      const helper = new JwtHelperService();
      var result = helper.decodeToken(token);
      if (result)
        return result.nameid;
    }
    return "";
  }
  static IsExpired() {
    var token = localStorage.getItem("jwtToken");
    if (token) {
      const helper = new JwtHelperService();
      var result = helper.decodeToken(token);
      if (result) {
        var date = /* @__PURE__ */ new Date();
        var now_utc = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
        if (now_utc >= result.exp * 1e3)
          return true;
      }
    }
    return false;
  }
};

// node_modules/primeng/fesm2022/primeng-floatlabel.mjs
var theme2 = ({
  dt
}) => `
.p-floatlabel {
    display: block;
    position: relative;
}

.p-floatlabel label {
    position: absolute;
    pointer-events: none;
    top: 50%;
    transform: translateY(-50%);
    transition-property: all;
    transition-timing-function: ease;
    line-height: 1;
    font-weight: ${dt("floatlabel.font.weight")};
    inset-inline-start: ${dt("floatlabel.position.x")};
    color: ${dt("floatlabel.color")};
    transition-duration: ${dt("floatlabel.transition.duration")};
}

.p-floatlabel:has(.p-textarea) label {
    top: ${dt("floatlabel.position.y")};
    transform: translateY(0);
}

.p-floatlabel:has(.p-inputicon:first-child) label {
    inset-inline-start: calc((${dt("form.field.padding.x")} * 2) + ${dt("icon.size")});
}

.p-floatlabel:has(.ng-invalid.ng-dirty) label {
    color: ${dt("floatlabel.invalid.color")};
}

.p-floatlabel:has(input:focus) label,
.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(input:-webkit-autofill) label,
.p-floatlabel:has(textarea:focus) label,
.p-floatlabel:has(textarea.p-filled) label,
.p-floatlabel:has(.p-inputwrapper-focus) label,
.p-floatlabel:has(.p-inputwrapper-filled) label {
    top: ${dt("floatlabel.over.active.top")};
    transform: translateY(0);
    font-size: ${dt("floatlabel.active.font.size")};
    font-weight: ${dt("floatlabel.label.active.font.weight")};
}

.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(textarea.p-filled) label,
.p-floatlabel:has(.p-inputwrapper-filled) label {
    color: ${dt("floatlabel.active.color")};
}

.p-floatlabel:has(input:focus) label,
.p-floatlabel:has(input:-webkit-autofill) label,
.p-floatlabel:has(textarea:focus) label,
.p-floatlabel:has(.p-inputwrapper-focus) label {
    color: ${dt("floatlabel.focus.color")};
}

.p-floatlabel-in .p-inputtext,
.p-floatlabel-in .p-textarea,
.p-floatlabel-in .p-select-label,
.p-floatlabel-in .p-multiselect-label-container,
.p-floatlabel-in .p-autocomplete-input-multiple,
.p-floatlabel-in .p-cascadeselect-label,
.p-floatlabel-in .p-treeselect-label {
    padding-top: ${dt("floatlabel.in.input.padding.top")};
}

.p-floatlabel-in:has(input:focus) label,
.p-floatlabel-in:has(input.p-filled) label,
.p-floatlabel-in:has(input:-webkit-autofill) label,
.p-floatlabel-in:has(textarea:focus) label,
.p-floatlabel-in:has(textarea.p-filled) label,
.p-floatlabel-in:has(.p-inputwrapper-focus) label,
.p-floatlabel-in:has(.p-inputwrapper-filled) label {
    top: ${dt("floatlabel.in.active.top")};
}

.p-floatlabel-on:has(input:focus) label,
.p-floatlabel-on:has(input.p-filled) label,
.p-floatlabel-on:has(input:-webkit-autofill) label,
.p-floatlabel-on:has(textarea:focus) label,
.p-floatlabel-on:has(textarea.p-filled) label,
.p-floatlabel-on:has(.p-inputwrapper-focus) label,
.p-floatlabel-on:has(.p-inputwrapper-filled) label {
    top: 0;
    transform: translateY(-50%);
    border-radius: ${dt("floatlabel.on.border.radius")};
    background: ${dt("floatlabel.on.active.background")};
    padding: ${dt("floatlabel.on.active.padding")};
}
`;
var classes2 = {
  root: ({
    instance,
    props
  }) => ["p-floatlabel", {
    "p-floatlabel-over": props.variant === "over",
    "p-floatlabel-on": props.variant === "on",
    "p-floatlabel-in": props.variant === "in"
  }]
};
var FloatLabelStyle = class _FloatLabelStyle extends BaseStyle {
  name = "floatlabel";
  theme = theme2;
  classes = classes2;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275FloatLabelStyle_BaseFactory;
    return function FloatLabelStyle_Factory(__ngFactoryType__) {
      return (\u0275FloatLabelStyle_BaseFactory || (\u0275FloatLabelStyle_BaseFactory = \u0275\u0275getInheritedFactory(_FloatLabelStyle)))(__ngFactoryType__ || _FloatLabelStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _FloatLabelStyle,
    factory: _FloatLabelStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FloatLabelStyle, [{
    type: Injectable
  }], null, null);
})();
var FloatLabelClasses;
(function(FloatLabelClasses2) {
  FloatLabelClasses2["root"] = "p-floatlabel";
})(FloatLabelClasses || (FloatLabelClasses = {}));
var _c02 = ["*"];
var FloatLabel = class _FloatLabel extends BaseComponent {
  _componentStyle = inject(FloatLabelStyle);
  /**
   * Defines the positioning of the label relative to the input.
   * @group Props
   */
  variant = "over";
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275FloatLabel_BaseFactory;
    return function FloatLabel_Factory(__ngFactoryType__) {
      return (\u0275FloatLabel_BaseFactory || (\u0275FloatLabel_BaseFactory = \u0275\u0275getInheritedFactory(_FloatLabel)))(__ngFactoryType__ || _FloatLabel);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _FloatLabel,
    selectors: [["p-floatlabel"], ["p-floatLabel"], ["p-float-label"]],
    hostVars: 8,
    hostBindings: function FloatLabel_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("p-floatlabel", true)("p-floatlabel-over", ctx.variant === "over")("p-floatlabel-on", ctx.variant === "on")("p-floatlabel-in", ctx.variant === "in");
      }
    },
    inputs: {
      variant: "variant"
    },
    features: [\u0275\u0275ProvidersFeature([FloatLabelStyle]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function FloatLabel_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    dependencies: [CommonModule, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FloatLabel, [{
    type: Component,
    args: [{
      selector: "p-floatlabel, p-floatLabel, p-float-label",
      standalone: true,
      imports: [CommonModule, SharedModule],
      template: ` <ng-content></ng-content> `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [FloatLabelStyle],
      host: {
        "[class.p-floatlabel]": "true",
        "[class.p-floatlabel-over]": "variant === 'over'",
        "[class.p-floatlabel-on]": "variant === 'on'",
        "[class.p-floatlabel-in]": "variant === 'in'"
      }
    }]
  }], null, {
    variant: [{
      type: Input
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FloatLabel, {
    className: "FloatLabel",
    filePath: "floatlabel.ts",
    lineNumber: 26
  });
})();
var FloatLabelModule = class _FloatLabelModule {
  static \u0275fac = function FloatLabelModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FloatLabelModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _FloatLabelModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [FloatLabel, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FloatLabelModule, [{
    type: NgModule,
    args: [{
      imports: [FloatLabel, SharedModule],
      exports: [FloatLabel, SharedModule]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-chip.mjs
var theme3 = ({
  dt
}) => `
.p-chip {
    display: inline-flex;
    align-items: center;
    background: ${dt("chip.background")};
    color: ${dt("chip.color")};
    border-radius: ${dt("chip.border.radius")};
    padding: ${dt("chip.padding.y")} ${dt("chip.padding.x")};
    gap: ${dt("chip.gap")};
}

.p-chip-icon {
    color: ${dt("chip.icon.color")};
    font-size: ${dt("chip.icon.font.size")};
    width: ${dt("chip.icon.size")};
    height: ${dt("chip.icon.size")};
}

.p-chip-image {
    border-radius: 50%;
    width: ${dt("chip.image.width")};
    height: ${dt("chip.image.height")};
    margin-left: calc(-1 * ${dt("chip.padding.y")});
}

.p-chip:has(.p-chip-remove-icon) {
    padding-inline-end: ${dt("chip.padding.y")};
}

.p-chip:has(.p-chip-image) {
    padding-top: calc(${dt("chip.padding.y")} / 2);
    padding-bottom: calc(${dt("chip.padding.y")} / 2);
}

.p-chip-remove-icon {
    cursor: pointer;
    font-size: ${dt("chip.remove.icon.font.size")};
    width: ${dt("chip.remove.icon.size")};
    height: ${dt("chip.remove.icon.size")};
    color: ${dt("chip.remove.icon.color")};
    border-radius: 50%;
    transition: outline-color ${dt("chip.transition.duration")}, box-shadow ${dt("chip.transition.duration")};
    outline-color: transparent;
}

.p-chip-remove-icon:focus-visible {
    box-shadow: ${dt("chip.remove.icon.focus.ring.shadow")};
    outline: ${dt("chip.remove.icon.focus.ring.width")} ${dt("chip.remove.icon.focus.ring.style")} ${dt("chip.remove.icon.focus.ring.color")};
    outline-offset: ${dt("chip.remove.icon.focus.ring.offset")};
}
`;
var classes3 = {
  root: "p-chip p-component",
  image: "p-chip-image",
  icon: "p-chip-icon",
  label: "p-chip-label",
  removeIcon: "p-chip-remove-icon"
};
var ChipStyle = class _ChipStyle extends BaseStyle {
  name = "chip";
  theme = theme3;
  classes = classes3;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ChipStyle_BaseFactory;
    return function ChipStyle_Factory(__ngFactoryType__) {
      return (\u0275ChipStyle_BaseFactory || (\u0275ChipStyle_BaseFactory = \u0275\u0275getInheritedFactory(_ChipStyle)))(__ngFactoryType__ || _ChipStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ChipStyle,
    factory: _ChipStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChipStyle, [{
    type: Injectable
  }], null, null);
})();
var ChipClasses;
(function(ChipClasses2) {
  ChipClasses2["root"] = "p-chip";
  ChipClasses2["image"] = "p-chip-image";
  ChipClasses2["icon"] = "p-chip-icon";
  ChipClasses2["label"] = "p-chip-label";
  ChipClasses2["removeIcon"] = "p-chip-remove-icon";
})(ChipClasses || (ChipClasses = {}));
var _c03 = ["removeicon"];
var _c15 = ["*"];
function Chip_img_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 4);
    \u0275\u0275listener("error", function Chip_img_1_Template_img_error_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.imageError($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r1.image, \u0275\u0275sanitizeUrl)("alt", ctx_r1.alt);
  }
}
function Chip_ng_template_2_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 6);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.icon);
    \u0275\u0275property("ngClass", "p-chip-icon");
    \u0275\u0275attribute("data-pc-section", "icon");
  }
}
function Chip_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Chip_ng_template_2_span_0_Template, 1, 4, "span", 5);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r1.icon);
  }
}
function Chip_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-pc-section", "label");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.label);
  }
}
function Chip_ng_container_5_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275listener("click", function Chip_ng_container_5_ng_container_1_span_1_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.close($event));
    })("keydown", function Chip_ng_container_5_ng_container_1_span_1_Template_span_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onKeydown($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.removeIcon);
    \u0275\u0275property("ngClass", "p-chip-remove-icon");
    \u0275\u0275attribute("data-pc-section", "removeicon")("aria-label", ctx_r1.removeAriaLabel);
  }
}
function Chip_ng_container_5_ng_container_1_TimesCircleIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "TimesCircleIcon", 12);
    \u0275\u0275listener("click", function Chip_ng_container_5_ng_container_1_TimesCircleIcon_2_Template_TimesCircleIcon_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.close($event));
    })("keydown", function Chip_ng_container_5_ng_container_1_TimesCircleIcon_2_Template_TimesCircleIcon_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onKeydown($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap("p-chip-remove-icon");
    \u0275\u0275attribute("data-pc-section", "removeicon")("aria-label", ctx_r1.removeAriaLabel);
  }
}
function Chip_ng_container_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Chip_ng_container_5_ng_container_1_span_1_Template, 1, 5, "span", 9)(2, Chip_ng_container_5_ng_container_1_TimesCircleIcon_2_Template, 1, 4, "TimesCircleIcon", 10);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.removeIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.removeIcon);
  }
}
function Chip_ng_container_5_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Chip_ng_container_5_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Chip_ng_container_5_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Chip_ng_container_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275listener("click", function Chip_ng_container_5_span_2_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.close($event));
    })("keydown", function Chip_ng_container_5_span_2_Template_span_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onKeydown($event));
    });
    \u0275\u0275template(1, Chip_ng_container_5_span_2_1_Template, 1, 0, null, 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("data-pc-section", "removeicon")("aria-label", ctx_r1.removeAriaLabel);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.removeIconTemplate || ctx_r1._removeIconTemplate);
  }
}
function Chip_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Chip_ng_container_5_ng_container_1_Template, 3, 2, "ng-container", 3)(2, Chip_ng_container_5_span_2_Template, 2, 3, "span", 8);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.removeIconTemplate && !ctx_r1._removeIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.removeIconTemplate || ctx_r1._removeIconTemplate);
  }
}
var Chip = class _Chip extends BaseComponent {
  /**
   * Defines the text to display.
   * @group Props
   */
  label;
  /**
   * Defines the icon to display.
   * @group Props
   */
  icon;
  /**
   * Defines the image to display.
   * @group Props
   */
  image;
  /**
   * Alt attribute of the image.
   * @group Props
   */
  alt;
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
   * Whether to display a remove icon.
   * @group Props
   */
  removable = false;
  /**
   * Icon of the remove element.
   * @group Props
   */
  removeIcon;
  /**
   * Callback to invoke when a chip is removed.
   * @param {MouseEvent} event - Mouse event.
   * @group Emits
   */
  onRemove = new EventEmitter();
  /**
   * This event is triggered if an error occurs while loading an image file.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onImageError = new EventEmitter();
  visible = true;
  get removeAriaLabel() {
    return this.config.getTranslation(TranslationKeys.ARIA)["removeLabel"];
  }
  /**
   * Used to pass all properties of the chipProps to the Chip component.
   * @group Props
   */
  get chipProps() {
    return this._chipProps;
  }
  set chipProps(val) {
    this._chipProps = val;
    if (val && typeof val === "object") {
      Object.entries(val).forEach(([k, v]) => this[`_${k}`] !== v && (this[`_${k}`] = v));
    }
  }
  _chipProps;
  _componentStyle = inject(ChipStyle);
  removeIconTemplate;
  templates;
  _removeIconTemplate;
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "removeicon":
          this._removeIconTemplate = item.template;
          break;
        default:
          this._removeIconTemplate = item.template;
          break;
      }
    });
  }
  ngOnChanges(simpleChanges) {
    super.ngOnChanges(simpleChanges);
    if (simpleChanges.chipProps && simpleChanges.chipProps.currentValue) {
      const {
        currentValue
      } = simpleChanges.chipProps;
      if (currentValue.label !== void 0) {
        this.label = currentValue.label;
      }
      if (currentValue.icon !== void 0) {
        this.icon = currentValue.icon;
      }
      if (currentValue.image !== void 0) {
        this.image = currentValue.image;
      }
      if (currentValue.alt !== void 0) {
        this.alt = currentValue.alt;
      }
      if (currentValue.style !== void 0) {
        this.style = currentValue.style;
      }
      if (currentValue.styleClass !== void 0) {
        this.styleClass = currentValue.styleClass;
      }
      if (currentValue.removable !== void 0) {
        this.removable = currentValue.removable;
      }
      if (currentValue.removeIcon !== void 0) {
        this.removeIcon = currentValue.removeIcon;
      }
    }
  }
  containerClass() {
    let classes8 = "p-chip p-component";
    if (this.styleClass) {
      classes8 += ` ${this.styleClass}`;
    }
    return classes8;
  }
  close(event) {
    this.visible = false;
    this.onRemove.emit(event);
  }
  onKeydown(event) {
    if (event.key === "Enter" || event.key === "Backspace") {
      this.close(event);
    }
  }
  imageError(event) {
    this.onImageError.emit(event);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Chip_BaseFactory;
    return function Chip_Factory(__ngFactoryType__) {
      return (\u0275Chip_BaseFactory || (\u0275Chip_BaseFactory = \u0275\u0275getInheritedFactory(_Chip)))(__ngFactoryType__ || _Chip);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Chip,
    selectors: [["p-chip"]],
    contentQueries: function Chip_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c03, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.removeIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostVars: 9,
    hostBindings: function Chip_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("data-pc-name", "chip")("aria-label", ctx.label)("data-pc-section", "root");
        \u0275\u0275styleMap(ctx.style);
        \u0275\u0275classMap(ctx.containerClass());
        \u0275\u0275styleProp("display", !ctx.visible && "none");
      }
    },
    inputs: {
      label: "label",
      icon: "icon",
      image: "image",
      alt: "alt",
      style: "style",
      styleClass: "styleClass",
      removable: [2, "removable", "removable", booleanAttribute],
      removeIcon: "removeIcon",
      chipProps: "chipProps"
    },
    outputs: {
      onRemove: "onRemove",
      onImageError: "onImageError"
    },
    features: [\u0275\u0275ProvidersFeature([ChipStyle]), \u0275\u0275InputTransformsFeature, \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c15,
    decls: 6,
    vars: 4,
    consts: [["iconTemplate", ""], ["class", "p-chip-image", 3, "src", "alt", "error", 4, "ngIf", "ngIfElse"], ["class", "p-chip-label", 4, "ngIf"], [4, "ngIf"], [1, "p-chip-image", 3, "error", "src", "alt"], [3, "class", "ngClass", 4, "ngIf"], [3, "ngClass"], [1, "p-chip-label"], ["tabindex", "0", "class", "p-chip-remove-icon", "role", "button", 3, "click", "keydown", 4, "ngIf"], ["tabindex", "0", "role", "button", 3, "class", "ngClass", "click", "keydown", 4, "ngIf"], ["tabindex", "0", "role", "button", 3, "class", "click", "keydown", 4, "ngIf"], ["tabindex", "0", "role", "button", 3, "click", "keydown", "ngClass"], ["tabindex", "0", "role", "button", 3, "click", "keydown"], ["tabindex", "0", "role", "button", 1, "p-chip-remove-icon", 3, "click", "keydown"], [4, "ngTemplateOutlet"]],
    template: function Chip_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
        \u0275\u0275template(1, Chip_img_1_Template, 1, 2, "img", 1)(2, Chip_ng_template_2_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, Chip_div_4_Template, 2, 2, "div", 2)(5, Chip_ng_container_5_Template, 3, 2, "ng-container", 3);
      }
      if (rf & 2) {
        const iconTemplate_r6 = \u0275\u0275reference(3);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.image)("ngIfElse", iconTemplate_r6);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.label);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.removable);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, TimesCircleIcon, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Chip, [{
    type: Component,
    args: [{
      selector: "p-chip",
      standalone: true,
      imports: [CommonModule, TimesCircleIcon, SharedModule],
      template: `
        <ng-content></ng-content>
        <img class="p-chip-image" [src]="image" *ngIf="image; else iconTemplate" (error)="imageError($event)" [alt]="alt" />
        <ng-template #iconTemplate><span *ngIf="icon" [class]="icon" [ngClass]="'p-chip-icon'" [attr.data-pc-section]="'icon'"></span></ng-template>
        <div class="p-chip-label" *ngIf="label" [attr.data-pc-section]="'label'">{{ label }}</div>
        <ng-container *ngIf="removable">
            <ng-container *ngIf="!removeIconTemplate && !_removeIconTemplate">
                <span
                    tabindex="0"
                    *ngIf="removeIcon"
                    [class]="removeIcon"
                    [ngClass]="'p-chip-remove-icon'"
                    [attr.data-pc-section]="'removeicon'"
                    (click)="close($event)"
                    (keydown)="onKeydown($event)"
                    [attr.aria-label]="removeAriaLabel"
                    role="button"
                ></span>
                <TimesCircleIcon tabindex="0" *ngIf="!removeIcon" [class]="'p-chip-remove-icon'" [attr.data-pc-section]="'removeicon'" (click)="close($event)" (keydown)="onKeydown($event)" [attr.aria-label]="removeAriaLabel" role="button" />
            </ng-container>
            <span *ngIf="removeIconTemplate || _removeIconTemplate" tabindex="0" [attr.data-pc-section]="'removeicon'" class="p-chip-remove-icon" (click)="close($event)" (keydown)="onKeydown($event)" [attr.aria-label]="removeAriaLabel" role="button">
                <ng-template *ngTemplateOutlet="removeIconTemplate || _removeIconTemplate"></ng-template>
            </span>
        </ng-container>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [ChipStyle],
      host: {
        "[class]": "containerClass()",
        "[style]": "style",
        "[style.display]": '!visible && "none"',
        "[attr.data-pc-name]": "'chip'",
        "[attr.aria-label]": "label",
        "[attr.data-pc-section]": "'root'"
      }
    }]
  }], null, {
    label: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    image: [{
      type: Input
    }],
    alt: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    removable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    removeIcon: [{
      type: Input
    }],
    onRemove: [{
      type: Output
    }],
    onImageError: [{
      type: Output
    }],
    chipProps: [{
      type: Input
    }],
    removeIconTemplate: [{
      type: ContentChild,
      args: ["removeicon", {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Chip, {
    className: "Chip",
    filePath: "chip.ts",
    lineNumber: 54
  });
})();
var ChipModule = class _ChipModule {
  static \u0275fac = function ChipModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChipModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ChipModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Chip, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChipModule, [{
    type: NgModule,
    args: [{
      imports: [Chip, SharedModule],
      exports: [Chip, SharedModule]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-iconfield.mjs
var theme4 = ({
  dt
}) => `
.p-iconfield {
    position: relative;
    display: block;
}

.p-inputicon {
    position: absolute;
    top: 50%;
    margin-top: calc(-1 * (${dt("icon.size")} / 2));
    color: ${dt("iconfield.icon.color")};
    line-height: 1;
}

.p-iconfield .p-inputicon:first-child {
    inset-inline-start: ${dt("form.field.padding.x")};
}

.p-iconfield .p-inputicon:last-child {
    inset-inline-end: ${dt("form.field.padding.x")};
}

.p-iconfield .p-inputtext:not(:first-child) {
    padding-inline-start: calc((${dt("form.field.padding.x")} * 2) + ${dt("icon.size")});
}

.p-iconfield .p-inputtext:not(:last-child) {
    padding-inline-end: calc((${dt("form.field.padding.x")} * 2) + ${dt("icon.size")});
}

.p-iconfield:has(.p-inputfield-sm) .p-inputicon {
    font-size: ${dt("form.field.sm.font.size")};
    width: ${dt("form.field.sm.font.size")};
    height: ${dt("form.field.sm.font.size")};
    margin-top: calc(-1 * (${dt("form.field.sm.font.size")} / 2));
}

.p-iconfield:has(.p-inputfield-lg) .p-inputicon {
    font-size: ${dt("form.field.lg.font.size")};
    width: ${dt("form.field.lg.font.size")};
    height: ${dt("form.field.lg.font.size")};
    margin-top: calc(-1 * (${dt("form.field.lg.font.size")} / 2));
}
`;
var classes4 = {
  root: "p-iconfield"
};
var IconFieldStyle = class _IconFieldStyle extends BaseStyle {
  name = "iconfield";
  theme = theme4;
  classes = classes4;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275IconFieldStyle_BaseFactory;
    return function IconFieldStyle_Factory(__ngFactoryType__) {
      return (\u0275IconFieldStyle_BaseFactory || (\u0275IconFieldStyle_BaseFactory = \u0275\u0275getInheritedFactory(_IconFieldStyle)))(__ngFactoryType__ || _IconFieldStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _IconFieldStyle,
    factory: _IconFieldStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconFieldStyle, [{
    type: Injectable
  }], null, null);
})();
var IconFieldClasses;
(function(IconFieldClasses2) {
  IconFieldClasses2["root"] = "p-iconfield";
})(IconFieldClasses || (IconFieldClasses = {}));
var _c04 = ["*"];
var IconField = class _IconField extends BaseComponent {
  /**
   * Position of the icon.
   * @group Props
   */
  iconPosition = "left";
  get _styleClass() {
    return this.styleClass;
  }
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  _componentStyle = inject(IconFieldStyle);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275IconField_BaseFactory;
    return function IconField_Factory(__ngFactoryType__) {
      return (\u0275IconField_BaseFactory || (\u0275IconField_BaseFactory = \u0275\u0275getInheritedFactory(_IconField)))(__ngFactoryType__ || _IconField);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _IconField,
    selectors: [["p-iconfield"], ["p-iconField"], ["p-icon-field"]],
    hostAttrs: [1, "p-iconfield"],
    hostVars: 6,
    hostBindings: function IconField_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx._styleClass);
        \u0275\u0275classProp("p-iconfield-left", ctx.iconPosition === "left")("p-iconfield-right", ctx.iconPosition === "right");
      }
    },
    inputs: {
      iconPosition: "iconPosition",
      styleClass: "styleClass"
    },
    features: [\u0275\u0275ProvidersFeature([IconFieldStyle]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c04,
    decls: 1,
    vars: 0,
    template: function IconField_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    dependencies: [CommonModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconField, [{
    type: Component,
    args: [{
      selector: "p-iconfield, p-iconField, p-icon-field",
      standalone: true,
      imports: [CommonModule],
      template: ` <ng-content></ng-content>`,
      providers: [IconFieldStyle],
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "p-iconfield",
        "[class.p-iconfield-left]": 'iconPosition === "left"',
        "[class.p-iconfield-right]": 'iconPosition === "right"'
      }
    }]
  }], null, {
    iconPosition: [{
      type: Input
    }],
    _styleClass: [{
      type: HostBinding,
      args: ["class"]
    }],
    styleClass: [{
      type: Input
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IconField, {
    className: "IconField",
    filePath: "iconfield.ts",
    lineNumber: 24
  });
})();
var IconFieldModule = class _IconFieldModule {
  static \u0275fac = function IconFieldModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IconFieldModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _IconFieldModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [IconField]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconFieldModule, [{
    type: NgModule,
    args: [{
      imports: [IconField],
      exports: [IconField]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-inputicon.mjs
var classes5 = {
  root: "p-inputicon"
};
var InputIconStyle = class _InputIconStyle extends BaseStyle {
  name = "inputicon";
  classes = classes5;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275InputIconStyle_BaseFactory;
    return function InputIconStyle_Factory(__ngFactoryType__) {
      return (\u0275InputIconStyle_BaseFactory || (\u0275InputIconStyle_BaseFactory = \u0275\u0275getInheritedFactory(_InputIconStyle)))(__ngFactoryType__ || _InputIconStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _InputIconStyle,
    factory: _InputIconStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputIconStyle, [{
    type: Injectable
  }], null, null);
})();
var _c05 = ["*"];
var InputIcon = class _InputIcon extends BaseComponent {
  /**
   * Style class of the element.
   * @group Props
   */
  styleClass;
  get hostClasses() {
    return this.styleClass;
  }
  _componentStyle = inject(InputIconStyle);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275InputIcon_BaseFactory;
    return function InputIcon_Factory(__ngFactoryType__) {
      return (\u0275InputIcon_BaseFactory || (\u0275InputIcon_BaseFactory = \u0275\u0275getInheritedFactory(_InputIcon)))(__ngFactoryType__ || _InputIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _InputIcon,
    selectors: [["p-inputicon"], ["p-inputIcon"]],
    hostVars: 4,
    hostBindings: function InputIcon_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.hostClasses);
        \u0275\u0275classProp("p-inputicon", true);
      }
    },
    inputs: {
      styleClass: "styleClass"
    },
    features: [\u0275\u0275ProvidersFeature([InputIconStyle]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c05,
    decls: 1,
    vars: 0,
    template: function InputIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    dependencies: [CommonModule, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputIcon, [{
    type: Component,
    args: [{
      selector: "p-inputicon, p-inputIcon",
      standalone: true,
      imports: [CommonModule, SharedModule],
      template: `<ng-content></ng-content>`,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [InputIconStyle],
      host: {
        "[class]": "styleClass",
        "[class.p-inputicon]": "true"
      }
    }]
  }], null, {
    styleClass: [{
      type: Input
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InputIcon, {
    className: "InputIcon",
    filePath: "inputicon.ts",
    lineNumber: 24
  });
})();
var InputIconModule = class _InputIconModule {
  static \u0275fac = function InputIconModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputIconModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _InputIconModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [InputIcon, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputIconModule, [{
    type: NgModule,
    args: [{
      imports: [InputIcon, SharedModule],
      exports: [InputIcon, SharedModule]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-overlay.mjs
var theme5 = ({
  dt
}) => `
.p-overlay {
    position: absolute;
    top: 0;
    inset-inline-start: 0;
}

.p-overlay-modal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-content {
    transform-origin: inherit;
}

.p-overlay-modal > .p-overlay-content {
    z-index: 1;
    width: 90%;
}

/* Position */
/* top */
.p-overlay-top {
    align-items: flex-start;
}
.p-overlay-top-start {
    align-items: flex-start;
    justify-content: flex-start;
}
.p-overlay-top-end {
    align-items: flex-start;
    justify-content: flex-end;
}

/* bottom */
.p-overlay-bottom {
    align-items: flex-end;
}
.p-overlay-bottom-start {
    align-items: flex-end;
    justify-content: flex-start;
}
.p-overlay-bottom-end {
    align-items: flex-end;
    justify-content: flex-end;
}

/* left */
.p-overlay-left {
    justify-content: flex-start;
}
.p-overlay-left-start {
    justify-content: flex-start;
    align-items: flex-start;
}
.p-overlay-left-end {
    justify-content: flex-start;
    align-items: flex-end;
}

/* right */
.p-overlay-right {
    justify-content: flex-end;
}
.p-overlay-right-start {
    justify-content: flex-end;
    align-items: flex-start;
}
.p-overlay-right-end {
    justify-content: flex-end;
    align-items: flex-end;
}
`;
var OverlayStyle = class _OverlayStyle extends BaseStyle {
  name = "overlay";
  theme = theme5;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275OverlayStyle_BaseFactory;
    return function OverlayStyle_Factory(__ngFactoryType__) {
      return (\u0275OverlayStyle_BaseFactory || (\u0275OverlayStyle_BaseFactory = \u0275\u0275getInheritedFactory(_OverlayStyle)))(__ngFactoryType__ || _OverlayStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _OverlayStyle,
    factory: _OverlayStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayStyle, [{
    type: Injectable
  }], null, null);
})();
var _c06 = ["content"];
var _c16 = ["overlay"];
var _c22 = ["*"];
var _c32 = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13) => ({
  "p-overlay p-component": true,
  "p-overlay-modal p-overlay-mask p-overlay-mask-enter": a0,
  "p-overlay-center": a1,
  "p-overlay-top": a2,
  "p-overlay-top-start": a3,
  "p-overlay-top-end": a4,
  "p-overlay-bottom": a5,
  "p-overlay-bottom-start": a6,
  "p-overlay-bottom-end": a7,
  "p-overlay-left": a8,
  "p-overlay-left-start": a9,
  "p-overlay-left-end": a10,
  "p-overlay-right": a11,
  "p-overlay-right-start": a12,
  "p-overlay-right-end": a13
});
var _c42 = (a0, a1, a2) => ({
  showTransitionParams: a0,
  hideTransitionParams: a1,
  transform: a2
});
var _c52 = (a0) => ({
  value: "visible",
  params: a0
});
var _c62 = (a0) => ({
  mode: a0
});
var _c72 = (a0) => ({
  $implicit: a0
});
function Overlay_div_0_div_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Overlay_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3, 1);
    \u0275\u0275listener("click", function Overlay_div_0_div_2_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onOverlayContentClick($event));
    })("@overlayContentAnimation.start", function Overlay_div_0_div_2_Template_div_animation_overlayContentAnimation_start_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onOverlayContentAnimationStart($event));
    })("@overlayContentAnimation.done", function Overlay_div_0_div_2_Template_div_animation_overlayContentAnimation_done_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onOverlayContentAnimationDone($event));
    });
    \u0275\u0275projection(2);
    \u0275\u0275template(3, Overlay_div_0_div_2_ng_container_3_Template, 1, 0, "ng-container", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.contentStyleClass);
    \u0275\u0275property("ngStyle", ctx_r1.contentStyle)("ngClass", "p-overlay-content")("@overlayContentAnimation", \u0275\u0275pureFunction1(11, _c52, \u0275\u0275pureFunction3(7, _c42, ctx_r1.showTransitionOptions, ctx_r1.hideTransitionOptions, ctx_r1.transformOptions[ctx_r1.modal ? ctx_r1.overlayResponsiveDirection : "default"])));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.contentTemplate || ctx_r1._contentTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(15, _c72, \u0275\u0275pureFunction1(13, _c62, ctx_r1.overlayMode)));
  }
}
function Overlay_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3, 0);
    \u0275\u0275listener("click", function Overlay_div_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onOverlayClick());
    });
    \u0275\u0275template(2, Overlay_div_0_div_2_Template, 4, 17, "div", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.styleClass);
    \u0275\u0275property("ngStyle", ctx_r1.style)("ngClass", \u0275\u0275pureFunctionV(5, _c32, [ctx_r1.modal, ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "center", ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "top", ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "top-start", ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "top-end", ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "bottom", ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "bottom-start", ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "bottom-end", ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "left", ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "left-start", ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "left-end", ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "right", ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "right-start", ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "right-end"]));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.visible);
  }
}
var showOverlayContentAnimation = animation([style({
  transform: "{{transform}}",
  opacity: 0
}), animate("{{showTransitionParams}}")]);
var hideOverlayContentAnimation = animation([animate("{{hideTransitionParams}}", style({
  transform: "{{transform}}",
  opacity: 0
}))]);
var Overlay = class _Overlay extends BaseComponent {
  overlayService;
  zone;
  /**
   * The visible property is an input that determines the visibility of the component.
   * @defaultValue false
   * @group Props
   */
  get visible() {
    return this._visible;
  }
  set visible(value) {
    this._visible = value;
    if (this._visible && !this.modalVisible) {
      this.modalVisible = true;
    }
  }
  /**
   * The mode property is an input that determines the overlay mode type or string.
   * @defaultValue null
   * @group Props
   */
  get mode() {
    return this._mode || this.overlayOptions?.mode;
  }
  set mode(value) {
    this._mode = value;
  }
  /**
   * The style property is an input that determines the style object for the component.
   * @defaultValue null
   * @group Props
   */
  get style() {
    return ObjectUtils.merge(this._style, this.modal ? this.overlayResponsiveOptions?.style : this.overlayOptions?.style);
  }
  set style(value) {
    this._style = value;
  }
  /**
   * The styleClass property is an input that determines the CSS class(es) for the component.
   * @defaultValue null
   * @group Props
   */
  get styleClass() {
    return ObjectUtils.merge(this._styleClass, this.modal ? this.overlayResponsiveOptions?.styleClass : this.overlayOptions?.styleClass);
  }
  set styleClass(value) {
    this._styleClass = value;
  }
  /**
   * The contentStyle property is an input that determines the style object for the content of the component.
   * @defaultValue null
   * @group Props
   */
  get contentStyle() {
    return ObjectUtils.merge(this._contentStyle, this.modal ? this.overlayResponsiveOptions?.contentStyle : this.overlayOptions?.contentStyle);
  }
  set contentStyle(value) {
    this._contentStyle = value;
  }
  /**
   * The contentStyleClass property is an input that determines the CSS class(es) for the content of the component.
   * @defaultValue null
   * @group Props
   */
  get contentStyleClass() {
    return ObjectUtils.merge(this._contentStyleClass, this.modal ? this.overlayResponsiveOptions?.contentStyleClass : this.overlayOptions?.contentStyleClass);
  }
  set contentStyleClass(value) {
    this._contentStyleClass = value;
  }
  /**
   * The target property is an input that specifies the target element or selector for the component.
   * @defaultValue null
   * @group Props
   */
  get target() {
    const value = this._target || this.overlayOptions?.target;
    return value === void 0 ? "@prev" : value;
  }
  set target(value) {
    this._target = value;
  }
  /**
   * Overlay can be mounted into its location, body or DOM element instance using this option.
   * @defaultValue null
   * @group Props
   */
  get appendTo() {
    return this._appendTo || this.overlayOptions?.appendTo;
  }
  set appendTo(value) {
    this._appendTo = value;
  }
  /**
   * The autoZIndex determines whether to automatically manage layering. Its default value is 'false'.
   * @defaultValue false
   * @group Props
   */
  get autoZIndex() {
    const value = this._autoZIndex || this.overlayOptions?.autoZIndex;
    return value === void 0 ? true : value;
  }
  set autoZIndex(value) {
    this._autoZIndex = value;
  }
  /**
   * The baseZIndex is base zIndex value to use in layering.
   * @defaultValue null
   * @group Props
   */
  get baseZIndex() {
    const value = this._baseZIndex || this.overlayOptions?.baseZIndex;
    return value === void 0 ? 0 : value;
  }
  set baseZIndex(value) {
    this._baseZIndex = value;
  }
  /**
   * Transition options of the show or hide animation.
   * @defaultValue .12s cubic-bezier(0, 0, 0.2, 1)
   * @group Props
   */
  get showTransitionOptions() {
    const value = this._showTransitionOptions || this.overlayOptions?.showTransitionOptions;
    return value === void 0 ? ".12s cubic-bezier(0, 0, 0.2, 1)" : value;
  }
  set showTransitionOptions(value) {
    this._showTransitionOptions = value;
  }
  /**
   * The hideTransitionOptions property is an input that determines the CSS transition options for hiding the component.
   * @defaultValue .1s linear
   * @group Props
   */
  get hideTransitionOptions() {
    const value = this._hideTransitionOptions || this.overlayOptions?.hideTransitionOptions;
    return value === void 0 ? ".1s linear" : value;
  }
  set hideTransitionOptions(value) {
    this._hideTransitionOptions = value;
  }
  /**
   * The listener property is an input that specifies the listener object for the component.
   * @defaultValue null
   * @group Props
   */
  get listener() {
    return this._listener || this.overlayOptions?.listener;
  }
  set listener(value) {
    this._listener = value;
  }
  /**
   * It is the option used to determine in which mode it should appear according to the given media or breakpoint.
   * @defaultValue null
   * @group Props
   */
  get responsive() {
    return this._responsive || this.overlayOptions?.responsive;
  }
  set responsive(val) {
    this._responsive = val;
  }
  /**
   * The options property is an input that specifies the overlay options for the component.
   * @defaultValue null
   * @group Props
   */
  get options() {
    return this._options;
  }
  set options(val) {
    this._options = val;
  }
  /**
   * This EventEmitter is used to notify changes in the visibility state of a component.
   * @param {Boolean} boolean - Value of visibility as boolean.
   * @group Emits
   */
  visibleChange = new EventEmitter();
  /**
   * Callback to invoke before the overlay is shown.
   * @param {OverlayOnBeforeShowEvent} event - Custom overlay before show event.
   * @group Emits
   */
  onBeforeShow = new EventEmitter();
  /**
   * Callback to invoke when the overlay is shown.
   * @param {OverlayOnShowEvent} event - Custom overlay show event.
   * @group Emits
   */
  onShow = new EventEmitter();
  /**
   * Callback to invoke before the overlay is hidden.
   * @param {OverlayOnBeforeHideEvent} event - Custom overlay before hide event.
   * @group Emits
   */
  onBeforeHide = new EventEmitter();
  /**
   * Callback to invoke when the overlay is hidden
   * @param {OverlayOnHideEvent} event - Custom hide event.
   * @group Emits
   */
  onHide = new EventEmitter();
  /**
   * Callback to invoke when the animation is started.
   * @param {AnimationEvent} event - Animation event.
   * @group Emits
   */
  onAnimationStart = new EventEmitter();
  /**
   * Callback to invoke when the animation is done.
   * @param {AnimationEvent} event - Animation event.
   * @group Emits
   */
  onAnimationDone = new EventEmitter();
  overlayViewChild;
  contentViewChild;
  /**
   * Content template of the component.
   * @group Templates
   */
  contentTemplate;
  templates;
  _contentTemplate;
  _visible = false;
  _mode;
  _style;
  _styleClass;
  _contentStyle;
  _contentStyleClass;
  _target;
  _appendTo;
  _autoZIndex;
  _baseZIndex;
  _showTransitionOptions;
  _hideTransitionOptions;
  _listener;
  _responsive;
  _options;
  modalVisible = false;
  isOverlayClicked = false;
  isOverlayContentClicked = false;
  scrollHandler;
  documentClickListener;
  documentResizeListener;
  _componentStyle = inject(OverlayStyle);
  documentKeyboardListener;
  window;
  transformOptions = {
    default: "scaleY(0.8)",
    center: "scale(0.7)",
    top: "translate3d(0px, -100%, 0px)",
    "top-start": "translate3d(0px, -100%, 0px)",
    "top-end": "translate3d(0px, -100%, 0px)",
    bottom: "translate3d(0px, 100%, 0px)",
    "bottom-start": "translate3d(0px, 100%, 0px)",
    "bottom-end": "translate3d(0px, 100%, 0px)",
    left: "translate3d(-100%, 0px, 0px)",
    "left-start": "translate3d(-100%, 0px, 0px)",
    "left-end": "translate3d(-100%, 0px, 0px)",
    right: "translate3d(100%, 0px, 0px)",
    "right-start": "translate3d(100%, 0px, 0px)",
    "right-end": "translate3d(100%, 0px, 0px)"
  };
  get modal() {
    if (isPlatformBrowser(this.platformId)) {
      return this.mode === "modal" || this.overlayResponsiveOptions && this.document.defaultView?.matchMedia(this.overlayResponsiveOptions.media?.replace("@media", "") || `(max-width: ${this.overlayResponsiveOptions.breakpoint})`).matches;
    }
  }
  get overlayMode() {
    return this.mode || (this.modal ? "modal" : "overlay");
  }
  get overlayOptions() {
    return __spreadValues(__spreadValues({}, this.config?.overlayOptions), this.options);
  }
  get overlayResponsiveOptions() {
    return __spreadValues(__spreadValues({}, this.overlayOptions?.responsive), this.responsive);
  }
  get overlayResponsiveDirection() {
    return this.overlayResponsiveOptions?.direction || "center";
  }
  get overlayEl() {
    return this.overlayViewChild?.nativeElement;
  }
  get contentEl() {
    return this.contentViewChild?.nativeElement;
  }
  get targetEl() {
    return getTargetElement(this.target, this.el?.nativeElement);
  }
  constructor(overlayService, zone) {
    super();
    this.overlayService = overlayService;
    this.zone = zone;
  }
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this._contentTemplate = item.template;
          break;
        // TODO: new template types may be added.
        default:
          this._contentTemplate = item.template;
          break;
      }
    });
  }
  show(overlay, isFocus = false) {
    this.onVisibleChange(true);
    this.handleEvents("onShow", {
      overlay: overlay || this.overlayEl,
      target: this.targetEl,
      mode: this.overlayMode
    });
    isFocus && focus(this.targetEl);
    this.modal && addClass(this.document?.body, "p-overflow-hidden");
  }
  hide(overlay, isFocus = false) {
    if (!this.visible) {
      return;
    } else {
      this.onVisibleChange(false);
      this.handleEvents("onHide", {
        overlay: overlay || this.overlayEl,
        target: this.targetEl,
        mode: this.overlayMode
      });
      isFocus && focus(this.targetEl);
      this.modal && removeClass(this.document?.body, "p-overflow-hidden");
    }
  }
  alignOverlay() {
    !this.modal && DomHandler.alignOverlay(this.overlayEl, this.targetEl, this.appendTo);
  }
  onVisibleChange(visible) {
    this._visible = visible;
    this.visibleChange.emit(visible);
  }
  onOverlayClick() {
    this.isOverlayClicked = true;
  }
  onOverlayContentClick(event) {
    this.overlayService.add({
      originalEvent: event,
      target: this.targetEl
    });
    this.isOverlayContentClicked = true;
  }
  onOverlayContentAnimationStart(event) {
    switch (event.toState) {
      case "visible":
        this.handleEvents("onBeforeShow", {
          overlay: this.overlayEl,
          target: this.targetEl,
          mode: this.overlayMode
        });
        if (this.autoZIndex) {
          zindexutils.set(this.overlayMode, this.overlayEl, this.baseZIndex + this.config?.zIndex[this.overlayMode]);
        }
        DomHandler.appendOverlay(this.overlayEl, this.appendTo === "body" ? this.document.body : this.appendTo, this.appendTo);
        this.alignOverlay();
        break;
      case "void":
        this.handleEvents("onBeforeHide", {
          overlay: this.overlayEl,
          target: this.targetEl,
          mode: this.overlayMode
        });
        this.modal && addClass(this.overlayEl, "p-overlay-mask-leave");
        break;
    }
    this.handleEvents("onAnimationStart", event);
  }
  onOverlayContentAnimationDone(event) {
    const container = this.overlayEl || event.element.parentElement;
    switch (event.toState) {
      case "visible":
        this.show(container, true);
        this.bindListeners();
        break;
      case "void":
        this.hide(container, true);
        this.unbindListeners();
        DomHandler.appendOverlay(this.overlayEl, this.targetEl, this.appendTo);
        zindexutils.clear(container);
        this.modalVisible = false;
        this.cd.markForCheck();
        break;
    }
    this.handleEvents("onAnimationDone", event);
  }
  handleEvents(name, params) {
    this[name].emit(params);
    this.options && this.options[name] && this.options[name](params);
    this.config?.overlayOptions && (this.config?.overlayOptions)[name] && (this.config?.overlayOptions)[name](params);
  }
  bindListeners() {
    this.bindScrollListener();
    this.bindDocumentClickListener();
    this.bindDocumentResizeListener();
    this.bindDocumentKeyboardListener();
  }
  unbindListeners() {
    this.unbindScrollListener();
    this.unbindDocumentClickListener();
    this.unbindDocumentResizeListener();
    this.unbindDocumentKeyboardListener();
  }
  bindScrollListener() {
    if (!this.scrollHandler) {
      this.scrollHandler = new ConnectedOverlayScrollHandler(this.targetEl, (event) => {
        const valid = this.listener ? this.listener(event, {
          type: "scroll",
          mode: this.overlayMode,
          valid: true
        }) : true;
        valid && this.hide(event, true);
      });
    }
    this.scrollHandler.bindScrollListener();
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
    }
  }
  bindDocumentClickListener() {
    if (!this.documentClickListener) {
      this.documentClickListener = this.renderer.listen(this.document, "click", (event) => {
        const isTargetClicked = this.targetEl && (this.targetEl.isSameNode(event.target) || !this.isOverlayClicked && this.targetEl.contains(event.target));
        const isOutsideClicked = !isTargetClicked && !this.isOverlayContentClicked;
        const valid = this.listener ? this.listener(event, {
          type: "outside",
          mode: this.overlayMode,
          valid: event.which !== 3 && isOutsideClicked
        }) : isOutsideClicked;
        valid && this.hide(event);
        this.isOverlayClicked = this.isOverlayContentClicked = false;
      });
    }
  }
  unbindDocumentClickListener() {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
    }
  }
  bindDocumentResizeListener() {
    if (!this.documentResizeListener) {
      this.documentResizeListener = this.renderer.listen(this.document.defaultView, "resize", (event) => {
        const valid = this.listener ? this.listener(event, {
          type: "resize",
          mode: this.overlayMode,
          valid: !isTouchDevice()
        }) : !isTouchDevice();
        valid && this.hide(event, true);
      });
    }
  }
  unbindDocumentResizeListener() {
    if (this.documentResizeListener) {
      this.documentResizeListener();
      this.documentResizeListener = null;
    }
  }
  bindDocumentKeyboardListener() {
    if (this.documentKeyboardListener) {
      return;
    }
    this.zone.runOutsideAngular(() => {
      this.documentKeyboardListener = this.renderer.listen(this.document.defaultView, "keydown", (event) => {
        if (this.overlayOptions.hideOnEscape === false || event.code !== "Escape") {
          return;
        }
        const valid = this.listener ? this.listener(event, {
          type: "keydown",
          mode: this.overlayMode,
          valid: !isTouchDevice()
        }) : !isTouchDevice();
        if (valid) {
          this.zone.run(() => {
            this.hide(event, true);
          });
        }
      });
    });
  }
  unbindDocumentKeyboardListener() {
    if (this.documentKeyboardListener) {
      this.documentKeyboardListener();
      this.documentKeyboardListener = null;
    }
  }
  ngOnDestroy() {
    this.hide(this.overlayEl, true);
    if (this.overlayEl) {
      DomHandler.appendOverlay(this.overlayEl, this.targetEl, this.appendTo);
      zindexutils.clear(this.overlayEl);
    }
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    this.unbindListeners();
    super.ngOnDestroy();
  }
  static \u0275fac = function Overlay_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Overlay)(\u0275\u0275directiveInject(OverlayService), \u0275\u0275directiveInject(NgZone));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Overlay,
    selectors: [["p-overlay"]],
    contentQueries: function Overlay_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c06, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Overlay_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c16, 5);
        \u0275\u0275viewQuery(_c06, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overlayViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentViewChild = _t.first);
      }
    },
    inputs: {
      visible: "visible",
      mode: "mode",
      style: "style",
      styleClass: "styleClass",
      contentStyle: "contentStyle",
      contentStyleClass: "contentStyleClass",
      target: "target",
      appendTo: "appendTo",
      autoZIndex: "autoZIndex",
      baseZIndex: "baseZIndex",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      listener: "listener",
      responsive: "responsive",
      options: "options"
    },
    outputs: {
      visibleChange: "visibleChange",
      onBeforeShow: "onBeforeShow",
      onShow: "onShow",
      onBeforeHide: "onBeforeHide",
      onHide: "onHide",
      onAnimationStart: "onAnimationStart",
      onAnimationDone: "onAnimationDone"
    },
    features: [\u0275\u0275ProvidersFeature([OverlayStyle]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c22,
    decls: 1,
    vars: 1,
    consts: [["overlay", ""], ["content", ""], [3, "ngStyle", "class", "ngClass", "click", 4, "ngIf"], [3, "click", "ngStyle", "ngClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function Overlay_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275template(0, Overlay_div_0_Template, 3, 20, "div", 2);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.modalVisible);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, NgStyle, SharedModule],
    encapsulation: 2,
    data: {
      animation: [trigger("overlayContentAnimation", [transition(":enter", [useAnimation(showOverlayContentAnimation)]), transition(":leave", [useAnimation(hideOverlayContentAnimation)])])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Overlay, [{
    type: Component,
    args: [{
      selector: "p-overlay",
      standalone: true,
      imports: [CommonModule, SharedModule],
      template: `
        <div
            *ngIf="modalVisible"
            #overlay
            [ngStyle]="style"
            [class]="styleClass"
            [ngClass]="{
                'p-overlay p-component': true,
                'p-overlay-modal p-overlay-mask p-overlay-mask-enter': modal,
                'p-overlay-center': modal && overlayResponsiveDirection === 'center',
                'p-overlay-top': modal && overlayResponsiveDirection === 'top',
                'p-overlay-top-start': modal && overlayResponsiveDirection === 'top-start',
                'p-overlay-top-end': modal && overlayResponsiveDirection === 'top-end',
                'p-overlay-bottom': modal && overlayResponsiveDirection === 'bottom',
                'p-overlay-bottom-start': modal && overlayResponsiveDirection === 'bottom-start',
                'p-overlay-bottom-end': modal && overlayResponsiveDirection === 'bottom-end',
                'p-overlay-left': modal && overlayResponsiveDirection === 'left',
                'p-overlay-left-start': modal && overlayResponsiveDirection === 'left-start',
                'p-overlay-left-end': modal && overlayResponsiveDirection === 'left-end',
                'p-overlay-right': modal && overlayResponsiveDirection === 'right',
                'p-overlay-right-start': modal && overlayResponsiveDirection === 'right-start',
                'p-overlay-right-end': modal && overlayResponsiveDirection === 'right-end'
            }"
            (click)="onOverlayClick()"
        >
            <div
                *ngIf="visible"
                #content
                [ngStyle]="contentStyle"
                [class]="contentStyleClass"
                [ngClass]="'p-overlay-content'"
                (click)="onOverlayContentClick($event)"
                [@overlayContentAnimation]="{
                    value: 'visible',
                    params: {
                        showTransitionParams: showTransitionOptions,
                        hideTransitionParams: hideTransitionOptions,
                        transform: transformOptions[modal ? overlayResponsiveDirection : 'default']
                    }
                }"
                (@overlayContentAnimation.start)="onOverlayContentAnimationStart($event)"
                (@overlayContentAnimation.done)="onOverlayContentAnimationDone($event)"
            >
                <ng-content></ng-content>
                <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate; context: { $implicit: { mode: overlayMode } }"></ng-container>
            </div>
        </div>
    `,
      animations: [trigger("overlayContentAnimation", [transition(":enter", [useAnimation(showOverlayContentAnimation)]), transition(":leave", [useAnimation(hideOverlayContentAnimation)])])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [OverlayStyle]
    }]
  }], () => [{
    type: OverlayService
  }, {
    type: NgZone
  }], {
    visible: [{
      type: Input
    }],
    mode: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    contentStyle: [{
      type: Input
    }],
    contentStyleClass: [{
      type: Input
    }],
    target: [{
      type: Input
    }],
    appendTo: [{
      type: Input
    }],
    autoZIndex: [{
      type: Input
    }],
    baseZIndex: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    listener: [{
      type: Input
    }],
    responsive: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    visibleChange: [{
      type: Output
    }],
    onBeforeShow: [{
      type: Output
    }],
    onShow: [{
      type: Output
    }],
    onBeforeHide: [{
      type: Output
    }],
    onHide: [{
      type: Output
    }],
    onAnimationStart: [{
      type: Output
    }],
    onAnimationDone: [{
      type: Output
    }],
    overlayViewChild: [{
      type: ViewChild,
      args: ["overlay"]
    }],
    contentViewChild: [{
      type: ViewChild,
      args: ["content"]
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Overlay, {
    className: "Overlay",
    filePath: "overlay.ts",
    lineNumber: 76
  });
})();
var OverlayModule = class _OverlayModule {
  static \u0275fac = function OverlayModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OverlayModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _OverlayModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Overlay, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayModule, [{
    type: NgModule,
    args: [{
      imports: [Overlay, SharedModule],
      exports: [Overlay, SharedModule]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-scroller.mjs
var theme6 = ({
  dt
}) => `
.p-virtualscroller {
    position: relative;
    overflow: auto;
    contain: strict;
    transform: translateZ(0);
    will-change: scroll-position;
    outline: 0 none;
}

.p-virtualscroller-content {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100%;
    min-width: 100%;
    will-change: transform;
}

.p-virtualscroller-spacer {
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    width: 1px;
    transform-origin: 0 0;
    pointer-events: none;
}

.p-virtualscroller-loader {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${dt("virtualscroller.loader.mask.background")};
    color: ${dt("virtualscroller.loader.mask.color")};
}

.p-virtualscroller-loader-mask {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-virtualscroller-loading-icon {
    font-size: ${dt("virtualscroller.loader.icon.size")};
    width: ${dt("virtualscroller.loader.icon.size")};
    height: ${dt("virtualscroller.loader.icon.size")};
}

.p-virtualscroller-horizontal > .p-virtualscroller-content {
    display: flex;
}

.p-virtualscroller-inline .p-virtualscroller-content {
    position: static;
}
`;
var ScrollerStyle = class _ScrollerStyle extends BaseStyle {
  name = "virtualscroller";
  theme = theme6;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ScrollerStyle_BaseFactory;
    return function ScrollerStyle_Factory(__ngFactoryType__) {
      return (\u0275ScrollerStyle_BaseFactory || (\u0275ScrollerStyle_BaseFactory = \u0275\u0275getInheritedFactory(_ScrollerStyle)))(__ngFactoryType__ || _ScrollerStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ScrollerStyle,
    factory: _ScrollerStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollerStyle, [{
    type: Injectable
  }], null, null);
})();
var ScrollerClasses;
(function(ScrollerClasses2) {
  ScrollerClasses2["root"] = "p-virtualscroller";
  ScrollerClasses2["content"] = "p-virtualscroller-content";
  ScrollerClasses2["spacer"] = "p-virtualscroller-spacer";
  ScrollerClasses2["loader"] = "p-virtualscroller-loader";
  ScrollerClasses2["loadingIcon"] = "p-virtualscroller-loading-icon";
})(ScrollerClasses || (ScrollerClasses = {}));
var _c07 = ["content"];
var _c17 = ["item"];
var _c23 = ["loader"];
var _c33 = ["loadericon"];
var _c43 = ["element"];
var _c53 = ["*"];
var _c63 = (a0, a1, a2) => ({
  "p-virtualscroller": true,
  "p-virtualscroller-inline": a0,
  "p-virtualscroller-both p-both-scroll": a1,
  "p-virtualscroller-horizontal p-horizontal-scroll": a2
});
var _c73 = (a0, a1) => ({
  $implicit: a0,
  options: a1
});
var _c82 = (a0) => ({
  "p-virtualscroller-loading ": a0
});
var _c92 = (a0) => ({
  "p-virtualscroller-loader-mask": a0
});
var _c102 = (a0) => ({
  numCols: a0
});
var _c112 = (a0) => ({
  options: a0
});
var _c122 = () => ({
  styleClass: "p-virtualscroller-loading-icon"
});
var _c132 = (a0, a1) => ({
  rows: a0,
  columns: a1
});
function Scroller_ng_container_0_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Scroller_ng_container_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Scroller_ng_container_0_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 10);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.contentTemplate || ctx_r1._contentTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c73, ctx_r1.loadedItems, ctx_r1.getContentOptions()));
  }
}
function Scroller_ng_container_0_ng_template_4_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Scroller_ng_container_0_ng_template_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Scroller_ng_container_0_ng_template_4_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 10);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const index_r4 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.itemTemplate || ctx_r1._itemTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c73, item_r3, ctx_r1.getOptions(index_r4)));
  }
}
function Scroller_ng_container_0_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11, 3);
    \u0275\u0275template(2, Scroller_ng_container_0_ng_template_4_ng_container_2_Template, 2, 5, "ng-container", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c82, ctx_r1.d_loading))("ngStyle", ctx_r1.contentStyle);
    \u0275\u0275attribute("data-pc-section", "content");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.loadedItems)("ngForTrackBy", ctx_r1._trackBy);
  }
}
function Scroller_ng_container_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 13);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngStyle", ctx_r1.spacerStyle);
    \u0275\u0275attribute("data-pc-section", "spacer");
  }
}
function Scroller_ng_container_0_div_7_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Scroller_ng_container_0_div_7_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Scroller_ng_container_0_div_7_ng_container_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 10);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const index_r5 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.loaderTemplate || ctx_r1._loaderTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(4, _c112, ctx_r1.getLoaderOptions(index_r5, ctx_r1.both && \u0275\u0275pureFunction1(2, _c102, ctx_r1.numItemsInViewport.cols))));
  }
}
function Scroller_ng_container_0_div_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Scroller_ng_container_0_div_7_ng_container_1_ng_container_1_Template, 2, 6, "ng-container", 15);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.loaderArr);
  }
}
function Scroller_ng_container_0_div_7_ng_template_2_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Scroller_ng_container_0_div_7_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Scroller_ng_container_0_div_7_ng_template_2_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 10);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.loaderIconTemplate || ctx_r1._loaderIconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(3, _c112, \u0275\u0275pureFunction0(2, _c122)));
  }
}
function Scroller_ng_container_0_div_7_ng_template_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "SpinnerIcon", 16);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-virtualscroller-loading-icon pi-spin");
    \u0275\u0275attribute("data-pc-section", "loadingIcon");
  }
}
function Scroller_ng_container_0_div_7_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Scroller_ng_container_0_div_7_ng_template_2_ng_container_0_Template, 2, 5, "ng-container", 6)(1, Scroller_ng_container_0_div_7_ng_template_2_ng_template_1_Template, 1, 2, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const buildInLoaderIcon_r6 = \u0275\u0275reference(2);
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", ctx_r1.loaderIconTemplate || ctx_r1._loaderIconTemplate)("ngIfElse", buildInLoaderIcon_r6);
  }
}
function Scroller_ng_container_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275template(1, Scroller_ng_container_0_div_7_ng_container_1_Template, 2, 1, "ng-container", 6)(2, Scroller_ng_container_0_div_7_ng_template_2_Template, 3, 2, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const buildInLoader_r7 = \u0275\u0275reference(3);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(4, _c92, !ctx_r1.loaderTemplate));
    \u0275\u0275attribute("data-pc-section", "loader");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loaderTemplate || ctx_r1._loaderTemplate)("ngIfElse", buildInLoader_r7);
  }
}
function Scroller_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 7, 1);
    \u0275\u0275listener("scroll", function Scroller_ng_container_0_Template_div_scroll_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onContainerScroll($event));
    });
    \u0275\u0275template(3, Scroller_ng_container_0_ng_container_3_Template, 2, 5, "ng-container", 6)(4, Scroller_ng_container_0_ng_template_4_Template, 3, 7, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(6, Scroller_ng_container_0_div_6_Template, 1, 2, "div", 8)(7, Scroller_ng_container_0_div_7_Template, 4, 6, "div", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const buildInContent_r8 = \u0275\u0275reference(5);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1._styleClass);
    \u0275\u0275property("ngStyle", ctx_r1._style)("ngClass", \u0275\u0275pureFunction3(12, _c63, ctx_r1.inline, ctx_r1.both, ctx_r1.horizontal));
    \u0275\u0275attribute("id", ctx_r1._id)("tabindex", ctx_r1.tabindex)("data-pc-name", "scroller")("data-pc-section", "root");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.contentTemplate || ctx_r1._contentTemplate)("ngIfElse", buildInContent_r8);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1._showSpacer);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loaderDisabled && ctx_r1._showLoader && ctx_r1.d_loading);
  }
}
function Scroller_ng_template_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Scroller_ng_template_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Scroller_ng_template_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 10);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.contentTemplate || ctx_r1._contentTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(5, _c73, ctx_r1.items, \u0275\u0275pureFunction2(2, _c132, ctx_r1._items, ctx_r1.loadedColumns)));
  }
}
function Scroller_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
    \u0275\u0275template(1, Scroller_ng_template_1_ng_container_1_Template, 2, 8, "ng-container", 17);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.contentTemplate || ctx_r1._contentTemplate);
  }
}
var Scroller = class _Scroller extends BaseComponent {
  zone;
  /**
   * Unique identifier of the element.
   * @group Props
   */
  get id() {
    return this._id;
  }
  set id(val) {
    this._id = val;
  }
  /**
   * Inline style of the component.
   * @group Props
   */
  get style() {
    return this._style;
  }
  set style(val) {
    this._style = val;
  }
  /**
   * Style class of the element.
   * @group Props
   */
  get styleClass() {
    return this._styleClass;
  }
  set styleClass(val) {
    this._styleClass = val;
  }
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  get tabindex() {
    return this._tabindex;
  }
  set tabindex(val) {
    this._tabindex = val;
  }
  /**
   * An array of objects to display.
   * @group Props
   */
  get items() {
    return this._items;
  }
  set items(val) {
    this._items = val;
  }
  /**
   * The height/width of item according to orientation.
   * @group Props
   */
  get itemSize() {
    return this._itemSize;
  }
  set itemSize(val) {
    this._itemSize = val;
  }
  /**
   * Height of the scroll viewport.
   * @group Props
   */
  get scrollHeight() {
    return this._scrollHeight;
  }
  set scrollHeight(val) {
    this._scrollHeight = val;
  }
  /**
   * Width of the scroll viewport.
   * @group Props
   */
  get scrollWidth() {
    return this._scrollWidth;
  }
  set scrollWidth(val) {
    this._scrollWidth = val;
  }
  /**
   * The orientation of scrollbar.
   * @group Props
   */
  get orientation() {
    return this._orientation;
  }
  set orientation(val) {
    this._orientation = val;
  }
  /**
   * Used to specify how many items to load in each load method in lazy mode.
   * @group Props
   */
  get step() {
    return this._step;
  }
  set step(val) {
    this._step = val;
  }
  /**
   * Delay in scroll before new data is loaded.
   * @group Props
   */
  get delay() {
    return this._delay;
  }
  set delay(val) {
    this._delay = val;
  }
  /**
   * Delay after window's resize finishes.
   * @group Props
   */
  get resizeDelay() {
    return this._resizeDelay;
  }
  set resizeDelay(val) {
    this._resizeDelay = val;
  }
  /**
   * Used to append each loaded item to top without removing any items from the DOM. Using very large data may cause the browser to crash.
   * @group Props
   */
  get appendOnly() {
    return this._appendOnly;
  }
  set appendOnly(val) {
    this._appendOnly = val;
  }
  /**
   * Specifies whether the scroller should be displayed inline or not.
   * @group Props
   */
  get inline() {
    return this._inline;
  }
  set inline(val) {
    this._inline = val;
  }
  /**
   * Defines if data is loaded and interacted with in lazy manner.
   * @group Props
   */
  get lazy() {
    return this._lazy;
  }
  set lazy(val) {
    this._lazy = val;
  }
  /**
   * If disabled, the scroller feature is eliminated and the content is displayed directly.
   * @group Props
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(val) {
    this._disabled = val;
  }
  /**
   * Used to implement a custom loader instead of using the loader feature in the scroller.
   * @group Props
   */
  get loaderDisabled() {
    return this._loaderDisabled;
  }
  set loaderDisabled(val) {
    this._loaderDisabled = val;
  }
  /**
   * Columns to display.
   * @group Props
   */
  get columns() {
    return this._columns;
  }
  set columns(val) {
    this._columns = val;
  }
  /**
   * Used to implement a custom spacer instead of using the spacer feature in the scroller.
   * @group Props
   */
  get showSpacer() {
    return this._showSpacer;
  }
  set showSpacer(val) {
    this._showSpacer = val;
  }
  /**
   * Defines whether to show loader.
   * @group Props
   */
  get showLoader() {
    return this._showLoader;
  }
  set showLoader(val) {
    this._showLoader = val;
  }
  /**
   * Determines how many additional elements to add to the DOM outside of the view. According to the scrolls made up and down, extra items are added in a certain algorithm in the form of multiples of this number. Default value is half the number of items shown in the view.
   * @group Props
   */
  get numToleratedItems() {
    return this._numToleratedItems;
  }
  set numToleratedItems(val) {
    this._numToleratedItems = val;
  }
  /**
   * Defines whether the data is loaded.
   * @group Props
   */
  get loading() {
    return this._loading;
  }
  set loading(val) {
    this._loading = val;
  }
  /**
   * Defines whether to dynamically change the height or width of scrollable container.
   * @group Props
   */
  get autoSize() {
    return this._autoSize;
  }
  set autoSize(val) {
    this._autoSize = val;
  }
  /**
   * Function to optimize the dom operations by delegating to ngForTrackBy, default algoritm checks for object identity.
   * @group Props
   */
  get trackBy() {
    return this._trackBy;
  }
  set trackBy(val) {
    this._trackBy = val;
  }
  /**
   * Defines whether to use the scroller feature. The properties of scroller component can be used like an object in it.
   * @group Props
   */
  get options() {
    return this._options;
  }
  set options(val) {
    this._options = val;
    if (val && typeof val === "object") {
      Object.entries(val).forEach(([k, v]) => this[`_${k}`] !== v && (this[`_${k}`] = v));
    }
  }
  /**
   * Callback to invoke in lazy mode to load new data.
   * @param {ScrollerLazyLoadEvent} event - Custom lazy load event.
   * @group Emits
   */
  onLazyLoad = new EventEmitter();
  /**
   * Callback to invoke when scroll position changes.
   * @param {ScrollerScrollEvent} event - Custom scroll event.
   * @group Emits
   */
  onScroll = new EventEmitter();
  /**
   * Callback to invoke when scroll position and item's range in view changes.
   * @param {ScrollerScrollEvent} event - Custom scroll index change event.
   * @group Emits
   */
  onScrollIndexChange = new EventEmitter();
  elementViewChild;
  contentViewChild;
  _id;
  _style;
  _styleClass;
  _tabindex = 0;
  _items;
  _itemSize = 0;
  _scrollHeight;
  _scrollWidth;
  _orientation = "vertical";
  _step = 0;
  _delay = 0;
  _resizeDelay = 10;
  _appendOnly = false;
  _inline = false;
  _lazy = false;
  _disabled = false;
  _loaderDisabled = false;
  _columns;
  _showSpacer = true;
  _showLoader = false;
  _numToleratedItems;
  _loading;
  _autoSize = false;
  _trackBy;
  _options;
  d_loading = false;
  d_numToleratedItems;
  contentEl;
  /**
   * Content template of the component.
   * @group Templates
   */
  contentTemplate;
  /**
   * Item template of the component.
   * @group Templates
   */
  itemTemplate;
  /**
   * Loader template of the component.
   * @group Templates
   */
  loaderTemplate;
  /**
   * Loader icon template of the component.
   * @group Templates
   */
  loaderIconTemplate;
  templates;
  _contentTemplate;
  _itemTemplate;
  _loaderTemplate;
  _loaderIconTemplate;
  first = 0;
  last = 0;
  page = 0;
  isRangeChanged = false;
  numItemsInViewport = 0;
  lastScrollPos = 0;
  lazyLoadState = {};
  loaderArr = [];
  spacerStyle = {};
  contentStyle = {};
  scrollTimeout;
  resizeTimeout;
  initialized = false;
  windowResizeListener;
  defaultWidth;
  defaultHeight;
  defaultContentWidth;
  defaultContentHeight;
  get vertical() {
    return this._orientation === "vertical";
  }
  get horizontal() {
    return this._orientation === "horizontal";
  }
  get both() {
    return this._orientation === "both";
  }
  get loadedItems() {
    if (this._items && !this.d_loading) {
      if (this.both) return this._items.slice(this._appendOnly ? 0 : this.first.rows, this.last.rows).map((item) => this._columns ? item : item.slice(this._appendOnly ? 0 : this.first.cols, this.last.cols));
      else if (this.horizontal && this._columns) return this._items;
      else return this._items.slice(this._appendOnly ? 0 : this.first, this.last);
    }
    return [];
  }
  get loadedRows() {
    return this.d_loading ? this._loaderDisabled ? this.loaderArr : [] : this.loadedItems;
  }
  get loadedColumns() {
    if (this._columns && (this.both || this.horizontal)) {
      return this.d_loading && this._loaderDisabled ? this.both ? this.loaderArr[0] : this.loaderArr : this._columns.slice(this.both ? this.first.cols : this.first, this.both ? this.last.cols : this.last);
    }
    return this._columns;
  }
  _componentStyle = inject(ScrollerStyle);
  constructor(zone) {
    super();
    this.zone = zone;
  }
  ngOnInit() {
    super.ngOnInit();
    this.setInitialState();
  }
  ngOnChanges(simpleChanges) {
    super.ngOnChanges(simpleChanges);
    let isLoadingChanged = false;
    if (simpleChanges.loading) {
      const {
        previousValue,
        currentValue
      } = simpleChanges.loading;
      if (this.lazy && previousValue !== currentValue && currentValue !== this.d_loading) {
        this.d_loading = currentValue;
        isLoadingChanged = true;
      }
    }
    if (simpleChanges.orientation) {
      this.lastScrollPos = this.both ? {
        top: 0,
        left: 0
      } : 0;
    }
    if (simpleChanges.numToleratedItems) {
      const {
        previousValue,
        currentValue
      } = simpleChanges.numToleratedItems;
      if (previousValue !== currentValue && currentValue !== this.d_numToleratedItems) {
        this.d_numToleratedItems = currentValue;
      }
    }
    if (simpleChanges.options) {
      const {
        previousValue,
        currentValue
      } = simpleChanges.options;
      if (this.lazy && previousValue?.loading !== currentValue?.loading && currentValue?.loading !== this.d_loading) {
        this.d_loading = currentValue.loading;
        isLoadingChanged = true;
      }
      if (previousValue?.numToleratedItems !== currentValue?.numToleratedItems && currentValue?.numToleratedItems !== this.d_numToleratedItems) {
        this.d_numToleratedItems = currentValue.numToleratedItems;
      }
    }
    if (this.initialized) {
      const isChanged = !isLoadingChanged && (simpleChanges.items?.previousValue?.length !== simpleChanges.items?.currentValue?.length || simpleChanges.itemSize || simpleChanges.scrollHeight || simpleChanges.scrollWidth);
      if (isChanged) {
        this.init();
        this.calculateAutoSize();
      }
    }
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this._contentTemplate = item.template;
          break;
        case "item":
          this._itemTemplate = item.template;
          break;
        case "loader":
          this._loaderTemplate = item.template;
          break;
        case "loadericon":
          this._loaderIconTemplate = item.template;
          break;
        default:
          this._itemTemplate = item.template;
          break;
      }
    });
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
    Promise.resolve().then(() => {
      this.viewInit();
    });
  }
  ngAfterViewChecked() {
    if (!this.initialized) {
      this.viewInit();
    }
  }
  ngOnDestroy() {
    this.unbindResizeListener();
    this.contentEl = null;
    this.initialized = false;
    super.ngOnDestroy();
  }
  viewInit() {
    if (isPlatformBrowser(this.platformId) && !this.initialized) {
      if (isVisible(this.elementViewChild?.nativeElement)) {
        this.setInitialState();
        this.setContentEl(this.contentEl);
        this.init();
        this.defaultWidth = getWidth(this.elementViewChild?.nativeElement);
        this.defaultHeight = getHeight(this.elementViewChild?.nativeElement);
        this.defaultContentWidth = getWidth(this.contentEl);
        this.defaultContentHeight = getHeight(this.contentEl);
        this.initialized = true;
      }
    }
  }
  init() {
    if (!this._disabled) {
      this.setSize();
      this.calculateOptions();
      this.setSpacerSize();
      this.bindResizeListener();
      this.cd.detectChanges();
    }
  }
  setContentEl(el) {
    this.contentEl = el || this.contentViewChild?.nativeElement || findSingle(this.elementViewChild?.nativeElement, ".p-virtualscroller-content");
  }
  setInitialState() {
    this.first = this.both ? {
      rows: 0,
      cols: 0
    } : 0;
    this.last = this.both ? {
      rows: 0,
      cols: 0
    } : 0;
    this.numItemsInViewport = this.both ? {
      rows: 0,
      cols: 0
    } : 0;
    this.lastScrollPos = this.both ? {
      top: 0,
      left: 0
    } : 0;
    this.d_loading = this._loading || false;
    this.d_numToleratedItems = this._numToleratedItems;
    this.loaderArr = [];
    this.spacerStyle = {};
    this.contentStyle = {};
  }
  getElementRef() {
    return this.elementViewChild;
  }
  getPageByFirst(first) {
    return Math.floor(((first ?? this.first) + this.d_numToleratedItems * 4) / (this._step || 1));
  }
  isPageChanged(first) {
    return this._step ? this.page !== this.getPageByFirst(first ?? this.first) : true;
  }
  scrollTo(options) {
    this.elementViewChild?.nativeElement?.scrollTo(options);
  }
  scrollToIndex(index, behavior = "auto") {
    const valid = this.both ? index.every((i) => i > -1) : index > -1;
    if (valid) {
      const first = this.first;
      const {
        scrollTop = 0,
        scrollLeft = 0
      } = this.elementViewChild?.nativeElement;
      const {
        numToleratedItems
      } = this.calculateNumItems();
      const contentPos = this.getContentPosition();
      const itemSize = this.itemSize;
      const calculateFirst = (_index = 0, _numT) => _index <= _numT ? 0 : _index;
      const calculateCoord = (_first, _size, _cpos) => _first * _size + _cpos;
      const scrollTo = (left = 0, top = 0) => this.scrollTo({
        left,
        top,
        behavior
      });
      let newFirst = this.both ? {
        rows: 0,
        cols: 0
      } : 0;
      let isRangeChanged = false, isScrollChanged = false;
      if (this.both) {
        newFirst = {
          rows: calculateFirst(index[0], numToleratedItems[0]),
          cols: calculateFirst(index[1], numToleratedItems[1])
        };
        scrollTo(calculateCoord(newFirst.cols, itemSize[1], contentPos.left), calculateCoord(newFirst.rows, itemSize[0], contentPos.top));
        isScrollChanged = this.lastScrollPos.top !== scrollTop || this.lastScrollPos.left !== scrollLeft;
        isRangeChanged = newFirst.rows !== first.rows || newFirst.cols !== first.cols;
      } else {
        newFirst = calculateFirst(index, numToleratedItems);
        this.horizontal ? scrollTo(calculateCoord(newFirst, itemSize, contentPos.left), scrollTop) : scrollTo(scrollLeft, calculateCoord(newFirst, itemSize, contentPos.top));
        isScrollChanged = this.lastScrollPos !== (this.horizontal ? scrollLeft : scrollTop);
        isRangeChanged = newFirst !== first;
      }
      this.isRangeChanged = isRangeChanged;
      isScrollChanged && (this.first = newFirst);
    }
  }
  scrollInView(index, to, behavior = "auto") {
    if (to) {
      const {
        first,
        viewport
      } = this.getRenderedRange();
      const scrollTo = (left = 0, top = 0) => this.scrollTo({
        left,
        top,
        behavior
      });
      const isToStart = to === "to-start";
      const isToEnd = to === "to-end";
      if (isToStart) {
        if (this.both) {
          if (viewport.first.rows - first.rows > index[0]) {
            scrollTo(viewport.first.cols * this._itemSize[1], (viewport.first.rows - 1) * this._itemSize[0]);
          } else if (viewport.first.cols - first.cols > index[1]) {
            scrollTo((viewport.first.cols - 1) * this._itemSize[1], viewport.first.rows * this._itemSize[0]);
          }
        } else {
          if (viewport.first - first > index) {
            const pos = (viewport.first - 1) * this._itemSize;
            this.horizontal ? scrollTo(pos, 0) : scrollTo(0, pos);
          }
        }
      } else if (isToEnd) {
        if (this.both) {
          if (viewport.last.rows - first.rows <= index[0] + 1) {
            scrollTo(viewport.first.cols * this._itemSize[1], (viewport.first.rows + 1) * this._itemSize[0]);
          } else if (viewport.last.cols - first.cols <= index[1] + 1) {
            scrollTo((viewport.first.cols + 1) * this._itemSize[1], viewport.first.rows * this._itemSize[0]);
          }
        } else {
          if (viewport.last - first <= index + 1) {
            const pos = (viewport.first + 1) * this._itemSize;
            this.horizontal ? scrollTo(pos, 0) : scrollTo(0, pos);
          }
        }
      }
    } else {
      this.scrollToIndex(index, behavior);
    }
  }
  getRenderedRange() {
    const calculateFirstInViewport = (_pos, _size) => _size || _pos ? Math.floor(_pos / (_size || _pos)) : 0;
    let firstInViewport = this.first;
    let lastInViewport = 0;
    if (this.elementViewChild?.nativeElement) {
      const {
        scrollTop,
        scrollLeft
      } = this.elementViewChild.nativeElement;
      if (this.both) {
        firstInViewport = {
          rows: calculateFirstInViewport(scrollTop, this._itemSize[0]),
          cols: calculateFirstInViewport(scrollLeft, this._itemSize[1])
        };
        lastInViewport = {
          rows: firstInViewport.rows + this.numItemsInViewport.rows,
          cols: firstInViewport.cols + this.numItemsInViewport.cols
        };
      } else {
        const scrollPos = this.horizontal ? scrollLeft : scrollTop;
        firstInViewport = calculateFirstInViewport(scrollPos, this._itemSize);
        lastInViewport = firstInViewport + this.numItemsInViewport;
      }
    }
    return {
      first: this.first,
      last: this.last,
      viewport: {
        first: firstInViewport,
        last: lastInViewport
      }
    };
  }
  calculateNumItems() {
    const contentPos = this.getContentPosition();
    const contentWidth = (this.elementViewChild?.nativeElement ? this.elementViewChild.nativeElement.offsetWidth - contentPos.left : 0) || 0;
    const contentHeight = (this.elementViewChild?.nativeElement ? this.elementViewChild.nativeElement.offsetHeight - contentPos.top : 0) || 0;
    const calculateNumItemsInViewport = (_contentSize, _itemSize) => _itemSize || _contentSize ? Math.ceil(_contentSize / (_itemSize || _contentSize)) : 0;
    const calculateNumToleratedItems = (_numItems) => Math.ceil(_numItems / 2);
    const numItemsInViewport = this.both ? {
      rows: calculateNumItemsInViewport(contentHeight, this._itemSize[0]),
      cols: calculateNumItemsInViewport(contentWidth, this._itemSize[1])
    } : calculateNumItemsInViewport(this.horizontal ? contentWidth : contentHeight, this._itemSize);
    const numToleratedItems = this.d_numToleratedItems || (this.both ? [calculateNumToleratedItems(numItemsInViewport.rows), calculateNumToleratedItems(numItemsInViewport.cols)] : calculateNumToleratedItems(numItemsInViewport));
    return {
      numItemsInViewport,
      numToleratedItems
    };
  }
  calculateOptions() {
    const {
      numItemsInViewport,
      numToleratedItems
    } = this.calculateNumItems();
    const calculateLast = (_first, _num, _numT, _isCols = false) => this.getLast(_first + _num + (_first < _numT ? 2 : 3) * _numT, _isCols);
    const first = this.first;
    const last = this.both ? {
      rows: calculateLast(this.first.rows, numItemsInViewport.rows, numToleratedItems[0]),
      cols: calculateLast(this.first.cols, numItemsInViewport.cols, numToleratedItems[1], true)
    } : calculateLast(this.first, numItemsInViewport, numToleratedItems);
    this.last = last;
    this.numItemsInViewport = numItemsInViewport;
    this.d_numToleratedItems = numToleratedItems;
    if (this.showLoader) {
      this.loaderArr = this.both ? Array.from({
        length: numItemsInViewport.rows
      }).map(() => Array.from({
        length: numItemsInViewport.cols
      })) : Array.from({
        length: numItemsInViewport
      });
    }
    if (this._lazy) {
      Promise.resolve().then(() => {
        this.lazyLoadState = {
          first: this._step ? this.both ? {
            rows: 0,
            cols: first.cols
          } : 0 : first,
          last: Math.min(this._step ? this._step : this.last, this.items.length)
        };
        this.handleEvents("onLazyLoad", this.lazyLoadState);
      });
    }
  }
  calculateAutoSize() {
    if (this._autoSize && !this.d_loading) {
      Promise.resolve().then(() => {
        if (this.contentEl) {
          this.contentEl.style.minHeight = this.contentEl.style.minWidth = "auto";
          this.contentEl.style.position = "relative";
          this.elementViewChild.nativeElement.style.contain = "none";
          const [contentWidth, contentHeight] = [getWidth(this.contentEl), getHeight(this.contentEl)];
          contentWidth !== this.defaultContentWidth && (this.elementViewChild.nativeElement.style.width = "");
          contentHeight !== this.defaultContentHeight && (this.elementViewChild.nativeElement.style.height = "");
          const [width, height] = [getWidth(this.elementViewChild.nativeElement), getHeight(this.elementViewChild.nativeElement)];
          (this.both || this.horizontal) && (this.elementViewChild.nativeElement.style.width = width < this.defaultWidth ? width + "px" : this._scrollWidth || this.defaultWidth + "px");
          (this.both || this.vertical) && (this.elementViewChild.nativeElement.style.height = height < this.defaultHeight ? height + "px" : this._scrollHeight || this.defaultHeight + "px");
          this.contentEl.style.minHeight = this.contentEl.style.minWidth = "";
          this.contentEl.style.position = "";
          this.elementViewChild.nativeElement.style.contain = "";
        }
      });
    }
  }
  getLast(last = 0, isCols = false) {
    return this._items ? Math.min(isCols ? (this._columns || this._items[0]).length : this._items.length, last) : 0;
  }
  getContentPosition() {
    if (this.contentEl) {
      const style2 = getComputedStyle(this.contentEl);
      const left = parseFloat(style2.paddingLeft) + Math.max(parseFloat(style2.left) || 0, 0);
      const right = parseFloat(style2.paddingRight) + Math.max(parseFloat(style2.right) || 0, 0);
      const top = parseFloat(style2.paddingTop) + Math.max(parseFloat(style2.top) || 0, 0);
      const bottom = parseFloat(style2.paddingBottom) + Math.max(parseFloat(style2.bottom) || 0, 0);
      return {
        left,
        right,
        top,
        bottom,
        x: left + right,
        y: top + bottom
      };
    }
    return {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      x: 0,
      y: 0
    };
  }
  setSize() {
    if (this.elementViewChild?.nativeElement) {
      const parentElement = this.elementViewChild.nativeElement.parentElement.parentElement;
      const width = this._scrollWidth || `${this.elementViewChild.nativeElement.offsetWidth || parentElement.offsetWidth}px`;
      const height = this._scrollHeight || `${this.elementViewChild.nativeElement.offsetHeight || parentElement.offsetHeight}px`;
      const setProp = (_name, _value) => this.elementViewChild.nativeElement.style[_name] = _value;
      if (this.both || this.horizontal) {
        setProp("height", height);
        setProp("width", width);
      } else {
        setProp("height", height);
      }
    }
  }
  setSpacerSize() {
    if (this._items) {
      const contentPos = this.getContentPosition();
      const setProp = (_name, _value, _size, _cpos = 0) => this.spacerStyle = __spreadValues(__spreadValues({}, this.spacerStyle), {
        [`${_name}`]: (_value || []).length * _size + _cpos + "px"
      });
      if (this.both) {
        setProp("height", this._items, this._itemSize[0], contentPos.y);
        setProp("width", this._columns || this._items[1], this._itemSize[1], contentPos.x);
      } else {
        this.horizontal ? setProp("width", this._columns || this._items, this._itemSize, contentPos.x) : setProp("height", this._items, this._itemSize, contentPos.y);
      }
    }
  }
  setContentPosition(pos) {
    if (this.contentEl && !this._appendOnly) {
      const first = pos ? pos.first : this.first;
      const calculateTranslateVal = (_first, _size) => _first * _size;
      const setTransform = (_x = 0, _y = 0) => this.contentStyle = __spreadValues(__spreadValues({}, this.contentStyle), {
        transform: `translate3d(${_x}px, ${_y}px, 0)`
      });
      if (this.both) {
        setTransform(calculateTranslateVal(first.cols, this._itemSize[1]), calculateTranslateVal(first.rows, this._itemSize[0]));
      } else {
        const translateVal = calculateTranslateVal(first, this._itemSize);
        this.horizontal ? setTransform(translateVal, 0) : setTransform(0, translateVal);
      }
    }
  }
  onScrollPositionChange(event) {
    const target = event.target;
    const contentPos = this.getContentPosition();
    const calculateScrollPos = (_pos, _cpos) => _pos ? _pos > _cpos ? _pos - _cpos : _pos : 0;
    const calculateCurrentIndex = (_pos, _size) => _size || _pos ? Math.floor(_pos / (_size || _pos)) : 0;
    const calculateTriggerIndex = (_currentIndex, _first, _last, _num, _numT, _isScrollDownOrRight) => {
      return _currentIndex <= _numT ? _numT : _isScrollDownOrRight ? _last - _num - _numT : _first + _numT - 1;
    };
    const calculateFirst = (_currentIndex, _triggerIndex, _first, _last, _num, _numT, _isScrollDownOrRight) => {
      if (_currentIndex <= _numT) return 0;
      else return Math.max(0, _isScrollDownOrRight ? _currentIndex < _triggerIndex ? _first : _currentIndex - _numT : _currentIndex > _triggerIndex ? _first : _currentIndex - 2 * _numT);
    };
    const calculateLast = (_currentIndex, _first, _last, _num, _numT, _isCols = false) => {
      let lastValue = _first + _num + 2 * _numT;
      if (_currentIndex >= _numT) {
        lastValue += _numT + 1;
      }
      return this.getLast(lastValue, _isCols);
    };
    const scrollTop = calculateScrollPos(target.scrollTop, contentPos.top);
    const scrollLeft = calculateScrollPos(target.scrollLeft, contentPos.left);
    let newFirst = this.both ? {
      rows: 0,
      cols: 0
    } : 0;
    let newLast = this.last;
    let isRangeChanged = false;
    let newScrollPos = this.lastScrollPos;
    if (this.both) {
      const isScrollDown = this.lastScrollPos.top <= scrollTop;
      const isScrollRight = this.lastScrollPos.left <= scrollLeft;
      if (!this._appendOnly || this._appendOnly && (isScrollDown || isScrollRight)) {
        const currentIndex = {
          rows: calculateCurrentIndex(scrollTop, this._itemSize[0]),
          cols: calculateCurrentIndex(scrollLeft, this._itemSize[1])
        };
        const triggerIndex = {
          rows: calculateTriggerIndex(currentIndex.rows, this.first.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0], isScrollDown),
          cols: calculateTriggerIndex(currentIndex.cols, this.first.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], isScrollRight)
        };
        newFirst = {
          rows: calculateFirst(currentIndex.rows, triggerIndex.rows, this.first.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0], isScrollDown),
          cols: calculateFirst(currentIndex.cols, triggerIndex.cols, this.first.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], isScrollRight)
        };
        newLast = {
          rows: calculateLast(currentIndex.rows, newFirst.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0]),
          cols: calculateLast(currentIndex.cols, newFirst.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], true)
        };
        isRangeChanged = newFirst.rows !== this.first.rows || newLast.rows !== this.last.rows || newFirst.cols !== this.first.cols || newLast.cols !== this.last.cols || this.isRangeChanged;
        newScrollPos = {
          top: scrollTop,
          left: scrollLeft
        };
      }
    } else {
      const scrollPos = this.horizontal ? scrollLeft : scrollTop;
      const isScrollDownOrRight = this.lastScrollPos <= scrollPos;
      if (!this._appendOnly || this._appendOnly && isScrollDownOrRight) {
        const currentIndex = calculateCurrentIndex(scrollPos, this._itemSize);
        const triggerIndex = calculateTriggerIndex(currentIndex, this.first, this.last, this.numItemsInViewport, this.d_numToleratedItems, isScrollDownOrRight);
        newFirst = calculateFirst(currentIndex, triggerIndex, this.first, this.last, this.numItemsInViewport, this.d_numToleratedItems, isScrollDownOrRight);
        newLast = calculateLast(currentIndex, newFirst, this.last, this.numItemsInViewport, this.d_numToleratedItems);
        isRangeChanged = newFirst !== this.first || newLast !== this.last || this.isRangeChanged;
        newScrollPos = scrollPos;
      }
    }
    return {
      first: newFirst,
      last: newLast,
      isRangeChanged,
      scrollPos: newScrollPos
    };
  }
  onScrollChange(event) {
    const {
      first,
      last,
      isRangeChanged,
      scrollPos
    } = this.onScrollPositionChange(event);
    if (isRangeChanged) {
      const newState = {
        first,
        last
      };
      this.setContentPosition(newState);
      this.first = first;
      this.last = last;
      this.lastScrollPos = scrollPos;
      this.handleEvents("onScrollIndexChange", newState);
      if (this._lazy && this.isPageChanged(first)) {
        const lazyLoadState = {
          first: this._step ? Math.min(this.getPageByFirst(first) * this._step, this.items.length - this._step) : first,
          last: Math.min(this._step ? (this.getPageByFirst(first) + 1) * this._step : last, this.items.length)
        };
        const isLazyStateChanged = this.lazyLoadState.first !== lazyLoadState.first || this.lazyLoadState.last !== lazyLoadState.last;
        isLazyStateChanged && this.handleEvents("onLazyLoad", lazyLoadState);
        this.lazyLoadState = lazyLoadState;
      }
    }
  }
  onContainerScroll(event) {
    this.handleEvents("onScroll", {
      originalEvent: event
    });
    if (this._delay && this.isPageChanged()) {
      if (this.scrollTimeout) {
        clearTimeout(this.scrollTimeout);
      }
      if (!this.d_loading && this.showLoader) {
        const {
          isRangeChanged
        } = this.onScrollPositionChange(event);
        const changed = isRangeChanged || (this._step ? this.isPageChanged() : false);
        if (changed) {
          this.d_loading = true;
          this.cd.detectChanges();
        }
      }
      this.scrollTimeout = setTimeout(() => {
        this.onScrollChange(event);
        if (this.d_loading && this.showLoader && (!this._lazy || this._loading === void 0)) {
          this.d_loading = false;
          this.page = this.getPageByFirst();
        }
        this.cd.detectChanges();
      }, this._delay);
    } else {
      !this.d_loading && this.onScrollChange(event);
    }
  }
  bindResizeListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.windowResizeListener) {
        this.zone.runOutsideAngular(() => {
          const window = this.document.defaultView;
          const event = isTouchDevice() ? "orientationchange" : "resize";
          this.windowResizeListener = this.renderer.listen(window, event, this.onWindowResize.bind(this));
        });
      }
    }
  }
  unbindResizeListener() {
    if (this.windowResizeListener) {
      this.windowResizeListener();
      this.windowResizeListener = null;
    }
  }
  onWindowResize() {
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
    }
    this.resizeTimeout = setTimeout(() => {
      if (isVisible(this.elementViewChild?.nativeElement)) {
        const [width, height] = [getWidth(this.elementViewChild?.nativeElement), getHeight(this.elementViewChild?.nativeElement)];
        const [isDiffWidth, isDiffHeight] = [width !== this.defaultWidth, height !== this.defaultHeight];
        const reinit = this.both ? isDiffWidth || isDiffHeight : this.horizontal ? isDiffWidth : this.vertical ? isDiffHeight : false;
        reinit && this.zone.run(() => {
          this.d_numToleratedItems = this._numToleratedItems;
          this.defaultWidth = width;
          this.defaultHeight = height;
          this.defaultContentWidth = getWidth(this.contentEl);
          this.defaultContentHeight = getHeight(this.contentEl);
          this.init();
        });
      }
    }, this._resizeDelay);
  }
  handleEvents(name, params) {
    return this.options && this.options[name] ? this.options[name](params) : this[name].emit(params);
  }
  getContentOptions() {
    return {
      contentStyleClass: `p-virtualscroller-content ${this.d_loading ? "p-virtualscroller-loading" : ""}`,
      items: this.loadedItems,
      getItemOptions: (index) => this.getOptions(index),
      loading: this.d_loading,
      getLoaderOptions: (index, options) => this.getLoaderOptions(index, options),
      itemSize: this._itemSize,
      rows: this.loadedRows,
      columns: this.loadedColumns,
      spacerStyle: this.spacerStyle,
      contentStyle: this.contentStyle,
      vertical: this.vertical,
      horizontal: this.horizontal,
      both: this.both
    };
  }
  getOptions(renderedIndex) {
    const count = (this._items || []).length;
    const index = this.both ? this.first.rows + renderedIndex : this.first + renderedIndex;
    return {
      index,
      count,
      first: index === 0,
      last: index === count - 1,
      even: index % 2 === 0,
      odd: index % 2 !== 0
    };
  }
  getLoaderOptions(index, extOptions) {
    const count = this.loaderArr.length;
    return __spreadValues({
      index,
      count,
      first: index === 0,
      last: index === count - 1,
      even: index % 2 === 0,
      odd: index % 2 !== 0
    }, extOptions);
  }
  static \u0275fac = function Scroller_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Scroller)(\u0275\u0275directiveInject(NgZone));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Scroller,
    selectors: [["p-scroller"], ["p-virtualscroller"], ["p-virtual-scroller"], ["p-virtualScroller"]],
    contentQueries: function Scroller_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c07, 4);
        \u0275\u0275contentQuery(dirIndex, _c17, 4);
        \u0275\u0275contentQuery(dirIndex, _c23, 4);
        \u0275\u0275contentQuery(dirIndex, _c33, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.itemTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.loaderTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.loaderIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Scroller_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c43, 5);
        \u0275\u0275viewQuery(_c07, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.elementViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentViewChild = _t.first);
      }
    },
    inputs: {
      id: "id",
      style: "style",
      styleClass: "styleClass",
      tabindex: "tabindex",
      items: "items",
      itemSize: "itemSize",
      scrollHeight: "scrollHeight",
      scrollWidth: "scrollWidth",
      orientation: "orientation",
      step: "step",
      delay: "delay",
      resizeDelay: "resizeDelay",
      appendOnly: "appendOnly",
      inline: "inline",
      lazy: "lazy",
      disabled: "disabled",
      loaderDisabled: "loaderDisabled",
      columns: "columns",
      showSpacer: "showSpacer",
      showLoader: "showLoader",
      numToleratedItems: "numToleratedItems",
      loading: "loading",
      autoSize: "autoSize",
      trackBy: "trackBy",
      options: "options"
    },
    outputs: {
      onLazyLoad: "onLazyLoad",
      onScroll: "onScroll",
      onScrollIndexChange: "onScrollIndexChange"
    },
    features: [\u0275\u0275ProvidersFeature([ScrollerStyle]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c53,
    decls: 3,
    vars: 2,
    consts: [["disabledContainer", ""], ["element", ""], ["buildInContent", ""], ["content", ""], ["buildInLoader", ""], ["buildInLoaderIcon", ""], [4, "ngIf", "ngIfElse"], [3, "scroll", "ngStyle", "ngClass"], ["class", "p-virtualscroller-spacer", 3, "ngStyle", 4, "ngIf"], ["class", "p-virtualscroller-loader", 3, "ngClass", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-virtualscroller-content", 3, "ngClass", "ngStyle"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "p-virtualscroller-spacer", 3, "ngStyle"], [1, "p-virtualscroller-loader", 3, "ngClass"], [4, "ngFor", "ngForOf"], [3, "styleClass"], [4, "ngIf"]],
    template: function Scroller_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275template(0, Scroller_ng_container_0_Template, 8, 16, "ng-container", 6)(1, Scroller_ng_template_1_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const disabledContainer_r9 = \u0275\u0275reference(2);
        \u0275\u0275property("ngIf", !ctx._disabled)("ngIfElse", disabledContainer_r9);
      }
    },
    dependencies: [CommonModule, NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, SpinnerIcon, SharedModule],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Scroller, [{
    type: Component,
    args: [{
      selector: "p-scroller, p-virtualscroller, p-virtual-scroller, p-virtualScroller",
      imports: [CommonModule, SpinnerIcon, SharedModule],
      standalone: true,
      template: `
        <ng-container *ngIf="!_disabled; else disabledContainer">
            <div
                #element
                [attr.id]="_id"
                [attr.tabindex]="tabindex"
                [ngStyle]="_style"
                [class]="_styleClass"
                [ngClass]="{
                    'p-virtualscroller': true,
                    'p-virtualscroller-inline': inline,
                    'p-virtualscroller-both p-both-scroll': both,
                    'p-virtualscroller-horizontal p-horizontal-scroll': horizontal
                }"
                (scroll)="onContainerScroll($event)"
                [attr.data-pc-name]="'scroller'"
                [attr.data-pc-section]="'root'"
            >
                <ng-container *ngIf="contentTemplate || _contentTemplate; else buildInContent">
                    <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate; context: { $implicit: loadedItems, options: getContentOptions() }"></ng-container>
                </ng-container>
                <ng-template #buildInContent>
                    <div #content class="p-virtualscroller-content" [ngClass]="{ 'p-virtualscroller-loading ': d_loading }" [ngStyle]="contentStyle" [attr.data-pc-section]="'content'">
                        <ng-container *ngFor="let item of loadedItems; let index = index; trackBy: _trackBy">
                            <ng-container *ngTemplateOutlet="itemTemplate || _itemTemplate; context: { $implicit: item, options: getOptions(index) }"></ng-container>
                        </ng-container>
                    </div>
                </ng-template>
                <div *ngIf="_showSpacer" class="p-virtualscroller-spacer" [ngStyle]="spacerStyle" [attr.data-pc-section]="'spacer'"></div>
                <div *ngIf="!loaderDisabled && _showLoader && d_loading" class="p-virtualscroller-loader" [ngClass]="{ 'p-virtualscroller-loader-mask': !loaderTemplate }" [attr.data-pc-section]="'loader'">
                    <ng-container *ngIf="loaderTemplate || _loaderTemplate; else buildInLoader">
                        <ng-container *ngFor="let item of loaderArr; let index = index">
                            <ng-container
                                *ngTemplateOutlet="
                                    loaderTemplate || _loaderTemplate;
                                    context: {
                                        options: getLoaderOptions(index, both && { numCols: numItemsInViewport.cols })
                                    }
                                "
                            ></ng-container>
                        </ng-container>
                    </ng-container>
                    <ng-template #buildInLoader>
                        <ng-container *ngIf="loaderIconTemplate || _loaderIconTemplate; else buildInLoaderIcon">
                            <ng-container *ngTemplateOutlet="loaderIconTemplate || _loaderIconTemplate; context: { options: { styleClass: 'p-virtualscroller-loading-icon' } }"></ng-container>
                        </ng-container>
                        <ng-template #buildInLoaderIcon>
                            <SpinnerIcon [styleClass]="'p-virtualscroller-loading-icon pi-spin'" [attr.data-pc-section]="'loadingIcon'" />
                        </ng-template>
                    </ng-template>
                </div>
            </div>
        </ng-container>
        <ng-template #disabledContainer>
            <ng-content></ng-content>
            <ng-container *ngIf="contentTemplate || _contentTemplate">
                <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate; context: { $implicit: items, options: { rows: _items, columns: loadedColumns } }"></ng-container>
            </ng-container>
        </ng-template>
    `,
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation.None,
      providers: [ScrollerStyle]
    }]
  }], () => [{
    type: NgZone
  }], {
    id: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    tabindex: [{
      type: Input
    }],
    items: [{
      type: Input
    }],
    itemSize: [{
      type: Input
    }],
    scrollHeight: [{
      type: Input
    }],
    scrollWidth: [{
      type: Input
    }],
    orientation: [{
      type: Input
    }],
    step: [{
      type: Input
    }],
    delay: [{
      type: Input
    }],
    resizeDelay: [{
      type: Input
    }],
    appendOnly: [{
      type: Input
    }],
    inline: [{
      type: Input
    }],
    lazy: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    loaderDisabled: [{
      type: Input
    }],
    columns: [{
      type: Input
    }],
    showSpacer: [{
      type: Input
    }],
    showLoader: [{
      type: Input
    }],
    numToleratedItems: [{
      type: Input
    }],
    loading: [{
      type: Input
    }],
    autoSize: [{
      type: Input
    }],
    trackBy: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    onLazyLoad: [{
      type: Output
    }],
    onScroll: [{
      type: Output
    }],
    onScrollIndexChange: [{
      type: Output
    }],
    elementViewChild: [{
      type: ViewChild,
      args: ["element"]
    }],
    contentViewChild: [{
      type: ViewChild,
      args: ["content"]
    }],
    contentTemplate: [{
      type: ContentChild,
      args: ["content", {
        descendants: false
      }]
    }],
    itemTemplate: [{
      type: ContentChild,
      args: ["item", {
        descendants: false
      }]
    }],
    loaderTemplate: [{
      type: ContentChild,
      args: ["loader", {
        descendants: false
      }]
    }],
    loaderIconTemplate: [{
      type: ContentChild,
      args: ["loadericon", {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Scroller, {
    className: "Scroller",
    filePath: "scroller.ts",
    lineNumber: 104
  });
})();
var ScrollerModule = class _ScrollerModule {
  static \u0275fac = function ScrollerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScrollerModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ScrollerModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Scroller, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollerModule, [{
    type: NgModule,
    args: [{
      imports: [Scroller, SharedModule],
      exports: [Scroller, SharedModule]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-multiselect.mjs
var theme7 = ({
  dt
}) => `
.p-multiselect {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
    background: ${dt("multiselect.background")};
    border: 1px solid ${dt("multiselect.border.color")};
    transition: background ${dt("multiselect.transition.duration")}, color ${dt("multiselect.transition.duration")}, border-color ${dt("multiselect.transition.duration")}, outline-color ${dt("multiselect.transition.duration")}, box-shadow ${dt("multiselect.transition.duration")};
    border-radius: ${dt("multiselect.border.radius")};
    outline-color: transparent;
    box-shadow: ${dt("multiselect.shadow")};
}

.p-multiselect.ng-invalid.ng-dirty {
    border-color: ${dt("multiselect.invalid.border.color")};
}

.p-multiselect:not(.p-disabled):hover {
    border-color: ${dt("multiselect.hover.border.color")};
}

.p-multiselect:not(.p-disabled).p-focus {
    border-color: ${dt("multiselect.focus.border.color")};
    box-shadow: ${dt("multiselect.focus.ring.shadow")};
    outline: ${dt("multiselect.focus.ring.width")} ${dt("multiselect.focus.ring.style")} ${dt("multiselect.focus.ring.color")};
    outline-offset: ${dt("multiselect.focus.ring.offset")};
}

.p-multiselect.p-variant-filled {
    background: ${dt("multiselect.filled.background")};
}

.p-multiselect.p-variant-filled:not(.p-disabled):hover {
    background: ${dt("multiselect.filled.hover.background")};
}

.p-multiselect.p-variant-filled.p-focus {
    background: ${dt("multiselect.filled.focus.background")};
}

.p-multiselect.p-disabled {
    opacity: 1;
    background: ${dt("multiselect.disabled.background")};
}

.p-multiselect-dropdown {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: transparent;
    color: ${dt("multiselect.dropdown.color")};
    width: ${dt("multiselect.dropdown.width")};
    border-start-end-radius: ${dt("multiselect.border.radius")};
    border-end-end-radius: ${dt("multiselect.border.radius")};
}

.p-multiselect-label-container {
    overflow: hidden;
    flex: 1 1 auto;
    cursor: pointer;
}

.p-multiselect-label {
    display: flex;
    align-items-center;
    gap: calc(${dt("multiselect.padding.y")} / 2);
    white-space: nowrap;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: ${dt("multiselect.padding.y")} ${dt("multiselect.padding.x")};
    color: ${dt("multiselect.color")};
}

.p-multiselect-label.p-placeholder {
    color: ${dt("multiselect.placeholder.color")};
}

p-multiselect.ng-invalid.ng-dirty .p-multiselect-label.p-placeholder {
    color: ${dt("multiselect.invalid.placeholder.color")};
}

.p-multiselect.p-disabled .p-multiselect-label {
    color: ${dt("multiselect.disabled.color")};
}

.p-multiselect-label-empty {
    overflow: hidden;
    visibility: hidden;
}

.p-multiselect .p-multiselect-overlay {
    min-width: 100%;
}

.p-multiselect-overlay {
    background: ${dt("multiselect.overlay.background")};
    color: ${dt("multiselect.overlay.color")};
    border: 1px solid ${dt("multiselect.overlay.border.color")};
    border-radius: ${dt("multiselect.overlay.border.radius")};
    box-shadow: ${dt("multiselect.overlay.shadow")};
}

.p-multiselect-header {
    display: flex;
    align-items: center;
    padding: ${dt("multiselect.list.header.padding")};
}

.p-multiselect-header .p-checkbox {
    margin-inline-end: ${dt("multiselect.option.gap")};
}

.p-multiselect-filter-container {
    flex: 1 1 auto;
}

.p-multiselect-filter {
    width: 100%;
}

.p-multiselect-list-container {
    overflow: auto;
}

.p-multiselect-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    padding: ${dt("multiselect.list.padding")};
    display: flex;
    flex-direction: column;
    gap: ${dt("multiselect.list.gap")}
}

.p-multiselect-option {
    cursor: pointer;
    font-weight: normal;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    gap: ${dt("multiselect.option.gap")};
    padding: ${dt("multiselect.option.padding")};
    border: 0 none;
    color: ${dt("multiselect.option.color")};
    background: transparent;
    transition: background ${dt("multiselect.transition.duration")}, color ${dt("multiselect.transition.duration")}, border-color ${dt("multiselect.transition.duration")}, box-shadow ${dt("multiselect.transition.duration")}, outline-color ${dt("multiselect.transition.duration")};
    border-radius: ${dt("multiselect.option.border.radius")}
}

.p-multiselect-option:not(.p-multiselect-option-selected):not(.p-disabled).p-focus {
    background: ${dt("multiselect.option.focus.background")};
    color: ${dt("multiselect.option.focus.color")};
}

.p-multiselect-option.p-multiselect-option-selected {
    background: ${dt("multiselect.option.selected.background")};
    color: ${dt("multiselect.option.selected.color")};
}

.p-multiselect-option.p-multiselect-option-selected.p-focus {
    background: ${dt("multiselect.option.selected.focus.background")};
    color: ${dt("multiselect.option.selected.focus.color")};
}

.p-multiselect-option-group {
    cursor: auto;
    margin: 0;
    padding: ${dt("multiselect.option.group.padding")};
    background: ${dt("multiselect.option.group.background")};
    color: ${dt("multiselect.option.group.color")};
    font-weight: ${dt("multiselect.option.group.font.weight")};
}

.p-multiselect-empty-message {
    padding: ${dt("multiselect.empty.message.padding")};
}

.p-multiselect-label .p-chip {
    padding-top: calc(${dt("multiselect.padding.y")} / 2);
    padding-bottom: calc(${dt("multiselect.padding.y")} / 2);
    border-radius: ${dt("multiselect.chip.border.radius")};
}

.p-multiselect-label:has(.p-chip) {
    padding: calc(${dt("multiselect.padding.y")} / 2) calc(${dt("multiselect.padding.x")} / 2);
}

.p-multiselect-fluid {
    display: flex;
}

.p-multiselect-sm .p-multiselect-label {
    font-size: ${dt("multiselect.sm.font.size")};
    padding-block: ${dt("multiselect.sm.padding.y")};
    padding-inline: ${dt("multiselect.sm.padding.x")};
}

.p-multiselect-sm .p-multiselect-dropdown .p-icon {
    font-size: ${dt("multiselect.sm.font.size")};
    width: ${dt("multiselect.sm.font.size")};
    height: ${dt("multiselect.sm.font.size")};
}

.p-multiselect-lg .p-multiselect-label {
    font-size: ${dt("multiselect.lg.font.size")};
    padding-block: ${dt("multiselect.lg.padding.y")};
    padding-inline: ${dt("multiselect.lg.padding.x")};
}

.p-multiselect-lg .p-multiselect-dropdown .p-icon {
    font-size: ${dt("multiselect.lg.font.size")};
    width: ${dt("multiselect.lg.font.size")};
    height: ${dt("multiselect.lg.font.size")};
}

.p-multiselect-clear-icon {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: transparent;
    color: ${dt("multiselect.clear.icon.color")};
}`;
var inlineStyles2 = {
  root: ({
    props
  }) => ({
    position: props.appendTo === "self" ? "relative" : void 0
  })
};
var classes6 = {
  root: ({
    instance
  }) => ({
    "p-multiselect p-component p-inputwrapper": true,
    "p-multiselect-display-chip": instance.display === "chip",
    "p-disabled": instance.disabled,
    "p-invalid": instance.invalid,
    "p-variant-filled": instance.variant ? instance.variant === "filled" : instance.config.inputStyle === "filled",
    "p-focus": instance.focused,
    "p-inputwrapper-filled": instance.filled,
    "p-inputwrapper-focus": instance.focused || instance.overlayVisible,
    "p-multiselect-open": instance.overlayVisible,
    "p-multiselect-fluid": instance.hasFluid,
    "p-multiselect-sm p-inputfield-sm": instance.size === "small",
    "p-multiselect-lg p-inputfield-lg": instance.size === "large"
  }),
  labelContainer: "p-multiselect-label-container",
  label: ({
    instance
  }) => ({
    "p-multiselect-label": true,
    "p-placeholder": instance.label() === instance.placeholder(),
    "p-multiselect-label-empty": !instance.placeholder() && !instance.defaultLabel && (!instance.modelValue() || instance.modelValue().length === 0)
  }),
  chipItem: "p-multiselect-chip-item",
  pcChip: "p-multiselect-chip",
  chipIcon: "p-multiselect-chip-icon",
  dropdown: "p-multiselect-dropdown",
  loadingIcon: "p-multiselect-loading-icon",
  dropdownIcon: "p-multiselect-dropdown-icon",
  overlay: "p-multiselect-overlay p-component",
  header: "p-multiselect-header",
  pcFilterContainer: "p-multiselect-filter-container",
  pcFilter: "p-multiselect-filter",
  listContainer: "p-multiselect-list-container",
  list: "p-multiselect-list",
  optionGroup: "p-multiselect-option-group",
  option: ({
    instance,
    option,
    index,
    getItemOptions
  }) => ({
    "p-multiselect-option": true,
    "p-multiselect-option-selected": instance.isSelected(option) && instance.highlightOnSelect,
    "p-focus": instance.focusedOptionIndex === instance.getOptionIndex(index, getItemOptions),
    "p-disabled": instance.isOptionDisabled(option)
  }),
  emptyMessage: "p-multiselect-empty-message"
};
var MultiSelectStyle = class _MultiSelectStyle extends BaseStyle {
  name = "multiselect";
  theme = theme7;
  classes = classes6;
  inlineStyles = inlineStyles2;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MultiSelectStyle_BaseFactory;
    return function MultiSelectStyle_Factory(__ngFactoryType__) {
      return (\u0275MultiSelectStyle_BaseFactory || (\u0275MultiSelectStyle_BaseFactory = \u0275\u0275getInheritedFactory(_MultiSelectStyle)))(__ngFactoryType__ || _MultiSelectStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _MultiSelectStyle,
    factory: _MultiSelectStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MultiSelectStyle, [{
    type: Injectable
  }], null, null);
})();
var MultiSelectClasses;
(function(MultiSelectClasses2) {
  MultiSelectClasses2["root"] = "p-multiselect";
  MultiSelectClasses2["labelContainer"] = "p-multiselect-label-container";
  MultiSelectClasses2["label"] = "p-multiselect-label";
  MultiSelectClasses2["chipItem"] = "p-multiselect-chip-item";
  MultiSelectClasses2["pcChip"] = "p-multiselect-chip";
  MultiSelectClasses2["chipIcon"] = "p-multiselect-chip-icon";
  MultiSelectClasses2["dropdown"] = "p-multiselect-dropdown";
  MultiSelectClasses2["loadingIcon"] = "p-multiselect-loading-icon";
  MultiSelectClasses2["dropdownIcon"] = "p-multiselect-dropdown-icon";
  MultiSelectClasses2["overlay"] = "p-multiselect-overlay";
  MultiSelectClasses2["header"] = "p-multiselect-header";
  MultiSelectClasses2["pcFilterContainer"] = "p-multiselect-filter-container";
  MultiSelectClasses2["pcFilter"] = "p-multiselect-filter";
  MultiSelectClasses2["listContainer"] = "p-multiselect-list-container";
  MultiSelectClasses2["list"] = "p-multiselect-list";
  MultiSelectClasses2["optionGroup"] = "p-multiselect-option-group";
  MultiSelectClasses2["option"] = "p-multiselect-option";
  MultiSelectClasses2["emptyMessage"] = "p-multiselect-empty-message";
})(MultiSelectClasses || (MultiSelectClasses = {}));
var _c08 = (a0) => ({
  height: a0
});
var _c18 = (a0, a1) => ({
  "p-multiselect-option": true,
  "p-disabled": a0,
  "p-focus": a1
});
var _c24 = (a0) => ({
  $implicit: a0
});
var _c34 = (a0, a1) => ({
  checked: a0,
  class: a1
});
function MultiSelectItem_ng_container_2_ng_template_1_0_ng_template_0_Template(rf, ctx) {
}
function MultiSelectItem_ng_container_2_ng_template_1_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelectItem_ng_container_2_ng_template_1_0_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function MultiSelectItem_ng_container_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelectItem_ng_container_2_ng_template_1_0_Template, 1, 0, null, 4);
  }
  if (rf & 2) {
    const klass_r1 = ctx.class;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.itemCheckboxIconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c34, ctx_r1.selected, klass_r1));
  }
}
function MultiSelectItem_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelectItem_ng_container_2_ng_template_1_Template, 1, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
}
function MultiSelectItem_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_1_0 = ctx_r1.label) !== null && tmp_1_0 !== void 0 ? tmp_1_0 : "empty");
  }
}
function MultiSelectItem_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
var _c44 = ["item"];
var _c54 = ["group"];
var _c64 = ["loader"];
var _c74 = ["header"];
var _c83 = ["filter"];
var _c93 = ["footer"];
var _c103 = ["emptyfilter"];
var _c113 = ["empty"];
var _c123 = ["selecteditems"];
var _c133 = ["checkicon"];
var _c142 = ["loadingicon"];
var _c152 = ["filtericon"];
var _c162 = ["removetokenicon"];
var _c172 = ["chipicon"];
var _c182 = ["clearicon"];
var _c19 = ["dropdownicon"];
var _c20 = ["itemcheckboxicon"];
var _c21 = ["headercheckboxicon"];
var _c222 = ["overlay"];
var _c232 = ["filterInput"];
var _c242 = ["focusInput"];
var _c25 = ["items"];
var _c26 = ["scroller"];
var _c27 = ["lastHiddenFocusableEl"];
var _c28 = ["firstHiddenFocusableEl"];
var _c29 = ["headerCheckbox"];
var _c30 = [[["p-header"]], [["p-footer"]]];
var _c31 = ["p-header", "p-footer"];
var _c322 = () => ({
  class: "p-multiselect-chip-icon"
});
var _c332 = (a0, a1) => ({
  $implicit: a0,
  removeChip: a1
});
var _c342 = (a0) => ({
  options: a0
});
var _c35 = (a0, a1, a2) => ({
  checked: a0,
  partialSelected: a1,
  class: a2
});
var _c36 = (a0, a1) => ({
  $implicit: a0,
  options: a1
});
var _c37 = () => ({});
function MultiSelect_ng_container_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.label() || "empty");
  }
}
function MultiSelect_ng_container_5_ng_container_2_div_1_ng_container_3_ng_template_1_ng_container_0_span_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MultiSelect_ng_container_5_ng_container_2_div_1_ng_container_3_ng_template_1_ng_container_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275listener("click", function MultiSelect_ng_container_5_ng_container_2_div_1_ng_container_3_ng_template_1_ng_container_0_span_1_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const item_r4 = \u0275\u0275nextContext(4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeOption(item_r4, $event));
    });
    \u0275\u0275template(1, MultiSelect_ng_container_5_ng_container_2_div_1_ng_container_3_ng_template_1_ng_container_0_span_1_ng_container_1_Template, 1, 0, "ng-container", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275attribute("data-pc-section", "clearicon")("aria-hidden", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.chipIconTemplate || ctx_r1._chipIconTemplate || ctx_r1.removeTokenIconTemplate || ctx_r1._removeTokenIconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction0(4, _c322));
  }
}
function MultiSelect_ng_container_5_ng_container_2_div_1_ng_container_3_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelect_ng_container_5_ng_container_2_div_1_ng_container_3_ng_template_1_ng_container_0_span_1_Template, 2, 5, "span", 27);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.chipIconTemplate || ctx_r1._chipIconTemplate || ctx_r1.removeTokenIconTemplate || ctx_r1._removeTokenIconTemplate);
  }
}
function MultiSelect_ng_container_5_ng_container_2_div_1_ng_container_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_container_5_ng_container_2_div_1_ng_container_3_ng_template_1_ng_container_0_Template, 2, 1, "ng-container", 20);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("ngIf", !ctx_r1.disabled);
  }
}
function MultiSelect_ng_container_5_ng_container_2_div_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelect_ng_container_5_ng_container_2_div_1_ng_container_3_ng_template_1_Template, 1, 1, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
}
function MultiSelect_ng_container_5_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25, 4)(2, "p-chip", 26);
    \u0275\u0275listener("onRemove", function MultiSelect_ng_container_5_ng_container_2_div_1_Template_p_chip_onRemove_2_listener($event) {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeOption(item_r4, $event));
    });
    \u0275\u0275template(3, MultiSelect_ng_container_5_ng_container_2_div_1_ng_container_3_Template, 3, 0, "ng-container", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("label", ctx_r1.getLabelByValue(item_r4))("removable", true)("removeIcon", ctx_r1.chipIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.chipIconTemplate || ctx_r1._chipIconTemplate || ctx_r1.removeTokenIconTemplate || ctx_r1._removeTokenIconTemplate);
  }
}
function MultiSelect_ng_container_5_ng_container_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.placeholder() || ctx_r1.defaultLabel || "empty");
  }
}
function MultiSelect_ng_container_5_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelect_ng_container_5_ng_container_2_div_1_Template, 4, 4, "div", 24)(2, MultiSelect_ng_container_5_ng_container_2_ng_container_2_Template, 2, 1, "ng-container", 20);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.chipSelectedItems());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.modelValue() || ctx_r1.modelValue().length === 0);
  }
}
function MultiSelect_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelect_ng_container_5_ng_container_1_Template, 2, 1, "ng-container", 20)(2, MultiSelect_ng_container_5_ng_container_2_Template, 3, 2, "ng-container", 20);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.display === "comma");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.display === "chip");
  }
}
function MultiSelect_ng_container_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MultiSelect_ng_container_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.placeholder() || ctx_r1.defaultLabel || "empty");
  }
}
function MultiSelect_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelect_ng_container_6_ng_container_1_Template, 1, 0, "ng-container", 29)(2, MultiSelect_ng_container_6_ng_container_2_Template, 2, 1, "ng-container", 20);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.selectedItemsTemplate || ctx_r1._selectedItemsTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(3, _c332, ctx_r1.selectedOptions, ctx_r1.removeOption.bind(ctx_r1)));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.modelValue() || ctx_r1.modelValue().length === 0);
  }
}
function MultiSelect_ng_container_7_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "TimesIcon", 31);
    \u0275\u0275listener("click", function MultiSelect_ng_container_7_TimesIcon_1_Template_TimesIcon_click_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clear($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275attribute("data-pc-section", "clearicon")("aria-hidden", true);
  }
}
function MultiSelect_ng_container_7_span_2_1_ng_template_0_Template(rf, ctx) {
}
function MultiSelect_ng_container_7_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_container_7_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function MultiSelect_ng_container_7_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275listener("click", function MultiSelect_ng_container_7_span_2_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clear($event));
    });
    \u0275\u0275template(1, MultiSelect_ng_container_7_span_2_1_Template, 1, 0, null, 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("data-pc-section", "clearicon")("aria-hidden", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.clearIconTemplate || ctx_r1._clearIconTemplate);
  }
}
function MultiSelect_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelect_ng_container_7_TimesIcon_1_Template, 1, 2, "TimesIcon", 30)(2, MultiSelect_ng_container_7_span_2_Template, 2, 3, "span", 30);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.clearIconTemplate && !ctx_r1._clearIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.clearIconTemplate || ctx_r1._clearIconTemplate);
  }
}
function MultiSelect_ng_container_9_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MultiSelect_ng_container_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelect_ng_container_9_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 32);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.loadingIconTemplate || ctx_r1._loadingIconTemplate);
  }
}
function MultiSelect_ng_container_9_ng_container_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 35);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", "p-multiselect-loading-icon pi-spin " + ctx_r1.loadingIcon);
  }
}
function MultiSelect_ng_container_9_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 36);
  }
  if (rf & 2) {
    \u0275\u0275classMap("p-multiselect-loading-icon pi pi-spinner pi-spin");
  }
}
function MultiSelect_ng_container_9_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelect_ng_container_9_ng_container_2_span_1_Template, 1, 1, "span", 33)(2, MultiSelect_ng_container_9_ng_container_2_span_2_Template, 1, 2, "span", 34);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loadingIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingIcon);
  }
}
function MultiSelect_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelect_ng_container_9_ng_container_1_Template, 2, 1, "ng-container", 20)(2, MultiSelect_ng_container_9_ng_container_2_Template, 3, 2, "ng-container", 20);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loadingIconTemplate || ctx_r1._loadingIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingIconTemplate && !ctx_r1._loadingIconTemplate);
  }
}
function MultiSelect_ng_template_10_ng_container_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 40);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r1.dropdownIcon);
    \u0275\u0275attribute("data-pc-section", "triggericon")("aria-hidden", true);
  }
}
function MultiSelect_ng_template_10_ng_container_0_ChevronDownIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ChevronDownIcon", 41);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-multiselect-dropdown-icon");
    \u0275\u0275attribute("data-pc-section", "triggericon")("aria-hidden", true);
  }
}
function MultiSelect_ng_template_10_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelect_ng_template_10_ng_container_0_span_1_Template, 1, 3, "span", 38)(2, MultiSelect_ng_template_10_ng_container_0_ChevronDownIcon_2_Template, 1, 3, "ChevronDownIcon", 39);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.dropdownIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.dropdownIcon);
  }
}
function MultiSelect_ng_template_10_span_1_1_ng_template_0_Template(rf, ctx) {
}
function MultiSelect_ng_template_10_span_1_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_template_10_span_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function MultiSelect_ng_template_10_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275template(1, MultiSelect_ng_template_10_span_1_1_Template, 1, 0, null, 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("data-pc-section", "triggericon")("aria-hidden", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.dropdownIconTemplate || ctx_r1._dropdownIconTemplate);
  }
}
function MultiSelect_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_template_10_ng_container_0_Template, 3, 2, "ng-container", 20)(1, MultiSelect_ng_template_10_span_1_Template, 2, 3, "span", 37);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", !ctx_r1.dropdownIconTemplate && !ctx_r1._dropdownIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.dropdownIconTemplate || ctx_r1._dropdownIconTemplate);
  }
}
function MultiSelect_ng_template_14_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MultiSelect_ng_template_14_div_4_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MultiSelect_ng_template_14_div_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelect_ng_template_14_div_4_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 29);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.filterTemplate || ctx_r1._filterTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c342, ctx_r1.filterOptions));
  }
}
function MultiSelect_ng_template_14_div_4_ng_template_3_p_checkbox_0_ng_template_2_CheckIcon_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "CheckIcon", 41);
  }
  if (rf & 2) {
    const klass_r10 = \u0275\u0275nextContext().class;
    \u0275\u0275property("styleClass", klass_r10);
    \u0275\u0275attribute("data-pc-section", "icon");
  }
}
function MultiSelect_ng_template_14_div_4_ng_template_3_p_checkbox_0_ng_template_2_1_ng_template_0_Template(rf, ctx) {
}
function MultiSelect_ng_template_14_div_4_ng_template_3_p_checkbox_0_ng_template_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_template_14_div_4_ng_template_3_p_checkbox_0_ng_template_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function MultiSelect_ng_template_14_div_4_ng_template_3_p_checkbox_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_template_14_div_4_ng_template_3_p_checkbox_0_ng_template_2_CheckIcon_0_Template, 1, 2, "CheckIcon", 39)(1, MultiSelect_ng_template_14_div_4_ng_template_3_p_checkbox_0_ng_template_2_1_Template, 1, 0, null, 29);
  }
  if (rf & 2) {
    const klass_r10 = ctx.class;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("ngIf", !ctx_r1.headerCheckboxIconTemplate && !ctx_r1._headerCheckboxIconTemplate && ctx_r1.allSelected());
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.headerCheckboxIconTemplate || ctx_r1._headerCheckboxIconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction3(3, _c35, ctx_r1.allSelected(), ctx_r1.partialSelected(), klass_r10));
  }
}
function MultiSelect_ng_template_14_div_4_ng_template_3_p_checkbox_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-checkbox", 51, 10);
    \u0275\u0275listener("onChange", function MultiSelect_ng_template_14_div_4_ng_template_3_p_checkbox_0_Template_p_checkbox_onChange_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onToggleAll($event));
    });
    \u0275\u0275template(2, MultiSelect_ng_template_14_div_4_ng_template_3_p_checkbox_0_ng_template_2_Template, 2, 7, "ng-template", null, 11, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngModel", ctx_r1.allSelected())("binary", true)("variant", ctx_r1.variant)("disabled", ctx_r1.disabled);
  }
}
function MultiSelect_ng_template_14_div_4_ng_template_3_div_1_SearchIcon_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "SearchIcon", 41);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-multiselect-filter-icon");
  }
}
function MultiSelect_ng_template_14_div_4_ng_template_3_div_1_span_6_1_ng_template_0_Template(rf, ctx) {
}
function MultiSelect_ng_template_14_div_4_ng_template_3_div_1_span_6_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_template_14_div_4_ng_template_3_div_1_span_6_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function MultiSelect_ng_template_14_div_4_ng_template_3_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 55);
    \u0275\u0275template(1, MultiSelect_ng_template_14_div_4_ng_template_3_div_1_span_6_1_Template, 1, 0, null, 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.filterIconTemplate || ctx_r1._filterIconTemplate);
  }
}
function MultiSelect_ng_template_14_div_4_ng_template_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52)(1, "p-iconfield")(2, "input", 53, 12);
    \u0275\u0275listener("input", function MultiSelect_ng_template_14_div_4_ng_template_3_div_1_Template_input_input_2_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onFilterInputChange($event));
    })("keydown", function MultiSelect_ng_template_14_div_4_ng_template_3_div_1_Template_input_keydown_2_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onFilterKeyDown($event));
    })("click", function MultiSelect_ng_template_14_div_4_ng_template_3_div_1_Template_input_click_2_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onInputClick($event));
    })("blur", function MultiSelect_ng_template_14_div_4_ng_template_3_div_1_Template_input_blur_2_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onFilterBlur($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p-inputicon");
    \u0275\u0275template(5, MultiSelect_ng_template_14_div_4_ng_template_3_div_1_SearchIcon_5_Template, 1, 1, "SearchIcon", 39)(6, MultiSelect_ng_template_14_div_4_ng_template_3_div_1_span_6_Template, 2, 1, "span", 54);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275property("variant", ctx_r1.variant)("value", ctx_r1._filterValue() || "")("disabled", ctx_r1.disabled);
    \u0275\u0275attribute("autocomplete", ctx_r1.autocomplete)("aria-owns", ctx_r1.id + "_list")("aria-activedescendant", ctx_r1.focusedOptionId)("placeholder", ctx_r1.filterPlaceHolder)("aria-label", ctx_r1.ariaFilterLabel);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r1.filterIconTemplate && !ctx_r1._filterIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filterIconTemplate || ctx_r1._filterIconTemplate);
  }
}
function MultiSelect_ng_template_14_div_4_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_template_14_div_4_ng_template_3_p_checkbox_0_Template, 4, 4, "p-checkbox", 49)(1, MultiSelect_ng_template_14_div_4_ng_template_3_div_1_Template, 7, 10, "div", 50);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", ctx_r1.showToggleAll && !ctx_r1.selectionLimit);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filter);
  }
}
function MultiSelect_ng_template_14_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275projection(1);
    \u0275\u0275template(2, MultiSelect_ng_template_14_div_4_ng_container_2_Template, 2, 4, "ng-container", 22)(3, MultiSelect_ng_template_14_div_4_ng_template_3_Template, 2, 2, "ng-template", null, 9, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const builtInFilterElement_r12 = \u0275\u0275reference(4);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.filterTemplate || ctx_r1._filterTemplate)("ngIfElse", builtInFilterElement_r12);
  }
}
function MultiSelect_ng_template_14_p_scroller_6_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MultiSelect_ng_template_14_p_scroller_6_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_template_14_p_scroller_6_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 29);
  }
  if (rf & 2) {
    const items_r14 = ctx.$implicit;
    const scrollerOptions_r15 = ctx.options;
    \u0275\u0275nextContext(2);
    const buildInItems_r16 = \u0275\u0275reference(9);
    \u0275\u0275property("ngTemplateOutlet", buildInItems_r16)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c36, items_r14, scrollerOptions_r15));
  }
}
function MultiSelect_ng_template_14_p_scroller_6_ng_container_4_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MultiSelect_ng_template_14_p_scroller_6_ng_container_4_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_template_14_p_scroller_6_ng_container_4_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 29);
  }
  if (rf & 2) {
    const scrollerOptions_r17 = ctx.options;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.loaderTemplate || ctx_r1._loaderTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c342, scrollerOptions_r17));
  }
}
function MultiSelect_ng_template_14_p_scroller_6_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelect_ng_template_14_p_scroller_6_ng_container_4_ng_template_1_Template, 1, 4, "ng-template", null, 14, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
}
function MultiSelect_ng_template_14_p_scroller_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-scroller", 56, 13);
    \u0275\u0275listener("onLazyLoad", function MultiSelect_ng_template_14_p_scroller_6_Template_p_scroller_onLazyLoad_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onLazyLoad.emit($event));
    });
    \u0275\u0275template(2, MultiSelect_ng_template_14_p_scroller_6_ng_template_2_Template, 1, 5, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(4, MultiSelect_ng_template_14_p_scroller_6_ng_container_4_Template, 3, 0, "ng-container", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleMap(\u0275\u0275pureFunction1(9, _c08, ctx_r1.scrollHeight));
    \u0275\u0275property("items", ctx_r1.visibleOptions())("itemSize", ctx_r1.virtualScrollItemSize || ctx_r1._itemSize)("autoSize", true)("tabindex", -1)("lazy", ctx_r1.lazy)("options", ctx_r1.virtualScrollOptions);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.loaderTemplate || ctx_r1._loaderTemplate);
  }
}
function MultiSelect_ng_template_14_ng_container_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MultiSelect_ng_template_14_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelect_ng_template_14_ng_container_7_ng_container_1_Template, 1, 0, "ng-container", 29);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const buildInItems_r16 = \u0275\u0275reference(9);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", buildInItems_r16)("ngTemplateOutletContext", \u0275\u0275pureFunction2(3, _c36, ctx_r1.visibleOptions(), \u0275\u0275pureFunction0(2, _c37)));
  }
}
function MultiSelect_ng_template_14_ng_template_8_ng_template_2_ng_container_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r18 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getOptionGroupLabel(option_r18.optionGroup));
  }
}
function MultiSelect_ng_template_14_ng_template_8_ng_template_2_ng_container_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MultiSelect_ng_template_14_ng_template_8_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "li", 60);
    \u0275\u0275template(2, MultiSelect_ng_template_14_ng_template_8_ng_template_2_ng_container_0_span_2_Template, 2, 1, "span", 20)(3, MultiSelect_ng_template_14_ng_template_8_ng_template_2_ng_container_0_ng_container_3_Template, 1, 0, "ng-container", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r18 = \u0275\u0275nextContext();
    const option_r18 = ctx_r18.$implicit;
    const i_r20 = ctx_r18.index;
    const scrollerOptions_r21 = \u0275\u0275nextContext().options;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(5, _c08, scrollerOptions_r21.itemSize + "px"));
    \u0275\u0275attribute("id", ctx_r1.id + "_" + ctx_r1.getOptionIndex(i_r20, scrollerOptions_r21));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.groupTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.groupTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(7, _c24, option_r18.optionGroup));
  }
}
function MultiSelect_ng_template_14_ng_template_8_ng_template_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p-multiselect-item", 61);
    \u0275\u0275listener("onClick", function MultiSelect_ng_template_14_ng_template_8_ng_template_2_ng_container_1_Template_p_multiselect_item_onClick_1_listener($event) {
      \u0275\u0275restoreView(_r22);
      const i_r20 = \u0275\u0275nextContext().index;
      const scrollerOptions_r21 = \u0275\u0275nextContext().options;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onOptionSelect($event, false, ctx_r1.getOptionIndex(i_r20, scrollerOptions_r21)));
    })("onMouseEnter", function MultiSelect_ng_template_14_ng_template_8_ng_template_2_ng_container_1_Template_p_multiselect_item_onMouseEnter_1_listener($event) {
      \u0275\u0275restoreView(_r22);
      const i_r20 = \u0275\u0275nextContext().index;
      const scrollerOptions_r21 = \u0275\u0275nextContext().options;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onOptionMouseEnter($event, ctx_r1.getOptionIndex(i_r20, scrollerOptions_r21)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r18 = \u0275\u0275nextContext();
    const option_r18 = ctx_r18.$implicit;
    const i_r20 = ctx_r18.index;
    const scrollerOptions_r21 = \u0275\u0275nextContext().options;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("id", ctx_r1.id + "_" + ctx_r1.getOptionIndex(i_r20, scrollerOptions_r21))("option", option_r18)("selected", ctx_r1.isSelected(option_r18))("label", ctx_r1.getOptionLabel(option_r18))("disabled", ctx_r1.isOptionDisabled(option_r18))("template", ctx_r1.itemTemplate || ctx_r1._itemTemplate)("checkIconTemplate", ctx_r1.checkIconTemplate || ctx_r1._checkIconTemplate)("itemCheckboxIconTemplate", ctx_r1.itemCheckboxIconTemplate || ctx_r1._itemCheckboxIconTemplate)("itemSize", scrollerOptions_r21.itemSize)("focused", ctx_r1.focusedOptionIndex() === ctx_r1.getOptionIndex(i_r20, scrollerOptions_r21))("ariaPosInset", ctx_r1.getAriaPosInset(ctx_r1.getOptionIndex(i_r20, scrollerOptions_r21)))("ariaSetSize", ctx_r1.ariaSetSize)("variant", ctx_r1.variant);
  }
}
function MultiSelect_ng_template_14_ng_template_8_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_template_14_ng_template_8_ng_template_2_ng_container_0_Template, 4, 9, "ng-container", 20)(1, MultiSelect_ng_template_14_ng_template_8_ng_template_2_ng_container_1_Template, 2, 13, "ng-container", 20);
  }
  if (rf & 2) {
    const option_r18 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", ctx_r1.isOptionGroup(option_r18));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isOptionGroup(option_r18));
  }
}
function MultiSelect_ng_template_14_ng_template_8_li_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.emptyFilterMessageLabel, " ");
  }
}
function MultiSelect_ng_template_14_ng_template_8_li_3_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MultiSelect_ng_template_14_ng_template_8_li_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_template_14_ng_template_8_li_3_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 32);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.emptyFilterTemplate || ctx_r1._emptyFilterTemplate || ctx_r1.emptyTemplate || ctx_r1._emptyFilterTemplate);
  }
}
function MultiSelect_ng_template_14_ng_template_8_li_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 62);
    \u0275\u0275template(1, MultiSelect_ng_template_14_ng_template_8_li_3_Conditional_1_Template, 1, 1)(2, MultiSelect_ng_template_14_ng_template_8_li_3_Conditional_2_Template, 1, 1, "ng-container");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const scrollerOptions_r21 = \u0275\u0275nextContext().options;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(2, _c08, scrollerOptions_r21.itemSize + "px"));
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.emptyFilterTemplate && !ctx_r1._emptyFilterTemplate && !ctx_r1.emptyTemplate && !ctx_r1._emptyTemplate ? 1 : 2);
  }
}
function MultiSelect_ng_template_14_ng_template_8_li_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.emptyMessageLabel, " ");
  }
}
function MultiSelect_ng_template_14_ng_template_8_li_4_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MultiSelect_ng_template_14_ng_template_8_li_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_template_14_ng_template_8_li_4_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 32);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.emptyTemplate || ctx_r1._emptyTemplate);
  }
}
function MultiSelect_ng_template_14_ng_template_8_li_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 62);
    \u0275\u0275template(1, MultiSelect_ng_template_14_ng_template_8_li_4_Conditional_1_Template, 1, 1)(2, MultiSelect_ng_template_14_ng_template_8_li_4_Conditional_2_Template, 1, 1, "ng-container");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const scrollerOptions_r21 = \u0275\u0275nextContext().options;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(2, _c08, scrollerOptions_r21.itemSize + "px"));
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.emptyTemplate && !ctx_r1._emptyTemplate ? 1 : 2);
  }
}
function MultiSelect_ng_template_14_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 57, 15);
    \u0275\u0275template(2, MultiSelect_ng_template_14_ng_template_8_ng_template_2_Template, 2, 2, "ng-template", 58)(3, MultiSelect_ng_template_14_ng_template_8_li_3_Template, 3, 4, "li", 59)(4, MultiSelect_ng_template_14_ng_template_8_li_4_Template, 3, 4, "li", 59);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const items_r23 = ctx.$implicit;
    const scrollerOptions_r21 = ctx.options;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleMap(scrollerOptions_r21.contentStyle);
    \u0275\u0275property("ngClass", scrollerOptions_r21.contentStyleClass);
    \u0275\u0275attribute("aria-label", ctx_r1.listLabel);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", items_r23);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasFilter() && ctx_r1.isEmpty());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.hasFilter() && ctx_r1.isEmpty());
  }
}
function MultiSelect_ng_template_14_div_10_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MultiSelect_ng_template_14_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275projection(1, 1);
    \u0275\u0275template(2, MultiSelect_ng_template_14_div_10_ng_container_2_Template, 1, 0, "ng-container", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.footerTemplate || ctx_r1._footerTemplate);
  }
}
function MultiSelect_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "span", 44, 6);
    \u0275\u0275listener("focus", function MultiSelect_ng_template_14_Template_span_focus_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFirstHiddenFocus($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, MultiSelect_ng_template_14_ng_container_3_Template, 1, 0, "ng-container", 32)(4, MultiSelect_ng_template_14_div_4_Template, 5, 2, "div", 45);
    \u0275\u0275elementStart(5, "div", 46);
    \u0275\u0275template(6, MultiSelect_ng_template_14_p_scroller_6_Template, 5, 11, "p-scroller", 47)(7, MultiSelect_ng_template_14_ng_container_7_Template, 2, 6, "ng-container", 20)(8, MultiSelect_ng_template_14_ng_template_8_Template, 5, 7, "ng-template", null, 7, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, MultiSelect_ng_template_14_div_10_Template, 3, 1, "div", 20);
    \u0275\u0275elementStart(11, "span", 44, 8);
    \u0275\u0275listener("focus", function MultiSelect_ng_template_14_Template_span_focus_11_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onLastHiddenFocus($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.panelStyleClass);
    \u0275\u0275property("ngClass", "p-multiselect-overlay p-component")("ngStyle", ctx_r1.panelStyle);
    \u0275\u0275attribute("id", ctx_r1.id + "_list");
    \u0275\u0275advance();
    \u0275\u0275attribute("tabindex", 0)("data-p-hidden-accessible", true)("data-p-hidden-focusable", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.headerTemplate || ctx_r1._headerTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showHeader);
    \u0275\u0275advance();
    \u0275\u0275styleProp("max-height", ctx_r1.virtualScroll ? "auto" : ctx_r1.scrollHeight || "auto");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.virtualScroll);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.virtualScroll);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.footerFacet || ctx_r1.footerTemplate || ctx_r1._footerTemplate);
    \u0275\u0275advance();
    \u0275\u0275attribute("tabindex", 0)("data-p-hidden-accessible", true)("data-p-hidden-focusable", true);
  }
}
var MULTISELECT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MultiSelect),
  multi: true
};
var MultiSelectItem = class _MultiSelectItem extends BaseComponent {
  id;
  option;
  selected;
  label;
  disabled;
  itemSize;
  focused;
  ariaPosInset;
  ariaSetSize;
  variant;
  template;
  checkIconTemplate;
  itemCheckboxIconTemplate;
  onClick = new EventEmitter();
  onMouseEnter = new EventEmitter();
  onOptionClick(event) {
    this.onClick.emit({
      originalEvent: event,
      option: this.option,
      selected: this.selected
    });
    event.stopPropagation();
    event.preventDefault();
  }
  onOptionMouseEnter(event) {
    this.onMouseEnter.emit({
      originalEvent: event,
      option: this.option,
      selected: this.selected
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MultiSelectItem_BaseFactory;
    return function MultiSelectItem_Factory(__ngFactoryType__) {
      return (\u0275MultiSelectItem_BaseFactory || (\u0275MultiSelectItem_BaseFactory = \u0275\u0275getInheritedFactory(_MultiSelectItem)))(__ngFactoryType__ || _MultiSelectItem);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MultiSelectItem,
    selectors: [["p-multiSelectItem"], ["p-multiselect-item"]],
    inputs: {
      id: "id",
      option: "option",
      selected: [2, "selected", "selected", booleanAttribute],
      label: "label",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      itemSize: [2, "itemSize", "itemSize", numberAttribute],
      focused: [2, "focused", "focused", booleanAttribute],
      ariaPosInset: "ariaPosInset",
      ariaSetSize: "ariaSetSize",
      variant: "variant",
      template: "template",
      checkIconTemplate: "checkIconTemplate",
      itemCheckboxIconTemplate: "itemCheckboxIconTemplate"
    },
    outputs: {
      onClick: "onClick",
      onMouseEnter: "onMouseEnter"
    },
    features: [\u0275\u0275InputTransformsFeature, \u0275\u0275InheritDefinitionFeature],
    decls: 5,
    vars: 26,
    consts: [["icon", ""], ["pRipple", "", "role", "option", 3, "click", "mouseenter", "ngStyle", "ngClass", "id"], [3, "ngModel", "binary", "tabindex", "variant"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function MultiSelectItem_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "li", 1);
        \u0275\u0275listener("click", function MultiSelectItem_Template_li_click_0_listener($event) {
          return ctx.onOptionClick($event);
        })("mouseenter", function MultiSelectItem_Template_li_mouseenter_0_listener($event) {
          return ctx.onOptionMouseEnter($event);
        });
        \u0275\u0275elementStart(1, "p-checkbox", 2);
        \u0275\u0275template(2, MultiSelectItem_ng_container_2_Template, 3, 0, "ng-container", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, MultiSelectItem_span_3_Template, 2, 1, "span", 3)(4, MultiSelectItem_ng_container_4_Template, 1, 0, "ng-container", 4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(19, _c08, ctx.itemSize + "px"))("ngClass", \u0275\u0275pureFunction2(21, _c18, ctx.disabled, ctx.focused))("id", ctx.id);
        \u0275\u0275attribute("aria-label", ctx.label)("aria-setsize", ctx.ariaSetSize)("aria-posinset", ctx.ariaPosInset)("aria-selected", ctx.selected)("data-p-focused", ctx.focused)("data-p-highlight", ctx.selected)("data-p-disabled", ctx.disabled)("aria-checked", ctx.selected);
        \u0275\u0275advance();
        \u0275\u0275property("ngModel", ctx.selected)("binary", true)("tabindex", -1)("variant", ctx.variant);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.itemCheckboxIconTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.template);
        \u0275\u0275advance();
        \u0275\u0275property("ngTemplateOutlet", ctx.template)("ngTemplateOutletContext", \u0275\u0275pureFunction1(24, _c24, ctx.option));
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, NgStyle, Checkbox, FormsModule, NgControlStatus, NgModel, Ripple, SharedModule],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MultiSelectItem, [{
    type: Component,
    args: [{
      selector: "p-multiSelectItem, p-multiselect-item",
      standalone: true,
      imports: [CommonModule, Checkbox, FormsModule, Ripple, SharedModule],
      template: `
        <li
            pRipple
            role="option"
            [ngStyle]="{ height: itemSize + 'px' }"
            [ngClass]="{
                'p-multiselect-option': true,
                'p-disabled': disabled,
                'p-focus': focused
            }"
            [id]="id"
            [attr.aria-label]="label"
            [attr.aria-setsize]="ariaSetSize"
            [attr.aria-posinset]="ariaPosInset"
            [attr.aria-selected]="selected"
            [attr.data-p-focused]="focused"
            [attr.data-p-highlight]="selected"
            [attr.data-p-disabled]="disabled"
            [attr.aria-checked]="selected"
            (click)="onOptionClick($event)"
            (mouseenter)="onOptionMouseEnter($event)"
        >
            <p-checkbox [ngModel]="selected" [binary]="true" [tabindex]="-1" [variant]="variant">
                <ng-container *ngIf="itemCheckboxIconTemplate">
                    <ng-template #icon let-klass="class">
                        <ng-template *ngTemplateOutlet="itemCheckboxIconTemplate; context: { checked: selected, class: klass }"></ng-template>
                    </ng-template>
                </ng-container>
            </p-checkbox>
            <span *ngIf="!template">{{ label ?? 'empty' }}</span>
            <ng-container *ngTemplateOutlet="template; context: { $implicit: option }"></ng-container>
        </li>
    `,
      encapsulation: ViewEncapsulation.None
    }]
  }], null, {
    id: [{
      type: Input
    }],
    option: [{
      type: Input
    }],
    selected: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
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
    itemSize: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    focused: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    ariaPosInset: [{
      type: Input
    }],
    ariaSetSize: [{
      type: Input
    }],
    variant: [{
      type: Input
    }],
    template: [{
      type: Input
    }],
    checkIconTemplate: [{
      type: Input
    }],
    itemCheckboxIconTemplate: [{
      type: Input
    }],
    onClick: [{
      type: Output
    }],
    onMouseEnter: [{
      type: Output
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MultiSelectItem, {
    className: "MultiSelectItem",
    filePath: "multiselect.ts",
    lineNumber: 115
  });
})();
var MultiSelect = class _MultiSelect extends BaseComponent {
  zone;
  filterService;
  overlayService;
  /**
   * Unique identifier of the component
   * @group Props
   */
  id;
  /**
   * Defines a string that labels the input for accessibility.
   * @group Props
   */
  ariaLabel;
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
  /**
   * Inline style of the overlay panel.
   * @group Props
   */
  panelStyle;
  /**
   * Style class of the overlay panel element.
   * @group Props
   */
  panelStyleClass;
  /**
   * Identifier of the focus input to match a label defined for the component.
   * @group Props
   */
  inputId;
  /**
   * When present, it specifies that the element should be disabled.
   * @group Props
   */
  disabled;
  /**
   * Spans 100% width of the container when enabled.
   * @group Props
   */
  fluid;
  /**
   * When present, it specifies that the component cannot be edited.
   * @group Props
   */
  readonly;
  /**
   * Whether to display options as grouped when nested options are provided.
   * @group Props
   */
  group;
  /**
   * When specified, displays an input field to filter the items on keyup.
   * @group Props
   */
  filter = true;
  /**
   * Defines placeholder of the filter input.
   * @group Props
   */
  filterPlaceHolder;
  /**
   * Locale to use in filtering. The default locale is the host environment's current locale.
   * @group Props
   */
  filterLocale;
  /**
   * Specifies the visibility of the options panel.
   * @group Props
   */
  overlayVisible;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = 0;
  /**
   * Specifies the input variant of the component.
   * @group Props
   */
  variant = "outlined";
  /**
   * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  appendTo;
  /**
   * A property to uniquely identify a value in options.
   * @group Props
   */
  dataKey;
  /**
   * Name of the input element.
   * @group Props
   */
  name;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Whether to show labels of selected item labels or use default label.
   * @group Props
   * @defaultValue true
   */
  set displaySelectedLabel(val) {
    this._displaySelectedLabel = val;
  }
  get displaySelectedLabel() {
    return this._displaySelectedLabel;
  }
  /**
   * Decides how many selected item labels to show at most.
   * @group Props
   * @defaultValue 3
   */
  set maxSelectedLabels(val) {
    this._maxSelectedLabels = val;
  }
  get maxSelectedLabels() {
    return this._maxSelectedLabels;
  }
  /**
   * Decides how many selected item labels to show at most.
   * @group Props
   */
  selectionLimit;
  /**
   * Label to display after exceeding max selected labels e.g. ({0} items selected), defaults "ellipsis" keyword to indicate a text-overflow.
   * @group Props
   */
  selectedItemsLabel;
  /**
   * Whether to show the checkbox at header to toggle all items at once.
   * @group Props
   */
  showToggleAll = true;
  /**
   * Text to display when filtering does not return any results.
   * @group Props
   */
  emptyFilterMessage = "";
  /**
   * Text to display when there is no data. Defaults to global value in i18n translation configuration.
   * @group Props
   */
  emptyMessage = "";
  /**
   * Clears the filter value when hiding the dropdown.
   * @group Props
   */
  resetFilterOnHide = false;
  /**
   * Icon class of the dropdown icon.
   * @group Props
   */
  dropdownIcon;
  /**
   * Icon class of the chip icon.
   * @group Props
   */
  chipIcon;
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
   * Name of the label field of an option group.
   * @group Props
   */
  optionGroupLabel = "label";
  /**
   * Name of the options field of an option group.
   * @group Props
   */
  optionGroupChildren = "items";
  /**
   * Whether to show the header.
   * @group Props
   */
  showHeader = true;
  /**
   * When filtering is enabled, filterBy decides which field or fields (comma separated) to search against.
   * @group Props
   */
  filterBy;
  /**
   * Height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.
   * @group Props
   */
  scrollHeight = "200px";
  /**
   * Defines if data is loaded and interacted with in lazy manner.
   * @group Props
   */
  lazy = false;
  /**
   * Whether the data should be loaded on demand during scroll.
   * @group Props
   */
  virtualScroll;
  /**
   * Whether the multiselect is in loading state.
   * @group Props
   */
  loading = false;
  /**
   * Height of an item in the list for VirtualScrolling.
   * @group Props
   */
  virtualScrollItemSize;
  /**
   * Icon to display in loading state.
   * @group Props
   */
  loadingIcon;
  /**
   * Whether to use the scroller feature. The properties of scroller component can be used like an object in it.
   * @group Props
   */
  virtualScrollOptions;
  /**
   * Whether to use overlay API feature. The properties of overlay API can be used like an object in it.
   * @group Props
   */
  overlayOptions;
  /**
   * Defines a string that labels the filter input.
   * @group Props
   */
  ariaFilterLabel;
  /**
   * Defines how the items are filtered.
   * @group Props
   */
  filterMatchMode = "contains";
  /**
   * Advisory information to display in a tooltip on hover.
   * @group Props
   */
  tooltip = "";
  /**
   * Position of the tooltip.
   * @group Props
   */
  tooltipPosition = "right";
  /**
   * Type of CSS position.
   * @group Props
   */
  tooltipPositionStyle = "absolute";
  /**
   * Style class of the tooltip.
   * @group Props
   */
  tooltipStyleClass;
  /**
   * Applies focus to the filter element when the overlay is shown.
   * @group Props
   */
  autofocusFilter = false;
  /**
   * Defines how the selected items are displayed.
   * @group Props
   */
  display = "comma";
  /**
   * Defines the autocomplete is active.
   * @group Props
   */
  autocomplete = "off";
  /**
   * Defines the size of the component.
   * @group Props
   */
  size;
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
   * @deprecated since v14.2.0, use overlayOptions property instead.
   * Whether to automatically manage layering.
   * @group Props
   */
  get autoZIndex() {
    return this._autoZIndex;
  }
  set autoZIndex(val) {
    this._autoZIndex = val;
    console.log("The autoZIndex property is deprecated since v14.2.0, use overlayOptions property instead.");
  }
  /**
   * @deprecated since v14.2.0, use overlayOptions property instead.
   * Base zIndex value to use in layering.
   * @group Props
   */
  get baseZIndex() {
    return this._baseZIndex;
  }
  set baseZIndex(val) {
    this._baseZIndex = val;
    console.log("The baseZIndex property is deprecated since v14.2.0, use overlayOptions property instead.");
  }
  /**
   * Transition options of the show animation.
   * @group Props
   * @deprecated since v14.2.0, use overlayOptions property instead.
   */
  get showTransitionOptions() {
    return this._showTransitionOptions;
  }
  set showTransitionOptions(val) {
    this._showTransitionOptions = val;
    console.log("The showTransitionOptions property is deprecated since v14.2.0, use overlayOptions property instead.");
  }
  /**
   * Transition options of the hide animation.
   * @group Props
   * @deprecated since v14.2.0, use overlayOptions property instead.
   */
  get hideTransitionOptions() {
    return this._hideTransitionOptions;
  }
  set hideTransitionOptions(val) {
    this._hideTransitionOptions = val;
    console.log("The hideTransitionOptions property is deprecated since v14.2.0, use overlayOptions property instead.");
  }
  /**
   * Label to display when there are no selections.
   * @group Props
   * @deprecated Use placeholder instead.
   */
  set defaultLabel(val) {
    this._defaultLabel = val;
    console.log("defaultLabel property is deprecated since 16.6.0, use placeholder instead");
  }
  get defaultLabel() {
    return this._defaultLabel;
  }
  /**
   * Label to display when there are no selections.
   * @group Props
   */
  set placeholder(val) {
    this._placeholder.set(val);
  }
  get placeholder() {
    return this._placeholder.asReadonly();
  }
  /**
   * An array of objects to display as the available options.
   * @group Props
   */
  get options() {
    const options = this._options();
    return options;
  }
  set options(val) {
    if (!deepEquals(this._options(), val)) {
      this._options.set(val);
    }
  }
  /**
   * When specified, filter displays with this value.
   * @group Props
   */
  get filterValue() {
    return this._filterValue();
  }
  set filterValue(val) {
    this._filterValue.set(val);
  }
  /**
   * Item size of item to be virtual scrolled.
   * @group Props
   * @deprecated use virtualScrollItemSize property instead.
   */
  get itemSize() {
    return this._itemSize;
  }
  set itemSize(val) {
    this._itemSize = val;
    console.log("The itemSize property is deprecated, use virtualScrollItemSize property instead.");
  }
  /**
   * Whether all data is selected.
   * @group Props
   */
  get selectAll() {
    return this._selectAll;
  }
  set selectAll(value) {
    this._selectAll = value;
  }
  /**
   * Indicates whether to focus on options when hovering over them, defaults to optionLabel.
   * @group Props
   */
  focusOnHover = true;
  /**
   * Fields used when filtering the options, defaults to optionLabel.
   * @group Props
   */
  filterFields;
  /**
   * Determines if the option will be selected on focus.
   * @group Props
   */
  selectOnFocus = false;
  /**
   * Whether to focus on the first visible or selected element when the overlay panel is shown.
   * @group Props
   */
  autoOptionFocus = false;
  /**
   * Callback to invoke when value changes.
   * @param {MultiSelectChangeEvent} event - Custom change event.
   * @group Emits
   */
  onChange = new EventEmitter();
  /**
   * Callback to invoke when data is filtered.
   * @param {MultiSelectFilterEvent} event - Custom filter event.
   * @group Emits
   */
  onFilter = new EventEmitter();
  /**
   * Callback to invoke when multiselect receives focus.
   * @param {MultiSelectFocusEvent} event - Custom focus event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to invoke when multiselect loses focus.
   * @param {MultiSelectBlurEvent} event - Custom blur event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  /**
   * Callback to invoke when component is clicked.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onClick = new EventEmitter();
  /**
   * Callback to invoke when input field is cleared.
   * @group Emits
   */
  onClear = new EventEmitter();
  /**
   * Callback to invoke when overlay panel becomes visible.
   * @group Emits
   */
  onPanelShow = new EventEmitter();
  /**
   * Callback to invoke when overlay panel becomes hidden.
   * @group Emits
   */
  onPanelHide = new EventEmitter();
  /**
   * Callback to invoke in lazy mode to load new data.
   * @param {MultiSelectLazyLoadEvent} event - Lazy load event.
   * @group Emits
   */
  onLazyLoad = new EventEmitter();
  /**
   * Callback to invoke in lazy mode to load new data.
   * @param {MultiSelectRemoveEvent} event - Remove event.
   * @group Emits
   */
  onRemove = new EventEmitter();
  /**
   * Callback to invoke when all data is selected.
   * @param {MultiSelectSelectAllChangeEvent} event - Custom select event.
   * @group Emits
   */
  onSelectAllChange = new EventEmitter();
  overlayViewChild;
  filterInputChild;
  focusInputViewChild;
  itemsViewChild;
  scroller;
  lastHiddenFocusableElementOnOverlay;
  firstHiddenFocusableElementOnOverlay;
  headerCheckboxViewChild;
  footerFacet;
  headerFacet;
  _componentStyle = inject(MultiSelectStyle);
  searchValue;
  searchTimeout;
  _selectAll = null;
  _autoZIndex;
  _baseZIndex;
  _showTransitionOptions;
  _hideTransitionOptions;
  _defaultLabel;
  _placeholder = signal(void 0);
  _itemSize;
  _selectionLimit;
  _disableTooltip = false;
  value;
  _filteredOptions;
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  valuesAsString;
  focus;
  filtered;
  itemTemplate;
  groupTemplate;
  loaderTemplate;
  headerTemplate;
  filterTemplate;
  footerTemplate;
  emptyFilterTemplate;
  emptyTemplate;
  selectedItemsTemplate;
  checkIconTemplate;
  loadingIconTemplate;
  filterIconTemplate;
  removeTokenIconTemplate;
  chipIconTemplate;
  clearIconTemplate;
  dropdownIconTemplate;
  itemCheckboxIconTemplate;
  headerCheckboxIconTemplate;
  templates;
  _itemTemplate;
  _groupTemplate;
  _loaderTemplate;
  _headerTemplate;
  _filterTemplate;
  _footerTemplate;
  _emptyFilterTemplate;
  _emptyTemplate;
  _selectedItemsTemplate;
  _checkIconTemplate;
  _loadingIconTemplate;
  _filterIconTemplate;
  _removeTokenIconTemplate;
  _chipIconTemplate;
  _clearIconTemplate;
  _dropdownIconTemplate;
  _itemCheckboxIconTemplate;
  _headerCheckboxIconTemplate;
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "item":
          this._itemTemplate = item.template;
          break;
        case "group":
          this._groupTemplate = item.template;
          break;
        case "selectedItems":
        case "selecteditems":
          this._selectedItemsTemplate = item.template;
          break;
        case "header":
          this._headerTemplate = item.template;
          break;
        case "filter":
          this._filterTemplate = item.template;
          break;
        case "emptyfilter":
          this._emptyFilterTemplate = item.template;
          break;
        case "empty":
          this._emptyTemplate = item.template;
          break;
        case "footer":
          this._footerTemplate = item.template;
          break;
        case "loader":
          this._loaderTemplate = item.template;
          break;
        case "checkicon":
          this._checkIconTemplate = item.template;
          console.warn("checkicon is deprecated and will removed in future. Use itemcheckboxicon or headercheckboxicon templates instead.");
          break;
        case "headercheckboxicon":
          this._headerCheckboxIconTemplate = item.template;
          break;
        case "loadingicon":
          this._loadingIconTemplate = item.template;
          break;
        case "filtericon":
          this._filterIconTemplate = item.template;
          break;
        case "removetokenicon":
          this._removeTokenIconTemplate = item.template;
          break;
        case "clearicon":
          this._clearIconTemplate = item.template;
          break;
        case "dropdownicon":
          this._dropdownIconTemplate = item.template;
          break;
        case "itemcheckboxicon":
          this._itemCheckboxIconTemplate = item.template;
          break;
        case "chipicon":
          this._chipIconTemplate = item.template;
          break;
        default:
          this._itemTemplate = item.template;
          break;
      }
    });
  }
  headerCheckboxFocus;
  filterOptions;
  preventModelTouched;
  preventDocumentDefault;
  focused = false;
  itemsWrapper;
  _displaySelectedLabel = true;
  _maxSelectedLabels = 3;
  modelValue = signal(null);
  _filterValue = signal(null);
  _options = signal(null);
  startRangeIndex = signal(-1);
  focusedOptionIndex = signal(-1);
  selectedOptions;
  clickInProgress = false;
  get hostClasses() {
    const classes8 = [];
    if (typeof this.rootClass === "string") {
      classes8.push(this.rootClass);
    } else if (Array.isArray(this.rootClass)) {
      classes8.push(...this.rootClass);
    } else if (typeof this.rootClass === "object") {
      Object.keys(this.rootClass).filter((key) => this.rootClass[key]).forEach((key) => classes8.push(key));
    }
    if (this.styleClass) {
      classes8.push(this.styleClass);
    }
    return classes8.join(" ");
  }
  get rootClass() {
    return this._componentStyle.classes.root({
      instance: this
    });
  }
  get labelClass() {
    return this._componentStyle.classes.label({
      instance: this
    });
  }
  get emptyMessageLabel() {
    return this.emptyMessage || this.config.getTranslation(TranslationKeys.EMPTY_MESSAGE);
  }
  get emptyFilterMessageLabel() {
    return this.emptyFilterMessage || this.config.getTranslation(TranslationKeys.EMPTY_FILTER_MESSAGE);
  }
  get filled() {
    if (typeof this.modelValue() === "string") return !!this.modelValue();
    return isNotEmpty(this.modelValue());
  }
  get isVisibleClearIcon() {
    return this.modelValue() != null && this.modelValue() !== "" && isNotEmpty(this.modelValue()) && this.showClear && !this.disabled && this.filled;
  }
  get toggleAllAriaLabel() {
    return this.config.translation.aria ? this.config.translation.aria[this.allSelected() ? "selectAll" : "unselectAll"] : void 0;
  }
  get closeAriaLabel() {
    return this.config.translation.aria ? this.config.translation.aria.close : void 0;
  }
  get listLabel() {
    return this.config.getTranslation(TranslationKeys.ARIA)["listLabel"];
  }
  get hasFluid() {
    const nativeElement = this.el.nativeElement;
    const fluidComponent = nativeElement.closest("p-fluid");
    return this.fluid || !!fluidComponent;
  }
  getAllVisibleAndNonVisibleOptions() {
    return this.group ? this.flatOptions(this.options) : this.options || [];
  }
  visibleOptions = computed(() => {
    const options = this.getAllVisibleAndNonVisibleOptions();
    const isArrayOfObjects = isArray(options) && isObject(options[0]);
    if (this._filterValue()) {
      let filteredOptions;
      if (isArrayOfObjects) {
        filteredOptions = this.filterService.filter(options, this.searchFields(), this._filterValue(), this.filterMatchMode, this.filterLocale);
      } else {
        filteredOptions = options.filter((option) => option.toString().toLocaleLowerCase().includes(this._filterValue().toLocaleLowerCase()));
      }
      if (this.group) {
        const optionGroups = this.options || [];
        const filtered = [];
        optionGroups.forEach((group) => {
          const groupChildren = this.getOptionGroupChildren(group);
          const filteredItems = groupChildren.filter((item) => filteredOptions.includes(item));
          if (filteredItems.length > 0) filtered.push(__spreadProps(__spreadValues({}, group), {
            [typeof this.optionGroupChildren === "string" ? this.optionGroupChildren : "items"]: [...filteredItems]
          }));
        });
        return this.flatOptions(filtered);
      }
      return filteredOptions;
    }
    return options;
  });
  label = computed(() => {
    let label;
    const modelValue = this.modelValue();
    if (modelValue && modelValue.length && this.displaySelectedLabel) {
      if (isNotEmpty(this.maxSelectedLabels) && modelValue.length > this.maxSelectedLabels) {
        return this.getSelectedItemsLabel();
      } else {
        label = "";
        for (let i = 0; i < modelValue.length; i++) {
          if (i !== 0) {
            label += ", ";
          }
          label += this.getLabelByValue(modelValue[i]);
        }
      }
    } else {
      label = this.placeholder() || this.defaultLabel || "";
    }
    return label;
  });
  chipSelectedItems = computed(() => {
    return isNotEmpty(this.maxSelectedLabels) && this.modelValue() && this.modelValue().length > this.maxSelectedLabels ? this.modelValue().slice(0, this.maxSelectedLabels) : this.modelValue();
  });
  constructor(zone, filterService, overlayService) {
    super();
    this.zone = zone;
    this.filterService = filterService;
    this.overlayService = overlayService;
    effect(() => {
      const modelValue = this.modelValue();
      const visibleOptions = this.visibleOptions();
      if (visibleOptions && isNotEmpty(visibleOptions)) {
        if (this.optionValue && this.optionLabel && modelValue) {
          this.selectedOptions = visibleOptions.filter((option) => modelValue.includes(option[this.optionLabel]) || modelValue.includes(option[this.optionValue]));
        } else {
          this.selectedOptions = modelValue;
        }
        this.cd.markForCheck();
      }
    });
  }
  ngOnInit() {
    super.ngOnInit();
    this.id = this.id || uuid("pn_id_");
    this.autoUpdateModel();
    if (this.filterBy) {
      this.filterOptions = {
        filter: (value) => this.onFilterInputChange(value),
        reset: () => this.resetFilter()
      };
    }
  }
  maxSelectionLimitReached() {
    return this.selectionLimit && this.modelValue() && this.modelValue().length === this.selectionLimit;
  }
  ngAfterViewInit() {
    super.ngOnInit();
    if (this.overlayVisible) {
      this.show();
    }
  }
  ngAfterViewChecked() {
    if (this.filtered) {
      this.zone.runOutsideAngular(() => {
        setTimeout(() => {
          this.overlayViewChild?.alignOverlay();
        }, 1);
      });
      this.filtered = false;
    }
  }
  flatOptions(options) {
    return (options || []).reduce((result, option, index) => {
      result.push({
        optionGroup: option,
        group: true,
        index
      });
      const optionGroupChildren = this.getOptionGroupChildren(option);
      optionGroupChildren && optionGroupChildren.forEach((o) => result.push(o));
      return result;
    }, []);
  }
  autoUpdateModel() {
    if (this.selectOnFocus && this.autoOptionFocus && !this.hasSelectedOption()) {
      this.focusedOptionIndex.set(this.findFirstFocusedOptionIndex());
      const value = this.getOptionValue(this.visibleOptions()[this.focusedOptionIndex()]);
      this.onOptionSelect({
        originalEvent: null,
        option: [value]
      });
    }
  }
  /**
   * Updates the model value.
   * @group Method
   */
  updateModel(value, event) {
    this.value = value;
    this.onModelChange(value);
    this.modelValue.set(value);
  }
  onInputClick(event) {
    event.stopPropagation();
    event.preventDefault();
    this.focusedOptionIndex.set(-1);
  }
  onOptionSelect(event, isFocus = false, index = -1) {
    const {
      originalEvent,
      option
    } = event;
    if (this.disabled || this.isOptionDisabled(option)) {
      return;
    }
    let selected = this.isSelected(option);
    let value = null;
    if (selected) {
      value = this.modelValue().filter((val) => !equals(val, this.getOptionValue(option), this.equalityKey()));
    } else {
      value = [...this.modelValue() || [], this.getOptionValue(option)];
    }
    this.updateModel(value, originalEvent);
    index !== -1 && this.focusedOptionIndex.set(index);
    isFocus && focus(this.focusInputViewChild?.nativeElement);
    this.onChange.emit({
      originalEvent: event,
      value,
      itemValue: option
    });
  }
  findSelectedOptionIndex() {
    return this.hasSelectedOption() ? this.visibleOptions().findIndex((option) => this.isValidSelectedOption(option)) : -1;
  }
  onOptionSelectRange(event, start = -1, end = -1) {
    start === -1 && (start = this.findNearestSelectedOptionIndex(end, true));
    end === -1 && (end = this.findNearestSelectedOptionIndex(start));
    if (start !== -1 && end !== -1) {
      const rangeStart = Math.min(start, end);
      const rangeEnd = Math.max(start, end);
      const value = this.visibleOptions().slice(rangeStart, rangeEnd + 1).filter((option) => this.isValidOption(option)).map((option) => this.getOptionValue(option));
      this.updateModel(value, event);
    }
  }
  searchFields() {
    return (this.filterBy || this.optionLabel || "label").split(",");
  }
  findNearestSelectedOptionIndex(index, firstCheckUp = false) {
    let matchedOptionIndex = -1;
    if (this.hasSelectedOption()) {
      if (firstCheckUp) {
        matchedOptionIndex = this.findPrevSelectedOptionIndex(index);
        matchedOptionIndex = matchedOptionIndex === -1 ? this.findNextSelectedOptionIndex(index) : matchedOptionIndex;
      } else {
        matchedOptionIndex = this.findNextSelectedOptionIndex(index);
        matchedOptionIndex = matchedOptionIndex === -1 ? this.findPrevSelectedOptionIndex(index) : matchedOptionIndex;
      }
    }
    return matchedOptionIndex > -1 ? matchedOptionIndex : index;
  }
  findPrevSelectedOptionIndex(index) {
    const matchedOptionIndex = this.hasSelectedOption() && index > 0 ? findLastIndex(this.visibleOptions().slice(0, index), (option) => this.isValidSelectedOption(option)) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex : -1;
  }
  findFirstFocusedOptionIndex() {
    const selectedIndex = this.findFirstSelectedOptionIndex();
    return selectedIndex < 0 ? this.findFirstOptionIndex() : selectedIndex;
  }
  findFirstOptionIndex() {
    return this.visibleOptions().findIndex((option) => this.isValidOption(option));
  }
  findFirstSelectedOptionIndex() {
    return this.hasSelectedOption() ? this.visibleOptions().findIndex((option) => this.isValidSelectedOption(option)) : -1;
  }
  findNextSelectedOptionIndex(index) {
    const matchedOptionIndex = this.hasSelectedOption() && index < this.visibleOptions().length - 1 ? this.visibleOptions().slice(index + 1).findIndex((option) => this.isValidSelectedOption(option)) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : -1;
  }
  equalityKey() {
    return this.optionValue ? null : this.dataKey;
  }
  hasSelectedOption() {
    return isNotEmpty(this.modelValue());
  }
  isValidSelectedOption(option) {
    return this.isValidOption(option) && this.isSelected(option);
  }
  isOptionGroup(option) {
    return (this.group || this.optionGroupLabel) && option.optionGroup && option.group;
  }
  isValidOption(option) {
    return option && !(this.isOptionDisabled(option) || this.isOptionGroup(option));
  }
  isOptionDisabled(option) {
    if (this.maxSelectionLimitReached() && !this.isSelected(option)) {
      return true;
    }
    return this.optionDisabled ? resolveFieldData(option, this.optionDisabled) : option && option.disabled !== void 0 ? option.disabled : false;
  }
  isSelected(option) {
    const optionValue = this.getOptionValue(option);
    return (this.modelValue() || []).some((value) => equals(value, optionValue, this.equalityKey()));
  }
  isOptionMatched(option) {
    return this.isValidOption(option) && this.getOptionLabel(option).toString().toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale));
  }
  isEmpty() {
    return !this._options() || this.visibleOptions() && this.visibleOptions().length === 0;
  }
  getOptionIndex(index, scrollerOptions) {
    return this.virtualScrollerDisabled ? index : scrollerOptions && scrollerOptions.getItemOptions(index)["index"];
  }
  getAriaPosInset(index) {
    return (this.optionGroupLabel ? index - this.visibleOptions().slice(0, index).filter((option) => this.isOptionGroup(option)).length : index) + 1;
  }
  get ariaSetSize() {
    return this.visibleOptions().filter((option) => !this.isOptionGroup(option)).length;
  }
  getLabelByValue(value) {
    const options = this.group ? this.flatOptions(this._options()) : this._options() || [];
    const matchedOption = options.find((option) => !this.isOptionGroup(option) && equals(this.getOptionValue(option), value, this.equalityKey()));
    return matchedOption ? this.getOptionLabel(matchedOption) : null;
  }
  getSelectedItemsLabel() {
    let pattern = /{(.*?)}/;
    let message = this.selectedItemsLabel ? this.selectedItemsLabel : this.config.getTranslation(TranslationKeys.SELECTION_MESSAGE);
    if (pattern.test(message)) {
      return message.replace(message.match(pattern)[0], this.modelValue().length + "");
    }
    return message;
  }
  getOptionLabel(option) {
    return this.optionLabel ? resolveFieldData(option, this.optionLabel) : option && option.label != void 0 ? option.label : option;
  }
  getOptionValue(option) {
    return this.optionValue ? resolveFieldData(option, this.optionValue) : !this.optionLabel && option && option.value !== void 0 ? option.value : option;
  }
  getOptionGroupLabel(optionGroup) {
    return this.optionGroupLabel ? resolveFieldData(optionGroup, this.optionGroupLabel) : optionGroup && optionGroup.label != void 0 ? optionGroup.label : optionGroup;
  }
  getOptionGroupChildren(optionGroup) {
    return this.optionGroupChildren ? resolveFieldData(optionGroup, this.optionGroupChildren) : optionGroup.items;
  }
  onKeyDown(event) {
    if (this.disabled) {
      event.preventDefault();
      return;
    }
    const metaKey = event.metaKey || event.ctrlKey;
    switch (event.code) {
      case "ArrowDown":
        this.onArrowDownKey(event);
        break;
      case "ArrowUp":
        this.onArrowUpKey(event);
        break;
      case "Home":
        this.onHomeKey(event);
        break;
      case "End":
        this.onEndKey(event);
        break;
      case "PageDown":
        this.onPageDownKey(event);
        break;
      case "PageUp":
        this.onPageUpKey(event);
        break;
      case "Enter":
      case "Space":
        this.onEnterKey(event);
        break;
      case "Escape":
        this.onEscapeKey(event);
        break;
      case "Tab":
        this.onTabKey(event);
        break;
      case "ShiftLeft":
      case "ShiftRight":
        this.onShiftKey();
        break;
      default:
        if (event.code === "KeyA" && metaKey) {
          const value = this.visibleOptions().filter((option) => this.isValidOption(option)).map((option) => this.getOptionValue(option));
          this.updateModel(value, event);
          event.preventDefault();
          break;
        }
        if (!metaKey && isPrintableCharacter(event.key)) {
          !this.overlayVisible && this.show();
          this.searchOptions(event, event.key);
          event.preventDefault();
        }
        break;
    }
  }
  onFilterKeyDown(event) {
    switch (event.code) {
      case "ArrowDown":
        this.onArrowDownKey(event);
        break;
      case "ArrowUp":
        this.onArrowUpKey(event, true);
        break;
      case "ArrowLeft":
      case "ArrowRight":
        this.onArrowLeftKey(event, true);
        break;
      case "Home":
        this.onHomeKey(event, true);
        break;
      case "End":
        this.onEndKey(event, true);
        break;
      case "Enter":
      case "NumpadEnter":
        this.onEnterKey(event);
        break;
      case "Escape":
        this.onEscapeKey(event);
        break;
      case "Tab":
        this.onTabKey(event, true);
        break;
      default:
        break;
    }
  }
  onArrowLeftKey(event, pressedInInputText = false) {
    pressedInInputText && this.focusedOptionIndex.set(-1);
  }
  onArrowDownKey(event) {
    const optionIndex = this.focusedOptionIndex() !== -1 ? this.findNextOptionIndex(this.focusedOptionIndex()) : this.findFirstFocusedOptionIndex();
    if (event.shiftKey) {
      this.onOptionSelectRange(event, this.startRangeIndex(), optionIndex);
    }
    this.changeFocusedOptionIndex(event, optionIndex);
    !this.overlayVisible && this.show();
    event.preventDefault();
    event.stopPropagation();
  }
  onArrowUpKey(event, pressedInInputText = false) {
    if (event.altKey && !pressedInInputText) {
      if (this.focusedOptionIndex() !== -1) {
        this.onOptionSelect(event, this.visibleOptions()[this.focusedOptionIndex()]);
      }
      this.overlayVisible && this.hide();
      event.preventDefault();
    } else {
      const optionIndex = this.focusedOptionIndex() !== -1 ? this.findPrevOptionIndex(this.focusedOptionIndex()) : this.findLastFocusedOptionIndex();
      if (event.shiftKey) {
        this.onOptionSelectRange(event, optionIndex, this.startRangeIndex());
      }
      this.changeFocusedOptionIndex(event, optionIndex);
      !this.overlayVisible && this.show();
      event.preventDefault();
    }
    event.stopPropagation();
  }
  onHomeKey(event, pressedInInputText = false) {
    const {
      currentTarget
    } = event;
    if (pressedInInputText) {
      const len = currentTarget.value.length;
      currentTarget.setSelectionRange(0, event.shiftKey ? len : 0);
      this.focusedOptionIndex.set(-1);
    } else {
      let metaKey = event.metaKey || event.ctrlKey;
      let optionIndex = this.findFirstOptionIndex();
      if (event.shiftKey && metaKey) {
        this.onOptionSelectRange(event, optionIndex, this.startRangeIndex());
      }
      this.changeFocusedOptionIndex(event, optionIndex);
      !this.overlayVisible && this.show();
    }
    event.preventDefault();
  }
  onEndKey(event, pressedInInputText = false) {
    const {
      currentTarget
    } = event;
    if (pressedInInputText) {
      const len = currentTarget.value.length;
      currentTarget.setSelectionRange(event.shiftKey ? 0 : len, len);
      this.focusedOptionIndex.set(-1);
    } else {
      let metaKey = event.metaKey || event.ctrlKey;
      let optionIndex = this.findLastFocusedOptionIndex();
      if (event.shiftKey && metaKey) {
        this.onOptionSelectRange(event, this.startRangeIndex(), optionIndex);
      }
      this.changeFocusedOptionIndex(event, optionIndex);
      !this.overlayVisible && this.show();
    }
    event.preventDefault();
  }
  onPageDownKey(event) {
    this.scrollInView(this.visibleOptions().length - 1);
    event.preventDefault();
  }
  onPageUpKey(event) {
    this.scrollInView(0);
    event.preventDefault();
  }
  onEnterKey(event) {
    if (!this.overlayVisible) {
      this.onArrowDownKey(event);
    } else {
      if (this.focusedOptionIndex() !== -1) {
        if (event.shiftKey) {
          this.onOptionSelectRange(event, this.focusedOptionIndex());
        } else {
          this.onOptionSelect({
            originalEvent: event,
            option: this.visibleOptions()[this.focusedOptionIndex()]
          });
        }
      }
    }
    event.preventDefault();
  }
  onEscapeKey(event) {
    this.overlayVisible && this.hide(true);
    event.preventDefault();
  }
  onDeleteKey(event) {
    if (this.showClear) {
      this.clear(event);
      event.preventDefault();
    }
  }
  onTabKey(event, pressedInInputText = false) {
    if (!pressedInInputText) {
      if (this.overlayVisible && this.hasFocusableElements()) {
        focus(event.shiftKey ? this.lastHiddenFocusableElementOnOverlay.nativeElement : this.firstHiddenFocusableElementOnOverlay.nativeElement);
        event.preventDefault();
      } else {
        if (this.focusedOptionIndex() !== -1) {
          this.onOptionSelect({
            originalEvent: event,
            option: this.visibleOptions()[this.focusedOptionIndex()]
          });
        }
        this.overlayVisible && this.hide(this.filter);
      }
    }
  }
  onShiftKey() {
    this.startRangeIndex.set(this.focusedOptionIndex());
  }
  onContainerClick(event) {
    if (this.disabled || this.loading || this.readonly || event.target.isSameNode(this.focusInputViewChild?.nativeElement)) {
      return;
    }
    if (!this.overlayViewChild || !this.overlayViewChild.el.nativeElement.contains(event.target)) {
      if (this.clickInProgress) {
        return;
      }
      this.clickInProgress = true;
      setTimeout(() => {
        this.clickInProgress = false;
      }, 150);
      this.overlayVisible ? this.hide(true) : this.show(true);
    }
    this.focusInputViewChild?.nativeElement.focus({
      preventScroll: true
    });
    this.onClick.emit(event);
    this.cd.detectChanges();
  }
  onFirstHiddenFocus(event) {
    const focusableEl = event.relatedTarget === this.focusInputViewChild?.nativeElement ? getFirstFocusableElement(this.overlayViewChild?.overlayViewChild?.nativeElement, ':not([data-p-hidden-focusable="true"])') : this.focusInputViewChild?.nativeElement;
    focus(focusableEl);
  }
  onInputFocus(event) {
    this.focused = true;
    const focusedOptionIndex = this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : this.overlayVisible && this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
    this.focusedOptionIndex.set(focusedOptionIndex);
    this.overlayVisible && this.scrollInView(this.focusedOptionIndex());
    this.onFocus.emit({
      originalEvent: event
    });
  }
  onInputBlur(event) {
    this.focused = false;
    this.onBlur.emit({
      originalEvent: event
    });
    if (!this.preventModelTouched) {
      this.onModelTouched();
    }
    this.preventModelTouched = false;
  }
  onFilterInputChange(event) {
    let value = event.target.value;
    this._filterValue.set(value);
    this.focusedOptionIndex.set(-1);
    this.onFilter.emit({
      originalEvent: event,
      filter: this._filterValue()
    });
    !this.virtualScrollerDisabled && this.scroller.scrollToIndex(0);
    setTimeout(() => {
      this.overlayViewChild.alignOverlay();
    });
  }
  onLastHiddenFocus(event) {
    const focusableEl = event.relatedTarget === this.focusInputViewChild?.nativeElement ? getLastFocusableElement(this.overlayViewChild?.overlayViewChild?.nativeElement, ':not([data-p-hidden-focusable="true"])') : this.focusInputViewChild?.nativeElement;
    focus(focusableEl);
  }
  onOptionMouseEnter(event, index) {
    if (this.focusOnHover) {
      this.changeFocusedOptionIndex(event, index);
    }
  }
  onHeaderCheckboxKeyDown(event) {
    if (this.disabled) {
      event.preventDefault();
      return;
    }
    switch (event.code) {
      case "Space":
        this.onToggleAll(event);
        break;
      case "Enter":
        this.onToggleAll(event);
        break;
      default:
        break;
    }
  }
  onFilterBlur(event) {
    this.focusedOptionIndex.set(-1);
  }
  onHeaderCheckboxFocus() {
    this.headerCheckboxFocus = true;
  }
  onHeaderCheckboxBlur() {
    this.headerCheckboxFocus = false;
  }
  onToggleAll(event) {
    if (this.disabled || this.readonly) {
      return;
    }
    if (this.selectAll != null) {
      this.onSelectAllChange.emit({
        originalEvent: event,
        checked: !this.allSelected()
      });
    } else {
      const selectedDisabledOptions = this.getAllVisibleAndNonVisibleOptions().filter((option) => this.isSelected(option) && (this.optionDisabled ? resolveFieldData(option, this.optionDisabled) : option && option.disabled !== void 0 ? option.disabled : false));
      const visibleOptions = this.allSelected() ? this.visibleOptions().filter((option) => !this.isValidOption(option) && this.isSelected(option)) : this.visibleOptions().filter((option) => this.isSelected(option) || this.isValidOption(option));
      const optionValues = [...selectedDisabledOptions, ...visibleOptions].map((option) => this.getOptionValue(option));
      const value = [...new Set(optionValues)];
      this.updateModel(value, event);
      if (!value.length || value.length === this.getAllVisibleAndNonVisibleOptions().length) {
        this.onSelectAllChange.emit({
          originalEvent: event,
          checked: !!value.length
        });
      }
    }
    if (this.partialSelected()) {
      this.selectedOptions = null;
      this.cd.markForCheck();
    }
    this.onChange.emit({
      originalEvent: event,
      value: this.value
    });
    DomHandler.focus(this.headerCheckboxViewChild?.inputViewChild?.nativeElement);
    this.headerCheckboxFocus = true;
    event.originalEvent.preventDefault();
    event.originalEvent.stopPropagation();
  }
  changeFocusedOptionIndex(event, index) {
    if (this.focusedOptionIndex() !== index) {
      this.focusedOptionIndex.set(index);
      this.scrollInView();
    }
  }
  get virtualScrollerDisabled() {
    return !this.virtualScroll;
  }
  scrollInView(index = -1) {
    const id = index !== -1 ? `${this.id}_${index}` : this.focusedOptionId;
    if (this.itemsViewChild && this.itemsViewChild.nativeElement) {
      const element = findSingle(this.itemsViewChild.nativeElement, `li[id="${id}"]`);
      if (element) {
        element.scrollIntoView && element.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        });
      } else if (!this.virtualScrollerDisabled) {
        setTimeout(() => {
          this.virtualScroll && this.scroller?.scrollToIndex(index !== -1 ? index : this.focusedOptionIndex());
        }, 0);
      }
    }
  }
  get focusedOptionId() {
    return this.focusedOptionIndex() !== -1 ? `${this.id}_${this.focusedOptionIndex()}` : null;
  }
  writeValue(value) {
    this.value = value;
    this.modelValue.set(this.value);
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
  allSelected() {
    return this.selectAll !== null ? this.selectAll : isNotEmpty(this.visibleOptions()) && this.visibleOptions().every((option) => this.isOptionGroup(option) || this.isOptionDisabled(option) || this.isSelected(option));
  }
  partialSelected() {
    return this.selectedOptions && this.selectedOptions.length > 0 && this.selectedOptions.length < this.options.length;
  }
  /**
   * Displays the panel.
   * @group Method
   */
  show(isFocus) {
    this.overlayVisible = true;
    const focusedOptionIndex = this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : this.findSelectedOptionIndex();
    this.focusedOptionIndex.set(focusedOptionIndex);
    if (isFocus) {
      focus(this.focusInputViewChild?.nativeElement);
    }
    this.cd.markForCheck();
  }
  /**
   * Hides the panel.
   * @group Method
   */
  hide(isFocus) {
    this.overlayVisible = false;
    this.focusedOptionIndex.set(-1);
    if (this.filter && this.resetFilterOnHide) {
      this.resetFilter();
    }
    if (this.overlayOptions?.mode === "modal") {
      unblockBodyScroll();
    }
    isFocus && focus(this.focusInputViewChild?.nativeElement);
    this.onPanelHide.emit();
    this.cd.markForCheck();
  }
  onOverlayAnimationStart(event) {
    switch (event.toState) {
      case "visible":
        this.itemsWrapper = findSingle(this.overlayViewChild?.overlayViewChild?.nativeElement, this.virtualScroll ? ".p-scroller" : ".p-multiselect-items-wrapper");
        this.virtualScroll && this.scroller?.setContentEl(this.itemsViewChild?.nativeElement);
        if (this._options() && this._options().length) {
          if (this.virtualScroll) {
            const selectedIndex = isNotEmpty(this.modelValue()) ? this.focusedOptionIndex() : -1;
            if (selectedIndex !== -1) {
              this.scroller?.scrollToIndex(selectedIndex);
            }
          } else {
            let selectedListItem = findSingle(this.itemsWrapper, '[data-p-highlight="true"]');
            if (selectedListItem) {
              selectedListItem.scrollIntoView({
                block: "nearest",
                inline: "nearest"
              });
            }
          }
        }
        if (this.filterInputChild && this.filterInputChild.nativeElement) {
          this.preventModelTouched = true;
          if (this.autofocusFilter) {
            this.filterInputChild.nativeElement.focus();
          }
        }
        this.onPanelShow.emit();
      case "void":
        this.itemsWrapper = null;
        this.onModelTouched();
        break;
    }
  }
  resetFilter() {
    if (this.filterInputChild && this.filterInputChild.nativeElement) {
      this.filterInputChild.nativeElement.value = "";
    }
    this._filterValue.set(null);
    this._filteredOptions = null;
  }
  close(event) {
    this.hide();
    event.preventDefault();
    event.stopPropagation();
  }
  clear(event) {
    this.value = null;
    this.updateModel(null, event);
    this.selectedOptions = null;
    this.onClear.emit();
    this._disableTooltip = true;
    event.stopPropagation();
  }
  labelContainerMouseLeave() {
    if (this._disableTooltip) this._disableTooltip = false;
  }
  removeOption(optionValue, event) {
    let value = this.modelValue().filter((val) => !equals(val, optionValue, this.equalityKey()));
    this.updateModel(value, event);
    this.onChange.emit({
      originalEvent: event,
      value,
      itemValue: optionValue
    });
    this.onRemove.emit({
      newValue: value,
      removed: optionValue
    });
    event && event.stopPropagation();
  }
  findNextItem(item) {
    let nextItem = item.nextElementSibling;
    if (nextItem) return hasClass(nextItem.children[0], "p-disabled") || isHidden(nextItem.children[0]) || hasClass(nextItem, "p-multiselect-item-group") ? this.findNextItem(nextItem) : nextItem.children[0];
    else return null;
  }
  findPrevItem(item) {
    let prevItem = item.previousElementSibling;
    if (prevItem) return hasClass(prevItem.children[0], "p-disabled") || isHidden(prevItem.children[0]) || hasClass(prevItem, "p-multiselect-item-group") ? this.findPrevItem(prevItem) : prevItem.children[0];
    else return null;
  }
  findNextOptionIndex(index) {
    const matchedOptionIndex = index < this.visibleOptions().length - 1 ? this.visibleOptions().slice(index + 1).findIndex((option) => this.isValidOption(option)) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : index;
  }
  findPrevOptionIndex(index) {
    const matchedOptionIndex = index > 0 ? findLastIndex(this.visibleOptions().slice(0, index), (option) => this.isValidOption(option)) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex : index;
  }
  findLastSelectedOptionIndex() {
    return this.hasSelectedOption() ? findLastIndex(this.visibleOptions(), (option) => this.isValidSelectedOption(option)) : -1;
  }
  findLastFocusedOptionIndex() {
    const selectedIndex = this.findLastSelectedOptionIndex();
    return selectedIndex < 0 ? this.findLastOptionIndex() : selectedIndex;
  }
  findLastOptionIndex() {
    return findLastIndex(this.visibleOptions(), (option) => this.isValidOption(option));
  }
  searchOptions(event, char) {
    this.searchValue = (this.searchValue || "") + char;
    let optionIndex = -1;
    let matched = false;
    if (this.focusedOptionIndex() !== -1) {
      optionIndex = this.visibleOptions().slice(this.focusedOptionIndex()).findIndex((option) => this.isOptionMatched(option));
      optionIndex = optionIndex === -1 ? this.visibleOptions().slice(0, this.focusedOptionIndex()).findIndex((option) => this.isOptionMatched(option)) : optionIndex + this.focusedOptionIndex();
    } else {
      optionIndex = this.visibleOptions().findIndex((option) => this.isOptionMatched(option));
    }
    if (optionIndex !== -1) {
      matched = true;
    }
    if (optionIndex === -1 && this.focusedOptionIndex() === -1) {
      optionIndex = this.findFirstFocusedOptionIndex();
    }
    if (optionIndex !== -1) {
      this.changeFocusedOptionIndex(event, optionIndex);
    }
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
    this.searchTimeout = setTimeout(() => {
      this.searchValue = "";
      this.searchTimeout = null;
    }, 500);
    return matched;
  }
  activateFilter() {
    if (this.hasFilter() && this._options) {
      if (this.group) {
        let filteredGroups = [];
        for (let optgroup of this.options) {
          let filteredSubOptions = this.filterService.filter(this.getOptionGroupChildren(optgroup), this.searchFields(), this.filterValue, this.filterMatchMode, this.filterLocale);
          if (filteredSubOptions && filteredSubOptions.length) {
            filteredGroups.push(__spreadValues(__spreadValues({}, optgroup), {
              [this.optionGroupChildren]: filteredSubOptions
            }));
          }
        }
        this._filteredOptions = filteredGroups;
      } else {
        this._filteredOptions = this.filterService.filter(this.options, this.searchFields(), this.filterValue, this.filterMatchMode, this.filterLocale);
      }
    } else {
      this._filteredOptions = null;
    }
  }
  hasFocusableElements() {
    return getFocusableElements(this.overlayViewChild.overlayViewChild.nativeElement, ':not([data-p-hidden-focusable="true"])').length > 0;
  }
  hasFilter() {
    return this._filterValue() && this._filterValue().trim().length > 0;
  }
  static \u0275fac = function MultiSelect_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MultiSelect)(\u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(FilterService), \u0275\u0275directiveInject(OverlayService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MultiSelect,
    selectors: [["p-multiSelect"], ["p-multiselect"], ["p-multi-select"]],
    contentQueries: function MultiSelect_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, Footer, 5);
        \u0275\u0275contentQuery(dirIndex, Header, 5);
        \u0275\u0275contentQuery(dirIndex, _c44, 4);
        \u0275\u0275contentQuery(dirIndex, _c54, 4);
        \u0275\u0275contentQuery(dirIndex, _c64, 4);
        \u0275\u0275contentQuery(dirIndex, _c74, 4);
        \u0275\u0275contentQuery(dirIndex, _c83, 4);
        \u0275\u0275contentQuery(dirIndex, _c93, 4);
        \u0275\u0275contentQuery(dirIndex, _c103, 4);
        \u0275\u0275contentQuery(dirIndex, _c113, 4);
        \u0275\u0275contentQuery(dirIndex, _c123, 4);
        \u0275\u0275contentQuery(dirIndex, _c133, 4);
        \u0275\u0275contentQuery(dirIndex, _c142, 4);
        \u0275\u0275contentQuery(dirIndex, _c152, 4);
        \u0275\u0275contentQuery(dirIndex, _c162, 4);
        \u0275\u0275contentQuery(dirIndex, _c172, 4);
        \u0275\u0275contentQuery(dirIndex, _c182, 4);
        \u0275\u0275contentQuery(dirIndex, _c19, 4);
        \u0275\u0275contentQuery(dirIndex, _c20, 4);
        \u0275\u0275contentQuery(dirIndex, _c21, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.footerFacet = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerFacet = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.itemTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.groupTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.loaderTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.filterTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.footerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.emptyFilterTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.emptyTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.selectedItemsTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.checkIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.loadingIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.filterIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.removeTokenIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chipIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.clearIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.dropdownIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.itemCheckboxIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerCheckboxIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function MultiSelect_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c222, 5);
        \u0275\u0275viewQuery(_c232, 5);
        \u0275\u0275viewQuery(_c242, 5);
        \u0275\u0275viewQuery(_c25, 5);
        \u0275\u0275viewQuery(_c26, 5);
        \u0275\u0275viewQuery(_c27, 5);
        \u0275\u0275viewQuery(_c28, 5);
        \u0275\u0275viewQuery(_c29, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overlayViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.filterInputChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.focusInputViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.itemsViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.scroller = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.lastHiddenFocusableElementOnOverlay = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.firstHiddenFocusableElementOnOverlay = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerCheckboxViewChild = _t.first);
      }
    },
    hostVars: 5,
    hostBindings: function MultiSelect_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function MultiSelect_click_HostBindingHandler($event) {
          return ctx.onContainerClick($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("id", ctx.id);
        \u0275\u0275styleMap(ctx.style);
        \u0275\u0275classMap(ctx.hostClasses);
      }
    },
    inputs: {
      id: "id",
      ariaLabel: "ariaLabel",
      style: "style",
      styleClass: "styleClass",
      panelStyle: "panelStyle",
      panelStyleClass: "panelStyleClass",
      inputId: "inputId",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      fluid: [2, "fluid", "fluid", booleanAttribute],
      readonly: [2, "readonly", "readonly", booleanAttribute],
      group: [2, "group", "group", booleanAttribute],
      filter: [2, "filter", "filter", booleanAttribute],
      filterPlaceHolder: "filterPlaceHolder",
      filterLocale: "filterLocale",
      overlayVisible: [2, "overlayVisible", "overlayVisible", booleanAttribute],
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      variant: "variant",
      appendTo: "appendTo",
      dataKey: "dataKey",
      name: "name",
      ariaLabelledBy: "ariaLabelledBy",
      displaySelectedLabel: "displaySelectedLabel",
      maxSelectedLabels: "maxSelectedLabels",
      selectionLimit: [2, "selectionLimit", "selectionLimit", numberAttribute],
      selectedItemsLabel: "selectedItemsLabel",
      showToggleAll: [2, "showToggleAll", "showToggleAll", booleanAttribute],
      emptyFilterMessage: "emptyFilterMessage",
      emptyMessage: "emptyMessage",
      resetFilterOnHide: [2, "resetFilterOnHide", "resetFilterOnHide", booleanAttribute],
      dropdownIcon: "dropdownIcon",
      chipIcon: "chipIcon",
      optionLabel: "optionLabel",
      optionValue: "optionValue",
      optionDisabled: "optionDisabled",
      optionGroupLabel: "optionGroupLabel",
      optionGroupChildren: "optionGroupChildren",
      showHeader: [2, "showHeader", "showHeader", booleanAttribute],
      filterBy: "filterBy",
      scrollHeight: "scrollHeight",
      lazy: [2, "lazy", "lazy", booleanAttribute],
      virtualScroll: [2, "virtualScroll", "virtualScroll", booleanAttribute],
      loading: [2, "loading", "loading", booleanAttribute],
      virtualScrollItemSize: [2, "virtualScrollItemSize", "virtualScrollItemSize", numberAttribute],
      loadingIcon: "loadingIcon",
      virtualScrollOptions: "virtualScrollOptions",
      overlayOptions: "overlayOptions",
      ariaFilterLabel: "ariaFilterLabel",
      filterMatchMode: "filterMatchMode",
      tooltip: "tooltip",
      tooltipPosition: "tooltipPosition",
      tooltipPositionStyle: "tooltipPositionStyle",
      tooltipStyleClass: "tooltipStyleClass",
      autofocusFilter: [2, "autofocusFilter", "autofocusFilter", booleanAttribute],
      display: "display",
      autocomplete: "autocomplete",
      size: "size",
      showClear: [2, "showClear", "showClear", booleanAttribute],
      autofocus: [2, "autofocus", "autofocus", booleanAttribute],
      autoZIndex: "autoZIndex",
      baseZIndex: "baseZIndex",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      defaultLabel: "defaultLabel",
      placeholder: "placeholder",
      options: "options",
      filterValue: "filterValue",
      itemSize: "itemSize",
      selectAll: "selectAll",
      focusOnHover: [2, "focusOnHover", "focusOnHover", booleanAttribute],
      filterFields: "filterFields",
      selectOnFocus: [2, "selectOnFocus", "selectOnFocus", booleanAttribute],
      autoOptionFocus: [2, "autoOptionFocus", "autoOptionFocus", booleanAttribute]
    },
    outputs: {
      onChange: "onChange",
      onFilter: "onFilter",
      onFocus: "onFocus",
      onBlur: "onBlur",
      onClick: "onClick",
      onClear: "onClear",
      onPanelShow: "onPanelShow",
      onPanelHide: "onPanelHide",
      onLazyLoad: "onLazyLoad",
      onRemove: "onRemove",
      onSelectAllChange: "onSelectAllChange"
    },
    features: [\u0275\u0275ProvidersFeature([MULTISELECT_VALUE_ACCESSOR, MultiSelectStyle]), \u0275\u0275InputTransformsFeature, \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c31,
    decls: 16,
    vars: 35,
    consts: [["focusInput", ""], ["elseBlock", ""], ["overlay", ""], ["content", ""], ["token", ""], ["removeicon", ""], ["firstHiddenFocusableEl", ""], ["buildInItems", ""], ["lastHiddenFocusableEl", ""], ["builtInFilterElement", ""], ["headerCheckbox", ""], ["checkboxicon", ""], ["filterInput", ""], ["scroller", ""], ["loader", ""], ["items", ""], [1, "p-hidden-accessible"], ["role", "combobox", 3, "focus", "blur", "keydown", "pTooltip", "tooltipPosition", "positionStyle", "tooltipStyleClass", "pAutoFocus"], [1, "p-multiselect-label-container", 3, "mouseleave", "pTooltip", "tooltipDisabled", "tooltipPosition", "positionStyle", "tooltipStyleClass"], [3, "ngClass"], [4, "ngIf"], [1, "p-multiselect-dropdown"], [4, "ngIf", "ngIfElse"], [3, "visibleChange", "onAnimationStart", "onHide", "visible", "options", "target", "appendTo", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions"], ["class", "p-multiselect-chip-item", 4, "ngFor", "ngForOf"], [1, "p-multiselect-chip-item"], ["styleClass", "p-multiselect-chip", 3, "onRemove", "label", "removable", "removeIcon"], ["class", "p-multiselect-chip-icon", 3, "click", 4, "ngIf"], [1, "p-multiselect-chip-icon", 3, "click"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "p-multiselect-clear-icon", 3, "click", 4, "ngIf"], [1, "p-multiselect-clear-icon", 3, "click"], [4, "ngTemplateOutlet"], ["aria-hidden", "true", 3, "ngClass", 4, "ngIf"], ["aria-hidden", "true", 3, "class", 4, "ngIf"], ["aria-hidden", "true", 3, "ngClass"], ["aria-hidden", "true"], ["class", "p-multiselect-dropdown-icon", 4, "ngIf"], ["class", "p-multiselect-dropdown-icon", 3, "ngClass", 4, "ngIf"], [3, "styleClass", 4, "ngIf"], [1, "p-multiselect-dropdown-icon", 3, "ngClass"], [3, "styleClass"], [1, "p-multiselect-dropdown-icon"], [3, "ngClass", "ngStyle"], ["role", "presentation", 1, "p-hidden-accessible", "p-hidden-focusable", 3, "focus"], ["class", "p-multiselect-header", 4, "ngIf"], [1, "p-multiselect-list-container"], [3, "items", "style", "itemSize", "autoSize", "tabindex", "lazy", "options", "onLazyLoad", 4, "ngIf"], [1, "p-multiselect-header"], [3, "ngModel", "binary", "variant", "disabled", "onChange", 4, "ngIf"], ["class", "p-multiselect-filter-container", 4, "ngIf"], [3, "onChange", "ngModel", "binary", "variant", "disabled"], [1, "p-multiselect-filter-container"], ["pInputText", "", "type", "text", "role", "searchbox", 1, "p-multiselect-filter", 3, "input", "keydown", "click", "blur", "variant", "value", "disabled"], ["class", "p-multiselect-filter-icon", 4, "ngIf"], [1, "p-multiselect-filter-icon"], [3, "onLazyLoad", "items", "itemSize", "autoSize", "tabindex", "lazy", "options"], ["role", "listbox", "aria-multiselectable", "true", 1, "p-multiselect-list", 3, "ngClass"], ["ngFor", "", 3, "ngForOf"], ["class", "p-multiselect-empty-message", "role", "option", 3, "ngStyle", 4, "ngIf"], ["role", "option", 1, "p-multiselect-option-group", 3, "ngStyle"], [3, "onClick", "onMouseEnter", "id", "option", "selected", "label", "disabled", "template", "checkIconTemplate", "itemCheckboxIconTemplate", "itemSize", "focused", "ariaPosInset", "ariaSetSize", "variant"], ["role", "option", 1, "p-multiselect-empty-message", 3, "ngStyle"]],
    template: function MultiSelect_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275projectionDef(_c30);
        \u0275\u0275elementStart(0, "div", 16)(1, "input", 17, 0);
        \u0275\u0275listener("focus", function MultiSelect_Template_input_focus_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onInputFocus($event));
        })("blur", function MultiSelect_Template_input_blur_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onInputBlur($event));
        })("keydown", function MultiSelect_Template_input_keydown_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onKeyDown($event));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(3, "div", 18);
        \u0275\u0275listener("mouseleave", function MultiSelect_Template_div_mouseleave_3_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.labelContainerMouseLeave());
        });
        \u0275\u0275elementStart(4, "div", 19);
        \u0275\u0275template(5, MultiSelect_ng_container_5_Template, 3, 2, "ng-container", 20)(6, MultiSelect_ng_container_6_Template, 3, 6, "ng-container", 20);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, MultiSelect_ng_container_7_Template, 3, 2, "ng-container", 20);
        \u0275\u0275elementStart(8, "div", 21);
        \u0275\u0275template(9, MultiSelect_ng_container_9_Template, 3, 2, "ng-container", 22)(10, MultiSelect_ng_template_10_Template, 2, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "p-overlay", 23, 2);
        \u0275\u0275twoWayListener("visibleChange", function MultiSelect_Template_p_overlay_visibleChange_12_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.overlayVisible, $event) || (ctx.overlayVisible = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("onAnimationStart", function MultiSelect_Template_p_overlay_onAnimationStart_12_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onOverlayAnimationStart($event));
        })("onHide", function MultiSelect_Template_p_overlay_onHide_12_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.hide());
        });
        \u0275\u0275template(14, MultiSelect_ng_template_14_Template, 13, 18, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_15_0;
        const elseBlock_r24 = \u0275\u0275reference(11);
        \u0275\u0275attribute("data-p-hidden-accessible", true);
        \u0275\u0275advance();
        \u0275\u0275property("pTooltip", ctx.tooltip)("tooltipPosition", ctx.tooltipPosition)("positionStyle", ctx.tooltipPositionStyle)("tooltipStyleClass", ctx.tooltipStyleClass)("pAutoFocus", ctx.autofocus);
        \u0275\u0275attribute("aria-disabled", ctx.disabled)("id", ctx.inputId)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledBy)("aria-haspopup", "listbox")("aria-expanded", (tmp_15_0 = ctx.overlayVisible) !== null && tmp_15_0 !== void 0 ? tmp_15_0 : false)("aria-controls", ctx.overlayVisible ? ctx.id + "_list" : null)("tabindex", !ctx.disabled ? ctx.tabindex : -1)("aria-activedescendant", ctx.focused ? ctx.focusedOptionId : void 0)("value", ctx.label() || "empty");
        \u0275\u0275advance(2);
        \u0275\u0275property("pTooltip", ctx.tooltip)("tooltipDisabled", ctx._disableTooltip)("tooltipPosition", ctx.tooltipPosition)("positionStyle", ctx.tooltipPositionStyle)("tooltipStyleClass", ctx.tooltipStyleClass);
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", ctx.labelClass);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.selectedItemsTemplate && !ctx._selectedItemsTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedItemsTemplate || ctx._selectedItemsTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isVisibleClearIcon);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.loading)("ngIfElse", elseBlock_r24);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("visible", ctx.overlayVisible);
        \u0275\u0275property("options", ctx.overlayOptions)("target", "@parent")("appendTo", ctx.appendTo)("autoZIndex", ctx.autoZIndex)("baseZIndex", ctx.baseZIndex)("showTransitionOptions", ctx.showTransitionOptions)("hideTransitionOptions", ctx.hideTransitionOptions);
      }
    },
    dependencies: [CommonModule, NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, MultiSelectItem, Overlay, SharedModule, Tooltip, Scroller, AutoFocus, CheckIcon, SearchIcon, TimesIcon, ChevronDownIcon, IconField, InputIcon, InputText, Chip, Checkbox, FormsModule, NgControlStatus, NgModel],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MultiSelect, [{
    type: Component,
    args: [{
      selector: "p-multiSelect, p-multiselect, p-multi-select",
      standalone: true,
      imports: [CommonModule, MultiSelectItem, Overlay, SharedModule, Tooltip, Scroller, AutoFocus, CheckIcon, SearchIcon, TimesIcon, ChevronDownIcon, IconField, InputIcon, InputText, Chip, Checkbox, FormsModule],
      template: `
        <div class="p-hidden-accessible" [attr.data-p-hidden-accessible]="true">
            <input
                #focusInput
                [pTooltip]="tooltip"
                [tooltipPosition]="tooltipPosition"
                [positionStyle]="tooltipPositionStyle"
                [tooltipStyleClass]="tooltipStyleClass"
                [attr.aria-disabled]="disabled"
                [attr.id]="inputId"
                role="combobox"
                [attr.aria-label]="ariaLabel"
                [attr.aria-labelledby]="ariaLabelledBy"
                [attr.aria-haspopup]="'listbox'"
                [attr.aria-expanded]="overlayVisible ?? false"
                [attr.aria-controls]="overlayVisible ? id + '_list' : null"
                [attr.tabindex]="!disabled ? tabindex : -1"
                [attr.aria-activedescendant]="focused ? focusedOptionId : undefined"
                (focus)="onInputFocus($event)"
                (blur)="onInputBlur($event)"
                (keydown)="onKeyDown($event)"
                [pAutoFocus]="autofocus"
                [attr.value]="label() || 'empty'"
            />
        </div>
        <div
            class="p-multiselect-label-container"
            [pTooltip]="tooltip"
            (mouseleave)="labelContainerMouseLeave()"
            [tooltipDisabled]="_disableTooltip"
            [tooltipPosition]="tooltipPosition"
            [positionStyle]="tooltipPositionStyle"
            [tooltipStyleClass]="tooltipStyleClass"
        >
            <div [ngClass]="labelClass">
                <ng-container *ngIf="!selectedItemsTemplate && !_selectedItemsTemplate">
                    <ng-container *ngIf="display === 'comma'">{{ label() || 'empty' }}</ng-container>
                    <ng-container *ngIf="display === 'chip'">
                        <div #token *ngFor="let item of chipSelectedItems(); let i = index" class="p-multiselect-chip-item">
                            <p-chip styleClass="p-multiselect-chip" [label]="getLabelByValue(item)" [removable]="true" (onRemove)="removeOption(item, $event)" [removeIcon]="chipIcon">
                                <ng-container *ngIf="chipIconTemplate || _chipIconTemplate || removeTokenIconTemplate || _removeTokenIconTemplate">
                                    <ng-template #removeicon>
                                        <ng-container *ngIf="!disabled">
                                            <span
                                                class="p-multiselect-chip-icon"
                                                *ngIf="chipIconTemplate || _chipIconTemplate || removeTokenIconTemplate || _removeTokenIconTemplate"
                                                (click)="removeOption(item, $event)"
                                                [attr.data-pc-section]="'clearicon'"
                                                [attr.aria-hidden]="true"
                                            >
                                                <ng-container *ngTemplateOutlet="chipIconTemplate || _chipIconTemplate || removeTokenIconTemplate || _removeTokenIconTemplate; context: { class: 'p-multiselect-chip-icon' }"></ng-container>
                                            </span>
                                        </ng-container>
                                    </ng-template>
                                </ng-container>
                            </p-chip>
                        </div>
                        <ng-container *ngIf="!modelValue() || modelValue().length === 0">{{ placeholder() || defaultLabel || 'empty' }}</ng-container>
                    </ng-container>
                </ng-container>
                <ng-container *ngIf="selectedItemsTemplate || _selectedItemsTemplate">
                    <ng-container *ngTemplateOutlet="selectedItemsTemplate || _selectedItemsTemplate; context: { $implicit: selectedOptions, removeChip: removeOption.bind(this) }"></ng-container>
                    <ng-container *ngIf="!modelValue() || modelValue().length === 0">{{ placeholder() || defaultLabel || 'empty' }}</ng-container>
                </ng-container>
            </div>
        </div>
        <ng-container *ngIf="isVisibleClearIcon">
            <TimesIcon *ngIf="!clearIconTemplate && !_clearIconTemplate" class="p-multiselect-clear-icon" (click)="clear($event)" [attr.data-pc-section]="'clearicon'" [attr.aria-hidden]="true" />
            <span *ngIf="clearIconTemplate || _clearIconTemplate" class="p-multiselect-clear-icon" (click)="clear($event)" [attr.data-pc-section]="'clearicon'" [attr.aria-hidden]="true">
                <ng-template *ngTemplateOutlet="clearIconTemplate || _clearIconTemplate"></ng-template>
            </span>
        </ng-container>
        <div class="p-multiselect-dropdown">
            <ng-container *ngIf="loading; else elseBlock">
                <ng-container *ngIf="loadingIconTemplate || _loadingIconTemplate">
                    <ng-container *ngTemplateOutlet="loadingIconTemplate || _loadingIconTemplate"></ng-container>
                </ng-container>
                <ng-container *ngIf="!loadingIconTemplate && !_loadingIconTemplate">
                    <span *ngIf="loadingIcon" [ngClass]="'p-multiselect-loading-icon pi-spin ' + loadingIcon" aria-hidden="true"></span>
                    <span *ngIf="!loadingIcon" [class]="'p-multiselect-loading-icon pi pi-spinner pi-spin'" aria-hidden="true"></span>
                </ng-container>
            </ng-container>
            <ng-template #elseBlock>
                <ng-container *ngIf="!dropdownIconTemplate && !_dropdownIconTemplate">
                    <span *ngIf="dropdownIcon" class="p-multiselect-dropdown-icon" [ngClass]="dropdownIcon" [attr.data-pc-section]="'triggericon'" [attr.aria-hidden]="true"></span>
                    <ChevronDownIcon *ngIf="!dropdownIcon" [styleClass]="'p-multiselect-dropdown-icon'" [attr.data-pc-section]="'triggericon'" [attr.aria-hidden]="true" />
                </ng-container>
                <span *ngIf="dropdownIconTemplate || _dropdownIconTemplate" class="p-multiselect-dropdown-icon" [attr.data-pc-section]="'triggericon'" [attr.aria-hidden]="true">
                    <ng-template *ngTemplateOutlet="dropdownIconTemplate || _dropdownIconTemplate"></ng-template>
                </span>
            </ng-template>
        </div>
        <p-overlay
            #overlay
            [(visible)]="overlayVisible"
            [options]="overlayOptions"
            [target]="'@parent'"
            [appendTo]="appendTo"
            [autoZIndex]="autoZIndex"
            [baseZIndex]="baseZIndex"
            [showTransitionOptions]="showTransitionOptions"
            [hideTransitionOptions]="hideTransitionOptions"
            (onAnimationStart)="onOverlayAnimationStart($event)"
            (onHide)="hide()"
        >
            <ng-template #content>
                <div [attr.id]="id + '_list'" [ngClass]="'p-multiselect-overlay p-component'" [ngStyle]="panelStyle" [class]="panelStyleClass">
                    <span
                        #firstHiddenFocusableEl
                        role="presentation"
                        class="p-hidden-accessible p-hidden-focusable"
                        [attr.tabindex]="0"
                        (focus)="onFirstHiddenFocus($event)"
                        [attr.data-p-hidden-accessible]="true"
                        [attr.data-p-hidden-focusable]="true"
                    >
                    </span>
                    <ng-container *ngTemplateOutlet="headerTemplate || _headerTemplate"></ng-container>
                    <div class="p-multiselect-header" *ngIf="showHeader">
                        <ng-content select="p-header"></ng-content>
                        <ng-container *ngIf="filterTemplate || _filterTemplate; else builtInFilterElement">
                            <ng-container *ngTemplateOutlet="filterTemplate || _filterTemplate; context: { options: filterOptions }"></ng-container>
                        </ng-container>
                        <ng-template #builtInFilterElement>
                            <p-checkbox [ngModel]="allSelected()" [binary]="true" (onChange)="onToggleAll($event)" *ngIf="showToggleAll && !selectionLimit" [variant]="variant" [disabled]="disabled" #headerCheckbox>
                                <ng-template #checkboxicon let-klass="class">
                                    <CheckIcon *ngIf="!headerCheckboxIconTemplate && !_headerCheckboxIconTemplate && allSelected()" [styleClass]="klass" [attr.data-pc-section]="'icon'" />
                                    <ng-template
                                        *ngTemplateOutlet="
                                            headerCheckboxIconTemplate || _headerCheckboxIconTemplate;
                                            context: {
                                                checked: allSelected(),
                                                partialSelected: partialSelected(),
                                                class: klass
                                            }
                                        "
                                    ></ng-template>
                                </ng-template>
                            </p-checkbox>

                            <div class="p-multiselect-filter-container" *ngIf="filter">
                                <p-iconfield>
                                    <input
                                        #filterInput
                                        pInputText
                                        [variant]="variant"
                                        type="text"
                                        [attr.autocomplete]="autocomplete"
                                        role="searchbox"
                                        [attr.aria-owns]="id + '_list'"
                                        [attr.aria-activedescendant]="focusedOptionId"
                                        [value]="_filterValue() || ''"
                                        (input)="onFilterInputChange($event)"
                                        (keydown)="onFilterKeyDown($event)"
                                        (click)="onInputClick($event)"
                                        (blur)="onFilterBlur($event)"
                                        class="p-multiselect-filter"
                                        [disabled]="disabled"
                                        [attr.placeholder]="filterPlaceHolder"
                                        [attr.aria-label]="ariaFilterLabel"
                                    />
                                    <p-inputicon>
                                        <SearchIcon [styleClass]="'p-multiselect-filter-icon'" *ngIf="!filterIconTemplate && !_filterIconTemplate" />
                                        <span *ngIf="filterIconTemplate || _filterIconTemplate" class="p-multiselect-filter-icon">
                                            <ng-template *ngTemplateOutlet="filterIconTemplate || _filterIconTemplate"></ng-template>
                                        </span>
                                    </p-inputicon>
                                </p-iconfield>
                            </div>
                        </ng-template>
                    </div>
                    <div class="p-multiselect-list-container" [style.max-height]="virtualScroll ? 'auto' : scrollHeight || 'auto'">
                        <p-scroller
                            *ngIf="virtualScroll"
                            #scroller
                            [items]="visibleOptions()"
                            [style]="{ height: scrollHeight }"
                            [itemSize]="virtualScrollItemSize || _itemSize"
                            [autoSize]="true"
                            [tabindex]="-1"
                            [lazy]="lazy"
                            (onLazyLoad)="onLazyLoad.emit($event)"
                            [options]="virtualScrollOptions"
                        >
                            <ng-template #content let-items let-scrollerOptions="options">
                                <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: items, options: scrollerOptions }"></ng-container>
                            </ng-template>
                            <ng-container *ngIf="loaderTemplate || _loaderTemplate">
                                <ng-template #loader let-scrollerOptions="options">
                                    <ng-container *ngTemplateOutlet="loaderTemplate || _loaderTemplate; context: { options: scrollerOptions }"></ng-container>
                                </ng-template>
                            </ng-container>
                        </p-scroller>
                        <ng-container *ngIf="!virtualScroll">
                            <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: visibleOptions(), options: {} }"></ng-container>
                        </ng-container>

                        <ng-template #buildInItems let-items let-scrollerOptions="options">
                            <ul #items class="p-multiselect-list" [ngClass]="scrollerOptions.contentStyleClass" [style]="scrollerOptions.contentStyle" role="listbox" aria-multiselectable="true" [attr.aria-label]="listLabel">
                                <ng-template ngFor let-option [ngForOf]="items" let-i="index">
                                    <ng-container *ngIf="isOptionGroup(option)">
                                        <li [attr.id]="id + '_' + getOptionIndex(i, scrollerOptions)" class="p-multiselect-option-group" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }" role="option">
                                            <span *ngIf="!groupTemplate">{{ getOptionGroupLabel(option.optionGroup) }}</span>
                                            <ng-container *ngTemplateOutlet="groupTemplate; context: { $implicit: option.optionGroup }"></ng-container>
                                        </li>
                                    </ng-container>
                                    <ng-container *ngIf="!isOptionGroup(option)">
                                        <p-multiselect-item
                                            [id]="id + '_' + getOptionIndex(i, scrollerOptions)"
                                            [option]="option"
                                            [selected]="isSelected(option)"
                                            [label]="getOptionLabel(option)"
                                            [disabled]="isOptionDisabled(option)"
                                            [template]="itemTemplate || _itemTemplate"
                                            [checkIconTemplate]="checkIconTemplate || _checkIconTemplate"
                                            [itemCheckboxIconTemplate]="itemCheckboxIconTemplate || _itemCheckboxIconTemplate"
                                            [itemSize]="scrollerOptions.itemSize"
                                            [focused]="focusedOptionIndex() === getOptionIndex(i, scrollerOptions)"
                                            [ariaPosInset]="getAriaPosInset(getOptionIndex(i, scrollerOptions))"
                                            [ariaSetSize]="ariaSetSize"
                                            [variant]="variant"
                                            (onClick)="onOptionSelect($event, false, getOptionIndex(i, scrollerOptions))"
                                            (onMouseEnter)="onOptionMouseEnter($event, getOptionIndex(i, scrollerOptions))"
                                        ></p-multiselect-item>
                                    </ng-container>
                                </ng-template>

                                <li *ngIf="hasFilter() && isEmpty()" class="p-multiselect-empty-message" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }" role="option">
                                    @if (!emptyFilterTemplate && !_emptyFilterTemplate && !emptyTemplate && !_emptyTemplate) {
                                        {{ emptyFilterMessageLabel }}
                                    } @else {
                                        <ng-container *ngTemplateOutlet="emptyFilterTemplate || _emptyFilterTemplate || emptyTemplate || _emptyFilterTemplate"></ng-container>
                                    }
                                </li>
                                <li *ngIf="!hasFilter() && isEmpty()" class="p-multiselect-empty-message" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }" role="option">
                                    @if (!emptyTemplate && !_emptyTemplate) {
                                        {{ emptyMessageLabel }}
                                    } @else {
                                        <ng-container *ngTemplateOutlet="emptyTemplate || _emptyTemplate"></ng-container>
                                    }
                                </li>
                            </ul>
                        </ng-template>
                    </div>
                    <div *ngIf="footerFacet || footerTemplate || _footerTemplate">
                        <ng-content select="p-footer"></ng-content>
                        <ng-container *ngTemplateOutlet="footerTemplate || _footerTemplate"></ng-container>
                    </div>

                    <span
                        #lastHiddenFocusableEl
                        role="presentation"
                        class="p-hidden-accessible p-hidden-focusable"
                        [attr.tabindex]="0"
                        (focus)="onLastHiddenFocus($event)"
                        [attr.data-p-hidden-accessible]="true"
                        [attr.data-p-hidden-focusable]="true"
                    ></span>
                </div>
            </ng-template>
        </p-overlay>
    `,
      providers: [MULTISELECT_VALUE_ACCESSOR, MultiSelectStyle],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[attr.id]": "id",
        "[style]": "style",
        "(click)": "onContainerClick($event)"
      }
    }]
  }], () => [{
    type: NgZone
  }, {
    type: FilterService
  }, {
    type: OverlayService
  }], {
    id: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    panelStyle: [{
      type: Input
    }],
    panelStyleClass: [{
      type: Input
    }],
    inputId: [{
      type: Input
    }],
    disabled: [{
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
    readonly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    group: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    filter: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    filterPlaceHolder: [{
      type: Input
    }],
    filterLocale: [{
      type: Input
    }],
    overlayVisible: [{
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
    variant: [{
      type: Input
    }],
    appendTo: [{
      type: Input
    }],
    dataKey: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    displaySelectedLabel: [{
      type: Input
    }],
    maxSelectedLabels: [{
      type: Input
    }],
    selectionLimit: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    selectedItemsLabel: [{
      type: Input
    }],
    showToggleAll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    emptyFilterMessage: [{
      type: Input
    }],
    emptyMessage: [{
      type: Input
    }],
    resetFilterOnHide: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    dropdownIcon: [{
      type: Input
    }],
    chipIcon: [{
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
    optionGroupLabel: [{
      type: Input
    }],
    optionGroupChildren: [{
      type: Input
    }],
    showHeader: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    filterBy: [{
      type: Input
    }],
    scrollHeight: [{
      type: Input
    }],
    lazy: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    virtualScroll: [{
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
    virtualScrollItemSize: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    loadingIcon: [{
      type: Input
    }],
    virtualScrollOptions: [{
      type: Input
    }],
    overlayOptions: [{
      type: Input
    }],
    ariaFilterLabel: [{
      type: Input
    }],
    filterMatchMode: [{
      type: Input
    }],
    tooltip: [{
      type: Input
    }],
    tooltipPosition: [{
      type: Input
    }],
    tooltipPositionStyle: [{
      type: Input
    }],
    tooltipStyleClass: [{
      type: Input
    }],
    autofocusFilter: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    display: [{
      type: Input
    }],
    autocomplete: [{
      type: Input
    }],
    size: [{
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
    autoZIndex: [{
      type: Input
    }],
    baseZIndex: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    defaultLabel: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    filterValue: [{
      type: Input
    }],
    itemSize: [{
      type: Input
    }],
    selectAll: [{
      type: Input
    }],
    focusOnHover: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    filterFields: [{
      type: Input
    }],
    selectOnFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autoOptionFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onChange: [{
      type: Output
    }],
    onFilter: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    onClick: [{
      type: Output
    }],
    onClear: [{
      type: Output
    }],
    onPanelShow: [{
      type: Output
    }],
    onPanelHide: [{
      type: Output
    }],
    onLazyLoad: [{
      type: Output
    }],
    onRemove: [{
      type: Output
    }],
    onSelectAllChange: [{
      type: Output
    }],
    overlayViewChild: [{
      type: ViewChild,
      args: ["overlay"]
    }],
    filterInputChild: [{
      type: ViewChild,
      args: ["filterInput"]
    }],
    focusInputViewChild: [{
      type: ViewChild,
      args: ["focusInput"]
    }],
    itemsViewChild: [{
      type: ViewChild,
      args: ["items"]
    }],
    scroller: [{
      type: ViewChild,
      args: ["scroller"]
    }],
    lastHiddenFocusableElementOnOverlay: [{
      type: ViewChild,
      args: ["lastHiddenFocusableEl"]
    }],
    firstHiddenFocusableElementOnOverlay: [{
      type: ViewChild,
      args: ["firstHiddenFocusableEl"]
    }],
    headerCheckboxViewChild: [{
      type: ViewChild,
      args: ["headerCheckbox"]
    }],
    footerFacet: [{
      type: ContentChild,
      args: [Footer]
    }],
    headerFacet: [{
      type: ContentChild,
      args: [Header]
    }],
    itemTemplate: [{
      type: ContentChild,
      args: ["item", {
        descendants: false
      }]
    }],
    groupTemplate: [{
      type: ContentChild,
      args: ["group", {
        descendants: false
      }]
    }],
    loaderTemplate: [{
      type: ContentChild,
      args: ["loader", {
        descendants: false
      }]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: ["header", {
        descendants: false
      }]
    }],
    filterTemplate: [{
      type: ContentChild,
      args: ["filter", {
        descendants: false
      }]
    }],
    footerTemplate: [{
      type: ContentChild,
      args: ["footer", {
        descendants: false
      }]
    }],
    emptyFilterTemplate: [{
      type: ContentChild,
      args: ["emptyfilter", {
        descendants: false
      }]
    }],
    emptyTemplate: [{
      type: ContentChild,
      args: ["empty", {
        descendants: false
      }]
    }],
    selectedItemsTemplate: [{
      type: ContentChild,
      args: ["selecteditems", {
        descendants: false
      }]
    }],
    checkIconTemplate: [{
      type: ContentChild,
      args: ["checkicon", {
        descendants: false
      }]
    }],
    loadingIconTemplate: [{
      type: ContentChild,
      args: ["loadingicon", {
        descendants: false
      }]
    }],
    filterIconTemplate: [{
      type: ContentChild,
      args: ["filtericon", {
        descendants: false
      }]
    }],
    removeTokenIconTemplate: [{
      type: ContentChild,
      args: ["removetokenicon", {
        descendants: false
      }]
    }],
    chipIconTemplate: [{
      type: ContentChild,
      args: ["chipicon", {
        descendants: false
      }]
    }],
    clearIconTemplate: [{
      type: ContentChild,
      args: ["clearicon", {
        descendants: false
      }]
    }],
    dropdownIconTemplate: [{
      type: ContentChild,
      args: ["dropdownicon", {
        descendants: false
      }]
    }],
    itemCheckboxIconTemplate: [{
      type: ContentChild,
      args: ["itemcheckboxicon", {
        descendants: false
      }]
    }],
    headerCheckboxIconTemplate: [{
      type: ContentChild,
      args: ["headercheckboxicon", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MultiSelect, {
    className: "MultiSelect",
    filePath: "multiselect.ts",
    lineNumber: 444
  });
})();
var MultiSelectModule = class _MultiSelectModule {
  static \u0275fac = function MultiSelectModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MultiSelectModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MultiSelectModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MultiSelect, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MultiSelectModule, [{
    type: NgModule,
    args: [{
      imports: [MultiSelect, SharedModule],
      exports: [MultiSelect, SharedModule]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-select.mjs
var theme8 = ({
  dt
}) => `
.p-select {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
    background: ${dt("select.background")};
    border: 1px solid ${dt("select.border.color")};
    transition: background ${dt("select.transition.duration")}, color ${dt("select.transition.duration")}, border-color ${dt("select.transition.duration")},
        outline-color ${dt("select.transition.duration")}, box-shadow ${dt("select.transition.duration")};
    border-radius: ${dt("select.border.radius")};
    outline-color: transparent;
    box-shadow: ${dt("select.shadow")};
}

.p-select.ng-invalid.ng-dirty {
    border-color: ${dt("select.invalid.border.color")};
}

.p-select:not(.p-disabled):hover {
    border-color: ${dt("select.hover.border.color")};
}

.p-select:not(.p-disabled).p-focus {
    border-color: ${dt("select.focus.border.color")};
    box-shadow: ${dt("select.focus.ring.shadow")};
    outline: ${dt("select.focus.ring.width")} ${dt("select.focus.ring.style")} ${dt("select.focus.ring.color")};
    outline-offset: ${dt("select.focus.ring.offset")};
}

.p-select.p-variant-filled {
    background: ${dt("select.filled.background")};
}

.p-select.p-variant-filled:not(.p-disabled):hover {
    background: ${dt("select.filled.hover.background")};
}

.p-select.p-variant-filled.p-focus {
    background: ${dt("select.filled.focus.background")};
}

.p-select.p-disabled {
    opacity: 1;
    background: ${dt("select.disabled.background")};
}

.p-select-clear-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    color: ${dt("select.clear.icon.color")};
    inset-inline-end: ${dt("select.dropdown.width")};
}

.p-select-dropdown {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: transparent;
    color: ${dt("select.dropdown.color")};
    width: ${dt("select.dropdown.width")};
    border-start-end-radius: ${dt("select.border.radius")};
    border-end-end-radius: ${dt("select.border.radius")};
}

.p-select-label {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    flex: 1 1 auto;
    width: 1%;
    padding: ${dt("select.padding.y")} ${dt("select.padding.x")};
    text-overflow: ellipsis;
    cursor: pointer;
    color: ${dt("select.color")};
    background: transparent;
    border: 0 none;
    outline: 0 none;
}

.p-select-label.p-placeholder {
    color: ${dt("select.placeholder.color")};
}

.p-select.ng-invalid.ng-dirty .p-select-label.p-placeholder {
    color: ${dt("select.invalid.placeholder.color")};
}

.p-select:has(.p-select-clear-icon) .p-select-label {
    padding-inline-end: calc(1rem + ${dt("select.padding.x")});
}

.p-select.p-disabled .p-select-label {
    color: ${dt("select.disabled.color")};
}

.p-select-label-empty {
    overflow: hidden;
    opacity: 0;
}

input.p-select-label {
    cursor: default;
}

.p-select .p-select-overlay {
    min-width: 100%;
}

.p-select-overlay {
    background: ${dt("select.overlay.background")};
    color: ${dt("select.overlay.color")};
    border: 1px solid ${dt("select.overlay.border.color")};
    border-radius: ${dt("select.overlay.border.radius")};
    box-shadow: ${dt("select.overlay.shadow")};
}

.p-select-header {
    padding: ${dt("select.list.header.padding")};
}

.p-select-filter {
    width: 100%;
}

.p-select-list-container {
    overflow: auto;
}

.p-select-option-group {
    cursor: auto;
    margin: 0;
    padding: ${dt("select.option.group.padding")};
    background: ${dt("select.option.group.background")};
    color: ${dt("select.option.group.color")};
    font-weight: ${dt("select.option.group.font.weight")};
}

.p-select-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    padding: ${dt("select.list.padding")};
    gap: ${dt("select.list.gap")};
    display: flex;
    flex-direction: column;
}

.p-select-option {
    cursor: pointer;
    font-weight: normal;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding: ${dt("select.option.padding")};
    border: 0 none;
    color: ${dt("select.option.color")};
    background: transparent;
    transition: background ${dt("select.transition.duration")}, color ${dt("select.transition.duration")}, border-color ${dt("select.transition.duration")},
            box-shadow ${dt("select.transition.duration")}, outline-color ${dt("select.transition.duration")};
    border-radius: ${dt("select.option.border.radius")};
}

.p-select-option:not(.p-select-option-selected):not(.p-disabled).p-focus {
    background: ${dt("select.option.focus.background")};
    color: ${dt("select.option.focus.color")};
}

.p-select-option.p-select-option-selected {
    background: ${dt("select.option.selected.background")};
    color: ${dt("select.option.selected.color")};
}

.p-select-option.p-select-option-selected.p-focus {
    background: ${dt("select.option.selected.focus.background")};
    color: ${dt("select.option.selected.focus.color")};
}

.p-select-option-check-icon {
    position: relative;
    margin-inline-start: ${dt("select.checkmark.gutter.start")};
    margin-inline-end: ${dt("select.checkmark.gutter.end")};
    color: ${dt("select.checkmark.color")};
}

.p-select-empty-message {
    padding: ${dt("select.empty.message.padding")};
}

.p-select-fluid {
    display: flex;
}

.p-select-sm .p-select-label {
    font-size: ${dt("select.sm.font.size")};
    padding-block: ${dt("select.sm.padding.y")};
    padding-inline: ${dt("select.sm.padding.x")};
}

.p-select-sm .p-select-dropdown .p-icon {
    font-size: ${dt("select.sm.font.size")};
    width: ${dt("select.sm.font.size")};
    height: ${dt("select.sm.font.size")};
}

.p-select-lg .p-select-label {
    font-size: ${dt("select.lg.font.size")};
    padding-block: ${dt("select.lg.padding.y")};
    padding-inline: ${dt("select.lg.padding.x")};
}

.p-select-lg .p-select-dropdown .p-icon {
    font-size: ${dt("select.lg.font.size")};
    width: ${dt("select.lg.font.size")};
    height: ${dt("select.lg.font.size")};
}
`;
var classes7 = {
  root: ({
    instance
  }) => ["p-select p-component p-inputwrapper", {
    "p-disabled": instance.disabled,
    "p-variant-filled": instance.variant ? instance.variant === "filled" : instance.config.inputStyle() === "filled",
    "p-focus": instance.focused,
    "p-inputwrapper-filled": instance.modelValue() !== void 0 && instance.modelValue() !== null,
    "p-inputwrapper-focus": instance.focused || instance.overlayVisible,
    "p-select-open": instance.overlayVisible,
    "p-select-fluid": instance.hasFluid,
    "p-select-sm p-inputfield-sm": instance.size === "small",
    "p-select-lg p-inputfield-lg": instance.size === "large"
  }],
  label: ({
    instance,
    props
  }) => ["p-select-label", {
    "p-placeholder": !props.editable && instance.label === props.placeholder,
    "p-select-label-empty": !props.editable && !instance.$slots["value"] && (instance.label === "p-emptylabel" || instance.label.length === 0)
  }],
  clearIcon: "p-select-clear-icon",
  dropdown: "p-select-dropdown",
  loadingicon: "p-select-loading-icon",
  dropdownIcon: "p-select-dropdown-icon",
  overlay: "p-select-overlay p-component",
  header: "p-select-header",
  pcFilter: "p-select-filter",
  listContainer: "p-select-list-container",
  list: "p-select-list",
  optionGroup: "p-select-option-group",
  optionGroupLabel: "p-select-option-group-label",
  option: ({
    instance,
    props,
    state,
    option,
    focusedOption
  }) => ["p-select-option", {
    "p-select-option-selected": instance.isSelected(option) && props.highlightOnSelect,
    "p-focus": state.focusedOptionIndex === focusedOption,
    "p-disabled": instance.isOptionDisabled(option)
  }],
  optionLabel: "p-select-option-label",
  optionCheckIcon: "p-select-option-check-icon",
  optionBlankIcon: "p-select-option-blank-icon",
  emptyMessage: "p-select-empty-message"
};
var SelectStyle = class _SelectStyle extends BaseStyle {
  name = "select";
  theme = theme8;
  classes = classes7;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SelectStyle_BaseFactory;
    return function SelectStyle_Factory(__ngFactoryType__) {
      return (\u0275SelectStyle_BaseFactory || (\u0275SelectStyle_BaseFactory = \u0275\u0275getInheritedFactory(_SelectStyle)))(__ngFactoryType__ || _SelectStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _SelectStyle,
    factory: _SelectStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectStyle, [{
    type: Injectable
  }], null, null);
})();
var SelectClasses;
(function(SelectClasses2) {
  SelectClasses2["root"] = "p-select";
  SelectClasses2["label"] = "p-select-label";
  SelectClasses2["clearIcon"] = "p-select-clear-icon";
  SelectClasses2["dropdown"] = "p-select-dropdown";
  SelectClasses2["loadingicon"] = "p-select-loading-icon";
  SelectClasses2["dropdownIcon"] = "p-select-dropdown-icon";
  SelectClasses2["overlay"] = "p-select-overlay";
  SelectClasses2["header"] = "p-select-header";
  SelectClasses2["pcFilter"] = "p-select-filter";
  SelectClasses2["listContainer"] = "p-select-list-container";
  SelectClasses2["list"] = "p-select-list";
  SelectClasses2["optionGroup"] = "p-select-option-group";
  SelectClasses2["optionGroupLabel"] = "p-select-option-group-label";
  SelectClasses2["option"] = "p-select-option";
  SelectClasses2["optionLabel"] = "p-select-option-label";
  SelectClasses2["optionCheckIcon"] = "p-select-option-check-icon";
  SelectClasses2["optionBlankIcon"] = "p-select-option-blank-icon";
  SelectClasses2["emptyMessage"] = "p-select-empty-message";
})(SelectClasses || (SelectClasses = {}));
var _c09 = (a0) => ({
  height: a0
});
var _c110 = (a0, a1, a2) => ({
  "p-select-option": true,
  "p-select-option-selected": a0,
  "p-disabled": a1,
  "p-focus": a2
});
var _c210 = (a0) => ({
  $implicit: a0
});
function SelectItem_ng_container_1_CheckIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "CheckIcon", 5);
  }
}
function SelectItem_ng_container_1_BlankIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "BlankIcon", 6);
  }
}
function SelectItem_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SelectItem_ng_container_1_CheckIcon_1_Template, 1, 0, "CheckIcon", 3)(2, SelectItem_ng_container_1_BlankIcon_2_Template, 1, 0, "BlankIcon", 4);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selected);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.selected);
  }
}
function SelectItem_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_1_0 = ctx_r0.label) !== null && tmp_1_0 !== void 0 ? tmp_1_0 : "empty");
  }
}
function SelectItem_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
var _c38 = ["item"];
var _c45 = ["group"];
var _c55 = ["loader"];
var _c65 = ["selectedItem"];
var _c75 = ["header"];
var _c84 = ["filter"];
var _c94 = ["footer"];
var _c104 = ["emptyfilter"];
var _c114 = ["empty"];
var _c124 = ["dropdownicon"];
var _c134 = ["loadingicon"];
var _c143 = ["clearicon"];
var _c153 = ["filtericon"];
var _c163 = ["onicon"];
var _c173 = ["officon"];
var _c183 = ["cancelicon"];
var _c192 = ["focusInput"];
var _c202 = ["editableInput"];
var _c212 = ["items"];
var _c223 = ["scroller"];
var _c233 = ["overlay"];
var _c243 = ["firstHiddenFocusableEl"];
var _c252 = ["lastHiddenFocusableEl"];
var _c262 = () => ({
  class: "p-select-clear-icon"
});
var _c272 = () => ({
  class: "p-select-dropdown-icon"
});
var _c282 = (a0) => ({
  options: a0
});
var _c292 = (a0, a1) => ({
  $implicit: a0,
  options: a1
});
var _c302 = () => ({});
function Select_span_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.label() === "p-emptylabel" ? "\xA0" : ctx_r2.label());
  }
}
function Select_span_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 24);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.selectedItemTemplate || ctx_r2._selectedItemTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c210, ctx_r2.selectedOption));
  }
}
function Select_span_0_ng_template_4_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.label() === "p-emptylabel" ? "\xA0" : ctx_r2.label());
  }
}
function Select_span_0_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Select_span_0_ng_template_4_span_0_Template, 2, 1, "span", 18);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", !ctx_r2.selectedOption);
  }
}
function Select_span_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 22, 3);
    \u0275\u0275listener("focus", function Select_span_0_Template_span_focus_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInputFocus($event));
    })("blur", function Select_span_0_Template_span_blur_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInputBlur($event));
    })("keydown", function Select_span_0_Template_span_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onKeyDown($event));
    });
    \u0275\u0275template(2, Select_span_0_ng_container_2_Template, 2, 1, "ng-container", 20)(3, Select_span_0_ng_container_3_Template, 1, 4, "ng-container", 23)(4, Select_span_0_ng_template_4_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_17_0;
    const defaultPlaceholder_r4 = \u0275\u0275reference(5);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r2.inputClass)("pTooltip", ctx_r2.tooltip)("tooltipPosition", ctx_r2.tooltipPosition)("positionStyle", ctx_r2.tooltipPositionStyle)("tooltipStyleClass", ctx_r2.tooltipStyleClass)("pAutoFocus", ctx_r2.autofocus);
    \u0275\u0275attribute("aria-disabled", ctx_r2.disabled)("id", ctx_r2.inputId)("aria-label", ctx_r2.ariaLabel || (ctx_r2.label() === "p-emptylabel" ? void 0 : ctx_r2.label()))("aria-labelledby", ctx_r2.ariaLabelledBy)("aria-haspopup", "listbox")("aria-expanded", (tmp_17_0 = ctx_r2.overlayVisible) !== null && tmp_17_0 !== void 0 ? tmp_17_0 : false)("aria-controls", ctx_r2.overlayVisible ? ctx_r2.id + "_list" : null)("tabindex", !ctx_r2.disabled ? ctx_r2.tabindex : -1)("aria-activedescendant", ctx_r2.focused ? ctx_r2.focusedOptionId : void 0)("aria-required", ctx_r2.required)("required", ctx_r2.required);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r2.selectedItemTemplate && !ctx_r2._selectedItemTemplate)("ngIfElse", defaultPlaceholder_r4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r2.selectedItemTemplate || ctx_r2._selectedItemTemplate) && ctx_r2.selectedOption);
  }
}
function Select_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 25, 5);
    \u0275\u0275listener("input", function Select_input_1_Template_input_input_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onEditableInput($event));
    })("keydown", function Select_input_1_Template_input_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onKeyDown($event));
    })("focus", function Select_input_1_Template_input_focus_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInputFocus($event));
    })("blur", function Select_input_1_Template_input_blur_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInputBlur($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r2.inputClass)("disabled", ctx_r2.disabled)("pAutoFocus", ctx_r2.autofocus);
    \u0275\u0275attribute("id", ctx_r2.inputId)("maxlength", ctx_r2.maxlength)("placeholder", ctx_r2.modelValue() === void 0 || ctx_r2.modelValue() === null ? ctx_r2.placeholder() : void 0)("aria-label", ctx_r2.ariaLabel || (ctx_r2.label() === "p-emptylabel" ? void 0 : ctx_r2.label()))("aria-activedescendant", ctx_r2.focused ? ctx_r2.focusedOptionId : void 0);
  }
}
function Select_ng_container_2_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "TimesIcon", 27);
    \u0275\u0275listener("click", function Select_ng_container_2_TimesIcon_1_Template_TimesIcon_click_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.clear($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275attribute("data-pc-section", "clearicon");
  }
}
function Select_ng_container_2_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Select_ng_container_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Select_ng_container_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Select_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275listener("click", function Select_ng_container_2_span_2_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.clear($event));
    });
    \u0275\u0275template(1, Select_ng_container_2_span_2_1_Template, 1, 0, null, 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("data-pc-section", "clearicon");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.clearIconTemplate || ctx_r2._clearIconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction0(3, _c262));
  }
}
function Select_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Select_ng_container_2_TimesIcon_1_Template, 1, 1, "TimesIcon", 26)(2, Select_ng_container_2_span_2_Template, 2, 4, "span", 26);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.clearIconTemplate && !ctx_r2._clearIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.clearIconTemplate || ctx_r2._clearIconTemplate);
  }
}
function Select_ng_container_4_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Select_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Select_ng_container_4_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 29);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.loadingIconTemplate || ctx_r2._loadingIconTemplate);
  }
}
function Select_ng_container_4_ng_container_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 32);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", "p-select-loading-icon pi-spin " + ctx_r2.loadingIcon);
  }
}
function Select_ng_container_4_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 33);
  }
  if (rf & 2) {
    \u0275\u0275classMap("p-select-loading-icon pi pi-spinner pi-spin");
  }
}
function Select_ng_container_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Select_ng_container_4_ng_container_2_span_1_Template, 1, 1, "span", 30)(2, Select_ng_container_4_ng_container_2_span_2_Template, 1, 2, "span", 31);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.loadingIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.loadingIcon);
  }
}
function Select_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Select_ng_container_4_ng_container_1_Template, 2, 1, "ng-container", 18)(2, Select_ng_container_4_ng_container_2_Template, 3, 2, "ng-container", 18);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.loadingIconTemplate || ctx_r2._loadingIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.loadingIconTemplate && !ctx_r2._loadingIconTemplate);
  }
}
function Select_ng_template_5_ng_container_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 37);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r2.dropdownIcon);
  }
}
function Select_ng_template_5_ng_container_0_ChevronDownIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ChevronDownIcon", 38);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-select-dropdown-icon");
  }
}
function Select_ng_template_5_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Select_ng_template_5_ng_container_0_span_1_Template, 1, 1, "span", 35)(2, Select_ng_template_5_ng_container_0_ChevronDownIcon_2_Template, 1, 1, "ChevronDownIcon", 36);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.dropdownIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.dropdownIcon);
  }
}
function Select_ng_template_5_span_1_1_ng_template_0_Template(rf, ctx) {
}
function Select_ng_template_5_span_1_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Select_ng_template_5_span_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Select_ng_template_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275template(1, Select_ng_template_5_span_1_1_Template, 1, 0, null, 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.dropdownIconTemplate || ctx_r2._dropdownIconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction0(2, _c272));
  }
}
function Select_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Select_ng_template_5_ng_container_0_Template, 3, 2, "ng-container", 18)(1, Select_ng_template_5_span_1_Template, 2, 3, "span", 34);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", !ctx_r2.dropdownIconTemplate && !ctx_r2._dropdownIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.dropdownIconTemplate || ctx_r2._dropdownIconTemplate);
  }
}
function Select_ng_template_9_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Select_ng_template_9_div_4_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Select_ng_template_9_div_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Select_ng_template_9_div_4_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 28);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.filterTemplate || ctx_r2._filterTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c282, ctx_r2.filterOptions));
  }
}
function Select_ng_template_9_div_4_ng_template_2_SearchIcon_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "SearchIcon");
  }
}
function Select_ng_template_9_div_4_ng_template_2_span_5_1_ng_template_0_Template(rf, ctx) {
}
function Select_ng_template_9_div_4_ng_template_2_span_5_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Select_ng_template_9_div_4_ng_template_2_span_5_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Select_ng_template_9_div_4_ng_template_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275template(1, Select_ng_template_9_div_4_ng_template_2_span_5_1_Template, 1, 0, null, 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.filterIconTemplate || ctx_r2._filterIconTemplate);
  }
}
function Select_ng_template_9_div_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-iconfield")(1, "input", 46, 10);
    \u0275\u0275listener("input", function Select_ng_template_9_div_4_ng_template_2_Template_input_input_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onFilterInputChange($event));
    })("keydown", function Select_ng_template_9_div_4_ng_template_2_Template_input_keydown_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onFilterKeyDown($event));
    })("blur", function Select_ng_template_9_div_4_ng_template_2_Template_input_blur_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onFilterBlur($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-inputicon");
    \u0275\u0275template(4, Select_ng_template_9_div_4_ng_template_2_SearchIcon_4_Template, 1, 0, "SearchIcon", 18)(5, Select_ng_template_9_div_4_ng_template_2_span_5_Template, 2, 1, "span", 18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("pSize", ctx_r2.size)("value", ctx_r2._filterValue() || "")("variant", ctx_r2.variant);
    \u0275\u0275attribute("placeholder", ctx_r2.filterPlaceholder)("aria-owns", ctx_r2.id + "_list")("aria-label", ctx_r2.ariaFilterLabel)("aria-activedescendant", ctx_r2.focusedOptionId);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r2.filterIconTemplate && !ctx_r2._filterIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.filterIconTemplate || ctx_r2._filterIconTemplate);
  }
}
function Select_ng_template_9_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275listener("click", function Select_ng_template_9_div_4_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275template(1, Select_ng_template_9_div_4_ng_container_1_Template, 2, 4, "ng-container", 20)(2, Select_ng_template_9_div_4_ng_template_2_Template, 6, 9, "ng-template", null, 9, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const builtInFilterElement_r11 = \u0275\u0275reference(3);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.filterTemplate || ctx_r2._filterTemplate)("ngIfElse", builtInFilterElement_r11);
  }
}
function Select_ng_template_9_p_scroller_6_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Select_ng_template_9_p_scroller_6_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Select_ng_template_9_p_scroller_6_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 28);
  }
  if (rf & 2) {
    const items_r13 = ctx.$implicit;
    const scrollerOptions_r14 = ctx.options;
    \u0275\u0275nextContext(2);
    const buildInItems_r15 = \u0275\u0275reference(9);
    \u0275\u0275property("ngTemplateOutlet", buildInItems_r15)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c292, items_r13, scrollerOptions_r14));
  }
}
function Select_ng_template_9_p_scroller_6_ng_container_4_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Select_ng_template_9_p_scroller_6_ng_container_4_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Select_ng_template_9_p_scroller_6_ng_container_4_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 28);
  }
  if (rf & 2) {
    const scrollerOptions_r16 = ctx.options;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.loaderTemplate || ctx_r2._loaderTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c282, scrollerOptions_r16));
  }
}
function Select_ng_template_9_p_scroller_6_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Select_ng_template_9_p_scroller_6_ng_container_4_ng_template_1_Template, 1, 4, "ng-template", null, 12, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
}
function Select_ng_template_9_p_scroller_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-scroller", 47, 11);
    \u0275\u0275listener("onLazyLoad", function Select_ng_template_9_p_scroller_6_Template_p_scroller_onLazyLoad_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onLazyLoad.emit($event));
    });
    \u0275\u0275template(2, Select_ng_template_9_p_scroller_6_ng_template_2_Template, 1, 5, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(4, Select_ng_template_9_p_scroller_6_ng_container_4_Template, 3, 0, "ng-container", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleMap(\u0275\u0275pureFunction1(8, _c09, ctx_r2.scrollHeight));
    \u0275\u0275property("items", ctx_r2.visibleOptions())("itemSize", ctx_r2.virtualScrollItemSize || ctx_r2._itemSize)("autoSize", true)("lazy", ctx_r2.lazy)("options", ctx_r2.virtualScrollOptions);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.loaderTemplate || ctx_r2._loaderTemplate);
  }
}
function Select_ng_template_9_ng_container_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Select_ng_template_9_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Select_ng_template_9_ng_container_7_ng_container_1_Template, 1, 0, "ng-container", 28);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const buildInItems_r15 = \u0275\u0275reference(9);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", buildInItems_r15)("ngTemplateOutletContext", \u0275\u0275pureFunction2(3, _c292, ctx_r2.visibleOptions(), \u0275\u0275pureFunction0(2, _c302)));
  }
}
function Select_ng_template_9_ng_template_8_ng_template_2_ng_container_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r17 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getOptionGroupLabel(option_r17.optionGroup));
  }
}
function Select_ng_template_9_ng_template_8_ng_template_2_ng_container_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Select_ng_template_9_ng_template_8_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "li", 51);
    \u0275\u0275template(2, Select_ng_template_9_ng_template_8_ng_template_2_ng_container_0_span_2_Template, 2, 1, "span", 18)(3, Select_ng_template_9_ng_template_8_ng_template_2_ng_container_0_ng_container_3_Template, 1, 0, "ng-container", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r17 = \u0275\u0275nextContext();
    const option_r17 = ctx_r17.$implicit;
    const i_r19 = ctx_r17.index;
    const scrollerOptions_r20 = \u0275\u0275nextContext().options;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(5, _c09, scrollerOptions_r20.itemSize + "px"));
    \u0275\u0275attribute("id", ctx_r2.id + "_" + ctx_r2.getOptionIndex(i_r19, scrollerOptions_r20));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.groupTemplate && !ctx_r2._groupTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.groupTemplate || ctx_r2._groupTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(7, _c210, option_r17.optionGroup));
  }
}
function Select_ng_template_9_ng_template_8_ng_template_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p-selectItem", 52);
    \u0275\u0275listener("onClick", function Select_ng_template_9_ng_template_8_ng_template_2_ng_container_1_Template_p_selectItem_onClick_1_listener($event) {
      \u0275\u0275restoreView(_r21);
      const option_r17 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onOptionSelect($event, option_r17));
    })("onMouseEnter", function Select_ng_template_9_ng_template_8_ng_template_2_ng_container_1_Template_p_selectItem_onMouseEnter_1_listener($event) {
      \u0275\u0275restoreView(_r21);
      const i_r19 = \u0275\u0275nextContext().index;
      const scrollerOptions_r20 = \u0275\u0275nextContext().options;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onOptionMouseEnter($event, ctx_r2.getOptionIndex(i_r19, scrollerOptions_r20)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r17 = \u0275\u0275nextContext();
    const option_r17 = ctx_r17.$implicit;
    const i_r19 = ctx_r17.index;
    const scrollerOptions_r20 = \u0275\u0275nextContext().options;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("id", ctx_r2.id + "_" + ctx_r2.getOptionIndex(i_r19, scrollerOptions_r20))("option", option_r17)("checkmark", ctx_r2.checkmark)("selected", ctx_r2.isSelected(option_r17))("label", ctx_r2.getOptionLabel(option_r17))("disabled", ctx_r2.isOptionDisabled(option_r17))("template", ctx_r2.itemTemplate || ctx_r2._itemTemplate)("focused", ctx_r2.focusedOptionIndex() === ctx_r2.getOptionIndex(i_r19, scrollerOptions_r20))("ariaPosInset", ctx_r2.getAriaPosInset(ctx_r2.getOptionIndex(i_r19, scrollerOptions_r20)))("ariaSetSize", ctx_r2.ariaSetSize);
  }
}
function Select_ng_template_9_ng_template_8_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Select_ng_template_9_ng_template_8_ng_template_2_ng_container_0_Template, 4, 9, "ng-container", 18)(1, Select_ng_template_9_ng_template_8_ng_template_2_ng_container_1_Template, 2, 10, "ng-container", 18);
  }
  if (rf & 2) {
    const option_r17 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", ctx_r2.isOptionGroup(option_r17));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isOptionGroup(option_r17));
  }
}
function Select_ng_template_9_ng_template_8_li_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.emptyFilterMessageLabel, " ");
  }
}
function Select_ng_template_9_ng_template_8_li_3_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, null, 14);
  }
}
function Select_ng_template_9_ng_template_8_li_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Select_ng_template_9_ng_template_8_li_3_Conditional_2_ng_container_0_Template, 2, 0, "ng-container", 29);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.emptyFilterTemplate || ctx_r2._emptyFilterTemplate || ctx_r2.emptyTemplate || ctx_r2._emptyTemplate);
  }
}
function Select_ng_template_9_ng_template_8_li_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 53);
    \u0275\u0275template(1, Select_ng_template_9_ng_template_8_li_3_Conditional_1_Template, 1, 1)(2, Select_ng_template_9_ng_template_8_li_3_Conditional_2_Template, 1, 1, "ng-container");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const scrollerOptions_r20 = \u0275\u0275nextContext().options;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(2, _c09, scrollerOptions_r20.itemSize + "px"));
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.emptyFilterTemplate && !ctx_r2._emptyFilterTemplate && !ctx_r2.emptyTemplate ? 1 : 2);
  }
}
function Select_ng_template_9_ng_template_8_li_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.emptyMessageLabel, " ");
  }
}
function Select_ng_template_9_ng_template_8_li_4_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, null, 15);
  }
}
function Select_ng_template_9_ng_template_8_li_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Select_ng_template_9_ng_template_8_li_4_Conditional_2_ng_container_0_Template, 2, 0, "ng-container", 29);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.emptyTemplate || ctx_r2._emptyTemplate);
  }
}
function Select_ng_template_9_ng_template_8_li_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 53);
    \u0275\u0275template(1, Select_ng_template_9_ng_template_8_li_4_Conditional_1_Template, 1, 1)(2, Select_ng_template_9_ng_template_8_li_4_Conditional_2_Template, 1, 1, "ng-container");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const scrollerOptions_r20 = \u0275\u0275nextContext().options;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(2, _c09, scrollerOptions_r20.itemSize + "px"));
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.emptyTemplate && !ctx_r2._emptyTemplate ? 1 : 2);
  }
}
function Select_ng_template_9_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 48, 13);
    \u0275\u0275template(2, Select_ng_template_9_ng_template_8_ng_template_2_Template, 2, 2, "ng-template", 49)(3, Select_ng_template_9_ng_template_8_li_3_Template, 3, 4, "li", 50)(4, Select_ng_template_9_ng_template_8_li_4_Template, 3, 4, "li", 50);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const items_r22 = ctx.$implicit;
    const scrollerOptions_r20 = ctx.options;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleMap(scrollerOptions_r20.contentStyle);
    \u0275\u0275property("ngClass", scrollerOptions_r20.contentStyleClass);
    \u0275\u0275attribute("id", ctx_r2.id + "_list")("aria-label", ctx_r2.listLabel);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", items_r22);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.filterValue && ctx_r2.isEmpty());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.filterValue && ctx_r2.isEmpty());
  }
}
function Select_ng_template_9_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Select_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "span", 41, 6);
    \u0275\u0275listener("focus", function Select_ng_template_9_Template_span_focus_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onFirstHiddenFocus($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, Select_ng_template_9_ng_container_3_Template, 1, 0, "ng-container", 29)(4, Select_ng_template_9_div_4_Template, 4, 2, "div", 42);
    \u0275\u0275elementStart(5, "div", 43);
    \u0275\u0275template(6, Select_ng_template_9_p_scroller_6_Template, 5, 10, "p-scroller", 44)(7, Select_ng_template_9_ng_container_7_Template, 2, 6, "ng-container", 18)(8, Select_ng_template_9_ng_template_8_Template, 5, 8, "ng-template", null, 7, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, Select_ng_template_9_ng_container_10_Template, 1, 0, "ng-container", 29);
    \u0275\u0275elementStart(11, "span", 41, 8);
    \u0275\u0275listener("focus", function Select_ng_template_9_Template_span_focus_11_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onLastHiddenFocus($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.panelStyleClass);
    \u0275\u0275property("ngClass", "p-select-overlay p-component")("ngStyle", ctx_r2.panelStyle);
    \u0275\u0275advance();
    \u0275\u0275attribute("tabindex", 0)("data-p-hidden-accessible", true)("data-p-hidden-focusable", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.headerTemplate || ctx_r2._headerTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.filter);
    \u0275\u0275advance();
    \u0275\u0275styleProp("max-height", ctx_r2.virtualScroll ? "auto" : ctx_r2.scrollHeight || "auto");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.virtualScroll);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.virtualScroll);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.footerTemplate || ctx_r2._footerTemplate);
    \u0275\u0275advance();
    \u0275\u0275attribute("tabindex", 0)("data-p-hidden-accessible", true)("data-p-hidden-focusable", true);
  }
}
var SELECT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => Select),
  multi: true
};
var SelectItem = class _SelectItem extends BaseComponent {
  id;
  option;
  selected;
  focused;
  label;
  disabled;
  visible;
  itemSize;
  ariaPosInset;
  ariaSetSize;
  template;
  checkmark;
  onClick = new EventEmitter();
  onMouseEnter = new EventEmitter();
  onOptionClick(event) {
    this.onClick.emit(event);
  }
  onOptionMouseEnter(event) {
    this.onMouseEnter.emit(event);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SelectItem_BaseFactory;
    return function SelectItem_Factory(__ngFactoryType__) {
      return (\u0275SelectItem_BaseFactory || (\u0275SelectItem_BaseFactory = \u0275\u0275getInheritedFactory(_SelectItem)))(__ngFactoryType__ || _SelectItem);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _SelectItem,
    selectors: [["p-selectItem"]],
    inputs: {
      id: "id",
      option: "option",
      selected: [2, "selected", "selected", booleanAttribute],
      focused: [2, "focused", "focused", booleanAttribute],
      label: "label",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      visible: [2, "visible", "visible", booleanAttribute],
      itemSize: [2, "itemSize", "itemSize", numberAttribute],
      ariaPosInset: "ariaPosInset",
      ariaSetSize: "ariaSetSize",
      template: "template",
      checkmark: [2, "checkmark", "checkmark", booleanAttribute]
    },
    outputs: {
      onClick: "onClick",
      onMouseEnter: "onMouseEnter"
    },
    features: [\u0275\u0275InputTransformsFeature, \u0275\u0275InheritDefinitionFeature],
    decls: 4,
    vars: 22,
    consts: [["role", "option", "pRipple", "", 3, "click", "mouseenter", "id", "ngStyle", "ngClass"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["styleClass", "p-select-option-check-icon", 4, "ngIf"], ["styleClass", "p-select-option-blank-icon", 4, "ngIf"], ["styleClass", "p-select-option-check-icon"], ["styleClass", "p-select-option-blank-icon"]],
    template: function SelectItem_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "li", 0);
        \u0275\u0275listener("click", function SelectItem_Template_li_click_0_listener($event) {
          return ctx.onOptionClick($event);
        })("mouseenter", function SelectItem_Template_li_mouseenter_0_listener($event) {
          return ctx.onOptionMouseEnter($event);
        });
        \u0275\u0275template(1, SelectItem_ng_container_1_Template, 3, 2, "ng-container", 1)(2, SelectItem_span_2_Template, 2, 1, "span", 1)(3, SelectItem_ng_container_3_Template, 1, 0, "ng-container", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("id", ctx.id)("ngStyle", \u0275\u0275pureFunction1(14, _c09, ctx.itemSize + "px"))("ngClass", \u0275\u0275pureFunction3(16, _c110, ctx.selected && !ctx.checkmark, ctx.disabled, ctx.focused));
        \u0275\u0275attribute("aria-label", ctx.label)("aria-setsize", ctx.ariaSetSize)("aria-posinset", ctx.ariaPosInset)("aria-selected", ctx.selected)("data-p-focused", ctx.focused)("data-p-highlight", ctx.selected)("data-p-disabled", ctx.disabled);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.checkmark);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.template);
        \u0275\u0275advance();
        \u0275\u0275property("ngTemplateOutlet", ctx.template)("ngTemplateOutletContext", \u0275\u0275pureFunction1(20, _c210, ctx.option));
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, NgStyle, SharedModule, Ripple, CheckIcon, BlankIcon],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectItem, [{
    type: Component,
    args: [{
      selector: "p-selectItem",
      standalone: true,
      imports: [CommonModule, SharedModule, Ripple, CheckIcon, BlankIcon],
      template: `
        <li
            [id]="id"
            (click)="onOptionClick($event)"
            (mouseenter)="onOptionMouseEnter($event)"
            role="option"
            pRipple
            [attr.aria-label]="label"
            [attr.aria-setsize]="ariaSetSize"
            [attr.aria-posinset]="ariaPosInset"
            [attr.aria-selected]="selected"
            [attr.data-p-focused]="focused"
            [attr.data-p-highlight]="selected"
            [attr.data-p-disabled]="disabled"
            [ngStyle]="{ height: itemSize + 'px' }"
            [ngClass]="{
                'p-select-option': true,
                'p-select-option-selected': selected && !checkmark,
                'p-disabled': disabled,
                'p-focus': focused
            }"
        >
            <ng-container *ngIf="checkmark">
                <CheckIcon *ngIf="selected" styleClass="p-select-option-check-icon" />
                <BlankIcon *ngIf="!selected" styleClass="p-select-option-blank-icon" />
            </ng-container>
            <span *ngIf="!template">{{ label ?? 'empty' }}</span>
            <ng-container *ngTemplateOutlet="template; context: { $implicit: option }"></ng-container>
        </li>
    `
    }]
  }], null, {
    id: [{
      type: Input
    }],
    option: [{
      type: Input
    }],
    selected: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    focused: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
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
    visible: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    itemSize: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    ariaPosInset: [{
      type: Input
    }],
    ariaSetSize: [{
      type: Input
    }],
    template: [{
      type: Input
    }],
    checkmark: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onClick: [{
      type: Output
    }],
    onMouseEnter: [{
      type: Output
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SelectItem, {
    className: "SelectItem",
    filePath: "select.ts",
    lineNumber: 107
  });
})();
var Select = class _Select extends BaseComponent {
  zone;
  filterService;
  /**
   * Unique identifier of the component
   * @group Props
   */
  id;
  /**
   * Height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.
   * @group Props
   */
  scrollHeight = "200px";
  /**
   * When specified, displays an input field to filter the items on keyup.
   * @group Props
   */
  filter;
  /**
   * Name of the input element.
   * @group Props
   */
  name;
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Inline style of the overlay panel element.
   * @group Props
   */
  panelStyle;
  /**
   * Style class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Style class of the overlay panel element.
   * @group Props
   */
  panelStyleClass;
  /**
   * When present, it specifies that the component cannot be edited.
   * @group Props
   */
  readonly;
  /**
   * When present, it specifies that an input field must be filled out before submitting the form.
   * @group Props
   */
  required;
  /**
   * When present, custom value instead of predefined options can be entered using the editable input field.
   * @group Props
   */
  editable;
  /**
   * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  appendTo;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = 0;
  /**
   * Default text to display when no option is selected.
   * @group Props
   */
  set placeholder(val) {
    this._placeholder.set(val);
  }
  get placeholder() {
    return this._placeholder.asReadonly();
  }
  /**
   * Icon to display in loading state.
   * @group Props
   */
  loadingIcon;
  /**
   * Placeholder text to show when filter input is empty.
   * @group Props
   */
  filterPlaceholder;
  /**
   * Locale to use in filtering. The default locale is the host environment's current locale.
   * @group Props
   */
  filterLocale;
  /**
   * Specifies the input variant of the component.
   * @group Props
   */
  variant = "outlined";
  /**
   * Identifier of the accessible input element.
   * @group Props
   */
  inputId;
  /**
   * A property to uniquely identify a value in options.
   * @group Props
   */
  dataKey;
  /**
   * When filtering is enabled, filterBy decides which field or fields (comma separated) to search against.
   * @group Props
   */
  filterBy;
  /**
   * Fields used when filtering the options, defaults to optionLabel.
   * @group Props
   */
  filterFields;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Clears the filter value when hiding the select.
   * @group Props
   */
  resetFilterOnHide = false;
  /**
   * Whether the selected option will be shown with a check mark.
   * @group Props
   */
  checkmark = false;
  /**
   * Icon class of the select icon.
   * @group Props
   */
  dropdownIcon;
  /**
   * Whether the select is in loading state.
   * @group Props
   */
  loading = false;
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
   * Name of the label field of an option group.
   * @group Props
   */
  optionGroupLabel = "label";
  /**
   * Name of the options field of an option group.
   * @group Props
   */
  optionGroupChildren = "items";
  /**
   * Whether to display the first item as the label if no placeholder is defined and value is null.
   * @deprecated since v17.3.0, set initial value by model instead.
   * @group Props
   */
  autoDisplayFirst = true;
  /**
   * Whether to display options as grouped when nested options are provided.
   * @group Props
   */
  group;
  /**
   * When enabled, a clear icon is displayed to clear the value.
   * @group Props
   */
  showClear;
  /**
   * Text to display when filtering does not return any results. Defaults to global value in i18n translation configuration.
   * @group Props
   */
  emptyFilterMessage = "";
  /**
   * Text to display when there is no data. Defaults to global value in i18n translation configuration.
   * @group Props
   */
  emptyMessage = "";
  /**
   * Defines if data is loaded and interacted with in lazy manner.
   * @group Props
   */
  lazy = false;
  /**
   * Whether the data should be loaded on demand during scroll.
   * @group Props
   */
  virtualScroll;
  /**
   * Height of an item in the list for VirtualScrolling.
   * @group Props
   */
  virtualScrollItemSize;
  /**
   * Whether to use the scroller feature. The properties of scroller component can be used like an object in it.
   * @group Props
   */
  virtualScrollOptions;
  /**
   * Defines the size of the component.
   * @group Props
   */
  size;
  /**
   * Whether to use overlay API feature. The properties of overlay API can be used like an object in it.
   * @group Props
   */
  overlayOptions;
  /**
   * Defines a string that labels the filter input.
   * @group Props
   */
  ariaFilterLabel;
  /**
   * Used to define a aria label attribute the current element.
   * @group Props
   */
  ariaLabel;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Defines how the items are filtered.
   * @group Props
   */
  filterMatchMode = "contains";
  /**
   * Maximum number of character allows in the editable input field.
   * @group Props
   */
  maxlength;
  /**
   * Advisory information to display in a tooltip on hover.
   * @group Props
   */
  tooltip = "";
  /**
   * Position of the tooltip.
   * @group Props
   */
  tooltipPosition = "right";
  /**
   * Type of CSS position.
   * @group Props
   */
  tooltipPositionStyle = "absolute";
  /**
   * Style class of the tooltip.
   * @group Props
   */
  tooltipStyleClass;
  /**
   * Fields used when filtering the options, defaults to optionLabel.
   * @group Props
   */
  focusOnHover = true;
  /**
   * Determines if the option will be selected on focus.
   * @group Props
   */
  selectOnFocus = false;
  /**
   * Whether to focus on the first visible or selected element when the overlay panel is shown.
   * @group Props
   */
  autoOptionFocus = false;
  /**
   * Applies focus to the filter element when the overlay is shown.
   * @group Props
   */
  autofocusFilter = true;
  /**
   * Whether the component should span the full width of its parent.
   * @group Props
   */
  fluid;
  /**
   * When present, it specifies that the component should be disabled.
   * @group Props
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(_disabled) {
    if (_disabled) {
      this.focused = false;
      if (this.overlayVisible) this.hide();
    }
    this._disabled = _disabled;
    if (!this.cd.destroyed) {
      this.cd.detectChanges();
    }
  }
  /**
   * Item size of item to be virtual scrolled.
   * @group Props
   * @deprecated use virtualScrollItemSize property instead.
   */
  get itemSize() {
    return this._itemSize;
  }
  set itemSize(val) {
    this._itemSize = val;
    console.log("The itemSize property is deprecated, use virtualScrollItemSize property instead.");
  }
  _itemSize;
  /**
   * Whether to automatically manage layering.
   * @group Props
   * @deprecated since v14.2.0, use overlayOptions property instead.
   */
  get autoZIndex() {
    return this._autoZIndex;
  }
  set autoZIndex(val) {
    this._autoZIndex = val;
    console.log("The autoZIndex property is deprecated since v14.2.0, use overlayOptions property instead.");
  }
  _autoZIndex;
  /**
   * Base zIndex value to use in layering.
   * @group Props
   * @deprecated since v14.2.0, use overlayOptions property instead.
   */
  get baseZIndex() {
    return this._baseZIndex;
  }
  set baseZIndex(val) {
    this._baseZIndex = val;
    console.log("The baseZIndex property is deprecated since v14.2.0, use overlayOptions property instead.");
  }
  _baseZIndex;
  /**
   * Transition options of the show animation.
   * @group Props
   * @deprecated since v14.2.0, use overlayOptions property instead.
   */
  get showTransitionOptions() {
    return this._showTransitionOptions;
  }
  set showTransitionOptions(val) {
    this._showTransitionOptions = val;
    console.log("The showTransitionOptions property is deprecated since v14.2.0, use overlayOptions property instead.");
  }
  _showTransitionOptions;
  /**
   * Transition options of the hide animation.
   * @group Props
   * @deprecated since v14.2.0, use overlayOptions property instead.
   */
  get hideTransitionOptions() {
    return this._hideTransitionOptions;
  }
  set hideTransitionOptions(val) {
    this._hideTransitionOptions = val;
    console.log("The hideTransitionOptions property is deprecated since v14.2.0, use overlayOptions property instead.");
  }
  _hideTransitionOptions;
  /**
   * When specified, filter displays with this value.
   * @group Props
   */
  get filterValue() {
    return this._filterValue();
  }
  set filterValue(val) {
    setTimeout(() => {
      this._filterValue.set(val);
    });
  }
  /**
   * An array of objects to display as the available options.
   * @group Props
   */
  get options() {
    const options = this._options();
    return options;
  }
  set options(val) {
    if (!deepEquals(val, this._options())) {
      this._options.set(val);
    }
  }
  /**
   * Callback to invoke when value of select changes.
   * @param {SelectChangeEvent} event - custom change event.
   * @group Emits
   */
  onChange = new EventEmitter();
  /**
   * Callback to invoke when data is filtered.
   * @param {SelectFilterEvent} event - custom filter event.
   * @group Emits
   */
  onFilter = new EventEmitter();
  /**
   * Callback to invoke when select gets focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to invoke when select loses focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  /**
   * Callback to invoke when component is clicked.
   * @param {MouseEvent} event - Mouse event.
   * @group Emits
   */
  onClick = new EventEmitter();
  /**
   * Callback to invoke when select overlay gets visible.
   * @param {AnimationEvent} event - Animation event.
   * @group Emits
   */
  onShow = new EventEmitter();
  /**
   * Callback to invoke when select overlay gets hidden.
   * @param {AnimationEvent} event - Animation event.
   * @group Emits
   */
  onHide = new EventEmitter();
  /**
   * Callback to invoke when select clears the value.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onClear = new EventEmitter();
  /**
   * Callback to invoke in lazy mode to load new data.
   * @param {SelectLazyLoadEvent} event - Lazy load event.
   * @group Emits
   */
  onLazyLoad = new EventEmitter();
  _componentStyle = inject(SelectStyle);
  filterViewChild;
  focusInputViewChild;
  editableInputViewChild;
  itemsViewChild;
  scroller;
  overlayViewChild;
  firstHiddenFocusableElementOnOverlay;
  lastHiddenFocusableElementOnOverlay;
  get hasFluid() {
    const nativeElement = this.el.nativeElement;
    const fluidComponent = nativeElement.closest("p-fluid");
    return this.fluid || !!fluidComponent;
  }
  // @todo to be refactored
  get hostClass() {
    const classes8 = this._componentStyle.classes.root({
      instance: this
    }).map((cls) => {
      if (typeof cls === "string") {
        return cls;
      } else {
        return Object.keys(cls).filter((key) => cls[key]).join(" ");
      }
    }).join(" ");
    return classes8 + " " + this.styleClass;
  }
  get hostStyle() {
    return this.style;
  }
  _disabled;
  itemsWrapper;
  /**
   * Custom item template.
   * @group Templates
   */
  itemTemplate;
  /**
   * Custom group template.
   * @group Templates
   */
  groupTemplate;
  /**
   * Custom loader template.
   * @group Templates
   */
  loaderTemplate;
  /**
   * Custom selected item template.
   * @group Templates
   */
  selectedItemTemplate;
  /**
   * Custom header template.
   * @group Templates
   */
  headerTemplate;
  /**
   * Custom filter template.
   * @group Templates
   */
  filterTemplate;
  /**
   * Custom footer template.
   * @group Templates
   */
  footerTemplate;
  /**
   * Custom empty filter template.
   * @group Templates
   */
  emptyFilterTemplate;
  /**
   * Custom empty template.
   * @group Templates
   */
  emptyTemplate;
  /**
   * Custom dropdown icon template.
   * @group Templates
   */
  dropdownIconTemplate;
  /**
   * Custom loading icon template.
   * @group Templates
   */
  loadingIconTemplate;
  /**
   * Custom clear icon template.
   * @group Templates
   */
  clearIconTemplate;
  /**
   * Custom filter icon template.
   * @group Templates
   */
  filterIconTemplate;
  /**
   * Custom on icon template.
   * @group Templates
   */
  onIconTemplate;
  /**
   * Custom off icon template.
   * @group Templates
   */
  offIconTemplate;
  /**
   * Custom cancel icon template.
   * @group Templates
   */
  cancelIconTemplate;
  templates;
  _itemTemplate;
  _selectedItemTemplate;
  _headerTemplate;
  _filterTemplate;
  _footerTemplate;
  _emptyFilterTemplate;
  _emptyTemplate;
  _groupTemplate;
  _loaderTemplate;
  _dropdownIconTemplate;
  _loadingIconTemplate;
  _clearIconTemplate;
  _filterIconTemplate;
  _cancelIconTemplate;
  _onIconTemplate;
  _offIconTemplate;
  filterOptions;
  _options = signal(null);
  _placeholder = signal(void 0);
  modelValue = signal(null);
  value;
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  hover;
  focused;
  overlayVisible;
  optionsChanged;
  panel;
  dimensionsUpdated;
  hoveredItem;
  selectedOptionUpdated;
  _filterValue = signal(null);
  searchValue;
  searchIndex;
  searchTimeout;
  previousSearchChar;
  currentSearchChar;
  preventModelTouched;
  focusedOptionIndex = signal(-1);
  labelId;
  listId;
  clicked = signal(false);
  get emptyMessageLabel() {
    return this.emptyMessage || this.config.getTranslation(TranslationKeys.EMPTY_MESSAGE);
  }
  get emptyFilterMessageLabel() {
    return this.emptyFilterMessage || this.config.getTranslation(TranslationKeys.EMPTY_FILTER_MESSAGE);
  }
  get isVisibleClearIcon() {
    return this.modelValue() != null && this.hasSelectedOption() && this.showClear && !this.disabled;
  }
  get listLabel() {
    return this.config.getTranslation(TranslationKeys.ARIA)["listLabel"];
  }
  get rootClass() {
    return this._componentStyle.classes.root({
      instance: this
    });
  }
  get inputClass() {
    const label = this.label();
    return {
      "p-select-label": true,
      "p-placeholder": this.placeholder() && label === this.placeholder(),
      "p-select-label-empty": !this.editable && !this.selectedItemTemplate && (label === void 0 || label === null || label === "p-emptylabel" || label.length === 0)
    };
  }
  get panelClass() {
    return {
      "p-dropdown-panel p-component": true,
      "p-input-filled": this.config.inputStyle() === "filled" || this.config.inputVariant() === "filled",
      "p-ripple-disabled": this.config.ripple() === false
    };
  }
  get focusedOptionId() {
    return this.focusedOptionIndex() !== -1 ? `${this.id}_${this.focusedOptionIndex()}` : null;
  }
  visibleOptions = computed(() => {
    const options = this.getAllVisibleAndNonVisibleOptions();
    if (this._filterValue()) {
      const _filterBy = this.filterBy || this.optionLabel;
      const filteredOptions = !_filterBy && !this.filterFields && !this.optionValue ? this.options.filter((option) => {
        if (option.label) {
          return option.label.toString().toLowerCase().indexOf(this._filterValue().toLowerCase().trim()) !== -1;
        }
        return option.toString().toLowerCase().indexOf(this._filterValue().toLowerCase().trim()) !== -1;
      }) : this.filterService.filter(options, this.searchFields(), this._filterValue().trim(), this.filterMatchMode, this.filterLocale);
      if (this.group) {
        const optionGroups = this.options || [];
        const filtered = [];
        optionGroups.forEach((group) => {
          const groupChildren = this.getOptionGroupChildren(group);
          const filteredItems = groupChildren.filter((item) => filteredOptions.includes(item));
          if (filteredItems.length > 0) filtered.push(__spreadProps(__spreadValues({}, group), {
            [typeof this.optionGroupChildren === "string" ? this.optionGroupChildren : "items"]: [...filteredItems]
          }));
        });
        return this.flatOptions(filtered);
      }
      return filteredOptions;
    }
    return options;
  });
  label = computed(() => {
    const options = this.getAllVisibleAndNonVisibleOptions();
    const selectedOptionIndex = options.findIndex((option) => this.isOptionValueEqualsModelValue(option));
    return selectedOptionIndex !== -1 ? this.getOptionLabel(options[selectedOptionIndex]) : this.placeholder() || "p-emptylabel";
  });
  filled = computed(() => {
    if (typeof this.modelValue() === "string") return !!this.modelValue();
    return this.label() !== "p-emptylabel" && this.modelValue() !== void 0 && this.modelValue() !== null;
  });
  selectedOption;
  editableInputValue = computed(() => this.getOptionLabel(this.selectedOption) || this.modelValue() || "");
  constructor(zone, filterService) {
    super();
    this.zone = zone;
    this.filterService = filterService;
    effect(() => {
      const modelValue = this.modelValue();
      const visibleOptions = this.visibleOptions();
      if (visibleOptions && isNotEmpty(visibleOptions)) {
        const selectedOptionIndex = this.findSelectedOptionIndex();
        if (selectedOptionIndex !== -1 || modelValue === void 0 || typeof modelValue === "string" && modelValue.length === 0 || this.isModelValueNotSet() || this.editable) {
          this.selectedOption = visibleOptions[selectedOptionIndex];
        }
      }
      if (isEmpty(visibleOptions) && (modelValue === void 0 || this.isModelValueNotSet()) && isNotEmpty(this.selectedOption)) {
        this.selectedOption = null;
      }
      if (modelValue !== void 0 && this.editable) {
        this.updateEditableLabel();
      }
      this.cd.markForCheck();
    });
  }
  isModelValueNotSet() {
    return this.modelValue() === null && !this.isOptionValueEqualsModelValue(this.selectedOption);
  }
  getAllVisibleAndNonVisibleOptions() {
    return this.group ? this.flatOptions(this.options) : this.options || [];
  }
  ngOnInit() {
    super.ngOnInit();
    this.id = this.id || uuid("pn_id_");
    this.autoUpdateModel();
    if (this.filterBy) {
      this.filterOptions = {
        filter: (value) => this.onFilterInputChange(value),
        reset: () => this.resetFilter()
      };
    }
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "item":
          this._itemTemplate = item.template;
          break;
        case "selectedItem":
          this._selectedItemTemplate = item.template;
          break;
        case "header":
          this._headerTemplate = item.template;
          break;
        case "filter":
          this._filterTemplate = item.template;
          break;
        case "footer":
          this._footerTemplate = item.template;
          break;
        case "emptyfilter":
          this._emptyFilterTemplate = item.template;
          break;
        case "empty":
          this._emptyTemplate = item.template;
          break;
        case "group":
          this._groupTemplate = item.template;
          break;
        case "loader":
          this._loaderTemplate = item.template;
          break;
        case "dropdownicon":
          this._dropdownIconTemplate = item.template;
          break;
        case "loadingicon":
          this._loadingIconTemplate = item.template;
          break;
        case "clearicon":
          this._clearIconTemplate = item.template;
          break;
        case "filtericon":
          this._filterIconTemplate = item.template;
          break;
        case "cancelicon":
          this._cancelIconTemplate = item.template;
          break;
        case "onicon":
          this._onIconTemplate = item.template;
          break;
        case "officon":
          this._offIconTemplate = item.template;
          break;
        default:
          this._itemTemplate = item.template;
          break;
      }
    });
  }
  ngAfterViewChecked() {
    if (this.optionsChanged && this.overlayVisible) {
      this.optionsChanged = false;
      this.zone.runOutsideAngular(() => {
        setTimeout(() => {
          if (this.overlayViewChild) {
            this.overlayViewChild.alignOverlay();
          }
        }, 1);
      });
    }
    if (this.selectedOptionUpdated && this.itemsWrapper) {
      let selectedItem = findSingle(this.overlayViewChild?.overlayViewChild?.nativeElement, "li.p-select-option-selected");
      if (selectedItem) {
        scrollInView(this.itemsWrapper, selectedItem);
      }
      this.selectedOptionUpdated = false;
    }
  }
  flatOptions(options) {
    return (options || []).reduce((result, option, index) => {
      result.push({
        optionGroup: option,
        group: true,
        index
      });
      const optionGroupChildren = this.getOptionGroupChildren(option);
      optionGroupChildren && optionGroupChildren.forEach((o) => result.push(o));
      return result;
    }, []);
  }
  autoUpdateModel() {
    if (this.selectOnFocus && this.autoOptionFocus && !this.hasSelectedOption()) {
      this.focusedOptionIndex.set(this.findFirstFocusedOptionIndex());
      this.onOptionSelect(null, this.visibleOptions()[this.focusedOptionIndex()], false);
    }
    if (this.autoDisplayFirst && (this.modelValue() === null || this.modelValue() === void 0)) {
      if (!this.placeholder()) {
        const ind = this.findFirstOptionIndex();
        this.onOptionSelect(null, this.visibleOptions()[ind], false, true);
      }
    }
  }
  onOptionSelect(event, option, isHide = true, preventChange = false) {
    if (!this.isSelected(option)) {
      const value = this.getOptionValue(option);
      this.updateModel(value, event);
      this.focusedOptionIndex.set(this.findSelectedOptionIndex());
      preventChange === false && this.onChange.emit({
        originalEvent: event,
        value
      });
    }
    if (isHide) {
      this.hide(true);
    }
  }
  onOptionMouseEnter(event, index) {
    if (this.focusOnHover) {
      this.changeFocusedOptionIndex(event, index);
    }
  }
  updateModel(value, event) {
    this.value = value;
    this.onModelChange(value);
    this.modelValue.set(value);
    this.selectedOptionUpdated = true;
  }
  writeValue(value) {
    if (this.filter) {
      this.resetFilter();
    }
    this.value = value;
    this.allowModelChange() && this.onModelChange(value);
    this.modelValue.set(this.value);
    this.updateEditableLabel();
    this.cd.markForCheck();
  }
  allowModelChange() {
    return !!this.modelValue() && !this.placeholder() && (this.modelValue() === void 0 || this.modelValue() === null) && !this.editable && this.options && this.options.length;
  }
  isSelected(option) {
    return this.isValidOption(option) && this.isOptionValueEqualsModelValue(option);
  }
  isOptionValueEqualsModelValue(option) {
    return equals(this.modelValue(), this.getOptionValue(option), this.equalityKey());
  }
  ngAfterViewInit() {
    if (this.editable) {
      this.updateEditableLabel();
    }
    this.updatePlaceHolderForFloatingLabel();
  }
  updatePlaceHolderForFloatingLabel() {
    const parentElement = this.el.nativeElement.parentElement;
    const isInFloatingLabel = parentElement?.classList.contains("p-float-label");
    if (parentElement && isInFloatingLabel && !this.selectedOption) {
      const label = parentElement.querySelector("label");
      if (label) {
        this._placeholder.set(label.textContent);
      }
    }
  }
  updateEditableLabel() {
    if (this.editableInputViewChild) {
      this.editableInputViewChild.nativeElement.value = this.getOptionLabel(this.selectedOption) || this.modelValue() || "";
    }
  }
  clearEditableLabel() {
    if (this.editableInputViewChild) {
      this.editableInputViewChild.nativeElement.value = "";
    }
  }
  getOptionIndex(index, scrollerOptions) {
    return this.virtualScrollerDisabled ? index : scrollerOptions && scrollerOptions.getItemOptions(index)["index"];
  }
  getOptionLabel(option) {
    return this.optionLabel !== void 0 && this.optionLabel !== null ? resolveFieldData(option, this.optionLabel) : option && option.label !== void 0 ? option.label : option;
  }
  getOptionValue(option) {
    return this.optionValue && this.optionValue !== null ? resolveFieldData(option, this.optionValue) : !this.optionLabel && option && option.value !== void 0 ? option.value : option;
  }
  isOptionDisabled(option) {
    if (this.getOptionValue(this.modelValue()) === this.getOptionValue(option) || this.getOptionLabel(this.modelValue() === this.getOptionLabel(option)) && option.disabled === false) {
      return false;
    } else {
      return this.optionDisabled ? resolveFieldData(option, this.optionDisabled) : option && option.disabled !== void 0 ? option.disabled : false;
    }
  }
  getOptionGroupLabel(optionGroup) {
    return this.optionGroupLabel !== void 0 && this.optionGroupLabel !== null ? resolveFieldData(optionGroup, this.optionGroupLabel) : optionGroup && optionGroup.label !== void 0 ? optionGroup.label : optionGroup;
  }
  getOptionGroupChildren(optionGroup) {
    return this.optionGroupChildren !== void 0 && this.optionGroupChildren !== null ? resolveFieldData(optionGroup, this.optionGroupChildren) : optionGroup.items;
  }
  getAriaPosInset(index) {
    return (this.optionGroupLabel ? index - this.visibleOptions().slice(0, index).filter((option) => this.isOptionGroup(option)).length : index) + 1;
  }
  get ariaSetSize() {
    return this.visibleOptions().filter((option) => !this.isOptionGroup(option)).length;
  }
  /**
   * Callback to invoke on filter reset.
   * @group Method
   */
  resetFilter() {
    this._filterValue.set(null);
    if (this.filterViewChild && this.filterViewChild.nativeElement) {
      this.filterViewChild.nativeElement.value = "";
    }
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
  onContainerClick(event) {
    if (this.disabled || this.readonly || this.loading) {
      return;
    }
    this.focusInputViewChild?.nativeElement.focus({
      preventScroll: true
    });
    if (event.target.tagName === "INPUT" || event.target.getAttribute("data-pc-section") === "clearicon" || event.target.closest('[data-pc-section="clearicon"]')) {
      return;
    } else if (!this.overlayViewChild || !this.overlayViewChild.el.nativeElement.contains(event.target)) {
      this.overlayVisible ? this.hide(true) : this.show(true);
    }
    this.onClick.emit(event);
    this.clicked.set(true);
    this.cd.detectChanges();
  }
  isEmpty() {
    return !this._options() || this.visibleOptions() && this.visibleOptions().length === 0;
  }
  onEditableInput(event) {
    const value = event.target.value;
    this.searchValue = "";
    const matched = this.searchOptions(event, value);
    !matched && this.focusedOptionIndex.set(-1);
    this.onModelChange(value);
    this.updateModel(value || null, event);
    setTimeout(() => {
      this.onChange.emit({
        originalEvent: event,
        value
      });
    }, 1);
    !this.overlayVisible && isNotEmpty(value) && this.show();
  }
  /**
   * Displays the panel.
   * @group Method
   */
  show(isFocus) {
    this.overlayVisible = true;
    this.focusedOptionIndex.set(this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : this.editable ? -1 : this.findSelectedOptionIndex());
    if (isFocus) {
      focus(this.focusInputViewChild?.nativeElement);
    }
    this.cd.markForCheck();
  }
  onOverlayAnimationStart(event) {
    if (event.toState === "visible") {
      this.itemsWrapper = findSingle(this.overlayViewChild?.overlayViewChild?.nativeElement, this.virtualScroll ? ".p-scroller" : ".p-select-list-container");
      this.virtualScroll && this.scroller?.setContentEl(this.itemsViewChild?.nativeElement);
      if (this.options && this.options.length) {
        if (this.virtualScroll) {
          const selectedIndex = this.modelValue() ? this.focusedOptionIndex() : -1;
          if (selectedIndex !== -1) {
            this.scroller?.scrollToIndex(selectedIndex);
          }
        } else {
          let selectedListItem = findSingle(this.itemsWrapper, ".p-select-option.p-select-option-selected");
          if (selectedListItem) {
            selectedListItem.scrollIntoView({
              block: "nearest",
              inline: "nearest"
            });
          }
        }
      }
      if (this.filterViewChild && this.filterViewChild.nativeElement) {
        this.preventModelTouched = true;
        if (this.autofocusFilter && !this.editable) {
          this.filterViewChild.nativeElement.focus();
        }
      }
      this.onShow.emit(event);
    }
    if (event.toState === "void") {
      this.itemsWrapper = null;
      this.onModelTouched();
      this.onHide.emit(event);
    }
  }
  /**
   * Hides the panel.
   * @group Method
   */
  hide(isFocus) {
    this.overlayVisible = false;
    this.focusedOptionIndex.set(-1);
    this.clicked.set(false);
    this.searchValue = "";
    if (this.overlayOptions?.mode === "modal") {
      unblockBodyScroll();
    }
    if (this.filter && this.resetFilterOnHide) {
      this.resetFilter();
    }
    if (isFocus) {
      if (this.focusInputViewChild) {
        focus(this.focusInputViewChild?.nativeElement);
      }
      if (this.editable && this.editableInputViewChild) {
        focus(this.editableInputViewChild?.nativeElement);
      }
    }
    this.cd.markForCheck();
  }
  onInputFocus(event) {
    if (this.disabled) {
      return;
    }
    this.focused = true;
    const focusedOptionIndex = this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : this.overlayVisible && this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
    this.focusedOptionIndex.set(focusedOptionIndex);
    this.overlayVisible && this.scrollInView(this.focusedOptionIndex());
    this.onFocus.emit(event);
  }
  onInputBlur(event) {
    this.focused = false;
    this.onBlur.emit(event);
    if (!this.preventModelTouched) {
      this.onModelTouched();
    }
    this.preventModelTouched = false;
  }
  onKeyDown(event, search = false) {
    if (this.disabled || this.readonly || this.loading) {
      return;
    }
    switch (event.code) {
      //down
      case "ArrowDown":
        this.onArrowDownKey(event);
        break;
      //up
      case "ArrowUp":
        this.onArrowUpKey(event, this.editable);
        break;
      case "ArrowLeft":
      case "ArrowRight":
        this.onArrowLeftKey(event, this.editable);
        break;
      case "Delete":
        this.onDeleteKey(event);
        break;
      case "Home":
        this.onHomeKey(event, this.editable);
        break;
      case "End":
        this.onEndKey(event, this.editable);
        break;
      case "PageDown":
        this.onPageDownKey(event);
        break;
      case "PageUp":
        this.onPageUpKey(event);
        break;
      //space
      case "Space":
        this.onSpaceKey(event, search);
        break;
      //enter
      case "Enter":
      case "NumpadEnter":
        this.onEnterKey(event);
        break;
      //escape and tab
      case "Escape":
        this.onEscapeKey(event);
        break;
      case "Tab":
        this.onTabKey(event);
        break;
      case "Backspace":
        this.onBackspaceKey(event, this.editable);
        break;
      case "ShiftLeft":
      case "ShiftRight":
        break;
      default:
        if (!event.metaKey && isPrintableCharacter(event.key)) {
          !this.overlayVisible && this.show();
          !this.editable && this.searchOptions(event, event.key);
        }
        break;
    }
    this.clicked.set(false);
  }
  onFilterKeyDown(event) {
    switch (event.code) {
      case "ArrowDown":
        this.onArrowDownKey(event);
        break;
      case "ArrowUp":
        this.onArrowUpKey(event, true);
        break;
      case "ArrowLeft":
      case "ArrowRight":
        this.onArrowLeftKey(event, true);
        break;
      case "Home":
        this.onHomeKey(event, true);
        break;
      case "End":
        this.onEndKey(event, true);
        break;
      case "Enter":
      case "NumpadEnter":
        this.onEnterKey(event, true);
        break;
      case "Escape":
        this.onEscapeKey(event);
        break;
      case "Tab":
        this.onTabKey(event, true);
        break;
      default:
        break;
    }
  }
  onFilterBlur(event) {
    this.focusedOptionIndex.set(-1);
  }
  onArrowDownKey(event) {
    if (!this.overlayVisible) {
      this.show();
      this.editable && this.changeFocusedOptionIndex(event, this.findSelectedOptionIndex());
    } else {
      const optionIndex = this.focusedOptionIndex() !== -1 ? this.findNextOptionIndex(this.focusedOptionIndex()) : this.clicked() ? this.findFirstOptionIndex() : this.findFirstFocusedOptionIndex();
      this.changeFocusedOptionIndex(event, optionIndex);
    }
    event.preventDefault();
    event.stopPropagation();
  }
  changeFocusedOptionIndex(event, index) {
    if (this.focusedOptionIndex() !== index) {
      this.focusedOptionIndex.set(index);
      this.scrollInView();
      if (this.selectOnFocus) {
        const option = this.visibleOptions()[index];
        this.onOptionSelect(event, option, false);
      }
    }
  }
  get virtualScrollerDisabled() {
    return !this.virtualScroll;
  }
  scrollInView(index = -1) {
    const id = index !== -1 ? `${this.id}_${index}` : this.focusedOptionId;
    if (this.itemsViewChild && this.itemsViewChild.nativeElement) {
      const element = findSingle(this.itemsViewChild.nativeElement, `li[id="${id}"]`);
      if (element) {
        element.scrollIntoView && element.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        });
      } else if (!this.virtualScrollerDisabled) {
        setTimeout(() => {
          this.virtualScroll && this.scroller?.scrollToIndex(index !== -1 ? index : this.focusedOptionIndex());
        }, 0);
      }
    }
  }
  hasSelectedOption() {
    return this.modelValue() !== void 0;
  }
  isValidSelectedOption(option) {
    return this.isValidOption(option) && this.isSelected(option);
  }
  equalityKey() {
    return this.optionValue ? null : this.dataKey;
  }
  findFirstFocusedOptionIndex() {
    const selectedIndex = this.findSelectedOptionIndex();
    return selectedIndex < 0 ? this.findFirstOptionIndex() : selectedIndex;
  }
  findFirstOptionIndex() {
    return this.visibleOptions().findIndex((option) => this.isValidOption(option));
  }
  findSelectedOptionIndex() {
    return this.hasSelectedOption() ? this.visibleOptions().findIndex((option) => this.isValidSelectedOption(option)) : -1;
  }
  findNextOptionIndex(index) {
    const matchedOptionIndex = index < this.visibleOptions().length - 1 ? this.visibleOptions().slice(index + 1).findIndex((option) => this.isValidOption(option)) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : index;
  }
  findPrevOptionIndex(index) {
    const matchedOptionIndex = index > 0 ? findLastIndex(this.visibleOptions().slice(0, index), (option) => this.isValidOption(option)) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex : index;
  }
  findLastOptionIndex() {
    return findLastIndex(this.visibleOptions(), (option) => this.isValidOption(option));
  }
  findLastFocusedOptionIndex() {
    const selectedIndex = this.findSelectedOptionIndex();
    return selectedIndex < 0 ? this.findLastOptionIndex() : selectedIndex;
  }
  isValidOption(option) {
    return option !== void 0 && option !== null && !(this.isOptionDisabled(option) || this.isOptionGroup(option));
  }
  isOptionGroup(option) {
    return this.optionGroupLabel !== void 0 && this.optionGroupLabel !== null && option.optionGroup !== void 0 && option.optionGroup !== null && option.group;
  }
  onArrowUpKey(event, pressedInInputText = false) {
    if (event.altKey && !pressedInInputText) {
      if (this.focusedOptionIndex() !== -1) {
        const option = this.visibleOptions()[this.focusedOptionIndex()];
        this.onOptionSelect(event, option);
      }
      this.overlayVisible && this.hide();
    } else {
      const optionIndex = this.focusedOptionIndex() !== -1 ? this.findPrevOptionIndex(this.focusedOptionIndex()) : this.clicked() ? this.findLastOptionIndex() : this.findLastFocusedOptionIndex();
      this.changeFocusedOptionIndex(event, optionIndex);
      !this.overlayVisible && this.show();
    }
    event.preventDefault();
    event.stopPropagation();
  }
  onArrowLeftKey(event, pressedInInputText = false) {
    pressedInInputText && this.focusedOptionIndex.set(-1);
  }
  onDeleteKey(event) {
    if (this.showClear) {
      this.clear(event);
      event.preventDefault();
    }
  }
  onHomeKey(event, pressedInInputText = false) {
    if (pressedInInputText) {
      const target = event.currentTarget;
      if (event.shiftKey) {
        target.setSelectionRange(0, target.value.length);
      } else {
        target.setSelectionRange(0, 0);
        this.focusedOptionIndex.set(-1);
      }
    } else {
      this.changeFocusedOptionIndex(event, this.findFirstOptionIndex());
      !this.overlayVisible && this.show();
    }
    event.preventDefault();
  }
  onEndKey(event, pressedInInputText = false) {
    if (pressedInInputText) {
      const target = event.currentTarget;
      if (event.shiftKey) {
        target.setSelectionRange(0, target.value.length);
      } else {
        const len = target.value.length;
        target.setSelectionRange(len, len);
        this.focusedOptionIndex.set(-1);
      }
    } else {
      this.changeFocusedOptionIndex(event, this.findLastOptionIndex());
      !this.overlayVisible && this.show();
    }
    event.preventDefault();
  }
  onPageDownKey(event) {
    this.scrollInView(this.visibleOptions().length - 1);
    event.preventDefault();
  }
  onPageUpKey(event) {
    this.scrollInView(0);
    event.preventDefault();
  }
  onSpaceKey(event, pressedInInputText = false) {
    !this.editable && !pressedInInputText && this.onEnterKey(event);
  }
  onEnterKey(event, pressedInInput = false) {
    if (!this.overlayVisible) {
      this.focusedOptionIndex.set(-1);
      this.onArrowDownKey(event);
    } else {
      if (this.focusedOptionIndex() !== -1) {
        const option = this.visibleOptions()[this.focusedOptionIndex()];
        this.onOptionSelect(event, option);
      }
      !pressedInInput && this.hide();
    }
    event.preventDefault();
  }
  onEscapeKey(event) {
    this.overlayVisible && this.hide(true);
    event.preventDefault();
  }
  onTabKey(event, pressedInInputText = false) {
    if (!pressedInInputText) {
      if (this.overlayVisible && this.hasFocusableElements()) {
        focus(event.shiftKey ? this.lastHiddenFocusableElementOnOverlay.nativeElement : this.firstHiddenFocusableElementOnOverlay.nativeElement);
        event.preventDefault();
      } else {
        if (this.focusedOptionIndex() !== -1 && this.overlayVisible) {
          const option = this.visibleOptions()[this.focusedOptionIndex()];
          this.onOptionSelect(event, option);
        }
        this.overlayVisible && this.hide(this.filter);
      }
    }
    event.stopPropagation();
  }
  onFirstHiddenFocus(event) {
    const focusableEl = event.relatedTarget === this.focusInputViewChild?.nativeElement ? getFirstFocusableElement(this.overlayViewChild.el?.nativeElement, ":not(.p-hidden-focusable)") : this.focusInputViewChild?.nativeElement;
    focus(focusableEl);
  }
  onLastHiddenFocus(event) {
    const focusableEl = event.relatedTarget === this.focusInputViewChild?.nativeElement ? getLastFocusableElement(this.overlayViewChild?.overlayViewChild?.nativeElement, ':not([data-p-hidden-focusable="true"])') : this.focusInputViewChild?.nativeElement;
    focus(focusableEl);
  }
  hasFocusableElements() {
    return getFocusableElements(this.overlayViewChild.overlayViewChild.nativeElement, ':not([data-p-hidden-focusable="true"])').length > 0;
  }
  onBackspaceKey(event, pressedInInputText = false) {
    if (pressedInInputText) {
      !this.overlayVisible && this.show();
    }
  }
  searchFields() {
    return this.filterBy?.split(",") || this.filterFields || [this.optionLabel];
  }
  searchOptions(event, char) {
    this.searchValue = (this.searchValue || "") + char;
    let optionIndex = -1;
    let matched = false;
    optionIndex = this.visibleOptions().findIndex((option) => this.isOptionMatched(option));
    if (optionIndex !== -1) {
      matched = true;
    }
    if (optionIndex === -1 && this.focusedOptionIndex() === -1) {
      optionIndex = this.findFirstFocusedOptionIndex();
    }
    if (optionIndex !== -1) {
      setTimeout(() => {
        this.changeFocusedOptionIndex(event, optionIndex);
      });
    }
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
    this.searchTimeout = setTimeout(() => {
      this.searchValue = "";
      this.searchTimeout = null;
    }, 500);
    return matched;
  }
  isOptionMatched(option) {
    return this.isValidOption(option) && this.getOptionLabel(option).toString().toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale));
  }
  onFilterInputChange(event) {
    let value = event.target.value;
    this._filterValue.set(value);
    this.focusedOptionIndex.set(-1);
    this.onFilter.emit({
      originalEvent: event,
      filter: this._filterValue()
    });
    !this.virtualScrollerDisabled && this.scroller.scrollToIndex(0);
    setTimeout(() => {
      this.overlayViewChild.alignOverlay();
    });
    this.cd.markForCheck();
  }
  applyFocus() {
    if (this.editable) findSingle(this.el.nativeElement, ".p-dropdown-label.p-inputtext").focus();
    else focus(this.focusInputViewChild?.nativeElement);
  }
  /**
   * Applies focus.
   * @group Method
   */
  focus() {
    this.applyFocus();
  }
  /**
   * Clears the model.
   * @group Method
   */
  clear(event) {
    this.updateModel(null, event);
    this.clearEditableLabel();
    this.onModelTouched();
    this.onChange.emit({
      originalEvent: event,
      value: this.value
    });
    this.onClear.emit(event);
    this.resetFilter();
  }
  static \u0275fac = function Select_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Select)(\u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(FilterService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Select,
    selectors: [["p-select"]],
    contentQueries: function Select_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c38, 4);
        \u0275\u0275contentQuery(dirIndex, _c45, 4);
        \u0275\u0275contentQuery(dirIndex, _c55, 4);
        \u0275\u0275contentQuery(dirIndex, _c65, 4);
        \u0275\u0275contentQuery(dirIndex, _c75, 4);
        \u0275\u0275contentQuery(dirIndex, _c84, 4);
        \u0275\u0275contentQuery(dirIndex, _c94, 4);
        \u0275\u0275contentQuery(dirIndex, _c104, 4);
        \u0275\u0275contentQuery(dirIndex, _c114, 4);
        \u0275\u0275contentQuery(dirIndex, _c124, 4);
        \u0275\u0275contentQuery(dirIndex, _c134, 4);
        \u0275\u0275contentQuery(dirIndex, _c143, 4);
        \u0275\u0275contentQuery(dirIndex, _c153, 4);
        \u0275\u0275contentQuery(dirIndex, _c163, 4);
        \u0275\u0275contentQuery(dirIndex, _c173, 4);
        \u0275\u0275contentQuery(dirIndex, _c183, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.itemTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.groupTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.loaderTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.selectedItemTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.filterTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.footerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.emptyFilterTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.emptyTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.dropdownIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.loadingIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.clearIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.filterIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.onIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.offIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.cancelIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Select_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c84, 5);
        \u0275\u0275viewQuery(_c192, 5);
        \u0275\u0275viewQuery(_c202, 5);
        \u0275\u0275viewQuery(_c212, 5);
        \u0275\u0275viewQuery(_c223, 5);
        \u0275\u0275viewQuery(_c233, 5);
        \u0275\u0275viewQuery(_c243, 5);
        \u0275\u0275viewQuery(_c252, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.filterViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.focusInputViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.editableInputViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.itemsViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.scroller = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overlayViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.firstHiddenFocusableElementOnOverlay = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.lastHiddenFocusableElementOnOverlay = _t.first);
      }
    },
    hostVars: 5,
    hostBindings: function Select_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function Select_click_HostBindingHandler($event) {
          return ctx.onContainerClick($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("id", ctx.id);
        \u0275\u0275styleMap(ctx.hostStyle);
        \u0275\u0275classMap(ctx.hostClass);
      }
    },
    inputs: {
      id: "id",
      scrollHeight: "scrollHeight",
      filter: [2, "filter", "filter", booleanAttribute],
      name: "name",
      style: "style",
      panelStyle: "panelStyle",
      styleClass: "styleClass",
      panelStyleClass: "panelStyleClass",
      readonly: [2, "readonly", "readonly", booleanAttribute],
      required: [2, "required", "required", booleanAttribute],
      editable: [2, "editable", "editable", booleanAttribute],
      appendTo: "appendTo",
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      placeholder: "placeholder",
      loadingIcon: "loadingIcon",
      filterPlaceholder: "filterPlaceholder",
      filterLocale: "filterLocale",
      variant: "variant",
      inputId: "inputId",
      dataKey: "dataKey",
      filterBy: "filterBy",
      filterFields: "filterFields",
      autofocus: [2, "autofocus", "autofocus", booleanAttribute],
      resetFilterOnHide: [2, "resetFilterOnHide", "resetFilterOnHide", booleanAttribute],
      checkmark: [2, "checkmark", "checkmark", booleanAttribute],
      dropdownIcon: "dropdownIcon",
      loading: [2, "loading", "loading", booleanAttribute],
      optionLabel: "optionLabel",
      optionValue: "optionValue",
      optionDisabled: "optionDisabled",
      optionGroupLabel: "optionGroupLabel",
      optionGroupChildren: "optionGroupChildren",
      autoDisplayFirst: [2, "autoDisplayFirst", "autoDisplayFirst", booleanAttribute],
      group: [2, "group", "group", booleanAttribute],
      showClear: [2, "showClear", "showClear", booleanAttribute],
      emptyFilterMessage: "emptyFilterMessage",
      emptyMessage: "emptyMessage",
      lazy: [2, "lazy", "lazy", booleanAttribute],
      virtualScroll: [2, "virtualScroll", "virtualScroll", booleanAttribute],
      virtualScrollItemSize: [2, "virtualScrollItemSize", "virtualScrollItemSize", numberAttribute],
      virtualScrollOptions: "virtualScrollOptions",
      size: "size",
      overlayOptions: "overlayOptions",
      ariaFilterLabel: "ariaFilterLabel",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      filterMatchMode: "filterMatchMode",
      maxlength: [2, "maxlength", "maxlength", numberAttribute],
      tooltip: "tooltip",
      tooltipPosition: "tooltipPosition",
      tooltipPositionStyle: "tooltipPositionStyle",
      tooltipStyleClass: "tooltipStyleClass",
      focusOnHover: [2, "focusOnHover", "focusOnHover", booleanAttribute],
      selectOnFocus: [2, "selectOnFocus", "selectOnFocus", booleanAttribute],
      autoOptionFocus: [2, "autoOptionFocus", "autoOptionFocus", booleanAttribute],
      autofocusFilter: [2, "autofocusFilter", "autofocusFilter", booleanAttribute],
      fluid: [2, "fluid", "fluid", booleanAttribute],
      disabled: "disabled",
      itemSize: "itemSize",
      autoZIndex: "autoZIndex",
      baseZIndex: "baseZIndex",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      filterValue: "filterValue",
      options: "options"
    },
    outputs: {
      onChange: "onChange",
      onFilter: "onFilter",
      onFocus: "onFocus",
      onBlur: "onBlur",
      onClick: "onClick",
      onShow: "onShow",
      onHide: "onHide",
      onClear: "onClear",
      onLazyLoad: "onLazyLoad"
    },
    features: [\u0275\u0275ProvidersFeature([SELECT_VALUE_ACCESSOR, SelectStyle]), \u0275\u0275InputTransformsFeature, \u0275\u0275InheritDefinitionFeature],
    decls: 11,
    vars: 15,
    consts: [["elseBlock", ""], ["overlay", ""], ["content", ""], ["focusInput", ""], ["defaultPlaceholder", ""], ["editableInput", ""], ["firstHiddenFocusableEl", ""], ["buildInItems", ""], ["lastHiddenFocusableEl", ""], ["builtInFilterElement", ""], ["filter", ""], ["scroller", ""], ["loader", ""], ["items", ""], ["emptyFilter", ""], ["empty", ""], ["role", "combobox", 3, "ngClass", "pTooltip", "tooltipPosition", "positionStyle", "tooltipStyleClass", "pAutoFocus", "focus", "blur", "keydown", 4, "ngIf"], ["type", "text", "aria-haspopup", "listbox", 3, "ngClass", "disabled", "pAutoFocus", "input", "keydown", "focus", "blur", 4, "ngIf"], [4, "ngIf"], ["role", "button", "aria-label", "dropdown trigger", "aria-haspopup", "listbox", 1, "p-select-dropdown"], [4, "ngIf", "ngIfElse"], [3, "visibleChange", "onAnimationStart", "onHide", "visible", "options", "target", "appendTo", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions"], ["role", "combobox", 3, "focus", "blur", "keydown", "ngClass", "pTooltip", "tooltipPosition", "positionStyle", "tooltipStyleClass", "pAutoFocus"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["type", "text", "aria-haspopup", "listbox", 3, "input", "keydown", "focus", "blur", "ngClass", "disabled", "pAutoFocus"], ["class", "p-select-clear-icon", 3, "click", 4, "ngIf"], [1, "p-select-clear-icon", 3, "click"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngTemplateOutlet"], ["aria-hidden", "true", 3, "ngClass", 4, "ngIf"], ["aria-hidden", "true", 3, "class", 4, "ngIf"], ["aria-hidden", "true", 3, "ngClass"], ["aria-hidden", "true"], ["class", "p-select-dropdown-icon", 4, "ngIf"], ["class", "p-select-dropdown-icon", 3, "ngClass", 4, "ngIf"], [3, "styleClass", 4, "ngIf"], [1, "p-select-dropdown-icon", 3, "ngClass"], [3, "styleClass"], [1, "p-select-dropdown-icon"], [3, "ngClass", "ngStyle"], ["role", "presentation", 1, "p-hidden-accessible", "p-hidden-focusable", 3, "focus"], ["class", "p-select-header", 3, "click", 4, "ngIf"], [1, "p-select-list-container"], [3, "items", "style", "itemSize", "autoSize", "lazy", "options", "onLazyLoad", 4, "ngIf"], [1, "p-select-header", 3, "click"], ["pInputText", "", "type", "text", "role", "searchbox", "autocomplete", "off", 1, "p-select-filter", 3, "input", "keydown", "blur", "pSize", "value", "variant"], [3, "onLazyLoad", "items", "itemSize", "autoSize", "lazy", "options"], ["role", "listbox", 1, "p-select-list", 3, "ngClass"], ["ngFor", "", 3, "ngForOf"], ["class", "p-select-empty-message", "role", "option", 3, "ngStyle", 4, "ngIf"], ["role", "option", 1, "p-select-option-group", 3, "ngStyle"], [3, "onClick", "onMouseEnter", "id", "option", "checkmark", "selected", "label", "disabled", "template", "focused", "ariaPosInset", "ariaSetSize"], ["role", "option", 1, "p-select-empty-message", 3, "ngStyle"]],
    template: function Select_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275template(0, Select_span_0_Template, 6, 20, "span", 16)(1, Select_input_1_Template, 2, 8, "input", 17)(2, Select_ng_container_2_Template, 3, 2, "ng-container", 18);
        \u0275\u0275elementStart(3, "div", 19);
        \u0275\u0275template(4, Select_ng_container_4_Template, 3, 2, "ng-container", 20)(5, Select_ng_template_5_Template, 2, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p-overlay", 21, 1);
        \u0275\u0275twoWayListener("visibleChange", function Select_Template_p_overlay_visibleChange_7_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.overlayVisible, $event) || (ctx.overlayVisible = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("onAnimationStart", function Select_Template_p_overlay_onAnimationStart_7_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onOverlayAnimationStart($event));
        })("onHide", function Select_Template_p_overlay_onHide_7_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.hide());
        });
        \u0275\u0275template(9, Select_ng_template_9_Template, 13, 17, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_6_0;
        const elseBlock_r23 = \u0275\u0275reference(6);
        \u0275\u0275property("ngIf", !ctx.editable);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.editable);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isVisibleClearIcon);
        \u0275\u0275advance();
        \u0275\u0275attribute("aria-expanded", (tmp_6_0 = ctx.overlayVisible) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : false)("data-pc-section", "trigger");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading)("ngIfElse", elseBlock_r23);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("visible", ctx.overlayVisible);
        \u0275\u0275property("options", ctx.overlayOptions)("target", "@parent")("appendTo", ctx.appendTo)("autoZIndex", ctx.autoZIndex)("baseZIndex", ctx.baseZIndex)("showTransitionOptions", ctx.showTransitionOptions)("hideTransitionOptions", ctx.hideTransitionOptions);
      }
    },
    dependencies: [CommonModule, NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, SelectItem, Overlay, Tooltip, AutoFocus, TimesIcon, ChevronDownIcon, SearchIcon, InputText, IconField, InputIcon, Scroller, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Select, [{
    type: Component,
    args: [{
      selector: "p-select",
      standalone: true,
      imports: [CommonModule, SelectItem, Overlay, Tooltip, AutoFocus, TimesIcon, ChevronDownIcon, SearchIcon, InputText, IconField, InputIcon, Scroller, SharedModule],
      template: `
        <span
            #focusInput
            [ngClass]="inputClass"
            *ngIf="!editable"
            [pTooltip]="tooltip"
            [tooltipPosition]="tooltipPosition"
            [positionStyle]="tooltipPositionStyle"
            [tooltipStyleClass]="tooltipStyleClass"
            [attr.aria-disabled]="disabled"
            [attr.id]="inputId"
            role="combobox"
            [attr.aria-label]="ariaLabel || (label() === 'p-emptylabel' ? undefined : label())"
            [attr.aria-labelledby]="ariaLabelledBy"
            [attr.aria-haspopup]="'listbox'"
            [attr.aria-expanded]="overlayVisible ?? false"
            [attr.aria-controls]="overlayVisible ? id + '_list' : null"
            [attr.tabindex]="!disabled ? tabindex : -1"
            [pAutoFocus]="autofocus"
            [attr.aria-activedescendant]="focused ? focusedOptionId : undefined"
            (focus)="onInputFocus($event)"
            (blur)="onInputBlur($event)"
            (keydown)="onKeyDown($event)"
            [attr.aria-required]="required"
            [attr.required]="required"
        >
            <ng-container *ngIf="!selectedItemTemplate && !_selectedItemTemplate; else defaultPlaceholder">{{ label() === 'p-emptylabel' ? '&nbsp;' : label() }}</ng-container>
            <ng-container *ngIf="(selectedItemTemplate || _selectedItemTemplate) && selectedOption" [ngTemplateOutlet]="selectedItemTemplate || _selectedItemTemplate" [ngTemplateOutletContext]="{ $implicit: selectedOption }"></ng-container>
            <ng-template #defaultPlaceholder>
                <span *ngIf="!selectedOption">{{ label() === 'p-emptylabel' ? '&nbsp;' : label() }}</span>
            </ng-template>
        </span>
        <input
            *ngIf="editable"
            #editableInput
            type="text"
            [attr.id]="inputId"
            [attr.maxlength]="maxlength"
            [ngClass]="inputClass"
            [disabled]="disabled"
            aria-haspopup="listbox"
            [attr.placeholder]="modelValue() === undefined || modelValue() === null ? placeholder() : undefined"
            [attr.aria-label]="ariaLabel || (label() === 'p-emptylabel' ? undefined : label())"
            (input)="onEditableInput($event)"
            (keydown)="onKeyDown($event)"
            [pAutoFocus]="autofocus"
            [attr.aria-activedescendant]="focused ? focusedOptionId : undefined"
            (focus)="onInputFocus($event)"
            (blur)="onInputBlur($event)"
        />
        <ng-container *ngIf="isVisibleClearIcon">
            <TimesIcon class="p-select-clear-icon" (click)="clear($event)" *ngIf="!clearIconTemplate && !_clearIconTemplate" [attr.data-pc-section]="'clearicon'" />
            <span class="p-select-clear-icon" (click)="clear($event)" *ngIf="clearIconTemplate || _clearIconTemplate" [attr.data-pc-section]="'clearicon'">
                <ng-template *ngTemplateOutlet="clearIconTemplate || _clearIconTemplate; context: { class: 'p-select-clear-icon' }"></ng-template>
            </span>
        </ng-container>

        <div class="p-select-dropdown" role="button" aria-label="dropdown trigger" aria-haspopup="listbox" [attr.aria-expanded]="overlayVisible ?? false" [attr.data-pc-section]="'trigger'">
            <ng-container *ngIf="loading; else elseBlock">
                <ng-container *ngIf="loadingIconTemplate || _loadingIconTemplate">
                    <ng-container *ngTemplateOutlet="loadingIconTemplate || _loadingIconTemplate"></ng-container>
                </ng-container>
                <ng-container *ngIf="!loadingIconTemplate && !_loadingIconTemplate">
                    <span *ngIf="loadingIcon" [ngClass]="'p-select-loading-icon pi-spin ' + loadingIcon" aria-hidden="true"></span>
                    <span *ngIf="!loadingIcon" [class]="'p-select-loading-icon pi pi-spinner pi-spin'" aria-hidden="true"></span>
                </ng-container>
            </ng-container>

            <ng-template #elseBlock>
                <ng-container *ngIf="!dropdownIconTemplate && !_dropdownIconTemplate">
                    <span class="p-select-dropdown-icon" *ngIf="dropdownIcon" [ngClass]="dropdownIcon"></span>
                    <ChevronDownIcon *ngIf="!dropdownIcon" [styleClass]="'p-select-dropdown-icon'" />
                </ng-container>
                <span *ngIf="dropdownIconTemplate || _dropdownIconTemplate" class="p-select-dropdown-icon">
                    <ng-template *ngTemplateOutlet="dropdownIconTemplate || _dropdownIconTemplate; context: { class: 'p-select-dropdown-icon' }"></ng-template>
                </span>
            </ng-template>
        </div>

        <p-overlay
            #overlay
            [(visible)]="overlayVisible"
            [options]="overlayOptions"
            [target]="'@parent'"
            [appendTo]="appendTo"
            [autoZIndex]="autoZIndex"
            [baseZIndex]="baseZIndex"
            [showTransitionOptions]="showTransitionOptions"
            [hideTransitionOptions]="hideTransitionOptions"
            (onAnimationStart)="onOverlayAnimationStart($event)"
            (onHide)="hide()"
        >
            <ng-template #content>
                <div [ngClass]="'p-select-overlay p-component'" [ngStyle]="panelStyle" [class]="panelStyleClass">
                    <span
                        #firstHiddenFocusableEl
                        role="presentation"
                        class="p-hidden-accessible p-hidden-focusable"
                        [attr.tabindex]="0"
                        (focus)="onFirstHiddenFocus($event)"
                        [attr.data-p-hidden-accessible]="true"
                        [attr.data-p-hidden-focusable]="true"
                    >
                    </span>
                    <ng-container *ngTemplateOutlet="headerTemplate || _headerTemplate"></ng-container>
                    <div class="p-select-header" *ngIf="filter" (click)="$event.stopPropagation()">
                        <ng-container *ngIf="filterTemplate || _filterTemplate; else builtInFilterElement">
                            <ng-container *ngTemplateOutlet="filterTemplate || _filterTemplate; context: { options: filterOptions }"></ng-container>
                        </ng-container>
                        <ng-template #builtInFilterElement>
                            <p-iconfield>
                                <input
                                    #filter
                                    pInputText
                                    [pSize]="size"
                                    type="text"
                                    role="searchbox"
                                    autocomplete="off"
                                    [value]="_filterValue() || ''"
                                    class="p-select-filter"
                                    [variant]="variant"
                                    [attr.placeholder]="filterPlaceholder"
                                    [attr.aria-owns]="id + '_list'"
                                    (input)="onFilterInputChange($event)"
                                    [attr.aria-label]="ariaFilterLabel"
                                    [attr.aria-activedescendant]="focusedOptionId"
                                    (keydown)="onFilterKeyDown($event)"
                                    (blur)="onFilterBlur($event)"
                                />
                                <p-inputicon>
                                    <SearchIcon *ngIf="!filterIconTemplate && !_filterIconTemplate" />
                                    <span *ngIf="filterIconTemplate || _filterIconTemplate">
                                        <ng-template *ngTemplateOutlet="filterIconTemplate || _filterIconTemplate"></ng-template>
                                    </span>
                                </p-inputicon>
                            </p-iconfield>
                        </ng-template>
                    </div>
                    <div class="p-select-list-container" [style.max-height]="virtualScroll ? 'auto' : scrollHeight || 'auto'">
                        <p-scroller
                            *ngIf="virtualScroll"
                            #scroller
                            [items]="visibleOptions()"
                            [style]="{ height: scrollHeight }"
                            [itemSize]="virtualScrollItemSize || _itemSize"
                            [autoSize]="true"
                            [lazy]="lazy"
                            (onLazyLoad)="onLazyLoad.emit($event)"
                            [options]="virtualScrollOptions"
                        >
                            <ng-template #content let-items let-scrollerOptions="options">
                                <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: items, options: scrollerOptions }"></ng-container>
                            </ng-template>
                            <ng-container *ngIf="loaderTemplate || _loaderTemplate">
                                <ng-template #loader let-scrollerOptions="options">
                                    <ng-container *ngTemplateOutlet="loaderTemplate || _loaderTemplate; context: { options: scrollerOptions }"></ng-container>
                                </ng-template>
                            </ng-container>
                        </p-scroller>
                        <ng-container *ngIf="!virtualScroll">
                            <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: visibleOptions(), options: {} }"></ng-container>
                        </ng-container>

                        <ng-template #buildInItems let-items let-scrollerOptions="options">
                            <ul #items [attr.id]="id + '_list'" [attr.aria-label]="listLabel" class="p-select-list" [ngClass]="scrollerOptions.contentStyleClass" [style]="scrollerOptions.contentStyle" role="listbox">
                                <ng-template ngFor let-option [ngForOf]="items" let-i="index">
                                    <ng-container *ngIf="isOptionGroup(option)">
                                        <li class="p-select-option-group" [attr.id]="id + '_' + getOptionIndex(i, scrollerOptions)" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }" role="option">
                                            <span *ngIf="!groupTemplate && !_groupTemplate">{{ getOptionGroupLabel(option.optionGroup) }}</span>
                                            <ng-container *ngTemplateOutlet="groupTemplate || _groupTemplate; context: { $implicit: option.optionGroup }"></ng-container>
                                        </li>
                                    </ng-container>
                                    <ng-container *ngIf="!isOptionGroup(option)">
                                        <p-selectItem
                                            [id]="id + '_' + getOptionIndex(i, scrollerOptions)"
                                            [option]="option"
                                            [checkmark]="checkmark"
                                            [selected]="isSelected(option)"
                                            [label]="getOptionLabel(option)"
                                            [disabled]="isOptionDisabled(option)"
                                            [template]="itemTemplate || _itemTemplate"
                                            [focused]="focusedOptionIndex() === getOptionIndex(i, scrollerOptions)"
                                            [ariaPosInset]="getAriaPosInset(getOptionIndex(i, scrollerOptions))"
                                            [ariaSetSize]="ariaSetSize"
                                            (onClick)="onOptionSelect($event, option)"
                                            (onMouseEnter)="onOptionMouseEnter($event, getOptionIndex(i, scrollerOptions))"
                                        ></p-selectItem>
                                    </ng-container>
                                </ng-template>
                                <li *ngIf="filterValue && isEmpty()" class="p-select-empty-message" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }" role="option">
                                    @if (!emptyFilterTemplate && !_emptyFilterTemplate && !emptyTemplate) {
                                        {{ emptyFilterMessageLabel }}
                                    } @else {
                                        <ng-container #emptyFilter *ngTemplateOutlet="emptyFilterTemplate || _emptyFilterTemplate || emptyTemplate || _emptyTemplate"></ng-container>
                                    }
                                </li>
                                <li *ngIf="!filterValue && isEmpty()" class="p-select-empty-message" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }" role="option">
                                    @if (!emptyTemplate && !_emptyTemplate) {
                                        {{ emptyMessageLabel }}
                                    } @else {
                                        <ng-container #empty *ngTemplateOutlet="emptyTemplate || _emptyTemplate"></ng-container>
                                    }
                                </li>
                            </ul>
                        </ng-template>
                    </div>
                    <ng-container *ngTemplateOutlet="footerTemplate || _footerTemplate"></ng-container>
                    <span
                        #lastHiddenFocusableEl
                        role="presentation"
                        class="p-hidden-accessible p-hidden-focusable"
                        [attr.tabindex]="0"
                        (focus)="onLastHiddenFocus($event)"
                        [attr.data-p-hidden-accessible]="true"
                        [attr.data-p-hidden-focusable]="true"
                    ></span>
                </div>
            </ng-template>
        </p-overlay>
    `,
      host: {
        "[attr.id]": "id",
        "(click)": "onContainerClick($event)"
      },
      providers: [SELECT_VALUE_ACCESSOR, SelectStyle],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None
    }]
  }], () => [{
    type: NgZone
  }, {
    type: FilterService
  }], {
    id: [{
      type: Input
    }],
    scrollHeight: [{
      type: Input
    }],
    filter: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    name: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    panelStyle: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    panelStyleClass: [{
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
    editable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    appendTo: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    placeholder: [{
      type: Input
    }],
    loadingIcon: [{
      type: Input
    }],
    filterPlaceholder: [{
      type: Input
    }],
    filterLocale: [{
      type: Input
    }],
    variant: [{
      type: Input
    }],
    inputId: [{
      type: Input
    }],
    dataKey: [{
      type: Input
    }],
    filterBy: [{
      type: Input
    }],
    filterFields: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    resetFilterOnHide: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    checkmark: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    dropdownIcon: [{
      type: Input
    }],
    loading: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
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
    optionGroupLabel: [{
      type: Input
    }],
    optionGroupChildren: [{
      type: Input
    }],
    autoDisplayFirst: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    group: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showClear: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    emptyFilterMessage: [{
      type: Input
    }],
    emptyMessage: [{
      type: Input
    }],
    lazy: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    virtualScroll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    virtualScrollItemSize: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    virtualScrollOptions: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    overlayOptions: [{
      type: Input
    }],
    ariaFilterLabel: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    filterMatchMode: [{
      type: Input
    }],
    maxlength: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    tooltip: [{
      type: Input
    }],
    tooltipPosition: [{
      type: Input
    }],
    tooltipPositionStyle: [{
      type: Input
    }],
    tooltipStyleClass: [{
      type: Input
    }],
    focusOnHover: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selectOnFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autoOptionFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autofocusFilter: [{
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
    disabled: [{
      type: Input
    }],
    itemSize: [{
      type: Input
    }],
    autoZIndex: [{
      type: Input
    }],
    baseZIndex: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    filterValue: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    onChange: [{
      type: Output
    }],
    onFilter: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    onClick: [{
      type: Output
    }],
    onShow: [{
      type: Output
    }],
    onHide: [{
      type: Output
    }],
    onClear: [{
      type: Output
    }],
    onLazyLoad: [{
      type: Output
    }],
    filterViewChild: [{
      type: ViewChild,
      args: ["filter"]
    }],
    focusInputViewChild: [{
      type: ViewChild,
      args: ["focusInput"]
    }],
    editableInputViewChild: [{
      type: ViewChild,
      args: ["editableInput"]
    }],
    itemsViewChild: [{
      type: ViewChild,
      args: ["items"]
    }],
    scroller: [{
      type: ViewChild,
      args: ["scroller"]
    }],
    overlayViewChild: [{
      type: ViewChild,
      args: ["overlay"]
    }],
    firstHiddenFocusableElementOnOverlay: [{
      type: ViewChild,
      args: ["firstHiddenFocusableEl"]
    }],
    lastHiddenFocusableElementOnOverlay: [{
      type: ViewChild,
      args: ["lastHiddenFocusableEl"]
    }],
    hostClass: [{
      type: HostBinding,
      args: ["class"]
    }],
    hostStyle: [{
      type: HostBinding,
      args: ["style"]
    }],
    itemTemplate: [{
      type: ContentChild,
      args: ["item", {
        descendants: false
      }]
    }],
    groupTemplate: [{
      type: ContentChild,
      args: ["group", {
        descendants: false
      }]
    }],
    loaderTemplate: [{
      type: ContentChild,
      args: ["loader", {
        descendants: false
      }]
    }],
    selectedItemTemplate: [{
      type: ContentChild,
      args: ["selectedItem", {
        descendants: false
      }]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: ["header", {
        descendants: false
      }]
    }],
    filterTemplate: [{
      type: ContentChild,
      args: ["filter", {
        descendants: false
      }]
    }],
    footerTemplate: [{
      type: ContentChild,
      args: ["footer", {
        descendants: false
      }]
    }],
    emptyFilterTemplate: [{
      type: ContentChild,
      args: ["emptyfilter", {
        descendants: false
      }]
    }],
    emptyTemplate: [{
      type: ContentChild,
      args: ["empty", {
        descendants: false
      }]
    }],
    dropdownIconTemplate: [{
      type: ContentChild,
      args: ["dropdownicon", {
        descendants: false
      }]
    }],
    loadingIconTemplate: [{
      type: ContentChild,
      args: ["loadingicon", {
        descendants: false
      }]
    }],
    clearIconTemplate: [{
      type: ContentChild,
      args: ["clearicon", {
        descendants: false
      }]
    }],
    filterIconTemplate: [{
      type: ContentChild,
      args: ["filtericon", {
        descendants: false
      }]
    }],
    onIconTemplate: [{
      type: ContentChild,
      args: ["onicon", {
        descendants: false
      }]
    }],
    offIconTemplate: [{
      type: ContentChild,
      args: ["officon", {
        descendants: false
      }]
    }],
    cancelIconTemplate: [{
      type: ContentChild,
      args: ["cancelicon", {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Select, {
    className: "Select",
    filePath: "select.ts",
    lineNumber: 381
  });
})();
var SelectModule = class _SelectModule {
  static \u0275fac = function SelectModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SelectModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _SelectModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Select, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectModule, [{
    type: NgModule,
    args: [{
      imports: [Select, SharedModule],
      exports: [Select, SharedModule]
    }]
  }], null, null);
})();

export {
  ChevronDownIcon,
  TimesCircleIcon,
  Dialog,
  DialogModule,
  JWTTokenHelpers,
  PermissionHelpers,
  FloatLabel,
  FloatLabelModule,
  Chip,
  ChipModule,
  Scroller,
  ScrollerModule,
  MultiSelect,
  MultiSelectModule,
  PermissionsTable,
  Select,
  SelectModule
};
//# sourceMappingURL=chunk-RVQ7VANK.js.map
