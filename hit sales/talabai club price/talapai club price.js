!function () {
  $('.btn-talapai-price').mouseup(function() {
    $('.original-price').show();
    $('.talapai-club-price').hide();
    $('.original-installments').show();
    $('.talapai-club-installments').hide();
    if ($('.mainpage-good-item.item-2x1').find('.talapai-club-price').length > 0) { 
      $('.mainpage-good-item.item-2x1').removeClass('with-discount');
    }
  })
  .mousedown(function() {
    $('.original-price').hide();
    $('.talapai-club-price').show();
    $('.original-installments').hide();
    $('.talapai-club-installments').show();
    if ($('.mainpage-good-item.item-2x1').find('.talapai-club-price').length > 0) { 
      $('.mainpage-good-item.item-2x1').addClass('with-discount');
    }
  });
}();
