import withPerfectScrollbarTheme from './listThemes/withPerfectScrollbar';
import selectTheme from './listThemes/select';

export default function runDefaultThemes() {

    let inputWithSearch = window.inputWithSearch;

    inputWithSearch.addTheme(...withPerfectScrollbarTheme);
    inputWithSearch.addTheme(...selectTheme);

}