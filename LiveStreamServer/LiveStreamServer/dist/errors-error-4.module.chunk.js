webpackJsonp(["errors-error-4.module"],{

/***/ "./ClientApp/app/theme/pages/self-layout-blank/snippets/pages/errors/errors-error-4/errors-error-4.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"m-grid__item m-grid__item--fluid m-grid m-error-4\" style=\"background-image: url(./assets/app/media/img//error/bg4.jpg);\" appunwraptag=\"\">\r\n\t<div class=\"m-error_container\">\r\n\t\t<h1 class=\"m-error_number\">\r\n\t\t\t404\r\n\t\t</h1>\r\n\t\t<p class=\"m-error_title\">\r\n\t\t\tERROR\r\n\t\t</p>\r\n\t\t<p class=\"m-error_description\">\r\n\t\t\tNothing left to do here.\r\n\t\t</p>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./ClientApp/app/theme/pages/self-layout-blank/snippets/pages/errors/errors-error-4/errors-error-4.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorsError4Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers__ = __webpack_require__("./ClientApp/app/helpers.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorsError4Component = /** @class */ (function () {
    function ErrorsError4Component() {
    }
    ErrorsError4Component.prototype.ngOnInit = function () {
    };
    ErrorsError4Component.prototype.ngAfterViewInit = function () {
        __WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* Helpers */].bodyClass('m--skin- m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--skin-dark m-aside-left--offcanvas m-footer--push m-aside--offcanvas-default');
    };
    ErrorsError4Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: ".m-grid.m-grid--hor.m-grid--root.m-page",
            template: __webpack_require__("./ClientApp/app/theme/pages/self-layout-blank/snippets/pages/errors/errors-error-4/errors-error-4.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [])
    ], ErrorsError4Component);
    return ErrorsError4Component;
}());



/***/ }),

/***/ "./ClientApp/app/theme/pages/self-layout-blank/snippets/pages/errors/errors-error-4/errors-error-4.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorsError4Module", function() { return ErrorsError4Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__errors_error_4_component__ = __webpack_require__("./ClientApp/app/theme/pages/self-layout-blank/snippets/pages/errors/errors-error-4/errors-error-4.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layouts_layout_module__ = __webpack_require__("./ClientApp/app/theme/layouts/layout.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        "path": "",
        "component": __WEBPACK_IMPORTED_MODULE_3__errors_error_4_component__["a" /* ErrorsError4Component */]
    }
];
var ErrorsError4Module = /** @class */ (function () {
    function ErrorsError4Module() {
    }
    ErrorsError4Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(routes), __WEBPACK_IMPORTED_MODULE_4__layouts_layout_module__["a" /* LayoutModule */]
            ], exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"]
            ], declarations: [
                __WEBPACK_IMPORTED_MODULE_3__errors_error_4_component__["a" /* ErrorsError4Component */]
            ]
        })
    ], ErrorsError4Module);
    return ErrorsError4Module;
}());



/***/ })

});
//# sourceMappingURL=errors-error-4.module.chunk.js.map