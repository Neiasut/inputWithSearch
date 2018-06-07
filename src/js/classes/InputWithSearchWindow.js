import EventSave from './EventSave';
import funcs from '../functions/functions';

class InputWithSearchWindow{

    constructor(dependElement, settings){

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

    addToDomWindow(){
        document.body.appendChild(this.constructorDOM());
    }

    constructorDOM(){
        let content = this.constructorTriangle() + `
                <div class="${this.getClassesByKey('wrapperSub', true)}">
                    <div class="${this.getClassesByKey('wrapperInner', true)}">
                        <div class="${this.getClassesByKey('wrapperList', true)}"></div>
                    </div>
                </div>
            `;
        let wrapper = document.createElement('div');
        wrapper.classList.add(...this.getClassesByKey('wrapper'));
        wrapper.innerHTML = content;

        return wrapper;
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

    addInfoToList(htmlToList, plus = false){
        if (plus){
            this.getElementByKey('wrapperList').innerHTML = this.getElementByKey('wrapperList').innerHTML + htmlToList;
            return;
        }
        this.getElementByKey('wrapperList').innerHTML = htmlToList;
    }

    destructor(){
        this.fireEventAndCallback('inputWithSearchWindow_destruction');
        this.removeListeners();
        this.removeMutationObserver();
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
                    this.fireEventAndCallback('inputWithSearchWindow_clickOnElementList', elem);
                }),
                protectedStatus: true
            },
            {
                name: 'resize',
                domElement: window,
                events: 'resize',
                fn: () => {
                    this.reSetPosition();
                },
                protectedStatus: true
            },
            {
                name: 'clickOuter',
                domElement: document,
                events: 'click',
                fn: (event) => {
                    if (event.target.closest(`.${this.getClassesByKey('wrapper')}`)
                        || funcs.hasClass(event.target, 'InputWithSearch')){
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
                        this.setElemListActive(elem);
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
                    let relativeClass = window.inputWithSearch.getElement(this.settings.relativeDomElement);

                    if (relativeClass.checkStatus(1)){

                        const down = event.keyCode === 40;
                        const up = event.keyCode === 38;
                        const enter = event.keyCode === 13;

                        if ((up || down) && windowSh.checkDataSave()){
                            event.preventDefault();
                            this.timerWaitToBlockHoverSelected = setTimeoutOnBlockSelected(
                                this.timerWaitToBlockHoverSelected,
                                windowSh
                            );
                            if ( down ){
                                windowSh.setElemListActiveByDirection();
                            }
                            if ( up ){
                                windowSh.setElemListActiveByDirection(false);
                            }
                        }

                        if (enter){
                            if (windowSh.getSelectedNumb() !== -1){
                                relativeClass.setActiveByNumbFromList(
                                    windowSh.getSelectedNumb()
                                );
                            }
                            relativeClass.close();
                        }
                    }
                },
                protectedStatus: true
            }
        ];

