(function() {
  $(function() {
    if ($(window).width() < 767) {
      return window.addEventListener("load", function() {
        return setTimeout((function() {
          return window.scrollTo(0, 1);
        }), 0);
      });
    }
  });

}).call(this);
