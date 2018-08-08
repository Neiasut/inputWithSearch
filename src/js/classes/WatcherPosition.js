class WatcherPosition{
    constructor(domWatch, cb, timeTik = 50){
        this.domWatch = domWatch;
        this.cb = cb;
        this.timeTik = timeTik;
        this._savePositionFromElement();
        this._addInterval();
    }

    _savePositionFromElement(positionObject = false){
        this._positionBefore = saveParams(
            ...(positionObject === false ? getParamsFromDomElement(this.domWatch) : positionObject)
        );
    }

    _getPositionBefore(){
        return this._positionBefore;
    }

    _addInterval(){
        this._interval = setInterval(() => {
            this._fireFunctionOnTik();
        }, this.timeTik);
    }

    _fireFunctionOnTik() {
        let newPosition = getParamsFromDomElement(this.domWatch);
        if (differentTwoObjectPosition(this._getPositionBefore(), newPosition)){
            this._savePositionFromElement(newPosition);
            this.cb();
        }
    }

    destructor(){
        clearInterval(this._interval);
    }
}

const getScrolls = () => {
    let doc = document.documentElement;
    let left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    let top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

    return {
        left,
        top
    };
};

const getParamsFromDomElement = domElement => {
    let position = domElement.getBoundingClientRect();
    let scrolls = getScrolls();
    return saveParams(
        position.width,
        position.height,
        position.left + scrolls.left,
        position.top + scrolls.top
    );
};

const saveParams = (width, height, left, top) => ({
    width,
    height,
    left,
    top,
    [Symbol.iterator]: function* (){
        yield this.width;
        yield this.height;
        yield this.left;
        yield this.top;
    }
});

const differentTwoObjectPosition = (obj1, obj2) => !(JSON.stringify(obj1) === JSON.stringify(obj2));

export default WatcherPosition;