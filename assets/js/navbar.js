/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
var homePage = document.querySelector('header').classList.contains("transparent");
const nav = document.querySelector("nav");
const navClassName = nav.className;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("header").style.top = "0";
  } else if (currentScrollPos > 400) {
    document.querySelector("header").style.top = "-60px";
  }
  if (homePage){
    if (currentScrollPos > 100) {
      document.querySelector('header').classList.remove("transparent");
    } else {
      document.querySelector('header').classList.add("transparent");
    }
  }
  prevScrollpos = currentScrollPos;
}

function toggleMenu(me) {
  if (me.classList.contains("is-active")) {
    me.className = "hamburger hamburger--squeeze";
    nav.className = navClassName;
  } else {
    me.className += " is-active";
    nav.className = (navClassName + " show-menu").trim();
  }
}

