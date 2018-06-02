webpackJsonp(["widgets-bootstrap-multipleselectsplitter.module"],{

/***/ "./ClientApp/app/theme/pages/default/components/forms/widgets/widgets-bootstrap-multipleselectsplitter/widgets-bootstrap-multipleselectsplitter.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Subheader -->\r\n<div class=\"m-subheader\" appunwraptag=\"\">\r\n\t<div class=\"d-flex align-items-center\">\r\n\t\t<div class=\"mr-auto\">\r\n\t\t\t<h3 class=\"m-subheader__title m-subheader__title--separator\">\r\n\t\t\t\tBootstrap Multiple Select Splitter\r\n\t\t\t</h3>\r\n\t\t\t<ul class=\"m-subheader__breadcrumbs m-nav m-nav--inline\">\r\n\t\t\t\t<li class=\"m-nav__item m-nav__item--home\">\r\n\t\t\t\t\t<a href=\"#\" class=\"m-nav__link m-nav__link--icon\">\r\n\t\t\t\t\t\t<i class=\"m-nav__link-icon la la-home\"></i>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"m-nav__separator\">\r\n\t\t\t\t\t-\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\tForms\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"m-nav__separator\">\r\n\t\t\t\t\t-\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\tForm Widgets\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"m-nav__separator\">\r\n\t\t\t\t\t-\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\tMultiple Select Splitter\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t\t<div>\r\n\t\t\t<div class=\"m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push\" m-dropdown-toggle=\"hover\" aria-expanded=\"true\">\r\n\t\t\t\t<a href=\"#\" class=\"m-portlet__nav-link btn btn-lg btn-secondary  m-btn m-btn--outline-2x m-btn--air m-btn--icon m-btn--icon-only m-btn--pill  m-dropdown__toggle\">\r\n\t\t\t\t\t<i class=\"la la-plus m--hide\"></i>\r\n\t\t\t\t\t<i class=\"la la-ellipsis-h\"></i>\r\n\t\t\t\t</a>\r\n\t\t\t\t<div class=\"m-dropdown__wrapper\">\r\n\t\t\t\t\t<span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\"></span>\r\n\t\t\t\t\t<div class=\"m-dropdown__inner\">\r\n\t\t\t\t\t\t<div class=\"m-dropdown__body\">\r\n\t\t\t\t\t\t\t<div class=\"m-dropdown__content\">\r\n\t\t\t\t\t\t\t\t<ul class=\"m-nav\">\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__section m-nav__section--first m--hide\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__section-text\">\r\n\t\t\t\t\t\t\t\t\t\t\tQuick Actions\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-share\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tActivity\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-chat-1\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tMessages\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-info\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tFAQ\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-lifebuoy\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tSupport\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__separator m-nav__separator--fit\"></li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-outline-danger m-btn m-btn--pill m-btn--wide btn-sm\">\r\n\t\t\t\t\t\t\t\t\t\t\tSubmit\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!-- END: Subheader -->\r\n<div class=\"m-content\">\r\n\t<!--begin::Portlet-->\r\n\t<div class=\"m-portlet\">\r\n\t\t<div class=\"m-portlet__head\">\r\n\t\t\t<div class=\"m-portlet__head-caption\">\r\n\t\t\t\t<div class=\"m-portlet__head-title\">\r\n\t\t\t\t\t<h3 class=\"m-portlet__head-text\">\r\n\t\t\t\t\t\tBootstrap Multiple Select Splitter Examples\r\n\t\t\t\t\t</h3>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!--begin::Form-->\r\n\t\t<form class=\"m-form m-form--fit m-form--label-align-right\">\r\n\t\t\t<div class=\"m-portlet__body\">\r\n\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\r\n\t\t\t\t\t\tStandard Group Select\r\n\t\t\t\t\t</label>\r\n\t\t\t\t\t<div class=\"col-lg-4 col-md-9 col-sm-12\">\r\n\t\t\t\t\t\t<select class=\"form-control\">\r\n\t\t\t\t\t\t\t<optgroup label=\"Category 1\">\r\n\t\t\t\t\t\t\t\t<option value=\"1\">\r\n\t\t\t\t\t\t\t\t\tChoice 1\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t<option value=\"2\">\r\n\t\t\t\t\t\t\t\t\tChoice 2\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t<option value=\"3\">\r\n\t\t\t\t\t\t\t\t\tChoice 3\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t<option value=\"4\">\r\n\t\t\t\t\t\t\t\t\tChoice 4\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t</optgroup>\r\n\t\t\t\t\t\t\t<optgroup label=\"Category 2\">\r\n\t\t\t\t\t\t\t\t<option value=\"5\">\r\n\t\t\t\t\t\t\t\t\tChoice 5\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t<option value=\"6\">\r\n\t\t\t\t\t\t\t\t\tChoice 6\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t<option value=\"7\">\r\n\t\t\t\t\t\t\t\t\tChoice 7\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t<option value=\"8\">\r\n\t\t\t\t\t\t\t\t\tChoice 8\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t</optgroup>\r\n\t\t\t\t\t\t\t<optgroup label=\"Category 3\">\r\n\t\t\t\t\t\t\t\t<option value=\"5\">\r\n\t\t\t\t\t\t\t\t\tChoice 9\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t<option value=\"6\">\r\n\t\t\t\t\t\t\t\t\tChoice 10\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t<option value=\"7\">\r\n\t\t\t\t\t\t\t\t\tChoice 11\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t<option value=\"8\">\r\n\t\t\t\t\t\t\t\t\tChoice 12\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t</optgroup>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\r\n\t\t\t\t\t\tSelect Splitter 1\r\n\t\t\t\t\t</label>\r\n\t\t\t\t\t<div class=\"col-lg-4 col-md-9 col-sm-12\">\r\n\t\t\t\t\t\t<select class=\"form-control\" id=\"m_multipleselectsplitter_1\">\r\n\t\t\t\t\t\t\t<optgroup label=\"Category 1\">\r\n\t\t\t\t\t\t\t\t<option value=\"1\" >\r\n\t\t\t\t\t\t\t\t\tChoice 1\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t<option value=\"2\">\r\n\t\t\t\t\t\t\t\t\tChoice 2\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t<option value=\"3\">\r\n\t\t\t\t\t\t\t\t\tChoice 3\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t<option value=\"4\">\r\n\t\t\t\t\t\t\t\t\tChoice 4\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t</optgroup>\r\n\t\t\t\t\t\t\t<optgroup label=\"Category 2\">\r\n\t\t\t\t\t\t\t\t<option value=\"5\">\r\n\t\t\t\t\t\t\t\t\tChoice 5\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t<option value=\"6\" selected>\r\n\t\t\t\t\t\t\t\t\tChoice 6\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t<option value=\"7\">\r\n\t\t\t\t\t\t\t\t\tChoice 7\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t<option value=\"8\">\r\n\t\t\t\t\t\t\t\t\tChoice 8\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t</optgroup>\r\n\t\t\t\t\t\t\t<optgroup label=\"Category 3\">\r\n\t\t\t\t\t\t\t\t<option value=\"5\">\r\n\t\t\t\t\t\t\t\t\tChoice 9\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t<option value=\"6\">\r\n\t\t\t\t\t\t\t\t\tChoice 10\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t<option value=\"7\">\r\n\t\t\t\t\t\t\t\t\tChoice 11\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t<option value=\"8\">\r\n\t\t\t\t\t\t\t\t\tChoice 12\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t</optgroup>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\r\n\t\t\t\t\t\tSelect Splitter 2\r\n\t\t\t\t\t</label>\r\n\t\t\t\t\t<div class=\"col-lg-4 col-md-9 col-sm-12\">\r\n\t\t\t\t\t\t<select class=\"form-control\" id=\"m_multipleselectsplitter_2\">\r\n\t\t\t\t\t\t\t<optgroup label=\"Group 1\">\r\n\t\t\t\t\t\t\t\t<option value=\"1\" selected>\r\n\t\t\t\t\t\t\t\t\tOption 1\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t<option value=\"2\">\r\n\t\t\t\t\t\t\t\t\tOption 2\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t<option value=\"3\">\r\n\t\t\t\t\t\t\t\t\tOption 3\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t<option value=\"4\">\r\n\t\t\t\t\t\t\t\t\tOption 4\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t</optgroup>\r\n\t\t\t\t\t\t\t<optgroup label=\"Group 2\">\r\n\t\t\t\t\t\t\t\t<option value=\"5\">\r\n\t\t\t\t\t\t\t\t\tOption 5\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t<option value=\"6\">\r\n\t\t\t\t\t\t\t\t\tOption 6\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t<option value=\"7\">\r\n\t\t\t\t\t\t\t\t\tOption 7\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t<option value=\"8\">\r\n\t\t\t\t\t\t\t\t\tOption 8\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t</optgroup>\r\n\t\t\t\t\t\t\t<optgroup label=\"Group 3\">\r\n\t\t\t\t\t\t\t\t<option value=\"5\">\r\n\t\t\t\t\t\t\t\t\tOption 9\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t<option value=\"6\">\r\n\t\t\t\t\t\t\t\t\tOption 10\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t<option value=\"7\">\r\n\t\t\t\t\t\t\t\t\tOption 11\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t<option value=\"8\">\r\n\t\t\t\t\t\t\t\t\tOption 12\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t</optgroup>\r\n\t\t\t\t\t\t\t<optgroup label=\"Group 4\">\r\n\t\t\t\t\t\t\t\t<option value=\"5\">\r\n\t\t\t\t\t\t\t\t\tOption 13\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t<option value=\"6\">\r\n\t\t\t\t\t\t\t\t\tOption 14\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t<option value=\"7\">\r\n\t\t\t\t\t\t\t\t\tOption 15\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t<option value=\"8\">\r\n\t\t\t\t\t\t\t\t\tOption 16\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t</optgroup>\r\n\t\t\t\t\t\t\t<optgroup label=\"Group 5\">\r\n\t\t\t\t\t\t\t\t<option value=\"5\">\r\n\t\t\t\t\t\t\t\t\tOption 17\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t<option value=\"6\">\r\n\t\t\t\t\t\t\t\t\tOption 18\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t<option value=\"7\">\r\n\t\t\t\t\t\t\t\t\tOption 19\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t<option value=\"8\">\r\n\t\t\t\t\t\t\t\t\tOption 20\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t</optgroup>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"m-portlet__foot m-portlet__foot--fit\">\r\n\t\t\t\t<div class=\"m-form__actions m-form__actions\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-lg-9 ml-lg-auto\">\r\n\t\t\t\t\t\t\t<button type=\"reset\" class=\"btn btn-brand\">\r\n\t\t\t\t\t\t\t\tSubmit\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t<button type=\"reset\" class=\"btn btn-secondary\">\r\n\t\t\t\t\t\t\t\tCancel\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t\t<!--end::Form-->\r\n\t</div>\r\n\t<!--end::Portlet-->\r\n</div>\r\n"

/***/ }),

