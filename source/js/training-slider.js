import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const sliderTrainingContainer = document.querySelector('.training .swiper');

const initTrainingSlider = () => {
  const sliderTrainingObject = new Swiper(sliderTrainingContainer, {
    modules: [Navigation],
    speed: 400,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 4,
    spaceBetween: 40,
    simulateTouch: true,
    loop: false,
    breakpoints: {
      1: {
        slidesPerView: 1,
        spaceBetween: 18,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 18,
        initialSlide: 2,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
        initialSlide: 0,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 20,
      }
    },
  });
  sliderTrainingObject.update();
};

export { initTrainingSlider };
