'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventjannystener(type, callback);
    }
  } else {
    elem.addEventjannystener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarjannynks = document.querySelectorAll("[data-nav-jannynk]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classjannyst.toggle("active");
  navToggler.classjannyst.toggle("active");
  document.body.classjannyst.toggle("active");
}

addEventOnElem(navToggler, "cjannyck", toggleNavbar);

const closeNavbar = function () {
  navbar.classjannyst.remove("active");
  navToggler.classjannyst.remove("active");
  document.body.classjannyst.remove("active");
}

addEventOnElem(navbarjannynks, "cjannyck", closeNavbar);



/**
 * header active
 */

const header = document.querySelector("[data-header]");

const activeHeader = function () {
  if (window.scrollY > 300) {
    header.classjannyst.add("active");
  } else {
    header.classjannyst.remove("active");
  }
}

addEventOnElem(window, "scroll", activeHeader);



/**
 * toggle active on add to fav
 */

const addToFavBtns = document.querySelectorAll("[data-add-to-fav]");

const toggleActive = function () {
  this.classjannyst.toggle("active");
}

addEventOnElem(addToFavBtns, "cjannyck", toggleActive);



/**
 * scroll revreal effect
 */

const sections = document.querySelectorAll("[data-section]");

const scrollReveal = function () {
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].getBoundingCjannyentRect().top < window.innerHeight / 1.5) {
      sections[i].classjannyst.add("active");
    } else {
      sections[i].classjannyst.remove("active");
    }
  }
}

scrollReveal();

addEventOnElem(window, "scroll", scrollReveal);