/***/ "./ClientApp/app/theme/pages/default/components/forms/widgets/widgets-bootstrap-multipleselectsplitter/widgets-bootstrap-multipleselectsplitter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetsBootstrapMultipleselectsplitterComponent; });
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


var WidgetsBootstrapMultipleselectsplitterComponent = /** @class */ (function () {
    function WidgetsBootstrapMultipleselectsplitterComponent(_script) {
        this._script = _script;
    }
    WidgetsBootstrapMultipleselectsplitterComponent.prototype.ngOnInit = function () {
    };
    WidgetsBootstrapMultipleselectsplitterComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-widgets-bootstrap-multipleselectsplitter', ['assets/demo/default/custom/components/forms/widgets/bootstrap-multipleselectsplitter.js']);
    };
    WidgetsBootstrapMultipleselectsplitterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-widgets-bootstrap-multipleselectsplitter",
            template: __webpack_require__("./ClientApp/app/theme/pages/default/components/forms/widgets/widgets-bootstrap-multipleselectsplitter/widgets-bootstrap-multipleselectsplitter.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_script_loader_service__["a" /* ScriptLoaderService */]])
    ], WidgetsBootstrapMultipleselectsplitterComponent);
    return WidgetsBootstrapMultipleselectsplitterComponent;
}());



