const getEl = (el) => {
  return document.querySelector(el);
};

const navbar = getEl('#navbar');
const navbarToggler = getEl('#navbarToggler');

navbarToggler.addEventListener('click', () => {
  navbar.classList.toggle('opened');
});

// document.addEventListener('click', () => {
//   navbar.classList.remove('opened');
// });