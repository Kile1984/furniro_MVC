export const errorMessage = function (message) {
  const messageEl = document.querySelector(".header__empty-tray-message");

  messageEl.querySelector("p").textContent = message;

  messageEl.classList.add("show");

  setTimeout(() => {
    messageEl.classList.remove("show");
  }, 1500);
};
