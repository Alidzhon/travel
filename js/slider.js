const slide_one = document.getElementById("control__one");
const slide_two = document.getElementById("control__two");
const slide_three = document.getElementById("control__three");
const slide_oneM = document.getElementById("slider__one--medium");
const slide_twoM = document.getElementById("slider__two--medium");
const slide_threeM = document.getElementById("slider__three--medium");
const slide_oneS = document.getElementById("slider__one--mini");
const slide_twoS = document.getElementById("slider__two--mini");
const slide_threeS = document.getElementById("slider__three--mini");

const slider = document.querySelector(".slider");
const slider_one = document.querySelector(".slider__one");
const slider_two = document.querySelector(".slider__two");
const slider_three = document.querySelector(".slider__three");
const slider_ar_left = document.querySelector(".slider_arrows--left");
const slider_ar_right = document.querySelector(".slider_arrows--right");

const sliderOneSpain = document.querySelectorAll('slider__one-spain');

let count = 1;


// document.addEventListener("click", (e) => {
//   console.log(e.target.id); /* */
// });

slide_one.addEventListener("click", (e) => {
  if (window.screen.width >= 1440) {
    slider.style.margin = "46px 0 0 320px";
  }
});





slide_two.addEventListener("click", (e) => {
  if (window.screen.width >= 1440) {
    slider.style.margin = "46px 0 0 -540px";
  }
});

slide_three.addEventListener("click", (e) => {
  if (window.screen.width >= 1440) {
    slider.style.margin = "46px 0 0 -1400px";
  }
});



slide_oneM.addEventListener("click", (e) => {
  if (window.screen.width < 1440) {
    {
      slider_ar_left.disabled = true;
      slider_ar_right.disabled = false;
      slide_oneM.checked = true;
      slide_twoM.checked = false;
      slide_threeM.checked = false;
      slider_two.style.margin = "0 auto 0 0";
      slider_three.style.margin = "0 auto 0 0";
      count = 1;
    }
  }
});

slide_twoM.addEventListener("click", (e) => {
  if (window.screen.width < 1440) {
    slider_ar_right.disabled = false;
    slider_ar_left.disabled = false;
    slide_oneS.checked = false;
    slide_twoS.checked = true;
    slide_threeS.checked = false;
    slider_two.style.margin = "0 0 0 calc(0px - 100vw - 30px)";
    slider_three.style.margin = "0 0 0 calc(0px + 100vw + 30px)";
    count = 2;
  }
});

slide_threeM.addEventListener("click", (e) => {
  if (window.screen.width < 1440) {
    slider_ar_right.disabled = true;
    slider_ar_left.disabled = false;
    slide_oneS.checked = false;
    slide_twoS.checked = false;
    slide_threeS.checked = true;
    slider_two.style.margin = "0 0 0 calc(0px - 100vw - 30px)";
    slider_three.style.margin = "0 0 0 calc(0px - 100vw - 30px)";
    count = 3;
  }
});

slider_ar_right.addEventListener("click", (e) => {
  if (count == 2) {
    if (window.screen.width <= 390) {
      slider_ar_right.disabled = true;
      slide_twoS.checked = false;
      slide_threeS.checked = true;
      slider_three.style.margin = "0 auto 0 -1260px";
      count++;
    } else if (window.screen.width > 390 && window.screen.width < 1440) {
      slide_oneM.checked = false;
      slide_twoM.checked = false;
      slide_threeM.checked = true;
      slider_two.style.margin = "0 0 0 calc(0px - 100vw - 30px)";
      slider_three.style.margin = "0 0 0 calc(0px - 100vw - 30px)";
      count++;
    }
  }
  if (count == 1) {
    slider_ar_left.disabled = false;
    if (window.screen.width <= 390) {
      slide_oneS.checked = false;
      slide_twoS.checked = true;
      slider_two.style.margin = "0 auto 0 -420px";
      count++;
    } else if (window.screen.width > 390 && window.screen.width < 1440) {
      slide_oneM.checked = false;
      slide_twoM.checked = true;
      slide_threeM.checked = false;
      slider_two.style.margin = "0 0 0 calc(0px - 100vw - 30px)";
      slider_three.style.margin = "0 0 0 calc(0px + 100vw + 30px)";
      count++;
    }
  }
});

slider_ar_left.addEventListener("click", (e) => {
  if (count == 2) {
    slider_ar_left.disabled = true;
    if (window.screen.width <= 390) {
      slide_oneS.checked = true;
      slide_twoS.checked = false;
      slider_two.style.margin = "0 auto 0 0";
      count--;
    } else if (window.screen.width > 390 && window.screen.width < 1440) {
      slide_oneM.checked = true;
      slide_twoM.checked = false;
      slide_threeM.checked = false;
      slider_two.style.margin = "0 auto 0 0";
      slider_three.style.margin = "0 auto 0 0";
      count--;
    }
  }
  if (count == 3) {
    slider_ar_right.disabled = false;
    if (window.screen.width <= 390) {
      slide_twoS.checked = true;
      slide_threeS.checked = false;
      slider_three.style.margin = "0 auto 0 -420px";
      count--;
    } else if (window.screen.width > 390 && window.screen.width < 1440) {
      slide_oneM.checked = false;
      slide_twoM.checked = true;
      slide_threeM.checked = false;
      slider_two.style.margin = "0 0 0 calc(0px - 100vw - 30px)";
      slider_three.style.margin = "0 0 0 calc(0px + 100vw + 30px)";
      count--;
    }
  }
});

slide_oneS.addEventListener("click", (e) => {
  if (window.screen.width <= 390) {
    slider_ar_left.disabled = true;
    slider_ar_right.disabled = false;
    slide_oneS.checked = true;
    slide_twoS.checked = false;
    slide_threeS.checked = false;
    slider_two.style.margin = "0 auto 0 0";
    slider_three.style.margin = "0 auto 0 -420px";
    count = 1;
  }
});

slide_twoS.addEventListener("click", (e) => {
  if (window.screen.width <= 390) {
    slider_ar_right.disabled = false;
    slider_ar_left.disabled = false;
    slide_oneS.checked = false;
    slide_twoS.checked = true;
    slide_threeS.checked = false;
    slider_two.style.margin = "0 auto 0 -420px";
    slider_three.style.margin = "0 auto 0 -420px";
    count = 2;
  }
});

slide_threeS.addEventListener("click", (e) => {
  if (window.screen.width <= 390) {
    slider_ar_right.disabled = true;
    slider_ar_left.disabled = false;
    slide_oneS.checked = false;
    slide_twoS.checked = false;
    slide_threeS.checked = true;
    slider_two.style.margin = "0 auto 0 -420px";
    slider_three.style.margin = "0 auto 0 -1260px";
    count = 3;
  }
});
   


