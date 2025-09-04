"use strict";
const headline = document.querySelector(".headline");
const modalContainer = document.querySelector(".modal-container");
const btnMobile = document.querySelector(".btn-mobile");
const pageTop = document.querySelector(".page-top");
const mobileList = document.querySelectorAll(".li-mobile");
const header = document.querySelector(".header");
const arrow = document.querySelector(".arrow-container");

btnMobile.addEventListener("click", function (e) {
  modalContainer.classList.toggle("closed");
  headline.classList.toggle("closed");
});

const modalClose = function (e) {
  if (e.target === this && !modalContainer.classList.contains("closed")) {
    modalContainer.classList.add("closed");
    headline.classList.remove("closed");
    console.log(e.target);
    console.log(this);
  }
};
pageTop.addEventListener("click", modalClose);
modalContainer.addEventListener("click", modalClose);

mobileList.forEach((item) => {
  item.addEventListener("click", function (e) {
    modalContainer.classList.add("closed");
    headline.classList.remove("closed");
  });
});

let lastScrollY = window.scrollY;
let threshold = header.offsetHeight;
const throttle = (func, delay) => {
  let timeoutId;
  return (...args) => {
    if (!timeoutId) {
      timeoutId = setTimeout(() => {
        func(...args);
        timeoutId = null;
      }, delay);
    }
  };
};

const handleScroll = () => {
  const currentScrollY = window.scrollY;
  if (currentScrollY > threshold && currentScrollY < lastScrollY) {
    arrow.style.display = "block";
  } else if (currentScrollY <= threshold || currentScrollY >= lastScrollY) {
    arrow.style.display = "none";
  }
  lastScrollY = currentScrollY;
};

const throttledHandleScroll = throttle(handleScroll, 200);

window.addEventListener("scroll", throttledHandleScroll);

arrow.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

//beigās pievienot smooth scrolling arī augšējai bultiņai un visām sekcijām! vispirms paskatīties, vai to var izdarīt bes js, tikai ar href un anchor css.
