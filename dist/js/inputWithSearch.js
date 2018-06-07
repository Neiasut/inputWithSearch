/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/classes/Errors/CustomError.js":
/*!**********************************************!*\
  !*** ./src/js/classes/Errors/CustomError.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomError = function (_Error) {
    _inherits(CustomError, _Error);

    function CustomError(message) {
        _classCallCheck(this, CustomError);

        var _this = _possibleConstructorReturn(this, (CustomError.__proto__ || Object.getPrototypeOf(CustomError)).call(this, message));

        _this.name = 'CustomError';
        _this.message = message;
        return _this;
    }

    return CustomError;
}(Error);

exports.CustomError = CustomError;

/***/ }),

/***/ "./src/js/classes/Errors/PropertyError.js":
/*!************************************************!*\
  !*** ./src/js/classes/Errors/PropertyError.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _CustomError2 = __webpack_require__(/*! ./CustomError.js */ "./src/js/classes/Errors/CustomError.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PropertyError = function (_CustomError) {
    _inherits(PropertyError, _CustomError);

    function PropertyError(property) {
        _classCallCheck(this, PropertyError);

        var _this = _possibleConstructorReturn(this, (PropertyError.__proto__ || Object.getPrototypeOf(PropertyError)).call(this, 'Ошибка в свойстве ' + property));

        _this.property = property;
        return _this;
    }

    return PropertyError;
}(_CustomError2.CustomError);

exports.default = PropertyError;

/***/ }),

/***/ "./src/js/classes/EventSave.js":
/*!*************************************!*\
  !*** ./src/js/classes/EventSave.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _PropertyError = __webpack_require__(/*! ./Errors/PropertyError.js */ "./src/js/classes/Errors/PropertyError.js");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Symbol for incapsulated Map with events
 * @type {symbol}
 */
var protectedRecordsEventSave = Symbol('protectedRecordsEventSave');

var EventSave = function () {
    function EventSave() {
        var rootDomElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        _classCallCheck(this, EventSave);

        /**
         *
         * @type {Map}
         */
        this[protectedRecordsEventSave] = new Map();
        if (rootDomElement !== false && rootDomElement instanceof HTMLElement) {
            this.rootDomElement = rootDomElement;
        } else {
            this.rootDomElement = null;
        }
    }

    _createClass(EventSave, [{
        key: 'addRecord',
        value: function addRecord(name, domElement, events, fn) {
            var protectedStatus = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

            if (!this[protectedRecordsEventSave].has(name)) {
                domElement.addEventListener(events, fn);
                this[protectedRecordsEventSave].set(name, {
                    domElement: domElement,
                    events: events,
                    fn: fn,
                    protectedStatus: protectedStatus
                });
            } else {
                throw new _PropertyError.PropertyError(name);
            }
        }
    }, {
        key: 'addCustomRecord',
        value: function addCustomRecord(name, events, fn) {
            if (this.rootDomElement !== null) {
                this.addRecord(name, this.rootDomElement, events, fn);
            }
        }
    }, {
        key: 'getRecordByName',
        value: function getRecordByName(name) {
            return this[protectedRecordsEventSave].get(name);
        }
    }, {
        key: 'addListRecords',
        value: function addListRecords(arrInfo) {
            var _this = this;

            arrInfo.forEach(function (recordInfo) {
                recordInfo[Symbol.iterator] = /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _context.next = 2;
                                    return this.name;

                                case 2:
                                    _context.next = 4;
                                    return this.domElement;

                                case 4:
                                    _context.next = 6;
                                    return this.events;

                                case 6:
                                    _context.next = 8;
                                    return this.fn;

                                case 8:
                                    _context.next = 10;
                                    return this.protectedStatus;

                                case 10:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, this);
                });
                _this.addRecord.apply(_this, _toConsumableArray(recordInfo));
            });
        }
    }, {
        key: 'removeRecord',
        value: function removeRecord(name) {
            var removeProtected = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            var record = this.getRecordByName(name);
            if (removeProtected === true || record.protectedStatus === false) {
                record.domElement.removeEventListener(record.events, record.fn);
                this[protectedRecordsEventSave].delete(name);
            } else {
                throw new _PropertyError.PropertyError(name);
            }
        }
    }, {
        key: 'removeAllRecords',
        value: function removeAllRecords() {
            var _this2 = this;

            this[protectedRecordsEventSave].forEach(function (record, name) {
                _this2.removeRecord(name, true);
            });
        }
    }]);

    return EventSave;
}();

exports.default = EventSave;

/***/ }),

/***/ "./src/js/classes/InputWithSearch.js":
/*!*******************************************!*\
  !*** ./src/js/classes/InputWithSearch.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _InputWithSearchWindow = __webpack_require__(/*! ./InputWithSearchWindow */ "./src/js/classes/InputWithSearchWindow.js");

var _InputWithSearchWindow2 = _interopRequireDefault(_InputWithSearchWindow);

var _InputWithSearchForWindow = __webpack_require__(/*! ./InputWithSearchForWindow */ "./src/js/classes/InputWithSearchForWindow.js");

var _InputWithSearchForWindow2 = _interopRequireDefault(_InputWithSearchForWindow);

var _functions = __webpack_require__(/*! ../functions/functions */ "./src/js/functions/functions.js");

var _functions2 = _interopRequireDefault(_functions);

var _EventSave = __webpack_require__(/*! ./EventSave */ "./src/js/classes/EventSave.js");

var _EventSave2 = _interopRequireDefault(_EventSave);

var _weakMapIWS = __webpack_require__(/*! ../functions/weakMapIWS */ "./src/js/functions/weakMapIWS.js");

