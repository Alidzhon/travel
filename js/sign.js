window.addEventListener('DOMContentLoaded', () => {
    const overlayLink = document.querySelector('.overlay__link');
    const overlay = document.querySelector('.overlay');
    const popup = document.querySelector('.popup');
    const popupLogin = document.querySelector('.popup__login');
    const popupButton = document.querySelector('.popup__button');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    
    const openModal = () => {
        overlay.classList.add('overlay__active');
        popup.classList.remove('popup__active');       
    };
    
    const openPopup = () => {
            popup.classList.add('popup__active');
             overlay.classList.remove('overlay__active');
    };
    
    const closePopup = () => {
        popup.classList.remove('popup__active');    
    };
    
    overlayLink.addEventListener('click', openPopup);
    
    popup.addEventListener('click', (event) => {
         const target = event.target;
         if (target.classList.contains('popup')) {
             closePopup();
         }    
    });

    popupLogin.addEventListener('click', openModal);

    const sendData = () => {
        alert(email.value);
        alert (password.value);   
   };

   popupButton.addEventListener('click', sendData);

});