webpackJsonp([1,4],{

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers__ = __webpack_require__(275);
/* unused harmony export toSubTotal */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var toSubTotal = function (obs$) {
    return obs$.map(function (s) { return s.ticketPrice * s.tickets; });
};
/**
 * Fractal component example.
 */
var AnimalComponent = (function () {
    function AnimalComponent() {
        var _this = this;
        this.getBasePath = function () { return _this.key ?
            [_this.animalType, 'items', _this.key] :
            null; };
        this.addTicket = function () { return ({ type: 'ADD_TICKET' }); };
        this.removeTicket = function () { return ({ type: 'REMOVE_TICKET' }); };
    }
    AnimalComponent.ADD_TICKET = 'ADD_TICKET';
    AnimalComponent.REMOVE_TICKET = 'REMOVE_TICKET';
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AnimalComponent.prototype, "key", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AnimalComponent.prototype, "animalType", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["select"])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"]) === "function" && _a || Object)
    ], AnimalComponent.prototype, "name$", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["select"])('tickets'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"]) === "function" && _b || Object)
    ], AnimalComponent.prototype, "numTickets$", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["select"])('ticketPrice'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"]) === "function" && _c || Object)
    ], AnimalComponent.prototype, "ticketPrice$", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["select$"])(null, toSubTotal),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"]) === "function" && _d || Object)
    ], AnimalComponent.prototype, "subTotal$", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["dispatch"])(),
        __metadata("design:type", Object)
    ], AnimalComponent.prototype, "addTicket", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["dispatch"])(),
        __metadata("design:type", Object)
    ], AnimalComponent.prototype, "removeTicket", void 0);
    AnimalComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["WithSubStore"])({
            basePathMethodName: 'getBasePath',
            localReducer: __WEBPACK_IMPORTED_MODULE_3__reducers__["a" /* animalComponentReducer */],
        }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'zoo-animal',
            template: __webpack_require__(552),
            styles: [__webpack_require__(343)],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
        })
    ], AnimalComponent);
    return AnimalComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=component.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_observable__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_startWith__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service__ = __webpack_require__(155);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimalAPIEpics; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var animalsNotAlreadyFetched = function (animalType, state) { return !(state[animalType] &&
    state[animalType].items &&
    Object.keys(state[animalType].items).length); };
var actionIsForCorrectAnimalType = function (animalType) {
    return function (action) {
        return action.meta.animalType === animalType;
    };
};
var AnimalAPIEpics = (function () {
    function AnimalAPIEpics(service, actions) {
        this.service = service;
        this.actions = actions;
    }
    AnimalAPIEpics.prototype.createEpic = function (animalType) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_observable__["a" /* createEpicMiddleware */])(this.createLoadAnimalEpic(animalType));
    };
    AnimalAPIEpics.prototype.createLoadAnimalEpic = function (animalType) {
        var _this = this;
        return function (action$, store) { return action$
            .ofType(__WEBPACK_IMPORTED_MODULE_7__actions__["a" /* AnimalAPIActions */].LOAD_ANIMALS)
            .filter(function (action) { return actionIsForCorrectAnimalType(animalType)(action); })
            .filter(function () { return animalsNotAlreadyFetched(animalType, store.getState()); })
            .switchMap(function () { return _this.service.getAll(animalType)
            .map(function (data) { return _this.actions.loadSucceeded(animalType, data); })
            .catch(function (response) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"])(_this.actions.loadFailed(animalType, {
            status: '' + response.status,
        })); })
            .startWith(_this.actions.loadStarted(animalType)); }); };
    };
    AnimalAPIEpics = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8__service__["a" /* AnimalAPIService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__service__["a" /* AnimalAPIService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__actions__["a" /* AnimalAPIActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__actions__["a" /* AnimalAPIActions */]) === "function" && _b || Object])
    ], AnimalAPIEpics);
    return AnimalAPIEpics;
    var _a, _b;
}());

//# sourceMappingURL=epics.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimalAPIService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// A fake API on the internets.
var URLS = (_a = {},
    _a[__WEBPACK_IMPORTED_MODULE_4__model__["a" /* ANIMAL_TYPES */].ELEPHANT] = 'https://www.mocky.io/v2/59200c34110000ce1a07b598',
    _a[__WEBPACK_IMPORTED_MODULE_4__model__["a" /* ANIMAL_TYPES */].LION] = 'https://www.mocky.io/v2/5920141a25000023015998f2',
    _a);
