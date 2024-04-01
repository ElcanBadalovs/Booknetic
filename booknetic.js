var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1, // Number of slides to show on mobile
    spaceBetween: 20, // Space between slides
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }, 
    grabCursor: true,
    simulateTouch: true,
    breakpoints: {
      1024: {
        grabCursor: false,
        allowSlideNext: false,
        allowSlidePrev: false,
        noSwiping: true,
        allowTouchMove: false,
        slidesPerView: "auto", // Number of slides to show on mobile
        spaceBetween: 10, // Space between slides
      }
    }
  });