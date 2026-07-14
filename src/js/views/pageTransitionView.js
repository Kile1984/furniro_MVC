const loader = document.querySelector(".loading-overlay");
const app = document.querySelector("#app");

export const hideLoader = function () {
  loader.classList.add("hidden");
};

export const startExitAnimation = function () {
  app.classList.add("fade-out");

  return new Promise((resolve) => {
    app.addEventListener("transitionend", () => {
      (resolve(), { once: true });
    });
  });
};

export const load = function () {};

export const render = function () {};

export const startEnterAnimation = function () {
  app.classList.remove("fade-out");

  return new Promise((resolve) => {
    app.addEventListener("transitionend", () => {
      (resolve(), { once: true });
    });
  });
};

export const finish = function () {};
