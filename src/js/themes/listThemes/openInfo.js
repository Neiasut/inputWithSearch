import defaultExportTheme from '../defaultExportTheme';

export default defaultExportTheme(
    'openInfo',
    {
        baseWindowEventsActive: {
            interceptionEvents: false,
            mouseEnterElement: false,
            clickElement: false
        },
        constructors: {
            element: data => data
        },
        maxViewElements: 1,
        classes: {
            wrapper: ['InputWithSearchWindow_theme_openInfo']
        },
        cssParamsWindow: {
            minWidth: 200,
            maxWidth: 286,
            seekWidthTo: 'max'
        }
    },
    (object) => {
        let rootElement = object.getWorkDomElement();
        let innHTML = rootElement.getAttribute('data-iws-data');
        object.setCustomData([
            innHTML
        ]);
    }
);