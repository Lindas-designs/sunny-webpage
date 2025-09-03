"use strict";
const headline = document.querySelector(".headline");
const modalContainer = document.querySelector(".modal-container");
const btnMobile = document.querySelector(".btn-mobile");
const pageTop = document.querySelector(".page-top");
const mobileList = document.querySelectorAll(".li-mobile");

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
