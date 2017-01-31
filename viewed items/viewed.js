
// Кусок кода из main.min.js

function() {
  var t = $(".mainpage-section-viewed").find(".carousel");
  if (0 == t.length) return !1;
  var e = t.find(".item"),
    n = !1;
  // Добавленный код, начало
  if (e.length == 0) {
    $(".item-talapai-banner").css("width", "100%");
  } else if (e.length == 1) {
    $(".item-talapai-banner").css("width", "75%");
  } else if (e.length == 2) {
    $(".item-talapai-banner").css("width", "50%");
  } else if (e.length == 3) {
    $(".item-talapai-banner").css("width", "25%");
    $(".talapai-banner-title").css("font-size", "33px");
    $(".talapai-banner-title .icon-circle").css({"margin": "-0.205rem -3px 0 -3px", "font-size": "24px"});
    $(".talapai-banner-text").css("font-size", "13px");
  } else if (e.length >= 4) {
    $(".item-talapai-banner").remove();
  }
  // Добавленный код, конец
  e.length > 4 && (n = t.owlCarousel({ // Изменил
    css: !0,
    loop: !0,
    responsiveClass: !1,
    smartSpeed: 400,
    nav: !0,
    dots: !1,
    margin: 0,
    navText: ["", ""],
    items: 4, // Изменил
    autoWidth: !0, //Необходимо удалить
    mouseDrag: !1,
    center: !0 // Необходимо удалить
  }))
}()