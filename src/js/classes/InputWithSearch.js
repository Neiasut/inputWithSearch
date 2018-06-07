import InputWithSearchWindow from './InputWithSearchWindow';
import InputWithSearchForWindow from './InputWithSearchForWindow';
import funcs from '../functions/functions';
import EventSave from './EventSave';
import weakMapIWS from '../functions/weakMapIWS';

class InputWithSearch{

    constructor(domElement, settings = {}){

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
        this.domElement.classList.add(...this.getClassesByKey('input'));

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
    getListeners(){
        return this.listeners;
    }

    addEventListeners(){

        let listeners = this.getListeners();
        let domElement = this.domElement;

        if (typeof listeners !== 'undefined' && listeners instanceof EventSave){
            listeners.removeAllRecords();
        }

        listeners = new EventSave(this.domElement);

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

    savesData(data, value){
        this.saveData = {
            data,
            date: Date.now(),
            value
        };
    }

    getSaveData(){
        return this.saveData;
    }

    getValueFromInput(){
        return this.domElement.value;
    }

    setValueToInput(value){
        if (typeof this.settings.fns.fnSetValueToInput === 'function'){
            this.settings.fns.fnSetValueToInput.call(null, this.domElement, value);
            return;
        }
        if (checkDomOnInput(this.domElement)){
            this.domElement.value = value;
            return;
        }
        this.domElement.innerHTML = value;

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
    }

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

    static validateSaveDataForRequest(saveData, stringRequest, timeLiveSaveData){

        const toLower = value => value.toLowerCase();

        if (saveData.value === '' || toLower(stringRequest).indexOf(toLower(saveData.value)) === -1){
            return false;
        }
        return Date.now() - saveData.date < timeLiveSaveData;
    }

    fnOnEventFire(value = false){

        this.changeStatus([], [2, 3]);

        let domElementIsInput = checkDomOnInput(this.domElement);

        if (value === false){
            value = this.domElement.value;
        }

        if (domElementIsInput === false || value.length >= this.settings.lengthStringToOutput){

            if (this.checkCustomData()){
                this.constructList(this.getCustomData(), this.getValueFromInput());
            } else {
                let needLoad = true;

                if (this.settings.useCache && this.settings.loadOnlyStart){
                    needLoad = !this.wasFirstLoad;
                } else {

                    let validCache = InputWithSearch.validateSaveDataForRequest(
                        this.getSaveData(),
                        value,
                        this.settings.timeLiveSaveData
                    );

                    needLoad = !this.settings.useCache || !validCache;
                }

                if (needLoad){
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

    stopLoadData(removeStatus = true){
        clearTimeout(this.waitData);
        if (removeStatus){
            this.changeStatus([], [2]);
        }
        if (typeof this.xhr === 'object'){
            this.xhr.abort();
        }
    }

    constructList(data, value){

        if (typeof this.settings.fns.filterData === 'function'){
            data = data.filter((elemData) => {
                return this.settings.fns.filterData(elemData, value);
            });

        }

        this.lastData = data;

        if (data.length){

            if (typeof this.settings.numberOfResultsForView === 'number'){
                data = data.slice(0, this.settings.numberOfResultsForView + 1);
            }

            this.fireEventAndCallback('inputWithSearch_beforeListAddDom');

            this.inputWithSearchWindow.addListElements(data);

            this.fireEventAndCallback('inputWithSearch_afterListAddDom');

            return;
        }

        this.setToMessage('notFind');
    }

    static getValidateData(data){
        if (Array.isArray(data)){
            return data;
        } else {
            if (data instanceof Object){
                return Object.values(data);
            } else {
                throw new Error('Полученные данные не являются JSON-массивом.');
            }
        }
    }

    onLoadData(data, value){

        const dataSort = JSON.parse(data);

        let dataWorking = InputWithSearch.getValidateData(dataSort);

        this.savesData(dataWorking, value);
        this.constructList(dataWorking, this.getValueFromInput());
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
            this.fireEventAndCallback('inputWithSearch_beforeOpen');
            if (checkWindow){
                window.inputWithSearchWindow.destructor();
            }
            window.inputWithSearchWindow =
                this.inputWithSearchWindow =
                    new InputWithSearchWindow(
                        this.domElement,
                        this.configForInitSearchWindow
                    );
            InputWithSearch.setInputActive(this.domElement, true);
            this.changeStatus([1], [0]);

            this.fireEventAndCallback('inputWithSearch_afterOpen');
        }
        this.fnOnEventFire();
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
                    const numb = parseInt(domElement.getAttribute('data-numb'));
                    let configForEvent = this.setActiveByNumbFromList(numb);
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
            triangle: this.settings.triangle,
            relativeDomElement: this.domElement,
            baseEventsActive: this.settings.baseWindowEventsActive,
            maxViewElements: this.settings.maxViewElements
        };
    }

    setActiveByNumbFromList(numb){

        const data = this.getDataFromLastDataByNumb(numb);
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

    getDataFromLastDataByNumb(numb){
        return this.lastData[numb];
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
            InputWithSearch.setInputActive(this.domElement, false);
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

            let caller = this.domElement;
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
        this.close();
        this.removeEventListeners();
        InputWithSearch.setInputActive(this.domElement, false);
        this.domElement.classList.remove(...this.getClassesByKey('input'));
        weakMapIWS.getDataWeakMapIWS(InputWithSearchForWindow.getInstance()).list.removeElement(this.domElement);
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

        const notChangeableKeys = ['input', 'bodyOpen'];

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
        this.customData = InputWithSearch.getValidateData(data);
    }

    clearCustomData(){
        this.customData = null;
    }

    getCustomData(){
        return this.customData;
    }

    checkCustomData(){
        return this.customData !== null;
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
            'inputWithSearch_onChangeWindow': false
        };
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
            timeLiveSaveData: 60*60*1000,
            classes: this.htmlElementsClasses,
            data: false,
            cssParamsWindow: InputWithSearchWindow.defaultCssParams,
            triangle: false,
            baseWindowEventsActive: {}
        };
    }
}

const checkDomOnInput = (domElement) => {
    return domElement.tagName === 'INPUT';
} ;

export default InputWithSearch;