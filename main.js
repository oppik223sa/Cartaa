$(document).ready(function () {

  $('.valentines-day').click(function () {

  // Sobre se desvanece suavemente
  $('.valentines-day').animate(
    { top: '+=20px', opacity: 0 },
    1800,
    'swing'
  );

  // Mostrar carta con zoom muy suave
  $('#card')
    .css({
      visibility: 'visible',
      opacity: 0,
      transform: 'scale(0.85)'
    })
    .delay(800)
    .animate({ opacity: 1 }, 1800)
    .css({
      transform: 'scale(1)',
      transition: 'transform 2s ease-in-out'
    });

});

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

  $('#music-btn').click(function () {
  const music = document.getElementById('bg-music');

  if (music.paused) {
    music.volume = 0;
    music.play();

    let vol = 0;
    const fadeIn = setInterval(() => {
      if (vol < 0.75) {
        vol += 0.02;
        music.volume = vol;
      } else {
        clearInterval(fadeIn);
      }
    }, 200);

    $(this).text('⏸ Pausar');
  } else {
    music.pause();
    $(this).text('🎵 Música');
  }
});

});
