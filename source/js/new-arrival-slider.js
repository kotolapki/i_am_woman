'use strict';

if (document.querySelector('.new-arrival')) {
  const newArrivalSection = document.querySelector('.new-arrival');
  const slidesList = newArrivalSection.querySelector('.new-arrival__products-list');
  const slides = newArrivalSection.querySelectorAll('.new-arrival__products-item');
  const changeSlideBtnBack = newArrivalSection.querySelector('.new-arrival__change-slide-btn--back');
  const changeSlideBtnForward = newArrivalSection.querySelector('.new-arrival__change-slide-btn--forward');
  const DEFAULT_SLIDE_NUMBER = 2;
  const DEFAULT_SLIDES_POSITION = -244;
  const SLIDE_WIDTH = 244;
  let count = DEFAULT_SLIDE_NUMBER;
  let position = DEFAULT_SLIDES_POSITION;

  changeSlideBtnBack.onclick = changeSlideBack;
  changeSlideBtnForward.onclick = changeSlideForward;

  function changeSlideBack() {
    count--;

    if (count === 0) {
      position = -(SLIDE_WIDTH*(slides.length-1));
      slidesList.style.transform = `translateX(${position}px)`;
      count = slides.length;
    } else {
      position += SLIDE_WIDTH;
      slidesList.style.transform = `translateX(${position}px)`;
    }
  }

  function changeSlideForward() {
    count++;

    if (count > slides.length) {
      position = 0;
      slidesList.style.transform = `translateX(${position}px)`;
      count = 1;
    } else {
      position -= SLIDE_WIDTH;
      slidesList.style.transform = `translateX(${position}px)`;
    }
  }
}