<!-- Referenced from motc.org -->
<!-- Use autopause=0 to allow 2 videos to pause and not have the other pause -->
<!-- need to use  'node_modules/vimeo-froogaloop/froogaloop.js', with it -->

<div class="home-primary-video">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="video-embed">
          <button id="play-button" class="cta" role="button" aria-label="Play Video"></button>
          <button id="pause-button" class="pause-btn"></button>
          <iframe class="iframe" title="vimeo-player" src="https://player.vimeo.com/video/365694721?autopause=0&amp;loop=1&amp;controls=0&amp;autoplay=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
</div>
       

<script>
  var player = new Vimeo.Player(document.querySelector('.iframe'));

  document.querySelector('#play-button').addEventListener('click', function() {
    player.play()
  });
  document.querySelector('#pause-button').addEventListener('click', function() {
    player.pause()
  });

  $playbtn = $('#play-button');
  $playbtn.click(function(event) {
    $(this).hide();
    $(this).next().show();
  });
</script>