/**
 * Carosello accessibile (pattern WAI-ARIA APG "Carousel").
 * Markup: [data-carousel] > [data-slide]… + [data-prev] [data-next] [data-dot] [data-pause]
 * Opzioni (data-attribute sul contenitore): data-autoplay="true|false", data-start="0".
 */
const INTERVAL = 7000;

export function initCarousels() {
  document.querySelectorAll<HTMLElement>('[data-carousel]').forEach(initCarousel);
}

function initCarousel(root: HTMLElement) {
  if (root.dataset.ready) return;
  root.dataset.ready = 'true';

  const slides = Array.from(root.querySelectorAll<HTMLElement>('[data-slide]'));
  const dots = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-dot]'));
  const prev = root.querySelector<HTMLButtonElement>('[data-prev]');
  const next = root.querySelector<HTMLButtonElement>('[data-next]');
  const pauseBtn = root.querySelector<HTMLButtonElement>('[data-pause]');
  const controls = root.querySelector<HTMLElement>('[data-controls]');
  const live = root.querySelector<HTMLElement>('[aria-live]');
  if (!slides.length) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const autoplayEnabled = root.dataset.autoplay === 'true';

  let index = Math.min(Number(root.dataset.start) || 0, slides.length - 1);
  /** Pausa scelta dall'utente (o imposta da prefers-reduced-motion). */
  let userPaused = !autoplayEnabled || reducedMotion.matches;
  /** Pausa temporanea per hover o focus dentro il carosello. */
  let hover = false;
  let focusWithin = false;
  let timer: number | undefined;

  if (controls) controls.hidden = false;

  const show = (i: number, { focusDot = false } = {}) => {
    index = (i + slides.length) % slides.length;
    slides.forEach((s, n) => {
      const active = n === index;
      s.dataset.active = String(active);
      s.inert = !active;
      s.querySelectorAll<HTMLImageElement>('img[loading="lazy"]').forEach((img) => active && (img.loading = 'eager'));
    });
    dots.forEach((d, n) => {
      if (n === index) d.setAttribute('aria-current', 'true');
      else d.removeAttribute('aria-current');
    });
    if (focusDot) dots[index]?.focus();
    restart();
  };

  const isRunning = () => autoplayEnabled && !userPaused && !hover && !focusWithin;

  function restart() {
    window.clearTimeout(timer);
    if (live) live.setAttribute('aria-live', isRunning() ? 'off' : 'polite');
    if (isRunning()) timer = window.setTimeout(() => show(index + 1), INTERVAL);
  }

  const syncPauseButton = () => {
    if (!pauseBtn) return;
    pauseBtn.dataset.paused = String(userPaused);
    pauseBtn.setAttribute('aria-label', userPaused ? 'Avvia la presentazione' : 'Metti in pausa la presentazione');
  };

  prev?.addEventListener('click', () => show(index - 1));
  next?.addEventListener('click', () => show(index + 1));
  dots.forEach((d, n) => d.addEventListener('click', () => show(n)));

  pauseBtn?.addEventListener('click', () => {
    userPaused = !userPaused;
    syncPauseButton();
    restart();
  });

  // Frecce sinistra/destra quando il focus è nei controlli
  controls?.addEventListener('keydown', (e) => {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    e.preventDefault();
    const onDot = dots.includes(document.activeElement as HTMLButtonElement);
    show(index + (e.key === 'ArrowRight' ? 1 : -1), { focusDot: onDot });
  });

  // Pausa all'hover e al focus
  root.addEventListener('mouseenter', () => { hover = true; restart(); });
  root.addEventListener('mouseleave', () => { hover = false; restart(); });
  root.addEventListener('focusin', () => { focusWithin = true; restart(); });
  root.addEventListener('focusout', (e) => {
    if (!root.contains(e.relatedTarget as Node | null)) { focusWithin = false; restart(); }
  });

  reducedMotion.addEventListener('change', (mq) => {
    if (mq.matches) { userPaused = true; syncPauseButton(); restart(); }
  });

  syncPauseButton();
  show(index);
}