var _weakMapIWS2 = _interopRequireDefault(_weakMapIWS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InputWithSearch = function () {
    function InputWithSearch(domElement) {
        var _domElement$classList;

        var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, InputWithSearch);

        this.domElement = domElement;
        this.settings = InputWithSearch.settings;
        this.updateSettings(settings);
        this.clearCustomData();
        this.createCustomContainer();

        this.fireEventAndCallback('inputWithSearch_beforeInit');

        this.waitData = false;
        this.xhr = false;
        this.promiseXhr = false;
        this.savesData(null, this.getValueFromInput());
        this.changeStatus([0]);
        (_domElement$classList = this.domElement.classList).add.apply(_domElement$classList, _toConsumableArray(this.getClassesByKey('input')));

        this.addEventListeners();

        this.lastData = false;
        this.wasFirstLoad = false;

        InputWithSearch.addAttrToDomInput(this.domElement);

        this.fireEventAndCallback('inputWithSearch_afterInit');
    }

    /**
     *
     * @return {EventSave}
     */


    _createClass(InputWithSearch, [{
        key: 'getListeners',
        value: function getListeners() {
            return this.listeners;
        }
    }, {
        key: 'addEventListeners',
        value: function addEventListeners() {
            var _this = this;

            var listeners = this.getListeners();
            var domElement = this.domElement;

            if (typeof listeners !== 'undefined' && listeners instanceof _EventSave2.default) {
                listeners.removeAllRecords();
            }

            listeners = new _EventSave2.default(this.domElement);

            var onEvents = this.settings.onEvents;

            switch (onEvents) {
                case 'input':
                    listeners.addListRecords([{
                        name: 'onEvents',
                        domElement: domElement,
                        events: this.settings.onEvents,
                        fn: function fn() {
                            _this.open();
                        },
                        protectedStatus: true
                    }]);
                    break;
                case 'click':
                    listeners.addListRecords([{
                        name: 'onEvents',
                        domElement: domElement,
                        events: this.settings.onEvents,
                        fn: function fn() {
                            if (_this.checkStatus(0)) {
                                _this.open();
                            } else {
                                _this.close();
                            }
                        },
                        protectedStatus: true
                    }]);
                    break;
                case 'hover':
                    {

                        var timerHover = null;

                        var timerHoverFn = function timerHoverFn() {
                            clearTimeout(timerHover);
                            timerHover = setTimeout(function () {
                                _this.close();
                            }, 50);
                        };

                        listeners.addListRecords([{
                            name: 'openWrapperHover',
                            domElement: domElement,
                            events: 'inputWithSearch_afterOpen',
                            fn: function fn() {
                                clearTimeout(timerHover);
                                var wrapper = _this.inputWithSearchWindow.getElementByKey('wrapper');
                                var listenersWrapper = _this.inputWithSearchWindow.listeners;
                                listenersWrapper.addRecord('mouseLeaveWrapperHover', wrapper, 'mouseleave', timerHoverFn, true);
                                listenersWrapper.addRecord('mouseEnterWrapperHover', wrapper, 'mouseenter', function () {
                                    clearTimeout(timerHover);
                                }, true);
                            },
                            protectedStatus: true
                        }, {
                            name: 'onEvents',
                            domElement: domElement,
                            events: 'mouseenter',
                            fn: function fn() {
                                if (_this.checkStatus(0)) {
                                    _this.open();
                                }
                                if (_this.checkStatus(1)) {
                                    clearTimeout(timerHover);
                                }
                            },
                            protectedStatus: true
                        }, {
                            name: 'mouseLeaveElement',
                            domElement: domElement,
                            events: 'mouseleave',
                            fn: timerHoverFn,
                            protectedStatus: true
                        }]);
                        break;
                    }
                default:
                    console.warn('Параметр onEvents заполнен неверно!');
            }

            this.listeners = listeners;
        }
    }, {
        key: 'removeEventListeners',
        value: function removeEventListeners() {
            this.listeners.removeAllRecords();
        }
    }, {
        key: 'savesData',
        value: function savesData(data, value) {
            this.saveData = {
                data: data,
                date: Date.now(),
                value: value
            };
        }
    }, {
        key: 'getSaveData',
        value: function getSaveData() {
            return this.saveData;
        }
    }, {
        key: 'getValueFromInput',
        value: function getValueFromInput() {
            return this.domElement.value;
        }
    }, {
        key: 'setValueToInput',
        value: function setValueToInput(value) {
            if (typeof this.settings.fns.fnSetValueToInput === 'function') {
                this.settings.fns.fnSetValueToInput.call(null, this.domElement, value);
                return;
            }
            if (checkDomOnInput(this.domElement)) {
                this.domElement.value = value;
                return;
            }
            this.domElement.innerHTML = value;
        }
    }, {
        key: 'updateSettings',
        value: function updateSettings(newSettings) {

            var classes = false;

            if ('classes' in newSettings && _typeof(newSettings['classes']) === 'object') {
                classes = _functions2.default.mergeListArraysWithoutDuplicates(this.settings.classes, newSettings['classes']);
            }

            this.settings = _functions2.default.extend(true, {}, this.settings, newSettings);
            /* Update classes */
            if (classes) {
                this.settings.classes = classes;
            }
            /* end update classes */
        }
    }, {
        key: 'changeStatus',
        value: function changeStatus() {
            var _this2 = this;

            var addStatuses = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var removeStatuses = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

            if (typeof this.status === 'undefined') {
                this.status = new window.Set();
            }
            addStatuses.forEach(function (status) {
                if (status in InputWithSearch.statuses) {
                    _this2.status.add(status);
                }
            });
            removeStatuses.forEach(function (status) {
                if (status in InputWithSearch.statuses) {
                    _this2.status.delete(status);
                }
            });
        }
    }, {
        key: 'checkStatus',
        value: function checkStatus(idStatus) {
            return this.status.has(idStatus);
        }
    }, {
        key: 'fnOnEventFire',
        value: function fnOnEventFire() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;


            this.changeStatus([], [2, 3]);

            var domElementIsInput = checkDomOnInput(this.domElement);

            if (value === false) {
                value = this.domElement.value;
            }

            if (domElementIsInput === false || value.length >= this.settings.lengthStringToOutput) {

                if (this.checkCustomData()) {
                    this.constructList(this.getCustomData(), this.getValueFromInput());
                } else {
                    var needLoad = true;

                    if (this.settings.useCache && this.settings.loadOnlyStart) {
                        needLoad = !this.wasFirstLoad;
                    } else {

                        var validCache = InputWithSearch.validateSaveDataForRequest(this.getSaveData(), value, this.settings.timeLiveSaveData);

                        needLoad = !this.settings.useCache || !validCache;
                    }

                    if (needLoad) {
                        this.loadData();
                    } else {
                        this.constructList(this.saveData.data, this.getValueFromInput());
                    }
                }
            } else {
                this.stopLoadData();
                this.setToMessage('lessSymbols', [this.settings.lengthStringToOutput]);
            }
        }
    }, {
        key: 'stopLoadData',
        value: function stopLoadData() {
            var removeStatus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            clearTimeout(this.waitData);
            if (removeStatus) {
                this.changeStatus([], [2]);
            }
            if (_typeof(this.xhr) === 'object') {
                this.xhr.abort();
            }
        }
    }, {
        key: 'constructList',
        value: function constructList(data, value) {
            var _this3 = this;

            if (typeof this.settings.fns.filterData === 'function') {
                data = data.filter(function (elemData) {
                    return _this3.settings.fns.filterData(elemData, value);
                });
            }

            this.lastData = data;

            if (data.length) {

                if (typeof this.settings.numberOfResultsForView === 'number') {
                    data = data.slice(0, this.settings.numberOfResultsForView + 1);
                }

                this.fireEventAndCallback('inputWithSearch_beforeListAddDom');

                this.inputWithSearchWindow.addListElements(data);

                this.fireEventAndCallback('inputWithSearch_afterListAddDom');

                return;
            }

            this.setToMessage('notFind');
        }
    }, {
        key: 'onLoadData',
        value: function onLoadData(data, value) {

            var dataSort = JSON.parse(data);

            var dataWorking = InputWithSearch.getValidateData(dataSort);

            this.savesData(dataWorking, value);
            this.constructList(dataWorking, this.getValueFromInput());
            if (this.wasFirstLoad === false) {
                this.wasFirstLoad = true;
            }
        }
    }, {
        key: 'loadData',
        value: function loadData() {
            var _this4 = this;

            this.stopLoadData(false);
            this.waitData = setTimeout(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var value, data;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _this4.setToWait();
                                _context.prev = 1;

                                _this4.promiseXhr = _this4.request(_this4.settings.ajaxConfig.url);
                                value = _this4.getValueFromInput();
                                _context.next = 6;
                                return _this4.promiseXhr;

                            case 6:
                                data = _context.sent;

                                _this4.onLoadData(data, value);
                                _context.next = 17;
                                break;

                            case 10:
                                _context.prev = 10;
                                _context.t0 = _context['catch'](1);

                                if (!(_context.t0 === 0)) {
                                    _context.next = 16;
                                    break;
                                }

                                _this4.setToError(new Error('Данные не были получены!'));
                                _context.next = 17;
                                break;

                            case 16:
                                throw _context.t0;

                            case 17:
                                _context.prev = 17;

                                _this4.changeStatus([], [2]);
                                return _context.finish(17);

                            case 20:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this4, [[1, 10, 17, 20]]);
            })), this.settings.delayBeforeSendRequest);
        }
    }, {
        key: 'request',
        value: function request(url) {
            var _this5 = this;

            return new window.Promise(function (resolve, reject) {
                var xhr = _this5.xhr = new window.XMLHttpRequest();
                xhr.onload = function () {
                    resolve(xhr.response);
                };
                xhr.timeout = _this5.settings.ajaxConfig.timeout;
                xhr.onerror = function () {
                    reject(xhr.status);
                };

                xhr.open(_this5.settings.ajaxConfig.type, url + _this5.generateGetParams(), true);

                xhr.send(InputWithSearch.prepareAjaxSendData(_this5.settings.ajaxConfig.data));
            });
        }
    }, {
        key: 'generateGetParams',
        value: function generateGetParams() {
            var fn = this.settings.fns.generateGetParams;
            return typeof fn === 'function' ? '?' + fn(this) : '';
        }
    }, {
        key: 'getClassesByKey',
        value: function getClassesByKey(key) {
            var join = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            var classes = this.settings.classes[key];
            return join ? classes.join(' ') : classes;
        }
    }, {
        key: 'open',
        value: function open() {

            var checkWindow = window.inputWithSearchWindow instanceof _InputWithSearchWindow2.default,
                checkOpen = this.checkStatus(1);

            if (!checkOpen) {
                this.fireEventAndCallback('inputWithSearch_beforeOpen');
                if (checkWindow) {
                    window.inputWithSearchWindow.destructor();
                }
                window.inputWithSearchWindow = this.inputWithSearchWindow = new _InputWithSearchWindow2.default(this.domElement, this.configForInitSearchWindow);
                InputWithSearch.setInputActive(this.domElement, true);
                this.changeStatus([1], [0]);

                this.fireEventAndCallback('inputWithSearch_afterOpen');
            }
            this.fnOnEventFire();
        }
    }, {
        key: 'setActiveByNumbFromList',
        value: function setActiveByNumbFromList(numb) {

            var data = this.getDataFromLastDataByNumb(numb);
            var inputValue = this.getValueFromInput();

            this.setValueToInput(this.settings.fns.dataToInputByClick(data));

            return {
                data: data,
                currentValue: this.getValueFromInput(),
                lastValue: inputValue
            };
        }
    }, {
        key: 'getDataFromLastDataByNumb',
        value: function getDataFromLastDataByNumb(numb) {
            return this.lastData[numb];
        }
    }, {
        key: 'close',
        value: function close() {
            var runEvents = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            var runDestructor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            if (this.checkStatus(1)) {
                if (runEvents) this.fireEventAndCallback('inputWithSearch_beforeClose');
                this.changeStatus([0], [1]);
                try {
                    if (runDestructor) window.inputWithSearchWindow.destructor();
                } finally {
                    window.inputWithSearchWindow = null;
                }
                InputWithSearch.setInputActive(this.domElement, false);
                if (runEvents) this.fireEventAndCallback('inputWithSearch_afterClose');
            }
        }
    }, {
        key: 'setToError',
        value: function setToError(error) {
            this.changeStatus([3]);
            this.fireEventAndCallback('inputWithSearch_onError', [error]);
            this.inputWithSearchWindow.setToError(error.message, error);
        }
    }, {
        key: 'fireEventAndCallback',
        value: function fireEventAndCallback(name) {
            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            if (name in InputWithSearch.getListCallbacksAndEvents()) {

                var caller = this.domElement;
                var inputWithSearch = _extends({
                    object: this
                }, data);

                inputWithSearch[Symbol.iterator] = /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                    var key;
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:
                                    _context2.next = 2;
                                    return this.object;

                                case 2:
                                    _context2.t0 = regeneratorRuntime.keys(this);

                                case 3:
                                    if ((_context2.t1 = _context2.t0()).done) {
                                        _context2.next = 11;
                                        break;
                                    }

                                    key = _context2.t1.value;

                                    if (!this.hasOwnProperty(key)) {
                                        _context2.next = 9;
                                        break;
                                    }

                                    if (!(key !== 'object')) {
                                        _context2.next = 9;
                                        break;
                                    }

                                    _context2.next = 9;
                                    return this[key];

                                case 9:
                                    _context2.next = 3;
                                    break;

                                case 11:
                                case 'end':
                                    return _context2.stop();
                            }
                        }
                    }, _callee2, this);
                });

                var dataToOutput = {
                    inputWithSearch: inputWithSearch
                };

                _functions2.default.callEvent(caller, name, dataToOutput);

                var func = this.settings.callbacks[name];

                if (typeof func === 'function') {
                    func.apply(undefined, _toConsumableArray(inputWithSearch));
                }
            }
        }

        /* sets to */

    }, {
        key: 'setToWait',
        value: function setToWait() {
            if (!this.checkStatus(2)) {
                this.changeStatus([2]);
                this.inputWithSearchWindow.setToWait();
            }
        }
    }, {
        key: 'setToMessage',
        value: function setToMessage(typeMessage) {
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

            var toOutput = [this.getValueFromInput()].concat(_toConsumableArray(params));
            this.inputWithSearchWindow.setToMessage(typeMessage, toOutput);
        }

        /* end sets to */

    }, {
        key: 'destructor',
        value: function destructor() {
            var _domElement$classList2;

            this.close();
            this.removeEventListeners();
            InputWithSearch.setInputActive(this.domElement, false);
            (_domElement$classList2 = this.domElement.classList).remove.apply(_domElement$classList2, _toConsumableArray(this.getClassesByKey('input')));
            _weakMapIWS2.default.getDataWeakMapIWS(_InputWithSearchForWindow2.default.getInstance()).list.removeElement(this.domElement);
        }
    }, {
        key: 'setCustomData',


        /* for not downloaded data */

        value: function setCustomData(data) {
            this.customData = InputWithSearch.getValidateData(data);
        }
    }, {
        key: 'clearCustomData',
        value: function clearCustomData() {
            this.customData = null;
        }
    }, {
        key: 'getCustomData',
        value: function getCustomData() {
            return this.customData;
        }
    }, {
        key: 'checkCustomData',
        value: function checkCustomData() {
            return this.customData !== null;
        }

        /* end for not downloaded data */

        /* custom container */

    }, {
        key: 'createCustomContainer',
        value: function createCustomContainer() {
            this.customContainer = new Map();
        }

        /**
         *
         * @return {Map}
         */

    }, {
        key: 'getCustomContainer',
        value: function getCustomContainer() {
            return this.customContainer;
        }

        /* end custom container */

    }, {
        key: 'configForInitSearchWindow',
        get: function get() {
            var _this6 = this;

            var getClassesFromSettings = function getClassesFromSettings(classes) {
                var classesWindow = _InputWithSearchWindow2.default.classesBase;
                return Object.keys(classes).reduce(function (acc, nameElement) {
                    if (nameElement in classesWindow) {
                        acc[nameElement] = classes[nameElement];
                    }
                    return acc;
                }, {});
            };

            var getNeedConstructors = function getNeedConstructors(constructors) {
                return Object.entries(constructors).reduce(function (object, data) {
                    var _data = _slicedToArray(data, 2),
                        key = _data[0],
                        value = _data[1];

                    if (typeof value === 'function') {
                        object[key] = value;
                    }
                    return object;
                }, {});
            };

            return {
                callbacks: {
                    inputWithSearchWindow_destruction: function inputWithSearchWindow_destruction() {
                        _this6.close(true, false);
                    },
                    inputWithSearchWindow_clickOnElementList: function inputWithSearchWindow_clickOnElementList(objectWindow, domElement) {
                        var numb = parseInt(domElement.getAttribute('data-numb'));
                        var configForEvent = _this6.setActiveByNumbFromList(numb);
                        _this6.fireEventAndCallback('inputWithSearch_onClickOption', configForEvent);
                        _this6.close();
                    },
                    inputWithSearchWindow_changeContent: function inputWithSearchWindow_changeContent() {
                        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                            args[_key] = arguments[_key];
                        }

                        _this6.fireEventAndCallback('inputWithSearch_onChangeWindow', args);
                    }
                },
                classes: getClassesFromSettings(this.settings.classes),
                constructors: getNeedConstructors(this.settings.constructors),
                cssParams: this.settings.cssParamsWindow,
                triangle: this.settings.triangle,
                relativeDomElement: this.domElement,
                baseEventsActive: this.settings.baseWindowEventsActive,
                maxViewElements: this.settings.maxViewElements
            };
        }
    }], [{
        key: 'addAttrToDomInput',
        value: function addAttrToDomInput(input) {
            input.autocomplete = 'off';
        }
    }, {
        key: 'validateSaveDataForRequest',
        value: function validateSaveDataForRequest(saveData, stringRequest, timeLiveSaveData) {

            var toLower = function toLower(value) {
                return value.toLowerCase();
            };

            if (saveData.value === '' || toLower(stringRequest).indexOf(toLower(saveData.value)) === -1) {
                return false;
            }
            return Date.now() - saveData.date < timeLiveSaveData;
        }
    }, {
        key: 'getValidateData',
        value: function getValidateData(data) {
            if (Array.isArray(data)) {
                return data;
            } else {
                if (data instanceof Object) {
                    return Object.values(data);
                } else {
                    throw new Error('Полученные данные не являются JSON-массивом.');
                }
            }
        }
    }, {
        key: 'prepareAjaxSendData',
        value: function prepareAjaxSendData(data) {

            var sendData = data;

            if (typeof sendData === 'function') {
                sendData = sendData();
            }

            if (sendData !== null) {
                sendData = typeof sendData === 'string' ? sendData : Object.keys(sendData).map(function (k) {
                    return encodeURIComponent(k) + '=' + encodeURIComponent(sendData[k]);
                }).join('&');
            }

            return sendData;
        }
    }, {
        key: 'setInputActive',
        value: function setInputActive(input, flag) {
            if (flag) {
                input.classList.add('InputWithSearch_active');
                return;
            }
            input.classList.remove('InputWithSearch_active');
        }
    }, {
        key: 'getBaseClassesByKey',
        value: function getBaseClassesByKey(key) {
            return this.baseClasses[key];
        }
    }, {
        key: 'getListCallbacksAndEvents',
        value: function getListCallbacksAndEvents() {
            return {
                'inputWithSearch_beforeInit': false,
                'inputWithSearch_afterInit': false,
                'inputWithSearch_beforeDestruction': false,
                'inputWithSearch_onClickOption': false,
                'inputWithSearch_beforeListAddDom': false,
                'inputWithSearch_afterListAddDom': false,
                'inputWithSearch_beforeOpen': false,
                'inputWithSearch_afterOpen': false,
                'inputWithSearch_beforeClose': false,
                'inputWithSearch_afterClose': false,
                'inputWithSearch_onError': false,
                'inputWithSearch_onChangeWindow': false
            };
        }
    }, {
        key: 'statuses',
        get: function get() {
            return {
                0: 'close',
                1: 'open',
                2: 'waiting data',
                3: 'error'
            };
        }
    }, {
        key: 'baseClasses',
        get: function get() {
            return {
                input: ['InputWithSearch'],
                bodyOpen: ['InputWithSearchOpen']
            };
        }
    }, {
        key: 'htmlElementsClasses',
        get: function get() {

            var objectNotChangeable = {
                configurable: true,
                writable: false
            };

            var notChangeableKeys = ['input', 'bodyOpen'];

            var generateObjectForChange = function generateObjectForChange(keys, object) {
                return keys.reduce(function (acc, current) {
                    acc[current] = object;
                    return acc;
                }, {});
            };

            var voidClassWindowClasses = Object.keys(_InputWithSearchWindow2.default.classesBase).reduce(function (acc, current) {
                acc[current] = [];
                return acc;
            }, {});

            var object = _functions2.default.extend(this.baseClasses, voidClassWindowClasses);

            Object.defineProperties(object, generateObjectForChange(notChangeableKeys, objectNotChangeable));

            return object;
        }
    }, {
        key: 'settings',
        get: function get() {
            return {
                onEvents: 'input',
                delayBeforeSendRequest: 300,
                ajaxConfig: {
                    url: 'http://headers.jsontest.com/',
                    type: 'GET',
                    timeout: 10000,
                    data: null
                },
                callbacks: this.getListCallbacksAndEvents(),
                constructors: {
                    element: false,
                    error: false,
                    lessSymbols: false,
                    notFind: false
                },
                fns: {
                    /**
                     *
                     * @param data
                     * @return String
                     */
                    dataToInputByClick: function dataToInputByClick(data) {
                        return data;
                    },
                    fnSetValueToInput: false,
                    filterData: false,
                    generateGetParams: false
                },
                useCache: false,
                loadOnlyStart: false,
                maxViewElements: 50,
                lengthStringToOutput: 4,
                numberOfResultsForView: false,
                timeLiveSaveData: 60 * 60 * 1000,
                classes: this.htmlElementsClasses,
                data: false,
                cssParamsWindow: _InputWithSearchWindow2.default.defaultCssParams,
                triangle: false,
                baseWindowEventsActive: {}
            };
        }
    }]);

    return InputWithSearch;
}();

