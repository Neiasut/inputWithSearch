import {CustomError} from './CustomError.js';

class PropertyError extends CustomError{
    constructor(property){
        super('Ошибка в свойстве ' + property);
        this.property = property;
    }
}

export default PropertyError;