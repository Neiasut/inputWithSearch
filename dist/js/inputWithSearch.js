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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/inputWithSearch.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/classes/ContainerData.js":
/*!*****************************************!*\
  !*** ./src/js/classes/ContainerData.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ContainerData = function () {

    /**
     * constructor
     * @param {string} idParent
     * @param {object} callbacks
     * @param {function(key)|undefined} callbacks.active
     * @param {function(key)|undefined} callbacks.hover
     */
    function ContainerData(idParent, callbacks) {
        _classCallCheck(this, ContainerData);

        this._idParent = idParent;
        /**
         * @type {{active: (function(key))|undefined, hover: (function(key))|undefined}}
         * @private
         */
        this._callbacks = callbacks;
        this.clear();
    }

    /**
     * Add values to container
     * @param {array|object} data
     * @param {string} value
     * @param {boolean} customData - Data was added programmatically
     */


    _createClass(ContainerData, [{
        key: 'addData',
        value: function addData(data, value) {
            var customData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            this._data = ContainerData.wrapListElements(ContainerData.validateData(data), this._idParent);
            this._value = value;
            this._customData = customData;
            this._date = Date.now();
            this._actionData = this._data.slice(0);
            this.activeKey = 'clear';
            this.hoveredKey = 'clear';
        }
    }, {
        key: 'saveActionData',
        value: function saveActionData(data) {
            this._actionData = data;
        }
    }, {
        key: 'clear',
        value: function clear() {
            this.addData([], '');
        }
    }, {
        key: 'checkCustomData',
        value: function checkCustomData() {
            return this._customData;
        }
    }, {
        key: 'getData',
        value: function getData() {
            var startedData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'typical';


            var data = startedData ? this._data : this._actionData;

            switch (type) {
                case 'clear':
                    return ContainerData.unWrapListElement(data);
                case 'keyId':
                    return data.reduce(function (acc, cur) {
                        acc[cur.key] = cur;
                        return acc;
                    }, {});
                default:
                    return data;
            }
        }

        /**
         * Getter key hover
         * @returns {string}
         */

    }, {
        key: '_setAction',
        value: function _setAction(key, nameAction) {
            if (key === 'clear') {
                clearAction(nameAction, this._actionData);
                this.runCbOnName(nameAction, key);
                return;
            }
            if (this.checkKeyInActionData(key)) {
                clearAction(nameAction, this._actionData);
                this.getData(false, 'keyId')[key][nameAction] = true;
                this.runCbOnName(nameAction, key);
            }
        }
    }, {
        key: 'checkKeyInActionData',
        value: function checkKeyInActionData(key) {
            return Object.keys(this.getData(false, 'keyId')).indexOf(key) !== -1;
        }
    }, {
        key: 'validateSaveDataForRequest',
        value: function validateSaveDataForRequest(stringRequest, timeLiveSaveData) {

            var toLower = function toLower(value) {
                return value.toLowerCase();
            };

            if (this._value === '' || toLower(stringRequest).indexOf(toLower(this._value)) === -1) {
                return false;
            }

            return Date.now() - this._date < timeLiveSaveData;
        }
    }, {
        key: 'runCbOnName',
        value: function runCbOnName(name, key) {
            if (ContainerData.nameCb.indexOf(name) !== -1) {
                var cb = this._callbacks[name];
                cb(key);
            }
        }
    }, {
        key: 'hoveredKey',
        get: function get() {
            return getActionKey('hover', this._actionData);
        }

        /**
         * Setter key hover
         * @param {string} key
         */
        ,
        set: function set(key) {
            this._setAction(key, 'hover');
        }

        /**
         * Getter key active
         * @returns {string}
         */

    }, {
        key: 'activeKey',
        get: function get() {
            return getActionKey('active', this._actionData);
        }

        /**
         * Setter key active
         * @param {string} key
         */
        ,
        set: function set(key) {
            this._setAction(key, 'active');
        }
    }], [{
        key: 'unWrapListElement',
        value: function unWrapListElement(arrData) {
            return arrData.map(function (element) {
                return element.data;
            });
        }
    }, {
        key: 'wrapListElements',
        value: function wrapListElements(arrData, idParent) {
            return arrData.map(function (data, i) {
                return ContainerData.wrapElementList(data, idParent, i);
            });
        }
    }, {
        key: 'wrapElementList',
        value: function wrapElementList(element, idParent, numb) {
            return {
                data: element,
                key: idParent + '_' + numb,
                hover: false,
                active: false
            };
        }
    }, {
        key: 'validateData',
        value: function validateData(data) {
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
        key: 'repositionActiveToTop',
        value: function repositionActiveToTop(arrData) {
            var info = getActionFullData('active', arrData);
            var arrWork = arrData.slice(0);
            if (info !== 'null' && arrData.length > 1 && info.index !== -1) {
                arrWork.unshift.apply(arrWork, _toConsumableArray(arrWork.splice(info.index, 1)));
            }
            return arrWork;
        }
    }, {
        key: 'nameCb',
        get: function get() {
            return ['active', 'hover'];
        }
    }]);

    return ContainerData;
}();

