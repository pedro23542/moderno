$(function(){     
  
  
  // сначала будет обрабатыватся только то что в index а затем js
  $(".rate-star").starRating({
    initialRating: 4,
    strokeWidth: 0,
    starSize: 25,
    useGradient: false,
    starSize: 12,
    readOnly: true,
  });

  $('.product-sdlider__inner').slick({
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4
  });

});