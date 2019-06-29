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

module.exports = ".card{\r\n    background-image: url('imageSmall.jpg');\r\n    background-repeat: repeat;\r\n    background-size: 100% 100%;  \r\n /* background-position-y: -45px; */\r\n    float: none; /* Added */\r\n}\r\n\r\n/* .card p{\r\n    margin-top: 7rem !important;\r\n} */\r\n\r\n.startOnceButton{\r\n    margin-left: -21px !important;\r\n}\r\n\r\n.timer-input{\r\n    margin-top: 6rem ;\r\n}\r\n\r\n/* .link{\r\n    position: absolute;\r\n    top: 5.5em;\r\n    z-index: 10;\r\n    right: 2em;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmxpZ2h0L2ZsaWdodC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0NBQXFEO0lBQ3JELDBCQUEwQjtJQUMxQiwyQkFBMkI7Q0FDOUIsbUNBQW1DO0lBQ2hDLFlBQVksQ0FBQyxXQUFXO0NBQzNCOztBQUVEOztJQUVJOztBQUNKO0lBQ0ksOEJBQThCO0NBQ2pDOztBQUNEO0lBQ0ksa0JBQWtCO0NBQ3JCOztBQUNEOzs7OztJQUtJIiwiZmlsZSI6InNyYy9hcHAvZmxpZ2h0L2ZsaWdodC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VTbWFsbC5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7ICBcclxuIC8qIGJhY2tncm91bmQtcG9zaXRpb24teTogLTQ1cHg7ICovXHJcbiAgICBmbG9hdDogbm9uZTsgLyogQWRkZWQgKi9cclxufVxyXG5cclxuLyogLmNhcmQgcHtcclxuICAgIG1hcmdpbi10b3A6IDdyZW0gIWltcG9ydGFudDtcclxufSAqL1xyXG4uc3RhcnRPbmNlQnV0dG9ue1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yMXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRpbWVyLWlucHV0e1xyXG4gICAgbWFyZ2luLXRvcDogNnJlbSA7XHJcbn1cclxuLyogLmxpbmt7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUuNWVtO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICByaWdodDogMmVtO1xyXG59ICovIl19 */"

/***/ }),

