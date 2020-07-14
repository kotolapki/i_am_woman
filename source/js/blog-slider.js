'use strict';

if (document.querySelector('.blog')) {
  const blogList = document.querySelector('.blog__list');
  const blogListItems = blogList.querySelectorAll('.blog__item');
  const blogLinks = blogList.querySelectorAll('.blog__link');
  const sliderNumber = document.querySelector('.blog__slider-number');
  const blogSliderInformationBlock = document.querySelector('.blog__slider-information');
  const SLIDER_NUMBER_WIDTH = 51.5;
  const MIN_SWIPE_WIDTH = 80;
  
  const TABLET_SLIDE_RIGHT_MARGIN = 20;
  const DESKTOP_SLIDE_MARGIN = 30;
  const MOBILE_SLIDE_WIDTH = 244;
  const TABLET_SLIDE_WIDTH = 345 + TABLET_SLIDE_RIGHT_MARGIN;
  const DESKTOP_SLIDE_WIDTH = 400 + DESKTOP_SLIDE_MARGIN;
  
  const MOBILE_WINDOW_WIDTH = 320;
  const TABLET_WINDOW_WIDTH = 764;
  const DESKTOP_WINDOW_WIDTH = 1440;

  let blogListMarginLeft = 0;
  let sliderNumberMarginLeft = 0;
  let count = 1;

  defineInformationBlockWidth();

  window.onresize = defineInformationBlockWidth;

  blogLinks.forEach(item => {
    item.onclick = (e) => {e.preventDefault()};
  });

  blogList.ontouchstart = (e) => {
    let startCoords = e.touches[0].clientX;
    blogList.ontouchmove = (e) => {
      let currentCoords = e.touches[0].clientX;
      let shift = currentCoords - startCoords;

      blogList.ontouchend = () => {
        if (shift < MIN_SWIPE_WIDTH) {    //turn left, margin -- 
          count++;

          blogListMarginLeft -= detectSlideWidth();
          blogList.style.marginLeft = `${blogListMarginLeft}px`;

          sliderNumberMarginLeft += SLIDER_NUMBER_WIDTH;
          sliderNumber.style.marginLeft = `${sliderNumberMarginLeft}px`;
          

          let margin = blogList.style.marginLeft;

          if (detectSlideWidth() === MOBILE_SLIDE_WIDTH) {
            sliderNumber.innerHTML = `0${count}/<span>${blogListItems.length}</span>`;

            if (parseInt(margin) < -(detectSlideWidth() * (blogListItems.length - 1))) {
              blogListMarginLeft = -(detectSlideWidth() * (blogListItems.length - 1));
              blogList.style.marginLeft = `${blogListMarginLeft}px`;
  
              count = blogListItems.length;
              sliderNumberMarginLeft = SLIDER_NUMBER_WIDTH * (blogListItems.length - 1);
              sliderNumber.style.marginLeft = `${sliderNumberMarginLeft}px`;
              sliderNumber.innerHTML = `0${count}/<span>${blogListItems.length}</span>`;
            }
          }

          
          if (detectSlideWidth() === TABLET_SLIDE_WIDTH) {
            sliderNumber.innerHTML = `0${count}/<span>${blogListItems.length-1}</span>`;

            if (parseInt(margin) < -(detectSlideWidth() * (blogListItems.length - 2))) {
              blogListMarginLeft = -(detectSlideWidth() * (blogListItems.length - 2));
              blogList.style.marginLeft = `${blogListMarginLeft}px`;
  
              count = blogListItems.length - 1;
              sliderNumberMarginLeft = SLIDER_NUMBER_WIDTH * (blogListItems.length - 2);
              sliderNumber.style.marginLeft = `${sliderNumberMarginLeft}px`;
              sliderNumber.innerHTML = `0${count}/<span>${count}</span>`;
            }
          }
        }

        if (shift > -MIN_SWIPE_WIDTH) {  //turn right, margin ++
          count--;

          blogListMarginLeft += detectSlideWidth();
          blogList.style.marginLeft = `${blogListMarginLeft}px`;

          sliderNumberMarginLeft -= SLIDER_NUMBER_WIDTH;
          sliderNumber.style.marginLeft = `${sliderNumberMarginLeft}px`;
          

          if (detectSlideWidth() === MOBILE_SLIDE_WIDTH) {
            sliderNumber.innerHTML = `0${count}/<span>${blogListItems.length}</span>`;
          }

          if (detectSlideWidth() === TABLET_SLIDE_WIDTH) {
            sliderNumber.innerHTML = `0${count}/<span>${blogListItems.length - 1}</span>`;
          }

          let margin = blogList.style.marginLeft;

          if (parseInt(margin) > 0) {
            blogListMarginLeft = 0;
            blogList.style.marginLeft = `${blogListMarginLeft}px`;

            count = 1;
            sliderNumberMarginLeft = 0;
            sliderNumber.style.marginLeft = `${sliderNumberMarginLeft}px`;
            
            if (detectSlideWidth() === TABLET_SLIDE_WIDTH) {
              sliderNumber.innerHTML = `0${count}/<span>${blogListItems.length - 1}</span>`;
            }
          }
        }
      };
    };
  }

  function detectSlideWidth() {
    let windowWidth = document.documentElement.clientWidth;
    let slideWidth;

    if (windowWidth >= MOBILE_WINDOW_WIDTH && windowWidth < TABLET_WINDOW_WIDTH) {
      slideWidth = MOBILE_SLIDE_WIDTH;
    } else if (windowWidth >= TABLET_WINDOW_WIDTH && windowWidth < DESKTOP_WINDOW_WIDTH) {
      slideWidth = TABLET_SLIDE_WIDTH;
    } else if (windowWidth >= DESKTOP_WINDOW_WIDTH) {
      slideWidth = DESKTOP_SLIDE_WIDTH;
    }

    return slideWidth;
  }

  function defineInformationBlockWidth() {
    resetStartPapameters();

    if (detectSlideWidth() === MOBILE_SLIDE_WIDTH) {
      blogList.style.marginLeft = '0px';
      blogSliderInformationBlock.style.width = SLIDER_NUMBER_WIDTH * blogListItems.length + 'px';
      sliderNumber.style.marginLeft = '0px';
      sliderNumber.innerHTML = `01/<span>${blogListItems.length}</span>`;
    }

    if (detectSlideWidth() === TABLET_SLIDE_WIDTH) {
      blogList.style.marginLeft = '0px';
      blogSliderInformationBlock.style.width = SLIDER_NUMBER_WIDTH * (blogListItems.length - 1) + 'px';
      sliderNumber.style.marginLeft = '0px';
      sliderNumber.innerHTML = `01/<span>${blogListItems.length - 1}</span>`;
    }

    if (detectSlideWidth() === DESKTOP_SLIDE_WIDTH) {
      blogList.style.marginLeft = '0px';
      blogSliderInformationBlock.style.width = SLIDER_NUMBER_WIDTH + 'px';
      sliderNumber.style.marginLeft = '0px';
      sliderNumber.innerHTML = `01/<span>1</span>`;
    }
  }

  function resetStartPapameters() {
    blogListMarginLeft = 0;
    sliderNumberMarginLeft = 0;
    count = 1;
  }
}