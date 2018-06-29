/**
 *
 * @param {string} name
 * @param {object} object
 * @param {function(InputWithSearch)|boolean} cb
 * @param {function(HTMLElement)|boolean} cbBefore
 * @return {{name: *, object: *, cb: *, cbBefore: *, [Symbol.iterator]: Function}}
 */
export default function(name, object, cb, cbBefore){
    return {
        name,
        object,
        cb,
        cbBefore,
        [Symbol.iterator]: function* (){
            yield name;
            yield object;
            yield cb;
            yield cbBefore;
        }
    };
}