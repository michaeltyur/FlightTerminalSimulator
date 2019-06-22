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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".message-block{\r\n    float: left;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0NBQ2YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZXNzYWdlLWJsb2Nre1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-flight></app-flight>\r\n\r\n"

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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _flight_flight_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./flight/flight.component */ "./src/app/flight/flight.component.ts");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./message/message.component */ "./src/app/message/message.component.ts");
/* harmony import */ var _directives_msg_bg_directiv__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/msg.bg.directiv */ "./src/app/directives/msg.bg.directiv.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _flight_flight_component__WEBPACK_IMPORTED_MODULE_5__["FlightComponent"],
                _message_message_component__WEBPACK_IMPORTED_MODULE_6__["MessageComponent"],
                _directives_msg_bg_directiv__WEBPACK_IMPORTED_MODULE_7__["MsgBgDirectiv"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/directives/msg.bg.directiv.ts":
/*!***********************************************!*\
  !*** ./src/app/directives/msg.bg.directiv.ts ***!
  \***********************************************/
/*! exports provided: MsgBgDirectiv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsgBgDirectiv", function() { return MsgBgDirectiv; });
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

var MsgBgDirectiv = /** @class */ (function () {
    function MsgBgDirectiv(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        el.nativeElement.style.backgroundColor = this.random_bg_color();
    }
    MsgBgDirectiv.prototype.random_bg_color = function () {
        var x = Math.floor(75 + (Math.random() * 200));
        var y = Math.floor(75 + (Math.random() * 200));
        var z = Math.floor(75 + (Math.random() * 200));
        return "rgb(" + x + "," + y + "," + z + ")";
    };
    MsgBgDirectiv = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[rundomBackGround]"
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"]])
    ], MsgBgDirectiv);
    return MsgBgDirectiv;
}());



/***/ }),