var AnimalAPIService = (function () {
    function AnimalAPIService(http) {
        var _this = this;
        this.http = http;
        this.getAll = function (animalType) {
            return _this.http.get(URLS[animalType])
                .map(function (resp) { return resp.json(); })
                .map(function (records) { return records.map(__WEBPACK_IMPORTED_MODULE_4__model__["b" /* fromServer */]); });
        };
    }
    AnimalAPIService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], AnimalAPIService);
    return AnimalAPIService;
    var _a;
}());

var _a;
//# sourceMappingURL=service.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ramda__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ramda___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ramda__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animals_api_actions__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__animals_model__ = __webpack_require__(46);
/* unused harmony export sortAnimals */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElephantPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var sortAnimals = function (animalDictionary$) {
    return animalDictionary$.map(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_ramda__["pipe"])(__WEBPACK_IMPORTED_MODULE_2_ramda__["values"], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_ramda__["sortBy"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_ramda__["prop"])('name'))));
};
var ElephantPageComponent = (function () {
    function ElephantPageComponent(actions) {
        actions.loadAnimals(__WEBPACK_IMPORTED_MODULE_5__animals_model__["a" /* ANIMAL_TYPES */].ELEPHANT);
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["select$"])(['elephant', 'items'], sortAnimals),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"]) === "function" && _a || Object)
    ], ElephantPageComponent.prototype, "animals$", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["select"])(['elephant', 'loading']),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"]) === "function" && _b || Object)
    ], ElephantPageComponent.prototype, "loading$", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["select"])(['elephant', 'error']),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"]) === "function" && _c || Object)
    ], ElephantPageComponent.prototype, "error$", void 0);
    ElephantPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__(557),
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
        }),
        __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__animals_api_actions__["a" /* AnimalAPIActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__animals_api_actions__["a" /* AnimalAPIActions */]) === "function" && _d || Object])
    ], ElephantPageComponent);
    return ElephantPageComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=page.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* unused harmony export charsLeft */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MAX_COMMENT_CHARS = 300;
var charsLeft = function (obs$) {
    return obs$.map(function (comments) { return comments || ''; })
        .map(function (comments) { return MAX_COMMENT_CHARS - comments.length; });
};
var FeedbackFormComponent = (function () {
    function FeedbackFormComponent() {
        this.getMaxCommentChars = function () { return MAX_COMMENT_CHARS; };
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["select$"])(['feedback', 'comments'], charsLeft),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"]) === "function" && _a || Object)
    ], FeedbackFormComponent.prototype, "charsLeft$", void 0);
    FeedbackFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'zoo-feedback-form',
            template: __webpack_require__(558),
            styles: [__webpack_require__(347)],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
        })
    ], FeedbackFormComponent);
    return FeedbackFormComponent;
    var _a;
}());

//# sourceMappingURL=page.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ramda__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ramda___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ramda__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animals_api_actions__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__animals_model__ = __webpack_require__(46);
/* unused harmony export sortAnimals */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LionPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var sortAnimals = function (animalDictionary$) {
    return animalDictionary$.map(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_ramda__["pipe"])(__WEBPACK_IMPORTED_MODULE_3_ramda__["values"], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_ramda__["sortBy"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_ramda__["prop"])('name'))));
};
var LionPageComponent = (function () {
    function LionPageComponent(actions) {
        actions.loadAnimals(__WEBPACK_IMPORTED_MODULE_5__animals_model__["a" /* ANIMAL_TYPES */].LION);
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["select$"])(['lion', 'items'], sortAnimals),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"]) === "function" && _a || Object)
    ], LionPageComponent.prototype, "animals$", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["select"])(['lion', 'loading']),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"]) === "function" && _b || Object)
    ], LionPageComponent.prototype, "loading$", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["select"])(['lion', 'error']),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"]) === "function" && _c || Object)
    ], LionPageComponent.prototype, "error$", void 0);
    LionPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__(559),
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
        }),
        __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__animals_api_actions__["a" /* AnimalAPIActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__animals_api_actions__["a" /* AnimalAPIActions */]) === "function" && _d || Object])
    ], LionPageComponent);
    return LionPageComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=page.js.map

/***/ }),

/***/ 253:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 253;


