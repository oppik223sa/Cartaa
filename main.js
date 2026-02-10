$(document).ready(function () {

  $('.valentines-day').click(function () {

    // Animación suave del sobre
    $('.valentines-day').animate(
      { top: '+=40px', opacity: 0 },
      1200,
      'swing'
    );

    // Mostrar carta con zoom suave
    $('#card')
      .css({
        visibility: 'visible',
        opacity: 0,
        transform: 'scale(0.8)'
      })
      .delay(600)
      .animate({ opacity: 1 }, 1200)
      .css({
        transform: 'scale(1)',
        transition: 'transform 1.2s ease'
      });
  });

});
