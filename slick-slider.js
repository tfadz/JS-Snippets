  // This adds a number to each slide and ignores the slick cloned.

sliderCounter = function() {
    var counter = 1;
    $('.videoIntro-carousel .slick-slide').each(function () {
      if(!$(this).hasClass('slick-cloned')) {
        $(this).find('span').html(counter);
        counter++;
      }
    });
  }


  // This moves slick dots into another div
  $('.slick-dots').detach().appendTo('.slick-slider-dots');
