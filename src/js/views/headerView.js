const cartCountEl = document.querySelector(".header__count-cart");

export const updateHeaderCartCount = function (count) {
  if (!cartCountEl) return;

  cartCountEl.textContent = count;

  cartCountEl.classList.toggle("visible", count !== 0);
};
