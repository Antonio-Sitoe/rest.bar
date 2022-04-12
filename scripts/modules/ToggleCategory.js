function ToggleCategory(mainCategoryElement, spanElement, className) {
  const mainCategory = document.querySelector(mainCategoryElement);
  const btnSpan = document.querySelector(spanElement);

  function handleToggleFilter() {
    mainCategory.classList.toggle(className);
  }

  function init() {
    if (mainCategory && btnSpan)
      btnSpan.addEventListener('click', handleToggleFilter);
  }

  return {
    init,
  };
}

export default ToggleCategory;