var checkDomOnInput = function checkDomOnInput(domElement) {
    return domElement.tagName === 'INPUT';
};

exports.default = InputWithSearch;

/***/ }),

/***/ "./src/js/classes/InputWithSearchForWindow.js":
/*!****************************************************!*\
  !*** ./src/js/classes/InputWithSearchForWindow.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ListInputWithSearch = __webpack_require__(/*! ./ListInputWithSearch */ "./src/js/classes/ListInputWithSearch.js");

var _ListInputWithSearch2 = _interopRequireDefault(_ListInputWithSearch);

var _InputWithSearch = __webpack_require__(/*! ./InputWithSearch */ "./src/js/classes/InputWithSearch.js");

var _InputWithSearch2 = _interopRequireDefault(_InputWithSearch);

var _PropertyError = __webpack_require__(/*! ./Errors/PropertyError */ "./src/js/classes/Errors/PropertyError.js");

var _PropertyError2 = _interopRequireDefault(_PropertyError);

var _functions = __webpack_require__(/*! ../functions/functions */ "./src/js/functions/functions.js");

var _functions2 = _interopRequireDefault(_functions);

var _weakMapIWS = __webpack_require__(/*! ../functions/weakMapIWS */ "./src/js/functions/weakMapIWS.js");

var _weakMapIWS2 = _interopRequireDefault(_weakMapIWS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InputWithSearchForWindow = function () {
    function InputWithSearchForWindow() {
        _classCallCheck(this, InputWithSearchForWindow);

        if (InputWithSearchForWindow.hasOwnProperty('singleton')) return InputWithSearchForWindow.singleton;

        Object.defineProperty(InputWithSearchForWindow, 'singleton', {
            value: this,
            enumerable: false,
            writable: false,
            configurable: false
        });

        /**
         *
         * @type {protectedFieldsIWS}
         */
        var protectedFields = {
            list: new _ListInputWithSearch2.default(),
            themes: new Map()
        };

        _weakMapIWS2.default.setDataWeakMapIWS(this, protectedFields);
    }

    /**
     * Get example class InputWithsSearch from store
     * @param {HTMLElement|string} domElement
     * @param {object} objectConfig
     * @param {string|string[]} themes
     * @returns {InputWithSearch}
     */


    _createClass(InputWithSearchForWindow, [{
        key: 'getElement',
        value: function getElement(domElement) {
            var _this = this;

            var objectConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var themes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';


            var checkIdFn = function checkIdFn(someData) {
                if (typeof someData === 'string') {
                    return checkHTMLfn(document.getElementById(someData));
                }
                return false;
            };

            var checkHTMLfn = function checkHTMLfn(someData) {
                return someData instanceof HTMLElement;
            };

            var getElemById = function getElemById(stringId) {
                return checkIdFn(stringId) ? document.getElementById(stringId) : false;
            };

            var getListAvailableThemeConfig = function getListAvailableThemeConfig() {

                var retObject = {};

                if (themes !== '') {
                    if (!Array.isArray(themes)) {
                        themes = [themes];
                    }
                    var themesList = _weakMapIWS2.default.getDataWeakMapIWS(_this).themes;

                    themes.reduce(function (acc, themeName) {
                        if (themesList.has(themeName)) {
                            acc[themeName] = themesList.get(themeName);
                        }
                        return acc;
                    }, retObject);
                }
                return retObject;
            };

            var element = checkHTMLfn(domElement) ? domElement : getElemById(domElement);

            if (element !== false) {

                var list = _weakMapIWS2.default.getDataWeakMapIWS(this).list;

                if (!list.hasElement(element)) {
                    var availableThemeConfigs = Object.values(getListAvailableThemeConfig());
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {
                        for (var _iterator = availableThemeConfigs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var objectTheme = _step.value;

                            var objectData = objectTheme.objectData;
                            if (Object.keys(objectData).length) {
                                objectConfig = _functions2.default.extend(true, {}, objectData, objectConfig);
                            }
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }

                    var exemplar = new _InputWithSearch2.default(element, objectConfig);
                    list.addElement(element, exemplar);
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;

                    try {
                        for (var _iterator2 = availableThemeConfigs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                            var _objectTheme = _step2.value;

                            var fn = _objectTheme.fnRunOnStart;
                            if (typeof fn === 'function') {
                                fn.call(null, exemplar);
                            }
                        }
                    } catch (err) {
                        _didIteratorError2 = true;
                        _iteratorError2 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                _iterator2.return();
                            }
                        } finally {
                            if (_didIteratorError2) {
                                throw _iteratorError2;
                            }
                        }
                    }
                }

                return list.getElement(element);
            }

            throw new Error('\u041D\u0435\u0442 \u0432\u0430\u043B\u0438\u0434\u043D\u043E\u0433\u043E DOM-\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u0434\u043B\u044F \u0432\u044B\u0434\u0430\u0447\u0438 ' + domElement);
        }

        /**
         * Add theme for use in objects
         * @param {string} name
         * @param {object} objectData
         * @param {function(InputWithSearch)} fnRunOnStart
         */

    }, {
        key: 'addTheme',
        value: function addTheme(name, objectData, fnRunOnStart) {
            var themes = _weakMapIWS2.default.getDataWeakMapIWS(this).themes;
            if (!themes.has(name)) {
                themes.set(name, {
                    objectData: objectData,
                    fnRunOnStart: fnRunOnStart
                });
            } else {
                throw new _PropertyError2.default(name);
            }
        }

        /**
         * @return {InputWithSearchForWindow}
         */

    }], [{
        key: 'getInstance',
        value: function getInstance() {
            return this.singleton;
        }
    }]);

    return InputWithSearchForWindow;
}();

