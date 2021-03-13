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

$(window).on("load resize", function(){
  if ($(window).width() < 768) {
    $(".index-content__right_banner").remove();
    $(
      $(".index-content .index-content__right .js-animate").get().reverse()
    ).each(function (argument) {
      var t = $(this).index(),
        current = $(this);
      $(
        ".index-content .box_mobile .js-animate:nth-child(" + (t + 2) + ")"
      ).after(current);
      
    });
  }
});
