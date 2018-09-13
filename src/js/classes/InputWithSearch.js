import InputWithSearchWindow from './InputWithSearchWindow';
import InputWithSearchForWindow from './InputWithSearchForWindow';
import funcs from '../functions/functions';
import EventSave from './EventSave';
import weakMapIWS from '../functions/weakMapIWS';
import ContainerData from './ContainerData';
import {readOnly} from '../functions/decorators';

class InputWithSearch{

    constructor(domElement, settings = {}){

        this._domElement = domElement;
        this._delegateElement = false;
        this.settings = InputWithSearch.settings;
        this.updateSettings(settings);
        this.createCustomContainer();

        this.fireEventAndCallback('inputWithSearch_beforeInit');

        this.waitData = false;
        this.xhr = false;
        this.promiseXhr = false;

        this.savesData = new ContainerData(this.id, {
            active: (key) => {
                this.fireEventAndCallback('inputWithSearch_changeActive', {key});
            },
            hover: (key) => {
                this.fireEventAndCallback('inputWithSearch_changeHover', {key});
            }
        });
        this.savesData.addData([], this.getValueFromInput());

        this.changeStatus([0]);
        this.getWorkDomElement().classList.add(...this.getClassesByKey('input'));

        this.addEventListeners();

        this.wasFirstLoad = false;

        InputWithSearch.addAttrToDomInput(this.getWorkDomElement());

        this._toggleInitClass();
        this.fireEventAndCallback('inputWithSearch_afterInit');
    }

    _toggleInitClass(){
        this._domElement.classList.toggle(
            InputWithSearch.getBaseClassesByKey('initialize')[0]
        );
    }

    getWorkDomElement(useInitDomImportant = false){
        return useInitDomImportant || !checkDomElement(this._delegateElement)
            ? this._domElement
            : this._delegateElement;
    }

    @readOnly
    id = 'IWS-' + InputWithSearch._counter();

    static _counter(){
        if (typeof this.counter === 'undefined'){
            this.counter = -1;
        }
        this.counter += 1;
        return this.counter;
    }

    /**
     *
     * @return {EventSave}
     */
    getListeners(){
        return this.listeners;
    }

