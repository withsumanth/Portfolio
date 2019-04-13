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
		var e = new Error('Cannot find module "' + req + '".');
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { anchorScrolling: 'enabled' })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: '<router-outlet></router-outlet>'
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _profile_profile_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.module */ "./src/app/profile/profile.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _profile_profile_module__WEBPACK_IMPORTED_MODULE_4__["ProfileModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/profile/about/about.component.html":
/*!****************************************************!*\
  !*** ./src/app/profile/about/about.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section\" id=\"about\">\n  <div class=\"container\">\n    <div class=\"card\" data-aos=\"fade-up\" data-aos-offset=\"10\">\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-md-12\">\n          <div class=\"card-body\">\n            <div class=\"h4 mt-0 title\">About</div>\n            <p>Full-stack developer with experience in User Interface design and having strong problem solving, organizing and planning skills</p>\n          </div>\n        </div>\n        <div class=\"col-lg-6 col-md-12\">\n          <div class=\"card-body\">\n            <div class=\"h4 mt-0 title\">Basic Information</div>\n            <div class=\"row\">\n              <div class=\"col-sm-4\">\n                <strong class=\"text-uppercase\">Date of Birth:</strong>\n              </div>\n              <div class=\"col-sm-8\">Aug 14, 1992</div>\n            </div>\n            <div class=\"row mt-3\">\n              <div class=\"col-sm-4\">\n                <strong class=\"text-uppercase\">Email:</strong>\n              </div>\n              <div class=\"col-sm-8\">withsumanth@gmail.com</div>\n            </div>\n            <div class=\"row mt-3\">\n              <div class=\"col-sm-4\">\n                <strong class=\"text-uppercase\">Phone:</strong>\n              </div>\n              <div class=\"col-sm-8\">(857)-424-6011</div>\n            </div>\n            <div class=\"row mt-3\">\n              <div class=\"col-sm-4\">\n                <strong class=\"text-uppercase\">Address:</strong>\n              </div>\n              <div class=\"col-sm-8\">226 Parker Hill Avenue, Boston, MA, USA - 02120\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/profile/about/about.component.scss":
/*!****************************************************!*\
  !*** ./src/app/profile/about/about.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/about/about.component.ts":
/*!**************************************************!*\
  !*** ./src/app/profile/about/about.component.ts ***!
  \**************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/profile/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/profile/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/profile/contact/contact.component.html":
/*!********************************************************!*\
  !*** ./src/app/profile/contact/contact.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section\" id=\"contact\">\n  <div class=\"cc-contact-information\" style=\"background-image: url('assets/images/contact.jpg');\">\n    <div class=\"container\">\n      <div class=\"cc-contact\">\n        <div class=\"row\">\n          <div class=\"col-md-9\">\n            <div class=\"card mb-0\" data-aos=\"zoom-in\">\n              <div class=\"h4 text-center title\">Contact Me</div>\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <div class=\"card-body\">\n                    <div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-danger': message.type === 'error' }\">{{message.text}}</div>\n                    <form name=\"form\" (ngSubmit)=\"contact(f)\" #f=\"ngForm\" novalidate>\n                      <div class=\"p pb-3\">\n                        <strong>Feel free to contact me </strong>\n                      </div>\n                      <div class=\"row mb-3\">\n                        <div class=\"col\">\n                          <div class=\"input-group\">\n                            <span class=\"input-group-addon\">\n                              <i class=\"fa fa-user-circle\"></i>\n                            </span>\n                            <input class=\"form-control\" type=\"text\" name=\"name\" placeholder=\"Name\" [(ngModel)]=\"model.name\"\n                              required/>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"row mb-3\">\n                        <div class=\"col\">\n                          <div class=\"input-group\">\n                            <span class=\"input-group-addon\">\n                              <i class=\"fa fa-file-text\"></i>\n                            </span>\n                            <input class=\"form-control\" type=\"text\" name=\"subject\" placeholder=\"Subject\" [(ngModel)]=\"model.subject\"\n                              />\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"row mb-3\">\n                        <div class=\"col\">\n                          <div class=\"input-group\">\n                            <span class=\"input-group-addon\">\n                              <i class=\"fa fa-envelope\"></i>\n                            </span>\n                            <input class=\"form-control\" type=\"text\" name=\"email\" placeholder=\"E-mail\" [(ngModel)]=\"model.email\"\n                              pattern=\"^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$\" required/>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"row mb-3\">\n                        <div class=\"col\">\n                          <div class=\"form-group\">\n                            <textarea class=\"form-control\" name=\"message\" placeholder=\"Your Message\" [(ngModel)]=\"model.message\"\n                              required></textarea>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"row\">\n                        <div class=\"col\">\n                          <button class=\"btn btn-primary\" type=\"submit\">Send</button>\n                        </div>\n                      </div>\n                    </form>\n                  </div>\n                </div>\n                <div class=\"col-md-6\">\n                  <div class=\"card-body\">\n                    <p class=\"mb-0\">\n                      <strong>Phone</strong>\n                    </p>\n                    <p class=\"pb-2\">+1 (857)-424-6011</p>\n                    <p class=\"mb-0\">\n                      <strong>Email</strong>\n                    </p>\n                    <p>withsumanth@gmail.com</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<ng-snotify class=\"material\"></ng-snotify>\n"

/***/ }),

