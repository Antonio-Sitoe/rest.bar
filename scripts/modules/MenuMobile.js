function MenuMobile(buttonMobileElement, headerListElement, className) {
  const btn = document.querySelector(buttonMobileElement);
  const headerList = document.querySelector(headerListElement);

  function handleToggleMobile() {
    this.classList.toggle(className);
    headerList.classList.toggle(className);
  }

  function init() {
    if (btn && headerList) btn.addEventListener('click', handleToggleMobile);
  }
  return {
    init,
  };
}

export default MenuMobile;
