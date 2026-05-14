export const createAboutView = function (appEl) {
  return {
    render() {
      appEl.innerHTML = `<h1>About</h1>`;
    },
  };
};
