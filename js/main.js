//$('.slider-principal').slick();

$('.slider-principal').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-navegador'
  });
  $('.slider-navegador').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-principal',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });
  