! function() {
  var t = $(".nav-main");
  if (0 == t.length) return !1;
  var e = $(".wrapper");
  t.find(".nav-dropdown").each(function() {

      var t = $(this),
        n = t.parents("li"),
        o = function() {
          n.siblings("li").removeClass("toggled"), n.addClass("toggled"), e.addClass("show-nav"), $(document).trigger("showNavDropdown");
          $('.zoomContainer').remove();
          $.removeData($('img'), 'elevateZoom');
        },
        i = function() {
          n.removeClass("toggled"), e.removeClass("show-nav")
        };
      n.children("a").on("mouseenter", function() {
        return n.hasClass("toggled") ? i() : o(), !1
      })
      $(this).mouseleave(function() {
        n.removeClass("toggled"), e.removeClass("show-nav");
        console.log('mouseleave');
      });

      // Необходимо удалить, начало
      // $(".header, .nav-wrapper").mouseenter(function() {
      //   n.removeClass("toggled"), e.removeClass("show-nav");
      // });
      // Необходимо удалить, конец
 
      // Необходимо добавить, начало
      $(".column-nav").mouseleave(function() {
        n.removeClass("toggled"), e.removeClass("show-nav");
      });
      // Необходимо добавить, конец

    }),
    $(document).on("mouseenter", function(n) {
      var o = $(n.target);
      o.hasClass("nav-dropdown") || 0 != o.parents(".nav-dropdown").length || (t.find(".toggled").removeClass("toggled"), e.removeClass("show-nav"))
    })

}();