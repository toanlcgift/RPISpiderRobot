webpackJsonp(["utils-idle-timer.module"],{

/***/ "./ClientApp/app/theme/pages/default/components/utils/utils-idle-timer/utils-idle-timer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Subheader -->\r\n<div class=\"m-subheader\" appunwraptag=\"\">\r\n\t<div class=\"d-flex align-items-center\">\r\n\t\t<div class=\"mr-auto\">\r\n\t\t\t<h3 class=\"m-subheader__title m-subheader__title--separator\">\r\n\t\t\t\tjQuery Idle\r\n\t\t\t</h3>\r\n\t\t\t<ul class=\"m-subheader__breadcrumbs m-nav m-nav--inline\">\r\n\t\t\t\t<li class=\"m-nav__item m-nav__item--home\">\r\n\t\t\t\t\t<a href=\"#\" class=\"m-nav__link m-nav__link--icon\">\r\n\t\t\t\t\t\t<i class=\"m-nav__link-icon la la-home\"></i>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"m-nav__separator\">\r\n\t\t\t\t\t-\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\tUtils\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"m-nav__separator\">\r\n\t\t\t\t\t-\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\tIdle Timer\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t\t<div>\r\n\t\t\t<div class=\"m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push\" m-dropdown-toggle=\"hover\" aria-expanded=\"true\">\r\n\t\t\t\t<a href=\"#\" class=\"m-portlet__nav-link btn btn-lg btn-secondary  m-btn m-btn--outline-2x m-btn--air m-btn--icon m-btn--icon-only m-btn--pill  m-dropdown__toggle\">\r\n\t\t\t\t\t<i class=\"la la-plus m--hide\"></i>\r\n\t\t\t\t\t<i class=\"la la-ellipsis-h\"></i>\r\n\t\t\t\t</a>\r\n\t\t\t\t<div class=\"m-dropdown__wrapper\">\r\n\t\t\t\t\t<span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\"></span>\r\n\t\t\t\t\t<div class=\"m-dropdown__inner\">\r\n\t\t\t\t\t\t<div class=\"m-dropdown__body\">\r\n\t\t\t\t\t\t\t<div class=\"m-dropdown__content\">\r\n\t\t\t\t\t\t\t\t<ul class=\"m-nav\">\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__section m-nav__section--first m--hide\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__section-text\">\r\n\t\t\t\t\t\t\t\t\t\t\tQuick Actions\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-share\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tActivity\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-chat-1\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tMessages\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-info\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tFAQ\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-lifebuoy\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tSupport\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__separator m-nav__separator--fit\"></li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-outline-danger m-btn m-btn--pill m-btn--wide btn-sm\">\r\n\t\t\t\t\t\t\t\t\t\t\tSubmit\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!-- END: Subheader -->\r\n<div class=\"m-content\">\r\n\t<div class=\"alert alert-brand m-alert m-alert--icon m-alert--air m-alert--square m--margin-bottom-30\" role=\"alert\">\r\n\t\t<div class=\"m-alert__icon\">\r\n\t\t\t<i class=\"flaticon-exclamation-1\"></i>\r\n\t\t</div>\r\n\t\t<div class=\"m-alert__text\">\r\n\t\t\tjQuery Idle Timer fires a custom event when the user is \"idle\". To learn more please check out\r\n\t\t\t<a href=\"https://github.com/thorst/jquery-idletimer\" class=\"m-link m-link--warning m--font-bold\" >\r\n\t\t\t\tthe plugin's official homepage\r\n\t\t\t</a>\r\n\t\t</div>\r\n\t</div>\r\n\t<!--begin::Portlet-->\r\n\t<div class=\"m-portlet m-portlet--tab\">\r\n\t\t<div class=\"m-portlet__head\">\r\n\t\t\t<div class=\"m-portlet__head-caption\">\r\n\t\t\t\t<div class=\"m-portlet__head-title\">\r\n\t\t\t\t\t<span class=\"m-portlet__head-icon m--hide\">\r\n\t\t\t\t\t\t<i class=\"la la-gear\"></i>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<h3 class=\"m-portlet__head-text\">\r\n\t\t\t\t\t\tjQuery Idle Timer\r\n\t\t\t\t\t</h3>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"m-portlet__body\">\r\n\t\t\tThe idle timer is built on jQuery and provides two events:\r\n\t\t\t<code>\r\n\t\t\tidle.idleTimer\r\n\t\t</code>\r\n\t\tand\r\n\t\t<code>\r\n\t\tactive.idleTimer\r\n\t</code>\r\n\t,          which fire when the user's idle state has changed.         When you move your mouse over the page or start typing, you're considered\r\n\t<code>\r\n\tactive\r\n</code>\r\n.         On this page we have two idle timers. One for the entire document. Another for the text area on the right (or bottom if your on mobile).\r\n</div>\r\n</div>\r\n<!--end::Portlet-->\r\n<div class=\"row\">\r\n\t<div class=\"col-lg-6\">\r\n\t\t<!--begin::Portlet-->\r\n\t\t<div class=\"m-portlet m-portlet--tab\">\r\n\t\t\t<div class=\"m-portlet__head\">\r\n\t\t\t\t<div class=\"m-portlet__head-caption\">\r\n\t\t\t\t\t<div class=\"m-portlet__head-title\">\r\n\t\t\t\t\t\t<span class=\"m-portlet__head-icon m--hide\">\r\n\t\t\t\t\t\t\t<i class=\"la la-gear\"></i>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t<h3 class=\"m-portlet__head-text\">\r\n\t\t\t\t\t\t\tDocument\r\n\t\t\t\t\t\t\t<small>\r\n\t\t\t\t\t\t\t\t<span id=\"docTimeout\"></span>\r\n\t\t\t\t\t\t\t\tsecond timeout\r\n\t\t\t\t\t\t\t</small>\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"m-portlet__body\">\r\n\t\t\t\t<div class=\"btn-group m--margin-bottom-10\">\r\n\t\t\t\t\t<a href=\"javascript:;\" id=\"btPause\" class=\"btn btn-secondary\">\r\n\t\t\t\t\t\tPause\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<a href=\"javascript:;\" id=\"btResume\" class=\"btn btn-secondary\">\r\n\t\t\t\t\t\tResume\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<a href=\"javascript:;\" id=\"btElapsed\" class=\"btn btn-secondary\">\r\n\t\t\t\t\t\tElapsed\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<a href=\"javascript:;\" id=\"btInit\" class=\"btn btn-secondary\">\r\n\t\t\t\t\t\tInit\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<a href=\"javascript:;\" id=\"btDestroy\" class=\"btn btn-secondary\">\r\n\t\t\t\t\t\tDestroy\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<textarea rows=\"10\" cols=\"30\" id=\"docStatus\" class=\"form-control\"></textarea>\r\n\t\t\t\t<br />\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!--end::Portlet-->\r\n\t</div>\r\n\t<div class=\"col-lg-6\">\r\n\t\t<!--begin::Portlet-->\r\n\t\t<div class=\"m-portlet m-portlet--tab\">\r\n\t\t\t<div class=\"m-portlet__head\">\r\n\t\t\t\t<div class=\"m-portlet__head-caption\">\r\n\t\t\t\t\t<div class=\"m-portlet__head-title\">\r\n\t\t\t\t\t\t<span class=\"m-portlet__head-icon m--hide\">\r\n\t\t\t\t\t\t\t<i class=\"la la-gear\"></i>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t<h3 class=\"m-portlet__head-text\">\r\n\t\t\t\t\t\t\tElement\r\n\t\t\t\t\t\t\t<small>\r\n\t\t\t\t\t\t\t\t<span id=\"elTimeout\"></span>\r\n\t\t\t\t\t\t\t\tsecond timeout\r\n\t\t\t\t\t\t\t</small>\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"m-portlet__body\">\r\n\t\t\t\t<div class=\"btn-group m--margin-bottom-10\">\r\n\t\t\t\t\t<a href=\"javascript:;\" id=\"btReset\" class=\"btn btn-secondary\">\r\n\t\t\t\t\t\tReset\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<a href=\"javascript:;\" id=\"btLastActive\" class=\"btn btn-secondary\">\r\n\t\t\t\t\t\tLast Active\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<a href=\"javascript:;\" id=\"btRemaining\" class=\"btn btn-secondary\">\r\n\t\t\t\t\t\tRemaining\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<a href=\"javascript:;\" id=\"btState\" class=\"btn btn-secondary\">\r\n\t\t\t\t\t\tState\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<textarea rows=\"10\" cols=\"30\" id=\"elStatus\" class=\"form-control\"></textarea>\r\n\t\t\t\t<br />\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!--end::Portlet-->\r\n\t</div>\r\n</div>\r\n<!--end::Portlet-->\r\n</div>\r\n"

/***/ }),

