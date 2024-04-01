
const owlCarousel = document.querySelector('.owl-carousel');
var screenWidth = window.innerWidth;
if (screenWidth >= 360 && screenWidth < 1024) {
  $(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });  

  $('.owl-carousel').owlCarousel({
    nav:false,
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
            loop: false,
        },
        1024:{
            items:4,
            loop:false,
        }
    }
  })


  $(document).ready(function() {
    var owl = $('.owl-carousel');
    
    function resetOwlCarousel() {
      owl.trigger('destroy.owl.carousel');
      owl.removeClass('owl-carousel owl-loaded');
      owl.find('.owl-stage-outer').children().unwrap();
    }
  
    function initializeOwlCarousel() {
      owl.owlCarousel({
        // Owl Carousel ayarlarını buraya ekleyin
      });
    }
  
    function checkScreenWidth() {
      if ($(window).width() >= 1024) {
        resetOwlCarousel();
      } else {
        initializeOwlCarousel();
      }
    }
  
    checkScreenWidth();
  
    $(window).resize(function() {
      checkScreenWidth();
    });
  });
}
