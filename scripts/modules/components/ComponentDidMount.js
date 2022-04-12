import { mainContentList } from '../Context.js';
import ComponentError from './ComponentError.js';
import Template from './Template.js';

function ComponentDidMount(json) {
  if (typeof json === 'string') {
    return ComponentError();
  }

  if (mainContentList) {
    json.forEach((element) => {
      mainContentList.innerHTML += Template(element);
    });
  }
}

export default ComponentDidMount;
