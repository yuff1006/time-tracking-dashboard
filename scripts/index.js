import { Card } from "./Tracker.js";

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

fetch("data.json")
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    setEventListeners(res);
  })
  .catch((res) => {
    alert(res);
  });
function setEventListeners(trackerData) {
  trackerData.forEach((obj) => {
    const weeklyCard = new Card(obj.title, "weekly");
    cardsContainer.append(weeklyCard.generateCard(trackerData));
  });
  weeklyButton.classList.add("selected");

  dailyButton.addEventListener("click", () => {
    resetCards();
    resetButtons();
    dailyButton.classList.add("selected");
    trackerData.forEach((obj) => {
      const dailyCard = new Card(obj.title, "daily");
      cardsContainer.append(dailyCard.generateCard(trackerData));
    });
  });
  weeklyButton.addEventListener("click", () => {
    resetCards();
    resetButtons();
    weeklyButton.classList.add("selected");
    trackerData.forEach((obj) => {
      const weeklyCard = new Card(obj.title, "weekly");
      cardsContainer.append(weeklyCard.generateCard(trackerData));
    });
  });
  monthlyButton.addEventListener("click", () => {
    resetCards();
    resetButtons();
    monthlyButton.classList.add("selected");
    trackerData.forEach((obj) => {
      const monthlyCard = new Card(obj.title, "monthly");
      cardsContainer.append(monthlyCard.generateCard(trackerData));
    });
  });
}
