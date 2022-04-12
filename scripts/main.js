import MenuMobile from './modules/MenuMobile.js';
import ToggleCategory from './modules/ToggleCategory.js';
import FilterData from './modules/FilterData.js';
import FetchDataInit from './modules/FetchDataInit.js';
import { BaseUrl } from './modules/helper/Helper.js';


const menuMobile = MenuMobile('.btn-mobile', '.header-list', 'ative');
const toogleCategory = ToggleCategory('.main-category', '.spanBtn', 'ative');
const filterData = FilterData('.main-list li label');

menuMobile.init();
toogleCategory.init();
filterData.init();
FetchDataInit(BaseUrl);
