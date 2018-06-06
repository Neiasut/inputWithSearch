import '../scss/inputWithSearch.scss';
import './polyfills/polyfills';
import InputWithSearchForWindow from './classes/InputWithSearchForWindow';
import runDefaultThemes from './themes/themes';

/**
 * Global object
 * @type {InputWithSearchForWindow}
 */
window.inputWithSearch = new InputWithSearchForWindow();
runDefaultThemes();