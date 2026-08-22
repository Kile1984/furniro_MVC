export const updateActiveLink = function (currentRoute) {
  const links = document.querySelectorAll(".header__nav-link, .footer__link");

  links.forEach((link) => {
    link.classList.toggle("active-link", currentRoute === link.dataset.route);
  });
};
