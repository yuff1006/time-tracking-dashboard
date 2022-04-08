const trackerData = [
  {
    title: "work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "selfcare",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

class Card {
  constructor(category, timeframe) {
    this._category = category;
    this._timeframe = timeframe;
  }
  _getTemplate() {
    return document
      .querySelector("#tracker")
      .content.querySelector(".tracker__item")
      .cloneNode(true);
  }
  generateCard() {
    const cardEl = this._getTemplate();
    cardEl.querySelector(
      ".tracker__item-img"
    ).src = `./images/icon-${this._category}.svg`;
    cardEl
      .querySelector(".tracker__item-img-container")
      .classList.add(`tracker__item-img-container_${this._category}`);
    cardEl.querySelector(".tracker__item-title").textContent = this._category;
    const returnedHours = this._generateHours();
    cardEl.querySelector(
      ".tracker__item-current-hours"
    ).textContent = `${returnedHours.current}hrs`;
    cardEl.querySelector(
      ".tracker__item-previous-hours"
    ).textContent = `${returnedHours.previous}hrs`;
    return cardEl;
  }
  _generateHours() {
    const objectInThatCategory = trackerData.find(
      (obj) => (obj.title = this._category)
    );
    const hoursInThatCategory = objectInThatCategory.timeframes;
    const result = {
      current: hoursInThatCategory[this._timeframe].current,
      previous: hoursInThatCategory[this._timeframe].previous,
    };
    return result;
  }
}

console.log(new Card("work", "daily").generateCard());
