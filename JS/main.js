$(document).ready(function(){

  /*----------  Инициализация Swiper Slider  ----------*/
  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: 'true'
    },
    navigation: {
      nextEl: '.next',
      prevEl: '.prev'
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1025: {
        slidesPerView: 3,
        spaceBetween: 20,
      }
    }
  });
  
  /*----------  Инициализация мобильного меню  ----------*/
  $('.burger__btn').click(function(event){
    event.preventDefault();
    $('.nav').slideToggle();
    $(this).toggleClass('burger__btn_active');
    /*----------  Скрываем меню по клику на элемент  ----------*/
    $('.menu__item a').click(function(){
      $('.nav').slideToggle();
      if ($('.burger__btn').hasClass('burger__btn_active')) {
        $('.burger__btn').removeClass('burger__btn_active');
      }
    });
});

/*----------  Функции отключения скрола при активации модалки   ----------*/
function disableScroll(){
  $('html, body').addClass('stop-scrolling');
  $('body').bind('touchmove', function(event){event.preventDefault()});
}

/*----------  Функции включения скрола при активации модалки   ----------*/
function enableScroll(){
  $('html, body').removeClass('stop-scrolling');
  $('body').unbind('touchmove');
}

/*----------  Функция активации модалок  ----------*/
function modalCallOn() {
  $('.modal-call').fadeIn();
  $('.modal-content').animate({
    width: '300px'
}, 400 );
};
function modalMoreOn() {
  $('.modal-more').fadeIn();
  $('.modal-content').animate({
    width: '300px'
}, 400 );
};

/*----------  Функция для деактивации модалок  ----------*/
function modalCallOff() {
  $('.modal-call').fadeOut();
  $('.modal-content').animate({
    width: '0'
}, 400 );
};
function modalMoreOff() {
  $('.modal-more').fadeOut();
  $('.modal-content').animate({
    width: '0'
}, 400 );
};

/*----------  Активируем модалки  ----------*/
$('.button_empty, .mob-btn').on('click', function(event){
    event.preventDefault();
    modalCallOn();
    disableScroll();
  });
$('.button_fill').on('click', function(event){
    event.preventDefault();
    modalMoreOn();
    disableScroll();
  });

  /*----------  Деактивируем модалки  ----------*/
  $('.close-btn').on('click', function(event){
    event.preventDefault();
    modalCallOff();
    modalMoreOff();
    enableScroll();
  });
  
  /*----------  Деактивация модалок при клике на оверлей  ----------*/
  $('.modal-call, .modal-more').click(function(event){
    if(event.target === this)
        $(this).fadeOut(600, enableScroll(), modalCallOff(), modalMoreOff());
  });
  
/*----------  HTML тэги  ----------*/
  $(window).on('load', function () {
    $('.html-teg__item').css({'opacity': 1});
    $('.header__item_div').addClass('header__item_div_onload');
    $('.header__item_div1').addClass('header__item_div1_onload');
    $('.header__item_grid').addClass('header__item_grid_onload');
    $('.header__item_brackets').addClass('header__item_brackets_onload');
    $('.header__item_close').addClass('header__item_close_onload');
  });

});