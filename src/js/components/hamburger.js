var hamburger = document.querySelector(".hamburger");
var navMenu = document.querySelector(".header__list");
var navMenuBtn = document.querySelector(".header__item-btn");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  navMenu.classList.toggle("is-active");
  navMenuBtn.classList.toggle("is-active");
});
