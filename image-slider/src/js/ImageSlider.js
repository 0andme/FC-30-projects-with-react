export default class ImageSlider {
  #currentPosition = 0;

  #sliderNumber = 0;

  #sliderWidth = 0;

  sliderListEl;

  sliderWrapEl;

  nextBtnEl;

  previousBtnEl;

  indicatorWrapEl;

  constructor() {
    this.assignElement();
    this.initSliderNumber();
    this.initSliderWidth();
    this.initSliderListWidth();
    this.addEvent();
    this.createIndicatior();
    this.setIndicatior();
  }

  assignElement() {
    this.sliderWrapEl = document.getElementById('slider-wrap');
    this.sliderListEl = this.sliderWrapEl.querySelector('#slider');
    this.nextBtnEl = this.sliderWrapEl.querySelector('#next');
    this.previousBtnEl = this.sliderWrapEl.querySelector('#previous');
    this.indicatorWrapEl = this.sliderWrapEl.querySelector('#indicator-wrap');
  }

  initSliderNumber() {
    this.#sliderNumber = this.sliderListEl.querySelectorAll('li').length;
  }

  initSliderWidth() {
    this.#sliderWidth = this.sliderWrapEl.clientWidth;
  }

  initSliderListWidth() {
    this.sliderListEl.style.width = `${
      this.#sliderNumber * this.#sliderWidth
    }px`;
  }

  addEvent() {
    this.nextBtnEl.addEventListener('click', this.moveToRight.bind(this));
    this.previousBtnEl.addEventListener('click', this.moveToLeft.bind(this));
  }

  moveToRight() {
    this.#currentPosition += 1;
    if (this.#currentPosition === this.#sliderNumber) {
      this.#currentPosition = 0;
    }
    this.sliderListEl.style.left = `-${
      this.#currentPosition * this.#sliderWidth
    }px`;
    this.setIndicatior();
  }

  moveToLeft() {
    this.#currentPosition -= 1;
    if (this.#currentPosition === -1) {
      this.#currentPosition = this.#sliderNumber - 1;
    }
    this.sliderListEl.style.left = `-${
      this.#currentPosition * this.#sliderWidth
    }px`;
    this.setIndicatior();
  }

  createIndicatior() {
    const docFragment = document.createDocumentFragment();

    for (let i = 0; i < this.#sliderNumber; i += 1) {
      const li = document.createElement('li');
      li.dataset.index = i;
      docFragment.appendChild(li);
    }
    this.indicatorWrapEl.querySelector('ul').appendChild(docFragment);
  }

  setIndicatior() {
    this.indicatorWrapEl.querySelector('li.active')?.classList.remove('active');
    this.indicatorWrapEl
      .querySelector(`ul li:nth-child(${this.#currentPosition + 1})`)
      .classList.add('active');
  }
}
