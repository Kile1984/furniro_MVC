const loader = document.querySelector(".loading-overlay");
const app = document.querySelector("#app");

export const hideLoader = function () {
  loader.classList.add("hidden");
};
