!function () {
  $('.delivery-input-js').change(function() {
    if ($('#courier-delivery').is(':checked')) {
      $('.courier-delivery-group').css('opacity', '1'); 
      $('.self-delivery-group').css({
        'opacity': '0',
        'visibility': 'hidden'
      });
    } else {
      $('.courier-delivery-group').css('opacity', '0');
      $('.self-delivery-group').css({
        'opacity': '1',
        'visibility': 'visible'
      });
    } 
  });
}();

!function () {
  $('#checkbox-use-bonus').change(function() {
    if ($(this).is(':checked')) {
      $('.checkout-slider-js').slideDown();
    } else {
      $('.checkout-slider-js').slideUp();
    } 
  });
}();