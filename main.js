$(document).ready(function () {

  // CLICK SOBRE EL SOBRE
  $('.valentines-day').on('click', function () {

    // Animación del sobre
    $('.valentines-day').animate(
      { top: '+=20px', opacity: 0 },
      1800
    );

    // Mostrar carta
    $('#card')
      .css({
        visibility: 'visible',
        opacity: 0,
        transform: 'scale(0.85)'
      })
      .delay(600)
      .animate({ opacity: 1 }, 1800)
      .css({
        transform: 'scale(1)',
        transition: 'transform 2s ease-in-out'
      });

    // Texto letra por letra
    setTimeout(() => {
      const texts = document.querySelectorAll('.typed');
      typeWriterSequence(texts, 45);
    }, 1500);

  });

  // BOTÓN MÚSICA CON FADE
  $('#music-btn').on('click', function () {
    const music = document.getElementById('bg-music');

    if (music.paused) {
      music.volume = 0;
      music.play();

      let vol = 0;
      const fade = setInterval(() => {
        if (vol < 0.75) {
          vol += 0.02;
          music.volume = vol;
        } else {
          clearInterval(fade);
        }
      }, 200);

      $(this).text('⏸ Pausar');
    } else {
      music.pause();
      $(this).text('🎵 Música');
    }
  });

});

// FUNCIÓN TEXTO SECUENCIAL
function typeWriterSequence(elements, speed) {
  let index = 0;

  function typeNext() {
    if (index >= elements.length) return;

    const el = elements[index];
    const text = el.innerHTML;
    el.innerHTML = '';
    let i = 0;

    const typing = setInterval(() => {
      if (i < text.length) {
        el.innerHTML += text.charAt(i);
        i++;
      } else {
        clearInterval(typing);
        index++;
        setTimeout(typeNext, 600);
      }
    }, speed);
  }

  typeNext();
      }
