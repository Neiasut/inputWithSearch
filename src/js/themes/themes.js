export default function runDefaultThemes() {
    window.inputWithSearch.addTheme('withPerfectScrollbar', {}, (object) => {

        if (window.PerfectScrollbar){
            let listeners = object.getListeners();
            listeners.addCustomRecord('test_afterOpen', 'inputWithSearch_afterOpen', () => {
                let wrapperInner = object.inputWithSearchWindow.getElementByKey('wrapperInner');
                const ps = new window.PerfectScrollbar(wrapperInner, {
                    wheelPropagation: false
                });
                object.getCustomContainer().set('customScroll', ps);
            });
            listeners.addCustomRecord('test_onChangeWindow', 'inputWithSearch_onChangeWindow', () => {
                object.getCustomContainer().get('customScroll').update();
            });
            listeners.addCustomRecord('test_inputWithSearch_beforeClose', 'inputWithSearch_beforeClose', () => {
                let container = object.getCustomContainer();
                container.get('customScroll').destroy();
                container.delete('customScroll');
            });
        }
    });
}