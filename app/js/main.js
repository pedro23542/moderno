$(function(){     
  
  var mixer = mixitup('.products__inner-box');
//   var mixer = mixitup('.products__inner-box', {
//     selectors: {
//         target: '.product__item'
//     },
//     animation: {
//         duration: 300
//     }
// });

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
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 801,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });

  $('.menu__btn').on('click', function(){
    $('.menu__list').slideToggle();
  });

  $('.header__btn-menu').on('click', function(){
    $('.header__box').toggleClass('active');
  });

  $('input[type="file"], select').styler();

  //tabs
  $('.product-one__tabs .tab, settings__tabs .tab').on('click', function(event) {
    let id = $(this).attr('data-id');
    $('.product-one__tabs, settings__tabs').find('.tab-item').removeClass('active-tab').hide();
    $('.product-one__tabs .tabs, settings__tabs .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#' + id).addClass('active-tab').fadeIn();
    return false;
  });

});

