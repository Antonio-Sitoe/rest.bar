import { mainTitle } from '../Context.js';


function ComponentError() {
  if (mainTitle) {
    mainTitle.innerText = 'Do momento, temos 1 prato disponivel';
  }
  return {};
}

export default ComponentError;
