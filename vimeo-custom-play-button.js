// Documentation for custom Vimeo play buttons
// Seperated this function out as it was conflicting with above scripts
// Hooking into the Vimeo via API we used the Froogaloop script. However, this script only handles one video.
// In order to handle multiple videos we needed to dynamically add IDs to both the parent container of the vimeo & the vimeo iframe
// This created a whole bunch of variables and events to handle multiple videos. 
(function($) {

  $vimeo = $('.vimeo');
  $test = $('.testimonial');

  if(($test).length) {
    // Dynamically add(video#1) id to iframe
    $('.video-vimeo iframe').attr('id', function(i) {
       return 'video'+(i+1);
    });

    // Dynamically add id to testimonial class (vimeo parent container)
    $('.testimonial').attr('id', function(i) {
       return 'test'+(i+1);
    });

    // Ids for the iframes
    var player = document.getElementById('video1');
    var player2 = document.getElementById('video2');
    var player3 = document.getElementById('video3');
    var player4 = document.getElementById('video4');
    var player5 = document.getElementById('video5');
    var player6 = document.getElementById('video6');

    // $f is a reference to the froogaloop script
    var iframe = $('#video1')[0];
    var player = $f(iframe);

    // if the iframe exists..
    if(player2) {
      var iframe2 = $('#video2')[0];
      var player2 = $f(iframe2);
    }

    if(player3) {
      var iframe3 = $('#video3')[0];
      var player3 = $f(iframe3);
    }

    if(player4) {
      var iframe4 = $('#video4')[0];
      var player4 = $f(iframe4);
    }

    if(player5) {
      var iframe5 = $('#video5')[0];
      var player5 = $f(iframe5);
    }

    if(player6) {
      var iframe6 = $('#video6')[0];
      var player6 = $f(iframe6);
    }

    // Target play button specific to the id
    $playButton = $('#test1 #play-button');
    $playButton2 = $('#test2 #play-button');
    $playButton3 = $('#test3 #play-button');
    $playButton4 = $('#test4 #play-button');
    $playButton5 = $('#test5 #play-button');
    $playButton6 = $('#test6 #play-button');

    // Target the video overlay to the id
    $v_overlay = $('#test1 .vimeo-overlay');
    $v_overlay2 = $('#test2 .vimeo-overlay');
    $v_overlay3 = $('#test3 .vimeo-overlay');
    $v_overlay4 = $('#test4 .vimeo-overlay');
    $v_overlay5 = $('#test5 .vimeo-overlay');
    $v_overlay6 = $('#test6 .vimeo-overlay');

    // Clicking the play button related to the id.
    $playButton.each(function(){
       $(this).on("click", function(){
           player.api("play");
           $v_overlay.hide();
       });
    });

    $playButton2.each(function(){
       $(this).on("click", function(){
           player2.api("play");
           $v_overlay2.hide();
       });
    });

    $playButton3.each(function(){
       $(this).on("click", function(){
           player3.api("play");
           $v_overlay3.hide();
       });
    });

    $playButton4.each(function(){
       $(this).on("click", function(){
           player4.api("play");
           $v_overlay4.hide();
       });
    });

    $playButton5.each(function(){
       $(this).on("click", function(){
           player5.api("play");
           $v_overlay5.hide();
       });
    });

     $playButton6.each(function(){
       $(this).on("click", function(){
           player6.api("play");
           $v_overlay6.hide();
       });
    });

  }

    })(jQuery);




    // html/php

$vimeo = get_sub_field('vimeo');
$vimeo = preg_replace('/src="(.+?)"/', 'src="$1?api=1"', $vimeo);

<button class="cta" id="play-button"><?php echo $cta ?></button>

<div class="vimeo">
    <div class="main vimeo-overlay">
        <article>
          <h2>Some title</h2>
        </article>
    </div>

  <div class="video-vimeo text-center">
        <?php
            if ( $vimeo ) {
                // Add autoplay functionality to the video code
                if ( preg_match('/src="(.+?)"/', $vimeo, $matches) ) {
                    // Video source URL
                    $src = $matches[1];
                    
                    // Add option to hide controls, enable HD, and do autoplay -- depending on provider
                    $params = array(
                        'controls'    => 0,
                        'hd'        => 1,
                        'autoplay' => 0
                    );
                    
                    $new_src = add_query_arg($params, $src);
                    
                    $vimeo = str_replace($src, $new_src, $vimeo);
                    
                    // add extra attributes to iframe html
                    $attributes = 'frameborder="0"';
                    
                    $vimeo = str_replace('></iframe>', ' ' . $attributes . '></iframe>', $vimeo);
                }
            
                echo '<div class="video-embed">', $vimeo, '</div>';
            } 

         ?>
    </div>