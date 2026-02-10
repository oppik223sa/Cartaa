$(document).ready(function () {

  const paragraphs = $('.typed');
  let index = 0;

  // Guardar el texto original
  paragraphs.each(function () {
    $(this).data('text', $(this).text());
    $(this).text('');
  });

  function typeWriter(element, speed = 40, callback) {
    const text = element.data('text');
    element.css('visibility', 'visible');

    let i = 0;
    const typing = setInterval(() => {
      if (i < text.length) {
        element.append(text.charAt(i));
        i++;
      } else {
        clearInterval(typing);
        if (callback) callback();
      }
    }, speed);
  }

  function startTyping() {
    if (index < paragraphs.length) {
      typeWriter($(paragraphs[index]), 220, () => {
        index++;
        setTimeout(startTyping, 1200); // pausa suave
      });
    }
  }

  $('.valentines-day').one('click', function () {

    // Animación del sobre
    $('.valentines-day').animate(
      { top: '+=40px', opacity: 0 },
      1200,
      'swing'
    );

    // Mostrar carta
    $('#card')
      .css({
        visibility: 'visible',
        opacity: 0,
        transform: 'scale(0.95)'
      })
      .delay(400)
      .animate({ opacity: 1 }, 1200)
      .css({
        transform: 'scale(1)',
        transition: 'transform 1.2s ease'
      });

    // ✍️ Iniciar escritura
    setTimeout(startTyping, 1400);
  });

  // 🎵 Música
  $('#music-btn').click(function () {
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
