import { mainContentList } from './Context.js';

function ShowInfoProduts() {
  const modal = document.querySelector('.modal-bg');

  function hiddenModal({ target, currentTarget }) {
    if (target === currentTarget) {
      modal.classList.remove('ative');
    }
  }

  function changeContentOnModalItem(li) {
    const imgSrc = li.querySelector('.content-img').src;
    const title = li.querySelector('.content-info-title').innerText;
    const price = li.querySelector('.content-info-price').innerText;
    const spanCategory = li.querySelector('.content-info-category').innerText;

    const modalimg = modal.querySelector('.modal-bg-image');
    modalimg.style.background = `url('${imgSrc}') no-repeat center center`;

    modal.querySelector('.content-info-title').innerText = title;
    modal.querySelector('.content-info-price').innerText = price;
    modal.querySelector('.content-info-category').innerText = spanCategory;
  }

  function showModal(e) {
    e.preventDefault();
    changeContentOnModalItem(e.currentTarget);
    modal.classList.add('ative');
    modal.addEventListener('click', hiddenModal);
  }
  function init() {
    if (mainContentList) {
      const listItens = mainContentList.querySelectorAll('li');
      listItens.forEach((li) => {
        li.addEventListener('click', showModal);
      });
    }
  }
  return { init };
}

export default ShowInfoProduts;
