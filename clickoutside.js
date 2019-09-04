// If clicking outside the element do something.
// For this example remove the class extend from the form element if clicked outside the form.
$('.search-field').click(function(event) {
  event.stopPropagation();
  $(this).toggleClass('extend');
});

$(document).on("click", function(event){
 if(!$(event.target).closest(".lang-search__tab").length){
    $('.search-field').removeClass('extend');
  }
});