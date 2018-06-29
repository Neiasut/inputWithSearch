import defaultExportTheme from '../defaultExportTheme';
import funcs from '../../functions/functions';

/**
 * Get from event object element
 * @param e
 * @return {InputWithSearch}
 */
const getFromEventObject = e => e.detail.inputWithSearch.object;

/**
 * construct domElement for delegate select
 * @param {string} text
 * @return {string}
 */
const constructorDelegateElement = (text) => `
    ${text}
`;

/**
 * Add delegateElement
 * @param {HTMLElement} toAppend
 * @param {string} id
 * @param {array} classes
 */
const addDelegateElement = (toAppend, id, classes = ['InputWithSearchSelect']) => {
    let delegateElement = document.createElement('div');
    delegateElement.setAttribute('id', id);
    delegateElement.classList.add(...classes);
    delegateElement.innerHTML = constructorDelegateElement('delegateElement');
    funcs.insertAfter(delegateElement, toAppend);
};

/**
 * Generate attribute id for select imitate
 * @param {string} objectId
 * @return {string}
 */
const constructIdSelect = objectId => objectId+'_select';

/**
 * Callback for inputWithSearch_beforeInit event
 * @param e
 */
const cbBeforeStart = e => {
    let object = getFromEventObject(e);
    let domElement = object.getWorkDomElement(true);
    domElement.style.display = 'none';
    const id = constructIdSelect(object.id);
    addDelegateElement(domElement, id);
    object.updateSettings({
        delegateElement: document.getElementById(id)
    });
};

/**
 * Callback for inputWithSearch_beforeDestruction event
 * @param e
 */
const cbBeforeDestruct = (e) => {
    /**
     * @type {InputWithSearch}
     */
    let object = getFromEventObject(e);
    let HTMLElem = object.getWorkDomElement(true);
    HTMLElem.removeEventListener('inputWithSearch_beforeInit', cbBeforeStart);
    HTMLElem.removeEventListener('inputWithSearch_beforeDestruction', cbBeforeDestruct);
    HTMLElem.style.display = '';
    HTMLElem.parentElement.removeChild(document.getElementById(constructIdSelect(object.id)));
};

const cbOnChangeData = (...args) => {
    console.log(args);

};

export default defaultExportTheme(
    'select',
    {
        onEvents: 'click'
    },
    (object) => {
        object.setCustomData([
            'test',
            'test2',
            'test3'
        ]);
    },
    (HTMLElem) => {
        HTMLElem.addEventListener('inputWithSearch_beforeInit', cbBeforeStart);
        HTMLElem.addEventListener('inputWithSearch_beforeDestruction', cbBeforeDestruct);
        //HTMLElem.addEventListener('inputWithSearch_changeActive', cbOnChangeData);
    }
);