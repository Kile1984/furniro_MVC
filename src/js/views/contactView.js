export const createContactView = function (appEl) {
  return {
    render() {
      appEl.innerHTML = `<h1>Contact</h1>`;
    },
  };
};
