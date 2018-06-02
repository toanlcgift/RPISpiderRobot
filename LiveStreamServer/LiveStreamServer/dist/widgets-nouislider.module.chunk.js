webpackJsonp(["widgets-nouislider.module"],{

/***/ "./ClientApp/app/theme/pages/default/components/forms/widgets/widgets-nouislider/widgets-nouislider.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Subheader -->\r\n<div class=\"m-subheader\" appunwraptag=\"\">\r\n\t<div class=\"d-flex align-items-center\">\r\n\t\t<div class=\"mr-auto\">\r\n\t\t\t<h3 class=\"m-subheader__title m-subheader__title--separator\">\r\n\t\t\t\tnoUiSlider\r\n\t\t\t</h3>\r\n\t\t\t<ul class=\"m-subheader__breadcrumbs m-nav m-nav--inline\">\r\n\t\t\t\t<li class=\"m-nav__item m-nav__item--home\">\r\n\t\t\t\t\t<a href=\"#\" class=\"m-nav__link m-nav__link--icon\">\r\n\t\t\t\t\t\t<i class=\"m-nav__link-icon la la-home\"></i>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"m-nav__separator\">\r\n\t\t\t\t\t-\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\tForms\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"m-nav__separator\">\r\n\t\t\t\t\t-\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\tForm Widgets\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"m-nav__separator\">\r\n\t\t\t\t\t-\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\tnoUiSlider\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t\t<div>\r\n\t\t\t<div class=\"m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push\" m-dropdown-toggle=\"hover\" aria-expanded=\"true\">\r\n\t\t\t\t<a href=\"#\" class=\"m-portlet__nav-link btn btn-lg btn-secondary  m-btn m-btn--outline-2x m-btn--air m-btn--icon m-btn--icon-only m-btn--pill  m-dropdown__toggle\">\r\n\t\t\t\t\t<i class=\"la la-plus m--hide\"></i>\r\n\t\t\t\t\t<i class=\"la la-ellipsis-h\"></i>\r\n\t\t\t\t</a>\r\n\t\t\t\t<div class=\"m-dropdown__wrapper\">\r\n\t\t\t\t\t<span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\"></span>\r\n\t\t\t\t\t<div class=\"m-dropdown__inner\">\r\n\t\t\t\t\t\t<div class=\"m-dropdown__body\">\r\n\t\t\t\t\t\t\t<div class=\"m-dropdown__content\">\r\n\t\t\t\t\t\t\t\t<ul class=\"m-nav\">\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__section m-nav__section--first m--hide\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__section-text\">\r\n\t\t\t\t\t\t\t\t\t\t\tQuick Actions\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-share\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tActivity\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-chat-1\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tMessages\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-info\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tFAQ\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-lifebuoy\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tSupport\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__separator m-nav__separator--fit\"></li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-outline-danger m-btn m-btn--pill m-btn--wide btn-sm\">\r\n\t\t\t\t\t\t\t\t\t\t\tSubmit\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!-- END: Subheader -->\r\n<div class=\"m-content\">\r\n\t<div class=\"m-portlet\">\r\n\t\t<div class=\"m-portlet__head\">\r\n\t\t\t<div class=\"m-portlet__head-caption\">\r\n\t\t\t\t<div class=\"m-portlet__head-title\">\r\n\t\t\t\t\t<h3 class=\"m-portlet__head-text\">\r\n\t\t\t\t\t\tBootstrap noUiSlider Examples\r\n\t\t\t\t\t</h3>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!--begin::Form-->\r\n\t\t<form class=\"m-form m-form--fit m-form--label-align-right\">\r\n\t\t\t<div class=\"m-portlet__body\">\r\n\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\r\n\t\t\t\t\t\tBasic Setup\r\n\t\t\t\t\t</label>\r\n\t\t\t\t\t<div class=\"col-lg-6 col-md-12 col-sm-12\">\r\n\t\t\t\t\t\t<div class=\"row align-items-center\">\r\n\t\t\t\t\t\t\t<div class=\"col-4\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"m_nouislider_1_input\"  placeholder=\"Quantity\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-8\">\r\n\t\t\t\t\t\t\t\t<div id=\"m_nouislider_1\" class=\"m-nouislider--drag-danger\"></div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<span class=\"m-form__help\">\r\n\t\t\t\t\t\t\tInput control is attached to slider\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"m-form__seperator m-form__seperator--dashed\"></div>\r\n\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\r\n\t\t\t\t\t\tCurrency Formatting\r\n\t\t\t\t\t</label>\r\n\t\t\t\t\t<div class=\"col-lg-6 col-md-12 col-sm-12\">\r\n\t\t\t\t\t\t<div class=\"row align-items-center\">\r\n\t\t\t\t\t\t\t<div class=\"col-4\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"m_nouislider_2_input\"  placeholder=\"Currency\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-8\">\r\n\t\t\t\t\t\t\t\t<div id=\"m_nouislider_2\" class=\"m-nouislider m-nouislider--handle-danger\"></div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<span class=\"m-form__help\">\r\n\t\t\t\t\t\t\tTo format the slider output, noUiSlider offers a  format option.\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"m-form__seperator m-form__seperator--dashed\"></div>\r\n\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\r\n\t\t\t\t\t\tSlider With Tooltip\r\n\t\t\t\t\t</label>\r\n\t\t\t\t\t<div class=\"col-lg-6 col-md-12 col-sm-12\">\r\n\t\t\t\t\t\t<div class=\"row align-items-center\">\r\n\t\t\t\t\t\t\t<div class=\"col-2\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"m_nouislider_3_input\"  placeholder=\"Quantity\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-2\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"m_nouislider_3.1_input\"  placeholder=\"Quantity\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-8\">\r\n\t\t\t\t\t\t\t\t<div id=\"m_nouislider_3\" class=\"m-nouislider\"></div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<span class=\"m-form__help\">\r\n\t\t\t\t\t\t\tSlider with tooltips to show slider values.\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"m-form__seperator m-form__seperator--dashed\"></div>\r\n\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\r\n\t\t\t\t\t\tSlider State Colors\r\n\t\t\t\t\t</label>\r\n\t\t\t\t\t<div class=\"col-lg-6 col-md-12 col-sm-12\">\r\n\t\t\t\t\t\t<div class=\"row align-items-center\">\r\n\t\t\t\t\t\t\t<div class=\"col-2\">\r\n\t\t\t\t\t\t\t\t<select class=\"form-control\" id=\"m_nouislider_input_select\"></select>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-2\">\r\n\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" id=\"m_nouislider_input_number\"  placeholder=\"Quantity\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-8\">\r\n\t\t\t\t\t\t\t\t<div id=\"m_nouislider_4\" class=\"m-nouislider m-nouislider--handle-primary m-nouislider--connect-warning\"></div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<span class=\"m-form__help\">\r\n\t\t\t\t\t\t\tUse state classes to change the slider's connect path and handle colors.\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"m-form__seperator m-form__seperator--dashed\"></div>\r\n\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\r\n\t\t\t\t\t\tSoft Limits\r\n\t\t\t\t\t</label>\r\n\t\t\t\t\t<div class=\"col-lg-6 col-md-12 col-sm-12\">\r\n\t\t\t\t\t\t<div class=\"row align-items-center\">\r\n\t\t\t\t\t\t\t<div class=\"col-4\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"m_nouislider_5_input\"  placeholder=\"Quantity\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-8\">\r\n\t\t\t\t\t\t\t\t<div id=\"m_nouislider_5\"></div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<span class=\"m-form__help m--margin-top-20\">\r\n\t\t\t\t\t\t\tDisables the edges of slider where handler bounces back when released\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"m-form__seperator m-form__seperator--dashed\"></div>\r\n\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\r\n\t\t\t\t\t\tVertical Slider\r\n\t\t\t\t\t</label>\r\n\t\t\t\t\t<div class=\"col-lg-6 col-md-12 col-sm-12\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-4\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"m_nouislider_6_input\"  placeholder=\"Quantity\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-8\">\r\n\t\t\t\t\t\t\t\t<div id=\"m_nouislider_6\"></div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<span class=\"m-form__help\">\r\n\t\t\t\t\t\t\tVertical orientation slider example\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"m-form__seperator m-form__seperator--dashed\"></div>\r\n\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\r\n\t\t\t\t\t\tModal Demos\r\n\t\t\t\t\t</label>\r\n\t\t\t\t\t<div class=\"col-lg-4 col-md-9 col-sm-12\">\r\n\t\t\t\t\t\t<a href=\"\" class=\"btn btn-success m-btn m-btn--pill\" data-toggle=\"modal\" data-target=\"#m_nouislider_modal\">\r\n\t\t\t\t\t\t\tLaunch modal examples\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"m-portlet__foot m-portlet__foot--fit\">\r\n\t\t\t\t\t<div class=\"m-form__actions m-form__actions\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-lg-9 ml-lg-auto\">\r\n\t\t\t\t\t\t\t\t<button type=\"reset\" class=\"btn btn-brand\">\r\n\t\t\t\t\t\t\t\t\tSubmit\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t<button type=\"reset\" class=\"btn btn-secondary\">\r\n\t\t\t\t\t\t\t\t\tCancel\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t\t<!--end::Form-->\r\n\t</div>\r\n\t<!--begin::Modal-->\r\n\t<div class=\"modal fade\" id=\"m_nouislider_modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n\t\t<div class=\"modal-dialog modal-lg\" role=\"document\">\r\n\t\t\t<div class=\"modal-content\">\r\n\t\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t\t<h5 class=\"modal-title\" id=\"exampleModalLabel\">\r\n\t\t\t\t\t\tBootstrap Date Picker Examples\r\n\t\t\t\t\t</h5>\r\n\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n\t\t\t\t\t\t<span aria-hidden=\"true\" class=\"la la-remove\"></span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<form class=\"m-form m-form--fit m-form--label-align-right\">\r\n\t\t\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t\t\t<div class=\"form-group m-form__group row m--margin-top-20\">\r\n\t\t\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\r\n\t\t\t\t\t\t\t\tBasic Setup\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t<div class=\"col-lg-9 col-md-9 col-sm-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"row align-items-center\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-6\">\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"m_nouislider_modal1_input\"  placeholder=\"Quantity\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-6\">\r\n\t\t\t\t\t\t\t\t\t\t<div id=\"m_nouislider_modal1\" class=\"m-nouislider--drag-danger\"></div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group m-form__group row m--margin-top-20\">\r\n\t\t\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\r\n\t\t\t\t\t\t\t\tCurrency Formatting\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t<div class=\"col-lg-9 col-md-9 col-sm-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"row align-items-center\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-6\">\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"m_nouislider_modal2_input\"  placeholder=\"Quantity\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-6\">\r\n\t\t\t\t\t\t\t\t\t\t<div id=\"m_nouislider_modal2\" class=\"m-nouislider--drag-danger\"></div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group m-form__group row m--margin-top-20\">\r\n\t\t\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\r\n\t\t\t\t\t\t\t\tSlider With Tooltip\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t<div class=\"col-lg-9 col-md-9 col-sm-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"row align-items-center\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-3\">\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"m_nouislider_modal1.1_input\"  placeholder=\"Quantity\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-3\">\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"m_nouislider_modal1.2_input\"  placeholder=\"Quantity\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-6\">\r\n\t\t\t\t\t\t\t\t\t\t<div id=\"m_nouislider_modal3\" class=\"m-nouislider\"></div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-brand m-btn\" data-dismiss=\"modal\">\r\n\t\t\t\t\t\t\tClose\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary m-btn\">\r\n\t\t\t\t\t\t\tSubmit\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<!--end::Modal-->\r\n</div>\r\n"

/***/ }),

