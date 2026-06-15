const cartCountEl = document.querySelector(".header__count-cart");
const wishlistCountEl = document.querySelector(".header__count-wishlist");
const compareCountEl = document.querySelector(".header__count-compare");

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
