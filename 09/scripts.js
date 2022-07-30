'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach((btn) => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////////
///////////// BTN SCROLLING ///////////////
///////////////////////////////////////////

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// EVENT DELEGATION
// 1. add event listener to parent element
// 2. determine what element launched the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  const id = e.target.getAttribute('href');
  if (e.target.classList.contains('nav__link'))
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
});

///////////////////////////////////////////
//////////// TABBED COMPONENT /////////////
///////////////////////////////////////////

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
console.log(tabs);
tabsContainer.addEventListener('click', function (e) {
  e.preventDefault();
  const clicked = e.target.closest('.operations__tab');

  // when nothing is clicked then stop imediately | MORE MODERN STYLE TO MAKE A GUARD CLAUSE
  if (!clicked) return;

  //// OLD SCHOOL WAY
  // if(clicked){

  // }
  tabsContent.forEach((content) =>
    content.classList.remove('operations__content--active')
  );
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');

  tabs.forEach((tab) => tab.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  console.log(clicked);
});

///////////////////////////////////////////
/////////// MENU FADE ANIMATION ///////////
///////////////////////////////////////////
const nav = document.querySelector('.nav__links');
const fadeHover = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const otherLinks = link.closest('nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    otherLinks.forEach((el) => {
      if (el !== link) el.style.opacity = opacity;
    });
    logo.style.opacity = opacity;
  }
};

nav.addEventListener('mouseover', (e) => fadeHover(e, 0.5));

nav.addEventListener('mouseout', (e) => fadeHover(e, 1));

///////////////////////////////////////////
/////////////// LECTURES //////////////////
///////////////////////////////////////////

// console.log(document.documentElement);
// console.log(document.body);
// console.log(document.head);
//
const allSections = document.querySelectorAll('.section');
// console.log(allSections);

const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);
// console.log(document.getElementsByClassName('btn'));

const header = document.querySelector('.header');
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = `We use cookies for improved functionality and analytics.`;
message.innerHTML = `We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>`;

// // First elements of parent
// header.prepend(message);

// // Last element of parent
// header.append(message);

// // Making clone of a message and inserting it first
// header.prepend(message.cloneNode(true));

// // Insert something before or after element
// header.after(message);
header.before(message);
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//   });
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', () => message.remove());

// STYLES
message.style.backgroundColor = '#37383d';
message.style.width = '120%';
// console.log(message.style.height);
// console.log(message.style.backgroundColor);
// console.log(getComputedStyle(message).height);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered');

// // ATTRIBUTES
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.getAttribute('src'));
// console.log(logo.className);

// // for non-standard attributes
// console.log(logo.getAttribute('designer'));
// logo.setAttribute('company', 'Bankist');
// console.log(logo.getAttribute('company'));

// //data attributes
// console.log(logo.dataset.versionNumber);

// // classes
// logo.classList.add('c');
// logo.classList.remove('c');
// logo.classList.toggle('c');
// logo.classList.contains('c');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  // console.log(e.target.getBoundingClientRect());
  console.log(`Current scroll X/Y`, window.scrollX, window.scrollY);
  // console.log(
  //   'height/width viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  //// OLD WAY TO SCROLL
  // window.scrollTo(
  //   s1coords.left + window.scrollX,
  //   s1coords.top + window.scrollY
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.scrollX,
  //   top: s1coords.top + window.scrollY,
  //   behavior: 'smooth',
  // });

  //// NEW WAY TO SCROLL
  section1.scrollIntoView({ behavior: 'smooth' });
});

// const h1 = document.querySelector('h1');

// const alertH1 = function (e) {
//   alert('addEventListener: Great! You are reading the heading! :D');

//   // h1.removeEventListener('mouseenter', alertH1);
// };

// we should use this event listener below, not oldschool way and on onclick in html
// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 5000);

// oldschool way
// h1.onmouseenter = function (e) {
//   alert('onmouseenter: Great! You are reading the heading! :D');
// };

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// console.log(randomColor());

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   // e.stopPropagation();
// });
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
// });
// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
// });

// const h1 = document.querySelector('h1');
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'blue';
// h1.lastElementChild.style.color = 'red';

// // Going upwards
// console.log(h1.parentNode);
// console.log(h1.parentElement);
// h1.closest('.header').style.background = `var(--gradient-secondary)`;

// // Going backwards
// console.log(h1.nextElementSibling);
// console.log(h1.nextSibling);
// console.log(h1.previousElementSibling);
// console.log(h1.previousSibling);
// console.log(h1.parentElement.children);

// const h1siblings1 = h1.parentElement.children;
// const h1siblings2 = [...h1.parentElement.children];

// console.log(h1siblings1, h1siblings2);
// [...h1.parentElement.children].forEach(function (child) {
//   if (child !== h1) child.style.backgroundColor = '#333';
// });
