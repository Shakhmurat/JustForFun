!function () {
 $('.label-club-member-js').hover(function(){
    $('.for-club-member-js').css({
      'opacity': '1',
      'visibility': 'visible'
    });
  }, function(){
    $('.for-club-member-js').css({
      'opacity': '0',
      'visibility': 'hidden'
    });
  });
}();

!function () {
  $('#checkbox-club-member').change(function() {
    if ($(this).is(':checked')) {
      $('.for-club-member-js').css({
        'opacity': '1',
        'visibility': 'visible'
      });
      $('.label-club-member-js').mouseout(function() {
        $('.for-club-member-js').css({
          'opacity': '1',
          'visibility': 'visible'
        });
      });
      $('.form-group-member-js').css('display','table');
      $('.label-disabled').hide();
      $('.form-group--bonus .hidden-text').show();
    } else {
      $('.label-club-member-js').mouseout(function() {
        $('.for-club-member-js').css({
          'opacity': '0',
          'visibility': 'hidden'
        });
      });
      $('.form-group-member-js').hide();
      $('.label-disabled').show();
      $('.form-group--bonus .hidden-text').hide();
    }
  });
}();