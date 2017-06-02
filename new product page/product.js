
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
}(),

/* Для ссылок в sticky меню */
function() {
$(".product-nav-link").on("click", function() {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - $(".product-nav").height() - 25
    }, 800);
  });
}(),



/* Слайдер */
function() {
  $('#product-gallery-vertical').lightSlider({
    gallery: true,
    item: 1,
    vertical: true,
    verticalHeight: 400,
    vThumbWidth: 54,
    thumbItem: 4,
    thumbMargin: 10,
    slideMargin: 0
  });

  $('.lSPager').wrapAll('<div class="slide-pager-container">');
}(),

// Это кусок кода, который ранее отвечал за слайдер на странице продукта, нужно его удалить, либо закоментить.
function() {
  var t = $(".product-gallery");
  if (0 == t.length) return !1;
  var e = $("#modal-media"),
    n = t.find(".carousel"),
    o = t.find(".thumbs"),
    i = n.find(".slide"),
    a = 0,
    s = !1,
    r = "",
    l = "",
    d = !1,
    c = 0,
    u = function() {
      if (a > 1) {
        var t = function() {
          var t = parseInt(e.find(".carousel").find(".active").find(".slide").attr("data-index"), 10);
          e.find(".list li").removeClass("active").filter('[data-index="' + t + '"]').addClass("active")
        };
        d = e.find(".carousel").owlCarousel({
          css: !0,
          loop: !0,
          responsiveClass: !0,
          smartSpeed: 400,
          nav: !1,
          dots: !1,
          margin: 0,
          navText: ["", ""],
          startPosition: c,
          items: 1,
          mouseDrag: !1
        }), e.find(".list li").on("click", function() {
          var t = parseInt($(this).attr("data-index"), 10);
          return d.trigger("to.owl.carousel", [t, 400, !0]), !1
        }), d.on("changed.owl.carousel", function(e) {
          setTimeout(function() {
            t()
          }, 100)
        }), t()
      } else e.find(".carousel").addClass("owl-loaded")
    },
    f = function() {
      d && (d.trigger("destroy.owl.carousel").removeClass("owl-loaded owl-hidden"), d.find(".owl-stage-outer").children().unwrap(), d = !1)
    };
  if (e.on("shown.bs.modal", function() {
      u()
    }).on("hidden.bs.modal", function() {
      f(), e.removeClass("toggled")
    }).find(".btn-start-view").on("click", function() {
      return e.addClass("toggled"), !1
    }), i.each(function(t) {
      var e = $(this),
        n = e.attr("data-thumb");
      e.attr("data-index", t), r += "<li" + (0 == t ? ' class="active"' : "") + ' data-index="' + t + '"><div class="thumb"><img src="' + n + '" class="img-fluid img-inline" /></div></li>', l += '<div data-index="' + t + '" class="slide img-centered"><img src="' + e.find("img").attr("src") + '" class="img-fluid" /></div>', a++
    }), e.find(".carousel").html(l).end().find(".list").html(r), n.delegate(".slide", "click", function() {
      var t = parseInt($(this).attr("data-index"), 10);
      return c = t, e.modal("show"), !1
    }), a > 1) {
    var m = function() {
      var t = parseInt(n.find(".active").find(".slide").attr("data-index"), 10);
      o.find("li").removeClass("active").filter('[data-index="' + t + '"]').addClass("active")
    };
    s = n.owlCarousel({
      css: !0,
      loop: !0,
      responsiveClass: !0,
      smartSpeed: 400,
      nav: !1,
      dots: !1,
      margin: 0,
      navText: ["", ""],
      items: 1,
      mouseDrag: !1
    }), s.on("changed.owl.carousel", function(t) {
      setTimeout(function() {
        m()
      }, 100)
    }), o.removeClass("hidden").find("ul").html(r), o.find("li").on("click", function() {
      var t = parseInt($(this).attr("data-index"), 10);
      return s.trigger("to.owl.carousel", [t, 400, !0]), !1
    }), m()
  }
}(),


