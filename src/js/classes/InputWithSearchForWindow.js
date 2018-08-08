import ListInputWithSearch from './ListInputWithSearch';
import InputWithSearch from './InputWithSearch';
import PropertyError from './Errors/PropertyError';
import funcs from '../functions/functions';
import weakMapIWS from '../functions/weakMapIWS';

class InputWithSearchForWindow{

    constructor() {

        if (InputWithSearchForWindow.hasOwnProperty('singleton'))
            return InputWithSearchForWindow.singleton;

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
        let protectedFields = {
            list: new ListInputWithSearch(),
            themes: new Map()
        };

        weakMapIWS.setDataWeakMapIWS(this, protectedFields);

        let mutationObserver = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                Array.prototype.slice.call(mutation.removedNodes, 0).filter(element => {
                    if (this.checkInit(element)){
                        this.get(element).destructor();
                    } else {
                        if (element instanceof HTMLElement){
                            Array.prototype.slice.call(
                                InputWithSearch.getInHtmlElementAllElementsByClass(element),
                                0
                            ).forEach(elementWasInit => {
                                this.get(elementWasInit).destructor();
                            });
                        }
                    }
                });
            });
        });

        mutationObserver.observe(document.documentElement, {
            childList: true,
            subtree: true,
        });
    }

    /**
     * Get example class InputWithsSearch from store
     * @param {HTMLElement|string} domElement
     * @param {object} objectConfig
     * @param {string|string[]} themes
     * @returns {InputWithSearch}
     */
    getElement(domElement, objectConfig = {}, themes = ''){
        let element = this._getElementFromPage(domElement);

        if (element !== false){
            if (!this.checkInit(element)){
                this.init(element, objectConfig, themes);
            }
            return this.get(element);
        }

        throw new Error(`Нет валидного DOM-элемента для выдачи ${domElement}`);
    }

    /**
     * InitFunction
     * @param {HTMLElement} element
     * @param {object} objectConfig
     * @param {string|string[]} themes
     * @returns {InputWithSearch}
     */
    init(element, objectConfig = {}, themes = ''){

        const getListAvailableThemeConfig = () => {

            let retObject = {};

            if (themes !== ''){
                if (!Array.isArray(themes)){
                    themes = [themes];
                }
                let themesList = weakMapIWS.getDataWeakMapIWS(this).themes;

                themes.reduce((acc, themeName) => {
                    if (themesList.has(themeName)){
                        acc[themeName] = themesList.get(themeName);
                    }
                    return acc;
                }, retObject);
            }
            return retObject;
        };

        let list = weakMapIWS.getDataWeakMapIWS(this).list;
        let availableThemeConfigs = Object.values(getListAvailableThemeConfig());
        for (let objectTheme of availableThemeConfigs){
            let fn = objectTheme.fnRunBeforeStart;
            if (typeof fn === 'function'){
                fn.call(null, element);
            }
        }
        for (let objectTheme of availableThemeConfigs){
            let objectData = objectTheme.objectData;
            if (Object.keys(objectData).length){
                let classes = funcs.sliceObjectArrays(objectData.classes, objectConfig.classes);
                objectConfig = funcs.extend(true, {}, objectData, objectConfig);
                objectConfig.classes = classes;
            }
        }
        let exemplar = new InputWithSearch(element, objectConfig);
        list.addElement(element, exemplar);
        for (let objectTheme of availableThemeConfigs){
            let fn = objectTheme.fnRunOnStart;
            if (typeof fn === 'function'){
                fn.call(null, exemplar);
            }
        }

        return list.getElement(element);
    }

    /**
     * Get element from page by string or return HTMLElement
     * @param {HTMLElement|string} domElement
     * @return {boolean|HTMLElement}
     * @private
     */
    _getElementFromPage(domElement){
        const checkIdFn = (someData) => {
            if (typeof someData === 'string'){
                return checkHTMLfn(document.getElementById(someData));
            }
            return false;
        };

        const checkHTMLfn = (someData) => {
            return someData instanceof HTMLElement;
        };

        const getElemById = (stringId) => {
            return checkIdFn(stringId) ? document.getElementById(stringId) : false;
        };

        let element = checkHTMLfn(domElement)
            ? domElement
            : getElemById(domElement);

        return element;
    }

    /**
     * Get element
     * @param {HTMLElement|string} domElement
     * @return {InputWithSearch|undefined}
     */
    get(domElement){
        return weakMapIWS.getDataWeakMapIWS(this).list.getElement(this._getElementFromPage(domElement));
    }

    /**
     * Check dom element init
     * @param {HTMLElement} domElement
     * @return {boolean}
     */
    checkInit(domElement){
        return weakMapIWS.getDataWeakMapIWS(this).list.hasElement(domElement);
    }

    /**
     * Add theme for use in objects
     * @param {string} name
     * @param {object} objectData
     * @param {function(InputWithSearch)} fnRunOnStart
     * @param {function(HTMLElement)} fnRunBeforeStart
     */
    addTheme(name, objectData, fnRunOnStart, fnRunBeforeStart){

        let themes = weakMapIWS.getDataWeakMapIWS(this).themes;

        if (!themes.has(name)){
            themes.set(name, {
                objectData,
                fnRunOnStart,
                fnRunBeforeStart
            });
        } else {
            throw new PropertyError(name);
        }
    }

    /**
     * @return {InputWithSearchForWindow}
     */
    static getInstance(){
        return this.singleton;
    }

}

export default InputWithSearchForWindow;