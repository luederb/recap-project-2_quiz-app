// phew… not a lot going on here. Please add some code!
const bookmarkButton = document.querySelector(
  '[data-js="card__button-bookmark"]'
);

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--active");
  console.log(bookmarkButton);
});

// Answer Button

const cardButtonAnswer = document.querySelector(
  '[data-js="card__button-answer"]'
);
const cardAnswer = document.querySelector('[data-js="card__answer"]');

cardButtonAnswer.addEventListener("click", () => {
  cardAnswer.classList.toggle("card__answer--active");
  console.log(cardButtonAnswer);
});
