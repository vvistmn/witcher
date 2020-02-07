$(function() {
    $('#rateYo').rateYo({
        readOnly: true,
        starWidth: '12px',
        // normalFill: "#141218",
        ratedFill: "#9D2929",
        spacing: "4px",
    });
    
});
var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.arrow',
        prevEl: '.swiper-button-prev',
      },
    breakpoints: {
        540: {
            slidesPerView: 2,
        }
    } 
});

var menuButton = document.querySelector('.menu__btn');
var menu = document.querySelector('.header__inner');
menuButton.addEventListener('click', function(){
    menuButton.classList.toggle('menu__btn-active')
    menu.classList.toggle('header__inner-active')
});