exports.default = InputWithSearchForWindow;

/***/ }),

/***/ "./src/js/classes/InputWithSearchWindow.js":
/*!*************************************************!*\
  !*** ./src/js/classes/InputWithSearchWindow.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EventSave = __webpack_require__(/*! ./EventSave */ "./src/js/classes/EventSave.js");

var _EventSave2 = _interopRequireDefault(_EventSave);

var _functions = __webpack_require__(/*! ../functions/functions */ "./src/js/functions/functions.js");

var _functions2 = _interopRequireDefault(_functions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InputWithSearchWindow = function () {
    function InputWithSearchWindow(dependElement, settings) {
        _classCallCheck(this, InputWithSearchWindow);

        this.settings = InputWithSearchWindow.defaultSettings;
        this.updateSettings(settings);

        this.addToDomWindow();
        this.addElementsToConfig();
        this.addListeners();
        this.dependElement = dependElement;
        this.setBlockHoverSelected();

        this.setSelectedNumb();
        this.clearDataListSave();

        this.reSetPosition();
    }

    _createClass(InputWithSearchWindow, [{
        key: 'addToDomWindow',
        value: function addToDomWindow() {
            document.body.appendChild(this.constructorDOM());
        }
    }, {
        key: 'constructorDOM',
        value: function constructorDOM() {
            var _wrapper$classList;

            var content = this.constructorTriangle() + ('\n                <div class="' + this.getClassesByKey('wrapperSub', true) + '">\n                    <div class="' + this.getClassesByKey('wrapperInner', true) + '">\n                        <div class="' + this.getClassesByKey('wrapperList', true) + '"></div>\n                    </div>\n                </div>\n            ');
            var wrapper = document.createElement('div');
            (_wrapper$classList = wrapper.classList).add.apply(_wrapper$classList, _toConsumableArray(this.getClassesByKey('wrapper')));
            wrapper.innerHTML = content;

            return wrapper;
        }
    }, {
        key: 'constructorTriangle',
        value: function constructorTriangle() {
            var triangle = this.settings.triangle;

            if (triangle) {
                return '\n                <div class="' + this.getClassesByKey('wrapperTriangle', true) + '"></div>\n            ';
            }
            return '';
        }
    }, {
        key: 'addElementsToConfig',
        value: function addElementsToConfig() {
            this.elements = {};
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = Object.keys(InputWithSearchWindow.classesBase)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var nameElement = _step.value;

                    this.addElementToConfig(nameElement);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            this.addMutationObserver();
        }

        /* mutation observer on change content in list */

    }, {
        key: 'addMutationObserver',
        value: function addMutationObserver() {
            var _this = this;

            var observer = new MutationObserver(function (mutations) {
                _this.fireEventAndCallback('inputWithSearchWindow_changeContent', { mutations: mutations });
            });

            var config = { childList: true };

            observer.observe(this.getElementByKey('wrapperList'), config);

            this.observerList = observer;
        }
    }, {
        key: 'removeMutationObserver',
        value: function removeMutationObserver() {
            this.observerList.disconnect();
        }

        /* end mutation observer on change content in list */

    }, {
        key: 'addElementToConfig',
        value: function addElementToConfig(nameElement) {
            var classes = InputWithSearchWindow.classesBase[nameElement][0];
            this.elements[nameElement] = document.querySelector('.' + classes);
        }
    }, {
        key: 'getElementByKey',
        value: function getElementByKey(key) {
            return this.elements[key];
        }
    }, {
        key: 'addInfoToList',
        value: function addInfoToList(htmlToList) {
            var plus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (plus) {
                this.getElementByKey('wrapperList').innerHTML = this.getElementByKey('wrapperList').innerHTML + htmlToList;
                return;
            }
            this.getElementByKey('wrapperList').innerHTML = htmlToList;
        }
    }, {
        key: 'destructor',
        value: function destructor() {
            this.fireEventAndCallback('inputWithSearchWindow_destruction');
            this.removeListeners();
            this.removeMutationObserver();
            this.destructorDOM();
        }
    }, {
        key: 'fireEventAndCallback',
        value: function fireEventAndCallback(name) {
            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            if (name in InputWithSearchWindow.listCallbacksAndEvents) {
                var caller = this.elements.wrapper;
                var dataToOutput = {
                    inputWithSearchWindow: {
                        object: this,
                        data: data
                    }
                };
                _functions2.default.callEvent(caller, name, {
                    inputWithSearchWindow: this
                });
                var func = this.settings.callbacks[name];
                if (typeof func === 'function') {
                    func.apply(undefined, _toConsumableArray(Object.values(dataToOutput.inputWithSearchWindow)));
                }
            }
        }
    }, {
        key: 'destructorDOM',
        value: function destructorDOM() {
            var element = this.getElementByKey('wrapper');
            element.parentNode.removeChild(element);
        }
    }, {
        key: 'addListeners',
        value: function addListeners() {
            var _this2 = this;

            var setTimeoutOnBlockSelected = function setTimeoutOnBlockSelected(timer, winSh) {
                var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;

                clearTimeout(timer);
                winSh.setBlockHoverSelected(true);
                return setTimeout(function () {
                    winSh.setBlockHoverSelected(false);
                }, time);
            };

            this.timerWaitToBlockHoverSelected = false;

            this.listeners = new _EventSave2.default();
            var wrapper = this.elements.wrapper;
            var elemListClass = InputWithSearchWindow.getClassesBaseByKey('elementList')[0];

            var baseEventsActive = this.settings.baseEventsActive;
            var eventsArr = [{
                name: 'clickElement',
                domElement: wrapper,
                events: 'click',
                fn: function fn(event) {
                    return _functions2.default.delegateFn(event, elemListClass, function (e, elem) {
                        _this2.fireEventAndCallback('inputWithSearchWindow_clickOnElementList', elem);
                    });
                },
                protectedStatus: true
            }, {
                name: 'resize',
                domElement: window,
                events: 'resize',
                fn: function fn() {
                    _this2.reSetPosition();
                },
                protectedStatus: true
            }, {
                name: 'clickOuter',
                domElement: document,
                events: 'click',
                fn: function fn(event) {
                    if (event.target.closest('.' + _this2.getClassesByKey('wrapper')) || _functions2.default.hasClass(event.target, 'InputWithSearch')) {
                        return;
                    }
                    _this2.destructor();
                },
                protectedStatus: true
            }, {
                name: 'mouseEnterElement',
                domElement: wrapper,
                events: 'mouseover',
                fn: function fn(e) {
                    return _functions2.default.delegateFn(e, elemListClass, function (e, elem) {
                        if (!_this2.checkBlockHoverSelected()) {
                            _this2.setElemListActive(elem);
                        }
                    });
                },
                protectedStatus: true
            }, {
                name: 'interceptionEvents',
                domElement: document,
                events: 'keydown',
                fn: function fn(event) {

                    var windowSh = _this2;
                    var relativeClass = window.inputWithSearch.getElement(_this2.settings.relativeDomElement);

                    if (relativeClass.checkStatus(1)) {

                        var down = event.keyCode === 40;
                        var up = event.keyCode === 38;
                        var enter = event.keyCode === 13;

                        if ((up || down) && windowSh.checkDataSave()) {
                            event.preventDefault();
                            _this2.timerWaitToBlockHoverSelected = setTimeoutOnBlockSelected(_this2.timerWaitToBlockHoverSelected, windowSh);
                            if (down) {
                                windowSh.setElemListActiveByDirection();
                            }
                            if (up) {
                                windowSh.setElemListActiveByDirection(false);
                            }
                        }

                        if (enter) {
                            if (windowSh.getSelectedNumb() !== -1) {
                                relativeClass.setActiveByNumbFromList(windowSh.getSelectedNumb());
                            }
                            relativeClass.close();
                        }
                    }
                },
                protectedStatus: true
            }];

            eventsArr.forEach(function (info) {
                var arrInfo = Object.values(info);
                var name = arrInfo[0];
                if (!(name in InputWithSearchWindow.baseEventsActive) || baseEventsActive[name] === true) {
                    var _listeners;

                    (_listeners = _this2.listeners).addRecord.apply(_listeners, _toConsumableArray(arrInfo));
                }
            });
        }
    }, {
        key: 'setElemListActiveByNumb',
        value: function setElemListActiveByNumb(numb) {
            if (this.checkDataSave()) {
                if (numb < this.getDataFromSave().length) {
                    if (numb < 0) {
                        this.unSelectedElements();
                    } else {
                        var classes = this.getClassesByKey('elementList')[0];
                        var domElement = this.elements.wrapper.querySelector('.' + classes + '[data-numb="' + numb + '"]');
                        if (domElement !== null) {
                            this.setElemListActive(domElement, true, numb);
                        }
                    }
                }
            }
        }
    }, {
        key: 'setElemListActiveByDirection',
        value: function setElemListActiveByDirection() {
            var down = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            this.setElemListActiveByNumb(this.getSelectedNumb() + (down ? 1 : -1));
        }
    }, {
        key: 'unSelectedElements',
        value: function unSelectedElements() {
            this.setSelectedNumb();
            var classes = InputWithSearchWindow.getClassesBaseByKey('elementListSelected')[0];
            this.elements.wrapper.querySelectorAll('.' + classes).forEach(function (element) {
                element.classList.remove(classes);
            });
        }
    }, {
        key: 'setElemListActive',
        value: function setElemListActive(domListElement) {
            var withScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var numbElement = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            var numb = typeof numbElement === 'number' ? numbElement : parseInt(domListElement.getAttribute('data-numb'));
            var classes = InputWithSearchWindow.getClassesBaseByKey('elementListSelected')[0];

            if (numb !== this.selectedNumb) {

                this.unSelectedElements();
                this.setSelectedNumb(numb);

                if (withScroll) {
                    this.elements.wrapperInner.scrollTop = domListElement.offsetTop;
                }

                domListElement.classList.add(classes);
            }
        }
    }, {
        key: 'setBlockHoverSelected',
        value: function setBlockHoverSelected() {
            var set = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            this.blockHoverSelected = set;
        }
    }, {
        key: 'checkBlockHoverSelected',
        value: function checkBlockHoverSelected() {
            return this.blockHoverSelected;
        }
    }, {
        key: 'removeListeners',
        value: function removeListeners() {
            this.listeners.removeAllRecords();
        }
    }, {
        key: 'updateSettings',
        value: function updateSettings(newSettings) {

            var classes = false;

            if ('classes' in newSettings) {
                classes = _functions2.default.mergeListArraysWithoutDuplicates(this.settings.classes, newSettings['classes']);
            }

            this.settings = _functions2.default.extend(true, {}, this.settings, newSettings);

            if (classes) {
                this.settings.classes = classes;
            }
        }
    }, {
        key: 'getClassesByKey',
        value: function getClassesByKey(key) {
            var join = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            var classes = this.settings.classes[key];
            return join ? classes.join(' ') : classes;
        }
    }, {
        key: 'reSetPosition',
        value: function reSetPosition() {

            var elem_character = this.dependElement.getBoundingClientRect(),
                scroll = window.pageYOffset || document.documentElement.scrollTop,
                style = this.elements.wrapper.style;

            var cssParams = this.settings.cssParams;
            var width = elem_character.width;
            if (width < cssParams.minWidth) {
                width = cssParams.minWidth;
            }
            if (width > cssParams.maxWidth) {
                width = cssParams.maxWidth;
            }

            var winWidth = window.innerWidth;

            var _cssParams$margin = _slicedToArray(cssParams.margin, 4),
                mTop = _cssParams$margin[0],
                mRight = _cssParams$margin[1],
                mBot = _cssParams$margin[2],
                mLeft = _cssParams$margin[3];

            var left = elem_character.left + (elem_character.width - width) / 2;

            if (left < mLeft) {
                left = mLeft;
            }
            if (winWidth - (left + width) < mRight) {
                left = winWidth - width - mRight;
            }

            style.top = scroll + elem_character.bottom + 'px';
            style.left = Math.ceil(left) + 'px';
            style.width = width + 'px';
            style.position = 'absolute';
            if (mTop > 0) {
                style.marginTop = mTop + 'px';
            }
            if (mBot > 0) {
                style.marginBottom = mBot + 'px';
            }

            var triangle = this.getElementByKey('wrapperTriangle');
            if (triangle !== null) {
                var leftTriangle = elem_character.left - left + elem_character.width / 2 - triangle.offsetWidth / 2;
                triangle.style.left = Math.ceil(leftTriangle) + 'px';
            }
        }
    }, {
        key: 'addDataListSave',
        value: function addDataListSave(data) {
            this.dataList = data;
            this.dataListHaveData = true;
        }
    }, {
        key: 'checkDataSave',
        value: function checkDataSave() {
            return this.dataListHaveData;
        }
    }, {
        key: 'getDataFromSave',
        value: function getDataFromSave() {
            return this.dataList;
        }
    }, {
        key: 'clearDataListSave',
        value: function clearDataListSave() {
            this.dataList = [];
            this.dataListHaveData = false;
        }
    }, {
        key: 'setSelectedNumb',
        value: function setSelectedNumb() {
            var numb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;

            this.selectedNumb = numb;
        }
    }, {
        key: 'getSelectedNumb',
        value: function getSelectedNumb() {
            return this.selectedNumb;
        }
    }, {
        key: 'addListElements',
        value: function addListElements(dataList, value) {
            var _this3 = this;

            var filterData = function filterData(arr, maxLength) {
                return arr.length > maxLength ? arr.slice(0, maxLength) : arr;
            };

            this.addInfoToList('');
            this.addDataListSave(dataList);

            var viewElements = this.settings.maxViewElements < dataList.length ? this.settings.maxViewElements : dataList.length;

            filterData(dataList, viewElements).forEach(function (dataElement, numb) {
                _this3.addInfoToList(InputWithSearchWindow.constructElement(dataElement, value, numb, _this3.settings.constructors['element'], _this3.getClassesByKey('elementList', true)), true);
            });
        }
    }, {
        key: 'setToMessage',
        value: function setToMessage(typeMessage, params) {
            this.clearDataListSave();
            this.addInfoToList(InputWithSearchWindow.constructMessage(typeMessage, params, this.settings.constructors[typeMessage], this.getClassesByKey('message')));
        }
    }, {
        key: 'setToError',
        value: function setToError() {
            this.clearDataListSave();

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            this.addInfoToList(InputWithSearchWindow.constructMessageError.apply(InputWithSearchWindow, args.concat([this.getClassesByKey('error'), this.settings.constructors['error']])));
        }
    }, {
        key: 'setToWait',
        value: function setToWait() {
            this.clearDataListSave();
            this.addInfoToList(InputWithSearchWindow.constructWaitThrobber());
        }
    }], [{
        key: 'getClassesBaseByKey',
        value: function getClassesBaseByKey(key) {
            return this.classesBase[key];
        }
    }, {
        key: 'constructElement',
        value: function constructElement(data, value, numb, fn, classes) {
            return '\n                <div class="' + classes + '" data-numb="' + numb + '">\n                    ' + fn(data, value, _functions2.default.highlightMatchesToString) + '\n                </div>\n            ';
        }
    }, {
        key: 'constructMessage',
        value: function constructMessage(typeMessage, params, fn, classes) {
            return '\n                <div class="' + classes + '">\n                    ' + fn.apply(undefined, _toConsumableArray(params)) + '\n                </div>\n            ';
        }
    }, {
        key: 'constructMessageError',
        value: function constructMessageError(textError, errorCode, classes, fn) {
            return '\n                <div class="' + classes + '">\n                    ' + fn(textError, errorCode) + '\n                </div>\n            ';
        }
    }, {
        key: 'constructWaitThrobber',
        value: function constructWaitThrobber() {
            return '\n            <div class="InputWithSearchWindow-Load">\n                <div class="InputWithSearchLoader">\n                    <div class="InputWithSearchLoader-Loader"></div>\n                </div>\n            </div>\n            ';
        }
    }, {
        key: 'classesBase',
        get: function get() {
            return {
                wrapper: ['InputWithSearchWindow'],
                wrapperSub: ['InputWithSearchWindow-Sub'],
                wrapperInner: ['InputWithSearchWindow-Inner'],
                wrapperList: ['InputWithSearchWindow-List'],
                wrapperTriangle: ['InputWithSearchWindow-Triangle'],
                elementList: ['InputWithSearchWindow-Element'],
                elementListSelected: ['InputWithSearchWindow-Element_selected'],
                message: ['InputWithSearchWindow-Message'],
                error: ['InputWithSearchWindow-Error']
            };
        }
    }, {
        key: 'listCallbacksAndEvents',
        get: function get() {
            return {
                'inputWithSearchWindow_clickOnElementList': false,
                'inputWithSearchWindow_destruction': false,
                'inputWithSearchWindow_changeContent': false
            };
        }
    }, {
        key: 'defaultSettings',
        get: function get() {
            return {
                classes: this.classesBase,
                constructors: {
                    element: function element(data, value, fn) {
                        return fn(data + ' c \u0434\u0430\u043D\u043D\u044B\u043C\u0438 ' + value);
                    },
                    error: function error(errorText) {
                        return errorText;
                    },
                    lessSymbols: function lessSymbols(value, needSymbolsLength) {
                        return '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 ' + needSymbolsLength + ' \u0438\u043B\u0438 \u0431\u043E\u043B\u0435\u0435 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432.';
                    },
                    notFind: function notFind(value) {
                        return '\u041F\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443 ' + value + ' \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0431\u044B\u043B\u043E \u043D\u0430\u0439\u0434\u0435\u043D\u043E!.';
                    }
                },
                callbacks: this.listCallbacksAndEvents,
                cssParams: this.defaultCssParams,
                triangle: false,
                relativeDomElement: false,
                baseEventsActive: this.baseEventsActive,
                maxViewElements: 50
            };
        }
    }, {
        key: 'baseEventsActive',
        get: function get() {
            return {
                mouseEnterElement: true,
                interceptionEvents: true,
                clickElement: true
            };
        }
    }, {
        key: 'defaultCssParams',
        get: function get() {
            return {
                margin: [0, 10, 0, 10],
                minWidth: 200,
                maxWidth: 300
            };
        }
    }]);

    return InputWithSearchWindow;
}();

exports.default = InputWithSearchWindow;

/***/ }),

