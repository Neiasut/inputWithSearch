class ListInputWithSearch{

    constructor(){
        this.saves = new window.WeakMap();
    }

    addElement(domElement, objectInfo){
        this.saves.set(domElement, objectInfo);
    }

    hasElement(domElement){
        return this.saves.has(domElement);
    }

    removeElement(domElement){
        this.saves.delete(domElement);
    }

    /**
     *
     * @param domElement
     * @returns {InputWithSearch}
     */
    getElement(domElement){
        return this.saves.get(domElement);
    }
}

export default ListInputWithSearch;