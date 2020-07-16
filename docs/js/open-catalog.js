'use strict';

if (document.querySelector('.catalog')) {
  const openCatalogBtn = document.querySelector('.navigation__list-btn');
  const closeCatalogBtn = document.querySelector('.navigation__close-btn');
  const logo = document.querySelector('.navigation__logo');
  const navigationRightPanel = document.querySelector('.navigation__list--right');
  const salePanel = document.querySelector('.navigation__sale-panel');
  const catalog = document.querySelector('.catalog');
  
  openCatalogBtn.onclick = () => {
    openCatalogBtn.classList.add('open-catalog-btn-clicked');
    catalog.classList.add('catalog-show');
    logo.classList.add('hide');
    navigationRightPanel.classList.add('hide');
    closeCatalogBtn.classList.add('show');
  
    if (document.documentElement.clientWidth >= 1440) {
      salePanel.classList.add('navigation__sale-panel--open');
    }
  };
  
  closeCatalogBtn.onclick = () => {
    openCatalogBtn.classList.remove('open-catalog-btn-clicked');
    catalog.classList.remove('catalog-show');
    logo.classList.remove('hide');
    navigationRightPanel.classList.remove('hide');
    closeCatalogBtn.classList.remove('show');
  
    if (document.documentElement.clientWidth >= 1440) {
      salePanel.classList.remove('navigation__sale-panel--open');
    }
  }
}