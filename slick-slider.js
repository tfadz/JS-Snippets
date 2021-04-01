sliderCounter = function() {
    var counter = 1;
    $('.videoIntro-carousel .slick-slide').each(function () {
      if(!$(this).hasClass('slick-cloned')) {
        $(this).find('span').html(counter);
        counter++;
      }
    });
  }

  // This adds a number to each slide and ignores the slick cloned.