/***/ "./src/app/flight/flight.component.css":
/*!*********************************************!*\
  !*** ./src/app/flight/flight.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n    background-image: url('imageSmall.jpg');\r\n    background-repeat: repeat;\r\n    background-size: 100% 100%;  \r\n\r\n    float: none; /* Added */\r\n}\r\n\r\n/* .card p{\r\n    margin-top: 7rem !important;\r\n} */\r\n\r\n.startOnceButton{\r\n    margin-left: -21px !important;\r\n}\r\n\r\n.timer-input{\r\n    margin-top: 6rem ;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmxpZ2h0L2ZsaWdodC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0NBQXFEO0lBQ3JELDBCQUEwQjtJQUMxQiwyQkFBMkI7O0lBRTNCLFlBQVksQ0FBQyxXQUFXO0NBQzNCOztBQUVEOztJQUVJOztBQUNKO0lBQ0ksOEJBQThCO0NBQ2pDOztBQUNEO0lBQ0ksa0JBQWtCO0NBQ3JCIiwiZmlsZSI6InNyYy9hcHAvZmxpZ2h0L2ZsaWdodC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VTbWFsbC5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7ICBcclxuXHJcbiAgICBmbG9hdDogbm9uZTsgLyogQWRkZWQgKi9cclxufVxyXG5cclxuLyogLmNhcmQgcHtcclxuICAgIG1hcmdpbi10b3A6IDdyZW0gIWltcG9ydGFudDtcclxufSAqL1xyXG4uc3RhcnRPbmNlQnV0dG9ue1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yMXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRpbWVyLWlucHV0e1xyXG4gICAgbWFyZ2luLXRvcDogNnJlbSA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/flight/flight.component.html":
/*!**********************************************!*\
  !*** ./src/app/flight/flight.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"alert mt-3\"  role=\"alert\" *ngIf=\"alertMsg\" [ngClass]=\"alertMsg.type\">\r\n        {{alertMsg.content}}\r\n    </div>\r\n  <div class=\"row mt-5\" >\r\n    <div class=\"col-6\">\r\n\r\n      <div class=\"card mt-5 ml-5\" \r\n           style=\"width: 20rem;height: 18rem;\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Fly Generator</h5>\r\n          <p class=\"card-text\">Press start for start generation</p>\r\n            <div class=\"input-group pl-1 pr-3 mb-2 timer-input\">\r\n              <input type=\"number\" \r\n                     class=\"form-control\" \r\n                     placeholder=\"time\" \r\n                     aria-label=\"Time\" \r\n                     aria-describedby=\"button-addon2\"\r\n                     min=\"2\"\r\n                     max=\"10\"\r\n                     value=\"timeInterval\"\r\n                     #timeInput>\r\n              <div class=\"input-group-append\">\r\n                <button class=\"btn btn-outline-secondary\" \r\n                        type=\"button\" \r\n                        (click)=\"setTimer(timeInput.value)\"\r\n                        id=\"button-addon2\">Set Time</button>\r\n            </div>\r\n          </div>                   \r\n       <div class=\"row\">\r\n         <div class=\"col-4\">\r\n              <button type=\"button\" \r\n                  class=\"btn btn-danger\" \r\n                  (click)=\"startFlyGeneration()\">Start</button> \r\n         </div>\r\n         \r\n         <div class=\"col-4\">\r\n          <button type=\"button\" \r\n              class=\"btn btn-warning startOnceButton\" \r\n              (click)=\"startOnce()\">Start Once</button> \r\n         </div>\r\n         <div class=\"col-4\">\r\n           \r\n           <button type=\"button\" \r\n                  class=\"btn btn-dark\" \r\n                  (click)=\"stopFlyGeneration()\">Stop</button>\r\n         </div>\r\n       </div>                                               \r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-6\">\r\n      <app-message class=\"message-block\"></app-message>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/flight/flight.component.ts":
/*!********************************************!*\
  !*** ./src/app/flight/flight.component.ts ***!
  \********************************************/
/*! exports provided: FlightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightComponent", function() { return FlightComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_flight_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/flight.service */ "./src/app/services/flight.service.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/message.service */ "./src/app/services/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FlightComponent = /** @class */ (function () {
    function FlightComponent(flightService, msgService) {
        var _this = this;
        this.flightService = flightService;
        this.msgService = msgService;
        this.timeInterval = 3;
        msgService.alertMsg$.subscribe(function (res) { return _this.alertMsg = res; });
    }
    FlightComponent.prototype.ngOnInit = function () {
    };
    FlightComponent.prototype.startFlyGeneration = function () {
        this.flightService.flyGeneratorStart();
    };
    FlightComponent.prototype.startOnce = function () {
        this.flightService.sendFlight();
    };
    FlightComponent.prototype.stopFlyGeneration = function () {
        this.flightService.flyGeneratorStop();
    };
    FlightComponent.prototype.setTimer = function (time) {
        if (time) {
            this.flightService.changeTimerInterval(time * 1000);
        }
    };
    FlightComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-flight',
            template: __webpack_require__(/*! ./flight.component.html */ "./src/app/flight/flight.component.html"),
            styles: [__webpack_require__(/*! ./flight.component.css */ "./src/app/flight/flight.component.css")]
        }),
        __metadata("design:paramtypes", [_services_flight_service__WEBPACK_IMPORTED_MODULE_1__["FlightService"], _services_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], FlightComponent);
    return FlightComponent;
}());



/***/ }),

