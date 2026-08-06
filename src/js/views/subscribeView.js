const createSubscribeView = function () {
  const message = document.querySelector(".footer__message");

  return {
    showSuccess() {
      message.textContent = "Successfully subscribed!";
      message.classList.add("success");
      setTimeout(() => {
        this.clearMessage();
      }, 3000);
    },

    clearMessage() {
      message.classList.remove("success");
      message.textContent = "";
    },
  };
};

export const subscribeView = new createSubscribeView();
