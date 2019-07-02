var slider = (function () {
  var counter = 1,
    duration = 500,
    inProcess = false;

  var moveSlide = function (container, direction) {
    var items = $('.slider__item', container),
      activeItem = items.filter('.active'),
      direction = direction == 'down' ? 100 : -100;

    if (counter >= items.length) counter = 0;

    var reqItem = items.eq(counter);

    activeItem.animate({
      'top': direction + '%'
    }, duration);

    reqItem.animate({
      'top': 0
    }, duration, function () {
      activeItem.removeClass('active')
        .css('top', '-' + direction + '%');
      $(this).addClass('active');

      inProcess = false;
    });
  }

  return {
    init: function () {
      $('.slider__controls-top').on('click', function (e) {
        e.preventDefault();

        if (!inProcess) {
          inProcess = true;

          moveSlide($('.slider_first'), 'down');
          moveSlide($('.slider_opposite'), 'up');

          counter++;
        }
      });
    }
  }
}());

slider.init();