/***/ "./ClientApp/app/theme/pages/default/components/forms/widgets/widgets-nouislider/widgets-nouislider.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetsNouisliderComponent; });
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


var WidgetsNouisliderComponent = /** @class */ (function () {
    function WidgetsNouisliderComponent(_script) {
        this._script = _script;
    }
    WidgetsNouisliderComponent.prototype.ngOnInit = function () {
    };
    WidgetsNouisliderComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-widgets-nouislider', ['assets/demo/default/custom/components/forms/widgets/nouislider.js']);
    };
    WidgetsNouisliderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-widgets-nouislider",
            template: __webpack_require__("./ClientApp/app/theme/pages/default/components/forms/widgets/widgets-nouislider/widgets-nouislider.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_script_loader_service__["a" /* ScriptLoaderService */]])
    ], WidgetsNouisliderComponent);
    return WidgetsNouisliderComponent;
}());



/***/ }),

/***/ "./ClientApp/app/theme/pages/default/components/forms/widgets/widgets-nouislider/widgets-nouislider.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsNouisliderModule", function() { return WidgetsNouisliderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__widgets_nouislider_component__ = __webpack_require__("./ClientApp/app/theme/pages/default/components/forms/widgets/widgets-nouislider/widgets-nouislider.component.ts");
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
                "component": __WEBPACK_IMPORTED_MODULE_3__widgets_nouislider_component__["a" /* WidgetsNouisliderComponent */]
            }
        ]
    }
];
var WidgetsNouisliderModule = /** @class */ (function () {
    function WidgetsNouisliderModule() {
    }
    WidgetsNouisliderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(routes), __WEBPACK_IMPORTED_MODULE_4__layouts_layout_module__["a" /* LayoutModule */]
            ], exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"]
            ], declarations: [
                __WEBPACK_IMPORTED_MODULE_3__widgets_nouislider_component__["a" /* WidgetsNouisliderComponent */]
            ]
        })
    ], WidgetsNouisliderModule);
    return WidgetsNouisliderModule;
}());



/***/ })

});
//# sourceMappingURL=widgets-nouislider.module.chunk.js.map