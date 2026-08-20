const cartCountEl = document.querySelector(".header__count-cart");
const wishlistCountEl = document.querySelector(".header__count-wishlist");
const compareCountEl = document.querySelector(".header__count-compare");

const header = document.querySelector(".header");

export const updateHeaderCartCount = function (count) {
  if (!cartCountEl) return;

  cartCountEl.textContent = count;

  cartCountEl.classList.toggle("visible", count !== 0);
};

export const updateHeaderWishlistCount = function (count) {
  if (!wishlistCountEl) return;

  wishlistCountEl.textContent = count;

  wishlistCountEl.classList.toggle("visible", count !== 0);
};

export const updateHeaderCompareCount = function (count) {
  if (!compareCountEl) return;

  compareCountEl.textContent = count;

  compareCountEl.classList.toggle("visible", count !== 0);
};

export const closeMenu = function () {
  header.classList.remove("header--open");
};

export const toggleMenu = function (isOpen) {
  header.classList.toggle("header--open", isOpen);
};

export const emptyTrayMessage = function () {
  const messageEl = document.querySelector(".header__empty-tray-message");

  messageEl.classList.add("show");

  setTimeout(() => {
    messageEl.classList.remove("show");
  }, 1000);
};
