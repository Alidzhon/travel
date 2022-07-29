const slider = document.querySelector('.destinations__slider-slider');
const slideWrap = document.querySelector('.destinations__slider-wrapper');
const slides = document.querySelectorAll('.destinations__slider-item');
const slide = document.querySelector('.destinations__slider-item');
const dot1 = document.querySelector('.destinations__dot1');
const dot2 = document.querySelector('.destinations__dot2');
const dot3 = document.querySelector('.destinations__dot3');

const prevBtn = document.querySelector('.destinations__arrows-prev');
const nextBtn = document.querySelector('.destinations__arrows-next');


let slideWidth;
let screen = window.innerWidth;

window.addEventListener('resize', (e) => {
    console.log(e);
    if (e.target.innerWidth === 620 || e.target.innerWidth === 390){
        location.reload();
    }
});


function moveLeft(width) {
    slideWrap.style.transform = `translateX(-${width}px)`;
}

function moveRight(width) {
    slideWrap.style.transform = `translateX(${width}px)`;
}

//* Desktop version =============================================================================

if (screen > 620) {
    document.querySelector('#s3').addEventListener('click', () => {
        slideWidth = slide.offsetWidth + 2 * parseInt(getComputedStyle(slide, true).marginRight);
        moveLeft(slideWidth);
        document.querySelector('#s2').classList.add('left');
        dot3.classList.add('destinations__active');
        dot2.classList.remove('destinations__active');
        dot1.classList.remove('destinations__active');
        document.querySelector('#b3').checked = true;
    });

    document.querySelector('#s1').addEventListener('click', () => {
        slideWidth = slide.offsetWidth + 2 * parseInt(getComputedStyle(slide, true).marginRight);
        moveRight(slideWidth);
        document.querySelector('#s2').classList.add('right');
        dot1.classList.add('destinations__active');
        dot3.classList.remove('destinations__active');
        dot2.classList.remove('destinations__active');
        document.querySelector('#b1').checked = true;
    });

    document.querySelector('#s2').addEventListener('click', function () {
        if (this.classList.contains('right')) {
            slideWidth = slide.offsetWidth + 2 * parseInt(getComputedStyle(slide, true).marginRight);
            moveLeft(0.0001 * slideWidth);
            dot3.classList.remove('destinations__active');
            dot2.classList.add('destinations__active');
            dot1.classList.remove('destinations__active');
            this.classList.remove('destinations__active');
        }

        if (this.classList.contains('left')) {
            slideWidth = slide.offsetWidth + 2 * parseInt(getComputedStyle(slide, true).marginRight);
            moveRight(0.0001 * slideWidth);
            this.classList.remove('left');
            document.querySelector('#b2').checked = true;
        }
    });
}

//* Mobile version ====================================================================================

if ( screen <= 620) {
    let position = 0;
    
    nextBtn.addEventListener('click', () => {
        slideWidth = slide.offsetWidth;

        if (position < slideWidth * 2) {
            position += slideWidth;
            slideWrap.style.left = `${-position}px`;
            if (position == 0) {
                document.querySelector('#b1').checked = true;
            }
            if (position == slideWidth) {
                document.querySelector('#b2').checked = true;
            }
            if (position == slideWidth * 2) {
                document.querySelector('#b3').checked = true;
            }
        }

    });

    prevBtn.addEventListener('click', () => {
        slideWidth = slide.offsetWidth;

        if (position > 0 && position < slideWidth * 3) {
            position -= slideWidth;
            slideWrap.style.left = `${-position}px`;
            console.log(position);
            if (position == 0) {
                document.querySelector('#b1').checked = true;
            }
            if (position == slideWidth) {
                document.querySelector('#b2').checked = true;
            }
            if (position == slideWidth * 2) {
                document.querySelector('#b3').checked = true;
            }
        }
    });
}