        eventsArr.forEach((info) => {
            let arrInfo = Object.values(info);
            let name = arrInfo[0];
            if (!(name in InputWithSearchWindow.baseEventsActive) || baseEventsActive[name] === true){
                this.listeners.addRecord(...arrInfo);
            }
        });
    }

    setElemListActiveByNumb(numb){
        if (this.checkDataSave()){
            if (numb < this.getDataFromSave().length){
                if (numb < 0){
                    this.unSelectedElements();
                } else {
                    const classes = this.getClassesByKey('elementList')[0];
                    let domElement = this.elements.wrapper.querySelector(`.${classes}[data-numb="${numb}"]`);
                    if (domElement !== null){
                        this.setElemListActive(domElement, true, numb);
                    }
                }
            }
        }
    }

    setElemListActiveByDirection(down = true){
        this.setElemListActiveByNumb(
            this.getSelectedNumb() + (down ? 1 : -1)
        );
    }

    unSelectedElements(){
        this.setSelectedNumb();
        const classes = InputWithSearchWindow.getClassesBaseByKey('elementListSelected')[0];
        this.elements.wrapper.querySelectorAll(`.${classes}`).forEach((element) => {
            element.classList.remove(classes);
        });
    }

    setElemListActive(domListElement, withScroll = false, numbElement = false){
        const numb = typeof numbElement === 'number' ? numbElement : parseInt(domListElement.getAttribute('data-numb'));
        const classes = InputWithSearchWindow.getClassesBaseByKey('elementListSelected')[0];

        if (numb !== this.selectedNumb){

            this.unSelectedElements();
            this.setSelectedNumb(numb);

            if (withScroll){
                this.elements.wrapperInner.scrollTop = domListElement.offsetTop;
            }

            domListElement.classList.add(classes);
        }
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

        let elem_character = this.dependElement.getBoundingClientRect(),
            scroll = window.pageYOffset || document.documentElement.scrollTop,
            style = this.elements.wrapper.style;

        let cssParams = this.settings.cssParams;
        let width = elem_character.width;
        if (width < cssParams.minWidth){
            width = cssParams.minWidth;
        }
        if (width > cssParams.maxWidth){
            width = cssParams.maxWidth;
        }

        let winWidth = window.innerWidth;
        let [mTop, mRight, mBot, mLeft] = cssParams.margin;
        let left = elem_character.left + (elem_character.width - width)/2;

        if (left < mLeft){
            left = mLeft;
        }
        if (winWidth - (left + width) < mRight){
            left = winWidth - width - mRight;
        }

        style.top = scroll + elem_character.bottom + 'px';
        style.left = Math.ceil(left) + 'px';
        style.width = width + 'px';
        style.position = 'absolute';
        if (mTop > 0){
            style.marginTop = mTop + 'px';
        }
        if (mBot > 0){
            style.marginBottom = mBot + 'px';
        }

        let triangle = this.getElementByKey('wrapperTriangle');
        if (triangle !== null){
            let leftTriangle = (elem_character.left - left) + elem_character.width/2 - triangle.offsetWidth/2;
            triangle.style.left = Math.ceil(leftTriangle) + 'px';
        }
    }

    static get classesBase(){
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

    static getClassesBaseByKey(key){
        return this.classesBase[key];
    }

    static get listCallbacksAndEvents(){
        return {
            'inputWithSearchWindow_clickOnElementList': false,
            'inputWithSearchWindow_destruction': false,
            'inputWithSearchWindow_changeContent': false
        };
    }

    static get defaultSettings(){
        return {
            classes: this.classesBase,
            constructors: {
                element: (data, value, fn) => fn(`${data} c данными ${value}`),
                error: errorText => errorText,
                lessSymbols: (value, needSymbolsLength) => `Введите ${needSymbolsLength} или более символов.`,
                notFind: (value) => `По запросу ${value} ничего не было найдено!.`
            },
            callbacks: this.listCallbacksAndEvents,
            cssParams: this.defaultCssParams,
            triangle: false,
            relativeDomElement: false,
            baseEventsActive: this.baseEventsActive,
            maxViewElements: 50
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
            maxWidth: 300
        };
    }

    addDataListSave(data){
        this.dataList = data;
        this.dataListHaveData = true;
    }

    checkDataSave(){
        return this.dataListHaveData;
    }

    getDataFromSave(){
        return this.dataList;
    }

    clearDataListSave(){
        this.dataList = [];
        this.dataListHaveData = false;
    }

    setSelectedNumb(numb = -1){
        this.selectedNumb = numb;
    }

    getSelectedNumb(){
        return this.selectedNumb;
    }

    addListElements(dataList, value){

        const filterData = (arr, maxLength) => {
            return arr.length > maxLength
                ? arr.slice(0, maxLength)
                : arr;
        };

        this.addInfoToList('');
        this.addDataListSave(dataList);

        let viewElements = this.settings.maxViewElements < dataList.length
            ? this.settings.maxViewElements
            : dataList.length;

        filterData(dataList, viewElements)
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
    }

    setToMessage(typeMessage, params){
        this.clearDataListSave();
        this.addInfoToList(
            InputWithSearchWindow.constructMessage(
                typeMessage,
                params,
                this.settings.constructors[typeMessage],
                this.getClassesByKey('message')
            )
        );
    }

    setToError(...args){
        this.clearDataListSave();
        this.addInfoToList(
            InputWithSearchWindow.constructMessageError(
                ...args,
                this.getClassesByKey('error'),
                this.settings.constructors['error']
            )
        );
    }

    setToWait(){
        this.clearDataListSave();
        this.addInfoToList(
            InputWithSearchWindow.constructWaitThrobber()
        );
    }

    static constructElement(data, value, numb, fn, classes){
        return `
                <div class="${classes}" data-numb="${numb}">
                    ${fn(data, value, funcs.highlightMatchesToString)}
                </div>
            `;
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

export default InputWithSearchWindow;