/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(288);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimalListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnimalListComponent = (function () {
    function AnimalListComponent() {
    }
    // Since we're observing an array of items, we need to set up a 'trackBy'
    // parameter so Angular doesn't tear down and rebuild the list's DOM every
    // time there's an update.
    AnimalListComponent.prototype.getKey = function (_, animal) {
        return animal.id;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AnimalListComponent.prototype, "animalsName", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AnimalListComponent.prototype, "animalType", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"]) === "function" && _a || Object)
    ], AnimalListComponent.prototype, "animals", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"]) === "function" && _b || Object)
    ], AnimalListComponent.prototype, "loading", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"]) === "function" && _c || Object)
    ], AnimalListComponent.prototype, "error", void 0);
    AnimalListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'zoo-animal-list',
            template: __webpack_require__(551),
            styles: [__webpack_require__(342)],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
        })
    ], AnimalListComponent);
    return AnimalListComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=component.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component__ = __webpack_require__(153);
/* unused harmony export ticketsReducer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return animalComponentReducer; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var ticketsReducer = function (state, action) {
    if (state === void 0) { state = 0; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__component__["a" /* AnimalComponent */].ADD_TICKET: return state + 1;
        case __WEBPACK_IMPORTED_MODULE_0__component__["a" /* AnimalComponent */].REMOVE_TICKET: return Math.max(0, state - 1);
    }
    return state;
};
// Basic reducer logic.
var animalComponentReducer = function (state, action) {
    if (state === void 0) { state = {}; }
    return (__assign({}, state, { tickets: ticketsReducer(state.tickets, action) }));
};
//# sourceMappingURL=reducers.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ramda__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ramda___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ramda__);
/* harmony export (immutable) */ __webpack_exports__["a"] = createAnimalAPIReducer;
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var INITIAL_STATE = {
    items: {},
    loading: false,
    error: null,
};
// A higher-order reducer: accepts an animal type and returns a reducer
// that only responds to actions for that particular animal type.
function createAnimalAPIReducer(animalType) {
    return function animalReducer(state, a) {
        if (state === void 0) { state = INITIAL_STATE; }
        var action = a;
        if (!action.meta || action.meta.animalType !== animalType) {
            return state;
        }
        switch (action.type) {
            case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* AnimalAPIActions */].LOAD_STARTED:
                return __assign({}, state, { items: {}, loading: true, error: null });
            case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* AnimalAPIActions */].LOAD_SUCCEEDED:
                return __assign({}, state, { items: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ramda__["indexBy"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ramda__["prop"])('id'), action.payload), loading: false, error: null });
            case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* AnimalAPIActions */].LOAD_FAILED:
                return __assign({}, state, { items: {}, loading: false, error: action.error });
        }
        return state;
    };
}
//# sourceMappingURL=reducer.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Welcome to the Zoo';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'zoo-root',
            template: __webpack_require__(553),
            styles: [__webpack_require__(344)],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=component.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CounterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CounterComponent = (function () {
    function CounterComponent() {
        this.increment = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.decrement = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], CounterComponent.prototype, "count", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], CounterComponent.prototype, "increment", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], CounterComponent.prototype, "decrement", void 0);
    CounterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'zoo-counter',
            template: __webpack_require__(554),
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
        })
    ], CounterComponent);
    return CounterComponent;
}());

//# sourceMappingURL=component.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorWellComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorWellComponent = (function () {
    function ErrorWellComponent() {
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"]) === "function" && _a || Object)
    ], ErrorWellComponent.prototype, "statusCode$", void 0);
    ErrorWellComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'zoo-error-well',
            template: __webpack_require__(555),
            styles: [__webpack_require__(345)],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
        })
    ], ErrorWellComponent);
    return ErrorWellComponent;
    var _a;
}());

//# sourceMappingURL=component.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SpinnerComponent = (function () {
    function SpinnerComponent() {
    }
    SpinnerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'zoo-spinner',
            template: __webpack_require__(556),
            styles: [__webpack_require__(346)],
        })
    ], SpinnerComponent);
    return SpinnerComponent;
}());

//# sourceMappingURL=component.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animals_module__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_module__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_module__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElephantModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ElephantModule = (function () {
    function ElephantModule() {
    }
    ElephantModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__page__["a" /* ElephantPageComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__page__["a" /* ElephantPageComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_3__animals_module__["a" /* AnimalModule */], __WEBPACK_IMPORTED_MODULE_4__core_module__["a" /* CoreModule */], __WEBPACK_IMPORTED_MODULE_5__store_module__["a" /* StoreModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["j" /* CommonModule */]],
        })
    ], ElephantModule);
    return ElephantModule;
}());

