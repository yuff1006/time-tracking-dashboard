import { Card } from "./Tracker.js";
const dailyCardDeck = [];
const weeklyCardDeck = [];
const monthlyCardDeck = [];
fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    const trackerData = data;
    trackerData.forEach((obj) => {
      const dailyCard = new Card(obj.title, "daily");
      dailyCardDeck.push(dailyCard);
      const monthlyCard = new Card(obj.title, "monthly");
      monthlyCardDeck.push(monthlyCard);
      const weeklyCard = new Card(obj.title, "weekly");
      weeklyCardDeck.push(weeklyCard);
    });
    console.log(dailyCardDeck);
  });

// import { Card, trackerData } from "./Tracker.js";

const dailyButton = document.querySelector("#daily");
const weeklyButton = document.querySelector("#weekly");
const monthlyButton = document.querySelector("#monthly");
const cardsContainer = document.querySelector(".tracker");

function resetCards() {
  while (cardsContainer.lastChild.id !== "profile") {
    cardsContainer.removeChild(cardsContainer.lastChild);
  }
}
function resetButtons() {
  dailyButton.classList.remove("selected");
  weeklyButton.classList.remove("selected");
  monthlyButton.classList.remove("selected");
}
dailyButton.addEventListener("click", () => {
  resetCards();
  resetButtons();
  dailyButton.classList.add("selected");
  const cardEl = dailyCardDeck.forEach((cardEl) => {
    cardEl.generateCard();
  });
  cardsContainer.append(cardEl);
});
weeklyButton.addEventListener("click", () => {
  resetCards();
  resetButtons();
  weeklyButton.classList.add("selected");
  const cardEl = weeklyCardDeck.forEach((cardEl) => {
    cardEl.generateCard();
  });
  cardsContainer.append(cardEl);
});
monthlyButton.addEventListener("click", () => {
  resetCards();
  resetButtons();
  monthlyButton.classList.add("selected");
  const cardEl = monthlyCardDeck.forEach((cardEl) => {
    cardEl.generateCard();
  });
  cardsContainer.append(cardEl);
});

window.addEventListener("load", () => {
  weeklyButton.classList.add("selected");
  const cardEl = weeklyCardDeck.forEach((cardEl) => {
    cardEl.generateCard();
  });
  cardsContainer.append(cardEl);
});

console.log(dailyCardDeck);
