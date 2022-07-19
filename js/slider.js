window.addEventListener('DOMContentLoaded', () => {
   const slides = document.querySelectorAll('.destinations__item');
   const prev = document.querySelector('.destinations__button-prev');
   const next = document.querySelector('.destinations__button-next');

   let slideIndex = 1;

   showSlides(slideIndex);
   
   function showSlides(n) {
       if (n > slides.length) {
          slideIndex = 1;
       }
       if (n < 1) {
         slideIndex = slides.length;
       }
   }
   
   slides.forEach((item) => item.style.display = 'none');
   
   slides[slideIndex - 1].style.display = 'block';
   
   function plusSlides(n) {
        showSlides(slideIndex += n);
   }
   
   prev.addEventListener('click', function() {
         plusSlides(-1);
   });
   
   next.addEventListener('click', function() {
         plusSlides(1);
   });
   
});