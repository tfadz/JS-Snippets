var websiteFunctions = (function($) {

  var init = function() {
    testSlider();
  },

  testSlider = function() {
    $('.test-slider').slick({
      autoplay: false,
      fade: false,
      arrows: true,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerPadding: '0',
      appendArrows: ".test-arrows"
    });
  },

return {
  init:init
};

})(jQuery);

jQuery(document).ready(websiteFunctions.init );