/***/ "./src/app/profile/contact/contact.component.scss":
/*!********************************************************!*\
  !*** ./src/app/profile/contact/contact.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/contact/contact.component.ts":
/*!******************************************************!*\
  !*** ./src/app/profile/contact/contact.component.ts ***!
  \******************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../profile.service */ "./src/app/profile/profile.service.ts");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! emailjs-com */ "./node_modules/emailjs-com/source/index.js");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactComponent = /** @class */ (function () {
    function ContactComponent(profile, snotify) {
        this.profile = profile;
        this.snotify = snotify;
        this.snotifyConfig = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].snotifyConfig;
        this.model = {};
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.contact = function (f) {
        var _this = this;
        if (!this.model.name || !this.model.subject || !this.model.email || !this.model.email || !this.model.message) {
            this.message = { type: 'error', text: 'Please enter all the fields' };
            return;
        }
        var email = this.model.email;
        var regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (!regexp.test(email)) {
            this.message = { type: 'error', text: 'Email format is worng' };
            return;
        }
        this.message = { type: '', text: '' };
        var templateParams = {
            name: this.model.name,
            email: this.model.email,
            message: 'subject: ' + this.model.subject + ' message: ' + this.model.message
        };
        emailjs_com__WEBPACK_IMPORTED_MODULE_4__["send"]('gmail', 'template_9ZpRsR6B', templateParams, 'user_lNP7EvKoasgIuzpFcdqvo')
            .then(function (response) {
            _this.snotify.success('message', 'Success', _this.snotifyConfig);
            f.resetForm();
            console.log('SUCCESS!', response.status, response.text);
        }, function (err) {
            _this.snotify.error('Something went wrong. Try again later.', 'Error', _this.snotifyConfig);
        });
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/profile/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/profile/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"],
            ng_snotify__WEBPACK_IMPORTED_MODULE_2__["SnotifyService"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/profile/education/education.component.html":
/*!************************************************************!*\
  !*** ./src/app/profile/education/education.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section\" id=\"education\">\n  <div class=\"container cc-education\">\n    <div class=\"h4 text-center mb-4 title\">Education</div>\n    <div class=\"card\" *ngFor=\"let education of educationData\">\n      <div class=\"row\">\n        <div class=\"col-md-3 bg-primary\" data-aos=\"fade-right\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n          <div class=\"card-body cc-education-header\">\n            <p>{{education?.from_to_year}}</p>\n            <div class=\"h5\">{{education?.education}}</div>\n          </div>\n        </div>\n        <div class=\"col-md-9\" data-aos=\"fade-left\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n          <div class=\"card-body\">\n            <div class=\"h5\">{{education?.stream}}</div>\n            <p class=\"category\">{{education?.institution}}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/profile/education/education.component.scss":
/*!************************************************************!*\
  !*** ./src/app/profile/education/education.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/education/education.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/profile/education/education.component.ts ***!
  \**********************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../profile.service */ "./src/app/profile/profile.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EducationComponent = /** @class */ (function () {
    function EducationComponent(profile) {
        this.profile = profile;
    }
    EducationComponent.prototype.ngOnInit = function () {
        this.getEducation();
    };
    EducationComponent.prototype.getEducation = function () {
        // this.profile.education().subscribe(data => {
        //   this.educationData = data.response;
        // });
        this.educationData = this.profile.education();
    };
    EducationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-education',
            template: __webpack_require__(/*! ./education.component.html */ "./src/app/profile/education/education.component.html"),
            styles: [__webpack_require__(/*! ./education.component.scss */ "./src/app/profile/education/education.component.scss")]
        }),
        __metadata("design:paramtypes", [_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]])
    ], EducationComponent);
    return EducationComponent;
}());