//# sourceMappingURL=module.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_redux_form__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_module__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var FeedbackModule = (function () {
    function FeedbackModule() {
    }
    FeedbackModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_4__page__["a" /* FeedbackFormComponent */]],
            providers: [],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["j" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_redux_form__["NgReduxFormModule"],
                __WEBPACK_IMPORTED_MODULE_5__store_module__["a" /* StoreModule */],
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_4__page__["a" /* FeedbackFormComponent */]],
        })
    ], FeedbackModule);
    return FeedbackModule;
}());

//# sourceMappingURL=module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animals_module__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_module__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_module__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LionModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var LionModule = (function () {
    function LionModule() {
    }
    LionModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__page__["a" /* LionPageComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__page__["a" /* LionPageComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_3__animals_module__["a" /* AnimalModule */], __WEBPACK_IMPORTED_MODULE_4__core_module__["a" /* CoreModule */], __WEBPACK_IMPORTED_MODULE_5__store_module__["a" /* StoreModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["j" /* CommonModule */]],
        })
    ], LionModule);
    return LionModule;
}());

//# sourceMappingURL=module.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_redux_store__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_redux_router__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__store_module__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__animals_module__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__elephants_module__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__lions_module__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__feedback_module__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__routes__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__component__ = __webpack_require__(277);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// This app's ngModules





// Top-level app component constructs.


var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_13__component__["a" /* AppComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__routes__["a" /* appRoutes */]),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_redux_store__["NgReduxModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_redux_router__["a" /* NgReduxRouterModule */],
                __WEBPACK_IMPORTED_MODULE_8__animals_module__["a" /* AnimalModule */],
                __WEBPACK_IMPORTED_MODULE_9__elephants_module__["a" /* ElephantModule */],
                __WEBPACK_IMPORTED_MODULE_10__lions_module__["a" /* LionModule */],
                __WEBPACK_IMPORTED_MODULE_11__feedback_module__["a" /* FeedbackModule */],
                __WEBPACK_IMPORTED_MODULE_7__store_module__["a" /* StoreModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_13__component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=module.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__elephants_page__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lions_page__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feedback_page__ = __webpack_require__(157);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });



var appRoutes = [
    { path: '', redirectTo: '/elephants', pathMatch: 'full' },
    { path: 'elephants', component: __WEBPACK_IMPORTED_MODULE_0__elephants_page__["a" /* ElephantPageComponent */] },
    { path: 'lions', component: __WEBPACK_IMPORTED_MODULE_1__lions_page__["a" /* LionPageComponent */] },
    { path: 'feedback', component: __WEBPACK_IMPORTED_MODULE_2__feedback_page__["a" /* FeedbackFormComponent */] },
];
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animals_model__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animals_api_epics__ = __webpack_require__(154);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootEpics; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RootEpics = (function () {
    function RootEpics(animalEpics) {
        this.animalEpics = animalEpics;
    }
    RootEpics.prototype.createEpics = function () {
        return [
            this.animalEpics.createEpic(__WEBPACK_IMPORTED_MODULE_1__animals_model__["a" /* ANIMAL_TYPES */].ELEPHANT),
            this.animalEpics.createEpic(__WEBPACK_IMPORTED_MODULE_1__animals_model__["a" /* ANIMAL_TYPES */].LION),
        ];
    };
    RootEpics = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__animals_api_epics__["a" /* AnimalAPIEpics */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__animals_api_epics__["a" /* AnimalAPIEpics */]) === "function" && _a || Object])
    ], RootEpics);
    return RootEpics;
    var _a;
}());

//# sourceMappingURL=epics.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_form__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_redux_router__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animals_api_reducer__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animals_model__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rootReducer; });





