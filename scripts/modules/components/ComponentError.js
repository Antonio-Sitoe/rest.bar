import { mainTitle } from '../Context.js';

function ComponentError() {
  const mainListItem = document.querySelectorAll('.main-list li');
  mainListItem.forEach((li) => {
    li.addEventListener('click', function (e) {
      e.preventDefault();
    });
  });
  if (mainTitle) {
    mainTitle.innerText = 'Do momento, temos 1 prato disponivel';
  }
  return {};
}

export default ComponentError;
