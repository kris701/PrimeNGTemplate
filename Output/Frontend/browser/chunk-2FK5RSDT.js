import {
  AppFloatingConfigurator,
  LayoutService,
  Router,
  RouterModule
} from "./chunk-P5D2DZOB.js";
import {
  APIURL,
  Button,
  ButtonModule,
  CheckboxModule,
  DefaultValueAccessor,
  Endpoints,
  FormsModule,
  HttpClient,
  InputText,
  InputTextModule,
  JwtHelperService,
  NgControlStatus,
  NgModel,
  Password,
  PasswordModule,
  RippleModule,
  Tag,
  TagModule
} from "./chunk-QLUKKW7B.js";
import {
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-2DCWLZUQ.js";
import "./chunk-WDMUDEB6.js";

// src/app/pages/auth/auth.login.ts
var _c0 = () => ({ "position": "absolute", "left": "15px", "top": "15px" });
function Login_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 5);
  }
}
function Login_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 6);
  }
}
var Login = class _Login {
  router;
  http;
  constructor(router, http, layoutService) {
    this.router = router;
    this.http = http;
    this.layoutService = layoutService;
  }
  layoutService;
  apiUrl = APIURL;
  LoginName = "";
  Password = "";
  ngOnInit() {
    if (!localStorage.getItem("jwtToken")) {
      localStorage.removeItem("jwtToken");
      localStorage.removeItem("perms");
    }
  }
  doLogin() {
    var input = {
      username: this.LoginName,
      password: this.Password
    };
    this.http.post(APIURL + Endpoints.Core.Authentication.Post_Authenticate, input).subscribe((c) => {
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
        this.router.navigate(["/"]);
      }
    }, (e) => {
      alert("Username or Password is incorrect!");
    });
  }
  static \u0275fac = function Login_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Login)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(LayoutService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Login, selectors: [["app-login"]], decls: 22, vars: 10, consts: [[1, "flex", "items-center", "justify-center", "min-h-screen", "min-w-[100vw]", "overflow-hidden"], [1, "flex", "flex-col", "items-center", "justify-center"], [2, "border-radius", "56px", "padding", "0.3rem", "background", "linear-gradient(180deg, var(--primary-color) 2%, rgba(33, 150, 243, 0) 110%)"], [1, "w-full", "card", "py-20", "px-8", "sm:px-20", 2, "border-radius", "53px"], [1, "text-center", "mb-2"], ["src", "src/assets/images/logo_large_transparant.png", 1, "mb-2", "w-64", "shrink-0", "mx-auto"], ["src", "src/assets/images/logo_large_transparant_inv.png", 1, "mb-2", "w-64", "shrink-0", "mx-auto"], [1, "text-3xl", "font-medium", "mb-4"], [1, "text-muted-color", "font-medium"], [1, "flex", "flex-col"], ["for", "email1"], ["pInputText", "", "id", "email1", "type", "text", "placeholder", "Username", 1, "w-full", "md:w-[30rem]", "mb-2", 3, "ngModelChange", "ngModel"], ["for", "password1"], ["id", "password1", "placeholder", "Password", "styleClass", "mb-4", 3, "ngModelChange", "keyup.enter", "ngModel", "toggleMask", "fluid", "feedback"], ["label", "Sign In", "styleClass", "w-full", 3, "click"]], template: function Login_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-floating-configurator");
      \u0275\u0275elementStart(1, "p-tag");
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 0)(4, "div", 1)(5, "div", 2)(6, "div", 3)(7, "div", 4);
      \u0275\u0275template(8, Login_Conditional_8_Template, 1, 0, "img", 5)(9, Login_Conditional_9_Template, 1, 0, "img", 6);
      \u0275\u0275elementStart(10, "div", 7);
      \u0275\u0275text(11, "Welcome to PrimeNG Template!");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "span", 8);
      \u0275\u0275text(13, "Sign in to continue");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 9)(15, "label", 10);
      \u0275\u0275text(16, "Username");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "input", 11);
      \u0275\u0275twoWayListener("ngModelChange", function Login_Template_input_ngModelChange_17_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.LoginName, $event) || (ctx.LoginName = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "label", 12);
      \u0275\u0275text(19, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "p-password", 13);
      \u0275\u0275twoWayListener("ngModelChange", function Login_Template_p_password_ngModelChange_20_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.Password, $event) || (ctx.Password = $event);
        return $event;
      });
      \u0275\u0275listener("keyup.enter", function Login_Template_p_password_keyup_enter_20_listener() {
        return ctx.doLogin();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "p-button", 14);
      \u0275\u0275listener("click", function Login_Template_p_button_click_21_listener() {
        return ctx.doLogin();
      });
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(9, _c0));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1("Running on API: ", ctx.apiUrl, "");
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.layoutService.isDarkTheme() ? 8 : 9);
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.LoginName);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.Password);
      \u0275\u0275property("toggleMask", true)("fluid", true)("feedback", false);
    }
  }, dependencies: [ButtonModule, Button, CheckboxModule, InputTextModule, InputText, PasswordModule, Password, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterModule, RippleModule, AppFloatingConfigurator, TagModule, Tag], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Login, { className: "Login", filePath: "src/app/pages/auth/auth.login.ts", lineNumber: 60 });
})();

// src/app/pages/auth/auth.routes.ts
var auth_routes_default = [
  { path: "login", component: Login }
];
export {
  auth_routes_default as default
};
//# sourceMappingURL=chunk-2FK5RSDT.js.map
