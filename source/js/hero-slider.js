import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const sliderHeroContainer = document.querySelector('.hero .swiper');
const arrOfBullets = [...document.querySelectorAll('.swiper-pagination-bullet')];
const heroSliderButtons = document.querySelectorAll('.hero-list__button');

const addTabIndexToBullets = (arr) => {
  arr.forEach((bullet) => {
    bullet.setAttribute('tabindex', '0');
  });
};
addTabIndexToBullets(arrOfBullets);

const heroSliderInit = () => {
  const swiperHeroObject = new Swiper(sliderHeroContainer, {
    modules: [Pagination],
    speed: 400,
    slidesPerView: 1,
    simulateTouch: true,
    loop: true,
    allowTouchMove: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      bulletClass: 'swiper-pagination-bullet',
      bulletActiveClass: 'swiper-pagination-bullet-active',
    },
    breakpoints: {
      1440: {
        allowTouchMove: false,
        simulateTouch: false,
      }
    },
    on: {
      slideChange: function () {
        const bullets = document.querySelectorAll('.hero .swiper-pagination-bullet');
        const activeIndex = this.activeIndex;
        bullets.forEach((bullet,index) => {
          bullet.setAttribute('tabindex', '0');
          bullet.addEventListener('keydown', (evt) => {
            if(evt.key === 'Enter') {
              this.slideTo(index);
              bullet.blur();
            }
          });
        });

        heroSliderButtons.forEach((btn) => btn.setAttribute('tabindex', '-1'));
        if(heroSliderButtons[activeIndex]) {
          heroSliderButtons[activeIndex].tabIndex = '0';
        }
      }
    },
  });

  swiperHeroObject.update();
};

export { heroSliderInit };