/***/ "./src/app/message/message.component.css":
/*!***********************************************!*\
  !*** ./src/app/message/message.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alert{\r\n    padding-bottom: 5px !important;\r\n    display:inline-block;\r\n    margin: 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwrQkFBK0I7SUFDL0IscUJBQXFCO0lBQ3JCLFlBQVk7Q0FDZiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsZXJ0e1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweCAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDVweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/message/message.component.html":
/*!************************************************!*\
  !*** ./src/app/message/message.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"message-container\">\r\n  <li class=\"alert alert-primary\" *ngFor=\"let flight of flights\" role=\"alert\" rundomBackGround>\r\n    <h6 class=\"card-subtitle mb-2\">flight humber: {{flight.id}}</h6>\r\n    <hr>\r\n    <p class=\"m-0\">from: {{flight.from}}</p>\r\n    <p class=\"m-0\">number of passagers: {{flight.numberOfPass}}</p>\r\n    <p class=\"m-0\">speed: {{flight.speed}}</p>\r\n    <p class=\"m-0\">distance to terminal: {{flight.distanceToTerminal}}</p>\r\n    <p class=\"m-0\">fuel: {{flight.fuel}}</p>\r\n  </li>\r\n\r\n</ul>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/message/message.component.ts":
/*!**********************************************!*\
  !*** ./src/app/message/message.component.ts ***!
  \**********************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/message.service */ "./src/app/services/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageComponent = /** @class */ (function () {
    function MessageComponent(messageService) {
        this.messageService = messageService;
        this.flights = [];
    }
    MessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageService.message$.subscribe(function (res) {
            if (_this.flights.length > 2)
                //this.messages.splice(0, 1);
                _this.flights.shift();
            _this.flights.push(res);
        });
    };
    MessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.css */ "./src/app/message/message.component.css")]
        }),
        __metadata("design:paramtypes", [_services_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/models/constants.ts":
/*!*************************************!*\
  !*** ./src/app/models/constants.ts ***!
  \*************************************/
/*! exports provided: CITIES, NAMESOFPILOTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CITIES", function() { return CITIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAMESOFPILOTS", function() { return NAMESOFPILOTS; });
var CITIES = [
    "Jakarta",
    "Rawalpindi",
    "Bandung",
    "Hong Kong",
    "Zunyi",
    "Taichung",
    "Shiraz",
    "Rostov-on-Don",
    "Zhongshan",
    "Tabriz",
    "Medellin",
    "Addis Ababa",
    "Delhi",
    "Bengaluru",
    "Jaipur",
    "Guatemala City",
    "Fuzhou",
    "Abu Dhabi",
    "Lagos",
    "Foshan",
    "Nagpur",
    "Almaty",
    "Karaj",
    "Fukuoka",
    "Nizhny Novgorod",
    "Wuhan",
    "Tainan",
    "Yangon",
    "New York",
    "Monterrey",
    "London",
    "Vienna",
    "Maracaibo",
    "New Taipei City",
    "Ekurhuleni",
    "Tashkent",
    "Fez",
    "Hiroshima",
    "Munich",
    "Oran",
    "Luanda",
    "Harbin",
    "Ho Chi Minh City",
    "Kondopoga"
];
var NAMESOFPILOTS = [
    "Ciera Breitenstein", "Margo Spector", "Kathe Leto", "Josiah Hoopes", "Miranda Shanklin", "Venice Harry", "Shelley Gerardi", "Jerry Musante", "Willy Bechtol", "Chasidy Gillian", "Taisha Sutherland", "Karla Phong", "Julia Swearengin", "Sharan Yoho", "Alita Abel", "Burton Gahan", "Sanford Furrow", "Jacob Wills", "Dionna Alves", "Fred Proudfoot", "Ardath Billington", "Corrinne Spade", "Donetta Butt", "Forrest Dumbleton", "Lovetta Sexson", "Nicholle Hang", "Una Stella", "Melida Moler", "Tressa Kitchin", "Janey Brauer"
];


/***/ }),

/***/ "./src/app/models/flight.ts":
/*!**********************************!*\
  !*** ./src/app/models/flight.ts ***!
  \**********************************/
/*! exports provided: Flight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Flight", function() { return Flight; });
var Flight = /** @class */ (function () {
    function Flight() {
    }
    return Flight;
}());



/***/ }),

/***/ "./src/app/services/flight.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/flight.service.ts ***!
  \********************************************/
