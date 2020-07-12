window.onload = () => {
  const sidePanel = document.querySelector('.navigation__side-panel-list');
  const currentItem = sidePanel.querySelector('.navigation__side-panel-item--current');
  const availableItems = sidePanel.querySelectorAll('.navigation__side-panel-inner-item');
  const SCROLL_COORDS_OF_BLOCKS = {
    1: {start: 0, end: 500},
    2: {start: 500, end: 1600},
    3: {start: 1600, end: 3200},
    4: {start: 3200, end: 4200},
    5: {start: 4200, end: 4800},
    6: {start: 4800}
  };
  const WHITE_TEXT_CLASS = 'navigation__side-panel-inner-item--white';
  const TEXT_CONTENT_OF_AVAILABLE_ITEMS = ['01', '02', '03', '04', '05', '06'];
  const NEW_COLLECTION_COORD = 0;
  const NEW_ARRIVAL_COORD = document.querySelector('.new-arrival').getBoundingClientRect().top + pageYOffset;
  const ABOUT_BRAND_COORD = document.querySelector('.about-brand').getBoundingClientRect().top + pageYOffset;
  const BLOG_COORD = document.querySelector('.blog').getBoundingClientRect().top + pageYOffset;
  const SUBSCRIPTION_COORD = (document.querySelector('.subscription').getBoundingClientRect().top + pageYOffset) - 100;
  const FOOTER_COORD = document.querySelector('.page-footer').getBoundingClientRect().top + pageYOffset;

  changeSlideNumberByScroll();

  document.onscroll =  () => {
    changeSlideNumberByScroll();
    sortAndChangeAvailableItems();
  };

  availableItems.forEach(item => {
    item.onclick = (e) => {
      let tempValue = e.target.textContent;
      smoothScroll(tempValue);
      sortAndChangeAvailableItems();
    };
  });
  
  function changeSlideNumberByScroll() {
    if (pageYOffset > SCROLL_COORDS_OF_BLOCKS[1].start && pageYOffset < SCROLL_COORDS_OF_BLOCKS[1].end) {
      currentItem.textContent = TEXT_CONTENT_OF_AVAILABLE_ITEMS[0];
      sortAndChangeAvailableItems();
    } else if (pageYOffset >= SCROLL_COORDS_OF_BLOCKS[2].start && pageYOffset < SCROLL_COORDS_OF_BLOCKS[2].end) {
      currentItem.textContent = TEXT_CONTENT_OF_AVAILABLE_ITEMS[1];
      sortAndChangeAvailableItems();
    } else if (pageYOffset >= SCROLL_COORDS_OF_BLOCKS[3].start && pageYOffset < SCROLL_COORDS_OF_BLOCKS[3].end) {
      currentItem.textContent = TEXT_CONTENT_OF_AVAILABLE_ITEMS[2];
      sortAndChangeAvailableItems();
      removeWhiteClass();
    } else if (pageYOffset >= SCROLL_COORDS_OF_BLOCKS[4].start && pageYOffset < SCROLL_COORDS_OF_BLOCKS[4].end) {
      currentItem.textContent = TEXT_CONTENT_OF_AVAILABLE_ITEMS[3];
      sortAndChangeAvailableItems();
      addWhiteClass();
    } else if (pageYOffset >= SCROLL_COORDS_OF_BLOCKS[5].start && pageYOffset < SCROLL_COORDS_OF_BLOCKS[5].end) {
      currentItem.textContent = TEXT_CONTENT_OF_AVAILABLE_ITEMS[4];
      sortAndChangeAvailableItems();
      removeWhiteClass();
    } else if (pageYOffset >= SCROLL_COORDS_OF_BLOCKS[6].start) {
      currentItem.textContent = TEXT_CONTENT_OF_AVAILABLE_ITEMS[5];
      sortAndChangeAvailableItems();
    }
  }

  function sortAndChangeAvailableItems() {
    let tempArray = TEXT_CONTENT_OF_AVAILABLE_ITEMS.slice();
    tempArray = tempArray.filter(item => item != currentItem.textContent);
    
    for (let item of availableItems) {
      let index = Array.from(availableItems).indexOf(item);
      item.textContent = tempArray[index];
    }
  }

  function smoothScroll(value) {
    switch (value) {
      case TEXT_CONTENT_OF_AVAILABLE_ITEMS[0]: 
        window.scrollTo({top: NEW_COLLECTION_COORD, behavior: "smooth"});
        removeWhiteClass();
        break;
      case TEXT_CONTENT_OF_AVAILABLE_ITEMS[1]:
        window.scrollTo({top: NEW_ARRIVAL_COORD, behavior: "smooth"});
        removeWhiteClass();
        break;
      case TEXT_CONTENT_OF_AVAILABLE_ITEMS[2]:
        window.scrollTo({top: ABOUT_BRAND_COORD, behavior: "smooth"});
        removeWhiteClass();
        break;
      case TEXT_CONTENT_OF_AVAILABLE_ITEMS[3]:
        window.scrollTo({top: BLOG_COORD, behavior: "smooth"});
        addWhiteClass();
        break;
      case TEXT_CONTENT_OF_AVAILABLE_ITEMS[4]:
        window.scrollTo({top: SUBSCRIPTION_COORD, behavior: "smooth"});
        removeWhiteClass();
        break;
      case TEXT_CONTENT_OF_AVAILABLE_ITEMS[5]:
        window.scrollTo({top: FOOTER_COORD, behavior: "smooth"});
        removeWhiteClass();
        break;
    }
  }

  function addWhiteClass() {
    for (let item of availableItems) {
      item.classList.add(WHITE_TEXT_CLASS);
    }
  }
  
  function removeWhiteClass() {
    for (let item of availableItems) {
      if (item.classList.contains(WHITE_TEXT_CLASS)) {
        item.classList.remove(WHITE_TEXT_CLASS);
      }
    }
  }
}
