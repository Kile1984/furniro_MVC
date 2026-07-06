const links = document.querySelectorAll("[data-route]");

export const updateActiveLink = function (currentRoute) {
  links.forEach((link) => {
    link.classList.toggle("active-link", currentRoute === link.dataset.route);
  });
};
