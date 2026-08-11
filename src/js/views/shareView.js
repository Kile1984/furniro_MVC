const createShareView = function () {
  return {
    render(id) {
      const card = document.querySelector(`.product-card[data-id="${id}"]`);
      card.insertAdjacentHTML("beforeend", this.generateMarkup(id));
      console.log(card);
    },

    generateMarkup(id) {
      return `
      <div class="product-card__share-menu" data-share-menu data-id="${id}">
        <button
          class="share-menu__item"
          data-action="copy-link"
          data-id="${id}"
          type="button"
        >
          <i class="fa-solid fa-link"></i>
         
        </button>

        <a
          class="share-menu__item"
          data-action="share-facebook"
          data-id="${id}"
          href="#"
        >
          <i class="fa-brands fa-facebook-f"></i>
         
        </a>

        <a
          class="share-menu__item"
          data-action="share-x"
          data-id="${id}"
          href="#"
        >
          <i class="fa-brands fa-x-twitter"></i>
        
        </a>

        <a
          class="share-menu__item"
          data-action="share-whatsapp"
          data-id="${id}"
          href="#"
        >
          <i class="fa-brands fa-whatsapp"></i>
         
        </a>

      
      </div>
      `;
    },
  };
};

export const shareView = new createShareView();
