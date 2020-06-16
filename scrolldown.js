 smoothAnchor = function() {
    $alink = $('.anchor-points a');
    $alink.click(function (event) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
    });
  }