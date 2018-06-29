const delegateFn = (event, findClass, fn) => {
    let target = event.target,
        related = event.relatedTarget,
        match;

    // search for a parent node matching the delegation selector
    while ( target && target !== document && !( match = target.classList.contains(findClass) ) ) {
        target = target.parentNode;
    }

    // exit if no matching node has been found
    if ( !match ) { return; }

    // loop through the parent of the related target to make sure that it's not a child of the target
    while ( related && related !== target && related !== document ) {
        related = related.parentNode;
    }

    // exit if this is the case
    if ( related === target ) { return; }

    return fn(event, target);
};

function extend() {

    // Variables
    let extended = {};
    let deep = false;
    let i = 0;
    let length = arguments.length;

    // Check if a deep merge
    if ( Object.prototype.toString.call( arguments[0] ) === '[object Boolean]' ) {
        deep = arguments[0];
        i++;
    }

    let merge = function (obj) {
        for ( let prop in obj ) {
            if ( Object.prototype.hasOwnProperty.call( obj, prop ) ) {
                if ( deep && Object.prototype.toString.call(obj[prop]) === '[object Object]' ) {
                    extended[prop] = extend( true, extended[prop], obj[prop] );
                } else {
                    extended[prop] = obj[prop];
                }
            }
        }
    };

    for ( ; i < length; i++ ) {
        let obj = arguments[i];
        merge(obj);
    }

    return extended;

}

function highlightMatchesToString(string, query){
    const reg = new RegExp('('+query+')', 'gi');
    return string.replace(reg, '<span class="InputWithSearchWindow-Coincidence">$1</span>');
}

function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

const callEvent = (element, name, data) => {

    let eventConfig = {
        bubbles: true
    };

    if (typeof data !== 'undefined'){
        eventConfig.detail = data;
    }

    element.dispatchEvent(new CustomEvent(name, eventConfig));
};

const mergeListArraysWithoutDuplicates = (oldArr, newArr) => {

    return Object.entries(oldArr).reduce((acc, info) => {
        let [nameElement, classesElement] = info;
        if (nameElement in newArr && Array.isArray(newArr[nameElement])){
            acc[nameElement] = Array.from(new Set(classesElement.concat(newArr[nameElement])));
        } else {
            acc[nameElement] = classesElement;
        }
        return acc;
    }, {});
};

const insertAfter = (newNode, referenceNode) => {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
};

const funcs = {
    delegateFn,
    extend,
    callEvent,
    hasClass,
    highlightMatchesToString,
    mergeListArraysWithoutDuplicates,
    insertAfter
};

export default funcs;