webpackJsonp(["base-stack.module"],{

/***/ "./ClientApp/app/theme/pages/default/components/base/base-stack/base-stack.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Subheader -->\r\n<div class=\"m-subheader\" appunwraptag=\"\">\r\n\t<div class=\"d-flex align-items-center\">\r\n\t\t<div class=\"mr-auto\">\r\n\t\t\t<h3 class=\"m-subheader__title m-subheader__title--separator\">\r\n\t\t\t\tStack\r\n\t\t\t</h3>\r\n\t\t\t<ul class=\"m-subheader__breadcrumbs m-nav m-nav--inline\">\r\n\t\t\t\t<li class=\"m-nav__item m-nav__item--home\">\r\n\t\t\t\t\t<a href=\"#\" class=\"m-nav__link m-nav__link--icon\">\r\n\t\t\t\t\t\t<i class=\"m-nav__link-icon la la-home\"></i>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"m-nav__separator\">\r\n\t\t\t\t\t-\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\tBase\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"m-nav__separator\">\r\n\t\t\t\t\t-\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\tStack\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t\t<div>\r\n\t\t\t<div class=\"m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push\" m-dropdown-toggle=\"hover\" aria-expanded=\"true\">\r\n\t\t\t\t<a href=\"#\" class=\"m-portlet__nav-link btn btn-lg btn-secondary  m-btn m-btn--outline-2x m-btn--air m-btn--icon m-btn--icon-only m-btn--pill  m-dropdown__toggle\">\r\n\t\t\t\t\t<i class=\"la la-plus m--hide\"></i>\r\n\t\t\t\t\t<i class=\"la la-ellipsis-h\"></i>\r\n\t\t\t\t</a>\r\n\t\t\t\t<div class=\"m-dropdown__wrapper\">\r\n\t\t\t\t\t<span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\"></span>\r\n\t\t\t\t\t<div class=\"m-dropdown__inner\">\r\n\t\t\t\t\t\t<div class=\"m-dropdown__body\">\r\n\t\t\t\t\t\t\t<div class=\"m-dropdown__content\">\r\n\t\t\t\t\t\t\t\t<ul class=\"m-nav\">\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__section m-nav__section--first m--hide\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__section-text\">\r\n\t\t\t\t\t\t\t\t\t\t\tQuick Actions\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-share\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tActivity\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-chat-1\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tMessages\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-info\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tFAQ\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-lifebuoy\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tSupport\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__separator m-nav__separator--fit\"></li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-outline-danger m-btn m-btn--pill m-btn--wide btn-sm\">\r\n\t\t\t\t\t\t\t\t\t\t\tSubmit\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!-- END: Subheader -->\r\n<div class=\"m-content\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-6\">\r\n\t\t\t<!--begin::Portlet-->\r\n\t\t\t<div class=\"m-portlet m-portlet--tab\">\r\n\t\t\t\t<div class=\"m-portlet__head\">\r\n\t\t\t\t\t<div class=\"m-portlet__head-caption\">\r\n\t\t\t\t\t\t<div class=\"m-portlet__head-title\">\r\n\t\t\t\t\t\t\t<span class=\"m-portlet__head-icon m--hide\">\r\n\t\t\t\t\t\t\t\t<i class=\"la la-gear\"></i>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<h3 class=\"m-portlet__head-text\">\r\n\t\t\t\t\t\t\t\tBase Stack Examples\r\n\t\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"m-portlet__body\">\r\n\t\t\t\t\t<!--begin::Section-->\r\n\t\t\t\t\t<div class=\"m-section\">\r\n\t\t\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\t\t\tMetronic's Stack allows building an equal height flexbile blocks easily:\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t\t\t<div class=\"m-demo\" data-code-preview=\"true\" data-code-html=\"true\" data-code-js=\"false\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-demo__preview\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-stack m-stack--ver m-stack--general m-stack--demo\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-stack__item\">\r\n\t\t\t\t\t\t\t\t\t\t\tItem 1\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-stack__item\">\r\n\t\t\t\t\t\t\t\t\t\t\tItem 2\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-stack__item\">\r\n\t\t\t\t\t\t\t\t\t\t\tItem 3\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-stack__item\">\r\n\t\t\t\t\t\t\t\t\t\t\tItem 4\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\t\t\tItem vertical and horizontal aligments done super easy:\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t\t\t<div class=\"m-demo\" data-code-preview=\"true\" data-code-html=\"true\" data-code-js=\"false\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-demo__preview\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-stack m-stack--ver m-stack--general m-stack--demo\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-stack__item m-stack__item--left\">\r\n\t\t\t\t\t\t\t\t\t\t\tLeft aligment\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-stack__item m-stack__item--center\">\r\n\t\t\t\t\t\t\t\t\t\t\tCenter aligment\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-stack__item m-stack__item--right\">\r\n\t\t\t\t\t\t\t\t\t\t\tRight aligment\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t\t\t<div class=\"m-demo\" data-code-preview=\"true\" data-code-html=\"true\" data-code-js=\"false\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-demo__preview\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-stack m-stack--ver m-stack--general m-stack--demo\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-stack__item m-stack__item--center m-stack__item--top\">\r\n\t\t\t\t\t\t\t\t\t\t\tTop aligment\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-stack__item m-stack__item--center m-stack__item--middle\">\r\n\t\t\t\t\t\t\t\t\t\t\tMiddle aligment\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-stack__item m-stack__item--center m-stack__item--bottom\">\r\n\t\t\t\t\t\t\t\t\t\t\tBottom aligment\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\t\t\tEnable any number of fixed and fluid height items:\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t\t\t<div class=\"m-demo\" data-code-preview=\"true\" data-code-html=\"true\" data-code-js=\"false\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-demo__preview\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-stack m-stack--ver m-stack--general m-stack--demo\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-stack__item m-stack__item--center m-stack__item--middle\" style=\"width: 120px;\">\r\n\t\t\t\t\t\t\t\t\t\t\tFixed width - 120px\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-stack__item m-stack__item--center m-stack__item--middle m-stack__item--fluid\">\r\n\t\t\t\t\t\t\t\t\t\t\tFluid width - 100%\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-stack__item m-stack__item--center m-stack__item--middle m-stack__item--fluid\">\r\n\t\t\t\t\t\t\t\t\t\t\tFluid width - 100%\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t\t\t<div class=\"m-demo\" data-code-preview=\"true\" data-code-html=\"true\" data-code-js=\"false\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-demo__preview\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-stack m-stack--ver m-stack--general m-stack--demo\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-stack__item m-stack__item--center m-stack__item--middle\" style=\"width: 150px;\">\r\n\t\t\t\t\t\t\t\t\t\t\tFixed width - 150px\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-stack__item m-stack__item--center m-stack__item--middle m-stack__item--fluid\">\r\n\t\t\t\t\t\t\t\t\t\t\tFluid width - 100%\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-stack__item m-stack__item--center m-stack__item--middle\" style=\"width: 150px;\">\r\n\t\t\t\t\t\t\t\t\t\t\tFixed width - 150px\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\t\t\tDefault stack comes with fluid width\r\n\t\t\t\t\t\t\t<code>\r\n\t\t\t\t\t\t\twidth: 100%\r\n\t\t\t\t\t\t</code>\r\n\t\t\t\t\t\t. With inline stack option you can have\r\n\t\t\t\t\t\t<code>\r\n\t\t\t\t\t\twidth:auto\r\n\t\t\t\t\t</code>\r\n\t\t\t\t\tstack:\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<div class=\"m-demo\" data-code-preview=\"true\" data-code-html=\"true\" data-code-js=\"false\">\r\n\t\t\t\t\t\t<div class=\"m-demo__preview\">\r\n\t\t\t\t\t\t\t<div class=\"m-stack m-stack--ver m-stack--general m-stack--demo m-stack--inline\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-stack__item m-stack__item--center m-stack__item--middle\" style=\"width: 120px;\">\r\n\t\t\t\t\t\t\t\t\tFree content\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"m-stack__item m-stack__item--center m-stack__item--middle\">\r\n\t\t\t\t\t\t\t\t\tFree content\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"m-stack__item m-stack__item--center m-stack__item--middle\">\r\n\t\t\t\t\t\t\t\t\tLonger free content\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tUnlimited level of nesting supported:\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<div class=\"m-demo\" data-code-preview=\"true\" data-code-html=\"true\" data-code-js=\"false\">\r\n\t\t\t\t\t\t<div class=\"m-demo__preview\">\r\n\t\t\t\t\t\t\t<div class=\"m-stack m-stack--ver m-stack--general m-stack--demo\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-stack__item\">\r\n\t\t\t\t\t\t\t\t\tItem\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-stack m-stack--ver m-stack--general m-stack--demo\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-stack__item m-stack__item--center m-stack__item--top\">\r\n\t\t\t\t\t\t\t\t\t\t\tItem\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-stack__item m-stack__item--center m-stack__item--middle\">\r\n\t\t\t\t\t\t\t\t\t\t\tItem\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-stack__item m-stack__item--center m-stack__item--bottom\">\r\n\t\t\t\t\t\t\t\t\t\t\tItem\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"m-stack__item\">\r\n\t\t\t\t\t\t\t\t\tItem\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-stack m-stack--ver m-stack--general m-stack--demo\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-stack__item m-stack__item--center m-stack__item--top\">\r\n\t\t\t\t\t\t\t\t\t\t\tItem\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-stack__item m-stack__item--center m-stack__item--middle\">\r\n\t\t\t\t\t\t\t\t\t\t\tItem\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-stack m-stack--ver m-stack--general m-stack--demo\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-stack__item m-stack__item--center m-stack__item--top\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tItem\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-stack__item m-stack__item--center m-stack__item--middle\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tItem\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-stack__item m-stack__item--center m-stack__item--bottom\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tItem\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!--end::Section-->\r\n\t\t</div>\r\n\t</div>\r\n\t<!--end::Portlet-->  \t\t<!--begin::Portlet-->\r\n\t<div class=\"m-portlet m-portlet--tab\">\r\n\t\t<div class=\"m-portlet__head\">\r\n\t\t\t<div class=\"m-portlet__head-caption\">\r\n\t\t\t\t<div class=\"m-portlet__head-title\">\r\n\t\t\t\t\t<span class=\"m-portlet__head-icon m--hide\">\r\n\t\t\t\t\t\t<i class=\"la la-gear\"></i>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<h3 class=\"m-portlet__head-text\">\r\n\t\t\t\t\t\tResponsive Modes\r\n\t\t\t\t\t</h3>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"m-portlet__body\">\r\n\t\t\t<!--begin::Section-->\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tYou can set responsive mode to your stack by just enabling one of responsive mode with special classes\r\n\t\t\t\t\t<code>\r\n\t\t\t\t\tm-stack--general\r\n\t\t\t\t</code>\r\n\t\t\t\t,\r\n\t\t\t\t<code>\r\n\t\t\t\tm-stack--desktop\r\n\t\t\t</code>\r\n\t\t\t,\r\n\t\t\t<code>\r\n\t\t\tm-stack--tablet\r\n\t\t</code>\r\n\t\t,\r\n\t\t<code>\r\n\t\tm-stack--desktop-and-tablet\r\n\t</code>\r\n\t,\r\n\t<code>\r\n\tm-stack--mobile\r\n</code>\r\n,\r\n<code>\r\nm-stack--tablet-and-mobile\r\n</code>\r\n. \t\t\t\t\tWhen\r\n<code>\r\nm-stack--general\r\n</code>\r\nmode used the stack mode will remain but with other modes, for example with\r\n<code>\r\nm-stack--tablet\r\n</code>\r\nthe stack mode will be activate within the device width and outside the device with the stack will be have just normal block tag.\r\n</span>\r\n<div class=\"m-section__content\">\r\n\t<div class=\"m-demo\" data-code-preview=\"true\" data-code-html=\"true\" data-code-js=\"false\">\r\n\t\t<div class=\"m-demo__preview\">\r\n\t\t\t<code>\r\n\t\t\tm-stack--general:\r\n\t\t</code>\r\n\t\t<div class=\"m--space-10\"></div>\r\n\t\t<div class=\"m-stack m-stack--ver m-stack--general m-stack--demo\">\r\n\t\t\t<div class=\"m-stack__item m-stack__item--center m-stack__item--top\">\r\n\t\t\t\tTop\r\n\t\t\t</div>\r\n\t\t\t<div class=\"m-stack__item m-stack__item--center m-stack__item--middle\">\r\n\t\t\t\tMiddle\r\n\t\t\t</div>\r\n\t\t\t<div class=\"m-stack__item m-stack__item--center m-stack__item--bottom\">\r\n\t\t\t\tBottom\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<div class=\"m-demo\" data-code-preview=\"true\" data-code-html=\"true\" data-code-js=\"false\">\r\n\t<div class=\"m-demo__preview\">\r\n\t\t<code>\r\n\t\tm-stack--desktop:\r\n\t</code>\r\n\t<div class=\"m--space-10\"></div>\r\n\t<div class=\"m-stack m-stack--ver m-stack--desktop m-stack--demo\">\r\n\t\t<div class=\"m-stack__item m-stack__item--center m-stack__item--top\">\r\n\t\t\tTop\r\n\t\t</div>\r\n\t\t<div class=\"m-stack__item m-stack__item--center m-stack__item--middle\">\r\n\t\t\tMiddle\r\n\t\t</div>\r\n\t\t<div class=\"m-stack__item m-stack__item--center m-stack__item--bottom\">\r\n\t\t\tBottom\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n</div>\r\n<div class=\"m-demo\" data-code-preview=\"true\" data-code-html=\"true\" data-code-js=\"false\">\r\n\t<div class=\"m-demo__preview\">\r\n\t\t<code>\r\n\t\tm-stack--tablet:\r\n\t</code>\r\n\t<div class=\"m--space-10\"></div>\r\n\t<div class=\"m-stack m-stack--ver m-stack--tablet m-stack--demo\">\r\n\t\t<div class=\"m-stack__item m-stack__item--center m-stack__item--top\">\r\n\t\t\tTop\r\n\t\t</div>\r\n\t\t<div class=\"m-stack__item m-stack__item--center m-stack__item--middle\">\r\n\t\t\tMiddle\r\n\t\t</div>\r\n\t\t<div class=\"m-stack__item m-stack__item--center m-stack__item--bottom\">\r\n\t\t\tBottom\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n</div>\r\n<div class=\"m-demo\" data-code-preview=\"true\" data-code-html=\"true\" data-code-js=\"false\">\r\n\t<div class=\"m-demo__preview\">\r\n\t\t<code>\r\n\t\tm-stack--mobile:\r\n\t</code>\r\n\t<div class=\"m--space-10\"></div>\r\n\t<div class=\"m-stack m-stack--ver m-stack--mobile m-stack--demo\">\r\n\t\t<div class=\"m-stack__item m-stack__item--center m-stack__item--top\">\r\n\t\t\tTop\r\n\t\t</div>\r\n\t\t<div class=\"m-stack__item m-stack__item--center m-stack__item--middle\">\r\n\t\t\tMiddle\r\n\t\t</div>\r\n\t\t<div class=\"m-stack__item m-stack__item--center m-stack__item--bottom\">\r\n\t\t\tBottom\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n<!--end::Section-->\r\n</div>\r\n</div>\r\n<!--end::Portlet-->\r\n</div>\r\n<div class=\"col-md-6\">\r\n\t<!--begin::Portlet-->\r\n\t<div class=\"m-portlet m-portlet--tab\">\r\n\t\t<div class=\"m-portlet__head\">\r\n\t\t\t<div class=\"m-portlet__head-caption\">\r\n\t\t\t\t<div class=\"m-portlet__head-title\">\r\n\t\t\t\t\t<span class=\"m-portlet__head-icon m--hide\">\r\n\t\t\t\t\t\t<i class=\"la la-gear\"></i>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<h3 class=\"m-portlet__head-text\">\r\n\t\t\t\t\t\tHorizontal Stack Examples\r\n\t\t\t\t\t</h3>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"m-portlet__body\">\r\n\t\t\t<!--begin::Section-->\r\n\t\t\t<div class=\"m-section\">\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tMetronic's Stack allows building an equal height flexbile blocks easily:\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<div class=\"m-demo\" data-code-preview=\"true\" data-code-html=\"true\" data-code-js=\"false\">\r\n\t\t\t\t\t\t<div class=\"m-demo__preview\">\r\n\t\t\t\t\t\t\t<div class=\"m-stack m-stack--hor m-stack--general m-stack--demo\" style=\"height: 400px\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-stack__item\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-stack__demo-item\">\r\n\t\t\t\t\t\t\t\t\t\tItem 1\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"m-stack__item\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-stack__demo-item\">\r\n\t\t\t\t\t\t\t\t\t\tItem 2\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"m-stack__item\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-stack__demo-item\">\r\n\t\t\t\t\t\t\t\t\t\tItem 3\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"m-stack__item\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-stack__demo-item\">\r\n\t\t\t\t\t\t\t\t\t\tItem 4\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tItem vertical and horizontal aligments done super easy:\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<div class=\"m-demo\" data-code-preview=\"true\" data-code-html=\"true\" data-code-js=\"false\">\r\n\t\t\t\t\t\t<div class=\"m-demo__preview\">\r\n\t\t\t\t\t\t\t<div class=\"m-stack m-stack--hor m-stack--general m-stack--demo\" style=\"height: 400px\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-stack__item m-stack__item--left\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-stack__demo-item\">\r\n\t\t\t\t\t\t\t\t\t\tLeft aligment\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"m-stack__item m-stack__item--center\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-stack__demo-item\">\r\n\t\t\t\t\t\t\t\t\t\tCenter aligment\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"m-stack__item m-stack__item--right\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-stack__demo-item\">\r\n\t\t\t\t\t\t\t\t\t\tRight aligment\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tEnable any number of fixed and fluid width items:\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<div class=\"m-demo\" data-code-preview=\"true\" data-code-html=\"true\" data-code-js=\"false\">\r\n\t\t\t\t\t\t<div class=\"m-demo__preview\" style=\"height: 600px\">\r\n\t\t\t\t\t\t\t<div class=\"m-stack m-stack--hor m-stack--general m-stack--demo\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-stack__item m-stack__item--center m-stack__item--middle\" style=\"height: 100px;\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-stack__demo-item\">\r\n\t\t\t\t\t\t\t\t\t\tFixed height - 100px\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"m-stack__item m-stack__item--center m-stack__item--middle m-stack__item--fluid\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-stack__demo-item\">\r\n\t\t\t\t\t\t\t\t\t\tFluid height - 100%\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"m-stack__item m-stack__item--center m-stack__item--middle\" style=\"height: 100px;\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-stack__demo-item\">\r\n\t\t\t\t\t\t\t\t\t\tFixed height - 100px\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\tNested horizontal and vertical stacks:\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t\t<div class=\"m-demo\" data-code-preview=\"true\" data-code-html=\"true\" data-code-js=\"false\">\r\n\t\t\t\t\t\t<div class=\"m-demo__preview\" style=\"height: 600px\">\r\n\t\t\t\t\t\t\t<div class=\"m-stack m-stack--hor m-stack--general m-stack--demo\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-stack__item m-stack__item--center m-stack__item--middle\" style=\"height: 100px;\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-stack m-stack--ver m-stack--general m-stack--demo\" style=\"height: 100%\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-stack__item m-stack__item--center m-stack__item--top\">\r\n\t\t\t\t\t\t\t\t\t\t\tItem\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-stack__item m-stack__item--center m-stack__item--middle\">\r\n\t\t\t\t\t\t\t\t\t\t\tItem\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-stack__item m-stack__item--center m-stack__item--bottom\">\r\n\t\t\t\t\t\t\t\t\t\t\tItem\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"m-stack__item m-stack__item--center m-stack__item--middle m-stack__item--fluid\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-stack m-stack--ver m-stack--general m-stack--demo\" style=\"height: 100%\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-stack__item m-stack__item--center m-stack__item--top\">\r\n\t\t\t\t\t\t\t\t\t\t\tItem\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-stack__item m-stack__item--center m-stack__item--middle\">\r\n\t\t\t\t\t\t\t\t\t\t\tItem\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-stack__item m-stack__item--center m-stack__item--bottom\">\r\n\t\t\t\t\t\t\t\t\t\t\tItem\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!--end::Section-->\r\n\t\t</div>\r\n\t</div>\r\n\t<!--end::Portlet-->\r\n</div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./ClientApp/app/theme/pages/default/components/base/base-stack/base-stack.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseStackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BaseStackComponent = /** @class */ (function () {
    function BaseStackComponent() {
    }
    BaseStackComponent.prototype.ngOnInit = function () {
    };
    BaseStackComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-base-stack",
            template: __webpack_require__("./ClientApp/app/theme/pages/default/components/base/base-stack/base-stack.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [])
    ], BaseStackComponent);
    return BaseStackComponent;
}());



/***/ }),

/***/ "./ClientApp/app/theme/pages/default/components/base/base-stack/base-stack.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseStackModule", function() { return BaseStackModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_stack_component__ = __webpack_require__("./ClientApp/app/theme/pages/default/components/base/base-stack/base-stack.component.ts");
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
                "component": __WEBPACK_IMPORTED_MODULE_3__base_stack_component__["a" /* BaseStackComponent */]
            }
        ]
    }
];
var BaseStackModule = /** @class */ (function () {
    function BaseStackModule() {
    }
    BaseStackModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(routes), __WEBPACK_IMPORTED_MODULE_4__layouts_layout_module__["a" /* LayoutModule */]
            ], exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"]
            ], declarations: [
                __WEBPACK_IMPORTED_MODULE_3__base_stack_component__["a" /* BaseStackComponent */]
            ]
        })
    ], BaseStackModule);
    return BaseStackModule;
}());



/***/ })

});
//# sourceMappingURL=base-stack.module.chunk.js.map