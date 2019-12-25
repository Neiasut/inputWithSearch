import EventSave from './EventSave';
import funcs from '../functions/functions';
import WatcherPosition from './WatcherPosition';

class InputWithSearchWindow{

    constructor(dependElement, settings){

        this.settings = InputWithSearchWindow.defaultSettings;
        this.updateSettings(settings);

        this.addToDomWindow();
        this.addElementsToConfig();
        this.addListeners();
        this.dependElement = dependElement;
        this.setBlockHoverSelected();

        this.setStatus();
        this.reSetPosition();
        this.fireEventAndCallback('inputWithSearchWindow_afterConstruction');
    }

    addToDomWindow(){
        document.body.appendChild(this.constructorDOM());
    }

    constructorDOM(){
        let content = this.constructorTriangle() + `
                <div class="${this.getClassesByKey('wrapperSub', true)}">
                    <div class="${this.getClassesByKey('wrapperInner', true)}">
                        <div class="${this.getClassesByKey('wrapperList', true)}"></div>
                        ${this.constructorCloseBtn()}
                    </div>
                </div>
            `;
        let wrapper = document.createElement('div');
        wrapper.classList.add(...this.getClassesByKey('wrapper'));
        wrapper.innerHTML = content;

        return wrapper;
    }

    constructorCloseBtn(){
        let closeBtn = this.settings.closeBtn;

        if (closeBtn){
            return `<div class="${this.getClassesByKey('wrapperCloseBtn', true)}"></div>`;
        }
        return '';

    }

    constructorTriangle(){
        let triangle = this.settings.triangle;

        if (triangle){
            return `
                <div class="${this.getClassesByKey('wrapperTriangle', true)}"></div>
            `;
        }
        return '';
    }

    addElementsToConfig(){
        this.elements = {};
        for (let nameElement of Object.keys(InputWithSearchWindow.classesBase)){
            this.addElementToConfig(nameElement);
        }

        this.addMutationObserver();
    }

    /* mutation observer on change content in list */

    addMutationObserver(){

        let observer = new MutationObserver((mutations) => {
            this.fireEventAndCallback('inputWithSearchWindow_changeContent', {mutations});
        });

        let config = { childList: true };

        observer.observe(this.getElementByKey('wrapperList'), config);

        this.observerList = observer;
    }

    removeMutationObserver(){
        this.observerList.disconnect();
    }

    /* end mutation observer on change content in list */

    addElementToConfig(nameElement){
        const classes = InputWithSearchWindow.classesBase[nameElement][0];
        this.elements[nameElement] = document.querySelector('.' + classes);
    }

    getElementByKey(key){
        return this.elements[key];
    }

    addInfoToList(htmlToList, plus = false) {
        const wrapper = this.getElementByKey('wrapperList');
        if (typeof htmlToList === 'string') {
            if (plus){
                wrapper.innerHTML = this.getElementByKey('wrapperList').innerHTML + htmlToList;
                return;
            }
            wrapper.innerHTML = htmlToList;
        } else {
            if (plus) {
                wrapper.appendChild(htmlToList);
                return;
            }
            wrapper.innerHTML = '';
            wrapper.appendChild(htmlToList);
        }
    }

    destructor(){
        this.fireEventAndCallback('inputWithSearchWindow_destruction');
        this.removeListeners();
        this.removeMutationObserver();
        this._setHoveredKey('clear');
        this.destructorDOM();
    }

    fireEventAndCallback(name, data = {}){

        if (name in InputWithSearchWindow.listCallbacksAndEvents){
            let caller = this.elements.wrapper;
            let dataToOutput = {
                inputWithSearchWindow: {
                    object: this,
                    data
                }
            };
            funcs.callEvent(caller, name, {
                inputWithSearchWindow: this
            });
            let func = this.settings.callbacks[name];
            if (typeof func === 'function'){
                func(...Object.values(dataToOutput.inputWithSearchWindow));
            }
        }
    }

    destructorDOM(){
        let element = this.getElementByKey('wrapper');
        element.parentNode.removeChild(element);
    }

