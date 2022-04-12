import { main } from '../Context.js';

function Loading(isTrue) {
  const loading = document.querySelector('.loading');

  if (main && isTrue === true) {
    main.style.display = 'none';
    loading.classList.remove('show');
  }
  if (main && isTrue === false) {
    main.style.display = 'block';
    loading.classList.add('show');
  }
}

export default Loading;
