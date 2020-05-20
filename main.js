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



var routes = [];
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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1, h2, h3, h4, h5, h6, ul {\r\n\tmargin: 0px;\r\n\tpadding: 0px;\r\n}\r\n\r\nhtml, body {\r\n\theight: 100%;\r\n\twidth: 100%;\r\n\t/* overflow-x: hidden; */\r\n}\r\n\r\n/* Navbar */\r\n\r\n.navbar-light .navbar-toggler-icon{\r\n\tcolor: red !important;\r\n}\r\n\r\n.nav-item{\r\n\ttext-align: right;\r\n}\r\n\r\n.navbar .navbar-nav li a {\r\n\tcolor: #34325e;\r\n\ttext-transform: uppercase;\r\n\tfont-weight: 500;\r\n\tfont-size: 0.9rem;\r\n\tletter-spacing: 0.1rem;\r\n}\r\n\r\n.navbar .navbar-nav li a:hover, .navbar-default .navbar-nav li a:active {\r\n\tcolor: black;\r\n\tfont-weight: 700;;\r\n}\r\n\r\n.navbar p {\r\n\tfont-family: 'Marck Script', cursive;\r\n\tfont-size:2.2rem;\t\r\n\tcolor: #c6133f;\r\n}\r\n\r\n/* Footer */\r\n\r\nfooter {\r\n\tbackground-color: #26272b;\r\n\tcolor: #717373;\r\n\tpadding: 2rem;\r\n}\r\n\r\n.footer-info .contact i {\r\n\tfont-size: 1.2rem;\r\n\tcolor: whitesmoke;\r\n\topacity: 0.7;\r\n\tpadding-right: 0.8rem;\r\n}\r\n\r\n.footer-info .social {\r\n\tborder-left: 1px solid rgba(245, 245, 245, 0.2);\r\n}\r\n\r\n.footer-info .social a {\r\n\tfont-size: 1.8rem;\r\n\tpadding: 0.1rem 0.5rem;\r\n}\r\n\r\n.footer-info p {\r\n\tfont-size: .8rem;\r\n}\r\n\r\n.footer-info h6 {\r\n\tmargin-bottom: 1.4rem;\r\n\tletter-spacing: 0.1rem;\r\n}\r\n\r\n.fa-facebook-square {\r\n\tcolor: #3b5998;\r\n}\r\n\r\n.fa-instagram {\r\n\tcolor: #517fa4;\r\n}\r\n\r\n.fa-linkedin-square {\r\n\tcolor: #3b5998;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiOztBQUVEO0NBQ0MsYUFBYTtDQUNiLFlBQVk7Q0FDWix5QkFBeUI7Q0FDekI7O0FBRUQsWUFBWTs7QUFFWjtDQUNDLHNCQUFzQjtDQUN0Qjs7QUFFRDtDQUNDLGtCQUFrQjtDQUNsQjs7QUFFRDtDQUNDLGVBQWU7Q0FDZiwwQkFBMEI7Q0FDMUIsaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQix1QkFBdUI7Q0FDdkI7O0FBRUQ7Q0FDQyxhQUFhO0NBQ2IsaUJBQWlCO0NBQ2pCOztBQUVEO0NBQ0MscUNBQXFDO0NBQ3JDLGlCQUFpQjtDQUNqQixlQUFlO0NBQ2Y7O0FBRUQsWUFBWTs7QUFFWjtDQUNDLDBCQUEwQjtDQUMxQixlQUFlO0NBQ2YsY0FBYztDQUNkOztBQUVEO0NBQ0Msa0JBQWtCO0NBQ2xCLGtCQUFrQjtDQUNsQixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCOztBQUVEO0NBQ0MsZ0RBQWdEO0NBQ2hEOztBQUVEO0NBQ0Msa0JBQWtCO0NBQ2xCLHVCQUF1QjtDQUN2Qjs7QUFFRDtDQUNDLGlCQUFpQjtDQUNqQjs7QUFFRDtDQUNDLHNCQUFzQjtDQUN0Qix1QkFBdUI7Q0FDdkI7O0FBRUQ7Q0FDQyxlQUFlO0NBQ2Y7O0FBRUQ7Q0FDQyxlQUFlO0NBQ2Y7O0FBRUQ7Q0FDQyxlQUFlO0NBQ2YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHVsIHtcclxuXHRtYXJnaW46IDBweDtcclxuXHRwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbmh0bWwsIGJvZHkge1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHR3aWR0aDogMTAwJTtcclxuXHQvKiBvdmVyZmxvdy14OiBoaWRkZW47ICovXHJcbn1cclxuXHJcbi8qIE5hdmJhciAqL1xyXG5cclxuLm5hdmJhci1saWdodCAubmF2YmFyLXRvZ2dsZXItaWNvbntcclxuXHRjb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uYXYtaXRlbXtcclxuXHR0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLm5hdmJhciAubmF2YmFyLW5hdiBsaSBhIHtcclxuXHRjb2xvcjogIzM0MzI1ZTtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0Zm9udC1zaXplOiAwLjlyZW07XHJcblx0bGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcclxufVxyXG5cclxuLm5hdmJhciAubmF2YmFyLW5hdiBsaSBhOmhvdmVyLCAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgbGkgYTphY3RpdmUge1xyXG5cdGNvbG9yOiBibGFjaztcclxuXHRmb250LXdlaWdodDogNzAwOztcclxufVxyXG5cclxuLm5hdmJhciBwIHtcclxuXHRmb250LWZhbWlseTogJ01hcmNrIFNjcmlwdCcsIGN1cnNpdmU7XHJcblx0Zm9udC1zaXplOjIuMnJlbTtcdFxyXG5cdGNvbG9yOiAjYzYxMzNmO1xyXG59XHJcblxyXG4vKiBGb290ZXIgKi9cclxuXHJcbmZvb3RlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzI2MjcyYjtcclxuXHRjb2xvcjogIzcxNzM3MztcclxuXHRwYWRkaW5nOiAycmVtO1xyXG59XHJcblxyXG4uZm9vdGVyLWluZm8gLmNvbnRhY3QgaSB7XHJcblx0Zm9udC1zaXplOiAxLjJyZW07XHJcblx0Y29sb3I6IHdoaXRlc21va2U7XHJcblx0b3BhY2l0eTogMC43O1xyXG5cdHBhZGRpbmctcmlnaHQ6IDAuOHJlbTtcclxufVxyXG5cclxuLmZvb3Rlci1pbmZvIC5zb2NpYWwge1xyXG5cdGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgyNDUsIDI0NSwgMjQ1LCAwLjIpO1xyXG59XHJcblxyXG4uZm9vdGVyLWluZm8gLnNvY2lhbCBhIHtcclxuXHRmb250LXNpemU6IDEuOHJlbTtcclxuXHRwYWRkaW5nOiAwLjFyZW0gMC41cmVtO1xyXG59XHJcblxyXG4uZm9vdGVyLWluZm8gcCB7XHJcblx0Zm9udC1zaXplOiAuOHJlbTtcclxufVxyXG5cclxuLmZvb3Rlci1pbmZvIGg2IHtcclxuXHRtYXJnaW4tYm90dG9tOiAxLjRyZW07XHJcblx0bGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcclxufVxyXG5cclxuLmZhLWZhY2Vib29rLXNxdWFyZSB7XHJcblx0Y29sb3I6ICMzYjU5OTg7XHJcbn1cclxuXHJcbi5mYS1pbnN0YWdyYW0ge1xyXG5cdGNvbG9yOiAjNTE3ZmE0O1xyXG59XHJcblxyXG4uZmEtbGlua2VkaW4tc3F1YXJlIHtcclxuXHRjb2xvcjogIzNiNTk5ODtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\n\n<nav class=\"navbar navbar-expand-lg navbar-light\">\n    <div class=\"container-fluid\">\n        <a class=\"navbar-brand\" routerLink='home'>\n            <p>Mister Bookman</p>\n        </a>\n        <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse \" id=\"navbarSupportedContent\">\n            <ul class=\"navbar-nav ml-auto\">\n                <li class=\"nav-item \">\n                    <a routerLink='home' class=\"nav-link\">Home</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a routerLink='orders' *ngIf=\"userService.isloggedIn()\" class=\"nav-link ml-3 \">Orders</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a routerLink='cart' *ngIf=\"userService.isloggedIn()\" class=\"nav-link ml-3 \">Cart</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a routerLink='shop' *ngIf=\"userService.isloggedIn()\" class=\"nav-link ml-3 \">Browse</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a routerLink='home' *ngIf=\"!userService.isloggedIn()\" class=\"nav-link ml-3 \" data-toggle=\"modal\" data-target=\"#loginModal\">Login</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a routerLink='register' *ngIf=\"!userService.isloggedIn()\" class=\"nav-link ml-3 \"data-toggle=\"modal\" data-target=\"#signupModal\">Signup</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a (click)=\"logout()\" routerLink *ngIf=\"userService.isloggedIn()\" class=\"nav-link ml-3 \">Logout</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n\n<!-- Home Page -->\n\n<div class=\"row\">\n    <div class=\"col-12\">\n        <router-outlet></router-outlet>\n    </div>\n</div>\n\n<!-- Footer -->\n\n<footer>\n    <div class=\"footer-info container-fluid\">\n        <div class=\"row justify-content-center\">\n            <div class=\"container-fluid col-md-8 col-sm-12\">\n                <div class=\"row justify-content-center\">\n                    <div class=\"col-md-3\">\n                        <h6 class=\"text-white\"><b>QUICK LINKS</b></h6>\n                        <p>About Us</p>\n                        <p>Contact Us</p>\n                    </div>\n\n                    <div class=\"col-md-3\">\n                        <h6 class=\"text-white\"><b>GET HELP</b></h6>\n                        <p>Payments</p>\n                        <p>Shipping</p>\n                        <p>Cancellation and Returns</p>\n                        <p>FAQ</p>\n                    </div>\n\n                    <div class=\"col-md-3\">\n                        <h6 class=\"text-white\"><b>POLICIES</b></h6>\n                        <p>Terms of Use</p>\n                        <p>Return Policy</p>\n                        <p>Privacy</p>\n                        <p>Security</p>\n                    </div>\n\n                    <div class=\"col-md-3 contact\">\n                        <h6 class=\"text-white\"><b>CONTACT US</b></h6>\n                        <p><i class=\"fa fa-phone\"></i>033-333333</p>\n                        <p><i class=\"fa fa-envelope\"></i>bookman@info.in</p>\n                        <p><i class=\"fa fa-map-pin\"></i>21,Wilson Street,Kolkata-025</p>\n                    </div>\n                </div>\n            </div>\n\n\n            <div class=\"col-md-3 col-sm-12 social text-center\">\n\n                <h6 class=\"text-white\"><b>FOLLOW US</b></h6>\n                <a href=\"#\"><i class=\"fa fa-facebook-square\" aria-hidden=\"true\"></i></a>\n                <a href=\"#\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></a>\n                <a href=\"#\"><i class=\"fa fa-linkedin-square\" aria-hidden=\"true\"></i></a>\n            </div>\n        </div>\n    </div>\n</footer>"

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
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AppComponent.prototype.logout = function () {
        this.userService.deleteToken();
        this.router.navigateByUrl('/login');
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/auth.interceptor */ "./src/app/auth/auth.interceptor.ts");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/orders/orders.component.ts");
/* harmony import */ var _booklist_booklist_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./booklist/booklist.component */ "./src/app/booklist/booklist.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");








