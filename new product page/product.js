
// main.min.js

// Слайдер для похожега товара и аксессуаров
function() {
  var t = $(".relative-items-list").find(".carousel");
  if (0 == t.length) return !1;
  var e = t.find(".item"),
    n = !1;
  e.length > 5 && (n = t.owlCarousel({ // Исправил с 4 на 5
    css: !0,
    loop: !0,
    responsiveClass: !1,
    smartSpeed: 400,
    nav: !0,
    dots: !1,
    margin: 0,
    navText: ["", ""],
    mouseDrag: !1,
    responsive: {
      0: {
        items: 3
      },
      1041: {
        items: 5 // Исправил с 4 на 5
      }
    }
  }))
}(),

// Для sticky меню
function() {
  function stickyNav() {
  var windowTop = $(window).scrollTop();
  var navStickyTop = $('.sticky-anchor').offset().top;
    if (windowTop > navStickyTop) {
      $('.product-nav').addClass('sticky');
    } else {
      $('.product-nav').removeClass('sticky');
    }
  }
  $(window).scroll(function() {
    stickyNav();
  });
}()