// Define the global store shape by combining our application's
// reducers together into a given structure.
var rootReducer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_redux_form__["composeReducers"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_redux_form__["defaultFormReducer"])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
    elephant: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__animals_api_reducer__["a" /* createAnimalAPIReducer */])(__WEBPACK_IMPORTED_MODULE_4__animals_model__["a" /* ANIMAL_TYPES */].ELEPHANT),
    lion: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__animals_api_reducer__["a" /* createAnimalAPIReducer */])(__WEBPACK_IMPORTED_MODULE_4__animals_model__["a" /* ANIMAL_TYPES */].LION),
    router: __WEBPACK_IMPORTED_MODULE_2__angular_redux_router__["c" /* routerReducer */],
}));
//# sourceMappingURL=reducers.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(30)(false);
// imports


// module
exports.push([module.i, ".header { display: -webkit-box; display: -ms-flexbox; display: flex; }\n.header-cell { -ms-flex-preferred-size: 25%; flex-basis: 25%; font-weight: bold; }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(30)(false);
// imports


// module
exports.push([module.i, ":host { display: -webkit-box; display: -ms-flexbox; display: flex; }\ndiv { -ms-flex-preferred-size: 25%; flex-basis: 25%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(30)(false);
// imports


// module
exports.push([module.i, ".active {\n  background: #EEE;\n  border-radius: 3px;\n  padding: 5px;\n}\n\ncontent {\n  display: block;\n  padding: 10px;\n  border: solid gray 1px;\n  border-radius: 5px;\n  margin-top: 1rem;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(30)(false);
// imports


// module
exports.push([module.i, ":host {\n  background: #FDD;\n  border: solid maroon 1px;\n  border-radius: 3px;\n  color: maroon;\n  display: block;\n  padding: 3px;\n  width: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(30)(false);
// imports


// module
exports.push([module.i, "/* Taken from https://projects.lukehaas.me/css-loaders/ */\n:host,\n:host:before,\n:host:after {\n  border-radius: 50%;\n}\n:host {\n  color: #000000;\n  display: block;\n  font-size: 11px;\n  text-indent: -99999em;\n  margin: 55px auto;\n  position: relative;\n  width: 10em;\n  height: 10em;\n  box-shadow: inset 0 0 0 1em;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n}\n:host:before,\n:host:after {\n  position: absolute;\n  content: '';\n}\n:host:before {\n  width: 5.2em;\n  height: 10.2em;\n  background: #fff;\n  border-radius: 10.2em 0 0 10.2em;\n  top: -0.1em;\n  left: -0.1em;\n  -webkit-transform-origin: 5.2em 5.1em;\n  transform-origin: 5.2em 5.1em;\n  -webkit-animation: load2 2s infinite ease 1.5s;\n  animation: load2 2s infinite ease 1.5s;\n}\n:host:after {\n  width: 5.2em;\n  height: 10.2em;\n  background: #fff;\n  border-radius: 0 10.2em 10.2em 0;\n  top: -0.1em;\n  left: 5.1em;\n  -webkit-transform-origin: 0px 5.1em;\n  transform-origin: 0px 5.1em;\n  -webkit-animation: load2 2s infinite ease;\n  animation: load2 2s infinite ease;\n}\n@-webkit-keyframes load2 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n@keyframes load2 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(30)(false);
// imports


// module
exports.push([module.i, "label {\n  display: block;\n  width: 100%;\n  margin-bottom: 1rem;\n}\n\ninput, textarea {\n  display: block;\n  width: 95%;\n  padding: 5px;\n  border: solid gray 1px;\n  border-radius: 5px;\n}\n\ntextarea {\n  height: 250px;\n}\n\n.footnote {\n  font-style: italic;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimalAPIActions; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


;
var AnimalAPIActions = (function () {
    function AnimalAPIActions() {
        this.loadAnimals = function (animalType) { return ({
            type: AnimalAPIActions_1.LOAD_ANIMALS,
            meta: { animalType: animalType },
            payload: null,
        }); };
        this.loadStarted = function (animalType) { return ({
            type: AnimalAPIActions_1.LOAD_STARTED,
            meta: { animalType: animalType },
            payload: null,
        }); };
        this.loadSucceeded = function (animalType, payload) { return ({
            type: AnimalAPIActions_1.LOAD_SUCCEEDED,
            meta: { animalType: animalType },
            payload: payload,
        }); };
        this.loadFailed = function (animalType, error) { return ({
            type: AnimalAPIActions_1.LOAD_FAILED,
            meta: { animalType: animalType },
            payload: null,
            error: error,
        }); };
    }
    AnimalAPIActions_1 = AnimalAPIActions;
    AnimalAPIActions.LOAD_ANIMALS = 'LOAD_ANIMALS';
    AnimalAPIActions.LOAD_STARTED = 'LOAD_STARTED';
    AnimalAPIActions.LOAD_SUCCEEDED = 'LOAD_SUCCEEDED';
    AnimalAPIActions.LOAD_FAILED = 'LOAD_FAILED';
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["dispatch"])(),
        __metadata("design:type", Object)
    ], AnimalAPIActions.prototype, "loadAnimals", void 0);
    AnimalAPIActions = AnimalAPIActions_1 = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], AnimalAPIActions);
    return AnimalAPIActions;
    var AnimalAPIActions_1;
}());

//# sourceMappingURL=actions.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ANIMAL_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fromServer; });
var ANIMAL_TYPES = {
    LION: 'lion',
    ELEPHANT: 'elephant',
};
var fromServer = function (record) { return ({
    id: record.name.toLowerCase(),
    animalType: record.animalType,
    name: record.name,
    ticketPrice: record.ticketPrice || 0,
    tickets: record.tickets || 0,
}); };
//# sourceMappingURL=model.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_redux_router__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_redux_form__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_logger__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_redux_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reducers__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__epics__ = __webpack_require__(286);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Angular-redux ecosystem stuff.
// @angular-redux/form and @angular-redux/router are optional
// extensions that sync form and route location state between
// our store and Angular.



// Redux ecosystem stuff.



var StoreModule = (function () {
    function StoreModule(store, devTools, ngReduxRouter, rootEpics) {
        this.store = store;
        // Tell Redux about our reducers and epics. If the Redux DevTools
        // chrome extension is available in the browser, tell Redux about
        // it too.
        store.configureStore(__WEBPACK_IMPORTED_MODULE_5__reducers__["a" /* rootReducer */], {}, [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_redux_logger__["createLogger"])()].concat(rootEpics.createEpics()), devTools.isEnabled() ? [devTools.enhancer()] : []);
        // Enable syncing of Angular router state with our Redux store.
        if (ngReduxRouter) {
            ngReduxRouter.initialize();
        }
        // Enable syncing of Angular form state with our Redux store.
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_redux_form__["provideReduxForms"])(store);
    }
    StoreModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["NgReduxModule"], __WEBPACK_IMPORTED_MODULE_2__angular_redux_router__["a" /* NgReduxRouterModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_6__epics__["a" /* RootEpics */]],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["NgRedux"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["NgRedux"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["DevToolsExtension"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["DevToolsExtension"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_redux_router__["b" /* NgReduxRouter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_redux_router__["b" /* NgReduxRouter */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__epics__["a" /* RootEpics */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__epics__["a" /* RootEpics */]) === "function" && _d || Object])
    ], StoreModule);
    return StoreModule;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=module.js.map

/***/ }),

/***/ 551:
/***/ (function(module, exports) {

module.exports = "<h2>We have {{ animalsName }}!</h2>\n\n<zoo-spinner *ngIf=\"loading | async\">\n</zoo-spinner>\n\n<section class=\"header\">\n  <div class=\"header-cell\">Name</div>\n  <div class=\"header-cell\">Ticket Price</div>\n  <div class=\"header-cell\">Tickets</div>\n  <div class=\"header-cell\">Subtotal</div>\n</section>\n<zoo-animal\n  *ngFor=\"let animal of animals | async; trackBy:getKey\"\n  [animalType]=animalType\n  [key]=getKey(null,animal)>\n</zoo-animal>\n\n<zoo-error-well *ngIf=\"error | async\">\n</zoo-error-well>\n"

/***/ }),

/***/ 552:
/***/ (function(module, exports) {

module.exports = "<div>{{ name$ | async }}</div>\n<div>{{ ticketPrice$ | async }}</div>\n<div>\n  <zoo-counter\n    [count]=\"numTickets$ | async\"\n    (increment)=addTicket()\n    (decrement)=removeTicket()>\n  </zoo-counter>\n</div>\n<div>${{ subTotal$ | async }}"

/***/ }),

/***/ 553:
/***/ (function(module, exports) {

module.exports = "<h1>\n  {{title}}\n</h1>\n<nav>\n  <a routerLink=\"/elephants\" routerLinkActive=\"active\">Elephants</a>\n  <a routerLink=\"/lions\" routerLinkActive=\"active\">Lions</a>\n  <a routerLink=\"/feedback\" routerLinkActive=\"active\">Feedback</a>\n</nav>\n\n<content>\n  <router-outlet></router-outlet>\n</content>\n"

/***/ }),

/***/ 554:
/***/ (function(module, exports) {

module.exports = "<button (click)=increment.emit()>+</button>\n{{ count }}\n<button (click)=decrement.emit()>-</button>\n"

/***/ }),

/***/ 555:
/***/ (function(module, exports) {

module.exports = "Error status: {{ statusCode$ | async }}"

/***/ }),

/***/ 556:
/***/ (function(module, exports) {

module.exports = "Loading..."

/***/ }),

/***/ 557:
/***/ (function(module, exports) {

module.exports = "<zoo-animal-list\n  animalsName=\"Elephants\"\n  animalType=\"elephant\"\n  [animals]=\"animals$\"\n  [loading]=\"loading$\"\n  [error]=\"error$\">\n</zoo-animal-list>\n"

/***/ }),

/***/ 558:
/***/ (function(module, exports) {

module.exports = "<form connect=\"feedback\">\n  <h2>Feedback Form</h2>\n\n  <p>\n    Did you enjoy your time at the zoo? Let us know using\n    the form below.\n  <p>\n\n  <label for=\"firstName\">\n    First Name:\n    <input\n      name=\"firstName\"\n      type=\"text\"\n      maxLength=\"25\"\n      ngControl\n      ngModel />\n  </label>\n\n  <label for=\"lastName\">Last Name:\n    <input\n      name=\"lastName\"\n      type=\"text\"\n      maxLength=\"25\"\n      ngControl\n      ngModel />\n  </label>\n  \n  <label for=\"comments\">Comments:\n    <textarea\n      name=\"comments\"\n      [maxLength]=\"getMaxCommentChars()\"\n      ngControl\n      ngModel></textarea>\n    <p>{{ charsLeft$ | async }} characters remaining.\n  </label>\n\n  <button>Send!</button>\n\n  <p class=\"footnote\">\n    (<sup>*</sup>doesn't really send anything - this is just a demo after all.)\n  </p>\n</form>\n"

/***/ }),

/***/ 559:
/***/ (function(module, exports) {

module.exports = "<zoo-animal-list\n  animalsName=\"Lions\"\n  animalType=\"lion\"\n  [animals]=\"animals$\"\n  [loading]=\"loading$\"\n  [error]=\"error$\">\n</zoo-animal-list>\n"

/***/ }),

/***/ 611:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(254);


/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_module__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animal_list_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_actions__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_epics__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_service__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__store_module__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__animal_component__ = __webpack_require__(153);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimalModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AnimalModule = (function () {
    function AnimalModule() {
    }
    AnimalModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__animal_list_component__["a" /* AnimalListComponent */], __WEBPACK_IMPORTED_MODULE_8__animal_component__["a" /* AnimalComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__animal_list_component__["a" /* AnimalListComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2__core_module__["a" /* CoreModule */], __WEBPACK_IMPORTED_MODULE_7__store_module__["a" /* StoreModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["j" /* CommonModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_4__api_actions__["a" /* AnimalAPIActions */], __WEBPACK_IMPORTED_MODULE_5__api_epics__["a" /* AnimalAPIEpics */], __WEBPACK_IMPORTED_MODULE_6__api_service__["a" /* AnimalAPIService */]],
        })
    ], AnimalModule);
    return AnimalModule;
}());

//# sourceMappingURL=module.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__spinner_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__error_well_component__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__counter_component__ = __webpack_require__(278);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CoreModule = (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__spinner_component__["a" /* SpinnerComponent */],
                __WEBPACK_IMPORTED_MODULE_3__error_well_component__["a" /* ErrorWellComponent */],
                __WEBPACK_IMPORTED_MODULE_4__counter_component__["a" /* CounterComponent */],
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["j" /* CommonModule */]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__spinner_component__["a" /* SpinnerComponent */],
                __WEBPACK_IMPORTED_MODULE_3__error_well_component__["a" /* ErrorWellComponent */],
                __WEBPACK_IMPORTED_MODULE_4__counter_component__["a" /* CounterComponent */],
            ],
        })
    ], CoreModule);
    return CoreModule;
}());

//# sourceMappingURL=module.js.map

/***/ })

},[611]);
//# sourceMappingURL=main.bundle.js.map