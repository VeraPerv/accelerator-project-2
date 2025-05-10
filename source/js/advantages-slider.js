import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const breakpoint = window.matchMedia('(min-width: 1440px)');
let swiperAdv;

export const initAdvantagesSlider = () => {
  const swiperEl = document.querySelector('.advantages .swiper');
  if (window.innerWidth >= 1440) {
    swiperAdv = new Swiper(swiperEl, {
      modules: [Navigation],
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      enabled: true,
      spaceBetween: 30,
      slidesPerGroup: 2,
      allowTouchMove: true,
      watchOverflow: true,
      speed: 600,
      lazy: true,
      lazyPreloadPrevNext: 1,
      centeredSlides: true,
      initialSlide: 2,
      slidesPerView: 3.59,
      simulateTouch: false,
      grabCursor: false,
    });
    swiperAdv.update();
  }
};

const initOrDestroy = () => {
  if (breakpoint.matches) {
    initAdvantagesSlider();
  } else {
    swiperAdv?.destroy();
  }
};

breakpoint.addEventListener('change', () => initOrDestroy());

export { initOrDestroy };
