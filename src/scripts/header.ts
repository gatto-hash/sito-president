/**
 * Header: menu a tendina (disclosure), menu mobile a schermo intero, selettore lingua.
 * - Un solo menu a tendina aperto alla volta.
 * - Esc chiude e riporta il focus al pulsante; click fuori chiude; il focus che esce dal menu lo chiude.
 */
export function initHeader() {
  const header = document.querySelector<HTMLElement>('[data-header]');
  if (!header) return;

  /* ---------- Menu a tendina desktop ---------- */
  const dropdowns = Array.from(header.querySelectorAll<HTMLElement>('[data-dropdown]')).map((root) => ({
    root,
    button: root.querySelector<HTMLButtonElement>('[data-dd-button]')!,
    panel: root.querySelector<HTMLElement>('[data-dd-panel]')!,
  }));

  const setOpen = (dd: (typeof dropdowns)[number], open: boolean) => {
    dd.button.setAttribute('aria-expanded', String(open));
    dd.panel.hidden = !open;
  };
  const closeAll = (except?: (typeof dropdowns)[number]) =>
    dropdowns.forEach((d) => d !== except && setOpen(d, false));

  dropdowns.forEach((dd) => {
    dd.button.addEventListener('click', () => {
      const open = dd.button.getAttribute('aria-expanded') !== 'true';
      closeAll(dd);
      setOpen(dd, open);
    });
    dd.root.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && dd.button.getAttribute('aria-expanded') === 'true') {
        e.preventDefault();
        setOpen(dd, false);
        dd.button.focus();
      }
    });
    dd.root.addEventListener('focusout', (e) => {
      const next = e.relatedTarget as Node | null;
      if (next && !dd.root.contains(next)) setOpen(dd, false);
    });
  });

  document.addEventListener('click', (e) => {
    const t = e.target as Node;
    dropdowns.forEach((d) => !d.root.contains(t) && setOpen(d, false));
  });

  /* ---------- Menu mobile ---------- */
  const toggle = header.querySelector<HTMLButtonElement>('[data-menu-toggle]');
  const label = header.querySelector<HTMLElement>('[data-menu-label]');
  const mobile = header.querySelector<HTMLElement>('[data-mobile-menu]');

  const setMobile = (open: boolean) => {
    if (!toggle || !mobile || !label) return;
    toggle.setAttribute('aria-expanded', String(open));
    label.textContent = open ? 'CHIUDI' : 'MENU';
    mobile.hidden = !open;
    document.body.classList.toggle('is-locked', open);
  };

  toggle?.addEventListener('click', () => setMobile(toggle.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && toggle?.getAttribute('aria-expanded') === 'true') {
      setMobile(false);
      toggle.focus();
    }
  });
  window.matchMedia('(min-width: 1024px)').addEventListener('change', (mq) => {
    if (mq.matches) setMobile(false);
    else closeAll();
  });

  header.querySelectorAll<HTMLButtonElement>('[data-mm-toggle]').forEach((btn) => {
    const sub = document.getElementById(btn.getAttribute('aria-controls') || '');
    btn.addEventListener('click', () => {
      const open = btn.getAttribute('aria-expanded') !== 'true';
      btn.setAttribute('aria-expanded', String(open));
      if (sub) sub.hidden = !open;
    });
  });

  /* ---------- Lingua (le versioni in lingua non sono previste: cambia solo lo stato) ---------- */
  const langButtons = header.querySelectorAll<HTMLButtonElement>('[data-lang]');
  langButtons.forEach((btn) =>
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      langButtons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
    }),
  );
}
