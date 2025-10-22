// visual
const visual_list = new Swiper(".visual_list", {
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  speed: 1800,
});

$(".pause").click(function () {
  visual_list.autoplay.stop();
  $(".pause").hide();
  $(".play").show();
});
$(".play").click(function () {
  visual_list.autoplay.start();
  $(".pause").show();
  $(".play").hide();
});

//menu
const menu_list = new Swiper(".menu_list", {
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    700: {
      slidesPerView: 2,
    },
    1100: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    type: "progressbar",
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  speed: 1000,
  loop: true,
});

//new
$(".new_right a:not(:first-child)").hide();

$(".new_left button").click(function () {
  let idx = $(this).index();
  $(".new_right a").eq(idx).fadeIn().siblings().hide();
  $(this).addClass("active").siblings().removeClass("active")
});
$(".new_left button:first-child").addClass("active").show();