const links = document.querySelectorAll(".header__nav-link");

export const updateActiveLink = function (currentRoute) {
  links.forEach((link) => {
    link.classList.toggle("active-link", currentRoute === link.dataset.route);
  });
};
