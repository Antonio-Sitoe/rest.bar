function Template({ image, name, category, price }) {
  return `    <li class="content-item">
              <img src="${image}"
                alt="foto do prato" class="content-img">
              <div class="content-info">
                <h4 class="content-info-h4">
                  <span class="content-info-title">${name}</span>
                  <span class="content-info-price">${price} MT</span>
                </h4>
                <p>Categoria: <span class="content-info-category">${category}</span>
                  <span>★★★★★</span></p>
              </div>
            </li>`;
}

export default Template;
