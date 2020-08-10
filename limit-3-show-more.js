// This shows how to limit a grid of several items to 3. Then when clicking on a view more button the the grid shows the rest.
// This uses the slice method

limitItems = function() {

    var $showAllP = $('.show-all.people');
    var $showLessP = $('.show-less.people');
    var $showAllB = $('.show-all.bposts');
    var $showLessB = $('.show-less.bposts');
    
    // People Sort

    if($showAllP[0]) {
      $('.people-gallery .row.limit').each(function() {
        $(this).children().slice(3).hide(); 
      });

      $showAllP.on('click', function (e) {
        e.preventDefault();
        $('.people-gallery .row.limit .pb2').slice(0).slideDown();
        $(this).next().show();
        $(this).hide();
      });
    }

    $showLessP.on('click', function (e) {
      e.preventDefault();
      $('.people-gallery .row.limit').each(function() {
        $(this).children().slice(3).hide(); 
      });
      $(this).hide();
      $(this).prev().show();
    });


    // Blog Sort
    if($showAllB[0]) {
      $('.related-posts .row.limit').each(function() {
        $(this).children().slice(3).hide(); 
      });

      $showAllB.on('click', function (e) {
        e.preventDefault();
        $('.related-posts .row.limit .pb2').slice(0).slideDown();
        $(this).next().show();
        $(this).hide();
      });

      $showLessB.on('click', function (e) {
        e.preventDefault();
        $('.related-posts .row.limit').each(function() {
          $(this).children().slice(3).hide(); 
        });
        $(this).hide();
        $(this).prev().show();
      });
    }

    // HTML CODE

   <section class="people-gallery">
    <div class="row limit">
      <div class="col-lg-4 pb2">
        <img src="placeholder.jpg">
        <h3>lorem ipsom dolor</h3>
      </div>
      <div class="col-lg-4 pb2">
        <img src="placeholder.jpg">
        <h3>lorem ipsom dolor</h3>
      </div>
      <div class="col-lg-4 pb2">
        <img src="placeholder.jpg">
        <h3>lorem ipsom dolor</h3>
      </div>
      <div class="col-lg-4 pb2">
        <img src="placeholder.jpg">
        <h3>lorem ipsom dolor</h3>
      </div>
    </div>
    </section>
