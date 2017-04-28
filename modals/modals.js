!function () {
  $('.show-password-js').click(function(e) {
    e.preventDefault();
    if ($('#password-field').attr('type') == 'password') {
      $('#password-field').attr('type', 'text'); 
    } else {
      $('#password-field').attr('type', 'password'); 
    } 
  });
}();
