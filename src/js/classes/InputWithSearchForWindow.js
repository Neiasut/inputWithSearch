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
    }

    /**
     * Get example class InputWithsSearch from store
     * @param {HTMLElement|string} domElement
     * @param {object} objectConfig
     * @param {string|string[]} themes
     * @returns {InputWithSearch}
     */
    getElement(domElement, objectConfig = {}, themes = ''){

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

        const classesArraysSlice = (themeClasses, objectClasses) => {
            if (typeof themeClasses === 'object' && typeof objectClasses === 'object') {
                let keysTheme = Object.keys(themeClasses),
                    keysObject = Object.keys(objectClasses),
                    summKeys =  [...new Set([...keysTheme,...keysObject])];
                return summKeys.reduce((acc, key) => {
                    let inTheme = key in themeClasses,
                        inObject = key in objectClasses;
                    if (inTheme && inObject) {
                        acc[key] = [...new Set([...themeClasses[key], ...objectClasses[key]])];
                        return acc;
                    }
                    acc[key] = inTheme ? themeClasses[key] : objectClasses[key];
                    return acc;
                }, {});
            }
            return {};
        };

        let element = checkHTMLfn(domElement)
            ? domElement
            : getElemById(domElement);

        if (element !== false){

            let list = weakMapIWS.getDataWeakMapIWS(this).list;

            if (!list.hasElement(element)){
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
                        let classes = classesArraysSlice(objectData.classes, objectConfig.classes);
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
            }

            return list.getElement(element);
        }

        throw new Error(`Нет валидного DOM-элемента для выдачи ${domElement}`);
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