
// Таймер

function() {
  var date = $('#countdown').data('date');
  $('#countdown').countdown(date, function(event) {
    var totalHours = event.offset.totalDays * 24 + event.offset.hours;
    var myHour, myMin, mySec;
    // var format = '%H:%M:%S';
    var allHours = event.offset.totalDays * 24 + event.offset.hours;
    var hourstr = allHours.toString();
    var hour = hourstr.slice(hourstr.length - 1);
    if (hour < 5 && hour > 1 && (allHours < 10 || allHours > 20)) {
      myHour = ' часа';
    } else if (hour != 0 && hour < 2 && hour > 0 && (allHours < 10 || allHours > 20)) {
      myHour = ' час';
    } else if (hour > 10 && hour < 20) {
      myHour = ' дней';
    } else {
      myHour = ' часов';
    }
    var allMinutes = event.offset.minutes;
    var minstr = allMinutes.toString();
    var minute = minstr.slice(minstr.length - 1);
    if (minute < 5 && minute > 1 && (allMinutes < 10 || allMinutes > 20)) {
      myMin = ' минуты';
    } else if (minute != 0 && minute < 2 && minute > 0 && (allMinutes < 10 || allMinutes > 20)) {
      myMin = ' минута';
    } else if (minute > 10 && minute < 20) {
      myMin = ' дней';
    } else {
      myMin = ' минут';
    }
    var allSeconds = event.offset.seconds;
    var secondstr = allSeconds.toString();
    var second = secondstr.slice(secondstr.length - 1);
    if (second < 5 && second > 1 && (allSeconds < 10 || allSeconds > 20)) {
      mySec = ' секунды';
    } else if (second != 0 && second < 2 && second > 0 && (allSeconds < 10 || allSeconds > 20)) {
      mySec = ' секунда';
    } else if (allSeconds > 10 && allSeconds < 20) {
      mySec = ' секунд';
    } else {
      mySec = ' секунд';
    }
    var $this = $(this).html(event.strftime(
      '<div class="countdown-item time"><span class="hours">' + totalHours + '</span><p>' + myHour + '</p></div>' + '<div class="countdown-item time"><span class="minutes">%M</span><p>' + myMin + '</p></div>' + '<div class="countdown-item time"><span class="seconds">%S</span><p>' + mySec + '</p></div>'));
    if ($(".countdown-item .hours").text() > 99) {
      $(".countdown-item .hours").css("max-width", "67px");
    }
  });
}();