let burger = document.querySelector('.burger-menu');
let nav = document.querySelector('.main-nav');

burger.addEventListener('click', function(){
    burger.classList.toggle('active');
    nav.classList.toggle('active');
});
alert( "Мы используем куки." ),
$('.carousel').slick({
  lazyLoad: 'ondemand',
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<img src="Arrow_left.svg">',
    nextArrow: '<img src="Arrow_right.svg">',
   
});