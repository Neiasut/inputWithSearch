import defaultExportTheme from '../defaultExportTheme';

/**
 * Get from event object element
 * @param e
 * @return {InputWithSearch}
 */
const getFromEventObject = e => e.detail.inputWithSearch.object;

/**
 * Callback for inputWithSearch_beforeInit event
 * @param e
 */
const cbBeforeStart = e => {
    let object = getFromEventObject(e);
    let domElement = object.getWorkDomElement(true);
    domElement.style.display = 'none';
};

const getArrayInfoFromSelect = selectDom => Array.from(selectDom.querySelectorAll('option')).map(option => ({
    text: option.textContent,
    value: option.value,
    selected: option.selected
}));

const checkActiveObjectInfoFromSelect = objectCheck => objectCheck.selected;

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
};

const cbOnChangeData = e => {
    /**
     * @type {InputWithSearch}
     */
    let object = e.detail.inputWithSearch.object;
    let select = object.getWorkDomElement(true);
    let data = object.getDataByKey(e.detail.inputWithSearch.key);
    if (select.value !== data.value) {
        select.value = data.value;
        if ('createEvent' in document) {
            let evt = document.createEvent('HTMLEvents');
            evt.initEvent('change', false, true);
            select.dispatchEvent(evt);
        }
        else {
            select.fireEvent('onchange');
        }
    }
};

const callbackOnExternalChange = e => {
    let target = e.target;
    let selected = target.value;
    let object = window.inputWithSearch.getElement(target);
    let activeObject = object.getDataByKey(object.getActiveKey());
    if (activeObject.value !== selected) {
        object.setActive(data => data.value === selected);
    }
};

export default defaultExportTheme(
    'select',
    {
        onEvents: 'click',
        delegateElement: true,
        repositionActiveToTop: false,
        constructors: {
            element: objectInfo => {
                return objectInfo.text;
            }
        },
        fns: {
            dataToInputByClick: (data) => {
                return data.data.text;
            }
        }
    },
    object => {
        let domElement = object.getWorkDomElement(true);
        object.setCustomData(getArrayInfoFromSelect(domElement));
        object.setActive(checkActiveObjectInfoFromSelect);
        object.listeners.addCustomRecord(
            'changeActiveSelectTheme',
            'inputWithSearch_changeActive',
            cbOnChangeData
        );
        object.listeners.addCustomRecord(
            'changeSelectTheme',
            'change',
            callbackOnExternalChange
        );
    },
    HTMLElem => {
        HTMLElem.addEventListener('inputWithSearch_beforeInit', cbBeforeStart);
        HTMLElem.addEventListener('inputWithSearch_beforeDestruction', cbBeforeDestruct);
    }
);