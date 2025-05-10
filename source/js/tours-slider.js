import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const sliderToursContainer = document.querySelector('.tours .swiper');
const initToursSlider = () => {
  const sliderToursObject = new Swiper(sliderToursContainer, {
    modules: [Navigation],
    speed: 400,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    spaceBetween: 18,
    simulateTouch: true,
    allowTouchMove: true,
    loop: false,
    breakpoints: {
      1: {
        slidesPerView: 1,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 18,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 18,

      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 30,
      }
    },
  });
  sliderToursObject.update();
};

export { initToursSlider };
