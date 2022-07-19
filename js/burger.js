window.addEventListener("DOMContentLoaded", () => {
     const menu = document.querySelector(".header__nav");
     const menuItem = document.querySelectorAll(".header__item");
     const hamburger = document.querySelector(".header__hamburger");
     const buttonClose = document.querySelector(".header__button-close");
     const body = document.querySelector("body");
   
     
     function outsideClick(event) {
     const target = event.target;
     
     if (target.closest(".header__nav") === null) {
         menu.classList.remove("header__nav-active");
     
         body.removeEventListener("click", outsideClick);
     
     }}
     
     function closeMenu() {
         menu.classList.remove("header__nav-active");
         body.removeEventListener("click", outsideClick);
     
     }
     
     function openMenu(event) {
        event.stopPropagation();
        menu.classList.add("header__nav-active");
        body.addEventListener("click", outsideClick);
     }
     
     hamburger.addEventListener("click", openMenu);
     
     buttonClose.addEventListener("click", closeMenu);
     
     menuItem.forEach((item) => {
     
     item.addEventListener("click", closeMenu);
     
    });      
});