// import { SignupComponent } from './signup/signup.component';
// import { LoginComponent } from './login/login.component';







var approutes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
    { path: 'contactus', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"] },
    { path: 'login', component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
    { path: 'register', component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"] },
    { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_14__["CartComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'shop', component: _booklist_booklist_component__WEBPACK_IMPORTED_MODULE_13__["BooklistComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'orders', component: _orders_orders_component__WEBPACK_IMPORTED_MODULE_12__["OrdersComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                // SignupComponent,
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                // LoginComponent,
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"],
                _orders_orders_component__WEBPACK_IMPORTED_MODULE_12__["OrdersComponent"],
                _booklist_booklist_component__WEBPACK_IMPORTED_MODULE_13__["BooklistComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_14__["CartComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(approutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
            ],
            providers: [{
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                    useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__["AuthInterceptor"],
                    multi: true
                }, _auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        if (!this.userService.isloggedIn()) {
            this.router.navigateByUrl('/login');
            this.userService.deleteToken();
            return false;
        }
        this.userService.getUserProfile().subscribe(function (res) {
            _this.userService.userDetails = res['user'];
        }, function (err) { });
        return true;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth.interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(_userService, router) {
        this._userService = _userService;
        this.router = router;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        if (req.headers.get('noauth'))
            return next.handle(req.clone());
        else {
            var clonedreq = req.clone({
                headers: req.headers.set("Authorization", this._userService.getToken())
            });
            return next.handle(clonedreq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (event) { }, function (err) {
                if (err.error.auth == false) {
                    _this.router.navigateByUrl('/login');
                }
            }));
        }
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/booklist/booklist.component.css":
/*!*************************************************!*\
  !*** ./src/app/booklist/booklist.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Book Display */\r\n\r\n.icon {\r\n  color: #d9534f;\r\n}\r\n\r\n.product-detail {\r\n  border-bottom: 3px solid #dfe5e9;\r\n}\r\n\r\n.product-detail h5 {\r\n  color: #2f383d;\r\n  font-size: 1.2rem;\r\n  font-family: Lato, sans-serif;\r\n  font-weight: bold;\r\n}\r\n\r\n.price span, .book-desc span {\r\n  color: #2f383d;\r\n  font-weight: bold;\r\n  font-family: Lato, sans-serif;\r\n  font-size: 1rem;\r\n  letter-spacing: 0.08rem;\r\n  opacity: 0.8;\r\n}\r\n\r\n/* Order Form */\r\n\r\n.order-form h5 {\r\n  color: #2f383d;\r\n  font-size: 1.2rem;\r\n  font-family: Lato, sans-serif;\r\n  font-weight: bold;\r\n}\r\n\r\n.order-form h6 {\r\n  color: #2f383d;\r\n  font-weight: bold;\r\n  font-family: Lato, sans-serif;\r\n  font-size: 1rem;\r\n  letter-spacing: 0.08rem;\r\n  opacity: 0.8;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9va2xpc3QvYm9va2xpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFBa0I7O0FBRWxCO0VBQ0UsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLGlDQUFpQztDQUNsQzs7QUFFRDtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsYUFBYTtDQUNkOztBQUVELGdCQUFnQjs7QUFFaEI7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QixrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QixnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLGFBQWE7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL2Jvb2tsaXN0L2Jvb2tsaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBCb29rIERpc3BsYXkgKi9cclxuXHJcbi5pY29uIHtcclxuICBjb2xvcjogI2Q5NTM0ZjtcclxufVxyXG5cclxuLnByb2R1Y3QtZGV0YWlsIHtcclxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2RmZTVlOTtcclxufVxyXG5cclxuLnByb2R1Y3QtZGV0YWlsIGg1IHtcclxuICBjb2xvcjogIzJmMzgzZDtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBmb250LWZhbWlseTogTGF0bywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnByaWNlIHNwYW4sIC5ib29rLWRlc2Mgc3BhbiB7XHJcbiAgY29sb3I6ICMyZjM4M2Q7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1mYW1pbHk6IExhdG8sIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjA4cmVtO1xyXG4gIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuLyogT3JkZXIgRm9ybSAqL1xyXG5cclxuLm9yZGVyLWZvcm0gaDUge1xyXG4gIGNvbG9yOiAjMmYzODNkO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBMYXRvLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ub3JkZXItZm9ybSBoNiB7XHJcbiAgY29sb3I6ICMyZjM4M2Q7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1mYW1pbHk6IExhdG8sIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjA4cmVtO1xyXG4gIG9wYWNpdHk6IDAuODtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/booklist/booklist.component.html":
/*!**************************************************!*\
  !*** ./src/app/booklist/booklist.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" *ngIf='!selected'>\n<button class=\"btn btn-sm btn-outline-info\" (click)='SortAsc()'>Sort asc</button>\n<button class=\"btn btn-sm btn-outline-info\" (click)='SortDesc()'>Sort desc</button>\n<!-- Book Display -->\n\n<div class=\"row text-center mx-4\">\n  <div class=\"col-md-6 col-lg-4 col-sm-12 mb-4\" *ngFor=\"let book of bookService.books\">\n    <div class=\"row\">\n      <div class=\"col-sm-5\">\n        <div class=\"product-image align-self-center\">\n          <img src=\"{{'assets/BookImages/'+book.bpic}}\" class=\"img-fluid img-thumbnail\">\n        </div>\n      </div>\n\n      <div class=\"col-sm-7 align-self-center\">\n        <div class=\"product-detail py-3\">\n          <h5 class=\"product-name\">\n            {{book.bname}}\n          </h5>\n          <p class=\"price\">\n            <span>{{book.bprice | currency:'INR'}}</span>\n          </p>\n          <p class=\"book-desc\">\n            <span>Genre : {{book.bdesc}}</span>\n          </p>\n        </div>\n        <div class=\"product-actions my-auto\">\n          <div class=\"row \">\n            <div class=\"col-md-12\">\n              <button (click)='AddToCart(book)' class=\"btn btn-sm btn-danger px-3 py-1 m-2\">Add to cart</button>\n              <button (click)='AddToCart(book)' class=\"btn btn-sm btn-info px-3 py-1 m-2\">Wishlist</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n\n\n<div class=\"order-form container-fluid\" *ngIf='selected'>\n  <div class=\"row\">\n    <div class=\"product col-md-4 row border py-5 m-4 border-danger\">\n      <div class=\"image col-md-5 w-75 \">\n        <img src=\"{{'assets/BookImages/'+bookService.selectedBook.bpic}}\" class=\"img-fluid\">\n      </div>\n      <div class=\"col-md-7\">\n        <h5>{{bookService.selectedBook.bname}}</h5>\n        <h6>{{bookService.selectedBook.aname}}</h6>\n        <h6>{{bookService.selectedBook.bdesc}}</h6>\n      </div>\n    </div>\n\n    <div class=\"col-md-8\">\n      <h3>Customer Details</h3>\n      <p>Name: {{userService.userDetails.name}}</p>\n      <p>Email: {{userService.userDetails.email}}</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/booklist/booklist.component.ts":
/*!************************************************!*\
  !*** ./src/app/booklist/booklist.component.ts ***!
  \************************************************/
/*! exports provided: BooklistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooklistComponent", function() { return BooklistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/book.service */ "./src/app/shared/book.service.ts");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");




var BooklistComponent = /** @class */ (function () {
    function BooklistComponent(bookService, userService) {
        this.bookService = bookService;
        this.userService = userService;
        this.ErrorMessage = null;
        this.clicked = null;
    }
    BooklistComponent.prototype.ngOnInit = function () {
        this.GetBooks();
    };
    BooklistComponent.prototype.SortAsc = function () {
        var _this = this;
        this.bookService.getBooksAsc().subscribe(function (res) {
            _this.bookService.books = res;
        }, function (err) {
            console.log(JSON.stringify(err, undefined, 2));
        });
    };
    BooklistComponent.prototype.SortDesc = function () {
        var _this = this;
        this.bookService.getBooksDesc().subscribe(function (res) {
            _this.bookService.books = res;
        }, function (err) {
            console.log(JSON.stringify(err, undefined, 2));
        });
    };
    BooklistComponent.prototype.GetBooks = function () {
        var _this = this;
        this.bookService.getBooks().subscribe(function (res) {
            _this.bookService.books = res;
        }, function (err) {
            console.log(JSON.stringify(err, undefined, 2));
        });
    };
    BooklistComponent.prototype.AddToCart = function (book) {
        this.bookService.addToCart(book._id).subscribe(function (res) {
            console.log("Added");
        }, function (err) {
            console.log('Cannot add to cart');
            console.log(JSON.stringify(err, undefined, 2));
        });
    };
    BooklistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-booklist',
            template: __webpack_require__(/*! ./booklist.component.html */ "./src/app/booklist/booklist.component.html"),
            styles: [__webpack_require__(/*! ./booklist.component.css */ "./src/app/booklist/booklist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"], _shared_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], BooklistComponent);
    return BooklistComponent;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.css":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  body {\r\n      background-color: #f1f3f6;\r\n  }\r\n\r\n  .product-detail h5 {\r\n      color:#585858;\r\n  }\r\n\r\n  .book-desc span {\r\n      color: #2f383d;\r\n      opacity: 0.9;\r\n      font-weight: 500;\r\n      font-family: Lato, sans-serif;\r\n      font-size: 1.1rem;\r\n  }\r\n\r\n  .price-details p {\r\n      color: #585858;\r\n      font-family: Lato, sans-serif;\r\n      font-size: 1.2em;\r\n  }\r\n\r\n  .price-details span {\r\n      color: #5CA360;\r\n      font-weight: bold;\r\n  }\r\n\r\n  .price-details h4 {\r\n      color:whitesmoke;\r\n      letter-spacing: 0.1rem;\r\n      font-weight: 500;\r\n      font-family: Lato, sans-serif;\r\n  }\r\n\r\n  .price-details h5 {\r\n      color: #585858;\r\n      font-family: Lato, sans-serif;\r\n      font-weight: bold;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkVBQUU7TUFDSSwwQkFBMEI7R0FDN0I7O0VBRUQ7TUFDSSxjQUFjO0dBQ2pCOztFQUVEO01BQ0ksZUFBZTtNQUNmLGFBQWE7TUFDYixpQkFBaUI7TUFDakIsOEJBQThCO01BQzlCLGtCQUFrQjtHQUNyQjs7RUFFRDtNQUNJLGVBQWU7TUFDZiw4QkFBOEI7TUFDOUIsaUJBQWlCO0dBQ3BCOztFQUVEO01BQ0ksZUFBZTtNQUNmLGtCQUFrQjtHQUNyQjs7RUFFRDtNQUNJLGlCQUFpQjtNQUNqQix1QkFBdUI7TUFDdkIsaUJBQWlCO01BQ2pCLDhCQUE4QjtHQUNqQzs7RUFFRDtNQUNJLGVBQWU7TUFDZiw4QkFBOEI7TUFDOUIsa0JBQWtCO0dBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIGJvZHkge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmM2Y2O1xyXG4gIH1cclxuXHJcbiAgLnByb2R1Y3QtZGV0YWlsIGg1IHtcclxuICAgICAgY29sb3I6IzU4NTg1ODtcclxuICB9XHJcblxyXG4gIC5ib29rLWRlc2Mgc3BhbiB7XHJcbiAgICAgIGNvbG9yOiAjMmYzODNkO1xyXG4gICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBMYXRvLCBzYW5zLXNlcmlmO1xyXG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICB9XHJcblxyXG4gIC5wcmljZS1kZXRhaWxzIHAge1xyXG4gICAgICBjb2xvcjogIzU4NTg1ODtcclxuICAgICAgZm9udC1mYW1pbHk6IExhdG8sIHNhbnMtc2VyaWY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgfVxyXG5cclxuICAucHJpY2UtZGV0YWlscyBzcGFuIHtcclxuICAgICAgY29sb3I6ICM1Q0EzNjA7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgLnByaWNlLWRldGFpbHMgaDQge1xyXG4gICAgICBjb2xvcjp3aGl0ZXNtb2tlO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBmb250LWZhbWlseTogTGF0bywgc2Fucy1zZXJpZjtcclxuICB9XHJcblxyXG4gIC5wcmljZS1kZXRhaWxzIGg1IHtcclxuICAgICAgY29sb3I6ICM1ODU4NTg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBMYXRvLCBzYW5zLXNlcmlmO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/cart/cart.component.html":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n  <div class=\"container-fluid\">\n    <div class=\"row \">\n      <div class=\"col-sm-12 col-md-5 mx-5 my-4 pl-5\">\n        <div class=\"row\">\n          <div class=\"col-sm-12 pt-2\"\n            style=\"color:whitesmoke;font-weight:900;background-color:#5CA360;letter-spacing: 0.1rem;\">\n            <h5 *ngIf='bookService.cartBooks.length'>My Cart</h5>\n            <h5 *ngIf='!bookService.cartBooks.length'>Cart is empty</h5>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-12 my-3 py-4 pl-5 bg-white shadow-sm rounded-lg\"\n            *ngFor=\"let book of bookService.cartBooks\">\n            <div class=\"row\">\n              <div class=\"product-image col-md-2 col-sm-12\">\n                <img src=\"{{'assets/BookImages/'+book.bookId.bpic}}\" class=\"img-fluid\" style=\"width:100%\">\n              </div>\n\n              <div class=\"product-info col-md-10 col-sm-12\">\n                <div class=\"product-detail px-3\">\n                  <h5>{{book.bookId.bname}}</h5>\n                  <p class=\"book-desc\">\n                    <span>{{book.bookId.bprice | currency:'INR'}}</span>\n                    <br>\n                    <span>Genre : {{book.bookId.bdesc}}</span>\n                  </p>\n                </div>\n                <div class=\"product-actions px-3\">\n                  <i class=\"icon fa fa-plus-square mr-1\"  (click)=increaseQuan(book)></i>\n                  <span style=\"font-weight: 700;\">{{book.quantity}}</span>\n                  <i class=\"icon fa fa-minus-square mr-3 ml-1\"  (click)=decreaseQuan(book)></i>\n                  <button (click)='DeleteCartItem(book.bookId._id)' class=\"btn btn-sm btn-danger px-3 m-2\"\n                    style=\"box-shadow: none;font-size:0.8rem;\">Remove</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-2\"></div>\n      <div class=\"price-details col-md-3 col-sm-12 ml-5 my-4 rounded-lg bg-white shadow-sm\">\n        <div class=\"col-sm-12 pt-3\" style=\"background-color: #5CA360;\">\n          <h4>PRICE DETAILS</h4>\n          <hr>\n        </div>\n        <div class=\"row pl-3\">\n          <div class=\"col-sm-8\">\n            <p>Price</p>\n          </div>\n          <div class=\"col-sm-4\">\n            <p>{{totalPrice|currency:'INR'}}</p>\n          </div>\n          <div class=\"col-sm-8\">\n            <p>Delivery Charges</p>\n          </div>\n          <div class=\"col-sm-4\">\n            <span>FREE</span>\n          </div>\n          <div class=\"col-sm-12 pr-4\">\n            <hr style=\"border: 1px dashed;\">\n          </div>\n          <div class=\"col-sm-8 mt-2\">\n            <h5>Total Amount</h5>\n          </div>\n          <div class=\"col-sm-4 mt-2\" style=\"font-weight: bold;\">\n            <p>{{totalPrice|currency:'INR'}}</p>\n          </div>\n          <div class=\"col-sm-12 pr-4\">\n            <hr style=\"border: 1px dashed;\">\n          </div>\n          <button (click)='placeOrder()' class=\"btn rounded\"\n            style=\"background-color:#5CA360;color: whitesmoke;box-shadow: none;font-weight: bold;font-size:0.9rem;letter-spacing: 0.1rem;\">\n            CONFIRM ORDER\n          </button>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"address row mb-5\">\n      <div class=\"col-md-5 col-sm-12 mt-5 mx-5 row\">\n        <div class=\"col-sm-12 pt-2 mb-3\"\n        style=\"font-weight:900;letter-spacing: 0.1rem;background-color:#5CA360;color: whitesmoke\">\n        <h5>Deliver To</h5>\n      </div>\n      <div class=\"col-sm-12 bg-white\">\n        <form #addressForm='ngForm'>\n        <div class=\"md-form\">\n          <i class=\"fa fa-map-pin prefix\" style=\"color:#9F1E22;\"></i>\n          <input type=\"text\" id=\"form2\" class=\"form-control\" name=\"caddress\" #caddress='ngModel'\n          [(ngModel)]=\"bookService.currentOrder.caddress\" required>\n          <label for=\"form2\">Your Address</label>\n      </div>\n      </form>\n      </div>\n      </div>\n    </div>\n    </div>\n</body>"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/book.service */ "./src/app/shared/book.service.ts");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var CartComponent = /** @class */ (function () {
    function CartComponent(bookService, userService, http) {
        this.bookService = bookService;
        this.userService = userService;
        this.http = http;
        this.cartItems = [];
        this.totalPrice = 0;
    }
    CartComponent.prototype.ngOnInit = function () {
        this.GetCartItems();
    };
    CartComponent.prototype.GetCartItems = function () {
        var _this = this;
        this.bookService.getCartItems().subscribe(function (res) {
            _this.bookService.cartBooks = res;
            _this.bookService.cartBooks.forEach(function (cartItem) {
                _this.totalPrice = Number(_this.totalPrice) + (cartItem['bookId']['bprice'] * cartItem['quantity']);
            });
        }, function (err) {
            console.log('Error' + JSON.stringify(err, undefined, 2));
        });
    };
    CartComponent.prototype.DeleteCartItem = function (id) {
        var _this = this;
        this.bookService.deleteCartItem(id).subscribe(function (res) {
            _this.GetCartItems();
        });
    };
    CartComponent.prototype.increaseQuan = function (book) {
        book.quantity = book.quantity + 1;
        this.totalPrice = Number(this.totalPrice) + book.bookId.bprice;
    };
    CartComponent.prototype.decreaseQuan = function (book) {
        if (book.quantity > 1) {
            book.quantity = book.quantity - 1;
            this.totalPrice = Number(this.totalPrice) - book.bookId.bprice;
        }
    };
    CartComponent.prototype.placeOrder = function () {
        var _this = this;
        var paymentData = {
            purpose: 'Order Payment',
            amount: this.totalPrice,
            buyer_name: 'Mister Bookman',
            email: this.userService.userDetails.email,
            phone: this.userService.userDetails.mobile,
            user_id: this.userService.userDetails._id,
            redirect_url: "https://bookmanserver.herokuapp.com/pay/redirect?user_id=" + this.userService.userDetails._id,
            webhook_url: '/webhook/'
        };
        this.http.post('https://bookmanserver.herokuapp.com/payAmount', paymentData).subscribe(function (response) {
            //Current Order
            _this.bookService.cartBooks.forEach(function (cartItem) {
                _this.bookService.currentOrder.books.unshift({ bookId: cartItem['bookId']['_id'], quantity: cartItem['quantity'] });
            });
            _this.bookService.OrderBook(_this.bookService.currentOrder).subscribe(function (res) {
                _this.bookService.cartBooks.forEach(function (cartItem) {
                    _this.DeleteCartItem(cartItem['bookId']['_id']);
                });
                console.log('Order Confirmed');
            }, function (err) {
                console.log('Error in placing order' + JSON.stringify(err, undefined, 2));
            });
            window.location.href = response; //setting location to redirect_url window
        }, function (error) {
            console.log('Error in payment request' + JSON.stringify(error, undefined, 2));
        });
    };
    CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"], _shared_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12 col-md-5\">\n    <p> adsads</p>\n  </div>\n  <div class=\"col-sm-12 col-md-5\">\n   fccc AS\n  </div>\n\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-8\">\n    kndasndankad\n  </div>\n  <div class=\"col-sm-2 offset-5\">\n    daslmdakskads\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Modal Forms */\r\n\r\n.modal-header {\r\n  background: linear-gradient(to left, rgba(218, 68, 83, 0.9), rgba(137, 33, 107, 0.9));\r\n}\r\n\r\n.modal-header h1 {\r\n  font-weight: 900;\r\n  color: whitesmoke;\r\n  font-family: 'Quicksand', sans-serif;\r\n}\r\n\r\n.modal-content .btn {\r\n  background: linear-gradient(to left, #da4453, #89216b);\r\n  color: whitesmoke;\r\n  font-size: 1rem;\r\n  letter-spacing: 0.2rem;\r\n  font-weight: 700;\r\n  border-radius: 1.5rem;\r\n}\r\n\r\ninput[type=text].invalid-textbox, input[type=password].invalid-textbox, input[type=email].invalid-textbox {\r\n  border-bottom: 1px solid #ed5558;\r\n}\r\n\r\nlabel.validation-message {\r\n  color: #ed5558;\r\n}\r\n\r\n.alert {\r\n  font-size: 13px;\r\n  background-color: #f44336;\r\n  color: white;\r\n  margin-top: 20px;\r\n  padding: 2px;\r\n}\r\n\r\n.success {\r\n  padding: 5px;\r\n  background-color: #249424;\r\n  color: white;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n/* Welcome Section */\r\n\r\n.welcome-text p {\r\n  color: #34325e;\r\n  text-transform: uppercase;\r\n  font-weight: bold;\r\n  /* font-size:2.5rem; */\r\n  letter-spacing: 0.7rem;\r\n}\r\n\r\n.welcome-text h4 {\r\n  letter-spacing: 0.3rem;\r\n  font-family: 'Quicksand', sans-serif;\r\n  font-weight: 500;\r\n}\r\n\r\n/* Features Section */\r\n\r\n.features-sec {\r\n  text-align: center;\r\n  background-color: #F5F8FD;\r\n}\r\n\r\n.features-sec span.icon {\r\n  width: 55px;\r\n  height: 55px;\r\n  border: 2px solid #cbcbcb;\r\n  display: block;\r\n  border-radius: 50%;\r\n  margin: auto;\r\n  background: #fff;\r\n  font-size: 22px;\r\n  padding: 10px 10px;\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n  color: #ffaf00;\r\n}\r\n\r\n.features-sec span.icon.shop {\r\n  color: #f0950d;\r\n}\r\n\r\n.features-sec span.icon.return {\r\n  color: #095495;\r\n}\r\n\r\n.features-sec span.icon.chat {\r\n  color: #007C89;\r\n}\r\n\r\n.features-sec h3 {\r\n  font-weight: 600;\r\n}\r\n\r\n.features-sec h5 {\r\n  font-family: 'Quicksand', sans-serif;\r\n  font-weight: 300;\r\n  color: #000;\r\n  line-height: 2rem;\r\n  opacity: 0.7;\r\n}\r\n\r\n/* About Section */\r\n\r\n.about-info h1 {\r\n  color: #4e5a64;\r\n  font-family: 'Quicksand', sans-serif;\r\n  font-weight: 500;\r\n  letter-spacing: 0.1rem;\r\n}\r\n\r\n.about-info p {\r\n  font-size: 1.2rem;\r\n  color: #002a51;\r\n  font-family: 'Quicksand', sans-serif;\r\n  letter-spacing: 0.1rem;\r\n}\r\n\r\n/* Recommended Section */\r\n\r\n.recommended-sec h1{\r\n  font-family:'Quicksand', sans-serif;\r\n  text-transform: uppercase;\r\n  color:#4e5a64;\r\n  font-weight: 600;\r\n  letter-spacing: 0.2rem;\r\n}\r\n\r\n.recommended-sec hr{\r\n  border: 1px solid black;\r\n  width: 50%;\r\n  opacity:0.4;\r\n}\r\n\r\n.recommended-sec .rec-books{\r\n  background-color:#F5F8FD;\r\n}\r\n\r\n.recommended-sec .card{\r\n  background-color:#F5F8FD;\r\n  width: 70%;\r\n}\r\n\r\n.recommended-sec .book-display:hover{\r\n  box-shadow: 1px 8px 20px grey;\r\n  transition:  box-shadow .6s ease-in;\r\n  -webkit-transition:  box-shadow .2s ease-in;\r\n}\r\n\r\n.recommended-sec .card-img-top{\r\n  height: 15vw;\r\n}\r\n\r\n.card-body h5 {\r\n  color: #2f383d;\r\n  font-size: 1.2rem;\r\n  opacity: 0.9;\r\n}\r\n\r\n.price span{\r\n  color: #2f383d;\r\n  font-weight: bold;\r\n  font-family: Lato, sans-serif;\r\n  font-size: 1rem;\r\n  letter-spacing: 0.08rem;\r\n}\r\n\r\n/* Media Queries */\r\n\r\n@media only screen and (max-width: 768px) {\r\n  .welcome-text p {\r\n    font-size: 2.5rem;\r\n    letter-spacing: 0.4rem;\r\n  }\r\n  .welcome-text h4 {\r\n    letter-spacing: 0.2rem;\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-weight: 500;\r\n  }\r\n  .about-info p {\r\n    font-size: 0.8rem;\r\n    letter-spacing: normal;\r\n  }\r\n  .about-info h1 {\r\n    font-size: xx-large;\r\n    font-weight: 900;\r\n    letter-spacing: 0.1rem;\r\n  }\r\n  .features-sec h3 {\r\n    font-size: 1.5rem;\r\n    font-weight: 600;\r\n  }\r\n  .features-sec h5 {\r\n    font-size: medium;\r\n    font-weight: 300;\r\n    line-height: 2rem;\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQWlCOztBQUVqQjtFQUNFLHNGQUFzRjtDQUN2Rjs7QUFFRDtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIscUNBQXFDO0NBQ3RDOztBQUVEO0VBQ0UsdURBQXVEO0VBQ3ZELGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixzQkFBc0I7Q0FDdkI7O0FBRUQ7RUFDRSxpQ0FBaUM7Q0FDbEM7O0FBRUQ7RUFDRSxlQUFlO0NBQ2hCOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtFQUMxQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLG9CQUFvQjtDQUNyQjs7QUFFRCxxQkFBcUI7O0FBRXJCO0VBQ0UsZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtDQUN4Qjs7QUFFRDtFQUNFLHVCQUF1QjtFQUN2QixxQ0FBcUM7RUFDckMsaUJBQWlCO0NBQ2xCOztBQUVELHNCQUFzQjs7QUFFdEI7RUFDRSxtQkFBbUI7RUFDbkIsMEJBQTBCO0NBQzNCOztBQUVEO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixlQUFlO0NBQ2hCOztBQUVEO0VBQ0UsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSxlQUFlO0NBQ2hCOztBQUVEO0VBQ0UsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UscUNBQXFDO0VBQ3JDLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7Q0FDZDs7QUFFRCxtQkFBbUI7O0FBRW5CO0VBQ0UsZUFBZTtFQUNmLHFDQUFxQztFQUNyQyxpQkFBaUI7RUFDakIsdUJBQXVCO0NBQ3hCOztBQUVEO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixxQ0FBcUM7RUFDckMsdUJBQXVCO0NBQ3hCOztBQUVELHlCQUF5Qjs7QUFFekI7RUFDRSxvQ0FBb0M7RUFDcEMsMEJBQTBCO0VBQzFCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsdUJBQXVCO0NBQ3hCOztBQUVEO0VBQ0Usd0JBQXdCO0VBQ3hCLFdBQVc7RUFDWCxZQUFZO0NBQ2I7O0FBRUQ7RUFDRSx5QkFBeUI7Q0FDMUI7O0FBRUQ7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztDQUNaOztBQUVEO0VBQ0UsOEJBQThCO0VBQzlCLG9DQUFvQztFQUNwQyw0Q0FBNEM7Q0FDN0M7O0FBRUQ7RUFDRSxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLGdCQUFnQjtFQUNoQix3QkFBd0I7Q0FDekI7O0FBRUQsbUJBQW1COztBQUVuQjtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLHVCQUF1QjtHQUN4QjtFQUNEO0lBQ0UsdUJBQXVCO0lBQ3ZCLHFDQUFxQztJQUNyQyxpQkFBaUI7R0FDbEI7RUFDRDtJQUNFLGtCQUFrQjtJQUNsQix1QkFBdUI7R0FDeEI7RUFDRDtJQUNFLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsdUJBQXVCO0dBQ3hCO0VBQ0Q7SUFDRSxrQkFBa0I7SUFDbEIsaUJBQWlCO0dBQ2xCO0VBQ0Q7SUFDRSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtHQUNuQjtDQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBNb2RhbCBGb3JtcyAqL1xyXG5cclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYmEoMjE4LCA2OCwgODMsIDAuOSksIHJnYmEoMTM3LCAzMywgMTA3LCAwLjkpKTtcclxufVxyXG5cclxuLm1vZGFsLWhlYWRlciBoMSB7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50IC5idG4ge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjZGE0NDUzLCAjODkyMTZiKTtcclxuICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT10ZXh0XS5pbnZhbGlkLXRleHRib3gsIGlucHV0W3R5cGU9cGFzc3dvcmRdLmludmFsaWQtdGV4dGJveCwgaW5wdXRbdHlwZT1lbWFpbF0uaW52YWxpZC10ZXh0Ym94IHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VkNTU1ODtcclxufVxyXG5cclxubGFiZWwudmFsaWRhdGlvbi1tZXNzYWdlIHtcclxuICBjb2xvcjogI2VkNTU1ODtcclxufVxyXG5cclxuLmFsZXJ0IHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBwYWRkaW5nOiAycHg7XHJcbn1cclxuXHJcbi5zdWNjZXNzIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0OTQyNDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLyogV2VsY29tZSBTZWN0aW9uICovXHJcblxyXG4ud2VsY29tZS10ZXh0IHAge1xyXG4gIGNvbG9yOiAjMzQzMjVlO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgLyogZm9udC1zaXplOjIuNXJlbTsgKi9cclxuICBsZXR0ZXItc3BhY2luZzogMC43cmVtO1xyXG59XHJcblxyXG4ud2VsY29tZS10ZXh0IGg0IHtcclxuICBsZXR0ZXItc3BhY2luZzogMC4zcmVtO1xyXG4gIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4vKiBGZWF0dXJlcyBTZWN0aW9uICovXHJcblxyXG4uZmVhdHVyZXMtc2VjIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjhGRDtcclxufVxyXG5cclxuLmZlYXR1cmVzLXNlYyBzcGFuLmljb24ge1xyXG4gIHdpZHRoOiA1NXB4O1xyXG4gIGhlaWdodDogNTVweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjY2JjYmNiO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBjb2xvcjogI2ZmYWYwMDtcclxufVxyXG5cclxuLmZlYXR1cmVzLXNlYyBzcGFuLmljb24uc2hvcCB7XHJcbiAgY29sb3I6ICNmMDk1MGQ7XHJcbn1cclxuXHJcbi5mZWF0dXJlcy1zZWMgc3Bhbi5pY29uLnJldHVybiB7XHJcbiAgY29sb3I6ICMwOTU0OTU7XHJcbn1cclxuXHJcbi5mZWF0dXJlcy1zZWMgc3Bhbi5pY29uLmNoYXQge1xyXG4gIGNvbG9yOiAjMDA3Qzg5O1xyXG59XHJcblxyXG4uZmVhdHVyZXMtc2VjIGgzIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uZmVhdHVyZXMtc2VjIGg1IHtcclxuICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBjb2xvcjogIzAwMDtcclxuICBsaW5lLWhlaWdodDogMnJlbTtcclxuICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuXHJcbi8qIEFib3V0IFNlY3Rpb24gKi9cclxuXHJcbi5hYm91dC1pbmZvIGgxIHtcclxuICBjb2xvcjogIzRlNWE2NDtcclxuICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xyXG59XHJcblxyXG4uYWJvdXQtaW5mbyBwIHtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBjb2xvcjogIzAwMmE1MTtcclxuICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcclxufVxyXG5cclxuLyogUmVjb21tZW5kZWQgU2VjdGlvbiAqL1xyXG5cclxuLnJlY29tbWVuZGVkLXNlYyBoMXtcclxuICBmb250LWZhbWlseTonUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGNvbG9yOiM0ZTVhNjQ7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4ycmVtO1xyXG59XHJcblxyXG4ucmVjb21tZW5kZWQtc2VjIGhye1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgb3BhY2l0eTowLjQ7XHJcbn1cclxuXHJcbi5yZWNvbW1lbmRlZC1zZWMgLnJlYy1ib29rc3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNGNUY4RkQ7XHJcbn1cclxuXHJcbi5yZWNvbW1lbmRlZC1zZWMgLmNhcmR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojRjVGOEZEO1xyXG4gIHdpZHRoOiA3MCU7XHJcbn1cclxuXHJcbi5yZWNvbW1lbmRlZC1zZWMgLmJvb2stZGlzcGxheTpob3ZlcntcclxuICBib3gtc2hhZG93OiAxcHggOHB4IDIwcHggZ3JleTtcclxuICB0cmFuc2l0aW9uOiAgYm94LXNoYWRvdyAuNnMgZWFzZS1pbjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246ICBib3gtc2hhZG93IC4ycyBlYXNlLWluO1xyXG59XHJcblxyXG4ucmVjb21tZW5kZWQtc2VjIC5jYXJkLWltZy10b3B7XHJcbiAgaGVpZ2h0OiAxNXZ3O1xyXG59XHJcblxyXG4uY2FyZC1ib2R5IGg1IHtcclxuICBjb2xvcjogIzJmMzgzZDtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBvcGFjaXR5OiAwLjk7XHJcbn1cclxuXHJcbi5wcmljZSBzcGFue1xyXG4gIGNvbG9yOiAjMmYzODNkO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtZmFtaWx5OiBMYXRvLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wOHJlbTtcclxufVxyXG5cclxuLyogTWVkaWEgUXVlcmllcyAqL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC53ZWxjb21lLXRleHQgcCB7XHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjRyZW07XHJcbiAgfVxyXG4gIC53ZWxjb21lLXRleHQgaDQge1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMnJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG4gIC5hYm91dC1pbmZvIHAge1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gIH1cclxuICAuYWJvdXQtaW5mbyBoMSB7XHJcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XHJcbiAgfVxyXG4gIC5mZWF0dXJlcy1zZWMgaDMge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuICAuZmVhdHVyZXMtc2VjIGg1IHtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xyXG4gIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<body>\n\n  <!-- Modal Form Login -->\n\n  <div class=\"modal fade\" id=\"loginModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog px-3 col-sm-12 col-md-6 col-lg-5 modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h1 class=\"modal-title mx-auto\" id=\"exampleModalLabel\">Sign In</h1>\n          <button type=\"button\" style=\"top: 10px;right: 10px;\" class=\"close position-absolute  text-white\"\n            data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n\n        <div class=\"container-fluid p-4\">\n          <form class=\"text-center\" style=\"color: #757575;\" #loginForm='ngForm' (ngSubmit)=\"OnSubmitLogin(loginForm)\"\n            autocomplete=\"off\">\n            <div class=\"form-body\">\n              <div class=\"md-form\">\n                <!-- <i class=\"fa fa-envelope prefix\"></i> -->\n                <input type=\"email\" class=\"form-control\" id=\"LoginFormEmail\" name=\"email\" #email='ngModel'\n                  [(ngModel)]=\"userService.loginUser.email\">\n                <label for=\"LoginFormEmail\">E-mail</label>\n              </div>\n              <div class=\"md-form\">\n                <!-- <i class=\"fa fa-lock prefix\"></i> -->\n                <input type=\"password\" class=\"form-control\" id=\"LoginFormPassword\" name=\"password\" #password='ngModel'\n                  [(ngModel)]=\"userService.loginUser.password\">\n                <label for=\"LoginFormPassword\">Password</label>\n              </div>\n            </div>\n            <div class=\"form-check\">\n              <input type=\"checkbox\" class=\"form-check-input\" id=\"LoginFormRemember\">\n              <label class=\"form-check-label\" for=\"LoginFormRemember\">Remember me</label>\n            </div>\n            <div class=\"mb-2\">\n              <a href=\"\">Forgot password?</a>\n            </div>\n            <div class=\"form-action\">\n              <button class=\"btn btn-block my-4\" type=\"submit\">Login</button>\n            </div>\n            <div class=\"alert\" *ngIf=\"ServerErrorMessage\">\n              {{ServerErrorMessage}}\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Modal Form Sign Up -->\n\n  <div class=\"modal fade\" id=\"signupModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n\n        <div class=\"modal-header\">\n          <h1 class=\"modal-title\" id=\"exampleModalLabel\">Sign Up</h1>\n          <button type=\"button\" class=\"close text-white\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n\n        <div class=\"container-fluid p-4\">\n          <form class=\"text-center\" style=\"color: #757575;\" #signUpForm=ngForm\n            (ngSubmit)=\"signUpForm.valid && onSubmitSignUp(signUpForm)\" autocomplete=\"off\">\n            <div class=\"form-body p-1\">\n\n              <div class=\"md-form\">\n                <!-- <i class=\"fa fa-envelope prefix\"></i> -->\n                <input type=\"text\" class=\"form-control\" id=\"SignUpFormName\" name=\"name\" #name='ngModel'\n                  [(ngModel)]=\"userService.selectedUser.name\" required\n                  [ngClass]=\"{'invalid-textbox': signUpForm.submitted && !name.valid}\">\n                <label for=\"SignUpFormName\">Full Name</label>\n                <div *ngIf=\"signUpForm.submitted && !name.valid\">\n                  <label class=\"validation-message mt-4 py-2\">Required</label>\n                </div>\n              </div>\n\n              <div class=\"md-form\">\n                <!-- <i class=\"fa fa-envelope prefix\"></i> -->\n                <input type=\"email\" class=\"form-control\" id=\"SignUpFormEmail\" name=\"email\" #email='ngModel'\n                  [(ngModel)]=\"userService.selectedUser.email\" required [pattern]=\"emailRegex\"\n                  [ngClass]=\"{'invalid-textbox': signUpForm.submitted && !email.valid}\">\n                <label for=\"SignUpFormEmail\">E-mail</label>\n                <div *ngIf=\"signUpForm.submitted && email.errors\">\n                  <label *ngIf=\"email.errors.required\" class=\"validation-message mt-4 py-2\">Required</label>\n                  <label *ngIf=\"email.errors.pattern\" class=\"validation-message mt-4 py-2\">Invalid email</label>\n                </div>\n              </div>\n\n              <div class=\"md-form\">\n                <!-- <i class=\"fa fa-lock prefix\"></i> -->\n                <input type=\"password\" class=\"form-control\" id=\"SignUpFormPassword\" name=\"password\" #password='ngModel'\n                  [(ngModel)]=\"userService.selectedUser.password\" required minlength=\"8\"\n                  [ngClass]=\"{'invalid-textbox': signUpForm.submitted && !password.valid}\">\n                <div *ngIf=\"signUpForm.submitted && password.errors\">\n                  <label *ngIf=\"password.errors.required\" class=\"validation-message mt-4 py-2\">Required.</label>\n                  <label *ngIf=\"password.errors.minlength\" class=\"validation-message mt-4 py-2\">Password should be\n                    atleast 8\n                    characters long.</label>\n                </div>\n                <label for=\"SignUpFormPassword\">Password</label>\n              </div>\n\n              <div class=\"md-form\">\n                <!-- <i class=\"fa fa-envelope prefix\"></i> -->\n                <input type=\"text\" class=\"form-control\" id=\"SignUpFormMobile\" name=\"mobile\" #mobile='ngModel'\n                  [(ngModel)]=\"userService.selectedUser.mobile\" required minlength=\"10\" maxlength=\"10\"\n                  [ngClass]=\"{'invalid-textbox': signUpForm.submitted && !mobile.valid}\">\n                <label for=\"SignUpFormMobile\">Phone No</label>\n                <div *ngIf=\"signUpForm.submitted && mobile.errors\">\n                  <label *ngIf=\"mobile.errors.required\" class=\"validation-message mt-4 py-2\">Required.</label>\n                  <label *ngIf=\"mobile.errors.minlength && mobile.errors.maxlength\"\n                    class=\"validation-message mt-4 py-2\">Please\n                    enter a 10 digit phone\n                    no.</label>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-action\">\n              <button class=\"btn btn-block my-4\" type=\"submit\">Register</button>\n            </div>\n          </form>\n          <!--Success Message -->\n          <div class=\"success\" *ngIf=\"showSuccessMessage\">\n            Sign Up Successful!\n          </div>\n\n          <!--Error Message -->\n          <div class=\"alert\" *ngIf=\"serverErrorMessage\">\n            {{serverErrorMessage}}\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!--Home Page Begins-->\n\n  <!-- Welcome Section -->\n\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"welcome-text text-center align-self-center p-5 col-md-5 col-sm-12\">\n        <p class=\"display-4\">Welcome to the Bookstore</p>\n        <h4>Discover the best books online</h4>\n        <button *ngIf=\"userService.isloggedIn()\" (click)='shop()' class=\"btn btn-outline-danger mt-4\"\n          style=\"border-radius: 1rem;box-shadow: none;\">Shop Books</button>\n        <button *ngIf=\"!userService.isloggedIn()\" (click)='navigate()' class=\"btn btn-outline-danger mt-4\"\n          style=\"border-radius: 2.2rem;box-shadow: none;\">Shop\n          Books</button>\n      </div>\n\n      <div class=\"col-md-7 col-sm-12 p-5\">\n        <img src=\"assets/images/welcome.png\" width=100%>\n      </div>\n    </div>\n  </div>\n\n  <!-- Features Section -->\n\n  <div class=\"features-sec container-fluid p-4\">\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-12 col-md-3 bg-white rounded-lg shadow py-4 mx-auto\">\n        <span class=\"icon shop\"><i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i></span>\n        <h3 style=\"color: #f0950d\">SECURITY</h3>\n        <h5>\n          Ours is a secured site that ensures that your sensitive card information and other details is absolutely safe\n          with\n          us.\n        </h5>\n      </div>\n\n      <div class=\"col-xs-12 col-sm-12 col-md-3  bg-white rounded shadow py-4 mx-auto\">\n        <span class=\"icon return\"><i class=\"fa fa-reply-all\" aria-hidden=\"true\"></i></span>\n        <h3 style=\"color: #095495;\">7- DAY RETURN</h3>\n\n        <h5>We have a return policy extending up to 7 days ensuring hassle free returns. </h5>\n      </div>\n\n      <div class=\"col-xs-12 col-sm-12 col-md-3  bg-white rounded shadow py-4 mx-auto\">\n        <span class=\"icon chat\"><i class=\"fa fa-comments\" aria-hidden=\"true\"></i></span>\n        <h3 style=\"color: #007C89;\">24/7 SUPPORT</h3>\n\n        <h5>We provide 24x7 support and our customer care is always there for you when you need us</h5>\n      </div>\n\n    </div>\n  </div>\n\n  <!-- About Section -->\n\n  <div class=\"about-sec container-fluid mt-5 pt-4\">\n    <div class=\"row\">\n      <div class=\"col-md-6 col-sm-12\">\n        <img src=\"assets/images/about.png\" width=100% alt=\"about-img\">\n      </div>\n      <div class=\"about-info col-md-6 col-sm-12\">\n        <h1 class=\"display-4 mb-4 text-center\">About Us</h1>\n        <!-- <hr class=\"mb-4\"> -->\n        <p class=\"text-justify mr-3\">When it comes to searching for books, there is only one place to turn to the\n          BookMan\n          Bookstore. We are India’s\n          largest online book store and rightly so. Having served some of the best in the industry for over\n          70 years,we are your one stop solution for all your book needs.We have a veritable collection of books that\n          span\n          categories as diverse as you could possibly expect.</p>\n\n        <p class=\"text-justify mr-3\">In the rare case that you do not find the book you’re looking for, you can always\n          place a request in our\n          wishlist section. With an easy payment gateway and a well designed shopping cart, you can shop with great ease\n          and without worry.\n        </p>\n      </div>\n    </div>\n  </div>\n\n  <!--  Recommended Books Section -->\n\n\n  <div class=\"recommended-sec container-fluid mt-5\">\n    <div class=\"heading\">\n      <h1 class=\"text-center\">Our Recommended Books</h1>\n      <hr class=\"mb-5\">\n    </div>\n    <div class=\"rec-books row\">\n      <div class=\"book-display col-md-2 mx-2\" *ngFor=\"let book of bookService.recBooks\">\n        <div class=\"card border-0 mx-auto h-100 pt-5\">\n          <img src=\"{{'assets/BookImages/'+book.bookId.bpic}}\" class=\"card-img-top img-fluid\">\n          <div class=\"card-body text-center\">\n            <div class=\"product-detail\">\n              <h5 class=\"product-name\">\n                {{book.bookId.bname}}\n              </h5>\n            </div>\n            <div class=\"product-price\">\n              <p class=\"price\">\n                <span>{{book.bookId.bprice | currency:'INR'}}</span>\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _shared_book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/book.service */ "./src/app/shared/book.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, userService, bookService) {
        this.router = router;
        this.userService = userService;
        this.bookService = bookService;
        this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getRecBooks();
    };
    HomeComponent.prototype.getRecBooks = function () {
        var _this = this;
        this.bookService.getRecBooks().subscribe(function (res) {
            _this.bookService.recBooks = res;
        }, function (err) {
            console.log(err);
        });
    };
    HomeComponent.prototype.shop = function () {
        this.router.navigateByUrl('/shop');
    };
    HomeComponent.prototype.navigate = function () {
        this.router.navigateByUrl('/login');
    };
    // Form Reset
    HomeComponent.prototype.resetForm = function (form) {
        if (form)
            form.reset();
    };
    //Sign Up Form Submit
    HomeComponent.prototype.onSubmitSignUp = function (form) {
        var _this = this;
        this.userService.SignUpUser(form.value).subscribe(function (res) {
            _this.showSuccessMessage = true; //Now success message is displayed
            setTimeout(function () { _this.showSuccessMessage = false; }, 4000);
            _this.resetForm(form); //resetting the form values after signup
            _this.router.navigateByUrl('/login');
        }, function (err) {
            if (err.status === 422)
                _this.serverErrorMessage = "Email ID already registered";
            else
                _this.serverErrorMessage = 'Something went wrong!Please contact the admin. ';
        });
    };
    //Login Form Submit
    HomeComponent.prototype.OnSubmitLogin = function (form) {
        var _this = this;
        this.userService.LoginUser(form.value).subscribe(function (res) {
            _this.resetForm(form);
            _this.userService.setToken(res['token']);
            _this.userService.getUserProfile().subscribe(function (res) {
                _this.userService.userDetails = res['user'];
            }, function (err) {
                console.log("Error retrieving user" + JSON.stringify(err, undefined, 2));
            });
            _this.router.navigateByUrl('/home');
        }, function (err) {
            if (err.status === 401)
                _this.ServerErrorMessage = err.error;
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _shared_book_service__WEBPACK_IMPORTED_MODULE_3__["BookService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/orders/orders.component.css":
/*!*********************************************!*\
  !*** ./src/app/orders/orders.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    background-color: #f1f3f6;\r\n}\r\n\r\n.product-name h5 {\r\n    font-weight: 600;\r\n}\r\n\r\n.product-quantity h6 {\r\n    color:#585858;\r\n    font-weight: 600;\r\n}\r\n\r\n.order-detail h6 {\r\n    color:#585858;\r\n    opacity: 0.8;\r\n}\r\n\r\n.order-amt h6 {\r\n    color:#585858;\r\n    font-weight: 600;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXJzL29yZGVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0NBQzdCOztBQUVEO0lBQ0ksaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLGNBQWM7SUFDZCxhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy9vcmRlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjNmNjtcclxufVxyXG5cclxuLnByb2R1Y3QtbmFtZSBoNSB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4ucHJvZHVjdC1xdWFudGl0eSBoNiB7XHJcbiAgICBjb2xvcjojNTg1ODU4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLm9yZGVyLWRldGFpbCBoNiB7XHJcbiAgICBjb2xvcjojNTg1ODU4O1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG59XHJcblxyXG4ub3JkZXItYW10IGg2IHtcclxuICAgIGNvbG9yOiM1ODU4NTg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/orders/orders.component.html":
/*!**********************************************!*\
  !*** ./src/app/orders/orders.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row border\">\n    <div class=\"col-sm-12 col-md-11 p-4 m-3 bg-white shadow\" *ngFor=\"let OrderBook of bookService.orders\">\n      <div class=\"row\">\n        <div class=\"col-sm-12 p-4\"  *ngFor=\"let book of OrderBook.books\">\n          <div class=\"row\">\n        <div class=\"col-md-2 col-sm-12\">\n          <div class=\"product-image\">\n            <img src=\"{{'assets/BookImages/'+book.bookId.bpic}}\" class=\"img-fluid w-50\">\n          </div>\n        </div>\n        <div class=\"product-info col-md-3 col-sm-12 p-5 ml-3\">\n          <div class=\"product-name\">\n            <h5>{{book.bookId.bname}}</h5>\n          </div>\n          <div class=\"product-quantity mb-4\">\n            <h6>Quantity : {{book.quantity}}</h6>\n          </div>\n          <div class=\"order-detail\">\n           <h6>ORDER ID : {{OrderBook._id}}</h6>\n          </div>\n        </div>\n        </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/orders/orders.component.ts":
/*!********************************************!*\
  !*** ./src/app/orders/orders.component.ts ***!
  \********************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _shared_book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/book.service */ "./src/app/shared/book.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var OrdersComponent = /** @class */ (function () {
    function OrdersComponent(userService, bookService, router) {
        this.userService = userService;
        this.bookService = bookService;
        this.router = router;
    }
    OrdersComponent.prototype.ngOnInit = function () {
        this.GetOrders();
    };
    OrdersComponent.prototype.GetOrders = function () {
        var _this = this;
        this.bookService.getOrders().subscribe(function (res) {
            _this.bookService.orders = res;
        }, function (err) {
            console.log('Error Retrieving Orders' + JSON.stringify(err, undefined, 2));
        });
    };
    OrdersComponent.prototype.DeleteOrders = function (ID) {
        var _this = this;
        this.bookService.deleteOrders(ID).subscribe(function (res) {
            _this.GetOrders();
        }, function (err) {
            console.log('Error in deleting orders' + JSON.stringify(err, undefined, 2));
        });
    };
    OrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-orders',
            template: __webpack_require__(/*! ./orders.component.html */ "./src/app/orders/orders.component.html"),
            styles: [__webpack_require__(/*! ./orders.component.css */ "./src/app/orders/orders.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _shared_book_service__WEBPACK_IMPORTED_MODULE_3__["BookService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "./src/app/shared/book.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/book.service.ts ***!
  \****************************************/
/*! exports provided: BookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookService", function() { return BookService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var BookService = /** @class */ (function () {
    function BookService(http) {
        this.http = http;
        this.currentOrder = {
            _id: '',
            books: [],
            caddress: '',
            date: new Date().toDateString()
        };
        this.baseUrl = "https://bookmanserver.herokuapp.com";
    }
    BookService.prototype.getBooks = function () {
        return this.http.get(this.baseUrl + "/books");
    };
    BookService.prototype.getBooksByid = function (_id) {
        return this.http.get(this.baseUrl + '/book/' + _id);
    };
    BookService.prototype.getBooksAsc = function () {
        return this.http.get(this.baseUrl + '/sortAsc');
    };
    BookService.prototype.getBooksDesc = function () {
        return this.http.get(this.baseUrl + '/sortDesc');
    };
    BookService.prototype.getRecBooks = function () {
        return this.http.get(this.baseUrl + '/getRecBooks');
    };
    BookService.prototype.addToCart = function (id) {
        return this.http.post(this.baseUrl + '/addToCart/', { bookId: id });
    };
    BookService.prototype.getCartItems = function () {
        return this.http.get(this.baseUrl + '/getCart');
    };
    BookService.prototype.deleteCartItem = function (_id) {
        return this.http.delete(this.baseUrl + '/deleteFromCart/' + _id);
    };
    BookService.prototype.OrderBook = function (order) {
        return this.http.post(this.baseUrl + "/AddOrder", order);
    };
    BookService.prototype.getOrders = function () {
        return this.http.get(this.baseUrl + '/getOrders');
    };
    BookService.prototype.deleteOrders = function (_id) {
        return this.http.delete(this.baseUrl + '/deleteOrders/' + _id);
    };
    BookService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], BookService);
    return BookService;
}());



/***/ }),

/***/ "./src/app/shared/user.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/user.service.ts ***!
  \****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var UserService = /** @class */ (function () {
    function UserService(_http) {
        this._http = _http;
        this.noauthHeader = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ "noauth": "True" }) };
        this.selectedUser = {
            name: '',
            email: '',
            password: '',
            mobile: null
        };
        this.loginUser = {
            email: '',
            password: '',
        };
        this.userDetails = {
            _id: '',
            name: '',
            email: '',
            mobile: null
        };
        this.baseUrl = "https://bookmanserver.herokuapp.com";
    }
    //http requests
    UserService.prototype.SignUpUser = function (nuser) {
        return this._http.post(this.baseUrl + '/register', nuser, this.noauthHeader);
    };
    UserService.prototype.LoginUser = function (data) {
        return this._http.post(this.baseUrl + '/login', data, this.noauthHeader);
    };
    UserService.prototype.getUserProfile = function () {
        return this._http.get(this.baseUrl + '/userProfile');
    };
    //Helper functions for JWT Token
    UserService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    UserService.prototype.setToken = function (token) {
        localStorage.setItem('token', token);
    };
    UserService.prototype.deleteToken = function () {
        localStorage.removeItem('token');
    };
    UserService.prototype.getUserPayload = function () {
        var token = localStorage.getItem('token');
        if (token) {
            var UserPayload = atob(token.split('.')[1]);
            return JSON.parse(UserPayload);
        }
        else
            return null;
    };
    UserService.prototype.isloggedIn = function () {
        var UserPayload = this.getUserPayload();
        if (UserPayload) {
            return UserPayload.exp > Date.now() / 1000;
        }
        else
            return false;
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], UserService);
    return UserService;
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

module.exports = __webpack_require__(/*! A:\ANUSHA\WEB PROJECTS\Online Bookstore\User\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map