    addEventListeners(){

        let listeners = this.getListeners();
        let domElement = this.getWorkDomElement();

        if (typeof listeners !== 'undefined' && listeners instanceof EventSave){
            listeners.removeAllRecords();
        }

        listeners = new EventSave(this.getWorkDomElement(true));

        let onEvents = this.settings.onEvents;

        switch (onEvents){
            case 'input':
                listeners.addListRecords([
                    {
                        name: 'onEvents',
                        domElement: domElement,
                        events: this.settings.onEvents,
                        fn: () => {
                            this.open();
                        },
                        protectedStatus: true
                    }
                ]);
                break;
            case 'click':
                listeners.addListRecords([
                    {
                        name: 'onEvents',
                        domElement: domElement,
                        events: this.settings.onEvents,
                        fn: () => {
                            if (this.checkStatus(0)){
                                this.open();
                            } else {
                                this.close();
                            }
                        },
                        protectedStatus: true
                    }
                ]);
                break;
            case 'hover': {

                let timerHover = null;

                const timerHoverFn = () => {
                    clearTimeout(timerHover);
                    timerHover = setTimeout(() => {
                        this.close();
                    }, 50);
                };

                listeners.addListRecords([
                    {
                        name: 'openWrapperHover',
                        domElement: domElement,
                        events: 'inputWithSearch_afterOpen',
                        fn: () => {
                            clearTimeout(timerHover);
                            let wrapper = this.inputWithSearchWindow.getElementByKey('wrapper');
                            let listenersWrapper = this.inputWithSearchWindow.listeners;
                            listenersWrapper.addRecord(
                                'mouseLeaveWrapperHover',
                                wrapper,
                                'mouseleave',
                                timerHoverFn,
                                true
                            );
                            listenersWrapper.addRecord(
                                'mouseEnterWrapperHover',
                                wrapper,
                                'mouseenter',
                                () => {
                                    clearTimeout(timerHover);
                                },
                                true
                            );
                        },
                        protectedStatus: true
                    },
                    {
                        name: 'onEvents',
                        domElement: domElement,
                        events: 'mouseenter',
                        fn: () => {
                            if (this.checkStatus(0)){
                                this.open();
                            }
                            if (this.checkStatus(1)){
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
                    }
                ]);
                break;
            }
            default:
                console.warn('Параметр onEvents заполнен неверно!');
        }

        this.listeners = listeners;
    }

    removeEventListeners(){
        this.listeners.removeAllRecords();
    }

    static addAttrToDomInput(input){
        input.autocomplete = 'off';
    }

    getValueFromInput(){
        let HTMLElement = this.getWorkDomElement();
        if (typeof this.settings.fns.fnGetValueFromInput === 'function'){
            return this.settings.fns.fnGetValueFromInput.call(null, HTMLElement);
        }
        if (checkDomOnInput(HTMLElement)){
            return HTMLElement.value;
        }
        return HTMLElement.textContent;
    }

    setValueToInput(value){
        let HTMLElement = this.getWorkDomElement();
        if (typeof this.settings.fns.fnSetValueToInput === 'function'){
            this.settings.fns.fnSetValueToInput.call(null, HTMLElement, value);
            return;
        }
        if (checkDomOnInput(HTMLElement)){
            HTMLElement.value = value;
            return;
        }
        HTMLElement.textContent = value;
    }

    updateSettings(newSettings){

        let classes = false;

        if ('classes' in newSettings && typeof newSettings['classes'] === 'object'){
            classes = funcs.mergeListArraysWithoutDuplicates(this.settings.classes, newSettings['classes']);
        }

        this.settings = funcs.extend(true, {}, this.settings, newSettings);
        /* Update classes */
        if (classes){
            this.settings.classes = classes;
        }
        /* end update classes */

        this._updateDelegateElement(newSettings.delegateElement);
    }

    /* section delegate elements */

    _updateDelegateElement(newDelegateElement) {
        let returnValue = false;
        if (typeof newDelegateElement !== 'undefined') {
            let newElement = newDelegateElement;
            let constructed = false;
            if (typeof newDelegateElement === 'function') {
                newElement = newDelegateElement(this.getWorkDomElement(true), this.id);
                constructed = true;
            }
            this._removeDelegateElement();
            if (newElement instanceof HTMLElement) {
                this._addDelegateElement(newElement, constructed);
                returnValue = newElement;
            }
        }
        this._delegateElement = returnValue;
    }

    /**
     * Configure domElement
     * @param {HTMLElement} domElement
     * @param {boolean} constructed
     * @private
     */
    _addDelegateElement(domElement, constructed) {
        if (constructed) {
            domElement.setAttribute('data-iws-generated', this.id);
        } else {
            domElement.setAttribute('data-iws-used', this.id);
        }
        domElement.setAttribute('data-iws-delegate', this.id);
    }

    _removeDelegateElement() {
        let delegateElement = this._delegateElement;
        if (delegateElement !== false) {
            if (delegateElement.getAttribute('data-iws-generated')) {
                delegateElement.parentElement.removeChild(delegateElement);
            } else {
                delegateElement.removeAttribute('data-iws-used');
                delegateElement.removeAttribute('data-iws-delegate');
            }
        }
        this._delegateElement = false;
    }

    /* end section delegate elements */

    changeStatus(addStatuses = [], removeStatuses = []){
        if (typeof this.status === 'undefined'){
            this.status = new window.Set();
        }
        addStatuses.forEach((status) => {
            if (status in InputWithSearch.statuses){
                this.status.add(status);
            }
        });
        removeStatuses.forEach((status) => {
            if (status in InputWithSearch.statuses){
                this.status.delete(status);
            }
        });
    }

    checkStatus(idStatus){
        return this.status.has(idStatus);
    }

    fnOnEventFire(value = false){

        this.changeStatus([], [2, 3]);

        let HTMLElement = this.getWorkDomElement();
        let domElementIsInput = checkDomOnInput(HTMLElement);

        if (value === false){
            value = HTMLElement.value;
        }

        if (domElementIsInput === false || value.length >= this.settings.lengthStringToOutput){

            let savesData = this.savesData;

            if (savesData.checkCustomData()){
                this.constructList();
            } else {
                let needLoad = true;

                if (this.settings.useCache && this.settings.loadOnlyStart){
                    needLoad = !this.wasFirstLoad;
                } else {

                    let validCache = savesData.validateSaveDataForRequest(
                        value,
                        this.settings.timeLiveSaveData
                    );

                    needLoad = !this.settings.useCache || !validCache;
                }

                if (needLoad){
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

    stopLoadData(removeStatus = true){
        clearTimeout(this.waitData);
        if (removeStatus){
            this.changeStatus([], [2]);
        }
        if (typeof this.xhr === 'object'){
            this.xhr.abort();
        }
    }

    constructList(){

        this._allFilterAndSortProcess();

        let data = this.savesData.getData(false);

        if (data.length){

            this.fireEventAndCallback('inputWithSearch_beforeListAddDom');
            this.inputWithSearchWindow.addListElements(data, this.getValueFromInput(), this.settings.repositionActiveToTop);
            this.fireEventAndCallback('inputWithSearch_afterListAddDom');

            return;
        }

        this.setToMessage('notFind');
    }

    _allFilterAndSortProcess(){

        const sliceData = (arr, maxLength) => {
            return arr.length > maxLength
                ? arr.slice(0, maxLength)
                : arr;
        };

        let savesData = this.savesData;
        let data = savesData.getData();
        let value = this.getValueFromInput();

        if (this.settings.maxViewElements < data.length){
            data = sliceData(data, this.settings.maxViewElements);
        }

        if (typeof this.settings.fns.filterData === 'function'){
            data = data.filter((elemData) => {
                return this.settings.fns.filterData(elemData, value);
            });
        }

        if (this.settings.repositionActiveToTop === true){
            data = ContainerData.repositionActiveToTop(data);
        }

        savesData.saveActionData(data);

        this.fireEventAndCallback('inputWithSearch_onUpdateDataView');
    }

    onLoadData(data, value){

        const dataSort = JSON.parse(data);

        this.savesData.addData(dataSort, value);
        this.constructList();
        if (this.wasFirstLoad === false){
            this.wasFirstLoad = true;
        }
    }

    loadData(){
        this.stopLoadData(false);
        this.waitData = setTimeout(async () => {
            this.setToWait();
            try{
                this.promiseXhr = this.request(this.settings.ajaxConfig.url);
                const value = this.getValueFromInput();
                const data = await this.promiseXhr;
                this.onLoadData(data, value);
            } catch (e){
                if (e === 0){
                    this.setToError(new Error('Данные не были получены!'));
                } else {
                    throw e;
                }
            } finally {
                this.changeStatus([], [2]);
            }
        }, this.settings.delayBeforeSendRequest);
    }

    request(url) {
        return new window.Promise((resolve, reject) => {
            const xhr = this.xhr = new window.XMLHttpRequest();
            xhr.onload = function() {
                resolve(xhr.response);
            };
            xhr.timeout = this.settings.ajaxConfig.timeout;
            xhr.onerror = function () {
                reject(xhr.status);
            };

            xhr.open(this.settings.ajaxConfig.type, url + this.generateGetParams(), true);

            xhr.send(InputWithSearch.prepareAjaxSendData(this.settings.ajaxConfig.data));
        });
    }

    generateGetParams(){
        const fn = this.settings.fns.generateGetParams;
        return typeof fn === 'function' ? '?' + fn(this) : '';
    }

    static prepareAjaxSendData(data){

        let sendData = data;

        if (typeof sendData === 'function'){
            sendData = sendData();
        }

        if (sendData !== null){
            sendData = typeof sendData === 'string' ? sendData : Object.keys(sendData).map(
                function(k){ return encodeURIComponent(k) + '=' + encodeURIComponent(sendData[k]); }
            ).join('&');
        }

        return sendData;
    }

    getClassesByKey(key, join = false){
        let classes = this.settings.classes[key];
        return join ? classes.join(' ') : classes;
    }

    static get statuses(){
        return {
            0: 'close',
            1: 'open',
            2: 'waiting data',
            3: 'error'
        };
    }

    open(){

        let checkWindow = window.inputWithSearchWindow instanceof InputWithSearchWindow,
            checkOpen = this.checkStatus(1);

        if (!checkOpen){
            let HTMLElement = this.getWorkDomElement();
            this.fireEventAndCallback('inputWithSearch_beforeOpen');
            if (checkWindow){
                window.inputWithSearchWindow.destructor();
            }
            window.inputWithSearchWindow =
                this.inputWithSearchWindow =
                    new InputWithSearchWindow(
                        this.getWorkDomElement(true),
                        this.configForInitSearchWindow
                    );
            InputWithSearch.setInputActive(HTMLElement, true);
            this.changeStatus([1], [0]);
        }
        this.fnOnEventFire();
        this.fireEventAndCallback('inputWithSearch_afterOpen');
    }

    get configForInitSearchWindow(){

        const getClassesFromSettings = (classes) => {
            const classesWindow = InputWithSearchWindow.classesBase;
            return Object.keys(classes).reduce((acc, nameElement) => {
                if (nameElement in classesWindow){
                    acc[nameElement] = classes[nameElement];
                }
                return acc;
            }, {});
        };

        const getNeedConstructors = (constructors) => {
            return Object.entries(constructors).reduce((object, data) => {
                let [key, value] = data;
                if (typeof value === 'function'){
                    object[key] = value;
                }
                return object;
            }, {});
        };

        return {
            callbacks: {
                inputWithSearchWindow_destruction: () => {
                    this.close(true, false);
                },
                inputWithSearchWindow_clickOnElementList: (objectWindow, domElement) => {
                    const key = domElement.getAttribute('data-key');
                    let configForEvent = this._setActiveByKeyFromList(key);
                    this.fireEventAndCallback('inputWithSearch_onClickOption', configForEvent);
                    this.close();
                },
                inputWithSearchWindow_changeContent: (...args) => {
                    this.fireEventAndCallback('inputWithSearch_onChangeWindow', args);
                }
            },
            classes: getClassesFromSettings(this.settings.classes),
            constructors: getNeedConstructors(this.settings.constructors),
            cssParams: this.settings.cssParamsWindow,
            cssCallbacks: this.settings.cssCallbacksWindow,
            triangle: this.settings.triangle,
            baseEventsActive: this.settings.baseWindowEventsActive,
            closeBtn: this.settings.closeBtn
        };
    }

    _setActiveByKeyFromList(key){

        const data = this.getDataFromLastDataByKey(key);
        const inputValue = this.getValueFromInput();

        this.setValueToInput(
            this.settings.fns.dataToInputByClick(
                data
            )
        );

        return {
            data,
            currentValue: this.getValueFromInput(),
            lastValue: inputValue
        };
    }

    getDataFromLastDataByKey(key){
        return this.savesData.getData(false, 'keyId')[key];
    }

    close(runEvents = true, runDestructor = true){
        if (this.checkStatus(1)){
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

    setToError(error){
        this.changeStatus([3]);
        this.fireEventAndCallback('inputWithSearch_onError', [error]);
        this.inputWithSearchWindow.setToError(error.message, error);
    }

    fireEventAndCallback(name, data = {}){
        if (name in InputWithSearch.getListCallbacksAndEvents()){

            let caller = this.getWorkDomElement(true);
            let inputWithSearch = {
                object: this,
                ...data
            };

            inputWithSearch[Symbol.iterator] = function* () {
                yield this.object;
                for (let key in this){
                    if (this.hasOwnProperty(key)){
                        if (key !== 'object'){
                            yield this[key];
                        }
                    }
                }
            };

            let dataToOutput = {
                inputWithSearch
            };

            funcs.callEvent(caller, name, dataToOutput);

            let func = this.settings.callbacks[name];

            if (typeof func === 'function'){
                func(...inputWithSearch);
            }
        }
    }

    /* sets to */

    setToWait(){
        if (!this.checkStatus(2)){
            this.changeStatus([2]);
            this.inputWithSearchWindow.setToWait();
        }
    }

    setToMessage(typeMessage, params = []){
        let toOutput = [this.getValueFromInput(), ...params];
        this.inputWithSearchWindow.setToMessage(typeMessage, toOutput);
    }

    /* end sets to */

    destructor(){
        this.fireEventAndCallback('inputWithSearch_beforeDestruction');
        let HTMLElement = this.getWorkDomElement();
        this.close();
        this.removeEventListeners();
        InputWithSearch.setInputActive(HTMLElement, false);
        HTMLElement.classList.remove(...this.getClassesByKey('input'));
        this._toggleInitClass();
        weakMapIWS.getDataWeakMapIWS(InputWithSearchForWindow.getInstance()).list.removeElement(HTMLElement);
        this._removeDelegateElement();
    }

    static setInputActive(input, flag){
        if (flag){
            input.classList.add('InputWithSearch_active');
            return;
        }
        input.classList.remove('InputWithSearch_active');
    }

    static get baseClasses(){
        return {
            initialize: ['InputWithSearchRoot'],
            input: ['InputWithSearch'],
            bodyOpen: ['InputWithSearchOpen']
        };
    }

    static getBaseClassesByKey(key){
        return this.baseClasses[key];
    }

    static get htmlElementsClasses(){

        const objectNotChangeable = {
            configurable: true,
            writable: false
        };

        const notChangeableKeys = ['input', 'bodyOpen', 'initialize'];

        const generateObjectForChange = (keys, object) => {
            return keys.reduce((acc, current) => {
                acc[current] = object;
                return acc;
            }, {});
        };

        let voidClassWindowClasses = Object.keys(InputWithSearchWindow.classesBase).reduce((acc, current) => {
            acc[current] = [];
            return acc;
        }, {});

        let object = funcs.extend(
            this.baseClasses,
            voidClassWindowClasses
        );

        Object.defineProperties(object, generateObjectForChange(notChangeableKeys, objectNotChangeable));

        return object;
    }

    /* for not downloaded data */

    setCustomData(data){
        this.savesData.addData(data, this.getValueFromInput(), true);
    }

    /* end for not downloaded data */

    /* custom container */

    createCustomContainer(){
        this.customContainer = new Map();
    }

    /**
     *
     * @return {Map}
     */
    getCustomContainer(){
        return this.customContainer;
    }

    /* end custom container */

    static getListCallbacksAndEvents(){
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

    static getInHtmlElementAllElementsByClass(domElement){
        return domElement.querySelectorAll(`.${this.getBaseClassesByKey('initialize')[0]}`);
    }

    static get settings(){
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
                dataToInputByClick: (data) => {
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
            timeLiveSaveData: 60*60*1000,
            classes: this.htmlElementsClasses,
            data: false,
            cssParamsWindow: InputWithSearchWindow.defaultCssParams,
            cssCallbacksWindow: InputWithSearchWindow.cssCallbacks,
            triangle: false,
            closeBtn: false,
            baseWindowEventsActive: {},
            delegateElement: false,
            repositionActiveToTop: true
        };
    }

    /**
     * Set active data by first element function fire
     * @param {function(object):boolean} cb
     * @param {boolean} withRunEvent
     */
    setActive(cb, withRunEvent = true){
        let changeKey = 'null';
        let savesData = this.savesData;
        savesData.getData(false).some(data => {
            let result = cb(data.data);
            if (result){
                changeKey = data.key;
            }
            return result;
        });
        if (changeKey !== 'null'){
            if (withRunEvent === false){
                savesData.setInactivityCallback('active');
            }
            savesData.activeKey = changeKey;
            this._setActiveByKeyFromList(changeKey);
            if (this.checkStatus(1)){
                this.inputWithSearchWindow.setElemListActiveByKey(changeKey, true);
                this.inputWithSearchWindow.setElemListHoverByKey(changeKey, false);
            }
            if (withRunEvent === false){
                savesData.setActivityCallback('active');
            }
        }
    }

    /**
     *
     * @param key
     * @param full
     * @return {Object}
     */
    getDataByKey(key, full = false){
        return this.savesData.getDataByKey(key, full);
    }

    getActiveKey(){
        return this.savesData.activeKey;
    }
}

const checkDomElement = element => element instanceof HTMLElement;

const checkDomOnInput = (domElement) => {
    return domElement.tagName === 'INPUT';
} ;

export default InputWithSearch;