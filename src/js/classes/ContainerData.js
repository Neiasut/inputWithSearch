class ContainerData{

    /**
     * constructor
     * @param {string} idParent
     * @param {object} callbacks
     */
    constructor(idParent, callbacks){
        this._idParent = idParent;
        /**
         * @typedef {Map.<string, {cb: function|boolean, activity: boolean}>} _callbacks
         * @type _callbacks
         */
        this._callbacks = ContainerData._prepareObjectCallbacks(callbacks);
        this.clear();
    }

    /**
     * Add values to container
     * @param {array|object} data
     * @param {string} value
     * @param {boolean} customData - Data was added programmatically
     */
    addData(data, value, customData = false){
        this._data = ContainerData.wrapListElements(
            ContainerData.validateData(data),
            this._idParent
        );
        this._value = value;
        this._customData = customData;
        this._date = Date.now();
        this._actionData = this._data.slice(0);
        this.activeKey = 'clear';
    }

    saveActionData(data){
        this._actionData = data;
    }

    clear(){
        this.addData([], '');
    }

    checkCustomData(){
        return this._customData;
    }

    getData(startedData = true, type = 'typical'){

        const data = startedData ? this._data : this._actionData;

        switch (type){
            case 'clear':
                return ContainerData.unWrapListElement(data);
            case 'keyId':
                return data.reduce((acc, cur) => {
                    acc[cur.key] = cur;
                    return acc;
                }, {});
            default:
                return data;
        }
    }

    /**
     * Get data
     * @param {string} key
     * @param {boolean} full
     * @return {Object|undefined}
     */
    getDataByKey(key, full = false){
        let data = this.getData(false, 'keyId')[key];
        return typeof data !== 'undefined'
            ? full
                ? data
                : data['data']
            : undefined;
    }

    /**
     * Getter key hover
     * @returns {string}
     */
    get hoveredKey(){
        return getActionKey('hover', this._actionData);
    }

    /**
     * Setter key hover
     * @param {string} key
     */
    set hoveredKey(key){
        this._setAction(key, 'hover');
    }

    /**
     * Getter key active
     * @returns {string}
     */
    get activeKey(){
        return getActionKey('active', this._actionData);
    }

    /**
     * Setter key active
     * @param {string} key
     */
    set activeKey(key){
        this._setAction(key, 'active');
    }

    _setAction(key, nameAction){
        if (key === 'clear'){
            clearAction(nameAction, this._actionData);
            this._runCbOnName(nameAction, key);
            return;
        }
        if (this.checkKeyInActionData(key)){
            clearAction(nameAction, this._actionData);
            this.getData(false, 'keyId')[key][nameAction] = true;
            this._runCbOnName(nameAction, key);
        }
    }

    checkKeyInActionData(key){
        return Object.keys(this.getData(false, 'keyId')).indexOf(key) !== -1;
    }

    static unWrapListElement(arrData){
        return arrData.map(element => element.data);
    }

    static wrapListElements(arrData, idParent){
        return arrData.map((data, i) => ContainerData.wrapElementList(data, idParent, i));
    }

    static wrapElementList(element, idParent, numb){
        return {
            data: element,
            key: `${idParent}_${numb}`,
            hover: false,
            active: false
        };
    }

    static validateData(data){
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

    static repositionActiveToTop(arrData){
        const info = getActionFullData('active', arrData);
        let arrWork = arrData.slice(0);
        if (info !== 'null' && arrData.length > 1 && info.index !== -1){
            arrWork.unshift(...arrWork.splice(info.index,1));
        }
        return arrWork;
    }

    validateSaveDataForRequest(stringRequest, timeLiveSaveData){

        const toLower = value => value.toLowerCase();

        if (this._value === '' || toLower(stringRequest).indexOf(toLower(this._value)) === -1){
            return false;
        }

        return Date.now() - this._date < timeLiveSaveData;
    }

    /**
     * Get available name fields
     * @return {string[]}
     */
    static get nameCbs(){
        return ['active', 'hover'];
    }

    /**
     * Check name on available callbacks
     * @param name
     * @return {boolean}
     */
    static checkNameInAvailableCbs(name){
        return this.nameCbs.indexOf(name) !== -1;
    }

    /**
     * Start prepare objectCallbacks
     * @param {Object.<string, function>} objectCallbacks
     * @private
     * @return {_callbacks}
     */
    static _prepareObjectCallbacks(objectCallbacks){
        return this.nameCbs.reduce((acc, current) => {
            if (typeof objectCallbacks[current] !== 'undefined'){
                let cb = typeof objectCallbacks[current] === 'function' ? objectCallbacks[current] : false;
                acc.set(current, {
                    cb,
                    activity: true
                });
            }
            return acc;
        }, new Map());
    }

    _runCbOnName(name, key){
        if (this._checkActivityCallback(name)){
            let cb = this._callbacks.get(name)['cb'];
            cb(key);
        }
    }

    /**
     * Disable runs callbacks with name
     * @param {string} name
     */
    setInactivityCallback(name){
        if (ContainerData.checkNameInAvailableCbs(name)){
            this._callbacks.get(name)['activity'] = false;
        }
    }

    /**
     * Able runs callbacks with name
     * @param {string} name
     */
    setActivityCallback(name){
        if (ContainerData.checkNameInAvailableCbs(name)) {
            this._callbacks.get(name)['activity'] = true;
        }
    }

    /**
     * Check activity run callback with name
     * @param name
     * @return {boolean}
     * @private
     */
    _checkActivityCallback(name){
        return this._callbacks.get(name)['activity'];
    }
}

const getActionKeyIndex = (nameAction, arr) => {

    let indexArr = -1;

    arr.some((element, index) => {
        if (element[nameAction]){
            indexArr = index;
            return true;
        }
        return false;
    });

    return indexArr;
};

const getActionKey = (nameAction, arr) => {
    let index = getActionKeyIndex(nameAction, arr);
    return index !== -1 ? arr[index]['key'] : 'null';
};

const getActionFullData = (nameAction, arr) => {
    let index = getActionKeyIndex(nameAction, arr);
    return index !== -1 ? {data: arr[index], index} : 'null';
};

const clearAction = (nameAction, arr) => {
    arr.forEach(element => {
        element[nameAction] = false;
    });
};

export default ContainerData;