/***/ }),

/***/ "./src/app/profile/experience/experience.component.html":
/*!**************************************************************!*\
  !*** ./src/app/profile/experience/experience.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section\" id=\"experience\">\n  <div class=\"container cc-experience\">\n    <div class=\"h4 text-center mb-4 title\">Work Experience</div>\n    <div class=\"card\" *ngFor=\"let experience of exprienceData\">\n      <div class=\"row\">\n        <div class=\"col-md-3 bg-primary\" data-aos=\"fade-right\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n          <div class=\"card-body cc-experience-header\">\n            <p>{{experience?.from_to_month_year}}</p>\n            <div class=\"h5\">{{experience?.organization}}</div>\n          </div>\n        </div>\n        <div class=\"col-md-9\" data-aos=\"fade-left\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n          <div class=\"card-body\">\n            <div class=\"h5\">{{experience?.designation}}</div>\n            <p [innerHTML]=\"experience?.details\"></p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/profile/experience/experience.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/profile/experience/experience.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/experience/experience.component.ts":
/*!************************************************************!*\
  !*** ./src/app/profile/experience/experience.component.ts ***!
  \************************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../profile.service */ "./src/app/profile/profile.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExperienceComponent = /** @class */ (function () {
    function ExperienceComponent(profile) {
        this.profile = profile;
    }
    ExperienceComponent.prototype.ngOnInit = function () {
        this.getExprience();
    };
    ExperienceComponent.prototype.getExprience = function () {
        // this.profile.exprience().subscribe(data => {
        //   this.exprienceData = data.response;
        // });
        this.exprienceData = this.profile.experience();
    };
    ExperienceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-experience',
            template: __webpack_require__(/*! ./experience.component.html */ "./src/app/profile/experience/experience.component.html"),
            styles: [__webpack_require__(/*! ./experience.component.scss */ "./src/app/profile/experience/experience.component.scss")]
        }),
        __metadata("design:paramtypes", [_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]])
    ], ExperienceComponent);
    return ExperienceComponent;
}());



/***/ }),

