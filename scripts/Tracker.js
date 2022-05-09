export class Card {
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
  generateCard(trackerData) {
    const cardEl = this._getTemplate();
    cardEl.querySelector(
      ".tracker__item-img"
    ).src = `./images/icon-${this._category}.svg`;
    cardEl
      .querySelector(".tracker__item-img-container")
      .classList.add(`tracker__item-img-container_${this._category}`);
    if (this._category === "selfcare") {
      cardEl.querySelector(".tracker__item-title").textContent = "self care";
    } else {
      cardEl.querySelector(".tracker__item-title").textContent = this._category;
    }
    const returnedHours = this._generateHours(trackerData);
    cardEl.querySelector(
      ".tracker__item-current-hours"
    ).textContent = `${returnedHours.current}hrs`;
    cardEl.querySelector(
      ".tracker__item-previous-hours"
    ).textContent = `${returnedHours.previous}hrs`;
    return cardEl;
  }
  _generateHours(trackerData) {
    const objectInThatCategory = trackerData.find(
      (obj) => obj.title === this._category
    );
    const hoursInThatCategory = objectInThatCategory.timeframes;

    const result = {
      current: hoursInThatCategory[this._timeframe].current,
      previous: hoursInThatCategory[this._timeframe].previous,
    };
    return result;
  }
}
