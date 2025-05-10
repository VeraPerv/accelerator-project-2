import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const initGallerySlider = () => {
  const sliderGalleryContainer = document.querySelector('.gallery .swiper');
  const sliderGalleryObject = new Swiper(sliderGalleryContainer, {
    modules: [Navigation],
    slidesPerView: 2,
    spaceBetween: 4,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1440: {
        slidesPerView: 5,
        spaceBetween: 4,
        enabled: false
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  sliderGalleryObject.update();
};

export { initGallerySlider };
