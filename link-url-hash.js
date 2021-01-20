 videoHash = function() {
    // this triggers the easy modal when hash url is open-video
    if (location.href.indexOf("open-video") != -1) {
      $('.eModal-2').trigger('click');
    }
  }