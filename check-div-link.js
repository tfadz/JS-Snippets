$('.et-timeline-item').each(function() {
  if($(this).find('.et-content a').length !== 0){
    $(this).addClass('terry');
  }
});