/***/ "./src/js/classes/ListInputWithSearch.js":
/*!***********************************************!*\
  !*** ./src/js/classes/ListInputWithSearch.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ListInputWithSearch = function () {
    function ListInputWithSearch() {
        _classCallCheck(this, ListInputWithSearch);

        this.saves = new window.WeakMap();
    }

    _createClass(ListInputWithSearch, [{
        key: "addElement",
        value: function addElement(domElement, objectInfo) {
            this.saves.set(domElement, objectInfo);
        }
    }, {
        key: "hasElement",
        value: function hasElement(domElement) {
            return this.saves.has(domElement);
        }
    }, {
        key: "removeElement",
        value: function removeElement(domElement) {
            this.saves.delete(domElement);
        }

        /**
         *
         * @param domElement
         * @returns {InputWithSearch}
         */

    }, {
        key: "getElement",
        value: function getElement(domElement) {
            return this.saves.get(domElement);
        }
    }]);

    return ListInputWithSearch;
}();

exports.default = ListInputWithSearch;

/***/ }),

/***/ "./src/js/entry.js":
/*!*************************!*\
  !*** ./src/js/entry.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../scss/inputWithSearch.scss */ "./src/scss/inputWithSearch.scss");

__webpack_require__(/*! ./polyfills/polyfills */ "./src/js/polyfills/polyfills.js");

