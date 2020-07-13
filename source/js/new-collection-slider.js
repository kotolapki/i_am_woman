'use strict';

if (document.querySelector('.new-collection')) {
  const collectionBlock = document.querySelector('.new-collection');
  const slides = collectionBlock.querySelectorAll('.new-collection__image');
  const backBtn = collectionBlock.querySelector('.new-collection__slider-control-back');
  const forwardBtn = collectionBlock.querySelector('.new-collection__slider-control-forward');
  const priceLink = collectionBlock.querySelector('.new-collection__price-link');
  const price = collectionBlock.querySelector('.new-collection__price');
  const numberOfSlide = collectionBlock.querySelector('.new-collection__slider-number');
  const PRICE_LINK_TEXT = ['Хлопковое платье в полоску', 'Спортивный желтый костюм', 'Платье халат со стразами'];
  const PRICE_TEXT = ['9 900 рублей', '6 700 рублей', '5 800 рублей'];
  const SHOWING_CLASS = 'new-coolection__image-show';
  const BG_CLASSES = ['new-collection__bg--first', 'new-collection__bg--second', 'new-collection__bg--third'];
  let count = 1;

  let timer = setInterval(ticker, 5000);

  forwardBtn.onclick = changeSlideForward;

  backBtn.onclick = changeSlideBackward;

  function ticker() {
    removeShowingClass();
    count++;
    changeSlide();
  }

  function changeSlideForward() {
    clearInterval(timer);
    removeShowingClass();
    count++;
    changeSlide();
    timer = setInterval(ticker, 5000);
  }

  function changeSlideBackward() {
    clearInterval(timer);
    removeShowingClass();
    count--;
    changeSlide();
    timer = setInterval(ticker, 5000);
  }

  function changeSlide() {
    if (count > slides.length) {
      count = 1;
    }

    if (count < 1) {
      count = slides.length;
    }

    priceLink.textContent = PRICE_LINK_TEXT[count - 1];
    price.textContent = PRICE_TEXT[count - 1];
    numberOfSlide.innerHTML = `0${count}/<span>${slides.length}</span>`;
    slides[count - 1].classList.add(SHOWING_CLASS);
    collectionBlock.classList.add(BG_CLASSES[count - 1]);
  }

  function removeShowingClass() {
    for (let item of slides) {
      if (item.classList.contains(SHOWING_CLASS)) {
        item.classList.remove(SHOWING_CLASS);
      }
    }

    collectionBlock.classList.remove(BG_CLASSES[count - 1]);
  }
}