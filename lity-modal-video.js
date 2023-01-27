  $('.hero-masonry-bottom-right >a').click(function(event) {
    $('#lightbox #myVideo').trigger('play');
  });
  $(document).on('lity:close', function() {
      $('video').trigger('pause');
  });
