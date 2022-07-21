window.addEventListener('DOMContentLoaded', () => {
   const slides = document.querySelectorAll('.destinations__item');
   const prev = document.querySelector('.destinations__button-prev');
   const next = document.querySelector('.destinations__button-next');
   const slidesWrapper = document.querySelector('.destinations__items');
   const slidesField = document.querySelector('.destinations__inner');
   const width = window.getComputedStyle(slidesWrapper).width;

   const destinationsCarousel = document.querySelector('.destinations__carousel');

   let slideIndex = 1;
   let offset = 0;

   slidesField.style.width = 100 * slides.length + '%';
   slidesField.style.display = 'flex';
   slidesField.style.transition = '0.5s all';

   slides.forEach(item => {
         item.style.width = width;   
   });

   next.addEventListener('click', () => {
      
      if (offset == +width.slice(0, width.length -2) * (slides.length -1)) {
            offset = 0;
      }
      else {
            offset += +width.slice(0, width.length -2);
      }

      slidesField.style.transform = `translateX(-${offset}px)`;
   });

   prev.addEventListener('click', () => {
          if (offset == 0) {
             offset = +width.slice(0, width.length -2) * (slides.length -1);
          }
          else {
             offset -= +width.slice(0, width.length -2);
          }  
   });


   const indicators = document.createElement('ol');
   const dots = [];

   indicators.classList.add('carousel-indicators');
   indicators.style.cssText = `
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 24px;
        list-style: none;
   `;

   destinationsCarousel.append(indicators);

   for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.style.cssText = `
             width: 20px;
             height: 20px;
             background-color: rgba(242, 120, 92, 0.5);
             border-radius: 100%;
             margin-left: 10px;
             cursor: pointer;
      `;

       if (i == 0) {
          dot.style.backgroundColor = '#F2785C';
       }

       indicators.append(dot);
       dots.push(dot);
   
   }
   dots.forEach(dot => {
      dot.addEventListener('click', (e) => {
         const slideTo = e.target.getComputedStyle('data-slide-to');

         slideIndex =slideTo;
         offset = +width.slice(0, width.length - 2) * (slideTo - 1);

         slidesField.style.transform = `translateX(-${offset}px)`;

         dots.forEach(dot => dot.style.backgroundColor = '#F2785C');
         dots[slideIndex - 1].style.opacity = 1;
      });
 });
   
});