/***/ "./src/app/profile/footer/footer.component.html":
/*!******************************************************!*\
  !*** ./src/app/profile/footer/footer.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <div class=\"container text-center\">\n    <!-- <a class=\"cc-google-plus btn btn-link\" href=\"#\" target=\"_blank\">\n      <i class=\"fa fa-google-plus fa-2x\" aria-hidden=\"true\"></i>\n    </a> -->\n  </div>\n  <div class=\"text-center text-muted\">\n    <p>&copy; All rights reserved.\n      <!-- <br>Design - -->\n      <!-- <a class=\"credit\" href=\"https://templateflip.com\" target=\"_blank\">TemplateFlip</a> -->\n    </p>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/profile/footer/footer.component.scss":
/*!******************************************************!*\
  !*** ./src/app/profile/footer/footer.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/footer/footer.component.ts":
/*!****************************************************!*\
  !*** ./src/app/profile/footer/footer.component.ts ***!
  \****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/profile/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/profile/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/profile/header/header.component.html":
/*!******************************************************!*\
  !*** ./src/app/profile/header/header.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"profile-page sidebar-collapse\">\n    <nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent bg-primary\" color-on-scroll=\"400\">\n      <div class=\"container\">\n        <div class=\"navbar-translate\">\n          <a class=\"navbar-brand\" href=\"#\" rel=\"tooltip\">Sumanth's CV</a>\n          <button class=\"navbar-toggler navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navigation\" aria-controls=\"navigation\"\n            aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-bar bar1\"></span>\n            <span class=\"navbar-toggler-bar bar2\"></span>\n            <span class=\"navbar-toggler-bar bar3\"></span>\n          </button>\n        </div>\n        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\n          <ul class=\"navbar-nav\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link smooth-scroll\" [routerLink]=\"['/']\" fragment=\"about\">About</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link smooth-scroll\" [routerLink]=\"['/']\" fragment=\"skill\">Skills</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link smooth-scroll\" [routerLink]=\"['/']\" fragment=\"education\">Education</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link smooth-scroll\" [routerLink]=\"['/']\" fragment=\"experience\">Experience</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link smooth-scroll\" [routerLink]=\"['/']\" fragment=\"projects\">Projects</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link smooth-scroll\" [routerLink]=\"['/']\" fragment=\"contact\">Contact</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </nav>\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/profile/header/header.component.scss":
/*!******************************************************!*\
  !*** ./src/app/profile/header/header.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/header/header.component.ts":
/*!****************************************************!*\
  !*** ./src/app/profile/header/header.component.ts ***!
  \****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(route) {
        this.route = route;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.fragment.subscribe(function (fragment) {
            _this.fragment = fragment;
        });
    };
    HeaderComponent.prototype.ngAfterViewInit = function () {
        try {
            document.querySelector('#' + this.fragment).scrollIntoView();
        }
        catch (e) {
        }
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/profile/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/profile/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/profile/intro/intro.component.html":
/*!****************************************************!*\
  !*** ./src/app/profile/intro/intro.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"profile-page\">\n  <div class=\"wrapper\">\n    <div class=\"page-header page-header-small\" filter-color=\"green\">\n      <div class=\"page-header-image\" data-parallax=\"true\" style=\"background-image: url('assets/images/intro.jpg');\"></div>\n      <div class=\"container\">\n        <div class=\"content-center\">\n          <div class=\"cc-profile-image\">\n            <a href=\"#\">\n              <img src=\"assets/images/Image.png\" alt=\"Image\" />\n            </a>\n          </div>\n          <div class=\"h2 title\">Sumanth Gopalakrishna</div>\n          <p class=\"category text-white\">Full Stack developer</p>\n          <!-- <a class=\"btn btn-primary smooth-scroll mr-2\" href=\"#contact\" data-aos=\"zoom-in\" data-aos-anchor=\"data-aos-anchor\">Hire Me</a> -->\n          <a class=\"btn btn-primary\" (click)=\"downloadResume()\" data-aos=\"zoom-in\" data-aos-anchor=\"data-aos-anchor\">Download CV</a>\n        </div>\n      </div>\n      <div class=\"section\">\n        <div class=\"container\">\n          <div class=\"button-container\">\n            <a class=\"btn btn-default btn-round btn-lg btn-icon\" href=\"https://www.linkedin.com/in/sumanthhg\" target=\"_blank\">\n              <i class=\"fa fa-linkedin\"></i>\n            </a>\n            <a class=\"btn btn-default btn-round btn-lg btn-icon\" href=\"https://github.com/withsumanth\" target=\"_blank\">\n              <i class=\"fa fa-github\"></i>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/profile/intro/intro.component.scss":
/*!****************************************************!*\
  !*** ./src/app/profile/intro/intro.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/intro/intro.component.ts":
/*!**************************************************!*\
  !*** ./src/app/profile/intro/intro.component.ts ***!
  \**************************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IntroComponent = /** @class */ (function () {
    function IntroComponent() {
    }
    IntroComponent.prototype.ngOnInit = function () {
    };
    IntroComponent.prototype.downloadResume = function () {
        var link = document.createElement('a');
        link.download = 'Sumanth_Resume';
        link.href = 'assets/Sumanth_Resume.pdf';
        link.click();
    };
    IntroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-intro',
            template: __webpack_require__(/*! ./intro.component.html */ "./src/app/profile/intro/intro.component.html"),
            styles: [__webpack_require__(/*! ./intro.component.scss */ "./src/app/profile/intro/intro.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], IntroComponent);
    return IntroComponent;
}());



/***/ }),