    addListeners(){

        const setTimeoutOnBlockSelected = (timer, winSh, time = 200) => {
            clearTimeout(timer);
            winSh.setBlockHoverSelected(true);
            return setTimeout(() => {
                winSh.setBlockHoverSelected(false);
            }, time);
        };

        this.timerWaitToBlockHoverSelected = false;

        this.listeners = new EventSave();
        let wrapper = this.elements.wrapper;
        const elemListClass = InputWithSearchWindow.getClassesBaseByKey('elementList')[0];

        let baseEventsActive = this.settings.baseEventsActive;
        const eventsArr = [
            {
                name: 'clickElement',
                domElement: wrapper,
                events: 'click',
                fn: (event) => funcs.delegateFn(event, elemListClass, (e, elem) => {
                    this.setElemListActiveByKey( InputWithSearchWindow._getKeyAttrFromDomElement(elem) );
                    this.fireEventAndCallback('inputWithSearchWindow_clickOnElementList', elem);
                }),
                protectedStatus: true
            },
            {
                name: 'clickOuter',
                domElement: document,
                events: 'click',
                fn: (event) => {
                    if (event.target.closest(`.${this.getClassesByKey('wrapper')}, .InputWithSearch`)){
                        return;
                    }
                    this.destructor();
                },
                protectedStatus: true
            },
            {
                name: 'mouseEnterElement',
                domElement: wrapper,
                events: 'mouseover',
                fn: (e) => funcs.delegateFn(e, elemListClass, (e, elem) => {
                    if (!this.checkBlockHoverSelected()){
                        this._setElemListHover(elem);
                    }
                }),
                protectedStatus: true
            },
            {
                name: 'interceptionEvents',
                domElement: document,
                events: 'keydown',
                fn: (event) => {

                    let windowSh = this;
                    let relativeClass = this.getRelativeObject();


                    if (relativeClass.checkStatus(1)){

                        const down = event.keyCode === 40;
                        const up = event.keyCode === 38;
                        const enter = event.keyCode === 13;

                        if ((up || down) && windowSh.checkStatus()){
                            event.preventDefault();
                            this.timerWaitToBlockHoverSelected = setTimeoutOnBlockSelected(
                                this.timerWaitToBlockHoverSelected,
                                windowSh
                            );
                            if ( down ){
                                windowSh.setElemListHoverByDirection();
                            }
                            if ( up ){
                                windowSh.setElemListHoverByDirection(false);
                            }
                        }

                        if (enter){

                            const hoveredKey = windowSh._getHoveredKey();

                            if (hoveredKey !== 'null'){
                                this.setElemListActiveByKey( hoveredKey );
                                relativeClass._setActiveByKeyFromList( hoveredKey );
                            }

                            relativeClass.close();
                        }
                    }
                },
                protectedStatus: true
            },
            {
                name: 'watcherPosition',
                domElement: wrapper,
                events: 'inputWithSearchWindow_afterConstruction',
                fn: () => {
                    this._addWatcherPosition();
                },
                protectedStatus: true
            },
            {
                name: 'removeWatcherPosition',
                domElement: wrapper,
                events: 'inputWithSearchWindow_destruction',
                fn: () => {
                    this._removeWatcherPosition();
                },
                protectedStatus: true
            }
        ];

        if (this.settings.closeBtn){
            eventsArr.push({
                name: 'closeBtnEvent',
                domElement: this.getElementByKey('wrapperCloseBtn'),
                events: 'click',
                fn: () => {
                    this.destructor();
                },
                protectedStatus: true
            });
        }

        eventsArr.forEach((info) => {
            let arrInfo = Object.values(info);
            let name = arrInfo[0];
            if (!(name in InputWithSearchWindow.baseEventsActive) || baseEventsActive[name] === true){
                this.listeners.addRecord(...arrInfo);
            }
        });
    }

    /**
     *
     * @return {InputWithSearch}
     */
    getRelativeObject(){
        return window.inputWithSearch.getElement(this.dependElement);
    }

