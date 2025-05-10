import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const sliderReviewsContainer = document.querySelector('.reviews .swiper');

const initReviewsSlider = () => {
  const sliderReviewsObject = new Swiper(sliderReviewsContainer, {
    modules: [Navigation],
    speed: 400,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 'auto',
    simulateTouch: false,
    loop: false,
    breakpoints: {
      1: {
        spaceBetween: 18,
        simulateTouch: true,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 18,
        simulateTouch: true,
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        simulateTouch: true,
      },
      1440: {
        slidesPerView: 'auto',
        spaceBetween: 120,
      }
    },
  });
  sliderReviewsObject.update();
};

export { initReviewsSlider };
