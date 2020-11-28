"use strict";

var navSlide = function navSlide() {
  var burger = document.querySelector('.page-cont-burger');
  var nav = document.querySelector('.navlinks-left');
  var navLinks = document.querySelectorAll('.navlinks-left li');
  burger.addEventListener('click', function () {
    nav.classList.toggle('navlinks-left-active');
    navLinks.forEach(function (link, index) {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = "navLinkFade 0.5s ease forwards ".concat(index / 7 + 0.7, "s");
      }
    });
    burger.classList.toggle('toggle');
  });
};

navSlide();