window.addEventListener('DOMContentLoaded', () => {
    const headerButton = document.querySelector('.header__button');
    const overlay = document.querySelector('.overlay');
    const buttonSignIn = document.querySelector('.overlay__sign-in');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const overlayLink = document.querySelector('.overlay__link');
    const popup = document.querySelector('.popup');

    
    const openModal = () => {
        overlay.classList.add('overlay__active');       
    };

    const closeModal = () => {
        overlay.classList.remove('overlay__active');
    };

    headerButton.addEventListener('click', openModal);

    overlay.addEventListener('click', (event) => {
        // console.log(event.target);
        const target = event.target;
        if (target.classList.contains('overlay')) {
            closeModal();
        }
    });
    
    const sendData = () => {
        alert(email.value);
        alert (password.value);   
   };

   buttonSignIn.addEventListener('click', sendData);

});