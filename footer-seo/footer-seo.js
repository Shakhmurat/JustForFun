!function () {
  $('.toggle-text').on('click', function () {
    var block = $('#footer-seo-description'),
    content = block.find('.content');
    if (block.hasClass('hidden-block')) {
      $(this).html('Скрыть');
      content.css('max-height', 'none');
      block.css('max-height', 'none').removeClass('hidden-block');
    } else {
      $(this).html('Показать полностью');
      content.css('max-height', '47px');
      block.css('max-height', '120px').addClass('hidden-block');
    }
  });
}();