function barnFirstScreen() {
  //var headerHeight = $('.site__header').outerHeight();
  $('.bh__first').css({
    height: windowHeight,
  });
}

$(function () {
  var bhOptions1 = {};
  if ($('.bh__container1 .bh__slide1').length) {
    bhOptions1 = {
      slidesPerView: 1,
      loop: true,
      spaceBetween: 0,
      // centeredSlides: true,
      speed: 600,
      autoplay: {
        delay: 15000,
        disableOnInteraction: true,
      },
      navigation: {
        nextEl: '.bh__right1',
        prevEl: '.bh__left1',
      },
      pagination: {
        el: '.bh__pagination1',
        type: 'bullets',
        dynamicBullets: true,
        clickable: true,
      },
      keyboard: true,
      watchOverflow: true,
    };
  }
  var swiper = new Swiper('.bh__container1', bhOptions1);

  var bhOptions2 = {};
  if ($('.bh__container2 .bh__slide2').length) {
    bhOptions2 = {
      slidesPerView: 4,
      loop: false,
      spaceBetween: 20,
      speed: 600,
      autoplay: {
        delay: 15000,
        disableOnInteraction: true,
      },
      navigation: {
        nextEl: '.bh__right2',
        prevEl: '.bh__left2',
      },
      keyboard: true,
      watchOverflow: true,
      pagination: {
        el: '.swiper__pagination2',
        type: 'bullets',
        dynamicBullets: true,
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        400: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        600: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    };
  }
  var swiper = new Swiper('.bh__container2', bhOptions2);
});
