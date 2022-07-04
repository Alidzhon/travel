window.addEventListener('DOMContentLoaded', () => {
      const menu = document.querySelector('.header__nav');
      const menuItem = document.querySelectorAll('.header__item');
      const hamburger = document.querySelector('.header__hamburger');
      const buttonClose = document.querySelector('.header__button-close');
      const body = document.querySelector('body');


      hamburger.addEventListener('click', () => {
            menu.classList.add('header__nav-active');
      });
      buttonClose.addEventListener('click', () => {
            menu.classList.remove('header__nav-active');    
      });
      menuItem.forEach(item => {
           item.addEventListener('click', () => {
                menu.classList.remove('header__nav-active');    
           });
      });

      body.addEventListener('click', (event) => {
           const target = event.target;
           target.addEventListener('click', () => {
                menu.classList.remove('header__nav-active');  
           });       
      });
});