    setElemListHoverByKey(key, withScroll = true){
        if (this.checkStatus() && this._getList().checkKeyInActionData(key)){
            const classes = this.getClassesByKey('elementList')[0];
            let domElement = this.elements.wrapper.querySelector(`.${classes}[data-key="${key}"]`);
            if (domElement !== null){
                this._setElemListHover(domElement, withScroll, key);
            }
        }
    }

    setElemListHoverByDirection(down = true){

        let arrKeys = Object.keys(this.getDataForList(true));
        let hoveredKey = this._getHoveredKey();
        let index = arrKeys.indexOf(hoveredKey);

        if (down){
            if (hoveredKey === -1){
                this.setElemListHoverByKey(arrKeys[0]);
                return;
            }
            if (arrKeys[arrKeys.length - 1] === hoveredKey){
                this.setElemListHoverByKey(hoveredKey);
                return;
            }
            this.setElemListHoverByKey(arrKeys[index+1]);
            return;
        }
        if (index === 0){
            this._unHoveredElements();
            this._setHoveredKey('clear');
            return;
        }
        this.setElemListHoverByKey(arrKeys[index-1]);
    }

    _unHoveredElements(){
        const classes = InputWithSearchWindow.getClassesBaseByKey('elementListHovered')[0];
        this.elements.wrapper.querySelectorAll(`.${classes}`).forEach((element) => {
            element.classList.remove(classes);
        });
    }

    _setElemListHover(domListElement, withScroll = false, keyElement = false){

        const key = typeof keyElement === 'string' ? keyElement : domListElement.getAttribute('data-key');
        const classes = InputWithSearchWindow.getClassesBaseByKey('elementListHovered')[0];

        if (key !== this._getHoveredKey()){

            this._unHoveredElements();
            this._setHoveredKey(key);

            if (withScroll){
                this.elements.wrapperInner.scrollTop = domListElement.offsetTop;
            }
        }

        domListElement.classList.add(classes);
    }

    setElemListActiveByKey(key, updateOnlyDom = false, withScroll = true){

        if (key !== 'null' && (key !== this._getActiveKey() || updateOnlyDom)){

            const classes = InputWithSearchWindow.getClassesBaseByKey('elementListSelected')[0];

            this._unActiveElements();
            if (!updateOnlyDom){
                this._setActiveKey(key);
            }

            let domElement = this._getDomElementByKey(key);

            if (withScroll){
                this.elements.wrapperInner.scrollTop = domElement.offsetTop;
            }

            domElement.classList.add(classes);
        }
    }

    static _getKeyAttrFromDomElement(domElement){
        return domElement.getAttribute('data-key');
    }

    _getDomElementByKey(key){
        return this.elements.wrapper.querySelector(`[data-key="${key}"]`);
    }

    _unActiveElements(){
        const classes = InputWithSearchWindow.getClassesBaseByKey('elementListSelected')[0];
        this.elements.wrapper.querySelectorAll(`.${classes}`).forEach((element) => {
            element.classList.remove(classes);
        });
    }

    setBlockHoverSelected(set = false){
        this.blockHoverSelected = set;
    }

    checkBlockHoverSelected(){
        return this.blockHoverSelected;
    }

    removeListeners(){
        this.listeners.removeAllRecords();
    }

    updateSettings(newSettings){

        let classes = false;

        if ('classes' in newSettings){
            classes = funcs.mergeListArraysWithoutDuplicates(this.settings.classes, newSettings['classes']);
        }

        this.settings = funcs.extend(true, {}, this.settings, newSettings);

        if (classes){
            this.settings.classes = classes;
        }
    }

    getClassesByKey(key, join = false){
        let classes = this.settings.classes[key];
        return join ? classes.join(' ') : classes;
    }