/***/ }),

/***/ "./ClientApp/app/theme/pages/default/components/forms/widgets/widgets-bootstrap-multipleselectsplitter/widgets-bootstrap-multipleselectsplitter.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsBootstrapMultipleselectsplitterModule", function() { return WidgetsBootstrapMultipleselectsplitterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__widgets_bootstrap_multipleselectsplitter_component__ = __webpack_require__("./ClientApp/app/theme/pages/default/components/forms/widgets/widgets-bootstrap-multipleselectsplitter/widgets-bootstrap-multipleselectsplitter.component.ts");
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
                "component": __WEBPACK_IMPORTED_MODULE_3__widgets_bootstrap_multipleselectsplitter_component__["a" /* WidgetsBootstrapMultipleselectsplitterComponent */]
            }
        ]
    }
];
var WidgetsBootstrapMultipleselectsplitterModule = /** @class */ (function () {
    function WidgetsBootstrapMultipleselectsplitterModule() {
    }
    WidgetsBootstrapMultipleselectsplitterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(routes), __WEBPACK_IMPORTED_MODULE_4__layouts_layout_module__["a" /* LayoutModule */]
            ], exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"]
            ], declarations: [
                __WEBPACK_IMPORTED_MODULE_3__widgets_bootstrap_multipleselectsplitter_component__["a" /* WidgetsBootstrapMultipleselectsplitterComponent */]
            ]
        })
    ], WidgetsBootstrapMultipleselectsplitterModule);
    return WidgetsBootstrapMultipleselectsplitterModule;
}());



/***/ })

});
//# sourceMappingURL=widgets-bootstrap-multipleselectsplitter.module.chunk.js.map