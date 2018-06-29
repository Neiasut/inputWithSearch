const InputWithSearchForWindowWeakMap = new WeakMap();

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
const setDataWeakMapIWS = (object, data) => {
    InputWithSearchForWindowWeakMap.set(object, data);
};

/**
 *
 * @param object
 * @return {...protectedFieldsIWS} data
 */
const getDataWeakMapIWS = (object) => {
    return InputWithSearchForWindowWeakMap.get(object);
};

const weakMapIWS = {
    setDataWeakMapIWS,
    getDataWeakMapIWS
};

export default weakMapIWS;