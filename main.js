$(document).ready(function () {

  // Click sobre el sobre
  $('.valentines-day').on('click', function () {

    $(this).animate(
      { top: '+=40px', opacity: 0 },
      1200,
      'swing',
      function () {
        $(this).hide();
      }
    );

    $('#card')
      .css({
        visibility: 'visible',
        opacity: 0,
        transform: 'scale(0.9)'
      })
      .delay(500)
      .animate({ opacity: 1 }, 1200)
      .css({
        transform: 'scale(1)',
        transition: 'transform 1.2s ease'
      });
  });

  // Música
  $('#music-btn').on('click', function () {
    const music = document.getElementById('bg-music');

    if (music.paused) {
      music.play();
      $(this).text('⏸ Pausar');
    } else {
      music.pause();
      $(this).text('🎵 Música');
    }
  });

});
