
// Кусок кода из custom.js

// Для описания
! function() {
  $('.toggle-text').on('click', function() {
    var block = $('#category-description'),
      content = block.find('.content');

    if (block.hasClass('hidden-block')) {
      $(this).html('Скрыть');
      content.css('max-height', 'none');
      block.css('max-height', 'none').removeClass('hidden-block');
    } else {
      $(this).html('Показать полностью');
      content.css('max-height', '50px');
      block.css('max-height', '150px').addClass('hidden-block');
    }
  });
}();

// Для отзывов
function() {
  $('.mainpage-review-item').hover(function(){
    $(this).addClass('hovered');
    var itemHeight = $('.mainpage-review-item-in').height();
    $(this).find('.mainpage-review-item-body').animate({height: itemHeight + 40});
  }, function(){
    $(this).removeClass('hovered');
    $(this).find('.mainpage-review-item-body').animate({height: "160px"});
  });
}();