    reSetPosition(){

        let elem = this.getRelativeObject().getWorkDomElement();

        if (isHidden(elem)) {
            this.destructor();
            return;
        }

        let cssParams = this.settings.cssParams;
        let customFunctionForResizing = this.settings.cssCallbacks;
        let {window: customFnResize, triangle: customFnRePositionTriangle} = customFunctionForResizing;

        if (checkOnFunction(customFnResize)) {
            customFnResize(elem, cssParams, this.elements);
        } else {
            const { wrapper } = this.elements;
            const { margin, minWidth, maxWidth, width: widthWrapper } = cssParams;
            const [mTop, , mBot] = margin;
            const scroll = window.pageYOffset || document.documentElement.scrollTop;
            wrapper.style.maxWidth = maxWidth !== 'none' ? maxWidth + 'px' : 'none';
            wrapper.style.minWidth = minWidth !== 'none' ? minWidth + 'px' : 'none';
            const headerRect = elem.getBoundingClientRect();
            let widthString;
            switch (widthWrapper) {
                case 'auto':
                    widthString = 'auto';
                    break;
                case 'inherit':
                    widthString = headerRect.width + 'px';
                    break;
                default:
                    widthString = widthWrapper + 'px';
            }
            wrapper.style.width = widthString;
            wrapper.style.marginBottom = mBot + 'px';

            const top = scroll + headerRect.bottom + mTop - (scroll + document.body.getBoundingClientRect().top);
            const width = this.elements.wrapperSub.getBoundingClientRect().width;
            wrapper.style.top = top + 'px';
            let right = 0;
            const winWidth = document.body.offsetWidth;
            if (headerRect.right > winWidth) {
                right = headerRect.right;
            } else if (winWidth - headerRect.right < (width - headerRect.width) / 2) {
                right = winWidth;
            } else {
                right = headerRect.right + (width - headerRect.width) / 2;
            }
            if (right < width) {
                right = width;
            }
            wrapper.style.right = (winWidth - right) + 'px';

            let triangle = this.getElementByKey('wrapperTriangle');

            if (triangle !== null) {

                let elem_character = elem.getBoundingClientRect();
                let window_character = this.elements.wrapper.getBoundingClientRect();

                if (checkOnFunction(customFnRePositionTriangle)) {
                    customFnRePositionTriangle(triangle, elem, cssParams);
                } else {
                    let leftTriangle = (elem_character.left - window_character.left) + elem_character.width/2
                        - triangle.offsetWidth/2;
                    triangle.style.left = Math.ceil(leftTriangle) + 'px';
                }
            }
        }
    }

    static get classesBase(){
        return {
            wrapper: ['InputWithSearchWindow'],
            wrapperSub: ['InputWithSearchWindow-Sub'],
            wrapperInner: ['InputWithSearchWindow-Inner'],
            wrapperList: ['InputWithSearchWindow-List'],
            wrapperTriangle: ['InputWithSearchWindow-Triangle'],
            wrapperCloseBtn: ['InputWithSearchWindow-CloseBtn'],
            elementList: ['InputWithSearchWindow-Element'],
            elementListSelected: ['InputWithSearchWindow-Element_selected'],
            elementListHovered: ['InputWithSearchWindow-Element_hovered'],
            message: ['InputWithSearchWindow-Message'],
            error: ['InputWithSearchWindow-Error']
        };
    }

    static getClassesBaseByKey(key){
        return this.classesBase[key];
    }

    static get listCallbacksAndEvents(){
        return {
            'inputWithSearchWindow_clickOnElementList': false,
            'inputWithSearchWindow_destruction': false,
            'inputWithSearchWindow_changeContent': false,
            'inputWithSearchWindow_afterConstruction': false
        };
    }

    static get defaultSettings(){
        return {
            classes: this.classesBase,
            constructors: {
                element: (data, value, fn) => fn(`Данные ${data} cо значением ${value}`),
                error: errorText => errorText,
                lessSymbols: (value, needSymbolsLength) => `Введите ${needSymbolsLength} или более символов.`,
                notFind: (value) => `По запросу ${value} ничего не было найдено!.`
            },
            callbacks: this.listCallbacksAndEvents,
            cssParams: this.defaultCssParams,
            triangle: false,
            closeBtn: false,
            baseEventsActive: this.baseEventsActive
        };
    }

    static get baseEventsActive(){
        return {
            mouseEnterElement: true,
            interceptionEvents: true,
            clickElement: true
        };
    }