/***/ "./src/app/profile/portfolio/portfolio.component.html":
/*!************************************************************!*\
  !*** ./src/app/profile/portfolio/portfolio.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section\" id=\"projects\">\n  <div class=\"container cc-experience\">\n    <div class=\"h4 text-center mb-4 title\">Projects</div>\n    <div class=\"card\" *ngFor=\"let experience of exprienceData\">\n      <div class=\"row\">\n        <div class=\"col-md-3 bg-primary\" data-aos=\"fade-right\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n          <div class=\"card-body cc-experience-header\">\n            <div *ngIf='experience.id==1 ;else nolink'><a style=\"color:white\" href=\"https://whatsinmycity.herokuapp.com\" target=\"_blank\"><div class=\"h5\">{{experience?.organization}}</div></a></div>\n            <ng-template #nolink>\n              <div class=\"h5\">{{experience?.organization}}</div>\n            </ng-template>\n          </div>\n        </div>\n        <div class=\"col-md-9\" data-aos=\"fade-left\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n          <div class=\"card-body\">\n            <div class=\"h5\">{{experience?.designation}}</div>\n            <p [innerHTML]=\"experience?.details\"></p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/profile/portfolio/portfolio.component.scss":
/*!************************************************************!*\
  !*** ./src/app/profile/portfolio/portfolio.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/portfolio/portfolio.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/profile/portfolio/portfolio.component.ts ***!
  \**********************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../profile.service */ "./src/app/profile/profile.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent(profile) {
        this.profile = profile;
    }
    PortfolioComponent.prototype.ngOnInit = function () {
        this.getExprience();
    };
    PortfolioComponent.prototype.getExprience = function () {
        this.exprienceData = this.profile.projects();
    };
    PortfolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/profile/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.scss */ "./src/app/profile/portfolio/portfolio.component.scss")]
        }),
        __metadata("design:paramtypes", [_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"page-content\">\n  <router-outlet></router-outlet>\n  <app-intro></app-intro>\n    <app-about></app-about>\n    <app-skills></app-skills>\n    <app-education></app-education>\n    <app-experience></app-experience>\n    <app-portfolio></app-portfolio>\n    <!-- <app-reference></app-reference> -->\n    <app-contact></app-contact>\n</div>\n<app-footer></app-footer>\n<ngx-spinner bdColor=\"rgba(255,255,255,1)\" size=\"medium\" color=\"#033d5b\" type=\"ball-spin-clockwise\"></ngx-spinner>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(spinner) {
        this.spinner = spinner;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinner.show();
        setTimeout(function () {
            _this.spinner.hide();
        }, 2000);
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_node_modules_ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/profile/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/profile/footer/footer.component.ts");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./intro/intro.component */ "./src/app/profile/intro/intro.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about/about.component */ "./src/app/profile/about/about.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/profile/skills/skills.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/profile/portfolio/portfolio.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/profile/experience/experience.component.ts");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./education/education.component */ "./src/app/profile/education/education.component.ts");
/* harmony import */ var _reference_reference_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./reference/reference.component */ "./src/app/profile/reference/reference.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/profile/contact/contact.component.ts");
/* harmony import */ var _node_modules_ngx_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../node_modules/ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../app-routing.module */ "./src/app/app-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ng_snotify__WEBPACK_IMPORTED_MODULE_3__["SnotifyModule"],
                _node_modules_ngx_spinner__WEBPACK_IMPORTED_MODULE_15__["NgxSpinnerModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"]
            ],
            declarations: [
                _profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _intro_intro_component__WEBPACK_IMPORTED_MODULE_7__["IntroComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
                _skills_skills_component__WEBPACK_IMPORTED_MODULE_9__["SkillsComponent"],
                _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_10__["PortfolioComponent"],
                _experience_experience_component__WEBPACK_IMPORTED_MODULE_11__["ExperienceComponent"],
                _education_education_component__WEBPACK_IMPORTED_MODULE_12__["EducationComponent"],
                _reference_reference_component__WEBPACK_IMPORTED_MODULE_13__["ReferenceComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_14__["ContactComponent"]
            ],
            providers: [
                { provide: 'SnotifyToastConfig', useValue: ng_snotify__WEBPACK_IMPORTED_MODULE_3__["ToastDefaults"] },
                ng_snotify__WEBPACK_IMPORTED_MODULE_3__["SnotifyService"],
            ]
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ }),

