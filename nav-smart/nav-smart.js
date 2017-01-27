function() {
  if ($(".compare-num-js").html() > 0) {
    $(".compare-num-js").parents(".column").addClass("colored");
  }
  if ($(".cart-num-js").html() > 0) {
    $(".cart-num-js").parents(".column").addClass("colored");
  }
  if ($(".bonuses-num-js").html() > 0) {
    $(".bonuses-num-js").parents(".column").addClass("colored");
  }
  if ($(".wishlist-num-js").html() > 0) {
    $(".wishlist-num-js").parents(".column").addClass("colored");
  }
}();