    static get defaultCssParams(){
        return {
            margin: [0, 10, 0, 10],
            minWidth: 200,
            maxWidth: 300,
            width: 'auto'
        };
    }

    static get cssCallbacks() {
        return {
            window: 'standart',
            triangle: 'standart'
        };
    }

    setStatus(withData = false){
        this.haveData = withData;
    }

    checkStatus(){
        return this.haveData;
    }

    /**
     *
     * @returns {ContainerData}
     * @private
     */
    _getList(){
        return this.getRelativeObject().savesData;
    }

    getDataForList(keys = false){
        return this._getList().getData(false, keys === true ? 'keyId' : null);
    }

    _setHoveredKey(key){
        this._getList().hoveredKey = key;
    }

    _getHoveredKey(){
        return this._getList().hoveredKey;
    }

    _setActiveKey(key){
        this._getList().activeKey = key;
    }

    _getActiveKey(){
        return this._getList().activeKey;
    }

    addListElements(dataList, value, reposition = true){

        this.addInfoToList('');
        this.setStatus(true);

        dataList
            .forEach((dataElement, numb) => {
                this.addInfoToList(
                    InputWithSearchWindow.constructElement(
                        dataElement,
                        value,
                        numb,
                        this.settings.constructors['element'],
                        this.getClassesByKey('elementList', true)
                    ),
                    true
                );
            });

        const activeKey = this._getActiveKey();
        const checkActiveKey = activeKey !== 'null';

        if (reposition){
            this.setElemListActiveByKey(activeKey, true, false);
        } else {
            if (checkActiveKey){
                this.setElemListActiveByKey(activeKey, true, true);
                this.setElemListHoverByKey(activeKey, true);
            } else {
                const hoveredKey = this._getHoveredKey();
                if (hoveredKey !== 'null'){
                    this.setElemListHoverByKey(hoveredKey, reposition);
                }
            }
        }

        this.reSetPosition();
    }

    setToMessage(typeMessage, params){
        this.setStatus();
        this.addInfoToList(
            InputWithSearchWindow.constructMessage(
                typeMessage,
                params,
                this.settings.constructors[typeMessage],
                this.getClassesByKey('message')
            )
        );

        this.reSetPosition();
    }

    setToError(...args){
        this.setStatus();
        this.addInfoToList(
            InputWithSearchWindow.constructMessageError(
                ...args,
                this.getClassesByKey('error'),
                this.settings.constructors['error']
            )
        );

        this.reSetPosition();
    }

    setToWait(){
        this.setStatus();
        this.addInfoToList(
            InputWithSearchWindow.constructWaitThrobber()
        );

        this.reSetPosition();
    }

    _addWatcherPosition(){
        let element = this.getRelativeObject().getWorkDomElement();
        this._watcher = new WatcherPosition(
            element,
            () => {
                this.reSetPosition();
            }
        );
    }

    _removeWatcherPosition(){
        this._watcher.destructor();
    }

    static constructElement(data, value, numb, fn, classes){
        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', classes);
        wrapper.setAttribute('data-key', data.key);
        wrapper.setAttribute('data-numb', numb);
        const info = fn(data.data, value, funcs.highlightMatchesToString);
        if (typeof info === 'string') {
            wrapper.innerHTML = info;
        } else {
            wrapper.appendChild(info);
        }
        return wrapper;
    }

    static constructMessage(typeMessage, params, fn, classes){
        return `
                <div class="${classes}">
                    ${fn(...params)}
                </div>
            `;
    }

    static constructMessageError(textError, errorCode, classes, fn){
        return `
                <div class="${classes}">
                    ${fn(textError, errorCode)}
                </div>
            `;
    }

    static constructWaitThrobber(){
        return `
            <div class="InputWithSearchWindow-Load">
                <div class="InputWithSearchLoader">
                    <div class="InputWithSearchLoader-Loader"></div>
                </div>
            </div>
            `;
    }
}

const isHidden = el => el.offsetParent === null;

const checkOnFunction = el => typeof el === 'function';

export default InputWithSearchWindow;