/***/ "./src/app/profile/profile.service.ts":
/*!********************************************!*\
  !*** ./src/app/profile/profile.service.ts ***!
  \********************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileService = /** @class */ (function () {
    function ProfileService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
        this.skillsData = [
            {
                'id': '1',
                'skill': 'REACT',
                'progress': '70%'
            },
            {
                'id': '2',
                'skill': 'ANGULAR',
                'progress': '80%'
            },
            {
                'id': '3',
                'skill': 'JAVA',
                'progress': '85%'
            },
            {
                'id': '4',
                'skill': 'JAVASCRIPT',
                'progress': '85%'
            },
            {
                'id': '5',
                'skill': 'AWS',
                'progress': '75%'
            },
            {
                'id': '6',
                'skill': 'Spring/Hibernate',
                'progress': '80%'
            },
            {
                'id': '7',
                'skill': 'Node.js',
                'progress': '85%'
            },
            {
                'id': '8',
                'skill': 'jQuery',
                'progress': '85%'
            },
            {
                'id': '9',
                'skill': 'HTML/CSS/BOOTSTRAP',
                'progress': '85%'
            },
            {
                'id': '10',
                'skill': 'Ruby',
                'progress': '80%'
            }
        ];
        this.educationData = [
            {
                'id': '1',
                'from_to_year': '2017 - 2019',
                'education': 'Master\'s Degree',
                'stream': 'Information Systems',
                'institution': 'Northeastern University, Boston, MA, USA'
            },
            {
                'id': '2',
                'from_to_year': '2010 - 2014',
                'education': 'Bachelor\'s Degree',
                'stream': 'Electronics and Communication',
                'institution': 'Siddaganga Institute of Technology, India'
            }
        ];
        this.exprienceData = [
            {
                'id': '1',
                'from_to_month_year': 'June 2018 - December 2019',
                'organization': 'Brightcove, Boston, MA, USA',
                'designation': 'Software Engineer Intern',
                'details': "Worked on creating a website in <strong>JavaScript, Node.js</strong> to allow customers to host their own video portal websites. This was built on <strong>React, jQuery and MongoDB</strong> which runs on <strong>AWS</strong> cloud computing platform. Also I managed <strong>Jenkins</strong> for running continuous integration and created automation scripts using <strong>Ruby</strong> and <strong>Capybara</strong>"
            },
            {
                'id': '2',
                'from_to_month_year': 'December 2014 - July 2017',
                'organization': 'Arisglobal Software Private Limited, India',
                'designation': 'Software Engineer',
                'details': 'Developed a website to interact with reporting tool like <strong>Cognos</strong> to analyze the data in pharmacovigilance by creating user interface which was built on <strong>Spring MVC framework</strong> with <strong>Maven</strong> integration and <strong>Hibernate</strong> and front end technologies like <strong>jQuery, CSS3</strong> and <strong>HTML5</strong> by connecting with <strong>Oracle DB</strong>'
            }
        ];
        this.projectsData = [
            {
                'id': '1',
                'organization': 'Local Search and Discovery Website',
                'details': "Designed a local search-and-discovery service website that provides recommendations based on desired location which has been built using <strong>Angular, HTML5, CSS3, jQuery, Bootstrap, Typescript, Node.js and Express</strong>. The application has been deployed on <strong>AWS, Heroku</strong> cloud platform\n"
            },
            {
                'id': '2',
                'organization': 'E-Commerce application',
                'details': 'Designed E-Commerce application on <strong>Spring MVC framework, JSP and jQuery</strong> which has been built using <strong>MySQL</strong> database with <strong>Hibernate</strong> mapping'
            },
            {
                'id': '3',
                'organization': 'Cloud Computing AWS',
                'details': 'Created <strong>CI/CD</strong> pipeline for a <strong>Spring Boot</strong> application using <strong>Git, CircleCI and AWS CodeDeploy</strong>. This platform uses services like <strong>EC2, RDS, DynamoDB, S3, SNS, SES, Lambda, CloudFormation and CloudWatch</strong>. Load testing has been done by enabling <strong>Load Balancer</strong> and creating <strong>Auto scaling groups</strong> using JMeter'
            },
            {
                'id': '4',
                'organization': 'Analysis of Amazon Product Review dataset',
                'details': 'Analyzed average review of the product and found top 100 products of the dataset using <strong>MapReduce</strong> algorithm. This has been Developed using <strong>Hadoop, MongoDB, HBase and PIG</strong>'
            }
        ];
    }
    ProfileService.prototype.contactus = function (data) {
        return this.http.post(this.baseUrl, data);
    };
    ProfileService.prototype.skills = function () {
        return this.skillsData;
    };
    ProfileService.prototype.education = function () {
        return this.educationData;
    };
    ProfileService.prototype.experience = function () {
        // return this.http.get(this.baseUrl + 'exprience');
        return this.exprienceData;
    };
    ProfileService.prototype.projects = function () {
        // return this.http.get(this.baseUrl + 'exprience');
        return this.projectsData;
    };
    ProfileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "./src/app/profile/reference/reference.component.html":
/*!************************************************************!*\
  !*** ./src/app/profile/reference/reference.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section\" id=\"reference\">\n  <div class=\"container cc-reference\">\n    <div class=\"h4 mb-4 text-center title\">References</div>\n    <div class=\"card\" data-aos=\"zoom-in\">\n      <div class=\"carousel slide\" id=\"cc-Indicators\" data-ride=\"carousel\">\n        <ol class=\"carousel-indicators\">\n          <li class=\"active\" data-target=\"#cc-Indicators\" data-slide-to=\"0\"></li>\n          <li data-target=\"#cc-Indicators\" data-slide-to=\"1\"></li>\n          <li data-target=\"#cc-Indicators\" data-slide-to=\"2\"></li>\n        </ol>\n        <div class=\"carousel-inner\">\n          <div class=\"carousel-item active\">\n            <div class=\"row\">\n              <div class=\"col-lg-2 col-md-3 cc-reference-header\">\n                <img src=\"assets/images/reference-image-1.jpg\" alt=\"Image\" />\n                <div class=\"h5 pt-2\">Aiyana</div>\n                <p class=\"category\">CEO / WEBM</p>\n              </div>\n              <div class=\"col-lg-10 col-md-9\">\n                <p> Habitasse venenatis commodo tempor eleifend arcu sociis sollicitudin ante pulvinar ad, est porta cras erat\n                  ullamcorper volutpat metus duis platea convallis, tortor primis ac quisque etiam luctus nisl nullam fames.\n                  Ligula purus suscipit tempus nascetur curabitur donec nam ullamcorper, laoreet nullam mauris dui aptent\n                  facilisis neque elementum ac, risus semper felis parturient fringilla rhoncus eleifend.</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"carousel-item\">\n            <div class=\"row\">\n              <div class=\"col-lg-2 col-md-3 cc-reference-header\">\n                <img src=\"assets/images/reference-image-2.jpg\" alt=\"Image\" />\n                <div class=\"h5 pt-2\">Braiden</div>\n                <p class=\"category\">CEO / Creativem</p>\n              </div>\n              <div class=\"col-lg-10 col-md-9\">\n                <p> Habitasse venenatis commodo tempor eleifend arcu sociis sollicitudin ante pulvinar ad, est porta cras erat\n                  ullamcorper volutpat metus duis platea convallis, tortor primis ac quisque etiam luctus nisl nullam fames.\n                  Ligula purus suscipit tempus nascetur curabitur donec nam ullamcorper, laoreet nullam mauris dui aptent\n                  facilisis neque elementum ac, risus semper felis parturient fringilla rhoncus eleifend.</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"carousel-item\">\n            <div class=\"row\">\n              <div class=\"col-lg-2 col-md-3 cc-reference-header\">\n                <img src=\"assets/images/reference-image-3.jpg\" alt=\"Image\" />\n                <div class=\"h5 pt-2\">Alexander</div>\n                <p class=\"category\">CEO / Webnote</p>\n              </div>\n              <div class=\"col-lg-10 col-md-9\">\n                <p> Habitasse venenatis commodo tempor eleifend arcu sociis sollicitudin ante pulvinar ad, est porta cras erat\n                  ullamcorper volutpat metus duis platea convallis, tortor primis ac quisque etiam luctus nisl nullam fames.\n                  Ligula purus suscipit tempus nascetur curabitur donec nam ullamcorper, laoreet nullam mauris dui aptent\n                  facilisis neque elementum ac, risus semper felis parturient fringilla rhoncus eleifend.</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/profile/reference/reference.component.scss":
/*!************************************************************!*\
  !*** ./src/app/profile/reference/reference.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/reference/reference.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/profile/reference/reference.component.ts ***!
  \**********************************************************/
/*! exports provided: ReferenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferenceComponent", function() { return ReferenceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReferenceComponent = /** @class */ (function () {
    function ReferenceComponent() {
    }
    ReferenceComponent.prototype.ngOnInit = function () {
    };
    ReferenceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reference',
            template: __webpack_require__(/*! ./reference.component.html */ "./src/app/profile/reference/reference.component.html"),
            styles: [__webpack_require__(/*! ./reference.component.scss */ "./src/app/profile/reference/reference.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ReferenceComponent);
    return ReferenceComponent;
}());



/***/ }),

/***/ "./src/app/profile/skills/skills.component.html":
/*!******************************************************!*\
  !*** ./src/app/profile/skills/skills.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section\" id=\"skill\">\n  <div class=\"container\">\n    <div class=\"h4 text-center mb-4 title\">Skills</div>\n    <div class=\"card\" data-aos=\"fade-up\" data-aos-anchor-placement=\"top-bottom\">\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"col-md-6\" *ngFor=\"let skills of skillsData\">\n            <div class=\"progress-container progress-primary\">\n              <span class=\"progress-badge\">{{skills?.skill}}</span>\n              <div class=\"progress\">\n                <div class=\"progress-bar progress-bar-primary\" data-aos=\"progress-full\" data-aos-offset=\"10\" data-aos-duration=\"2000\" role=\"progressbar\"\n                  aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" [ngStyle]=\"{'width': skills?.progress }\"></div>\n                <span class=\"progress-value\">{{skills?.progress}}</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/profile/skills/skills.component.scss":
/*!******************************************************!*\
  !*** ./src/app/profile/skills/skills.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/skills/skills.component.ts":
/*!****************************************************!*\
  !*** ./src/app/profile/skills/skills.component.ts ***!
  \****************************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../profile.service */ "./src/app/profile/profile.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SkillsComponent = /** @class */ (function () {
    // data: any;
    function SkillsComponent(profile) {
        this.profile = profile;
    }
    SkillsComponent.prototype.ngOnInit = function () {
        this.getSkills();
    };
    SkillsComponent.prototype.getSkills = function () {
        this.skillsData = this.profile.skills();
    };
    SkillsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-skills',
            template: __webpack_require__(/*! ./skills.component.html */ "./src/app/profile/skills/skills.component.html"),
            styles: [__webpack_require__(/*! ./skills.component.scss */ "./src/app/profile/skills/skills.component.scss")]
        }),
        __metadata("design:paramtypes", [_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]])
    ], SkillsComponent);
    return SkillsComponent;
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
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseUrl: window.location.protocol + "//" + window.location.hostname + ":4200/",
    snotifyConfig: {
        showProgressBar: false,
        position: ng_snotify__WEBPACK_IMPORTED_MODULE_0__["SnotifyPosition"].rightTop,
    },
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\My Files\NEUSemester4\Portfolio\portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map