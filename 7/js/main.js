const pageHeader = document.querySelector('.page-header');
const navMain = document.querySelector('.site-nav');
const navToggle = document.querySelector('.page-header__toggle');

pageHeader.classList.remove('page-header--nojs');
navMain.classList.remove('site-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('site-nav--closed')) {
    navMain.classList.remove('site-nav--closed');
    navMain.classList.add('site-nav--opened');
    navToggle.classList.add('page-header__toggle--opened')
  } else {
    navMain.classList.add('site-nav--closed');
    navMain.classList.remove('site-nav--opened');
    navToggle.classList.remove('page-header__toggle--opened')
  }
});