var _InputWithSearchForWindow = __webpack_require__(/*! ./classes/InputWithSearchForWindow */ "./src/js/classes/InputWithSearchForWindow.js");

var _InputWithSearchForWindow2 = _interopRequireDefault(_InputWithSearchForWindow);

var _themes = __webpack_require__(/*! ./themes/themes */ "./src/js/themes/themes.js");

var _themes2 = _interopRequireDefault(_themes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Global object
 * @type {InputWithSearchForWindow}
 */
window.inputWithSearch = new _InputWithSearchForWindow2.default();
(0, _themes2.default)();

/***/ }),

/***/ "./src/js/functions/functions.js":
/*!***************************************!*\
  !*** ./src/js/functions/functions.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var delegateFn = function delegateFn(event, findClass, fn) {
    var target = event.target,
        related = event.relatedTarget,
        match = void 0;

    // search for a parent node matching the delegation selector
    while (target && target !== document && !(match = target.classList.contains(findClass))) {
        target = target.parentNode;
    }

    // exit if no matching node has been found
    if (!match) {
        return;
    }

    // loop through the parent of the related target to make sure that it's not a child of the target
    while (related && related !== target && related !== document) {
        related = related.parentNode;
    }

    // exit if this is the case
    if (related === target) {
        return;
    }

    return fn(event, target);
};

function extend() {

    // Variables
    var extended = {};
    var deep = false;
    var i = 0;
    var length = arguments.length;

    // Check if a deep merge
    if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
        deep = arguments[0];
        i++;
    }

    var merge = function merge(obj) {
        for (var prop in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
                    extended[prop] = extend(true, extended[prop], obj[prop]);
                } else {
                    extended[prop] = obj[prop];
                }
            }
        }
    };

    for (; i < length; i++) {
        var obj = arguments[i];
        merge(obj);
    }

    return extended;
}

function highlightMatchesToString(string, query) {
    var reg = new RegExp('(' + query + ')', 'gi');
    return string.replace(reg, '<span class="InputWithSearchWindow-Coincidence">$1</span>');
}

function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

var callEvent = function callEvent(element, name, data) {

    var eventConfig = {
        bubbles: true
    };

    if (typeof data !== 'undefined') {
        eventConfig.detail = data;
    }

    element.dispatchEvent(new CustomEvent(name, eventConfig));
};

var mergeListArraysWithoutDuplicates = function mergeListArraysWithoutDuplicates(oldArr, newArr) {

    return Object.entries(oldArr).reduce(function (acc, info) {
        var _info = _slicedToArray(info, 2),
            nameElement = _info[0],
            classesElement = _info[1];

        if (nameElement in newArr && Array.isArray(newArr[nameElement])) {
            acc[nameElement] = Array.from(new Set(classesElement.concat(newArr[nameElement])));
        } else {
            acc[nameElement] = classesElement;
        }
        return acc;
    }, {});
};

var funcs = {
    delegateFn: delegateFn,
    extend: extend,
    callEvent: callEvent,
    hasClass: hasClass,
    highlightMatchesToString: highlightMatchesToString,
    mergeListArraysWithoutDuplicates: mergeListArraysWithoutDuplicates
};

exports.default = funcs;

/***/ }),

