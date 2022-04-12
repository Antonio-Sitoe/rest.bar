
import { mainContentList } from './Context.js';
import { BaseUrl } from './helper/Helper.js';
import FetchDataInit from './FetchDataInit.js';

function FilterData(labelsElements) {
  const labels = document.querySelectorAll(labelsElements);
  function fecthDataFiltered(e) {
    const listElements = mainContentList.querySelectorAll('li');
    listElements.forEach((li) => li.remove());
    const category = e.target.innerText.trim();
    if (category !== 'Todos os pratos') {
      FetchDataInit(`${BaseUrl}?category=${category}`);
    } else {
     FetchDataInit(BaseUrl);
    }
  }

  function init() {
    labels.forEach((label) => {
      label.addEventListener('click', fecthDataFiltered);
    });
  }
  return { init };
}

export default FilterData;
