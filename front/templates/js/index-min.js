$(window).load(function(){$(".js-slider-for").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!1,autoplay:!0,asNavFor:".js-slider-nav"}),$(".js-slider-nav").slick({slidesToShow:5,slidesToScroll:1,asNavFor:".js-slider-for",dots:!1,focusOnSelect:!0,vertical:!0,arrows:!1})});