import {PropertyError} from './Errors/PropertyError.js';

/**
 * Symbol for incapsulated Map with events
 * @type {symbol}
 */
const protectedRecordsEventSave = Symbol('protectedRecordsEventSave');

class EventSave{

    constructor(rootDomElement = false){
        /**
         *
         * @type {Map}
         */
        this[protectedRecordsEventSave] = new Map();
        if (rootDomElement !== false && rootDomElement instanceof HTMLElement){
            this.rootDomElement = rootDomElement;
        } else {
            this.rootDomElement = null;
        }
    }

    addRecord(name, domElement, events, fn, protectedStatus = false){
        if (!this[protectedRecordsEventSave].has(name)){
            domElement.addEventListener(events, fn);
            this[protectedRecordsEventSave].set(name, {
                domElement,
                events,
                fn,
                protectedStatus
            });
        } else {
            throw new PropertyError(name);
        }
    }

    addCustomRecord(name, events, fn){
        if (this.rootDomElement !== null){
            this.addRecord(name, this.rootDomElement, events, fn);
        }
    }

    getRecordByName(name){
        return this[protectedRecordsEventSave].get(name);
    }

    addListRecords(arrInfo){
        arrInfo.forEach((recordInfo) => {
            recordInfo[Symbol.iterator] = function* () {
                yield this.name;
                yield this.domElement;
                yield this.events;
                yield this.fn;
                yield this.protectedStatus;
            };
            this.addRecord(...recordInfo);
        });
    }

    removeRecord(name, removeProtected = false){
        let record = this.getRecordByName(name);
        if (removeProtected === true || record.protectedStatus === false){
            record.domElement.removeEventListener(record.events, record.fn);
            this[protectedRecordsEventSave].delete(name);
        } else {
            throw new PropertyError(name);
        }
    }

    removeAllRecords(){
        this[protectedRecordsEventSave].forEach((record, name) => {
            this.removeRecord(name, true);
        });
    }
}

export default EventSave;