(() => {
  const INTRO_MS = 3000;
  const intro = document.getElementById('intro');
  const menu = document.getElementById('menu');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const clock = document.getElementById('menu-time');

  const updateClock = () => {
    if (!clock) return;
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('ru-RU', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
    clock.textContent = formatter.format(now);
    clock.dateTime = now.toISOString();
  };

  updateClock();
  window.setInterval(updateClock, 1000);

  const showMenu = (instant = false) => {
    if (!menu || !intro) return;
    menu.hidden = false;

    if (instant) {
      menu.classList.add('is-visible');
      intro.hidden = true;
      return;
    }

    requestAnimationFrame(() => menu.classList.add('is-visible'));
    window.setTimeout(() => {
      intro.hidden = true;
    }, 520);
  };

  if (reducedMotion) {
    window.setTimeout(() => showMenu(true), 650);
  } else {
    window.setTimeout(() => showMenu(false), INTRO_MS - 300);
  }
})();
