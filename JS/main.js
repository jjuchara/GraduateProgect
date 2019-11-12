$(document).ready(function(){

  /*----------  Инициализация Swiper Slider  ----------*/
  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: 'true'
        },
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: 'true'
        },
      },
      1025: {
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
          nextEl: '.next',
          prevEl: '.prev'
        },
      }
    }
  })
  
  /*----------  Инициализация мобильного меню  ----------*/
  $('.burger__btn').click(function(e){
    e.preventDefault();
    $('.nav').slideToggle();
    $(this).toggleClass('burger__btn_active');
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

 

// $(document).click(function (e){
//   var div = $(".nav")
//   $('.burger__btn').removeClass('burger__btn_active');
//   if (!div.is(e.target)
//     && div.has(e.target).length === 0) {
//         div.slideUp();
//   }

// });

// $(window).on('load', function () {
//   $('.html-teg__item, .price-html-teg__item').animate({
//     top: '65%',
//     left: '10%',
//     opacity: '1'
//   }, 1500);
// });

// $('.button_empty').on('click', function(e){
//   e.preventDefault
//   $('.modal').addClass('modal_active', disableScroll);
// });

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