/***/ "./ClientApp/app/theme/pages/default/components/utils/utils-idle-timer/utils-idle-timer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilsIdleTimerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_script_loader_service__ = __webpack_require__("./ClientApp/app/_services/script-loader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UtilsIdleTimerComponent = /** @class */ (function () {
    function UtilsIdleTimerComponent(_script) {
        this._script = _script;
    }
    UtilsIdleTimerComponent.prototype.ngOnInit = function () {
    };
    UtilsIdleTimerComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-utils-idle-timer', ['assets/demo/default/custom/components/utils/idle-timer.js']);
    };
    UtilsIdleTimerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-utils-idle-timer",
            template: __webpack_require__("./ClientApp/app/theme/pages/default/components/utils/utils-idle-timer/utils-idle-timer.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_script_loader_service__["a" /* ScriptLoaderService */]])
    ], UtilsIdleTimerComponent);
    return UtilsIdleTimerComponent;
}());



/***/ }),

/***/ "./ClientApp/app/theme/pages/default/components/utils/utils-idle-timer/utils-idle-timer.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilsIdleTimerModule", function() { return UtilsIdleTimerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_idle_timer_component__ = __webpack_require__("./ClientApp/app/theme/pages/default/components/utils/utils-idle-timer/utils-idle-timer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layouts_layout_module__ = __webpack_require__("./ClientApp/app/theme/layouts/layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__default_component__ = __webpack_require__("./ClientApp/app/theme/pages/default/default.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        "path": "",
        "component": __WEBPACK_IMPORTED_MODULE_5__default_component__["a" /* DefaultComponent */],
        "children": [
            {
                "path": "",
                "component": __WEBPACK_IMPORTED_MODULE_3__utils_idle_timer_component__["a" /* UtilsIdleTimerComponent */]
            }
        ]
    }
];
var UtilsIdleTimerModule = /** @class */ (function () {
    function UtilsIdleTimerModule() {
    }
    UtilsIdleTimerModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(routes), __WEBPACK_IMPORTED_MODULE_4__layouts_layout_module__["a" /* LayoutModule */]
            ], exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"]
            ], declarations: [
                __WEBPACK_IMPORTED_MODULE_3__utils_idle_timer_component__["a" /* UtilsIdleTimerComponent */]
            ]
        })
    ], UtilsIdleTimerModule);
    return UtilsIdleTimerModule;
}());



/***/ })

});
//# sourceMappingURL=utils-idle-timer.module.chunk.js.map