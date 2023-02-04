$(function () {

  const reviewSwiper = new Swiper('.reviews__slider', {
    slidesPerView: 1,
    slidesPerGroup: 1,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

  });

  AOS.init();

  const mixer = mixitup('.categories__list');
  mixer.filter('.sandwich');
});