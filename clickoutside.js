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



// Another way to remove class when clicking outside of element
$searchField.click(function(event) {
  $(this).addClass('extend');
  event.stopPropagation();
});

// Remove class if user clicks outside of element
$(document).on("click", function(e) {
  if ($(e.target).is($searchField) === false) {
    $($searchField).removeClass("extend");
  }
});

// Another way, this first part turns on search element
// Then when clickign outside (document) you remove the active classs

$sbtn.click(function(event) {
  $(this).closest('.site-header').next().toggleClass('active');
  event.stopPropagation(); // < -- Need this
});

$(document).click(function() {
    $('.searchbutton').removeClass('active');
});