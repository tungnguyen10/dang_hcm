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
    var array = [];
    $(".index-content__right_banner").remove();
    $($(".index-content .index-content__right .js-animate").get().reverse()).each(function (argument) {
      var t = $(this).index(), current = $(this);
     
      if ($('.index-content .box_mobile .js-animate').length - 1 < t)
					// array.push(current);
					console.log(array.push(current));
				else
					$('.index-content .box_mobile .js-animate:nth-child(' + (t+1) + ')').after(current);
			})

			array.reverse().forEach(function(item,i) {
				$('.index-content .box_mobile').append(item);
    });
  }
});
