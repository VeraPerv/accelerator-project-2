
const bodyElem = document.querySelector('.body');
const burgerButton = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const navList = document.querySelector('.nav-list');

const closeMobileMenu = (evt) => {
  const activeBtn = evt.target.closest('.nav-list__link');
  if(activeBtn) {
    nav.classList.toggle('nav--opened');
    nav.classList.toggle('nav--closed');
    bodyElem.classList.remove('body--overlay');
    navList.removeEventListener('click', closeMobileMenu);
  }
};

const mobileMenuToggle = () => {
  burgerButton.addEventListener('click', () => {
    if(burgerButton) {
      nav.classList.toggle('nav--closed');
      nav.classList.toggle('nav--opened');
      bodyElem.classList.toggle('body--overlay', nav.classList.contains('nav--opened'));
      navList.addEventListener('click', closeMobileMenu);
    }
  });
};

export { mobileMenuToggle };
