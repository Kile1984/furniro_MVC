const createShareView = function () {
  return {
    render(id) {
      const card = document.querySelector(`.product-card[data-id="${id}"]`);
      const shareBtn = card.querySelector(".product-card__action--share");

      shareBtn.disabled = true;
      shareBtn.classList.add("active");

      card.insertAdjacentHTML("beforeend", this.generateMarkup(id));

      card.addEventListener(
        "mouseleave",
        () => {
          shareBtn.disabled = false;
          shareBtn.classList.remove("active");
          const menu = card.querySelector(
            `.product-card__share-menu[data-id="${id}"]`,
          );
          menu.remove();
        },
        { once: true },
      );
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
          href="https://www.facebook.com/ilija.zikic.1/?locale=sr_RS"
          target="_blank"
        >
          <i class="fa-brands fa-facebook-f"></i>
         
        </a>

        <a
          class="share-menu__item"
          data-action="share-x"
          data-id="${id}"
          href="https://x.com/ilija_zikic"
          target="_blank"
        >
          <i class="fa-brands fa-x-twitter"></i>
        
        </a>

        <a
          class="share-menu__item"
          data-action="share-whatsapp"
          data-id="${id}"
            href="https://wa.me/?text=${encodeURIComponent(`${window.location.origin}/#/product/${id}`)}"
            target="_blank"
            rel="noopener noreferrer"
        >
          <i class="fa-brands fa-whatsapp"></i>
         
        </a>

      
      </div>
      `;
    },
  };
};

export const shareView = new createShareView();
