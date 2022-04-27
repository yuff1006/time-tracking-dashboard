const jsonData = require("../data.json");
console.log(jsonData);
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
  trackerData.forEach((obj) => {
    const dailyCard = new Card(obj.title, "daily");
    cardsContainer.append(dailyCard.generateCard());
  });
});
weeklyButton.addEventListener("click", () => {
  resetCards();
  resetButtons();
  weeklyButton.classList.add("selected");
  trackerData.forEach((obj) => {
    const weeklyCard = new Card(obj.title, "weekly");
    cardsContainer.append(weeklyCard.generateCard());
  });
});
monthlyButton.addEventListener("click", () => {
  resetCards();
  resetButtons();
  monthlyButton.classList.add("selected");
  trackerData.forEach((obj) => {
    const monthlyCard = new Card(obj.title, "monthly");
    cardsContainer.append(monthlyCard.generateCard());
  });
});

window.addEventListener("load", () => {
  trackerData.forEach((obj) => {
    const weeklyCard = new Card(obj.title, "weekly");
    cardsContainer.append(weeklyCard.generateCard());
  });
  weeklyButton.classList.add("selected");
});
