$(document).ready(function(){
  $('.slider').slick({
    infinite: true,
    initialSlide: 3,
    slidesToShow : 2,
    variableWidth: true,
    speed: 800,
    prevArrow: '<button class="prev"></button>',
    nextArrow: '<button class="next"></button>',
    responsive: [
      {
        breackpoint: 1140,
        settings: {
          slidesToShow : 2,
          dots: true,
          arrows: false,
        }
      },

    ]
  });

// !Сделать чтобы при нажатии на ссылку меню сворачивалось и убирался класс

// function disableScroll(){
//   $('html, body').addClass('stop-scrolling');
//   $('body').bind('touchmove', function(e){e.preventDefault()});
// }

// function enableScroll(){
//   $('html, body').removeClass('stop-scrolling');
//   $('body').unbind('touchmove');
// }

  $('.burger__btn').click(function(e){
    e.preventDefault();
    $('.nav').slideToggle();
    $(this).toggleClass('burger__btn_active');
    event.stopPropagation(); 
});

// $(document).click(function (e){
//   var div = $(".nav")
//   $('.burger__btn').removeClass('burger__btn_active');
//   if (!div.is(e.target)
//     && div.has(e.target).length === 0) {
//         div.slideUp();
//   }

// });

$(window).on('load', function () {
  $('.html-teg__item, .price-html-teg__item').animate({
    top: '65%',
    left: '10%',
    opacity: '1'
  }, 1500);
});

$('.button_empty').on('click', function(e){
  e.preventDefault
  $('.modal').addClass('modal_active', disableScroll);
});

// $('.close-btn').on('click', function(){
//   $(this).parents('.modal').removeClass('modal_active');
// });

// $('.modal').click(function(event){
//   if(event.target == this)
//       $(this).fadeOut(600, enableScroll);
//       // $('.pop-up').animate({
//       //     width: '0',
//       //     height: '0'
//       // }, 400 );
// });


});