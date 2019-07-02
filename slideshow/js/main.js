var slideShow = (function () {
  return {
    init: function () {
      $('.slideshow__link').on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        var container = $this.closest('.slideshow');
        var path = $this.attr('href');
        var display = container.find('.slideshow__display-pic');
        var preloader = $('#preloader');
        var fadedOut = $.Deferred();
        var loaded = $.Deferred();

        display.fadeOut(300, function() {
          fadedOut.resolve();
        })

        fadedOut.done(function() {
          preloader.show();

          display.attr('src', path).on('load', function() {
            loaded.resolve();
          })
        })

        loaded.done(function() {
          preloader.hide();
          display.show();
        })
      })
    }
  }
}());

slideShow.init();