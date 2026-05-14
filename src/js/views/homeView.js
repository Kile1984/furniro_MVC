const diningImg = new URL("../../assets/images/dining.png", import.meta.url)
  .href;

export const createHomeView = function (appEl) {
  return {
    render() {
      appEl.innerHTML = `<h1>Home</h1>`;
    },
  };
};