/***/ "./src/app/flight/flight.component.html":
/*!**********************************************!*\
  !*** ./src/app/flight/flight.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"container h-100\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <h5 *ngIf=\"alertMsg\" class=\"connection-info text-right mt-3 mb-0 pb-0\"><span class=\"badge badge-pill p-2\" \r\n      [class.badge-success]=\"alertMsg.connectionStatus==='success'\"\r\n      [class.badge-danger]=\"alertMsg.connectionStatus==='danger'\"\r\n      [class.badge-warning]=\"alertMsg.connectionStatus==='warning'\">{{alertMsg.content}}</span></h5>\r\n    </div>\r\n\r\n    <div class=\"col\">\r\n        <h5  class=\"text-left  mt-3 mb-0 pb-0\" style=\"cursor: pointer;\">\r\n          <span class=\"badge badge-info badge-pill p-2\" >\r\n            <a class=\"text-white\"\r\n            href=\"https://flight-terminal-receiver.firebaseapp.com/\" \r\n            role=\"button\"\r\n            target=\"_blank\">Open Terminal Site</a></span>\r\n        </h5>\r\n      </div>\r\n  </div>\r\n     \r\n\r\n  <!-- <div\r\n    class=\"alert mt-3\"\r\n    role=\"alert\"\r\n    *ngIf=\"alertMsg\"\r\n    [ngClass]=\"alertMsg.type\">{{ alertMsg.content }}</div> -->\r\n\r\n  <div class=\"row h-100\">\r\n    <!-- Card -->\r\n    <div class=\"col-sm-6 d-flex align-items-center\">\r\n      <div class=\"card ml-auto mr-auto\" style=\"width: 20rem;\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title text-danger\">Fly Generator</h5>\r\n\r\n           <!-- Flight Info -->\r\n           <div style=\"height: 14em;\">\r\n                <div *ngIf=\"flight\" class=\"alert alert-primary flight-info mt-0 mb-0 d-sm-none d-block\" role=\"alert\" rundomBackGround>\r\n              <h6 class=\"card-subtitle\"><p class=\"mb-0\">flight humber:</p> \r\n                                             <p>{{flight.id}}</p> </h6>\r\n              <hr class=\"mt-0 mb-0\">\r\n              <p class=\"m-0\">from: {{flight.from}}</p>\r\n              <p class=\"m-0\">number of passagers: {{flight.numberOfPass}}</p>\r\n              <p class=\"m-0\">speed: {{flight.speed}}</p>\r\n              <p class=\"m-0\">distance to terminal: {{flight.distanceToTerminal}}</p>\r\n              <p class=\"m-0\">fuel: {{flight.fuel}}</p>\r\n           </div>\r\n           </div>\r\n        \r\n\r\n          <!-- Interval -->\r\n         <div class=\"row\" >\r\n            <div class=\"col text-dark\">\r\n              <h6>set interval</h6> \r\n            </div>\r\n          </div>\r\n          \r\n         <div\r\n         class=\"btn-group btn-group-lg w-100\" \r\n         role=\"group\">\r\n         <button\r\n           type=\"button\"\r\n           class=\"btn btn-primary w-50\"\r\n           (click)=\"setTimeInterval(-1)\">\r\n           <i class=\"fa fa-arrow-circle-down fa-2x\"></i>\r\n         </button>\r\n         <button disabled type=\"button\" class=\"btn btn-dark w-25\" (click)=\"startOnce()\">\r\n           {{timeInterval}}\r\n         </button>\r\n         <button\r\n           type=\"button\"\r\n           class=\"btn btn-primary w-50\"\r\n           (click)=\"setTimeInterval(1)\"><i class=\"fa fa-arrow-circle-up fa-2x\"></i></button>\r\n       </div>\r\n\r\n       <!-- Buttons -->\r\n       <div class=\"row mt-4\">\r\n          <div class=\"col text-dark text-center\">\r\n            <h6>start</h6> \r\n          </div>\r\n          <div class=\"col text-dark text-center\">\r\n              <h6>start once</h6> \r\n            </div>\r\n            <div class=\"col text-dark text-center\">\r\n                <h6>stop</h6> \r\n              </div>\r\n        </div>\r\n\r\n        <!-- Button Div -->\r\n          <div\r\n            class=\"btn-group btn-group-lg ml-auto mr-auto w-100\"\r\n            role=\"group\"\r\n            aria-label=\"Basic example\">\r\n            <button\r\n              type=\"button\"\r\n              class=\"btn btn-success\"\r\n              style=\"width: 33.33%;\"\r\n              (click)=\"startFlyGeneration()\"><i class=\"fa fa-play-circle fa-2x\"></i></button>\r\n\r\n            <button type=\"button\" \r\n                    class=\"btn btn-warning text-center\" \r\n                    (click)=\"startOnce()\"\r\n                    style=\"width: 33.33%;\">\r\n                    <i class=\"fa fa-play-circle fa-2x\"></i>\r\n                  </button>\r\n\r\n            <button\r\n              type=\"button\"\r\n              class=\"btn btn-danger\"\r\n              style=\"width: 33.33%;\"\r\n              (click)=\"stopFlyGeneration()\"><i class=\"fa fa-stop-circle fa-2x\"></i></button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-sm-6 d-flex justify-content-center\">\r\n      <app-message class=\"message-block d-none d-sm-block\"></app-message>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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
        msgService.alertMsg$.subscribe(function (res) {
            _this.alertMsg = res;
        });
    }
    FlightComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.msgService.message$.subscribe(function (res) {
            if (res)
                _this.flight = res;
        });
    };
    FlightComponent.prototype.startFlyGeneration = function () {
        this.msgService.clearMsg();
        this.stopFlyGeneration();
        this.flightService.flyGeneratorStart();
    };
    FlightComponent.prototype.startOnce = function () {
        this.msgService.clearMsg();
        this.stopFlyGeneration();
        this.flightService.sendFlight();
    };
    FlightComponent.prototype.stopFlyGeneration = function () {
        this.flight = null;
        this.flightService.flyGeneratorStop();
    };
    FlightComponent.prototype.setTimer = function (time) {
        if (time) {
            this.flightService.changeTimerInterval(time * 1000);
        }
    };
    FlightComponent.prototype.setTimeInterval = function (data) {
        if (this.timeInterval > 1) {
            this.timeInterval = this.timeInterval + data;
            this.setTimer(this.timeInterval);
        }
    };
    FlightComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-flight',
            template: __webpack_require__(/*! ./flight.component.html */ "./src/app/flight/flight.component.html"),
            styles: [__webpack_require__(/*! ./flight.component.css */ "./src/app/flight/flight.component.css")]
        }),
        __metadata("design:paramtypes", [_services_flight_service__WEBPACK_IMPORTED_MODULE_1__["FlightService"],
            _services_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
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

module.exports = ".alert{\r\n    padding-bottom: 5px !important;\r\n    display:inline-block;\r\n    margin: 5px;\r\n    width: 17em;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n}\r\n.msg-out-fly{\r\n    position: relative;\r\n    -webkit-animation-name: example; /* Safari 4.0 - 8.0 */\r\n    -webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */\r\n    -webkit-animation-name: animation-fly;\r\n            animation-name: animation-fly;\r\n    -webkit-animation-duration: 2s;\r\n            animation-duration: 2s;\r\n}\r\n@-webkit-keyframes animation-fly {\r\n    0%   {left:0px; top:0px;}\r\n    100% { left:100px; top:-100px;}\r\n  }\r\n@keyframes animation-fly {\r\n    0%   {left:0px; top:0px;}\r\n    100% { left:100px; top:-100px;}\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwrQkFBK0I7SUFDL0IscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtDQUNyQjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLGdDQUFnQyxDQUFDLHNCQUFzQjtJQUN2RCwrQkFBK0IsQ0FBQyxzQkFBc0I7SUFDdEQsc0NBQThCO1lBQTlCLDhCQUE4QjtJQUM5QiwrQkFBdUI7WUFBdkIsdUJBQXVCO0NBQzFCO0FBQ0Q7SUFDSSxNQUFNLFNBQVMsQ0FBQyxRQUFRLENBQUM7SUFDekIsT0FBTyxXQUFXLENBQUMsV0FBVyxDQUFDO0dBQ2hDO0FBSEg7SUFDSSxNQUFNLFNBQVMsQ0FBQyxRQUFRLENBQUM7SUFDekIsT0FBTyxXQUFXLENBQUMsV0FBVyxDQUFDO0dBQ2hDIiwiZmlsZSI6InNyYy9hcHAvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxlcnR7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgd2lkdGg6IDE3ZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG4ubXNnLW91dC1mbHl7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBleGFtcGxlOyAvKiBTYWZhcmkgNC4wIC0gOC4wICovXHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogNHM7IC8qIFNhZmFyaSA0LjAgLSA4LjAgKi9cclxuICAgIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRpb24tZmx5O1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcclxufVxyXG5Aa2V5ZnJhbWVzIGFuaW1hdGlvbi1mbHkge1xyXG4gICAgMCUgICB7bGVmdDowcHg7IHRvcDowcHg7fVxyXG4gICAgMTAwJSB7IGxlZnQ6MTAwcHg7IHRvcDotMTAwcHg7fVxyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/message/message.component.html":
/*!************************************************!*\
  !*** ./src/app/message/message.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"message-container d-flex flex-column justify-content-center\">\r\n  <li class=\"alert alert-primary\" *ngFor=\"let flight of flights\" role=\"alert\" rundomBackGround>\r\n    <h6 class=\"card-subtitle mb-2\"><p class=\"mb-0\">flight humber:</p> \r\n                                   <p>{{flight.id}}</p> </h6>\r\n    <hr>\r\n    <p class=\"m-0\">from: {{flight.from}}</p>\r\n    <p class=\"m-0\">number of passagers: {{flight.numberOfPass}}</p>\r\n    <p class=\"m-0\">speed: {{flight.speed}}</p>\r\n    <p class=\"m-0\">distance to terminal: {{flight.distanceToTerminal}}</p>\r\n    <p class=\"m-0\">fuel: {{flight.fuel}}</p>\r\n  </li>\r\n\r\n</ul>\r\n\r\n\r\n"

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
        this.messageService.clearMsg$.subscribe(function (res) {
            if (res)
                _this.flights = [];
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
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ "Content-Type": "application/json" })
};
var FlightService = /** @class */ (function () {
    function FlightService(http, messageService) {
        var _this = this;
        this.http = http;
        this.messageService = messageService;
        this.timeInterval = 3;
        this.connectionStatus$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.flightControlUrl = "/api/flight";
        this.remoteUrl = "http://michaelt-001-site1.btempurl.com/terminal";
        this.localUrl = "http://localhost:12345/terminal";
        this.currentUrl = this.remoteUrl;
        this.time = 3000;
        this.starthubConnection();
        this._hubConnection.onclose(function (err) {
            _this.tryConnect();
        });
        // this.flyGeneratorStart();
    }
    FlightService.prototype.starthubConnection = function () {
        var _this = this;
        this._hubConnection = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_3__["HubConnectionBuilder"]()
            .withUrl(this.remoteUrl)
            .build();
        this._hubConnection
            .start()
            .then(function () {
            console.log("Connection started!");
            if (_this.connectTimer) {
                clearInterval(_this.connectTimer);
            }
            _this.messageService.alertMsgEmitter("success", "Connection started!");
        })
            .catch(function (err) {
            console.error("Error while establishing connection :(");
            _this.messageService.alertMsgEmitter("danger", "Error while establishing connection :(");
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
            //location.reload();
            return console.error(err.toString());
        });
    };
    FlightService.prototype.tryConnect = function () {
        var _this = this;
        this.connectTimer = setInterval(function () {
            _this.messageService.alertMsgEmitter("warning", "Connection will be restarted");
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
            flight.nameOfСhiefPilot =
                _models_constants__WEBPACK_IMPORTED_MODULE_5__["NAMESOFPILOTS"][this.randomNumber(1, _models_constants__WEBPACK_IMPORTED_MODULE_5__["NAMESOFPILOTS"].length)];
        }
        while (!flight.from) {
            flight.from = _models_constants__WEBPACK_IMPORTED_MODULE_5__["CITIES"][this.randomNumber(1, _models_constants__WEBPACK_IMPORTED_MODULE_5__["CITIES"].length)];
        }
        this.messageService.messageEmitter(flight);
        return flight;
    };
    FlightService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
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
        this.clearMsg$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    MessageService.prototype.messageEmitter = function (flight) {
        if (flight)
            this.message$.emit(flight);
    };
    MessageService.prototype.alertMsgEmitter = function (connectionStatus, content) {
        this.alertMsg$.emit({ connectionStatus: connectionStatus, content: content });
    };
    MessageService.prototype.clearMsg = function () {
        this.clearMsg$.emit(true);
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