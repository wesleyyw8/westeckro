(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _congratulations_congratulations_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./congratulations/congratulations.component */ "./src/app/congratulations/congratulations.component.ts");
/* harmony import */ var _login_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/auth.guard */ "./src/app/login/auth.guard.ts");






var routes = [{
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
        path: 'congratulations',
        canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        component: _congratulations_congratulations_component__WEBPACK_IMPORTED_MODULE_4__["CongratulationsComponent"]
    }, {
        path: '', redirectTo: 'congratulations', pathMatch: 'full',
    }, {
        path: '**', redirectTo: 'congratulations'
    }];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand navbar-light bg-light\">\n  <ul class=\"navbar-nav ml-auto\">\n    <li class=\"nav-item\"\n        *ngIf=\"!isLoggedIn\">\n      <a class=\"nav-link\"\n      [routerLink]=\"['/login']\">Log In</a>\n    </li>\n    <li class=\"nav-item\"\n        *ngIf=\"isLoggedIn\">\n      <a class=\"nav-link\"\n         (click)=\"logOut()\">Log Out</a>\n    </li>\n  </ul>\n</nav>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-link {\n  cursor: pointer !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZXNsZXlyZWJlbG8vc2l0ZXMvdGVja3Jvd2VzL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1saW5rIHtcbiAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG59IiwiLm5hdi1saW5rIHtcbiAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/auth.service */ "./src/app/login/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    Object.defineProperty(AppComponent.prototype, "isLoggedIn", {
        get: function () {
            return this.authService.isLoggedIn;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.logOut = function () {
        this.authService.logout();
        this.router.navigateByUrl('/login');
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _congratulations_congratulations_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./congratulations/congratulations.component */ "./src/app/congratulations/congratulations.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _congratulations_congratulations_component__WEBPACK_IMPORTED_MODULE_7__["CongratulationsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/congratulations/congratulations.component.html":
/*!****************************************************************!*\
  !*** ./src/app/congratulations/congratulations.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  You are logged in! Congratulations!\n</p>\n"

/***/ }),

/***/ "./src/app/congratulations/congratulations.component.less":
/*!****************************************************************!*\
  !*** ./src/app/congratulations/congratulations.component.less ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmdyYXR1bGF0aW9ucy9jb25ncmF0dWxhdGlvbnMuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/congratulations/congratulations.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/congratulations/congratulations.component.ts ***!
  \**************************************************************/
/*! exports provided: CongratulationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CongratulationsComponent", function() { return CongratulationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CongratulationsComponent = /** @class */ (function () {
    function CongratulationsComponent() {
    }
    CongratulationsComponent.prototype.ngOnInit = function () {
    };
    CongratulationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-congratulations',
            template: __webpack_require__(/*! ./congratulations.component.html */ "./src/app/congratulations/congratulations.component.html"),
            styles: [__webpack_require__(/*! ./congratulations.component.less */ "./src/app/congratulations/congratulations.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CongratulationsComponent);
    return CongratulationsComponent;
}());



/***/ }),

/***/ "./src/app/login/auth.guard.ts":
/*!*************************************!*\
  !*** ./src/app/login/auth.guard.ts ***!
  \*************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/login/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        return this.checkUserLoggedIn(state.url);
    };
    AuthGuard.prototype.checkUserLoggedIn = function (url) {
        if (this.authService.isLoggedIn) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/login/auth.service.ts":
/*!***************************************!*\
  !*** ./src/app/login/auth.service.ts ***!
  \***************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        get: function () {
            return !!this.currentUser;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.logIn = function (user) {
        this.currentUser = {
            email: user.email,
            password: user.password
        };
        return this.http.post('https://putsreq.com/DX4uiqPQdKmFWS4zgYpl', user);
    };
    AuthService.prototype.logout = function () {
        this.currentUser = null;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login\">\n  <div class=\"container\">\n    <form  novalidate\n    (ngSubmit)=\"save(ngForm)\"\n    #ngForm=\"ngForm\" \n    [formGroup]=\"loginForm\">\n      <div class=\"row\">\n        <div class=\"col-sm-12 col-md-5 offset-md-3\">\n          <h2>Welcome</h2>\n          <h6>Please sign in to access your account</h6>\n          <div class=\"form-group\">\n            <input \n              type=\"text\" \n              class=\"form-control\" \n              placeholder=\"Email\" \n              formControlName=\"email\"\n              id=\"email\"\n              [ngClass]=\"{\n                'is-invalid': ngForm.submitted && !loginForm.get('email').valid \n              }\"\n              >\n            <div class=\"invalid-container\" \n            *ngIf=\"ngForm.submitted && !loginForm.get('email').valid\">\n              <div *ngIf=\"loginForm.get('email').errors?.customRegex\" class=\"alert alert-danger\">\n                Enter a valid email\n              </div>\n              <div *ngIf=\"loginForm.get('email').errors?.required\" class=\"alert alert-danger\">\n                Email cant be empty\n              </div>\n            </div>\n          </div>\n\n          <div class=\"form-group password-container\">\n            <input \n              [attr.type]=\"isPasswordVisible?'password':'text'\" \n              class=\"form-control\" \n              id=\"password\"\n              placeholder=\"Password\" \n              formControlName=\"password\"\n              [ngClass]=\"{'is-invalid': ngForm.submitted && !loginForm.get('password').valid }\"\n            >\n            <i class=\"fa fa-eye password-icon\" (mousedown)=\"showPassword()\" (mouseup)=\"hidePassword()\"></i>\n            <div class=\"invalid-container\" \n            *ngIf=\"ngForm.submitted && !loginForm.get('password').valid\">\n              <div *ngIf=\"loginForm.get('password').errors?.customRegex\" class=\"alert alert-danger\">\n                Password should have 8 characters or longer, at least 1 special character, 1 number, 1 uppercase\n                character and 1 lower case character\n              </div>\n              <div *ngIf=\"loginForm.get('password').errors?.required\" class=\"alert alert-danger\">\n                Password should not be empty\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group mb-0\">\n            <a href=\"#\" class=\"forgot-password\" value=\"Login\">Forgot Password?</a>\n          </div>\n          <br>\n          <div class=\"form-group btn-container\">\n            <button type=\"button\" class=\"btn btn-lg create-account\">Create account</button>\n            <button type=\"submit\" class=\"btn btn-lg text-light sign-in\" >Sign in</button>\n          </div>\n\n          <div class=\"invalid-container\" *ngIf=\"postError\">\n            <div class=\"alert alert-danger\">\n              {{postErrorMessage}}\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.less":
/*!********************************************!*\
  !*** ./src/app/login/login.component.less ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login {\n  display: flex;\n  height: calc(100vh - 100px);\n  align-items: center;\n}\n.password-container {\n  position: relative;\n}\n.password-container .password-icon {\n  position: absolute;\n  top: 10px;\n  right: 5px;\n  color: grey;\n  cursor: pointer;\n}\n.forgot-password {\n  color: #F07A32;\n}\n.btn-container {\n  display: flex;\n  justify-content: space-between;\n}\n.btn-container .btn {\n  width: calc(50% - 5px);\n  height: 50px;\n  font-size: 16px;\n  font-weight: bold;\n}\n.create-account {\n  color: #F07A32;\n  border-color: #F07A32;\n}\n.sign-in {\n  background-color: #F07A32;\n}\n.alert-danger {\n  padding-top: 2px;\n  padding-bottom: 2px;\n  margin-bottom: 2px;\n}\n.invalid-container {\n  margin-top: 2px;\n  font-size: 12px;\n}\n.form-control.is-invalid {\n  background: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZXNsZXlyZWJlbG8vc2l0ZXMvdGVja3Jvd2VzL3NyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUNERjtBREdBO0VBQ0Usa0JBQUE7QUNERjtBREFBO0VBR0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDQUo7QURHQTtFQUNFLGNBQUE7QUNERjtBRElBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FDRkY7QURBQTtFQUlJLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0RKO0FES0E7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUNIRjtBREtBO0VBQ0UseUJBQUE7QUNIRjtBRE1BO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDSkY7QURPQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FDTEY7QURRQTtFQUNFLGdCQUFBO0FDTkYiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBvcmFuZ2U6ICNGMDdBMzI7XG5cbi5sb2dpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDEwMHB4KTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wYXNzd29yZC1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC5wYXNzd29yZC1pY29uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMHB4O1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgY29sb3I6IGdyZXk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG4uZm9yZ290LXBhc3N3b3JkIHsgXG4gIGNvbG9yOiBAb3JhbmdlO1xufVxuXG4uYnRuLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgLmJ0biB7XG4gICAgd2lkdGg6IGNhbGMoNTAlIC0gNXB4KTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG59XG5cbi5jcmVhdGUtYWNjb3VudCB7XG4gIGNvbG9yOiBAb3JhbmdlO1xuICBib3JkZXItY29sb3I6IEBvcmFuZ2U7XG59XG4uc2lnbi1pbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IEBvcmFuZ2U7XG59XG5cbi5hbGVydC1kYW5nZXIge1xuICBwYWRkaW5nLXRvcDogMnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG5cbi5pbnZhbGlkLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZm9ybS1jb250cm9sLmlzLWludmFsaWQge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufSIsIi5sb2dpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDEwMHB4KTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wYXNzd29yZC1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucGFzc3dvcmQtY29udGFpbmVyIC5wYXNzd29yZC1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiA1cHg7XG4gIGNvbG9yOiBncmV5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZm9yZ290LXBhc3N3b3JkIHtcbiAgY29sb3I6ICNGMDdBMzI7XG59XG4uYnRuLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5idG4tY29udGFpbmVyIC5idG4ge1xuICB3aWR0aDogY2FsYyg1MCUgLSA1cHgpO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY3JlYXRlLWFjY291bnQge1xuICBjb2xvcjogI0YwN0EzMjtcbiAgYm9yZGVyLWNvbG9yOiAjRjA3QTMyO1xufVxuLnNpZ24taW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjA3QTMyO1xufVxuLmFsZXJ0LWRhbmdlciB7XG4gIHBhZGRpbmctdG9wOiAycHg7XG4gIHBhZGRpbmctYm90dG9tOiAycHg7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cbi5pbnZhbGlkLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmZvcm0tY29udHJvbC5pcy1pbnZhbGlkIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./src/app/login/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ "./src/app/login/auth.service.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, router, authService) {
        this.fb = fb;
        this.router = router;
        this.authService = authService;
        this.isPasswordVisible = true;
        this.user = new _user__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.postError = false;
        this.postErrorMessage = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.customRegexValidator(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    this.customRegexValidator(/((?=.*\d)(?=.*[A-Z])(?=.*\W).{8,})/)]],
        });
    };
    LoginComponent.prototype.customRegexValidator = function (nameRe) {
        return function (control) {
            var customRegex = nameRe.test(control.value);
            return customRegex ? null : { customRegex: { value: control.value } };
        };
    };
    LoginComponent.prototype.showPassword = function () {
        this.isPasswordVisible = false;
    };
    LoginComponent.prototype.hidePassword = function () {
        this.isPasswordVisible = true;
    };
    LoginComponent.prototype.save = function (form) {
        var _this = this;
        if (this.loginForm.valid) {
            this.user = {
                email: this.loginForm.value.email,
                password: this.loginForm.value.password
            };
            this.authService.logIn(this.user).subscribe(function (result) {
                console.log('success: ', result);
                _this.router.navigate(['/congratulations']);
            }, function (error) { return _this.onHttpError(error); });
        }
    };
    LoginComponent.prototype.onHttpError = function (errorResponse) {
        console.log('error:', errorResponse);
        this.postError = true;
        this.postErrorMessage = errorResponse.message;
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.less */ "./src/app/login/login.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/user.ts":
/*!*******************************!*\
  !*** ./src/app/login/user.ts ***!
  \*******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(email, password) {
        if (email === void 0) { email = ''; }
        if (password === void 0) { password = ''; }
        this.email = email;
        this.password = password;
    }
    return User;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/wesleyrebelo/sites/teckrowes/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map