/***/ "./src/js/functions/weakMapIWS.js":
/*!****************************************!*\
  !*** ./src/js/functions/weakMapIWS.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var InputWithSearchForWindowWeakMap = new WeakMap();

/**
 * @typedef {object} protectedFieldsIWS
 * @property {ListInputWithSearch} list - The name of the employee.
 * @property {Map} themes - The employee's department.
 */

/**
 *
 * @param object
 * @param {protectedFieldsIWS} data
 */
var setDataWeakMapIWS = function setDataWeakMapIWS(object, data) {
  InputWithSearchForWindowWeakMap.set(object, data);
};

/**
 *
 * @param object
 * @return {...protectedFieldsIWS} data
 */
var getDataWeakMapIWS = function getDataWeakMapIWS(object) {
  return InputWithSearchForWindowWeakMap.get(object);
};

var weakMapIWS = {
  setDataWeakMapIWS: setDataWeakMapIWS,
  getDataWeakMapIWS: getDataWeakMapIWS
};

exports.default = weakMapIWS;

/***/ }),

/***/ "./src/js/polyfills/polyfills.js":
/*!***************************************!*\
  !*** ./src/js/polyfills/polyfills.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
    if (!Element.prototype.closest) {
        Element.prototype.closest = function (css) {
            var node = this;
            while (node) {
                if (node.matches(css)) return node;else node = node.parentElement;
            }
            return null;
        };
    }
})();

/***/ }),

/***/ "./src/js/themes/themes.js":
/*!*********************************!*\
  !*** ./src/js/themes/themes.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = runDefaultThemes;
function runDefaultThemes() {
    window.inputWithSearch.addTheme('withPerfectScrollbar', {}, function (object) {

        if (window.PerfectScrollbar) {
            var listeners = object.getListeners();
            listeners.addCustomRecord('test_afterOpen', 'inputWithSearch_afterOpen', function () {
                var wrapperInner = object.inputWithSearchWindow.getElementByKey('wrapperInner');
                var ps = new window.PerfectScrollbar(wrapperInner);
                object.getCustomContainer().set('customScroll', ps);
            });
            listeners.addCustomRecord('test_onChangeWindow', 'inputWithSearch_onChangeWindow', function () {
                object.getCustomContainer().get('customScroll').update();
            });
            listeners.addCustomRecord('test_inputWithSearch_beforeClose', 'inputWithSearch_beforeClose', function () {
                var container = object.getCustomContainer();
                container.get('customScroll').destroy();
                container.delete('customScroll');
            });
        }
    });
}

/***/ }),

/***/ "./src/scss/inputWithSearch.scss":
/*!***************************************!*\
  !*** ./src/scss/inputWithSearch.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=inputWithSearch.js.map