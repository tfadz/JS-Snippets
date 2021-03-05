// Limit text characters to 45 characters
$st = $('.slick-slide .product-item .product-cta h3');
$st.text(function(i, txt) {
  return txt.substring(0,45) + (txt.length > 45 ? '...' : '');
});



// Show more button and Show less button for togglign character count

limitCard = function() {
    var $cardp = $('.card .card-meta p');
    $('.card .card-meta p').each(function(event){ /* select all divs with the item class */

      var max_length = 110; /* set the max content length before a read more link will be added */

      if($(this).html().length > max_length){ /* check for content length */

        var short_content   = $(this).html().substr(0,max_length); /* split the content in two parts */
        var long_content  = $(this).html().substr(max_length);

        $(this).html(short_content+'<div class="read_more read-more">Read More</div>'+
          '<span class="more_text" style="display:none;">' + long_content + '</span>' + '<div class="read_less read-more" style="display:none;">Read Less</div>'); /* Alter the html to allow the read more functionality */

        $(this).find('.read_more').click(function(event){ /* find the a.read_more element within the new html and bind the following code to it */

          event.preventDefault(); /* prevent the button from changing the url */
          $(this).hide(); /* hide the read more button */
          $('.read_less').show(); /* show read less button */

          $(this).parents('.card .card-meta p').find('.more_text').show(); /* show the .more_text span */

        });

        $(this).find('.read_less').click(function(event){
          event.preventDefault();

          $(this).hide(); /* hide the read more button */
          $('.read_less').hide();
          $('.read_more').show();

          $(this).parents('.card .card-meta p').find('.more_text').hide();

        });

      }

    });

    // HTML CODE

    <div class="card">
    	<div class="card-meta">
    		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    		Aspernatur ipsam quibusdam quaerat nesciunt voluptatum officiis 
    		reprehenderit eveniet nulla repudiandae, ea quia numquam odio 
    		doloremque quam delectus rem aliquid fugit. Distinctio!</p>
    	</div>
    </div>