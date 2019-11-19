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
    /*----------  Скрываем меню по клику на элемент  ----------*/
    $('.menu__item a').click(function(){
      $('.nav').slideToggle();
      if ($('.burger__btn').hasClass('burger__btn_active')) {
        $('.burger__btn').removeClass('burger__btn_active')
      }
    });
});

/*----------  Функции отключения скрола при активации модалки   ----------*/
function disableScroll(){
  $('html, body').addClass('stop-scrolling');
  $('body').bind('touchmove', function(e){e.preventDefault()});
}

/*----------  Функции включения скрола при активации модалки   ----------*/
function enableScroll(){
  $('html, body').removeClass('stop-scrolling');
  $('body').unbind('touchmove');
}

/*----------  Функция активации модалок  ----------*/
function modalCallOn() {
  $('.modal-call').fadeIn()
  $('.modal-content').animate({
    width: '300px',
}, 400 );
}
function modalMoreOn() {
  $('.modal-more').fadeIn()
  $('.modal-content').animate({
    width: '300px',
}, 400 );
}

/*----------  Функция для деактивации модалок  ----------*/
function modalCallOff() {
  $('.modal-call').fadeOut()
  $('.modal-content').animate({
    width: '0',
}, 400 );
}
function modalMoreOff() {
  $('.modal-more').fadeOut()
  $('.modal-content').animate({
    width: '0',
}, 400 );
}

/*----------  Активируем модалки  ----------*/
$('.button_empty, .mob-btn').on('click', function(e){
    e.preventDefault()
    modalCallOn();
    disableScroll();
  });
$('.button_fill').on('click', function(e){
    e.preventDefault()
    modalMoreOn();
    disableScroll();
  });

  /*----------  Деактивируем модалки  ----------*/
  $('.close-btn').on('click', function(e){
    e.preventDefault()
    modalCallOff();
    modalMoreOff()
    enableScroll();
  });
  
  /*----------  Деактивация модалок при клике на оверлей  ----------*/
  $('.modal-call, .modal-more').click(function(e){
    if(e.target == this)
        $(this).fadeOut(600, enableScroll(), modalCallOff(), modalMoreOff());
  });
  


  $(window).on('load', function () {
    $('.header__item_div').addClass('header__item_div_onload')
    $('.header__item_div1').addClass('header__item_div1_onload')
    $('.header__item_grid').addClass('header__item_grid_onload')
    $('.header__item_brackets').addClass('header__item_brackets_onload')
    $('.header__item_close').addClass('header__item_close_onload')
  });

});