var getActionKeyIndex = function getActionKeyIndex(nameAction, arr) {

    var indexArr = -1;

    arr.some(function (element, index) {
        if (element[nameAction]) {
            indexArr = index;
            return true;
        }
        return false;
    });

    return indexArr;
};

var getActionKey = function getActionKey(nameAction, arr) {
    var index = getActionKeyIndex(nameAction, arr);
    return index !== -1 ? arr[index]['key'] : 'null';
};

var getActionFullData = function getActionFullData(nameAction, arr) {
    var index = getActionKeyIndex(nameAction, arr);
    return index !== -1 ? { data: arr[index], index: index } : 'null';
};

var clearAction = function clearAction(nameAction, arr) {
    arr.forEach(function (element) {
        element[nameAction] = false;
    });
};

exports.default = ContainerData;

/***/ }),

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

var _desc, _value, _class, _descriptor;

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

var _ContainerData = __webpack_require__(/*! ./ContainerData */ "./src/js/classes/ContainerData.js");

var _ContainerData2 = _interopRequireDefault(_ContainerData);

var _decorators = __webpack_require__(/*! ../functions/decorators */ "./src/js/functions/decorators.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var InputWithSearch = (_class = function () {
    function InputWithSearch(domElement) {
        var _this = this,
            _getWorkDomElement$cl;

        var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, InputWithSearch);

        _initDefineProp(this, 'id', _descriptor, this);

        this._domElement = domElement;
        this.settings = InputWithSearch.settings;
        this.updateSettings(settings);
        this.createCustomContainer();

        this.fireEventAndCallback('inputWithSearch_beforeInit');

        this.waitData = false;
        this.xhr = false;
        this.promiseXhr = false;

        this.savesData = new _ContainerData2.default(this.id, {
            active: function active(key) {
                _this.fireEventAndCallback('inputWithSearch_changeActive', { key: key });
            },
            hover: function hover(key) {
                _this.fireEventAndCallback('inputWithSearch_changeHover', { key: key });
            }
        });
        this.savesData.addData([], this.getValueFromInput());

        this.changeStatus([0]);
        (_getWorkDomElement$cl = this.getWorkDomElement().classList).add.apply(_getWorkDomElement$cl, _toConsumableArray(this.getClassesByKey('input')));

        this.addEventListeners();

        this.wasFirstLoad = false;

        InputWithSearch.addAttrToDomInput(this.getWorkDomElement());

        this.fireEventAndCallback('inputWithSearch_afterInit');
    }

    _createClass(InputWithSearch, [{
        key: 'getWorkDomElement',
        value: function getWorkDomElement() {
            var useInitDomImportant = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            return useInitDomImportant || !checkDomElement(this.settings.delegateElement) ? this._domElement : this.settings.delegateElement;
        }
    }, {
        key: 'getListeners',


        /**
         *
         * @return {EventSave}
         */
        value: function getListeners() {
            return this.listeners;
        }
    }, {
        key: 'addEventListeners',
        value: function addEventListeners() {
            var _this2 = this;

            var listeners = this.getListeners();
            var domElement = this.getWorkDomElement();

            if (typeof listeners !== 'undefined' && listeners instanceof _EventSave2.default) {
                listeners.removeAllRecords();
            }

            listeners = new _EventSave2.default(this.getWorkDomElement(true));

            var onEvents = this.settings.onEvents;

            switch (onEvents) {
                case 'input':
                    listeners.addListRecords([{
                        name: 'onEvents',
                        domElement: domElement,
                        events: this.settings.onEvents,
                        fn: function fn() {
                            _this2.open();
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
                            if (_this2.checkStatus(0)) {
                                _this2.open();
                            } else {
                                _this2.close();
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
                                _this2.close();
                            }, 50);
                        };

                        listeners.addListRecords([{
                            name: 'openWrapperHover',
                            domElement: domElement,
                            events: 'inputWithSearch_afterOpen',
                            fn: function fn() {
                                clearTimeout(timerHover);
                                var wrapper = _this2.inputWithSearchWindow.getElementByKey('wrapper');
                                var listenersWrapper = _this2.inputWithSearchWindow.listeners;
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
                                if (_this2.checkStatus(0)) {
                                    _this2.open();
                                }
                                if (_this2.checkStatus(1)) {
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
        key: 'getValueFromInput',
        value: function getValueFromInput() {
            var HTMLElement = this.getWorkDomElement();
            if (typeof this.settings.fns.fnGetValueFromInput === 'function') {
                return this.settings.fns.fnGetValueFromInput.call(null, HTMLElement);
            }
            if (checkDomOnInput(HTMLElement)) {
                return HTMLElement.value;
            }
            return HTMLElement.textContent;
        }
    }, {
        key: 'setValueToInput',
        value: function setValueToInput(value) {
            var HTMLElement = this.getWorkDomElement();
            if (typeof this.settings.fns.fnSetValueToInput === 'function') {
                this.settings.fns.fnSetValueToInput.call(null, HTMLElement, value);
                return;
            }
            if (checkDomOnInput(HTMLElement)) {
                HTMLElement.value = value;
                return;
            }
            HTMLElement.textContent = value;
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
            var _this3 = this;

            var addStatuses = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var removeStatuses = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

            if (typeof this.status === 'undefined') {
                this.status = new window.Set();
            }
            addStatuses.forEach(function (status) {
                if (status in InputWithSearch.statuses) {
                    _this3.status.add(status);
                }
            });
            removeStatuses.forEach(function (status) {
                if (status in InputWithSearch.statuses) {
                    _this3.status.delete(status);
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

            var HTMLElement = this.getWorkDomElement();
            var domElementIsInput = checkDomOnInput(HTMLElement);

            if (value === false) {
                value = HTMLElement.value;
            }

            if (domElementIsInput === false || value.length >= this.settings.lengthStringToOutput) {

                var savesData = this.savesData;

                if (savesData.checkCustomData()) {
                    this.constructList();
                } else {
                    var needLoad = true;

                    if (this.settings.useCache && this.settings.loadOnlyStart) {
                        needLoad = !this.wasFirstLoad;
                    } else {

                        var validCache = savesData.validateSaveDataForRequest(value, this.settings.timeLiveSaveData);

                        needLoad = !this.settings.useCache || !validCache;
                    }

                    if (needLoad) {
                        this.loadData();
                    } else {
                        this.constructList();
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
        value: function constructList() {

            this._allFilterAndSortProcess();

            var data = this.savesData.getData(false);

            if (data.length) {

                this.fireEventAndCallback('inputWithSearch_beforeListAddDom');
                this.inputWithSearchWindow.addListElements(data, this.getValueFromInput(), this.settings.repositionActiveToTop);
                this.fireEventAndCallback('inputWithSearch_afterListAddDom');

                return;
            }

            this.setToMessage('notFind');
        }
    }, {
        key: '_allFilterAndSortProcess',
        value: function _allFilterAndSortProcess() {
            var _this4 = this;

            var sliceData = function sliceData(arr, maxLength) {
                return arr.length > maxLength ? arr.slice(0, maxLength) : arr;
            };

            var savesData = this.savesData;
            var data = savesData.getData();
            var value = this.getValueFromInput();

            if (this.settings.maxViewElements < data.length) {
                data = sliceData(data, this.settings.maxViewElements);
            }

            if (typeof this.settings.fns.filterData === 'function') {
                data = data.filter(function (elemData) {
                    return _this4.settings.fns.filterData(elemData, value);
                });
            }

            if (this.settings.repositionActiveToTop === true) {
                data = _ContainerData2.default.repositionActiveToTop(data);
            }

            savesData.saveActionData(data);

            this.fireEventAndCallback('inputWithSearch_onUpdateDataView');
        }
    }, {
        key: 'onLoadData',
        value: function onLoadData(data, value) {

            var dataSort = JSON.parse(data);

            this.savesData.addData(dataSort, value);
            this.constructList();
            if (this.wasFirstLoad === false) {
                this.wasFirstLoad = true;
            }
        }
    }, {
        key: 'loadData',
        value: function loadData() {
            var _this5 = this;

            this.stopLoadData(false);
            this.waitData = setTimeout(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var value, data;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _this5.setToWait();
                                _context.prev = 1;

                                _this5.promiseXhr = _this5.request(_this5.settings.ajaxConfig.url);
                                value = _this5.getValueFromInput();
                                _context.next = 6;
                                return _this5.promiseXhr;

                            case 6:
                                data = _context.sent;

                                _this5.onLoadData(data, value);
                                _context.next = 17;
                                break;

                            case 10:
                                _context.prev = 10;
                                _context.t0 = _context['catch'](1);

                                if (!(_context.t0 === 0)) {
                                    _context.next = 16;
                                    break;
                                }

                                _this5.setToError(new Error('Данные не были получены!'));
                                _context.next = 17;
                                break;

                            case 16:
                                throw _context.t0;

                            case 17:
                                _context.prev = 17;

                                _this5.changeStatus([], [2]);
                                return _context.finish(17);

                            case 20:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this5, [[1, 10, 17, 20]]);
            })), this.settings.delayBeforeSendRequest);
        }
    }, {
        key: 'request',
        value: function request(url) {
            var _this6 = this;

            return new window.Promise(function (resolve, reject) {
                var xhr = _this6.xhr = new window.XMLHttpRequest();
                xhr.onload = function () {
                    resolve(xhr.response);
                };
                xhr.timeout = _this6.settings.ajaxConfig.timeout;
                xhr.onerror = function () {
                    reject(xhr.status);
                };

                xhr.open(_this6.settings.ajaxConfig.type, url + _this6.generateGetParams(), true);

                xhr.send(InputWithSearch.prepareAjaxSendData(_this6.settings.ajaxConfig.data));
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
                var _HTMLElement = this.getWorkDomElement();
                this.fireEventAndCallback('inputWithSearch_beforeOpen');
                if (checkWindow) {
                    window.inputWithSearchWindow.destructor();
                }
                window.inputWithSearchWindow = this.inputWithSearchWindow = new _InputWithSearchWindow2.default(this.getWorkDomElement(true), this.configForInitSearchWindow);
                InputWithSearch.setInputActive(_HTMLElement, true);
                this.changeStatus([1], [0]);
            }
            this.fnOnEventFire();
            this.fireEventAndCallback('inputWithSearch_afterOpen');
        }
    }, {
        key: '_setActiveByKeyFromList',
        value: function _setActiveByKeyFromList(key) {

            var data = this.getDataFromLastDataByKey(key);
            var inputValue = this.getValueFromInput();

            this.setValueToInput(this.settings.fns.dataToInputByClick(data));

            return {
                data: data,
                currentValue: this.getValueFromInput(),
                lastValue: inputValue
            };
        }
    }, {
        key: 'getDataFromLastDataByKey',
        value: function getDataFromLastDataByKey(key) {
            return this.savesData.getData(false, 'keyId')[key];
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
                InputWithSearch.setInputActive(this.getWorkDomElement(), false);
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

                var caller = this.getWorkDomElement(true);
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
            var _HTMLElement$classLis;

            this.fireEventAndCallback('inputWithSearch_beforeDestruction');
            var HTMLElement = this.getWorkDomElement();
            this.close();
            this.removeEventListeners();
            InputWithSearch.setInputActive(HTMLElement, false);
            (_HTMLElement$classLis = HTMLElement.classList).remove.apply(_HTMLElement$classLis, _toConsumableArray(this.getClassesByKey('input')));
            _weakMapIWS2.default.getDataWeakMapIWS(_InputWithSearchForWindow2.default.getInstance()).list.removeElement(HTMLElement);
        }
    }, {
        key: 'setCustomData',


        /* for not downloaded data */

        value: function setCustomData(data) {
            this.savesData.addData(data, this.getValueFromInput(), true);
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
        key: 'setActive',


        /**
         * Set active data by first element function fire
         * @param {function(object):boolean} cb
         */
        value: function setActive(cb) {
            var changeKey = 'null';
            this.savesData.getData(false).some(function (data) {
                var result = cb(data.data);
                if (result) {
                    changeKey = data.key;
                }
                return result;
            });
            if (changeKey !== 'null') {
                this.savesData.activeKey = changeKey;
                this._setActiveByKeyFromList(changeKey);
                if (this.checkStatus(1)) {
                    this.inputWithSearchWindow.setElemListActiveByKey(changeKey, true);
                    this.inputWithSearchWindow.setElemListHoverByKey(changeKey, false);
                }
            }
        }
    }, {
        key: 'configForInitSearchWindow',
        get: function get() {
            var _this7 = this;

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
                        _this7.close(true, false);
                    },
                    inputWithSearchWindow_clickOnElementList: function inputWithSearchWindow_clickOnElementList(objectWindow, domElement) {
                        var key = domElement.getAttribute('data-key');
                        var configForEvent = _this7._setActiveByKeyFromList(key);
                        _this7.fireEventAndCallback('inputWithSearch_onClickOption', configForEvent);
                        _this7.close();
                    },
                    inputWithSearchWindow_changeContent: function inputWithSearchWindow_changeContent() {
                        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                            args[_key] = arguments[_key];
                        }

                        _this7.fireEventAndCallback('inputWithSearch_onChangeWindow', args);
                    }
                },
                classes: getClassesFromSettings(this.settings.classes),
                constructors: getNeedConstructors(this.settings.constructors),
                cssParams: this.settings.cssParamsWindow,
                triangle: this.settings.triangle,
                baseEventsActive: this.settings.baseWindowEventsActive
            };
        }
    }], [{
        key: '_counter',
        value: function _counter() {
            if (typeof this.counter === 'undefined') {
                this.counter = -1;
            }
            this.counter += 1;
            return this.counter;
        }
    }, {
        key: 'addAttrToDomInput',
        value: function addAttrToDomInput(input) {
            input.autocomplete = 'off';
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
                'inputWithSearch_onChangeWindow': false,
                'inputWithSearch_onUpdateDataView': false,
                'inputWithSearch_changeActive': false,
                'inputWithSearch_changeHover': false
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
                        return data.data;
                    },
                    fnSetValueToInput: false,
                    fnGetValueFromInput: false,
                    filterData: false,
                    generateGetParams: false
                },
                useCache: false,
                loadOnlyStart: false,
                maxViewElements: 50,
                lengthStringToOutput: 4,
                timeLiveSaveData: 60 * 60 * 1000,
                classes: this.htmlElementsClasses,
                data: false,
                cssParamsWindow: _InputWithSearchWindow2.default.defaultCssParams,
                triangle: false,
                baseWindowEventsActive: {},
                delegateElement: false,
                repositionActiveToTop: true
            };
        }
    }]);

    return InputWithSearch;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'id', [_decorators.readOnly], {
    enumerable: true,
    initializer: function initializer() {
        return 'IWS-' + InputWithSearch._counter();
    }
})), _class);


var checkDomElement = function checkDomElement(element) {
    return element instanceof HTMLElement;
};

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

                            var fn = objectTheme.fnRunBeforeStart;
                            if (typeof fn === 'function') {
                                fn.call(null, element);
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

                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;

                    try {
                        for (var _iterator2 = availableThemeConfigs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                            var _objectTheme = _step2.value;

                            var objectData = _objectTheme.objectData;
                            if (Object.keys(objectData).length) {
                                objectConfig = _functions2.default.extend(true, {}, objectData, objectConfig);
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

                    var exemplar = new _InputWithSearch2.default(element, objectConfig);
                    list.addElement(element, exemplar);
                    var _iteratorNormalCompletion3 = true;
                    var _didIteratorError3 = false;
                    var _iteratorError3 = undefined;

                    try {
                        for (var _iterator3 = availableThemeConfigs[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                            var _objectTheme2 = _step3.value;

                            var fn = _objectTheme2.fnRunOnStart;
                            if (typeof fn === 'function') {
                                fn.call(null, exemplar);
                            }
                        }
                    } catch (err) {
                        _didIteratorError3 = true;
                        _iteratorError3 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                _iterator3.return();
                            }
                        } finally {
                            if (_didIteratorError3) {
                                throw _iteratorError3;
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
         * @param {function(HTMLElement)} fnRunBeforeStart
         */

    }, {
        key: 'addTheme',
        value: function addTheme(name, objectData, fnRunOnStart, fnRunBeforeStart) {

            var themes = _weakMapIWS2.default.getDataWeakMapIWS(this).themes;

            if (!themes.has(name)) {
                themes.set(name, {
                    objectData: objectData,
                    fnRunOnStart: fnRunOnStart,
                    fnRunBeforeStart: fnRunBeforeStart
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

        this.setStatus();

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
            this._setHoveredKey('clear');
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
                        _this2.setElemListActiveByKey(InputWithSearchWindow._getKeyAttrFromDomElement(e.target));
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
                    if (event.target.closest('.' + _this2.getClassesByKey('wrapper') + ', .InputWithSearch')) {
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
                            _this2._setElemListHover(elem);
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
                    var relativeClass = _this2.getRelativeObject();

                    if (relativeClass.checkStatus(1)) {

                        var down = event.keyCode === 40;
                        var up = event.keyCode === 38;
                        var enter = event.keyCode === 13;

                        if ((up || down) && windowSh.checkStatus()) {
                            event.preventDefault();
                            _this2.timerWaitToBlockHoverSelected = setTimeoutOnBlockSelected(_this2.timerWaitToBlockHoverSelected, windowSh);
                            if (down) {
                                windowSh.setElemListHoverByDirection();
                            }
                            if (up) {
                                windowSh.setElemListHoverByDirection(false);
                            }
                        }

                        if (enter) {

                            var hoveredKey = windowSh._getHoveredKey();

                            if (hoveredKey !== 'null') {
                                _this2.setElemListActiveByKey(hoveredKey);
                                relativeClass._setActiveByKeyFromList(hoveredKey);
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

        /**
         *
         * @return {InputWithSearch}
         */

    }, {
        key: 'getRelativeObject',
        value: function getRelativeObject() {
            return window.inputWithSearch.getElement(this.dependElement);
        }
    }, {
        key: 'setElemListHoverByKey',
        value: function setElemListHoverByKey(key) {
            var withScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            if (this.checkStatus() && this._getList().checkKeyInActionData(key)) {
                var classes = this.getClassesByKey('elementList')[0];
                var domElement = this.elements.wrapper.querySelector('.' + classes + '[data-key="' + key + '"]');
                if (domElement !== null) {
                    this._setElemListHover(domElement, withScroll, key);
                }
            }
        }
    }, {
        key: 'setElemListHoverByDirection',
        value: function setElemListHoverByDirection() {
            var down = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;


            var arrKeys = Object.keys(this.getDataForList(true));
            var hoveredKey = this._getHoveredKey();
            var index = arrKeys.indexOf(hoveredKey);

            if (down) {
                if (hoveredKey === -1) {
                    this.setElemListHoverByKey(arrKeys[0]);
                    return;
                }
                if (arrKeys[arrKeys.length - 1] === hoveredKey) {
                    this.setElemListHoverByKey(hoveredKey);
                    return;
                }
                this.setElemListHoverByKey(arrKeys[index + 1]);
                return;
            }
            if (index === 0) {
                this._unHoveredElements();
                this._setHoveredKey('clear');
                return;
            }
            this.setElemListHoverByKey(arrKeys[index - 1]);
        }
    }, {
        key: '_unHoveredElements',
        value: function _unHoveredElements() {
            var classes = InputWithSearchWindow.getClassesBaseByKey('elementListHovered')[0];
            this.elements.wrapper.querySelectorAll('.' + classes).forEach(function (element) {
                element.classList.remove(classes);
            });
        }
    }, {
        key: '_setElemListHover',
        value: function _setElemListHover(domListElement) {
            var withScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var keyElement = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;


            var key = typeof keyElement === 'string' ? keyElement : domListElement.getAttribute('data-key');
            var classes = InputWithSearchWindow.getClassesBaseByKey('elementListHovered')[0];

            if (key !== this._getHoveredKey()) {

                this._unHoveredElements();
                this._setHoveredKey(key);

                if (withScroll) {
                    this.elements.wrapperInner.scrollTop = domListElement.offsetTop;
                }
            }

            domListElement.classList.add(classes);
        }
    }, {
        key: 'setElemListActiveByKey',
        value: function setElemListActiveByKey(key) {
            var updateOnlyDom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var withScroll = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;


            if (key !== 'null' && (key !== this._getActiveKey() || updateOnlyDom)) {

                var classes = InputWithSearchWindow.getClassesBaseByKey('elementListSelected')[0];

                this._unActiveElements();
                if (!updateOnlyDom) {
                    this._setActiveKey(key);
                }

                var domElement = this._getDomElementByKey(key);

                if (withScroll) {
                    this.elements.wrapperInner.scrollTop = domElement.offsetTop;
                }

                domElement.classList.add(classes);
            }
        }
    }, {
        key: '_getDomElementByKey',
        value: function _getDomElementByKey(key) {
            return this.elements.wrapper.querySelector('[data-key="' + key + '"]');
        }
    }, {
        key: '_unActiveElements',
        value: function _unActiveElements() {
            var classes = InputWithSearchWindow.getClassesBaseByKey('elementListSelected')[0];
            this.elements.wrapper.querySelectorAll('.' + classes).forEach(function (element) {
                element.classList.remove(classes);
            });
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

            var elem_character = this.getRelativeObject().getWorkDomElement().getBoundingClientRect(),
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

            style.top = scroll + elem_character.bottom - (scroll + document.body.getBoundingClientRect().top) + 'px';
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
        key: 'setStatus',
        value: function setStatus() {
            var withData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            this.haveData = withData;
        }
    }, {
        key: 'checkStatus',
        value: function checkStatus() {
            return this.haveData;
        }

        /**
         *
         * @returns {ContainerData}
         * @private
         */

    }, {
        key: '_getList',
        value: function _getList() {
            return this.getRelativeObject().savesData;
        }
    }, {
        key: 'getDataForList',
        value: function getDataForList() {
            var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            return this._getList().getData(false, keys === true ? 'keyId' : null);
        }
    }, {
        key: '_setHoveredKey',
        value: function _setHoveredKey(key) {
            this._getList().hoveredKey = key;
        }
    }, {
        key: '_getHoveredKey',
        value: function _getHoveredKey() {
            return this._getList().hoveredKey;
        }
    }, {
        key: '_setActiveKey',
        value: function _setActiveKey(key) {
            this._getList().activeKey = key;
        }
    }, {
        key: '_getActiveKey',
        value: function _getActiveKey() {
            return this._getList().activeKey;
        }
    }, {
        key: 'addListElements',
        value: function addListElements(dataList, value) {
            var _this3 = this;

            var reposition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;


            this.addInfoToList('');
            this.setStatus(true);

            dataList.forEach(function (dataElement, numb) {
                _this3.addInfoToList(InputWithSearchWindow.constructElement(dataElement, value, numb, _this3.settings.constructors['element'], _this3.getClassesByKey('elementList', true)), true);
            });

            var activeKey = this._getActiveKey();
            var checkActiveKey = activeKey !== 'null';

            if (reposition) {
                this.setElemListActiveByKey(activeKey, true, false);
            } else {
                if (checkActiveKey) {
                    this.setElemListActiveByKey(activeKey, true, true);
                    this.setElemListHoverByKey(activeKey, true);
                } else {
                    var hoveredKey = this._getHoveredKey();
                    if (hoveredKey !== 'null') {
                        this.setElemListHoverByKey(hoveredKey, reposition);
                    }
                }
            }
        }
    }, {
        key: 'setToMessage',
        value: function setToMessage(typeMessage, params) {
            this.setStatus();
            this.addInfoToList(InputWithSearchWindow.constructMessage(typeMessage, params, this.settings.constructors[typeMessage], this.getClassesByKey('message')));
        }
    }, {
        key: 'setToError',
        value: function setToError() {
            this.setStatus();

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            this.addInfoToList(InputWithSearchWindow.constructMessageError.apply(InputWithSearchWindow, args.concat([this.getClassesByKey('error'), this.settings.constructors['error']])));
        }
    }, {
        key: 'setToWait',
        value: function setToWait() {
            this.setStatus();
            this.addInfoToList(InputWithSearchWindow.constructWaitThrobber());
        }
    }], [{
        key: '_getKeyAttrFromDomElement',
        value: function _getKeyAttrFromDomElement(domElement) {
            return domElement.getAttribute('data-key');
        }
    }, {
        key: 'getClassesBaseByKey',
        value: function getClassesBaseByKey(key) {
            return this.classesBase[key];
        }
    }, {
        key: 'constructElement',
        value: function constructElement(data, value, numb, fn, classes) {
            return '\n                <div class="' + classes + '" data-key="' + data.key + '" data-numb="' + numb + '">\n                    ' + fn(data.data, value, _functions2.default.highlightMatchesToString) + '\n                </div>\n            ';
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
                elementListHovered: ['InputWithSearchWindow-Element_hovered'],
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
                        return fn('\u0414\u0430\u043D\u043D\u044B\u0435 ' + data + ' c\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435\u043C ' + value);
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
                baseEventsActive: this.baseEventsActive
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

/***/ "./src/js/functions/decorators.js":
/*!****************************************!*\
  !*** ./src/js/functions/decorators.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var readOnly = function readOnly(target, key, descriptor) {
    descriptor.writable = false;
    return descriptor;
};

exports.readOnly = readOnly;

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

var insertAfter = function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
};

var funcs = {
    delegateFn: delegateFn,
    extend: extend,
    callEvent: callEvent,
    hasClass: hasClass,
    highlightMatchesToString: highlightMatchesToString,
    mergeListArraysWithoutDuplicates: mergeListArraysWithoutDuplicates,
    insertAfter: insertAfter
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
 * @property {ListInputWithSearch} list
 * @property {Map} themes
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

/***/ "./src/js/inputWithSearch.js":
/*!***********************************!*\
  !*** ./src/js/inputWithSearch.js ***!
  \***********************************/
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

/***/ "./src/js/themes/defaultExportTheme.js":
/*!*********************************************!*\
  !*** ./src/js/themes/defaultExportTheme.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (name, object, cb, cbBefore) {
    return _defineProperty({
        name: name,
        object: object,
        cb: cb,
        cbBefore: cbBefore
    }, Symbol.iterator, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return name;

                    case 2:
                        _context.next = 4;
                        return object;

                    case 4:
                        _context.next = 6;
                        return cb;

                    case 6:
                        _context.next = 8;
                        return cbBefore;

                    case 8:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
                                                                                                                                                                                                                   *
                                                                                                                                                                                                                   * @param {string} name
                                                                                                                                                                                                                   * @param {object} object
                                                                                                                                                                                                                   * @param {function(InputWithSearch)|boolean} cb
                                                                                                                                                                                                                   * @param {function(HTMLElement)|boolean} cbBefore
                                                                                                                                                                                                                   * @return {{name: *, object: *, cb: *, cbBefore: *, [Symbol.iterator]: Function}}
                                                                                                                                                                                                                   */

/***/ }),

/***/ "./src/js/themes/listThemes/select.js":
/*!********************************************!*\
  !*** ./src/js/themes/listThemes/select.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defaultExportTheme = __webpack_require__(/*! ../defaultExportTheme */ "./src/js/themes/defaultExportTheme.js");

var _defaultExportTheme2 = _interopRequireDefault(_defaultExportTheme);

var _functions = __webpack_require__(/*! ../../functions/functions */ "./src/js/functions/functions.js");

var _functions2 = _interopRequireDefault(_functions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Get from event object element
 * @param e
 * @return {InputWithSearch}
 */
var getFromEventObject = function getFromEventObject(e) {
    return e.detail.inputWithSearch.object;
};

/**
 * construct domElement for delegate select
 * @param {string} text
 * @return {string}
 */
var constructorDelegateElement = function constructorDelegateElement(text) {
    return '\n    ' + text + '\n';
};

/**
 * Add delegateElement
 * @param {HTMLElement} toAppend
 * @param {string} id
 * @param {array} classes
 */
var addDelegateElement = function addDelegateElement(toAppend, id) {
    var _delegateElement$clas;

    var classes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ['InputWithSearchSelect'];

    var delegateElement = document.createElement('div');
    delegateElement.setAttribute('id', id);
    (_delegateElement$clas = delegateElement.classList).add.apply(_delegateElement$clas, _toConsumableArray(classes));
    delegateElement.innerHTML = constructorDelegateElement('delegateElement');
    _functions2.default.insertAfter(delegateElement, toAppend);
};

/**
 * Generate attribute id for select imitate
 * @param {string} objectId
 * @return {string}
 */
var constructIdSelect = function constructIdSelect(objectId) {
    return objectId + '_select';
};

/**
 * Callback for inputWithSearch_beforeInit event
 * @param e
 */
var cbBeforeStart = function cbBeforeStart(e) {
    var object = getFromEventObject(e);
    var domElement = object.getWorkDomElement(true);
    domElement.style.display = 'none';
    var id = constructIdSelect(object.id);
    addDelegateElement(domElement, id);
    object.updateSettings({
        delegateElement: document.getElementById(id)
    });
};

/**
 * Callback for inputWithSearch_beforeDestruction event
 * @param e
 */
var cbBeforeDestruct = function cbBeforeDestruct(e) {
    /**
     * @type {InputWithSearch}
     */
    var object = getFromEventObject(e);
    var HTMLElem = object.getWorkDomElement(true);
    HTMLElem.removeEventListener('inputWithSearch_beforeInit', cbBeforeStart);
    HTMLElem.removeEventListener('inputWithSearch_beforeDestruction', cbBeforeDestruct);
    HTMLElem.style.display = '';
    HTMLElem.parentElement.removeChild(document.getElementById(constructIdSelect(object.id)));
};

var cbOnChangeData = function cbOnChangeData() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    console.log(args);
};

exports.default = (0, _defaultExportTheme2.default)('select', {
    onEvents: 'click'
}, function (object) {
    object.setCustomData(['test', 'test2', 'test3']);
}, function (HTMLElem) {
    HTMLElem.addEventListener('inputWithSearch_beforeInit', cbBeforeStart);
    HTMLElem.addEventListener('inputWithSearch_beforeDestruction', cbBeforeDestruct);
    //HTMLElem.addEventListener('inputWithSearch_changeActive', cbOnChangeData);
});

/***/ }),

/***/ "./src/js/themes/listThemes/withPerfectScrollbar.js":
/*!**********************************************************!*\
  !*** ./src/js/themes/listThemes/withPerfectScrollbar.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defaultExportTheme = __webpack_require__(/*! ../defaultExportTheme */ "./src/js/themes/defaultExportTheme.js");

var _defaultExportTheme2 = _interopRequireDefault(_defaultExportTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _defaultExportTheme2.default)('withPerfectScrollbar', {}, function (object) {
    if (window.PerfectScrollbar) {
        var listeners = object.getListeners();
        listeners.addCustomRecord('test_afterOpen', 'inputWithSearch_afterOpen', function () {
            var wrapperInner = object.inputWithSearchWindow.getElementByKey('wrapperInner');
            var ps = new window.PerfectScrollbar(wrapperInner, {
                wheelPropagation: false
            });
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

var _withPerfectScrollbar = __webpack_require__(/*! ./listThemes/withPerfectScrollbar */ "./src/js/themes/listThemes/withPerfectScrollbar.js");

var _withPerfectScrollbar2 = _interopRequireDefault(_withPerfectScrollbar);

var _select = __webpack_require__(/*! ./listThemes/select */ "./src/js/themes/listThemes/select.js");

var _select2 = _interopRequireDefault(_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function runDefaultThemes() {

    var inputWithSearch = window.inputWithSearch;

    inputWithSearch.addTheme.apply(inputWithSearch, _toConsumableArray(_withPerfectScrollbar2.default));
    inputWithSearch.addTheme.apply(inputWithSearch, _toConsumableArray(_select2.default));
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