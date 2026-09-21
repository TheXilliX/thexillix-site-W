(() => {
  const INTRO_MS = 3000;
  const intro = document.getElementById('intro');
  const menu = document.getElementById('menu');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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
