import withPerfectScrollbarTheme from './listThemes/withPerfectScrollbar';
import selectTheme from './listThemes/select';
import openInfo from './listThemes/openInfo';

export default function runDefaultThemes() {

    let inputWithSearch = window.inputWithSearch;

    inputWithSearch.addTheme(...withPerfectScrollbarTheme);
    inputWithSearch.addTheme(...selectTheme);
    inputWithSearch.addTheme(...openInfo);
}