/*! exports provided: FlightService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightService", function() { return FlightService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_flight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/flight */ "./src/app/models/flight.ts");
/* harmony import */ var _aspnet_signalr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aspnet/signalr */ "./node_modules/@aspnet/signalr/dist/esm/index.js");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-uuid */ "./node_modules/angular2-uuid/index.js");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_uuid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _models_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/constants */ "./src/app/models/constants.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./message.service */ "./src/app/services/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var FlightService = /** @class */ (function () {
    function FlightService(http, messageService) {
        var _this = this;
        this.http = http;
        this.messageService = messageService;
        this.flightControlUrl = "/api/flight";
        this.time = 3000;
        this.starthubConnection();
        this._hubConnection.onclose(function (err) {
            _this.tryConnect();
        });
        // this.flyGeneratorStart();
    }
    FlightService.prototype.starthubConnection = function () {
        var _this = this;
        this._hubConnection = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_3__["HubConnectionBuilder"]().withUrl('http://localhost:12345/terminal').build();
        this._hubConnection
            .start()
            .then(function () {
            console.log('Connection started!');
            if (_this.connectTimer) {
                clearInterval(_this.connectTimer);
            }
            _this.messageService.alertMsgEmitter('alert-success', 'Connection started!');
        })
            .catch(function (err) {
            console.log('Error while establishing connection :(');
            _this.messageService.alertMsgEmitter('alert-danger', 'Error while establishing connection :(');
        });
    };
    FlightService.prototype.sendFly = function () {
        var fly = this.getRundomFly();
        this.http.post(this.flightControlUrl, fly).subscribe();
    };
    //WebSocket/SignalR
    FlightService.prototype.sendFlight = function () {
        var flight = this.getRundomFly();
        this._hubConnection.invoke("SendFlight", flight).catch(function (err) {
            // alert(err.toString());
            location.reload();
            return console.error(err.toString());
        });
    };
    FlightService.prototype.tryConnect = function () {
        var _this = this;
        this.connectTimer = setInterval(function () {
            _this.messageService.alertMsgEmitter('alert-warning', 'Connection will be restarted');
            _this.starthubConnection();
        }, 3000);
    };
    FlightService.prototype.flyGeneratorStart = function () {
        var _this = this;
        this.interval = setInterval(function () {
            _this.sendFlight();
        }, this.time);
    };
    FlightService.prototype.changeTimerInterval = function (time) {
        this.flyGeneratorStop();
        this.time = time;
        this.flyGeneratorStart();
    };
    FlightService.prototype.flyGeneratorStop = function () {
        if (this.interval) {
            clearInterval(this.interval);
        }
    };
    FlightService.prototype.randomNumber = function (min, max) {
        var result = 0;
        while (result < min || result > max) {
            result = Math.floor(Math.random() * (max + min + 1) + min);
        }
        return result;
    };
    FlightService.prototype.getRundomFly = function () {
        var flight = new _models_flight__WEBPACK_IMPORTED_MODULE_2__["Flight"]();
        flight.id = angular2_uuid__WEBPACK_IMPORTED_MODULE_4__["UUID"].UUID(); //new Date().toString().replace(' GMT+0200 (Israel Standard Time)','').replace(/ /g,'_');
        flight.speed = this.randomNumber(300, 700);
        flight.numberOfPass = this.randomNumber(50, 300);
        flight.fuel = this.randomNumber(20, 100);
        flight.distanceToTerminal = this.randomNumber(350, 400);
        while (!flight.nameOfСhiefPilot) {
            flight.nameOfСhiefPilot = _models_constants__WEBPACK_IMPORTED_MODULE_5__["NAMESOFPILOTS"][this.randomNumber(1, _models_constants__WEBPACK_IMPORTED_MODULE_5__["NAMESOFPILOTS"].length)];
        }
        while (!flight.from) {
            flight.from = _models_constants__WEBPACK_IMPORTED_MODULE_5__["CITIES"][this.randomNumber(1, _models_constants__WEBPACK_IMPORTED_MODULE_5__["CITIES"].length)];
        }
        this.messageService.messageEmitter(flight);
        return flight;
    };
    FlightService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"]])
    ], FlightService);
    return FlightService;
}());



/***/ }),

/***/ "./src/app/services/message.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/message.service.ts ***!
  \*********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
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

var MessageService = /** @class */ (function () {
    function MessageService() {
        this.message$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.alertMsg$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    MessageService.prototype.messageEmitter = function (flight) {
        if (flight)
            this.message$.emit(flight);
    };
    MessageService.prototype.alertMsgEmitter = function (type, content) {
        this.alertMsg$.emit({ type: type, content: content });
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], MessageService);
    return MessageService;
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

module.exports = __webpack_require__(/*! D:\Users\michael\Desktop\Github\FlightTerminalSimulator\fly-generator\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map