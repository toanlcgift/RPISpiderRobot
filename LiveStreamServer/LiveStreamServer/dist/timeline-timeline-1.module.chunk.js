webpackJsonp(["timeline-timeline-1.module"],{

/***/ "./ClientApp/app/theme/pages/default/components/timeline/timeline-timeline-1/timeline-timeline-1.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Subheader -->\r\n<div class=\"m-subheader\" appunwraptag=\"\">\r\n\t<div class=\"d-flex align-items-center\">\r\n\t\t<div class=\"mr-auto\">\r\n\t\t\t<h3 class=\"m-subheader__title m-subheader__title--separator\">\r\n\t\t\t\tTimeline\r\n\t\t\t</h3>\r\n\t\t\t<ul class=\"m-subheader__breadcrumbs m-nav m-nav--inline\">\r\n\t\t\t\t<li class=\"m-nav__item m-nav__item--home\">\r\n\t\t\t\t\t<a href=\"#\" class=\"m-nav__link m-nav__link--icon\">\r\n\t\t\t\t\t\t<i class=\"m-nav__link-icon la la-home\"></i>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"m-nav__separator\">\r\n\t\t\t\t\t-\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\tTimeline\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"m-nav__separator\">\r\n\t\t\t\t\t-\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\tTimeline 1\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t\t<div>\r\n\t\t\t<div class=\"m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push\" m-dropdown-toggle=\"hover\" aria-expanded=\"true\">\r\n\t\t\t\t<a href=\"#\" class=\"m-portlet__nav-link btn btn-lg btn-secondary  m-btn m-btn--outline-2x m-btn--air m-btn--icon m-btn--icon-only m-btn--pill  m-dropdown__toggle\">\r\n\t\t\t\t\t<i class=\"la la-plus m--hide\"></i>\r\n\t\t\t\t\t<i class=\"la la-ellipsis-h\"></i>\r\n\t\t\t\t</a>\r\n\t\t\t\t<div class=\"m-dropdown__wrapper\">\r\n\t\t\t\t\t<span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\"></span>\r\n\t\t\t\t\t<div class=\"m-dropdown__inner\">\r\n\t\t\t\t\t\t<div class=\"m-dropdown__body\">\r\n\t\t\t\t\t\t\t<div class=\"m-dropdown__content\">\r\n\t\t\t\t\t\t\t\t<ul class=\"m-nav\">\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__section m-nav__section--first m--hide\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__section-text\">\r\n\t\t\t\t\t\t\t\t\t\t\tQuick Actions\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-share\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tActivity\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-chat-1\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tMessages\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-info\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tFAQ\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-lifebuoy\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tSupport\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__separator m-nav__separator--fit\"></li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-outline-danger m-btn m-btn--pill m-btn--wide btn-sm\">\r\n\t\t\t\t\t\t\t\t\t\t\tSubmit\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!-- END: Subheader -->\r\n<div class=\"m-content\">\r\n\t<div class=\"m-portlet m-portlet--full-height\">\r\n\t\t<div class=\"m-portlet__head\">\r\n\t\t\t<div class=\"m-portlet__head-caption\">\r\n\t\t\t\t<div class=\"m-portlet__head-title\">\r\n\t\t\t\t\t<h3 class=\"m-portlet__head-text\">\r\n\t\t\t\t\t\tTimeline Examples\r\n\t\t\t\t\t</h3>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"m-portlet__head-tools\">\r\n\t\t\t\t<ul class=\"nav nav-pills nav-pills--brand m-nav-pills--align-right m-nav-pills--btn-pill m-nav-pills--btn-sm\" role=\"tablist\">\r\n\t\t\t\t\t<li class=\"nav-item m-tabs__item\">\r\n\t\t\t\t\t\t<a class=\"nav-link m-tabs__link active\" data-toggle=\"tab\" href=\"#m_widget2_tab1_content\" role=\"tab\" aria-expanded=\"true\">\r\n\t\t\t\t\t\t\tLast Month\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"nav-item m-tabs__item\">\r\n\t\t\t\t\t\t<a class=\"nav-link m-tabs__link\" data-toggle=\"tab\" href=\"#m_widget2_tab2_content\" role=\"tab\" aria-expanded=\"false\">\r\n\t\t\t\t\t\t\tAll Time\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"m-portlet__body\">\r\n\t\t\t<div class=\"tab-content\">\r\n\t\t\t\t<div class=\"tab-pane active\" id=\"m_widget2_tab1_content\" aria-expanded=\"true\">\r\n\t\t\t\t\t<!--begin:Timeline 1-->\r\n\t\t\t\t\t<div class=\"m-timeline-1 m-timeline-1--fixed\">\r\n\t\t\t\t\t\t<div class=\"m-timeline-1__items\">\r\n\t\t\t\t\t\t\t<div class=\"m-timeline-1__marker\"></div>\r\n\t\t\t\t\t\t\t<div class=\"m-timeline-1__item m-timeline-1__item--left m-timeline-1__item--first\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-timeline-1__item-circle\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m--bg-danger\"></div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"m-timeline-1__item-arrow\"></div>\r\n\t\t\t\t\t\t\t\t<span class=\"m-timeline-1__item-time m--font-brand\">\r\n\t\t\t\t\t\t\t\t\t11:35\r\n\t\t\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t\t\tAM\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<div class=\"m-timeline-1__item-content\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-timeline-1__item-title\">\r\n\t\t\t\t\t\t\t\t\t\tUsers Joined Today\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-timeline-1__item-body\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-pics\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/app/media/img/users/100_4.jpg\" title=\"\">\r\n\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/app/media/img/users/100_13.jpg\" title=\"\">\r\n\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/app/media/img/users/100_11.jpg\" title=\"\">\r\n\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/app/media/img/users/100_14.jpg\" title=\"\">\r\n\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/app/media/img/users/100_7.jpg\" title=\"\">\r\n\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/app/media/img/users/100_3.jpg\" title=\"\">\r\n\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-timeline-1__item-body m--margin-top-15\">\r\n\t\t\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit amit,consectetur eiusmdd\r\n\t\t\t\t\t\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t\t\t\t\t\ttempors labore et dolore.\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-timeline-1__item m-timeline-1__item--right\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-timeline-1__item-circle\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m--bg-danger\"></div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"m-timeline-1__item-arrow\"></div>\r\n\t\t\t\t\t\t\t\t<span class=\"m-timeline-1__item-time m--font-brand\">\r\n\t\t\t\t\t\t\t\t\t02:50\r\n\t\t\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t\t\tPM\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<div class=\"m-timeline-1__item-content\">\r\n\t\t\t\t\t\t\t\t\t<div style=\"height:170px;\">\r\n\t\t\t\t\t\t\t\t\t\t<div style=\"height:100%;overflow:hidden;display:block;background: url(http://maps.googleapis.com/maps/api/staticmap?center=48.858271,2.294264&amp;size=640x300&amp;zoom=5&amp;key=AIzaSyBMlTEcPR5QULmk9QUaS7lwUK7qtabunEI) no-repeat 50% 50%;\">\r\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"http://maps.googleapis.com/maps/api/staticmap?center=48.858271,2.294264&amp;size=640x300&amp;zoom=16&amp;key=AIzaSyBMlTEcPR5QULmk9QUaS7lwUK7qtabunEI\" style=\"\" alt=\"\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-timeline-1__item m-timeline-1__item--left\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-timeline-1__item-circle\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m--bg-danger\"></div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"m-timeline-1__item-arrow\"></div>\r\n\t\t\t\t\t\t\t\t<span class=\"m-timeline-1__item-time m--font-brand\">\r\n\t\t\t\t\t\t\t\t\t02:58\r\n\t\t\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t\t\tPM\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<div class=\"m-timeline-1__item-content\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-timeline-1__item-title\">\r\n\t\t\t\t\t\t\t\t\t\tLatest News\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-timeline-1__item-body\">\r\n\t\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit amit,consectetur eiusmdd\r\n\t\t\t\t\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t\t\t\t\ttempor incididunt ut labore et dolore magna enim\r\n\t\t\t\t\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t\t\t\t\tad minim veniam nostrud.\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-timeline-1__item-actions\">\r\n\t\t\t\t\t\t\t\t\t\t<a  href=\"#\" class=\"btn btn-sm btn-outline-brand m-btn m-btn--pill m-btn--custom\">\r\n\t\t\t\t\t\t\t\t\t\t\tRead more...\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-timeline-1__item m-timeline-1__item--right\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-timeline-1__item-circle\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m--bg-danger\"></div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"m-timeline-1__item-arrow\"></div>\r\n\t\t\t\t\t\t\t\t<span class=\"m-timeline-1__item-time m--font-brand\">\r\n\t\t\t\t\t\t\t\t\t04:10\r\n\t\t\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t\t\tPM\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<div class=\"m-timeline-1__item-content\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-timeline-1__item-title\">\r\n\t\t\t\t\t\t\t\t\t\tMy ToDo\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-list-badge m--margin-top-15\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-badge__label m--font-success\">\r\n\t\t\t\t\t\t\t\t\t\t\t12:00\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-badge__items\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-list-badge__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tHiking\r\n\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-list-badge__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tLunch\r\n\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-list-badge__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tMeet John\r\n\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-list-badge m--margin-top-15\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-badge__label m--font-success\">\r\n\t\t\t\t\t\t\t\t\t\t\t13:00\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-badge__items\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-badge__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tSetup AOL\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-badge__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tWrite Code\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-list-badge m--margin-top-15\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-badge__label m--font-success\">\r\n\t\t\t\t\t\t\t\t\t\t\t14:00\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-badge__items\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-list-badge__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tJust Keep Doing Something\r\n\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-timeline-1__item m-timeline-1__item--left\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-timeline-1__item-circle\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m--bg-danger\"></div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"m-timeline-1__item-arrow\"></div>\r\n\t\t\t\t\t\t\t\t<span class=\"m-timeline-1__item-time m--font-brand\">\r\n\t\t\t\t\t\t\t\t\t05:00&nbsp;\r\n\t\t\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t\t\tPM\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<div class=\"m-timeline-1__item-content\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"m--margin-right-20\" src=\"assets/app/media/img/products/product1.jpg\" title=\"\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-timeline-1__item-title m--margin-top-10\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tSome Post\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-timeline-1__item-body\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit amit\r\n\t\t\t\t\t\t\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t\t\t\t\t\t\tconsectetur eiusmdd\r\n\t\t\t\t\t\t\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t\t\t\t\t\t\ttempor incididunt ut labore\r\n\t\t\t\t\t\t\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t\t\t\t\t\t\tet dolore magna.\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col m--align-center\">\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-sm m-btn--custom m-btn--pill  btn-danger\">\r\n\t\t\t\t\t\t\t\tLoad More\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!--End:Timeline 1-->\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"tab-pane\" id=\"m_widget2_tab2_content\">\r\n\t\t\t\t\t<!--begin:Timeline 2-->\r\n\t\t\t\t\t<div class=\"m-timeline-1 m-timeline-1--fixed\">\r\n\t\t\t\t\t\t<div class=\"m-timeline-1__items\">\r\n\t\t\t\t\t\t\t<div class=\"m-timeline-1__marker\"></div>\r\n\t\t\t\t\t\t\t<div class=\"m-timeline-1__item m-timeline-1__item--left m-timeline-1__item--first\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-timeline-1__item-circle\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m--bg-danger\"></div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"m-timeline-1__item-arrow\"></div>\r\n\t\t\t\t\t\t\t\t<span class=\"m-timeline-1__item-time m--font-brand\">\r\n\t\t\t\t\t\t\t\t\t11:35\r\n\t\t\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t\t\tAM\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<div class=\"m-timeline-1__item-content\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-timeline-1__item-title\">\r\n\t\t\t\t\t\t\t\t\t\tUsers Joined Today\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-timeline-1__item-body\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-badge m--margin-bottom-20\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-badge__label m--font-danger\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t12:00\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-badge__items\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-list-badge__item m-list-badge__item--brand\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tTechnology\r\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-list-badge__item m-list-badge__item--focus\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tSport\r\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-list-badge__item m-list-badge__item--success\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tArt\r\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-list-badge__item m-list-badge__item--danger\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tMusic\r\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-badge m--margin-bottom-20\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-badge__label m--font-brand\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t18:30\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-badge__items\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-badge__item m-list-badge__item--focus\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tWeb Design\r\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-badge__item m-list-badge__item--warning\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tProgramming\r\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-badge__item m-list-badge__item--info\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tIllustration\r\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-badge\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-badge__label m--font-warning\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t12:40\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-badge__items\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-list-badge__item m-list-badge__item--brand\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tYoga\r\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-list-badge__item m-list-badge__item--primary\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tCooking\r\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-list-badge__item m-list-badge__item--danger\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tDance\r\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-list-badge__item m-list-badge__item--warning\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tGym\r\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-timeline-1__item m-timeline-1__item--right\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-timeline-1__item-circle\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m--bg-danger\"></div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"m-timeline-1__item-arrow\"></div>\r\n\t\t\t\t\t\t\t\t<span class=\"m-timeline-1__item-time m--font-brand\">\r\n\t\t\t\t\t\t\t\t\t02:50\r\n\t\t\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t\t\tPM\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<div class=\"m-timeline-1__item-content\">\r\n\t\t\t\t\t\t\t\t\t<div style=\"height:170px;\">\r\n\t\t\t\t\t\t\t\t\t\t<div style=\"height:100%;overflow:hidden;display:block;background: url(http://maps.googleapis.com/maps/api/staticmap?center=48.858271,2.294264&amp;size=640x300&amp;zoom=5&amp;key=AIzaSyBMlTEcPR5QULmk9QUaS7lwUK7qtabunEI) no-repeat 50% 50%;\">\r\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"http://maps.googleapis.com/maps/api/staticmap?center=48.858271,2.294264&amp;size=640x300&amp;zoom=16&amp;key=AIzaSyBMlTEcPR5QULmk9QUaS7lwUK7qtabunEI\" style=\"\" alt=\"\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-timeline-1__item m-timeline-1__item--left\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-timeline-1__item-circle\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m--bg-danger\"></div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"m-timeline-1__item-arrow\"></div>\r\n\t\t\t\t\t\t\t\t<span class=\"m-timeline-1__item-time m--font-brand\">\r\n\t\t\t\t\t\t\t\t\t02:58\r\n\t\t\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t\t\tPM\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<div class=\"m-timeline-1__item-content\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-timeline-1__item-title\">\r\n\t\t\t\t\t\t\t\t\t\tLatest News\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-timeline-1__item-body m--margin-top-20\">\r\n\t\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit amit,consectetur eiusmdd\r\n\t\t\t\t\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t\t\t\t\ttempor incididunt ut labore et dolore magna enim\r\n\t\t\t\t\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t\t\t\t\tad minim veniam nostrud\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-timeline-1__item-btn m--margin-top-25\">\r\n\t\t\t\t\t\t\t\t\t\t<a  href=\"#\" class=\"btn btn-sm btn-outline-brand m-btn m-btn--pill m-btn--custom\">\r\n\t\t\t\t\t\t\t\t\t\t\tRead more...\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-timeline-1__item m-timeline-1__item--right\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-timeline-1__item-circle\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m--bg-danger\"></div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"m-timeline-1__item-arrow\"></div>\r\n\t\t\t\t\t\t\t\t<span class=\"m-timeline-1__item-time m--font-brand\">\r\n\t\t\t\t\t\t\t\t\t04:10\r\n\t\t\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t\t\tPM\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<div class=\"m-timeline-1__item-content\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-timeline-1__item-title\">\r\n\t\t\t\t\t\t\t\t\t\tMy ToDo\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-list-badge m--margin-top-15\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-badge__label m--font-success\">\r\n\t\t\t\t\t\t\t\t\t\t\t12:00\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-badge__items\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-list-badge__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tHiking\r\n\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-list-badge__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tLunch\r\n\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-list-badge__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tMeet John\r\n\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-list-badge m--margin-top-15\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-badge__label m--font-success\">\r\n\t\t\t\t\t\t\t\t\t\t\t13:00\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-badge__items\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-badge__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tSetup AOL\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-badge__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tWrite Code\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-list-badge m--margin-top-15\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-badge__label m--font-success\">\r\n\t\t\t\t\t\t\t\t\t\t\t14:00\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-badge__items\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-list-badge__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tJust Keep Doing Something\r\n\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-timeline-1__item m-timeline-1__item--left m--margin-top-10\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-timeline-1__item-circle\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m--bg-danger\"></div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"m-timeline-1__item-arrow\"></div>\r\n\t\t\t\t\t\t\t\t<span class=\"m-timeline-1__item-time m--font-brand\">\r\n\t\t\t\t\t\t\t\t\t05:00\r\n\t\t\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t\t\tPM\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<div class=\"m-timeline-1__item-content\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"m--margin-right-20\" src=\"assets/app/media/img/products/product1.jpg\" title=\"\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-timeline-1__item-title m--margin-top-10\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tSome Post\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-timeline-1__item-body\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit amit\r\n\t\t\t\t\t\t\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t\t\t\t\t\t\tconsectetur eiusmdd\r\n\t\t\t\t\t\t\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t\t\t\t\t\t\ttempor incididunt ut labore\r\n\t\t\t\t\t\t\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t\t\t\t\t\t\tet dolore magna\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col m--align-center\">\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-sm m-btn--custom m-btn--pill  btn-focus\">\r\n\t\t\t\t\t\t\t\tLoad More\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!--End:Timeline 2-->\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./ClientApp/app/theme/pages/default/components/timeline/timeline-timeline-1/timeline-timeline-1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelineTimeline1Component; });
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

var TimelineTimeline1Component = /** @class */ (function () {
    function TimelineTimeline1Component() {
    }
    TimelineTimeline1Component.prototype.ngOnInit = function () {
    };
    TimelineTimeline1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-timeline-timeline-1",
            template: __webpack_require__("./ClientApp/app/theme/pages/default/components/timeline/timeline-timeline-1/timeline-timeline-1.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [])
    ], TimelineTimeline1Component);
    return TimelineTimeline1Component;
}());



/***/ }),

/***/ "./ClientApp/app/theme/pages/default/components/timeline/timeline-timeline-1/timeline-timeline-1.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineTimeline1Module", function() { return TimelineTimeline1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__timeline_timeline_1_component__ = __webpack_require__("./ClientApp/app/theme/pages/default/components/timeline/timeline-timeline-1/timeline-timeline-1.component.ts");
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
                "component": __WEBPACK_IMPORTED_MODULE_3__timeline_timeline_1_component__["a" /* TimelineTimeline1Component */]
            }
        ]
    }
];
var TimelineTimeline1Module = /** @class */ (function () {
    function TimelineTimeline1Module() {
    }
    TimelineTimeline1Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(routes), __WEBPACK_IMPORTED_MODULE_4__layouts_layout_module__["a" /* LayoutModule */]
            ], exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"]
            ], declarations: [
                __WEBPACK_IMPORTED_MODULE_3__timeline_timeline_1_component__["a" /* TimelineTimeline1Component */]
            ]
        })
    ], TimelineTimeline1Module);
    return TimelineTimeline1Module;
}());



/***/ })

});
//# sourceMappingURL=timeline-timeline-1.module.chunk.js.map