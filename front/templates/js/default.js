//==========================================================================
//common.js
//==========================================================================

//userAgent
//---------------------------------------------------------
function userAgent() {
  const ua = navigator.userAgent;
  if (
    ua.indexOf("iPhone") != -1 ||
    ua.indexOf("iPod") != -1 ||
    (ua.indexOf("Android") != -1 && ua.indexOf("Mobile") != -1)
  ) {
    //sp
    $("body").addClass("is-view-sp");
  } else if (ua.indexOf("iPad") != -1 || ua.indexOf("Android") != -1) {
    //tab
    $("body").addClass("is-view-tab");
  } else {
    // pc
    $("body").addClass("is-view-pc");
  }
}

//userAgentIE
//---------------------------------------------------------
function userAgentIE() {
  const ua = window.navigator.userAgent.toLowerCase();
  const uaVersion = window.navigator.appVersion.toLowerCase();
  //ie
  if (ua.indexOf("msie") != -1 || ua.indexOf("trident") !== -1) {
    $("body").addClass("is-view-ie");
  }
}

//pagetop
//---------------------------------------------------------
function awe_backtotop() {
  if ($(".back-to-top").length) {
    var scrollTrigger = 100,
      backToTop = function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
          $(".back-to-top").addClass("show");
        } else {
          $(".back-to-top").removeClass("show");
        }
      };
    backToTop();
    $(window).on("scroll", function () {
      backToTop();
    });
    $(".back-to-top").on("click", function (e) {
      e.preventDefault();
      $("html,body").animate(
        {
          scrollTop: 0,
        },
        1000
      );
    });
  }
}
window.awe_backtotop = awe_backtotop;

// //animation
// //---------------------------------------------------------
// function scrollAnimation() {
//   const animationTarget = $(".js-animate");
//   animationTarget.addClass("is-animate");
//   $(window).on("load scroll", function () {
//     animationTarget.each(function () {
//       let targetPos = $(this).offset().top;
//       let scroll = $(window).scrollTop();
//       let windowHeight = $(window).height();
//       if (scroll > targetPos - windowHeight + 100) {
//         $(this).addClass("is-animated");
//       }
//     });
//   });
// }

//menu_mobile
//---------------------------------------------------------
$(document).ready(function ($) {
  $("#trigger-mobile").click(function () {
    $(".mobile-main-menu").toggleClass("active");
    $(".backdrop__body-backdrop___1rvky").addClass("active");
  });
  $(".backdrop__body-backdrop___1rvky").click(function () {
    $("body").removeClass("show-search");
    $(".mobile-main-menu").removeClass("active");
    $(".backdrop__body-backdrop___1rvky").removeClass("active");
  });
  $(window).resize(function () {
    if ($(window).width() > 1023) {
      $(".mobile-main-menu").removeClass("active");
      $(".backdrop__body-backdrop___1rvky").removeClass("active");
    }
  });
  $(".backdrop__body-backdrop___1rvky").removeClass("active");
  $(".ng-has-child a svg").on("click", function () {
    var $this = $(this);
    $this.parent().next().slideToggle();
    $(this).toggleClass("active");
    return false;
  });
});

$(document).ready(function ($) {
  awe_backtotop();
  userAgentIE();
  // scrollAnimation();
  userAgentIE();
});

$(window).load(function () {
  // slider partner
  $(".js-slider-partner").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    focusOnSelect: true,
    // vertical: true,
    arrows: false,
    autoplay: true,
    fade:false,
    autoplay: true,
    speed:2000,
  });
  $(".js-nivoSlider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    focusOnSelect: true,
    arrows: false,
    autoplay: true,
    fade:true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed:5000,
  });

  $("#selectLink").on("change", function () {
    var optionSelected = $("option:selected", this);
    var valueSelected = this.value;
    window.open(valueSelected, "_blank");
    
    window.open(valueSelected,"location=yes,menubar=yes");
  });

  // js video
  $(".lists_video_title li").click(function () {
    var video_id = $(this).attr("data-video");

    $(".lists_video_title li").removeClass("current");
    $(".video-content").removeClass("current");

    $(this).addClass("current");
    $("#" + video_id).addClass("current");
  });
 
});



