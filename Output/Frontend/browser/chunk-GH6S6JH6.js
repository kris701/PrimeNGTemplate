import {
  ChevronDownIcon,
  Chip,
  ChipModule,
  Dialog,
  DialogModule,
  FloatLabel,
  FloatLabelModule,
  JWTTokenHelpers,
  MultiSelect,
  MultiSelectModule,
  PermissionHelpers,
  PermissionsTable,
  Scroller,
  ScrollerModule,
  Select,
  SelectModule
} from "./chunk-RVQ7VANK.js";
import {
  APIURL,
  AutoFocus,
  BaseComponent,
  BaseIcon,
  BaseStyle,
  Button,
  ButtonModule,
  CheckIcon,
  Checkbox,
  CheckboxModule,
  ConnectedOverlayScrollHandler,
  DefaultValueAccessor,
  DomHandler,
  Endpoints,
  FilterMatchMode,
  FilterOperator,
  FilterService,
  Footer,
  FormsModule,
  Header,
  HttpClient,
  InputText,
  InputTextModule,
  MessageService,
  NG_VALUE_ACCESSOR,
  NgControl,
  NgControlStatus,
  NgModel,
  ObjectUtils,
  OverlayService,
  Password,
  PasswordModule,
  PrimeTemplate,
  Ripple,
  SelectButtonModule,
  SharedModule,
  SpinnerIcon,
  Tag,
  TagModule,
  TimesIcon,
  TranslationKeys,
  UniqueComponentId,
  absolutePosition,
  addClass,
  addStyle,
  appendChild,
  blockBodyScroll,
  find,
  findSingle,
  getFocusableElements,
  getIndex,
  getOuterWidth,
  getSelection,
  hasClass,
  isDate,
  isNotEmpty,
  isTouchDevice,
  relativePosition,
  resolveFieldData,
  setAttribute,
  unblockBodyScroll,
  uuid,
  zindexutils
} from "./chunk-QLUKKW7B.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Inject,
  Injectable,
  Injector,
  Input,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgStyle,
  NgSwitch,
  NgSwitchCase,
  NgTemplateOutlet,
  NgZone,
  Optional,
  Output,
  PLATFORM_ID,
  Renderer2,
  SlicePipe,
  Subject,
  ViewChild,
  ViewEncapsulation,
  animate,
  booleanAttribute,
  forwardRef,
  inject,
  isPlatformBrowser,
  numberAttribute,
  setClassMetadata,
  state,
  style,
  transition,
  trigger,
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
  ɵɵpipe,
  ɵɵpipeBind3,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction4,
  ɵɵpureFunction5,
  ɵɵpureFunction6,
  ɵɵpureFunction7,
  ɵɵpureFunctionV,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-2DCWLZUQ.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// node_modules/primeng/fesm2022/primeng-icons-angledoubleleft.mjs
var AngleDoubleLeftIcon = class _AngleDoubleLeftIcon extends BaseIcon {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AngleDoubleLeftIcon_BaseFactory;
    return function AngleDoubleLeftIcon_Factory(__ngFactoryType__) {
      return (\u0275AngleDoubleLeftIcon_BaseFactory || (\u0275AngleDoubleLeftIcon_BaseFactory = \u0275\u0275getInheritedFactory(_AngleDoubleLeftIcon)))(__ngFactoryType__ || _AngleDoubleLeftIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _AngleDoubleLeftIcon,
    selectors: [["AngleDoubleLeftIcon"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M5.71602 11.164C5.80782 11.2021 5.9063 11.2215 6.00569 11.221C6.20216 11.2301 6.39427 11.1612 6.54025 11.0294C6.68191 10.8875 6.76148 10.6953 6.76148 10.4948C6.76148 10.2943 6.68191 10.1021 6.54025 9.96024L3.51441 6.9344L6.54025 3.90855C6.624 3.76126 6.65587 3.59011 6.63076 3.42254C6.60564 3.25498 6.525 3.10069 6.40175 2.98442C6.2785 2.86815 6.11978 2.79662 5.95104 2.7813C5.78229 2.76598 5.61329 2.80776 5.47112 2.89994L1.97123 6.39983C1.82957 6.54167 1.75 6.73393 1.75 6.9344C1.75 7.13486 1.82957 7.32712 1.97123 7.46896L5.47112 10.9991C5.54096 11.0698 5.62422 11.1259 5.71602 11.164ZM11.0488 10.9689C11.1775 11.1156 11.3585 11.2061 11.5531 11.221C11.7477 11.2061 11.9288 11.1156 12.0574 10.9689C12.1815 10.8302 12.25 10.6506 12.25 10.4645C12.25 10.2785 12.1815 10.0989 12.0574 9.96024L9.03158 6.93439L12.0574 3.90855C12.1248 3.76739 12.1468 3.60881 12.1204 3.45463C12.0939 3.30045 12.0203 3.15826 11.9097 3.04765C11.7991 2.93703 11.6569 2.86343 11.5027 2.83698C11.3486 2.81053 11.19 2.83252 11.0488 2.89994L7.51865 6.36957C7.37699 6.51141 7.29742 6.70367 7.29742 6.90414C7.29742 7.1046 7.37699 7.29686 7.51865 7.4387L11.0488 10.9689Z", "fill", "currentColor"]],
    template: function AngleDoubleLeftIcon_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AngleDoubleLeftIcon, [{
    type: Component,
    args: [{
      selector: "AngleDoubleLeftIcon",
      standalone: true,
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.71602 11.164C5.80782 11.2021 5.9063 11.2215 6.00569 11.221C6.20216 11.2301 6.39427 11.1612 6.54025 11.0294C6.68191 10.8875 6.76148 10.6953 6.76148 10.4948C6.76148 10.2943 6.68191 10.1021 6.54025 9.96024L3.51441 6.9344L6.54025 3.90855C6.624 3.76126 6.65587 3.59011 6.63076 3.42254C6.60564 3.25498 6.525 3.10069 6.40175 2.98442C6.2785 2.86815 6.11978 2.79662 5.95104 2.7813C5.78229 2.76598 5.61329 2.80776 5.47112 2.89994L1.97123 6.39983C1.82957 6.54167 1.75 6.73393 1.75 6.9344C1.75 7.13486 1.82957 7.32712 1.97123 7.46896L5.47112 10.9991C5.54096 11.0698 5.62422 11.1259 5.71602 11.164ZM11.0488 10.9689C11.1775 11.1156 11.3585 11.2061 11.5531 11.221C11.7477 11.2061 11.9288 11.1156 12.0574 10.9689C12.1815 10.8302 12.25 10.6506 12.25 10.4645C12.25 10.2785 12.1815 10.0989 12.0574 9.96024L9.03158 6.93439L12.0574 3.90855C12.1248 3.76739 12.1468 3.60881 12.1204 3.45463C12.0939 3.30045 12.0203 3.15826 11.9097 3.04765C11.7991 2.93703 11.6569 2.86343 11.5027 2.83698C11.3486 2.81053 11.19 2.83252 11.0488 2.89994L7.51865 6.36957C7.37699 6.51141 7.29742 6.70367 7.29742 6.90414C7.29742 7.1046 7.37699 7.29686 7.51865 7.4387L11.0488 10.9689Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AngleDoubleLeftIcon, {
    className: "AngleDoubleLeftIcon",
    filePath: "angledoubleleft.ts",
    lineNumber: 18
  });
})();

// node_modules/primeng/fesm2022/primeng-icons-angledoubleright.mjs
var AngleDoubleRightIcon = class _AngleDoubleRightIcon extends BaseIcon {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AngleDoubleRightIcon_BaseFactory;
    return function AngleDoubleRightIcon_Factory(__ngFactoryType__) {
      return (\u0275AngleDoubleRightIcon_BaseFactory || (\u0275AngleDoubleRightIcon_BaseFactory = \u0275\u0275getInheritedFactory(_AngleDoubleRightIcon)))(__ngFactoryType__ || _AngleDoubleRightIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _AngleDoubleRightIcon,
    selectors: [["AngleDoubleRightIcon"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M7.68757 11.1451C7.7791 11.1831 7.8773 11.2024 7.9764 11.2019C8.07769 11.1985 8.17721 11.1745 8.26886 11.1312C8.36052 11.088 8.44238 11.0265 8.50943 10.9505L12.0294 7.49085C12.1707 7.34942 12.25 7.15771 12.25 6.95782C12.25 6.75794 12.1707 6.56622 12.0294 6.42479L8.50943 2.90479C8.37014 2.82159 8.20774 2.78551 8.04633 2.80192C7.88491 2.81833 7.73309 2.88635 7.6134 2.99588C7.4937 3.10541 7.41252 3.25061 7.38189 3.40994C7.35126 3.56927 7.37282 3.73423 7.44337 3.88033L10.4605 6.89748L7.44337 9.91463C7.30212 10.0561 7.22278 10.2478 7.22278 10.4477C7.22278 10.6475 7.30212 10.8393 7.44337 10.9807C7.51301 11.0512 7.59603 11.1071 7.68757 11.1451ZM1.94207 10.9505C2.07037 11.0968 2.25089 11.1871 2.44493 11.2019C2.63898 11.1871 2.81949 11.0968 2.94779 10.9505L6.46779 7.49085C6.60905 7.34942 6.68839 7.15771 6.68839 6.95782C6.68839 6.75793 6.60905 6.56622 6.46779 6.42479L2.94779 2.90479C2.80704 2.83757 2.6489 2.81563 2.49517 2.84201C2.34143 2.86839 2.19965 2.94178 2.08936 3.05207C1.97906 3.16237 1.90567 3.30415 1.8793 3.45788C1.85292 3.61162 1.87485 3.76975 1.94207 3.9105L4.95922 6.92765L1.94207 9.9448C1.81838 10.0831 1.75 10.2621 1.75 10.4477C1.75 10.6332 1.81838 10.8122 1.94207 10.9505Z", "fill", "currentColor"]],
    template: function AngleDoubleRightIcon_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AngleDoubleRightIcon, [{
    type: Component,
    args: [{
      selector: "AngleDoubleRightIcon",
      standalone: true,
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.68757 11.1451C7.7791 11.1831 7.8773 11.2024 7.9764 11.2019C8.07769 11.1985 8.17721 11.1745 8.26886 11.1312C8.36052 11.088 8.44238 11.0265 8.50943 10.9505L12.0294 7.49085C12.1707 7.34942 12.25 7.15771 12.25 6.95782C12.25 6.75794 12.1707 6.56622 12.0294 6.42479L8.50943 2.90479C8.37014 2.82159 8.20774 2.78551 8.04633 2.80192C7.88491 2.81833 7.73309 2.88635 7.6134 2.99588C7.4937 3.10541 7.41252 3.25061 7.38189 3.40994C7.35126 3.56927 7.37282 3.73423 7.44337 3.88033L10.4605 6.89748L7.44337 9.91463C7.30212 10.0561 7.22278 10.2478 7.22278 10.4477C7.22278 10.6475 7.30212 10.8393 7.44337 10.9807C7.51301 11.0512 7.59603 11.1071 7.68757 11.1451ZM1.94207 10.9505C2.07037 11.0968 2.25089 11.1871 2.44493 11.2019C2.63898 11.1871 2.81949 11.0968 2.94779 10.9505L6.46779 7.49085C6.60905 7.34942 6.68839 7.15771 6.68839 6.95782C6.68839 6.75793 6.60905 6.56622 6.46779 6.42479L2.94779 2.90479C2.80704 2.83757 2.6489 2.81563 2.49517 2.84201C2.34143 2.86839 2.19965 2.94178 2.08936 3.05207C1.97906 3.16237 1.90567 3.30415 1.8793 3.45788C1.85292 3.61162 1.87485 3.76975 1.94207 3.9105L4.95922 6.92765L1.94207 9.9448C1.81838 10.0831 1.75 10.2621 1.75 10.4477C1.75 10.6332 1.81838 10.8122 1.94207 10.9505Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AngleDoubleRightIcon, {
    className: "AngleDoubleRightIcon",
    filePath: "angledoubleright.ts",
    lineNumber: 18
  });
})();

// node_modules/primeng/fesm2022/primeng-icons-angledown.mjs
var AngleDownIcon = class _AngleDownIcon extends BaseIcon {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AngleDownIcon_BaseFactory;
    return function AngleDownIcon_Factory(__ngFactoryType__) {
      return (\u0275AngleDownIcon_BaseFactory || (\u0275AngleDownIcon_BaseFactory = \u0275\u0275getInheritedFactory(_AngleDownIcon)))(__ngFactoryType__ || _AngleDownIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _AngleDownIcon,
    selectors: [["AngleDownIcon"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z", "fill", "currentColor"]],
    template: function AngleDownIcon_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AngleDownIcon, [{
    type: Component,
    args: [{
      selector: "AngleDownIcon",
      standalone: true,
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                d="M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AngleDownIcon, {
    className: "AngleDownIcon",
    filePath: "angledown.ts",
    lineNumber: 16
  });
})();

// node_modules/primeng/fesm2022/primeng-icons-angleleft.mjs
var AngleLeftIcon = class _AngleLeftIcon extends BaseIcon {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AngleLeftIcon_BaseFactory;
    return function AngleLeftIcon_Factory(__ngFactoryType__) {
      return (\u0275AngleLeftIcon_BaseFactory || (\u0275AngleLeftIcon_BaseFactory = \u0275\u0275getInheritedFactory(_AngleLeftIcon)))(__ngFactoryType__ || _AngleLeftIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _AngleLeftIcon,
    selectors: [["AngleLeftIcon"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M8.75 11.185C8.65146 11.1854 8.55381 11.1662 8.4628 11.1284C8.37179 11.0906 8.28924 11.0351 8.22 10.965L4.72 7.46496C4.57955 7.32433 4.50066 7.13371 4.50066 6.93496C4.50066 6.73621 4.57955 6.54558 4.72 6.40496L8.22 2.93496C8.36095 2.84357 8.52851 2.80215 8.69582 2.81733C8.86312 2.83252 9.02048 2.90344 9.14268 3.01872C9.26487 3.134 9.34483 3.28696 9.36973 3.4531C9.39463 3.61924 9.36303 3.78892 9.28 3.93496L6.28 6.93496L9.28 9.93496C9.42045 10.0756 9.49934 10.2662 9.49934 10.465C9.49934 10.6637 9.42045 10.8543 9.28 10.995C9.13526 11.1257 8.9448 11.1939 8.75 11.185Z", "fill", "currentColor"]],
    template: function AngleLeftIcon_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AngleLeftIcon, [{
    type: Component,
    args: [{
      selector: "AngleLeftIcon",
      standalone: true,
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                d="M8.75 11.185C8.65146 11.1854 8.55381 11.1662 8.4628 11.1284C8.37179 11.0906 8.28924 11.0351 8.22 10.965L4.72 7.46496C4.57955 7.32433 4.50066 7.13371 4.50066 6.93496C4.50066 6.73621 4.57955 6.54558 4.72 6.40496L8.22 2.93496C8.36095 2.84357 8.52851 2.80215 8.69582 2.81733C8.86312 2.83252 9.02048 2.90344 9.14268 3.01872C9.26487 3.134 9.34483 3.28696 9.36973 3.4531C9.39463 3.61924 9.36303 3.78892 9.28 3.93496L6.28 6.93496L9.28 9.93496C9.42045 10.0756 9.49934 10.2662 9.49934 10.465C9.49934 10.6637 9.42045 10.8543 9.28 10.995C9.13526 11.1257 8.9448 11.1939 8.75 11.185Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AngleLeftIcon, {
    className: "AngleLeftIcon",
    filePath: "angleleft.ts",
    lineNumber: 16
  });
})();

// node_modules/primeng/fesm2022/primeng-icons-angleright.mjs
var AngleRightIcon = class _AngleRightIcon extends BaseIcon {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AngleRightIcon_BaseFactory;
    return function AngleRightIcon_Factory(__ngFactoryType__) {
      return (\u0275AngleRightIcon_BaseFactory || (\u0275AngleRightIcon_BaseFactory = \u0275\u0275getInheritedFactory(_AngleRightIcon)))(__ngFactoryType__ || _AngleRightIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _AngleRightIcon,
    selectors: [["AngleRightIcon"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z", "fill", "currentColor"]],
    template: function AngleRightIcon_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AngleRightIcon, [{
    type: Component,
    args: [{
      selector: "AngleRightIcon",
      standalone: true,
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                d="M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AngleRightIcon, {
    className: "AngleRightIcon",
    filePath: "angleright.ts",
    lineNumber: 16
  });
})();

// node_modules/primeng/fesm2022/primeng-icons-angleup.mjs
var AngleUpIcon = class _AngleUpIcon extends BaseIcon {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AngleUpIcon_BaseFactory;
    return function AngleUpIcon_Factory(__ngFactoryType__) {
      return (\u0275AngleUpIcon_BaseFactory || (\u0275AngleUpIcon_BaseFactory = \u0275\u0275getInheritedFactory(_AngleUpIcon)))(__ngFactoryType__ || _AngleUpIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _AngleUpIcon,
    selectors: [["AngleUpIcon"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M10.4134 9.49931C10.3148 9.49977 10.2172 9.48055 10.1262 9.44278C10.0352 9.405 9.95263 9.34942 9.88338 9.27931L6.88338 6.27931L3.88338 9.27931C3.73811 9.34946 3.57409 9.3709 3.41567 9.34044C3.25724 9.30999 3.11286 9.22926 3.00395 9.11025C2.89504 8.99124 2.82741 8.84028 2.8111 8.67978C2.79478 8.51928 2.83065 8.35781 2.91338 8.21931L6.41338 4.71931C6.55401 4.57886 6.74463 4.49997 6.94338 4.49997C7.14213 4.49997 7.33276 4.57886 7.47338 4.71931L10.9734 8.21931C11.1138 8.35994 11.1927 8.55056 11.1927 8.74931C11.1927 8.94806 11.1138 9.13868 10.9734 9.27931C10.9007 9.35315 10.8132 9.41089 10.7168 9.44879C10.6203 9.48669 10.5169 9.5039 10.4134 9.49931Z", "fill", "currentColor"]],
    template: function AngleUpIcon_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AngleUpIcon, [{
    type: Component,
    args: [{
      selector: "AngleUpIcon",
      standalone: true,
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                d="M10.4134 9.49931C10.3148 9.49977 10.2172 9.48055 10.1262 9.44278C10.0352 9.405 9.95263 9.34942 9.88338 9.27931L6.88338 6.27931L3.88338 9.27931C3.73811 9.34946 3.57409 9.3709 3.41567 9.34044C3.25724 9.30999 3.11286 9.22926 3.00395 9.11025C2.89504 8.99124 2.82741 8.84028 2.8111 8.67978C2.79478 8.51928 2.83065 8.35781 2.91338 8.21931L6.41338 4.71931C6.55401 4.57886 6.74463 4.49997 6.94338 4.49997C7.14213 4.49997 7.33276 4.57886 7.47338 4.71931L10.9734 8.21931C11.1138 8.35994 11.1927 8.55056 11.1927 8.74931C11.1927 8.94806 11.1138 9.13868 10.9734 9.27931C10.9007 9.35315 10.8132 9.41089 10.7168 9.44879C10.6203 9.48669 10.5169 9.5039 10.4134 9.49931Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AngleUpIcon, {
    className: "AngleUpIcon",
    filePath: "angleup.ts",
    lineNumber: 16
  });
})();

// node_modules/primeng/fesm2022/primeng-icons-arrowdown.mjs
var ArrowDownIcon = class _ArrowDownIcon extends BaseIcon {
  pathId;
  ngOnInit() {
    this.pathId = "url(#" + uuid() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ArrowDownIcon_BaseFactory;
    return function ArrowDownIcon_Factory(__ngFactoryType__) {
      return (\u0275ArrowDownIcon_BaseFactory || (\u0275ArrowDownIcon_BaseFactory = \u0275\u0275getInheritedFactory(_ArrowDownIcon)))(__ngFactoryType__ || _ArrowDownIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ArrowDownIcon,
    selectors: [["ArrowDownIcon"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 6,
    vars: 7,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M6.99994 14C6.91097 14.0004 6.82281 13.983 6.74064 13.9489C6.65843 13.9148 6.58387 13.8646 6.52133 13.8013L1.10198 8.38193C0.982318 8.25351 0.917175 8.08367 0.920272 7.90817C0.923368 7.73267 0.994462 7.56523 1.11858 7.44111C1.24269 7.317 1.41014 7.2459 1.58563 7.2428C1.76113 7.23971 1.93098 7.30485 2.0594 7.42451L6.32263 11.6877V0.677419C6.32263 0.497756 6.394 0.325452 6.52104 0.198411C6.64808 0.0713706 6.82039 0 7.00005 0C7.17971 0 7.35202 0.0713706 7.47906 0.198411C7.6061 0.325452 7.67747 0.497756 7.67747 0.677419V11.6877L11.9407 7.42451C12.0691 7.30485 12.2389 7.23971 12.4144 7.2428C12.5899 7.2459 12.7574 7.317 12.8815 7.44111C13.0056 7.56523 13.0767 7.73267 13.0798 7.90817C13.0829 8.08367 13.0178 8.25351 12.8981 8.38193L7.47875 13.8013C7.41621 13.8646 7.34164 13.9148 7.25944 13.9489C7.17727 13.983 7.08912 14.0004 7.00015 14C7.00012 14 7.00009 14 7.00005 14C7.00001 14 6.99998 14 6.99994 14Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function ArrowDownIcon_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArrowDownIcon, [{
    type: Component,
    args: [{
      selector: "ArrowDownIcon",
      standalone: true,
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.99994 14C6.91097 14.0004 6.82281 13.983 6.74064 13.9489C6.65843 13.9148 6.58387 13.8646 6.52133 13.8013L1.10198 8.38193C0.982318 8.25351 0.917175 8.08367 0.920272 7.90817C0.923368 7.73267 0.994462 7.56523 1.11858 7.44111C1.24269 7.317 1.41014 7.2459 1.58563 7.2428C1.76113 7.23971 1.93098 7.30485 2.0594 7.42451L6.32263 11.6877V0.677419C6.32263 0.497756 6.394 0.325452 6.52104 0.198411C6.64808 0.0713706 6.82039 0 7.00005 0C7.17971 0 7.35202 0.0713706 7.47906 0.198411C7.6061 0.325452 7.67747 0.497756 7.67747 0.677419V11.6877L11.9407 7.42451C12.0691 7.30485 12.2389 7.23971 12.4144 7.2428C12.5899 7.2459 12.7574 7.317 12.8815 7.44111C13.0056 7.56523 13.0767 7.73267 13.0798 7.90817C13.0829 8.08367 13.0178 8.25351 12.8981 8.38193L7.47875 13.8013C7.41621 13.8646 7.34164 13.9148 7.25944 13.9489C7.17727 13.983 7.08912 14.0004 7.00015 14C7.00012 14 7.00009 14 7.00005 14C7.00001 14 6.99998 14 6.99994 14Z"
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ArrowDownIcon, {
    className: "ArrowDownIcon",
    filePath: "arrowdown.ts",
    lineNumber: 26
  });
})();

// node_modules/primeng/fesm2022/primeng-icons-arrowup.mjs
var ArrowUpIcon = class _ArrowUpIcon extends BaseIcon {
  pathId;
  ngOnInit() {
    this.pathId = "url(#" + uuid() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ArrowUpIcon_BaseFactory;
    return function ArrowUpIcon_Factory(__ngFactoryType__) {
      return (\u0275ArrowUpIcon_BaseFactory || (\u0275ArrowUpIcon_BaseFactory = \u0275\u0275getInheritedFactory(_ArrowUpIcon)))(__ngFactoryType__ || _ArrowUpIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ArrowUpIcon,
    selectors: [["ArrowUpIcon"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 6,
    vars: 7,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M6.51551 13.799C6.64205 13.9255 6.813 13.9977 6.99193 14C7.17087 13.9977 7.34182 13.9255 7.46835 13.799C7.59489 13.6725 7.66701 13.5015 7.66935 13.3226V2.31233L11.9326 6.57554C11.9951 6.63887 12.0697 6.68907 12.1519 6.72319C12.2341 6.75731 12.3223 6.77467 12.4113 6.77425C12.5003 6.77467 12.5885 6.75731 12.6707 6.72319C12.7529 6.68907 12.8274 6.63887 12.89 6.57554C13.0168 6.44853 13.0881 6.27635 13.0881 6.09683C13.0881 5.91732 13.0168 5.74514 12.89 5.61812L7.48846 0.216594C7.48274 0.210436 7.4769 0.204374 7.47094 0.198411C7.3439 0.0713707 7.1716 0 6.99193 0C6.81227 0 6.63997 0.0713707 6.51293 0.198411C6.50704 0.204296 6.50128 0.210278 6.49563 0.216354L1.09386 5.61812C0.974201 5.74654 0.909057 5.91639 0.912154 6.09189C0.91525 6.26738 0.986345 6.43483 1.11046 6.55894C1.23457 6.68306 1.40202 6.75415 1.57752 6.75725C1.75302 6.76035 1.92286 6.6952 2.05128 6.57554L6.31451 2.31231V13.3226C6.31685 13.5015 6.38898 13.6725 6.51551 13.799Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function ArrowUpIcon_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArrowUpIcon, [{
    type: Component,
    args: [{
      selector: "ArrowUpIcon",
      standalone: true,
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.51551 13.799C6.64205 13.9255 6.813 13.9977 6.99193 14C7.17087 13.9977 7.34182 13.9255 7.46835 13.799C7.59489 13.6725 7.66701 13.5015 7.66935 13.3226V2.31233L11.9326 6.57554C11.9951 6.63887 12.0697 6.68907 12.1519 6.72319C12.2341 6.75731 12.3223 6.77467 12.4113 6.77425C12.5003 6.77467 12.5885 6.75731 12.6707 6.72319C12.7529 6.68907 12.8274 6.63887 12.89 6.57554C13.0168 6.44853 13.0881 6.27635 13.0881 6.09683C13.0881 5.91732 13.0168 5.74514 12.89 5.61812L7.48846 0.216594C7.48274 0.210436 7.4769 0.204374 7.47094 0.198411C7.3439 0.0713707 7.1716 0 6.99193 0C6.81227 0 6.63997 0.0713707 6.51293 0.198411C6.50704 0.204296 6.50128 0.210278 6.49563 0.216354L1.09386 5.61812C0.974201 5.74654 0.909057 5.91639 0.912154 6.09189C0.91525 6.26738 0.986345 6.43483 1.11046 6.55894C1.23457 6.68306 1.40202 6.75415 1.57752 6.75725C1.75302 6.76035 1.92286 6.6952 2.05128 6.57554L6.31451 2.31231V13.3226C6.31685 13.5015 6.38898 13.6725 6.51551 13.799Z"
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ArrowUpIcon, {
    className: "ArrowUpIcon",
    filePath: "arrowup.ts",
    lineNumber: 26
  });
})();

// node_modules/primeng/fesm2022/primeng-icons-calendar.mjs
var CalendarIcon = class _CalendarIcon extends BaseIcon {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275CalendarIcon_BaseFactory;
    return function CalendarIcon_Factory(__ngFactoryType__) {
      return (\u0275CalendarIcon_BaseFactory || (\u0275CalendarIcon_BaseFactory = \u0275\u0275getInheritedFactory(_CalendarIcon)))(__ngFactoryType__ || _CalendarIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CalendarIcon,
    selectors: [["CalendarIcon"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M10.7838 1.51351H9.83783V0.567568C9.83783 0.417039 9.77804 0.272676 9.6716 0.166237C9.56516 0.0597971 9.42079 0 9.27027 0C9.11974 0 8.97538 0.0597971 8.86894 0.166237C8.7625 0.272676 8.7027 0.417039 8.7027 0.567568V1.51351H5.29729V0.567568C5.29729 0.417039 5.2375 0.272676 5.13106 0.166237C5.02462 0.0597971 4.88025 0 4.72973 0C4.5792 0 4.43484 0.0597971 4.3284 0.166237C4.22196 0.272676 4.16216 0.417039 4.16216 0.567568V1.51351H3.21621C2.66428 1.51351 2.13494 1.73277 1.74467 2.12305C1.35439 2.51333 1.13513 3.04266 1.13513 3.59459V11.9189C1.13513 12.4709 1.35439 13.0002 1.74467 13.3905C2.13494 13.7807 2.66428 14 3.21621 14H10.7838C11.3357 14 11.865 13.7807 12.2553 13.3905C12.6456 13.0002 12.8649 12.4709 12.8649 11.9189V3.59459C12.8649 3.04266 12.6456 2.51333 12.2553 2.12305C11.865 1.73277 11.3357 1.51351 10.7838 1.51351ZM3.21621 2.64865H4.16216V3.59459C4.16216 3.74512 4.22196 3.88949 4.3284 3.99593C4.43484 4.10237 4.5792 4.16216 4.72973 4.16216C4.88025 4.16216 5.02462 4.10237 5.13106 3.99593C5.2375 3.88949 5.29729 3.74512 5.29729 3.59459V2.64865H8.7027V3.59459C8.7027 3.74512 8.7625 3.88949 8.86894 3.99593C8.97538 4.10237 9.11974 4.16216 9.27027 4.16216C9.42079 4.16216 9.56516 4.10237 9.6716 3.99593C9.77804 3.88949 9.83783 3.74512 9.83783 3.59459V2.64865H10.7838C11.0347 2.64865 11.2753 2.74831 11.4527 2.92571C11.6301 3.10311 11.7297 3.34371 11.7297 3.59459V5.67568H2.27027V3.59459C2.27027 3.34371 2.36993 3.10311 2.54733 2.92571C2.72473 2.74831 2.96533 2.64865 3.21621 2.64865ZM10.7838 12.8649H3.21621C2.96533 12.8649 2.72473 12.7652 2.54733 12.5878C2.36993 12.4104 2.27027 12.1698 2.27027 11.9189V6.81081H11.7297V11.9189C11.7297 12.1698 11.6301 12.4104 11.4527 12.5878C11.2753 12.7652 11.0347 12.8649 10.7838 12.8649Z", "fill", "currentColor"]],
    template: function CalendarIcon_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarIcon, [{
    type: Component,
    args: [{
      selector: "CalendarIcon",
      standalone: true,
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                d="M10.7838 1.51351H9.83783V0.567568C9.83783 0.417039 9.77804 0.272676 9.6716 0.166237C9.56516 0.0597971 9.42079 0 9.27027 0C9.11974 0 8.97538 0.0597971 8.86894 0.166237C8.7625 0.272676 8.7027 0.417039 8.7027 0.567568V1.51351H5.29729V0.567568C5.29729 0.417039 5.2375 0.272676 5.13106 0.166237C5.02462 0.0597971 4.88025 0 4.72973 0C4.5792 0 4.43484 0.0597971 4.3284 0.166237C4.22196 0.272676 4.16216 0.417039 4.16216 0.567568V1.51351H3.21621C2.66428 1.51351 2.13494 1.73277 1.74467 2.12305C1.35439 2.51333 1.13513 3.04266 1.13513 3.59459V11.9189C1.13513 12.4709 1.35439 13.0002 1.74467 13.3905C2.13494 13.7807 2.66428 14 3.21621 14H10.7838C11.3357 14 11.865 13.7807 12.2553 13.3905C12.6456 13.0002 12.8649 12.4709 12.8649 11.9189V3.59459C12.8649 3.04266 12.6456 2.51333 12.2553 2.12305C11.865 1.73277 11.3357 1.51351 10.7838 1.51351ZM3.21621 2.64865H4.16216V3.59459C4.16216 3.74512 4.22196 3.88949 4.3284 3.99593C4.43484 4.10237 4.5792 4.16216 4.72973 4.16216C4.88025 4.16216 5.02462 4.10237 5.13106 3.99593C5.2375 3.88949 5.29729 3.74512 5.29729 3.59459V2.64865H8.7027V3.59459C8.7027 3.74512 8.7625 3.88949 8.86894 3.99593C8.97538 4.10237 9.11974 4.16216 9.27027 4.16216C9.42079 4.16216 9.56516 4.10237 9.6716 3.99593C9.77804 3.88949 9.83783 3.74512 9.83783 3.59459V2.64865H10.7838C11.0347 2.64865 11.2753 2.74831 11.4527 2.92571C11.6301 3.10311 11.7297 3.34371 11.7297 3.59459V5.67568H2.27027V3.59459C2.27027 3.34371 2.36993 3.10311 2.54733 2.92571C2.72473 2.74831 2.96533 2.64865 3.21621 2.64865ZM10.7838 12.8649H3.21621C2.96533 12.8649 2.72473 12.7652 2.54733 12.5878C2.36993 12.4104 2.27027 12.1698 2.27027 11.9189V6.81081H11.7297V11.9189C11.7297 12.1698 11.6301 12.4104 11.4527 12.5878C11.2753 12.7652 11.0347 12.8649 10.7838 12.8649Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CalendarIcon, {
    className: "CalendarIcon",
    filePath: "calendar.ts",
    lineNumber: 16
  });
})();

// node_modules/primeng/fesm2022/primeng-icons-chevronleft.mjs
var ChevronLeftIcon = class _ChevronLeftIcon extends BaseIcon {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ChevronLeftIcon_BaseFactory;
    return function ChevronLeftIcon_Factory(__ngFactoryType__) {
      return (\u0275ChevronLeftIcon_BaseFactory || (\u0275ChevronLeftIcon_BaseFactory = \u0275\u0275getInheritedFactory(_ChevronLeftIcon)))(__ngFactoryType__ || _ChevronLeftIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ChevronLeftIcon,
    selectors: [["ChevronLeftIcon"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z", "fill", "currentColor"]],
    template: function ChevronLeftIcon_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChevronLeftIcon, [{
    type: Component,
    args: [{
      selector: "ChevronLeftIcon",
      standalone: true,
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                d="M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChevronLeftIcon, {
    className: "ChevronLeftIcon",
    filePath: "chevronleft.ts",
    lineNumber: 16
  });
})();

// node_modules/primeng/fesm2022/primeng-icons-chevronright.mjs
var ChevronRightIcon = class _ChevronRightIcon extends BaseIcon {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ChevronRightIcon_BaseFactory;
    return function ChevronRightIcon_Factory(__ngFactoryType__) {
      return (\u0275ChevronRightIcon_BaseFactory || (\u0275ChevronRightIcon_BaseFactory = \u0275\u0275getInheritedFactory(_ChevronRightIcon)))(__ngFactoryType__ || _ChevronRightIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ChevronRightIcon,
    selectors: [["ChevronRightIcon"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z", "fill", "currentColor"]],
    template: function ChevronRightIcon_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChevronRightIcon, [{
    type: Component,
    args: [{
      selector: "ChevronRightIcon",
      standalone: true,
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                d="M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChevronRightIcon, {
    className: "ChevronRightIcon",
    filePath: "chevronright.ts",
    lineNumber: 16
  });
})();

// node_modules/primeng/fesm2022/primeng-icons-chevronup.mjs
var ChevronUpIcon = class _ChevronUpIcon extends BaseIcon {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ChevronUpIcon_BaseFactory;
    return function ChevronUpIcon_Factory(__ngFactoryType__) {
      return (\u0275ChevronUpIcon_BaseFactory || (\u0275ChevronUpIcon_BaseFactory = \u0275\u0275getInheritedFactory(_ChevronUpIcon)))(__ngFactoryType__ || _ChevronUpIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ChevronUpIcon,
    selectors: [["ChevronUpIcon"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z", "fill", "currentColor"]],
    template: function ChevronUpIcon_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChevronUpIcon, [{
    type: Component,
    args: [{
      selector: "ChevronUpIcon",
      standalone: true,
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                d="M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChevronUpIcon, {
    className: "ChevronUpIcon",
    filePath: "chevronup.ts",
    lineNumber: 16
  });
})();

// node_modules/primeng/fesm2022/primeng-icons-filter.mjs
var FilterIcon = class _FilterIcon extends BaseIcon {
  pathId;
  ngOnInit() {
    this.pathId = "url(#" + uuid() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275FilterIcon_BaseFactory;
    return function FilterIcon_Factory(__ngFactoryType__) {
      return (\u0275FilterIcon_BaseFactory || (\u0275FilterIcon_BaseFactory = \u0275\u0275getInheritedFactory(_FilterIcon)))(__ngFactoryType__ || _FilterIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _FilterIcon,
    selectors: [["FilterIcon"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 6,
    vars: 7,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M8.64708 14H5.35296C5.18981 13.9979 5.03395 13.9321 4.91858 13.8167C4.8032 13.7014 4.73745 13.5455 4.73531 13.3824V7L0.329431 0.98C0.259794 0.889466 0.217389 0.780968 0.20718 0.667208C0.19697 0.553448 0.219379 0.439133 0.271783 0.337647C0.324282 0.236453 0.403423 0.151519 0.500663 0.0920138C0.597903 0.0325088 0.709548 0.000692754 0.823548 0H13.1765C13.2905 0.000692754 13.4021 0.0325088 13.4994 0.0920138C13.5966 0.151519 13.6758 0.236453 13.7283 0.337647C13.7807 0.439133 13.8031 0.553448 13.7929 0.667208C13.7826 0.780968 13.7402 0.889466 13.6706 0.98L9.26472 7V13.3824C9.26259 13.5455 9.19683 13.7014 9.08146 13.8167C8.96609 13.9321 8.81022 13.9979 8.64708 14ZM5.97061 12.7647H8.02943V6.79412C8.02878 6.66289 8.07229 6.53527 8.15296 6.43177L11.9412 1.23529H2.05884L5.86355 6.43177C5.94422 6.53527 5.98773 6.66289 5.98708 6.79412L5.97061 12.7647Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function FilterIcon_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FilterIcon, [{
    type: Component,
    args: [{
      selector: "FilterIcon",
      standalone: true,
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    d="M8.64708 14H5.35296C5.18981 13.9979 5.03395 13.9321 4.91858 13.8167C4.8032 13.7014 4.73745 13.5455 4.73531 13.3824V7L0.329431 0.98C0.259794 0.889466 0.217389 0.780968 0.20718 0.667208C0.19697 0.553448 0.219379 0.439133 0.271783 0.337647C0.324282 0.236453 0.403423 0.151519 0.500663 0.0920138C0.597903 0.0325088 0.709548 0.000692754 0.823548 0H13.1765C13.2905 0.000692754 13.4021 0.0325088 13.4994 0.0920138C13.5966 0.151519 13.6758 0.236453 13.7283 0.337647C13.7807 0.439133 13.8031 0.553448 13.7929 0.667208C13.7826 0.780968 13.7402 0.889466 13.6706 0.98L9.26472 7V13.3824C9.26259 13.5455 9.19683 13.7014 9.08146 13.8167C8.96609 13.9321 8.81022 13.9979 8.64708 14ZM5.97061 12.7647H8.02943V6.79412C8.02878 6.66289 8.07229 6.53527 8.15296 6.43177L11.9412 1.23529H2.05884L5.86355 6.43177C5.94422 6.53527 5.98773 6.66289 5.98708 6.79412L5.97061 12.7647Z"
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FilterIcon, {
    className: "FilterIcon",
    filePath: "filter.ts",
    lineNumber: 24
  });
})();

// node_modules/primeng/fesm2022/primeng-icons-filterslash.mjs
var FilterSlashIcon = class _FilterSlashIcon extends BaseIcon {
  pathId;
  ngOnInit() {
    this.pathId = "url(#" + uuid() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275FilterSlashIcon_BaseFactory;
    return function FilterSlashIcon_Factory(__ngFactoryType__) {
      return (\u0275FilterSlashIcon_BaseFactory || (\u0275FilterSlashIcon_BaseFactory = \u0275\u0275getInheritedFactory(_FilterSlashIcon)))(__ngFactoryType__ || _FilterSlashIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _FilterSlashIcon,
    selectors: [["FilterSlashIcon"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 6,
    vars: 7,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M13.4994 0.0920138C13.5967 0.151519 13.6758 0.236453 13.7283 0.337647C13.7807 0.439133 13.8031 0.553448 13.7929 0.667208C13.7827 0.780968 13.7403 0.889466 13.6707 0.98L11.406 4.06823C11.3099 4.19928 11.1656 4.28679 11.005 4.3115C10.8444 4.33621 10.6805 4.2961 10.5495 4.2C10.4184 4.1039 10.3309 3.95967 10.3062 3.79905C10.2815 3.63843 10.3216 3.47458 10.4177 3.34353L11.9412 1.23529H7.41184C7.24803 1.23529 7.09093 1.17022 6.97509 1.05439C6.85926 0.938558 6.79419 0.781457 6.79419 0.617647C6.79419 0.453837 6.85926 0.296736 6.97509 0.180905C7.09093 0.0650733 7.24803 0 7.41184 0H13.1765C13.2905 0.000692754 13.4022 0.0325088 13.4994 0.0920138ZM4.20008 0.181168H4.24126L13.2013 9.03411C13.3169 9.14992 13.3819 9.3069 13.3819 9.47058C13.3819 9.63426 13.3169 9.79124 13.2013 9.90705C13.1445 9.96517 13.0766 10.0112 13.0016 10.0423C12.9266 10.0735 12.846 10.0891 12.7648 10.0882C12.6836 10.0886 12.6032 10.0728 12.5283 10.0417C12.4533 10.0106 12.3853 9.96479 12.3283 9.90705L9.3142 6.92587L9.26479 6.99999V13.3823C9.26265 13.5455 9.19689 13.7014 9.08152 13.8167C8.96615 13.9321 8.81029 13.9979 8.64714 14H5.35302C5.18987 13.9979 5.03401 13.9321 4.91864 13.8167C4.80327 13.7014 4.73751 13.5455 4.73537 13.3823V6.99999L0.329492 1.02117C0.259855 0.930634 0.21745 0.822137 0.207241 0.708376C0.197031 0.594616 0.21944 0.480301 0.271844 0.378815C0.324343 0.277621 0.403484 0.192687 0.500724 0.133182C0.597964 0.073677 0.709609 0.041861 0.823609 0.0411682H3.86243C3.92448 0.0461551 3.9855 0.060022 4.04361 0.0823446C4.10037 0.10735 4.15311 0.140655 4.20008 0.181168ZM8.02949 6.79411C8.02884 6.66289 8.07235 6.53526 8.15302 6.43176L8.42478 6.05293L3.55773 1.23529H2.0589L5.84714 6.43176C5.92781 6.53526 5.97132 6.66289 5.97067 6.79411V12.7647H8.02949V6.79411Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function FilterSlashIcon_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FilterSlashIcon, [{
    type: Component,
    args: [{
      selector: "FilterSlashIcon",
      standalone: true,
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.4994 0.0920138C13.5967 0.151519 13.6758 0.236453 13.7283 0.337647C13.7807 0.439133 13.8031 0.553448 13.7929 0.667208C13.7827 0.780968 13.7403 0.889466 13.6707 0.98L11.406 4.06823C11.3099 4.19928 11.1656 4.28679 11.005 4.3115C10.8444 4.33621 10.6805 4.2961 10.5495 4.2C10.4184 4.1039 10.3309 3.95967 10.3062 3.79905C10.2815 3.63843 10.3216 3.47458 10.4177 3.34353L11.9412 1.23529H7.41184C7.24803 1.23529 7.09093 1.17022 6.97509 1.05439C6.85926 0.938558 6.79419 0.781457 6.79419 0.617647C6.79419 0.453837 6.85926 0.296736 6.97509 0.180905C7.09093 0.0650733 7.24803 0 7.41184 0H13.1765C13.2905 0.000692754 13.4022 0.0325088 13.4994 0.0920138ZM4.20008 0.181168H4.24126L13.2013 9.03411C13.3169 9.14992 13.3819 9.3069 13.3819 9.47058C13.3819 9.63426 13.3169 9.79124 13.2013 9.90705C13.1445 9.96517 13.0766 10.0112 13.0016 10.0423C12.9266 10.0735 12.846 10.0891 12.7648 10.0882C12.6836 10.0886 12.6032 10.0728 12.5283 10.0417C12.4533 10.0106 12.3853 9.96479 12.3283 9.90705L9.3142 6.92587L9.26479 6.99999V13.3823C9.26265 13.5455 9.19689 13.7014 9.08152 13.8167C8.96615 13.9321 8.81029 13.9979 8.64714 14H5.35302C5.18987 13.9979 5.03401 13.9321 4.91864 13.8167C4.80327 13.7014 4.73751 13.5455 4.73537 13.3823V6.99999L0.329492 1.02117C0.259855 0.930634 0.21745 0.822137 0.207241 0.708376C0.197031 0.594616 0.21944 0.480301 0.271844 0.378815C0.324343 0.277621 0.403484 0.192687 0.500724 0.133182C0.597964 0.073677 0.709609 0.041861 0.823609 0.0411682H3.86243C3.92448 0.0461551 3.9855 0.060022 4.04361 0.0823446C4.10037 0.10735 4.15311 0.140655 4.20008 0.181168ZM8.02949 6.79411C8.02884 6.66289 8.07235 6.53526 8.15302 6.43176L8.42478 6.05293L3.55773 1.23529H2.0589L5.84714 6.43176C5.92781 6.53526 5.97132 6.66289 5.97067 6.79411V12.7647H8.02949V6.79411Z"
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FilterSlashIcon, {
    className: "FilterSlashIcon",
    filePath: "filterslash.ts",
    lineNumber: 26
  });
})();

// node_modules/primeng/fesm2022/primeng-icons-plus.mjs
var PlusIcon = class _PlusIcon extends BaseIcon {
  pathId;
  ngOnInit() {
    this.pathId = "url(#" + uuid() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275PlusIcon_BaseFactory;
    return function PlusIcon_Factory(__ngFactoryType__) {
      return (\u0275PlusIcon_BaseFactory || (\u0275PlusIcon_BaseFactory = \u0275\u0275getInheritedFactory(_PlusIcon)))(__ngFactoryType__ || _PlusIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _PlusIcon,
    selectors: [["PlusIcon"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 6,
    vars: 7,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function PlusIcon_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlusIcon, [{
    type: Component,
    args: [{
      selector: "PlusIcon",
      standalone: true,
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    d="M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z"
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlusIcon, {
    className: "PlusIcon",
    filePath: "plus.ts",
    lineNumber: 24
  });
})();

// node_modules/primeng/fesm2022/primeng-icons-sortalt.mjs
var SortAltIcon = class _SortAltIcon extends BaseIcon {
  pathId;
  ngOnInit() {
    this.pathId = "url(#" + uuid() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SortAltIcon_BaseFactory;
    return function SortAltIcon_Factory(__ngFactoryType__) {
      return (\u0275SortAltIcon_BaseFactory || (\u0275SortAltIcon_BaseFactory = \u0275\u0275getInheritedFactory(_SortAltIcon)))(__ngFactoryType__ || _SortAltIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _SortAltIcon,
    selectors: [["SortAltIcon"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 9,
    vars: 7,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M5.64515 3.61291C5.47353 3.61291 5.30192 3.54968 5.16644 3.4142L3.38708 1.63484L1.60773 3.4142C1.34579 3.67613 0.912244 3.67613 0.650309 3.4142C0.388374 3.15226 0.388374 2.71871 0.650309 2.45678L2.90837 0.198712C3.17031 -0.0632236 3.60386 -0.0632236 3.86579 0.198712L6.12386 2.45678C6.38579 2.71871 6.38579 3.15226 6.12386 3.4142C5.98837 3.54968 5.81676 3.61291 5.64515 3.61291Z", "fill", "currentColor"], ["d", "M3.38714 14C3.01681 14 2.70972 13.6929 2.70972 13.3226V0.677419C2.70972 0.307097 3.01681 0 3.38714 0C3.75746 0 4.06456 0.307097 4.06456 0.677419V13.3226C4.06456 13.6929 3.75746 14 3.38714 14Z", "fill", "currentColor"], ["d", "M10.6129 14C10.4413 14 10.2697 13.9368 10.1342 13.8013L7.87611 11.5432C7.61418 11.2813 7.61418 10.8477 7.87611 10.5858C8.13805 10.3239 8.5716 10.3239 8.83353 10.5858L10.6129 12.3652L12.3922 10.5858C12.6542 10.3239 13.0877 10.3239 13.3497 10.5858C13.6116 10.8477 13.6116 11.2813 13.3497 11.5432L11.0916 13.8013C10.9561 13.9368 10.7845 14 10.6129 14Z", "fill", "currentColor"], ["d", "M10.6129 14C10.2426 14 9.93552 13.6929 9.93552 13.3226V0.677419C9.93552 0.307097 10.2426 0 10.6129 0C10.9833 0 11.2904 0.307097 11.2904 0.677419V13.3226C11.2904 13.6929 10.9832 14 10.6129 14Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function SortAltIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(0, "svg", 0)(1, "g");
        \u0275\u0275element(2, "path", 1)(3, "path", 2)(4, "path", 3)(5, "path", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "defs")(7, "clipPath", 5);
        \u0275\u0275element(8, "rect", 6);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.getClassNames());
        \u0275\u0275attribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
        \u0275\u0275advance();
        \u0275\u0275attribute("clip-path", ctx.pathId);
        \u0275\u0275advance(6);
        \u0275\u0275property("id", ctx.pathId);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SortAltIcon, [{
    type: Component,
    args: [{
      selector: "SortAltIcon",
      standalone: true,
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    d="M5.64515 3.61291C5.47353 3.61291 5.30192 3.54968 5.16644 3.4142L3.38708 1.63484L1.60773 3.4142C1.34579 3.67613 0.912244 3.67613 0.650309 3.4142C0.388374 3.15226 0.388374 2.71871 0.650309 2.45678L2.90837 0.198712C3.17031 -0.0632236 3.60386 -0.0632236 3.86579 0.198712L6.12386 2.45678C6.38579 2.71871 6.38579 3.15226 6.12386 3.4142C5.98837 3.54968 5.81676 3.61291 5.64515 3.61291Z"
                    fill="currentColor"
                />
                <path d="M3.38714 14C3.01681 14 2.70972 13.6929 2.70972 13.3226V0.677419C2.70972 0.307097 3.01681 0 3.38714 0C3.75746 0 4.06456 0.307097 4.06456 0.677419V13.3226C4.06456 13.6929 3.75746 14 3.38714 14Z" fill="currentColor" />
                <path
                    d="M10.6129 14C10.4413 14 10.2697 13.9368 10.1342 13.8013L7.87611 11.5432C7.61418 11.2813 7.61418 10.8477 7.87611 10.5858C8.13805 10.3239 8.5716 10.3239 8.83353 10.5858L10.6129 12.3652L12.3922 10.5858C12.6542 10.3239 13.0877 10.3239 13.3497 10.5858C13.6116 10.8477 13.6116 11.2813 13.3497 11.5432L11.0916 13.8013C10.9561 13.9368 10.7845 14 10.6129 14Z"
                    fill="currentColor"
                />
                <path d="M10.6129 14C10.2426 14 9.93552 13.6929 9.93552 13.3226V0.677419C9.93552 0.307097 10.2426 0 10.6129 0C10.9833 0 11.2904 0.307097 11.2904 0.677419V13.3226C11.2904 13.6929 10.9832 14 10.6129 14Z" fill="currentColor" />
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SortAltIcon, {
    className: "SortAltIcon",
    filePath: "sortalt.ts",
    lineNumber: 30
  });
})();

// node_modules/primeng/fesm2022/primeng-icons-sortamountdown.mjs
var SortAmountDownIcon = class _SortAmountDownIcon extends BaseIcon {
  pathId;
  ngOnInit() {
    this.pathId = "url(#" + uuid() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SortAmountDownIcon_BaseFactory;
    return function SortAmountDownIcon_Factory(__ngFactoryType__) {
      return (\u0275SortAmountDownIcon_BaseFactory || (\u0275SortAmountDownIcon_BaseFactory = \u0275\u0275getInheritedFactory(_SortAmountDownIcon)))(__ngFactoryType__ || _SortAmountDownIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _SortAmountDownIcon,
    selectors: [["SortAmountDownIcon"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 6,
    vars: 7,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M4.93953 10.5858L3.83759 11.6877V0.677419C3.83759 0.307097 3.53049 0 3.16017 0C2.78985 0 2.48275 0.307097 2.48275 0.677419V11.6877L1.38082 10.5858C1.11888 10.3239 0.685331 10.3239 0.423396 10.5858C0.16146 10.8477 0.16146 11.2813 0.423396 11.5432L2.68146 13.8013C2.74469 13.8645 2.81694 13.9097 2.89823 13.9458C2.97952 13.9819 3.06985 14 3.16017 14C3.25049 14 3.33178 13.9819 3.42211 13.9458C3.5034 13.9097 3.57565 13.8645 3.63888 13.8013L5.89694 11.5432C6.15888 11.2813 6.15888 10.8477 5.89694 10.5858C5.63501 10.3239 5.20146 10.3239 4.93953 10.5858ZM13.0957 0H7.22468C6.85436 0 6.54726 0.307097 6.54726 0.677419C6.54726 1.04774 6.85436 1.35484 7.22468 1.35484H13.0957C13.466 1.35484 13.7731 1.04774 13.7731 0.677419C13.7731 0.307097 13.466 0 13.0957 0ZM7.22468 5.41935H9.48275C9.85307 5.41935 10.1602 5.72645 10.1602 6.09677C10.1602 6.4671 9.85307 6.77419 9.48275 6.77419H7.22468C6.85436 6.77419 6.54726 6.4671 6.54726 6.09677C6.54726 5.72645 6.85436 5.41935 7.22468 5.41935ZM7.6763 8.12903H7.22468C6.85436 8.12903 6.54726 8.43613 6.54726 8.80645C6.54726 9.17677 6.85436 9.48387 7.22468 9.48387H7.6763C8.04662 9.48387 8.35372 9.17677 8.35372 8.80645C8.35372 8.43613 8.04662 8.12903 7.6763 8.12903ZM7.22468 2.70968H11.2892C11.6595 2.70968 11.9666 3.01677 11.9666 3.3871C11.9666 3.75742 11.6595 4.06452 11.2892 4.06452H7.22468C6.85436 4.06452 6.54726 3.75742 6.54726 3.3871C6.54726 3.01677 6.85436 2.70968 7.22468 2.70968Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function SortAmountDownIcon_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SortAmountDownIcon, [{
    type: Component,
    args: [{
      selector: "SortAmountDownIcon",
      standalone: true,
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    d="M4.93953 10.5858L3.83759 11.6877V0.677419C3.83759 0.307097 3.53049 0 3.16017 0C2.78985 0 2.48275 0.307097 2.48275 0.677419V11.6877L1.38082 10.5858C1.11888 10.3239 0.685331 10.3239 0.423396 10.5858C0.16146 10.8477 0.16146 11.2813 0.423396 11.5432L2.68146 13.8013C2.74469 13.8645 2.81694 13.9097 2.89823 13.9458C2.97952 13.9819 3.06985 14 3.16017 14C3.25049 14 3.33178 13.9819 3.42211 13.9458C3.5034 13.9097 3.57565 13.8645 3.63888 13.8013L5.89694 11.5432C6.15888 11.2813 6.15888 10.8477 5.89694 10.5858C5.63501 10.3239 5.20146 10.3239 4.93953 10.5858ZM13.0957 0H7.22468C6.85436 0 6.54726 0.307097 6.54726 0.677419C6.54726 1.04774 6.85436 1.35484 7.22468 1.35484H13.0957C13.466 1.35484 13.7731 1.04774 13.7731 0.677419C13.7731 0.307097 13.466 0 13.0957 0ZM7.22468 5.41935H9.48275C9.85307 5.41935 10.1602 5.72645 10.1602 6.09677C10.1602 6.4671 9.85307 6.77419 9.48275 6.77419H7.22468C6.85436 6.77419 6.54726 6.4671 6.54726 6.09677C6.54726 5.72645 6.85436 5.41935 7.22468 5.41935ZM7.6763 8.12903H7.22468C6.85436 8.12903 6.54726 8.43613 6.54726 8.80645C6.54726 9.17677 6.85436 9.48387 7.22468 9.48387H7.6763C8.04662 9.48387 8.35372 9.17677 8.35372 8.80645C8.35372 8.43613 8.04662 8.12903 7.6763 8.12903ZM7.22468 2.70968H11.2892C11.6595 2.70968 11.9666 3.01677 11.9666 3.3871C11.9666 3.75742 11.6595 4.06452 11.2892 4.06452H7.22468C6.85436 4.06452 6.54726 3.75742 6.54726 3.3871C6.54726 3.01677 6.85436 2.70968 7.22468 2.70968Z"
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SortAmountDownIcon, {
    className: "SortAmountDownIcon",
    filePath: "sortamountdown.ts",
    lineNumber: 24
  });
})();

// node_modules/primeng/fesm2022/primeng-icons-sortamountupalt.mjs
var SortAmountUpAltIcon = class _SortAmountUpAltIcon extends BaseIcon {
  pathId;
  ngOnInit() {
    this.pathId = "url(#" + uuid() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SortAmountUpAltIcon_BaseFactory;
    return function SortAmountUpAltIcon_Factory(__ngFactoryType__) {
      return (\u0275SortAmountUpAltIcon_BaseFactory || (\u0275SortAmountUpAltIcon_BaseFactory = \u0275\u0275getInheritedFactory(_SortAmountUpAltIcon)))(__ngFactoryType__ || _SortAmountUpAltIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _SortAmountUpAltIcon,
    selectors: [["SortAmountUpAltIcon"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 6,
    vars: 7,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M3.63435 0.19871C3.57113 0.135484 3.49887 0.0903226 3.41758 0.0541935C3.255 -0.0180645 3.06532 -0.0180645 2.90274 0.0541935C2.82145 0.0903226 2.74919 0.135484 2.68597 0.19871L0.427901 2.45677C0.165965 2.71871 0.165965 3.15226 0.427901 3.41419C0.689836 3.67613 1.12338 3.67613 1.38532 3.41419L2.48726 2.31226V13.3226C2.48726 13.6929 2.79435 14 3.16467 14C3.535 14 3.84209 13.6929 3.84209 13.3226V2.31226L4.94403 3.41419C5.07951 3.54968 5.25113 3.6129 5.42274 3.6129C5.59435 3.6129 5.76597 3.54968 5.90145 3.41419C6.16338 3.15226 6.16338 2.71871 5.90145 2.45677L3.64338 0.19871H3.63435ZM13.7685 13.3226C13.7685 12.9523 13.4615 12.6452 13.0911 12.6452H7.22016C6.84984 12.6452 6.54274 12.9523 6.54274 13.3226C6.54274 13.6929 6.84984 14 7.22016 14H13.0911C13.4615 14 13.7685 13.6929 13.7685 13.3226ZM7.22016 8.58064C6.84984 8.58064 6.54274 8.27355 6.54274 7.90323C6.54274 7.5329 6.84984 7.22581 7.22016 7.22581H9.47823C9.84855 7.22581 10.1556 7.5329 10.1556 7.90323C10.1556 8.27355 9.84855 8.58064 9.47823 8.58064H7.22016ZM7.22016 5.87097H7.67177C8.0421 5.87097 8.34919 5.56387 8.34919 5.19355C8.34919 4.82323 8.0421 4.51613 7.67177 4.51613H7.22016C6.84984 4.51613 6.54274 4.82323 6.54274 5.19355C6.54274 5.56387 6.84984 5.87097 7.22016 5.87097ZM11.2847 11.2903H7.22016C6.84984 11.2903 6.54274 10.9832 6.54274 10.6129C6.54274 10.2426 6.84984 9.93548 7.22016 9.93548H11.2847C11.655 9.93548 11.9621 10.2426 11.9621 10.6129C11.9621 10.9832 11.655 11.2903 11.2847 11.2903Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function SortAmountUpAltIcon_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SortAmountUpAltIcon, [{
    type: Component,
    args: [{
      selector: "SortAmountUpAltIcon",
      standalone: true,
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    d="M3.63435 0.19871C3.57113 0.135484 3.49887 0.0903226 3.41758 0.0541935C3.255 -0.0180645 3.06532 -0.0180645 2.90274 0.0541935C2.82145 0.0903226 2.74919 0.135484 2.68597 0.19871L0.427901 2.45677C0.165965 2.71871 0.165965 3.15226 0.427901 3.41419C0.689836 3.67613 1.12338 3.67613 1.38532 3.41419L2.48726 2.31226V13.3226C2.48726 13.6929 2.79435 14 3.16467 14C3.535 14 3.84209 13.6929 3.84209 13.3226V2.31226L4.94403 3.41419C5.07951 3.54968 5.25113 3.6129 5.42274 3.6129C5.59435 3.6129 5.76597 3.54968 5.90145 3.41419C6.16338 3.15226 6.16338 2.71871 5.90145 2.45677L3.64338 0.19871H3.63435ZM13.7685 13.3226C13.7685 12.9523 13.4615 12.6452 13.0911 12.6452H7.22016C6.84984 12.6452 6.54274 12.9523 6.54274 13.3226C6.54274 13.6929 6.84984 14 7.22016 14H13.0911C13.4615 14 13.7685 13.6929 13.7685 13.3226ZM7.22016 8.58064C6.84984 8.58064 6.54274 8.27355 6.54274 7.90323C6.54274 7.5329 6.84984 7.22581 7.22016 7.22581H9.47823C9.84855 7.22581 10.1556 7.5329 10.1556 7.90323C10.1556 8.27355 9.84855 8.58064 9.47823 8.58064H7.22016ZM7.22016 5.87097H7.67177C8.0421 5.87097 8.34919 5.56387 8.34919 5.19355C8.34919 4.82323 8.0421 4.51613 7.67177 4.51613H7.22016C6.84984 4.51613 6.54274 4.82323 6.54274 5.19355C6.54274 5.56387 6.84984 5.87097 7.22016 5.87097ZM11.2847 11.2903H7.22016C6.84984 11.2903 6.54274 10.9832 6.54274 10.6129C6.54274 10.2426 6.84984 9.93548 7.22016 9.93548H11.2847C11.655 9.93548 11.9621 10.2426 11.9621 10.6129C11.9621 10.9832 11.655 11.2903 11.2847 11.2903Z"
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SortAmountUpAltIcon, {
    className: "SortAmountUpAltIcon",
    filePath: "sortamountupalt.ts",
    lineNumber: 24
  });
})();

// node_modules/primeng/fesm2022/primeng-icons-trash.mjs
var TrashIcon = class _TrashIcon extends BaseIcon {
  pathId;
  ngOnInit() {
    this.pathId = "url(#" + uuid() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TrashIcon_BaseFactory;
    return function TrashIcon_Factory(__ngFactoryType__) {
      return (\u0275TrashIcon_BaseFactory || (\u0275TrashIcon_BaseFactory = \u0275\u0275getInheritedFactory(_TrashIcon)))(__ngFactoryType__ || _TrashIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _TrashIcon,
    selectors: [["TrashIcon"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 6,
    vars: 7,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M3.44802 13.9955H10.552C10.8056 14.0129 11.06 13.9797 11.3006 13.898C11.5412 13.8163 11.7632 13.6877 11.9537 13.5196C12.1442 13.3515 12.2995 13.1473 12.4104 12.9188C12.5213 12.6903 12.5858 12.442 12.6 12.1884V4.36041H13.4C13.5591 4.36041 13.7117 4.29722 13.8243 4.18476C13.9368 4.07229 14 3.91976 14 3.76071C14 3.60166 13.9368 3.44912 13.8243 3.33666C13.7117 3.22419 13.5591 3.16101 13.4 3.16101H12.0537C12.0203 3.1557 11.9863 3.15299 11.952 3.15299C11.9178 3.15299 11.8838 3.1557 11.8503 3.16101H11.2285C11.2421 3.10893 11.2487 3.05513 11.248 3.00106V1.80966C11.2171 1.30262 10.9871 0.828306 10.608 0.48989C10.229 0.151475 9.73159 -0.0236625 9.22402 0.00257442H4.77602C4.27251 -0.0171866 3.78126 0.160868 3.40746 0.498617C3.03365 0.836366 2.807 1.30697 2.77602 1.80966V3.00106C2.77602 3.0556 2.78346 3.10936 2.79776 3.16101H0.6C0.521207 3.16101 0.443185 3.17652 0.37039 3.20666C0.297595 3.2368 0.231451 3.28097 0.175736 3.33666C0.120021 3.39235 0.0758251 3.45846 0.0456722 3.53121C0.0155194 3.60397 0 3.68196 0 3.76071C0 3.83946 0.0155194 3.91744 0.0456722 3.9902C0.0758251 4.06296 0.120021 4.12907 0.175736 4.18476C0.231451 4.24045 0.297595 4.28462 0.37039 4.31476C0.443185 4.3449 0.521207 4.36041 0.6 4.36041H1.40002V12.1884C1.41426 12.442 1.47871 12.6903 1.58965 12.9188C1.7006 13.1473 1.85582 13.3515 2.04633 13.5196C2.23683 13.6877 2.45882 13.8163 2.69944 13.898C2.94005 13.9797 3.1945 14.0129 3.44802 13.9955ZM2.60002 4.36041H11.304V12.1884C11.304 12.5163 10.952 12.7961 10.504 12.7961H3.40002C2.97602 12.7961 2.60002 12.5163 2.60002 12.1884V4.36041ZM3.95429 3.16101C3.96859 3.10936 3.97602 3.0556 3.97602 3.00106V1.80966C3.97602 1.48183 4.33602 1.20197 4.77602 1.20197H9.24802C9.66403 1.20197 10.048 1.48183 10.048 1.80966V3.00106C10.0473 3.05515 10.054 3.10896 10.0678 3.16101H3.95429ZM5.57571 10.997C5.41731 10.995 5.26597 10.9311 5.15395 10.8191C5.04193 10.7071 4.97808 10.5558 4.97601 10.3973V6.77517C4.97601 6.61612 5.0392 6.46359 5.15166 6.35112C5.26413 6.23866 5.41666 6.17548 5.57571 6.17548C5.73476 6.17548 5.8873 6.23866 5.99976 6.35112C6.11223 6.46359 6.17541 6.61612 6.17541 6.77517V10.3894C6.17647 10.4688 6.16174 10.5476 6.13208 10.6213C6.10241 10.695 6.05841 10.762 6.00261 10.8186C5.94682 10.8751 5.88035 10.92 5.80707 10.9506C5.73378 10.9813 5.65514 10.9971 5.57571 10.997ZM7.99968 10.8214C8.11215 10.9339 8.26468 10.997 8.42373 10.997C8.58351 10.9949 8.73604 10.93 8.84828 10.8163C8.96052 10.7025 9.02345 10.5491 9.02343 10.3894V6.77517C9.02343 6.61612 8.96025 6.46359 8.84778 6.35112C8.73532 6.23866 8.58278 6.17548 8.42373 6.17548C8.26468 6.17548 8.11215 6.23866 7.99968 6.35112C7.88722 6.46359 7.82404 6.61612 7.82404 6.77517V10.3973C7.82404 10.5564 7.88722 10.7089 7.99968 10.8214Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function TrashIcon_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrashIcon, [{
    type: Component,
    args: [{
      selector: "TrashIcon",
      standalone: true,
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.44802 13.9955H10.552C10.8056 14.0129 11.06 13.9797 11.3006 13.898C11.5412 13.8163 11.7632 13.6877 11.9537 13.5196C12.1442 13.3515 12.2995 13.1473 12.4104 12.9188C12.5213 12.6903 12.5858 12.442 12.6 12.1884V4.36041H13.4C13.5591 4.36041 13.7117 4.29722 13.8243 4.18476C13.9368 4.07229 14 3.91976 14 3.76071C14 3.60166 13.9368 3.44912 13.8243 3.33666C13.7117 3.22419 13.5591 3.16101 13.4 3.16101H12.0537C12.0203 3.1557 11.9863 3.15299 11.952 3.15299C11.9178 3.15299 11.8838 3.1557 11.8503 3.16101H11.2285C11.2421 3.10893 11.2487 3.05513 11.248 3.00106V1.80966C11.2171 1.30262 10.9871 0.828306 10.608 0.48989C10.229 0.151475 9.73159 -0.0236625 9.22402 0.00257442H4.77602C4.27251 -0.0171866 3.78126 0.160868 3.40746 0.498617C3.03365 0.836366 2.807 1.30697 2.77602 1.80966V3.00106C2.77602 3.0556 2.78346 3.10936 2.79776 3.16101H0.6C0.521207 3.16101 0.443185 3.17652 0.37039 3.20666C0.297595 3.2368 0.231451 3.28097 0.175736 3.33666C0.120021 3.39235 0.0758251 3.45846 0.0456722 3.53121C0.0155194 3.60397 0 3.68196 0 3.76071C0 3.83946 0.0155194 3.91744 0.0456722 3.9902C0.0758251 4.06296 0.120021 4.12907 0.175736 4.18476C0.231451 4.24045 0.297595 4.28462 0.37039 4.31476C0.443185 4.3449 0.521207 4.36041 0.6 4.36041H1.40002V12.1884C1.41426 12.442 1.47871 12.6903 1.58965 12.9188C1.7006 13.1473 1.85582 13.3515 2.04633 13.5196C2.23683 13.6877 2.45882 13.8163 2.69944 13.898C2.94005 13.9797 3.1945 14.0129 3.44802 13.9955ZM2.60002 4.36041H11.304V12.1884C11.304 12.5163 10.952 12.7961 10.504 12.7961H3.40002C2.97602 12.7961 2.60002 12.5163 2.60002 12.1884V4.36041ZM3.95429 3.16101C3.96859 3.10936 3.97602 3.0556 3.97602 3.00106V1.80966C3.97602 1.48183 4.33602 1.20197 4.77602 1.20197H9.24802C9.66403 1.20197 10.048 1.48183 10.048 1.80966V3.00106C10.0473 3.05515 10.054 3.10896 10.0678 3.16101H3.95429ZM5.57571 10.997C5.41731 10.995 5.26597 10.9311 5.15395 10.8191C5.04193 10.7071 4.97808 10.5558 4.97601 10.3973V6.77517C4.97601 6.61612 5.0392 6.46359 5.15166 6.35112C5.26413 6.23866 5.41666 6.17548 5.57571 6.17548C5.73476 6.17548 5.8873 6.23866 5.99976 6.35112C6.11223 6.46359 6.17541 6.61612 6.17541 6.77517V10.3894C6.17647 10.4688 6.16174 10.5476 6.13208 10.6213C6.10241 10.695 6.05841 10.762 6.00261 10.8186C5.94682 10.8751 5.88035 10.92 5.80707 10.9506C5.73378 10.9813 5.65514 10.9971 5.57571 10.997ZM7.99968 10.8214C8.11215 10.9339 8.26468 10.997 8.42373 10.997C8.58351 10.9949 8.73604 10.93 8.84828 10.8163C8.96052 10.7025 9.02345 10.5491 9.02343 10.3894V6.77517C9.02343 6.61612 8.96025 6.46359 8.84778 6.35112C8.73532 6.23866 8.58278 6.17548 8.42373 6.17548C8.26468 6.17548 8.11215 6.23866 7.99968 6.35112C7.88722 6.46359 7.82404 6.61612 7.82404 6.77517V10.3973C7.82404 10.5564 7.88722 10.7089 7.99968 10.8214Z"
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TrashIcon, {
    className: "TrashIcon",
    filePath: "trash.ts",
    lineNumber: 26
  });
})();

// node_modules/primeng/fesm2022/primeng-datepicker.mjs
var theme = ({
  dt
}) => `
.p-datepicker {
    position: relative;
    display: inline-flex;
    max-width: 100%;
}

.p-datepicker-input {
    flex: 1 1 auto;
    width: 1%;
}

.p-datepicker:has(.p-datepicker-dropdown) .p-datepicker-input {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
}

.p-datepicker-dropdown {
    cursor: pointer;
    display: inline-flex;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: ${dt("datepicker.dropdown.width")};
    border-start-end-radius: ${dt("datepicker.dropdown.border.radius")};
    border-end-end-radius: ${dt("datepicker.dropdown.border.radius")};
    background: ${dt("datepicker.dropdown.background")};
    border: 1px solid ${dt("datepicker.dropdown.border.color")};
    border-inline-start: 0 none;
    color: ${dt("datepicker.dropdown.color")};
    transition: background ${dt("datepicker.transition.duration")}, color ${dt("datepicker.transition.duration")}, border-color ${dt("datepicker.transition.duration")}, outline-color ${dt("datepicker.transition.duration")};
    outline-color: transparent;
}

.p-datepicker-dropdown:not(:disabled):hover {
    background: ${dt("datepicker.dropdown.hover.background")};
    border-color: ${dt("datepicker.dropdown.hover.border.color")};
    color: ${dt("datepicker.dropdown.hover.color")};
}

.p-datepicker-dropdown:not(:disabled):active {
    background: ${dt("datepicker.dropdown.active.background")};
    border-color: ${dt("datepicker.dropdown.active.border.color")};
    color: ${dt("datepicker.dropdown.active.color")};
}

.p-datepicker-dropdown:focus-visible {
    box-shadow: ${dt("datepicker.dropdown.focus.ring.shadow")};
    outline: ${dt("datepicker.dropdown.focus.ring.width")} ${dt("datepicker.dropdown.focus.ring.style")} ${dt("datepicker.dropdown.focus.ring.color")};
    outline-offset: ${dt("datepicker.dropdown.focus.ring.offset")};
}

.p-datepicker:has(.p-datepicker-input-icon-container) {
    position: relative;
}

.p-datepicker:has(.p-datepicker-input-icon-container) .p-datepicker-input {
    padding-inline-end: calc((${dt("form.field.padding.x")} * 2) + ${dt("icon.size")});
}

.p-datepicker-input-icon-container {
    cursor: pointer;
    position: absolute;
    top: 50%;
    inset-inline-end: ${dt("form.field.padding.x")};
    margin-top: calc(-1 * (${dt("icon.size")} / 2));
    color: ${dt("datepicker.input.icon.color")};
    line-height: 1;
}

.p-datepicker-fluid {
    display: flex;
}

.p-datepicker-fluid .p-datepicker-input {
    width: 1%;
}

.p-datepicker .p-datepicker-panel {
    min-width: 100%;
}

.p-datepicker-panel {
    width: auto;
    padding: ${dt("datepicker.panel.padding")};
    background: ${dt("datepicker.panel.background")};
    color: ${dt("datepicker.panel.color")};
    border: 1px solid ${dt("datepicker.panel.border.color")};
    border-radius: ${dt("datepicker.panel.border.radius")};
    box-shadow: ${dt("datepicker.panel.shadow")};
}

.p-datepicker-panel-inline {
    display: inline-block;
    overflow-x: auto;
    box-shadow: none;
}

.p-datepicker-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${dt("datepicker.header.padding")};
    background: ${dt("datepicker.header.background")};
    color: ${dt("datepicker.header.color")};
    border-bottom: 1px solid ${dt("datepicker.header.border.color")};
}

.p-datepicker-next-button:dir(rtl) {
    transform: rotate(180deg);
}

.p-datepicker-prev-button:dir(rtl) {
    transform: rotate(180deg);
}

.p-datepicker-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${dt("datepicker.title.gap")};
    font-weight: ${dt("datepicker.title.font.weight")};
}

.p-datepicker-select-year,
.p-datepicker-select-month {
    border: none;
    background: transparent;
    margin: 0;
    cursor: pointer;
    font-weight: inherit;
    transition: background ${dt("datepicker.transition.duration")}, color ${dt("datepicker.transition.duration")}, border-color ${dt("datepicker.transition.duration")}, outline-color ${dt("datepicker.transition.duration")}, box-shadow ${dt("datepicker.transition.duration")};
}

.p-datepicker-select-month {
    padding: ${dt("datepicker.select.month.padding")};
    color: ${dt("datepicker.select.month.color")};
    border-radius: ${dt("datepicker.select.month.border.radius")};
}

.p-datepicker-select-year {
    padding: ${dt("datepicker.select.year.padding")};
    color: ${dt("datepicker.select.year.color")};
    border-radius: ${dt("datepicker.select.year.border.radius")};
}

.p-datepicker-select-month:enabled:hover {
    background: ${dt("datepicker.select.month.hover.background")};
    color: ${dt("datepicker.select.month.hover.color")};
}

.p-datepicker-select-year:enabled:hover {
    background: ${dt("datepicker.select.year.hover.background")};
    color: ${dt("datepicker.select.year.hover.color")};
}

.p-datepicker-calendar-container {
    display: flex;
}

.p-datepicker-calendar-container .p-datepicker-calendar {
    flex: 1 1 auto;
    border-inline-start: 1px solid ${dt("datepicker.group.border.color")};
    padding-inline: ${dt("datepicker.group.gap")};
}

.p-datepicker-calendar-container .p-datepicker-calendar:first-child {
    padding-inline-start: 0;
    border-inline-start: 0 none;
}

.p-datepicker-calendar-container .p-datepicker-calendar:last-child {
    padding-inline-end: 0;
}

.p-datepicker-day-view {
    width: 100%;
    border-collapse: collapse;
    font-size: 1rem;
    margin: ${dt("datepicker.day.view.margin")};
}

.p-datepicker-weekday-cell {
    padding: ${dt("datepicker.week.day.padding")};
}

.p-datepicker-weekday {
    font-weight: ${dt("datepicker.week.day.font.weight")};
    color: ${dt("datepicker.week.day.color")};
}

.p-datepicker-day-cell {
    padding: ${dt("datepicker.date.padding")};
}

.p-datepicker-day {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    width: ${dt("datepicker.date.width")};
    height: ${dt("datepicker.date.height")};
    border-radius: ${dt("datepicker.date.border.radius")};
    transition: background ${dt("datepicker.transition.duration")}, color ${dt("datepicker.transition.duration")}, border-color ${dt("datepicker.transition.duration")},
        box-shadow ${dt("datepicker.transition.duration")}, outline-color ${dt("datepicker.transition.duration")};
    border: 1px solid transparent;
    outline-color: transparent;
    color: ${dt("datepicker.date.color")};
}

.p-datepicker-day:not(.p-datepicker-day-selected):not(.p-disabled):hover {
    background: ${dt("datepicker.date.hover.background")};
    color: ${dt("datepicker.date.hover.color")};
}

.p-datepicker-day:focus-visible {
    box-shadow: ${dt("datepicker.date.focus.ring.shadow")};
    outline: ${dt("datepicker.date.focus.ring.width")} ${dt("datepicker.date.focus.ring.style")} ${dt("datepicker.date.focus.ring.color")};
    outline-offset: ${dt("datepicker.date.focus.ring.offset")};
}

.p-datepicker-day-selected {
    background: ${dt("datepicker.date.selected.background")};
    color: ${dt("datepicker.date.selected.color")};
}

.p-datepicker-day-selected-range {
    background: ${dt("datepicker.date.range.selected.background")};
    color: ${dt("datepicker.date.range.selected.color")};
}

.p-datepicker-today > .p-datepicker-day {
    background: ${dt("datepicker.today.background")};
    color: ${dt("datepicker.today.color")};
}

.p-datepicker-today > .p-datepicker-day-selected {
    background: ${dt("datepicker.date.selected.background")};
    color: ${dt("datepicker.date.selected.color")};
}

.p-datepicker-today > .p-datepicker-day-selected-range {
    background: ${dt("datepicker.date.range.selected.background")};
    color: ${dt("datepicker.date.range.selected.color")};
}

.p-datepicker-weeknumber {
    text-align: center
}

.p-datepicker-month-view {
    margin: ${dt("datepicker.month.view.margin")};
}

.p-datepicker-month {
    width: 33.3%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    padding: ${dt("datepicker.month.padding")};
    transition: background ${dt("datepicker.transition.duration")}, color ${dt("datepicker.transition.duration")}, border-color ${dt("datepicker.transition.duration")}, box-shadow ${dt("datepicker.transition.duration")}, outline-color ${dt("datepicker.transition.duration")};
    border-radius: ${dt("datepicker.month.border.radius")};
    outline-color: transparent;
    color: ${dt("datepicker.date.color")};
}

.p-datepicker-month:not(.p-disabled):not(.p-datepicker-month-selected):hover {
    color:  ${dt("datepicker.date.hover.color")};
    background: ${dt("datepicker.date.hover.background")};
}

.p-datepicker-month-selected {
    color: ${dt("datepicker.date.selected.color")};
    background: ${dt("datepicker.date.selected.background")};
}

.p-datepicker-month:not(.p-disabled):focus-visible {
    box-shadow: ${dt("datepicker.date.focus.ring.shadow")};
    outline: ${dt("datepicker.date.focus.ring.width")} ${dt("datepicker.date.focus.ring.style")} ${dt("datepicker.date.focus.ring.color")};
    outline-offset: ${dt("datepicker.date.focus.ring.offset")};
}

.p-datepicker-year-view {
    margin: ${dt("datepicker.year.view.margin")};
}

.p-datepicker-year {
    width: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    padding: ${dt("datepicker.year.padding")};
    transition: background ${dt("datepicker.transition.duration")}, color ${dt("datepicker.transition.duration")}, border-color ${dt("datepicker.transition.duration")}, box-shadow ${dt("datepicker.transition.duration")}, outline-color ${dt("datepicker.transition.duration")};
    border-radius: ${dt("datepicker.year.border.radius")};
    outline-color: transparent;
    color: ${dt("datepicker.date.color")};
}

.p-datepicker-year:not(.p-disabled):not(.p-datepicker-year-selected):hover {
    color: ${dt("datepicker.date.hover.color")};
    background: ${dt("datepicker.date.hover.background")};
}

.p-datepicker-year-selected {
    color: ${dt("datepicker.date.selected.color")};
    background: ${dt("datepicker.date.selected.background")};
}

.p-datepicker-year:not(.p-disabled):focus-visible {
    box-shadow: ${dt("datepicker.date.focus.ring.shadow")};
    outline: ${dt("datepicker.date.focus.ring.width")} ${dt("datepicker.date.focus.ring.style")} ${dt("datepicker.date.focus.ring.color")};
    outline-offset: ${dt("datepicker.date.focus.ring.offset")};
}

.p-datepicker-buttonbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:  ${dt("datepicker.buttonbar.padding")};
    border-top: 1px solid ${dt("datepicker.buttonbar.border.color")};
}

.p-datepicker-buttonbar .p-button {
    width: auto;
}

.p-datepicker-time-picker {
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid ${dt("datepicker.time.picker.border.color")};
    padding: 0;
    gap: ${dt("datepicker.time.picker.gap")};
}

.p-datepicker-calendar-container + .p-datepicker-time-picker {
    padding: ${dt("datepicker.time.picker.padding")};
}

.p-datepicker-time-picker > div {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: ${dt("datepicker.time.picker.button.gap")};
}

.p-datepicker-time-picker span {
    font-size: 1rem;
}

.p-datepicker-timeonly .p-datepicker-time-picker {
    border-top: 0 none;
}

.p-datepicker-calendar:not(:first-child):not(:last-child) .p-datepicker-header {
    justify-content: center;
}

.p-datepicker:has(.p-inputtext-sm) .p-datepicker-dropdown {
    width: ${dt("datepicker.dropdown.sm.width")};
}

.p-datepicker:has(.p-inputtext-sm) .p-datepicker-dropdown .p-icon,
.p-datepicker:has(.p-inputtext-sm) .p-datepicker-input-icon {
    font-size: ${dt("form.field.sm.font.size")};
    width: ${dt("form.field.sm.font.size")};
    height: ${dt("form.field.sm.font.size")};
}

.p-datepicker:has(.p-inputtext-lg) .p-datepicker-dropdown {
    width: ${dt("datepicker.dropdown.lg.width")};
}

.p-datepicker:has(.p-inputtext-lg) .p-datepicker-dropdown .p-icon,
.p-datepicker:has(.p-inputtext-lg) .p-datepicker-input-icon {
    font-size: ${dt("form.field.lg.font.size")};
    width: ${dt("form.field.lg.font.size")};
    height: ${dt("form.field.lg.font.size")};
}

/* For PrimeNG */

p-calendar.ng-invalid.ng-dirty .p-datepicker.p-inputwrapper .p-inputtext{
    border-color: ${dt("inputtext.invalid.border.color")};
}

p-datepicker.ng-invalid.ng-dirty .p-datepicker.p-inputwrapper .p-inputtext{
    border-color: ${dt("inputtext.invalid.border.color")};
}
`;
var inlineStyles = {
  root: ({
    props
  }) => ({
    position: props.appendTo === "self" ? "relative" : void 0
  })
};
var classes = {
  root: ({
    instance
  }) => ({
    "p-datepicker p-component p-inputwrapper": true,
    "p-datepicker-fluid": instance.hasFluid,
    "p-inputwrapper-filled": instance.filled,
    "p-inputwrapper-focus": instance.focus,
    "p-focus": instance.focus || instance.overlayVisible
  }),
  pcInput: "p-datepicker-input",
  dropdown: "p-datepicker-dropdown",
  inputIconContainer: "p-datepicker-input-icon-container",
  inputIcon: "p-datepicker-input-icon",
  panel: ({
    instance
  }) => ({
    "p-datepicker-panel p-component": true,
    "p-datepicker-panel-inline": instance.inline,
    "p-disabled": instance.disabled,
    "p-datepicker-timeonly": instance.timeOnly
  }),
  calendarContainer: "p-datepicker-calendar-container",
  calendar: "p-datepicker-calendar",
  header: "p-datepicker-header",
  pcPrevButton: "p-datepicker-prev-button",
  title: "p-datepicker-title",
  selectMonth: "p-datepicker-select-month",
  selectYear: "p-datepicker-select-year",
  decade: "p-datepicker-decade",
  pcNextButton: "p-datepicker-next-button",
  dayView: "p-datepicker-day-view",
  weekHeader: "p-datepicker-weekheader p-disabled",
  weekNumber: "p-datepicker-weeknumber",
  weekLabelContainer: "p-datepicker-weeklabel-container p-disabled",
  weekDayCell: "p-datepicker-weekday-cell",
  weekDay: "p-datepicker-weekday",
  dayCell: ({
    date
  }) => ["p-datepicker-day-cell", {
    "p-datepicker-other-month": date.otherMonth,
    "p-datepicker-today": date.today
  }],
  day: ({
    instance,
    date
  }) => {
    let selectedDayClass = "";
    if (instance.isRangeSelection() && instance.isSelected(date) && date.selectable) {
      selectedDayClass = date.day === instance.value[0].getDate() || date.day === instance.value[1].getDate() ? "p-datepicker-day-selected" : "p-datepicker-day-selected-range";
    }
    return {
      "p-datepicker-day": true,
      "p-datepicker-day-selected": !instance.isRangeSelection() && instance.isSelected(date) && date.selectable,
      "p-disabled": instance.disabled || !date.selectable,
      [selectedDayClass]: true
    };
  },
  monthView: "p-datepicker-month-view",
  month: ({
    instance,
    props,
    month,
    index
  }) => ["p-datepicker-month", {
    "p-datepicker-month-selected": instance.isMonthSelected(index),
    "p-disabled": props.disabled || !month.selectable
  }],
  yearView: "p-datepicker-year-view",
  year: ({
    instance,
    props,
    year
  }) => ["p-datepicker-year", {
    "p-datepicker-year-selected": instance.isYearSelected(year.value),
    "p-disabled": props.disabled || !year.selectable
  }],
  timePicker: "p-datepicker-time-picker",
  hourPicker: "p-datepicker-hour-picker",
  pcIncrementButton: "p-datepicker-increment-button",
  pcDecrementButton: "p-datepicker-decrement-button",
  separator: "p-datepicker-separator",
  minutePicker: "p-datepicker-minute-picker",
  secondPicker: "p-datepicker-second-picker",
  ampmPicker: "p-datepicker-ampm-picker",
  buttonbar: "p-datepicker-buttonbar",
  pcTodayButton: "p-datepicker-today-button",
  pcClearButton: "p-datepicker-clear-button"
};
var DatePickerStyle = class _DatePickerStyle extends BaseStyle {
  name = "datepicker";
  theme = theme;
  classes = classes;
  inlineStyles = inlineStyles;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275DatePickerStyle_BaseFactory;
    return function DatePickerStyle_Factory(__ngFactoryType__) {
      return (\u0275DatePickerStyle_BaseFactory || (\u0275DatePickerStyle_BaseFactory = \u0275\u0275getInheritedFactory(_DatePickerStyle)))(__ngFactoryType__ || _DatePickerStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _DatePickerStyle,
    factory: _DatePickerStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatePickerStyle, [{
    type: Injectable
  }], null, null);
})();
var DatePickerClasses;
(function(DatePickerClasses2) {
  DatePickerClasses2["root"] = "p-datepicker";
  DatePickerClasses2["pcInput"] = "p-datepicker-input";
  DatePickerClasses2["dropdown"] = "p-datepicker-dropdown";
  DatePickerClasses2["inputIconContainer"] = "p-datepicker-input-icon-container";
  DatePickerClasses2["inputIcon"] = "p-datepicker-input-icon";
  DatePickerClasses2["panel"] = "p-datepicker-panel";
  DatePickerClasses2["calendarContainer"] = "p-datepicker-calendar-container";
  DatePickerClasses2["calendar"] = "p-datepicker-calendar";
  DatePickerClasses2["header"] = "p-datepicker-header";
  DatePickerClasses2["pcPrevButton"] = "p-datepicker-prev-button";
  DatePickerClasses2["title"] = "p-datepicker-title";
  DatePickerClasses2["selectMonth"] = "p-datepicker-select-month";
  DatePickerClasses2["selectYear"] = "p-datepicker-select-year";
  DatePickerClasses2["decade"] = "p-datepicker-decade";
  DatePickerClasses2["pcNextButton"] = "p-datepicker-next-button";
  DatePickerClasses2["dayView"] = "p-datepicker-day-view";
  DatePickerClasses2["weekHeader"] = "p-datepicker-weekheader";
  DatePickerClasses2["weekNumber"] = "p-datepicker-weeknumber";
  DatePickerClasses2["weekLabelContainer"] = "p-datepicker-weeklabel-container";
  DatePickerClasses2["weekDayCell"] = "p-datepicker-weekday-cell";
  DatePickerClasses2["weekDay"] = "p-datepicker-weekday";
  DatePickerClasses2["dayCell"] = "p-datepicker-day-cell";
  DatePickerClasses2["day"] = "p-datepicker-day";
  DatePickerClasses2["monthView"] = "p-datepicker-month-view";
  DatePickerClasses2["month"] = "p-datepicker-month";
  DatePickerClasses2["yearView"] = "p-datepicker-year-view";
  DatePickerClasses2["year"] = "p-datepicker-year";
  DatePickerClasses2["timePicker"] = "p-datepicker-time-picker";
  DatePickerClasses2["hourPicker"] = "p-datepicker-hour-picker";
  DatePickerClasses2["pcIncrementButton"] = "p-datepicker-increment-button";
  DatePickerClasses2["pcDecrementButton"] = "p-datepicker-decrement-button";
  DatePickerClasses2["separator"] = "p-datepicker-separator";
  DatePickerClasses2["minutePicker"] = "p-datepicker-minute-picker";
  DatePickerClasses2["secondPicker"] = "p-datepicker-second-picker";
  DatePickerClasses2["ampmPicker"] = "p-datepicker-ampm-picker";
  DatePickerClasses2["buttonbar"] = "p-datepicker-buttonbar";
  DatePickerClasses2["pcTodayButton"] = "p-datepicker-today-button";
  DatePickerClasses2["pcClearButton"] = "p-datepicker-clear-button";
})(DatePickerClasses || (DatePickerClasses = {}));
var _c0 = ["date"];
var _c1 = ["header"];
var _c2 = ["footer"];
var _c3 = ["disabledDate"];
var _c4 = ["decade"];
var _c5 = ["previousicon"];
var _c6 = ["nexticon"];
var _c7 = ["triggericon"];
var _c8 = ["clearicon"];
var _c9 = ["decrementicon"];
var _c10 = ["incrementicon"];
var _c11 = ["inputicon"];
var _c12 = ["container"];
var _c13 = ["inputfield"];
var _c14 = ["contentWrapper"];
var _c15 = [[["p-header"]], [["p-footer"]]];
var _c16 = ["p-header", "p-footer"];
var _c17 = (a0) => ({
  clickCallBack: a0
});
var _c18 = (a0) => ({
  "p-datepicker-input-icon": a0
});
var _c19 = (a0, a1) => ({
  showTransitionParams: a0,
  hideTransitionParams: a1
});
var _c20 = (a0) => ({
  value: "visible",
  params: a0
});
var _c21 = (a0) => ({
  visibility: a0
});
var _c22 = (a0) => ({
  $implicit: a0
});
var _c23 = (a0, a1) => ({
  "p-datepicker-day-cell": true,
  "p-datepicker-other-month": a0,
  "p-datepicker-today": a1
});
var _c24 = (a0, a1) => ({
  "p-datepicker-month": true,
  "p-datepicker-month-selected": a0,
  "p-disabled": a1
});
var _c25 = (a0, a1) => ({
  "p-datepicker-year": true,
  "p-datepicker-year-selected": a0,
  "p-disabled": a1
});
function DatePicker_ng_template_2_ng_container_2_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "TimesIcon", 11);
    \u0275\u0275listener("click", function DatePicker_ng_template_2_ng_container_2_TimesIcon_1_Template_TimesIcon_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.clear());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275classMap("p-datepicker-clear-icon");
  }
}
function DatePicker_ng_template_2_ng_container_2_span_2_1_ng_template_0_Template(rf, ctx) {
}
function DatePicker_ng_template_2_ng_container_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DatePicker_ng_template_2_ng_container_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function DatePicker_ng_template_2_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275listener("click", function DatePicker_ng_template_2_ng_container_2_span_2_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.clear());
    });
    \u0275\u0275template(1, DatePicker_ng_template_2_ng_container_2_span_2_1_Template, 1, 0, null, 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.clearIconTemplate || ctx_r1._clearIconTemplate);
  }
}
function DatePicker_ng_template_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, DatePicker_ng_template_2_ng_container_2_TimesIcon_1_Template, 1, 2, "TimesIcon", 9)(2, DatePicker_ng_template_2_ng_container_2_span_2_Template, 2, 1, "span", 10);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.clearIconTemplate && !ctx_r1._clearIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.clearIconTemplate || ctx_r1._clearIconTemplate);
  }
}
function DatePicker_ng_template_2_button_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 16);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r1.icon);
  }
}
function DatePicker_ng_template_2_button_3_ng_container_2_CalendarIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "CalendarIcon");
  }
}
function DatePicker_ng_template_2_button_3_ng_container_2_2_ng_template_0_Template(rf, ctx) {
}
function DatePicker_ng_template_2_button_3_ng_container_2_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DatePicker_ng_template_2_button_3_ng_container_2_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function DatePicker_ng_template_2_button_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, DatePicker_ng_template_2_button_3_ng_container_2_CalendarIcon_1_Template, 1, 0, "CalendarIcon", 7)(2, DatePicker_ng_template_2_button_3_ng_container_2_2_Template, 1, 0, null, 13);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.triggerIconTemplate && !ctx_r1._triggerIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.triggerIconTemplate || ctx_r1._triggerIconTemplate);
  }
}
function DatePicker_ng_template_2_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function DatePicker_ng_template_2_button_3_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      \u0275\u0275nextContext();
      const inputfield_r6 = \u0275\u0275reference(1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onButtonClick($event, inputfield_r6));
    });
    \u0275\u0275template(1, DatePicker_ng_template_2_button_3_span_1_Template, 1, 1, "span", 15)(2, DatePicker_ng_template_2_button_3_ng_container_2_Template, 3, 2, "ng-container", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.disabled);
    \u0275\u0275attribute("aria-label", ctx_r1.iconButtonAriaLabel)("aria-expanded", (tmp_6_0 = ctx_r1.overlayVisible) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : false)("aria-controls", ctx_r1.overlayVisible ? ctx_r1.panelId : null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.icon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.icon);
  }
}
function DatePicker_ng_template_2_ng_container_4_CalendarIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "CalendarIcon", 20);
    \u0275\u0275listener("click", function DatePicker_ng_template_2_ng_container_4_CalendarIcon_2_Template_CalendarIcon_click_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onButtonClick($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(1, _c18, ctx_r1.showOnFocus));
  }
}
function DatePicker_ng_template_2_ng_container_4_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DatePicker_ng_template_2_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 17);
    \u0275\u0275template(2, DatePicker_ng_template_2_ng_container_4_CalendarIcon_2_Template, 1, 3, "CalendarIcon", 18)(3, DatePicker_ng_template_2_ng_container_4_ng_container_3_Template, 1, 0, "ng-container", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.inputIconTemplate && !ctx_r1._inputIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.inputIconTemplate || ctx_r1._inputIconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(3, _c17, ctx_r1.onButtonClick.bind(ctx_r1)));
  }
}
function DatePicker_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 6, 1);
    \u0275\u0275listener("focus", function DatePicker_ng_template_2_Template_input_focus_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onInputFocus($event));
    })("keydown", function DatePicker_ng_template_2_Template_input_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onInputKeydown($event));
    })("click", function DatePicker_ng_template_2_Template_input_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onInputClick());
    })("blur", function DatePicker_ng_template_2_Template_input_blur_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onInputBlur($event));
    })("input", function DatePicker_ng_template_2_Template_input_input_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onUserInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, DatePicker_ng_template_2_ng_container_2_Template, 3, 2, "ng-container", 7)(3, DatePicker_ng_template_2_button_3_Template, 3, 6, "button", 8)(4, DatePicker_ng_template_2_ng_container_4_Template, 4, 5, "ng-container", 7);
  }
  if (rf & 2) {
    let tmp_17_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.inputStyleClass);
    \u0275\u0275property("value", ctx_r1.inputFieldValue)("readonly", ctx_r1.readonlyInput)("ngStyle", ctx_r1.inputStyle)("ngClass", "p-datepicker-input")("placeholder", ctx_r1.placeholder || "")("disabled", ctx_r1.disabled)("pAutoFocus", ctx_r1.autofocus)("variant", ctx_r1.variant)("fluid", ctx_r1.hasFluid);
    \u0275\u0275attribute("id", ctx_r1.inputId)("name", ctx_r1.name)("required", ctx_r1.required)("aria-required", ctx_r1.required)("aria-expanded", (tmp_17_0 = ctx_r1.overlayVisible) !== null && tmp_17_0 !== void 0 ? tmp_17_0 : false)("aria-controls", ctx_r1.overlayVisible ? ctx_r1.panelId : null)("aria-labelledby", ctx_r1.ariaLabelledBy)("aria-label", ctx_r1.ariaLabel)("tabindex", ctx_r1.tabindex)("inputmode", ctx_r1.touchUI ? "off" : null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.showClear && !ctx_r1.disabled && ctx_r1.value != null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showIcon && ctx_r1.iconDisplay === "button");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.iconDisplay === "input" && ctx_r1.showIcon);
  }
}
function DatePicker_div_3_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DatePicker_div_3_ng_container_4_div_2_ChevronLeftIcon_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ChevronLeftIcon");
  }
}
function DatePicker_div_3_ng_container_4_div_2_span_4_1_ng_template_0_Template(rf, ctx) {
}
function DatePicker_div_3_ng_container_4_div_2_span_4_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DatePicker_div_3_ng_container_4_div_2_span_4_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function DatePicker_div_3_ng_container_4_div_2_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275template(1, DatePicker_div_3_ng_container_4_div_2_span_4_1_Template, 1, 0, null, 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.previousIconTemplate || ctx_r1._previousIconTemplate);
  }
}
function DatePicker_div_3_ng_container_4_div_2_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function DatePicker_div_3_ng_container_4_div_2_button_6_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.switchToMonthView($event));
    })("keydown", function DatePicker_div_3_ng_container_4_div_2_button_6_Template_button_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onContainerButtonKeydown($event));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const month_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r1.switchViewButtonDisabled());
    \u0275\u0275attribute("aria-label", ctx_r1.getTranslation("chooseMonth"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getMonthName(month_r11.month), " ");
  }
}
function DatePicker_div_3_ng_container_4_div_2_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function DatePicker_div_3_ng_container_4_div_2_button_7_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.switchToYearView($event));
    })("keydown", function DatePicker_div_3_ng_container_4_div_2_button_7_Template_button_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onContainerButtonKeydown($event));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const month_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r1.switchViewButtonDisabled());
    \u0275\u0275attribute("aria-label", ctx_r1.getTranslation("chooseYear"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getYear(month_r11), " ");
  }
}
function DatePicker_div_3_ng_container_4_div_2_span_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r1.yearPickerValues()[0], " - ", ctx_r1.yearPickerValues()[ctx_r1.yearPickerValues().length - 1], "");
  }
}
function DatePicker_div_3_ng_container_4_div_2_span_8_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DatePicker_div_3_ng_container_4_div_2_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275template(1, DatePicker_div_3_ng_container_4_div_2_span_8_ng_container_1_Template, 2, 2, "ng-container", 7)(2, DatePicker_div_3_ng_container_4_div_2_span_8_ng_container_2_Template, 1, 0, "ng-container", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.decadeTemplate && ctx_r1._decadeTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.decadeTemplate || ctx_r1._decadeTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(3, _c22, ctx_r1.yearPickerValues));
  }
}
function DatePicker_div_3_ng_container_4_div_2_ChevronRightIcon_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ChevronRightIcon");
  }
}
function DatePicker_div_3_ng_container_4_div_2_span_11_1_ng_template_0_Template(rf, ctx) {
}
function DatePicker_div_3_ng_container_4_div_2_span_11_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DatePicker_div_3_ng_container_4_div_2_span_11_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function DatePicker_div_3_ng_container_4_div_2_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275template(1, DatePicker_div_3_ng_container_4_div_2_span_11_1_Template, 1, 0, null, 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.nextIconTemplate || ctx_r1._nextIconTemplate);
  }
}
function DatePicker_div_3_ng_container_4_div_2_table_12_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 44)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getTranslation("weekHeader"));
  }
}
function DatePicker_div_3_ng_container_4_div_2_table_12_th_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 45)(1, "span", 46);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const weekDay_r13 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(weekDay_r13);
  }
}
function DatePicker_div_3_ng_container_4_div_2_table_12_tr_6_td_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 49)(1, "span", 50);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const j_r14 = \u0275\u0275nextContext().index;
    const month_r11 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", month_r11.weekNumbers[j_r14], " ");
  }
}
function DatePicker_div_3_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const date_r16 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(date_r16.day);
  }
}
function DatePicker_div_3_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DatePicker_div_3_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, DatePicker_div_3_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 19);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const date_r16 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.dateTemplate || ctx_r1._dateTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c22, date_r16));
  }
}
function DatePicker_div_3_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DatePicker_div_3_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, DatePicker_div_3_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 19);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const date_r16 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.disabledDateTemplate || ctx_r1._disabledDateTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c22, date_r16));
  }
}
function DatePicker_div_3_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const date_r16 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", date_r16.day, " ");
  }
}
function DatePicker_div_3_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 51);
    \u0275\u0275listener("click", function DatePicker_div_3_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_Template_span_click_1_listener($event) {
      \u0275\u0275restoreView(_r15);
      const date_r16 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.onDateSelect($event, date_r16));
    })("keydown", function DatePicker_div_3_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_Template_span_keydown_1_listener($event) {
      \u0275\u0275restoreView(_r15);
      const date_r16 = \u0275\u0275nextContext().$implicit;
      const i_r17 = \u0275\u0275nextContext(3).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onDateCellKeydown($event, date_r16, i_r17));
    });
    \u0275\u0275template(2, DatePicker_div_3_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 7)(3, DatePicker_div_3_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_ng_container_3_Template, 2, 4, "ng-container", 7)(4, DatePicker_div_3_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_ng_container_4_Template, 2, 4, "ng-container", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, DatePicker_div_3_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_div_5_Template, 2, 1, "div", 52);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const date_r16 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.dayClass(date_r16));
    \u0275\u0275attribute("data-date", ctx_r1.formatDateKey(ctx_r1.formatDateMetaToDate(date_r16)));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.dateTemplate && !ctx_r1._dateTemplate && (date_r16.selectable || !ctx_r1.disabledDateTemplate && !ctx_r1._disabledDateTemplate));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", date_r16.selectable || !ctx_r1.disabledDateTemplate && !ctx_r1._disabledDateTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !date_r16.selectable);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSelected(date_r16));
  }
}
function DatePicker_div_3_ng_container_4_div_2_table_12_tr_6_td_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 16);
    \u0275\u0275template(1, DatePicker_div_3_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_Template, 6, 6, "ng-container", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const date_r16 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(3, _c23, date_r16.otherMonth, date_r16.today));
    \u0275\u0275attribute("aria-label", date_r16.day);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", date_r16.otherMonth ? ctx_r1.showOtherMonths : true);
  }
}
function DatePicker_div_3_ng_container_4_div_2_table_12_tr_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275template(1, DatePicker_div_3_ng_container_4_div_2_table_12_tr_6_td_1_Template, 3, 1, "td", 47)(2, DatePicker_div_3_ng_container_4_div_2_table_12_tr_6_td_2_Template, 2, 6, "td", 48);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const week_r18 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showWeek);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", week_r18);
  }
}
function DatePicker_div_3_ng_container_4_div_2_table_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 40)(1, "thead")(2, "tr");
    \u0275\u0275template(3, DatePicker_div_3_ng_container_4_div_2_table_12_th_3_Template, 3, 1, "th", 41)(4, DatePicker_div_3_ng_container_4_div_2_table_12_th_4_Template, 3, 1, "th", 42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "tbody");
    \u0275\u0275template(6, DatePicker_div_3_ng_container_4_div_2_table_12_tr_6_Template, 3, 2, "tr", 43);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const month_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.showWeek);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.weekDays);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", month_r11.dates);
  }
}
function DatePicker_div_3_ng_container_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29)(2, "p-button", 30);
    \u0275\u0275listener("keydown", function DatePicker_div_3_ng_container_4_div_2_Template_p_button_keydown_2_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onContainerButtonKeydown($event));
    })("onClick", function DatePicker_div_3_ng_container_4_div_2_Template_p_button_onClick_2_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onPrevButtonClick($event));
    });
    \u0275\u0275template(3, DatePicker_div_3_ng_container_4_div_2_ChevronLeftIcon_3_Template, 1, 0, "ChevronLeftIcon", 7)(4, DatePicker_div_3_ng_container_4_div_2_span_4_Template, 2, 1, "span", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 31);
    \u0275\u0275template(6, DatePicker_div_3_ng_container_4_div_2_button_6_Template, 2, 3, "button", 32)(7, DatePicker_div_3_ng_container_4_div_2_button_7_Template, 2, 3, "button", 33)(8, DatePicker_div_3_ng_container_4_div_2_span_8_Template, 3, 5, "span", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p-button", 35);
    \u0275\u0275listener("keydown", function DatePicker_div_3_ng_container_4_div_2_Template_p_button_keydown_9_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onContainerButtonKeydown($event));
    })("onClick", function DatePicker_div_3_ng_container_4_div_2_Template_p_button_onClick_9_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onNextButtonClick($event));
    });
    \u0275\u0275template(10, DatePicker_div_3_ng_container_4_div_2_ChevronRightIcon_10_Template, 1, 0, "ChevronRightIcon", 7)(11, DatePicker_div_3_ng_container_4_div_2_span_11_Template, 2, 1, "span", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, DatePicker_div_3_ng_container_4_div_2_table_12_Template, 7, 3, "table", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r17 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(12, _c21, i_r17 === 0 ? "visible" : "hidden"));
    \u0275\u0275attribute("aria-label", ctx_r1.prevIconAriaLabel);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.previousIconTemplate && !ctx_r1._previousIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.previousIconTemplate || !ctx_r1._previousIconTemplate);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.currentView === "date");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentView !== "year");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentView === "year");
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(14, _c21, i_r17 === ctx_r1.months.length - 1 ? "visible" : "hidden"));
    \u0275\u0275attribute("aria-label", ctx_r1.nextIconAriaLabel);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.nextIconTemplate && !ctx_r1._nextIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.nextIconTemplate || !ctx_r1._nextIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentView === "date");
  }
}
function DatePicker_div_3_ng_container_4_div_3_span_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r21 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", m_r21, " ");
  }
}
function DatePicker_div_3_ng_container_4_div_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275listener("click", function DatePicker_div_3_ng_container_4_div_3_span_1_Template_span_click_0_listener($event) {
      const i_r20 = \u0275\u0275restoreView(_r19).index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onMonthSelect($event, i_r20));
    })("keydown", function DatePicker_div_3_ng_container_4_div_3_span_1_Template_span_keydown_0_listener($event) {
      const i_r20 = \u0275\u0275restoreView(_r19).index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onMonthCellKeydown($event, i_r20));
    });
    \u0275\u0275text(1);
    \u0275\u0275template(2, DatePicker_div_3_ng_container_4_div_3_span_1_div_2_Template, 2, 1, "div", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r21 = ctx.$implicit;
    const i_r20 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(3, _c24, ctx_r1.isMonthSelected(i_r20), ctx_r1.isMonthDisabled(i_r20)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", m_r21, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isMonthSelected(i_r20));
  }
}
function DatePicker_div_3_ng_container_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275template(1, DatePicker_div_3_ng_container_4_div_3_span_1_Template, 3, 6, "span", 55);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.monthPickerValues());
  }
}
function DatePicker_div_3_ng_container_4_div_4_span_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const y_r23 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", y_r23, " ");
  }
}
function DatePicker_div_3_ng_container_4_div_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275listener("click", function DatePicker_div_3_ng_container_4_div_4_span_1_Template_span_click_0_listener($event) {
      const y_r23 = \u0275\u0275restoreView(_r22).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onYearSelect($event, y_r23));
    })("keydown", function DatePicker_div_3_ng_container_4_div_4_span_1_Template_span_keydown_0_listener($event) {
      const y_r23 = \u0275\u0275restoreView(_r22).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onYearCellKeydown($event, y_r23));
    });
    \u0275\u0275text(1);
    \u0275\u0275template(2, DatePicker_div_3_ng_container_4_div_4_span_1_div_2_Template, 2, 1, "div", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const y_r23 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(3, _c25, ctx_r1.isYearSelected(y_r23), ctx_r1.isYearDisabled(y_r23)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", y_r23, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isYearSelected(y_r23));
  }
}
function DatePicker_div_3_ng_container_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275template(1, DatePicker_div_3_ng_container_4_div_4_span_1_Template, 3, 6, "span", 55);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.yearPickerValues());
  }
}
function DatePicker_div_3_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 24);
    \u0275\u0275template(2, DatePicker_div_3_ng_container_4_div_2_Template, 13, 16, "div", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, DatePicker_div_3_ng_container_4_div_3_Template, 2, 1, "div", 26)(4, DatePicker_div_3_ng_container_4_div_4_Template, 2, 1, "div", 27);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.months);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentView === "month");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentView === "year");
  }
}
function DatePicker_div_3_div_5_ChevronUpIcon_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ChevronUpIcon");
  }
}
function DatePicker_div_3_div_5_4_ng_template_0_Template(rf, ctx) {
}
function DatePicker_div_3_div_5_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DatePicker_div_3_div_5_4_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function DatePicker_div_3_div_5_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "0");
    \u0275\u0275elementContainerEnd();
  }
}
function DatePicker_div_3_div_5_ChevronDownIcon_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ChevronDownIcon");
  }
}
function DatePicker_div_3_div_5_10_ng_template_0_Template(rf, ctx) {
}
function DatePicker_div_3_div_5_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DatePicker_div_3_div_5_10_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function DatePicker_div_3_div_5_ChevronUpIcon_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ChevronUpIcon");
  }
}
function DatePicker_div_3_div_5_17_ng_template_0_Template(rf, ctx) {
}
function DatePicker_div_3_div_5_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DatePicker_div_3_div_5_17_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function DatePicker_div_3_div_5_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "0");
    \u0275\u0275elementContainerEnd();
  }
}
function DatePicker_div_3_div_5_ChevronDownIcon_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ChevronDownIcon");
  }
}
function DatePicker_div_3_div_5_ng_container_23_1_ng_template_0_Template(rf, ctx) {
}
function DatePicker_div_3_div_5_ng_container_23_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DatePicker_div_3_div_5_ng_container_23_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function DatePicker_div_3_div_5_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, DatePicker_div_3_div_5_ng_container_23_1_Template, 1, 0, null, 13);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.decrementIconTemplate || ctx_r1._decrementIconTemplate);
  }
}
function DatePicker_div_3_div_5_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.timeSeparator);
  }
}
function DatePicker_div_3_div_5_div_25_ChevronUpIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ChevronUpIcon");
  }
}
function DatePicker_div_3_div_5_div_25_3_ng_template_0_Template(rf, ctx) {
}
function DatePicker_div_3_div_5_div_25_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DatePicker_div_3_div_5_div_25_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function DatePicker_div_3_div_5_div_25_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "0");
    \u0275\u0275elementContainerEnd();
  }
}
function DatePicker_div_3_div_5_div_25_ChevronDownIcon_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ChevronDownIcon");
  }
}
function DatePicker_div_3_div_5_div_25_9_ng_template_0_Template(rf, ctx) {
}
function DatePicker_div_3_div_5_div_25_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DatePicker_div_3_div_5_div_25_9_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function DatePicker_div_3_div_5_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 66)(1, "p-button", 60);
    \u0275\u0275listener("keydown", function DatePicker_div_3_div_5_div_25_Template_p_button_keydown_1_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onContainerButtonKeydown($event));
    })("keydown.enter", function DatePicker_div_3_div_5_div_25_Template_p_button_keydown_enter_1_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.incrementSecond($event));
    })("keydown.space", function DatePicker_div_3_div_5_div_25_Template_p_button_keydown_space_1_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.incrementSecond($event));
    })("mousedown", function DatePicker_div_3_div_5_div_25_Template_p_button_mousedown_1_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onTimePickerElementMouseDown($event, 2, 1));
    })("mouseup", function DatePicker_div_3_div_5_div_25_Template_p_button_mouseup_1_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("keyup.enter", function DatePicker_div_3_div_5_div_25_Template_p_button_keyup_enter_1_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("keyup.space", function DatePicker_div_3_div_5_div_25_Template_p_button_keyup_space_1_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("mouseleave", function DatePicker_div_3_div_5_div_25_Template_p_button_mouseleave_1_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onTimePickerElementMouseLeave());
    });
    \u0275\u0275template(2, DatePicker_div_3_div_5_div_25_ChevronUpIcon_2_Template, 1, 0, "ChevronUpIcon", 7)(3, DatePicker_div_3_div_5_div_25_3_Template, 1, 0, null, 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275template(5, DatePicker_div_3_div_5_div_25_ng_container_5_Template, 2, 0, "ng-container", 7);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p-button", 60);
    \u0275\u0275listener("keydown", function DatePicker_div_3_div_5_div_25_Template_p_button_keydown_7_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onContainerButtonKeydown($event));
    })("keydown.enter", function DatePicker_div_3_div_5_div_25_Template_p_button_keydown_enter_7_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.decrementSecond($event));
    })("keydown.space", function DatePicker_div_3_div_5_div_25_Template_p_button_keydown_space_7_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.decrementSecond($event));
    })("mousedown", function DatePicker_div_3_div_5_div_25_Template_p_button_mousedown_7_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onTimePickerElementMouseDown($event, 2, -1));
    })("mouseup", function DatePicker_div_3_div_5_div_25_Template_p_button_mouseup_7_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("keyup.enter", function DatePicker_div_3_div_5_div_25_Template_p_button_keyup_enter_7_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("keyup.space", function DatePicker_div_3_div_5_div_25_Template_p_button_keyup_space_7_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("mouseleave", function DatePicker_div_3_div_5_div_25_Template_p_button_mouseleave_7_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onTimePickerElementMouseLeave());
    });
    \u0275\u0275template(8, DatePicker_div_3_div_5_div_25_ChevronDownIcon_8_Template, 1, 0, "ChevronDownIcon", 7)(9, DatePicker_div_3_div_5_div_25_9_Template, 1, 0, null, 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r1.getTranslation("nextSecond"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.incrementIconTemplate && !ctx_r1._incrementIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.incrementIconTemplate || ctx_r1._incrementIconTemplate);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.currentSecond < 10);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.currentSecond);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r1.getTranslation("prevSecond"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.decrementIconTemplate && !ctx_r1._decrementIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.decrementIconTemplate || ctx_r1._decrementIconTemplate);
  }
}
function DatePicker_div_3_div_5_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.timeSeparator);
  }
}
function DatePicker_div_3_div_5_div_27_ChevronUpIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ChevronUpIcon");
  }
}
function DatePicker_div_3_div_5_div_27_3_ng_template_0_Template(rf, ctx) {
}
function DatePicker_div_3_div_5_div_27_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DatePicker_div_3_div_5_div_27_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function DatePicker_div_3_div_5_div_27_ChevronDownIcon_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ChevronDownIcon");
  }
}
function DatePicker_div_3_div_5_div_27_8_ng_template_0_Template(rf, ctx) {
}
function DatePicker_div_3_div_5_div_27_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DatePicker_div_3_div_5_div_27_8_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function DatePicker_div_3_div_5_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 67)(1, "p-button", 68);
    \u0275\u0275listener("keydown", function DatePicker_div_3_div_5_div_27_Template_p_button_keydown_1_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onContainerButtonKeydown($event));
    })("onClick", function DatePicker_div_3_div_5_div_27_Template_p_button_onClick_1_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleAMPM($event));
    })("keydown.enter", function DatePicker_div_3_div_5_div_27_Template_p_button_keydown_enter_1_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleAMPM($event));
    });
    \u0275\u0275template(2, DatePicker_div_3_div_5_div_27_ChevronUpIcon_2_Template, 1, 0, "ChevronUpIcon", 7)(3, DatePicker_div_3_div_5_div_27_3_Template, 1, 0, null, 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p-button", 69);
    \u0275\u0275listener("keydown", function DatePicker_div_3_div_5_div_27_Template_p_button_keydown_6_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onContainerButtonKeydown($event));
    })("click", function DatePicker_div_3_div_5_div_27_Template_p_button_click_6_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleAMPM($event));
    })("keydown.enter", function DatePicker_div_3_div_5_div_27_Template_p_button_keydown_enter_6_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleAMPM($event));
    });
    \u0275\u0275template(7, DatePicker_div_3_div_5_div_27_ChevronDownIcon_7_Template, 1, 0, "ChevronDownIcon", 7)(8, DatePicker_div_3_div_5_div_27_8_Template, 1, 0, null, 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r1.getTranslation("am"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.incrementIconTemplate && !ctx_r1._incrementIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.incrementIconTemplate || ctx_r1._incrementIconTemplate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.pm ? "PM" : "AM");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r1.getTranslation("pm"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.decrementIconTemplate && !ctx_r1._decrementIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.decrementIconTemplate || ctx_r1._decrementIconTemplate);
  }
}
function DatePicker_div_3_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58)(1, "div", 59)(2, "p-button", 60);
    \u0275\u0275listener("keydown", function DatePicker_div_3_div_5_Template_p_button_keydown_2_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onContainerButtonKeydown($event));
    })("keydown.enter", function DatePicker_div_3_div_5_Template_p_button_keydown_enter_2_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.incrementHour($event));
    })("keydown.space", function DatePicker_div_3_div_5_Template_p_button_keydown_space_2_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.incrementHour($event));
    })("mousedown", function DatePicker_div_3_div_5_Template_p_button_mousedown_2_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTimePickerElementMouseDown($event, 0, 1));
    })("mouseup", function DatePicker_div_3_div_5_Template_p_button_mouseup_2_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("keyup.enter", function DatePicker_div_3_div_5_Template_p_button_keyup_enter_2_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("keyup.space", function DatePicker_div_3_div_5_Template_p_button_keyup_space_2_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("mouseleave", function DatePicker_div_3_div_5_Template_p_button_mouseleave_2_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTimePickerElementMouseLeave());
    });
    \u0275\u0275template(3, DatePicker_div_3_div_5_ChevronUpIcon_3_Template, 1, 0, "ChevronUpIcon", 7)(4, DatePicker_div_3_div_5_4_Template, 1, 0, null, 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275template(6, DatePicker_div_3_div_5_ng_container_6_Template, 2, 0, "ng-container", 7);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p-button", 60);
    \u0275\u0275listener("keydown", function DatePicker_div_3_div_5_Template_p_button_keydown_8_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onContainerButtonKeydown($event));
    })("keydown.enter", function DatePicker_div_3_div_5_Template_p_button_keydown_enter_8_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.decrementHour($event));
    })("keydown.space", function DatePicker_div_3_div_5_Template_p_button_keydown_space_8_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.decrementHour($event));
    })("mousedown", function DatePicker_div_3_div_5_Template_p_button_mousedown_8_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTimePickerElementMouseDown($event, 0, -1));
    })("mouseup", function DatePicker_div_3_div_5_Template_p_button_mouseup_8_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("keyup.enter", function DatePicker_div_3_div_5_Template_p_button_keyup_enter_8_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("keyup.space", function DatePicker_div_3_div_5_Template_p_button_keyup_space_8_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("mouseleave", function DatePicker_div_3_div_5_Template_p_button_mouseleave_8_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTimePickerElementMouseLeave());
    });
    \u0275\u0275template(9, DatePicker_div_3_div_5_ChevronDownIcon_9_Template, 1, 0, "ChevronDownIcon", 7)(10, DatePicker_div_3_div_5_10_Template, 1, 0, null, 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 61)(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 62)(15, "p-button", 60);
    \u0275\u0275listener("keydown", function DatePicker_div_3_div_5_Template_p_button_keydown_15_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onContainerButtonKeydown($event));
    })("keydown.enter", function DatePicker_div_3_div_5_Template_p_button_keydown_enter_15_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.incrementMinute($event));
    })("keydown.space", function DatePicker_div_3_div_5_Template_p_button_keydown_space_15_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.incrementMinute($event));
    })("mousedown", function DatePicker_div_3_div_5_Template_p_button_mousedown_15_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTimePickerElementMouseDown($event, 1, 1));
    })("mouseup", function DatePicker_div_3_div_5_Template_p_button_mouseup_15_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("keyup.enter", function DatePicker_div_3_div_5_Template_p_button_keyup_enter_15_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("keyup.space", function DatePicker_div_3_div_5_Template_p_button_keyup_space_15_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("mouseleave", function DatePicker_div_3_div_5_Template_p_button_mouseleave_15_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTimePickerElementMouseLeave());
    });
    \u0275\u0275template(16, DatePicker_div_3_div_5_ChevronUpIcon_16_Template, 1, 0, "ChevronUpIcon", 7)(17, DatePicker_div_3_div_5_17_Template, 1, 0, null, 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275template(19, DatePicker_div_3_div_5_ng_container_19_Template, 2, 0, "ng-container", 7);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p-button", 60);
    \u0275\u0275listener("keydown", function DatePicker_div_3_div_5_Template_p_button_keydown_21_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onContainerButtonKeydown($event));
    })("keydown.enter", function DatePicker_div_3_div_5_Template_p_button_keydown_enter_21_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.decrementMinute($event));
    })("keydown.space", function DatePicker_div_3_div_5_Template_p_button_keydown_space_21_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.decrementMinute($event));
    })("mousedown", function DatePicker_div_3_div_5_Template_p_button_mousedown_21_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTimePickerElementMouseDown($event, 1, -1));
    })("mouseup", function DatePicker_div_3_div_5_Template_p_button_mouseup_21_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("keyup.enter", function DatePicker_div_3_div_5_Template_p_button_keyup_enter_21_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("keyup.space", function DatePicker_div_3_div_5_Template_p_button_keyup_space_21_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("mouseleave", function DatePicker_div_3_div_5_Template_p_button_mouseleave_21_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTimePickerElementMouseLeave());
    });
    \u0275\u0275template(22, DatePicker_div_3_div_5_ChevronDownIcon_22_Template, 1, 0, "ChevronDownIcon", 7)(23, DatePicker_div_3_div_5_ng_container_23_Template, 2, 1, "ng-container", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(24, DatePicker_div_3_div_5_div_24_Template, 3, 1, "div", 63)(25, DatePicker_div_3_div_5_div_25_Template, 10, 8, "div", 64)(26, DatePicker_div_3_div_5_div_26_Template, 3, 1, "div", 63)(27, DatePicker_div_3_div_5_div_27_Template, 9, 7, "div", 65);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", ctx_r1.getTranslation("nextHour"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.incrementIconTemplate && !ctx_r1._incrementIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.incrementIconTemplate || ctx_r1._incrementIconTemplate);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.currentHour < 10);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.currentHour);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r1.getTranslation("prevHour"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.decrementIconTemplate && !ctx_r1._decrementIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.decrementIconTemplate || ctx_r1._decrementIconTemplate);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.timeSeparator);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", ctx_r1.getTranslation("nextMinute"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.incrementIconTemplate && !ctx_r1._incrementIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.incrementIconTemplate || ctx_r1._incrementIconTemplate);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.currentMinute < 10);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.currentMinute);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r1.getTranslation("prevMinute"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.decrementIconTemplate && !ctx_r1._decrementIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.decrementIconTemplate || ctx_r1._decrementIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showSeconds);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showSeconds);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hourFormat == "12");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hourFormat == "12");
  }
}
function DatePicker_div_3_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 70)(1, "p-button", 71);
    \u0275\u0275listener("keydown", function DatePicker_div_3_div_6_Template_p_button_keydown_1_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onContainerButtonKeydown($event));
    })("onClick", function DatePicker_div_3_div_6_Template_p_button_onClick_1_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTodayButtonClick($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-button", 72);
    \u0275\u0275listener("keydown", function DatePicker_div_3_div_6_Template_p_button_keydown_2_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onContainerButtonKeydown($event));
    })("onClick", function DatePicker_div_3_div_6_Template_p_button_onClick_2_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onClearButtonClick($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("label", ctx_r1.getTranslation("today"))("ngClass", ctx_r1.todayButtonStyleClass);
    \u0275\u0275advance();
    \u0275\u0275property("label", ctx_r1.getTranslation("clear"))("ngClass", ctx_r1.clearButtonStyleClass);
  }
}
function DatePicker_div_3_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DatePicker_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21, 2);
    \u0275\u0275listener("@overlayAnimation.start", function DatePicker_div_3_Template_div_animation_overlayAnimation_start_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onOverlayAnimationStart($event));
    })("@overlayAnimation.done", function DatePicker_div_3_Template_div_animation_overlayAnimation_done_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onOverlayAnimationDone($event));
    })("click", function DatePicker_div_3_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onOverlayClick($event));
    });
    \u0275\u0275projection(2);
    \u0275\u0275template(3, DatePicker_div_3_ng_container_3_Template, 1, 0, "ng-container", 13)(4, DatePicker_div_3_ng_container_4_Template, 5, 3, "ng-container", 7)(5, DatePicker_div_3_div_5_Template, 28, 21, "div", 22)(6, DatePicker_div_3_div_6_Template, 3, 4, "div", 23);
    \u0275\u0275projection(7, 1);
    \u0275\u0275template(8, DatePicker_div_3_ng_container_8_Template, 1, 0, "ng-container", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.panelStyleClass);
    \u0275\u0275property("ngStyle", ctx_r1.panelStyle)("ngClass", ctx_r1.panelClass)("@overlayAnimation", \u0275\u0275pureFunction1(18, _c20, \u0275\u0275pureFunction2(15, _c19, ctx_r1.showTransitionOptions, ctx_r1.hideTransitionOptions)))("@.disabled", ctx_r1.inline === true);
    \u0275\u0275attribute("id", ctx_r1.panelId)("aria-label", ctx_r1.getTranslation("chooseDate"))("role", ctx_r1.inline ? null : "dialog")("aria-modal", ctx_r1.inline ? null : "true");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.headerTemplate || ctx_r1._headerTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.timeOnly);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.showTime || ctx_r1.timeOnly) && ctx_r1.currentView === "date");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showButtonBar);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.footerTemplate || ctx_r1._footerTemplate);
  }
}
var DATEPICKER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DatePicker),
  multi: true
};
var DatePicker = class _DatePicker extends BaseComponent {
  zone;
  overlayService;
  iconDisplay = "button";
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
   * Inline style of the input field.
   * @group Props
   */
  inputStyle;
  /**
   * Identifier of the focus input to match a label defined for the component.
   * @group Props
   */
  inputId;
  /**
   * Name of the input element.
   * @group Props
   */
  name;
  /**
   * Style class of the input field.
   * @group Props
   */
  inputStyleClass;
  /**
   * Placeholder text for the input.
   * @group Props
   */
  placeholder;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Defines a string that labels the input for accessibility.
   * @group Props
   */
  ariaLabel;
  /**
   * Defines a string that labels the icon button for accessibility.
   * @group Props
   */
  iconAriaLabel;
  /**
   * When specified, disables the component.
   * @group Props
   */
  disabled;
  /**
   * Format of the date which can also be defined at locale settings.
   * @group Props
   */
  dateFormat;
  /**
   * Separator for multiple selection mode.
   * @group Props
   */
  multipleSeparator = ",";
  /**
   * Separator for joining start and end dates on range selection mode.
   * @group Props
   */
  rangeSeparator = "-";
  /**
   * When enabled, displays the datepicker as inline. Default is false for popup mode.
   * @group Props
   */
  inline = false;
  /**
   * Whether to display dates in other months (non-selectable) at the start or end of the current month. To make these days selectable use the selectOtherMonths option.
   * @group Props
   */
  showOtherMonths = true;
  /**
   * Whether days in other months shown before or after the current month are selectable. This only applies if the showOtherMonths option is set to true.
   * @group Props
   */
  selectOtherMonths;
  /**
   * When enabled, displays a button with icon next to input.
   * @group Props
   */
  showIcon;
  /**
   * Whether the component should span the full width of its parent.
   * @group Props
   */
  fluid;
  /**
   * Icon of the datepicker button.
   * @group Props
   */
  icon;
  /**
   * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having#mydiv as variable name).
   * @group Props
   */
  appendTo;
  /**
   * When specified, prevents entering the date manually with keyboard.
   * @group Props
   */
  readonlyInput;
  /**
   * The cutoff year for determining the century for a date.
   * @group Props
   */
  shortYearCutoff = "+10";
  /**
   * Whether the month should be rendered as a dropdown instead of text.
   * @group Props
   * @deprecated Navigator is always on.
   */
  monthNavigator;
  /**
   * Whether the year should be rendered as a dropdown instead of text.
   * @group Props
   * @deprecated  Navigator is always on.
   */
  yearNavigator;
  /**
   * Specifies 12 or 24 hour format.
   * @group Props
   */
  hourFormat = "24";
  /**
   * Whether to display timepicker only.
   * @group Props
   */
  timeOnly;
  /**
   * Hours to change per step.
   * @group Props
   */
  stepHour = 1;
  /**
   * Minutes to change per step.
   * @group Props
   */
  stepMinute = 1;
  /**
   * Seconds to change per step.
   * @group Props
   */
  stepSecond = 1;
  /**
   * Whether to show the seconds in time picker.
   * @group Props
   */
  showSeconds = false;
  /**
   * When present, it specifies that an input field must be filled out before submitting the form.
   * @group Props
   */
  required;
  /**
   * When disabled, datepicker will not be visible with input focus.
   * @group Props
   */
  showOnFocus = true;
  /**
   * When enabled, datepicker will show week numbers.
   * @group Props
   */
  showWeek = false;
  /**
   * When enabled, datepicker will start week numbers from first day of the year.
   * @group Props
   */
  startWeekFromFirstDayOfYear = false;
  /**
   * When enabled, a clear icon is displayed to clear the value.
   * @group Props
   */
  showClear = false;
  /**
   * Type of the value to write back to ngModel, default is date and alternative is string.
   * @group Props
   */
  dataType = "date";
  /**
   * Defines the quantity of the selection, valid values are "single", "multiple" and "range".
   * @group Props
   */
  selectionMode = "single";
  /**
   * Maximum number of selectable dates in multiple mode.
   * @group Props
   */
  maxDateCount;
  /**
   * Whether to display today and clear buttons at the footer
   * @group Props
   */
  showButtonBar;
  /**
   * Style class of the today button.
   * @group Props
   */
  todayButtonStyleClass;
  /**
   * Style class of the clear button.
   * @group Props
   */
  clearButtonStyleClass;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
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
   * Style class of the datetimepicker container element.
   * @group Props
   */
  panelStyleClass;
  /**
   * Inline style of the datetimepicker container element.
   * @group Props
   */
  panelStyle;
  /**
   * Keep invalid value when input blur.
   * @group Props
   */
  keepInvalid = false;
  /**
   * Whether to hide the overlay on date selection.
   * @group Props
   */
  hideOnDateTimeSelect = true;
  /**
   * When enabled, datepicker overlay is displayed as optimized for touch devices.
   * @group Props
   */
  touchUI;
  /**
   * Separator of time selector.
   * @group Props
   */
  timeSeparator = ":";
  /**
   * When enabled, can only focus on elements inside the datepicker.
   * @group Props
   */
  focusTrap = true;
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
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex;
  /**
   * Specifies the input variant of the component.
   * @group Props
   */
  variant;
  /**
   * Defines the size of the component.
   * @group Props
   */
  size;
  /**
   * The minimum selectable date.
   * @group Props
   */
  get minDate() {
    return this._minDate;
  }
  set minDate(date) {
    this._minDate = date;
    if (this.currentMonth != void 0 && this.currentMonth != null && this.currentYear) {
      this.createMonths(this.currentMonth, this.currentYear);
    }
  }
  /**
   * The maximum selectable date.
   * @group Props
   */
  get maxDate() {
    return this._maxDate;
  }
  set maxDate(date) {
    this._maxDate = date;
    if (this.currentMonth != void 0 && this.currentMonth != null && this.currentYear) {
      this.createMonths(this.currentMonth, this.currentYear);
    }
  }
  /**
   * Array with dates that should be disabled (not selectable).
   * @group Props
   */
  get disabledDates() {
    return this._disabledDates;
  }
  set disabledDates(disabledDates) {
    this._disabledDates = disabledDates;
    if (this.currentMonth != void 0 && this.currentMonth != null && this.currentYear) {
      this.createMonths(this.currentMonth, this.currentYear);
    }
  }
  /**
   * Array with weekday numbers that should be disabled (not selectable).
   * @group Props
   */
  get disabledDays() {
    return this._disabledDays;
  }
  set disabledDays(disabledDays) {
    this._disabledDays = disabledDays;
    if (this.currentMonth != void 0 && this.currentMonth != null && this.currentYear) {
      this.createMonths(this.currentMonth, this.currentYear);
    }
  }
  /**
   * The range of years displayed in the year drop-down in (nnnn:nnnn) format such as (2000:2020).
   * @group Props
   * @deprecated Years are based on decades by default.
   */
  get yearRange() {
    return this._yearRange;
  }
  set yearRange(yearRange) {
    this._yearRange = yearRange;
    if (yearRange) {
      const years = yearRange.split(":");
      const yearStart = parseInt(years[0]);
      const yearEnd = parseInt(years[1]);
      this.populateYearOptions(yearStart, yearEnd);
    }
  }
  /**
   * Whether to display timepicker.
   * @group Props
   */
  get showTime() {
    return this._showTime;
  }
  set showTime(showTime) {
    this._showTime = showTime;
    if (this.currentHour === void 0) {
      this.initTime(this.value || /* @__PURE__ */ new Date());
    }
    this.updateInputfield();
  }
  /**
   * An array of options for responsive design.
   * @group Props
   */
  get responsiveOptions() {
    return this._responsiveOptions;
  }
  set responsiveOptions(responsiveOptions) {
    this._responsiveOptions = responsiveOptions;
    this.destroyResponsiveStyleElement();
    this.createResponsiveStyle();
  }
  /**
   * Number of months to display.
   * @group Props
   */
  get numberOfMonths() {
    return this._numberOfMonths;
  }
  set numberOfMonths(numberOfMonths) {
    this._numberOfMonths = numberOfMonths;
    this.destroyResponsiveStyleElement();
    this.createResponsiveStyle();
  }
  /**
   * Defines the first of the week for various date calculations.
   * @group Props
   */
  get firstDayOfWeek() {
    return this._firstDayOfWeek;
  }
  set firstDayOfWeek(firstDayOfWeek) {
    this._firstDayOfWeek = firstDayOfWeek;
    this.createWeekDays();
  }
  /**
   * Option to set datepicker locale.
   * @group Props
   * @deprecated Locale property has no effect, use new i18n API instead.
   */
  set locale(newLocale) {
    console.log("Locale property has no effect, use new i18n API instead.");
  }
  /**
   * Type of view to display, valid values are "date" for datepicker and "month" for month picker.
   * @group Props
   */
  get view() {
    return this._view;
  }
  set view(view) {
    this._view = view;
    this.currentView = this._view;
  }
  /**
   * Set the date to highlight on first opening if the field is blank.
   * @group Props
   */
  get defaultDate() {
    return this._defaultDate;
  }
  set defaultDate(defaultDate) {
    this._defaultDate = defaultDate;
    if (this.initialized) {
      const date = defaultDate || /* @__PURE__ */ new Date();
      this.currentMonth = date.getMonth();
      this.currentYear = date.getFullYear();
      this.initTime(date);
      this.createMonths(this.currentMonth, this.currentYear);
    }
  }
  /**
   * Callback to invoke on focus of input field.
   * @param {Event} event - browser event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to invoke on blur of input field.
   * @param {Event} event - browser event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  /**
   * Callback to invoke when date panel closed.
   * @param {Event} event - Mouse event
   * @group Emits
   */
  onClose = new EventEmitter();
  /**
   * Callback to invoke on date select.
   * @param {Date} date - date value.
   * @group Emits
   */
  onSelect = new EventEmitter();
  /**
   * Callback to invoke when input field cleared.
   * @group Emits
   */
  onClear = new EventEmitter();
  /**
   * Callback to invoke when input field is being typed.
   * @param {Event} event - browser event
   * @group Emits
   */
  onInput = new EventEmitter();
  /**
   * Callback to invoke when today button is clicked.
   * @param {Date} date - today as a date instance.
   * @group Emits
   */
  onTodayClick = new EventEmitter();
  /**
   * Callback to invoke when clear button is clicked.
   * @param {Event} event - browser event.
   * @group Emits
   */
  onClearClick = new EventEmitter();
  /**
   * Callback to invoke when a month is changed using the navigators.
   * @param {DatePickerMonthChangeEvent} event - custom month change event.
   * @group Emits
   */
  onMonthChange = new EventEmitter();
  /**
   * Callback to invoke when a year is changed using the navigators.
   * @param {DatePickerYearChangeEvent} event - custom year change event.
   * @group Emits
   */
  onYearChange = new EventEmitter();
  /**
   * Callback to invoke when clicked outside of the date panel.
   * @group Emits
   */
  onClickOutside = new EventEmitter();
  /**
   * Callback to invoke when datepicker panel is shown.
   * @group Emits
   */
  onShow = new EventEmitter();
  containerViewChild;
  inputfieldViewChild;
  set content(content) {
    this.contentViewChild = content;
    if (this.contentViewChild) {
      if (this.isMonthNavigate) {
        Promise.resolve(null).then(() => this.updateFocus());
        this.isMonthNavigate = false;
      } else {
        if (!this.focus && !this.inline) {
          this.initFocusableCell();
        }
      }
    }
  }
  _componentStyle = inject(DatePickerStyle);
  contentViewChild;
  value;
  dates;
  months;
  weekDays;
  currentMonth;
  currentYear;
  currentHour;
  currentMinute;
  currentSecond;
  pm;
  mask;
  maskClickListener;
  overlay;
  responsiveStyleElement;
  overlayVisible;
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  calendarElement;
  timePickerTimer;
  documentClickListener;
  animationEndListener;
  ticksTo1970;
  yearOptions;
  focus;
  isKeydown;
  filled;
  inputFieldValue = null;
  _minDate;
  _maxDate;
  _showTime;
  _yearRange;
  preventDocumentListener;
  dayClass(date) {
    return this._componentStyle.classes.day({
      instance: this,
      date
    });
  }
  /**
   * Custom template for date cells.
   * @group Templates
   */
  dateTemplate;
  /**
   * Custom template for header section.
   * @group Templates
   */
  headerTemplate;
  /**
   * Custom template for footer section.
   * @group Templates
   */
  footerTemplate;
  /**
   * Custom template for disabled date cells.
   * @group Templates
   */
  disabledDateTemplate;
  /**
   * Custom template for decade view.
   * @group Templates
   */
  decadeTemplate;
  /**
   * Custom template for previous month icon.
   * @group Templates
   */
  previousIconTemplate;
  /**
   * Custom template for next month icon.
   * @group Templates
   */
  nextIconTemplate;
  /**
   * Custom template for trigger icon.
   * @group Templates
   */
  triggerIconTemplate;
  /**
   * Custom template for clear icon.
   * @group Templates
   */
  clearIconTemplate;
  /**
   * Custom template for decrement icon.
   * @group Templates
   */
  decrementIconTemplate;
  /**
   * Custom template for increment icon.
   * @group Templates
   */
  incrementIconTemplate;
  /**
   * Custom template for input icon.
   * @group Templates
   */
  inputIconTemplate;
  _dateTemplate;
  _headerTemplate;
  _footerTemplate;
  _disabledDateTemplate;
  _decadeTemplate;
  _previousIconTemplate;
  _nextIconTemplate;
  _triggerIconTemplate;
  _clearIconTemplate;
  _decrementIconTemplate;
  _incrementIconTemplate;
  _inputIconTemplate;
  _disabledDates;
  _disabledDays;
  selectElement;
  todayElement;
  focusElement;
  scrollHandler;
  documentResizeListener;
  navigationState = null;
  isMonthNavigate;
  initialized;
  translationSubscription;
  _locale;
  _responsiveOptions;
  currentView;
  attributeSelector;
  panelId;
  _numberOfMonths = 1;
  _firstDayOfWeek;
  _view = "date";
  preventFocus;
  _defaultDate;
  _focusKey = null;
  window;
  get locale() {
    return this._locale;
  }
  get iconButtonAriaLabel() {
    return this.iconAriaLabel ? this.iconAriaLabel : this.getTranslation("chooseDate");
  }
  get prevIconAriaLabel() {
    return this.currentView === "year" ? this.getTranslation("prevDecade") : this.currentView === "month" ? this.getTranslation("prevYear") : this.getTranslation("prevMonth");
  }
  get nextIconAriaLabel() {
    return this.currentView === "year" ? this.getTranslation("nextDecade") : this.currentView === "month" ? this.getTranslation("nextYear") : this.getTranslation("nextMonth");
  }
  get rootClass() {
    return this._componentStyle.classes.root({
      instance: this
    });
  }
  get panelClass() {
    return this._componentStyle.classes.panel({
      instance: this
    });
  }
  get hasFluid() {
    const nativeElement = this.el.nativeElement;
    const fluidComponent = nativeElement.closest("p-fluid");
    return this.fluid || !!fluidComponent;
  }
  constructor(zone, overlayService) {
    super();
    this.zone = zone;
    this.overlayService = overlayService;
    this.window = this.document.defaultView;
  }
  ngOnInit() {
    super.ngOnInit();
    this.attributeSelector = uuid("pn_id_");
    this.panelId = this.attributeSelector + "_panel";
    const date = this.defaultDate || /* @__PURE__ */ new Date();
    this.createResponsiveStyle();
    this.currentMonth = date.getMonth();
    this.currentYear = date.getFullYear();
    this.yearOptions = [];
    this.currentView = this.view;
    if (this.view === "date") {
      this.createWeekDays();
      this.initTime(date);
      this.createMonths(this.currentMonth, this.currentYear);
      this.ticksTo1970 = ((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 24 * 60 * 60 * 1e7;
    }
    this.translationSubscription = this.config.translationObserver.subscribe(() => {
      this.createWeekDays();
      this.cd.markForCheck();
    });
    this.initialized = true;
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
    if (this.inline) {
      this.contentViewChild && this.contentViewChild.nativeElement.setAttribute(this.attributeSelector, "");
      if (!this.disabled && !this.inline) {
        this.initFocusableCell();
        if (this.numberOfMonths === 1) {
          if (this.contentViewChild && this.contentViewChild.nativeElement) {
            this.contentViewChild.nativeElement.style.width = getOuterWidth(this.containerViewChild?.nativeElement) + "px";
          }
        }
      }
    }
  }
  templates;
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "date":
          this._dateTemplate = item.template;
          break;
        case "decade":
          this._decadeTemplate = item.template;
          break;
        case "disabledDate":
          this._disabledDateTemplate = item.template;
          break;
        case "header":
          this._headerTemplate = item.template;
          break;
        case "inputicon":
          this._inputIconTemplate = item.template;
          break;
        case "previousicon":
          this._previousIconTemplate = item.template;
          break;
        case "nexticon":
          this._nextIconTemplate = item.template;
          break;
        case "triggericon":
          this._triggerIconTemplate = item.template;
          break;
        case "clearicon":
          this._clearIconTemplate = item.template;
          break;
        case "decrementicon":
          this._decrementIconTemplate = item.template;
          break;
        case "incrementicon":
          this._incrementIconTemplate = item.template;
          break;
        case "footer":
          this._footerTemplate = item.template;
          break;
        default:
          this._dateTemplate = item.template;
          break;
      }
    });
  }
  getTranslation(option) {
    return this.config.getTranslation(option);
  }
  populateYearOptions(start, end) {
    this.yearOptions = [];
    for (let i = start; i <= end; i++) {
      this.yearOptions.push(i);
    }
  }
  createWeekDays() {
    this.weekDays = [];
    let dayIndex = this.getFirstDateOfWeek();
    let dayLabels = this.getTranslation(TranslationKeys.DAY_NAMES_MIN);
    for (let i = 0; i < 7; i++) {
      this.weekDays.push(dayLabels[dayIndex]);
      dayIndex = dayIndex == 6 ? 0 : ++dayIndex;
    }
  }
  monthPickerValues() {
    let monthPickerValues = [];
    for (let i = 0; i <= 11; i++) {
      monthPickerValues.push(this.config.getTranslation("monthNamesShort")[i]);
    }
    return monthPickerValues;
  }
  yearPickerValues() {
    let yearPickerValues = [];
    let base = this.currentYear - this.currentYear % 10;
    for (let i = 0; i < 10; i++) {
      yearPickerValues.push(base + i);
    }
    return yearPickerValues;
  }
  createMonths(month, year) {
    this.months = this.months = [];
    for (let i = 0; i < this.numberOfMonths; i++) {
      let m = month + i;
      let y = year;
      if (m > 11) {
        m = m % 11 - 1;
        y = year + 1;
      }
      this.months.push(this.createMonth(m, y));
    }
  }
  getWeekNumber(date) {
    let checkDate = new Date(date.getTime());
    if (this.startWeekFromFirstDayOfYear) {
      let firstDayOfWeek = +this.getFirstDateOfWeek();
      checkDate.setDate(checkDate.getDate() + 6 + firstDayOfWeek - checkDate.getDay());
    } else {
      checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
    }
    let time = checkDate.getTime();
    checkDate.setMonth(0);
    checkDate.setDate(1);
    return Math.floor(Math.round((time - checkDate.getTime()) / 864e5) / 7) + 1;
  }
  createMonth(month, year) {
    let dates = [];
    let firstDay = this.getFirstDayOfMonthIndex(month, year);
    let daysLength = this.getDaysCountInMonth(month, year);
    let prevMonthDaysLength = this.getDaysCountInPrevMonth(month, year);
    let dayNo = 1;
    let today = /* @__PURE__ */ new Date();
    let weekNumbers = [];
    let monthRows = Math.ceil((daysLength + firstDay) / 7);
    for (let i = 0; i < monthRows; i++) {
      let week = [];
      if (i == 0) {
        for (let j = prevMonthDaysLength - firstDay + 1; j <= prevMonthDaysLength; j++) {
          let prev = this.getPreviousMonthAndYear(month, year);
          week.push({
            day: j,
            month: prev.month,
            year: prev.year,
            otherMonth: true,
            today: this.isToday(today, j, prev.month, prev.year),
            selectable: this.isSelectable(j, prev.month, prev.year, true)
          });
        }
        let remainingDaysLength = 7 - week.length;
        for (let j = 0; j < remainingDaysLength; j++) {
          week.push({
            day: dayNo,
            month,
            year,
            today: this.isToday(today, dayNo, month, year),
            selectable: this.isSelectable(dayNo, month, year, false)
          });
          dayNo++;
        }
      } else {
        for (let j = 0; j < 7; j++) {
          if (dayNo > daysLength) {
            let next = this.getNextMonthAndYear(month, year);
            week.push({
              day: dayNo - daysLength,
              month: next.month,
              year: next.year,
              otherMonth: true,
              today: this.isToday(today, dayNo - daysLength, next.month, next.year),
              selectable: this.isSelectable(dayNo - daysLength, next.month, next.year, true)
            });
          } else {
            week.push({
              day: dayNo,
              month,
              year,
              today: this.isToday(today, dayNo, month, year),
              selectable: this.isSelectable(dayNo, month, year, false)
            });
          }
          dayNo++;
        }
      }
      if (this.showWeek) {
        weekNumbers.push(this.getWeekNumber(new Date(week[0].year, week[0].month, week[0].day)));
      }
      dates.push(week);
    }
    return {
      month,
      year,
      dates,
      weekNumbers
    };
  }
  initTime(date) {
    this.pm = date.getHours() > 11;
    if (this.showTime) {
      this.currentMinute = date.getMinutes();
      this.currentSecond = date.getSeconds();
      this.setCurrentHourPM(date.getHours());
    } else if (this.timeOnly) {
      this.currentMinute = 0;
      this.currentHour = 0;
      this.currentSecond = 0;
    }
  }
  navBackward(event2) {
    if (this.disabled) {
      event2.preventDefault();
      return;
    }
    this.isMonthNavigate = true;
    if (this.currentView === "month") {
      this.decrementYear();
      setTimeout(() => {
        this.updateFocus();
      }, 1);
    } else if (this.currentView === "year") {
      this.decrementDecade();
      setTimeout(() => {
        this.updateFocus();
      }, 1);
    } else {
      if (this.currentMonth === 0) {
        this.currentMonth = 11;
        this.decrementYear();
      } else {
        this.currentMonth--;
      }
      this.onMonthChange.emit({
        month: this.currentMonth + 1,
        year: this.currentYear
      });
      this.createMonths(this.currentMonth, this.currentYear);
    }
  }
  navForward(event2) {
    if (this.disabled) {
      event2.preventDefault();
      return;
    }
    this.isMonthNavigate = true;
    if (this.currentView === "month") {
      this.incrementYear();
      setTimeout(() => {
        this.updateFocus();
      }, 1);
    } else if (this.currentView === "year") {
      this.incrementDecade();
      setTimeout(() => {
        this.updateFocus();
      }, 1);
    } else {
      if (this.currentMonth === 11) {
        this.currentMonth = 0;
        this.incrementYear();
      } else {
        this.currentMonth++;
      }
      this.onMonthChange.emit({
        month: this.currentMonth + 1,
        year: this.currentYear
      });
      this.createMonths(this.currentMonth, this.currentYear);
    }
  }
  decrementYear() {
    this.currentYear--;
    let _yearOptions = this.yearOptions;
    if (this.yearNavigator && this.currentYear < _yearOptions[0]) {
      let difference = _yearOptions[_yearOptions.length - 1] - _yearOptions[0];
      this.populateYearOptions(_yearOptions[0] - difference, _yearOptions[_yearOptions.length - 1] - difference);
    }
  }
  decrementDecade() {
    this.currentYear = this.currentYear - 10;
  }
  incrementDecade() {
    this.currentYear = this.currentYear + 10;
  }
  incrementYear() {
    this.currentYear++;
    let _yearOptions = this.yearOptions;
    if (this.yearNavigator && this.currentYear > _yearOptions[_yearOptions.length - 1]) {
      let difference = _yearOptions[_yearOptions.length - 1] - _yearOptions[0];
      this.populateYearOptions(_yearOptions[0] + difference, _yearOptions[_yearOptions.length - 1] + difference);
    }
  }
  switchToMonthView(event2) {
    this.setCurrentView("month");
    event2.preventDefault();
  }
  switchToYearView(event2) {
    this.setCurrentView("year");
    event2.preventDefault();
  }
  onDateSelect(event2, dateMeta) {
    if (this.disabled || !dateMeta.selectable) {
      event2.preventDefault();
      return;
    }
    if (this.isMultipleSelection() && this.isSelected(dateMeta)) {
      this.value = this.value.filter((date, i) => {
        return !this.isDateEquals(date, dateMeta);
      });
      if (this.value.length === 0) {
        this.value = null;
      }
      this.updateModel(this.value);
    } else {
      if (this.shouldSelectDate(dateMeta)) {
        this.selectDate(dateMeta);
      }
    }
    if (this.isSingleSelection() && this.hideOnDateTimeSelect || this.isRangeSelection() && this.value[1]) {
      setTimeout(() => {
        event2.preventDefault();
        this.hideOverlay();
        if (this.mask) {
          this.disableModality();
        }
        this.cd.markForCheck();
      }, 150);
    }
    this.updateInputfield();
    event2.preventDefault();
  }
  shouldSelectDate(dateMeta) {
    if (this.isMultipleSelection()) return this.maxDateCount != null ? this.maxDateCount > (this.value ? this.value.length : 0) : true;
    else return true;
  }
  onMonthSelect(event2, index) {
    if (this.view === "month") {
      this.onDateSelect(event2, {
        year: this.currentYear,
        month: index,
        day: 1,
        selectable: true
      });
    } else {
      this.currentMonth = index;
      this.createMonths(this.currentMonth, this.currentYear);
      this.setCurrentView("date");
      this.onMonthChange.emit({
        month: this.currentMonth + 1,
        year: this.currentYear
      });
    }
  }
  onYearSelect(event2, year) {
    if (this.view === "year") {
      this.onDateSelect(event2, {
        year,
        month: 0,
        day: 1,
        selectable: true
      });
    } else {
      this.currentYear = year;
      this.setCurrentView("month");
      this.onYearChange.emit({
        month: this.currentMonth + 1,
        year: this.currentYear
      });
    }
  }
  updateInputfield() {
    let formattedValue = "";
    if (this.value) {
      if (this.isSingleSelection()) {
        formattedValue = this.formatDateTime(this.value);
      } else if (this.isMultipleSelection()) {
        for (let i = 0; i < this.value.length; i++) {
          let dateAsString = this.formatDateTime(this.value[i]);
          formattedValue += dateAsString;
          if (i !== this.value.length - 1) {
            formattedValue += this.multipleSeparator + " ";
          }
        }
      } else if (this.isRangeSelection()) {
        if (this.value && this.value.length) {
          let startDate = this.value[0];
          let endDate = this.value[1];
          formattedValue = this.formatDateTime(startDate);
          if (endDate) {
            formattedValue += " " + this.rangeSeparator + " " + this.formatDateTime(endDate);
          }
        }
      }
    }
    this.inputFieldValue = formattedValue;
    this.updateFilledState();
    if (this.inputfieldViewChild && this.inputfieldViewChild.nativeElement) {
      this.inputfieldViewChild.nativeElement.value = this.inputFieldValue;
    }
  }
  formatDateTime(date) {
    let formattedValue = this.keepInvalid ? date : null;
    const isDateValid = this.isValidDateForTimeConstraints(date);
    if (this.isValidDate(date)) {
      if (this.timeOnly) {
        formattedValue = this.formatTime(date);
      } else {
        formattedValue = this.formatDate(date, this.getDateFormat());
        if (this.showTime) {
          formattedValue += " " + this.formatTime(date);
        }
      }
    } else if (this.dataType === "string") {
      formattedValue = date;
    }
    formattedValue = isDateValid ? formattedValue : "";
    return formattedValue;
  }
  formatDateMetaToDate(dateMeta) {
    return new Date(dateMeta.year, dateMeta.month, dateMeta.day);
  }
  formatDateKey(date) {
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  }
  setCurrentHourPM(hours) {
    if (this.hourFormat == "12") {
      this.pm = hours > 11;
      if (hours >= 12) {
        this.currentHour = hours == 12 ? 12 : hours - 12;
      } else {
        this.currentHour = hours == 0 ? 12 : hours;
      }
    } else {
      this.currentHour = hours;
    }
  }
  setCurrentView(currentView) {
    this.currentView = currentView;
    this.cd.detectChanges();
    this.alignOverlay();
  }
  selectDate(dateMeta) {
    let date = this.formatDateMetaToDate(dateMeta);
    if (this.showTime) {
      if (this.hourFormat == "12") {
        if (this.currentHour === 12) date.setHours(this.pm ? 12 : 0);
        else date.setHours(this.pm ? this.currentHour + 12 : this.currentHour);
      } else {
        date.setHours(this.currentHour);
      }
      date.setMinutes(this.currentMinute);
      date.setSeconds(this.currentSecond);
    }
    if (this.minDate && this.minDate > date) {
      date = this.minDate;
      this.setCurrentHourPM(date.getHours());
      this.currentMinute = date.getMinutes();
      this.currentSecond = date.getSeconds();
    }
    if (this.maxDate && this.maxDate < date) {
      date = this.maxDate;
      this.setCurrentHourPM(date.getHours());
      this.currentMinute = date.getMinutes();
      this.currentSecond = date.getSeconds();
    }
    if (this.isSingleSelection()) {
      this.updateModel(date);
    } else if (this.isMultipleSelection()) {
      this.updateModel(this.value ? [...this.value, date] : [date]);
    } else if (this.isRangeSelection()) {
      if (this.value && this.value.length) {
        let startDate = this.value[0];
        let endDate = this.value[1];
        if (!endDate && date.getTime() >= startDate.getTime()) {
          endDate = date;
        } else {
          startDate = date;
          endDate = null;
        }
        this.updateModel([startDate, endDate]);
      } else {
        this.updateModel([date, null]);
      }
    }
    this.onSelect.emit(date);
  }
  updateModel(value) {
    this.value = value;
    if (this.dataType == "date") {
      this.onModelChange(this.value);
    } else if (this.dataType == "string") {
      if (this.isSingleSelection()) {
        this.onModelChange(this.formatDateTime(this.value));
      } else {
        let stringArrValue = null;
        if (Array.isArray(this.value)) {
          stringArrValue = this.value.map((date) => this.formatDateTime(date));
        }
        this.onModelChange(stringArrValue);
      }
    }
  }
  getFirstDayOfMonthIndex(month, year) {
    let day = /* @__PURE__ */ new Date();
    day.setDate(1);
    day.setMonth(month);
    day.setFullYear(year);
    let dayIndex = day.getDay() + this.getSundayIndex();
    return dayIndex >= 7 ? dayIndex - 7 : dayIndex;
  }
  getDaysCountInMonth(month, year) {
    return 32 - this.daylightSavingAdjust(new Date(year, month, 32)).getDate();
  }
  getDaysCountInPrevMonth(month, year) {
    let prev = this.getPreviousMonthAndYear(month, year);
    return this.getDaysCountInMonth(prev.month, prev.year);
  }
  getPreviousMonthAndYear(month, year) {
    let m, y;
    if (month === 0) {
      m = 11;
      y = year - 1;
    } else {
      m = month - 1;
      y = year;
    }
    return {
      month: m,
      year: y
    };
  }
  getNextMonthAndYear(month, year) {
    let m, y;
    if (month === 11) {
      m = 0;
      y = year + 1;
    } else {
      m = month + 1;
      y = year;
    }
    return {
      month: m,
      year: y
    };
  }
  getSundayIndex() {
    let firstDayOfWeek = this.getFirstDateOfWeek();
    return firstDayOfWeek > 0 ? 7 - firstDayOfWeek : 0;
  }
  isSelected(dateMeta) {
    if (this.value) {
      if (this.isSingleSelection()) {
        return this.isDateEquals(this.value, dateMeta);
      } else if (this.isMultipleSelection()) {
        let selected = false;
        for (let date of this.value) {
          selected = this.isDateEquals(date, dateMeta);
          if (selected) {
            break;
          }
        }
        return selected;
      } else if (this.isRangeSelection()) {
        if (this.value[1]) return this.isDateEquals(this.value[0], dateMeta) || this.isDateEquals(this.value[1], dateMeta) || this.isDateBetween(this.value[0], this.value[1], dateMeta);
        else return this.isDateEquals(this.value[0], dateMeta);
      }
    } else {
      return false;
    }
  }
  isComparable() {
    return this.value != null && typeof this.value !== "string";
  }
  isMonthSelected(month) {
    if (this.isComparable() && !this.isMultipleSelection()) {
      const [start, end] = this.isRangeSelection() ? this.value : [this.value, this.value];
      const selected = new Date(this.currentYear, month, 1);
      return selected >= start && selected <= (end ?? start);
    }
    return false;
  }
  isMonthDisabled(month, year) {
    const yearToCheck = year ?? this.currentYear;
    for (let day = 1; day < this.getDaysCountInMonth(month, yearToCheck) + 1; day++) {
      if (this.isSelectable(day, month, yearToCheck, false)) {
        return false;
      }
    }
    return true;
  }
  isYearDisabled(year) {
    return Array(12).fill(0).every((v, month) => this.isMonthDisabled(month, year));
  }
  isYearSelected(year) {
    if (this.isComparable()) {
      let value = this.isRangeSelection() ? this.value[0] : this.value;
      return !this.isMultipleSelection() ? value.getFullYear() === year : false;
    }
    return false;
  }
  isDateEquals(value, dateMeta) {
    if (value && isDate(value)) return value.getDate() === dateMeta.day && value.getMonth() === dateMeta.month && value.getFullYear() === dateMeta.year;
    else return false;
  }
  isDateBetween(start, end, dateMeta) {
    let between = false;
    if (isDate(start) && isDate(end)) {
      let date = this.formatDateMetaToDate(dateMeta);
      return start.getTime() <= date.getTime() && end.getTime() >= date.getTime();
    }
    return between;
  }
  isSingleSelection() {
    return this.selectionMode === "single";
  }
  isRangeSelection() {
    return this.selectionMode === "range";
  }
  isMultipleSelection() {
    return this.selectionMode === "multiple";
  }
  isToday(today, day, month, year) {
    return today.getDate() === day && today.getMonth() === month && today.getFullYear() === year;
  }
  isSelectable(day, month, year, otherMonth) {
    let validMin = true;
    let validMax = true;
    let validDate = true;
    let validDay = true;
    if (otherMonth && !this.selectOtherMonths) {
      return false;
    }
    if (this.minDate) {
      if (this.minDate.getFullYear() > year) {
        validMin = false;
      } else if (this.minDate.getFullYear() === year && this.currentView != "year") {
        if (this.minDate.getMonth() > month) {
          validMin = false;
        } else if (this.minDate.getMonth() === month) {
          if (this.minDate.getDate() > day) {
            validMin = false;
          }
        }
      }
    }
    if (this.maxDate) {
      if (this.maxDate.getFullYear() < year) {
        validMax = false;
      } else if (this.maxDate.getFullYear() === year) {
        if (this.maxDate.getMonth() < month) {
          validMax = false;
        } else if (this.maxDate.getMonth() === month) {
          if (this.maxDate.getDate() < day) {
            validMax = false;
          }
        }
      }
    }
    if (this.disabledDates) {
      validDate = !this.isDateDisabled(day, month, year);
    }
    if (this.disabledDays) {
      validDay = !this.isDayDisabled(day, month, year);
    }
    return validMin && validMax && validDate && validDay;
  }
  isDateDisabled(day, month, year) {
    if (this.disabledDates) {
      for (let disabledDate of this.disabledDates) {
        if (disabledDate.getFullYear() === year && disabledDate.getMonth() === month && disabledDate.getDate() === day) {
          return true;
        }
      }
    }
    return false;
  }
  isDayDisabled(day, month, year) {
    if (this.disabledDays) {
      let weekday = new Date(year, month, day);
      let weekdayNumber = weekday.getDay();
      return this.disabledDays.indexOf(weekdayNumber) !== -1;
    }
    return false;
  }
  onInputFocus(event2) {
    this.focus = true;
    if (this.showOnFocus) {
      this.showOverlay();
    }
    this.onFocus.emit(event2);
  }
  onInputClick() {
    if (this.showOnFocus && !this.overlayVisible) {
      this.showOverlay();
    }
  }
  onInputBlur(event2) {
    this.focus = false;
    this.onBlur.emit(event2);
    if (!this.keepInvalid) {
      this.updateInputfield();
    }
    this.onModelTouched();
  }
  onButtonClick(event2, inputfield = this.inputfieldViewChild?.nativeElement) {
    if (!this.overlayVisible) {
      inputfield.focus();
      this.showOverlay();
    } else {
      this.hideOverlay();
    }
  }
  clear() {
    this.inputFieldValue = null;
    this.value = null;
    this.onModelChange(this.value);
    this.onClear.emit();
  }
  onOverlayClick(event2) {
    this.overlayService.add({
      originalEvent: event2,
      target: this.el.nativeElement
    });
  }
  getMonthName(index) {
    return this.config.getTranslation("monthNames")[index];
  }
  getYear(month) {
    return this.currentView === "month" ? this.currentYear : month.year;
  }
  switchViewButtonDisabled() {
    return this.numberOfMonths > 1 || this.disabled;
  }
  onPrevButtonClick(event2) {
    this.navigationState = {
      backward: true,
      button: true
    };
    this.navBackward(event2);
  }
  onNextButtonClick(event2) {
    this.navigationState = {
      backward: false,
      button: true
    };
    this.navForward(event2);
  }
  onContainerButtonKeydown(event2) {
    switch (event2.which) {
      //tab
      case 9:
        if (!this.inline) {
          this.trapFocus(event2);
        }
        if (this.inline) {
          const headerElements = findSingle(this.containerViewChild?.nativeElement, ".p-datepicker-header");
          const element = event2.target;
          if (this.timeOnly) {
            return;
          } else {
            if (element == headerElements.children[headerElements?.children?.length - 1]) {
              this.initFocusableCell();
            }
          }
        }
        break;
      //escape
      case 27:
        this.inputfieldViewChild?.nativeElement.focus();
        this.overlayVisible = false;
        event2.preventDefault();
        break;
      default:
        break;
    }
  }
  onInputKeydown(event2) {
    this.isKeydown = true;
    if (event2.keyCode === 40 && this.contentViewChild) {
      this.trapFocus(event2);
    } else if (event2.keyCode === 27) {
      if (this.overlayVisible) {
        this.inputfieldViewChild?.nativeElement.focus();
        this.overlayVisible = false;
        event2.preventDefault();
      }
    } else if (event2.keyCode === 13) {
      if (this.overlayVisible) {
        this.overlayVisible = false;
        event2.preventDefault();
      }
    } else if (event2.keyCode === 9 && this.contentViewChild) {
      getFocusableElements(this.contentViewChild.nativeElement).forEach((el) => el.tabIndex = "-1");
      if (this.overlayVisible) {
        this.overlayVisible = false;
      }
    }
  }
  onDateCellKeydown(event2, dateMeta, groupIndex) {
    const cellContent = event2.currentTarget;
    const cell = cellContent.parentElement;
    const currentDate = this.formatDateMetaToDate(dateMeta);
    switch (event2.which) {
      //down arrow
      case 40: {
        cellContent.tabIndex = "-1";
        let cellIndex = getIndex(cell);
        let nextRow = cell.parentElement.nextElementSibling;
        if (nextRow) {
          let focusCell = nextRow.children[cellIndex].children[0];
          if (hasClass(focusCell, "p-disabled")) {
            this.navigationState = {
              backward: false
            };
            this.navForward(event2);
          } else {
            nextRow.children[cellIndex].children[0].tabIndex = "0";
            nextRow.children[cellIndex].children[0].focus();
          }
        } else {
          this.navigationState = {
            backward: false
          };
          this.navForward(event2);
        }
        event2.preventDefault();
        break;
      }
      //up arrow
      case 38: {
        cellContent.tabIndex = "-1";
        let cellIndex = getIndex(cell);
        let prevRow = cell.parentElement.previousElementSibling;
        if (prevRow) {
          let focusCell = prevRow.children[cellIndex].children[0];
          if (hasClass(focusCell, "p-disabled")) {
            this.navigationState = {
              backward: true
            };
            this.navBackward(event2);
          } else {
            focusCell.tabIndex = "0";
            focusCell.focus();
          }
        } else {
          this.navigationState = {
            backward: true
          };
          this.navBackward(event2);
        }
        event2.preventDefault();
        break;
      }
      //left arrow
      case 37: {
        cellContent.tabIndex = "-1";
        let prevCell = cell.previousElementSibling;
        if (prevCell) {
          let focusCell = prevCell.children[0];
          if (hasClass(focusCell, "p-disabled") || hasClass(focusCell.parentElement, "p-datepicker-weeknumber")) {
            this.navigateToMonth(true, groupIndex);
          } else {
            focusCell.tabIndex = "0";
            focusCell.focus();
          }
        } else {
          this.navigateToMonth(true, groupIndex);
        }
        event2.preventDefault();
        break;
      }
      //right arrow
      case 39: {
        cellContent.tabIndex = "-1";
        let nextCell = cell.nextElementSibling;
        if (nextCell) {
          let focusCell = nextCell.children[0];
          if (hasClass(focusCell, "p-disabled")) {
            this.navigateToMonth(false, groupIndex);
          } else {
            focusCell.tabIndex = "0";
            focusCell.focus();
          }
        } else {
          this.navigateToMonth(false, groupIndex);
        }
        event2.preventDefault();
        break;
      }
      //enter
      //space
      case 13:
      case 32: {
        this.onDateSelect(event2, dateMeta);
        event2.preventDefault();
        break;
      }
      //escape
      case 27: {
        this.inputfieldViewChild?.nativeElement.focus();
        this.overlayVisible = false;
        event2.preventDefault();
        break;
      }
      //tab
      case 9: {
        if (!this.inline) {
          this.trapFocus(event2);
        }
        break;
      }
      // page up
      case 33: {
        cellContent.tabIndex = "-1";
        const dateToFocus = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, currentDate.getDate());
        const focusKey = this.formatDateKey(dateToFocus);
        this.navigateToMonth(true, groupIndex, `span[data-date='${focusKey}']:not(.p-disabled):not(.p-ink)`);
        event2.preventDefault();
        break;
      }
      // page down
      case 34: {
        cellContent.tabIndex = "-1";
        const dateToFocus = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate());
        const focusKey = this.formatDateKey(dateToFocus);
        this.navigateToMonth(false, groupIndex, `span[data-date='${focusKey}']:not(.p-disabled):not(.p-ink)`);
        event2.preventDefault();
        break;
      }
      //home
      case 36:
        cellContent.tabIndex = "-1";
        const firstDayDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        const firstDayDateKey = this.formatDateKey(firstDayDate);
        const firstDayCell = findSingle(cellContent.offsetParent, `span[data-date='${firstDayDateKey}']:not(.p-disabled):not(.p-ink)`);
        if (firstDayCell) {
          firstDayCell.tabIndex = "0";
          firstDayCell.focus();
        }
        event2.preventDefault();
        break;
      //end
      case 35:
        cellContent.tabIndex = "-1";
        const lastDayDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
        const lastDayDateKey = this.formatDateKey(lastDayDate);
        const lastDayCell = findSingle(cellContent.offsetParent, `span[data-date='${lastDayDateKey}']:not(.p-disabled):not(.p-ink)`);
        if (lastDayDate) {
          lastDayCell.tabIndex = "0";
          lastDayCell.focus();
        }
        event2.preventDefault();
        break;
      default:
        break;
    }
  }
  onMonthCellKeydown(event2, index) {
    const cell = event2.currentTarget;
    switch (event2.which) {
      //arrows
      case 38:
      case 40: {
        cell.tabIndex = "-1";
        var cells = cell.parentElement.children;
        var cellIndex = getIndex(cell);
        let nextCell = cells[event2.which === 40 ? cellIndex + 3 : cellIndex - 3];
        if (nextCell) {
          nextCell.tabIndex = "0";
          nextCell.focus();
        }
        event2.preventDefault();
        break;
      }
      //left arrow
      case 37: {
        cell.tabIndex = "-1";
        let prevCell = cell.previousElementSibling;
        if (prevCell) {
          prevCell.tabIndex = "0";
          prevCell.focus();
        } else {
          this.navigationState = {
            backward: true
          };
          this.navBackward(event2);
        }
        event2.preventDefault();
        break;
      }
      //right arrow
      case 39: {
        cell.tabIndex = "-1";
        let nextCell = cell.nextElementSibling;
        if (nextCell) {
          nextCell.tabIndex = "0";
          nextCell.focus();
        } else {
          this.navigationState = {
            backward: false
          };
          this.navForward(event2);
        }
        event2.preventDefault();
        break;
      }
      //enter
      //space
      case 13:
      case 32: {
        this.onMonthSelect(event2, index);
        event2.preventDefault();
        break;
      }
      //escape
      case 27: {
        this.inputfieldViewChild?.nativeElement.focus();
        this.overlayVisible = false;
        event2.preventDefault();
        break;
      }
      //tab
      case 9: {
        if (!this.inline) {
          this.trapFocus(event2);
        }
        break;
      }
      default:
        break;
    }
  }
  onYearCellKeydown(event2, index) {
    const cell = event2.currentTarget;
    switch (event2.which) {
      //arrows
      case 38:
      case 40: {
        cell.tabIndex = "-1";
        var cells = cell.parentElement.children;
        var cellIndex = getIndex(cell);
        let nextCell = cells[event2.which === 40 ? cellIndex + 2 : cellIndex - 2];
        if (nextCell) {
          nextCell.tabIndex = "0";
          nextCell.focus();
        }
        event2.preventDefault();
        break;
      }
      //left arrow
      case 37: {
        cell.tabIndex = "-1";
        let prevCell = cell.previousElementSibling;
        if (prevCell) {
          prevCell.tabIndex = "0";
          prevCell.focus();
        } else {
          this.navigationState = {
            backward: true
          };
          this.navBackward(event2);
        }
        event2.preventDefault();
        break;
      }
      //right arrow
      case 39: {
        cell.tabIndex = "-1";
        let nextCell = cell.nextElementSibling;
        if (nextCell) {
          nextCell.tabIndex = "0";
          nextCell.focus();
        } else {
          this.navigationState = {
            backward: false
          };
          this.navForward(event2);
        }
        event2.preventDefault();
        break;
      }
      //enter
      //space
      case 13:
      case 32: {
        this.onYearSelect(event2, index);
        event2.preventDefault();
        break;
      }
      //escape
      case 27: {
        this.inputfieldViewChild?.nativeElement.focus();
        this.overlayVisible = false;
        event2.preventDefault();
        break;
      }
      //tab
      case 9: {
        this.trapFocus(event2);
        break;
      }
      default:
        break;
    }
  }
  navigateToMonth(prev, groupIndex, focusKey) {
    if (prev) {
      if (this.numberOfMonths === 1 || groupIndex === 0) {
        this.navigationState = {
          backward: true
        };
        this._focusKey = focusKey;
        this.navBackward(event);
      } else {
        let prevMonthContainer = this.contentViewChild.nativeElement.children[groupIndex - 1];
        if (focusKey) {
          const firstDayCell = findSingle(prevMonthContainer, focusKey);
          firstDayCell.tabIndex = "0";
          firstDayCell.focus();
        } else {
          let cells = find(prevMonthContainer, ".p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)");
          let focusCell = cells[cells.length - 1];
          focusCell.tabIndex = "0";
          focusCell.focus();
        }
      }
    } else {
      if (this.numberOfMonths === 1 || groupIndex === this.numberOfMonths - 1) {
        this.navigationState = {
          backward: false
        };
        this._focusKey = focusKey;
        this.navForward(event);
      } else {
        let nextMonthContainer = this.contentViewChild.nativeElement.children[groupIndex + 1];
        if (focusKey) {
          const firstDayCell = findSingle(nextMonthContainer, focusKey);
          firstDayCell.tabIndex = "0";
          firstDayCell.focus();
        } else {
          let focusCell = findSingle(nextMonthContainer, ".p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)");
          focusCell.tabIndex = "0";
          focusCell.focus();
        }
      }
    }
  }
  updateFocus() {
    let cell;
    if (this.navigationState) {
      if (this.navigationState.button) {
        this.initFocusableCell();
        if (this.navigationState.backward) findSingle(this.contentViewChild.nativeElement, ".p-datepicker-prev-button").focus();
        else findSingle(this.contentViewChild.nativeElement, ".p-datepicker-next-button").focus();
      } else {
        if (this.navigationState.backward) {
          let cells;
          if (this.currentView === "month") {
            cells = find(this.contentViewChild.nativeElement, ".p-monthpicker .p-monthpicker-month:not(.p-disabled)");
          } else if (this.currentView === "year") {
            cells = find(this.contentViewChild.nativeElement, ".p-yearpicker .p-yearpicker-year:not(.p-disabled)");
          } else {
            cells = find(this.contentViewChild.nativeElement, this._focusKey || ".p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)");
          }
          if (cells && cells.length > 0) {
            cell = cells[cells.length - 1];
          }
        } else {
          if (this.currentView === "month") {
            cell = findSingle(this.contentViewChild.nativeElement, ".p-monthpicker .p-monthpicker-month:not(.p-disabled)");
          } else if (this.currentView === "year") {
            cell = findSingle(this.contentViewChild.nativeElement, ".p-yearpicker .p-yearpicker-year:not(.p-disabled)");
          } else {
            cell = findSingle(this.contentViewChild.nativeElement, this._focusKey || ".p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)");
          }
        }
        if (cell) {
          cell.tabIndex = "0";
          cell.focus();
        }
      }
      this.navigationState = null;
      this._focusKey = null;
    } else {
      this.initFocusableCell();
    }
  }
  initFocusableCell() {
    const contentEl = this.contentViewChild?.nativeElement;
    let cell;
    if (this.currentView === "month") {
      let cells = find(contentEl, ".p-monthpicker .p-monthpicker-month:not(.p-disabled)");
      let selectedCell = findSingle(contentEl, ".p-monthpicker .p-monthpicker-month.p-highlight");
      cells.forEach((cell2) => cell2.tabIndex = -1);
      cell = selectedCell || cells[0];
      if (cells.length === 0) {
        let disabledCells = find(contentEl, '.p-monthpicker .p-monthpicker-month.p-disabled[tabindex = "0"]');
        disabledCells.forEach((cell2) => cell2.tabIndex = -1);
      }
    } else if (this.currentView === "year") {
      let cells = find(contentEl, ".p-yearpicker .p-yearpicker-year:not(.p-disabled)");
      let selectedCell = findSingle(contentEl, ".p-yearpicker .p-yearpicker-year.p-highlight");
      cells.forEach((cell2) => cell2.tabIndex = -1);
      cell = selectedCell || cells[0];
      if (cells.length === 0) {
        let disabledCells = find(contentEl, '.p-yearpicker .p-yearpicker-year.p-disabled[tabindex = "0"]');
        disabledCells.forEach((cell2) => cell2.tabIndex = -1);
      }
    } else {
      cell = findSingle(contentEl, "span.p-highlight");
      if (!cell) {
        let todayCell = findSingle(contentEl, "td.p-datepicker-today span:not(.p-disabled):not(.p-ink)");
        if (todayCell) cell = todayCell;
        else cell = findSingle(contentEl, ".p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)");
      }
    }
    if (cell) {
      cell.tabIndex = "0";
      if (!this.preventFocus && (!this.navigationState || !this.navigationState.button)) {
        setTimeout(() => {
          if (!this.disabled) {
            cell.focus();
          }
        }, 1);
      }
      this.preventFocus = false;
    }
  }
  trapFocus(event2) {
    let focusableElements = getFocusableElements(this.contentViewChild.nativeElement);
    if (focusableElements && focusableElements.length > 0) {
      if (!focusableElements[0].ownerDocument.activeElement) {
        focusableElements[0].focus();
      } else {
        let focusedIndex = focusableElements.indexOf(focusableElements[0].ownerDocument.activeElement);
        if (event2.shiftKey) {
          if (focusedIndex == -1 || focusedIndex === 0) {
            if (this.focusTrap) {
              focusableElements[focusableElements.length - 1].focus();
            } else {
              if (focusedIndex === -1) return this.hideOverlay();
              else if (focusedIndex === 0) return;
            }
          } else {
            focusableElements[focusedIndex - 1].focus();
          }
        } else {
          if (focusedIndex == -1) {
            if (this.timeOnly) {
              focusableElements[0].focus();
            } else {
              let spanIndex = 0;
              for (let i = 0; i < focusableElements.length; i++) {
                if (focusableElements[i].tagName === "SPAN") spanIndex = i;
              }
              focusableElements[spanIndex].focus();
            }
          } else if (focusedIndex === focusableElements.length - 1) {
            if (!this.focusTrap && focusedIndex != -1) return this.hideOverlay();
            focusableElements[0].focus();
          } else {
            focusableElements[focusedIndex + 1].focus();
          }
        }
      }
    }
    event2.preventDefault();
  }
  onMonthDropdownChange(m) {
    this.currentMonth = parseInt(m);
    this.onMonthChange.emit({
      month: this.currentMonth + 1,
      year: this.currentYear
    });
    this.createMonths(this.currentMonth, this.currentYear);
  }
  onYearDropdownChange(y) {
    this.currentYear = parseInt(y);
    this.onYearChange.emit({
      month: this.currentMonth + 1,
      year: this.currentYear
    });
    this.createMonths(this.currentMonth, this.currentYear);
  }
  convertTo24Hour(hours, pm) {
    if (this.hourFormat == "12") {
      if (hours === 12) {
        return pm ? 12 : 0;
      } else {
        return pm ? hours + 12 : hours;
      }
    }
    return hours;
  }
  constrainTime(hour, minute, second, pm) {
    let returnTimeTriple = [hour, minute, second];
    let minHoursExceeds12;
    let value = this.value;
    const convertedHour = this.convertTo24Hour(hour, pm);
    const isRange = this.isRangeSelection(), isMultiple = this.isMultipleSelection(), isMultiValue = isRange || isMultiple;
    if (isMultiValue) {
      if (!this.value) {
        this.value = [/* @__PURE__ */ new Date(), /* @__PURE__ */ new Date()];
      }
      if (isRange) {
        value = this.value[1] || this.value[0];
      }
      if (isMultiple) {
        value = this.value[this.value.length - 1];
      }
    }
    const valueDateString = value ? value.toDateString() : null;
    let isMinDate = this.minDate && valueDateString && this.minDate.toDateString() === valueDateString;
    let isMaxDate = this.maxDate && valueDateString && this.maxDate.toDateString() === valueDateString;
    if (isMinDate) {
      minHoursExceeds12 = this.minDate.getHours() >= 12;
    }
    switch (true) {
      case (isMinDate && minHoursExceeds12 && this.minDate.getHours() === 12 && this.minDate.getHours() > convertedHour):
        returnTimeTriple[0] = 11;
      case (isMinDate && this.minDate.getHours() === convertedHour && this.minDate.getMinutes() > minute):
        returnTimeTriple[1] = this.minDate.getMinutes();
      case (isMinDate && this.minDate.getHours() === convertedHour && this.minDate.getMinutes() === minute && this.minDate.getSeconds() > second):
        returnTimeTriple[2] = this.minDate.getSeconds();
        break;
      case (isMinDate && !minHoursExceeds12 && this.minDate.getHours() - 1 === convertedHour && this.minDate.getHours() > convertedHour):
        returnTimeTriple[0] = 11;
        this.pm = true;
      case (isMinDate && this.minDate.getHours() === convertedHour && this.minDate.getMinutes() > minute):
        returnTimeTriple[1] = this.minDate.getMinutes();
      case (isMinDate && this.minDate.getHours() === convertedHour && this.minDate.getMinutes() === minute && this.minDate.getSeconds() > second):
        returnTimeTriple[2] = this.minDate.getSeconds();
        break;
      case (isMinDate && minHoursExceeds12 && this.minDate.getHours() > convertedHour && convertedHour !== 12):
        this.setCurrentHourPM(this.minDate.getHours());
        returnTimeTriple[0] = this.currentHour;
      case (isMinDate && this.minDate.getHours() === convertedHour && this.minDate.getMinutes() > minute):
        returnTimeTriple[1] = this.minDate.getMinutes();
      case (isMinDate && this.minDate.getHours() === convertedHour && this.minDate.getMinutes() === minute && this.minDate.getSeconds() > second):
        returnTimeTriple[2] = this.minDate.getSeconds();
        break;
      case (isMinDate && this.minDate.getHours() > convertedHour):
        returnTimeTriple[0] = this.minDate.getHours();
      case (isMinDate && this.minDate.getHours() === convertedHour && this.minDate.getMinutes() > minute):
        returnTimeTriple[1] = this.minDate.getMinutes();
      case (isMinDate && this.minDate.getHours() === convertedHour && this.minDate.getMinutes() === minute && this.minDate.getSeconds() > second):
        returnTimeTriple[2] = this.minDate.getSeconds();
        break;
      case (isMaxDate && this.maxDate.getHours() < convertedHour):
        returnTimeTriple[0] = this.maxDate.getHours();
      case (isMaxDate && this.maxDate.getHours() === convertedHour && this.maxDate.getMinutes() < minute):
        returnTimeTriple[1] = this.maxDate.getMinutes();
      case (isMaxDate && this.maxDate.getHours() === convertedHour && this.maxDate.getMinutes() === minute && this.maxDate.getSeconds() < second):
        returnTimeTriple[2] = this.maxDate.getSeconds();
        break;
    }
    return returnTimeTriple;
  }
  incrementHour(event2) {
    const prevHour = this.currentHour ?? 0;
    let newHour = (this.currentHour ?? 0) + this.stepHour;
    let newPM = this.pm;
    if (this.hourFormat == "24") newHour = newHour >= 24 ? newHour - 24 : newHour;
    else if (this.hourFormat == "12") {
      if (prevHour < 12 && newHour > 11) {
        newPM = !this.pm;
      }
      newHour = newHour >= 13 ? newHour - 12 : newHour;
    }
    this.toggleAMPMIfNotMinDate(newPM);
    [this.currentHour, this.currentMinute, this.currentSecond] = this.constrainTime(newHour, this.currentMinute, this.currentSecond, newPM);
    event2.preventDefault();
  }
  toggleAMPMIfNotMinDate(newPM) {
    let value = this.value;
    const valueDateString = value ? value.toDateString() : null;
    let isMinDate = this.minDate && valueDateString && this.minDate.toDateString() === valueDateString;
    if (isMinDate && this.minDate.getHours() >= 12) {
      this.pm = true;
    } else {
      this.pm = newPM;
    }
  }
  onTimePickerElementMouseDown(event2, type, direction) {
    if (!this.disabled) {
      this.repeat(event2, null, type, direction);
      event2.preventDefault();
    }
  }
  onTimePickerElementMouseUp(event2) {
    if (!this.disabled) {
      this.clearTimePickerTimer();
      this.updateTime();
    }
  }
  onTimePickerElementMouseLeave() {
    if (!this.disabled && this.timePickerTimer) {
      this.clearTimePickerTimer();
      this.updateTime();
    }
  }
  repeat(event2, interval, type, direction) {
    let i = interval || 500;
    this.clearTimePickerTimer();
    this.timePickerTimer = setTimeout(() => {
      this.repeat(event2, 100, type, direction);
      this.cd.markForCheck();
    }, i);
    switch (type) {
      case 0:
        if (direction === 1) this.incrementHour(event2);
        else this.decrementHour(event2);
        break;
      case 1:
        if (direction === 1) this.incrementMinute(event2);
        else this.decrementMinute(event2);
        break;
      case 2:
        if (direction === 1) this.incrementSecond(event2);
        else this.decrementSecond(event2);
        break;
    }
    this.updateInputfield();
  }
  clearTimePickerTimer() {
    if (this.timePickerTimer) {
      clearTimeout(this.timePickerTimer);
      this.timePickerTimer = null;
    }
  }
  decrementHour(event2) {
    let newHour = (this.currentHour ?? 0) - this.stepHour;
    let newPM = this.pm;
    if (this.hourFormat == "24") newHour = newHour < 0 ? 24 + newHour : newHour;
    else if (this.hourFormat == "12") {
      if (this.currentHour === 12) {
        newPM = !this.pm;
      }
      newHour = newHour <= 0 ? 12 + newHour : newHour;
    }
    this.toggleAMPMIfNotMinDate(newPM);
    [this.currentHour, this.currentMinute, this.currentSecond] = this.constrainTime(newHour, this.currentMinute, this.currentSecond, newPM);
    event2.preventDefault();
  }
  incrementMinute(event2) {
    let newMinute = (this.currentMinute ?? 0) + this.stepMinute;
    newMinute = newMinute > 59 ? newMinute - 60 : newMinute;
    [this.currentHour, this.currentMinute, this.currentSecond] = this.constrainTime(this.currentHour, newMinute, this.currentSecond, this.pm);
    event2.preventDefault();
  }
  decrementMinute(event2) {
    let newMinute = (this.currentMinute ?? 0) - this.stepMinute;
    newMinute = newMinute < 0 ? 60 + newMinute : newMinute;
    [this.currentHour, this.currentMinute, this.currentSecond] = this.constrainTime(this.currentHour, newMinute, this.currentSecond, this.pm);
    event2.preventDefault();
  }
  incrementSecond(event2) {
    let newSecond = this.currentSecond + this.stepSecond;
    newSecond = newSecond > 59 ? newSecond - 60 : newSecond;
    [this.currentHour, this.currentMinute, this.currentSecond] = this.constrainTime(this.currentHour, this.currentMinute, newSecond, this.pm);
    event2.preventDefault();
  }
  decrementSecond(event2) {
    let newSecond = this.currentSecond - this.stepSecond;
    newSecond = newSecond < 0 ? 60 + newSecond : newSecond;
    [this.currentHour, this.currentMinute, this.currentSecond] = this.constrainTime(this.currentHour, this.currentMinute, newSecond, this.pm);
    event2.preventDefault();
  }
  updateTime() {
    let value = this.value;
    if (this.isRangeSelection()) {
      value = this.value[1] || this.value[0];
    }
    if (this.isMultipleSelection()) {
      value = this.value[this.value.length - 1];
    }
    value = value ? new Date(value.getTime()) : /* @__PURE__ */ new Date();
    if (this.hourFormat == "12") {
      if (this.currentHour === 12) value.setHours(this.pm ? 12 : 0);
      else value.setHours(this.pm ? this.currentHour + 12 : this.currentHour);
    } else {
      value.setHours(this.currentHour);
    }
    value.setMinutes(this.currentMinute);
    value.setSeconds(this.currentSecond);
    if (this.isRangeSelection()) {
      if (this.value[1]) value = [this.value[0], value];
      else value = [value, null];
    }
    if (this.isMultipleSelection()) {
      value = [...this.value.slice(0, -1), value];
    }
    this.updateModel(value);
    this.onSelect.emit(value);
    this.updateInputfield();
  }
  toggleAMPM(event2) {
    const newPM = !this.pm;
    this.pm = newPM;
    [this.currentHour, this.currentMinute, this.currentSecond] = this.constrainTime(this.currentHour, this.currentMinute, this.currentSecond, newPM);
    this.updateTime();
    event2.preventDefault();
  }
  onUserInput(event2) {
    if (!this.isKeydown) {
      return;
    }
    this.isKeydown = false;
    let val = event2.target.value;
    try {
      let value = this.parseValueFromString(val);
      if (this.isValidSelection(value)) {
        this.updateModel(value);
        this.updateUI();
      } else if (this.keepInvalid) {
        this.updateModel(value);
      }
    } catch (err) {
      let value = this.keepInvalid ? val : null;
      this.updateModel(value);
    }
    this.filled = val != null && val.length;
    this.onInput.emit(event2);
  }
  isValidSelection(value) {
    if (this.isSingleSelection()) {
      return this.isSelectable(value.getDate(), value.getMonth(), value.getFullYear(), false);
    }
    let isValid = value.every((v) => this.isSelectable(v.getDate(), v.getMonth(), v.getFullYear(), false));
    if (isValid && this.isRangeSelection()) {
      isValid = value.length === 1 || value.length > 1 && value[1] >= value[0];
    }
    return isValid;
  }
  parseValueFromString(text) {
    if (!text || text.trim().length === 0) {
      return null;
    }
    let value;
    if (this.isSingleSelection()) {
      value = this.parseDateTime(text);
    } else if (this.isMultipleSelection()) {
      let tokens = text.split(this.multipleSeparator);
      value = [];
      for (let token of tokens) {
        value.push(this.parseDateTime(token.trim()));
      }
    } else if (this.isRangeSelection()) {
      let tokens = text.split(" " + this.rangeSeparator + " ");
      value = [];
      for (let i = 0; i < tokens.length; i++) {
        value[i] = this.parseDateTime(tokens[i].trim());
      }
    }
    return value;
  }
  parseDateTime(text) {
    let date;
    let parts = text.split(" ");
    if (this.timeOnly) {
      date = /* @__PURE__ */ new Date();
      this.populateTime(date, parts[0], parts[1]);
    } else {
      const dateFormat = this.getDateFormat();
      if (this.showTime) {
        let ampm = this.hourFormat == "12" ? parts.pop() : null;
        let timeString = parts.pop();
        date = this.parseDate(parts.join(" "), dateFormat);
        this.populateTime(date, timeString, ampm);
      } else {
        date = this.parseDate(text, dateFormat);
      }
    }
    return date;
  }
  populateTime(value, timeString, ampm) {
    if (this.hourFormat == "12" && !ampm) {
      throw "Invalid Time";
    }
    this.pm = ampm === "PM" || ampm === "pm";
    let time = this.parseTime(timeString);
    value.setHours(time.hour);
    value.setMinutes(time.minute);
    value.setSeconds(time.second);
  }
  isValidDate(date) {
    return isDate(date) && isNotEmpty(date);
  }
  updateUI() {
    let propValue = this.value;
    if (Array.isArray(propValue)) {
      propValue = propValue.length === 2 ? propValue[1] : propValue[0];
    }
    let val = this.defaultDate && this.isValidDate(this.defaultDate) && !this.value ? this.defaultDate : propValue && this.isValidDate(propValue) ? propValue : /* @__PURE__ */ new Date();
    this.currentMonth = val.getMonth();
    this.currentYear = val.getFullYear();
    this.createMonths(this.currentMonth, this.currentYear);
    if (this.showTime || this.timeOnly) {
      this.setCurrentHourPM(val.getHours());
      this.currentMinute = val.getMinutes();
      this.currentSecond = val.getSeconds();
    }
  }
  showOverlay() {
    if (!this.overlayVisible) {
      this.updateUI();
      if (!this.touchUI) {
        this.preventFocus = true;
      }
      this.overlayVisible = true;
    }
  }
  hideOverlay() {
    this.inputfieldViewChild?.nativeElement.focus();
    this.overlayVisible = false;
    this.clearTimePickerTimer();
    if (this.touchUI) {
      this.disableModality();
    }
    this.cd.markForCheck();
  }
  toggle() {
    if (!this.inline) {
      if (!this.overlayVisible) {
        this.showOverlay();
        this.inputfieldViewChild?.nativeElement.focus();
      } else {
        this.hideOverlay();
      }
    }
  }
  onOverlayAnimationStart(event2) {
    switch (event2.toState) {
      case "visible":
      case "visibleTouchUI":
        if (!this.inline) {
          this.overlay = event2.element;
          this.overlay?.setAttribute(this.attributeSelector, "");
          const styles = !this.inline ? {
            position: "absolute",
            top: "0",
            left: "0"
          } : void 0;
          addStyle(this.overlay, styles);
          this.appendOverlay();
          this.updateFocus();
          if (this.autoZIndex) {
            if (this.touchUI) zindexutils.set("modal", this.overlay, this.baseZIndex || this.config.zIndex.modal);
            else zindexutils.set("overlay", this.overlay, this.baseZIndex || this.config.zIndex.overlay);
          }
          this.alignOverlay();
          this.onShow.emit(event2);
        }
        break;
      case "void":
        this.onOverlayHide();
        this.onClose.emit(event2);
        break;
    }
  }
  onOverlayAnimationDone(event2) {
    switch (event2.toState) {
      case "visible":
      case "visibleTouchUI":
        if (!this.inline) {
          this.bindDocumentClickListener();
          this.bindDocumentResizeListener();
          this.bindScrollListener();
        }
        break;
      case "void":
        if (this.autoZIndex) {
          zindexutils.clear(event2.element);
        }
        break;
    }
  }
  appendOverlay() {
    if (this.appendTo) {
      if (this.appendTo === "body") this.document.body.appendChild(this.overlay);
      else appendChild(this.appendTo, this.overlay);
    }
  }
  restoreOverlayAppend() {
    if (this.overlay && this.appendTo) {
      this.el.nativeElement.appendChild(this.overlay);
    }
  }
  alignOverlay() {
    if (this.touchUI) {
      this.enableModality(this.overlay);
    } else if (this.overlay) {
      if (this.appendTo) {
        if (this.view === "date") {
          if (!this.overlay.style.width) {
            this.overlay.style.width = getOuterWidth(this.overlay) + "px";
          }
          if (!this.overlay.style.minWidth) {
            this.overlay.style.minWidth = getOuterWidth(this.inputfieldViewChild?.nativeElement) + "px";
          }
        } else {
          if (!this.overlay.style.width) {
            this.overlay.style.width = getOuterWidth(this.inputfieldViewChild?.nativeElement) + "px";
          }
        }
        absolutePosition(this.overlay, this.inputfieldViewChild?.nativeElement);
      } else {
        relativePosition(this.overlay, this.inputfieldViewChild?.nativeElement);
      }
    }
  }
  enableModality(element) {
    if (!this.mask && this.touchUI) {
      this.mask = this.renderer.createElement("div");
      this.renderer.setStyle(this.mask, "zIndex", String(parseInt(element.style.zIndex) - 1));
      let maskStyleClass = "p-overlay-mask p-datepicker-mask p-datepicker-mask-scrollblocker p-overlay-mask p-overlay-mask-enter";
      addClass(this.mask, maskStyleClass);
      this.maskClickListener = this.renderer.listen(this.mask, "click", (event2) => {
        this.disableModality();
        this.overlayVisible = false;
      });
      this.renderer.appendChild(this.document.body, this.mask);
      blockBodyScroll();
    }
  }
  disableModality() {
    if (this.mask) {
      addClass(this.mask, "p-overlay-mask-leave");
      if (!this.animationEndListener) {
        this.animationEndListener = this.renderer.listen(this.mask, "animationend", this.destroyMask.bind(this));
      }
    }
  }
  destroyMask() {
    if (!this.mask) {
      return;
    }
    this.renderer.removeChild(this.document.body, this.mask);
    let bodyChildren = this.document.body.children;
    let hasBlockerMasks;
    for (let i = 0; i < bodyChildren.length; i++) {
      let bodyChild = bodyChildren[i];
      if (hasClass(bodyChild, "p-datepicker-mask-scrollblocker")) {
        hasBlockerMasks = true;
        break;
      }
    }
    if (!hasBlockerMasks) {
      unblockBodyScroll();
    }
    this.unbindAnimationEndListener();
    this.unbindMaskClickListener();
    this.mask = null;
  }
  unbindMaskClickListener() {
    if (this.maskClickListener) {
      this.maskClickListener();
      this.maskClickListener = null;
    }
  }
  unbindAnimationEndListener() {
    if (this.animationEndListener && this.mask) {
      this.animationEndListener();
      this.animationEndListener = null;
    }
  }
  writeValue(value) {
    this.value = value;
    if (this.value && typeof this.value === "string") {
      try {
        this.value = this.parseValueFromString(this.value);
      } catch {
        if (this.keepInvalid) {
          this.value = value;
        }
      }
    }
    this.updateInputfield();
    this.updateUI();
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
  getDateFormat() {
    return this.dateFormat || this.getTranslation("dateFormat");
  }
  getFirstDateOfWeek() {
    return this._firstDayOfWeek || this.getTranslation(TranslationKeys.FIRST_DAY_OF_WEEK);
  }
  // Ported from jquery-ui datepicker formatDate
  formatDate(date, format) {
    if (!date) {
      return "";
    }
    let iFormat;
    const lookAhead = (match) => {
      const matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;
      if (matches) {
        iFormat++;
      }
      return matches;
    }, formatNumber = (match, value, len) => {
      let num = "" + value;
      if (lookAhead(match)) {
        while (num.length < len) {
          num = "0" + num;
        }
      }
      return num;
    }, formatName = (match, value, shortNames, longNames) => {
      return lookAhead(match) ? longNames[value] : shortNames[value];
    };
    let output = "";
    let literal = false;
    if (date) {
      for (iFormat = 0; iFormat < format.length; iFormat++) {
        if (literal) {
          if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
            literal = false;
          } else {
            output += format.charAt(iFormat);
          }
        } else {
          switch (format.charAt(iFormat)) {
            case "d":
              output += formatNumber("d", date.getDate(), 2);
              break;
            case "D":
              output += formatName("D", date.getDay(), this.getTranslation(TranslationKeys.DAY_NAMES_SHORT), this.getTranslation(TranslationKeys.DAY_NAMES));
              break;
            case "o":
              output += formatNumber("o", Math.round((new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 864e5), 3);
              break;
            case "m":
              output += formatNumber("m", date.getMonth() + 1, 2);
              break;
            case "M":
              output += formatName("M", date.getMonth(), this.getTranslation(TranslationKeys.MONTH_NAMES_SHORT), this.getTranslation(TranslationKeys.MONTH_NAMES));
              break;
            case "y":
              output += lookAhead("y") ? date.getFullYear() : (date.getFullYear() % 100 < 10 ? "0" : "") + date.getFullYear() % 100;
              break;
            case "@":
              output += date.getTime();
              break;
            case "!":
              output += date.getTime() * 1e4 + this.ticksTo1970;
              break;
            case "'":
              if (lookAhead("'")) {
                output += "'";
              } else {
                literal = true;
              }
              break;
            default:
              output += format.charAt(iFormat);
          }
        }
      }
    }
    return output;
  }
  formatTime(date) {
    if (!date) {
      return "";
    }
    let output = "";
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if (this.hourFormat == "12" && hours > 11 && hours != 12) {
      hours -= 12;
    }
    if (this.hourFormat == "12") {
      output += hours === 0 ? 12 : hours < 10 ? "0" + hours : hours;
    } else {
      output += hours < 10 ? "0" + hours : hours;
    }
    output += ":";
    output += minutes < 10 ? "0" + minutes : minutes;
    if (this.showSeconds) {
      output += ":";
      output += seconds < 10 ? "0" + seconds : seconds;
    }
    if (this.hourFormat == "12") {
      output += date.getHours() > 11 ? " PM" : " AM";
    }
    return output;
  }
  parseTime(value) {
    let tokens = value.split(":");
    let validTokenLength = this.showSeconds ? 3 : 2;
    if (tokens.length !== validTokenLength) {
      throw "Invalid time";
    }
    let h = parseInt(tokens[0]);
    let m = parseInt(tokens[1]);
    let s = this.showSeconds ? parseInt(tokens[2]) : null;
    if (isNaN(h) || isNaN(m) || h > 23 || m > 59 || this.hourFormat == "12" && h > 12 || this.showSeconds && (isNaN(s) || s > 59)) {
      throw "Invalid time";
    } else {
      if (this.hourFormat == "12") {
        if (h !== 12 && this.pm) {
          h += 12;
        } else if (!this.pm && h === 12) {
          h -= 12;
        }
      }
      return {
        hour: h,
        minute: m,
        second: s
      };
    }
  }
  // Ported from jquery-ui datepicker parseDate
  parseDate(value, format) {
    if (format == null || value == null) {
      throw "Invalid arguments";
    }
    value = typeof value === "object" ? value.toString() : value + "";
    if (value === "") {
      return null;
    }
    let iFormat, dim, extra, iValue = 0, shortYearCutoff = typeof this.shortYearCutoff !== "string" ? this.shortYearCutoff : (/* @__PURE__ */ new Date()).getFullYear() % 100 + parseInt(this.shortYearCutoff, 10), year = -1, month = -1, day = -1, doy = -1, literal = false, date, lookAhead = (match) => {
      let matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;
      if (matches) {
        iFormat++;
      }
      return matches;
    }, getNumber = (match) => {
      let isDoubled = lookAhead(match), size = match === "@" ? 14 : match === "!" ? 20 : match === "y" && isDoubled ? 4 : match === "o" ? 3 : 2, minSize = match === "y" ? size : 1, digits = new RegExp("^\\d{" + minSize + "," + size + "}"), num = value.substring(iValue).match(digits);
      if (!num) {
        throw "Missing number at position " + iValue;
      }
      iValue += num[0].length;
      return parseInt(num[0], 10);
    }, getName = (match, shortNames, longNames) => {
      let index = -1;
      let arr = lookAhead(match) ? longNames : shortNames;
      let names = [];
      for (let i = 0; i < arr.length; i++) {
        names.push([i, arr[i]]);
      }
      names.sort((a, b) => {
        return -(a[1].length - b[1].length);
      });
      for (let i = 0; i < names.length; i++) {
        let name = names[i][1];
        if (value.substr(iValue, name.length).toLowerCase() === name.toLowerCase()) {
          index = names[i][0];
          iValue += name.length;
          break;
        }
      }
      if (index !== -1) {
        return index + 1;
      } else {
        throw "Unknown name at position " + iValue;
      }
    }, checkLiteral = () => {
      if (value.charAt(iValue) !== format.charAt(iFormat)) {
        throw "Unexpected literal at position " + iValue;
      }
      iValue++;
    };
    if (this.view === "month") {
      day = 1;
    }
    for (iFormat = 0; iFormat < format.length; iFormat++) {
      if (literal) {
        if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
          literal = false;
        } else {
          checkLiteral();
        }
      } else {
        switch (format.charAt(iFormat)) {
          case "d":
            day = getNumber("d");
            break;
          case "D":
            getName("D", this.getTranslation(TranslationKeys.DAY_NAMES_SHORT), this.getTranslation(TranslationKeys.DAY_NAMES));
            break;
          case "o":
            doy = getNumber("o");
            break;
          case "m":
            month = getNumber("m");
            break;
          case "M":
            month = getName("M", this.getTranslation(TranslationKeys.MONTH_NAMES_SHORT), this.getTranslation(TranslationKeys.MONTH_NAMES));
            break;
          case "y":
            year = getNumber("y");
            break;
          case "@":
            date = new Date(getNumber("@"));
            year = date.getFullYear();
            month = date.getMonth() + 1;
            day = date.getDate();
            break;
          case "!":
            date = new Date((getNumber("!") - this.ticksTo1970) / 1e4);
            year = date.getFullYear();
            month = date.getMonth() + 1;
            day = date.getDate();
            break;
          case "'":
            if (lookAhead("'")) {
              checkLiteral();
            } else {
              literal = true;
            }
            break;
          default:
            checkLiteral();
        }
      }
    }
    if (iValue < value.length) {
      extra = value.substr(iValue);
      if (!/^\s+/.test(extra)) {
        throw "Extra/unparsed characters found in date: " + extra;
      }
    }
    if (year === -1) {
      year = (/* @__PURE__ */ new Date()).getFullYear();
    } else if (year < 100) {
      year += (/* @__PURE__ */ new Date()).getFullYear() - (/* @__PURE__ */ new Date()).getFullYear() % 100 + (year <= shortYearCutoff ? 0 : -100);
    }
    if (doy > -1) {
      month = 1;
      day = doy;
      do {
        dim = this.getDaysCountInMonth(year, month - 1);
        if (day <= dim) {
          break;
        }
        month++;
        day -= dim;
      } while (true);
    }
    if (this.view === "year") {
      month = month === -1 ? 1 : month;
      day = day === -1 ? 1 : day;
    }
    date = this.daylightSavingAdjust(new Date(year, month - 1, day));
    if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
      throw "Invalid date";
    }
    return date;
  }
  daylightSavingAdjust(date) {
    if (!date) {
      return null;
    }
    date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
    return date;
  }
  updateFilledState() {
    this.filled = this.inputFieldValue && this.inputFieldValue != "";
  }
  isValidDateForTimeConstraints(selectedDate) {
    if (this.keepInvalid) {
      return true;
    }
    return (!this.minDate || selectedDate >= this.minDate) && (!this.maxDate || selectedDate <= this.maxDate);
  }
  onTodayButtonClick(event2) {
    const date = /* @__PURE__ */ new Date();
    const dateMeta = {
      day: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear(),
      otherMonth: date.getMonth() !== this.currentMonth || date.getFullYear() !== this.currentYear,
      today: true,
      selectable: true
    };
    this.createMonths(date.getMonth(), date.getFullYear());
    this.onDateSelect(event2, dateMeta);
    this.onTodayClick.emit(date);
  }
  onClearButtonClick(event2) {
    this.updateModel(null);
    this.updateInputfield();
    this.hideOverlay();
    this.onClearClick.emit(event2);
  }
  createResponsiveStyle() {
    if (this.numberOfMonths > 1 && this.responsiveOptions) {
      if (!this.responsiveStyleElement) {
        this.responsiveStyleElement = this.renderer.createElement("style");
        this.responsiveStyleElement.type = "text/css";
        this.renderer.appendChild(this.document.body, this.responsiveStyleElement);
      }
      let innerHTML = "";
      if (this.responsiveOptions) {
        let responsiveOptions = [...this.responsiveOptions].filter((o) => !!(o.breakpoint && o.numMonths)).sort((o1, o2) => -1 * o1.breakpoint.localeCompare(o2.breakpoint, void 0, {
          numeric: true
        }));
        for (let i = 0; i < responsiveOptions.length; i++) {
          let {
            breakpoint,
            numMonths
          } = responsiveOptions[i];
          let styles = `
                        .p-datepicker[${this.attributeSelector}] .p-datepicker-group:nth-child(${numMonths}) .p-datepicker-next {
                            display: inline-flex !important;
                        }
                    `;
          for (let j = numMonths; j < this.numberOfMonths; j++) {
            styles += `
                            .p-datepicker[${this.attributeSelector}] .p-datepicker-group:nth-child(${j + 1}) {
                                display: none !important;
                            }
                        `;
          }
          innerHTML += `
                        @media screen and (max-width: ${breakpoint}) {
                            ${styles}
                        }
                    `;
        }
      }
      this.responsiveStyleElement.innerHTML = innerHTML;
      setAttribute(this.responsiveStyleElement, "nonce", this.config?.csp()?.nonce);
    }
  }
  destroyResponsiveStyleElement() {
    if (this.responsiveStyleElement) {
      this.responsiveStyleElement.remove();
      this.responsiveStyleElement = null;
    }
  }
  bindDocumentClickListener() {
    if (!this.documentClickListener) {
      this.zone.runOutsideAngular(() => {
        const documentTarget = this.el ? this.el.nativeElement.ownerDocument : this.document;
        this.documentClickListener = this.renderer.listen(documentTarget, "mousedown", (event2) => {
          if (this.isOutsideClicked(event2) && this.overlayVisible) {
            this.zone.run(() => {
              this.hideOverlay();
              this.onClickOutside.emit(event2);
              this.cd.markForCheck();
            });
          }
        });
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
    if (!this.documentResizeListener && !this.touchUI) {
      this.documentResizeListener = this.renderer.listen(this.window, "resize", this.onWindowResize.bind(this));
    }
  }
  unbindDocumentResizeListener() {
    if (this.documentResizeListener) {
      this.documentResizeListener();
      this.documentResizeListener = null;
    }
  }
  bindScrollListener() {
    if (!this.scrollHandler) {
      this.scrollHandler = new ConnectedOverlayScrollHandler(this.containerViewChild?.nativeElement, () => {
        if (this.overlayVisible) {
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
  isOutsideClicked(event2) {
    return !(this.el.nativeElement.isSameNode(event2.target) || this.isNavIconClicked(event2) || this.el.nativeElement.contains(event2.target) || this.overlay && this.overlay.contains(event2.target));
  }
  isNavIconClicked(event2) {
    return hasClass(event2.target, "p-datepicker-prev-button") || hasClass(event2.target, "p-datepicker-prev-icon") || hasClass(event2.target, "p-datepicker-next-button") || hasClass(event2.target, "p-datepicker-next-icon");
  }
  onWindowResize() {
    if (this.overlayVisible && !isTouchDevice()) {
      this.hideOverlay();
    }
  }
  onOverlayHide() {
    this.currentView = this.view;
    if (this.mask) {
      this.destroyMask();
    }
    this.unbindDocumentClickListener();
    this.unbindDocumentResizeListener();
    this.unbindScrollListener();
    this.overlay = null;
  }
  ngOnDestroy() {
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    if (this.translationSubscription) {
      this.translationSubscription.unsubscribe();
    }
    if (this.overlay && this.autoZIndex) {
      zindexutils.clear(this.overlay);
    }
    this.destroyResponsiveStyleElement();
    this.clearTimePickerTimer();
    this.restoreOverlayAppend();
    this.onOverlayHide();
    super.ngOnDestroy();
  }
  static \u0275fac = function DatePicker_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DatePicker)(\u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(OverlayService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _DatePicker,
    selectors: [["p-datePicker"], ["p-datepicker"], ["p-date-picker"]],
    contentQueries: function DatePicker_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c0, 4);
        \u0275\u0275contentQuery(dirIndex, _c1, 4);
        \u0275\u0275contentQuery(dirIndex, _c2, 4);
        \u0275\u0275contentQuery(dirIndex, _c3, 4);
        \u0275\u0275contentQuery(dirIndex, _c4, 4);
        \u0275\u0275contentQuery(dirIndex, _c5, 4);
        \u0275\u0275contentQuery(dirIndex, _c6, 4);
        \u0275\u0275contentQuery(dirIndex, _c7, 4);
        \u0275\u0275contentQuery(dirIndex, _c8, 4);
        \u0275\u0275contentQuery(dirIndex, _c9, 4);
        \u0275\u0275contentQuery(dirIndex, _c10, 4);
        \u0275\u0275contentQuery(dirIndex, _c11, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.dateTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.footerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.disabledDateTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.decadeTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.previousIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.nextIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.triggerIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.clearIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.decrementIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.incrementIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.inputIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function DatePicker_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c12, 5);
        \u0275\u0275viewQuery(_c13, 5);
        \u0275\u0275viewQuery(_c14, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.containerViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.inputfieldViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.content = _t.first);
      }
    },
    inputs: {
      iconDisplay: "iconDisplay",
      style: "style",
      styleClass: "styleClass",
      inputStyle: "inputStyle",
      inputId: "inputId",
      name: "name",
      inputStyleClass: "inputStyleClass",
      placeholder: "placeholder",
      ariaLabelledBy: "ariaLabelledBy",
      ariaLabel: "ariaLabel",
      iconAriaLabel: "iconAriaLabel",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      dateFormat: "dateFormat",
      multipleSeparator: "multipleSeparator",
      rangeSeparator: "rangeSeparator",
      inline: [2, "inline", "inline", booleanAttribute],
      showOtherMonths: [2, "showOtherMonths", "showOtherMonths", booleanAttribute],
      selectOtherMonths: [2, "selectOtherMonths", "selectOtherMonths", booleanAttribute],
      showIcon: [2, "showIcon", "showIcon", booleanAttribute],
      fluid: [2, "fluid", "fluid", booleanAttribute],
      icon: "icon",
      appendTo: "appendTo",
      readonlyInput: [2, "readonlyInput", "readonlyInput", booleanAttribute],
      shortYearCutoff: "shortYearCutoff",
      monthNavigator: [2, "monthNavigator", "monthNavigator", booleanAttribute],
      yearNavigator: [2, "yearNavigator", "yearNavigator", booleanAttribute],
      hourFormat: "hourFormat",
      timeOnly: [2, "timeOnly", "timeOnly", booleanAttribute],
      stepHour: [2, "stepHour", "stepHour", numberAttribute],
      stepMinute: [2, "stepMinute", "stepMinute", numberAttribute],
      stepSecond: [2, "stepSecond", "stepSecond", numberAttribute],
      showSeconds: [2, "showSeconds", "showSeconds", booleanAttribute],
      required: [2, "required", "required", booleanAttribute],
      showOnFocus: [2, "showOnFocus", "showOnFocus", booleanAttribute],
      showWeek: [2, "showWeek", "showWeek", booleanAttribute],
      startWeekFromFirstDayOfYear: "startWeekFromFirstDayOfYear",
      showClear: [2, "showClear", "showClear", booleanAttribute],
      dataType: "dataType",
      selectionMode: "selectionMode",
      maxDateCount: [2, "maxDateCount", "maxDateCount", numberAttribute],
      showButtonBar: [2, "showButtonBar", "showButtonBar", booleanAttribute],
      todayButtonStyleClass: "todayButtonStyleClass",
      clearButtonStyleClass: "clearButtonStyleClass",
      autofocus: [2, "autofocus", "autofocus", booleanAttribute],
      autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
      baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
      panelStyleClass: "panelStyleClass",
      panelStyle: "panelStyle",
      keepInvalid: [2, "keepInvalid", "keepInvalid", booleanAttribute],
      hideOnDateTimeSelect: [2, "hideOnDateTimeSelect", "hideOnDateTimeSelect", booleanAttribute],
      touchUI: [2, "touchUI", "touchUI", booleanAttribute],
      timeSeparator: "timeSeparator",
      focusTrap: [2, "focusTrap", "focusTrap", booleanAttribute],
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      variant: "variant",
      size: "size",
      minDate: "minDate",
      maxDate: "maxDate",
      disabledDates: "disabledDates",
      disabledDays: "disabledDays",
      yearRange: "yearRange",
      showTime: "showTime",
      responsiveOptions: "responsiveOptions",
      numberOfMonths: "numberOfMonths",
      firstDayOfWeek: "firstDayOfWeek",
      locale: "locale",
      view: "view",
      defaultDate: "defaultDate"
    },
    outputs: {
      onFocus: "onFocus",
      onBlur: "onBlur",
      onClose: "onClose",
      onSelect: "onSelect",
      onClear: "onClear",
      onInput: "onInput",
      onTodayClick: "onTodayClick",
      onClearClick: "onClearClick",
      onMonthChange: "onMonthChange",
      onYearChange: "onYearChange",
      onClickOutside: "onClickOutside",
      onShow: "onShow"
    },
    features: [\u0275\u0275ProvidersFeature([DATEPICKER_VALUE_ACCESSOR, DatePickerStyle]), \u0275\u0275InputTransformsFeature, \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c16,
    decls: 4,
    vars: 6,
    consts: [["container", ""], ["inputfield", ""], ["contentWrapper", ""], [3, "ngClass", "ngStyle"], [3, "ngIf"], [3, "class", "ngStyle", "ngClass", "click", 4, "ngIf"], ["pInputText", "", "type", "text", "role", "combobox", "aria-autocomplete", "none", "aria-haspopup", "dialog", "autocomplete", "off", 3, "focus", "keydown", "click", "blur", "input", "value", "readonly", "ngStyle", "ngClass", "placeholder", "disabled", "pAutoFocus", "variant", "fluid"], [4, "ngIf"], ["type", "button", "aria-haspopup", "dialog", "class", "p-datepicker-dropdown", "tabindex", "0", 3, "disabled", "click", 4, "ngIf"], [3, "class", "click", 4, "ngIf"], ["class", "p-datepicker-clear-icon", 3, "click", 4, "ngIf"], [3, "click"], [1, "p-datepicker-clear-icon", 3, "click"], [4, "ngTemplateOutlet"], ["type", "button", "aria-haspopup", "dialog", "tabindex", "0", 1, "p-datepicker-dropdown", 3, "click", "disabled"], [3, "ngClass", 4, "ngIf"], [3, "ngClass"], [1, "p-datepicker-input-icon-container"], [3, "ngClass", "click", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "click", "ngClass"], [3, "click", "ngStyle", "ngClass"], ["class", "p-datepicker-time-picker", 4, "ngIf"], ["class", "p-datepicker-buttonbar", 4, "ngIf"], [1, "p-datepicker-calendar-container"], ["class", "p-datepicker-calendar", 4, "ngFor", "ngForOf"], ["class", "p-datepicker-month-view", 4, "ngIf"], ["class", "p-datepicker-year-view", 4, "ngIf"], [1, "p-datepicker-calendar"], [1, "p-datepicker-header"], ["size", "small", "rounded", "", "text", "", "styleClass", "p-datepicker-prev-button p-button-icon-only", "type", "button", 3, "keydown", "onClick", "ngStyle"], [1, "p-datepicker-title"], ["type", "button", "class", "p-datepicker-select-month", "pRipple", "", 3, "disabled", "click", "keydown", 4, "ngIf"], ["type", "button", "class", "p-datepicker-select-year", "pRipple", "", 3, "disabled", "click", "keydown", 4, "ngIf"], ["class", "p-datepicker-decade", 4, "ngIf"], ["rounded", "", "text", "", "size", "small", "styleClass", "p-datepicker-next-button p-button-icon-only", 3, "keydown", "onClick", "ngStyle"], ["class", "p-datepicker-day-view", "role", "grid", 4, "ngIf"], ["type", "button", "pRipple", "", 1, "p-datepicker-select-month", 3, "click", "keydown", "disabled"], ["type", "button", "pRipple", "", 1, "p-datepicker-select-year", 3, "click", "keydown", "disabled"], [1, "p-datepicker-decade"], ["role", "grid", 1, "p-datepicker-day-view"], ["class", "p-datepicker-weekheader p-disabled", 4, "ngIf"], ["class", "p-datepicker-weekday-cell", "scope", "col", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "p-datepicker-weekheader", "p-disabled"], ["scope", "col", 1, "p-datepicker-weekday-cell"], [1, "p-datepicker-weekday"], ["class", "p-datepicker-weeknumber", 4, "ngIf"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "p-datepicker-weeknumber"], [1, "p-datepicker-weeklabel-container", "p-disabled"], ["draggable", "false", "pRipple", "", 3, "click", "keydown", "ngClass"], ["class", "p-hidden-accessible", "aria-live", "polite", 4, "ngIf"], ["aria-live", "polite", 1, "p-hidden-accessible"], [1, "p-datepicker-month-view"], ["pRipple", "", 3, "ngClass", "click", "keydown", 4, "ngFor", "ngForOf"], ["pRipple", "", 3, "click", "keydown", "ngClass"], [1, "p-datepicker-year-view"], [1, "p-datepicker-time-picker"], [1, "p-datepicker-hour-picker"], ["rounded", "", "text", "", "size", "small", "styleClass", "p-datepicker-increment-button p-button-icon-only", 3, "keydown", "keydown.enter", "keydown.space", "mousedown", "mouseup", "keyup.enter", "keyup.space", "mouseleave"], [1, "p-datepicker-separator"], [1, "p-datepicker-minute-picker"], ["class", "p-datepicker-separator", 4, "ngIf"], ["class", "p-datepicker-second-picker", 4, "ngIf"], ["class", "p-datepicker-ampm-picker", 4, "ngIf"], [1, "p-datepicker-second-picker"], [1, "p-datepicker-ampm-picker"], ["size", "small", "text", "", "rounded", "", "styleClass", "p-datepicker-increment-button p-button-icon-only", 3, "keydown", "onClick", "keydown.enter"], ["size", "small", "text", "", "rounded", "", "styleClass", "p-datepicker-increment-button p-button-icon-only", 3, "keydown", "click", "keydown.enter"], [1, "p-datepicker-buttonbar"], ["size", "small", "styleClass", "p-datepicker-today-button", 3, "keydown", "onClick", "label", "ngClass"], ["size", "small", "styleClass", "p-datepicker-clear-button", 3, "keydown", "onClick", "label", "ngClass"]],
    template: function DatePicker_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c15);
        \u0275\u0275elementStart(0, "span", 3, 0);
        \u0275\u0275template(2, DatePicker_ng_template_2_Template, 5, 24, "ng-template", 4)(3, DatePicker_div_3_Template, 9, 20, "div", 5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.styleClass);
        \u0275\u0275property("ngClass", ctx.rootClass)("ngStyle", ctx.style);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.inline);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.inline || ctx.overlayVisible);
      }
    },
    dependencies: [CommonModule, NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, Button, Ripple, ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon, ChevronDownIcon, TimesIcon, CalendarIcon, AutoFocus, InputText, SharedModule],
    encapsulation: 2,
    data: {
      animation: [trigger("overlayAnimation", [state("visibleTouchUI", style({
        transform: "translate(-50%,-50%)",
        opacity: 1
      })), transition("void => visible", [style({
        opacity: 0,
        transform: "scaleY(0.8)"
      }), animate("{{showTransitionParams}}", style({
        opacity: 1,
        transform: "*"
      }))]), transition("visible => void", [animate("{{hideTransitionParams}}", style({
        opacity: 0
      }))]), transition("void => visibleTouchUI", [style({
        opacity: 0,
        transform: "translate3d(-50%, -40%, 0) scale(0.9)"
      }), animate("{{showTransitionParams}}")]), transition("visibleTouchUI => void", [animate("{{hideTransitionParams}}", style({
        opacity: 0,
        transform: "translate3d(-50%, -40%, 0) scale(0.9)"
      }))])])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatePicker, [{
    type: Component,
    args: [{
      selector: "p-datePicker, p-datepicker, p-date-picker",
      standalone: true,
      imports: [CommonModule, Button, Ripple, ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon, ChevronDownIcon, TimesIcon, CalendarIcon, AutoFocus, InputText, SharedModule],
      template: `
        <span #container [ngClass]="rootClass" [ngStyle]="style" [class]="styleClass">
            <ng-template [ngIf]="!inline">
                <input
                    #inputfield
                    pInputText
                    type="text"
                    role="combobox"
                    [attr.id]="inputId"
                    [attr.name]="name"
                    [attr.required]="required"
                    [attr.aria-required]="required"
                    aria-autocomplete="none"
                    aria-haspopup="dialog"
                    [attr.aria-expanded]="overlayVisible ?? false"
                    [attr.aria-controls]="overlayVisible ? panelId : null"
                    [attr.aria-labelledby]="ariaLabelledBy"
                    [attr.aria-label]="ariaLabel"
                    [value]="inputFieldValue"
                    (focus)="onInputFocus($event)"
                    (keydown)="onInputKeydown($event)"
                    (click)="onInputClick()"
                    (blur)="onInputBlur($event)"
                    [readonly]="readonlyInput"
                    (input)="onUserInput($event)"
                    [ngStyle]="inputStyle"
                    [class]="inputStyleClass"
                    [ngClass]="'p-datepicker-input'"
                    [placeholder]="placeholder || ''"
                    [disabled]="disabled"
                    [attr.tabindex]="tabindex"
                    [attr.inputmode]="touchUI ? 'off' : null"
                    autocomplete="off"
                    [pAutoFocus]="autofocus"
                    [variant]="variant"
                    [fluid]="hasFluid"
                />
                <ng-container *ngIf="showClear && !disabled && value != null">
                    <TimesIcon *ngIf="!clearIconTemplate && !_clearIconTemplate" [class]="'p-datepicker-clear-icon'" (click)="clear()" />
                    <span *ngIf="clearIconTemplate || _clearIconTemplate" class="p-datepicker-clear-icon" (click)="clear()">
                        <ng-template *ngTemplateOutlet="clearIconTemplate || _clearIconTemplate"></ng-template>
                    </span>
                </ng-container>
                <button
                    type="button"
                    [attr.aria-label]="iconButtonAriaLabel"
                    aria-haspopup="dialog"
                    [attr.aria-expanded]="overlayVisible ?? false"
                    [attr.aria-controls]="overlayVisible ? panelId : null"
                    *ngIf="showIcon && iconDisplay === 'button'"
                    (click)="onButtonClick($event, inputfield)"
                    class="p-datepicker-dropdown"
                    [disabled]="disabled"
                    tabindex="0"
                >
                    <span *ngIf="icon" [ngClass]="icon"></span>
                    <ng-container *ngIf="!icon">
                        <CalendarIcon *ngIf="!triggerIconTemplate && !_triggerIconTemplate" />
                        <ng-template *ngTemplateOutlet="triggerIconTemplate || _triggerIconTemplate"></ng-template>
                    </ng-container>
                </button>
                <ng-container *ngIf="iconDisplay === 'input' && showIcon">
                    <span class="p-datepicker-input-icon-container">
                        <CalendarIcon
                            (click)="onButtonClick($event)"
                            *ngIf="!inputIconTemplate && !_inputIconTemplate"
                            [ngClass]="{
                                'p-datepicker-input-icon': showOnFocus
                            }"
                        />

                        <ng-container *ngTemplateOutlet="inputIconTemplate || _inputIconTemplate; context: { clickCallBack: onButtonClick.bind(this) }"></ng-container>
                    </span>
                </ng-container>
            </ng-template>
            <div
                #contentWrapper
                [attr.id]="panelId"
                [class]="panelStyleClass"
                [ngStyle]="panelStyle"
                [ngClass]="panelClass"
                [@overlayAnimation]="{
                    value: 'visible',
                    params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions }
                }"
                [attr.aria-label]="getTranslation('chooseDate')"
                [attr.role]="inline ? null : 'dialog'"
                [attr.aria-modal]="inline ? null : 'true'"
                [@.disabled]="inline === true"
                (@overlayAnimation.start)="onOverlayAnimationStart($event)"
                (@overlayAnimation.done)="onOverlayAnimationDone($event)"
                (click)="onOverlayClick($event)"
                *ngIf="inline || overlayVisible"
            >
                <ng-content select="p-header"></ng-content>
                <ng-container *ngTemplateOutlet="headerTemplate || _headerTemplate"></ng-container>
                <ng-container *ngIf="!timeOnly">
                    <div class="p-datepicker-calendar-container">
                        <div class="p-datepicker-calendar" *ngFor="let month of months; let i = index">
                            <div class="p-datepicker-header">
                                <p-button
                                    size="small"
                                    rounded
                                    text
                                    (keydown)="onContainerButtonKeydown($event)"
                                    styleClass="p-datepicker-prev-button p-button-icon-only"
                                    (onClick)="onPrevButtonClick($event)"
                                    [ngStyle]="{ visibility: i === 0 ? 'visible' : 'hidden' }"
                                    type="button"
                                    [attr.aria-label]="prevIconAriaLabel"
                                >
                                    <ChevronLeftIcon *ngIf="!previousIconTemplate && !_previousIconTemplate" />
                                    <span *ngIf="previousIconTemplate || !_previousIconTemplate">
                                        <ng-template *ngTemplateOutlet="previousIconTemplate || _previousIconTemplate"></ng-template>
                                    </span>
                                </p-button>
                                <div class="p-datepicker-title">
                                    <button
                                        *ngIf="currentView === 'date'"
                                        type="button"
                                        (click)="switchToMonthView($event)"
                                        (keydown)="onContainerButtonKeydown($event)"
                                        class="p-datepicker-select-month"
                                        [disabled]="switchViewButtonDisabled()"
                                        [attr.aria-label]="this.getTranslation('chooseMonth')"
                                        pRipple
                                    >
                                        {{ getMonthName(month.month) }}
                                    </button>
                                    <button
                                        *ngIf="currentView !== 'year'"
                                        type="button"
                                        (click)="switchToYearView($event)"
                                        (keydown)="onContainerButtonKeydown($event)"
                                        class="p-datepicker-select-year"
                                        [disabled]="switchViewButtonDisabled()"
                                        [attr.aria-label]="getTranslation('chooseYear')"
                                        pRipple
                                    >
                                        {{ getYear(month) }}
                                    </button>
                                    <span class="p-datepicker-decade" *ngIf="currentView === 'year'">
                                        <ng-container *ngIf="!decadeTemplate && _decadeTemplate">{{ yearPickerValues()[0] }} - {{ yearPickerValues()[yearPickerValues().length - 1] }}</ng-container>
                                        <ng-container *ngTemplateOutlet="decadeTemplate || _decadeTemplate; context: { $implicit: yearPickerValues }"></ng-container>
                                    </span>
                                </div>
                                <p-button
                                    rounded
                                    text
                                    size="small"
                                    (keydown)="onContainerButtonKeydown($event)"
                                    styleClass="p-datepicker-next-button p-button-icon-only"
                                    (onClick)="onNextButtonClick($event)"
                                    [ngStyle]="{ visibility: i === months.length - 1 ? 'visible' : 'hidden' }"
                                    [attr.aria-label]="nextIconAriaLabel"
                                >
                                    <ChevronRightIcon *ngIf="!nextIconTemplate && !_nextIconTemplate" />

                                    <span *ngIf="nextIconTemplate || !_nextIconTemplate">
                                        <ng-template *ngTemplateOutlet="nextIconTemplate || _nextIconTemplate"></ng-template>
                                    </span>
                                </p-button>
                            </div>
                            <table class="p-datepicker-day-view" role="grid" *ngIf="currentView === 'date'">
                                <thead>
                                    <tr>
                                        <th *ngIf="showWeek" class="p-datepicker-weekheader p-disabled">
                                            <span>{{ getTranslation('weekHeader') }}</span>
                                        </th>
                                        <th class="p-datepicker-weekday-cell" scope="col" *ngFor="let weekDay of weekDays; let begin = first; let end = last">
                                            <span class="p-datepicker-weekday">{{ weekDay }}</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr *ngFor="let week of month.dates; let j = index">
                                        <td *ngIf="showWeek" class="p-datepicker-weeknumber">
                                            <span class="p-datepicker-weeklabel-container p-disabled">
                                                {{ month.weekNumbers[j] }}
                                            </span>
                                        </td>
                                        <td
                                            *ngFor="let date of week"
                                            [attr.aria-label]="date.day"
                                            [ngClass]="{
                                                'p-datepicker-day-cell': true,
                                                'p-datepicker-other-month': date.otherMonth,
                                                'p-datepicker-today': date.today
                                            }"
                                        >
                                            <ng-container *ngIf="date.otherMonth ? showOtherMonths : true">
                                                <span
                                                    [ngClass]="dayClass(date)"
                                                    (click)="onDateSelect($event, date)"
                                                    draggable="false"
                                                    [attr.data-date]="formatDateKey(formatDateMetaToDate(date))"
                                                    (keydown)="onDateCellKeydown($event, date, i)"
                                                    pRipple
                                                >
                                                    <ng-container *ngIf="!dateTemplate && !_dateTemplate && (date.selectable || (!disabledDateTemplate && !_disabledDateTemplate))">{{ date.day }}</ng-container>
                                                    <ng-container *ngIf="date.selectable || (!disabledDateTemplate && !_disabledDateTemplate)">
                                                        <ng-container *ngTemplateOutlet="dateTemplate || _dateTemplate; context: { $implicit: date }"></ng-container>
                                                    </ng-container>
                                                    <ng-container *ngIf="!date.selectable">
                                                        <ng-container *ngTemplateOutlet="disabledDateTemplate || _disabledDateTemplate; context: { $implicit: date }"></ng-container>
                                                    </ng-container>
                                                </span>
                                                <div *ngIf="isSelected(date)" class="p-hidden-accessible" aria-live="polite">
                                                    {{ date.day }}
                                                </div>
                                            </ng-container>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="p-datepicker-month-view" *ngIf="currentView === 'month'">
                        <span
                            *ngFor="let m of monthPickerValues(); let i = index"
                            (click)="onMonthSelect($event, i)"
                            (keydown)="onMonthCellKeydown($event, i)"
                            [ngClass]="{
                                'p-datepicker-month': true,
                                'p-datepicker-month-selected': isMonthSelected(i),
                                'p-disabled': isMonthDisabled(i)
                            }"
                            pRipple
                        >
                            {{ m }}
                            <div *ngIf="isMonthSelected(i)" class="p-hidden-accessible" aria-live="polite">
                                {{ m }}
                            </div>
                        </span>
                    </div>
                    <div class="p-datepicker-year-view" *ngIf="currentView === 'year'">
                        <span
                            *ngFor="let y of yearPickerValues()"
                            (click)="onYearSelect($event, y)"
                            (keydown)="onYearCellKeydown($event, y)"
                            [ngClass]="{
                                'p-datepicker-year': true,
                                'p-datepicker-year-selected': isYearSelected(y),
                                'p-disabled': isYearDisabled(y)
                            }"
                            pRipple
                        >
                            {{ y }}
                            <div *ngIf="isYearSelected(y)" class="p-hidden-accessible" aria-live="polite">
                                {{ y }}
                            </div>
                        </span>
                    </div>
                </ng-container>
                <div class="p-datepicker-time-picker" *ngIf="(showTime || timeOnly) && currentView === 'date'">
                    <div class="p-datepicker-hour-picker">
                        <p-button
                            rounded
                            text
                            size="small"
                            styleClass="p-datepicker-increment-button p-button-icon-only"
                            (keydown)="onContainerButtonKeydown($event)"
                            (keydown.enter)="incrementHour($event)"
                            (keydown.space)="incrementHour($event)"
                            (mousedown)="onTimePickerElementMouseDown($event, 0, 1)"
                            (mouseup)="onTimePickerElementMouseUp($event)"
                            (keyup.enter)="onTimePickerElementMouseUp($event)"
                            (keyup.space)="onTimePickerElementMouseUp($event)"
                            (mouseleave)="onTimePickerElementMouseLeave()"
                            [attr.aria-label]="getTranslation('nextHour')"
                        >
                            <ChevronUpIcon *ngIf="!incrementIconTemplate && !_incrementIconTemplate" />

                            <ng-template *ngTemplateOutlet="incrementIconTemplate || _incrementIconTemplate"></ng-template>
                        </p-button>
                        <span><ng-container *ngIf="currentHour < 10">0</ng-container>{{ currentHour }}</span>
                        <p-button
                            rounded
                            text
                            size="small"
                            styleClass="p-datepicker-increment-button p-button-icon-only"
                            (keydown)="onContainerButtonKeydown($event)"
                            (keydown.enter)="decrementHour($event)"
                            (keydown.space)="decrementHour($event)"
                            (mousedown)="onTimePickerElementMouseDown($event, 0, -1)"
                            (mouseup)="onTimePickerElementMouseUp($event)"
                            (keyup.enter)="onTimePickerElementMouseUp($event)"
                            (keyup.space)="onTimePickerElementMouseUp($event)"
                            (mouseleave)="onTimePickerElementMouseLeave()"
                            [attr.aria-label]="getTranslation('prevHour')"
                        >
                            <ChevronDownIcon *ngIf="!decrementIconTemplate && !_decrementIconTemplate" />

                            <ng-template *ngTemplateOutlet="decrementIconTemplate || _decrementIconTemplate"></ng-template>
                        </p-button>
                    </div>
                    <div class="p-datepicker-separator">
                        <span>{{ timeSeparator }}</span>
                    </div>
                    <div class="p-datepicker-minute-picker">
                        <p-button
                            rounded
                            text
                            size="small"
                            styleClass="p-datepicker-increment-button p-button-icon-only"
                            (keydown)="onContainerButtonKeydown($event)"
                            (keydown.enter)="incrementMinute($event)"
                            (keydown.space)="incrementMinute($event)"
                            (mousedown)="onTimePickerElementMouseDown($event, 1, 1)"
                            (mouseup)="onTimePickerElementMouseUp($event)"
                            (keyup.enter)="onTimePickerElementMouseUp($event)"
                            (keyup.space)="onTimePickerElementMouseUp($event)"
                            (mouseleave)="onTimePickerElementMouseLeave()"
                            [attr.aria-label]="getTranslation('nextMinute')"
                        >
                            <ChevronUpIcon *ngIf="!incrementIconTemplate && !_incrementIconTemplate" />

                            <ng-template *ngTemplateOutlet="incrementIconTemplate || _incrementIconTemplate"></ng-template>
                        </p-button>
                        <span><ng-container *ngIf="currentMinute < 10">0</ng-container>{{ currentMinute }}</span>
                        <p-button
                            rounded
                            text
                            size="small"
                            styleClass="p-datepicker-increment-button p-button-icon-only"
                            (keydown)="onContainerButtonKeydown($event)"
                            (keydown.enter)="decrementMinute($event)"
                            (keydown.space)="decrementMinute($event)"
                            (mousedown)="onTimePickerElementMouseDown($event, 1, -1)"
                            (mouseup)="onTimePickerElementMouseUp($event)"
                            (keyup.enter)="onTimePickerElementMouseUp($event)"
                            (keyup.space)="onTimePickerElementMouseUp($event)"
                            (mouseleave)="onTimePickerElementMouseLeave()"
                            [attr.aria-label]="getTranslation('prevMinute')"
                        >
                            <ChevronDownIcon *ngIf="!decrementIconTemplate && !_decrementIconTemplate" />
                            <ng-container *ngIf="decrementIconTemplate || _decrementIconTemplate">
                                <ng-template *ngTemplateOutlet="decrementIconTemplate || _decrementIconTemplate"></ng-template>
                            </ng-container>
                        </p-button>
                    </div>
                    <div class="p-datepicker-separator" *ngIf="showSeconds">
                        <span>{{ timeSeparator }}</span>
                    </div>
                    <div class="p-datepicker-second-picker" *ngIf="showSeconds">
                        <p-button
                            rounded
                            text
                            size="small"
                            styleClass="p-datepicker-increment-button p-button-icon-only"
                            (keydown)="onContainerButtonKeydown($event)"
                            (keydown.enter)="incrementSecond($event)"
                            (keydown.space)="incrementSecond($event)"
                            (mousedown)="onTimePickerElementMouseDown($event, 2, 1)"
                            (mouseup)="onTimePickerElementMouseUp($event)"
                            (keyup.enter)="onTimePickerElementMouseUp($event)"
                            (keyup.space)="onTimePickerElementMouseUp($event)"
                            (mouseleave)="onTimePickerElementMouseLeave()"
                            [attr.aria-label]="getTranslation('nextSecond')"
                        >
                            <ChevronUpIcon *ngIf="!incrementIconTemplate && !_incrementIconTemplate" />

                            <ng-template *ngTemplateOutlet="incrementIconTemplate || _incrementIconTemplate"></ng-template>
                        </p-button>
                        <span><ng-container *ngIf="currentSecond < 10">0</ng-container>{{ currentSecond }}</span>
                        <p-button
                            rounded
                            text
                            size="small"
                            styleClass="p-datepicker-increment-button p-button-icon-only"
                            (keydown)="onContainerButtonKeydown($event)"
                            (keydown.enter)="decrementSecond($event)"
                            (keydown.space)="decrementSecond($event)"
                            (mousedown)="onTimePickerElementMouseDown($event, 2, -1)"
                            (mouseup)="onTimePickerElementMouseUp($event)"
                            (keyup.enter)="onTimePickerElementMouseUp($event)"
                            (keyup.space)="onTimePickerElementMouseUp($event)"
                            (mouseleave)="onTimePickerElementMouseLeave()"
                            [attr.aria-label]="getTranslation('prevSecond')"
                        >
                            <ChevronDownIcon *ngIf="!decrementIconTemplate && !_decrementIconTemplate" />

                            <ng-template *ngTemplateOutlet="decrementIconTemplate || _decrementIconTemplate"></ng-template>
                        </p-button>
                    </div>
                    <div class="p-datepicker-separator" *ngIf="hourFormat == '12'">
                        <span>{{ timeSeparator }}</span>
                    </div>
                    <div class="p-datepicker-ampm-picker" *ngIf="hourFormat == '12'">
                        <p-button
                            size="small"
                            text
                            rounded
                            styleClass="p-datepicker-increment-button p-button-icon-only"
                            (keydown)="onContainerButtonKeydown($event)"
                            (onClick)="toggleAMPM($event)"
                            (keydown.enter)="toggleAMPM($event)"
                            [attr.aria-label]="getTranslation('am')"
                        >
                            <ChevronUpIcon *ngIf="!incrementIconTemplate && !_incrementIconTemplate" />
                            <ng-template *ngTemplateOutlet="incrementIconTemplate || _incrementIconTemplate"></ng-template>
                        </p-button>
                        <span>{{ pm ? 'PM' : 'AM' }}</span>
                        <p-button
                            size="small"
                            text
                            rounded
                            styleClass="p-datepicker-increment-button p-button-icon-only"
                            (keydown)="onContainerButtonKeydown($event)"
                            (click)="toggleAMPM($event)"
                            (keydown.enter)="toggleAMPM($event)"
                            [attr.aria-label]="getTranslation('pm')"
                        >
                            <ChevronDownIcon *ngIf="!decrementIconTemplate && !_decrementIconTemplate" />
                            <ng-template *ngTemplateOutlet="decrementIconTemplate || _decrementIconTemplate"></ng-template>
                        </p-button>
                    </div>
                </div>
                <div class="p-datepicker-buttonbar" *ngIf="showButtonBar">
                    <p-button size="small" styleClass="p-datepicker-today-button" [label]="getTranslation('today')" (keydown)="onContainerButtonKeydown($event)" (onClick)="onTodayButtonClick($event)" [ngClass]="todayButtonStyleClass" />
                    <p-button size="small" styleClass="p-datepicker-clear-button" [label]="getTranslation('clear')" (keydown)="onContainerButtonKeydown($event)" (onClick)="onClearButtonClick($event)" [ngClass]="clearButtonStyleClass" />
                </div>
                <ng-content select="p-footer"></ng-content>
                <ng-container *ngTemplateOutlet="footerTemplate || _footerTemplate"></ng-container>
            </div>
        </span>
    `,
      animations: [trigger("overlayAnimation", [state("visibleTouchUI", style({
        transform: "translate(-50%,-50%)",
        opacity: 1
      })), transition("void => visible", [style({
        opacity: 0,
        transform: "scaleY(0.8)"
      }), animate("{{showTransitionParams}}", style({
        opacity: 1,
        transform: "*"
      }))]), transition("visible => void", [animate("{{hideTransitionParams}}", style({
        opacity: 0
      }))]), transition("void => visibleTouchUI", [style({
        opacity: 0,
        transform: "translate3d(-50%, -40%, 0) scale(0.9)"
      }), animate("{{showTransitionParams}}")]), transition("visibleTouchUI => void", [animate("{{hideTransitionParams}}", style({
        opacity: 0,
        transform: "translate3d(-50%, -40%, 0) scale(0.9)"
      }))])])],
      providers: [DATEPICKER_VALUE_ACCESSOR, DatePickerStyle],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None
    }]
  }], () => [{
    type: NgZone
  }, {
    type: OverlayService
  }], {
    iconDisplay: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    inputStyle: [{
      type: Input
    }],
    inputId: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    inputStyleClass: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    iconAriaLabel: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    dateFormat: [{
      type: Input
    }],
    multipleSeparator: [{
      type: Input
    }],
    rangeSeparator: [{
      type: Input
    }],
    inline: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showOtherMonths: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selectOtherMonths: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showIcon: [{
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
    icon: [{
      type: Input
    }],
    appendTo: [{
      type: Input
    }],
    readonlyInput: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    shortYearCutoff: [{
      type: Input
    }],
    monthNavigator: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    yearNavigator: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hourFormat: [{
      type: Input
    }],
    timeOnly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    stepHour: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    stepMinute: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    stepSecond: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    showSeconds: [{
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
    showOnFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showWeek: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    startWeekFromFirstDayOfYear: [{
      type: Input
    }],
    showClear: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    dataType: [{
      type: Input
    }],
    selectionMode: [{
      type: Input
    }],
    maxDateCount: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    showButtonBar: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    todayButtonStyleClass: [{
      type: Input
    }],
    clearButtonStyleClass: [{
      type: Input
    }],
    autofocus: [{
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
    panelStyleClass: [{
      type: Input
    }],
    panelStyle: [{
      type: Input
    }],
    keepInvalid: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hideOnDateTimeSelect: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    touchUI: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    timeSeparator: [{
      type: Input
    }],
    focusTrap: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
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
    size: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }],
    disabledDates: [{
      type: Input
    }],
    disabledDays: [{
      type: Input
    }],
    yearRange: [{
      type: Input
    }],
    showTime: [{
      type: Input
    }],
    responsiveOptions: [{
      type: Input
    }],
    numberOfMonths: [{
      type: Input
    }],
    firstDayOfWeek: [{
      type: Input
    }],
    locale: [{
      type: Input
    }],
    view: [{
      type: Input
    }],
    defaultDate: [{
      type: Input
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    onClose: [{
      type: Output
    }],
    onSelect: [{
      type: Output
    }],
    onClear: [{
      type: Output
    }],
    onInput: [{
      type: Output
    }],
    onTodayClick: [{
      type: Output
    }],
    onClearClick: [{
      type: Output
    }],
    onMonthChange: [{
      type: Output
    }],
    onYearChange: [{
      type: Output
    }],
    onClickOutside: [{
      type: Output
    }],
    onShow: [{
      type: Output
    }],
    containerViewChild: [{
      type: ViewChild,
      args: ["container", {
        static: false
      }]
    }],
    inputfieldViewChild: [{
      type: ViewChild,
      args: ["inputfield", {
        static: false
      }]
    }],
    content: [{
      type: ViewChild,
      args: ["contentWrapper", {
        static: false
      }]
    }],
    dateTemplate: [{
      type: ContentChild,
      args: ["date", {
        descendants: false
      }]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: ["header", {
        descendants: false
      }]
    }],
    footerTemplate: [{
      type: ContentChild,
      args: ["footer", {
        descendants: false
      }]
    }],
    disabledDateTemplate: [{
      type: ContentChild,
      args: ["disabledDate", {
        descendants: false
      }]
    }],
    decadeTemplate: [{
      type: ContentChild,
      args: ["decade", {
        descendants: false
      }]
    }],
    previousIconTemplate: [{
      type: ContentChild,
      args: ["previousicon", {
        descendants: false
      }]
    }],
    nextIconTemplate: [{
      type: ContentChild,
      args: ["nexticon", {
        descendants: false
      }]
    }],
    triggerIconTemplate: [{
      type: ContentChild,
      args: ["triggericon", {
        descendants: false
      }]
    }],
    clearIconTemplate: [{
      type: ContentChild,
      args: ["clearicon", {
        descendants: false
      }]
    }],
    decrementIconTemplate: [{
      type: ContentChild,
      args: ["decrementicon", {
        descendants: false
      }]
    }],
    incrementIconTemplate: [{
      type: ContentChild,
      args: ["incrementicon", {
        descendants: false
      }]
    }],
    inputIconTemplate: [{
      type: ContentChild,
      args: ["inputicon", {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DatePicker, {
    className: "DatePicker",
    filePath: "datepicker.ts",
    lineNumber: 529
  });
})();
var DatePickerModule = class _DatePickerModule {
  static \u0275fac = function DatePickerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DatePickerModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _DatePickerModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [DatePicker, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatePickerModule, [{
    type: NgModule,
    args: [{
      imports: [DatePicker, SharedModule],
      exports: [DatePicker, SharedModule]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-inputnumber.mjs
var theme2 = ({
  dt
}) => `
.p-inputnumber {
    display: inline-flex;
    position: relative;
}

.p-inputnumber-button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    cursor: pointer;
    background: ${dt("inputnumber.button.background")};
    color: ${dt("inputnumber.button.color")};
    width: ${dt("inputnumber.button.width")};
    transition: background ${dt("inputnumber.transition.duration")}, color ${dt("inputnumber.transition.duration")}, border-color ${dt("inputnumber.transition.duration")}, outline-color ${dt("inputnumber.transition.duration")};
}

.p-inputnumber-button:hover {
    background: ${dt("inputnumber.button.hover.background")};
    color: ${dt("inputnumber.button.hover.color")};
}

.p-inputnumber-button:active {
    background: ${dt("inputnumber.button.active.background")};
    color: ${dt("inputnumber.button.active.color")};
}

.p-inputnumber-stacked .p-inputnumber-button {
    position: relative;
    border: 0 none;
}

.p-inputnumber-stacked .p-inputnumber-button-group {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 1px;
    inset-inline-end: 1px;
    height: calc(100% - 2px);
    z-index: 1;
}

.p-inputnumber-stacked .p-inputnumber-increment-button {
    padding: 0;
    border-end-start-radius: calc(${dt("inputnumber.button.border.radius")} - 1px);
}

.p-inputnumber-stacked .p-inputnumber-decrement-button {
    padding: 0;
    border-end-end-radius: calc(${dt("inputnumber.button.border.radius")} - 1px);
}

.p-inputnumber-stacked .p-inputnumber-button {
    flex: 1 1 auto;
    border: 0 none;
}

.p-inputnumber-horizontal .p-inputnumber-button {
    border: 1px solid ${dt("inputnumber.button.border.color")};
}

.p-inputnumber-horizontal .p-inputnumber-button:hover {
    border-color: ${dt("inputnumber.button.hover.border.color")};
}

.p-inputnumber-horizontal .p-inputnumber-button:active {
    border-color: ${dt("inputnumber.button.active.border.color")};
}

.p-inputnumber-horizontal .p-inputnumber-increment-button {
    order: 3;
    border-start-end-radius: ${dt("inputnumber.button.border.radius")};
    border-end-end-radius: ${dt("inputnumber.button.border.radius")};
    border-inline-start: 0 none;
}

.p-inputnumber-horizontal .p-inputnumber-input {
    order: 2;
    border-radius: 0;
}

.p-inputnumber-horizontal .p-inputnumber-decrement-button {
    order: 1;
    border-start-start-radius: ${dt("inputnumber.button.border.radius")};
    border-end-start-radius: ${dt("inputnumber.button.border.radius")};
    border-inline-end: 0 none;
}

.p-floatlabel:has(.p-inputnumber-horizontal) label {
    margin-inline-start: ${dt("inputnumber.button.width")};
}

.p-inputnumber-vertical {
    flex-direction: column;
}

.p-inputnumber-vertical .p-inputnumber-button {
    border: 1px solid ${dt("inputnumber.button.border.color")};
    padding-block: ${dt("inputnumber.button.vertical.padding")};
    padding-inline: 0;
}

.p-inputnumber-vertical .p-inputnumber-button:hover {
    border-color: ${dt("inputnumber.button.hover.border.color")};
}

.p-inputnumber-vertical .p-inputnumber-button:active {
    border-color: ${dt("inputnumber.button.active.border.color")};
}

.p-inputnumber-vertical .p-inputnumber-increment-button {
    order: 1;
    border-start-start-radius: ${dt("inputnumber.button.border.radius")};
    border-start-end-radius: ${dt("inputnumber.button.border.radius")};
    width: 100%;
    border-block-end: 0 none;
}

.p-inputnumber-vertical .p-inputnumber-input {
    order: 2;
    border-radius: 0;
    text-align: center;
}

.p-inputnumber-vertical .p-inputnumber-decrement-button {
    order: 3;
    border-end-start-radius: ${dt("inputnumber.button.border.radius")};
    border-end-end-radius: ${dt("inputnumber.button.border.radius")};
    width: 100%;
    border-block-start: 0 none;
}

.p-inputnumber-input {
    flex: 1 1 auto;
}

.p-inputnumber-fluid {
    width: 100%;
}

.p-inputnumber-fluid .p-inputnumber-input {
    width: 1%;
}

.p-inputnumber-fluid.p-inputnumber-vertical .p-inputnumber-input {
    width: 100%;
}

.p-inputnumber:has(.p-inputtext-sm) .p-inputnumber-button .p-icon {
    font-size: ${dt("form.field.sm.font.size")};
    width: ${dt("form.field.sm.font.size")};
    height: ${dt("form.field.sm.font.size")};
}

.p-inputnumber:has(.p-inputtext-lg) .p-inputnumber-button .p-icon {
    font-size: ${dt("form.field.lg.font.size")};
    width: ${dt("form.field.lg.font.size")};
    height: ${dt("form.field.lg.font.size")};
}

p-inputnumber.ng-invalid.ng-dirty > .p-inputtext {
    border-color: ${dt("inputtext.invalid.border.color")};
}

p-inputnumber.ng-invalid.ng-dirty > .p-inputtext:enabled:focus {
    border-color: ${dt("inputtext.focus.border.color")};
}

p-inputnumber.ng-invalid.ng-dirty > .p-inputtext::placeholder {
    color: ${dt("inputtext.invalid.placeholder.color")};
}
`;
var classes2 = {
  root: ({
    instance
  }) => ({
    "p-inputnumber p-component p-inputwrapper": true,
    "p-inputwrapper-filled": instance.filled || instance.allowEmpty === false,
    "p-inputwrapper-focus": instance.focused,
    "p-inputnumber-stacked": instance.showButtons && instance.buttonLayout === "stacked",
    "p-inputnumber-horizontal": instance.showButtons && instance.buttonLayout === "horizontal",
    "p-inputnumber-vertical": instance.showButtons && instance.buttonLayout === "vertical",
    "p-inputnumber-fluid": instance.hasFluid
  }),
  pcInput: "p-inputnumber-input",
  buttonGroup: "p-inputnumber-button-group",
  incrementButton: ({
    instance
  }) => ({
    "p-inputnumber-button p-inputnumber-increment-button": true,
    "p-disabled": instance.showButtons && instance.max !== null && instance.maxlength
  }),
  decrementButton: ({
    instance
  }) => ({
    "p-inputnumber-button p-inputnumber-decrement-button": true,
    "p-disabled": instance.showButtons && instance.min !== null && instance.minlength
  })
};
var InputNumberStyle = class _InputNumberStyle extends BaseStyle {
  name = "inputnumber";
  theme = theme2;
  classes = classes2;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275InputNumberStyle_BaseFactory;
    return function InputNumberStyle_Factory(__ngFactoryType__) {
      return (\u0275InputNumberStyle_BaseFactory || (\u0275InputNumberStyle_BaseFactory = \u0275\u0275getInheritedFactory(_InputNumberStyle)))(__ngFactoryType__ || _InputNumberStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _InputNumberStyle,
    factory: _InputNumberStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputNumberStyle, [{
    type: Injectable
  }], null, null);
})();
var InputNumberClasses;
(function(InputNumberClasses2) {
  InputNumberClasses2["root"] = "p-inputnumber";
  InputNumberClasses2["pcInput"] = "p-inputnumber-input";
  InputNumberClasses2["buttonGroup"] = "p-inputnumber-button-group";
  InputNumberClasses2["incrementButton"] = "p-inputnumber-increment-button";
  InputNumberClasses2["decrementButton"] = "p-inputnumber-decrement-button";
})(InputNumberClasses || (InputNumberClasses = {}));
var _c02 = ["clearicon"];
var _c110 = ["incrementbuttonicon"];
var _c26 = ["decrementbuttonicon"];
var _c32 = ["input"];
function InputNumber_ng_container_2_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "TimesIcon", 7);
    \u0275\u0275listener("click", function InputNumber_ng_container_2_TimesIcon_1_Template_TimesIcon_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.clear());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("ngClass", "p-inputnumber-clear-icon");
    \u0275\u0275attribute("data-pc-section", "clearIcon");
  }
}
function InputNumber_ng_container_2_span_2_1_ng_template_0_Template(rf, ctx) {
}
function InputNumber_ng_container_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, InputNumber_ng_container_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function InputNumber_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275listener("click", function InputNumber_ng_container_2_span_2_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.clear());
    });
    \u0275\u0275template(1, InputNumber_ng_container_2_span_2_1_Template, 1, 0, null, 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("data-pc-section", "clearIcon");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.clearIconTemplate || ctx_r2._clearIconTemplate);
  }
}
function InputNumber_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, InputNumber_ng_container_2_TimesIcon_1_Template, 1, 2, "TimesIcon", 5)(2, InputNumber_ng_container_2_span_2_Template, 2, 2, "span", 6);
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
function InputNumber_span_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 13);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r2.incrementButtonIcon);
    \u0275\u0275attribute("data-pc-section", "incrementbuttonicon");
  }
}
function InputNumber_span_3_ng_container_3_AngleUpIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "AngleUpIcon");
  }
  if (rf & 2) {
    \u0275\u0275attribute("data-pc-section", "incrementbuttonicon");
  }
}
function InputNumber_span_3_ng_container_3_2_ng_template_0_Template(rf, ctx) {
}
function InputNumber_span_3_ng_container_3_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, InputNumber_span_3_ng_container_3_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function InputNumber_span_3_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, InputNumber_span_3_ng_container_3_AngleUpIcon_1_Template, 1, 1, "AngleUpIcon", 2)(2, InputNumber_span_3_ng_container_3_2_Template, 1, 0, null, 9);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.incrementButtonIconTemplate && !ctx_r2._incrementButtonIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.incrementButtonIconTemplate || ctx_r2._incrementButtonIconTemplate);
  }
}
function InputNumber_span_3_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 13);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r2.decrementButtonIcon);
    \u0275\u0275attribute("data-pc-section", "decrementbuttonicon");
  }
}
function InputNumber_span_3_ng_container_6_AngleDownIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "AngleDownIcon");
  }
  if (rf & 2) {
    \u0275\u0275attribute("data-pc-section", "decrementbuttonicon");
  }
}
function InputNumber_span_3_ng_container_6_2_ng_template_0_Template(rf, ctx) {
}
function InputNumber_span_3_ng_container_6_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, InputNumber_span_3_ng_container_6_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function InputNumber_span_3_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, InputNumber_span_3_ng_container_6_AngleDownIcon_1_Template, 1, 1, "AngleDownIcon", 2)(2, InputNumber_span_3_ng_container_6_2_Template, 1, 0, null, 9);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.decrementButtonIconTemplate && !ctx_r2._decrementButtonIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.decrementButtonIconTemplate || ctx_r2._decrementButtonIconTemplate);
  }
}
function InputNumber_span_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 10)(1, "button", 11);
    \u0275\u0275listener("mousedown", function InputNumber_span_3_Template_button_mousedown_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onUpButtonMouseDown($event));
    })("mouseup", function InputNumber_span_3_Template_button_mouseup_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onUpButtonMouseUp());
    })("mouseleave", function InputNumber_span_3_Template_button_mouseleave_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onUpButtonMouseLeave());
    })("keydown", function InputNumber_span_3_Template_button_keydown_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onUpButtonKeyDown($event));
    })("keyup", function InputNumber_span_3_Template_button_keyup_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onUpButtonKeyUp());
    });
    \u0275\u0275template(2, InputNumber_span_3_span_2_Template, 1, 2, "span", 12)(3, InputNumber_span_3_ng_container_3_Template, 3, 2, "ng-container", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 11);
    \u0275\u0275listener("mousedown", function InputNumber_span_3_Template_button_mousedown_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDownButtonMouseDown($event));
    })("mouseup", function InputNumber_span_3_Template_button_mouseup_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDownButtonMouseUp());
    })("mouseleave", function InputNumber_span_3_Template_button_mouseleave_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDownButtonMouseLeave());
    })("keydown", function InputNumber_span_3_Template_button_keydown_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDownButtonKeyDown($event));
    })("keyup", function InputNumber_span_3_Template_button_keyup_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDownButtonKeyUp());
    });
    \u0275\u0275template(5, InputNumber_span_3_span_5_Template, 1, 2, "span", 12)(6, InputNumber_span_3_ng_container_6_Template, 3, 2, "ng-container", 2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-pc-section", "buttonGroup");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.incrementButtonClass);
    \u0275\u0275property("ngClass", ctx_r2._incrementButtonClass)("disabled", ctx_r2.disabled);
    \u0275\u0275attribute("aria-hidden", true)("data-pc-section", "incrementbutton");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.incrementButtonIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.incrementButtonIcon);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.decrementButtonClass);
    \u0275\u0275property("ngClass", ctx_r2._decrementButtonClass)("disabled", ctx_r2.disabled);
    \u0275\u0275attribute("aria-hidden", true)("data-pc-section", "decrementbutton");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.decrementButtonIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.decrementButtonIcon);
  }
}
function InputNumber_button_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 13);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r2.incrementButtonIcon);
    \u0275\u0275attribute("data-pc-section", "incrementbuttonicon");
  }
}
function InputNumber_button_4_ng_container_2_AngleUpIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "AngleUpIcon");
  }
  if (rf & 2) {
    \u0275\u0275attribute("data-pc-section", "incrementbuttonicon");
  }
}
function InputNumber_button_4_ng_container_2_2_ng_template_0_Template(rf, ctx) {
}
function InputNumber_button_4_ng_container_2_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, InputNumber_button_4_ng_container_2_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function InputNumber_button_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, InputNumber_button_4_ng_container_2_AngleUpIcon_1_Template, 1, 1, "AngleUpIcon", 2)(2, InputNumber_button_4_ng_container_2_2_Template, 1, 0, null, 9);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.incrementButtonIconTemplate && !ctx_r2._incrementButtonIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.incrementButtonIconTemplate || ctx_r2._incrementButtonIconTemplate);
  }
}
function InputNumber_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("mousedown", function InputNumber_button_4_Template_button_mousedown_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onUpButtonMouseDown($event));
    })("mouseup", function InputNumber_button_4_Template_button_mouseup_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onUpButtonMouseUp());
    })("mouseleave", function InputNumber_button_4_Template_button_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onUpButtonMouseLeave());
    })("keydown", function InputNumber_button_4_Template_button_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onUpButtonKeyDown($event));
    })("keyup", function InputNumber_button_4_Template_button_keyup_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onUpButtonKeyUp());
    });
    \u0275\u0275template(1, InputNumber_button_4_span_1_Template, 1, 2, "span", 12)(2, InputNumber_button_4_ng_container_2_Template, 3, 2, "ng-container", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.incrementButtonClass);
    \u0275\u0275property("ngClass", ctx_r2._incrementButtonClass)("disabled", ctx_r2.disabled);
    \u0275\u0275attribute("aria-hidden", true)("data-pc-section", "incrementbutton");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.incrementButtonIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.incrementButtonIcon);
  }
}
function InputNumber_button_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 13);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r2.decrementButtonIcon);
    \u0275\u0275attribute("data-pc-section", "decrementbuttonicon");
  }
}
function InputNumber_button_5_ng_container_2_AngleDownIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "AngleDownIcon");
  }
  if (rf & 2) {
    \u0275\u0275attribute("data-pc-section", "decrementbuttonicon");
  }
}
function InputNumber_button_5_ng_container_2_2_ng_template_0_Template(rf, ctx) {
}
function InputNumber_button_5_ng_container_2_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, InputNumber_button_5_ng_container_2_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function InputNumber_button_5_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, InputNumber_button_5_ng_container_2_AngleDownIcon_1_Template, 1, 1, "AngleDownIcon", 2)(2, InputNumber_button_5_ng_container_2_2_Template, 1, 0, null, 9);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.decrementButtonIconTemplate && !ctx_r2._decrementButtonIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.decrementButtonIconTemplate || ctx_r2._decrementButtonIconTemplate);
  }
}
function InputNumber_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("mousedown", function InputNumber_button_5_Template_button_mousedown_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDownButtonMouseDown($event));
    })("mouseup", function InputNumber_button_5_Template_button_mouseup_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDownButtonMouseUp());
    })("mouseleave", function InputNumber_button_5_Template_button_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDownButtonMouseLeave());
    })("keydown", function InputNumber_button_5_Template_button_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDownButtonKeyDown($event));
    })("keyup", function InputNumber_button_5_Template_button_keyup_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDownButtonKeyUp());
    });
    \u0275\u0275template(1, InputNumber_button_5_span_1_Template, 1, 2, "span", 12)(2, InputNumber_button_5_ng_container_2_Template, 3, 2, "ng-container", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.decrementButtonClass);
    \u0275\u0275property("ngClass", ctx_r2._decrementButtonClass)("disabled", ctx_r2.disabled);
    \u0275\u0275attribute("aria-hidden", true)("data-pc-section", "decrementbutton");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.decrementButtonIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.decrementButtonIcon);
  }
}
var INPUTNUMBER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputNumber),
  multi: true
};
var InputNumber = class _InputNumber extends BaseComponent {
  injector;
  /**
   * Displays spinner buttons.
   * @group Props
   */
  showButtons = false;
  /**
   * Whether to format the value.
   * @group Props
   */
  format = true;
  /**
   * Layout of the buttons, valid values are "stacked" (default), "horizontal" and "vertical".
   * @group Props
   */
  buttonLayout = "stacked";
  /**
   * Identifier of the focus input to match a label defined for the component.
   * @group Props
   */
  inputId;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Advisory information to display on input.
   * @group Props
   */
  placeholder;
  /**
   * Defines the size of the component.
   * @group Props
   */
  size;
  /**
   * Maximum number of character allows in the input field.
   * @group Props
   */
  maxlength;
  /**
   * Specifies tab order of the element.
   * @group Props
   */
  tabindex;
  /**
   * Title text of the input text.
   * @group Props
   */
  title;
  /**
   * Specifies one or more IDs in the DOM that labels the input field.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Used to define a string that labels the input element.
   * @group Props
   */
  ariaLabel;
  /**
   * Used to indicate that user input is required on an element before a form can be submitted.
   * @group Props
   */
  ariaRequired;
  /**
   * Name of the input field.
   * @group Props
   */
  name;
  /**
   * Indicates that whether the input field is required.
   * @group Props
   */
  required;
  /**
   * Used to define a string that autocomplete attribute the current element.
   * @group Props
   */
  autocomplete;
  /**
   * Mininum boundary value.
   * @group Props
   */
  min;
  /**
   * Maximum boundary value.
   * @group Props
   */
  max;
  /**
   * Style class of the increment button.
   * @group Props
   */
  incrementButtonClass;
  /**
   * Style class of the decrement button.
   * @group Props
   */
  decrementButtonClass;
  /**
   * Style class of the increment button.
   * @group Props
   */
  incrementButtonIcon;
  /**
   * Style class of the decrement button.
   * @group Props
   */
  decrementButtonIcon;
  /**
   * When present, it specifies that an input field is read-only.
   * @group Props
   */
  readonly = false;
  /**
   * Step factor to increment/decrement the value.
   * @group Props
   */
  step = 1;
  /**
   * Determines whether the input field is empty.
   * @group Props
   */
  allowEmpty = true;
  /**
   * Locale to be used in formatting.
   * @group Props
   */
  locale;
  /**
   * The locale matching algorithm to use. Possible values are "lookup" and "best fit"; the default is "best fit". See Locale Negotiation for details.
   * @group Props
   */
  localeMatcher;
  /**
   * Defines the behavior of the component, valid values are "decimal" and "currency".
   * @group Props
   */
  mode = "decimal";
  /**
   * The currency to use in currency formatting. Possible values are the ISO 4217 currency codes, such as "USD" for the US dollar, "EUR" for the euro, or "CNY" for the Chinese RMB. There is no default value; if the style is "currency", the currency property must be provided.
   * @group Props
   */
  currency;
  /**
   * How to display the currency in currency formatting. Possible values are "symbol" to use a localized currency symbol such as €, ü"code" to use the ISO currency code, "name" to use a localized currency name such as "dollar"; the default is "symbol".
   * @group Props
   */
  currencyDisplay;
  /**
   * Whether to use grouping separators, such as thousands separators or thousand/lakh/crore separators.
   * @group Props
   */
  useGrouping = true;
  /**
   * Specifies the input variant of the component.
   * @group Props
   */
  variant = "outlined";
  /**
   * The minimum number of fraction digits to use. Possible values are from 0 to 20; the default for plain number and percent formatting is 0; the default for currency formatting is the number of minor unit digits provided by the ISO 4217 currency code list (2 if the list doesn't provide that information).
   * @group Props
   */
  minFractionDigits;
  /**
   * The maximum number of fraction digits to use. Possible values are from 0 to 20; the default for plain number formatting is the larger of minimumFractionDigits and 3; the default for currency formatting is the larger of minimumFractionDigits and the number of minor unit digits provided by the ISO 4217 currency code list (2 if the list doesn't provide that information).
   * @group Props
   */
  maxFractionDigits;
  /**
   * Text to display before the value.
   * @group Props
   */
  prefix;
  /**
   * Text to display after the value.
   * @group Props
   */
  suffix;
  /**
   * Inline style of the input field.
   * @group Props
   */
  inputStyle;
  /**
   * Style class of the input field.
   * @group Props
   */
  inputStyleClass;
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
   * When present, it specifies that the element should be disabled.
   * @group Props
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(disabled) {
    if (disabled) this.focused = false;
    this._disabled = disabled;
    if (this.timer) this.clearTimer();
  }
  /**
   * Spans 100% width of the container when enabled.
   * @group Props
   */
  fluid = false;
  /**
   * Callback to invoke on input.
   * @param {InputNumberInputEvent} event - Custom input event.
   * @group Emits
   */
  onInput = new EventEmitter();
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
   * Callback to invoke on input key press.
   * @param {KeyboardEvent} event - Keyboard event.
   * @group Emits
   */
  onKeyDown = new EventEmitter();
  /**
   * Callback to invoke when clear token is clicked.
   * @group Emits
   */
  onClear = new EventEmitter();
  /**
   * Template of the clear icon.
   * @group Templates
   */
  clearIconTemplate;
  /**
   * Template of the increment button icon.
   * @group Templates
   */
  incrementButtonIconTemplate;
  /**
   * Template of the decrement button icon.
   * @group Templates
   */
  decrementButtonIconTemplate;
  templates;
  input;
  _clearIconTemplate;
  _incrementButtonIconTemplate;
  _decrementButtonIconTemplate;
  value;
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  focused;
  initialized;
  groupChar = "";
  prefixChar = "";
  suffixChar = "";
  isSpecialChar;
  timer;
  lastValue;
  _numeral;
  numberFormat;
  _decimal;
  _decimalChar;
  _group;
  _minusSign;
  _currency;
  _prefix;
  _suffix;
  _index;
  _disabled;
  _componentStyle = inject(InputNumberStyle);
  ngControl = null;
  get _rootClass() {
    return this._componentStyle.classes.root({
      instance: this
    });
  }
  get hasFluid() {
    const nativeElement = this.el.nativeElement;
    const fluidComponent = nativeElement.closest("p-fluid");
    return this.fluid || !!fluidComponent;
  }
  get _incrementButtonClass() {
    return this._componentStyle.classes.incrementButton({
      instance: this
    });
  }
  get _decrementButtonClass() {
    return this._componentStyle.classes.decrementButton({
      instance: this
    });
  }
  constructor(injector) {
    super();
    this.injector = injector;
  }
  ngOnChanges(simpleChange) {
    super.ngOnChanges(simpleChange);
    const props = ["locale", "localeMatcher", "mode", "currency", "currencyDisplay", "useGrouping", "minFractionDigits", "maxFractionDigits", "prefix", "suffix"];
    if (props.some((p) => !!simpleChange[p])) {
      this.updateConstructParser();
    }
  }
  get hostClasses() {
    if (typeof this._rootClass === "string") {
      return this._rootClass;
    }
    if (Array.isArray(this._rootClass)) {
      return this._rootClass.join(" ");
    }
    if (typeof this._rootClass === "object") {
      return Object.keys(this._rootClass).filter((key) => this._rootClass[key]).join(" ");
    }
    return "";
  }
  ngOnInit() {
    super.ngOnInit();
    this.ngControl = this.injector.get(NgControl, null, {
      optional: true
    });
    this.constructParser();
    this.initialized = true;
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "clearicon":
          this._clearIconTemplate = item.template;
          break;
        case "incrementbuttonicon":
          this._incrementButtonIconTemplate = item.template;
          break;
        case "decrementbuttonicon":
          this._decrementButtonIconTemplate = item.template;
          break;
      }
    });
  }
  getOptions() {
    return {
      localeMatcher: this.localeMatcher,
      style: this.mode,
      currency: this.currency,
      currencyDisplay: this.currencyDisplay,
      useGrouping: this.useGrouping,
      minimumFractionDigits: this.minFractionDigits ?? void 0,
      maximumFractionDigits: this.maxFractionDigits ?? void 0
    };
  }
  constructParser() {
    this.numberFormat = new Intl.NumberFormat(this.locale, this.getOptions());
    const numerals = [...new Intl.NumberFormat(this.locale, {
      useGrouping: false
    }).format(9876543210)].reverse();
    const index = new Map(numerals.map((d, i) => [d, i]));
    this._numeral = new RegExp(`[${numerals.join("")}]`, "g");
    this._group = this.getGroupingExpression();
    this._minusSign = this.getMinusSignExpression();
    this._currency = this.getCurrencyExpression();
    this._decimal = this.getDecimalExpression();
    this._decimalChar = this.getDecimalChar();
    this._suffix = this.getSuffixExpression();
    this._prefix = this.getPrefixExpression();
    this._index = (d) => index.get(d);
  }
  updateConstructParser() {
    if (this.initialized) {
      this.constructParser();
    }
  }
  escapeRegExp(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  }
  getDecimalExpression() {
    const decimalChar = this.getDecimalChar();
    return new RegExp(`[${decimalChar}]`, "g");
  }
  getDecimalChar() {
    const formatter = new Intl.NumberFormat(this.locale, __spreadProps(__spreadValues({}, this.getOptions()), {
      useGrouping: false
    }));
    return formatter.format(1.1).replace(this._currency, "").trim().replace(this._numeral, "");
  }
  getGroupingExpression() {
    const formatter = new Intl.NumberFormat(this.locale, {
      useGrouping: true
    });
    this.groupChar = formatter.format(1e6).trim().replace(this._numeral, "").charAt(0);
    return new RegExp(`[${this.groupChar}]`, "g");
  }
  getMinusSignExpression() {
    const formatter = new Intl.NumberFormat(this.locale, {
      useGrouping: false
    });
    return new RegExp(`[${formatter.format(-1).trim().replace(this._numeral, "")}]`, "g");
  }
  getCurrencyExpression() {
    if (this.currency) {
      const formatter = new Intl.NumberFormat(this.locale, {
        style: "currency",
        currency: this.currency,
        currencyDisplay: this.currencyDisplay,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      });
      return new RegExp(`[${formatter.format(1).replace(/\s/g, "").replace(this._numeral, "").replace(this._group, "")}]`, "g");
    }
    return new RegExp(`[]`, "g");
  }
  getPrefixExpression() {
    if (this.prefix) {
      this.prefixChar = this.prefix;
    } else {
      const formatter = new Intl.NumberFormat(this.locale, {
        style: this.mode,
        currency: this.currency,
        currencyDisplay: this.currencyDisplay
      });
      this.prefixChar = formatter.format(1).split("1")[0];
    }
    return new RegExp(`${this.escapeRegExp(this.prefixChar || "")}`, "g");
  }
  getSuffixExpression() {
    if (this.suffix) {
      this.suffixChar = this.suffix;
    } else {
      const formatter = new Intl.NumberFormat(this.locale, {
        style: this.mode,
        currency: this.currency,
        currencyDisplay: this.currencyDisplay,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      });
      this.suffixChar = formatter.format(1).split("1")[1];
    }
    return new RegExp(`${this.escapeRegExp(this.suffixChar || "")}`, "g");
  }
  formatValue(value) {
    if (value != null) {
      if (value === "-") {
        return value;
      }
      if (this.format) {
        let formatter = new Intl.NumberFormat(this.locale, this.getOptions());
        let formattedValue = formatter.format(value);
        if (this.prefix && value != this.prefix) {
          formattedValue = this.prefix + formattedValue;
        }
        if (this.suffix && value != this.suffix) {
          formattedValue = formattedValue + this.suffix;
        }
        return formattedValue;
      }
      return value.toString();
    }
    return "";
  }
  parseValue(text) {
    const suffixRegex = new RegExp(this._suffix, "");
    const prefixRegex = new RegExp(this._prefix, "");
    const currencyRegex = new RegExp(this._currency, "");
    let filteredText = text.replace(suffixRegex, "").replace(prefixRegex, "").trim().replace(/\s/g, "").replace(currencyRegex, "").replace(this._group, "").replace(this._minusSign, "-").replace(this._decimal, ".").replace(this._numeral, this._index);
    if (filteredText) {
      if (filteredText === "-")
        return filteredText;
      let parsedValue = +filteredText;
      return isNaN(parsedValue) ? null : parsedValue;
    }
    return null;
  }
  repeat(event2, interval, dir) {
    if (this.readonly) {
      return;
    }
    let i = interval || 500;
    this.clearTimer();
    this.timer = setTimeout(() => {
      this.repeat(event2, 40, dir);
    }, i);
    this.spin(event2, dir);
  }
  spin(event2, dir) {
    let step = this.step * dir;
    let currentValue = this.parseValue(this.input?.nativeElement.value) || 0;
    let newValue = this.validateValue(currentValue + step);
    if (this.maxlength && this.maxlength < this.formatValue(newValue).length) {
      return;
    }
    this.updateInput(newValue, null, "spin", null);
    this.updateModel(event2, newValue);
    this.handleOnInput(event2, currentValue, newValue);
  }
  clear() {
    this.value = null;
    this.onModelChange(this.value);
    this.onClear.emit();
  }
  onUpButtonMouseDown(event2) {
    if (event2.button === 2) {
      this.clearTimer();
      return;
    }
    if (!this.disabled) {
      this.input?.nativeElement.focus();
      this.repeat(event2, null, 1);
      event2.preventDefault();
    }
  }
  onUpButtonMouseUp() {
    if (!this.disabled) {
      this.clearTimer();
    }
  }
  onUpButtonMouseLeave() {
    if (!this.disabled) {
      this.clearTimer();
    }
  }
  onUpButtonKeyDown(event2) {
    if (event2.keyCode === 32 || event2.keyCode === 13) {
      this.repeat(event2, null, 1);
    }
  }
  onUpButtonKeyUp() {
    if (!this.disabled) {
      this.clearTimer();
    }
  }
  onDownButtonMouseDown(event2) {
    if (event2.button === 2) {
      this.clearTimer();
      return;
    }
    if (!this.disabled) {
      this.input?.nativeElement.focus();
      this.repeat(event2, null, -1);
      event2.preventDefault();
    }
  }
  onDownButtonMouseUp() {
    if (!this.disabled) {
      this.clearTimer();
    }
  }
  onDownButtonMouseLeave() {
    if (!this.disabled) {
      this.clearTimer();
    }
  }
  onDownButtonKeyUp() {
    if (!this.disabled) {
      this.clearTimer();
    }
  }
  onDownButtonKeyDown(event2) {
    if (event2.keyCode === 32 || event2.keyCode === 13) {
      this.repeat(event2, null, -1);
    }
  }
  onUserInput(event2) {
    if (this.readonly) {
      return;
    }
    if (this.isSpecialChar) {
      event2.target.value = this.lastValue;
    }
    this.isSpecialChar = false;
  }
  onInputKeyDown(event2) {
    if (this.readonly) {
      return;
    }
    this.lastValue = event2.target.value;
    if (event2.shiftKey || event2.altKey) {
      this.isSpecialChar = true;
      return;
    }
    let selectionStart = event2.target.selectionStart;
    let selectionEnd = event2.target.selectionEnd;
    let inputValue = event2.target.value;
    let newValueStr = null;
    if (event2.altKey) {
      event2.preventDefault();
    }
    switch (event2.key) {
      case "ArrowUp":
        this.spin(event2, 1);
        event2.preventDefault();
        break;
      case "ArrowDown":
        this.spin(event2, -1);
        event2.preventDefault();
        break;
      case "ArrowLeft":
        for (let index = selectionStart; index <= inputValue.length; index++) {
          const previousCharIndex = index === 0 ? 0 : index - 1;
          if (this.isNumeralChar(inputValue.charAt(previousCharIndex))) {
            this.input.nativeElement.setSelectionRange(index, index);
            break;
          }
        }
        break;
      case "ArrowRight":
        for (let index = selectionEnd; index >= 0; index--) {
          if (this.isNumeralChar(inputValue.charAt(index))) {
            this.input.nativeElement.setSelectionRange(index, index);
            break;
          }
        }
        break;
      case "Tab":
      case "Enter":
        newValueStr = this.validateValue(this.parseValue(this.input.nativeElement.value));
        this.input.nativeElement.value = this.formatValue(newValueStr);
        this.input.nativeElement.setAttribute("aria-valuenow", newValueStr);
        this.updateModel(event2, newValueStr);
        break;
      case "Backspace": {
        event2.preventDefault();
        if (selectionStart === selectionEnd) {
          if (selectionStart == 1 && this.prefix || selectionStart == inputValue.length && this.suffix) {
            break;
          }
          const deleteChar = inputValue.charAt(selectionStart - 1);
          const {
            decimalCharIndex,
            decimalCharIndexWithoutPrefix
          } = this.getDecimalCharIndexes(inputValue);
          if (this.isNumeralChar(deleteChar)) {
            const decimalLength = this.getDecimalLength(inputValue);
            if (this._group.test(deleteChar)) {
              this._group.lastIndex = 0;
              newValueStr = inputValue.slice(0, selectionStart - 2) + inputValue.slice(selectionStart - 1);
            } else if (this._decimal.test(deleteChar)) {
              this._decimal.lastIndex = 0;
              if (decimalLength) {
                this.input?.nativeElement.setSelectionRange(selectionStart - 1, selectionStart - 1);
              } else {
                newValueStr = inputValue.slice(0, selectionStart - 1) + inputValue.slice(selectionStart);
              }
            } else if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
              const insertedText = this.isDecimalMode() && (this.minFractionDigits || 0) < decimalLength ? "" : "0";
              newValueStr = inputValue.slice(0, selectionStart - 1) + insertedText + inputValue.slice(selectionStart);
            } else if (decimalCharIndexWithoutPrefix === 1) {
              newValueStr = inputValue.slice(0, selectionStart - 1) + "0" + inputValue.slice(selectionStart);
              newValueStr = this.parseValue(newValueStr) > 0 ? newValueStr : "";
            } else {
              newValueStr = inputValue.slice(0, selectionStart - 1) + inputValue.slice(selectionStart);
            }
          } else if (this.mode === "currency" && deleteChar.search(this._currency) != -1) {
            newValueStr = inputValue.slice(1);
          }
          this.updateValue(event2, newValueStr, null, "delete-single");
        } else {
          newValueStr = this.deleteRange(inputValue, selectionStart, selectionEnd);
          this.updateValue(event2, newValueStr, null, "delete-range");
        }
        break;
      }
      case "Delete":
        event2.preventDefault();
        if (selectionStart === selectionEnd) {
          if (selectionStart == 0 && this.prefix || selectionStart == inputValue.length - 1 && this.suffix) {
            break;
          }
          const deleteChar = inputValue.charAt(selectionStart);
          const {
            decimalCharIndex,
            decimalCharIndexWithoutPrefix
          } = this.getDecimalCharIndexes(inputValue);
          if (this.isNumeralChar(deleteChar)) {
            const decimalLength = this.getDecimalLength(inputValue);
            if (this._group.test(deleteChar)) {
              this._group.lastIndex = 0;
              newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 2);
            } else if (this._decimal.test(deleteChar)) {
              this._decimal.lastIndex = 0;
              if (decimalLength) {
                this.input?.nativeElement.setSelectionRange(selectionStart + 1, selectionStart + 1);
              } else {
                newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 1);
              }
            } else if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
              const insertedText = this.isDecimalMode() && (this.minFractionDigits || 0) < decimalLength ? "" : "0";
              newValueStr = inputValue.slice(0, selectionStart) + insertedText + inputValue.slice(selectionStart + 1);
            } else if (decimalCharIndexWithoutPrefix === 1) {
              newValueStr = inputValue.slice(0, selectionStart) + "0" + inputValue.slice(selectionStart + 1);
              newValueStr = this.parseValue(newValueStr) > 0 ? newValueStr : "";
            } else {
              newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 1);
            }
          }
          this.updateValue(event2, newValueStr, null, "delete-back-single");
        } else {
          newValueStr = this.deleteRange(inputValue, selectionStart, selectionEnd);
          this.updateValue(event2, newValueStr, null, "delete-range");
        }
        break;
      case "Home":
        if (this.min) {
          this.updateModel(event2, this.min);
          event2.preventDefault();
        }
        break;
      case "End":
        if (this.max) {
          this.updateModel(event2, this.max);
          event2.preventDefault();
        }
        break;
      default:
        break;
    }
    this.onKeyDown.emit(event2);
  }
  onInputKeyPress(event2) {
    if (this.readonly) {
      return;
    }
    let code = event2.which || event2.keyCode;
    let char = String.fromCharCode(code);
    let isDecimalSign = this.isDecimalSign(char);
    const isMinusSign = this.isMinusSign(char);
    if (code != 13) {
      event2.preventDefault();
    }
    if (!isDecimalSign && event2.code === "NumpadDecimal") {
      isDecimalSign = true;
      char = this._decimalChar;
      code = char.charCodeAt(0);
    }
    const {
      value,
      selectionStart,
      selectionEnd
    } = this.input.nativeElement;
    const newValue = this.parseValue(value + char);
    const newValueStr = newValue != null ? newValue.toString() : "";
    const selectedValue = value.substring(selectionStart, selectionEnd);
    const selectedValueParsed = this.parseValue(selectedValue);
    const selectedValueStr = selectedValueParsed != null ? selectedValueParsed.toString() : "";
    if (selectionStart !== selectionEnd && selectedValueStr.length > 0) {
      this.insert(event2, char, {
        isDecimalSign,
        isMinusSign
      });
      return;
    }
    if (this.maxlength && newValueStr.length > this.maxlength) {
      return;
    }
    if (48 <= code && code <= 57 || isMinusSign || isDecimalSign) {
      this.insert(event2, char, {
        isDecimalSign,
        isMinusSign
      });
    }
  }
  onPaste(event2) {
    if (!this.disabled && !this.readonly) {
      event2.preventDefault();
      let data = (event2.clipboardData || this.document.defaultView["clipboardData"]).getData("Text");
      if (data) {
        if (this.maxlength) {
          data = data.toString().substring(0, this.maxlength);
        }
        let filteredData = this.parseValue(data);
        if (filteredData != null) {
          this.insert(event2, filteredData.toString());
        }
      }
    }
  }
  allowMinusSign() {
    return this.min == null || this.min < 0;
  }
  isMinusSign(char) {
    if (this._minusSign.test(char) || char === "-") {
      this._minusSign.lastIndex = 0;
      return true;
    }
    return false;
  }
  isDecimalSign(char) {
    if (this._decimal.test(char)) {
      this._decimal.lastIndex = 0;
      return true;
    }
    return false;
  }
  isDecimalMode() {
    return this.mode === "decimal";
  }
  getDecimalCharIndexes(val) {
    let decimalCharIndex = val.search(this._decimal);
    this._decimal.lastIndex = 0;
    const filteredVal = val.replace(this._prefix, "").trim().replace(/\s/g, "").replace(this._currency, "");
    const decimalCharIndexWithoutPrefix = filteredVal.search(this._decimal);
    this._decimal.lastIndex = 0;
    return {
      decimalCharIndex,
      decimalCharIndexWithoutPrefix
    };
  }
  getCharIndexes(val) {
    const decimalCharIndex = val.search(this._decimal);
    this._decimal.lastIndex = 0;
    const minusCharIndex = val.search(this._minusSign);
    this._minusSign.lastIndex = 0;
    const suffixCharIndex = val.search(this._suffix);
    this._suffix.lastIndex = 0;
    const currencyCharIndex = val.search(this._currency);
    this._currency.lastIndex = 0;
    return {
      decimalCharIndex,
      minusCharIndex,
      suffixCharIndex,
      currencyCharIndex
    };
  }
  insert(event2, text, sign = {
    isDecimalSign: false,
    isMinusSign: false
  }) {
    const minusCharIndexOnText = text.search(this._minusSign);
    this._minusSign.lastIndex = 0;
    if (!this.allowMinusSign() && minusCharIndexOnText !== -1) {
      return;
    }
    let selectionStart = this.input?.nativeElement.selectionStart;
    let selectionEnd = this.input?.nativeElement.selectionEnd;
    let inputValue = this.input?.nativeElement.value.trim();
    const {
      decimalCharIndex,
      minusCharIndex,
      suffixCharIndex,
      currencyCharIndex
    } = this.getCharIndexes(inputValue);
    let newValueStr;
    if (sign.isMinusSign) {
      if (selectionStart === 0) {
        newValueStr = inputValue;
        if (minusCharIndex === -1 || selectionEnd !== 0) {
          newValueStr = this.insertText(inputValue, text, 0, selectionEnd);
        }
        this.updateValue(event2, newValueStr, text, "insert");
      }
    } else if (sign.isDecimalSign) {
      if (decimalCharIndex > 0 && selectionStart === decimalCharIndex) {
        this.updateValue(event2, inputValue, text, "insert");
      } else if (decimalCharIndex > selectionStart && decimalCharIndex < selectionEnd) {
        newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd);
        this.updateValue(event2, newValueStr, text, "insert");
      } else if (decimalCharIndex === -1 && this.maxFractionDigits) {
        newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd);
        this.updateValue(event2, newValueStr, text, "insert");
      }
    } else {
      const maxFractionDigits = this.numberFormat.resolvedOptions().maximumFractionDigits;
      const operation = selectionStart !== selectionEnd ? "range-insert" : "insert";
      if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
        if (selectionStart + text.length - (decimalCharIndex + 1) <= maxFractionDigits) {
          const charIndex = currencyCharIndex >= selectionStart ? currencyCharIndex - 1 : suffixCharIndex >= selectionStart ? suffixCharIndex : inputValue.length;
          newValueStr = inputValue.slice(0, selectionStart) + text + inputValue.slice(selectionStart + text.length, charIndex) + inputValue.slice(charIndex);
          this.updateValue(event2, newValueStr, text, operation);
        }
      } else {
        newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd);
        this.updateValue(event2, newValueStr, text, operation);
      }
    }
  }
  insertText(value, text, start, end) {
    let textSplit = text === "." ? text : text.split(".");
    if (textSplit.length === 2) {
      const decimalCharIndex = value.slice(start, end).search(this._decimal);
      this._decimal.lastIndex = 0;
      return decimalCharIndex > 0 ? value.slice(0, start) + this.formatValue(text) + value.slice(end) : value || this.formatValue(text);
    } else if (end - start === value.length) {
      return this.formatValue(text);
    } else if (start === 0) {
      return text + value.slice(end);
    } else if (end === value.length) {
      return value.slice(0, start) + text;
    } else {
      return value.slice(0, start) + text + value.slice(end);
    }
  }
  deleteRange(value, start, end) {
    let newValueStr;
    if (end - start === value.length) newValueStr = "";
    else if (start === 0) newValueStr = value.slice(end);
    else if (end === value.length) newValueStr = value.slice(0, start);
    else newValueStr = value.slice(0, start) + value.slice(end);
    return newValueStr;
  }
  initCursor() {
    let selectionStart = this.input?.nativeElement.selectionStart;
    let selectionEnd = this.input?.nativeElement.selectionEnd;
    let inputValue = this.input?.nativeElement.value;
    let valueLength = inputValue.length;
    let index = null;
    let prefixLength = (this.prefixChar || "").length;
    inputValue = inputValue.replace(this._prefix, "");
    if (selectionStart === selectionEnd || selectionStart !== 0 || selectionEnd < prefixLength) {
      selectionStart -= prefixLength;
    }
    let char = inputValue.charAt(selectionStart);
    if (this.isNumeralChar(char)) {
      return selectionStart + prefixLength;
    }
    let i = selectionStart - 1;
    while (i >= 0) {
      char = inputValue.charAt(i);
      if (this.isNumeralChar(char)) {
        index = i + prefixLength;
        break;
      } else {
        i--;
      }
    }
    if (index !== null) {
      this.input?.nativeElement.setSelectionRange(index + 1, index + 1);
    } else {
      i = selectionStart;
      while (i < valueLength) {
        char = inputValue.charAt(i);
        if (this.isNumeralChar(char)) {
          index = i + prefixLength;
          break;
        } else {
          i++;
        }
      }
      if (index !== null) {
        this.input?.nativeElement.setSelectionRange(index, index);
      }
    }
    return index || 0;
  }
  onInputClick() {
    const currentValue = this.input?.nativeElement.value;
    if (!this.readonly && currentValue !== getSelection()) {
      this.initCursor();
    }
  }
  isNumeralChar(char) {
    if (char.length === 1 && (this._numeral.test(char) || this._decimal.test(char) || this._group.test(char) || this._minusSign.test(char))) {
      this.resetRegex();
      return true;
    }
    return false;
  }
  resetRegex() {
    this._numeral.lastIndex = 0;
    this._decimal.lastIndex = 0;
    this._group.lastIndex = 0;
    this._minusSign.lastIndex = 0;
  }
  updateValue(event2, valueStr, insertedValueStr, operation) {
    let currentValue = this.input?.nativeElement.value;
    let newValue = null;
    if (valueStr != null) {
      newValue = this.parseValue(valueStr);
      newValue = !newValue && !this.allowEmpty ? 0 : newValue;
      this.updateInput(newValue, insertedValueStr, operation, valueStr);
      this.handleOnInput(event2, currentValue, newValue);
    }
  }
  handleOnInput(event2, currentValue, newValue) {
    if (this.isValueChanged(currentValue, newValue)) {
      this.input.nativeElement.value = this.formatValue(newValue);
      this.input?.nativeElement.setAttribute("aria-valuenow", newValue);
      this.updateModel(event2, newValue);
      this.onInput.emit({
        originalEvent: event2,
        value: newValue,
        formattedValue: currentValue
      });
    }
  }
  isValueChanged(currentValue, newValue) {
    if (newValue === null && currentValue !== null) {
      return true;
    }
    if (newValue != null) {
      let parsedCurrentValue = typeof currentValue === "string" ? this.parseValue(currentValue) : currentValue;
      return newValue !== parsedCurrentValue;
    }
    return false;
  }
  validateValue(value) {
    if (value === "-" || value == null) {
      return null;
    }
    if (this.min != null && value < this.min) {
      return this.min;
    }
    if (this.max != null && value > this.max) {
      return this.max;
    }
    return value;
  }
  updateInput(value, insertedValueStr, operation, valueStr) {
    insertedValueStr = insertedValueStr || "";
    let inputValue = this.input?.nativeElement.value;
    let newValue = this.formatValue(value);
    let currentLength = inputValue.length;
    if (newValue !== valueStr) {
      newValue = this.concatValues(newValue, valueStr);
    }
    if (currentLength === 0) {
      this.input.nativeElement.value = newValue;
      this.input.nativeElement.setSelectionRange(0, 0);
      const index = this.initCursor();
      const selectionEnd = index + insertedValueStr.length;
      this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
    } else {
      let selectionStart = this.input.nativeElement.selectionStart;
      let selectionEnd = this.input.nativeElement.selectionEnd;
      if (this.maxlength && newValue.length > this.maxlength) {
        newValue = newValue.slice(0, this.maxlength);
        selectionStart = Math.min(selectionStart, this.maxlength);
        selectionEnd = Math.min(selectionEnd, this.maxlength);
      }
      if (this.maxlength && this.maxlength < newValue.length) {
        return;
      }
      this.input.nativeElement.value = newValue;
      let newLength = newValue.length;
      if (operation === "range-insert") {
        const startValue = this.parseValue((inputValue || "").slice(0, selectionStart));
        const startValueStr = startValue !== null ? startValue.toString() : "";
        const startExpr = startValueStr.split("").join(`(${this.groupChar})?`);
        const sRegex = new RegExp(startExpr, "g");
        sRegex.test(newValue);
        const tExpr = insertedValueStr.split("").join(`(${this.groupChar})?`);
        const tRegex = new RegExp(tExpr, "g");
        tRegex.test(newValue.slice(sRegex.lastIndex));
        selectionEnd = sRegex.lastIndex + tRegex.lastIndex;
        this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
      } else if (newLength === currentLength) {
        if (operation === "insert" || operation === "delete-back-single") this.input.nativeElement.setSelectionRange(selectionEnd + 1, selectionEnd + 1);
        else if (operation === "delete-single") this.input.nativeElement.setSelectionRange(selectionEnd - 1, selectionEnd - 1);
        else if (operation === "delete-range" || operation === "spin") this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
      } else if (operation === "delete-back-single") {
        let prevChar = inputValue.charAt(selectionEnd - 1);
        let nextChar = inputValue.charAt(selectionEnd);
        let diff = currentLength - newLength;
        let isGroupChar = this._group.test(nextChar);
        if (isGroupChar && diff === 1) {
          selectionEnd += 1;
        } else if (!isGroupChar && this.isNumeralChar(prevChar)) {
          selectionEnd += -1 * diff + 1;
        }
        this._group.lastIndex = 0;
        this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
      } else if (inputValue === "-" && operation === "insert") {
        this.input.nativeElement.setSelectionRange(0, 0);
        const index = this.initCursor();
        const selectionEnd2 = index + insertedValueStr.length + 1;
        this.input.nativeElement.setSelectionRange(selectionEnd2, selectionEnd2);
      } else {
        selectionEnd = selectionEnd + (newLength - currentLength);
        this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
      }
    }
    this.input.nativeElement.setAttribute("aria-valuenow", value);
  }
  concatValues(val1, val2) {
    if (val1 && val2) {
      let decimalCharIndex = val2.search(this._decimal);
      this._decimal.lastIndex = 0;
      if (this.suffixChar) {
        return decimalCharIndex !== -1 ? val1 : val1.replace(this.suffixChar, "").split(this._decimal)[0] + val2.replace(this.suffixChar, "").slice(decimalCharIndex) + this.suffixChar;
      } else {
        return decimalCharIndex !== -1 ? val1.split(this._decimal)[0] + val2.slice(decimalCharIndex) : val1;
      }
    }
    return val1;
  }
  getDecimalLength(value) {
    if (value) {
      const valueSplit = value.split(this._decimal);
      if (valueSplit.length === 2) {
        return valueSplit[1].replace(this._suffix, "").trim().replace(/\s/g, "").replace(this._currency, "").length;
      }
    }
    return 0;
  }
  onInputFocus(event2) {
    this.focused = true;
    this.onFocus.emit(event2);
  }
  onInputBlur(event2) {
    this.focused = false;
    const newValueNumber = this.validateValue(this.parseValue(this.input.nativeElement.value));
    const newValueString = newValueNumber?.toString();
    this.input.nativeElement.value = this.formatValue(newValueString);
    this.input.nativeElement.setAttribute("aria-valuenow", newValueString);
    this.updateModel(event2, newValueNumber);
    this.onBlur.emit(event2);
  }
  formattedValue() {
    const val = !this.value && !this.allowEmpty ? 0 : this.value;
    return this.formatValue(val);
  }
  updateModel(event2, value) {
    const isBlurUpdateOnMode = this.ngControl?.control?.updateOn === "blur";
    if (this.value !== value) {
      this.value = value;
      if (!(isBlurUpdateOnMode && this.focused)) {
        this.onModelChange(value);
      }
    } else if (isBlurUpdateOnMode) {
      this.onModelChange(value);
    }
    this.onModelTouched();
  }
  writeValue(value) {
    this.value = value ? this.parseValue(value.toString()) : value;
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
  get filled() {
    return this.value != null && this.value.toString().length > 0;
  }
  clearTimer() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
  static \u0275fac = function InputNumber_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputNumber)(\u0275\u0275directiveInject(Injector));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _InputNumber,
    selectors: [["p-inputNumber"], ["p-inputnumber"], ["p-input-number"]],
    contentQueries: function InputNumber_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c02, 4);
        \u0275\u0275contentQuery(dirIndex, _c110, 4);
        \u0275\u0275contentQuery(dirIndex, _c26, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.clearIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.incrementButtonIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.decrementButtonIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function InputNumber_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c32, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.input = _t.first);
      }
    },
    hostVars: 4,
    hostBindings: function InputNumber_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("data-pc-name", "inputnumber")("data-pc-section", "root");
        \u0275\u0275classMap(ctx.hostClasses);
      }
    },
    inputs: {
      showButtons: [2, "showButtons", "showButtons", booleanAttribute],
      format: [2, "format", "format", booleanAttribute],
      buttonLayout: "buttonLayout",
      inputId: "inputId",
      styleClass: "styleClass",
      style: "style",
      placeholder: "placeholder",
      size: "size",
      maxlength: [2, "maxlength", "maxlength", numberAttribute],
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      title: "title",
      ariaLabelledBy: "ariaLabelledBy",
      ariaLabel: "ariaLabel",
      ariaRequired: [2, "ariaRequired", "ariaRequired", booleanAttribute],
      name: "name",
      required: [2, "required", "required", booleanAttribute],
      autocomplete: "autocomplete",
      min: [2, "min", "min", numberAttribute],
      max: [2, "max", "max", numberAttribute],
      incrementButtonClass: "incrementButtonClass",
      decrementButtonClass: "decrementButtonClass",
      incrementButtonIcon: "incrementButtonIcon",
      decrementButtonIcon: "decrementButtonIcon",
      readonly: [2, "readonly", "readonly", booleanAttribute],
      step: [2, "step", "step", numberAttribute],
      allowEmpty: [2, "allowEmpty", "allowEmpty", booleanAttribute],
      locale: "locale",
      localeMatcher: "localeMatcher",
      mode: "mode",
      currency: "currency",
      currencyDisplay: "currencyDisplay",
      useGrouping: [2, "useGrouping", "useGrouping", booleanAttribute],
      variant: "variant",
      minFractionDigits: [2, "minFractionDigits", "minFractionDigits", (value) => numberAttribute(value, null)],
      maxFractionDigits: [2, "maxFractionDigits", "maxFractionDigits", (value) => numberAttribute(value, null)],
      prefix: "prefix",
      suffix: "suffix",
      inputStyle: "inputStyle",
      inputStyleClass: "inputStyleClass",
      showClear: [2, "showClear", "showClear", booleanAttribute],
      autofocus: [2, "autofocus", "autofocus", booleanAttribute],
      disabled: "disabled",
      fluid: [2, "fluid", "fluid", booleanAttribute]
    },
    outputs: {
      onInput: "onInput",
      onFocus: "onFocus",
      onBlur: "onBlur",
      onKeyDown: "onKeyDown",
      onClear: "onClear"
    },
    features: [\u0275\u0275ProvidersFeature([INPUTNUMBER_VALUE_ACCESSOR, InputNumberStyle]), \u0275\u0275InputTransformsFeature, \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature],
    decls: 6,
    vars: 32,
    consts: [["input", ""], ["pInputText", "", "role", "spinbutton", "inputmode", "decimal", 3, "input", "keydown", "keypress", "paste", "click", "focus", "blur", "ngClass", "ngStyle", "value", "variant", "disabled", "readonly", "pSize", "pAutoFocus", "fluid"], [4, "ngIf"], ["class", "p-inputnumber-button-group", 4, "ngIf"], ["type", "button", "tabindex", "-1", 3, "ngClass", "class", "disabled", "mousedown", "mouseup", "mouseleave", "keydown", "keyup", 4, "ngIf"], [3, "ngClass", "click", 4, "ngIf"], ["class", "p-inputnumber-clear-icon", 3, "click", 4, "ngIf"], [3, "click", "ngClass"], [1, "p-inputnumber-clear-icon", 3, "click"], [4, "ngTemplateOutlet"], [1, "p-inputnumber-button-group"], ["type", "button", "tabindex", "-1", 3, "mousedown", "mouseup", "mouseleave", "keydown", "keyup", "ngClass", "disabled"], [3, "ngClass", 4, "ngIf"], [3, "ngClass"]],
    template: function InputNumber_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "input", 1, 0);
        \u0275\u0275listener("input", function InputNumber_Template_input_input_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onUserInput($event));
        })("keydown", function InputNumber_Template_input_keydown_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onInputKeyDown($event));
        })("keypress", function InputNumber_Template_input_keypress_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onInputKeyPress($event));
        })("paste", function InputNumber_Template_input_paste_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onPaste($event));
        })("click", function InputNumber_Template_input_click_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onInputClick());
        })("focus", function InputNumber_Template_input_focus_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onInputFocus($event));
        })("blur", function InputNumber_Template_input_blur_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onInputBlur($event));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(2, InputNumber_ng_container_2_Template, 3, 2, "ng-container", 2)(3, InputNumber_span_3_Template, 7, 17, "span", 3)(4, InputNumber_button_4_Template, 3, 8, "button", 4)(5, InputNumber_button_5_Template, 3, 8, "button", 4);
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.inputStyleClass);
        \u0275\u0275property("ngClass", "p-inputnumber-input")("ngStyle", ctx.inputStyle)("value", ctx.formattedValue())("variant", ctx.variant)("disabled", ctx.disabled)("readonly", ctx.readonly)("pSize", ctx.size)("pAutoFocus", ctx.autofocus)("fluid", ctx.hasFluid);
        \u0275\u0275attribute("id", ctx.inputId)("aria-valuemin", ctx.min)("aria-valuemax", ctx.max)("aria-valuenow", ctx.value)("placeholder", ctx.placeholder)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledBy)("title", ctx.title)("name", ctx.name)("autocomplete", ctx.autocomplete)("maxlength", ctx.maxlength)("tabindex", ctx.tabindex)("aria-required", ctx.ariaRequired)("required", ctx.required)("min", ctx.min)("max", ctx.max)("data-pc-section", "input");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.buttonLayout != "vertical" && ctx.showClear && ctx.value);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showButtons && ctx.buttonLayout === "stacked");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showButtons && ctx.buttonLayout !== "stacked");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showButtons && ctx.buttonLayout !== "stacked");
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, NgStyle, InputText, AutoFocus, TimesIcon, AngleUpIcon, AngleDownIcon, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputNumber, [{
    type: Component,
    args: [{
      selector: "p-inputNumber, p-inputnumber, p-input-number",
      standalone: true,
      imports: [CommonModule, InputText, AutoFocus, TimesIcon, AngleUpIcon, AngleDownIcon, SharedModule],
      template: `
        <input
            pInputText
            #input
            [attr.id]="inputId"
            role="spinbutton"
            [ngClass]="'p-inputnumber-input'"
            [ngStyle]="inputStyle"
            [class]="inputStyleClass"
            [value]="formattedValue()"
            [variant]="variant"
            [attr.aria-valuemin]="min"
            [attr.aria-valuemax]="max"
            [attr.aria-valuenow]="value"
            [disabled]="disabled"
            [readonly]="readonly"
            [attr.placeholder]="placeholder"
            [attr.aria-label]="ariaLabel"
            [attr.aria-labelledby]="ariaLabelledBy"
            [attr.title]="title"
            [pSize]="size"
            [attr.name]="name"
            [attr.autocomplete]="autocomplete"
            [attr.maxlength]="maxlength"
            [attr.tabindex]="tabindex"
            [attr.aria-required]="ariaRequired"
            [attr.required]="required"
            [attr.min]="min"
            [attr.max]="max"
            inputmode="decimal"
            (input)="onUserInput($event)"
            (keydown)="onInputKeyDown($event)"
            (keypress)="onInputKeyPress($event)"
            (paste)="onPaste($event)"
            (click)="onInputClick()"
            (focus)="onInputFocus($event)"
            (blur)="onInputBlur($event)"
            [attr.data-pc-section]="'input'"
            [pAutoFocus]="autofocus"
            [fluid]="hasFluid"
        />
        <ng-container *ngIf="buttonLayout != 'vertical' && showClear && value">
            <TimesIcon *ngIf="!clearIconTemplate && !_clearIconTemplate" [ngClass]="'p-inputnumber-clear-icon'" (click)="clear()" [attr.data-pc-section]="'clearIcon'" />
            <span *ngIf="clearIconTemplate || _clearIconTemplate" (click)="clear()" class="p-inputnumber-clear-icon" [attr.data-pc-section]="'clearIcon'">
                <ng-template *ngTemplateOutlet="clearIconTemplate || _clearIconTemplate"></ng-template>
            </span>
        </ng-container>
        <span class="p-inputnumber-button-group" *ngIf="showButtons && buttonLayout === 'stacked'" [attr.data-pc-section]="'buttonGroup'">
            <button
                type="button"
                [ngClass]="_incrementButtonClass"
                [class]="incrementButtonClass"
                [disabled]="disabled"
                tabindex="-1"
                (mousedown)="onUpButtonMouseDown($event)"
                (mouseup)="onUpButtonMouseUp()"
                (mouseleave)="onUpButtonMouseLeave()"
                (keydown)="onUpButtonKeyDown($event)"
                (keyup)="onUpButtonKeyUp()"
                [attr.aria-hidden]="true"
                [attr.data-pc-section]="'incrementbutton'"
            >
                <span *ngIf="incrementButtonIcon" [ngClass]="incrementButtonIcon" [attr.data-pc-section]="'incrementbuttonicon'"></span>
                <ng-container *ngIf="!incrementButtonIcon">
                    <AngleUpIcon *ngIf="!incrementButtonIconTemplate && !_incrementButtonIconTemplate" [attr.data-pc-section]="'incrementbuttonicon'" />
                    <ng-template *ngTemplateOutlet="incrementButtonIconTemplate || _incrementButtonIconTemplate"></ng-template>
                </ng-container>
            </button>

            <button
                type="button"
                [ngClass]="_decrementButtonClass"
                [class]="decrementButtonClass"
                [disabled]="disabled"
                tabindex="-1"
                [attr.aria-hidden]="true"
                (mousedown)="onDownButtonMouseDown($event)"
                (mouseup)="onDownButtonMouseUp()"
                (mouseleave)="onDownButtonMouseLeave()"
                (keydown)="onDownButtonKeyDown($event)"
                (keyup)="onDownButtonKeyUp()"
                [attr.data-pc-section]="'decrementbutton'"
            >
                <span *ngIf="decrementButtonIcon" [ngClass]="decrementButtonIcon" [attr.data-pc-section]="'decrementbuttonicon'"></span>
                <ng-container *ngIf="!decrementButtonIcon">
                    <AngleDownIcon *ngIf="!decrementButtonIconTemplate && !_decrementButtonIconTemplate" [attr.data-pc-section]="'decrementbuttonicon'" />
                    <ng-template *ngTemplateOutlet="decrementButtonIconTemplate || _decrementButtonIconTemplate"></ng-template>
                </ng-container>
            </button>
        </span>
        <button
            *ngIf="showButtons && buttonLayout !== 'stacked'"
            type="button"
            [ngClass]="_incrementButtonClass"
            [class]="incrementButtonClass"
            [disabled]="disabled"
            tabindex="-1"
            [attr.aria-hidden]="true"
            (mousedown)="onUpButtonMouseDown($event)"
            (mouseup)="onUpButtonMouseUp()"
            (mouseleave)="onUpButtonMouseLeave()"
            (keydown)="onUpButtonKeyDown($event)"
            (keyup)="onUpButtonKeyUp()"
            [attr.data-pc-section]="'incrementbutton'"
        >
            <span *ngIf="incrementButtonIcon" [ngClass]="incrementButtonIcon" [attr.data-pc-section]="'incrementbuttonicon'"></span>
            <ng-container *ngIf="!incrementButtonIcon">
                <AngleUpIcon *ngIf="!incrementButtonIconTemplate && !_incrementButtonIconTemplate" [attr.data-pc-section]="'incrementbuttonicon'" />
                <ng-template *ngTemplateOutlet="incrementButtonIconTemplate || _incrementButtonIconTemplate"></ng-template>
            </ng-container>
        </button>
        <button
            *ngIf="showButtons && buttonLayout !== 'stacked'"
            type="button"
            [ngClass]="_decrementButtonClass"
            [class]="decrementButtonClass"
            [disabled]="disabled"
            tabindex="-1"
            [attr.aria-hidden]="true"
            (mousedown)="onDownButtonMouseDown($event)"
            (mouseup)="onDownButtonMouseUp()"
            (mouseleave)="onDownButtonMouseLeave()"
            (keydown)="onDownButtonKeyDown($event)"
            (keyup)="onDownButtonKeyUp()"
            [attr.data-pc-section]="'decrementbutton'"
        >
            <span *ngIf="decrementButtonIcon" [ngClass]="decrementButtonIcon" [attr.data-pc-section]="'decrementbuttonicon'"></span>
            <ng-container *ngIf="!decrementButtonIcon">
                <AngleDownIcon *ngIf="!decrementButtonIconTemplate && !_decrementButtonIconTemplate" [attr.data-pc-section]="'decrementbuttonicon'" />
                <ng-template *ngTemplateOutlet="decrementButtonIconTemplate || _decrementButtonIconTemplate"></ng-template>
            </ng-container>
        </button>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [INPUTNUMBER_VALUE_ACCESSOR, InputNumberStyle],
      encapsulation: ViewEncapsulation.None,
      host: {
        "[attr.data-pc-name]": "'inputnumber'",
        "[attr.data-pc-section]": "'root'",
        style: "style"
      }
    }]
  }], () => [{
    type: Injector
  }], {
    showButtons: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    format: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    buttonLayout: [{
      type: Input
    }],
    inputId: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    maxlength: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    title: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaRequired: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    name: [{
      type: Input
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autocomplete: [{
      type: Input
    }],
    min: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    max: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    incrementButtonClass: [{
      type: Input
    }],
    decrementButtonClass: [{
      type: Input
    }],
    incrementButtonIcon: [{
      type: Input
    }],
    decrementButtonIcon: [{
      type: Input
    }],
    readonly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    step: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    allowEmpty: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    locale: [{
      type: Input
    }],
    localeMatcher: [{
      type: Input
    }],
    mode: [{
      type: Input
    }],
    currency: [{
      type: Input
    }],
    currencyDisplay: [{
      type: Input
    }],
    useGrouping: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    variant: [{
      type: Input
    }],
    minFractionDigits: [{
      type: Input,
      args: [{
        transform: (value) => numberAttribute(value, null)
      }]
    }],
    maxFractionDigits: [{
      type: Input,
      args: [{
        transform: (value) => numberAttribute(value, null)
      }]
    }],
    prefix: [{
      type: Input
    }],
    suffix: [{
      type: Input
    }],
    inputStyle: [{
      type: Input
    }],
    inputStyleClass: [{
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
    disabled: [{
      type: Input
    }],
    fluid: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onInput: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    onKeyDown: [{
      type: Output
    }],
    onClear: [{
      type: Output
    }],
    clearIconTemplate: [{
      type: ContentChild,
      args: ["clearicon", {
        descendants: false
      }]
    }],
    incrementButtonIconTemplate: [{
      type: ContentChild,
      args: ["incrementbuttonicon", {
        descendants: false
      }]
    }],
    decrementButtonIconTemplate: [{
      type: ContentChild,
      args: ["decrementbuttonicon", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    input: [{
      type: ViewChild,
      args: ["input"]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InputNumber, {
    className: "InputNumber",
    filePath: "inputnumber.ts",
    lineNumber: 193
  });
})();
var InputNumberModule = class _InputNumberModule {
  static \u0275fac = function InputNumberModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputNumberModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _InputNumberModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [InputNumber, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputNumberModule, [{
    type: NgModule,
    args: [{
      imports: [InputNumber, SharedModule],
      exports: [InputNumber, SharedModule]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-paginator.mjs
var theme3 = ({
  dt
}) => `
.p-paginator {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    background: ${dt("paginator.background")};
    color: ${dt("paginator.color")};
    padding: ${dt("paginator.padding")};
    border-radius: ${dt("paginator.border.radius")};
    gap: ${dt("paginator.gap")};
}

.p-paginator-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: ${dt("paginator.gap")};
}

.p-paginator-content-start {
    margin-inline-end: auto;
}

.p-paginator-content-end {
    margin-inline-start: auto;
}

.p-paginator-page,
.p-paginator-next,
.p-paginator-last,
.p-paginator-first,
.p-paginator-prev {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    user-select: none;
    overflow: hidden;
    position: relative;
    background: ${dt("paginator.nav.button.background")};
    border: 0 none;
    color: ${dt("paginator.nav.button.color")};
    min-width: ${dt("paginator.nav.button.width")};
    height: ${dt("paginator.nav.button.height")};
    transition: background ${dt("paginator.transition.duration")}, color ${dt("paginator.transition.duration")}, outline-color ${dt("paginator.transition.duration")}, box-shadow ${dt("paginator.transition.duration")};
    border-radius: ${dt("paginator.nav.button.border.radius")};
    padding: 0;
    margin: 0;
}

.p-paginator-page:focus-visible,
.p-paginator-next:focus-visible,
.p-paginator-last:focus-visible,
.p-paginator-first:focus-visible,
.p-paginator-prev:focus-visible {
    box-shadow: ${dt("paginator.nav.button.focus.ring.shadow")};
    outline: ${dt("paginator.nav.button.focus.ring.width")} ${dt("paginator.nav.button.focus.ring.style")} ${dt("paginator.nav.button.focus.ring.color")};
    outline-offset: ${dt("paginator.nav.button.focus.ring.offset")};
}

.p-paginator-page:not(.p-disabled):not(.p-paginator-page-selected):hover,
.p-paginator-first:not(.p-disabled):hover,
.p-paginator-prev:not(.p-disabled):hover,
.p-paginator-next:not(.p-disabled):hover,
.p-paginator-last:not(.p-disabled):hover {
    background: ${dt("paginator.nav.button.hover.background")};
    color: ${dt("paginator.nav.button.hover.color")};
}

.p-paginator-first:dir(rtl),
.p-paginator-prev:dir(rtl),
.p-paginator-next:dir(rtl),
.p-paginator-last:dir(rtl) {
    transform: rotate(180deg);
}

.p-paginator-page.p-paginator-page-selected {
    background: ${dt("paginator.nav.button.selected.background")};
    color: ${dt("paginator.nav.button.selected.color")};
}

.p-paginator-current {
    color: ${dt("paginator.current.page.report.color")};
}

.p-paginator-pages {
    display: flex;
    align-items: center;
    gap: ${dt("paginator.gap")};
}

.p-paginator-jtp-input .p-inputtext {
    max-width: ${dt("paginator.jump.to.page.input.max.width")};
}
`;
var classes3 = {
  paginator: ({
    instance,
    key
  }) => ["p-paginator p-component", {
    "p-paginator-default": !instance.hasBreakpoints(),
    [`p-paginator-${key}`]: instance.hasBreakpoints()
  }],
  content: "p-paginator-content",
  contentStart: "p-paginator-content-start",
  contentEnd: "p-paginator-content-end",
  first: ({
    instance
  }) => ["p-paginator-first", {
    "p-disabled": instance.$attrs.disabled
  }],
  firstIcon: "p-paginator-first-icon",
  prev: ({
    instance
  }) => ["p-paginator-prev", {
    "p-disabled": instance.$attrs.disabled
  }],
  prevIcon: "p-paginator-prev-icon",
  next: ({
    instance
  }) => ["p-paginator-next", {
    "p-disabled": instance.$attrs.disabled
  }],
  nextIcon: "p-paginator-next-icon",
  last: ({
    instance
  }) => ["p-paginator-last", {
    "p-disabled": instance.$attrs.disabled
  }],
  lastIcon: "p-paginator-last-icon",
  pages: "p-paginator-pages",
  page: ({
    props,
    pageLink
  }) => ["p-paginator-page", {
    "p-paginator-page-selected": pageLink - 1 === props.page
  }],
  current: "p-paginator-current",
  pcRowPerPageDropdown: "p-paginator-rpp-dropdown",
  pcJumpToPageDropdown: "p-paginator-jtp-dropdown",
  pcJumpToPageInput: "p-paginator-jtp-input"
};
var PaginatorStyle = class _PaginatorStyle extends BaseStyle {
  name = "paginator";
  theme = theme3;
  classes = classes3;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275PaginatorStyle_BaseFactory;
    return function PaginatorStyle_Factory(__ngFactoryType__) {
      return (\u0275PaginatorStyle_BaseFactory || (\u0275PaginatorStyle_BaseFactory = \u0275\u0275getInheritedFactory(_PaginatorStyle)))(__ngFactoryType__ || _PaginatorStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _PaginatorStyle,
    factory: _PaginatorStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaginatorStyle, [{
    type: Injectable
  }], null, null);
})();
var PaginatorClasses;
(function(PaginatorClasses2) {
  PaginatorClasses2["paginator"] = "p-paginator";
  PaginatorClasses2["contentStart"] = "p-paginator-content-start";
  PaginatorClasses2["contentEnd"] = "p-paginator-content-end";
  PaginatorClasses2["first"] = "p-paginator-first";
  PaginatorClasses2["firstIcon"] = "p-paginator-first-icon";
  PaginatorClasses2["prev"] = "p-paginator-prev";
  PaginatorClasses2["prevIcon"] = "p-paginator-prev-icon";
  PaginatorClasses2["next"] = "p-paginator-next";
  PaginatorClasses2["nextIcon"] = "p-paginator-next-icon";
  PaginatorClasses2["last"] = "p-paginator-last";
  PaginatorClasses2["lastIcon"] = "p-paginator-last-icon";
  PaginatorClasses2["pages"] = "p-paginator-pages";
  PaginatorClasses2["page"] = "p-paginator-page";
  PaginatorClasses2["current"] = "p-paginator-current";
  PaginatorClasses2["pcRowPerPageDropdown"] = "p-paginator-rpp-dropdown";
  PaginatorClasses2["pcJumpToPageDropdown"] = "p-paginator-jtp-dropdown";
  PaginatorClasses2["pcJumpToPageInput"] = "p-paginator-jtp-input";
})(PaginatorClasses || (PaginatorClasses = {}));
var _c03 = ["dropdownicon"];
var _c111 = ["firstpagelinkicon"];
var _c27 = ["previouspagelinkicon"];
var _c33 = ["lastpagelinkicon"];
var _c42 = ["nextpagelinkicon"];
var _c52 = (a0) => ({
  "p-disabled": a0
});
var _c62 = (a0) => ({
  $implicit: a0
});
var _c72 = (a0) => ({
  "p-paginator-page-selected": a0
});
function Paginator_div_0_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Paginator_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275template(1, Paginator_div_0_div_1_ng_container_1_Template, 1, 0, "ng-container", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("data-pc-section", "start");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.templateLeft)("ngTemplateOutletContext", \u0275\u0275pureFunction1(3, _c62, ctx_r1.paginatorState));
  }
}
function Paginator_div_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.currentPageReport);
  }
}
function Paginator_div_0_button_3_AngleDoubleLeftIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "AngleDoubleLeftIcon", 21);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-paginator-first-icon");
  }
}
function Paginator_div_0_button_3_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Paginator_div_0_button_3_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Paginator_div_0_button_3_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Paginator_div_0_button_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275template(1, Paginator_div_0_button_3_span_2_1_Template, 1, 0, null, 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.firstPageLinkIconTemplate || ctx_r1._firstPageLinkIconTemplate);
  }
}
function Paginator_div_0_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function Paginator_div_0_button_3_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changePageToFirst($event));
    });
    \u0275\u0275template(1, Paginator_div_0_button_3_AngleDoubleLeftIcon_1_Template, 1, 1, "AngleDoubleLeftIcon", 6)(2, Paginator_div_0_button_3_span_2_Template, 2, 1, "span", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.isFirstPage() || ctx_r1.empty())("ngClass", \u0275\u0275pureFunction1(5, _c52, ctx_r1.isFirstPage() || ctx_r1.empty()));
    \u0275\u0275attribute("aria-label", ctx_r1.getAriaLabel("firstPageLabel"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.firstPageLinkIconTemplate && !ctx_r1._firstPageLinkIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.firstPageLinkIconTemplate || ctx_r1._firstPageLinkIconTemplate);
  }
}
function Paginator_div_0_AngleLeftIcon_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "AngleLeftIcon", 21);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-paginator-prev-icon");
  }
}
function Paginator_div_0_span_6_1_ng_template_0_Template(rf, ctx) {
}
function Paginator_div_0_span_6_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Paginator_div_0_span_6_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Paginator_div_0_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275template(1, Paginator_div_0_span_6_1_Template, 1, 0, null, 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.previousPageLinkIconTemplate || ctx_r1._previousPageLinkIconTemplate);
  }
}
function Paginator_div_0_span_7_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function Paginator_div_0_span_7_button_1_Template_button_click_0_listener($event) {
      const pageLink_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onPageLinkClick($event, pageLink_r5 - 1));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pageLink_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(4, _c72, pageLink_r5 - 1 == ctx_r1.getPage()));
    \u0275\u0275attribute("aria-label", ctx_r1.getPageAriaLabel(pageLink_r5))("aria-current", pageLink_r5 - 1 == ctx_r1.getPage() ? "page" : void 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getLocalization(pageLink_r5), " ");
  }
}
function Paginator_div_0_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275template(1, Paginator_div_0_span_7_button_1_Template, 2, 6, "button", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.pageLinks);
  }
}
function Paginator_div_0_p_select_8_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate(ctx_r1.currentPageReport);
  }
}
function Paginator_div_0_p_select_8_ng_container_2_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Paginator_div_0_p_select_8_ng_container_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Paginator_div_0_p_select_8_ng_container_2_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 17);
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.jumpToPageItemTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c62, item_r7));
  }
}
function Paginator_div_0_p_select_8_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Paginator_div_0_p_select_8_ng_container_2_ng_template_1_Template, 1, 4, "ng-template", 31);
    \u0275\u0275elementContainerEnd();
  }
}
function Paginator_div_0_p_select_8_3_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Paginator_div_0_p_select_8_3_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Paginator_div_0_p_select_8_3_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 23);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.dropdownIconTemplate || ctx_r1._dropdownIconTemplate);
  }
}
function Paginator_div_0_p_select_8_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Paginator_div_0_p_select_8_3_ng_template_0_Template, 1, 1, "ng-template", 32);
  }
}
function Paginator_div_0_p_select_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-select", 28);
    \u0275\u0275listener("onChange", function Paginator_div_0_p_select_8_Template_p_select_onChange_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageDropdownChange($event));
    });
    \u0275\u0275template(1, Paginator_div_0_p_select_8_ng_template_1_Template, 1, 1, "ng-template", 29)(2, Paginator_div_0_p_select_8_ng_container_2_Template, 2, 0, "ng-container", 30)(3, Paginator_div_0_p_select_8_3_Template, 1, 0, null, 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("options", ctx_r1.pageItems)("ngModel", ctx_r1.getPage())("disabled", ctx_r1.empty())("appendTo", ctx_r1.dropdownAppendTo)("scrollHeight", ctx_r1.dropdownScrollHeight);
    \u0275\u0275attribute("aria-label", ctx_r1.getAriaLabel("jumpToPageDropdownLabel"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.jumpToPageItemTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.dropdownIconTemplate || ctx_r1._dropdownIconTemplate);
  }
}
function Paginator_div_0_AngleRightIcon_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "AngleRightIcon", 21);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-paginator-next-icon");
  }
}
function Paginator_div_0_span_11_1_ng_template_0_Template(rf, ctx) {
}
function Paginator_div_0_span_11_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Paginator_div_0_span_11_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Paginator_div_0_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275template(1, Paginator_div_0_span_11_1_Template, 1, 0, null, 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.nextPageLinkIconTemplate || ctx_r1._nextPageLinkIconTemplate);
  }
}
function Paginator_div_0_button_12_AngleDoubleRightIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "AngleDoubleRightIcon", 21);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-paginator-last-icon");
  }
}
function Paginator_div_0_button_12_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Paginator_div_0_button_12_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Paginator_div_0_button_12_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Paginator_div_0_button_12_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275template(1, Paginator_div_0_button_12_span_2_1_Template, 1, 0, null, 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.lastPageLinkIconTemplate || ctx_r1._lastPageLinkIconTemplate);
  }
}
function Paginator_div_0_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function Paginator_div_0_button_12_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changePageToLast($event));
    });
    \u0275\u0275template(1, Paginator_div_0_button_12_AngleDoubleRightIcon_1_Template, 1, 1, "AngleDoubleRightIcon", 6)(2, Paginator_div_0_button_12_span_2_Template, 2, 1, "span", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.isLastPage() || ctx_r1.empty())("ngClass", \u0275\u0275pureFunction1(5, _c52, ctx_r1.isLastPage() || ctx_r1.empty()));
    \u0275\u0275attribute("aria-label", ctx_r1.getAriaLabel("lastPageLabel"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.lastPageLinkIconTemplate && !ctx_r1._lastPageLinkIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.lastPageLinkIconTemplate || ctx_r1._lastPageLinkIconTemplate);
  }
}
function Paginator_div_0_p_inputnumber_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-inputnumber", 37);
    \u0275\u0275listener("ngModelChange", function Paginator_div_0_p_inputnumber_13_Template_p_inputnumber_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changePage($event - 1));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngModel", ctx_r1.currentPage())("disabled", ctx_r1.empty());
  }
}
function Paginator_div_0_p_select_14_ng_container_1_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Paginator_div_0_p_select_14_ng_container_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Paginator_div_0_p_select_14_ng_container_1_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 17);
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.dropdownItemTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c62, item_r11));
  }
}
function Paginator_div_0_p_select_14_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Paginator_div_0_p_select_14_ng_container_1_ng_template_1_Template, 1, 4, "ng-template", 31);
    \u0275\u0275elementContainerEnd();
  }
}
function Paginator_div_0_p_select_14_2_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Paginator_div_0_p_select_14_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Paginator_div_0_p_select_14_2_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 23);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.dropdownIconTemplate || ctx_r1._dropdownIconTemplate);
  }
}
function Paginator_div_0_p_select_14_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Paginator_div_0_p_select_14_2_ng_template_0_Template, 1, 1, "ng-template", 32);
  }
}
function Paginator_div_0_p_select_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-select", 38);
    \u0275\u0275twoWayListener("ngModelChange", function Paginator_div_0_p_select_14_Template_p_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.rows, $event) || (ctx_r1.rows = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onChange", function Paginator_div_0_p_select_14_Template_p_select_onChange_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onRppChange($event));
    });
    \u0275\u0275template(1, Paginator_div_0_p_select_14_ng_container_1_Template, 2, 0, "ng-container", 30)(2, Paginator_div_0_p_select_14_2_Template, 1, 0, null, 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("options", ctx_r1.rowsPerPageItems);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.rows);
    \u0275\u0275property("disabled", ctx_r1.empty())("appendTo", ctx_r1.dropdownAppendTo)("scrollHeight", ctx_r1.dropdownScrollHeight)("ariaLabel", ctx_r1.getAriaLabel("rowsPerPageLabel"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.dropdownItemTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.dropdownIconTemplate || ctx_r1._dropdownIconTemplate);
  }
}
function Paginator_div_0_div_15_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Paginator_div_0_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275template(1, Paginator_div_0_div_15_ng_container_1_Template, 1, 0, "ng-container", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("data-pc-section", "end");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.templateRight)("ngTemplateOutletContext", \u0275\u0275pureFunction1(3, _c62, ctx_r1.paginatorState));
  }
}
function Paginator_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275template(1, Paginator_div_0_div_1_Template, 2, 5, "div", 2)(2, Paginator_div_0_span_2_Template, 2, 1, "span", 3)(3, Paginator_div_0_button_3_Template, 3, 7, "button", 4);
    \u0275\u0275elementStart(4, "button", 5);
    \u0275\u0275listener("click", function Paginator_div_0_Template_button_click_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changePageToPrev($event));
    });
    \u0275\u0275template(5, Paginator_div_0_AngleLeftIcon_5_Template, 1, 1, "AngleLeftIcon", 6)(6, Paginator_div_0_span_6_Template, 2, 1, "span", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, Paginator_div_0_span_7_Template, 2, 1, "span", 8)(8, Paginator_div_0_p_select_8_Template, 4, 8, "p-select", 9);
    \u0275\u0275elementStart(9, "button", 10);
    \u0275\u0275listener("click", function Paginator_div_0_Template_button_click_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changePageToNext($event));
    });
    \u0275\u0275template(10, Paginator_div_0_AngleRightIcon_10_Template, 1, 1, "AngleRightIcon", 6)(11, Paginator_div_0_span_11_Template, 2, 1, "span", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, Paginator_div_0_button_12_Template, 3, 7, "button", 12)(13, Paginator_div_0_p_inputnumber_13_Template, 1, 2, "p-inputnumber", 13)(14, Paginator_div_0_p_select_14_Template, 3, 8, "p-select", 14)(15, Paginator_div_0_div_15_Template, 2, 5, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.styleClass);
    \u0275\u0275property("ngStyle", ctx_r1.style)("ngClass", "p-paginator p-component");
    \u0275\u0275attribute("data-pc-section", "paginator")("data-pc-section", "root");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.templateLeft);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showCurrentPageReport);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showFirstLastIcon);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isFirstPage() || ctx_r1.empty())("ngClass", \u0275\u0275pureFunction1(25, _c52, ctx_r1.isFirstPage() || ctx_r1.empty()));
    \u0275\u0275attribute("aria-label", ctx_r1.getAriaLabel("prevPageLabel"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.previousPageLinkIconTemplate && !ctx_r1._previousPageLinkIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.previousPageLinkIconTemplate || ctx_r1._previousPageLinkIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showPageLinks);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showJumpToPageDropdown);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isLastPage() || ctx_r1.empty())("ngClass", \u0275\u0275pureFunction1(27, _c52, ctx_r1.isLastPage() || ctx_r1.empty()));
    \u0275\u0275attribute("aria-label", ctx_r1.getAriaLabel("nextPageLabel"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.nextPageLinkIconTemplate && !ctx_r1._nextPageLinkIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.nextPageLinkIconTemplate || ctx_r1._nextPageLinkIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showFirstLastIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showJumpToPageInput);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.rowsPerPageOptions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.templateRight);
  }
}
var Paginator = class _Paginator extends BaseComponent {
  /**
   * Number of page links to display.
   * @group Props
   */
  pageLinkSize = 5;
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
   * Whether to show it even there is only one page.
   * @group Props
   */
  alwaysShow = true;
  /**
   * Target element to attach the dropdown overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  dropdownAppendTo;
  /**
   * Template instance to inject into the left side of the paginator.
   * @param {PaginatorState} context - Paginator state.
   * @group Props
   */
  templateLeft;
  /**
   * Template instance to inject into the right side of the paginator.
   * @param {PaginatorState} context - Paginator state.
   * @group Props
   */
  templateRight;
  /**
   * Target element to attach the dropdown overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  appendTo;
  /**
   * Dropdown height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.
   * @group Props
   */
  dropdownScrollHeight = "200px";
  /**
   * Template of the current page report element. Available placeholders are {currentPage},{totalPages},{rows},{first},{last} and {totalRecords}
   * @group Props
   */
  currentPageReportTemplate = "{currentPage} of {totalPages}";
  /**
   * Whether to display current page report.
   * @group Props
   */
  showCurrentPageReport;
  /**
   * When enabled, icons are displayed on paginator to go first and last page.
   * @group Props
   */
  showFirstLastIcon = true;
  /**
   * Number of total records.
   * @group Props
   */
  totalRecords = 0;
  /**
   * Data count to display per page.
   * @group Props
   */
  rows = 0;
  /**
   * Array of integer/object values to display inside rows per page dropdown. A object that have 'showAll' key can be added to it to show all data. Exp; [10,20,30,{showAll:'All'}]
   * @group Props
   */
  rowsPerPageOptions;
  /**
   * Whether to display a dropdown to navigate to any page.
   * @group Props
   */
  showJumpToPageDropdown;
  /**
   * Whether to display a input to navigate to any page.
   * @group Props
   */
  showJumpToPageInput;
  /**
   * Template instance to inject into the jump to page dropdown item inside in the paginator.
   * @param {Object} context - item instance.
   * @group Props
   */
  jumpToPageItemTemplate;
  /**
   * Whether to show page links.
   * @group Props
   */
  showPageLinks = true;
  /**
   * Locale to be used in formatting.
   * @group Props
   */
  locale;
  /**
   * Template instance to inject into the rows per page dropdown item inside in the paginator.
   * @param {Object} context - item instance.
   * @group Props
   */
  dropdownItemTemplate;
  /**
   * Zero-relative number of the first row to be displayed.
   * @group Props
   */
  get first() {
    return this._first;
  }
  set first(val) {
    this._first = val;
  }
  /**
   * Callback to invoke when page changes, the event object contains information about the new state.
   * @param {PaginatorState} event - Paginator state.
   * @group Emits
   */
  onPageChange = new EventEmitter();
  /**
   * Template for the dropdown icon.
   * @group Templates
   */
  dropdownIconTemplate;
  /**
   * Template for the first page link icon.
   * @group Templates
   */
  firstPageLinkIconTemplate;
  /**
   * Template for the previous page link icon.
   * @group Templates
   */
  previousPageLinkIconTemplate;
  /**
   * Template for the last page link icon.
   * @group Templates
   */
  lastPageLinkIconTemplate;
  /**
   * Template for the next page link icon.
   * @group Templates
   */
  nextPageLinkIconTemplate;
  templates;
  _dropdownIconTemplate;
  _firstPageLinkIconTemplate;
  _previousPageLinkIconTemplate;
  _lastPageLinkIconTemplate;
  _nextPageLinkIconTemplate;
  pageLinks;
  pageItems;
  rowsPerPageItems;
  paginatorState;
  _first = 0;
  _page = 0;
  _componentStyle = inject(PaginatorStyle);
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
    this.updatePaginatorState();
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "dropdownicon":
          this._dropdownIconTemplate = item.template;
          break;
        case "firstpagelinkicon":
          this._firstPageLinkIconTemplate = item.template;
          break;
        case "previouspagelinkicon":
          this._previousPageLinkIconTemplate = item.template;
          break;
        case "lastpagelinkicon":
          this._lastPageLinkIconTemplate = item.template;
          break;
        case "nextpagelinkicon":
          this._nextPageLinkIconTemplate = item.template;
          break;
      }
    });
  }
  getAriaLabel(labelType) {
    return this.config.translation.aria ? this.config.translation.aria[labelType] : void 0;
  }
  getPageAriaLabel(value) {
    return this.config.translation.aria ? this.config.translation.aria.pageLabel.replace(/{page}/g, `${value}`) : void 0;
  }
  getLocalization(digit) {
    const numerals = [...new Intl.NumberFormat(this.locale, {
      useGrouping: false
    }).format(9876543210)].reverse();
    const index = new Map(numerals.map((d, i) => [i, d]));
    if (digit > 9) {
      const numbers = String(digit).split("");
      return numbers.map((number) => index.get(Number(number))).join("");
    } else {
      return index.get(digit);
    }
  }
  ngOnChanges(simpleChange) {
    super.ngOnChanges(simpleChange);
    if (simpleChange.totalRecords) {
      this.updatePageLinks();
      this.updatePaginatorState();
      this.updateFirst();
      this.updateRowsPerPageOptions();
    }
    if (simpleChange.first) {
      this._first = simpleChange.first.currentValue;
      this.updatePageLinks();
      this.updatePaginatorState();
    }
    if (simpleChange.rows) {
      this.updatePageLinks();
      this.updatePaginatorState();
    }
    if (simpleChange.rowsPerPageOptions) {
      this.updateRowsPerPageOptions();
    }
    if (simpleChange.pageLinkSize) {
      this.updatePageLinks();
    }
  }
  updateRowsPerPageOptions() {
    if (this.rowsPerPageOptions) {
      this.rowsPerPageItems = [];
      let showAllItem = null;
      for (let opt of this.rowsPerPageOptions) {
        if (typeof opt == "object" && opt["showAll"]) {
          showAllItem = {
            label: opt["showAll"],
            value: this.totalRecords
          };
        } else {
          this.rowsPerPageItems.push({
            label: String(this.getLocalization(opt)),
            value: opt
          });
        }
      }
      if (showAllItem) {
        this.rowsPerPageItems.push(showAllItem);
      }
    }
  }
  isFirstPage() {
    return this.getPage() === 0;
  }
  isLastPage() {
    return this.getPage() === this.getPageCount() - 1;
  }
  getPageCount() {
    return Math.ceil(this.totalRecords / this.rows);
  }
  calculatePageLinkBoundaries() {
    let numberOfPages = this.getPageCount(), visiblePages = Math.min(this.pageLinkSize, numberOfPages);
    let start = Math.max(0, Math.ceil(this.getPage() - visiblePages / 2)), end = Math.min(numberOfPages - 1, start + visiblePages - 1);
    var delta = this.pageLinkSize - (end - start + 1);
    start = Math.max(0, start - delta);
    return [start, end];
  }
  updatePageLinks() {
    this.pageLinks = [];
    let boundaries = this.calculatePageLinkBoundaries(), start = boundaries[0], end = boundaries[1];
    for (let i = start; i <= end; i++) {
      this.pageLinks.push(i + 1);
    }
    if (this.showJumpToPageDropdown) {
      this.pageItems = [];
      for (let i = 0; i < this.getPageCount(); i++) {
        this.pageItems.push({
          label: String(i + 1),
          value: i
        });
      }
    }
  }
  changePage(p) {
    var pc = this.getPageCount();
    if (p >= 0 && p < pc) {
      this._first = this.rows * p;
      var state2 = {
        page: p,
        first: this.first,
        rows: this.rows,
        pageCount: pc
      };
      this.updatePageLinks();
      this.onPageChange.emit(state2);
      this.updatePaginatorState();
    }
  }
  updateFirst() {
    const page = this.getPage();
    if (page > 0 && this.totalRecords && this.first >= this.totalRecords) {
      Promise.resolve(null).then(() => this.changePage(page - 1));
    }
  }
  getPage() {
    return Math.floor(this.first / this.rows);
  }
  changePageToFirst(event2) {
    if (!this.isFirstPage()) {
      this.changePage(0);
    }
    event2.preventDefault();
  }
  changePageToPrev(event2) {
    this.changePage(this.getPage() - 1);
    event2.preventDefault();
  }
  changePageToNext(event2) {
    this.changePage(this.getPage() + 1);
    event2.preventDefault();
  }
  changePageToLast(event2) {
    if (!this.isLastPage()) {
      this.changePage(this.getPageCount() - 1);
    }
    event2.preventDefault();
  }
  onPageLinkClick(event2, page) {
    this.changePage(page);
    event2.preventDefault();
  }
  onRppChange(event2) {
    this.changePage(this.getPage());
  }
  onPageDropdownChange(event2) {
    this.changePage(event2.value);
  }
  updatePaginatorState() {
    this.paginatorState = {
      page: this.getPage(),
      pageCount: this.getPageCount(),
      rows: this.rows,
      first: this.first,
      totalRecords: this.totalRecords
    };
  }
  empty() {
    return this.getPageCount() === 0;
  }
  currentPage() {
    return this.getPageCount() > 0 ? this.getPage() + 1 : 0;
  }
  get currentPageReport() {
    return this.currentPageReportTemplate.replace("{currentPage}", String(this.currentPage())).replace("{totalPages}", String(this.getPageCount())).replace("{first}", String(this.totalRecords > 0 ? this._first + 1 : 0)).replace("{last}", String(Math.min(this._first + this.rows, this.totalRecords))).replace("{rows}", String(this.rows)).replace("{totalRecords}", String(this.totalRecords));
  }
  static \u0275fac = function Paginator_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Paginator)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Paginator,
    selectors: [["p-paginator"]],
    contentQueries: function Paginator_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c03, 4);
        \u0275\u0275contentQuery(dirIndex, _c111, 4);
        \u0275\u0275contentQuery(dirIndex, _c27, 4);
        \u0275\u0275contentQuery(dirIndex, _c33, 4);
        \u0275\u0275contentQuery(dirIndex, _c42, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.dropdownIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.firstPageLinkIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.previousPageLinkIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.lastPageLinkIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.nextPageLinkIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    inputs: {
      pageLinkSize: [2, "pageLinkSize", "pageLinkSize", numberAttribute],
      style: "style",
      styleClass: "styleClass",
      alwaysShow: [2, "alwaysShow", "alwaysShow", booleanAttribute],
      dropdownAppendTo: "dropdownAppendTo",
      templateLeft: "templateLeft",
      templateRight: "templateRight",
      appendTo: "appendTo",
      dropdownScrollHeight: "dropdownScrollHeight",
      currentPageReportTemplate: "currentPageReportTemplate",
      showCurrentPageReport: [2, "showCurrentPageReport", "showCurrentPageReport", booleanAttribute],
      showFirstLastIcon: [2, "showFirstLastIcon", "showFirstLastIcon", booleanAttribute],
      totalRecords: [2, "totalRecords", "totalRecords", numberAttribute],
      rows: [2, "rows", "rows", numberAttribute],
      rowsPerPageOptions: "rowsPerPageOptions",
      showJumpToPageDropdown: [2, "showJumpToPageDropdown", "showJumpToPageDropdown", booleanAttribute],
      showJumpToPageInput: [2, "showJumpToPageInput", "showJumpToPageInput", booleanAttribute],
      jumpToPageItemTemplate: "jumpToPageItemTemplate",
      showPageLinks: [2, "showPageLinks", "showPageLinks", booleanAttribute],
      locale: "locale",
      dropdownItemTemplate: "dropdownItemTemplate",
      first: "first"
    },
    outputs: {
      onPageChange: "onPageChange"
    },
    features: [\u0275\u0275ProvidersFeature([PaginatorStyle]), \u0275\u0275InputTransformsFeature, \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature],
    decls: 1,
    vars: 1,
    consts: [[3, "class", "ngStyle", "ngClass", 4, "ngIf"], [3, "ngStyle", "ngClass"], ["class", "p-paginator-content-start", 4, "ngIf"], ["class", "p-paginator-current", 4, "ngIf"], ["type", "button", "pRipple", "", "class", "p-paginator-first", 3, "disabled", "ngClass", "click", 4, "ngIf"], ["type", "button", "pRipple", "", 1, "p-paginator-prev", 3, "click", "disabled", "ngClass"], [3, "styleClass", 4, "ngIf"], ["class", "p-paginator-prev-icon", 4, "ngIf"], ["class", "p-paginator-pages", 4, "ngIf"], ["styleClass", "p-paginator-jtp-dropdown", 3, "options", "ngModel", "disabled", "appendTo", "scrollHeight", "onChange", 4, "ngIf"], ["type", "button", "pRipple", "", 1, "p-paginator-next", 3, "click", "disabled", "ngClass"], ["class", "p-paginator-next-icon", 4, "ngIf"], ["type", "button", "pRipple", "", "class", "p-paginator-last", 3, "disabled", "ngClass", "click", 4, "ngIf"], ["class", "p-paginator-jtp-input", 3, "ngModel", "disabled", "ngModelChange", 4, "ngIf"], ["styleClass", "p-paginator-rpp-dropdown", 3, "options", "ngModel", "disabled", "appendTo", "scrollHeight", "ariaLabel", "ngModelChange", "onChange", 4, "ngIf"], ["class", "p-paginator-content-end", 4, "ngIf"], [1, "p-paginator-content-start"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-paginator-current"], ["type", "button", "pRipple", "", 1, "p-paginator-first", 3, "click", "disabled", "ngClass"], ["class", "p-paginator-first-icon", 4, "ngIf"], [3, "styleClass"], [1, "p-paginator-first-icon"], [4, "ngTemplateOutlet"], [1, "p-paginator-prev-icon"], [1, "p-paginator-pages"], ["type", "button", "class", "p-paginator-page", "pRipple", "", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["type", "button", "pRipple", "", 1, "p-paginator-page", 3, "click", "ngClass"], ["styleClass", "p-paginator-jtp-dropdown", 3, "onChange", "options", "ngModel", "disabled", "appendTo", "scrollHeight"], ["pTemplate", "selectedItem"], [4, "ngIf"], ["pTemplate", "item"], ["pTemplate", "dropdownicon"], [1, "p-paginator-next-icon"], ["type", "button", "pRipple", "", 1, "p-paginator-last", 3, "click", "disabled", "ngClass"], ["class", "p-paginator-last-icon", 4, "ngIf"], [1, "p-paginator-last-icon"], [1, "p-paginator-jtp-input", 3, "ngModelChange", "ngModel", "disabled"], ["styleClass", "p-paginator-rpp-dropdown", 3, "ngModelChange", "onChange", "options", "ngModel", "disabled", "appendTo", "scrollHeight", "ariaLabel"], [1, "p-paginator-content-end"]],
    template: function Paginator_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, Paginator_div_0_Template, 16, 29, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.alwaysShow ? true : ctx.pageLinks && ctx.pageLinks.length > 1);
      }
    },
    dependencies: [CommonModule, NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, Select, InputNumber, FormsModule, NgControlStatus, NgModel, Ripple, AngleDoubleLeftIcon, AngleDoubleRightIcon, AngleLeftIcon, AngleRightIcon, SharedModule, PrimeTemplate],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Paginator, [{
    type: Component,
    args: [{
      selector: "p-paginator",
      standalone: true,
      imports: [CommonModule, Select, InputNumber, FormsModule, Ripple, AngleDoubleLeftIcon, AngleDoubleRightIcon, AngleLeftIcon, AngleRightIcon, SharedModule],
      template: `
        <div [class]="styleClass" [ngStyle]="style" [ngClass]="'p-paginator p-component'" *ngIf="alwaysShow ? true : pageLinks && pageLinks.length > 1" [attr.data-pc-section]="'paginator'" [attr.data-pc-section]="'root'">
            <div class="p-paginator-content-start" *ngIf="templateLeft" [attr.data-pc-section]="'start'">
                <ng-container *ngTemplateOutlet="templateLeft; context: { $implicit: paginatorState }"></ng-container>
            </div>
            <span class="p-paginator-current" *ngIf="showCurrentPageReport">{{ currentPageReport }}</span>
            <button
                *ngIf="showFirstLastIcon"
                type="button"
                [disabled]="isFirstPage() || empty()"
                (click)="changePageToFirst($event)"
                pRipple
                class="p-paginator-first"
                [ngClass]="{ 'p-disabled': isFirstPage() || empty() }"
                [attr.aria-label]="getAriaLabel('firstPageLabel')"
            >
                <AngleDoubleLeftIcon *ngIf="!firstPageLinkIconTemplate && !_firstPageLinkIconTemplate" [styleClass]="'p-paginator-first-icon'" />
                <span class="p-paginator-first-icon" *ngIf="firstPageLinkIconTemplate || _firstPageLinkIconTemplate">
                    <ng-template *ngTemplateOutlet="firstPageLinkIconTemplate || _firstPageLinkIconTemplate"></ng-template>
                </span>
            </button>
            <button type="button" [disabled]="isFirstPage() || empty()" (click)="changePageToPrev($event)" pRipple class="p-paginator-prev" [ngClass]="{ 'p-disabled': isFirstPage() || empty() }" [attr.aria-label]="getAriaLabel('prevPageLabel')">
                <AngleLeftIcon *ngIf="!previousPageLinkIconTemplate && !_previousPageLinkIconTemplate" [styleClass]="'p-paginator-prev-icon'" />
                <span class="p-paginator-prev-icon" *ngIf="previousPageLinkIconTemplate || _previousPageLinkIconTemplate">
                    <ng-template *ngTemplateOutlet="previousPageLinkIconTemplate || _previousPageLinkIconTemplate"></ng-template>
                </span>
            </button>
            <span class="p-paginator-pages" *ngIf="showPageLinks">
                <button
                    type="button"
                    *ngFor="let pageLink of pageLinks"
                    class="p-paginator-page"
                    [ngClass]="{ 'p-paginator-page-selected': pageLink - 1 == getPage() }"
                    [attr.aria-label]="getPageAriaLabel(pageLink)"
                    [attr.aria-current]="pageLink - 1 == getPage() ? 'page' : undefined"
                    (click)="onPageLinkClick($event, pageLink - 1)"
                    pRipple
                >
                    {{ getLocalization(pageLink) }}
                </button>
            </span>
            <p-select
                [options]="pageItems"
                [ngModel]="getPage()"
                *ngIf="showJumpToPageDropdown"
                [disabled]="empty()"
                [attr.aria-label]="getAriaLabel('jumpToPageDropdownLabel')"
                styleClass="p-paginator-jtp-dropdown"
                (onChange)="onPageDropdownChange($event)"
                [appendTo]="dropdownAppendTo"
                [scrollHeight]="dropdownScrollHeight"
            >
                <ng-template pTemplate="selectedItem">{{ currentPageReport }}</ng-template>
                <ng-container *ngIf="jumpToPageItemTemplate">
                    <ng-template let-item pTemplate="item">
                        <ng-container *ngTemplateOutlet="jumpToPageItemTemplate; context: { $implicit: item }"></ng-container>
                    </ng-template>
                </ng-container>
                <ng-template pTemplate="dropdownicon" *ngIf="dropdownIconTemplate || _dropdownIconTemplate">
                    <ng-container *ngTemplateOutlet="dropdownIconTemplate || _dropdownIconTemplate"></ng-container>
                </ng-template>
            </p-select>
            <button type="button" [disabled]="isLastPage() || empty()" (click)="changePageToNext($event)" pRipple class="p-paginator-next" [ngClass]="{ 'p-disabled': isLastPage() || empty() }" [attr.aria-label]="getAriaLabel('nextPageLabel')">
                <AngleRightIcon *ngIf="!nextPageLinkIconTemplate && !_nextPageLinkIconTemplate" [styleClass]="'p-paginator-next-icon'" />
                <span class="p-paginator-next-icon" *ngIf="nextPageLinkIconTemplate || _nextPageLinkIconTemplate">
                    <ng-template *ngTemplateOutlet="nextPageLinkIconTemplate || _nextPageLinkIconTemplate"></ng-template>
                </span>
            </button>
            <button
                *ngIf="showFirstLastIcon"
                type="button"
                [disabled]="isLastPage() || empty()"
                (click)="changePageToLast($event)"
                pRipple
                class="p-paginator-last"
                [ngClass]="{ 'p-disabled': isLastPage() || empty() }"
                [attr.aria-label]="getAriaLabel('lastPageLabel')"
            >
                <AngleDoubleRightIcon *ngIf="!lastPageLinkIconTemplate && !_lastPageLinkIconTemplate" [styleClass]="'p-paginator-last-icon'" />
                <span class="p-paginator-last-icon" *ngIf="lastPageLinkIconTemplate || _lastPageLinkIconTemplate">
                    <ng-template *ngTemplateOutlet="lastPageLinkIconTemplate || _lastPageLinkIconTemplate"></ng-template>
                </span>
            </button>
            <p-inputnumber *ngIf="showJumpToPageInput" [ngModel]="currentPage()" class="p-paginator-jtp-input" [disabled]="empty()" (ngModelChange)="changePage($event - 1)"></p-inputnumber>
            <p-select
                [options]="rowsPerPageItems"
                [(ngModel)]="rows"
                *ngIf="rowsPerPageOptions"
                styleClass="p-paginator-rpp-dropdown"
                [disabled]="empty()"
                (onChange)="onRppChange($event)"
                [appendTo]="dropdownAppendTo"
                [scrollHeight]="dropdownScrollHeight"
                [ariaLabel]="getAriaLabel('rowsPerPageLabel')"
            >
                <ng-container *ngIf="dropdownItemTemplate">
                    <ng-template let-item pTemplate="item">
                        <ng-container *ngTemplateOutlet="dropdownItemTemplate; context: { $implicit: item }"></ng-container>
                    </ng-template>
                </ng-container>
                <ng-template pTemplate="dropdownicon" *ngIf="dropdownIconTemplate || _dropdownIconTemplate">
                    <ng-container *ngTemplateOutlet="dropdownIconTemplate || _dropdownIconTemplate"></ng-container>
                </ng-template>
            </p-select>
            <div class="p-paginator-content-end" *ngIf="templateRight" [attr.data-pc-section]="'end'">
                <ng-container *ngTemplateOutlet="templateRight; context: { $implicit: paginatorState }"></ng-container>
            </div>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [PaginatorStyle]
    }]
  }], () => [], {
    pageLinkSize: [{
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
    alwaysShow: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    dropdownAppendTo: [{
      type: Input
    }],
    templateLeft: [{
      type: Input
    }],
    templateRight: [{
      type: Input
    }],
    appendTo: [{
      type: Input
    }],
    dropdownScrollHeight: [{
      type: Input
    }],
    currentPageReportTemplate: [{
      type: Input
    }],
    showCurrentPageReport: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showFirstLastIcon: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    totalRecords: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    rows: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    rowsPerPageOptions: [{
      type: Input
    }],
    showJumpToPageDropdown: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showJumpToPageInput: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    jumpToPageItemTemplate: [{
      type: Input
    }],
    showPageLinks: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    locale: [{
      type: Input
    }],
    dropdownItemTemplate: [{
      type: Input
    }],
    first: [{
      type: Input
    }],
    onPageChange: [{
      type: Output
    }],
    dropdownIconTemplate: [{
      type: ContentChild,
      args: ["dropdownicon", {
        descendants: false
      }]
    }],
    firstPageLinkIconTemplate: [{
      type: ContentChild,
      args: ["firstpagelinkicon", {
        descendants: false
      }]
    }],
    previousPageLinkIconTemplate: [{
      type: ContentChild,
      args: ["previouspagelinkicon", {
        descendants: false
      }]
    }],
    lastPageLinkIconTemplate: [{
      type: ContentChild,
      args: ["lastpagelinkicon", {
        descendants: false
      }]
    }],
    nextPageLinkIconTemplate: [{
      type: ContentChild,
      args: ["nextpagelinkicon", {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Paginator, {
    className: "Paginator",
    filePath: "paginator.ts",
    lineNumber: 156
  });
})();
var PaginatorModule = class _PaginatorModule {
  static \u0275fac = function PaginatorModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PaginatorModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _PaginatorModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Paginator, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaginatorModule, [{
    type: NgModule,
    args: [{
      imports: [Paginator, SharedModule],
      exports: [Paginator, SharedModule]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-radiobutton.mjs
var theme4 = ({
  dt
}) => `
.p-radiobutton {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    width: ${dt("radiobutton.width")};
    height: ${dt("radiobutton.height")};
}

.p-radiobutton-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border: 1px solid transparent;
    border-radius: 50%;
}

.p-radiobutton-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid ${dt("radiobutton.border.color")};
    background: ${dt("radiobutton.background")};
    width: ${dt("radiobutton.width")};
    height: ${dt("radiobutton.height")};
    transition: background ${dt("radiobutton.transition.duration")}, color ${dt("radiobutton.transition.duration")}, border-color ${dt("radiobutton.transition.duration")}, box-shadow ${dt("radiobutton.transition.duration")}, outline-color ${dt("radiobutton.transition.duration")};
    outline-color: transparent;
    box-shadow: ${dt("radiobutton.shadow")};
}

.p-radiobutton-icon {
    transition-duration: ${dt("radiobutton.transition.duration")};
    background: transparent;
    font-size: ${dt("radiobutton.icon.size")};
    width: ${dt("radiobutton.icon.size")};
    height: ${dt("radiobutton.icon.size")};
    border-radius: 50%;
    backface-visibility: hidden;
    transform: translateZ(0) scale(0.1);
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
    border-color: ${dt("radiobutton.hover.border.color")};
}

.p-radiobutton-checked .p-radiobutton-box {
    border-color: ${dt("radiobutton.checked.border.color")};
    background: ${dt("radiobutton.checked.background")};
}

.p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {
    background: ${dt("radiobutton.icon.checked.color")};
    transform: translateZ(0) scale(1, 1);
    visibility: visible;
}

.p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
    border-color: ${dt("radiobutton.checked.hover.border.color")};
    background: ${dt("radiobutton.checked.hover.background")};
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {
    background: ${dt("radiobutton.icon.checked.hover.color")};
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {
    border-color: ${dt("radiobutton.focus.border.color")};
    box-shadow: ${dt("radiobutton.focus.ring.shadow")};
    outline: ${dt("radiobutton.focus.ring.width")} ${dt("radiobutton.focus.ring.style")} ${dt("radiobutton.focus.ring.color")};
    outline-offset: ${dt("radiobutton.focus.ring.offset")};
}

.p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {
    border-color: ${dt("radiobutton.checked.focus.border.color")};
}

.p-radiobutton.ng-invalid.ng-dirty > .p-radiobutton-box {
    border-color: ${dt("radiobutton.invalid.border.color")};
}

.p-radiobutton.p-variant-filled .p-radiobutton-box {
    background: ${dt("radiobutton.filled.background")};
}

.p-radiobutton.p-variant-filled.p-radiobutton-checked .p-radiobutton-box {
    background: ${dt("radiobutton.checked.background")};
}

.p-radiobutton.p-variant-filled:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box {
    background: ${dt("radiobutton.checked.hover.background")};
}

.p-radiobutton.p-disabled {
    opacity: 1;
}

.p-radiobutton.p-disabled .p-radiobutton-box {
    background: ${dt("radiobutton.disabled.background")};
    border-color: ${dt("radiobutton.checked.disabled.border.color")};
}

.p-radiobutton-checked.p-disabled .p-radiobutton-box .p-radiobutton-icon {
    background: ${dt("radiobutton.icon.disabled.color")};
}

.p-radiobutton-sm,
.p-radiobutton-sm .p-radiobutton-box {
    width: ${dt("radiobutton.sm.width")};
    height: ${dt("radiobutton.sm.height")};
}

.p-radiobutton-sm .p-radiobutton-icon {
    font-size: ${dt("radiobutton.icon.sm.size")};
    width: ${dt("radiobutton.icon.sm.size")};
    height: ${dt("radiobutton.icon.sm.size")};
}

.p-radiobutton-lg,
.p-radiobutton-lg .p-radiobutton-box {
    width: ${dt("radiobutton.lg.width")};
    height: ${dt("radiobutton.lg.height")};
}

.p-radiobutton-lg .p-radiobutton-icon {
    font-size: ${dt("radiobutton.icon.lg.size")};
    width: ${dt("radiobutton.icon.lg.size")};
    height: ${dt("radiobutton.icon.lg.size")};
}
`;
var classes4 = {
  root: ({
    instance,
    props
  }) => ["p-radiobutton p-component", {
    "p-radiobutton-checked": instance.checked,
    "p-disabled": props.disabled,
    "p-invalid": props.invalid,
    "p-variant-filled": props.variant ? props.variant === "filled" : instance.config.inputStyle === "filled" || instance.config.inputVariant === "filled"
  }],
  box: "p-radiobutton-box",
  input: "p-radiobutton-input",
  icon: "p-radiobutton-icon"
};
var RadioButtonStyle = class _RadioButtonStyle extends BaseStyle {
  name = "radiobutton";
  theme = theme4;
  classes = classes4;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275RadioButtonStyle_BaseFactory;
    return function RadioButtonStyle_Factory(__ngFactoryType__) {
      return (\u0275RadioButtonStyle_BaseFactory || (\u0275RadioButtonStyle_BaseFactory = \u0275\u0275getInheritedFactory(_RadioButtonStyle)))(__ngFactoryType__ || _RadioButtonStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _RadioButtonStyle,
    factory: _RadioButtonStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioButtonStyle, [{
    type: Injectable
  }], null, null);
})();
var RadioButtonClasses;
(function(RadioButtonClasses2) {
  RadioButtonClasses2["root"] = "p-radiobutton";
  RadioButtonClasses2["box"] = "p-radiobutton-box";
  RadioButtonClasses2["input"] = "p-radiobutton-input";
  RadioButtonClasses2["icon"] = "p-radiobutton-icon";
})(RadioButtonClasses || (RadioButtonClasses = {}));
var _c04 = ["input"];
var _c112 = (a0, a1, a2, a3, a4) => ({
  "p-radiobutton p-component": true,
  "p-radiobutton-checked": a0,
  "p-disabled": a1,
  "p-variant-filled": a2,
  "p-radiobutton-sm p-inputfield-sm": a3,
  "p-radiobutton-lg p-inputfield-lg": a4
});
var RADIO_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioButton),
  multi: true
};
var RadioControlRegistry = class _RadioControlRegistry {
  accessors = [];
  add(control, accessor) {
    this.accessors.push([control, accessor]);
  }
  remove(accessor) {
    this.accessors = this.accessors.filter((c) => {
      return c[1] !== accessor;
    });
  }
  select(accessor) {
    this.accessors.forEach((c) => {
      if (this.isSameGroup(c, accessor) && c[1] !== accessor) {
        c[1].writeValue(accessor.value);
      }
    });
  }
  isSameGroup(controlPair, accessor) {
    if (!controlPair[0].control) {
      return false;
    }
    return controlPair[0].control.root === accessor.control.control.root && controlPair[1].name === accessor.name;
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
var RadioButton = class _RadioButton extends BaseComponent {
  /**
   * Value of the radiobutton.
   * @group Props
   */
  value;
  /**
   * The name of the form control.
   * @group Props
   */
  formControlName;
  /**
   * Name of the radiobutton group.
   * @group Props
   */
  name;
  /**
   * When present, it specifies that the element should be disabled.
   * @group Props
   */
  disabled;
  /**
   * Specifies the input variant of the component.
   * @group Props
   */
  variant = "outlined";
  /**
   * Defines the size of the component.
   * @group Props
   */
  size;
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
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Allows to select a boolean value.
   * @group Props
   */
  binary;
  /**
   * Callback to invoke on radio button click.
   * @param {RadioButtonClickEvent} event - Custom click event.
   * @group Emits
   */
  onClick = new EventEmitter();
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
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  checked;
  focused;
  control;
  _componentStyle = inject(RadioButtonStyle);
  injector = inject(Injector);
  registry = inject(RadioControlRegistry);
  ngOnInit() {
    super.ngOnInit();
    this.control = this.injector.get(NgControl);
    this.checkName();
    this.registry.add(this.control, this);
  }
  onChange(event2) {
    if (!this.disabled) {
      this.select(event2);
    }
  }
  select(event2) {
    if (!this.disabled) {
      this.checked = true;
      this.onModelChange(this.value);
      this.registry.select(this);
      this.onClick.emit({
        originalEvent: event2,
        value: this.value
      });
    }
  }
  writeValue(value) {
    if (!this.binary) {
      this.checked = value == this.value;
    } else {
      this.checked = !!value;
    }
    if (this.inputViewChild && this.inputViewChild.nativeElement) {
      this.inputViewChild.nativeElement.checked = this.checked;
    }
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
  onInputFocus(event2) {
    this.focused = true;
    this.onFocus.emit(event2);
  }
  onInputBlur(event2) {
    this.focused = false;
    this.onModelTouched();
    this.onBlur.emit(event2);
  }
  /**
   * Applies focus to input field.
   * @group Method
   */
  focus() {
    this.inputViewChild.nativeElement.focus();
  }
  ngOnDestroy() {
    this.registry.remove(this);
    super.ngOnDestroy();
  }
  checkName() {
    if (this.name && this.formControlName && this.name !== this.formControlName) {
      this.throwNameError();
    }
    if (!this.name && this.formControlName) {
      this.name = this.formControlName;
    }
  }
  throwNameError() {
    throw new Error(`
          If you define both a name and a formControlName attribute on your radio button, their values
          must match. Ex: <p-radioButton formControlName="food" name="food"></p-radioButton>
        `);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275RadioButton_BaseFactory;
    return function RadioButton_Factory(__ngFactoryType__) {
      return (\u0275RadioButton_BaseFactory || (\u0275RadioButton_BaseFactory = \u0275\u0275getInheritedFactory(_RadioButton)))(__ngFactoryType__ || _RadioButton);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _RadioButton,
    selectors: [["p-radioButton"], ["p-radiobutton"], ["p-radio-button"]],
    viewQuery: function RadioButton_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c04, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.inputViewChild = _t.first);
      }
    },
    inputs: {
      value: "value",
      formControlName: "formControlName",
      name: "name",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      variant: "variant",
      size: "size",
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      inputId: "inputId",
      ariaLabelledBy: "ariaLabelledBy",
      ariaLabel: "ariaLabel",
      style: "style",
      styleClass: "styleClass",
      autofocus: [2, "autofocus", "autofocus", booleanAttribute],
      binary: [2, "binary", "binary", booleanAttribute]
    },
    outputs: {
      onClick: "onClick",
      onFocus: "onFocus",
      onBlur: "onBlur"
    },
    features: [\u0275\u0275ProvidersFeature([RADIO_VALUE_ACCESSOR, RadioButtonStyle]), \u0275\u0275InputTransformsFeature, \u0275\u0275InheritDefinitionFeature],
    decls: 5,
    vars: 24,
    consts: [["input", ""], [3, "ngStyle", "ngClass"], ["type", "radio", 1, "p-radiobutton-input", 3, "focus", "blur", "change", "checked", "disabled", "value", "pAutoFocus"], [1, "p-radiobutton-box"], [1, "p-radiobutton-icon"]],
    template: function RadioButton_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "input", 2, 0);
        \u0275\u0275listener("focus", function RadioButton_Template_input_focus_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onInputFocus($event));
        })("blur", function RadioButton_Template_input_blur_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onInputBlur($event));
        })("change", function RadioButton_Template_input_change_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onChange($event));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 3);
        \u0275\u0275element(4, "div", 4);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.styleClass);
        \u0275\u0275property("ngStyle", ctx.style)("ngClass", \u0275\u0275pureFunction5(18, _c112, ctx.checked, ctx.disabled, ctx.variant === "filled" || ctx.config.inputStyle() === "filled" || ctx.config.inputVariant() === "filled", ctx.size === "small", ctx.size === "large"));
        \u0275\u0275attribute("data-pc-name", "radiobutton")("data-pc-section", "root");
        \u0275\u0275advance();
        \u0275\u0275property("checked", ctx.checked)("disabled", ctx.disabled)("value", ctx.value)("pAutoFocus", ctx.autofocus);
        \u0275\u0275attribute("id", ctx.inputId)("name", ctx.name)("aria-labelledby", ctx.ariaLabelledBy)("aria-label", ctx.ariaLabel)("tabindex", ctx.tabindex)("aria-checked", ctx.checked);
        \u0275\u0275advance(2);
        \u0275\u0275attribute("data-pc-section", "input");
        \u0275\u0275advance();
        \u0275\u0275attribute("data-pc-section", "icon");
      }
    },
    dependencies: [CommonModule, NgClass, NgStyle, AutoFocus, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioButton, [{
    type: Component,
    args: [{
      selector: "p-radioButton, p-radiobutton, p-radio-button",
      standalone: true,
      imports: [CommonModule, AutoFocus, SharedModule],
      template: `
        <div
            [ngStyle]="style"
            [ngClass]="{
                'p-radiobutton p-component': true,
                'p-radiobutton-checked': checked,
                'p-disabled': disabled,
                'p-variant-filled': variant === 'filled' || config.inputStyle() === 'filled' || config.inputVariant() === 'filled',
                'p-radiobutton-sm p-inputfield-sm': size === 'small',
                'p-radiobutton-lg p-inputfield-lg': size === 'large'
            }"
            [class]="styleClass"
            [attr.data-pc-name]="'radiobutton'"
            [attr.data-pc-section]="'root'"
        >
            <input
                #input
                [attr.id]="inputId"
                type="radio"
                class="p-radiobutton-input"
                [attr.name]="name"
                [checked]="checked"
                [disabled]="disabled"
                [value]="value"
                [attr.aria-labelledby]="ariaLabelledBy"
                [attr.aria-label]="ariaLabel"
                [attr.tabindex]="tabindex"
                [attr.aria-checked]="checked"
                (focus)="onInputFocus($event)"
                (blur)="onInputBlur($event)"
                (change)="onChange($event)"
                [pAutoFocus]="autofocus"
            />
            <div class="p-radiobutton-box" [attr.data-pc-section]="'input'">
                <div class="p-radiobutton-icon" [attr.data-pc-section]="'icon'"></div>
            </div>
        </div>
    `,
      providers: [RADIO_VALUE_ACCESSOR, RadioButtonStyle],
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    value: [{
      type: Input
    }],
    formControlName: [{
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
    variant: [{
      type: Input
    }],
    size: [{
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
    ariaLabelledBy: [{
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
    autofocus: [{
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
    onClick: [{
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
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RadioButton, {
    className: "RadioButton",
    filePath: "radiobutton.ts",
    lineNumber: 98
  });
})();
var RadioButtonModule = class _RadioButtonModule {
  static \u0275fac = function RadioButtonModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RadioButtonModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _RadioButtonModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [RadioButton, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioButtonModule, [{
    type: NgModule,
    args: [{
      imports: [RadioButton, SharedModule],
      exports: [RadioButton, SharedModule]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-table.mjs
var theme5 = ({
  dt
}) => `
.p-datatable {
    position: relative;
}

.p-datatable-table {
    border-spacing: 0;
    border-collapse: separate;
    width: 100%;
}

.p-datatable-scrollable > .p-datatable-table-container {
    position: relative;
}
/* For PrimeNG */
.p-datatable-scrollable-table > .p-datatable-thead {
    top: 0;
    z-index: 2;
}
/* For PrimeNG */
.p-datatable-scrollable-table > .p-datatable-frozen-tbody {
    position: sticky;
    z-index: 2;
}
/* For PrimeNG */
.p-datatable-scrollable-table > .p-datatable-frozen-tbody:last-child {
    z-index: 1;
}

.p-datatable-scrollable-table > .p-datatable-tfoot {
    bottom: 0;
    z-index: 1;
}

.p-datatable-scrollable > tr:not(:has(.p-datatable-selectable-row)) >.p-datatable-frozen-column {
    position: sticky;
    background: ${dt("datatable.header.cell.background")};
}

.p-datatable-scrollable th.p-datatable-frozen-column {
    z-index: 1;
}

.p-datatable-scrollable > .p-datatable-table-container > .p-datatable-table > .p-datatable-thead,
.p-datatable-scrollable > .p-datatable-table-container > .p-virtualscroller > .p-datatable-table > .p-datatable-thead {
    background: ${dt("datatable.header.cell.background")};
}

.p-datatable-scrollable > .p-datatable-table-container > .p-datatable-table > .p-datatable-tfoot,
.p-datatable-scrollable > .p-datatable-table-container > .p-virtualscroller > .p-datatable-table > .p-datatable-tfoot {
    background: ${dt("datatable.footer.cell.background")};
}

.p-datatable-flex-scrollable {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.p-datatable-flex-scrollable > .p-datatable-table-container {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
}

.p-datatable-scrollable-table > .p-datatable-tbody > .p-datatable-row-group-header {
    position: sticky;
    z-index: 1;
}

.p-datatable-resizable-table > .p-datatable-thead > tr > th,
.p-datatable-resizable-table > .p-datatable-tfoot > tr > td,
.p-datatable-resizable-table > .p-datatable-tbody > tr > td {
    overflow: hidden;
    white-space: nowrap;
}

.p-datatable-resizable-table > .p-datatable-thead > tr > th.p-datatable-resizable-column:not(.p-datatable-frozen-column) {
    background-clip: padding-box;
    position: relative;
}

.p-datatable-resizable-table-fit > .p-datatable-thead > tr > th.p-datatable-resizable-column:last-child .p-datatable-column-resizer {
    display: none;
}

.p-datatable-column-resizer {
    display: block;
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    margin: 0;
    width: ${dt("datatable.column.resizer.width")};
    height: 100%;
    padding: 0px;
    cursor: col-resize;
    border: 1px solid transparent;
}

/*
.p-datatable-column-header-content {
    display: flex;
    align-items: center;
    gap: ${dt("datatable.header.cell.gap")};
}
.p-datatable-thead > tr > th {
    display: flex;
    align-items: center;
    gap: ${dt("datatable.header.cell.gap")};
}
*/

.p-datatable-column-resize-indicator {
    width: ${dt("datatable.resize.indicator.width")};
    position: absolute;
    z-index: 10;
    display: none;
    background: ${dt("datatable.resize.indicator.color")};
}

.p-datatable-row-reorder-indicator-up,
.p-datatable-row-reorder-indicator-down {
    position: absolute;
    display: none;
}

.p-datatable-reorderable-column,
.p-datatable-reorderable-row-handle {
    cursor: move;
}

.p-datatable-mask {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
}

.p-datatable-inline-filter {
    display: flex;
    align-items: center;
    width: 100%;
    gap: ${dt("datatable.filter.inline.gap")};
}

.p-datatable-inline-filter .p-datatable-filter-element-container {
    flex: 1 1 auto;
    width: 1%;
}

.p-datatable-filter-overlay {
    position: absolute;
    background: ${dt("datatable.filter.overlay.select.background")};
    color: ${dt("datatable.filter.overlay.select.color")};
    border: 1px solid ${dt("datatable.filter.overlay.select.border.color")};
    border-radius: ${dt("datatable.filter.overlay.select.border.radius")};
    box-shadow: ${dt("datatable.filter.overlay.select.shadow")};
    min-width: 12.5rem;
}

.p-datatable-filter-constraint-list {
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    padding: ${dt("datatable.filter.constraint.list.padding")};
    gap: ${dt("datatable.filter.constraint.list.gap")};
}

.p-datatable-filter-constraint {
    padding: ${dt("datatable.filter.constraint.padding")};
    color: ${dt("datatable.filter.constraint.color")};
    border-radius: ${dt("datatable.filter.constraint.border.radius")};
    cursor: pointer;
    transition: background ${dt("datatable.transition.duration")}, color ${dt("datatable.transition.duration")}, border-color ${dt("datatable.transition.duration")},
        box-shadow ${dt("datatable.transition.duration")};
}

.p-datatable-filter-constraint-selected {
    background: ${dt("datatable.filter.constraint.selected.background")};
    color: ${dt("datatable.filter.constraint.selected.color")};
}

.p-datatable-filter-constraint:not(.p-datatable-filter-constraint-selected):not(.p-disabled):hover {
    background: ${dt("datatable.filter.constraint.focus.background")};
    color: ${dt("datatable.filter.constraint.focus.color")};
}

.p-datatable-filter-constraint:focus-visible {
    outline: 0 none;
    background: ${dt("datatable.filter.constraint.focus.background")};
    color: ${dt("datatable.filter.constraint.focus.color")};
}

.p-datatable-filter-constraint-selected:focus-visible {
    outline: 0 none;
    background: ${dt("datatable.filter.constraint.selected.focus.background")};
    color: ${dt("datatable.filter.constraint.selected.focus.color")};
}

.p-datatable-filter-constraint-separator {
    border-top: 1px solid ${dt("datatable.filter.constraint.separator.border.color")};
}

.p-datatable-popover-filter {
    display: inline-flex;
    margin-inline-start: auto;
}

.p-datatable-filter-overlay-popover {
    background: ${dt("datatable.filter.overlay.popover.background")};
    color: ${dt("datatable.filter.overlay.popover.color")};
    border: 1px solid ${dt("datatable.filter.overlay.popover.border.color")};
    border-radius: ${dt("datatable.filter.overlay.popover.border.radius")};
    box-shadow: ${dt("datatable.filter.overlay.popover.shadow")};
    min-width: 12.5rem;
    padding: ${dt("datatable.filter.overlay.popover.padding")};
    display: flex;
    flex-direction: column;
    gap: ${dt("datatable.filter.overlay.popover.gap")};
}

.p-datatable-filter-operator-dropdown, .p-datatable-filter-constraint-dropdown {
    width: 100%;
}

.p-datatable-filter-rule-list,
.p-datatable-filter-rule {
    display: flex;
    flex-direction: column;
    gap: ${dt("datatable.filter.overlay.popover.gap")};
}

.p-datatable-filter-rule {
    border-bottom: 1px solid ${dt("datatable.filter.rule.border.color")};
}

.p-datatable-filter-rule:last-child {
    border-bottom: 0 none;
}

.p-datatable-filter-add-rule-button, .p-datatable-filter-remove-rule-button {
    width: 100%;
}

.p-datatable-filter-remove-button {
    width: 100%;
}

.p-datatable-filter-buttonbar {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.p-datatable-virtualscroller-spacer {
    display: flex;
}

.p-datatable .p-virtualscroller .p-virtualscroller-loading {
    transform: none !important;
    min-height: 0;
    position: sticky;
    top: 0;
    inset-inline-start: 0;
}

.p-datatable-paginator-top {
    border-color: ${dt("datatable.paginator.top.border.color")};
    border-style: solid;
    border-width: ${dt("datatable.paginator.top.border.width")};
}

.p-datatable-paginator-bottom {
    border-color: ${dt("datatable.paginator.bottom.border.color")};
    border-style: solid;
    border-width: ${dt("datatable.paginator.bottom.border.width")};
}

.p-datatable-header {
    background: ${dt("datatable.header.background")};
    color: ${dt("datatable.header.color")};
    border-color: ${dt("datatable.header.border.color")};
    border-style: solid;
    border-width: ${dt("datatable.header.border.width")};
    padding: ${dt("datatable.header.padding")};
}

.p-datatable-footer {
    background: ${dt("datatable.footer.background")};
    color: ${dt("datatable.footer.color")};
    border-color: ${dt("datatable.footer.border.color")};
    border-style: solid;
    border-width: ${dt("datatable.footer.border.width")};
    padding: ${dt("datatable.footer.padding")};
}

.p-datatable-thead > tr > th {
    padding: ${dt("datatable.header.cell.padding")};
    background: ${dt("datatable.header.cell.background")};
    border-color: ${dt("datatable.header.cell.border.color")};
    border-style: solid;
    border-width: 0 0 1px 0;
    color: ${dt("datatable.header.cell.color")};
    font-weight: ${dt("datatable.column.title.font.weight")};
    text-align: start;
    transition: background ${dt("datatable.transition.duration")}, color ${dt("datatable.transition.duration")}, border-color ${dt("datatable.transition.duration")},
            outline-color ${dt("datatable.transition.duration")}, box-shadow ${dt("datatable.transition.duration")};
}

/** For PrimeNG **/
.p-datatable-thead > tr > th p-columnfilter {
    font-weight: normal;
}
/** For PrimeNG End **/

/*
.p-datatable-column-title {
    font-weight: ${dt("datatable.column.title.font.weight")};
}
*/

.p-datatable-tbody > tr {
    outline-color: transparent;
    background: ${dt("datatable.row.background")};
    color: ${dt("datatable.row.color")};
    transition: background ${dt("datatable.transition.duration")}, color ${dt("datatable.transition.duration")}, border-color ${dt("datatable.transition.duration")},
            outline-color ${dt("datatable.transition.duration")}, box-shadow ${dt("datatable.transition.duration")};
}

.p-datatable-tbody > tr > td {
    text-align: start;
    border-color: ${dt("datatable.body.cell.border.color")};
    border-style: solid;
    border-width: 0 0 1px 0;
    padding: ${dt("datatable.body.cell.padding")};
}

.p-datatable-hoverable .p-datatable-tbody > tr:not(.p-datatable-row-selected):hover {
    background: ${dt("datatable.row.hover.background")};
    color: ${dt("datatable.row.hover.color")};
}

.p-datatable-tbody > tr.p-datatable-row-selected {
    background: ${dt("datatable.row.selected.background")};
    color: ${dt("datatable.row.selected.color")};
}

.p-datatable-tbody > tr:has(+ .p-datatable-row-selected) > td {
    border-bottom-color: ${dt("datatable.body.cell.selected.border.color")};
}

.p-datatable-tbody > tr.p-datatable-row-selected > td {
    border-bottom-color: ${dt("datatable.body.cell.selected.border.color")};
}

.p-datatable-tbody > tr:focus-visible,
.p-datatable-tbody > tr.p-datatable-contextmenu-row-selected {
    box-shadow: ${dt("datatable.row.focus.ring.shadow")};
    outline: ${dt("datatable.row.focus.ring.width")} ${dt("datatable.row.focus.ring.style")} ${dt("datatable.row.focus.ring.color")};
    outline-offset: ${dt("datatable.row.focus.ring.offset")};
}

.p-datatable-tfoot > tr > td {
    text-align: start;
    padding: ${dt("datatable.footer.cell.padding")};
    border-color: ${dt("datatable.footer.cell.border.color")};
    border-style: solid;
    border-width: 0 0 1px 0;
    color: ${dt("datatable.footer.cell.color")};
    background: ${dt("datatable.footer.cell.background")};
}

.p-datatable-column-footer {
    font-weight: ${dt("datatable.column.footer.font.weight")};
}

.p-datatable-sortable-column {
    cursor: pointer;
    user-select: none;
    outline-color: transparent;
}

.p-datatable-thead > tr > th,
.p-datatable-sort-icon,
.p-datatable-sort-badge {
    vertical-align: middle;
}

.p-datatable-sort-icon {
    color: ${dt("datatable.sort.icon.color")};
    transition: color ${dt("datatable.transition.duration")};
}

.p-datatable-sortable-column:not(.p-datatable-column-sorted):hover {
    background: ${dt("datatable.header.cell.hover.background")};
    color: ${dt("datatable.header.cell.hover.color")};
}

.p-datatable-sortable-column:not(.p-datatable-column-sorted):hover .p-datatable-sort-icon {
    color: ${dt("datatable.sort.icon.hover.color")};
}

.p-datatable-thead > tr > th.p-datatable-column-sorted {
    background: ${dt("datatable.header.cell.selected.background")};
    color: ${dt("datatable.header.cell.selected.color")};
}

.p-datatable-thead > tr > th.p-datatable-column-sorted .p-datatable-sort-icon {
    color: ${dt("datatable.header.cell.selected.color")};
}

.p-datatable-sortable-column:focus-visible {
    box-shadow: ${dt("datatable.header.cell.focus.ring.shadow")};
    outline: ${dt("datatable.header.cell.focus.ring.width")} ${dt("datatable.header.cell.focus.ring.style")} ${dt("datatable.header.cell.focus.ring.color")};
    outline-offset: ${dt("datatable.header.cell.focus.ring.offset")};
}

.p-datatable-hoverable .p-datatable-selectable-row {
    cursor: pointer;
}

.p-datatable-tbody > tr.p-datatable-dragpoint-top > td {
    box-shadow: inset 0 2px 0 0 ${dt("datatable.drop.point.color")};
}

.p-datatable-tbody > tr.p-datatable-dragpoint-bottom > td {
    box-shadow: inset 0 -2px 0 0 ${dt("datatable.drop.point.color")};
}

.p-datatable-loading-icon {
    font-size: ${dt("datatable.loading.icon.size")};
    width: ${dt("datatable.loading.icon.size")};
    height: ${dt("datatable.loading.icon.size")};
}

.p-datatable-gridlines .p-datatable-header {
    border-width: 1px 1px 0 1px;
}

.p-datatable-gridlines .p-datatable-footer {
    border-width: 0 1px 1px 1px;
}

.p-datatable-gridlines .p-datatable-paginator-top {
    border-width: 1px 1px 0 1px;
}

.p-datatable-gridlines .p-datatable-paginator-bottom {
    border-width: 0 1px 1px 1px;
}

.p-datatable-gridlines .p-datatable-thead > tr > th {
    border-width: 1px 0 1px 1px;
}

.p-datatable-gridlines .p-datatable-thead > tr > th:last-child {
    border-width: 1px;
}

.p-datatable-gridlines .p-datatable-tbody > tr > td {
    border-width: 1px 0 0 1px;
}

.p-datatable-gridlines .p-datatable-tbody > tr > td:last-child {
    border-width: 1px 1px 0 1px;
}

p-datatable-gridlines .p-datatable-tbody > tr:last-child > td {
    border-width: 1px 0 1px 1px;
}

.p-datatable-gridlines .p-datatable-tbody > tr:last-child > td:last-child {
    border-width: 1px;
}

.p-datatable-gridlines .p-datatable-tfoot > tr > td {
    border-width: 1px 0 1px 1px;
}

.p-datatable-gridlines .p-datatable-tfoot > tr > td:last-child {
    border-width: 1px 1px 1px 1px;
}

.p-datatable.p-datatable-gridlines .p-datatable-thead + .p-datatable-tfoot > tr > td {
    border-width: 0 0 1px 1px;
}

.p-datatable.p-datatable-gridlines .p-datatable-thead + .p-datatable-tfoot > tr > td:last-child {
    border-width: 0 1px 1px 1px;
}

.p-datatable.p-datatable-gridlines:has(.p-datatable-thead):has(.p-datatable-tbody) .p-datatable-tbody > tr > td {
    border-width: 0 0 1px 1px;
}

.p-datatable.p-datatable-gridlines:has(.p-datatable-thead):has(.p-datatable-tbody) .p-datatable-tbody > tr > td:last-child {
    border-width: 0 1px 1px 1px;
}

.p-datatable.p-datatable-gridlines:has(.p-datatable-tbody):has(.p-datatable-tfoot) .p-datatable-tbody > tr:last-child > td {
    border-width: 0 0 0 1px;
}

.p-datatable.p-datatable-gridlines:has(.p-datatable-tbody):has(.p-datatable-tfoot) .p-datatable-tbody > tr:last-child > td:last-child {
    border-width: 0 1px 0 1px;
}

.p-datatable.p-datatable-striped .p-datatable-tbody > tr:nth-child(odd) {
    background: ${dt("datatable.row.striped.background")};
}

.p-datatable.p-datatable-striped .p-datatable-tbody > tr:nth-child(odd).p-datatable-row-selected {
    background: ${dt("datatable.row.selected.background")};
    color: ${dt("datatable.row.selected.color")};
}

.p-datatable.p-datatable-sm .p-datatable-header {
    padding: 0.375rem 0.5rem;
}

.p-datatable.p-datatable-sm .p-datatable-thead > tr > th {
    padding: 0.375rem 0.5rem;
}

.p-datatable.p-datatable-sm .p-datatable-tbody > tr > td {
    padding: 0.375rem 0.5rem;
}

.p-datatable.p-datatable-sm .p-datatable-tfoot > tr > td {
    padding: 0.375rem 0.5rem;
}

.p-datatable.p-datatable-sm .p-datatable-footer {
    padding: 0.375rem 0.5rem;
}

.p-datatable.p-datatable-lg .p-datatable-header {
    padding: 0.9375rem 1.25rem;
}

.p-datatable.p-datatable-lg .p-datatable-thead > tr > th {
    padding: 0.9375rem 1.25rem;
}

.p-datatable.p-datatable-lg .p-datatable-tbody>tr>td {
    padding: 0.9375rem 1.25rem;
}

.p-datatable.p-datatable-lg .p-datatable-tfoot>tr>td {
    padding: 0.9375rem 1.25rem;
}

.p-datatable.p-datatable-lg .p-datatable-footer {
    padding: 0.9375rem 1.25rem;
}

.p-datatable-row-toggle-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: ${dt("datatable.row.toggle.button.size")};
    height: ${dt("datatable.row.toggle.button.size")};
    color: ${dt("datatable.row.toggle.button.color")};
    border: 0 none;
    background: transparent;
    cursor: pointer;
    border-radius: ${dt("datatable.row.toggle.button.border.radius")};
    transition: background ${dt("datatable.transition.duration")}, color ${dt("datatable.transition.duration")}, border-color ${dt("datatable.transition.duration")},
            outline-color ${dt("datatable.transition.duration")}, box-shadow ${dt("datatable.transition.duration")};
    outline-color: transparent;
    user-select: none;
}

.p-datatable-row-toggle-button:enabled:hover {
    color: ${dt("datatable.row.toggle.button.hover.color")};
    background: ${dt("datatable.row.toggle.button.hover.background")};
}

.p-datatable-tbody > tr.p-datatable-row-selected .p-datatable-row-toggle-button:hover {
    background: ${dt("datatable.row.toggle.button.selected.hover.background")};
    ${dt("datatable.row.toggle.button.selected.hover.color")};
}

.p-datatable-row-toggle-button:focus-visible {
    box-shadow: ${dt("datatable.row.toggle.button.focus.ring.shadow")};
    outline: ${dt("datatable.row.toggle.button.focus.ring.width")} ${dt("datatable.row.toggle.button.focus.ring.style")} ${dt("datatable.row.toggle.button.focus.ring.color")};
    outline-offset: ${dt("datatable.row.toggle.button.focus.ring.offset")};
}
`;
var classes5 = {
  root: ({
    instance
  }) => ({
    "p-datatable p-component": true,
    "p-datatable-hoverable": instance.rowHover || instance.selectionMode,
    "p-datatable-resizable": instance.resizableColumns,
    "p-datatable-resizable-fit": instance.resizableColumns && instance.columnResizeMode === "fit",
    "p-datatable-scrollable": instance.scrollable,
    "p-datatable-flex-scrollable": instance.scrollable && instance.scrollHeight === "flex",
    "p-datatable-striped": instance.stripedRows,
    "p-datatable-gridlines": instance.showGridlines,
    "p-datatable-sm": instance.size === "small",
    "p-datatable-lg": instance.size === "large"
  }),
  mask: "p-datatable-mask p-overlay-mask",
  loadingIcon: "p-datatable-loading-icon",
  header: "p-datatable-header",
  pcPaginator: ({
    instance
  }) => "p-datatable-paginator-" + instance.paginatorPosition,
  tableContainer: "p-datatable-table-container",
  table: ({
    instance
  }) => ({
    "p-datatable-table": true,
    "p-datatable-scrollable-table": instance.scrollable,
    "p-datatable-resizable-table": instance.resizableColumns,
    "p-datatable-resizable-table-fit": instance.resizableColumns && instance.columnResizeMode === "fit"
  }),
  thead: "p-datatable-thead",
  columnResizer: "p-datatable-column-resizer",
  columnHeaderContent: "p-datatable-column-header-content",
  columnTitle: "p-datatable-column-title",
  columnFooter: "p-datatable-column-footer",
  sortIcon: "p-datatable-sort-icon",
  pcSortBadge: "p-datatable-sort-badge",
  filter: ({
    instance
  }) => ({
    "p-datatable-filter": true,
    "p-datatable-inline-filter": instance.display === "row",
    "p-datatable-popover-filter": instance.display === "menu"
  }),
  filterElementContainer: "p-datatable-filter-element-container",
  pcColumnFilterButton: "p-datatable-column-filter-button",
  pcColumnFilterClearButton: "p-datatable-column-filter-clear-button",
  filterOverlay: ({
    instance
  }) => ({
    "p-datatable-filter-overlay p-component": true,
    "p-datatable-filter-overlay-popover": instance.display === "menu"
  }),
  filterConstraintList: "p-datatable-filter-constraint-list",
  filterConstraint: "p-datatable-filter-constraint",
  filterConstraintSeparator: "p-datatable-filter-constraint-separator",
  filterOperator: "p-datatable-filter-operator",
  pcFilterOperatorDropdown: "p-datatable-filter-operator-dropdown",
  filterRuleList: "p-datatable-filter-rule-list",
  filterRule: "p-datatable-filter-rule",
  pcFilterConstraintDropdown: "p-datatable-filter-constraint-dropdown",
  pcFilterRemoveRuleButton: "p-datatable-filter-remove-rule-button",
  pcFilterAddRuleButton: "p-datatable-filter-add-rule-button",
  filterButtonbar: "p-datatable-filter-buttonbar",
  pcFilterClearButton: "p-datatable-filter-clear-button",
  pcFilterApplyButton: "p-datatable-filter-apply-button",
  tbody: ({
    instance
  }) => ({
    "p-datatable-tbody": true,
    "p-datatable-frozen-tbody": instance.frozenValue || instance.frozenBodyTemplate,
    "p-virtualscroller-content": instance.virtualScroll
  }),
  rowGroupHeader: "p-datatable-row-group-header",
  rowToggleButton: "p-datatable-row-toggle-button",
  rowToggleIcon: "p-datatable-row-toggle-icon",
  rowExpansion: "p-datatable-row-expansion",
  rowGroupFooter: "p-datatable-row-group-footer",
  emptyMessage: "p-datatable-empty-message",
  bodyCell: ({
    instance
  }) => ({
    "p-datatable-frozen-column": instance.columnProp("frozen")
  }),
  reorderableRowHandle: "p-datatable-reorderable-row-handle",
  pcRowEditorInit: "p-datatable-row-editor-init",
  pcRowEditorSave: "p-datatable-row-editor-save",
  pcRowEditorCancel: "p-datatable-row-editor-cancel",
  tfoot: "p-datatable-tfoot",
  footerCell: ({
    instance
  }) => ({
    "p-datatable-frozen-column": instance.columnProp("frozen")
  }),
  virtualScrollerSpacer: "p-datatable-virtualscroller-spacer",
  footer: "p-datatable-tfoot",
  columnResizeIndicator: "p-datatable-column-resize-indicator",
  rowReorderIndicatorUp: "p-datatable-row-reorder-indicator-up",
  rowReorderIndicatorDown: "p-datatable-row-reorder-indicator-down"
};
var inlineStyles2 = {
  tableContainer: ({
    instance
  }) => ({
    "max-height": instance.virtualScroll ? "" : instance.scrollHeight,
    overflow: "auto"
  }),
  thead: {
    position: "sticky"
  },
  tfoot: {
    position: "sticky"
  }
};
var TableStyle = class _TableStyle extends BaseStyle {
  name = "datatable";
  theme = theme5;
  classes = classes5;
  inlineStyles = inlineStyles2;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TableStyle_BaseFactory;
    return function TableStyle_Factory(__ngFactoryType__) {
      return (\u0275TableStyle_BaseFactory || (\u0275TableStyle_BaseFactory = \u0275\u0275getInheritedFactory(_TableStyle)))(__ngFactoryType__ || _TableStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TableStyle,
    factory: _TableStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableStyle, [{
    type: Injectable
  }], null, null);
})();
var TableClasses;
(function(TableClasses2) {
  TableClasses2["root"] = "p-datatable";
  TableClasses2["mask"] = "p-datatable-mask";
  TableClasses2["loadingIcon"] = "p-datatable-loading-icon";
  TableClasses2["header"] = "p-datatable-header";
  TableClasses2["pcPaginator"] = "p-datatable-paginator-[position]";
  TableClasses2["tableContainer"] = "p-datatable-table-container";
  TableClasses2["table"] = "p-datatable-table";
  TableClasses2["thead"] = "p-datatable-thead";
  TableClasses2["columnResizer"] = "p-datatable-column-resizer";
  TableClasses2["columnHeaderContent"] = "p-datatable-column-header-content";
  TableClasses2["columnTitle"] = "p-datatable-column-title";
  TableClasses2["sortIcon"] = "p-datatable-sort-icon";
  TableClasses2["pcSortBadge"] = "p-datatable-sort-badge";
  TableClasses2["filter"] = "p-datatable-filter";
  TableClasses2["filterElementContainer"] = "p-datatable-filter-element-container";
  TableClasses2["pcColumnFilterButton"] = "p-datatable-column-filter-button";
  TableClasses2["pcColumnFilterClearButton"] = "p-datatable-column-filter-clear-button";
  TableClasses2["filterOverlay"] = "p-datatable-filter-overlay";
  TableClasses2["filterConstraintList"] = "p-datatable-filter-constraint-list";
  TableClasses2["filterConstraint"] = "p-datatable-filter-constraint";
  TableClasses2["filterConstraintSeparator"] = "p-datatable-filter-constraint-separator";
  TableClasses2["filterOperator"] = "p-datatable-filter-operator";
  TableClasses2["pcFilterOperatorDropdown"] = "p-datatable-filter-operator-dropdown";
  TableClasses2["filterRuleList"] = "p-datatable-filter-rule-list";
  TableClasses2["filterRule"] = "p-datatable-filter-rule";
  TableClasses2["pcFilterConstraintDropdown"] = "p-datatable-filter-constraint-dropdown";
  TableClasses2["pcFilterRemoveRuleButton"] = "p-datatable-filter-remove-rule-button";
  TableClasses2["pcFilterAddRuleButton"] = "p-datatable-filter-add-rule-button";
  TableClasses2["filterButtonbar"] = "p-datatable-filter-buttonbar";
  TableClasses2["pcFilterClearButton"] = "p-datatable-filter-clear-button";
  TableClasses2["pcFilterApplyButton"] = "p-datatable-filter-apply-button";
  TableClasses2["tbody"] = "p-datatable-tbody";
  TableClasses2["rowGroupHeader"] = "p-datatable-row-group-header";
  TableClasses2["rowToggleButton"] = "p-datatable-row-toggle-button";
  TableClasses2["rowToggleIcon"] = "p-datatable-row-toggle-icon";
  TableClasses2["rowExpansion"] = "p-datatable-row-expansion";
  TableClasses2["rowGroupFooter"] = "p-datatable-row-group-footer";
  TableClasses2["emptyMessage"] = "p-datatable-empty-message";
  TableClasses2["reorderableRowHandle"] = "p-datatable-reorderable-row-handle";
  TableClasses2["pcRowEditorInit"] = "p-datatable-row-editor-init";
  TableClasses2["pcRowEditorSave"] = "p-datatable-row-editor-save";
  TableClasses2["pcRowEditorCancel"] = "p-datatable-row-editor-cancel";
  TableClasses2["tfoot"] = "p-datatable-tfoot";
  TableClasses2["virtualScrollerSpacer"] = "p-datatable-virtualscroller-spacer";
  TableClasses2["footer"] = "p-datatable-footer";
  TableClasses2["columnResizeIndicator"] = "p-datatable-column-resize-indicator";
  TableClasses2["rowReorderIndicatorUp"] = "p-datatable-row-reorder-indicator-up";
  TableClasses2["rowReorderIndicatorDown"] = "p-datatable-row-reorder-indicator-down";
})(TableClasses || (TableClasses = {}));
var _c05 = ["header"];
var _c113 = ["headergrouped"];
var _c28 = ["body"];
var _c34 = ["loadingbody"];
var _c43 = ["caption"];
var _c53 = ["footer"];
var _c63 = ["footergrouped"];
var _c73 = ["summary"];
var _c82 = ["colgroup"];
var _c92 = ["expandedrow"];
var _c102 = ["groupheader"];
var _c114 = ["groupfooter"];
var _c122 = ["frozenexpandedrow"];
var _c132 = ["frozenheader"];
var _c142 = ["frozenbody"];
var _c152 = ["frozenfooter"];
var _c162 = ["frozencolgroup"];
var _c172 = ["emptymessage"];
var _c182 = ["paginatorleft"];
var _c192 = ["paginatorright"];
var _c202 = ["paginatordropdownitem"];
var _c212 = ["loadingicon"];
var _c222 = ["reorderindicatorupicon"];
var _c232 = ["reorderindicatordownicon"];
var _c242 = ["sorticon"];
var _c252 = ["checkboxicon"];
var _c262 = ["headercheckboxicon"];
var _c272 = ["paginatordropdownicon"];
var _c282 = ["paginatorfirstpagelinkicon"];
var _c29 = ["paginatorlastpagelinkicon"];
var _c30 = ["paginatorpreviouspagelinkicon"];
var _c31 = ["paginatornextpagelinkicon"];
var _c322 = ["container"];
var _c332 = ["resizeHelper"];
var _c342 = ["reorderIndicatorUp"];
var _c35 = ["reorderIndicatorDown"];
var _c36 = ["wrapper"];
var _c37 = ["table"];
var _c38 = ["thead"];
var _c39 = ["tfoot"];
var _c40 = ["scroller"];
var _c41 = (a0) => ({
  height: a0
});
var _c422 = (a0, a1) => ({
  $implicit: a0,
  options: a1
});
var _c432 = (a0) => ({
  columns: a0
});
var _c44 = (a0) => ({
  $implicit: a0
});
function Table_div_2_i_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap("p-datatable-loading-icon " + ctx_r0.loadingIcon);
  }
}
function Table_div_2_ng_container_2_SpinnerIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "SpinnerIcon", 22);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("spin", true)("styleClass", ctx_r0.cx("loadingIcon"));
  }
}
function Table_div_2_ng_container_2_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Table_div_2_ng_container_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Table_div_2_ng_container_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Table_div_2_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275template(1, Table_div_2_ng_container_2_span_2_1_Template, 1, 0, null, 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r0.cx("loadingIcon"));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.loadingIconTemplate || ctx_r0._loadingIconTemplate);
  }
}
function Table_div_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Table_div_2_ng_container_2_SpinnerIcon_1_Template, 1, 2, "SpinnerIcon", 21)(2, Table_div_2_ng_container_2_span_2_Template, 2, 2, "span", 12);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loadingIconTemplate && !ctx_r0._loadingIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.loadingIconTemplate || ctx_r0._loadingIconTemplate);
  }
}
function Table_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275template(1, Table_div_2_i_1_Template, 1, 2, "i", 20)(2, Table_div_2_ng_container_2_Template, 3, 2, "ng-container", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r0.cx("mask"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.loadingIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loadingIcon);
  }
}
function Table_div_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Table_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275template(1, Table_div_3_ng_container_1_Template, 1, 0, "ng-container", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r0.cx("header"));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.captionTemplate || ctx_r0._captionTemplate);
  }
}
function Table_p_paginator_4_1_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Table_p_paginator_4_1_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Table_p_paginator_4_1_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 23);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.paginatorDropdownIconTemplate || ctx_r0._paginatorDropdownIconTemplate);
  }
}
function Table_p_paginator_4_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Table_p_paginator_4_1_ng_template_0_Template, 1, 1, "ng-template", 25);
  }
}
function Table_p_paginator_4_2_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Table_p_paginator_4_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Table_p_paginator_4_2_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 23);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.paginatorFirstPageLinkIconTemplate || ctx_r0._paginatorFirstPageLinkIconTemplate);
  }
}
function Table_p_paginator_4_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Table_p_paginator_4_2_ng_template_0_Template, 1, 1, "ng-template", 26);
  }
}
function Table_p_paginator_4_3_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Table_p_paginator_4_3_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Table_p_paginator_4_3_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 23);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.paginatorPreviousPageLinkIconTemplate || ctx_r0._paginatorPreviousPageLinkIconTemplate);
  }
}
function Table_p_paginator_4_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Table_p_paginator_4_3_ng_template_0_Template, 1, 1, "ng-template", 27);
  }
}
function Table_p_paginator_4_4_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Table_p_paginator_4_4_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Table_p_paginator_4_4_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 23);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.paginatorLastPageLinkIconTemplate || ctx_r0._paginatorLastPageLinkIconTemplate);
  }
}
function Table_p_paginator_4_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Table_p_paginator_4_4_ng_template_0_Template, 1, 1, "ng-template", 28);
  }
}
function Table_p_paginator_4_5_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Table_p_paginator_4_5_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Table_p_paginator_4_5_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 23);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.paginatorNextPageLinkIconTemplate || ctx_r0._paginatorNextPageLinkIconTemplate);
  }
}
function Table_p_paginator_4_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Table_p_paginator_4_5_ng_template_0_Template, 1, 1, "ng-template", 29);
  }
}
function Table_p_paginator_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-paginator", 24);
    \u0275\u0275listener("onPageChange", function Table_p_paginator_4_Template_p_paginator_onPageChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onPageChange($event));
    });
    \u0275\u0275template(1, Table_p_paginator_4_1_Template, 1, 0, null, 16)(2, Table_p_paginator_4_2_Template, 1, 0, null, 16)(3, Table_p_paginator_4_3_Template, 1, 0, null, 16)(4, Table_p_paginator_4_4_Template, 1, 0, null, 16)(5, Table_p_paginator_4_5_Template, 1, 0, null, 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("rows", ctx_r0.rows)("first", ctx_r0.first)("totalRecords", ctx_r0.totalRecords)("pageLinkSize", ctx_r0.pageLinks)("alwaysShow", ctx_r0.alwaysShowPaginator)("rowsPerPageOptions", ctx_r0.rowsPerPageOptions)("templateLeft", ctx_r0.paginatorLeftTemplate)("templateRight", ctx_r0.paginatorRightTemplate)("dropdownAppendTo", ctx_r0.paginatorDropdownAppendTo)("dropdownScrollHeight", ctx_r0.paginatorDropdownScrollHeight)("currentPageReportTemplate", ctx_r0.currentPageReportTemplate)("showFirstLastIcon", ctx_r0.showFirstLastIcon)("dropdownItemTemplate", ctx_r0.paginatorDropdownItemTemplate || ctx_r0._paginatorDropdownItemTemplate)("showCurrentPageReport", ctx_r0.showCurrentPageReport)("showJumpToPageDropdown", ctx_r0.showJumpToPageDropdown)("showJumpToPageInput", ctx_r0.showJumpToPageInput)("showPageLinks", ctx_r0.showPageLinks)("styleClass", ctx_r0.cx("pcPaginator") + " " + ctx_r0.paginatorStyleClass && ctx_r0.paginatorStyleClass)("locale", ctx_r0.paginatorLocale);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.paginatorDropdownIconTemplate || ctx_r0._paginatorDropdownIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.paginatorFirstPageLinkIconTemplate || ctx_r0._paginatorFirstPageLinkIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.paginatorPreviousPageLinkIconTemplate || ctx_r0._paginatorPreviousPageLinkIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.paginatorLastPageLinkIconTemplate || ctx_r0._paginatorLastPageLinkIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.paginatorNextPageLinkIconTemplate || ctx_r0._paginatorNextPageLinkIconTemplate);
  }
}
function Table_p_scroller_7_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Table_p_scroller_7_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Table_p_scroller_7_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 31);
  }
  if (rf & 2) {
    const items_r4 = ctx.$implicit;
    const scrollerOptions_r5 = ctx.options;
    \u0275\u0275nextContext(2);
    const buildInTable_r6 = \u0275\u0275reference(10);
    \u0275\u0275property("ngTemplateOutlet", buildInTable_r6)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c422, items_r4, scrollerOptions_r5));
  }
}
function Table_p_scroller_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-scroller", 30, 3);
    \u0275\u0275listener("onLazyLoad", function Table_p_scroller_7_Template_p_scroller_onLazyLoad_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onLazyItemLoad($event));
    });
    \u0275\u0275template(2, Table_p_scroller_7_ng_template_2_Template, 1, 5, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(\u0275\u0275pureFunction1(15, _c41, ctx_r0.scrollHeight !== "flex" ? ctx_r0.scrollHeight : void 0));
    \u0275\u0275property("items", ctx_r0.processedData)("columns", ctx_r0.columns)("scrollHeight", ctx_r0.scrollHeight !== "flex" ? void 0 : "100%")("itemSize", ctx_r0.virtualScrollItemSize || ctx_r0._virtualRowHeight)("step", ctx_r0.rows)("delay", ctx_r0.lazy ? ctx_r0.virtualScrollDelay : 0)("inline", true)("lazy", ctx_r0.lazy)("loaderDisabled", true)("showSpacer", false)("showLoader", ctx_r0.loadingBodyTemplate || ctx_r0._loadingBodyTemplate)("options", ctx_r0.virtualScrollOptions)("autoSize", true);
  }
}
function Table_ng_container_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Table_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Table_ng_container_8_ng_container_1_Template, 1, 0, "ng-container", 31);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const buildInTable_r6 = \u0275\u0275reference(10);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", buildInTable_r6)("ngTemplateOutletContext", \u0275\u0275pureFunction2(4, _c422, ctx_r0.processedData, \u0275\u0275pureFunction1(2, _c432, ctx_r0.columns)));
  }
}
function Table_ng_template_9_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Table_ng_template_9_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Table_ng_template_9_tbody_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tbody", 38);
  }
  if (rf & 2) {
    const scrollerOptions_r7 = \u0275\u0275nextContext().options;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r0.cx("tbody"))("value", ctx_r0.frozenValue)("frozenRows", true)("pTableBody", scrollerOptions_r7.columns)("pTableBodyTemplate", ctx_r0.frozenBodyTemplate || ctx_r0._frozenBodyTemplate)("frozen", true);
  }
}
function Table_ng_template_9_tbody_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tbody", 39);
  }
  if (rf & 2) {
    const scrollerOptions_r7 = \u0275\u0275nextContext().options;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleMap("height: calc(" + scrollerOptions_r7.spacerStyle.height + " - " + scrollerOptions_r7.rows.length * scrollerOptions_r7.itemSize + "px);");
    \u0275\u0275property("ngClass", ctx_r0.cx("virtualScrollerSpacer"));
  }
}
function Table_ng_template_9_tfoot_9_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Table_ng_template_9_tfoot_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tfoot", 39, 7);
    \u0275\u0275template(2, Table_ng_template_9_tfoot_9_ng_container_2_Template, 1, 0, "ng-container", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const scrollerOptions_r7 = \u0275\u0275nextContext().options;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r0.cx("footer"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.footerGroupedTemplate || ctx_r0.footerTemplate || ctx_r0._footerTemplate || ctx_r0._footerGroupedTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(3, _c44, scrollerOptions_r7.columns));
  }
}
function Table_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 32, 5);
    \u0275\u0275template(2, Table_ng_template_9_ng_container_2_Template, 1, 0, "ng-container", 31);
    \u0275\u0275elementStart(3, "thead", 33, 6);
    \u0275\u0275template(5, Table_ng_template_9_ng_container_5_Template, 1, 0, "ng-container", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, Table_ng_template_9_tbody_6_Template, 1, 6, "tbody", 34);
    \u0275\u0275element(7, "tbody", 35);
    \u0275\u0275template(8, Table_ng_template_9_tbody_8_Template, 1, 3, "tbody", 36)(9, Table_ng_template_9_tfoot_9_Template, 3, 5, "tfoot", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const scrollerOptions_r7 = ctx.options;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(ctx_r0.tableStyle);
    \u0275\u0275classMap(ctx_r0.tableStyleClass);
    \u0275\u0275property("ngClass", ctx_r0.cx("table"));
    \u0275\u0275attribute("id", ctx_r0.id + "-table");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.colGroupTemplate || ctx_r0._colGroupTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(22, _c44, scrollerOptions_r7.columns));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.cx("thead"))("ngStyle", ctx_r0.sx("thead"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.headerGroupedTemplate || ctx_r0.headerTemplate || ctx_r0._headerTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(24, _c44, scrollerOptions_r7.columns));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.frozenValue || ctx_r0.frozenBodyTemplate || ctx_r0._frozenBodyTemplate);
    \u0275\u0275advance();
    \u0275\u0275styleMap(scrollerOptions_r7.contentStyle);
    \u0275\u0275property("ngClass", ctx_r0.cx("tbody", scrollerOptions_r7.contentStyleClass))("value", ctx_r0.dataToRender(scrollerOptions_r7.rows))("pTableBody", scrollerOptions_r7.columns)("pTableBodyTemplate", ctx_r0.bodyTemplate || ctx_r0._bodyTemplate)("scrollerOptions", scrollerOptions_r7);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", scrollerOptions_r7.spacerStyle);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.footerGroupedTemplate || ctx_r0.footerTemplate || ctx_r0._footerTemplate || ctx_r0._footerGroupedTemplate);
  }
}
function Table_p_paginator_11_1_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Table_p_paginator_11_1_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Table_p_paginator_11_1_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 23);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.paginatorDropdownIconTemplate || ctx_r0._paginatorDropdownIconTemplate);
  }
}
function Table_p_paginator_11_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Table_p_paginator_11_1_ng_template_0_Template, 1, 1, "ng-template", 25);
  }
}
function Table_p_paginator_11_2_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Table_p_paginator_11_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Table_p_paginator_11_2_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 23);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.paginatorFirstPageLinkIconTemplate || ctx_r0._paginatorFirstPageLinkIconTemplate);
  }
}
function Table_p_paginator_11_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Table_p_paginator_11_2_ng_template_0_Template, 1, 1, "ng-template", 26);
  }
}
function Table_p_paginator_11_3_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Table_p_paginator_11_3_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Table_p_paginator_11_3_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 23);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.paginatorPreviousPageLinkIconTemplate || ctx_r0._paginatorPreviousPageLinkIconTemplate);
  }
}
function Table_p_paginator_11_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Table_p_paginator_11_3_ng_template_0_Template, 1, 1, "ng-template", 27);
  }
}
function Table_p_paginator_11_4_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Table_p_paginator_11_4_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Table_p_paginator_11_4_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 23);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.paginatorLastPageLinkIconTemplate || ctx_r0._paginatorLastPageLinkIconTemplate);
  }
}
function Table_p_paginator_11_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Table_p_paginator_11_4_ng_template_0_Template, 1, 1, "ng-template", 28);
  }
}
function Table_p_paginator_11_5_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Table_p_paginator_11_5_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Table_p_paginator_11_5_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 23);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.paginatorNextPageLinkIconTemplate || ctx_r0._paginatorNextPageLinkIconTemplate);
  }
}
function Table_p_paginator_11_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Table_p_paginator_11_5_ng_template_0_Template, 1, 1, "ng-template", 29);
  }
}
function Table_p_paginator_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-paginator", 24);
    \u0275\u0275listener("onPageChange", function Table_p_paginator_11_Template_p_paginator_onPageChange_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onPageChange($event));
    });
    \u0275\u0275template(1, Table_p_paginator_11_1_Template, 1, 0, null, 16)(2, Table_p_paginator_11_2_Template, 1, 0, null, 16)(3, Table_p_paginator_11_3_Template, 1, 0, null, 16)(4, Table_p_paginator_11_4_Template, 1, 0, null, 16)(5, Table_p_paginator_11_5_Template, 1, 0, null, 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("rows", ctx_r0.rows)("first", ctx_r0.first)("totalRecords", ctx_r0.totalRecords)("pageLinkSize", ctx_r0.pageLinks)("alwaysShow", ctx_r0.alwaysShowPaginator)("rowsPerPageOptions", ctx_r0.rowsPerPageOptions)("templateLeft", ctx_r0.paginatorLeftTemplate || ctx_r0._paginatorLeftTemplate)("templateRight", ctx_r0.paginatorRightTemplate || ctx_r0._paginatorRightTemplate)("dropdownAppendTo", ctx_r0.paginatorDropdownAppendTo)("dropdownScrollHeight", ctx_r0.paginatorDropdownScrollHeight)("currentPageReportTemplate", ctx_r0.currentPageReportTemplate)("showFirstLastIcon", ctx_r0.showFirstLastIcon)("dropdownItemTemplate", ctx_r0.paginatorDropdownItemTemplate || ctx_r0._paginatorDropdownItemTemplate)("showCurrentPageReport", ctx_r0.showCurrentPageReport)("showJumpToPageDropdown", ctx_r0.showJumpToPageDropdown)("showJumpToPageInput", ctx_r0.showJumpToPageInput)("showPageLinks", ctx_r0.showPageLinks)("styleClass", ctx_r0.cx("pcPaginator") + " " + ctx_r0.paginatorStyleClass && ctx_r0.paginatorStyleClass)("locale", ctx_r0.paginatorLocale);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.paginatorDropdownIconTemplate || ctx_r0._paginatorDropdownIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.paginatorFirstPageLinkIconTemplate || ctx_r0._paginatorFirstPageLinkIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.paginatorPreviousPageLinkIconTemplate || ctx_r0._paginatorPreviousPageLinkIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.paginatorLastPageLinkIconTemplate || ctx_r0._paginatorLastPageLinkIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.paginatorNextPageLinkIconTemplate || ctx_r0._paginatorNextPageLinkIconTemplate);
  }
}
function Table_div_12_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Table_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275template(1, Table_div_12_ng_container_1_Template, 1, 0, "ng-container", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r0.cx("footer"));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.summaryTemplate || ctx_r0._summaryTemplate);
  }
}
function Table_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 40, 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r0.cx("columnResizeIndicator"));
  }
}
function Table_span_14_ArrowDownIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ArrowDownIcon");
  }
}
function Table_span_14_3_ng_template_0_Template(rf, ctx) {
}
function Table_span_14_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Table_span_14_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Table_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40, 9);
    \u0275\u0275template(2, Table_span_14_ArrowDownIcon_2_Template, 1, 0, "ArrowDownIcon", 16)(3, Table_span_14_3_Template, 1, 0, null, 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r0.cx("rowReorderIndicatorUp"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.reorderIndicatorUpIconTemplate && !ctx_r0._reorderIndicatorUpIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.reorderIndicatorUpIconTemplate || ctx_r0._reorderIndicatorUpIconTemplate);
  }
}
function Table_span_15_ArrowUpIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ArrowUpIcon");
  }
}
function Table_span_15_3_ng_template_0_Template(rf, ctx) {
}
function Table_span_15_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Table_span_15_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Table_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40, 10);
    \u0275\u0275template(2, Table_span_15_ArrowUpIcon_2_Template, 1, 0, "ArrowUpIcon", 16)(3, Table_span_15_3_Template, 1, 0, null, 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r0.cx("rowReorderIndicatorDown"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.reorderIndicatorDownIconTemplate && !ctx_r0._reorderIndicatorDownIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.reorderIndicatorDownIconTemplate || ctx_r0._reorderIndicatorDownIconTemplate);
  }
}
var _c45 = ["pTableBody", ""];
var _c46 = (a0, a1, a2, a3, a4) => ({
  $implicit: a0,
  rowIndex: a1,
  columns: a2,
  editing: a3,
  frozen: a4
});
var _c47 = (a0, a1, a2, a3, a4, a5, a6) => ({
  $implicit: a0,
  rowIndex: a1,
  columns: a2,
  editing: a3,
  frozen: a4,
  rowgroup: a5,
  rowspan: a6
});
var _c48 = (a0, a1, a2, a3, a4, a5) => ({
  $implicit: a0,
  rowIndex: a1,
  columns: a2,
  expanded: a3,
  editing: a4,
  frozen: a5
});
var _c49 = (a0, a1, a2, a3) => ({
  $implicit: a0,
  rowIndex: a1,
  columns: a2,
  frozen: a3
});
var _c50 = (a0, a1) => ({
  $implicit: a0,
  frozen: a1
});
function TableBody_ng_container_0_ng_template_1_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function TableBody_ng_container_0_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0, 3);
    \u0275\u0275template(1, TableBody_ng_container_0_ng_template_1_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 4);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const rowData_r2 = ctx_r0.$implicit;
    const rowIndex_r3 = ctx_r0.index;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r3.dt.groupHeaderTemplate || ctx_r3.dt._groupHeaderTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction5(2, _c46, rowData_r2, ctx_r3.getRowIndex(rowIndex_r3), ctx_r3.columns, ctx_r3.dt.editMode === "row" && ctx_r3.dt.isRowEditing(rowData_r2), ctx_r3.frozen));
  }
}
function TableBody_ng_container_0_ng_template_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function TableBody_ng_container_0_ng_template_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TableBody_ng_container_0_ng_template_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 4);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const rowData_r2 = ctx_r0.$implicit;
    const rowIndex_r3 = ctx_r0.index;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", rowData_r2 ? ctx_r3.template : ctx_r3.dt.loadingBodyTemplate || ctx_r3.dt._loadingBodyTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction5(2, _c46, rowData_r2, ctx_r3.getRowIndex(rowIndex_r3), ctx_r3.columns, ctx_r3.dt.editMode === "row" && ctx_r3.dt.isRowEditing(rowData_r2), ctx_r3.frozen));
  }
}
function TableBody_ng_container_0_ng_template_1_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function TableBody_ng_container_0_ng_template_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TableBody_ng_container_0_ng_template_1_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 4);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const rowData_r2 = ctx_r0.$implicit;
    const rowIndex_r3 = ctx_r0.index;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", rowData_r2 ? ctx_r3.template : ctx_r3.dt.loadingBodyTemplate || ctx_r3.dt._loadingBodyTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction7(2, _c47, rowData_r2, ctx_r3.getRowIndex(rowIndex_r3), ctx_r3.columns, ctx_r3.dt.editMode === "row" && ctx_r3.dt.isRowEditing(rowData_r2), ctx_r3.frozen, ctx_r3.shouldRenderRowspan(ctx_r3.value, rowData_r2, rowIndex_r3), ctx_r3.calculateRowGroupSize(ctx_r3.value, rowData_r2, rowIndex_r3)));
  }
}
function TableBody_ng_container_0_ng_template_1_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function TableBody_ng_container_0_ng_template_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0, 3);
    \u0275\u0275template(1, TableBody_ng_container_0_ng_template_1_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 4);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const rowData_r2 = ctx_r0.$implicit;
    const rowIndex_r3 = ctx_r0.index;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r3.dt.groupFooterTemplate || ctx_r3.dt._groupFooterTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction5(2, _c46, rowData_r2, ctx_r3.getRowIndex(rowIndex_r3), ctx_r3.columns, ctx_r3.dt.editMode === "row" && ctx_r3.dt.isRowEditing(rowData_r2), ctx_r3.frozen));
  }
}
function TableBody_ng_container_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TableBody_ng_container_0_ng_template_1_ng_container_0_Template, 2, 8, "ng-container", 2)(1, TableBody_ng_container_0_ng_template_1_ng_container_1_Template, 2, 8, "ng-container", 0)(2, TableBody_ng_container_0_ng_template_1_ng_container_2_Template, 2, 10, "ng-container", 0)(3, TableBody_ng_container_0_ng_template_1_ng_container_3_Template, 2, 8, "ng-container", 2);
  }
  if (rf & 2) {
    const rowData_r2 = ctx.$implicit;
    const rowIndex_r3 = ctx.index;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", (ctx_r3.dt.groupHeaderTemplate || ctx_r3.dt._groupHeaderTemplate) && !ctx_r3.dt.virtualScroll && ctx_r3.dt.rowGroupMode === "subheader" && ctx_r3.shouldRenderRowGroupHeader(ctx_r3.value, rowData_r2, rowIndex_r3));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.dt.rowGroupMode !== "rowspan");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.dt.rowGroupMode === "rowspan");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r3.dt.groupFooterTemplate || ctx_r3.dt._groupFooterTemplate) && !ctx_r3.dt.virtualScroll && ctx_r3.dt.rowGroupMode === "subheader" && ctx_r3.shouldRenderRowGroupFooter(ctx_r3.value, rowData_r2, rowIndex_r3));
  }
}
function TableBody_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TableBody_ng_container_0_ng_template_1_Template, 4, 4, "ng-template", 1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.value)("ngForTrackBy", ctx_r3.dt.rowTrackBy);
  }
}
function TableBody_ng_container_1_ng_template_1_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function TableBody_ng_container_1_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TableBody_ng_container_1_ng_template_1_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 4);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    const rowData_r6 = ctx_r4.$implicit;
    const rowIndex_r7 = ctx_r4.index;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r3.template)("ngTemplateOutletContext", \u0275\u0275pureFunction6(2, _c48, rowData_r6, ctx_r3.getRowIndex(rowIndex_r7), ctx_r3.columns, ctx_r3.dt.isRowExpanded(rowData_r6), ctx_r3.dt.editMode === "row" && ctx_r3.dt.isRowEditing(rowData_r6), ctx_r3.frozen));
  }
}
function TableBody_ng_container_1_ng_template_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function TableBody_ng_container_1_ng_template_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0, 3);
    \u0275\u0275template(1, TableBody_ng_container_1_ng_template_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 4);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    const rowData_r6 = ctx_r4.$implicit;
    const rowIndex_r7 = ctx_r4.index;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r3.dt.groupHeaderTemplate || ctx_r3.dt._groupHeaderTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction6(2, _c48, rowData_r6, ctx_r3.getRowIndex(rowIndex_r7), ctx_r3.columns, ctx_r3.dt.isRowExpanded(rowData_r6), ctx_r3.dt.editMode === "row" && ctx_r3.dt.isRowEditing(rowData_r6), ctx_r3.frozen));
  }
}
function TableBody_ng_container_1_ng_template_1_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function TableBody_ng_container_1_ng_template_1_ng_container_2_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function TableBody_ng_container_1_ng_template_1_ng_container_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0, 3);
    \u0275\u0275template(1, TableBody_ng_container_1_ng_template_1_ng_container_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 4);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    const rowData_r6 = ctx_r4.$implicit;
    const rowIndex_r7 = ctx_r4.index;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r3.dt.groupFooterTemplate || ctx_r3.dt._groupFooterTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction6(2, _c48, rowData_r6, ctx_r3.getRowIndex(rowIndex_r7), ctx_r3.columns, ctx_r3.dt.isRowExpanded(rowData_r6), ctx_r3.dt.editMode === "row" && ctx_r3.dt.isRowEditing(rowData_r6), ctx_r3.frozen));
  }
}
function TableBody_ng_container_1_ng_template_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TableBody_ng_container_1_ng_template_1_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 4)(2, TableBody_ng_container_1_ng_template_1_ng_container_2_ng_container_2_Template, 2, 9, "ng-container", 2);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    const rowData_r6 = ctx_r4.$implicit;
    const rowIndex_r7 = ctx_r4.index;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r3.dt.expandedRowTemplate || ctx_r3.dt._expandedRowTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction4(3, _c49, rowData_r6, ctx_r3.getRowIndex(rowIndex_r7), ctx_r3.columns, ctx_r3.frozen));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r3.dt.groupFooterTemplate || ctx_r3.dt._groupFooterTemplate) && ctx_r3.dt.rowGroupMode === "subheader" && ctx_r3.shouldRenderRowGroupFooter(ctx_r3.value, rowData_r6, ctx_r3.getRowIndex(rowIndex_r7)));
  }
}
function TableBody_ng_container_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TableBody_ng_container_1_ng_template_1_ng_container_0_Template, 2, 9, "ng-container", 0)(1, TableBody_ng_container_1_ng_template_1_ng_container_1_Template, 2, 9, "ng-container", 2)(2, TableBody_ng_container_1_ng_template_1_ng_container_2_Template, 3, 8, "ng-container", 0);
  }
  if (rf & 2) {
    const rowData_r6 = ctx.$implicit;
    const rowIndex_r7 = ctx.index;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", !(ctx_r3.dt.groupHeaderTemplate && ctx_r3.dt._groupHeaderTemplate));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r3.dt.groupHeaderTemplate || ctx_r3.dt._groupHeaderTemplate) && ctx_r3.dt.rowGroupMode === "subheader" && ctx_r3.shouldRenderRowGroupHeader(ctx_r3.value, rowData_r6, ctx_r3.getRowIndex(rowIndex_r7)));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.dt.isRowExpanded(rowData_r6));
  }
}
function TableBody_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TableBody_ng_container_1_ng_template_1_Template, 3, 3, "ng-template", 1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.value)("ngForTrackBy", ctx_r3.dt.rowTrackBy);
  }
}
function TableBody_ng_container_2_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function TableBody_ng_container_2_ng_template_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function TableBody_ng_container_2_ng_template_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TableBody_ng_container_2_ng_template_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 4);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext();
    const rowData_r9 = ctx_r7.$implicit;
    const rowIndex_r10 = ctx_r7.index;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r3.dt.frozenExpandedRowTemplate || ctx_r3.dt._frozenExpandedRowTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction4(2, _c49, rowData_r9, ctx_r3.getRowIndex(rowIndex_r10), ctx_r3.columns, ctx_r3.frozen));
  }
}
function TableBody_ng_container_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TableBody_ng_container_2_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 4)(1, TableBody_ng_container_2_ng_template_1_ng_container_1_Template, 2, 7, "ng-container", 0);
  }
  if (rf & 2) {
    const rowData_r9 = ctx.$implicit;
    const rowIndex_r10 = ctx.index;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r3.template)("ngTemplateOutletContext", \u0275\u0275pureFunction6(3, _c48, rowData_r9, ctx_r3.getRowIndex(rowIndex_r10), ctx_r3.columns, ctx_r3.dt.isRowExpanded(rowData_r9), ctx_r3.dt.editMode === "row" && ctx_r3.dt.isRowEditing(rowData_r9), ctx_r3.frozen));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.dt.isRowExpanded(rowData_r9));
  }
}
function TableBody_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TableBody_ng_container_2_ng_template_1_Template, 2, 10, "ng-template", 1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.value)("ngForTrackBy", ctx_r3.dt.rowTrackBy);
  }
}
function TableBody_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function TableBody_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TableBody_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 4);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r3.dt.loadingBodyTemplate || ctx_r3.dt._loadingBodyTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c50, ctx_r3.columns, ctx_r3.frozen));
  }
}
function TableBody_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function TableBody_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TableBody_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 4);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r3.dt.emptyMessageTemplate || ctx_r3.dt._emptyMessageTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c50, ctx_r3.columns, ctx_r3.frozen));
  }
}
function SortIcon_ng_container_0_SortAltIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "SortAltIcon", 4);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-sortable-column-icon");
  }
}
function SortIcon_ng_container_0_SortAmountUpAltIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "SortAmountUpAltIcon", 4);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-sortable-column-icon");
  }
}
function SortIcon_ng_container_0_SortAmountDownIcon_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "SortAmountDownIcon", 4);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-sortable-column-icon");
  }
}
function SortIcon_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SortIcon_ng_container_0_SortAltIcon_1_Template, 1, 1, "SortAltIcon", 3)(2, SortIcon_ng_container_0_SortAmountUpAltIcon_2_Template, 1, 1, "SortAmountUpAltIcon", 3)(3, SortIcon_ng_container_0_SortAmountDownIcon_3_Template, 1, 1, "SortAmountDownIcon", 3);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.sortOrder === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.sortOrder === 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.sortOrder === -1);
  }
}
function SortIcon_span_1_1_ng_template_0_Template(rf, ctx) {
}
function SortIcon_span_1_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SortIcon_span_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function SortIcon_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275template(1, SortIcon_span_1_1_Template, 1, 0, null, 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.dt.sortIconTemplate || ctx_r0.dt._sortIconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c44, ctx_r0.sortOrder));
  }
}
function SortIcon_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getBadgeValue());
  }
}
var _c51 = ["input"];
var _c522 = ["output"];
function CellEditor_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CellEditor_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CellEditor_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.inputTemplate || ctx_r0._inputTemplate);
  }
}
function CellEditor_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CellEditor_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CellEditor_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.outputTemplate || ctx_r0._outputTemplate);
  }
}
var _c532 = ["rb"];
function TableCheckbox_ng_container_1_ng_template_1_0_ng_template_0_Template(rf, ctx) {
}
function TableCheckbox_ng_container_1_ng_template_1_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TableCheckbox_ng_container_1_ng_template_1_0_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TableCheckbox_ng_container_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TableCheckbox_ng_container_1_ng_template_1_0_Template, 1, 0, null, 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.dt.checkboxIconTemplate || ctx_r0.dt._checkboxIconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c44, ctx_r0.checked));
  }
}
function TableCheckbox_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TableCheckbox_ng_container_1_ng_template_1_Template, 1, 4, "ng-template", 2);
    \u0275\u0275elementContainerEnd();
  }
}
function TableHeaderCheckbox_ng_container_1_ng_template_1_0_ng_template_0_Template(rf, ctx) {
}
function TableHeaderCheckbox_ng_container_1_ng_template_1_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TableHeaderCheckbox_ng_container_1_ng_template_1_0_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TableHeaderCheckbox_ng_container_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TableHeaderCheckbox_ng_container_1_ng_template_1_0_Template, 1, 0, null, 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.dt.headerCheckboxIconTemplate || ctx_r0.dt._headerCheckboxIconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c44, ctx_r0.checked));
  }
}
function TableHeaderCheckbox_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TableHeaderCheckbox_ng_container_1_ng_template_1_Template, 1, 4, "ng-template", 2);
    \u0275\u0275elementContainerEnd();
  }
}
var _c54 = ["filter"];
var _c55 = ["filtericon"];
var _c56 = ["removeruleicon"];
var _c57 = ["addruleicon"];
var _c58 = ["clearfiltericon"];
var _c59 = ["clearBtn"];
function ColumnFilter_p_columnFilterFormElement_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-columnFilterFormElement", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("type", ctx_r0.type)("field", ctx_r0.field)("ariaLabel", ctx_r0.ariaLabel)("filterConstraint", ctx_r0.dt.filters[ctx_r0.field])("filterTemplate", ctx_r0.filterTemplate)("placeholder", ctx_r0.placeholder)("minFractionDigits", ctx_r0.minFractionDigits)("maxFractionDigits", ctx_r0.maxFractionDigits)("prefix", ctx_r0.prefix)("suffix", ctx_r0.suffix)("locale", ctx_r0.locale)("localeMatcher", ctx_r0.localeMatcher)("currency", ctx_r0.currency)("currencyDisplay", ctx_r0.currencyDisplay)("useGrouping", ctx_r0.useGrouping)("showButtons", ctx_r0.showButtons);
  }
}
function ColumnFilter_p_button_2_ng_template_1_FilterIcon_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "FilterIcon");
  }
}
function ColumnFilter_p_button_2_ng_template_1_span_1_1_ng_template_0_Template(rf, ctx) {
}
function ColumnFilter_p_button_2_ng_template_1_span_1_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ColumnFilter_p_button_2_ng_template_1_span_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function ColumnFilter_p_button_2_ng_template_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275template(1, ColumnFilter_p_button_2_ng_template_1_span_1_1_Template, 1, 0, null, 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.filterIconTemplate || ctx_r0._filterIconTemplate);
  }
}
function ColumnFilter_p_button_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ColumnFilter_p_button_2_ng_template_1_FilterIcon_0_Template, 1, 0, "FilterIcon", 10)(1, ColumnFilter_p_button_2_ng_template_1_span_1_Template, 2, 1, "span", 11);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", !ctx_r0.filterIconTemplate && !ctx_r0._filterIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.filterIconTemplate || ctx_r0._filterIconTemplate);
  }
}
function ColumnFilter_p_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 9);
    \u0275\u0275listener("click", function ColumnFilter_p_button_2_Template_p_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleMenu($event));
    })("keydown", function ColumnFilter_p_button_2_Template_p_button_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onToggleButtonKeyDown($event));
    });
    \u0275\u0275template(1, ColumnFilter_p_button_2_ng_template_1_Template, 2, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("styleClass", ctx_r0.cx("pcColumnFilterButton"))("ariaLabel", ctx_r0.filterMenuButtonAriaLabel)("buttonProps", ctx_r0.filterButtonProps == null ? null : ctx_r0.filterButtonProps.filter);
    \u0275\u0275attribute("aria-haspopup", true)("aria-controls", ctx_r0.overlayVisible ? ctx_r0.overlayId : null)("aria-expanded", (tmp_7_0 = ctx_r0.overlayVisible) !== null && tmp_7_0 !== void 0 ? tmp_7_0 : false);
  }
}
function ColumnFilter_p_button_3_ng_template_1_FilterSlashIcon_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "FilterSlashIcon");
  }
}
function ColumnFilter_p_button_3_ng_template_1_1_ng_template_0_Template(rf, ctx) {
}
function ColumnFilter_p_button_3_ng_template_1_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ColumnFilter_p_button_3_ng_template_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function ColumnFilter_p_button_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ColumnFilter_p_button_3_ng_template_1_FilterSlashIcon_0_Template, 1, 0, "FilterSlashIcon", 10)(1, ColumnFilter_p_button_3_ng_template_1_1_Template, 1, 0, null, 13);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", !ctx_r0.clearFilterIconTemplate && !ctx_r0._clearFilterIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.clearFilterIconTemplate || ctx_r0._clearFilterIconTemplate);
  }
}
function ColumnFilter_p_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 14);
    \u0275\u0275listener("onClick", function ColumnFilter_p_button_3_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.clearFilter());
    });
    \u0275\u0275template(1, ColumnFilter_p_button_3_ng_template_1_Template, 2, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("styleClass", ctx_r0.cx("pcColumnfilterClearButton"))("ariaLabel", ctx_r0.clearButtonLabel)("buttonProps", ctx_r0.filterButtonProps == null ? null : ctx_r0.filterButtonProps.inline == null ? null : ctx_r0.filterButtonProps.inline.clear);
  }
}
function ColumnFilter_div_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ColumnFilter_div_4_ul_2_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 19);
    \u0275\u0275listener("click", function ColumnFilter_div_4_ul_2_li_1_Template_li_click_0_listener() {
      const matchMode_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onRowMatchModeChange(matchMode_r7.value));
    })("keydown", function ColumnFilter_div_4_ul_2_li_1_Template_li_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onRowMatchModeKeyDown($event));
    })("keydown.enter", function ColumnFilter_div_4_ul_2_li_1_Template_li_keydown_enter_0_listener() {
      const matchMode_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onRowMatchModeChange(matchMode_r7.value));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const matchMode_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("p-datatable-filter-constraint-selected", ctx_r0.isRowMatchModeSelected(matchMode_r7.value));
    \u0275\u0275property("ngClass", ctx_r0.cx("filterConstraint"));
    \u0275\u0275attribute("tabindex", i_r8 === 0 ? "0" : null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", matchMode_r7.label, " ");
  }
}
function ColumnFilter_div_4_ul_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ul", 3);
    \u0275\u0275template(1, ColumnFilter_div_4_ul_2_li_1_Template, 2, 5, "li", 18);
    \u0275\u0275element(2, "li", 3);
    \u0275\u0275elementStart(3, "li", 19);
    \u0275\u0275listener("click", function ColumnFilter_div_4_ul_2_Template_li_click_3_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onRowClearItemClick());
    })("keydown", function ColumnFilter_div_4_ul_2_Template_li_keydown_3_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onRowMatchModeKeyDown($event));
    })("keydown.enter", function ColumnFilter_div_4_ul_2_Template_li_keydown_enter_3_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onRowClearItemClick());
    });
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r0.cx("filterConstraintList"));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.matchModes);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.cx("filterConstraintSeparator"));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.cx("filterConstraint"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.noFilterLabel, " ");
  }
}
function ColumnFilter_div_4_ng_template_3_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "p-select", 24);
    \u0275\u0275listener("ngModelChange", function ColumnFilter_div_4_ng_template_3_div_0_Template_p_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onOperatorChange($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r0.cx("filterOperator"));
    \u0275\u0275advance();
    \u0275\u0275property("options", ctx_r0.operatorOptions)("ngModel", ctx_r0.operator)("styleClass", ctx_r0.cx("pcFilterOperatorDropdown"));
  }
}
function ColumnFilter_div_4_ng_template_3_div_2_p_select_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-select", 24);
    \u0275\u0275listener("ngModelChange", function ColumnFilter_div_4_ng_template_3_div_2_p_select_1_Template_p_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const fieldConstraint_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onMenuMatchModeChange($event, fieldConstraint_r11));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const fieldConstraint_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("options", ctx_r0.matchModes)("ngModel", fieldConstraint_r11.matchMode)("styleClass", ctx_r0.cx("pcFilterConstraintDropdown"));
  }
}
function ColumnFilter_div_4_ng_template_3_div_2_p_button_4_TrashIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "TrashIcon");
  }
}
function ColumnFilter_div_4_ng_template_3_div_2_p_button_4_2_ng_template_0_Template(rf, ctx) {
}
function ColumnFilter_div_4_ng_template_3_div_2_p_button_4_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ColumnFilter_div_4_ng_template_3_div_2_p_button_4_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function ColumnFilter_div_4_ng_template_3_div_2_p_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 28);
    \u0275\u0275listener("onClick", function ColumnFilter_div_4_ng_template_3_div_2_p_button_4_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r12);
      const fieldConstraint_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.removeConstraint(fieldConstraint_r11));
    });
    \u0275\u0275template(1, ColumnFilter_div_4_ng_template_3_div_2_p_button_4_TrashIcon_1_Template, 1, 0, "TrashIcon", 10)(2, ColumnFilter_div_4_ng_template_3_div_2_p_button_4_2_Template, 1, 0, null, 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275property("styleClass", ctx_r0.cx("pcFilterRemoveRuleButton"))("text", true)("ariaLabel", ctx_r0.removeRuleButtonLabel)("label", ctx_r0.removeRuleButtonLabel)("buttonProps", ctx_r0.filterButtonProps == null ? null : ctx_r0.filterButtonProps.popover == null ? null : ctx_r0.filterButtonProps.popover.removeRule);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.removeRuleIconTemplate && !ctx_r0._removeRuleIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.removeRuleIconTemplate || ctx_r0._removeRuleIconTemplate);
  }
}
function ColumnFilter_div_4_ng_template_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275template(1, ColumnFilter_div_4_ng_template_3_div_2_p_select_1_Template, 1, 3, "p-select", 25);
    \u0275\u0275element(2, "p-columnFilterFormElement", 26);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275template(4, ColumnFilter_div_4_ng_template_3_div_2_p_button_4_Template, 3, 7, "p-button", 27);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const fieldConstraint_r11 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r0.cx("filterRule"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showMatchModes && ctx_r0.matchModes);
    \u0275\u0275advance();
    \u0275\u0275property("type", ctx_r0.type)("field", ctx_r0.field)("filterConstraint", fieldConstraint_r11)("filterTemplate", ctx_r0.filterTemplate || ctx_r0._filterTemplate)("placeholder", ctx_r0.placeholder)("minFractionDigits", ctx_r0.minFractionDigits)("maxFractionDigits", ctx_r0.maxFractionDigits)("prefix", ctx_r0.prefix)("suffix", ctx_r0.suffix)("locale", ctx_r0.locale)("localeMatcher", ctx_r0.localeMatcher)("currency", ctx_r0.currency)("currencyDisplay", ctx_r0.currencyDisplay)("useGrouping", ctx_r0.useGrouping);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.showRemoveIcon);
  }
}
function ColumnFilter_div_4_ng_template_3_div_3_PlusIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "PlusIcon");
  }
}
function ColumnFilter_div_4_ng_template_3_div_3_3_ng_template_0_Template(rf, ctx) {
}
function ColumnFilter_div_4_ng_template_3_div_3_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ColumnFilter_div_4_ng_template_3_div_3_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function ColumnFilter_div_4_ng_template_3_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "p-button", 29);
    \u0275\u0275listener("onClick", function ColumnFilter_div_4_ng_template_3_div_3_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.addConstraint());
    });
    \u0275\u0275template(2, ColumnFilter_div_4_ng_template_3_div_3_PlusIcon_2_Template, 1, 0, "PlusIcon", 10)(3, ColumnFilter_div_4_ng_template_3_div_3_3_Template, 1, 0, null, 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("label", ctx_r0.addRuleButtonLabel)("styleClass", ctx_r0.cx("pcFilterAddRuleButton"))("text", true)("buttonProps", ctx_r0.filterButtonProps == null ? null : ctx_r0.filterButtonProps.popover == null ? null : ctx_r0.filterButtonProps.popover.addRule);
    \u0275\u0275attribute("aria-label", ctx_r0.addRuleButtonLabel);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.addRuleIconTemplate && !ctx_r0._addRuleIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.addRuleIconTemplate || ctx_r0._addRuleIconTemplate);
  }
}
function ColumnFilter_div_4_ng_template_3_p_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 30, 2);
    \u0275\u0275listener("onClick", function ColumnFilter_div_4_ng_template_3_p_button_5_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.clearFilter());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("outlined", true)("label", ctx_r0.clearButtonLabel)("buttonProps", ctx_r0.filterButtonProps == null ? null : ctx_r0.filterButtonProps.popover == null ? null : ctx_r0.filterButtonProps.popover.clear);
    \u0275\u0275attribute("aria-label", ctx_r0.clearButtonLabel);
  }
}
function ColumnFilter_div_4_ng_template_3_p_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 31);
    \u0275\u0275listener("onClick", function ColumnFilter_div_4_ng_template_3_p_button_6_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.applyFilter());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("label", ctx_r0.applyButtonLabel)("buttonProps", ctx_r0.filterButtonProps == null ? null : ctx_r0.filterButtonProps.popover == null ? null : ctx_r0.filterButtonProps.popover.apply);
    \u0275\u0275attribute("aria-label", ctx_r0.applyButtonLabel);
  }
}
function ColumnFilter_div_4_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ColumnFilter_div_4_ng_template_3_div_0_Template, 2, 4, "div", 20);
    \u0275\u0275elementStart(1, "div", 3);
    \u0275\u0275template(2, ColumnFilter_div_4_ng_template_3_div_2_Template, 5, 17, "div", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ColumnFilter_div_4_ng_template_3_div_3_Template, 4, 7, "div", 10);
    \u0275\u0275elementStart(4, "div", 3);
    \u0275\u0275template(5, ColumnFilter_div_4_ng_template_3_p_button_5_Template, 2, 4, "p-button", 22)(6, ColumnFilter_div_4_ng_template_3_p_button_6_Template, 1, 3, "p-button", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", ctx_r0.isShowOperator);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.cx("filterRuleList"));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.fieldConstraints);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isShowAddConstraint);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.cx("filterButtonbar"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showClearButton);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showApplyButton);
  }
}
function ColumnFilter_div_4_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ColumnFilter_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275listener("click", function ColumnFilter_div_4_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onContentClick());
    })("@overlayAnimation.start", function ColumnFilter_div_4_Template_div_animation_overlayAnimation_start_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onOverlayAnimationStart($event));
    })("@overlayAnimation.done", function ColumnFilter_div_4_Template_div_animation_overlayAnimation_done_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onOverlayAnimationEnd($event));
    })("keydown.escape", function ColumnFilter_div_4_Template_div_keydown_escape_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onEscape());
    });
    \u0275\u0275template(1, ColumnFilter_div_4_ng_container_1_Template, 1, 0, "ng-container", 16)(2, ColumnFilter_div_4_ul_2_Template, 5, 5, "ul", 17)(3, ColumnFilter_div_4_ng_template_3_Template, 7, 7, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(5, ColumnFilter_div_4_ng_container_5_Template, 1, 0, "ng-container", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const menu_r16 = \u0275\u0275reference(4);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r0.cx("filterOverlay"))("id", ctx_r0.overlayId)("@overlayAnimation", "visible");
    \u0275\u0275attribute("aria-modal", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.headerTemplate || ctx_r0._headerTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(10, _c44, ctx_r0.field));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.display === "row")("ngIfElse", menu_r16);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.footerTemplate || ctx_r0._footerTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(12, _c44, ctx_r0.field));
  }
}
var _c60 = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15) => ({
  $implicit: a0,
  filterCallback: a1,
  type: a2,
  field: a3,
  filterConstraint: a4,
  placeholder: a5,
  minFractionDigits: a6,
  maxFractionDigits: a7,
  prefix: a8,
  suffix: a9,
  locale: a10,
  localeMatcher: a11,
  currency: a12,
  currencyDisplay: a13,
  useGrouping: a14,
  showButtons: a15
});
function ColumnFilterFormElement_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ColumnFilterFormElement_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ColumnFilterFormElement_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 2);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.filterTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunctionV(2, _c60, [ctx_r0.filterConstraint.value, ctx_r0.filterCallback, ctx_r0.type, ctx_r0.field, ctx_r0.filterConstraint, ctx_r0.placeholder, ctx_r0.minFractionDigits, ctx_r0.maxFractionDigits, ctx_r0.prefix, ctx_r0.suffix, ctx_r0.locale, ctx_r0.localeMatcher, ctx_r0.currency, ctx_r0.currencyDisplay, ctx_r0.useGrouping, ctx_r0.showButtons]));
  }
}
function ColumnFilterFormElement_ng_template_1_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 8);
    \u0275\u0275listener("input", function ColumnFilterFormElement_ng_template_1_input_1_Template_input_input_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onModelChange($event.target.value));
    })("keydown.enter", function ColumnFilterFormElement_ng_template_1_input_1_Template_input_keydown_enter_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onTextInputEnterKeyDown($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ariaLabel", ctx_r0.ariaLabel)("value", ctx_r0.filterConstraint == null ? null : ctx_r0.filterConstraint.value);
    \u0275\u0275attribute("placeholder", ctx_r0.placeholder);
  }
}
function ColumnFilterFormElement_ng_template_1_p_inputNumber_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-inputNumber", 9);
    \u0275\u0275listener("ngModelChange", function ColumnFilterFormElement_ng_template_1_p_inputNumber_2_Template_p_inputNumber_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onModelChange($event));
    })("onKeyDown", function ColumnFilterFormElement_ng_template_1_p_inputNumber_2_Template_p_inputNumber_onKeyDown_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onNumericInputKeyDown($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngModel", ctx_r0.filterConstraint == null ? null : ctx_r0.filterConstraint.value)("showButtons", ctx_r0.showButtons)("minFractionDigits", ctx_r0.minFractionDigits)("maxFractionDigits", ctx_r0.maxFractionDigits)("ariaLabel", ctx_r0.ariaLabel)("prefix", ctx_r0.prefix)("suffix", ctx_r0.suffix)("placeholder", ctx_r0.placeholder)("mode", ctx_r0.currency ? "currency" : "decimal")("locale", ctx_r0.locale)("localeMatcher", ctx_r0.localeMatcher)("currency", ctx_r0.currency)("currencyDisplay", ctx_r0.currencyDisplay)("useGrouping", ctx_r0.useGrouping);
  }
}
function ColumnFilterFormElement_ng_template_1_p_checkbox_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-checkbox", 10);
    \u0275\u0275listener("ngModelChange", function ColumnFilterFormElement_ng_template_1_p_checkbox_3_Template_p_checkbox_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onModelChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("indeterminate", true)("binary", true)("ngModel", ctx_r0.filterConstraint == null ? null : ctx_r0.filterConstraint.value);
  }
}
function ColumnFilterFormElement_ng_template_1_p_datepicker_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-datepicker", 11);
    \u0275\u0275listener("ngModelChange", function ColumnFilterFormElement_ng_template_1_p_datepicker_4_Template_p_datepicker_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onModelChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ariaLabel", ctx_r0.ariaLabel)("placeholder", ctx_r0.placeholder)("ngModel", ctx_r0.filterConstraint == null ? null : ctx_r0.filterConstraint.value);
  }
}
function ColumnFilterFormElement_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0, 3);
    \u0275\u0275template(1, ColumnFilterFormElement_ng_template_1_input_1_Template, 1, 3, "input", 4)(2, ColumnFilterFormElement_ng_template_1_p_inputNumber_2_Template, 1, 14, "p-inputNumber", 5)(3, ColumnFilterFormElement_ng_template_1_p_checkbox_3_Template, 1, 3, "p-checkbox", 6)(4, ColumnFilterFormElement_ng_template_1_p_datepicker_4_Template, 1, 3, "p-datepicker", 7);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngSwitch", ctx_r0.type);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "text");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "numeric");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "boolean");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "date");
  }
}
var TableService = class _TableService {
  sortSource = new Subject();
  selectionSource = new Subject();
  contextMenuSource = new Subject();
  valueSource = new Subject();
  totalRecordsSource = new Subject();
  columnsSource = new Subject();
  sortSource$ = this.sortSource.asObservable();
  selectionSource$ = this.selectionSource.asObservable();
  contextMenuSource$ = this.contextMenuSource.asObservable();
  valueSource$ = this.valueSource.asObservable();
  totalRecordsSource$ = this.totalRecordsSource.asObservable();
  columnsSource$ = this.columnsSource.asObservable();
  onSort(sortMeta) {
    this.sortSource.next(sortMeta);
  }
  onSelectionChange() {
    this.selectionSource.next(null);
  }
  onContextMenu(data) {
    this.contextMenuSource.next(data);
  }
  onValueChange(value) {
    this.valueSource.next(value);
  }
  onTotalRecordsChange(value) {
    this.totalRecordsSource.next(value);
  }
  onColumnsChange(columns) {
    this.columnsSource.next(columns);
  }
  static \u0275fac = function TableService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TableService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TableService,
    factory: _TableService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableService, [{
    type: Injectable
  }], null, null);
})();
var Table = class _Table extends BaseComponent {
  /**
   * An array of objects to represent dynamic columns that are frozen.
   * @group Props
   */
  frozenColumns;
  /**
   * An array of objects to display as frozen.
   * @group Props
   */
  frozenValue;
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
   * Inline style of the table.
   * @group Props
   */
  tableStyle;
  /**
   * Style class of the table.
   * @group Props
   */
  tableStyleClass;
  /**
   * When specified as true, enables the pagination.
   * @group Props
   */
  paginator;
  /**
   * Number of page links to display in paginator.
   * @group Props
   */
  pageLinks = 5;
  /**
   * Array of integer/object values to display inside rows per page dropdown of paginator
   * @group Props
   */
  rowsPerPageOptions;
  /**
   * Whether to show it even there is only one page.
   * @group Props
   */
  alwaysShowPaginator = true;
  /**
   * Position of the paginator, options are "top", "bottom" or "both".
   * @group Props
   */
  paginatorPosition = "bottom";
  /**
   * Custom style class for paginator
   * @group Props
   */
  paginatorStyleClass;
  /**
   * Target element to attach the paginator dropdown overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  paginatorDropdownAppendTo;
  /**
   * Paginator dropdown height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.
   * @group Props
   */
  paginatorDropdownScrollHeight = "200px";
  /**
   * Template of the current page report element. Available placeholders are {currentPage},{totalPages},{rows},{first},{last} and {totalRecords}
   * @group Props
   */
  currentPageReportTemplate = "{currentPage} of {totalPages}";
  /**
   * Whether to display current page report.
   * @group Props
   */
  showCurrentPageReport;
  /**
   * Whether to display a dropdown to navigate to any page.
   * @group Props
   */
  showJumpToPageDropdown;
  /**
   * Whether to display a input to navigate to any page.
   * @group Props
   */
  showJumpToPageInput;
  /**
   * When enabled, icons are displayed on paginator to go first and last page.
   * @group Props
   */
  showFirstLastIcon = true;
  /**
   * Whether to show page links.
   * @group Props
   */
  showPageLinks = true;
  /**
   * Sort order to use when an unsorted column gets sorted by user interaction.
   * @group Props
   */
  defaultSortOrder = 1;
  /**
   * Defines whether sorting works on single column or on multiple columns.
   * @group Props
   */
  sortMode = "single";
  /**
   * When true, resets paginator to first page after sorting. Available only when sortMode is set to single.
   * @group Props
   */
  resetPageOnSort = true;
  /**
   * Specifies the selection mode, valid values are "single" and "multiple".
   * @group Props
   */
  selectionMode;
  /**
   * When enabled with paginator and checkbox selection mode, the select all checkbox in the header will select all rows on the current page.
   * @group Props
   */
  selectionPageOnly;
  /**
   * Selected row with a context menu.
   * @group Props
   */
  contextMenuSelection;
  /**
   * Callback to invoke on context menu selection change.
   * @param {*} object - row data.
   * @group Emits
   */
  contextMenuSelectionChange = new EventEmitter();
  /**
   *  Defines the behavior of context menu selection, in "separate" mode context menu updates contextMenuSelection property whereas in joint mode selection property is used instead so that when row selection is enabled, both row selection and context menu selection use the same property.
   * @group Props
   */
  contextMenuSelectionMode = "separate";
  /**
   * A property to uniquely identify a record in data.
   * @group Props
   */
  dataKey;
  /**
   * Defines whether metaKey should be considered for the selection. On touch enabled devices, metaKeySelection is turned off automatically.
   * @group Props
   */
  metaKeySelection = false;
  /**
   * Defines if the row is selectable.
   * @group Props
   */
  rowSelectable;
  /**
   * Function to optimize the dom operations by delegating to ngForTrackBy, default algorithm checks for object identity.
   * @group Props
   */
  rowTrackBy = (index, item) => item;
  /**
   * Defines if data is loaded and interacted with in lazy manner.
   * @group Props
   */
  lazy = false;
  /**
   * Whether to call lazy loading on initialization.
   * @group Props
   */
  lazyLoadOnInit = true;
  /**
   * Algorithm to define if a row is selected, valid values are "equals" that compares by reference and "deepEquals" that compares all fields.
   * @group Props
   */
  compareSelectionBy = "deepEquals";
  /**
   * Character to use as the csv separator.
   * @group Props
   */
  csvSeparator = ",";
  /**
   * Name of the exported file.
   * @group Props
   */
  exportFilename = "download";
  /**
   * An array of FilterMetadata objects to provide external filters.
   * @group Props
   */
  filters = {};
  /**
   * An array of fields as string to use in global filtering.
   * @group Props
   */
  globalFilterFields;
  /**
   * Delay in milliseconds before filtering the data.
   * @group Props
   */
  filterDelay = 300;
  /**
   * Locale to use in filtering. The default locale is the host environment's current locale.
   * @group Props
   */
  filterLocale;
  /**
   * Map instance to keep the expanded rows where key of the map is the data key of the row.
   * @group Props
   */
  expandedRowKeys = {};
  /**
   * Map instance to keep the rows being edited where key of the map is the data key of the row.
   * @group Props
   */
  editingRowKeys = {};
  /**
   * Whether multiple rows can be expanded at any time. Valid values are "multiple" and "single".
   * @group Props
   */
  rowExpandMode = "multiple";
  /**
   * Enables scrollable tables.
   * @group Props
   */
  scrollable;
  /**
   * Orientation of the scrolling, options are "vertical", "horizontal" and "both".
   * @group Props
   * @deprecated Property is obselete since v14.2.0.
   */
  scrollDirection = "vertical";
  /**
   * Type of the row grouping, valid values are "subheader" and "rowspan".
   * @group Props
   */
  rowGroupMode;
  /**
   * Height of the scroll viewport in fixed pixels or the "flex" keyword for a dynamic size.
   * @group Props
   */
  scrollHeight;
  /**
   * Whether the data should be loaded on demand during scroll.
   * @group Props
   */
  virtualScroll;
  /**
   * Height of a row to use in calculations of virtual scrolling.
   * @group Props
   */
  virtualScrollItemSize;
  /**
   * Whether to use the scroller feature. The properties of scroller component can be used like an object in it.
   * @group Props
   */
  virtualScrollOptions;
  /**
   * Threshold in milliseconds to delay lazy loading during scrolling.
   * @group Props
   */
  virtualScrollDelay = 250;
  /**
   * Width of the frozen columns container.
   * @group Props
   */
  frozenWidth;
  /**
   * Defines if the table is responsive.
   * @group Props
   * @deprecated table is always responsive with scrollable behavior.
   */
  get responsive() {
    return this._responsive;
  }
  set responsive(val) {
    this._responsive = val;
    console.log("responsive property is deprecated as table is always responsive with scrollable behavior.");
  }
  _responsive;
  /**
   * Local ng-template varilable of a ContextMenu.
   * @group Props
   */
  contextMenu;
  /**
   * When enabled, columns can be resized using drag and drop.
   * @group Props
   */
  resizableColumns;
  /**
   * Defines whether the overall table width should change on column resize, valid values are "fit" and "expand".
   * @group Props
   */
  columnResizeMode = "fit";
  /**
   * When enabled, columns can be reordered using drag and drop.
   * @group Props
   */
  reorderableColumns;
  /**
   * Displays a loader to indicate data load is in progress.
   * @group Props
   */
  loading;
  /**
   * The icon to show while indicating data load is in progress.
   * @group Props
   */
  loadingIcon;
  /**
   * Whether to show the loading mask when loading property is true.
   * @group Props
   */
  showLoader = true;
  /**
   * Adds hover effect to rows without the need for selectionMode. Note that tr elements that can be hovered need to have "p-selectable-row" class for rowHover to work.
   * @group Props
   */
  rowHover;
  /**
   * Whether to use the default sorting or a custom one using sortFunction.
   * @group Props
   */
  customSort;
  /**
   * Whether to use the initial sort badge or not.
   * @group Props
   */
  showInitialSortBadge = true;
  /**
   * Whether the cell widths scale according to their content or not.  Deprecated:  Table layout is always "auto".
   * @group Props
   */
  autoLayout;
  /**
   * Export function.
   * @group Props
   */
  exportFunction;
  /**
   * Custom export header of the column to be exported as CSV.
   * @group Props
   */
  exportHeader;
  /**
   * Unique identifier of a stateful table to use in state storage.
   * @group Props
   */
  stateKey;
  /**
   * Defines where a stateful table keeps its state, valid values are "session" for sessionStorage and "local" for localStorage.
   * @group Props
   */
  stateStorage = "session";
  /**
   * Defines the editing mode, valid values are "cell" and "row".
   * @group Props
   */
  editMode = "cell";
  /**
   * Field name to use in row grouping.
   * @group Props
   */
  groupRowsBy;
  /**
   * Defines the size of the table.
   * @group Props
   */
  size;
  /**
   * Whether to show grid lines between cells.
   * @group Props
   */
  showGridlines;
  /**
   * Whether to display rows with alternating colors.
   * @group Props
   */
  stripedRows;
  /**
   * Order to sort when default row grouping is enabled.
   * @group Props
   */
  groupRowsByOrder = 1;
  /**
   * Defines the responsive mode, valid options are "stack" and "scroll".
   * @group Props
   */
  responsiveLayout = "scroll";
  /**
   * The breakpoint to define the maximum width boundary when using stack responsive layout.
   * @group Props
   */
  breakpoint = "960px";
  /**
   * Locale to be used in paginator formatting.
   * @group Props
   */
  paginatorLocale;
  /**
   * An array of objects to display.
   * @group Props
   */
  get value() {
    return this._value;
  }
  set value(val) {
    this._value = val;
  }
  /**
   * An array of objects to represent dynamic columns.
   * @group Props
   */
  get columns() {
    return this._columns;
  }
  set columns(cols) {
    this._columns = cols;
  }
  /**
   * Index of the first row to be displayed.
   * @group Props
   */
  get first() {
    return this._first;
  }
  set first(val) {
    this._first = val;
  }
  /**
   * Number of rows to display per page.
   * @group Props
   */
  get rows() {
    return this._rows;
  }
  set rows(val) {
    this._rows = val;
  }
  /**
   * Number of total records, defaults to length of value when not defined.
   * @group Props
   */
  get totalRecords() {
    return this._totalRecords;
  }
  set totalRecords(val) {
    this._totalRecords = val;
    this.tableService.onTotalRecordsChange(this._totalRecords);
  }
  /**
   * Name of the field to sort data by default.
   * @group Props
   */
  get sortField() {
    return this._sortField;
  }
  set sortField(val) {
    this._sortField = val;
  }
  /**
   * Order to sort when default sorting is enabled.
   * @group Props
   */
  get sortOrder() {
    return this._sortOrder;
  }
  set sortOrder(val) {
    this._sortOrder = val;
  }
  /**
   * An array of SortMeta objects to sort the data by default in multiple sort mode.
   * @group Props
   */
  get multiSortMeta() {
    return this._multiSortMeta;
  }
  set multiSortMeta(val) {
    this._multiSortMeta = val;
  }
  /**
   * Selected row in single mode or an array of values in multiple mode.
   * @group Props
   */
  get selection() {
    return this._selection;
  }
  set selection(val) {
    this._selection = val;
  }
  /**
   * Indicates the height of rows to be scrolled.
   * @group Props
   * @deprecated use virtualScrollItemSize property instead.
   */
  get virtualRowHeight() {
    return this._virtualRowHeight;
  }
  set virtualRowHeight(val) {
    this._virtualRowHeight = val;
    console.log("The virtualRowHeight property is deprecated.");
  }
  /**
   * Whether all data is selected.
   * @group Props
   */
  get selectAll() {
    return this._selection;
  }
  set selectAll(val) {
    this._selection = val;
  }
  /**
   * Emits when the all of the items selected or unselected.
   * @param {TableSelectAllChangeEvent} event - custom  all selection change event.
   * @group Emits
   */
  selectAllChange = new EventEmitter();
  /**
   * Callback to invoke on selection changed.
   * @param {any | null} value - selected data.
   * @group Emits
   */
  selectionChange = new EventEmitter();
  /**
   * Callback to invoke when a row is selected.
   * @param {TableRowSelectEvent} event - custom select event.
   * @group Emits
   */
  onRowSelect = new EventEmitter();
  /**
   * Callback to invoke when a row is unselected.
   * @param {TableRowUnSelectEvent} event - custom unselect event.
   * @group Emits
   */
  onRowUnselect = new EventEmitter();
  /**
   * Callback to invoke when pagination occurs.
   * @param {TablePageEvent} event - custom pagination event.
   * @group Emits
   */
  onPage = new EventEmitter();
  /**
   * Callback to invoke when a column gets sorted.
   * @param {Object} object - sort meta.
   * @group Emits
   */
  onSort = new EventEmitter();
  /**
   * Callback to invoke when data is filtered.
   * @param {TableFilterEvent} event - custom filtering event.
   * @group Emits
   */
  onFilter = new EventEmitter();
  /**
   * Callback to invoke when paging, sorting or filtering happens in lazy mode.
   * @param {TableLazyLoadEvent} event - custom lazy loading event.
   * @group Emits
   */
  onLazyLoad = new EventEmitter();
  /**
   * Callback to invoke when a row is expanded.
   * @param {TableRowExpandEvent} event - custom row expand event.
   * @group Emits
   */
  onRowExpand = new EventEmitter();
  /**
   * Callback to invoke when a row is collapsed.
   * @param {TableRowCollapseEvent} event - custom row collapse event.
   * @group Emits
   */
  onRowCollapse = new EventEmitter();
  /**
   * Callback to invoke when a row is selected with right click.
   * @param {TableContextMenuSelectEvent} event - custom context menu select event.
   * @group Emits
   */
  onContextMenuSelect = new EventEmitter();
  /**
   * Callback to invoke when a column is resized.
   * @param {TableColResizeEvent} event - custom column resize event.
   * @group Emits
   */
  onColResize = new EventEmitter();
  /**
   * Callback to invoke when a column is reordered.
   * @param {TableColumnReorderEvent} event - custom column reorder event.
   * @group Emits
   */
  onColReorder = new EventEmitter();
  /**
   * Callback to invoke when a row is reordered.
   * @param {TableRowReorderEvent} event - custom row reorder event.
   * @group Emits
   */
  onRowReorder = new EventEmitter();
  /**
   * Callback to invoke when a cell switches to edit mode.
   * @param {TableEditInitEvent} event - custom edit init event.
   * @group Emits
   */
  onEditInit = new EventEmitter();
  /**
   * Callback to invoke when cell edit is completed.
   * @param {TableEditCompleteEvent} event - custom edit complete event.
   * @group Emits
   */
  onEditComplete = new EventEmitter();
  /**
   * Callback to invoke when cell edit is cancelled with escape key.
   * @param {TableEditCancelEvent} event - custom edit cancel event.
   * @group Emits
   */
  onEditCancel = new EventEmitter();
  /**
   * Callback to invoke when state of header checkbox changes.
   * @param {TableHeaderCheckboxToggleEvent} event - custom header checkbox event.
   * @group Emits
   */
  onHeaderCheckboxToggle = new EventEmitter();
  /**
   * A function to implement custom sorting, refer to sorting section for details.
   * @param {any} any - sort meta.
   * @group Emits
   */
  sortFunction = new EventEmitter();
  /**
   * Callback to invoke on pagination.
   * @param {number} number - first element.
   * @group Emits
   */
  firstChange = new EventEmitter();
  /**
   * Callback to invoke on rows change.
   * @param {number} number - Row count.
   * @group Emits
   */
  rowsChange = new EventEmitter();
  /**
   * Callback to invoke table state is saved.
   * @param {TableState} object - table state.
   * @group Emits
   */
  onStateSave = new EventEmitter();
  /**
   * Callback to invoke table state is restored.
   * @param {TableState} object - table state.
   * @group Emits
   */
  onStateRestore = new EventEmitter();
  containerViewChild;
  resizeHelperViewChild;
  reorderIndicatorUpViewChild;
  reorderIndicatorDownViewChild;
  wrapperViewChild;
  tableViewChild;
  tableHeaderViewChild;
  tableFooterViewChild;
  scroller;
  _templates;
  _virtualRowHeight = 28;
  _value = [];
  _columns;
  _totalRecords = 0;
  _first = 0;
  _rows;
  filteredValue;
  // @todo will be refactored later
  _headerTemplate;
  headerTemplate;
  _headerGroupedTemplate;
  headerGroupedTemplate;
  _bodyTemplate;
  bodyTemplate;
  _loadingBodyTemplate;
  loadingBodyTemplate;
  _captionTemplate;
  captionTemplate;
  _footerTemplate;
  footerTemplate;
  _footerGroupedTemplate;
  footerGroupedTemplate;
  _summaryTemplate;
  summaryTemplate;
  _colGroupTemplate;
  colGroupTemplate;
  _expandedRowTemplate;
  expandedRowTemplate;
  _groupHeaderTemplate;
  groupHeaderTemplate;
  _groupFooterTemplate;
  groupFooterTemplate;
  _frozenExpandedRowTemplate;
  frozenExpandedRowTemplate;
  _frozenHeaderTemplate;
  frozenHeaderTemplate;
  _frozenBodyTemplate;
  frozenBodyTemplate;
  _frozenFooterTemplate;
  frozenFooterTemplate;
  _frozenColGroupTemplate;
  frozenColGroupTemplate;
  _emptyMessageTemplate;
  emptyMessageTemplate;
  _paginatorLeftTemplate;
  paginatorLeftTemplate;
  _paginatorRightTemplate;
  paginatorRightTemplate;
  _paginatorDropdownItemTemplate;
  paginatorDropdownItemTemplate;
  _loadingIconTemplate;
  loadingIconTemplate;
  _reorderIndicatorUpIconTemplate;
  reorderIndicatorUpIconTemplate;
  _reorderIndicatorDownIconTemplate;
  reorderIndicatorDownIconTemplate;
  _sortIconTemplate;
  sortIconTemplate;
  _checkboxIconTemplate;
  checkboxIconTemplate;
  _headerCheckboxIconTemplate;
  headerCheckboxIconTemplate;
  _paginatorDropdownIconTemplate;
  paginatorDropdownIconTemplate;
  _paginatorFirstPageLinkIconTemplate;
  paginatorFirstPageLinkIconTemplate;
  _paginatorLastPageLinkIconTemplate;
  paginatorLastPageLinkIconTemplate;
  _paginatorPreviousPageLinkIconTemplate;
  paginatorPreviousPageLinkIconTemplate;
  _paginatorNextPageLinkIconTemplate;
  paginatorNextPageLinkIconTemplate;
  selectionKeys = {};
  lastResizerHelperX;
  reorderIconWidth;
  reorderIconHeight;
  draggedColumn;
  draggedRowIndex;
  droppedRowIndex;
  rowDragging;
  dropPosition;
  editingCell;
  editingCellData;
  editingCellField;
  editingCellRowIndex;
  selfClick;
  documentEditListener;
  _multiSortMeta;
  _sortField;
  _sortOrder = 1;
  preventSelectionSetterPropagation;
  _selection;
  _selectAll = null;
  anchorRowIndex;
  rangeRowIndex;
  filterTimeout;
  initialized;
  rowTouched;
  restoringSort;
  restoringFilter;
  stateRestored;
  columnOrderStateRestored;
  columnWidthsState;
  tableWidthState;
  overlaySubscription;
  resizeColumnElement;
  columnResizing = false;
  rowGroupHeaderStyleObject = {};
  id = UniqueComponentId();
  styleElement;
  responsiveStyleElement;
  overlayService = inject(OverlayService);
  filterService = inject(FilterService);
  tableService = inject(TableService);
  zone = inject(NgZone);
  _componentStyle = inject(TableStyle);
  ngOnInit() {
    super.ngOnInit();
    if (this.lazy && this.lazyLoadOnInit) {
      if (!this.virtualScroll) {
        this.onLazyLoad.emit(this.createLazyLoadMetadata());
      }
      if (this.restoringFilter) {
        this.restoringFilter = false;
      }
    }
    if (this.responsiveLayout === "stack") {
      this.createResponsiveStyle();
    }
    this.initialized = true;
  }
  ngAfterContentInit() {
    this._templates.forEach((item) => {
      switch (item.getType()) {
        case "caption":
          this.captionTemplate = item.template;
          break;
        case "header":
          this.headerTemplate = item.template;
          break;
        case "headergrouped":
          this.headerGroupedTemplate = item.template;
          break;
        case "body":
          this.bodyTemplate = item.template;
          break;
        case "loadingbody":
          this.loadingBodyTemplate = item.template;
          break;
        case "footer":
          this.footerTemplate = item.template;
          break;
        case "footergrouped":
          this.footerGroupedTemplate = item.template;
          break;
        case "summary":
          this.summaryTemplate = item.template;
          break;
        case "colgroup":
          this.colGroupTemplate = item.template;
          break;
        case "expandedrow":
          this.expandedRowTemplate = item.template;
          break;
        case "groupheader":
          this.groupHeaderTemplate = item.template;
          break;
        case "groupfooter":
          this.groupFooterTemplate = item.template;
          break;
        case "frozenheader":
          this.frozenHeaderTemplate = item.template;
          break;
        case "frozenbody":
          this.frozenBodyTemplate = item.template;
          break;
        case "frozenfooter":
          this.frozenFooterTemplate = item.template;
          break;
        case "frozencolgroup":
          this.frozenColGroupTemplate = item.template;
          break;
        case "frozenrowexpansion":
          this.frozenExpandedRowTemplate = item.template;
          break;
        case "emptymessage":
          this.emptyMessageTemplate = item.template;
          break;
        case "paginatorleft":
          this.paginatorLeftTemplate = item.template;
          break;
        case "paginatorright":
          this.paginatorRightTemplate = item.template;
          break;
        case "paginatordropdownicon":
          this.paginatorDropdownIconTemplate = item.template;
          break;
        case "paginatordropdownitem":
          this.paginatorDropdownItemTemplate = item.template;
          break;
        case "paginatorfirstpagelinkicon":
          this.paginatorFirstPageLinkIconTemplate = item.template;
          break;
        case "paginatorlastpagelinkicon":
          this.paginatorLastPageLinkIconTemplate = item.template;
          break;
        case "paginatorpreviouspagelinkicon":
          this.paginatorPreviousPageLinkIconTemplate = item.template;
          break;
        case "paginatornextpagelinkicon":
          this.paginatorNextPageLinkIconTemplate = item.template;
          break;
        case "loadingicon":
          this.loadingIconTemplate = item.template;
          break;
        case "reorderindicatorupicon":
          this.reorderIndicatorUpIconTemplate = item.template;
          break;
        case "reorderindicatordownicon":
          this.reorderIndicatorDownIconTemplate = item.template;
          break;
        case "sorticon":
          this.sortIconTemplate = item.template;
          break;
        case "checkboxicon":
          this.checkboxIconTemplate = item.template;
          break;
        case "headercheckboxicon":
          this.headerCheckboxIconTemplate = item.template;
          break;
      }
    });
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
    if (isPlatformBrowser(this.platformId)) {
      if (this.isStateful() && this.resizableColumns) {
        this.restoreColumnWidths();
      }
    }
  }
  ngOnChanges(simpleChange) {
    super.ngOnChanges(simpleChange);
    if (simpleChange.value) {
      if (this.isStateful() && !this.stateRestored && isPlatformBrowser(this.platformId)) {
        this.restoreState();
      }
      this._value = simpleChange.value.currentValue;
      if (!this.lazy) {
        this.totalRecords = this._value ? this._value.length : 0;
        if (this.sortMode == "single" && (this.sortField || this.groupRowsBy)) this.sortSingle();
        else if (this.sortMode == "multiple" && (this.multiSortMeta || this.groupRowsBy)) this.sortMultiple();
        else if (this.hasFilter())
          this._filter();
      }
      this.tableService.onValueChange(simpleChange.value.currentValue);
    }
    if (simpleChange.columns) {
      if (!this.isStateful()) {
        this._columns = simpleChange.columns.currentValue;
        this.tableService.onColumnsChange(simpleChange.columns.currentValue);
      }
      if (this._columns && this.isStateful() && this.reorderableColumns && !this.columnOrderStateRestored) {
        this.restoreColumnOrder();
        this.tableService.onColumnsChange(this._columns);
      }
    }
    if (simpleChange.sortField) {
      this._sortField = simpleChange.sortField.currentValue;
      if (!this.lazy || this.initialized) {
        if (this.sortMode === "single") {
          this.sortSingle();
        }
      }
    }
    if (simpleChange.groupRowsBy) {
      if (!this.lazy || this.initialized) {
        if (this.sortMode === "single") {
          this.sortSingle();
        }
      }
    }
    if (simpleChange.sortOrder) {
      this._sortOrder = simpleChange.sortOrder.currentValue;
      if (!this.lazy || this.initialized) {
        if (this.sortMode === "single") {
          this.sortSingle();
        }
      }
    }
    if (simpleChange.groupRowsByOrder) {
      if (!this.lazy || this.initialized) {
        if (this.sortMode === "single") {
          this.sortSingle();
        }
      }
    }
    if (simpleChange.multiSortMeta) {
      this._multiSortMeta = simpleChange.multiSortMeta.currentValue;
      if (this.sortMode === "multiple" && (this.initialized || !this.lazy && !this.virtualScroll)) {
        this.sortMultiple();
      }
    }
    if (simpleChange.selection) {
      this._selection = simpleChange.selection.currentValue;
      if (!this.preventSelectionSetterPropagation) {
        this.updateSelectionKeys();
        this.tableService.onSelectionChange();
      }
      this.preventSelectionSetterPropagation = false;
    }
    if (simpleChange.selectAll) {
      this._selectAll = simpleChange.selectAll.currentValue;
      if (!this.preventSelectionSetterPropagation) {
        this.updateSelectionKeys();
        this.tableService.onSelectionChange();
        if (this.isStateful()) {
          this.saveState();
        }
      }
      this.preventSelectionSetterPropagation = false;
    }
  }
  get processedData() {
    return this.filteredValue || this.value || [];
  }
  _initialColWidths;
  dataToRender(data) {
    const _data = data || this.processedData;
    if (_data && this.paginator) {
      const first = this.lazy ? 0 : this.first;
      return _data.slice(first, first + this.rows);
    }
    return _data;
  }
  updateSelectionKeys() {
    if (this.dataKey && this._selection) {
      this.selectionKeys = {};
      if (Array.isArray(this._selection)) {
        for (let data of this._selection) {
          this.selectionKeys[String(ObjectUtils.resolveFieldData(data, this.dataKey))] = 1;
        }
      } else {
        this.selectionKeys[String(ObjectUtils.resolveFieldData(this._selection, this.dataKey))] = 1;
      }
    }
  }
  onPageChange(event2) {
    this.first = event2.first;
    this.rows = event2.rows;
    this.onPage.emit({
      first: this.first,
      rows: this.rows
    });
    if (this.lazy) {
      this.onLazyLoad.emit(this.createLazyLoadMetadata());
    }
    this.firstChange.emit(this.first);
    this.rowsChange.emit(this.rows);
    this.tableService.onValueChange(this.value);
    if (this.isStateful()) {
      this.saveState();
    }
    this.anchorRowIndex = null;
    if (this.scrollable) {
      this.resetScrollTop();
    }
  }
  sort(event2) {
    let originalEvent = event2.originalEvent;
    if (this.sortMode === "single") {
      this._sortOrder = this.sortField === event2.field ? this.sortOrder * -1 : this.defaultSortOrder;
      this._sortField = event2.field;
      if (this.resetPageOnSort) {
        this._first = 0;
        this.firstChange.emit(this._first);
        if (this.scrollable) {
          this.resetScrollTop();
        }
      }
      this.sortSingle();
    }
    if (this.sortMode === "multiple") {
      let metaKey = originalEvent.metaKey || originalEvent.ctrlKey;
      let sortMeta = this.getSortMeta(event2.field);
      if (sortMeta) {
        if (!metaKey) {
          this._multiSortMeta = [{
            field: event2.field,
            order: sortMeta.order * -1
          }];
          if (this.resetPageOnSort) {
            this._first = 0;
            this.firstChange.emit(this._first);
            if (this.scrollable) {
              this.resetScrollTop();
            }
          }
        } else {
          sortMeta.order = sortMeta.order * -1;
        }
      } else {
        if (!metaKey || !this.multiSortMeta) {
          this._multiSortMeta = [];
          if (this.resetPageOnSort) {
            this._first = 0;
            this.firstChange.emit(this._first);
          }
        }
        this._multiSortMeta.push({
          field: event2.field,
          order: this.defaultSortOrder
        });
      }
      this.sortMultiple();
    }
    if (this.isStateful()) {
      this.saveState();
    }
    this.anchorRowIndex = null;
  }
  sortSingle() {
    let field = this.sortField || this.groupRowsBy;
    let order = this.sortField ? this.sortOrder : this.groupRowsByOrder;
    if (this.groupRowsBy && this.sortField && this.groupRowsBy !== this.sortField) {
      this._multiSortMeta = [this.getGroupRowsMeta(), {
        field: this.sortField,
        order: this.sortOrder
      }];
      this.sortMultiple();
      return;
    }
    if (field && order) {
      if (this.restoringSort) {
        this.restoringSort = false;
      }
      if (this.lazy) {
        this.onLazyLoad.emit(this.createLazyLoadMetadata());
      } else if (this.value) {
        if (this.customSort) {
          this.sortFunction.emit({
            data: this.value,
            mode: this.sortMode,
            field,
            order
          });
        } else {
          this.value.sort((data1, data2) => {
            let value1 = ObjectUtils.resolveFieldData(data1, field);
            let value2 = ObjectUtils.resolveFieldData(data2, field);
            let result = null;
            if (value1 == null && value2 != null) result = -1;
            else if (value1 != null && value2 == null) result = 1;
            else if (value1 == null && value2 == null) result = 0;
            else if (typeof value1 === "string" && typeof value2 === "string") result = value1.localeCompare(value2);
            else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
            return order * result;
          });
          this._value = [...this.value];
        }
        if (this.hasFilter()) {
          this._filter();
        }
      }
      let sortMeta = {
        field,
        order
      };
      this.onSort.emit(sortMeta);
      this.tableService.onSort(sortMeta);
    }
  }
  sortMultiple() {
    if (this.groupRowsBy) {
      if (!this._multiSortMeta) this._multiSortMeta = [this.getGroupRowsMeta()];
      else if (this.multiSortMeta[0].field !== this.groupRowsBy) this._multiSortMeta = [this.getGroupRowsMeta(), ...this._multiSortMeta];
    }
    if (this.multiSortMeta) {
      if (this.lazy) {
        this.onLazyLoad.emit(this.createLazyLoadMetadata());
      } else if (this.value) {
        if (this.customSort) {
          this.sortFunction.emit({
            data: this.value,
            mode: this.sortMode,
            multiSortMeta: this.multiSortMeta
          });
        } else {
          this.value.sort((data1, data2) => {
            return this.multisortField(data1, data2, this.multiSortMeta, 0);
          });
          this._value = [...this.value];
        }
        if (this.hasFilter()) {
          this._filter();
        }
      }
      this.onSort.emit({
        multisortmeta: this.multiSortMeta
      });
      this.tableService.onSort(this.multiSortMeta);
    }
  }
  multisortField(data1, data2, multiSortMeta, index) {
    const value1 = ObjectUtils.resolveFieldData(data1, multiSortMeta[index].field);
    const value2 = ObjectUtils.resolveFieldData(data2, multiSortMeta[index].field);
    if (ObjectUtils.compare(value1, value2, this.filterLocale) === 0) {
      return multiSortMeta.length - 1 > index ? this.multisortField(data1, data2, multiSortMeta, index + 1) : 0;
    }
    return this.compareValuesOnSort(value1, value2, multiSortMeta[index].order);
  }
  compareValuesOnSort(value1, value2, order) {
    return ObjectUtils.sort(value1, value2, order, this.filterLocale, this.sortOrder);
  }
  getSortMeta(field) {
    if (this.multiSortMeta && this.multiSortMeta.length) {
      for (let i = 0; i < this.multiSortMeta.length; i++) {
        if (this.multiSortMeta[i].field === field) {
          return this.multiSortMeta[i];
        }
      }
    }
    return null;
  }
  isSorted(field) {
    if (this.sortMode === "single") {
      return this.sortField && this.sortField === field;
    } else if (this.sortMode === "multiple") {
      let sorted = false;
      if (this.multiSortMeta) {
        for (let i = 0; i < this.multiSortMeta.length; i++) {
          if (this.multiSortMeta[i].field == field) {
            sorted = true;
            break;
          }
        }
      }
      return sorted;
    }
  }
  handleRowClick(event2) {
    let target = event2.originalEvent.target;
    let targetNode = target.nodeName;
    let parentNode = target.parentElement && target.parentElement.nodeName;
    if (targetNode == "INPUT" || targetNode == "BUTTON" || targetNode == "A" || parentNode == "INPUT" || parentNode == "BUTTON" || parentNode == "A" || DomHandler.hasClass(event2.originalEvent.target, "p-clickable")) {
      return;
    }
    if (this.selectionMode) {
      let rowData = event2.rowData;
      let rowIndex = event2.rowIndex;
      this.preventSelectionSetterPropagation = true;
      if (this.isMultipleSelectionMode() && event2.originalEvent.shiftKey && this.anchorRowIndex != null) {
        DomHandler.clearSelection();
        if (this.rangeRowIndex != null) {
          this.clearSelectionRange(event2.originalEvent);
        }
        this.rangeRowIndex = rowIndex;
        this.selectRange(event2.originalEvent, rowIndex);
      } else {
        let selected = this.isSelected(rowData);
        if (!selected && !this.isRowSelectable(rowData, rowIndex)) {
          return;
        }
        let metaSelection = this.rowTouched ? false : this.metaKeySelection;
        let dataKeyValue = this.dataKey ? String(ObjectUtils.resolveFieldData(rowData, this.dataKey)) : null;
        this.anchorRowIndex = rowIndex;
        this.rangeRowIndex = rowIndex;
        if (metaSelection) {
          let metaKey = event2.originalEvent.metaKey || event2.originalEvent.ctrlKey;
          if (selected && metaKey) {
            if (this.isSingleSelectionMode()) {
              this._selection = null;
              this.selectionKeys = {};
              this.selectionChange.emit(null);
            } else {
              let selectionIndex = this.findIndexInSelection(rowData);
              this._selection = this.selection.filter((val, i) => i != selectionIndex);
              this.selectionChange.emit(this.selection);
              if (dataKeyValue) {
                delete this.selectionKeys[dataKeyValue];
              }
            }
            this.onRowUnselect.emit({
              originalEvent: event2.originalEvent,
              data: rowData,
              type: "row"
            });
          } else {
            if (this.isSingleSelectionMode()) {
              this._selection = rowData;
              this.selectionChange.emit(rowData);
              if (dataKeyValue) {
                this.selectionKeys = {};
                this.selectionKeys[dataKeyValue] = 1;
              }
            } else if (this.isMultipleSelectionMode()) {
              if (metaKey) {
                this._selection = this.selection || [];
              } else {
                this._selection = [];
                this.selectionKeys = {};
              }
              this._selection = [...this.selection, rowData];
              this.selectionChange.emit(this.selection);
              if (dataKeyValue) {
                this.selectionKeys[dataKeyValue] = 1;
              }
            }
            this.onRowSelect.emit({
              originalEvent: event2.originalEvent,
              data: rowData,
              type: "row",
              index: rowIndex
            });
          }
        } else {
          if (this.selectionMode === "single") {
            if (selected) {
              this._selection = null;
              this.selectionKeys = {};
              this.selectionChange.emit(this.selection);
              this.onRowUnselect.emit({
                originalEvent: event2.originalEvent,
                data: rowData,
                type: "row",
                index: rowIndex
              });
            } else {
              this._selection = rowData;
              this.selectionChange.emit(this.selection);
              this.onRowSelect.emit({
                originalEvent: event2.originalEvent,
                data: rowData,
                type: "row",
                index: rowIndex
              });
              if (dataKeyValue) {
                this.selectionKeys = {};
                this.selectionKeys[dataKeyValue] = 1;
              }
            }
          } else if (this.selectionMode === "multiple") {
            if (selected) {
              let selectionIndex = this.findIndexInSelection(rowData);
              this._selection = this.selection.filter((val, i) => i != selectionIndex);
              this.selectionChange.emit(this.selection);
              this.onRowUnselect.emit({
                originalEvent: event2.originalEvent,
                data: rowData,
                type: "row",
                index: rowIndex
              });
              if (dataKeyValue) {
                delete this.selectionKeys[dataKeyValue];
              }
            } else {
              this._selection = this.selection ? [...this.selection, rowData] : [rowData];
              this.selectionChange.emit(this.selection);
              this.onRowSelect.emit({
                originalEvent: event2.originalEvent,
                data: rowData,
                type: "row",
                index: rowIndex
              });
              if (dataKeyValue) {
                this.selectionKeys[dataKeyValue] = 1;
              }
            }
          }
        }
      }
      this.tableService.onSelectionChange();
      if (this.isStateful()) {
        this.saveState();
      }
    }
    this.rowTouched = false;
  }
  handleRowTouchEnd(event2) {
    this.rowTouched = true;
  }
  handleRowRightClick(event2) {
    if (this.contextMenu) {
      const rowData = event2.rowData;
      const rowIndex = event2.rowIndex;
      if (this.contextMenuSelectionMode === "separate") {
        this.contextMenuSelection = rowData;
        this.contextMenuSelectionChange.emit(rowData);
        this.onContextMenuSelect.emit({
          originalEvent: event2.originalEvent,
          data: rowData,
          index: event2.rowIndex
        });
        this.contextMenu.show(event2.originalEvent);
        this.tableService.onContextMenu(rowData);
      } else if (this.contextMenuSelectionMode === "joint") {
        this.preventSelectionSetterPropagation = true;
        let selected = this.isSelected(rowData);
        let dataKeyValue = this.dataKey ? String(ObjectUtils.resolveFieldData(rowData, this.dataKey)) : null;
        if (!selected) {
          if (!this.isRowSelectable(rowData, rowIndex)) {
            return;
          }
          if (this.isSingleSelectionMode()) {
            this.selection = rowData;
            this.selectionChange.emit(rowData);
            if (dataKeyValue) {
              this.selectionKeys = {};
              this.selectionKeys[dataKeyValue] = 1;
            }
          } else if (this.isMultipleSelectionMode()) {
            this._selection = this.selection ? [...this.selection, rowData] : [rowData];
            this.selectionChange.emit(this.selection);
            if (dataKeyValue) {
              this.selectionKeys[dataKeyValue] = 1;
            }
          }
        }
        this.tableService.onSelectionChange();
        this.contextMenu.show(event2.originalEvent);
        this.onContextMenuSelect.emit({
          originalEvent: event2,
          data: rowData,
          index: event2.rowIndex
        });
      }
    }
  }
  selectRange(event2, rowIndex) {
    let rangeStart, rangeEnd;
    if (this.anchorRowIndex > rowIndex) {
      rangeStart = rowIndex;
      rangeEnd = this.anchorRowIndex;
    } else if (this.anchorRowIndex < rowIndex) {
      rangeStart = this.anchorRowIndex;
      rangeEnd = rowIndex;
    } else {
      rangeStart = rowIndex;
      rangeEnd = rowIndex;
    }
    if (this.lazy && this.paginator) {
      rangeStart -= this.first;
      rangeEnd -= this.first;
    }
    let rangeRowsData = [];
    for (let i = rangeStart; i <= rangeEnd; i++) {
      let rangeRowData = this.filteredValue ? this.filteredValue[i] : this.value[i];
      if (!this.isSelected(rangeRowData)) {
        if (!this.isRowSelectable(rangeRowData, rowIndex)) {
          continue;
        }
        rangeRowsData.push(rangeRowData);
        this._selection = [...this.selection, rangeRowData];
        let dataKeyValue = this.dataKey ? String(ObjectUtils.resolveFieldData(rangeRowData, this.dataKey)) : null;
        if (dataKeyValue) {
          this.selectionKeys[dataKeyValue] = 1;
        }
      }
    }
    this.selectionChange.emit(this.selection);
    this.onRowSelect.emit({
      originalEvent: event2,
      data: rangeRowsData,
      type: "row"
    });
  }
  clearSelectionRange(event2) {
    let rangeStart, rangeEnd;
    let rangeRowIndex = this.rangeRowIndex;
    let anchorRowIndex = this.anchorRowIndex;
    if (rangeRowIndex > anchorRowIndex) {
      rangeStart = this.anchorRowIndex;
      rangeEnd = this.rangeRowIndex;
    } else if (rangeRowIndex < anchorRowIndex) {
      rangeStart = this.rangeRowIndex;
      rangeEnd = this.anchorRowIndex;
    } else {
      rangeStart = this.rangeRowIndex;
      rangeEnd = this.rangeRowIndex;
    }
    for (let i = rangeStart; i <= rangeEnd; i++) {
      let rangeRowData = this.value[i];
      let selectionIndex = this.findIndexInSelection(rangeRowData);
      this._selection = this.selection.filter((val, i2) => i2 != selectionIndex);
      let dataKeyValue = this.dataKey ? String(ObjectUtils.resolveFieldData(rangeRowData, this.dataKey)) : null;
      if (dataKeyValue) {
        delete this.selectionKeys[dataKeyValue];
      }
      this.onRowUnselect.emit({
        originalEvent: event2,
        data: rangeRowData,
        type: "row"
      });
    }
  }
  isSelected(rowData) {
    if (rowData && this.selection) {
      if (this.dataKey) {
        return this.selectionKeys[ObjectUtils.resolveFieldData(rowData, this.dataKey)] !== void 0;
      } else {
        if (Array.isArray(this.selection)) return this.findIndexInSelection(rowData) > -1;
        else return this.equals(rowData, this.selection);
      }
    }
    return false;
  }
  findIndexInSelection(rowData) {
    let index = -1;
    if (this.selection && this.selection.length) {
      for (let i = 0; i < this.selection.length; i++) {
        if (this.equals(rowData, this.selection[i])) {
          index = i;
          break;
        }
      }
    }
    return index;
  }
  isRowSelectable(data, index) {
    if (this.rowSelectable && !this.rowSelectable({
      data,
      index
    })) {
      return false;
    }
    return true;
  }
  toggleRowWithRadio(event2, rowData) {
    this.preventSelectionSetterPropagation = true;
    if (this.selection != rowData) {
      if (!this.isRowSelectable(rowData, event2.rowIndex)) {
        return;
      }
      this._selection = rowData;
      this.selectionChange.emit(this.selection);
      this.onRowSelect.emit({
        originalEvent: event2.originalEvent,
        index: event2.rowIndex,
        data: rowData,
        type: "radiobutton"
      });
      if (this.dataKey) {
        this.selectionKeys = {};
        this.selectionKeys[String(ObjectUtils.resolveFieldData(rowData, this.dataKey))] = 1;
      }
    } else {
      this._selection = null;
      this.selectionChange.emit(this.selection);
      this.onRowUnselect.emit({
        originalEvent: event2.originalEvent,
        index: event2.rowIndex,
        data: rowData,
        type: "radiobutton"
      });
    }
    this.tableService.onSelectionChange();
    if (this.isStateful()) {
      this.saveState();
    }
  }
  toggleRowWithCheckbox(event2, rowData) {
    this.selection = this.selection || [];
    let selected = this.isSelected(rowData);
    let dataKeyValue = this.dataKey ? String(ObjectUtils.resolveFieldData(rowData, this.dataKey)) : null;
    this.preventSelectionSetterPropagation = true;
    if (selected) {
      let selectionIndex = this.findIndexInSelection(rowData);
      this._selection = this.selection.filter((val, i) => i != selectionIndex);
      this.selectionChange.emit(this.selection);
      this.onRowUnselect.emit({
        originalEvent: event2.originalEvent,
        index: event2.rowIndex,
        data: rowData,
        type: "checkbox"
      });
      if (dataKeyValue) {
        delete this.selectionKeys[dataKeyValue];
      }
    } else {
      if (!this.isRowSelectable(rowData, event2.rowIndex)) {
        return;
      }
      this._selection = this.selection ? [...this.selection, rowData] : [rowData];
      this.selectionChange.emit(this.selection);
      this.onRowSelect.emit({
        originalEvent: event2.originalEvent,
        index: event2.rowIndex,
        data: rowData,
        type: "checkbox"
      });
      if (dataKeyValue) {
        this.selectionKeys[dataKeyValue] = 1;
      }
    }
    this.tableService.onSelectionChange();
    if (this.isStateful()) {
      this.saveState();
    }
  }
  toggleRowsWithCheckbox(event2, check) {
    if (this._selectAll !== null) {
      this.selectAllChange.emit({
        originalEvent: event2,
        checked: check
      });
    } else {
      const data = this.selectionPageOnly ? this.dataToRender(this.processedData) : this.processedData;
      let selection = this.selectionPageOnly && this._selection ? this._selection.filter((s) => !data.some((d) => this.equals(s, d))) : [];
      if (check) {
        selection = this.frozenValue ? [...selection, ...this.frozenValue, ...data] : [...selection, ...data];
        selection = this.rowSelectable ? selection.filter((data2, index) => this.rowSelectable({
          data: data2,
          index
        })) : selection;
      }
      this._selection = selection;
      this.preventSelectionSetterPropagation = true;
      this.updateSelectionKeys();
      this.selectionChange.emit(this._selection);
      this.tableService.onSelectionChange();
      this.onHeaderCheckboxToggle.emit({
        originalEvent: event2,
        checked: check
      });
      if (this.isStateful()) {
        this.saveState();
      }
    }
  }
  equals(data1, data2) {
    return this.compareSelectionBy === "equals" ? data1 === data2 : ObjectUtils.equals(data1, data2, this.dataKey);
  }
  /* Legacy Filtering for custom elements */
  filter(value, field, matchMode) {
    if (this.filterTimeout) {
      clearTimeout(this.filterTimeout);
    }
    if (!this.isFilterBlank(value)) {
      this.filters[field] = {
        value,
        matchMode
      };
    } else if (this.filters[field]) {
      delete this.filters[field];
    }
    this.filterTimeout = setTimeout(() => {
      this._filter();
      this.filterTimeout = null;
    }, this.filterDelay);
    this.anchorRowIndex = null;
  }
  filterGlobal(value, matchMode) {
    this.filter(value, "global", matchMode);
  }
  isFilterBlank(filter) {
    if (filter !== null && filter !== void 0) {
      if (typeof filter === "string" && filter.trim().length == 0 || Array.isArray(filter) && filter.length == 0) return true;
      else return false;
    }
    return true;
  }
  _filter() {
    if (!this.restoringFilter) {
      this.first = 0;
      this.firstChange.emit(this.first);
    }
    if (this.lazy) {
      this.onLazyLoad.emit(this.createLazyLoadMetadata());
    } else {
      if (!this.value) {
        return;
      }
      if (!this.hasFilter()) {
        this.filteredValue = null;
        if (this.paginator) {
          this.totalRecords = this.value ? this.value.length : 0;
        }
      } else {
        let globalFilterFieldsArray;
        if (this.filters["global"]) {
          if (!this.columns && !this.globalFilterFields) throw new Error("Global filtering requires dynamic columns or globalFilterFields to be defined.");
          else globalFilterFieldsArray = this.globalFilterFields || this.columns;
        }
        this.filteredValue = [];
        for (let i = 0; i < this.value.length; i++) {
          let localMatch = true;
          let globalMatch = false;
          let localFiltered = false;
          for (let prop in this.filters) {
            if (this.filters.hasOwnProperty(prop) && prop !== "global") {
              localFiltered = true;
              let filterField = prop;
              let filterMeta = this.filters[filterField];
              if (Array.isArray(filterMeta)) {
                for (let meta of filterMeta) {
                  localMatch = this.executeLocalFilter(filterField, this.value[i], meta);
                  if (meta.operator === FilterOperator.OR && localMatch || meta.operator === FilterOperator.AND && !localMatch) {
                    break;
                  }
                }
              } else {
                localMatch = this.executeLocalFilter(filterField, this.value[i], filterMeta);
              }
              if (!localMatch) {
                break;
              }
            }
          }
          if (this.filters["global"] && !globalMatch && globalFilterFieldsArray) {
            for (let j = 0; j < globalFilterFieldsArray.length; j++) {
              let globalFilterField = globalFilterFieldsArray[j].field || globalFilterFieldsArray[j];
              globalMatch = this.filterService.filters[this.filters["global"].matchMode](ObjectUtils.resolveFieldData(this.value[i], globalFilterField), this.filters["global"].value, this.filterLocale);
              if (globalMatch) {
                break;
              }
            }
          }
          let matches;
          if (this.filters["global"]) {
            matches = localFiltered ? localFiltered && localMatch && globalMatch : globalMatch;
          } else {
            matches = localFiltered && localMatch;
          }
          if (matches) {
            this.filteredValue.push(this.value[i]);
          }
        }
        if (this.filteredValue.length === this.value.length) {
          this.filteredValue = null;
        }
        if (this.paginator) {
          this.totalRecords = this.filteredValue ? this.filteredValue.length : this.value ? this.value.length : 0;
        }
      }
    }
    this.onFilter.emit({
      filters: this.filters,
      filteredValue: this.filteredValue || this.value
    });
    this.tableService.onValueChange(this.value);
    if (this.isStateful() && !this.restoringFilter) {
      this.saveState();
    }
    if (this.restoringFilter) {
      this.restoringFilter = false;
    }
    this.cd.markForCheck();
    if (this.scrollable) {
      this.resetScrollTop();
    }
  }
  executeLocalFilter(field, rowData, filterMeta) {
    let filterValue = filterMeta.value;
    let filterMatchMode = filterMeta.matchMode || FilterMatchMode.STARTS_WITH;
    let dataFieldValue = ObjectUtils.resolveFieldData(rowData, field);
    let filterConstraint = this.filterService.filters[filterMatchMode];
    return filterConstraint(dataFieldValue, filterValue, this.filterLocale);
  }
  hasFilter() {
    let empty = true;
    for (let prop in this.filters) {
      if (this.filters.hasOwnProperty(prop)) {
        empty = false;
        break;
      }
    }
    return !empty;
  }
  createLazyLoadMetadata() {
    return {
      first: this.first,
      rows: this.rows,
      sortField: this.sortField,
      sortOrder: this.sortOrder,
      filters: this.filters,
      globalFilter: this.filters && this.filters["global"] ? this.filters["global"].value : null,
      multiSortMeta: this.multiSortMeta,
      forceUpdate: () => this.cd.detectChanges()
    };
  }
  clear() {
    this._sortField = null;
    this._sortOrder = this.defaultSortOrder;
    this._multiSortMeta = null;
    this.tableService.onSort(null);
    this.clearFilterValues();
    this.filteredValue = null;
    this.first = 0;
    this.firstChange.emit(this.first);
    if (this.lazy) {
      this.onLazyLoad.emit(this.createLazyLoadMetadata());
    } else {
      this.totalRecords = this._value ? this._value.length : 0;
    }
  }
  clearFilterValues() {
    for (const [, filterMetadata] of Object.entries(this.filters)) {
      if (Array.isArray(filterMetadata)) {
        for (let filter of filterMetadata) {
          filter.value = null;
        }
      } else if (filterMetadata) {
        filterMetadata.value = null;
      }
    }
  }
  reset() {
    this.clear();
  }
  getExportHeader(column) {
    return column[this.exportHeader] || column.header || column.field;
  }
  /**
   * Data export method.
   * @param {ExportCSVOptions} object - Export options.
   * @group Method
   */
  exportCSV(options) {
    let data;
    let csv = "";
    let columns = this.columns;
    if (options && options.selectionOnly) {
      data = this.selection || [];
    } else if (options && options.allValues) {
      data = this.value || [];
    } else {
      data = this.filteredValue || this.value;
      if (this.frozenValue) {
        data = data ? [...this.frozenValue, ...data] : this.frozenValue;
      }
    }
    const exportableColumns = columns.filter((column) => column.exportable !== false && column.field);
    csv += exportableColumns.map((column) => '"' + this.getExportHeader(column) + '"').join(this.csvSeparator);
    const body = data.map((record) => exportableColumns.map((column) => {
      let cellData = ObjectUtils.resolveFieldData(record, column.field);
      if (cellData != null) {
        if (this.exportFunction) {
          cellData = this.exportFunction({
            data: cellData,
            field: column.field
          });
        } else cellData = String(cellData).replace(/"/g, '""');
      } else cellData = "";
      return '"' + cellData + '"';
    }).join(this.csvSeparator)).join("\n");
    if (body.length) {
      csv += "\n" + body;
    }
    let blob = new Blob([new Uint8Array([239, 187, 191]), csv], {
      type: "text/csv;charset=utf-8;"
    });
    let link = this.renderer.createElement("a");
    link.style.display = "none";
    this.renderer.appendChild(this.document.body, link);
    if (link.download !== void 0) {
      link.setAttribute("href", URL.createObjectURL(blob));
      link.setAttribute("download", this.exportFilename + ".csv");
      link.click();
    } else {
      csv = "data:text/csv;charset=utf-8," + csv;
      this.document.defaultView.open(encodeURI(csv));
    }
    this.renderer.removeChild(this.document.body, link);
  }
  onLazyItemLoad(event2) {
    this.onLazyLoad.emit(__spreadProps(__spreadValues(__spreadValues({}, this.createLazyLoadMetadata()), event2), {
      rows: event2.last - event2.first
    }));
  }
  /**
   * Resets scroll to top.
   * @group Method
   */
  resetScrollTop() {
    if (this.virtualScroll) this.scrollToVirtualIndex(0);
    else this.scrollTo({
      top: 0
    });
  }
  /**
   * Scrolls to given index when using virtual scroll.
   * @param {number} index - index of the element.
   * @group Method
   */
  scrollToVirtualIndex(index) {
    this.scroller && this.scroller.scrollToIndex(index);
  }
  /**
   * Scrolls to given index.
   * @param {ScrollToOptions} options - scroll options.
   * @group Method
   */
  scrollTo(options) {
    if (this.virtualScroll) {
      this.scroller?.scrollTo(options);
    } else if (this.wrapperViewChild && this.wrapperViewChild.nativeElement) {
      if (this.wrapperViewChild.nativeElement.scrollTo) {
        this.wrapperViewChild.nativeElement.scrollTo(options);
      } else {
        this.wrapperViewChild.nativeElement.scrollLeft = options.left;
        this.wrapperViewChild.nativeElement.scrollTop = options.top;
      }
    }
  }
  updateEditingCell(cell, data, field, index) {
    this.editingCell = cell;
    this.editingCellData = data;
    this.editingCellField = field;
    this.editingCellRowIndex = index;
    this.bindDocumentEditListener();
  }
  isEditingCellValid() {
    return this.editingCell && DomHandler.find(this.editingCell, ".ng-invalid.ng-dirty").length === 0;
  }
  bindDocumentEditListener() {
    if (!this.documentEditListener) {
      this.documentEditListener = this.renderer.listen(this.document, "click", (event2) => {
        if (this.editingCell && !this.selfClick && this.isEditingCellValid()) {
          DomHandler.removeClass(this.editingCell, "p-cell-editing");
          this.editingCell = null;
          this.onEditComplete.emit({
            field: this.editingCellField,
            data: this.editingCellData,
            originalEvent: event2,
            index: this.editingCellRowIndex
          });
          this.editingCellField = null;
          this.editingCellData = null;
          this.editingCellRowIndex = null;
          this.unbindDocumentEditListener();
          this.cd.markForCheck();
          if (this.overlaySubscription) {
            this.overlaySubscription.unsubscribe();
          }
        }
        this.selfClick = false;
      });
    }
  }
  unbindDocumentEditListener() {
    if (this.documentEditListener) {
      this.documentEditListener();
      this.documentEditListener = null;
    }
  }
  initRowEdit(rowData) {
    let dataKeyValue = String(ObjectUtils.resolveFieldData(rowData, this.dataKey));
    this.editingRowKeys[dataKeyValue] = true;
  }
  saveRowEdit(rowData, rowElement) {
    if (DomHandler.find(rowElement, ".ng-invalid.ng-dirty").length === 0) {
      let dataKeyValue = String(ObjectUtils.resolveFieldData(rowData, this.dataKey));
      delete this.editingRowKeys[dataKeyValue];
    }
  }
  cancelRowEdit(rowData) {
    let dataKeyValue = String(ObjectUtils.resolveFieldData(rowData, this.dataKey));
    delete this.editingRowKeys[dataKeyValue];
  }
  toggleRow(rowData, event2) {
    if (!this.dataKey && !this.groupRowsBy) {
      throw new Error("dataKey or groupRowsBy must be defined to use row expansion");
    }
    let dataKeyValue = this.groupRowsBy ? String(ObjectUtils.resolveFieldData(rowData, this.groupRowsBy)) : String(ObjectUtils.resolveFieldData(rowData, this.dataKey));
    if (this.expandedRowKeys[dataKeyValue] != null) {
      delete this.expandedRowKeys[dataKeyValue];
      this.onRowCollapse.emit({
        originalEvent: event2,
        data: rowData
      });
    } else {
      if (this.rowExpandMode === "single") {
        this.expandedRowKeys = {};
      }
      this.expandedRowKeys[dataKeyValue] = true;
      this.onRowExpand.emit({
        originalEvent: event2,
        data: rowData
      });
    }
    if (event2) {
      event2.preventDefault();
    }
    if (this.isStateful()) {
      this.saveState();
    }
  }
  isRowExpanded(rowData) {
    return this.groupRowsBy ? this.expandedRowKeys[String(ObjectUtils.resolveFieldData(rowData, this.groupRowsBy))] === true : this.expandedRowKeys[String(ObjectUtils.resolveFieldData(rowData, this.dataKey))] === true;
  }
  isRowEditing(rowData) {
    return this.editingRowKeys[String(ObjectUtils.resolveFieldData(rowData, this.dataKey))] === true;
  }
  isSingleSelectionMode() {
    return this.selectionMode === "single";
  }
  isMultipleSelectionMode() {
    return this.selectionMode === "multiple";
  }
  onColumnResizeBegin(event2) {
    let containerLeft = DomHandler.getOffset(this.containerViewChild?.nativeElement).left;
    this.resizeColumnElement = event2.target.parentElement;
    this.columnResizing = true;
    if (event2.type == "touchstart") {
      this.lastResizerHelperX = event2.changedTouches[0].clientX - containerLeft + this.containerViewChild?.nativeElement.scrollLeft;
    } else {
      this.lastResizerHelperX = event2.pageX - containerLeft + this.containerViewChild?.nativeElement.scrollLeft;
    }
    this.onColumnResize(event2);
    event2.preventDefault();
  }
  onColumnResize(event2) {
    let containerLeft = DomHandler.getOffset(this.containerViewChild?.nativeElement).left;
    DomHandler.addClass(this.containerViewChild?.nativeElement, "p-unselectable-text");
    this.resizeHelperViewChild.nativeElement.style.height = this.containerViewChild?.nativeElement.offsetHeight + "px";
    this.resizeHelperViewChild.nativeElement.style.top = "0px";
    if (event2.type == "touchmove") {
      this.resizeHelperViewChild.nativeElement.style.left = event2.changedTouches[0].clientX - containerLeft + this.containerViewChild?.nativeElement.scrollLeft + "px";
    } else {
      this.resizeHelperViewChild.nativeElement.style.left = event2.pageX - containerLeft + this.containerViewChild?.nativeElement.scrollLeft + "px";
    }
    this.resizeHelperViewChild.nativeElement.style.display = "block";
  }
  onColumnResizeEnd() {
    let delta = this.resizeHelperViewChild?.nativeElement.offsetLeft - this.lastResizerHelperX;
    let columnWidth = this.resizeColumnElement.offsetWidth;
    let newColumnWidth = columnWidth + delta;
    let minWidth = this.resizeColumnElement.style.minWidth.replace(/[^\d.]/g, "") || 15;
    if (newColumnWidth >= minWidth) {
      if (this.columnResizeMode === "fit") {
        let nextColumn = this.resizeColumnElement.nextElementSibling;
        let nextColumnWidth = nextColumn.offsetWidth - delta;
        if (newColumnWidth > 15 && nextColumnWidth > 15) {
          this.resizeTableCells(newColumnWidth, nextColumnWidth);
        }
      } else if (this.columnResizeMode === "expand") {
        this._initialColWidths = this._totalTableWidth();
        let tableWidth = this.tableViewChild?.nativeElement.offsetWidth + delta;
        this.setResizeTableWidth(tableWidth + "px");
        this.resizeTableCells(newColumnWidth, null);
      }
      this.onColResize.emit({
        element: this.resizeColumnElement,
        delta
      });
      if (this.isStateful()) {
        this.saveState();
      }
    }
    this.resizeHelperViewChild.nativeElement.style.display = "none";
    DomHandler.removeClass(this.containerViewChild?.nativeElement, "p-unselectable-text");
  }
  _totalTableWidth() {
    let widths = [];
    const tableHead = DomHandler.findSingle(this.containerViewChild.nativeElement, ".p-datatable-thead");
    let headers = DomHandler.find(tableHead, "tr > th");
    headers.forEach((header) => widths.push(DomHandler.getOuterWidth(header)));
    return widths;
  }
  onColumnDragStart(event2, columnElement) {
    this.reorderIconWidth = DomHandler.getHiddenElementOuterWidth(this.reorderIndicatorUpViewChild?.nativeElement);
    this.reorderIconHeight = DomHandler.getHiddenElementOuterHeight(this.reorderIndicatorDownViewChild?.nativeElement);
    this.draggedColumn = columnElement;
    event2.dataTransfer.setData("text", "b");
  }
  onColumnDragEnter(event2, dropHeader) {
    if (this.reorderableColumns && this.draggedColumn && dropHeader) {
      event2.preventDefault();
      let containerOffset = DomHandler.getOffset(this.containerViewChild?.nativeElement);
      let dropHeaderOffset = DomHandler.getOffset(dropHeader);
      if (this.draggedColumn != dropHeader) {
        let dragIndex = DomHandler.indexWithinGroup(this.draggedColumn, "preorderablecolumn");
        let dropIndex = DomHandler.indexWithinGroup(dropHeader, "preorderablecolumn");
        let targetLeft = dropHeaderOffset.left - containerOffset.left;
        let targetTop = containerOffset.top - dropHeaderOffset.top;
        let columnCenter = dropHeaderOffset.left + dropHeader.offsetWidth / 2;
        this.reorderIndicatorUpViewChild.nativeElement.style.top = dropHeaderOffset.top - containerOffset.top - (this.reorderIconHeight - 1) + "px";
        this.reorderIndicatorDownViewChild.nativeElement.style.top = dropHeaderOffset.top - containerOffset.top + dropHeader.offsetHeight + "px";
        if (event2.pageX > columnCenter) {
          this.reorderIndicatorUpViewChild.nativeElement.style.left = targetLeft + dropHeader.offsetWidth - Math.ceil(this.reorderIconWidth / 2) + "px";
          this.reorderIndicatorDownViewChild.nativeElement.style.left = targetLeft + dropHeader.offsetWidth - Math.ceil(this.reorderIconWidth / 2) + "px";
          this.dropPosition = 1;
        } else {
          this.reorderIndicatorUpViewChild.nativeElement.style.left = targetLeft - Math.ceil(this.reorderIconWidth / 2) + "px";
          this.reorderIndicatorDownViewChild.nativeElement.style.left = targetLeft - Math.ceil(this.reorderIconWidth / 2) + "px";
          this.dropPosition = -1;
        }
        this.reorderIndicatorUpViewChild.nativeElement.style.display = "block";
        this.reorderIndicatorDownViewChild.nativeElement.style.display = "block";
      } else {
        event2.dataTransfer.dropEffect = "none";
      }
    }
  }
  onColumnDragLeave(event2) {
    if (this.reorderableColumns && this.draggedColumn) {
      event2.preventDefault();
    }
  }
  onColumnDrop(event2, dropColumn) {
    event2.preventDefault();
    if (this.draggedColumn) {
      let dragIndex = DomHandler.indexWithinGroup(this.draggedColumn, "preorderablecolumn");
      let dropIndex = DomHandler.indexWithinGroup(dropColumn, "preorderablecolumn");
      let allowDrop = dragIndex != dropIndex;
      if (allowDrop && (dropIndex - dragIndex == 1 && this.dropPosition === -1 || dragIndex - dropIndex == 1 && this.dropPosition === 1)) {
        allowDrop = false;
      }
      if (allowDrop && dropIndex < dragIndex && this.dropPosition === 1) {
        dropIndex = dropIndex + 1;
      }
      if (allowDrop && dropIndex > dragIndex && this.dropPosition === -1) {
        dropIndex = dropIndex - 1;
      }
      if (allowDrop) {
        ObjectUtils.reorderArray(this.columns, dragIndex, dropIndex);
        this.onColReorder.emit({
          dragIndex,
          dropIndex,
          columns: this.columns
        });
        if (this.isStateful()) {
          this.zone.runOutsideAngular(() => {
            setTimeout(() => {
              this.saveState();
            });
          });
        }
      }
      if (this.resizableColumns && this.resizeColumnElement) {
        let width = this.columnResizeMode === "expand" ? this._initialColWidths : this._totalTableWidth();
        ObjectUtils.reorderArray(width, dragIndex + 1, dropIndex + 1);
        this.updateStyleElement(width, dragIndex, null, null);
      }
      this.reorderIndicatorUpViewChild.nativeElement.style.display = "none";
      this.reorderIndicatorDownViewChild.nativeElement.style.display = "none";
      this.draggedColumn.draggable = false;
      this.draggedColumn = null;
      this.dropPosition = null;
    }
  }
  resizeTableCells(newColumnWidth, nextColumnWidth) {
    let colIndex = DomHandler.index(this.resizeColumnElement);
    let width = this.columnResizeMode === "expand" ? this._initialColWidths : this._totalTableWidth();
    this.updateStyleElement(width, colIndex, newColumnWidth, nextColumnWidth);
  }
  updateStyleElement(width, colIndex, newColumnWidth, nextColumnWidth) {
    this.destroyStyleElement();
    this.createStyleElement();
    let innerHTML = "";
    width.forEach((width2, index) => {
      let colWidth = index === colIndex ? newColumnWidth : nextColumnWidth && index === colIndex + 1 ? nextColumnWidth : width2;
      let style2 = `width: ${colWidth}px !important; max-width: ${colWidth}px !important;`;
      innerHTML += `
                #${this.id}-table > .p-datatable-thead > tr > th:nth-child(${index + 1}),
                #${this.id}-table > .p-datatable-tbody > tr > td:nth-child(${index + 1}),
                #${this.id}-table > .p-datatable-tfoot > tr > td:nth-child(${index + 1}) {
                    ${style2}
                }
            `;
    });
    this.renderer.setProperty(this.styleElement, "innerHTML", innerHTML);
  }
  onRowDragStart(event2, index) {
    this.rowDragging = true;
    this.draggedRowIndex = index;
    event2.dataTransfer.setData("text", "b");
  }
  onRowDragOver(event2, index, rowElement) {
    if (this.rowDragging && this.draggedRowIndex !== index) {
      let rowY = DomHandler.getOffset(rowElement).top;
      let pageY = event2.pageY;
      let rowMidY = rowY + DomHandler.getOuterHeight(rowElement) / 2;
      let prevRowElement = rowElement.previousElementSibling;
      if (pageY < rowMidY) {
        DomHandler.removeClass(rowElement, "p-datatable-dragpoint-bottom");
        this.droppedRowIndex = index;
        if (prevRowElement) DomHandler.addClass(prevRowElement, "p-datatable-dragpoint-bottom");
        else DomHandler.addClass(rowElement, "p-datatable-dragpoint-top");
      } else {
        if (prevRowElement) DomHandler.removeClass(prevRowElement, "p-datatable-dragpoint-bottom");
        else DomHandler.addClass(rowElement, "p-datatable-dragpoint-top");
        this.droppedRowIndex = index + 1;
        DomHandler.addClass(rowElement, "p-datatable-dragpoint-bottom");
      }
    }
  }
  onRowDragLeave(event2, rowElement) {
    let prevRowElement = rowElement.previousElementSibling;
    if (prevRowElement) {
      DomHandler.removeClass(prevRowElement, "p-datatable-dragpoint-bottom");
    }
    DomHandler.removeClass(rowElement, "p-datatable-dragpoint-bottom");
    DomHandler.removeClass(rowElement, "p-datatable-dragpoint-top");
  }
  onRowDragEnd(event2) {
    this.rowDragging = false;
    this.draggedRowIndex = null;
    this.droppedRowIndex = null;
  }
  onRowDrop(event2, rowElement) {
    if (this.droppedRowIndex != null) {
      let dropIndex = this.draggedRowIndex > this.droppedRowIndex ? this.droppedRowIndex : this.droppedRowIndex === 0 ? 0 : this.droppedRowIndex - 1;
      ObjectUtils.reorderArray(this.value, this.draggedRowIndex, dropIndex);
      if (this.virtualScroll) {
        this._value = [...this._value];
      }
      this.onRowReorder.emit({
        dragIndex: this.draggedRowIndex,
        dropIndex
      });
    }
    this.onRowDragLeave(event2, rowElement);
    this.onRowDragEnd(event2);
  }
  isEmpty() {
    let data = this.filteredValue || this.value;
    return data == null || data.length == 0;
  }
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  getStorage() {
    if (isPlatformBrowser(this.platformId)) {
      switch (this.stateStorage) {
        case "local":
          return window.localStorage;
        case "session":
          return window.sessionStorage;
        default:
          throw new Error(this.stateStorage + ' is not a valid value for the state storage, supported values are "local" and "session".');
      }
    } else {
      throw new Error("Browser storage is not available in the server side.");
    }
  }
  isStateful() {
    return this.stateKey != null;
  }
  saveState() {
    const storage = this.getStorage();
    let state2 = {};
    if (this.paginator) {
      state2.first = this.first;
      state2.rows = this.rows;
    }
    if (this.sortField) {
      state2.sortField = this.sortField;
      state2.sortOrder = this.sortOrder;
    }
    if (this.multiSortMeta) {
      state2.multiSortMeta = this.multiSortMeta;
    }
    if (this.hasFilter()) {
      state2.filters = this.filters;
    }
    if (this.resizableColumns) {
      this.saveColumnWidths(state2);
    }
    if (this.reorderableColumns) {
      this.saveColumnOrder(state2);
    }
    if (this.selection) {
      state2.selection = this.selection;
    }
    if (Object.keys(this.expandedRowKeys).length) {
      state2.expandedRowKeys = this.expandedRowKeys;
    }
    storage.setItem(this.stateKey, JSON.stringify(state2));
    this.onStateSave.emit(state2);
  }
  clearState() {
    const storage = this.getStorage();
    if (this.stateKey) {
      storage.removeItem(this.stateKey);
    }
  }
  restoreState() {
    const storage = this.getStorage();
    const stateString = storage.getItem(this.stateKey);
    const dateFormat = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/;
    const reviver = function(key, value) {
      if (typeof value === "string" && dateFormat.test(value)) {
        return new Date(value);
      }
      return value;
    };
    if (stateString) {
      let state2 = JSON.parse(stateString, reviver);
      if (this.paginator) {
        if (this.first !== void 0) {
          this.first = state2.first;
          this.firstChange.emit(this.first);
        }
        if (this.rows !== void 0) {
          this.rows = state2.rows;
          this.rowsChange.emit(this.rows);
        }
      }
      if (state2.sortField) {
        this.restoringSort = true;
        this._sortField = state2.sortField;
        this._sortOrder = state2.sortOrder;
      }
      if (state2.multiSortMeta) {
        this.restoringSort = true;
        this._multiSortMeta = state2.multiSortMeta;
      }
      if (state2.filters) {
        this.restoringFilter = true;
        this.filters = state2.filters;
      }
      if (this.resizableColumns) {
        this.columnWidthsState = state2.columnWidths;
        this.tableWidthState = state2.tableWidth;
      }
      if (state2.expandedRowKeys) {
        this.expandedRowKeys = state2.expandedRowKeys;
      }
      if (state2.selection) {
        Promise.resolve(null).then(() => this.selectionChange.emit(state2.selection));
      }
      this.stateRestored = true;
      this.onStateRestore.emit(state2);
    }
  }
  saveColumnWidths(state2) {
    let widths = [];
    let headers = DomHandler.find(this.containerViewChild?.nativeElement, ".p-datatable-thead > tr > th");
    headers.forEach((header) => widths.push(DomHandler.getOuterWidth(header)));
    state2.columnWidths = widths.join(",");
    if (this.columnResizeMode === "expand") {
      state2.tableWidth = DomHandler.getOuterWidth(this.tableViewChild?.nativeElement);
    }
  }
  setResizeTableWidth(width) {
    this.tableViewChild.nativeElement.style.width = width;
    this.tableViewChild.nativeElement.style.minWidth = width;
  }
  restoreColumnWidths() {
    if (this.columnWidthsState) {
      let widths = this.columnWidthsState.split(",");
      if (this.columnResizeMode === "expand" && this.tableWidthState) {
        this.setResizeTableWidth(this.tableWidthState + "px");
      }
      if (ObjectUtils.isNotEmpty(widths)) {
        this.createStyleElement();
        let innerHTML = "";
        widths.forEach((width, index) => {
          let style2 = `width: ${width}px !important; max-width: ${width}px !important`;
          innerHTML += `
                        #${this.id}-table > .p-datatable-thead > tr > th:nth-child(${index + 1}),
                        #${this.id}-table > .p-datatable-tbody > tr > td:nth-child(${index + 1}),
                        #${this.id}-table > .p-datatable-tfoot > tr > td:nth-child(${index + 1}) {
                            ${style2}
                        }
                    `;
        });
        this.styleElement.innerHTML = innerHTML;
      }
    }
  }
  saveColumnOrder(state2) {
    if (this.columns) {
      let columnOrder = [];
      this.columns.map((column) => {
        columnOrder.push(column.field || column.key);
      });
      state2.columnOrder = columnOrder;
    }
  }
  restoreColumnOrder() {
    const storage = this.getStorage();
    const stateString = storage.getItem(this.stateKey);
    if (stateString) {
      let state2 = JSON.parse(stateString);
      let columnOrder = state2.columnOrder;
      if (columnOrder) {
        let reorderedColumns = [];
        columnOrder.map((key) => {
          let col = this.findColumnByKey(key);
          if (col) {
            reorderedColumns.push(col);
          }
        });
        this.columnOrderStateRestored = true;
        this.columns = reorderedColumns;
      }
    }
  }
  findColumnByKey(key) {
    if (this.columns) {
      for (let col of this.columns) {
        if (col.key === key || col.field === key) return col;
        else continue;
      }
    } else {
      return null;
    }
  }
  createStyleElement() {
    this.styleElement = this.renderer.createElement("style");
    this.styleElement.type = "text/css";
    this.renderer.appendChild(this.document.head, this.styleElement);
    DomHandler.setAttribute(this.styleElement, "nonce", this.config?.csp()?.nonce);
  }
  getGroupRowsMeta() {
    return {
      field: this.groupRowsBy,
      order: this.groupRowsByOrder
    };
  }
  createResponsiveStyle() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.responsiveStyleElement) {
        this.responsiveStyleElement = this.renderer.createElement("style");
        this.responsiveStyleElement.type = "text/css";
        this.renderer.appendChild(this.document.head, this.responsiveStyleElement);
        let innerHTML = `
    @media screen and (max-width: ${this.breakpoint}) {
        #${this.id}-table > .p-datatable-thead > tr > th,
        #${this.id}-table > .p-datatable-tfoot > tr > td {
            display: none !important;
        }

        #${this.id}-table > .p-datatable-tbody > tr > td {
            display: flex;
            width: 100% !important;
            align-items: center;
            justify-content: space-between;
        }

        #${this.id}-table > .p-datatable-tbody > tr > td:not(:last-child) {
            border: 0 none;
        }

        #${this.id}.p-datatable-gridlines > .p-datatable-table-container > .p-datatable-table > .p-datatable-tbody > tr > td:last-child {
            border-top: 0;
            border-right: 0;
            border-left: 0;
        }

        #${this.id}-table > .p-datatable-tbody > tr > td > .p-datatable-column-title {
            display: block;
        }
    }
    `;
        this.renderer.setProperty(this.responsiveStyleElement, "innerHTML", innerHTML);
        DomHandler.setAttribute(this.responsiveStyleElement, "nonce", this.config?.csp()?.nonce);
      }
    }
  }
  destroyResponsiveStyle() {
    if (this.responsiveStyleElement) {
      this.renderer.removeChild(this.document.head, this.responsiveStyleElement);
      this.responsiveStyleElement = null;
    }
  }
  destroyStyleElement() {
    if (this.styleElement) {
      this.renderer.removeChild(this.document.head, this.styleElement);
      this.styleElement = null;
    }
  }
  ngOnDestroy() {
    this.unbindDocumentEditListener();
    this.editingCell = null;
    this.initialized = null;
    this.destroyStyleElement();
    this.destroyResponsiveStyle();
    super.ngOnDestroy();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Table_BaseFactory;
    return function Table_Factory(__ngFactoryType__) {
      return (\u0275Table_BaseFactory || (\u0275Table_BaseFactory = \u0275\u0275getInheritedFactory(_Table)))(__ngFactoryType__ || _Table);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Table,
    selectors: [["p-table"]],
    contentQueries: function Table_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c05, 4);
        \u0275\u0275contentQuery(dirIndex, _c113, 4);
        \u0275\u0275contentQuery(dirIndex, _c28, 4);
        \u0275\u0275contentQuery(dirIndex, _c34, 4);
        \u0275\u0275contentQuery(dirIndex, _c43, 4);
        \u0275\u0275contentQuery(dirIndex, _c53, 4);
        \u0275\u0275contentQuery(dirIndex, _c63, 4);
        \u0275\u0275contentQuery(dirIndex, _c73, 4);
        \u0275\u0275contentQuery(dirIndex, _c82, 4);
        \u0275\u0275contentQuery(dirIndex, _c92, 4);
        \u0275\u0275contentQuery(dirIndex, _c102, 4);
        \u0275\u0275contentQuery(dirIndex, _c114, 4);
        \u0275\u0275contentQuery(dirIndex, _c122, 4);
        \u0275\u0275contentQuery(dirIndex, _c132, 4);
        \u0275\u0275contentQuery(dirIndex, _c142, 4);
        \u0275\u0275contentQuery(dirIndex, _c152, 4);
        \u0275\u0275contentQuery(dirIndex, _c162, 4);
        \u0275\u0275contentQuery(dirIndex, _c172, 4);
        \u0275\u0275contentQuery(dirIndex, _c182, 4);
        \u0275\u0275contentQuery(dirIndex, _c192, 4);
        \u0275\u0275contentQuery(dirIndex, _c202, 4);
        \u0275\u0275contentQuery(dirIndex, _c212, 4);
        \u0275\u0275contentQuery(dirIndex, _c222, 4);
        \u0275\u0275contentQuery(dirIndex, _c232, 4);
        \u0275\u0275contentQuery(dirIndex, _c242, 4);
        \u0275\u0275contentQuery(dirIndex, _c252, 4);
        \u0275\u0275contentQuery(dirIndex, _c262, 4);
        \u0275\u0275contentQuery(dirIndex, _c272, 4);
        \u0275\u0275contentQuery(dirIndex, _c282, 4);
        \u0275\u0275contentQuery(dirIndex, _c29, 4);
        \u0275\u0275contentQuery(dirIndex, _c30, 4);
        \u0275\u0275contentQuery(dirIndex, _c31, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._headerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._headerGroupedTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._bodyTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._loadingBodyTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._captionTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._footerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._footerGroupedTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._summaryTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._colGroupTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._expandedRowTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._groupHeaderTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._groupFooterTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._frozenExpandedRowTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._frozenHeaderTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._frozenBodyTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._frozenFooterTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._frozenColGroupTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._emptyMessageTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._paginatorLeftTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._paginatorRightTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._paginatorDropdownItemTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._loadingIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._reorderIndicatorUpIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._reorderIndicatorDownIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._sortIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._checkboxIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._headerCheckboxIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._paginatorDropdownIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._paginatorFirstPageLinkIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._paginatorLastPageLinkIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._paginatorPreviousPageLinkIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._paginatorNextPageLinkIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._templates = _t);
      }
    },
    viewQuery: function Table_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c322, 5);
        \u0275\u0275viewQuery(_c332, 5);
        \u0275\u0275viewQuery(_c342, 5);
        \u0275\u0275viewQuery(_c35, 5);
        \u0275\u0275viewQuery(_c36, 5);
        \u0275\u0275viewQuery(_c37, 5);
        \u0275\u0275viewQuery(_c38, 5);
        \u0275\u0275viewQuery(_c39, 5);
        \u0275\u0275viewQuery(_c40, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.containerViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.resizeHelperViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.reorderIndicatorUpViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.reorderIndicatorDownViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.wrapperViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.tableViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.tableHeaderViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.tableFooterViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.scroller = _t.first);
      }
    },
    inputs: {
      frozenColumns: "frozenColumns",
      frozenValue: "frozenValue",
      style: "style",
      styleClass: "styleClass",
      tableStyle: "tableStyle",
      tableStyleClass: "tableStyleClass",
      paginator: [2, "paginator", "paginator", booleanAttribute],
      pageLinks: [2, "pageLinks", "pageLinks", numberAttribute],
      rowsPerPageOptions: "rowsPerPageOptions",
      alwaysShowPaginator: [2, "alwaysShowPaginator", "alwaysShowPaginator", booleanAttribute],
      paginatorPosition: "paginatorPosition",
      paginatorStyleClass: "paginatorStyleClass",
      paginatorDropdownAppendTo: "paginatorDropdownAppendTo",
      paginatorDropdownScrollHeight: "paginatorDropdownScrollHeight",
      currentPageReportTemplate: "currentPageReportTemplate",
      showCurrentPageReport: [2, "showCurrentPageReport", "showCurrentPageReport", booleanAttribute],
      showJumpToPageDropdown: [2, "showJumpToPageDropdown", "showJumpToPageDropdown", booleanAttribute],
      showJumpToPageInput: [2, "showJumpToPageInput", "showJumpToPageInput", booleanAttribute],
      showFirstLastIcon: [2, "showFirstLastIcon", "showFirstLastIcon", booleanAttribute],
      showPageLinks: [2, "showPageLinks", "showPageLinks", booleanAttribute],
      defaultSortOrder: [2, "defaultSortOrder", "defaultSortOrder", numberAttribute],
      sortMode: "sortMode",
      resetPageOnSort: [2, "resetPageOnSort", "resetPageOnSort", booleanAttribute],
      selectionMode: "selectionMode",
      selectionPageOnly: [2, "selectionPageOnly", "selectionPageOnly", booleanAttribute],
      contextMenuSelection: "contextMenuSelection",
      contextMenuSelectionMode: "contextMenuSelectionMode",
      dataKey: "dataKey",
      metaKeySelection: [2, "metaKeySelection", "metaKeySelection", booleanAttribute],
      rowSelectable: "rowSelectable",
      rowTrackBy: "rowTrackBy",
      lazy: [2, "lazy", "lazy", booleanAttribute],
      lazyLoadOnInit: [2, "lazyLoadOnInit", "lazyLoadOnInit", booleanAttribute],
      compareSelectionBy: "compareSelectionBy",
      csvSeparator: "csvSeparator",
      exportFilename: "exportFilename",
      filters: "filters",
      globalFilterFields: "globalFilterFields",
      filterDelay: [2, "filterDelay", "filterDelay", numberAttribute],
      filterLocale: "filterLocale",
      expandedRowKeys: "expandedRowKeys",
      editingRowKeys: "editingRowKeys",
      rowExpandMode: "rowExpandMode",
      scrollable: [2, "scrollable", "scrollable", booleanAttribute],
      scrollDirection: "scrollDirection",
      rowGroupMode: "rowGroupMode",
      scrollHeight: "scrollHeight",
      virtualScroll: [2, "virtualScroll", "virtualScroll", booleanAttribute],
      virtualScrollItemSize: [2, "virtualScrollItemSize", "virtualScrollItemSize", numberAttribute],
      virtualScrollOptions: "virtualScrollOptions",
      virtualScrollDelay: [2, "virtualScrollDelay", "virtualScrollDelay", numberAttribute],
      frozenWidth: "frozenWidth",
      responsive: "responsive",
      contextMenu: "contextMenu",
      resizableColumns: [2, "resizableColumns", "resizableColumns", booleanAttribute],
      columnResizeMode: "columnResizeMode",
      reorderableColumns: [2, "reorderableColumns", "reorderableColumns", booleanAttribute],
      loading: [2, "loading", "loading", booleanAttribute],
      loadingIcon: "loadingIcon",
      showLoader: [2, "showLoader", "showLoader", booleanAttribute],
      rowHover: [2, "rowHover", "rowHover", booleanAttribute],
      customSort: [2, "customSort", "customSort", booleanAttribute],
      showInitialSortBadge: [2, "showInitialSortBadge", "showInitialSortBadge", booleanAttribute],
      autoLayout: [2, "autoLayout", "autoLayout", booleanAttribute],
      exportFunction: "exportFunction",
      exportHeader: "exportHeader",
      stateKey: "stateKey",
      stateStorage: "stateStorage",
      editMode: "editMode",
      groupRowsBy: "groupRowsBy",
      size: "size",
      showGridlines: [2, "showGridlines", "showGridlines", booleanAttribute],
      stripedRows: [2, "stripedRows", "stripedRows", booleanAttribute],
      groupRowsByOrder: [2, "groupRowsByOrder", "groupRowsByOrder", numberAttribute],
      responsiveLayout: "responsiveLayout",
      breakpoint: "breakpoint",
      paginatorLocale: "paginatorLocale",
      value: "value",
      columns: "columns",
      first: "first",
      rows: "rows",
      totalRecords: "totalRecords",
      sortField: "sortField",
      sortOrder: "sortOrder",
      multiSortMeta: "multiSortMeta",
      selection: "selection",
      virtualRowHeight: "virtualRowHeight",
      selectAll: "selectAll"
    },
    outputs: {
      contextMenuSelectionChange: "contextMenuSelectionChange",
      selectAllChange: "selectAllChange",
      selectionChange: "selectionChange",
      onRowSelect: "onRowSelect",
      onRowUnselect: "onRowUnselect",
      onPage: "onPage",
      onSort: "onSort",
      onFilter: "onFilter",
      onLazyLoad: "onLazyLoad",
      onRowExpand: "onRowExpand",
      onRowCollapse: "onRowCollapse",
      onContextMenuSelect: "onContextMenuSelect",
      onColResize: "onColResize",
      onColReorder: "onColReorder",
      onRowReorder: "onRowReorder",
      onEditInit: "onEditInit",
      onEditComplete: "onEditComplete",
      onEditCancel: "onEditCancel",
      onHeaderCheckboxToggle: "onHeaderCheckboxToggle",
      sortFunction: "sortFunction",
      firstChange: "firstChange",
      rowsChange: "rowsChange",
      onStateSave: "onStateSave",
      onStateRestore: "onStateRestore"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([TableService, TableStyle]), \u0275\u0275InputTransformsFeature, \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature],
    decls: 16,
    vars: 17,
    consts: [["container", ""], ["wrapper", ""], ["buildInTable", ""], ["scroller", ""], ["content", ""], ["table", ""], ["thead", ""], ["tfoot", ""], ["resizeHelper", ""], ["reorderIndicatorUp", ""], ["reorderIndicatorDown", ""], [3, "ngStyle", "ngClass"], [3, "ngClass", 4, "ngIf"], [3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "templateLeft", "templateRight", "dropdownAppendTo", "dropdownScrollHeight", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showJumpToPageInput", "showPageLinks", "styleClass", "locale", "onPageChange", 4, "ngIf"], [3, "ngClass", "ngStyle"], [3, "items", "columns", "style", "scrollHeight", "itemSize", "step", "delay", "inline", "lazy", "loaderDisabled", "showSpacer", "showLoader", "options", "autoSize", "onLazyLoad", 4, "ngIf"], [4, "ngIf"], ["style", "display:none", 3, "ngClass", 4, "ngIf"], ["style", "display: none;", 3, "ngClass", 4, "ngIf"], [3, "ngClass"], [3, "class", 4, "ngIf"], [3, "spin", "styleClass", 4, "ngIf"], [3, "spin", "styleClass"], [4, "ngTemplateOutlet"], [3, "onPageChange", "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "templateLeft", "templateRight", "dropdownAppendTo", "dropdownScrollHeight", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showJumpToPageInput", "showPageLinks", "styleClass", "locale"], ["pTemplate", "dropdownicon"], ["pTemplate", "firstpagelinkicon"], ["pTemplate", "previouspagelinkicon"], ["pTemplate", "lastpagelinkicon"], ["pTemplate", "nextpagelinkicon"], [3, "onLazyLoad", "items", "columns", "scrollHeight", "itemSize", "step", "delay", "inline", "lazy", "loaderDisabled", "showSpacer", "showLoader", "options", "autoSize"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "table", 3, "ngClass"], ["role", "rowgroup", 3, "ngClass", "ngStyle"], ["role", "rowgroup", 3, "ngClass", "value", "frozenRows", "pTableBody", "pTableBodyTemplate", "frozen", 4, "ngIf"], ["role", "rowgroup", 3, "ngClass", "value", "pTableBody", "pTableBodyTemplate", "scrollerOptions"], ["role", "rowgroup", 3, "style", "ngClass", 4, "ngIf"], ["role", "rowgroup", 3, "ngClass", 4, "ngIf"], ["role", "rowgroup", 3, "ngClass", "value", "frozenRows", "pTableBody", "pTableBodyTemplate", "frozen"], ["role", "rowgroup", 3, "ngClass"], [2, "display", "none", 3, "ngClass"]],
    template: function Table_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 11, 0);
        \u0275\u0275template(2, Table_div_2_Template, 3, 3, "div", 12)(3, Table_div_3_Template, 2, 2, "div", 12)(4, Table_p_paginator_4_Template, 6, 24, "p-paginator", 13);
        \u0275\u0275elementStart(5, "div", 14, 1);
        \u0275\u0275template(7, Table_p_scroller_7_Template, 4, 17, "p-scroller", 15)(8, Table_ng_container_8_Template, 2, 7, "ng-container", 16)(9, Table_ng_template_9_Template, 10, 26, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
        \u0275\u0275template(11, Table_p_paginator_11_Template, 6, 24, "p-paginator", 13)(12, Table_div_12_Template, 2, 2, "div", 12)(13, Table_div_13_Template, 2, 1, "div", 17)(14, Table_span_14_Template, 4, 3, "span", 18)(15, Table_span_15_Template, 4, 3, "span", 18);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.styleClass);
        \u0275\u0275property("ngStyle", ctx.style)("ngClass", ctx.cx("root"));
        \u0275\u0275attribute("id", ctx.id);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.loading && ctx.showLoader);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.captionTemplate || ctx._captionTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.paginator && (ctx.paginatorPosition === "top" || ctx.paginatorPosition == "both"));
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", ctx.cx("tableContainer"))("ngStyle", ctx.sx("tableContainer"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.virtualScroll);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.virtualScroll);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.paginator && (ctx.paginatorPosition === "bottom" || ctx.paginatorPosition == "both"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.summaryTemplate || ctx._summaryTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.resizableColumns);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.reorderableColumns);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.reorderableColumns);
      }
    },
    dependencies: () => [NgClass, NgIf, NgTemplateOutlet, NgStyle, Paginator, PrimeTemplate, Scroller, ArrowDownIcon, ArrowUpIcon, SpinnerIcon, TableBody],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Table, [{
    type: Component,
    args: [{
      selector: "p-table",
      standalone: false,
      template: `
        <div #container [ngStyle]="style" [class]="styleClass" [ngClass]="cx('root')" [attr.id]="id">
            <div [ngClass]="cx('mask')" *ngIf="loading && showLoader">
                <i *ngIf="loadingIcon" [class]="'p-datatable-loading-icon ' + loadingIcon"></i>
                <ng-container *ngIf="!loadingIcon">
                    <SpinnerIcon *ngIf="!loadingIconTemplate && !_loadingIconTemplate" [spin]="true" [styleClass]="cx('loadingIcon')" />
                    <span *ngIf="loadingIconTemplate || _loadingIconTemplate" [ngClass]="cx('loadingIcon')">
                        <ng-template *ngTemplateOutlet="loadingIconTemplate || _loadingIconTemplate"></ng-template>
                    </span>
                </ng-container>
            </div>
            <div *ngIf="captionTemplate || _captionTemplate" [ngClass]="cx('header')">
                <ng-container *ngTemplateOutlet="captionTemplate || _captionTemplate"></ng-container>
            </div>
            <p-paginator
                [rows]="rows"
                [first]="first"
                [totalRecords]="totalRecords"
                [pageLinkSize]="pageLinks"
                [alwaysShow]="alwaysShowPaginator"
                (onPageChange)="onPageChange($event)"
                [rowsPerPageOptions]="rowsPerPageOptions"
                *ngIf="paginator && (paginatorPosition === 'top' || paginatorPosition == 'both')"
                [templateLeft]="paginatorLeftTemplate"
                [templateRight]="paginatorRightTemplate"
                [dropdownAppendTo]="paginatorDropdownAppendTo"
                [dropdownScrollHeight]="paginatorDropdownScrollHeight"
                [currentPageReportTemplate]="currentPageReportTemplate"
                [showFirstLastIcon]="showFirstLastIcon"
                [dropdownItemTemplate]="paginatorDropdownItemTemplate || _paginatorDropdownItemTemplate"
                [showCurrentPageReport]="showCurrentPageReport"
                [showJumpToPageDropdown]="showJumpToPageDropdown"
                [showJumpToPageInput]="showJumpToPageInput"
                [showPageLinks]="showPageLinks"
                [styleClass]="cx('pcPaginator') + ' ' + paginatorStyleClass && paginatorStyleClass"
                [locale]="paginatorLocale"
            >
                <ng-template pTemplate="dropdownicon" *ngIf="paginatorDropdownIconTemplate || _paginatorDropdownIconTemplate">
                    <ng-container *ngTemplateOutlet="paginatorDropdownIconTemplate || _paginatorDropdownIconTemplate"></ng-container>
                </ng-template>

                <ng-template pTemplate="firstpagelinkicon" *ngIf="paginatorFirstPageLinkIconTemplate || _paginatorFirstPageLinkIconTemplate">
                    <ng-container *ngTemplateOutlet="paginatorFirstPageLinkIconTemplate || _paginatorFirstPageLinkIconTemplate"></ng-container>
                </ng-template>

                <ng-template pTemplate="previouspagelinkicon" *ngIf="paginatorPreviousPageLinkIconTemplate || _paginatorPreviousPageLinkIconTemplate">
                    <ng-container *ngTemplateOutlet="paginatorPreviousPageLinkIconTemplate || _paginatorPreviousPageLinkIconTemplate"></ng-container>
                </ng-template>

                <ng-template pTemplate="lastpagelinkicon" *ngIf="paginatorLastPageLinkIconTemplate || _paginatorLastPageLinkIconTemplate">
                    <ng-container *ngTemplateOutlet="paginatorLastPageLinkIconTemplate || _paginatorLastPageLinkIconTemplate"></ng-container>
                </ng-template>

                <ng-template pTemplate="nextpagelinkicon" *ngIf="paginatorNextPageLinkIconTemplate || _paginatorNextPageLinkIconTemplate">
                    <ng-container *ngTemplateOutlet="paginatorNextPageLinkIconTemplate || _paginatorNextPageLinkIconTemplate"></ng-container>
                </ng-template>
            </p-paginator>

            <div #wrapper [ngClass]="cx('tableContainer')" [ngStyle]="sx('tableContainer')">
                <p-scroller
                    #scroller
                    *ngIf="virtualScroll"
                    [items]="processedData"
                    [columns]="columns"
                    [style]="{
                        height: scrollHeight !== 'flex' ? scrollHeight : undefined
                    }"
                    [scrollHeight]="scrollHeight !== 'flex' ? undefined : '100%'"
                    [itemSize]="virtualScrollItemSize || _virtualRowHeight"
                    [step]="rows"
                    [delay]="lazy ? virtualScrollDelay : 0"
                    [inline]="true"
                    [lazy]="lazy"
                    (onLazyLoad)="onLazyItemLoad($event)"
                    [loaderDisabled]="true"
                    [showSpacer]="false"
                    [showLoader]="loadingBodyTemplate || _loadingBodyTemplate"
                    [options]="virtualScrollOptions"
                    [autoSize]="true"
                >
                    <ng-template #content let-items let-scrollerOptions="options">
                        <ng-container
                            *ngTemplateOutlet="
                                buildInTable;
                                context: {
                                    $implicit: items,
                                    options: scrollerOptions
                                }
                            "
                        ></ng-container>
                    </ng-template>
                </p-scroller>
                <ng-container *ngIf="!virtualScroll">
                    <ng-container
                        *ngTemplateOutlet="
                            buildInTable;
                            context: {
                                $implicit: processedData,
                                options: { columns }
                            }
                        "
                    ></ng-container>
                </ng-container>

                <ng-template #buildInTable let-items let-scrollerOptions="options">
                    <table #table role="table" [ngClass]="cx('table')" [class]="tableStyleClass" [style]="tableStyle" [attr.id]="id + '-table'">
                        <ng-container *ngTemplateOutlet="colGroupTemplate || _colGroupTemplate; context: { $implicit: scrollerOptions.columns }"></ng-container>
                        <thead role="rowgroup" #thead [ngClass]="cx('thead')" [ngStyle]="sx('thead')">
                            <ng-container
                                *ngTemplateOutlet="
                                    headerGroupedTemplate || headerTemplate || _headerTemplate;
                                    context: {
                                        $implicit: scrollerOptions.columns
                                    }
                                "
                            ></ng-container>
                        </thead>
                        <tbody
                            role="rowgroup"
                            [ngClass]="cx('tbody')"
                            *ngIf="frozenValue || frozenBodyTemplate || _frozenBodyTemplate"
                            [value]="frozenValue"
                            [frozenRows]="true"
                            [pTableBody]="scrollerOptions.columns"
                            [pTableBodyTemplate]="frozenBodyTemplate || _frozenBodyTemplate"
                            [frozen]="true"
                        ></tbody>
                        <tbody
                            role="rowgroup"
                            [ngClass]="cx('tbody', scrollerOptions.contentStyleClass)"
                            [style]="scrollerOptions.contentStyle"
                            [value]="dataToRender(scrollerOptions.rows)"
                            [pTableBody]="scrollerOptions.columns"
                            [pTableBodyTemplate]="bodyTemplate || _bodyTemplate"
                            [scrollerOptions]="scrollerOptions"
                        ></tbody>
                        <tbody
                            role="rowgroup"
                            *ngIf="scrollerOptions.spacerStyle"
                            [style]="'height: calc(' + scrollerOptions.spacerStyle.height + ' - ' + scrollerOptions.rows.length * scrollerOptions.itemSize + 'px);'"
                            [ngClass]="cx('virtualScrollerSpacer')"
                        ></tbody>
                        <tfoot role="rowgroup" *ngIf="footerGroupedTemplate || footerTemplate || _footerTemplate || _footerGroupedTemplate" #tfoot [ngClass]="cx('footer')">
                            <ng-container
                                *ngTemplateOutlet="
                                    footerGroupedTemplate || footerTemplate || _footerTemplate || _footerGroupedTemplate;
                                    context: {
                                        $implicit: scrollerOptions.columns
                                    }
                                "
                            ></ng-container>
                        </tfoot>
                    </table>
                </ng-template>
            </div>

            <p-paginator
                [rows]="rows"
                [first]="first"
                [totalRecords]="totalRecords"
                [pageLinkSize]="pageLinks"
                [alwaysShow]="alwaysShowPaginator"
                (onPageChange)="onPageChange($event)"
                [rowsPerPageOptions]="rowsPerPageOptions"
                *ngIf="paginator && (paginatorPosition === 'bottom' || paginatorPosition == 'both')"
                [templateLeft]="paginatorLeftTemplate || _paginatorLeftTemplate"
                [templateRight]="paginatorRightTemplate || _paginatorRightTemplate"
                [dropdownAppendTo]="paginatorDropdownAppendTo"
                [dropdownScrollHeight]="paginatorDropdownScrollHeight"
                [currentPageReportTemplate]="currentPageReportTemplate"
                [showFirstLastIcon]="showFirstLastIcon"
                [dropdownItemTemplate]="paginatorDropdownItemTemplate || _paginatorDropdownItemTemplate"
                [showCurrentPageReport]="showCurrentPageReport"
                [showJumpToPageDropdown]="showJumpToPageDropdown"
                [showJumpToPageInput]="showJumpToPageInput"
                [showPageLinks]="showPageLinks"
                [styleClass]="cx('pcPaginator') + ' ' + paginatorStyleClass && paginatorStyleClass"
                [locale]="paginatorLocale"
            >
                <ng-template pTemplate="dropdownicon" *ngIf="paginatorDropdownIconTemplate || _paginatorDropdownIconTemplate">
                    <ng-container *ngTemplateOutlet="paginatorDropdownIconTemplate || _paginatorDropdownIconTemplate"></ng-container>
                </ng-template>

                <ng-template pTemplate="firstpagelinkicon" *ngIf="paginatorFirstPageLinkIconTemplate || _paginatorFirstPageLinkIconTemplate">
                    <ng-container *ngTemplateOutlet="paginatorFirstPageLinkIconTemplate || _paginatorFirstPageLinkIconTemplate"></ng-container>
                </ng-template>

                <ng-template pTemplate="previouspagelinkicon" *ngIf="paginatorPreviousPageLinkIconTemplate || _paginatorPreviousPageLinkIconTemplate">
                    <ng-container *ngTemplateOutlet="paginatorPreviousPageLinkIconTemplate || _paginatorPreviousPageLinkIconTemplate"></ng-container>
                </ng-template>

                <ng-template pTemplate="lastpagelinkicon" *ngIf="paginatorLastPageLinkIconTemplate || _paginatorLastPageLinkIconTemplate">
                    <ng-container *ngTemplateOutlet="paginatorLastPageLinkIconTemplate || _paginatorLastPageLinkIconTemplate"></ng-container>
                </ng-template>

                <ng-template pTemplate="nextpagelinkicon" *ngIf="paginatorNextPageLinkIconTemplate || _paginatorNextPageLinkIconTemplate">
                    <ng-container *ngTemplateOutlet="paginatorNextPageLinkIconTemplate || _paginatorNextPageLinkIconTemplate"></ng-container>
                </ng-template>
            </p-paginator>

            <div *ngIf="summaryTemplate || _summaryTemplate" [ngClass]="cx('footer')">
                <ng-container *ngTemplateOutlet="summaryTemplate || _summaryTemplate"></ng-container>
            </div>

            <div #resizeHelper [ngClass]="cx('columnResizeIndicator')" style="display:none" *ngIf="resizableColumns"></div>
            <span #reorderIndicatorUp [ngClass]="cx('rowReorderIndicatorUp')" style="display: none;" *ngIf="reorderableColumns">
                <ArrowDownIcon *ngIf="!reorderIndicatorUpIconTemplate && !_reorderIndicatorUpIconTemplate" />
                <ng-template *ngTemplateOutlet="reorderIndicatorUpIconTemplate || _reorderIndicatorUpIconTemplate"></ng-template>
            </span>
            <span #reorderIndicatorDown [ngClass]="cx('rowReorderIndicatorDown')" style="display: none;" *ngIf="reorderableColumns">
                <ArrowUpIcon *ngIf="!reorderIndicatorDownIconTemplate && !_reorderIndicatorDownIconTemplate" />
                <ng-template *ngTemplateOutlet="reorderIndicatorDownIconTemplate || _reorderIndicatorDownIconTemplate"></ng-template>
            </span>
        </div>
    `,
      providers: [TableService, TableStyle],
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation.None
    }]
  }], null, {
    frozenColumns: [{
      type: Input
    }],
    frozenValue: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    tableStyle: [{
      type: Input
    }],
    tableStyleClass: [{
      type: Input
    }],
    paginator: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    pageLinks: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    rowsPerPageOptions: [{
      type: Input
    }],
    alwaysShowPaginator: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    paginatorPosition: [{
      type: Input
    }],
    paginatorStyleClass: [{
      type: Input
    }],
    paginatorDropdownAppendTo: [{
      type: Input
    }],
    paginatorDropdownScrollHeight: [{
      type: Input
    }],
    currentPageReportTemplate: [{
      type: Input
    }],
    showCurrentPageReport: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showJumpToPageDropdown: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showJumpToPageInput: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showFirstLastIcon: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showPageLinks: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    defaultSortOrder: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    sortMode: [{
      type: Input
    }],
    resetPageOnSort: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selectionMode: [{
      type: Input
    }],
    selectionPageOnly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    contextMenuSelection: [{
      type: Input
    }],
    contextMenuSelectionChange: [{
      type: Output
    }],
    contextMenuSelectionMode: [{
      type: Input
    }],
    dataKey: [{
      type: Input
    }],
    metaKeySelection: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    rowSelectable: [{
      type: Input
    }],
    rowTrackBy: [{
      type: Input
    }],
    lazy: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    lazyLoadOnInit: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    compareSelectionBy: [{
      type: Input
    }],
    csvSeparator: [{
      type: Input
    }],
    exportFilename: [{
      type: Input
    }],
    filters: [{
      type: Input
    }],
    globalFilterFields: [{
      type: Input
    }],
    filterDelay: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    filterLocale: [{
      type: Input
    }],
    expandedRowKeys: [{
      type: Input
    }],
    editingRowKeys: [{
      type: Input
    }],
    rowExpandMode: [{
      type: Input
    }],
    scrollable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    scrollDirection: [{
      type: Input
    }],
    rowGroupMode: [{
      type: Input
    }],
    scrollHeight: [{
      type: Input
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
    virtualScrollDelay: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    frozenWidth: [{
      type: Input
    }],
    responsive: [{
      type: Input
    }],
    contextMenu: [{
      type: Input
    }],
    resizableColumns: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    columnResizeMode: [{
      type: Input
    }],
    reorderableColumns: [{
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
    showLoader: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    rowHover: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    customSort: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showInitialSortBadge: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autoLayout: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    exportFunction: [{
      type: Input
    }],
    exportHeader: [{
      type: Input
    }],
    stateKey: [{
      type: Input
    }],
    stateStorage: [{
      type: Input
    }],
    editMode: [{
      type: Input
    }],
    groupRowsBy: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    showGridlines: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    stripedRows: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    groupRowsByOrder: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    responsiveLayout: [{
      type: Input
    }],
    breakpoint: [{
      type: Input
    }],
    paginatorLocale: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    columns: [{
      type: Input
    }],
    first: [{
      type: Input
    }],
    rows: [{
      type: Input
    }],
    totalRecords: [{
      type: Input
    }],
    sortField: [{
      type: Input
    }],
    sortOrder: [{
      type: Input
    }],
    multiSortMeta: [{
      type: Input
    }],
    selection: [{
      type: Input
    }],
    virtualRowHeight: [{
      type: Input
    }],
    selectAll: [{
      type: Input
    }],
    selectAllChange: [{
      type: Output
    }],
    selectionChange: [{
      type: Output
    }],
    onRowSelect: [{
      type: Output
    }],
    onRowUnselect: [{
      type: Output
    }],
    onPage: [{
      type: Output
    }],
    onSort: [{
      type: Output
    }],
    onFilter: [{
      type: Output
    }],
    onLazyLoad: [{
      type: Output
    }],
    onRowExpand: [{
      type: Output
    }],
    onRowCollapse: [{
      type: Output
    }],
    onContextMenuSelect: [{
      type: Output
    }],
    onColResize: [{
      type: Output
    }],
    onColReorder: [{
      type: Output
    }],
    onRowReorder: [{
      type: Output
    }],
    onEditInit: [{
      type: Output
    }],
    onEditComplete: [{
      type: Output
    }],
    onEditCancel: [{
      type: Output
    }],
    onHeaderCheckboxToggle: [{
      type: Output
    }],
    sortFunction: [{
      type: Output
    }],
    firstChange: [{
      type: Output
    }],
    rowsChange: [{
      type: Output
    }],
    onStateSave: [{
      type: Output
    }],
    onStateRestore: [{
      type: Output
    }],
    containerViewChild: [{
      type: ViewChild,
      args: ["container"]
    }],
    resizeHelperViewChild: [{
      type: ViewChild,
      args: ["resizeHelper"]
    }],
    reorderIndicatorUpViewChild: [{
      type: ViewChild,
      args: ["reorderIndicatorUp"]
    }],
    reorderIndicatorDownViewChild: [{
      type: ViewChild,
      args: ["reorderIndicatorDown"]
    }],
    wrapperViewChild: [{
      type: ViewChild,
      args: ["wrapper"]
    }],
    tableViewChild: [{
      type: ViewChild,
      args: ["table"]
    }],
    tableHeaderViewChild: [{
      type: ViewChild,
      args: ["thead"]
    }],
    tableFooterViewChild: [{
      type: ViewChild,
      args: ["tfoot"]
    }],
    scroller: [{
      type: ViewChild,
      args: ["scroller"]
    }],
    _templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    _headerTemplate: [{
      type: ContentChild,
      args: ["header", {
        descendants: false
      }]
    }],
    _headerGroupedTemplate: [{
      type: ContentChild,
      args: ["headergrouped", {
        descendants: false
      }]
    }],
    _bodyTemplate: [{
      type: ContentChild,
      args: ["body", {
        descendants: false
      }]
    }],
    _loadingBodyTemplate: [{
      type: ContentChild,
      args: ["loadingbody", {
        descendants: false
      }]
    }],
    _captionTemplate: [{
      type: ContentChild,
      args: ["caption", {
        descendants: false
      }]
    }],
    _footerTemplate: [{
      type: ContentChild,
      args: ["footer", {
        descendants: false
      }]
    }],
    _footerGroupedTemplate: [{
      type: ContentChild,
      args: ["footergrouped", {
        descendants: false
      }]
    }],
    _summaryTemplate: [{
      type: ContentChild,
      args: ["summary", {
        descendants: false
      }]
    }],
    _colGroupTemplate: [{
      type: ContentChild,
      args: ["colgroup", {
        descendants: false
      }]
    }],
    _expandedRowTemplate: [{
      type: ContentChild,
      args: ["expandedrow", {
        descendants: false
      }]
    }],
    _groupHeaderTemplate: [{
      type: ContentChild,
      args: ["groupheader", {
        descendants: false
      }]
    }],
    _groupFooterTemplate: [{
      type: ContentChild,
      args: ["groupfooter", {
        descendants: false
      }]
    }],
    _frozenExpandedRowTemplate: [{
      type: ContentChild,
      args: ["frozenexpandedrow", {
        descendants: false
      }]
    }],
    _frozenHeaderTemplate: [{
      type: ContentChild,
      args: ["frozenheader", {
        descendants: false
      }]
    }],
    _frozenBodyTemplate: [{
      type: ContentChild,
      args: ["frozenbody", {
        descendants: false
      }]
    }],
    _frozenFooterTemplate: [{
      type: ContentChild,
      args: ["frozenfooter", {
        descendants: false
      }]
    }],
    _frozenColGroupTemplate: [{
      type: ContentChild,
      args: ["frozencolgroup", {
        descendants: false
      }]
    }],
    _emptyMessageTemplate: [{
      type: ContentChild,
      args: ["emptymessage", {
        descendants: false
      }]
    }],
    _paginatorLeftTemplate: [{
      type: ContentChild,
      args: ["paginatorleft", {
        descendants: false
      }]
    }],
    _paginatorRightTemplate: [{
      type: ContentChild,
      args: ["paginatorright", {
        descendants: false
      }]
    }],
    _paginatorDropdownItemTemplate: [{
      type: ContentChild,
      args: ["paginatordropdownitem", {
        descendants: false
      }]
    }],
    _loadingIconTemplate: [{
      type: ContentChild,
      args: ["loadingicon", {
        descendants: false
      }]
    }],
    _reorderIndicatorUpIconTemplate: [{
      type: ContentChild,
      args: ["reorderindicatorupicon", {
        descendants: false
      }]
    }],
    _reorderIndicatorDownIconTemplate: [{
      type: ContentChild,
      args: ["reorderindicatordownicon", {
        descendants: false
      }]
    }],
    _sortIconTemplate: [{
      type: ContentChild,
      args: ["sorticon", {
        descendants: false
      }]
    }],
    _checkboxIconTemplate: [{
      type: ContentChild,
      args: ["checkboxicon", {
        descendants: false
      }]
    }],
    _headerCheckboxIconTemplate: [{
      type: ContentChild,
      args: ["headercheckboxicon", {
        descendants: false
      }]
    }],
    _paginatorDropdownIconTemplate: [{
      type: ContentChild,
      args: ["paginatordropdownicon", {
        descendants: false
      }]
    }],
    _paginatorFirstPageLinkIconTemplate: [{
      type: ContentChild,
      args: ["paginatorfirstpagelinkicon", {
        descendants: false
      }]
    }],
    _paginatorLastPageLinkIconTemplate: [{
      type: ContentChild,
      args: ["paginatorlastpagelinkicon", {
        descendants: false
      }]
    }],
    _paginatorPreviousPageLinkIconTemplate: [{
      type: ContentChild,
      args: ["paginatorpreviouspagelinkicon", {
        descendants: false
      }]
    }],
    _paginatorNextPageLinkIconTemplate: [{
      type: ContentChild,
      args: ["paginatornextpagelinkicon", {
        descendants: false
      }]
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Table, {
    className: "Table",
    filePath: "table.ts",
    lineNumber: 353
  });
})();
var TableBody = class _TableBody {
  dt;
  tableService;
  cd;
  el;
  columns;
  template;
  get value() {
    return this._value;
  }
  set value(val) {
    this._value = val;
    if (this.frozenRows) {
      this.updateFrozenRowStickyPosition();
    }
    if (this.dt.scrollable && this.dt.rowGroupMode === "subheader") {
      this.updateFrozenRowGroupHeaderStickyPosition();
    }
  }
  frozen;
  frozenRows;
  scrollerOptions;
  subscription;
  _value;
  ngAfterViewInit() {
    if (this.frozenRows) {
      this.updateFrozenRowStickyPosition();
    }
    if (this.dt.scrollable && this.dt.rowGroupMode === "subheader") {
      this.updateFrozenRowGroupHeaderStickyPosition();
    }
  }
  constructor(dt, tableService, cd, el) {
    this.dt = dt;
    this.tableService = tableService;
    this.cd = cd;
    this.el = el;
    this.subscription = this.dt.tableService.valueSource$.subscribe(() => {
      if (this.dt.virtualScroll) {
        this.cd.detectChanges();
      }
    });
  }
  shouldRenderRowGroupHeader(value, rowData, i) {
    let currentRowFieldData = ObjectUtils.resolveFieldData(rowData, this.dt.groupRowsBy);
    let prevRowData = value[i - (1 + this.dt._first)];
    if (prevRowData) {
      let previousRowFieldData = ObjectUtils.resolveFieldData(prevRowData, this.dt.groupRowsBy);
      return currentRowFieldData !== previousRowFieldData;
    } else {
      return true;
    }
  }
  shouldRenderRowGroupFooter(value, rowData, i) {
    let currentRowFieldData = ObjectUtils.resolveFieldData(rowData, this.dt.groupRowsBy);
    let nextRowData = value[i + (1 + this.dt._first)];
    if (nextRowData) {
      let nextRowFieldData = ObjectUtils.resolveFieldData(nextRowData, this.dt.groupRowsBy);
      return currentRowFieldData !== nextRowFieldData;
    } else {
      return true;
    }
  }
  shouldRenderRowspan(value, rowData, i) {
    let currentRowFieldData = ObjectUtils.resolveFieldData(rowData, this.dt.groupRowsBy);
    let prevRowData = value[i - 1];
    if (prevRowData) {
      let previousRowFieldData = ObjectUtils.resolveFieldData(prevRowData, this.dt.groupRowsBy);
      return currentRowFieldData !== previousRowFieldData;
    } else {
      return true;
    }
  }
  calculateRowGroupSize(value, rowData, index) {
    let currentRowFieldData = ObjectUtils.resolveFieldData(rowData, this.dt.groupRowsBy);
    let nextRowFieldData = currentRowFieldData;
    let groupRowSpan = 0;
    while (currentRowFieldData === nextRowFieldData) {
      groupRowSpan++;
      let nextRowData = value[++index];
      if (nextRowData) {
        nextRowFieldData = ObjectUtils.resolveFieldData(nextRowData, this.dt.groupRowsBy);
      } else {
        break;
      }
    }
    return groupRowSpan === 1 ? null : groupRowSpan;
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  updateFrozenRowStickyPosition() {
    this.el.nativeElement.style.top = DomHandler.getOuterHeight(this.el.nativeElement.previousElementSibling) + "px";
  }
  updateFrozenRowGroupHeaderStickyPosition() {
    if (this.el.nativeElement.previousElementSibling) {
      let tableHeaderHeight = DomHandler.getOuterHeight(this.el.nativeElement.previousElementSibling);
      this.dt.rowGroupHeaderStyleObject.top = tableHeaderHeight + "px";
    }
  }
  getScrollerOption(option, options) {
    if (this.dt.virtualScroll) {
      options = options || this.scrollerOptions;
      return options ? options[option] : null;
    }
    return null;
  }
  getRowIndex(rowIndex) {
    const index = this.dt.paginator ? this.dt.first + rowIndex : rowIndex;
    const getItemOptions = this.getScrollerOption("getItemOptions");
    return getItemOptions ? getItemOptions(index).index : index;
  }
  static \u0275fac = function TableBody_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TableBody)(\u0275\u0275directiveInject(Table), \u0275\u0275directiveInject(TableService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _TableBody,
    selectors: [["", "pTableBody", ""]],
    inputs: {
      columns: [0, "pTableBody", "columns"],
      template: [0, "pTableBodyTemplate", "template"],
      value: "value",
      frozen: [2, "frozen", "frozen", booleanAttribute],
      frozenRows: [2, "frozenRows", "frozenRows", booleanAttribute],
      scrollerOptions: "scrollerOptions"
    },
    standalone: false,
    features: [\u0275\u0275InputTransformsFeature],
    attrs: _c45,
    decls: 5,
    vars: 5,
    consts: [[4, "ngIf"], ["ngFor", "", 3, "ngForOf", "ngForTrackBy"], ["role", "row", 4, "ngIf"], ["role", "row"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function TableBody_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, TableBody_ng_container_0_Template, 2, 2, "ng-container", 0)(1, TableBody_ng_container_1_Template, 2, 2, "ng-container", 0)(2, TableBody_ng_container_2_Template, 2, 2, "ng-container", 0)(3, TableBody_ng_container_3_Template, 2, 5, "ng-container", 0)(4, TableBody_ng_container_4_Template, 2, 5, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", !ctx.dt.expandedRowTemplate && !ctx.dt._expandedRowTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.dt.expandedRowTemplate || ctx.dt._expandedRowTemplate) && !(ctx.frozen && (ctx.dt.frozenExpandedRowTemplate || ctx.dt._frozenExpandedRowTemplate)));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.dt.frozenExpandedRowTemplate || ctx.dt._frozenExpandedRowTemplate) && ctx.frozen);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.dt.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.dt.isEmpty() && !ctx.dt.loading);
      }
    },
    dependencies: [NgForOf, NgIf, NgTemplateOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableBody, [{
    type: Component,
    args: [{
      selector: "[pTableBody]",
      standalone: false,
      template: `
        <ng-container *ngIf="!dt.expandedRowTemplate && !dt._expandedRowTemplate">
            <ng-template ngFor let-rowData let-rowIndex="index" [ngForOf]="value" [ngForTrackBy]="dt.rowTrackBy">
                <ng-container *ngIf="(dt.groupHeaderTemplate || dt._groupHeaderTemplate) && !dt.virtualScroll && dt.rowGroupMode === 'subheader' && shouldRenderRowGroupHeader(value, rowData, rowIndex)" role="row">
                    <ng-container
                        *ngTemplateOutlet="
                            dt.groupHeaderTemplate || dt._groupHeaderTemplate;
                            context: {
                                $implicit: rowData,
                                rowIndex: getRowIndex(rowIndex),
                                columns: columns,
                                editing: dt.editMode === 'row' && dt.isRowEditing(rowData),
                                frozen: frozen
                            }
                        "
                    ></ng-container>
                </ng-container>
                <ng-container *ngIf="dt.rowGroupMode !== 'rowspan'">
                    <ng-container
                        *ngTemplateOutlet="
                            rowData ? template : dt.loadingBodyTemplate || dt._loadingBodyTemplate;
                            context: {
                                $implicit: rowData,
                                rowIndex: getRowIndex(rowIndex),
                                columns: columns,
                                editing: dt.editMode === 'row' && dt.isRowEditing(rowData),
                                frozen: frozen
                            }
                        "
                    ></ng-container>
                </ng-container>
                <ng-container *ngIf="dt.rowGroupMode === 'rowspan'">
                    <ng-container
                        *ngTemplateOutlet="
                            rowData ? template : dt.loadingBodyTemplate || dt._loadingBodyTemplate;
                            context: {
                                $implicit: rowData,
                                rowIndex: getRowIndex(rowIndex),
                                columns: columns,
                                editing: dt.editMode === 'row' && dt.isRowEditing(rowData),
                                frozen: frozen,
                                rowgroup: shouldRenderRowspan(value, rowData, rowIndex),
                                rowspan: calculateRowGroupSize(value, rowData, rowIndex)
                            }
                        "
                    ></ng-container>
                </ng-container>
                <ng-container *ngIf="(dt.groupFooterTemplate || dt._groupFooterTemplate) && !dt.virtualScroll && dt.rowGroupMode === 'subheader' && shouldRenderRowGroupFooter(value, rowData, rowIndex)" role="row">
                    <ng-container
                        *ngTemplateOutlet="
                            dt.groupFooterTemplate || dt._groupFooterTemplate;
                            context: {
                                $implicit: rowData,
                                rowIndex: getRowIndex(rowIndex),
                                columns: columns,
                                editing: dt.editMode === 'row' && dt.isRowEditing(rowData),
                                frozen: frozen
                            }
                        "
                    ></ng-container>
                </ng-container>
            </ng-template>
        </ng-container>
        <ng-container *ngIf="(dt.expandedRowTemplate || dt._expandedRowTemplate) && !(frozen && (dt.frozenExpandedRowTemplate || dt._frozenExpandedRowTemplate))">
            <ng-template ngFor let-rowData let-rowIndex="index" [ngForOf]="value" [ngForTrackBy]="dt.rowTrackBy">
                <ng-container *ngIf="!(dt.groupHeaderTemplate && dt._groupHeaderTemplate)">
                    <ng-container
                        *ngTemplateOutlet="
                            template;
                            context: {
                                $implicit: rowData,
                                rowIndex: getRowIndex(rowIndex),
                                columns: columns,
                                expanded: dt.isRowExpanded(rowData),
                                editing: dt.editMode === 'row' && dt.isRowEditing(rowData),
                                frozen: frozen
                            }
                        "
                    ></ng-container>
                </ng-container>
                <ng-container *ngIf="(dt.groupHeaderTemplate || dt._groupHeaderTemplate) && dt.rowGroupMode === 'subheader' && shouldRenderRowGroupHeader(value, rowData, getRowIndex(rowIndex))" role="row">
                    <ng-container
                        *ngTemplateOutlet="
                            dt.groupHeaderTemplate || dt._groupHeaderTemplate;
                            context: {
                                $implicit: rowData,
                                rowIndex: getRowIndex(rowIndex),
                                columns: columns,
                                expanded: dt.isRowExpanded(rowData),
                                editing: dt.editMode === 'row' && dt.isRowEditing(rowData),
                                frozen: frozen
                            }
                        "
                    ></ng-container>
                </ng-container>
                <ng-container *ngIf="dt.isRowExpanded(rowData)">
                    <ng-container
                        *ngTemplateOutlet="
                            dt.expandedRowTemplate || dt._expandedRowTemplate;
                            context: {
                                $implicit: rowData,
                                rowIndex: getRowIndex(rowIndex),
                                columns: columns,
                                frozen: frozen
                            }
                        "
                    ></ng-container>
                    <ng-container *ngIf="(dt.groupFooterTemplate || dt._groupFooterTemplate) && dt.rowGroupMode === 'subheader' && shouldRenderRowGroupFooter(value, rowData, getRowIndex(rowIndex))" role="row">
                        <ng-container
                            *ngTemplateOutlet="
                                dt.groupFooterTemplate || dt._groupFooterTemplate;
                                context: {
                                    $implicit: rowData,
                                    rowIndex: getRowIndex(rowIndex),
                                    columns: columns,
                                    expanded: dt.isRowExpanded(rowData),
                                    editing: dt.editMode === 'row' && dt.isRowEditing(rowData),
                                    frozen: frozen
                                }
                            "
                        ></ng-container>
                    </ng-container>
                </ng-container>
            </ng-template>
        </ng-container>
        <ng-container *ngIf="(dt.frozenExpandedRowTemplate || dt._frozenExpandedRowTemplate) && frozen">
            <ng-template ngFor let-rowData let-rowIndex="index" [ngForOf]="value" [ngForTrackBy]="dt.rowTrackBy">
                <ng-container
                    *ngTemplateOutlet="
                        template;
                        context: {
                            $implicit: rowData,
                            rowIndex: getRowIndex(rowIndex),
                            columns: columns,
                            expanded: dt.isRowExpanded(rowData),
                            editing: dt.editMode === 'row' && dt.isRowEditing(rowData),
                            frozen: frozen
                        }
                    "
                ></ng-container>
                <ng-container *ngIf="dt.isRowExpanded(rowData)">
                    <ng-container
                        *ngTemplateOutlet="
                            dt.frozenExpandedRowTemplate || dt._frozenExpandedRowTemplate;
                            context: {
                                $implicit: rowData,
                                rowIndex: getRowIndex(rowIndex),
                                columns: columns,
                                frozen: frozen
                            }
                        "
                    ></ng-container>
                </ng-container>
            </ng-template>
        </ng-container>
        <ng-container *ngIf="dt.loading">
            <ng-container *ngTemplateOutlet="dt.loadingBodyTemplate || dt._loadingBodyTemplate; context: { $implicit: columns, frozen: frozen }"></ng-container>
        </ng-container>
        <ng-container *ngIf="dt.isEmpty() && !dt.loading">
            <ng-container *ngTemplateOutlet="dt.emptyMessageTemplate || dt._emptyMessageTemplate; context: { $implicit: columns, frozen: frozen }"></ng-container>
        </ng-container>
    `,
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation.None
    }]
  }], () => [{
    type: Table
  }, {
    type: TableService
  }, {
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }], {
    columns: [{
      type: Input,
      args: ["pTableBody"]
    }],
    template: [{
      type: Input,
      args: ["pTableBodyTemplate"]
    }],
    value: [{
      type: Input
    }],
    frozen: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    frozenRows: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    scrollerOptions: [{
      type: Input
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TableBody, {
    className: "TableBody",
    filePath: "table.ts",
    lineNumber: 3371
  });
})();
var RowGroupHeader = class _RowGroupHeader {
  dt;
  constructor(dt) {
    this.dt = dt;
  }
  get getFrozenRowGroupHeaderStickyPosition() {
    return this.dt.rowGroupHeaderStyleObject ? this.dt.rowGroupHeaderStyleObject.top : "";
  }
  static \u0275fac = function RowGroupHeader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RowGroupHeader)(\u0275\u0275directiveInject(Table));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _RowGroupHeader,
    selectors: [["", "pRowGroupHeader", ""]],
    hostAttrs: [1, "p-datatable-row-group-header"],
    hostVars: 2,
    hostBindings: function RowGroupHeader_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275styleProp("top", ctx.getFrozenRowGroupHeaderStickyPosition);
      }
    },
    standalone: false
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RowGroupHeader, [{
    type: Directive,
    args: [{
      selector: "[pRowGroupHeader]",
      standalone: false,
      host: {
        class: "p-datatable-row-group-header",
        "[style.top]": "getFrozenRowGroupHeaderStickyPosition"
      }
    }]
  }], () => [{
    type: Table
  }], null);
})();
var FrozenColumn = class _FrozenColumn {
  el;
  zone;
  get frozen() {
    return this._frozen;
  }
  set frozen(val) {
    this._frozen = val;
    Promise.resolve(null).then(() => this.updateStickyPosition());
  }
  alignFrozen = "left";
  constructor(el, zone) {
    this.el = el;
    this.zone = zone;
  }
  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        this.recalculateColumns();
      }, 1e3);
    });
  }
  recalculateColumns() {
    const siblings = DomHandler.siblings(this.el.nativeElement);
    const index = DomHandler.index(this.el.nativeElement);
    const time = (siblings.length - index + 1) * 50;
    setTimeout(() => {
      this.updateStickyPosition();
    }, time);
  }
  _frozen = true;
  updateStickyPosition() {
    if (this._frozen) {
      if (this.alignFrozen === "right") {
        let right = 0;
        let next = this.el.nativeElement.nextElementSibling;
        if (next) {
          right = DomHandler.getOuterWidth(next) + (parseFloat(next.style.right) || 0);
        }
        this.el.nativeElement.style.right = right + "px";
      } else {
        let left = 0;
        let prev = this.el.nativeElement.previousElementSibling;
        if (prev) {
          left = DomHandler.getOuterWidth(prev) + (parseFloat(prev.style.left) || 0);
        }
        this.el.nativeElement.style.left = left + "px";
      }
      const filterRow = this.el.nativeElement?.parentElement?.nextElementSibling;
      if (filterRow) {
        let index = DomHandler.index(this.el.nativeElement);
        if (filterRow.children && filterRow.children[index]) {
          filterRow.children[index].style.left = this.el.nativeElement.style.left;
          filterRow.children[index].style.right = this.el.nativeElement.style.right;
        }
      }
    }
  }
  static \u0275fac = function FrozenColumn_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FrozenColumn)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FrozenColumn,
    selectors: [["", "pFrozenColumn", ""]],
    hostVars: 4,
    hostBindings: function FrozenColumn_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("resize", function FrozenColumn_resize_HostBindingHandler($event) {
          return ctx.recalculateColumns($event);
        }, false, \u0275\u0275resolveWindow);
      }
      if (rf & 2) {
        \u0275\u0275classProp("p-datatable-frozen-column", ctx.frozen)("p-datatable-frozen-column-left", ctx.alignFrozen === "left");
      }
    },
    inputs: {
      frozen: "frozen",
      alignFrozen: "alignFrozen"
    },
    standalone: false
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FrozenColumn, [{
    type: Directive,
    args: [{
      selector: "[pFrozenColumn]",
      standalone: false,
      host: {
        "[class.p-datatable-frozen-column]": "frozen",
        "[class.p-datatable-frozen-column-left]": 'alignFrozen === "left"'
      }
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgZone
  }], {
    frozen: [{
      type: Input
    }],
    alignFrozen: [{
      type: Input
    }],
    recalculateColumns: [{
      type: HostListener,
      args: ["window:resize", ["$event"]]
    }]
  });
})();
var SortableColumn = class _SortableColumn {
  dt;
  field;
  pSortableColumnDisabled;
  sorted;
  sortOrder;
  subscription;
  constructor(dt) {
    this.dt = dt;
    if (this.isEnabled()) {
      this.subscription = this.dt.tableService.sortSource$.subscribe((sortMeta) => {
        this.updateSortState();
      });
    }
  }
  ngOnInit() {
    if (this.isEnabled()) {
      this.updateSortState();
    }
  }
  updateSortState() {
    let sorted = false;
    let sortOrder = 0;
    if (this.dt.sortMode === "single") {
      sorted = this.dt.isSorted(this.field);
      sortOrder = this.dt.sortOrder;
    } else if (this.dt.sortMode === "multiple") {
      const sortMeta = this.dt.getSortMeta(this.field);
      sorted = !!sortMeta;
      sortOrder = sortMeta ? sortMeta.order : 0;
    }
    this.sorted = sorted;
    this.sortOrder = sorted ? sortOrder === 1 ? "ascending" : "descending" : "none";
  }
  onClick(event2) {
    if (this.isEnabled() && !this.isFilterElement(event2.target)) {
      this.updateSortState();
      this.dt.sort({
        originalEvent: event2,
        field: this.field
      });
      DomHandler.clearSelection();
    }
  }
  onEnterKey(event2) {
    this.onClick(event2);
    event2.preventDefault();
  }
  isEnabled() {
    return this.pSortableColumnDisabled !== true;
  }
  isFilterElement(element) {
    return this.isFilterElementIconOrButton(element) || this.isFilterElementIconOrButton(element?.parentElement?.parentElement);
  }
  isFilterElementIconOrButton(element) {
    return DomHandler.hasClass(element, "pi-filter-icon") || DomHandler.hasClass(element, "p-column-filter-menu-button");
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  static \u0275fac = function SortableColumn_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SortableColumn)(\u0275\u0275directiveInject(Table));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _SortableColumn,
    selectors: [["", "pSortableColumn", ""]],
    hostVars: 7,
    hostBindings: function SortableColumn_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function SortableColumn_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        })("keydown.space", function SortableColumn_keydown_space_HostBindingHandler($event) {
          return ctx.onEnterKey($event);
        })("keydown.enter", function SortableColumn_keydown_enter_HostBindingHandler($event) {
          return ctx.onEnterKey($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("tabindex", ctx.isEnabled() ? "0" : null)("role", "columnheader")("aria-sort", ctx.sortOrder);
        \u0275\u0275classProp("p-datatable-sortable-column", ctx.isEnabled())("p-datatable-column-sorted", ctx.sorted);
      }
    },
    inputs: {
      field: [0, "pSortableColumn", "field"],
      pSortableColumnDisabled: [2, "pSortableColumnDisabled", "pSortableColumnDisabled", booleanAttribute]
    },
    standalone: false,
    features: [\u0275\u0275InputTransformsFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SortableColumn, [{
    type: Directive,
    args: [{
      selector: "[pSortableColumn]",
      standalone: false,
      host: {
        "[class.p-datatable-sortable-column]": "isEnabled()",
        "[class.p-datatable-column-sorted]": "sorted",
        "[attr.tabindex]": 'isEnabled() ? "0" : null',
        "[attr.role]": '"columnheader"',
        "[attr.aria-sort]": "sortOrder"
      }
    }]
  }], () => [{
    type: Table
  }], {
    field: [{
      type: Input,
      args: ["pSortableColumn"]
    }],
    pSortableColumnDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }],
    onEnterKey: [{
      type: HostListener,
      args: ["keydown.space", ["$event"]]
    }, {
      type: HostListener,
      args: ["keydown.enter", ["$event"]]
    }]
  });
})();
var SortIcon = class _SortIcon {
  dt;
  cd;
  field;
  subscription;
  sortOrder;
  constructor(dt, cd) {
    this.dt = dt;
    this.cd = cd;
    this.subscription = this.dt.tableService.sortSource$.subscribe((sortMeta) => {
      this.updateSortState();
    });
  }
  ngOnInit() {
    this.updateSortState();
  }
  onClick(event2) {
    event2.preventDefault();
  }
  updateSortState() {
    if (this.dt.sortMode === "single") {
      this.sortOrder = this.dt.isSorted(this.field) ? this.dt.sortOrder : 0;
    } else if (this.dt.sortMode === "multiple") {
      let sortMeta = this.dt.getSortMeta(this.field);
      this.sortOrder = sortMeta ? sortMeta.order : 0;
    }
    this.cd.markForCheck();
  }
  getMultiSortMetaIndex() {
    let multiSortMeta = this.dt._multiSortMeta;
    let index = -1;
    if (multiSortMeta && this.dt.sortMode === "multiple" && this.dt.showInitialSortBadge && multiSortMeta.length > 1) {
      for (let i = 0; i < multiSortMeta.length; i++) {
        let meta = multiSortMeta[i];
        if (meta.field === this.field || meta.field === this.field) {
          index = i;
          break;
        }
      }
    }
    return index;
  }
  getBadgeValue() {
    let index = this.getMultiSortMetaIndex();
    return this.dt.groupRowsBy && index > -1 ? index : index + 1;
  }
  isMultiSorted() {
    return this.dt.sortMode === "multiple" && this.getMultiSortMetaIndex() > -1;
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  static \u0275fac = function SortIcon_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SortIcon)(\u0275\u0275directiveInject(Table), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _SortIcon,
    selectors: [["p-sortIcon"]],
    inputs: {
      field: "field"
    },
    standalone: false,
    decls: 3,
    vars: 3,
    consts: [[4, "ngIf"], ["class", "p-sortable-column-icon", 4, "ngIf"], ["class", "p-sortable-column-badge", 4, "ngIf"], [3, "styleClass", 4, "ngIf"], [3, "styleClass"], [1, "p-sortable-column-icon"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-sortable-column-badge"]],
    template: function SortIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, SortIcon_ng_container_0_Template, 4, 3, "ng-container", 0)(1, SortIcon_span_1_Template, 2, 4, "span", 1)(2, SortIcon_span_2_Template, 2, 1, "span", 2);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", !(ctx.dt.sortIconTemplate && ctx.dt._sortIconTemplate));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.dt.sortIconTemplate || ctx.dt._sortIconTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isMultiSorted());
      }
    },
    dependencies: () => [NgIf, NgTemplateOutlet, SortAltIcon, SortAmountUpAltIcon, SortAmountDownIcon],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SortIcon, [{
    type: Component,
    args: [{
      selector: "p-sortIcon",
      standalone: false,
      template: `
        <ng-container *ngIf="!(dt.sortIconTemplate && dt._sortIconTemplate)">
            <SortAltIcon [styleClass]="'p-sortable-column-icon'" *ngIf="sortOrder === 0" />
            <SortAmountUpAltIcon [styleClass]="'p-sortable-column-icon'" *ngIf="sortOrder === 1" />
            <SortAmountDownIcon [styleClass]="'p-sortable-column-icon'" *ngIf="sortOrder === -1" />
        </ng-container>
        <span *ngIf="dt.sortIconTemplate || dt._sortIconTemplate" class="p-sortable-column-icon">
            <ng-template *ngTemplateOutlet="dt.sortIconTemplate || dt._sortIconTemplate; context: { $implicit: sortOrder }"></ng-template>
        </span>
        <span *ngIf="isMultiSorted()" class="p-sortable-column-badge">{{ getBadgeValue() }}</span>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None
    }]
  }], () => [{
    type: Table
  }, {
    type: ChangeDetectorRef
  }], {
    field: [{
      type: Input
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SortIcon, {
    className: "SortIcon",
    filePath: "table.ts",
    lineNumber: 3708
  });
})();
var SelectableRow = class _SelectableRow {
  dt;
  tableService;
  el;
  data;
  index;
  pSelectableRowDisabled;
  selected;
  subscription;
  constructor(dt, tableService, el) {
    this.dt = dt;
    this.tableService = tableService;
    this.el = el;
    if (this.isEnabled()) {
      this.subscription = this.dt.tableService.selectionSource$.subscribe(() => {
        this.selected = this.dt.isSelected(this.data);
      });
    }
  }
  setRowTabIndex() {
    if (this.dt.selectionMode === "single" || this.dt.selectionMode === "multiple") {
      return !this.dt.selection ? 0 : this.dt.anchorRowIndex === this.index ? 0 : -1;
    }
  }
  ngOnInit() {
    if (this.isEnabled()) {
      this.selected = this.dt.isSelected(this.data);
    }
  }
  onClick(event2) {
    if (this.isEnabled()) {
      this.dt.handleRowClick({
        originalEvent: event2,
        rowData: this.data,
        rowIndex: this.index
      });
    }
  }
  onTouchEnd(event2) {
    if (this.isEnabled()) {
      this.dt.handleRowTouchEnd(event2);
    }
  }
  onKeyDown(event2) {
    switch (event2.code) {
      case "ArrowDown":
        this.onArrowDownKey(event2);
        break;
      case "ArrowUp":
        this.onArrowUpKey(event2);
        break;
      case "Home":
        this.onHomeKey(event2);
        break;
      case "End":
        this.onEndKey(event2);
        break;
      case "Space":
        this.onSpaceKey(event2);
        break;
      case "Enter":
        this.onEnterKey(event2);
        break;
      default:
        if (event2.code === "KeyA" && (event2.metaKey || event2.ctrlKey) && this.dt.selectionMode === "multiple") {
          const data = this.dt.dataToRender(this.dt.processedData);
          this.dt.selection = [...data];
          this.dt.selectRange(event2, data.length - 1);
          event2.preventDefault();
        }
        break;
    }
  }
  onArrowDownKey(event2) {
    if (!this.isEnabled()) {
      return;
    }
    const row = event2.currentTarget;
    const nextRow = this.findNextSelectableRow(row);
    if (nextRow) {
      nextRow.focus();
    }
    event2.preventDefault();
  }
  onArrowUpKey(event2) {
    if (!this.isEnabled()) {
      return;
    }
    const row = event2.currentTarget;
    const prevRow = this.findPrevSelectableRow(row);
    if (prevRow) {
      prevRow.focus();
    }
    event2.preventDefault();
  }
  onEnterKey(event2) {
    if (!this.isEnabled()) {
      return;
    }
    this.dt.handleRowClick({
      originalEvent: event2,
      rowData: this.data,
      rowIndex: this.index
    });
  }
  onEndKey(event2) {
    const lastRow = this.findLastSelectableRow();
    lastRow && this.focusRowChange(this.el.nativeElement, lastRow);
    if (event2.ctrlKey && event2.shiftKey) {
      const data = this.dt.dataToRender(this.dt.rows);
      const lastSelectableRowIndex = DomHandler.getAttribute(lastRow, "index");
      this.dt.anchorRowIndex = lastSelectableRowIndex;
      this.dt.selection = data.slice(this.index, data.length);
      this.dt.selectRange(event2, this.index);
    }
    event2.preventDefault();
  }
  onHomeKey(event2) {
    const firstRow = this.findFirstSelectableRow();
    firstRow && this.focusRowChange(this.el.nativeElement, firstRow);
    if (event2.ctrlKey && event2.shiftKey) {
      const data = this.dt.dataToRender(this.dt.rows);
      const firstSelectableRowIndex = DomHandler.getAttribute(firstRow, "index");
      this.dt.anchorRowIndex = this.dt.anchorRowIndex || firstSelectableRowIndex;
      this.dt.selection = data.slice(0, this.index + 1);
      this.dt.selectRange(event2, this.index);
    }
    event2.preventDefault();
  }
  onSpaceKey(event2) {
    const isInput = event2.target instanceof HTMLInputElement || event2.target instanceof HTMLSelectElement || event2.target instanceof HTMLTextAreaElement;
    if (isInput) {
      return;
    } else {
      this.onEnterKey(event2);
      if (event2.shiftKey && this.dt.selection !== null) {
        const data = this.dt.dataToRender(this.dt.rows);
        let index;
        if (ObjectUtils.isNotEmpty(this.dt.selection) && this.dt.selection.length > 0) {
          let firstSelectedRowIndex, lastSelectedRowIndex;
          firstSelectedRowIndex = ObjectUtils.findIndexInList(this.dt.selection[0], data);
          lastSelectedRowIndex = ObjectUtils.findIndexInList(this.dt.selection[this.dt.selection.length - 1], data);
          index = this.index <= firstSelectedRowIndex ? lastSelectedRowIndex : firstSelectedRowIndex;
        } else {
          index = ObjectUtils.findIndexInList(this.dt.selection, data);
        }
        this.dt.anchorRowIndex = index;
        this.dt.selection = index !== this.index ? data.slice(Math.min(index, this.index), Math.max(index, this.index) + 1) : [this.data];
        this.dt.selectRange(event2, this.index);
      }
      event2.preventDefault();
    }
  }
  focusRowChange(firstFocusableRow, currentFocusedRow) {
    firstFocusableRow.tabIndex = "-1";
    currentFocusedRow.tabIndex = "0";
    DomHandler.focus(currentFocusedRow);
  }
  findLastSelectableRow() {
    const rows = DomHandler.find(this.dt.el.nativeElement, ".p-datatable-selectable-row");
    return rows ? rows[rows.length - 1] : null;
  }
  findFirstSelectableRow() {
    const firstRow = DomHandler.findSingle(this.dt.el.nativeElement, ".p-datatable-selectable-row");
    return firstRow;
  }
  findNextSelectableRow(row) {
    let nextRow = row.nextElementSibling;
    if (nextRow) {
      if (DomHandler.hasClass(nextRow, "p-selectable-row")) return nextRow;
      else return this.findNextSelectableRow(nextRow);
    } else {
      return null;
    }
  }
  findPrevSelectableRow(row) {
    let prevRow = row.previousElementSibling;
    if (prevRow) {
      if (DomHandler.hasClass(prevRow, "p-selectable-row")) return prevRow;
      else return this.findPrevSelectableRow(prevRow);
    } else {
      return null;
    }
  }
  isEnabled() {
    return this.pSelectableRowDisabled !== true;
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  static \u0275fac = function SelectableRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SelectableRow)(\u0275\u0275directiveInject(Table), \u0275\u0275directiveInject(TableService), \u0275\u0275directiveInject(ElementRef));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _SelectableRow,
    selectors: [["", "pSelectableRow", ""]],
    hostVars: 6,
    hostBindings: function SelectableRow_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function SelectableRow_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        })("touchend", function SelectableRow_touchend_HostBindingHandler($event) {
          return ctx.onTouchEnd($event);
        })("keydown", function SelectableRow_keydown_HostBindingHandler($event) {
          return ctx.onKeyDown($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("tabindex", ctx.setRowTabIndex())("data-p-selectable-row", true);
        \u0275\u0275classProp("p-datatable-selectable-row", ctx.isEnabled())("p-datatable-row-selected", ctx.selected);
      }
    },
    inputs: {
      data: [0, "pSelectableRow", "data"],
      index: [0, "pSelectableRowIndex", "index"],
      pSelectableRowDisabled: [2, "pSelectableRowDisabled", "pSelectableRowDisabled", booleanAttribute]
    },
    standalone: false,
    features: [\u0275\u0275InputTransformsFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectableRow, [{
    type: Directive,
    args: [{
      selector: "[pSelectableRow]",
      standalone: false,
      host: {
        "[class.p-datatable-selectable-row]": "isEnabled()",
        "[class.p-datatable-row-selected]": "selected",
        "[attr.tabindex]": "setRowTabIndex()",
        "[attr.data-p-selectable-row]": "true"
      }
    }]
  }], () => [{
    type: Table
  }, {
    type: TableService
  }, {
    type: ElementRef
  }], {
    data: [{
      type: Input,
      args: ["pSelectableRow"]
    }],
    index: [{
      type: Input,
      args: ["pSelectableRowIndex"]
    }],
    pSelectableRowDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }],
    onTouchEnd: [{
      type: HostListener,
      args: ["touchend", ["$event"]]
    }],
    onKeyDown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }]
  });
})();
var SelectableRowDblClick = class _SelectableRowDblClick {
  dt;
  tableService;
  data;
  index;
  pSelectableRowDisabled;
  selected;
  subscription;
  constructor(dt, tableService) {
    this.dt = dt;
    this.tableService = tableService;
    if (this.isEnabled()) {
      this.subscription = this.dt.tableService.selectionSource$.subscribe(() => {
        this.selected = this.dt.isSelected(this.data);
      });
    }
  }
  ngOnInit() {
    if (this.isEnabled()) {
      this.selected = this.dt.isSelected(this.data);
    }
  }
  onClick(event2) {
    if (this.isEnabled()) {
      this.dt.handleRowClick({
        originalEvent: event2,
        rowData: this.data,
        rowIndex: this.index
      });
    }
  }
  isEnabled() {
    return this.pSelectableRowDisabled !== true;
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  static \u0275fac = function SelectableRowDblClick_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SelectableRowDblClick)(\u0275\u0275directiveInject(Table), \u0275\u0275directiveInject(TableService));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _SelectableRowDblClick,
    selectors: [["", "pSelectableRowDblClick", ""]],
    hostVars: 4,
    hostBindings: function SelectableRowDblClick_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("dblclick", function SelectableRowDblClick_dblclick_HostBindingHandler($event) {
          return ctx.onClick($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275classProp("p-selectable-row", ctx.isEnabled())("p-highlight", ctx.selected);
      }
    },
    inputs: {
      data: [0, "pSelectableRowDblClick", "data"],
      index: [0, "pSelectableRowIndex", "index"],
      pSelectableRowDisabled: [2, "pSelectableRowDisabled", "pSelectableRowDisabled", booleanAttribute]
    },
    standalone: false,
    features: [\u0275\u0275InputTransformsFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectableRowDblClick, [{
    type: Directive,
    args: [{
      selector: "[pSelectableRowDblClick]",
      standalone: false,
      host: {
        "[class.p-selectable-row]": "isEnabled()",
        "[class.p-highlight]": "selected"
      }
    }]
  }], () => [{
    type: Table
  }, {
    type: TableService
  }], {
    data: [{
      type: Input,
      args: ["pSelectableRowDblClick"]
    }],
    index: [{
      type: Input,
      args: ["pSelectableRowIndex"]
    }],
    pSelectableRowDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onClick: [{
      type: HostListener,
      args: ["dblclick", ["$event"]]
    }]
  });
})();
var ContextMenuRow = class _ContextMenuRow {
  dt;
  tableService;
  el;
  data;
  index;
  pContextMenuRowDisabled;
  selected;
  subscription;
  constructor(dt, tableService, el) {
    this.dt = dt;
    this.tableService = tableService;
    this.el = el;
    if (this.isEnabled()) {
      this.subscription = this.dt.tableService.contextMenuSource$.subscribe((data) => {
        this.selected = this.dt.equals(this.data, data);
      });
    }
  }
  onContextMenu(event2) {
    if (this.isEnabled()) {
      this.dt.handleRowRightClick({
        originalEvent: event2,
        rowData: this.data,
        rowIndex: this.index
      });
      this.el.nativeElement.focus();
      event2.preventDefault();
    }
  }
  isEnabled() {
    return this.pContextMenuRowDisabled !== true;
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  static \u0275fac = function ContextMenuRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContextMenuRow)(\u0275\u0275directiveInject(Table), \u0275\u0275directiveInject(TableService), \u0275\u0275directiveInject(ElementRef));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _ContextMenuRow,
    selectors: [["", "pContextMenuRow", ""]],
    hostVars: 3,
    hostBindings: function ContextMenuRow_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("contextmenu", function ContextMenuRow_contextmenu_HostBindingHandler($event) {
          return ctx.onContextMenu($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("tabindex", ctx.isEnabled() ? 0 : void 0);
        \u0275\u0275classProp("p-highlight-contextmenu", ctx.selected);
      }
    },
    inputs: {
      data: [0, "pContextMenuRow", "data"],
      index: [0, "pContextMenuRowIndex", "index"],
      pContextMenuRowDisabled: [2, "pContextMenuRowDisabled", "pContextMenuRowDisabled", booleanAttribute]
    },
    standalone: false,
    features: [\u0275\u0275InputTransformsFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContextMenuRow, [{
    type: Directive,
    args: [{
      selector: "[pContextMenuRow]",
      standalone: false,
      host: {
        "[class.p-highlight-contextmenu]": "selected",
        "[attr.tabindex]": "isEnabled() ? 0 : undefined"
      }
    }]
  }], () => [{
    type: Table
  }, {
    type: TableService
  }, {
    type: ElementRef
  }], {
    data: [{
      type: Input,
      args: ["pContextMenuRow"]
    }],
    index: [{
      type: Input,
      args: ["pContextMenuRowIndex"]
    }],
    pContextMenuRowDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onContextMenu: [{
      type: HostListener,
      args: ["contextmenu", ["$event"]]
    }]
  });
})();
var RowToggler = class _RowToggler {
  dt;
  data;
  pRowTogglerDisabled;
  constructor(dt) {
    this.dt = dt;
  }
  onClick(event2) {
    if (this.isEnabled()) {
      this.dt.toggleRow(this.data, event2);
      event2.preventDefault();
    }
  }
  isEnabled() {
    return this.pRowTogglerDisabled !== true;
  }
  static \u0275fac = function RowToggler_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RowToggler)(\u0275\u0275directiveInject(Table));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _RowToggler,
    selectors: [["", "pRowToggler", ""]],
    hostBindings: function RowToggler_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function RowToggler_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        });
      }
    },
    inputs: {
      data: [0, "pRowToggler", "data"],
      pRowTogglerDisabled: [2, "pRowTogglerDisabled", "pRowTogglerDisabled", booleanAttribute]
    },
    standalone: false,
    features: [\u0275\u0275InputTransformsFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RowToggler, [{
    type: Directive,
    args: [{
      selector: "[pRowToggler]",
      standalone: false
    }]
  }], () => [{
    type: Table
  }], {
    data: [{
      type: Input,
      args: ["pRowToggler"]
    }],
    pRowTogglerDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var ResizableColumn = class _ResizableColumn {
  document;
  platformId;
  renderer;
  dt;
  el;
  zone;
  pResizableColumnDisabled;
  resizer;
  resizerMouseDownListener;
  resizerTouchStartListener;
  resizerTouchMoveListener;
  resizerTouchEndListener;
  documentMouseMoveListener;
  documentMouseUpListener;
  constructor(document2, platformId, renderer, dt, el, zone) {
    this.document = document2;
    this.platformId = platformId;
    this.renderer = renderer;
    this.dt = dt;
    this.el = el;
    this.zone = zone;
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.isEnabled()) {
        DomHandler.addClass(this.el.nativeElement, "p-datatable-resizable-column");
        this.resizer = this.renderer.createElement("span");
        this.renderer.addClass(this.resizer, "p-datatable-column-resizer");
        this.renderer.appendChild(this.el.nativeElement, this.resizer);
        this.zone.runOutsideAngular(() => {
          this.resizerMouseDownListener = this.renderer.listen(this.resizer, "mousedown", this.onMouseDown.bind(this));
          this.resizerTouchStartListener = this.renderer.listen(this.resizer, "touchstart", this.onTouchStart.bind(this));
        });
      }
    }
  }
  bindDocumentEvents() {
    this.zone.runOutsideAngular(() => {
      this.documentMouseMoveListener = this.renderer.listen(this.document, "mousemove", this.onDocumentMouseMove.bind(this));
      this.documentMouseUpListener = this.renderer.listen(this.document, "mouseup", this.onDocumentMouseUp.bind(this));
      this.resizerTouchMoveListener = this.renderer.listen(this.resizer, "touchmove", this.onTouchMove.bind(this));
      this.resizerTouchEndListener = this.renderer.listen(this.resizer, "touchend", this.onTouchEnd.bind(this));
    });
  }
  unbindDocumentEvents() {
    if (this.documentMouseMoveListener) {
      this.documentMouseMoveListener();
      this.documentMouseMoveListener = null;
    }
    if (this.documentMouseUpListener) {
      this.documentMouseUpListener();
      this.documentMouseUpListener = null;
    }
    if (this.resizerTouchMoveListener) {
      this.resizerTouchMoveListener();
      this.resizerTouchMoveListener = null;
    }
    if (this.resizerTouchEndListener) {
      this.resizerTouchEndListener();
      this.resizerTouchEndListener = null;
    }
  }
  onMouseDown(event2) {
    this.dt.onColumnResizeBegin(event2);
    this.bindDocumentEvents();
  }
  onTouchStart(event2) {
    this.dt.onColumnResizeBegin(event2);
    this.bindDocumentEvents();
  }
  onTouchMove(event2) {
    this.dt.onColumnResize(event2);
  }
  onDocumentMouseMove(event2) {
    this.dt.onColumnResize(event2);
  }
  onDocumentMouseUp(event2) {
    this.dt.onColumnResizeEnd();
    this.unbindDocumentEvents();
  }
  onTouchEnd(event2) {
    this.dt.onColumnResizeEnd();
    this.unbindDocumentEvents();
  }
  isEnabled() {
    return this.pResizableColumnDisabled !== true;
  }
  ngOnDestroy() {
    if (this.resizerMouseDownListener) {
      this.resizerMouseDownListener();
      this.resizerMouseDownListener = null;
    }
    this.unbindDocumentEvents();
  }
  static \u0275fac = function ResizableColumn_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResizableColumn)(\u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(Table), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _ResizableColumn,
    selectors: [["", "pResizableColumn", ""]],
    hostAttrs: [1, "p-datatable-resizable-column"],
    inputs: {
      pResizableColumnDisabled: [2, "pResizableColumnDisabled", "pResizableColumnDisabled", booleanAttribute]
    },
    standalone: false,
    features: [\u0275\u0275InputTransformsFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResizableColumn, [{
    type: Directive,
    args: [{
      selector: "[pResizableColumn]",
      standalone: false,
      host: {
        class: "p-datatable-resizable-column"
      }
    }]
  }], () => [{
    type: Document,
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
    type: Renderer2
  }, {
    type: Table
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    pResizableColumnDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var ReorderableColumn = class _ReorderableColumn {
  platformId;
  renderer;
  dt;
  el;
  zone;
  pReorderableColumnDisabled;
  dragStartListener;
  dragOverListener;
  dragEnterListener;
  dragLeaveListener;
  mouseDownListener;
  constructor(platformId, renderer, dt, el, zone) {
    this.platformId = platformId;
    this.renderer = renderer;
    this.dt = dt;
    this.el = el;
    this.zone = zone;
  }
  ngAfterViewInit() {
    if (this.isEnabled()) {
      this.bindEvents();
    }
  }
  bindEvents() {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        this.mouseDownListener = this.renderer.listen(this.el.nativeElement, "mousedown", this.onMouseDown.bind(this));
        this.dragStartListener = this.renderer.listen(this.el.nativeElement, "dragstart", this.onDragStart.bind(this));
        this.dragOverListener = this.renderer.listen(this.el.nativeElement, "dragover", this.onDragOver.bind(this));
        this.dragEnterListener = this.renderer.listen(this.el.nativeElement, "dragenter", this.onDragEnter.bind(this));
        this.dragLeaveListener = this.renderer.listen(this.el.nativeElement, "dragleave", this.onDragLeave.bind(this));
      });
    }
  }
  unbindEvents() {
    if (this.mouseDownListener) {
      this.mouseDownListener();
      this.mouseDownListener = null;
    }
    if (this.dragStartListener) {
      this.dragStartListener();
      this.dragStartListener = null;
    }
    if (this.dragOverListener) {
      this.dragOverListener();
      this.dragOverListener = null;
    }
    if (this.dragEnterListener) {
      this.dragEnterListener();
      this.dragEnterListener = null;
    }
    if (this.dragLeaveListener) {
      this.dragLeaveListener();
      this.dragLeaveListener = null;
    }
  }
  onMouseDown(event2) {
    if (event2.target.nodeName === "INPUT" || event2.target.nodeName === "TEXTAREA" || DomHandler.hasClass(event2.target, "p-datatable-column-resizer")) this.el.nativeElement.draggable = false;
    else this.el.nativeElement.draggable = true;
  }
  onDragStart(event2) {
    this.dt.onColumnDragStart(event2, this.el.nativeElement);
  }
  onDragOver(event2) {
    event2.preventDefault();
  }
  onDragEnter(event2) {
    this.dt.onColumnDragEnter(event2, this.el.nativeElement);
  }
  onDragLeave(event2) {
    this.dt.onColumnDragLeave(event2);
  }
  onDrop(event2) {
    if (this.isEnabled()) {
      this.dt.onColumnDrop(event2, this.el.nativeElement);
    }
  }
  isEnabled() {
    return this.pReorderableColumnDisabled !== true;
  }
  ngOnDestroy() {
    this.unbindEvents();
  }
  static \u0275fac = function ReorderableColumn_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReorderableColumn)(\u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(Table), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _ReorderableColumn,
    selectors: [["", "pReorderableColumn", ""]],
    hostAttrs: [1, "p-datatable-reorderable-column"],
    hostBindings: function ReorderableColumn_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("drop", function ReorderableColumn_drop_HostBindingHandler($event) {
          return ctx.onDrop($event);
        });
      }
    },
    inputs: {
      pReorderableColumnDisabled: [2, "pReorderableColumnDisabled", "pReorderableColumnDisabled", booleanAttribute]
    },
    standalone: false,
    features: [\u0275\u0275InputTransformsFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReorderableColumn, [{
    type: Directive,
    args: [{
      selector: "[pReorderableColumn]",
      standalone: false,
      host: {
        class: "p-datatable-reorderable-column"
      }
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: Renderer2
  }, {
    type: Table
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    pReorderableColumnDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onDrop: [{
      type: HostListener,
      args: ["drop", ["$event"]]
    }]
  });
})();
var EditableColumn = class _EditableColumn {
  dt;
  el;
  zone;
  data;
  field;
  rowIndex;
  pEditableColumnDisabled;
  pFocusCellSelector;
  overlayEventListener;
  constructor(dt, el, zone) {
    this.dt = dt;
    this.el = el;
    this.zone = zone;
  }
  ngOnChanges(changes) {
    if (this.el.nativeElement && !changes.data?.firstChange) {
      this.dt.updateEditingCell(this.el.nativeElement, this.data, this.field, this.rowIndex);
    }
  }
  ngAfterViewInit() {
    if (this.isEnabled()) {
      DomHandler.addClass(this.el.nativeElement, "p-editable-column");
    }
  }
  onClick(event2) {
    if (this.isEnabled()) {
      this.dt.selfClick = true;
      if (this.dt.editingCell) {
        if (this.dt.editingCell !== this.el.nativeElement) {
          if (!this.dt.isEditingCellValid()) {
            return;
          }
          this.closeEditingCell(true, event2);
          this.openCell();
        }
      } else {
        this.openCell();
      }
    }
  }
  openCell() {
    this.dt.updateEditingCell(this.el.nativeElement, this.data, this.field, this.rowIndex);
    DomHandler.addClass(this.el.nativeElement, "p-cell-editing");
    this.dt.onEditInit.emit({
      field: this.field,
      data: this.data,
      index: this.rowIndex
    });
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        let focusCellSelector = this.pFocusCellSelector || "input, textarea, select";
        let focusableElement = DomHandler.findSingle(this.el.nativeElement, focusCellSelector);
        if (focusableElement) {
          focusableElement.focus();
        }
      }, 50);
    });
    this.overlayEventListener = (e) => {
      if (this.el && this.el.nativeElement.contains(e.target)) {
        this.dt.selfClick = true;
      }
    };
    this.dt.overlaySubscription = this.dt.overlayService.clickObservable.subscribe(this.overlayEventListener);
  }
  closeEditingCell(completed, event2) {
    const eventData = {
      field: this.dt.editingCellField,
      data: this.dt.editingCellData,
      originalEvent: event2,
      index: this.dt.editingCellRowIndex
    };
    if (completed) {
      this.dt.onEditComplete.emit(eventData);
    } else {
      this.dt.onEditCancel.emit(eventData);
      this.dt.value.forEach((element) => {
        if (element[this.dt.editingCellField] === this.data) {
          element[this.dt.editingCellField] = this.dt.editingCellData;
        }
      });
    }
    DomHandler.removeClass(this.dt.editingCell, "p-cell-editing");
    this.dt.editingCell = null;
    this.dt.editingCellData = null;
    this.dt.editingCellField = null;
    this.dt.unbindDocumentEditListener();
    if (this.dt.overlaySubscription) {
      this.dt.overlaySubscription.unsubscribe();
    }
  }
  onEnterKeyDown(event2) {
    if (this.isEnabled() && !event2.shiftKey) {
      if (this.dt.isEditingCellValid()) {
        this.closeEditingCell(true, event2);
      }
      event2.preventDefault();
    }
  }
  onTabKeyDown(event2) {
    if (this.isEnabled()) {
      if (this.dt.isEditingCellValid()) {
        this.closeEditingCell(true, event2);
      }
      event2.preventDefault();
    }
  }
  onEscapeKeyDown(event2) {
    if (this.isEnabled()) {
      if (this.dt.isEditingCellValid()) {
        this.closeEditingCell(false, event2);
      }
      event2.preventDefault();
    }
  }
  onShiftKeyDown(event2) {
    if (this.isEnabled()) {
      if (event2.shiftKey) this.moveToPreviousCell(event2);
      else {
        this.moveToNextCell(event2);
      }
    }
  }
  onArrowDown(event2) {
    if (this.isEnabled()) {
      let currentCell = this.findCell(event2.target);
      if (currentCell) {
        let cellIndex = DomHandler.index(currentCell);
        let targetCell = this.findNextEditableColumnByIndex(currentCell, cellIndex);
        if (targetCell) {
          if (this.dt.isEditingCellValid()) {
            this.closeEditingCell(true, event2);
          }
          DomHandler.invokeElementMethod(event2.target, "blur");
          DomHandler.invokeElementMethod(targetCell, "click");
        }
        event2.preventDefault();
      }
    }
  }
  onArrowUp(event2) {
    if (this.isEnabled()) {
      let currentCell = this.findCell(event2.target);
      if (currentCell) {
        let cellIndex = DomHandler.index(currentCell);
        let targetCell = this.findPrevEditableColumnByIndex(currentCell, cellIndex);
        if (targetCell) {
          if (this.dt.isEditingCellValid()) {
            this.closeEditingCell(true, event2);
          }
          DomHandler.invokeElementMethod(event2.target, "blur");
          DomHandler.invokeElementMethod(targetCell, "click");
        }
        event2.preventDefault();
      }
    }
  }
  onArrowLeft(event2) {
    if (this.isEnabled()) {
      this.moveToPreviousCell(event2);
    }
  }
  onArrowRight(event2) {
    if (this.isEnabled()) {
      this.moveToNextCell(event2);
    }
  }
  findCell(element) {
    if (element) {
      let cell = element;
      while (cell && !DomHandler.hasClass(cell, "p-cell-editing")) {
        cell = cell.parentElement;
      }
      return cell;
    } else {
      return null;
    }
  }
  moveToPreviousCell(event2) {
    let currentCell = this.findCell(event2.target);
    if (currentCell) {
      let targetCell = this.findPreviousEditableColumn(currentCell);
      if (targetCell) {
        if (this.dt.isEditingCellValid()) {
          this.closeEditingCell(true, event2);
        }
        DomHandler.invokeElementMethod(event2.target, "blur");
        DomHandler.invokeElementMethod(targetCell, "click");
        event2.preventDefault();
      }
    }
  }
  moveToNextCell(event2) {
    let currentCell = this.findCell(event2.target);
    if (currentCell) {
      let targetCell = this.findNextEditableColumn(currentCell);
      if (targetCell) {
        if (this.dt.isEditingCellValid()) {
          this.closeEditingCell(true, event2);
        }
        DomHandler.invokeElementMethod(event2.target, "blur");
        DomHandler.invokeElementMethod(targetCell, "click");
        event2.preventDefault();
      } else {
        if (this.dt.isEditingCellValid()) {
          this.closeEditingCell(true, event2);
        }
      }
    }
  }
  findPreviousEditableColumn(cell) {
    let prevCell = cell.previousElementSibling;
    if (!prevCell) {
      let previousRow = cell.parentElement?.previousElementSibling;
      if (previousRow) {
        prevCell = previousRow.lastElementChild;
      }
    }
    if (prevCell) {
      if (DomHandler.hasClass(prevCell, "p-editable-column")) return prevCell;
      else return this.findPreviousEditableColumn(prevCell);
    } else {
      return null;
    }
  }
  findNextEditableColumn(cell) {
    let nextCell = cell.nextElementSibling;
    if (!nextCell) {
      let nextRow = cell.parentElement?.nextElementSibling;
      if (nextRow) {
        nextCell = nextRow.firstElementChild;
      }
    }
    if (nextCell) {
      if (DomHandler.hasClass(nextCell, "p-editable-column")) return nextCell;
      else return this.findNextEditableColumn(nextCell);
    } else {
      return null;
    }
  }
  findNextEditableColumnByIndex(cell, index) {
    let nextRow = cell.parentElement?.nextElementSibling;
    if (nextRow) {
      let nextCell = nextRow.children[index];
      if (nextCell && DomHandler.hasClass(nextCell, "p-editable-column")) {
        return nextCell;
      }
      return null;
    } else {
      return null;
    }
  }
  findPrevEditableColumnByIndex(cell, index) {
    let prevRow = cell.parentElement?.previousElementSibling;
    if (prevRow) {
      let prevCell = prevRow.children[index];
      if (prevCell && DomHandler.hasClass(prevCell, "p-editable-column")) {
        return prevCell;
      }
      return null;
    } else {
      return null;
    }
  }
  isEnabled() {
    return this.pEditableColumnDisabled !== true;
  }
  ngOnDestroy() {
    if (this.dt.overlaySubscription) {
      this.dt.overlaySubscription.unsubscribe();
    }
  }
  static \u0275fac = function EditableColumn_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditableColumn)(\u0275\u0275directiveInject(Table), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _EditableColumn,
    selectors: [["", "pEditableColumn", ""]],
    hostBindings: function EditableColumn_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function EditableColumn_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        })("keydown.enter", function EditableColumn_keydown_enter_HostBindingHandler($event) {
          return ctx.onEnterKeyDown($event);
        })("keydown.tab", function EditableColumn_keydown_tab_HostBindingHandler($event) {
          return ctx.onShiftKeyDown($event);
        })("keydown.escape", function EditableColumn_keydown_escape_HostBindingHandler($event) {
          return ctx.onEscapeKeyDown($event);
        })("keydown.shift.tab", function EditableColumn_keydown_shift_tab_HostBindingHandler($event) {
          return ctx.onShiftKeyDown($event);
        })("keydown.meta.tab", function EditableColumn_keydown_meta_tab_HostBindingHandler($event) {
          return ctx.onShiftKeyDown($event);
        })("keydown.arrowdown", function EditableColumn_keydown_arrowdown_HostBindingHandler($event) {
          return ctx.onArrowDown($event);
        })("keydown.arrowup", function EditableColumn_keydown_arrowup_HostBindingHandler($event) {
          return ctx.onArrowUp($event);
        })("keydown.arrowleft", function EditableColumn_keydown_arrowleft_HostBindingHandler($event) {
          return ctx.onArrowLeft($event);
        })("keydown.arrowright", function EditableColumn_keydown_arrowright_HostBindingHandler($event) {
          return ctx.onArrowRight($event);
        });
      }
    },
    inputs: {
      data: [0, "pEditableColumn", "data"],
      field: [0, "pEditableColumnField", "field"],
      rowIndex: [0, "pEditableColumnRowIndex", "rowIndex"],
      pEditableColumnDisabled: [2, "pEditableColumnDisabled", "pEditableColumnDisabled", booleanAttribute],
      pFocusCellSelector: "pFocusCellSelector"
    },
    standalone: false,
    features: [\u0275\u0275InputTransformsFeature, \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditableColumn, [{
    type: Directive,
    args: [{
      selector: "[pEditableColumn]",
      standalone: false
    }]
  }], () => [{
    type: Table
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    data: [{
      type: Input,
      args: ["pEditableColumn"]
    }],
    field: [{
      type: Input,
      args: ["pEditableColumnField"]
    }],
    rowIndex: [{
      type: Input,
      args: ["pEditableColumnRowIndex"]
    }],
    pEditableColumnDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    pFocusCellSelector: [{
      type: Input
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }],
    onEnterKeyDown: [{
      type: HostListener,
      args: ["keydown.enter", ["$event"]]
    }],
    onTabKeyDown: [{
      type: HostListener,
      args: ["keydown.tab", ["$event"]]
    }],
    onEscapeKeyDown: [{
      type: HostListener,
      args: ["keydown.escape", ["$event"]]
    }],
    onShiftKeyDown: [{
      type: HostListener,
      args: ["keydown.tab", ["$event"]]
    }, {
      type: HostListener,
      args: ["keydown.shift.tab", ["$event"]]
    }, {
      type: HostListener,
      args: ["keydown.meta.tab", ["$event"]]
    }],
    onArrowDown: [{
      type: HostListener,
      args: ["keydown.arrowdown", ["$event"]]
    }],
    onArrowUp: [{
      type: HostListener,
      args: ["keydown.arrowup", ["$event"]]
    }],
    onArrowLeft: [{
      type: HostListener,
      args: ["keydown.arrowleft", ["$event"]]
    }],
    onArrowRight: [{
      type: HostListener,
      args: ["keydown.arrowright", ["$event"]]
    }]
  });
})();
var EditableRow = class _EditableRow {
  el;
  data;
  pEditableRowDisabled;
  constructor(el) {
    this.el = el;
  }
  isEnabled() {
    return this.pEditableRowDisabled !== true;
  }
  static \u0275fac = function EditableRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditableRow)(\u0275\u0275directiveInject(ElementRef));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _EditableRow,
    selectors: [["", "pEditableRow", ""]],
    inputs: {
      data: [0, "pEditableRow", "data"],
      pEditableRowDisabled: [2, "pEditableRowDisabled", "pEditableRowDisabled", booleanAttribute]
    },
    standalone: false,
    features: [\u0275\u0275InputTransformsFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditableRow, [{
    type: Directive,
    args: [{
      selector: "[pEditableRow]",
      standalone: false
    }]
  }], () => [{
    type: ElementRef
  }], {
    data: [{
      type: Input,
      args: ["pEditableRow"]
    }],
    pEditableRowDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var InitEditableRow = class _InitEditableRow {
  dt;
  editableRow;
  constructor(dt, editableRow) {
    this.dt = dt;
    this.editableRow = editableRow;
  }
  onClick(event2) {
    this.dt.initRowEdit(this.editableRow.data);
    event2.preventDefault();
  }
  static \u0275fac = function InitEditableRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InitEditableRow)(\u0275\u0275directiveInject(Table), \u0275\u0275directiveInject(EditableRow));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _InitEditableRow,
    selectors: [["", "pInitEditableRow", ""]],
    hostAttrs: [1, "p-datatable-row-editor-init"],
    hostBindings: function InitEditableRow_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function InitEditableRow_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        });
      }
    },
    standalone: false
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InitEditableRow, [{
    type: Directive,
    args: [{
      selector: "[pInitEditableRow]",
      standalone: false,
      host: {
        class: "p-datatable-row-editor-init"
      }
    }]
  }], () => [{
    type: Table
  }, {
    type: EditableRow
  }], {
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var SaveEditableRow = class _SaveEditableRow {
  dt;
  editableRow;
  constructor(dt, editableRow) {
    this.dt = dt;
    this.editableRow = editableRow;
  }
  onClick(event2) {
    this.dt.saveRowEdit(this.editableRow.data, this.editableRow.el.nativeElement);
    event2.preventDefault();
  }
  static \u0275fac = function SaveEditableRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SaveEditableRow)(\u0275\u0275directiveInject(Table), \u0275\u0275directiveInject(EditableRow));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _SaveEditableRow,
    selectors: [["", "pSaveEditableRow", ""]],
    hostAttrs: [1, "p-datatable-row-editor-save"],
    hostBindings: function SaveEditableRow_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function SaveEditableRow_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        });
      }
    },
    standalone: false
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SaveEditableRow, [{
    type: Directive,
    args: [{
      selector: "[pSaveEditableRow]",
      standalone: false,
      host: {
        class: "p-datatable-row-editor-save"
      }
    }]
  }], () => [{
    type: Table
  }, {
    type: EditableRow
  }], {
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var CancelEditableRow = class _CancelEditableRow {
  dt;
  editableRow;
  constructor(dt, editableRow) {
    this.dt = dt;
    this.editableRow = editableRow;
  }
  onClick(event2) {
    this.dt.cancelRowEdit(this.editableRow.data);
    event2.preventDefault();
  }
  static \u0275fac = function CancelEditableRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CancelEditableRow)(\u0275\u0275directiveInject(Table), \u0275\u0275directiveInject(EditableRow));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CancelEditableRow,
    selectors: [["", "pCancelEditableRow", ""]],
    hostAttrs: [1, "p-datatable-row-editor-cancel"],
    hostBindings: function CancelEditableRow_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function CancelEditableRow_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        });
      }
    },
    standalone: false
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CancelEditableRow, [{
    type: Directive,
    args: [{
      selector: "[pCancelEditableRow]",
      standalone: false,
      host: {
        class: "p-datatable-row-editor-cancel"
      }
    }]
  }], () => [{
    type: Table
  }, {
    type: EditableRow
  }], {
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var CellEditor = class _CellEditor {
  dt;
  editableColumn;
  editableRow;
  _templates;
  _inputTemplate;
  _outputTemplate;
  inputTemplate;
  outputTemplate;
  constructor(dt, editableColumn, editableRow) {
    this.dt = dt;
    this.editableColumn = editableColumn;
    this.editableRow = editableRow;
  }
  ngAfterContentInit() {
    this._templates.forEach((item) => {
      switch (item.getType()) {
        case "input":
          this.inputTemplate = item.template;
          break;
        case "output":
          this.outputTemplate = item.template;
          break;
      }
    });
  }
  get editing() {
    return this.dt.editingCell && this.editableColumn && this.dt.editingCell === this.editableColumn.el.nativeElement || this.editableRow && this.dt.editMode === "row" && this.dt.isRowEditing(this.editableRow.data);
  }
  static \u0275fac = function CellEditor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CellEditor)(\u0275\u0275directiveInject(Table), \u0275\u0275directiveInject(EditableColumn, 8), \u0275\u0275directiveInject(EditableRow, 8));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CellEditor,
    selectors: [["p-cellEditor"]],
    contentQueries: function CellEditor_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c51, 5);
        \u0275\u0275contentQuery(dirIndex, _c522, 5);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._inputTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._outputTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._templates = _t);
      }
    },
    standalone: false,
    decls: 2,
    vars: 2,
    consts: [[4, "ngIf"], [4, "ngTemplateOutlet"]],
    template: function CellEditor_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, CellEditor_ng_container_0_Template, 2, 1, "ng-container", 0)(1, CellEditor_ng_container_1_Template, 2, 1, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.editing);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.editing);
      }
    },
    dependencies: [NgIf, NgTemplateOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CellEditor, [{
    type: Component,
    args: [{
      selector: "p-cellEditor",
      standalone: false,
      template: `
        <ng-container *ngIf="editing">
            <ng-container *ngTemplateOutlet="inputTemplate || _inputTemplate"></ng-container>
        </ng-container>
        <ng-container *ngIf="!editing">
            <ng-container *ngTemplateOutlet="outputTemplate || _outputTemplate"></ng-container>
        </ng-container>
    `,
      encapsulation: ViewEncapsulation.None
    }]
  }], () => [{
    type: Table
  }, {
    type: EditableColumn,
    decorators: [{
      type: Optional
    }]
  }, {
    type: EditableRow,
    decorators: [{
      type: Optional
    }]
  }], {
    _templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    _inputTemplate: [{
      type: ContentChild,
      args: ["input"]
    }],
    _outputTemplate: [{
      type: ContentChild,
      args: ["output"]
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CellEditor, {
    className: "CellEditor",
    filePath: "table.ts",
    lineNumber: 4838
  });
})();
var TableRadioButton = class _TableRadioButton {
  dt;
  cd;
  disabled;
  value;
  index;
  inputId;
  name;
  ariaLabel;
  inputViewChild;
  checked;
  focused;
  subscription;
  constructor(dt, cd) {
    this.dt = dt;
    this.cd = cd;
    this.subscription = this.dt.tableService.selectionSource$.subscribe(() => {
      this.checked = this.dt.isSelected(this.value);
      this.ariaLabel = this.ariaLabel || this.dt.config.translation.aria ? this.checked ? this.dt.config.translation.aria.selectRow : this.dt.config.translation.aria.unselectRow : void 0;
      this.cd.markForCheck();
    });
  }
  ngOnInit() {
    this.checked = this.dt.isSelected(this.value);
  }
  onClick(event2) {
    if (!this.disabled) {
      this.dt.toggleRowWithRadio({
        originalEvent: event2.originalEvent,
        rowIndex: this.index
      }, this.value);
      this.inputViewChild?.inputViewChild.nativeElement?.focus();
    }
    DomHandler.clearSelection();
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  static \u0275fac = function TableRadioButton_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TableRadioButton)(\u0275\u0275directiveInject(Table), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _TableRadioButton,
    selectors: [["p-tableRadioButton"]],
    viewQuery: function TableRadioButton_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c532, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.inputViewChild = _t.first);
      }
    },
    inputs: {
      disabled: [2, "disabled", "disabled", booleanAttribute],
      value: "value",
      index: [2, "index", "index", numberAttribute],
      inputId: "inputId",
      name: "name",
      ariaLabel: "ariaLabel"
    },
    standalone: false,
    features: [\u0275\u0275InputTransformsFeature],
    decls: 2,
    vars: 7,
    consts: [["rb", ""], [3, "ngModelChange", "onClick", "ngModel", "disabled", "inputId", "name", "ariaLabel", "binary", "value"]],
    template: function TableRadioButton_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "p-radioButton", 1, 0);
        \u0275\u0275twoWayListener("ngModelChange", function TableRadioButton_Template_p_radioButton_ngModelChange_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.checked, $event) || (ctx.checked = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("onClick", function TableRadioButton_Template_p_radioButton_onClick_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onClick($event));
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275twoWayProperty("ngModel", ctx.checked);
        \u0275\u0275property("disabled", ctx.disabled)("inputId", ctx.inputId)("name", ctx.name)("ariaLabel", ctx.ariaLabel)("binary", true)("value", ctx.value);
      }
    },
    dependencies: [NgControlStatus, NgModel, RadioButton],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableRadioButton, [{
    type: Component,
    args: [{
      selector: "p-tableRadioButton",
      standalone: false,
      template: ` <p-radioButton #rb [(ngModel)]="checked" [disabled]="disabled" [inputId]="inputId" [name]="name" [ariaLabel]="ariaLabel" [binary]="true" [value]="value" (onClick)="onClick($event)" /> `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None
    }]
  }], () => [{
    type: Table
  }, {
    type: ChangeDetectorRef
  }], {
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    value: [{
      type: Input
    }],
    index: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    inputId: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    inputViewChild: [{
      type: ViewChild,
      args: ["rb"]
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TableRadioButton, {
    className: "TableRadioButton",
    filePath: "table.ts",
    lineNumber: 4881
  });
})();
var TableCheckbox = class _TableCheckbox {
  dt;
  tableService;
  cd;
  disabled;
  value;
  index;
  inputId;
  name;
  required;
  ariaLabel;
  checked;
  focused;
  subscription;
  constructor(dt, tableService, cd) {
    this.dt = dt;
    this.tableService = tableService;
    this.cd = cd;
    this.subscription = this.dt.tableService.selectionSource$.subscribe(() => {
      this.checked = this.dt.isSelected(this.value) && !this.disabled;
      this.ariaLabel = this.ariaLabel || this.dt.config.translation.aria ? this.checked ? this.dt.config.translation.aria.selectRow : this.dt.config.translation.aria.unselectRow : void 0;
      this.cd.markForCheck();
    });
  }
  ngOnInit() {
    this.checked = this.dt.isSelected(this.value);
  }
  onClick(event2) {
    if (!this.disabled) {
      this.dt.toggleRowWithCheckbox({
        originalEvent: event2,
        rowIndex: this.index
      }, this.value);
    }
    DomHandler.clearSelection();
  }
  onFocus() {
    this.focused = true;
  }
  onBlur() {
    this.focused = false;
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  static \u0275fac = function TableCheckbox_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TableCheckbox)(\u0275\u0275directiveInject(Table), \u0275\u0275directiveInject(TableService), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _TableCheckbox,
    selectors: [["p-tableCheckbox"]],
    inputs: {
      disabled: [2, "disabled", "disabled", booleanAttribute],
      value: "value",
      index: [2, "index", "index", numberAttribute],
      inputId: "inputId",
      name: "name",
      required: [2, "required", "required", booleanAttribute],
      ariaLabel: "ariaLabel"
    },
    standalone: false,
    features: [\u0275\u0275InputTransformsFeature],
    decls: 2,
    vars: 5,
    consts: [[3, "ngModelChange", "onChange", "ngModel", "binary", "disabled", "ariaLabel"], [4, "ngIf"], ["pTemplate", "icon"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function TableCheckbox_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "p-checkbox", 0);
        \u0275\u0275twoWayListener("ngModelChange", function TableCheckbox_Template_p_checkbox_ngModelChange_0_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.checked, $event) || (ctx.checked = $event);
          return $event;
        });
        \u0275\u0275listener("onChange", function TableCheckbox_Template_p_checkbox_onChange_0_listener($event) {
          return ctx.onClick($event);
        });
        \u0275\u0275template(1, TableCheckbox_ng_container_1_Template, 2, 0, "ng-container", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275twoWayProperty("ngModel", ctx.checked);
        \u0275\u0275property("binary", true)("disabled", ctx.disabled)("ariaLabel", ctx.ariaLabel);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.dt.checkboxIconTemplate || ctx.dt._checkboxIconTemplate);
      }
    },
    dependencies: [NgIf, NgTemplateOutlet, PrimeTemplate, NgControlStatus, NgModel, Checkbox],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableCheckbox, [{
    type: Component,
    args: [{
      selector: "p-tableCheckbox",
      standalone: false,
      template: `
        <p-checkbox [(ngModel)]="checked" [binary]="true" (onChange)="onClick($event)" [disabled]="disabled" [ariaLabel]="ariaLabel">
            <ng-container *ngIf="dt.checkboxIconTemplate || dt._checkboxIconTemplate">
                <ng-template pTemplate="icon">
                    <ng-template *ngTemplateOutlet="dt.checkboxIconTemplate || dt._checkboxIconTemplate; context: { $implicit: checked }"></ng-template>
                </ng-template>
            </ng-container>
        </p-checkbox>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None
    }]
  }], () => [{
    type: Table
  }, {
    type: TableService
  }, {
    type: ChangeDetectorRef
  }], {
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    value: [{
      type: Input
    }],
    index: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    inputId: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    ariaLabel: [{
      type: Input
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TableCheckbox, {
    className: "TableCheckbox",
    filePath: "table.ts",
    lineNumber: 4955
  });
})();
var TableHeaderCheckbox = class _TableHeaderCheckbox {
  dt;
  tableService;
  cd;
  disabled;
  inputId;
  name;
  ariaLabel;
  checked;
  focused;
  selectionChangeSubscription;
  valueChangeSubscription;
  constructor(dt, tableService, cd) {
    this.dt = dt;
    this.tableService = tableService;
    this.cd = cd;
    this.valueChangeSubscription = this.dt.tableService.valueSource$.subscribe(() => {
      this.checked = this.updateCheckedState();
      this.ariaLabel = this.ariaLabel || this.dt.config.translation.aria ? this.checked ? this.dt.config.translation.aria.selectAll : this.dt.config.translation.aria.unselectAll : void 0;
    });
    this.selectionChangeSubscription = this.dt.tableService.selectionSource$.subscribe(() => {
      this.checked = this.updateCheckedState();
    });
  }
  ngOnInit() {
    this.checked = this.updateCheckedState();
  }
  onClick(event2) {
    if (!this.disabled) {
      if (this.dt.value && this.dt.value.length > 0) {
        this.dt.toggleRowsWithCheckbox(event2, this.checked);
      }
    }
    DomHandler.clearSelection();
  }
  onFocus() {
    this.focused = true;
  }
  onBlur() {
    this.focused = false;
  }
  isDisabled() {
    return this.disabled || !this.dt.value || !this.dt.value.length;
  }
  ngOnDestroy() {
    if (this.selectionChangeSubscription) {
      this.selectionChangeSubscription.unsubscribe();
    }
    if (this.valueChangeSubscription) {
      this.valueChangeSubscription.unsubscribe();
    }
  }
  updateCheckedState() {
    this.cd.markForCheck();
    if (this.dt._selectAll !== null) {
      return this.dt._selectAll;
    } else {
      const data = this.dt.selectionPageOnly ? this.dt.dataToRender(this.dt.processedData) : this.dt.processedData;
      const val = this.dt.frozenValue ? [...this.dt.frozenValue, ...data] : data;
      const selectableVal = this.dt.rowSelectable ? val.filter((data2, index) => this.dt.rowSelectable({
        data: data2,
        index
      })) : val;
      return ObjectUtils.isNotEmpty(selectableVal) && ObjectUtils.isNotEmpty(this.dt.selection) && selectableVal.every((v) => this.dt.selection.some((s) => this.dt.equals(v, s)));
    }
  }
  static \u0275fac = function TableHeaderCheckbox_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TableHeaderCheckbox)(\u0275\u0275directiveInject(Table), \u0275\u0275directiveInject(TableService), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _TableHeaderCheckbox,
    selectors: [["p-tableHeaderCheckbox"]],
    inputs: {
      disabled: [2, "disabled", "disabled", booleanAttribute],
      inputId: "inputId",
      name: "name",
      ariaLabel: "ariaLabel"
    },
    standalone: false,
    features: [\u0275\u0275InputTransformsFeature],
    decls: 2,
    vars: 5,
    consts: [[3, "ngModelChange", "onChange", "ngModel", "binary", "disabled", "ariaLabel"], [4, "ngIf"], ["pTemplate", "icon"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function TableHeaderCheckbox_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "p-checkbox", 0);
        \u0275\u0275twoWayListener("ngModelChange", function TableHeaderCheckbox_Template_p_checkbox_ngModelChange_0_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.checked, $event) || (ctx.checked = $event);
          return $event;
        });
        \u0275\u0275listener("onChange", function TableHeaderCheckbox_Template_p_checkbox_onChange_0_listener($event) {
          return ctx.onClick($event);
        });
        \u0275\u0275template(1, TableHeaderCheckbox_ng_container_1_Template, 2, 0, "ng-container", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275twoWayProperty("ngModel", ctx.checked);
        \u0275\u0275property("binary", true)("disabled", ctx.isDisabled())("ariaLabel", ctx.ariaLabel);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.dt.headerCheckboxIconTemplate || ctx.dt._headerCheckboxIconTemplate);
      }
    },
    dependencies: [NgIf, NgTemplateOutlet, PrimeTemplate, NgControlStatus, NgModel, Checkbox],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableHeaderCheckbox, [{
    type: Component,
    args: [{
      selector: "p-tableHeaderCheckbox",
      standalone: false,
      template: `
        <p-checkbox [(ngModel)]="checked" (onChange)="onClick($event)" [binary]="true" [disabled]="isDisabled()" [ariaLabel]="ariaLabel">
            <ng-container *ngIf="dt.headerCheckboxIconTemplate || dt._headerCheckboxIconTemplate">
                <ng-template pTemplate="icon">
                    <ng-template *ngTemplateOutlet="dt.headerCheckboxIconTemplate || dt._headerCheckboxIconTemplate; context: { $implicit: checked }"></ng-template>
                </ng-template>
            </ng-container>
        </p-checkbox>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None
    }]
  }], () => [{
    type: Table
  }, {
    type: TableService
  }, {
    type: ChangeDetectorRef
  }], {
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    inputId: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TableHeaderCheckbox, {
    className: "TableHeaderCheckbox",
    filePath: "table.ts",
    lineNumber: 5035
  });
})();
var ReorderableRowHandle = class _ReorderableRowHandle {
  el;
  constructor(el) {
    this.el = el;
  }
  ngAfterViewInit() {
  }
  static \u0275fac = function ReorderableRowHandle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReorderableRowHandle)(\u0275\u0275directiveInject(ElementRef));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _ReorderableRowHandle,
    selectors: [["", "pReorderableRowHandle", ""]],
    hostAttrs: [1, "p-datatable-reorderable-row-handle"],
    standalone: false
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReorderableRowHandle, [{
    type: Directive,
    args: [{
      selector: "[pReorderableRowHandle]",
      standalone: false,
      host: {
        class: "p-datatable-reorderable-row-handle"
      }
    }]
  }], () => [{
    type: ElementRef
  }], null);
})();
var ReorderableRow = class _ReorderableRow {
  renderer;
  dt;
  el;
  zone;
  index;
  pReorderableRowDisabled;
  mouseDownListener;
  dragStartListener;
  dragEndListener;
  dragOverListener;
  dragLeaveListener;
  dropListener;
  constructor(renderer, dt, el, zone) {
    this.renderer = renderer;
    this.dt = dt;
    this.el = el;
    this.zone = zone;
  }
  ngAfterViewInit() {
    if (this.isEnabled()) {
      this.el.nativeElement.droppable = true;
      this.bindEvents();
    }
  }
  bindEvents() {
    this.zone.runOutsideAngular(() => {
      this.mouseDownListener = this.renderer.listen(this.el.nativeElement, "mousedown", this.onMouseDown.bind(this));
      this.dragStartListener = this.renderer.listen(this.el.nativeElement, "dragstart", this.onDragStart.bind(this));
      this.dragEndListener = this.renderer.listen(this.el.nativeElement, "dragend", this.onDragEnd.bind(this));
      this.dragOverListener = this.renderer.listen(this.el.nativeElement, "dragover", this.onDragOver.bind(this));
      this.dragLeaveListener = this.renderer.listen(this.el.nativeElement, "dragleave", this.onDragLeave.bind(this));
    });
  }
  unbindEvents() {
    if (this.mouseDownListener) {
      this.mouseDownListener();
      this.mouseDownListener = null;
    }
    if (this.dragStartListener) {
      this.dragStartListener();
      this.dragStartListener = null;
    }
    if (this.dragEndListener) {
      this.dragEndListener();
      this.dragEndListener = null;
    }
    if (this.dragOverListener) {
      this.dragOverListener();
      this.dragOverListener = null;
    }
    if (this.dragLeaveListener) {
      this.dragLeaveListener();
      this.dragLeaveListener = null;
    }
  }
  onMouseDown(event2) {
    const targetElement = event2.target;
    const isHandleClicked = this.isHandleElement(targetElement);
    this.el.nativeElement.draggable = isHandleClicked;
  }
  isHandleElement(element) {
    if (element?.classList.contains("p-datatable-reorderable-row-handle")) {
      return true;
    }
    if (element?.parentElement && !["TD", "TR"].includes(element?.parentElement?.tagName)) {
      return this.isHandleElement(element?.parentElement);
    }
    return false;
  }
  onDragStart(event2) {
    this.dt.onRowDragStart(event2, this.index);
  }
  onDragEnd(event2) {
    this.dt.onRowDragEnd(event2);
    this.el.nativeElement.draggable = false;
  }
  onDragOver(event2) {
    this.dt.onRowDragOver(event2, this.index, this.el.nativeElement);
    event2.preventDefault();
  }
  onDragLeave(event2) {
    this.dt.onRowDragLeave(event2, this.el.nativeElement);
  }
  isEnabled() {
    return this.pReorderableRowDisabled !== true;
  }
  onDrop(event2) {
    if (this.isEnabled() && this.dt.rowDragging) {
      this.dt.onRowDrop(event2, this.el.nativeElement);
    }
    event2.preventDefault();
  }
  ngOnDestroy() {
    this.unbindEvents();
  }
  static \u0275fac = function ReorderableRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReorderableRow)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(Table), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _ReorderableRow,
    selectors: [["", "pReorderableRow", ""]],
    hostBindings: function ReorderableRow_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("drop", function ReorderableRow_drop_HostBindingHandler($event) {
          return ctx.onDrop($event);
        });
      }
    },
    inputs: {
      index: [0, "pReorderableRow", "index"],
      pReorderableRowDisabled: [2, "pReorderableRowDisabled", "pReorderableRowDisabled", booleanAttribute]
    },
    standalone: false,
    features: [\u0275\u0275InputTransformsFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReorderableRow, [{
    type: Directive,
    args: [{
      selector: "[pReorderableRow]",
      standalone: false
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: Table
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    index: [{
      type: Input,
      args: ["pReorderableRow"]
    }],
    pReorderableRowDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onDrop: [{
      type: HostListener,
      args: ["drop", ["$event"]]
    }]
  });
})();
var ColumnFilter = class _ColumnFilter extends BaseComponent {
  /**
   * Property represented by the column.
   * @group Props
   */
  field;
  /**
   * Type of the input.
   * @group Props
   */
  type = "text";
  /**
   * Filter display.
   * @group Props
   */
  display = "row";
  /**
   * Decides whether to display filter menu popup.
   * @group Props
   */
  showMenu = true;
  /**
   * Filter match mode.
   * @group Props
   */
  matchMode;
  /**
   * Filter operator.
   * @defaultValue 'AND'
   * @group Props
   */
  operator = FilterOperator.AND;
  /**
   * Decides whether to display filter operator.
   * @group Props
   */
  showOperator = true;
  /**
   * Decides whether to display clear filter button.
   * @group Props
   */
  showClearButton = true;
  /**
   * Decides whether to display apply filter button.
   * @group Props
   */
  showApplyButton = true;
  /**
   * Decides whether to display filter match modes.
   * @group Props
   */
  showMatchModes = true;
  /**
   * Decides whether to display add filter button.
   * @group Props
   */
  showAddButton = true;
  /**
   * Decides whether to close popup on clear button click.
   * @group Props
   */
  hideOnClear = false;
  /**
   * Filter placeholder.
   * @group Props
   */
  placeholder;
  /**
   * Filter match mode options.
   * @group Props
   */
  matchModeOptions;
  /**
   * Defines maximum amount of constraints.
   * @group Props
   */
  maxConstraints = 2;
  /**
   * Defines minimum fraction of digits.
   * @group Props
   */
  minFractionDigits;
  /**
   * Defines maximum fraction of digits.
   * @group Props
   */
  maxFractionDigits;
  /**
   * Defines prefix of the filter.
   * @group Props
   */
  prefix;
  /**
   * Defines suffix of the filter.
   * @group Props
   */
  suffix;
  /**
   * Defines filter locale.
   * @group Props
   */
  locale;
  /**
   * Defines filter locale matcher.
   * @group Props
   */
  localeMatcher;
  /**
   * Enables currency input.
   * @group Props
   */
  currency;
  /**
   * Defines the display of the currency input.
   * @group Props
   */
  currencyDisplay;
  /**
   * Defines if filter grouping will be enabled.
   * @group Props
   */
  useGrouping = true;
  /**
   * Defines the visibility of buttons.
   * @group Props
   */
  showButtons = true;
  /**
   * Defines the aria-label of the form element.
   * @group Props
   */
  ariaLabel;
  /**
   * Used to pass all filter button property object
   * @defaultValue {
   filter: { severity: 'secondary', text: true, rounded: true },
   inline: {
   clear: { severity: 'secondary', text: true, rounded: true }
   },
   popover: {
   addRule: { severity: 'info', text: true, size: 'small' },
   removeRule: { severity: 'danger', text: true, size: 'small' },
   apply: { size: 'small' },
   clear: { outlined: true, size: 'small' }
   }
   }
   */
  filterButtonProps = {
    filter: {
      severity: "secondary",
      text: true,
      rounded: true
    },
    inline: {
      clear: {
        severity: "secondary",
        text: true,
        rounded: true
      }
    },
    popover: {
      addRule: {
        severity: "info",
        text: true,
        size: "small"
      },
      removeRule: {
        severity: "danger",
        text: true,
        size: "small"
      },
      apply: {
        size: "small"
      },
      clear: {
        outlined: true,
        size: "small"
      }
    }
  };
  /**
   * Callback to invoke on overlay is shown.
   * @param {AnimationEvent} originalEvent - animation event.
   * @group Emits
   */
  onShow = new EventEmitter();
  /**
   * Callback to invoke on overlay is hidden.
   * @param {AnimationEvent} originalEvent - animation event.
   * @group Emits
   */
  onHide = new EventEmitter();
  icon;
  clearButtonViewChild;
  _templates;
  overlaySubscription;
  _headerTemplate;
  headerTemplate;
  _filterTemplate;
  filterTemplate;
  _footerTemplate;
  footerTemplate;
  _filterIconTemplate;
  filterIconTemplate;
  _removeRuleIconTemplate;
  removeRuleIconTemplate;
  _addRuleIconTemplate;
  addRuleIconTemplate;
  _clearFilterIconTemplate;
  clearFilterIconTemplate;
  operatorOptions;
  overlayVisible;
  overlay;
  scrollHandler;
  documentClickListener;
  documentResizeListener;
  matchModes;
  translationSubscription;
  resetSubscription;
  selfClick;
  overlayEventListener;
  overlayId;
  get fieldConstraints() {
    return this.dt.filters ? this.dt.filters[this.field] : null;
  }
  get showRemoveIcon() {
    return this.fieldConstraints ? this.fieldConstraints.length > 1 : false;
  }
  get showMenuButton() {
    return this.showMenu && (this.display === "row" ? this.type !== "boolean" : true);
  }
  get isShowOperator() {
    return this.showOperator && this.type !== "boolean";
  }
  get isShowAddConstraint() {
    return this.showAddButton && this.type !== "boolean" && this.fieldConstraints && this.fieldConstraints.length < this.maxConstraints;
  }
  get showMenuButtonLabel() {
    return this.config.getTranslation(TranslationKeys.SHOW_FILTER_MENU);
  }
  get applyButtonLabel() {
    return this.config.getTranslation(TranslationKeys.APPLY);
  }
  get clearButtonLabel() {
    return this.config.getTranslation(TranslationKeys.CLEAR);
  }
  get addRuleButtonLabel() {
    return this.config.getTranslation(TranslationKeys.ADD_RULE);
  }
  get removeRuleButtonLabel() {
    return this.config.getTranslation(TranslationKeys.REMOVE_RULE);
  }
  get noFilterLabel() {
    return this.config.getTranslation(TranslationKeys.NO_FILTER);
  }
  get filterMenuButtonAriaLabel() {
    return this.config.translation ? this.overlayVisible ? this.config.translation.aria.hideFilterMenu : this.config.translation.aria.showFilterMenu : void 0;
  }
  get removeRuleButtonAriaLabel() {
    return this.config.translation ? this.config.translation.removeRule : void 0;
  }
  get filterOperatorAriaLabel() {
    return this.config.translation ? this.config.translation.aria.filterOperator : void 0;
  }
  get filterConstraintAriaLabel() {
    return this.config.translation ? this.config.translation.aria.filterConstraint : void 0;
  }
  dt = inject(Table);
  overlayService = inject(OverlayService);
  hostName = "Table";
  parentInstance = inject(forwardRef(() => Table));
  ngOnInit() {
    super.ngOnInit();
    this.overlayId = UniqueComponentId();
    if (!this.dt.filters[this.field]) {
      this.initFieldFilterConstraint();
    }
    this.translationSubscription = this.config.translationObserver.subscribe(() => {
      this.generateMatchModeOptions();
      this.generateOperatorOptions();
    });
    this.generateMatchModeOptions();
    this.generateOperatorOptions();
  }
  generateMatchModeOptions() {
    this.matchModes = this.matchModeOptions || this.config.filterMatchModeOptions[this.type]?.map((key) => {
      return {
        label: this.config.getTranslation(key),
        value: key
      };
    });
  }
  generateOperatorOptions() {
    this.operatorOptions = [{
      label: this.config.getTranslation(TranslationKeys.MATCH_ALL),
      value: FilterOperator.AND
    }, {
      label: this.config.getTranslation(TranslationKeys.MATCH_ANY),
      value: FilterOperator.OR
    }];
  }
  ngAfterContentInit() {
    this._templates.forEach((item) => {
      switch (item.getType()) {
        case "header":
          this.headerTemplate = item.template;
          break;
        case "filter":
          this.filterTemplate = item.template;
          break;
        case "footer":
          this.footerTemplate = item.template;
          break;
        case "filtericon":
          this.filterIconTemplate = item.template;
          break;
        case "clearfiltericon":
          this.clearFilterIconTemplate = item.template;
          break;
        case "removeruleicon":
          this.removeRuleIconTemplate = item.template;
          break;
        case "addruleicon":
          this.addRuleIconTemplate = item.template;
          break;
        default:
          this.filterTemplate = item.template;
          break;
      }
    });
  }
  initFieldFilterConstraint() {
    let defaultMatchMode = this.getDefaultMatchMode();
    this.dt.filters[this.field] = this.display == "row" ? {
      value: null,
      matchMode: defaultMatchMode
    } : [{
      value: null,
      matchMode: defaultMatchMode,
      operator: this.operator
    }];
  }
  onMenuMatchModeChange(value, filterMeta) {
    filterMeta.matchMode = value;
    if (!this.showApplyButton) {
      this.dt._filter();
    }
  }
  onRowMatchModeChange(matchMode) {
    const fieldFilter = this.dt.filters[this.field];
    fieldFilter.matchMode = matchMode;
    if (fieldFilter.value) {
      this.dt._filter();
    }
    this.hide();
  }
  onRowMatchModeKeyDown(event2) {
    let item = event2.target;
    switch (event2.key) {
      case "ArrowDown":
        var nextItem = this.findNextItem(item);
        if (nextItem) {
          item.removeAttribute("tabindex");
          nextItem.tabIndex = "0";
          nextItem.focus();
        }
        event2.preventDefault();
        break;
      case "ArrowUp":
        var prevItem = this.findPrevItem(item);
        if (prevItem) {
          item.removeAttribute("tabindex");
          prevItem.tabIndex = "0";
          prevItem.focus();
        }
        event2.preventDefault();
        break;
    }
  }
  onRowClearItemClick() {
    this.clearFilter();
    this.hide();
  }
  isRowMatchModeSelected(matchMode) {
    return this.dt.filters[this.field].matchMode === matchMode;
  }
  addConstraint() {
    this.dt.filters[this.field].push({
      value: null,
      matchMode: this.getDefaultMatchMode(),
      operator: this.getDefaultOperator()
    });
    DomHandler.focus(this.clearButtonViewChild.nativeElement);
  }
  removeConstraint(filterMeta) {
    this.dt.filters[this.field] = this.dt.filters[this.field].filter((meta) => meta !== filterMeta);
    if (!this.showApplyButton) {
      this.dt._filter();
    }
    DomHandler.focus(this.clearButtonViewChild.nativeElement);
  }
  onOperatorChange(value) {
    this.dt.filters[this.field].forEach((filterMeta) => {
      filterMeta.operator = value;
      this.operator = value;
    });
    if (!this.showApplyButton) {
      this.dt._filter();
    }
  }
  toggleMenu(event2) {
    this.overlayVisible = !this.overlayVisible;
    event2.stopPropagation();
  }
  onToggleButtonKeyDown(event2) {
    switch (event2.key) {
      case "Escape":
      case "Tab":
        this.overlayVisible = false;
        break;
      case "ArrowDown":
        if (this.overlayVisible) {
          let focusable = DomHandler.getFocusableElements(this.overlay);
          if (focusable) {
            focusable[0].focus();
          }
          event2.preventDefault();
        } else if (event2.altKey) {
          this.overlayVisible = true;
          event2.preventDefault();
        }
        break;
      case "Enter":
        this.toggleMenu(event2);
        event2.preventDefault();
        break;
    }
  }
  onEscape() {
    this.overlayVisible = false;
    this.icon?.nativeElement.focus();
  }
  findNextItem(item) {
    let nextItem = item.nextElementSibling;
    if (nextItem) return DomHandler.hasClass(nextItem, "p-datatable-filter-constraint-separator") ? this.findNextItem(nextItem) : nextItem;
    else return item.parentElement?.firstElementChild;
  }
  findPrevItem(item) {
    let prevItem = item.previousElementSibling;
    if (prevItem) return DomHandler.hasClass(prevItem, "p-datatable-filter-constraint-separator") ? this.findPrevItem(prevItem) : prevItem;
    else return item.parentElement?.lastElementChild;
  }
  onContentClick() {
    this.selfClick = true;
  }
  onOverlayAnimationStart(event2) {
    switch (event2.toState) {
      case "visible":
        this.overlay = event2.element;
        this.renderer.appendChild(this.document.body, this.overlay);
        zindexutils.set("overlay", this.overlay, this.config.zIndex.overlay);
        DomHandler.absolutePosition(this.overlay, this.icon?.nativeElement);
        this.bindDocumentClickListener();
        this.bindDocumentResizeListener();
        this.bindScrollListener();
        this.overlayEventListener = (e) => {
          if (this.overlay && this.overlay.contains(e.target)) {
            this.selfClick = true;
          }
        };
        this.overlaySubscription = this.overlayService.clickObservable.subscribe(this.overlayEventListener);
        this.onShow.emit({
          originalEvent: event2
        });
        break;
      case "void":
        this.onOverlayHide();
        if (this.overlaySubscription) {
          this.overlaySubscription.unsubscribe();
        }
        break;
    }
  }
  onOverlayAnimationEnd(event2) {
    switch (event2.toState) {
      case "visible":
        this.focusOnFirstElement();
        break;
      case "void":
        zindexutils.clear(event2.element);
        this.onHide.emit({
          originalEvent: event2
        });
        break;
    }
  }
  focusOnFirstElement() {
    if (this.overlay) {
      DomHandler.focus(DomHandler.getFirstFocusableElement(this.overlay, ""));
    }
  }
  getDefaultMatchMode() {
    if (this.matchMode) {
      return this.matchMode;
    } else {
      if (this.type === "text") return FilterMatchMode.STARTS_WITH;
      else if (this.type === "numeric") return FilterMatchMode.EQUALS;
      else if (this.type === "date") return FilterMatchMode.DATE_IS;
      else return FilterMatchMode.CONTAINS;
    }
  }
  getDefaultOperator() {
    return this.dt.filters ? this.dt.filters[this.field][0].operator : this.operator;
  }
  hasRowFilter() {
    return this.dt.filters[this.field] && !this.dt.isFilterBlank(this.dt.filters[this.field].value);
  }
  get hasFilter() {
    let fieldFilter = this.dt.filters[this.field];
    if (fieldFilter) {
      if (Array.isArray(fieldFilter)) return !this.dt.isFilterBlank(fieldFilter[0].value);
      else return !this.dt.isFilterBlank(fieldFilter.value);
    }
    return false;
  }
  isOutsideClicked(event2) {
    return !(DomHandler.hasClass(this.overlay?.nextElementSibling, "p-overlay") || DomHandler.hasClass(this.overlay?.nextElementSibling, "p-popover") || this.overlay?.isSameNode(event2.target) || this.overlay?.contains(event2.target) || this.icon?.nativeElement.isSameNode(event2.target) || this.icon?.nativeElement.contains(event2.target) || DomHandler.hasClass(event2.target, "p-datatable-filter-add-rule-button") || DomHandler.hasClass(event2.target.parentElement, "p-datatable-filter-add-rule-button") || DomHandler.hasClass(event2.target, "p-datatable-filter-remove-rule-button") || DomHandler.hasClass(event2.target.parentElement, "p-datatable-filter-remove-rule-button"));
  }
  bindDocumentClickListener() {
    if (!this.documentClickListener) {
      const documentTarget = this.el ? this.el.nativeElement.ownerDocument : "document";
      this.documentClickListener = this.renderer.listen(documentTarget, "mousedown", (event2) => {
        const dialogElements = document.querySelectorAll('[role="dialog"]');
        const targetIsColumnFilterMenuButton = event2.target.closest(".p-datatable-column-filter-button");
        if (this.overlayVisible && this.isOutsideClicked(event2) && (targetIsColumnFilterMenuButton || dialogElements?.length <= 1)) {
          this.hide();
        }
        this.selfClick = false;
      });
    }
  }
  unbindDocumentClickListener() {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
      this.selfClick = false;
    }
  }
  bindDocumentResizeListener() {
    if (!this.documentResizeListener) {
      this.documentResizeListener = this.renderer.listen(this.document.defaultView, "resize", (event2) => {
        if (this.overlayVisible && !DomHandler.isTouchDevice()) {
          this.hide();
        }
      });
    }
  }
  unbindDocumentResizeListener() {
    if (this.documentResizeListener) {
      this.documentResizeListener();
      this.documentResizeListener = null;
    }
  }
  bindScrollListener() {
    if (!this.scrollHandler) {
      this.scrollHandler = new ConnectedOverlayScrollHandler(this.icon?.nativeElement, () => {
        if (this.overlayVisible) {
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
  hide() {
    this.overlayVisible = false;
    this.cd.markForCheck();
  }
  onOverlayHide() {
    this.unbindDocumentClickListener();
    this.unbindDocumentResizeListener();
    this.unbindScrollListener();
    this.overlay = null;
  }
  clearFilter() {
    this.initFieldFilterConstraint();
    this.dt._filter();
    if (this.hideOnClear) this.hide();
  }
  applyFilter() {
    this.dt._filter();
    this.hide();
  }
  ngOnDestroy() {
    if (this.overlay) {
      this.renderer.appendChild(this.el.nativeElement, this.overlay);
      zindexutils.clear(this.overlay);
      this.onOverlayHide();
    }
    if (this.translationSubscription) {
      this.translationSubscription.unsubscribe();
    }
    if (this.resetSubscription) {
      this.resetSubscription.unsubscribe();
    }
    if (this.overlaySubscription) {
      this.overlaySubscription.unsubscribe();
    }
    super.ngOnDestroy();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ColumnFilter_BaseFactory;
    return function ColumnFilter_Factory(__ngFactoryType__) {
      return (\u0275ColumnFilter_BaseFactory || (\u0275ColumnFilter_BaseFactory = \u0275\u0275getInheritedFactory(_ColumnFilter)))(__ngFactoryType__ || _ColumnFilter);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ColumnFilter,
    selectors: [["p-columnFilter"]],
    contentQueries: function ColumnFilter_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c05, 4);
        \u0275\u0275contentQuery(dirIndex, _c54, 4);
        \u0275\u0275contentQuery(dirIndex, _c53, 4);
        \u0275\u0275contentQuery(dirIndex, _c55, 4);
        \u0275\u0275contentQuery(dirIndex, _c56, 4);
        \u0275\u0275contentQuery(dirIndex, _c57, 4);
        \u0275\u0275contentQuery(dirIndex, _c58, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._headerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._filterTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._footerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._filterIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._removeRuleIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._addRuleIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._clearFilterIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._templates = _t);
      }
    },
    viewQuery: function ColumnFilter_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(Button, 5, ElementRef);
        \u0275\u0275viewQuery(_c59, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.icon = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.clearButtonViewChild = _t.first);
      }
    },
    inputs: {
      field: "field",
      type: "type",
      display: "display",
      showMenu: [2, "showMenu", "showMenu", booleanAttribute],
      matchMode: "matchMode",
      operator: "operator",
      showOperator: [2, "showOperator", "showOperator", booleanAttribute],
      showClearButton: [2, "showClearButton", "showClearButton", booleanAttribute],
      showApplyButton: [2, "showApplyButton", "showApplyButton", booleanAttribute],
      showMatchModes: [2, "showMatchModes", "showMatchModes", booleanAttribute],
      showAddButton: [2, "showAddButton", "showAddButton", booleanAttribute],
      hideOnClear: [2, "hideOnClear", "hideOnClear", booleanAttribute],
      placeholder: "placeholder",
      matchModeOptions: "matchModeOptions",
      maxConstraints: [2, "maxConstraints", "maxConstraints", numberAttribute],
      minFractionDigits: [2, "minFractionDigits", "minFractionDigits", (value) => numberAttribute(value, null)],
      maxFractionDigits: [2, "maxFractionDigits", "maxFractionDigits", (value) => numberAttribute(value, null)],
      prefix: "prefix",
      suffix: "suffix",
      locale: "locale",
      localeMatcher: "localeMatcher",
      currency: "currency",
      currencyDisplay: "currencyDisplay",
      useGrouping: [2, "useGrouping", "useGrouping", booleanAttribute],
      showButtons: [2, "showButtons", "showButtons", booleanAttribute],
      ariaLabel: "ariaLabel",
      filterButtonProps: "filterButtonProps"
    },
    outputs: {
      onShow: "onShow",
      onHide: "onHide"
    },
    standalone: false,
    features: [\u0275\u0275InputTransformsFeature, \u0275\u0275InheritDefinitionFeature],
    decls: 5,
    vars: 5,
    consts: [["icon", ""], ["menu", ""], ["clearBtn", ""], [3, "ngClass"], ["class", "p-fluid", 3, "type", "field", "ariaLabel", "filterConstraint", "filterTemplate", "placeholder", "minFractionDigits", "maxFractionDigits", "prefix", "suffix", "locale", "localeMatcher", "currency", "currencyDisplay", "useGrouping", "showButtons", 4, "ngIf"], [3, "styleClass", "ariaLabel", "buttonProps", "click", "keydown", 4, "ngIf"], [3, "styleClass", "ariaLabel", "buttonProps", "onClick", 4, "ngIf"], ["role", "dialog", 3, "ngClass", "id", "click", "keydown.escape", 4, "ngIf"], [1, "p-fluid", 3, "type", "field", "ariaLabel", "filterConstraint", "filterTemplate", "placeholder", "minFractionDigits", "maxFractionDigits", "prefix", "suffix", "locale", "localeMatcher", "currency", "currencyDisplay", "useGrouping", "showButtons"], [3, "click", "keydown", "styleClass", "ariaLabel", "buttonProps"], [4, "ngIf"], ["class", "pi-filter-icon", 4, "ngIf"], [1, "pi-filter-icon"], [4, "ngTemplateOutlet"], [3, "onClick", "styleClass", "ariaLabel", "buttonProps"], ["role", "dialog", 3, "click", "keydown.escape", "ngClass", "id"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngClass", 4, "ngIf", "ngIfElse"], [3, "ngClass", "p-datatable-filter-constraint-selected", "click", "keydown", "keydown.enter", 4, "ngFor", "ngForOf"], [3, "click", "keydown", "keydown.enter", "ngClass"], [3, "ngClass", 4, "ngIf"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "outlined", "label", "buttonProps", "onClick", 4, "ngIf"], ["size", "small", 3, "label", "buttonProps", "onClick", 4, "ngIf"], [3, "ngModelChange", "options", "ngModel", "styleClass"], [3, "options", "ngModel", "styleClass", "ngModelChange", 4, "ngIf"], [3, "type", "field", "filterConstraint", "filterTemplate", "placeholder", "minFractionDigits", "maxFractionDigits", "prefix", "suffix", "locale", "localeMatcher", "currency", "currencyDisplay", "useGrouping"], ["severity", "danger", "size", "small", 3, "styleClass", "text", "ariaLabel", "label", "buttonProps", "onClick", 4, "ngIf"], ["severity", "danger", "size", "small", 3, "onClick", "styleClass", "text", "ariaLabel", "label", "buttonProps"], ["type", "button", "size", "small", 3, "onClick", "label", "styleClass", "text", "buttonProps"], [3, "onClick", "outlined", "label", "buttonProps"], ["size", "small", 3, "onClick", "label", "buttonProps"]],
    template: function ColumnFilter_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 3);
        \u0275\u0275template(1, ColumnFilter_p_columnFilterFormElement_1_Template, 1, 16, "p-columnFilterFormElement", 4)(2, ColumnFilter_p_button_2_Template, 3, 6, "p-button", 5)(3, ColumnFilter_p_button_3_Template, 3, 3, "p-button", 6)(4, ColumnFilter_div_4_Template, 6, 14, "div", 7);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("ngClass", ctx.cx("filter"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.display === "row");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showMenuButton);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showClearButton && ctx.display === "row" && ctx.hasFilter);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showMenu && ctx.overlayVisible);
      }
    },
    dependencies: () => [NgClass, NgForOf, NgIf, NgTemplateOutlet, Select, NgControlStatus, NgModel, Button, FilterIcon, FilterSlashIcon, PlusIcon, TrashIcon, ColumnFilterFormElement],
    encapsulation: 2,
    data: {
      animation: [trigger("overlayAnimation", [transition(":enter", [style({
        opacity: 0,
        transform: "scaleY(0.8)"
      }), animate(".12s cubic-bezier(0, 0, 0.2, 1)")]), transition(":leave", [animate(".1s linear", style({
        opacity: 0
      }))])])]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColumnFilter, [{
    type: Component,
    args: [{
      selector: "p-columnFilter",
      standalone: false,
      template: `
        <div [ngClass]="cx('filter')">
            <p-columnFilterFormElement
                *ngIf="display === 'row'"
                class="p-fluid"
                [type]="type"
                [field]="field"
                [ariaLabel]="ariaLabel"
                [filterConstraint]="dt.filters[field]"
                [filterTemplate]="filterTemplate"
                [placeholder]="placeholder"
                [minFractionDigits]="minFractionDigits"
                [maxFractionDigits]="maxFractionDigits"
                [prefix]="prefix"
                [suffix]="suffix"
                [locale]="locale"
                [localeMatcher]="localeMatcher"
                [currency]="currency"
                [currencyDisplay]="currencyDisplay"
                [useGrouping]="useGrouping"
                [showButtons]="showButtons"
            ></p-columnFilterFormElement>
            <p-button
                *ngIf="showMenuButton"
                [styleClass]="cx('pcColumnFilterButton')"
                [attr.aria-haspopup]="true"
                [ariaLabel]="filterMenuButtonAriaLabel"
                [attr.aria-controls]="overlayVisible ? overlayId : null"
                [attr.aria-expanded]="overlayVisible ?? false"
                (click)="toggleMenu($event)"
                (keydown)="onToggleButtonKeyDown($event)"
                [buttonProps]="filterButtonProps?.filter"
            >
                <ng-template #icon>
                    <FilterIcon *ngIf="!filterIconTemplate && !_filterIconTemplate" />
                    <span class="pi-filter-icon" *ngIf="filterIconTemplate || _filterIconTemplate">
                        <ng-template *ngTemplateOutlet="filterIconTemplate || _filterIconTemplate"></ng-template>
                    </span>
                </ng-template>
            </p-button>
            <p-button *ngIf="showClearButton && display === 'row' && hasFilter" [styleClass]="cx('pcColumnfilterClearButton')" (onClick)="clearFilter()" [ariaLabel]="clearButtonLabel" [buttonProps]="filterButtonProps?.inline?.clear">
                <ng-template #icon>
                    <FilterSlashIcon *ngIf="!clearFilterIconTemplate && !_clearFilterIconTemplate" />
                    <ng-template *ngTemplateOutlet="clearFilterIconTemplate || _clearFilterIconTemplate"></ng-template>
                </ng-template>
            </p-button>
            <div
                *ngIf="showMenu && overlayVisible"
                [ngClass]="cx('filterOverlay')"
                [id]="overlayId"
                [attr.aria-modal]="true"
                role="dialog"
                (click)="onContentClick()"
                [@overlayAnimation]="'visible'"
                (@overlayAnimation.start)="onOverlayAnimationStart($event)"
                (@overlayAnimation.done)="onOverlayAnimationEnd($event)"
                (keydown.escape)="onEscape()"
            >
                <ng-container *ngTemplateOutlet="headerTemplate || _headerTemplate; context: { $implicit: field }"></ng-container>
                <ul *ngIf="display === 'row'; else menu" [ngClass]="cx('filterConstraintList')">
                    <li
                        *ngFor="let matchMode of matchModes; let i = index"
                        (click)="onRowMatchModeChange(matchMode.value)"
                        (keydown)="onRowMatchModeKeyDown($event)"
                        (keydown.enter)="onRowMatchModeChange(matchMode.value)"
                        [ngClass]="cx('filterConstraint')"
                        [class.p-datatable-filter-constraint-selected]="isRowMatchModeSelected(matchMode.value)"
                        [attr.tabindex]="i === 0 ? '0' : null"
                    >
                        {{ matchMode.label }}
                    </li>
                    <li [ngClass]="cx('filterConstraintSeparator')"></li>
                    <li [ngClass]="cx('filterConstraint')" (click)="onRowClearItemClick()" (keydown)="onRowMatchModeKeyDown($event)" (keydown.enter)="onRowClearItemClick()">
                        {{ noFilterLabel }}
                    </li>
                </ul>
                <ng-template #menu>
                    <div [ngClass]="cx('filterOperator')" *ngIf="isShowOperator">
                        <p-select [options]="operatorOptions" [ngModel]="operator" (ngModelChange)="onOperatorChange($event)" [styleClass]="cx('pcFilterOperatorDropdown')"></p-select>
                    </div>
                    <div [ngClass]="cx('filterRuleList')">
                        <div *ngFor="let fieldConstraint of fieldConstraints; let i = index" [ngClass]="cx('filterRule')">
                            <p-select
                                *ngIf="showMatchModes && matchModes"
                                [options]="matchModes"
                                [ngModel]="fieldConstraint.matchMode"
                                (ngModelChange)="onMenuMatchModeChange($event, fieldConstraint)"
                                [styleClass]="cx('pcFilterConstraintDropdown')"
                            ></p-select>
                            <p-columnFilterFormElement
                                [type]="type"
                                [field]="field"
                                [filterConstraint]="fieldConstraint"
                                [filterTemplate]="filterTemplate || _filterTemplate"
                                [placeholder]="placeholder"
                                [minFractionDigits]="minFractionDigits"
                                [maxFractionDigits]="maxFractionDigits"
                                [prefix]="prefix"
                                [suffix]="suffix"
                                [locale]="locale"
                                [localeMatcher]="localeMatcher"
                                [currency]="currency"
                                [currencyDisplay]="currencyDisplay"
                                [useGrouping]="useGrouping"
                            ></p-columnFilterFormElement>
                            <div>
                                <p-button
                                    *ngIf="showRemoveIcon"
                                    [styleClass]="cx('pcFilterRemoveRuleButton')"
                                    [text]="true"
                                    severity="danger"
                                    size="small"
                                    (onClick)="removeConstraint(fieldConstraint)"
                                    [ariaLabel]="removeRuleButtonLabel"
                                    [label]="removeRuleButtonLabel"
                                    [buttonProps]="filterButtonProps?.popover?.removeRule"
                                >
                                    <TrashIcon *ngIf="!removeRuleIconTemplate && !_removeRuleIconTemplate" />
                                    <ng-template *ngTemplateOutlet="removeRuleIconTemplate || _removeRuleIconTemplate"></ng-template>
                                </p-button>
                            </div>
                        </div>
                    </div>
                    <div *ngIf="isShowAddConstraint">
                        <p-button
                            type="button"
                            [label]="addRuleButtonLabel"
                            [attr.aria-label]="addRuleButtonLabel"
                            [styleClass]="cx('pcFilterAddRuleButton')"
                            [text]="true"
                            size="small"
                            (onClick)="addConstraint()"
                            [buttonProps]="filterButtonProps?.popover?.addRule"
                        >
                            <PlusIcon *ngIf="!addRuleIconTemplate && !_addRuleIconTemplate" />
                            <ng-template *ngTemplateOutlet="addRuleIconTemplate || _addRuleIconTemplate"></ng-template>
                        </p-button>
                    </div>
                    <div [ngClass]="cx('filterButtonbar')">
                        <p-button #clearBtn *ngIf="showClearButton" [outlined]="true" (onClick)="clearFilter()" [attr.aria-label]="clearButtonLabel" [label]="clearButtonLabel" [buttonProps]="filterButtonProps?.popover?.clear" />
                        <p-button *ngIf="showApplyButton" (onClick)="applyFilter()" size="small" [label]="applyButtonLabel" [attr.aria-label]="applyButtonLabel" [buttonProps]="filterButtonProps?.popover?.apply" />
                    </div>
                </ng-template>
                <ng-container *ngTemplateOutlet="footerTemplate || _footerTemplate; context: { $implicit: field }"></ng-container>
            </div>
        </div>
    `,
      animations: [trigger("overlayAnimation", [transition(":enter", [style({
        opacity: 0,
        transform: "scaleY(0.8)"
      }), animate(".12s cubic-bezier(0, 0, 0.2, 1)")]), transition(":leave", [animate(".1s linear", style({
        opacity: 0
      }))])])],
      encapsulation: ViewEncapsulation.None
    }]
  }], null, {
    field: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    display: [{
      type: Input
    }],
    showMenu: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    matchMode: [{
      type: Input
    }],
    operator: [{
      type: Input
    }],
    showOperator: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showClearButton: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showApplyButton: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showMatchModes: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showAddButton: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hideOnClear: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    placeholder: [{
      type: Input
    }],
    matchModeOptions: [{
      type: Input
    }],
    maxConstraints: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    minFractionDigits: [{
      type: Input,
      args: [{
        transform: (value) => numberAttribute(value, null)
      }]
    }],
    maxFractionDigits: [{
      type: Input,
      args: [{
        transform: (value) => numberAttribute(value, null)
      }]
    }],
    prefix: [{
      type: Input
    }],
    suffix: [{
      type: Input
    }],
    locale: [{
      type: Input
    }],
    localeMatcher: [{
      type: Input
    }],
    currency: [{
      type: Input
    }],
    currencyDisplay: [{
      type: Input
    }],
    useGrouping: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showButtons: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    ariaLabel: [{
      type: Input
    }],
    filterButtonProps: [{
      type: Input
    }],
    onShow: [{
      type: Output
    }],
    onHide: [{
      type: Output
    }],
    icon: [{
      type: ViewChild,
      args: [Button, {
        static: false,
        read: ElementRef
      }]
    }],
    clearButtonViewChild: [{
      type: ViewChild,
      args: ["clearBtn"]
    }],
    _templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    _headerTemplate: [{
      type: ContentChild,
      args: ["header", {
        descendants: false
      }]
    }],
    _filterTemplate: [{
      type: ContentChild,
      args: ["filter", {
        descendants: false
      }]
    }],
    _footerTemplate: [{
      type: ContentChild,
      args: ["footer", {
        descendants: false
      }]
    }],
    _filterIconTemplate: [{
      type: ContentChild,
      args: ["filtericon", {
        descendants: false
      }]
    }],
    _removeRuleIconTemplate: [{
      type: ContentChild,
      args: ["removeruleicon", {
        descendants: false
      }]
    }],
    _addRuleIconTemplate: [{
      type: ContentChild,
      args: ["addruleicon", {
        descendants: false
      }]
    }],
    _clearFilterIconTemplate: [{
      type: ContentChild,
      args: ["clearfiltericon", {
        descendants: false
      }]
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ColumnFilter, {
    className: "ColumnFilter",
    filePath: "table.ts",
    lineNumber: 5416
  });
})();
var ColumnFilterFormElement = class _ColumnFilterFormElement {
  dt;
  colFilter;
  field;
  type;
  filterConstraint;
  filterTemplate;
  placeholder;
  minFractionDigits;
  maxFractionDigits;
  prefix;
  suffix;
  locale;
  localeMatcher;
  currency;
  currencyDisplay;
  useGrouping = true;
  ariaLabel;
  get showButtons() {
    return this.colFilter.showButtons;
  }
  filterCallback;
  constructor(dt, colFilter) {
    this.dt = dt;
    this.colFilter = colFilter;
  }
  ngOnInit() {
    this.filterCallback = (value) => {
      this.filterConstraint.value = value;
      this.dt._filter();
    };
  }
  onModelChange(value) {
    this.filterConstraint.value = value;
    if (this.type === "date" || this.type === "boolean" || value === "") {
      this.dt._filter();
    }
  }
  onTextInputEnterKeyDown(event2) {
    this.dt._filter();
    event2.preventDefault();
  }
  onNumericInputKeyDown(event2) {
    if (event2.key === "Enter") {
      this.dt._filter();
      event2.preventDefault();
    }
  }
  static \u0275fac = function ColumnFilterFormElement_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ColumnFilterFormElement)(\u0275\u0275directiveInject(Table), \u0275\u0275directiveInject(ColumnFilter));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ColumnFilterFormElement,
    selectors: [["p-columnFilterFormElement"]],
    inputs: {
      field: "field",
      type: "type",
      filterConstraint: "filterConstraint",
      filterTemplate: "filterTemplate",
      placeholder: "placeholder",
      minFractionDigits: [2, "minFractionDigits", "minFractionDigits", (value) => numberAttribute(value, null)],
      maxFractionDigits: [2, "maxFractionDigits", "maxFractionDigits", (value) => numberAttribute(value, null)],
      prefix: "prefix",
      suffix: "suffix",
      locale: "locale",
      localeMatcher: "localeMatcher",
      currency: "currency",
      currencyDisplay: "currencyDisplay",
      useGrouping: [2, "useGrouping", "useGrouping", booleanAttribute],
      ariaLabel: "ariaLabel"
    },
    standalone: false,
    features: [\u0275\u0275InputTransformsFeature],
    decls: 3,
    vars: 2,
    consts: [["builtInElement", ""], [4, "ngIf", "ngIfElse"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngSwitch"], ["type", "text", "pInputText", "", 3, "ariaLabel", "value", "input", "keydown.enter", 4, "ngSwitchCase"], [3, "ngModel", "showButtons", "minFractionDigits", "maxFractionDigits", "ariaLabel", "prefix", "suffix", "placeholder", "mode", "locale", "localeMatcher", "currency", "currencyDisplay", "useGrouping", "ngModelChange", "onKeyDown", 4, "ngSwitchCase"], [3, "indeterminate", "binary", "ngModel", "ngModelChange", 4, "ngSwitchCase"], ["appendTo", "body", 3, "ariaLabel", "placeholder", "ngModel", "ngModelChange", 4, "ngSwitchCase"], ["type", "text", "pInputText", "", 3, "input", "keydown.enter", "ariaLabel", "value"], [3, "ngModelChange", "onKeyDown", "ngModel", "showButtons", "minFractionDigits", "maxFractionDigits", "ariaLabel", "prefix", "suffix", "placeholder", "mode", "locale", "localeMatcher", "currency", "currencyDisplay", "useGrouping"], [3, "ngModelChange", "indeterminate", "binary", "ngModel"], ["appendTo", "body", 3, "ngModelChange", "ariaLabel", "placeholder", "ngModel"]],
    template: function ColumnFilterFormElement_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ColumnFilterFormElement_ng_container_0_Template, 2, 19, "ng-container", 1)(1, ColumnFilterFormElement_ng_template_1_Template, 5, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const builtInElement_r6 = \u0275\u0275reference(2);
        \u0275\u0275property("ngIf", ctx.filterTemplate)("ngIfElse", builtInElement_r6);
      }
    },
    dependencies: [NgIf, NgTemplateOutlet, NgSwitch, NgSwitchCase, InputText, NgControlStatus, NgModel, DatePicker, InputNumber, Checkbox],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColumnFilterFormElement, [{
    type: Component,
    args: [{
      selector: "p-columnFilterFormElement",
      standalone: false,
      template: `
        <ng-container *ngIf="filterTemplate; else builtInElement">
            <ng-container
                *ngTemplateOutlet="
                    filterTemplate;
                    context: {
                        $implicit: filterConstraint.value,
                        filterCallback: filterCallback,
                        type: type,
                        field: field,
                        filterConstraint: filterConstraint,
                        placeholder: placeholder,
                        minFractionDigits: minFractionDigits,
                        maxFractionDigits: maxFractionDigits,
                        prefix: prefix,
                        suffix: suffix,
                        locale: locale,
                        localeMatcher: localeMatcher,
                        currency: currency,
                        currencyDisplay: currencyDisplay,
                        useGrouping: useGrouping,
                        showButtons: showButtons
                    }
                "
            ></ng-container>
        </ng-container>
        <ng-template #builtInElement>
            <ng-container [ngSwitch]="type">
                <input
                    *ngSwitchCase="'text'"
                    type="text"
                    [ariaLabel]="ariaLabel"
                    pInputText
                    [value]="filterConstraint?.value"
                    (input)="onModelChange($event.target.value)"
                    (keydown.enter)="onTextInputEnterKeyDown($event)"
                    [attr.placeholder]="placeholder"
                />
                <p-inputNumber
                    *ngSwitchCase="'numeric'"
                    [ngModel]="filterConstraint?.value"
                    (ngModelChange)="onModelChange($event)"
                    (onKeyDown)="onNumericInputKeyDown($event)"
                    [showButtons]="showButtons"
                    [minFractionDigits]="minFractionDigits"
                    [maxFractionDigits]="maxFractionDigits"
                    [ariaLabel]="ariaLabel"
                    [prefix]="prefix"
                    [suffix]="suffix"
                    [placeholder]="placeholder"
                    [mode]="currency ? 'currency' : 'decimal'"
                    [locale]="locale"
                    [localeMatcher]="localeMatcher"
                    [currency]="currency"
                    [currencyDisplay]="currencyDisplay"
                    [useGrouping]="useGrouping"
                ></p-inputNumber>
                <p-checkbox [indeterminate]="true" [binary]="true" *ngSwitchCase="'boolean'" [ngModel]="filterConstraint?.value" (ngModelChange)="onModelChange($event)" />

                <p-datepicker [ariaLabel]="ariaLabel" *ngSwitchCase="'date'" [placeholder]="placeholder" [ngModel]="filterConstraint?.value" (ngModelChange)="onModelChange($event)" appendTo="body"></p-datepicker>
            </ng-container>
        </ng-template>
    `,
      encapsulation: ViewEncapsulation.None
    }]
  }], () => [{
    type: Table
  }, {
    type: ColumnFilter
  }], {
    field: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    filterConstraint: [{
      type: Input
    }],
    filterTemplate: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    minFractionDigits: [{
      type: Input,
      args: [{
        transform: (value) => numberAttribute(value, null)
      }]
    }],
    maxFractionDigits: [{
      type: Input,
      args: [{
        transform: (value) => numberAttribute(value, null)
      }]
    }],
    prefix: [{
      type: Input
    }],
    suffix: [{
      type: Input
    }],
    locale: [{
      type: Input
    }],
    localeMatcher: [{
      type: Input
    }],
    currency: [{
      type: Input
    }],
    currencyDisplay: [{
      type: Input
    }],
    useGrouping: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    ariaLabel: [{
      type: Input
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ColumnFilterFormElement, {
    className: "ColumnFilterFormElement",
    filePath: "table.ts",
    lineNumber: 6211
  });
})();
var TableModule = class _TableModule {
  static \u0275fac = function TableModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TableModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _TableModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [TableStyle],
    imports: [CommonModule, PaginatorModule, InputTextModule, SelectModule, FormsModule, ButtonModule, SelectButtonModule, DatePickerModule, InputNumberModule, CheckboxModule, ScrollerModule, ArrowDownIcon, ArrowUpIcon, SpinnerIcon, SortAltIcon, SortAmountUpAltIcon, SortAmountDownIcon, CheckIcon, FilterIcon, FilterSlashIcon, PlusIcon, TrashIcon, RadioButtonModule, SharedModule, ScrollerModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, PaginatorModule, InputTextModule, SelectModule, FormsModule, ButtonModule, SelectButtonModule, DatePickerModule, InputNumberModule, CheckboxModule, ScrollerModule, ArrowDownIcon, ArrowUpIcon, SpinnerIcon, SortAltIcon, SortAmountUpAltIcon, SortAmountDownIcon, CheckIcon, FilterIcon, FilterSlashIcon, PlusIcon, TrashIcon, RadioButtonModule],
      exports: [Table, SharedModule, SortableColumn, FrozenColumn, RowGroupHeader, SelectableRow, RowToggler, ContextMenuRow, ResizableColumn, ReorderableColumn, EditableColumn, CellEditor, SortIcon, TableRadioButton, TableCheckbox, TableHeaderCheckbox, ReorderableRowHandle, ReorderableRow, SelectableRowDblClick, EditableRow, InitEditableRow, SaveEditableRow, CancelEditableRow, ColumnFilter, ColumnFilterFormElement, ScrollerModule],
      declarations: [Table, SortableColumn, FrozenColumn, RowGroupHeader, SelectableRow, RowToggler, ContextMenuRow, ResizableColumn, ReorderableColumn, EditableColumn, CellEditor, TableBody, SortIcon, TableRadioButton, TableCheckbox, TableHeaderCheckbox, ReorderableRowHandle, ReorderableRow, SelectableRowDblClick, EditableRow, InitEditableRow, SaveEditableRow, CancelEditableRow, ColumnFilter, ColumnFilterFormElement],
      providers: [TableStyle]
    }]
  }], null, null);
})();

// src/app/pages/core/core.editusers.ts
var _c06 = () => ({ width: "50vw" });
var _c115 = () => ({ "960px": "95vw" });
var _c210 = () => ({ width: "100%" });
var _c310 = () => ({ "text-wrap": "auto" });
function CompanyManagementEditUsers_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "p-button", 34);
    \u0275\u0275listener("click", function CompanyManagementEditUsers_ng_template_7_Template_p_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showAddUser());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-button", 35);
    \u0275\u0275listener("click", function CompanyManagementEditUsers_ng_template_7_Template_p_button_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.loadUsers());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("hidden", !ctx_r2.canWrite);
  }
}
function CompanyManagementEditUsers_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 36);
    \u0275\u0275text(2, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Phone");
    \u0275\u0275elementEnd()();
  }
}
function CompanyManagementEditUsers_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 37)(1, "td", 36);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r4 = ctx.$implicit;
    \u0275\u0275property("pSelectableRow", user_r4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", user_r4.firstName, " ", user_r4.lastName, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r4.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r4.phoneNumber);
  }
}
function CompanyManagementEditUsers_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "label", 39);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "label", 40);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "label");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const permission_r5 = ctx.$implicit;
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(5, _c310));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(permission_r5.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(permission_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(permission_r5.description);
  }
}
function CompanyManagementEditUsers_ng_template_27_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "p-chip", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("label", item_r6);
  }
}
function CompanyManagementEditUsers_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CompanyManagementEditUsers_ng_template_27_div_0_Template, 2, 1, "div", 41);
  }
  if (rf & 2) {
    const items_r7 = ctx.$implicit;
    \u0275\u0275property("ngForOf", items_r7);
  }
}
function CompanyManagementEditUsers_ng_template_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 43);
    \u0275\u0275listener("click", function CompanyManagementEditUsers_ng_template_46_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addNewUser());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("hidden", !ctx_r2.canWrite);
  }
}
function CompanyManagementEditUsers_ng_template_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "span", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.currentUser.loginName);
  }
}
function CompanyManagementEditUsers_p_multiselect_60_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "label", 39);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "label", 40);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "label");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const permission_r10 = ctx.$implicit;
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(5, _c310));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(permission_r10.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(permission_r10.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(permission_r10.description);
  }
}
function CompanyManagementEditUsers_p_multiselect_60_ng_template_3_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "p-chip", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("label", item_r11);
  }
}
function CompanyManagementEditUsers_p_multiselect_60_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CompanyManagementEditUsers_p_multiselect_60_ng_template_3_div_0_Template, 2, 1, "div", 41);
  }
  if (rf & 2) {
    const items_r12 = ctx.$implicit;
    \u0275\u0275property("ngForOf", items_r12);
  }
}
function CompanyManagementEditUsers_p_multiselect_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-multiselect", 46);
    \u0275\u0275twoWayListener("ngModelChange", function CompanyManagementEditUsers_p_multiselect_60_Template_p_multiselect_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.currentUser.permissions, $event) || (ctx_r2.currentUser.permissions = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(1, CompanyManagementEditUsers_p_multiselect_60_ng_template_1_Template, 7, 6, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(3, CompanyManagementEditUsers_p_multiselect_60_ng_template_3_Template, 1, 1, "ng-template", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("options", ctx_r2.permissionsList);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.currentUser.permissions);
    \u0275\u0275property("filter", true)("disabled", !ctx_r2.canWrite);
  }
}
function CompanyManagementEditUsers_ng_template_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 47);
    \u0275\u0275listener("click", function CompanyManagementEditUsers_ng_template_79_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateUser());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "p-button", 48);
    \u0275\u0275listener("click", function CompanyManagementEditUsers_ng_template_79_Template_p_button_click_1_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteUser(ctx_r2.currentUser.id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("hidden", !ctx_r2.canWrite);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.cannotDelete(ctx_r2.currentUser.id))("hidden", !ctx_r2.canWrite);
  }
}
var CompanyManagementEditUsers = class _CompanyManagementEditUsers {
  http;
  service;
  newPassword1 = "";
  newPassword2 = "";
  permissionsList = [];
  showAddUserDialog = false;
  isLoading = true;
  canRead = PermissionHelpers.HasPermission(PermissionsTable.Core_Users_Read);
  canWrite = PermissionHelpers.HasPermission(PermissionsTable.Core_Users_Write);
  canReadPermissions = PermissionHelpers.HasPermission(PermissionsTable.Core_Permission_Read);
  showEditUserDialog = false;
  allUsers = [];
  currentUser = {};
  currentNewUser = {};
  constructor(http, service) {
    this.http = http;
    this.service = service;
  }
  ngOnInit() {
    if (this.canReadPermissions)
      this.loadPermissions();
    if (this.canRead)
      this.loadUsers();
  }
  cannotDelete(userID) {
    if (JWTTokenHelpers.GetUserID() == userID)
      return true;
    return false;
  }
  showAddUser() {
    this.currentNewUser = {
      firstName: "New",
      lastName: "User"
    };
    this.showAddUserDialog = true;
  }
  showEditUser(userID) {
    this.http.get(APIURL + Endpoints.Core.Users.Get_User + "?ID=" + userID).subscribe((u) => {
      this.currentUser = u;
      this.showEditUserDialog = true;
    });
  }
  deleteUser(userID) {
    if (confirm("Are you sure you want to delete this user?")) {
      this.http.delete(APIURL + Endpoints.Core.Users.Delete_User + "?ID=" + userID).subscribe(() => {
        this.service.add({ severity: "info", summary: "Info Message", detail: "User deleted!" });
        this.loadUsers();
      });
    }
  }
  loadUsers() {
    this.isLoading = true;
    this.http.get(APIURL + Endpoints.Core.Users.Get_AllUsers).subscribe((l) => {
      this.allUsers = l;
      this.isLoading = false;
    });
  }
  loadPermissions() {
    this.permissionsList = [];
    this.http.get(APIURL + Endpoints.Core.Authentication.Get_AllPermissions).subscribe((l) => {
      this.permissionsList = l;
    });
  }
  addNewUser() {
    return __async(this, null, function* () {
      if (this.newPassword1 != this.newPassword2) {
        alert("New passwords are not identical!");
        return;
      }
      if (this.newPassword1 == "") {
        alert("New users must have a set password!");
        return;
      }
      this.currentNewUser.password = this.newPassword1;
      console.log(this.currentNewUser);
      this.http.post(APIURL + Endpoints.Core.Users.Post_AddUser, this.currentNewUser).subscribe(() => {
        this.showAddUserDialog = false;
        this.service.add({ severity: "info", summary: "Info Message", detail: "User created!" });
        this.loadUsers();
      });
    });
  }
  updateUser() {
    this.http.patch(APIURL + Endpoints.Core.Users.Patch_UpdateUser, this.currentUser).subscribe(() => {
      this.showEditUserDialog = false;
      this.service.add({ severity: "info", summary: "Info Message", detail: "User updated!" });
      this.loadUsers();
    });
  }
  static \u0275fac = function CompanyManagementEditUsers_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CompanyManagementEditUsers)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(MessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompanyManagementEditUsers, selectors: [["app-core-front"]], decls: 81, vars: 77, consts: [["caption", ""], ["header", ""], ["body", ""], ["item", ""], ["footer", ""], [1, "card"], ["styleClass", "mt-4", "selectionMode", "single", 3, "onRowSelect", "value", "scrollable", "paginator", "rows", "loading"], ["header", "Add User", 3, "visibleChange", "visible", "breakpoints", "modal"], [1, "card", "flex", "flex-col", "gap-3"], ["variant", "on"], ["pInputText", "", "id", "loginname", "type", "text", 3, "ngModelChange", "ngModel"], ["for", "loginname"], [1, "gap-1"], ["id", "password1", "placeholder", "New Password", "styleClass", "mb-1", 3, "ngModelChange", "ngModel", "toggleMask", "fluid", "feedback"], ["id", "password2", "placeholder", "Repeat new Password", "styleClass", "mb-1", 3, "ngModelChange", "ngModel", "toggleMask", "fluid", "feedback"], ["optionValue", "id", "placeholder", "Select Permissions", "display", "chip", "filterBy", "id", 3, "ngModelChange", "options", "ngModel", "filter"], ["pTemplate", "selecteditems"], ["pInputText", "", "id", "firstname", "type", "text", 3, "ngModelChange", "ngModel"], ["for", "firstname"], ["pInputText", "", "id", "lastname", "type", "text", 3, "ngModelChange", "ngModel"], ["for", "lastname"], ["pInputText", "", "id", "email", "type", "text", 3, "ngModelChange", "ngModel"], ["for", "email"], ["pInputText", "", "id", "phonenumber", "type", "text", 3, "ngModelChange", "ngModel"], ["for", "phonenumber"], [3, "visibleChange", "visible", "breakpoints", "modal"], ["pInputText", "", "id", "loginname", "type", "text", 3, "ngModelChange", "ngModel", "disabled"], [3, "hidden"], ["placeholder", "Select Permissions", "optionValue", "id", "display", "chip", "filterBy", "id", 3, "options", "ngModel", "filter", "disabled", "ngModelChange", 4, "ngIf"], ["pInputText", "", "id", "firstname", "type", "text", 3, "ngModelChange", "ngModel", "disabled"], ["pInputText", "", "id", "lastname", "type", "text", 3, "ngModelChange", "ngModel", "disabled"], ["pInputText", "", "id", "email", "type", "text", 3, "ngModelChange", "ngModel", "disabled"], ["pInputText", "", "id", "phonenumber", "type", "text", 3, "ngModelChange", "ngModel", "disabled"], [1, "flex", "items-center", "justify-between"], ["icon", "pi pi-plus", "label", "Add User", "rounded", "", "raised", "", 3, "click", "hidden"], ["icon", "pi pi-refresh", "rounded", "", "raised", "", 3, "click"], ["pFrozenColumn", "", 1, "font-bold"], [3, "pSelectableRow"], [1, "flex", "flex-col", "gap-2"], [1, "text-surface-500", "dark:text-surface-400"], [1, "font-bold"], [4, "ngFor", "ngForOf"], [3, "label"], ["label", "Create User", "icon", "pi pi-save", 3, "click", "hidden"], [1, "inline-flex", "items-center", "justify-center", "gap-2"], [1, "font-bold", "whitespace-nowrap"], ["placeholder", "Select Permissions", "optionValue", "id", "display", "chip", "filterBy", "id", 3, "ngModelChange", "options", "ngModel", "filter", "disabled"], ["label", "Save", "icon", "pi pi-save", 3, "click", "hidden"], ["icon", "pi pi-times", "label", "Delete", "severity", "danger", 3, "click", "disabled", "hidden"]], template: function CompanyManagementEditUsers_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 5)(1, "p");
      \u0275\u0275text(2, "Here you can add, edit and remove users from the system.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p");
      \u0275\u0275text(4, "Do remember, if you update the permissions for a user (including yourself) they will have to log out and log back in again for the changes to take effect.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 5)(6, "p-table", 6);
      \u0275\u0275listener("onRowSelect", function CompanyManagementEditUsers_Template_p_table_onRowSelect_6_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.showEditUser($event.data.id));
      });
      \u0275\u0275template(7, CompanyManagementEditUsers_ng_template_7_Template, 3, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(9, CompanyManagementEditUsers_ng_template_9_Template, 7, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(11, CompanyManagementEditUsers_ng_template_11_Template, 7, 5, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "p-dialog", 7);
      \u0275\u0275twoWayListener("visibleChange", function CompanyManagementEditUsers_Template_p_dialog_visibleChange_13_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.showAddUserDialog, $event) || (ctx.showAddUserDialog = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(14, "div", 8)(15, "h3");
      \u0275\u0275text(16, "Login Information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "p-floatlabel", 9)(18, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function CompanyManagementEditUsers_Template_input_ngModelChange_18_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.currentNewUser.loginName, $event) || (ctx.currentNewUser.loginName = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "label", 11);
      \u0275\u0275text(20, "Login Name");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 12)(22, "p-password", 13);
      \u0275\u0275twoWayListener("ngModelChange", function CompanyManagementEditUsers_Template_p_password_ngModelChange_22_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.newPassword1, $event) || (ctx.newPassword1 = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "p-password", 14);
      \u0275\u0275twoWayListener("ngModelChange", function CompanyManagementEditUsers_Template_p_password_ngModelChange_23_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.newPassword2, $event) || (ctx.newPassword2 = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "p-multiselect", 15);
      \u0275\u0275twoWayListener("ngModelChange", function CompanyManagementEditUsers_Template_p_multiselect_ngModelChange_24_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.currentNewUser.permissions, $event) || (ctx.currentNewUser.permissions = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(25, CompanyManagementEditUsers_ng_template_25_Template, 7, 6, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(27, CompanyManagementEditUsers_ng_template_27_Template, 1, 1, "ng-template", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "h3");
      \u0275\u0275text(29, "General Information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "p-floatlabel", 9)(31, "input", 17);
      \u0275\u0275twoWayListener("ngModelChange", function CompanyManagementEditUsers_Template_input_ngModelChange_31_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.currentNewUser.firstName, $event) || (ctx.currentNewUser.firstName = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "label", 18);
      \u0275\u0275text(33, "First Name");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "p-floatlabel", 9)(35, "input", 19);
      \u0275\u0275twoWayListener("ngModelChange", function CompanyManagementEditUsers_Template_input_ngModelChange_35_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.currentNewUser.lastName, $event) || (ctx.currentNewUser.lastName = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "label", 20);
      \u0275\u0275text(37, "Last Name");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "p-floatlabel", 9)(39, "input", 21);
      \u0275\u0275twoWayListener("ngModelChange", function CompanyManagementEditUsers_Template_input_ngModelChange_39_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.currentNewUser.email, $event) || (ctx.currentNewUser.email = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "label", 22);
      \u0275\u0275text(41, "Email");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "p-floatlabel", 9)(43, "input", 23);
      \u0275\u0275twoWayListener("ngModelChange", function CompanyManagementEditUsers_Template_input_ngModelChange_43_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.currentNewUser.phoneNumber, $event) || (ctx.currentNewUser.phoneNumber = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "label", 24);
      \u0275\u0275text(45, "Phone Number");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(46, CompanyManagementEditUsers_ng_template_46_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "p-dialog", 25);
      \u0275\u0275twoWayListener("visibleChange", function CompanyManagementEditUsers_Template_p_dialog_visibleChange_48_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.showEditUserDialog, $event) || (ctx.showEditUserDialog = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(49, CompanyManagementEditUsers_ng_template_49_Template, 3, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementStart(51, "div", 8)(52, "h3");
      \u0275\u0275text(53, "Login Information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "p-floatlabel", 9)(55, "input", 26);
      \u0275\u0275twoWayListener("ngModelChange", function CompanyManagementEditUsers_Template_input_ngModelChange_55_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.currentUser.loginName, $event) || (ctx.currentUser.loginName = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "label", 11);
      \u0275\u0275text(57, "Login Name");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "h3", 27);
      \u0275\u0275text(59, "Permissions");
      \u0275\u0275elementEnd();
      \u0275\u0275template(60, CompanyManagementEditUsers_p_multiselect_60_Template, 4, 4, "p-multiselect", 28);
      \u0275\u0275elementStart(61, "h3");
      \u0275\u0275text(62, "General Information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "p-floatlabel", 9)(64, "input", 29);
      \u0275\u0275twoWayListener("ngModelChange", function CompanyManagementEditUsers_Template_input_ngModelChange_64_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.currentUser.firstName, $event) || (ctx.currentUser.firstName = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "label", 18);
      \u0275\u0275text(66, "First Name");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "p-floatlabel", 9)(68, "input", 30);
      \u0275\u0275twoWayListener("ngModelChange", function CompanyManagementEditUsers_Template_input_ngModelChange_68_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.currentUser.lastName, $event) || (ctx.currentUser.lastName = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "label", 20);
      \u0275\u0275text(70, "Last Name");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "p-floatlabel", 9)(72, "input", 31);
      \u0275\u0275twoWayListener("ngModelChange", function CompanyManagementEditUsers_Template_input_ngModelChange_72_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.currentUser.email, $event) || (ctx.currentUser.email = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "label", 22);
      \u0275\u0275text(74, "Email");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(75, "p-floatlabel", 9)(76, "input", 32);
      \u0275\u0275twoWayListener("ngModelChange", function CompanyManagementEditUsers_Template_input_ngModelChange_76_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.currentUser.phoneNumber, $event) || (ctx.currentUser.phoneNumber = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "label", 24);
      \u0275\u0275text(78, "Phone Number");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(79, CompanyManagementEditUsers_ng_template_79_Template, 2, 3, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("value", ctx.allUsers)("scrollable", true)("paginator", true)("rows", 9)("loading", ctx.isLoading);
      \u0275\u0275advance(7);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(63, _c06));
      \u0275\u0275twoWayProperty("visible", ctx.showAddUserDialog);
      \u0275\u0275property("breakpoints", \u0275\u0275pureFunction0(64, _c115))("modal", true);
      \u0275\u0275advance(5);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(65, _c210));
      \u0275\u0275twoWayProperty("ngModel", ctx.currentNewUser.loginName);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.newPassword1);
      \u0275\u0275property("toggleMask", true)("fluid", true)("feedback", false);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.newPassword2);
      \u0275\u0275property("toggleMask", true)("fluid", true)("feedback", false);
      \u0275\u0275advance();
      \u0275\u0275property("options", ctx.permissionsList);
      \u0275\u0275twoWayProperty("ngModel", ctx.currentNewUser.permissions);
      \u0275\u0275property("filter", true);
      \u0275\u0275advance(7);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(66, _c210));
      \u0275\u0275twoWayProperty("ngModel", ctx.currentNewUser.firstName);
      \u0275\u0275advance(4);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(67, _c210));
      \u0275\u0275twoWayProperty("ngModel", ctx.currentNewUser.lastName);
      \u0275\u0275advance(4);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(68, _c210));
      \u0275\u0275twoWayProperty("ngModel", ctx.currentNewUser.email);
      \u0275\u0275advance(4);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(69, _c210));
      \u0275\u0275twoWayProperty("ngModel", ctx.currentNewUser.phoneNumber);
      \u0275\u0275advance(5);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(70, _c06));
      \u0275\u0275twoWayProperty("visible", ctx.showEditUserDialog);
      \u0275\u0275property("breakpoints", \u0275\u0275pureFunction0(71, _c115))("modal", true);
      \u0275\u0275advance(7);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(72, _c210));
      \u0275\u0275twoWayProperty("ngModel", ctx.currentUser.loginName);
      \u0275\u0275property("disabled", !ctx.canWrite);
      \u0275\u0275advance(3);
      \u0275\u0275property("hidden", !ctx.canReadPermissions);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.canReadPermissions);
      \u0275\u0275advance(4);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(73, _c210));
      \u0275\u0275twoWayProperty("ngModel", ctx.currentUser.firstName);
      \u0275\u0275property("disabled", !ctx.canWrite);
      \u0275\u0275advance(4);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(74, _c210));
      \u0275\u0275twoWayProperty("ngModel", ctx.currentUser.lastName);
      \u0275\u0275property("disabled", !ctx.canWrite);
      \u0275\u0275advance(4);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(75, _c210));
      \u0275\u0275twoWayProperty("ngModel", ctx.currentUser.email);
      \u0275\u0275property("disabled", !ctx.canWrite);
      \u0275\u0275advance(4);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(76, _c210));
      \u0275\u0275twoWayProperty("ngModel", ctx.currentUser.phoneNumber);
      \u0275\u0275property("disabled", !ctx.canWrite);
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, CommonModule, NgForOf, NgIf, DialogModule, Dialog, PrimeTemplate, ButtonModule, Button, FloatLabelModule, FloatLabel, InputTextModule, InputText, MultiSelectModule, MultiSelect, PasswordModule, Password, TableModule, Table, FrozenColumn, SelectableRow, ChipModule, Chip], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompanyManagementEditUsers, { className: "CompanyManagementEditUsers", filePath: "src/app/pages/core/core.editusers.ts", lineNumber: 162 });
})();

// node_modules/primeng/fesm2022/primeng-dataview.mjs
var theme6 = ({
  dt
}) => `
.p-dataview {
    border-color: ${dt("dataview.border.color")};
    border-width: ${dt("dataview.border.width")};
    border-style: solid;
    border-radius: ${dt("dataview.border.radius")};
    padding: ${dt("dataview.padding")};
}

.p-dataview-header {
    background: ${dt("dataview.header.background")};
    color: ${dt("dataview.header.color")};
    border-color: ${dt("dataview.header.border.color")};
    border-width: ${dt("dataview.header.border.width")};
    border-style: solid;
    padding: ${dt("dataview.header.padding")};
    border-radius: ${dt("dataview.header.border.radius")};
}

.p-dataview-content {
    background: ${dt("dataview.content.background")};
    border-color: ${dt("dataview.content.border.color")};
    border-width: ${dt("dataview.content.border.width")};
    border-style: solid;
    color: ${dt("dataview.content.color")};
    padding: ${dt("dataview.content.padding")};
    border-radius: ${dt("dataview.content.border.radius")};
}

.p-dataview-footer {
    background: ${dt("dataview.footer.background")};
    color: ${dt("dataview.footer.color")};
    border-color: ${dt("dataview.footer.border.color")};
    border-width: ${dt("dataview.footer.border.width")};
    border-style: solid;
    padding: ${dt("dataview.footer.padding")};
    border-radius: ${dt("dataview.footer.border.radius")};
}

.p-dataview-paginator-top {
    border-width: ${dt("dataview.paginator.top.border.width")};
    border-color: ${dt("dataview.paginator.top.border.color")};
    border-style: solid;
}

.p-dataview-paginator-bottom {
    border-width: ${dt("dataview.paginator.bottom.border.width")};
    border-color: ${dt("dataview.paginator.bottom.border.color")};
    border-style: solid;
}
`;
var classes6 = {
  root: ({
    props
  }) => ["p-dataview p-component", {
    "p-dataview-list": props.layout === "list",
    "p-dataview-grid": props.layout === "grid"
  }],
  header: "p-dataview-header",
  pcPaginator: ({
    position
  }) => "p-dataview-paginator-" + position,
  content: "p-dataview-content",
  emptyMessage: "p-dataview-empty-message",
  // TODO: remove?
  footer: "p-dataview-footer"
};
var DataViewStyle = class _DataViewStyle extends BaseStyle {
  name = "dataview";
  theme = theme6;
  classes = classes6;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275DataViewStyle_BaseFactory;
    return function DataViewStyle_Factory(__ngFactoryType__) {
      return (\u0275DataViewStyle_BaseFactory || (\u0275DataViewStyle_BaseFactory = \u0275\u0275getInheritedFactory(_DataViewStyle)))(__ngFactoryType__ || _DataViewStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _DataViewStyle,
    factory: _DataViewStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataViewStyle, [{
    type: Injectable
  }], null, null);
})();
var DataViewClasses;
(function(DataViewClasses2) {
  DataViewClasses2["root"] = "p-dataview";
  DataViewClasses2["header"] = "p-dataview-header";
  DataViewClasses2["pcPaginator"] = "p-dataview-paginator-[position]";
  DataViewClasses2["content"] = "p-dataview-content";
  DataViewClasses2["emptyMessage"] = "p-dataview-empty-message";
  DataViewClasses2["footer"] = "p-dataview-footer";
})(DataViewClasses || (DataViewClasses = {}));
var _c07 = ["list"];
var _c116 = ["grid"];
var _c211 = ["header"];
var _c311 = ["emptymessage"];
var _c410 = ["footer"];
var _c510 = ["paginatorleft"];
var _c64 = ["paginatorright"];
var _c74 = ["paginatordropdownitem"];
var _c83 = ["loadingIcon"];
var _c93 = ["listicon"];
var _c103 = ["gridicon"];
var _c117 = [[["p-header"]], [["p-footer"]]];
var _c123 = ["p-header", "p-footer"];
var _c133 = (a0, a1) => ({
  "p-dataview p-component": true,
  "p-dataview-list": a0,
  "p-dataview-grid": a1
});
var _c143 = (a0) => ({
  $implicit: a0
});
function DataView_div_1_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap("p-dataview-loading-icon pi-spin " + ctx_r0.loadingIcon);
  }
}
function DataView_div_1_ng_container_3_SpinnerIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "SpinnerIcon", 14);
  }
  if (rf & 2) {
    \u0275\u0275property("spin", true)("styleClass", "p-dataview-loading-icon");
  }
}
function DataView_div_1_ng_container_3_2_ng_template_0_Template(rf, ctx) {
}
function DataView_div_1_ng_container_3_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DataView_div_1_ng_container_3_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function DataView_div_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, DataView_div_1_ng_container_3_SpinnerIcon_1_Template, 1, 2, "SpinnerIcon", 12)(2, DataView_div_1_ng_container_3_2_Template, 1, 0, null, 13);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loadingicon);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.loadingicon);
  }
}
function DataView_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10);
    \u0275\u0275template(2, DataView_div_1_i_2_Template, 1, 2, "i", 11)(3, DataView_div_1_ng_container_3_Template, 3, 2, "ng-container", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.loadingIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loadingIcon);
  }
}
function DataView_div_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DataView_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275projection(1);
    \u0275\u0275template(2, DataView_div_2_ng_container_2_Template, 1, 0, "ng-container", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.headerTemplate);
  }
}
function DataView_p_paginator_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-paginator", 16);
    \u0275\u0275listener("onPageChange", function DataView_p_paginator_3_Template_p_paginator_onPageChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.paginate($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("rows", ctx_r0.rows)("first", ctx_r0.first)("totalRecords", ctx_r0.totalRecords)("pageLinkSize", ctx_r0.pageLinks)("alwaysShow", ctx_r0.alwaysShowPaginator)("rowsPerPageOptions", ctx_r0.rowsPerPageOptions)("dropdownAppendTo", ctx_r0.paginatorDropdownAppendTo)("dropdownScrollHeight", ctx_r0.paginatorDropdownScrollHeight)("templateLeft", ctx_r0.paginatorleft)("templateRight", ctx_r0.paginatorright)("currentPageReportTemplate", ctx_r0.currentPageReportTemplate)("showFirstLastIcon", ctx_r0.showFirstLastIcon)("dropdownItemTemplate", ctx_r0.paginatordropdownitem)("showCurrentPageReport", ctx_r0.showCurrentPageReport)("showJumpToPageDropdown", ctx_r0.showJumpToPageDropdown)("showPageLinks", ctx_r0.showPageLinks)("styleClass", ctx_r0.paginatorStyleClass);
  }
}
function DataView_Conditional_5_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DataView_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DataView_Conditional_5_ng_container_0_Template, 1, 0, "ng-container", 17);
    \u0275\u0275pipe(1, "slice");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.listTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(6, _c143, ctx_r0.paginator ? \u0275\u0275pipeBind3(1, 2, ctx_r0.filteredValue || ctx_r0.value, ctx_r0.lazy ? 0 : ctx_r0.first, (ctx_r0.lazy ? 0 : ctx_r0.first) + ctx_r0.rows) : ctx_r0.filteredValue || ctx_r0.value));
  }
}
function DataView_Conditional_6_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DataView_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DataView_Conditional_6_ng_container_0_Template, 1, 0, "ng-container", 17);
    \u0275\u0275pipe(1, "slice");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.gridTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(6, _c143, ctx_r0.paginator ? \u0275\u0275pipeBind3(1, 2, ctx_r0.filteredValue || ctx_r0.value, ctx_r0.lazy ? 0 : ctx_r0.first, (ctx_r0.lazy ? 0 : ctx_r0.first) + ctx_r0.rows) : ctx_r0.filteredValue || ctx_r0.value));
  }
}
function DataView_div_7_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.emptyMessageLabel, " ");
  }
}
function DataView_div_7_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, null, 0);
  }
}
function DataView_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 18);
    \u0275\u0275template(2, DataView_div_7_ng_container_2_Template, 2, 1, "ng-container", 19)(3, DataView_div_7_ng_container_3_Template, 2, 0, "ng-container", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.emptymessageTemplate)("ngIfElse", ctx_r0.empty);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.emptymessageTemplate);
  }
}
function DataView_p_paginator_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-paginator", 20);
    \u0275\u0275listener("onPageChange", function DataView_p_paginator_8_Template_p_paginator_onPageChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.paginate($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("rows", ctx_r0.rows)("first", ctx_r0.first)("totalRecords", ctx_r0.totalRecords)("pageLinkSize", ctx_r0.pageLinks)("alwaysShow", ctx_r0.alwaysShowPaginator)("rowsPerPageOptions", ctx_r0.rowsPerPageOptions)("dropdownAppendTo", ctx_r0.paginatorDropdownAppendTo)("dropdownScrollHeight", ctx_r0.paginatorDropdownScrollHeight)("templateLeft", ctx_r0.paginatorleft)("templateRight", ctx_r0.paginatorright)("currentPageReportTemplate", ctx_r0.currentPageReportTemplate)("showFirstLastIcon", ctx_r0.showFirstLastIcon)("dropdownItemTemplate", ctx_r0.paginatordropdownitem)("showCurrentPageReport", ctx_r0.showCurrentPageReport)("showJumpToPageDropdown", ctx_r0.showJumpToPageDropdown)("showPageLinks", ctx_r0.showPageLinks)("styleClass", ctx_r0.paginatorStyleClass);
  }
}
function DataView_div_9_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DataView_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275projection(1, 1);
    \u0275\u0275template(2, DataView_div_9_ng_container_2_Template, 1, 0, "ng-container", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.footerTemplate);
  }
}
var DataView = class _DataView extends BaseComponent {
  /**
   * When specified as true, enables the pagination.
   * @group Props
   */
  paginator;
  /**
   * Number of rows to display per page.
   * @group Props
   */
  rows;
  /**
   * Number of total records, defaults to length of value when not defined.
   * @group Props
   */
  totalRecords;
  /**
   * Number of page links to display in paginator.
   * @group Props
   */
  pageLinks = 5;
  /**
   * Array of integer/object values to display inside rows per page dropdown of paginator
   * @group Props
   */
  rowsPerPageOptions;
  /**
   * Position of the paginator.
   * @group Props
   */
  paginatorPosition = "bottom";
  /**
   * Custom style class for paginator
   * @group Props
   */
  paginatorStyleClass;
  /**
   * Whether to show it even there is only one page.
   * @group Props
   */
  alwaysShowPaginator = true;
  /**
   * Target element to attach the paginator dropdown overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  paginatorDropdownAppendTo;
  /**
   * Paginator dropdown height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.
   * @group Props
   */
  paginatorDropdownScrollHeight = "200px";
  /**
   * Template of the current page report element. Available placeholders are {currentPage},{totalPages},{rows},{first},{last} and {totalRecords}
   * @group Props
   */
  currentPageReportTemplate = "{currentPage} of {totalPages}";
  /**
   * Whether to display current page report.
   * @group Props
   */
  showCurrentPageReport;
  /**
   * Whether to display a dropdown to navigate to any page.
   * @group Props
   */
  showJumpToPageDropdown;
  /**
   * When enabled, icons are displayed on paginator to go first and last page.
   * @group Props
   */
  showFirstLastIcon = true;
  /**
   * Whether to show page links.
   * @group Props
   */
  showPageLinks = true;
  /**
   * Defines if data is loaded and interacted with in lazy manner.
   * @group Props
   */
  lazy;
  /**
   * Whether to call lazy loading on initialization.
   * @group Props
   */
  lazyLoadOnInit = true;
  /**
   * Text to display when there is no data. Defaults to global value in i18n translation configuration.
   * @group Props
   */
  emptyMessage = "";
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
   * Style class of the grid.
   * @group Props
   */
  gridStyleClass = "";
  /**
   * Function to optimize the dom operations by delegating to ngForTrackBy, default algorithm checks for object identity.
   * @group Props
   */
  trackBy = (index, item) => item;
  /**
   * Comma separated list of fields in the object graph to search against.
   * @group Props
   */
  filterBy;
  /**
   * Locale to use in filtering. The default locale is the host environment's current locale.
   * @group Props
   */
  filterLocale;
  /**
   * Displays a loader to indicate data load is in progress.
   * @group Props
   */
  loading;
  /**
   * The icon to show while indicating data load is in progress.
   * @group Props
   */
  loadingIcon;
  /**
   * Index of the first row to be displayed.
   * @group Props
   */
  first = 0;
  /**
   * Property name of data to use in sorting by default.
   * @group Props
   */
  sortField;
  /**
   * Order to sort the data by default.
   * @group Props
   */
  sortOrder;
  /**
   * An array of objects to display.
   * @group Props
   */
  value;
  /**
   * Defines the layout mode.
   * @group Props
   */
  layout = "list";
  /**
   * Callback to invoke when paging, sorting or filtering happens in lazy mode.
   * @param {DataViewLazyLoadEvent} event - Custom lazy load event.
   * @group Emits
   */
  onLazyLoad = new EventEmitter();
  /**
   * Callback to invoke when pagination occurs.
   * @param {DataViewPageEvent} event - Custom page event.
   * @group Emits
   */
  onPage = new EventEmitter();
  /**
   * Callback to invoke when sorting occurs.
   * @param {DataViewSortEvent} event - Custom sort event.
   * @group Emits
   */
  onSort = new EventEmitter();
  /**
   * Callback to invoke when changing layout.
   * @param {DataViewLayoutChangeEvent} event - Custom layout change event.
   * @group Emits
   */
  onChangeLayout = new EventEmitter();
  /**
   * Template for the list layout.
   * @group Templates
   */
  listTemplate;
  /**
   * Template for grid layout.
   * @group Templates
   */
  gridTemplate;
  /**
   * Template for the header section.
   * @group Templates
   */
  headerTemplate;
  /**
   * Template for the empty message section.
   * @group Templates
   */
  emptymessageTemplate;
  /**
   * Template for the footer section.
   * @group Templates
   */
  footerTemplate;
  /**
   * Template for the left side of paginator.
   * @group Templates
   */
  paginatorleft;
  /**r* Template for the right side of paginator.
   * @group Templates
   */
  paginatorright;
  /**
   * Template for items in paginator dropdown.
   * @group Templates
   */
  paginatordropdownitem;
  /**
   * Template for loading icon.
   * @group Templates
   */
  loadingicon;
  /**
   * Template for list icon.
   * @group Templates
   */
  listicon;
  /**
   * Template for grid icon.
   * @group Templates
   */
  gridicon;
  header;
  footer;
  _value;
  filteredValue;
  filterValue;
  initialized;
  _layout = "list";
  translationSubscription;
  _componentStyle = inject(DataViewStyle);
  get emptyMessageLabel() {
    return this.emptyMessage || this.config.getTranslation(TranslationKeys.EMPTY_MESSAGE);
  }
  filterService = inject(FilterService);
  ngOnInit() {
    super.ngOnInit();
    if (this.lazy && this.lazyLoadOnInit) {
      this.onLazyLoad.emit(this.createLazyLoadMetadata());
    }
    this.translationSubscription = this.config.translationObserver.subscribe(() => {
      this.cd.markForCheck();
    });
    this.initialized = true;
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
  }
  ngOnChanges(simpleChanges) {
    super.ngOnChanges(simpleChanges);
    if (simpleChanges.value) {
      this._value = simpleChanges.value.currentValue;
      this.updateTotalRecords();
      if (!this.lazy && this.hasFilter()) {
        this.filter(this.filterValue);
      }
    }
    if (simpleChanges.sortField || simpleChanges.sortOrder) {
      if (!this.lazy || this.initialized) {
        this.sort();
      }
    }
  }
  updateTotalRecords() {
    this.totalRecords = this.lazy ? this.totalRecords : this._value ? this._value.length : 0;
  }
  paginate(event2) {
    this.first = event2.first;
    this.rows = event2.rows;
    if (this.lazy) {
      this.onLazyLoad.emit(this.createLazyLoadMetadata());
    }
    this.onPage.emit({
      first: this.first,
      rows: this.rows
    });
  }
  sort() {
    this.first = 0;
    if (this.lazy) {
      this.onLazyLoad.emit(this.createLazyLoadMetadata());
    } else if (this.value) {
      this.value.sort((data1, data2) => {
        let value1 = resolveFieldData(data1, this.sortField);
        let value2 = resolveFieldData(data2, this.sortField);
        let result = null;
        if (value1 == null && value2 != null) result = -1;
        else if (value1 != null && value2 == null) result = 1;
        else if (value1 == null && value2 == null) result = 0;
        else if (typeof value1 === "string" && typeof value2 === "string") result = value1.localeCompare(value2);
        else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
        return this.sortOrder * result;
      });
      if (this.hasFilter()) {
        this.filter(this.filterValue);
      }
    }
    this.onSort.emit({
      sortField: this.sortField,
      sortOrder: this.sortOrder
    });
  }
  isEmpty() {
    let data = this.filteredValue || this.value;
    return data == null || data.length == 0;
  }
  createLazyLoadMetadata() {
    return {
      first: this.first,
      rows: this.rows,
      sortField: this.sortField,
      sortOrder: this.sortOrder
    };
  }
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  filter(filter, filterMatchMode = "contains") {
    this.filterValue = filter;
    if (this.value && this.value.length) {
      let searchFields = this.filterBy.split(",");
      this.filteredValue = this.filterService.filter(this.value, searchFields, filter, filterMatchMode, this.filterLocale);
      if (this.filteredValue.length === this.value.length) {
        this.filteredValue = null;
      }
      if (this.paginator) {
        this.first = 0;
        this.totalRecords = this.filteredValue ? this.filteredValue.length : this.value ? this.value.length : 0;
      }
      this.cd.markForCheck();
    }
  }
  hasFilter() {
    return this.filterValue && this.filterValue.trim().length > 0;
  }
  ngOnDestroy() {
    if (this.translationSubscription) {
      this.translationSubscription.unsubscribe();
    }
    super.ngOnDestroy();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275DataView_BaseFactory;
    return function DataView_Factory(__ngFactoryType__) {
      return (\u0275DataView_BaseFactory || (\u0275DataView_BaseFactory = \u0275\u0275getInheritedFactory(_DataView)))(__ngFactoryType__ || _DataView);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _DataView,
    selectors: [["p-dataView"], ["p-dataview"], ["p-data-view"]],
    contentQueries: function DataView_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c07, 5);
        \u0275\u0275contentQuery(dirIndex, _c116, 5);
        \u0275\u0275contentQuery(dirIndex, _c211, 5);
        \u0275\u0275contentQuery(dirIndex, _c311, 5);
        \u0275\u0275contentQuery(dirIndex, _c410, 5);
        \u0275\u0275contentQuery(dirIndex, _c510, 5);
        \u0275\u0275contentQuery(dirIndex, _c64, 5);
        \u0275\u0275contentQuery(dirIndex, _c74, 5);
        \u0275\u0275contentQuery(dirIndex, _c83, 5);
        \u0275\u0275contentQuery(dirIndex, _c93, 5);
        \u0275\u0275contentQuery(dirIndex, _c103, 5);
        \u0275\u0275contentQuery(dirIndex, Header, 5);
        \u0275\u0275contentQuery(dirIndex, Footer, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.listTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.gridTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.emptymessageTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.footerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginatorleft = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginatorright = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginatordropdownitem = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.loadingicon = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.listicon = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.gridicon = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.header = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.footer = _t.first);
      }
    },
    inputs: {
      paginator: [2, "paginator", "paginator", booleanAttribute],
      rows: [2, "rows", "rows", numberAttribute],
      totalRecords: [2, "totalRecords", "totalRecords", numberAttribute],
      pageLinks: [2, "pageLinks", "pageLinks", numberAttribute],
      rowsPerPageOptions: "rowsPerPageOptions",
      paginatorPosition: "paginatorPosition",
      paginatorStyleClass: "paginatorStyleClass",
      alwaysShowPaginator: [2, "alwaysShowPaginator", "alwaysShowPaginator", booleanAttribute],
      paginatorDropdownAppendTo: "paginatorDropdownAppendTo",
      paginatorDropdownScrollHeight: "paginatorDropdownScrollHeight",
      currentPageReportTemplate: "currentPageReportTemplate",
      showCurrentPageReport: [2, "showCurrentPageReport", "showCurrentPageReport", booleanAttribute],
      showJumpToPageDropdown: [2, "showJumpToPageDropdown", "showJumpToPageDropdown", booleanAttribute],
      showFirstLastIcon: [2, "showFirstLastIcon", "showFirstLastIcon", booleanAttribute],
      showPageLinks: [2, "showPageLinks", "showPageLinks", booleanAttribute],
      lazy: [2, "lazy", "lazy", booleanAttribute],
      lazyLoadOnInit: [2, "lazyLoadOnInit", "lazyLoadOnInit", booleanAttribute],
      emptyMessage: "emptyMessage",
      style: "style",
      styleClass: "styleClass",
      gridStyleClass: "gridStyleClass",
      trackBy: "trackBy",
      filterBy: "filterBy",
      filterLocale: "filterLocale",
      loading: [2, "loading", "loading", booleanAttribute],
      loadingIcon: "loadingIcon",
      first: [2, "first", "first", numberAttribute],
      sortField: "sortField",
      sortOrder: [2, "sortOrder", "sortOrder", numberAttribute],
      value: "value",
      layout: "layout"
    },
    outputs: {
      onLazyLoad: "onLazyLoad",
      onPage: "onPage",
      onSort: "onSort",
      onChangeLayout: "onChangeLayout"
    },
    features: [\u0275\u0275ProvidersFeature([DataViewStyle]), \u0275\u0275InputTransformsFeature, \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c123,
    decls: 10,
    vars: 15,
    consts: [["empty", ""], [3, "ngClass", "ngStyle"], ["class", "p-dataview-loading", 4, "ngIf"], ["class", "p-dataview-header", 4, "ngIf"], ["styleClass", "p-paginator-top", 3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "dropdownAppendTo", "dropdownScrollHeight", "templateLeft", "templateRight", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showPageLinks", "styleClass", "onPageChange", 4, "ngIf"], [1, "p-dataview-content"], [4, "ngIf"], ["styleClass", "p-paginator-bottom", 3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "dropdownAppendTo", "dropdownScrollHeight", "templateLeft", "templateRight", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showPageLinks", "styleClass", "onPageChange", 4, "ngIf"], ["class", "p-dataview-footer", 4, "ngIf"], [1, "p-dataview-loading"], [1, "p-dataview-loading-overlay", "p-overlay-mask"], [3, "class", 4, "ngIf"], [3, "spin", "styleClass", 4, "ngIf"], [4, "ngTemplateOutlet"], [3, "spin", "styleClass"], [1, "p-dataview-header"], ["styleClass", "p-paginator-top", 3, "onPageChange", "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "dropdownAppendTo", "dropdownScrollHeight", "templateLeft", "templateRight", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showPageLinks", "styleClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-dataview-emptymessage"], [4, "ngIf", "ngIfElse"], ["styleClass", "p-paginator-bottom", 3, "onPageChange", "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "dropdownAppendTo", "dropdownScrollHeight", "templateLeft", "templateRight", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showPageLinks", "styleClass"], [1, "p-dataview-footer"]],
    template: function DataView_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c117);
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275template(1, DataView_div_1_Template, 4, 2, "div", 2)(2, DataView_div_2_Template, 3, 1, "div", 3)(3, DataView_p_paginator_3_Template, 1, 17, "p-paginator", 4);
        \u0275\u0275elementStart(4, "div", 5);
        \u0275\u0275template(5, DataView_Conditional_5_Template, 2, 8, "ng-container")(6, DataView_Conditional_6_Template, 2, 8, "ng-container")(7, DataView_div_7_Template, 4, 3, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, DataView_p_paginator_8_Template, 1, 17, "p-paginator", 7)(9, DataView_div_9_Template, 3, 1, "div", 8);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.styleClass);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(12, _c133, ctx.layout === "list", ctx.layout === "grid"))("ngStyle", ctx.style);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.header || ctx.headerTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.paginator && (ctx.paginatorPosition === "top" || ctx.paginatorPosition == "both"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.layout === "list" ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.layout === "grid" ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isEmpty() && !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.paginator && (ctx.paginatorPosition === "bottom" || ctx.paginatorPosition == "both"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.footer || ctx.footerTemplate);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, NgStyle, SlicePipe, PaginatorModule, Paginator, SpinnerIcon, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataView, [{
    type: Component,
    args: [{
      selector: "p-dataView, p-dataview, p-data-view",
      standalone: true,
      imports: [CommonModule, PaginatorModule, SpinnerIcon, SharedModule],
      template: `
        <div [ngClass]="{ 'p-dataview p-component': true, 'p-dataview-list': layout === 'list', 'p-dataview-grid': layout === 'grid' }" [ngStyle]="style" [class]="styleClass">
            <div class="p-dataview-loading" *ngIf="loading">
                <div class="p-dataview-loading-overlay p-overlay-mask">
                    <i *ngIf="loadingIcon" [class]="'p-dataview-loading-icon pi-spin ' + loadingIcon"></i>
                    <ng-container *ngIf="!loadingIcon">
                        <SpinnerIcon *ngIf="!loadingicon" [spin]="true" [styleClass]="'p-dataview-loading-icon'" />
                        <ng-template *ngTemplateOutlet="loadingicon"></ng-template>
                    </ng-container>
                </div>
            </div>
            <div class="p-dataview-header" *ngIf="header || headerTemplate">
                <ng-content select="p-header"></ng-content>
                <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
            </div>
            <p-paginator
                [rows]="rows"
                [first]="first"
                [totalRecords]="totalRecords"
                [pageLinkSize]="pageLinks"
                [alwaysShow]="alwaysShowPaginator"
                (onPageChange)="paginate($event)"
                styleClass="p-paginator-top"
                [rowsPerPageOptions]="rowsPerPageOptions"
                *ngIf="paginator && (paginatorPosition === 'top' || paginatorPosition == 'both')"
                [dropdownAppendTo]="paginatorDropdownAppendTo"
                [dropdownScrollHeight]="paginatorDropdownScrollHeight"
                [templateLeft]="paginatorleft"
                [templateRight]="paginatorright"
                [currentPageReportTemplate]="currentPageReportTemplate"
                [showFirstLastIcon]="showFirstLastIcon"
                [dropdownItemTemplate]="paginatordropdownitem"
                [showCurrentPageReport]="showCurrentPageReport"
                [showJumpToPageDropdown]="showJumpToPageDropdown"
                [showPageLinks]="showPageLinks"
                [styleClass]="paginatorStyleClass"
            ></p-paginator>

            <div class="p-dataview-content">
                @if (layout === 'list') {
                    <ng-container
                        *ngTemplateOutlet="
                            listTemplate;
                            context: {
                                $implicit: paginator ? (filteredValue || value | slice: (lazy ? 0 : first) : (lazy ? 0 : first) + rows) : filteredValue || value
                            }
                        "
                    ></ng-container>
                }
                @if (layout === 'grid') {
                    <ng-container
                        *ngTemplateOutlet="
                            gridTemplate;
                            context: {
                                $implicit: paginator ? (filteredValue || value | slice: (lazy ? 0 : first) : (lazy ? 0 : first) + rows) : filteredValue || value
                            }
                        "
                    ></ng-container>
                }
                <div *ngIf="isEmpty() && !loading">
                    <div class="p-dataview-emptymessage">
                        <ng-container *ngIf="!emptymessageTemplate; else empty">
                            {{ emptyMessageLabel }}
                        </ng-container>
                        <ng-container #empty *ngTemplateOutlet="emptymessageTemplate"></ng-container>
                    </div>
                </div>
            </div>
            <p-paginator
                [rows]="rows"
                [first]="first"
                [totalRecords]="totalRecords"
                [pageLinkSize]="pageLinks"
                [alwaysShow]="alwaysShowPaginator"
                (onPageChange)="paginate($event)"
                styleClass="p-paginator-bottom"
                [rowsPerPageOptions]="rowsPerPageOptions"
                *ngIf="paginator && (paginatorPosition === 'bottom' || paginatorPosition == 'both')"
                [dropdownAppendTo]="paginatorDropdownAppendTo"
                [dropdownScrollHeight]="paginatorDropdownScrollHeight"
                [templateLeft]="paginatorleft"
                [templateRight]="paginatorright"
                [currentPageReportTemplate]="currentPageReportTemplate"
                [showFirstLastIcon]="showFirstLastIcon"
                [dropdownItemTemplate]="paginatordropdownitem"
                [showCurrentPageReport]="showCurrentPageReport"
                [showJumpToPageDropdown]="showJumpToPageDropdown"
                [showPageLinks]="showPageLinks"
                [styleClass]="paginatorStyleClass"
            ></p-paginator>
            <div class="p-dataview-footer" *ngIf="footer || footerTemplate">
                <ng-content select="p-footer"></ng-content>
                <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
            </div>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [DataViewStyle]
    }]
  }], null, {
    paginator: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    rows: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    totalRecords: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    pageLinks: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    rowsPerPageOptions: [{
      type: Input
    }],
    paginatorPosition: [{
      type: Input
    }],
    paginatorStyleClass: [{
      type: Input
    }],
    alwaysShowPaginator: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    paginatorDropdownAppendTo: [{
      type: Input
    }],
    paginatorDropdownScrollHeight: [{
      type: Input
    }],
    currentPageReportTemplate: [{
      type: Input
    }],
    showCurrentPageReport: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showJumpToPageDropdown: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showFirstLastIcon: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showPageLinks: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    lazy: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    lazyLoadOnInit: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    emptyMessage: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    gridStyleClass: [{
      type: Input
    }],
    trackBy: [{
      type: Input
    }],
    filterBy: [{
      type: Input
    }],
    filterLocale: [{
      type: Input
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
    first: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    sortField: [{
      type: Input
    }],
    sortOrder: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    value: [{
      type: Input
    }],
    layout: [{
      type: Input
    }],
    onLazyLoad: [{
      type: Output
    }],
    onPage: [{
      type: Output
    }],
    onSort: [{
      type: Output
    }],
    onChangeLayout: [{
      type: Output
    }],
    listTemplate: [{
      type: ContentChild,
      args: ["list"]
    }],
    gridTemplate: [{
      type: ContentChild,
      args: ["grid"]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: ["header"]
    }],
    emptymessageTemplate: [{
      type: ContentChild,
      args: ["emptymessage"]
    }],
    footerTemplate: [{
      type: ContentChild,
      args: ["footer"]
    }],
    paginatorleft: [{
      type: ContentChild,
      args: ["paginatorleft"]
    }],
    paginatorright: [{
      type: ContentChild,
      args: ["paginatorright"]
    }],
    paginatordropdownitem: [{
      type: ContentChild,
      args: ["paginatordropdownitem"]
    }],
    loadingicon: [{
      type: ContentChild,
      args: ["loadingIcon"]
    }],
    listicon: [{
      type: ContentChild,
      args: ["listicon"]
    }],
    gridicon: [{
      type: ContentChild,
      args: ["gridicon"]
    }],
    header: [{
      type: ContentChild,
      args: [Header]
    }],
    footer: [{
      type: ContentChild,
      args: [Footer]
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DataView, {
    className: "DataView",
    filePath: "dataview.ts",
    lineNumber: 139
  });
})();
var DataViewModule = class _DataViewModule {
  static \u0275fac = function DataViewModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DataViewModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _DataViewModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [DataView, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataViewModule, [{
    type: NgModule,
    args: [{
      imports: [DataView, SharedModule],
      exports: [DataView, SharedModule]
    }]
  }], null, null);
})();

// src/app/pages/core/core.permissions.ts
var _c08 = () => ({ height: "100%" });
function CompanyManagementPermissions_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 4);
    \u0275\u0275text(2, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 5);
    \u0275\u0275text(4, "Id");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 6);
    \u0275\u0275text(6, "Description");
    \u0275\u0275elementEnd()();
  }
}
function CompanyManagementPermissions_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 5)(4, "p-tag", 8);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const customer_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(customer_r1.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(customer_r1.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(customer_r1.description);
  }
}
var CompanyManagementPermissions = class _CompanyManagementPermissions {
  http;
  permissionsList = [];
  constructor(http) {
    this.http = http;
  }
  ngOnInit() {
    this.permissionsList = [];
    this.http.get(APIURL + Endpoints.Core.Authentication.Get_AllPermissions).subscribe((l) => {
      this.permissionsList = l;
    });
  }
  static \u0275fac = function CompanyManagementPermissions_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CompanyManagementPermissions)(\u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompanyManagementPermissions, selectors: [["app-core-permissions"]], decls: 8, vars: 7, consts: [["header", ""], ["body", ""], [1, "card"], ["styleClass", "mt-4", 3, "value", "scrollable", "paginator", "rows"], ["pFrozenColumn", "", 1, "font-bold", 2, "min-width", "200px"], [2, "min-width", "100px"], [2, "min-width", "200px"], ["pFrozenColumn", "", 1, "font-bold"], ["severity", "info"]], template: function CompanyManagementPermissions_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2);
      \u0275\u0275text(1, " Here is the list of currently available permission values and their description. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "div", 2)(3, "p-table", 3);
      \u0275\u0275template(4, CompanyManagementPermissions_ng_template_4_Template, 7, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(6, CompanyManagementPermissions_ng_template_6_Template, 8, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(6, _c08));
      \u0275\u0275advance();
      \u0275\u0275property("value", ctx.permissionsList)("scrollable", true)("paginator", true)("rows", 13);
    }
  }, dependencies: [FormsModule, DataViewModule, CommonModule, DialogModule, ButtonModule, FloatLabelModule, InputTextModule, MultiSelectModule, PasswordModule, TableModule, Table, FrozenColumn, TagModule, Tag], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompanyManagementPermissions, { className: "CompanyManagementPermissions", filePath: "src/app/pages/core/core.permissions.ts", lineNumber: 47 });
})();

// src/app/pages/core/core.routes.ts
var core_routes_default = [
  { path: "editusers", component: CompanyManagementEditUsers, canActivate: [() => PermissionHelpers.HasPermission(PermissionsTable.Core_Users_Write)] },
  { path: "permissions", component: CompanyManagementPermissions, canActivate: [() => PermissionHelpers.HasPermission(PermissionsTable.Core_Permission_Read)] }
];
export {
  core_routes_default as default
};
//# sourceMappingURL=chunk-GH6S6JH6.js.map
