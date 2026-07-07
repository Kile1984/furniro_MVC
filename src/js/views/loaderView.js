const overlay = document.querySelector(".loader-overlay");

export const show = function () {
  overlay.classList.remove("hidden");
};

export const hide = function () {
  overlay.classList.add("hidden");
};
