$(window).load(function () {
  // slider top
  $(".js-slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    autoplay: true,
    asNavFor: ".js-slider-nav",
  });
  $(".js-slider-nav").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: ".js-slider-for",
    dots: false,
    focusOnSelect: true,
    vertical: true,
    arrows: false,
  });
});
