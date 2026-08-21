export const errorMessage = function (message) {
  const messageEl = document.querySelector(".header__empty-tray-message");

  messageEl.querySelector("p").textContent = message;

  messageEl.classList.add("show");

  setTimeout(() => {
    messageEl.classList.remove("show");
  }, 1500);
};

export const generateEmptyState = function (className, message) {
  return `
      <li class="${className}-page__item grid-2 ">
        <span>${message}</span>
        <button class="btn btn--secondary">
          <a href="#/shop">GO TO SHOP</a>
        </button>
      </li>
      `;
};
