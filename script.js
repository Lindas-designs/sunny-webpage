"use strict";
const headline = document.querySelector(".headline");
const modal = document.querySelector(".modal-container");
const btnMobile = document.querySelector(".btn-mobile");
const header = document.querySelector(".header");
btnMobile.addEventListener("click", function (e) {
  modal.classList.toggle("closed");
  headline.classList.toggle("closed");
});

//kā izdarīt, lai modal aizveras, pēc tam, kad aizlec uz citu sekciju, kā arī, ja klikšķis ir ārpus modal loga!!!

modal.addEventListener("click", function (e) {
  if (!modal.classList.contains("closed")) {
    modal.classList.add("closed");
    headline.classList.remove("closed");
  }
});
// window.addEventListener("resize", function (e) {
//   if (this.window.innerWidth < 896) {
//     headline.classList.add("closed");
//     modal.classList.remove("closed");
//   } else if (this.window.innerWidth > 896) {
//     headline.classList.remove("closed");
//     modal.classList.add("closed");
//   }
// });
// Given the following array:
/*
const numbers = [10, 20, 30, 40, 50];
console.log(numbers);

const [a, b] = numbers;
console.log(a, b);

const last = numbers[numbers.length - 1];
console.log(last);

const students = [
  { name: "John", scores: [90, 85, 95] },
  { name: "Alice", scores: [88, 92, 89] },
  { name: "Bob", scores: [76, 82, 81] },
];

const [
  { name: firstStudentName },
  {
    scores: [aliceFirstScore],
  },
  {
    scores: [, , bobLastScore],
  },
] = students;
console.log(firstStudentName);
console.log(aliceFirstScore);
console.log(bobLastScore);*/

// 1. Use array destructuring to extract the name of the first student into a variable firstStudentName.
// 2. Use array destructuring to extract the first score of the second student into a variable aliceFirstScore.
// 3. Use array destructuring to extract the last score of the third student into a variable bobLastScore.
/*
const books = [
  {
    title: "Book 1",
    authors: ["Author A", "Author B"],
    ratings: [4.5, 4.2, 4.8],
  },
  { title: "Book 2", authors: ["Author C"], ratings: [4.1, 4.6] },
  {
    title: "Book 3",
    authors: ["Author D", "Author E"],
    ratings: [4.9, 4.7, 4.3],
  },
];

const [
  {
    title: firstBookTitle,
    authors: [, firstBookSecondAuthor],
  },
  ,
  { ratings: thirdBookRatings },
] = books;

const thirdBookHighestRating = Math.max(...thirdBookRatings);
*/
