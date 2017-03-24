!function () {
  $('.banner-box .btn-banner').click(function () {
    if ($(this).hasClass('sticky')) {
      $(this).removeClass('sticky');
      $('.banner-club').hide();
    } else {
      $(this).addClass('sticky');
      $('.banner-club').show();
    }
  });
  $('.banner-box .btn-close').click(function () {
    $('.banner-box .banner-club').hide();
    $('.banner-box .btn-banner').removeClass('sticky');
  });  
}();