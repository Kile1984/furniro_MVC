const loader = document.querySelector(".loading-overlay");
const app = document.querySelector("#app");

export const hideLoader = function () {
  loader.classList.add("hidden");
};

export const leave = function () {
  app.classList.add("fade-out");

  return new Promise((resolve) => {
    app.addEventListener("transitionend", () => {
      resolve();
    });
  });
};

export const load = function () {};

export const render = function () {};

export const enter = function () {};

export const finish = function () {};
