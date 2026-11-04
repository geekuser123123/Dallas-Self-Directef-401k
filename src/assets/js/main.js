(() => {
  'use strict';

  // Mobile navigation
  const header = document.querySelector('[data-header]');
  const toggle = document.querySelector('[data-nav-toggle]');
  const nav = document.getElementById('site-nav');
  if (toggle && nav) {
    const setOpen = (open) => {
      toggle.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('is-open', open);
      header.classList.toggle('is-open', open);
    };
    toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { setOpen(false); toggle.focus(); }
    });
    window.matchMedia('(min-width: 961px)').addEventListener('change', (e) => e.matches && setOpen(false));
  }

  // Header background after scrolling (homepage overlay header)
  if (header && document.body.classList.contains('is-home')) {
    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Guide table of contents — highlight current section
  const tocLinks = document.querySelectorAll('.guide__toc a');
  if (tocLinks.length && 'IntersectionObserver' in window) {
    const map = new Map([...tocLinks].map((a) => [a.getAttribute('href').slice(1), a]));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          tocLinks.forEach((a) => a.classList.remove('is-active'));
          map.get(en.target.id)?.classList.add('is-active');
        }
      });
    }, { rootMargin: '-30% 0px -60% 0px' });
    map.forEach((_, id) => { const el = document.getElementById(id); if (el) io.observe(el); });
  }

  // Contact form: prefill interest + accessible client-side validation
  const form = document.querySelector('[data-form]');
  if (form) {
    const interest = new URLSearchParams(location.search).get('interest');
    const sel = form.querySelector('#interest');
    if (interest && sel) {
      const opt = [...sel.options].find((o) => o.value === interest);
      if (opt) sel.value = interest;
    }
    const errBox = form.querySelector('[data-form-error]');
    const btn = form.querySelector('button[type="submit"]');
    const btnLabel = btn.textContent;
    // Re-enable the button if the user returns via the back/forward cache.
    window.addEventListener('pageshow', () => { btn.disabled = false; btn.textContent = btnLabel; });
    form.addEventListener('submit', (e) => {
      const fields = [...form.querySelectorAll('input, select, textarea')].filter((f) => f.name && f.type !== 'hidden' && !f.closest('.hp'));
      const invalid = fields.filter((f) => !f.checkValidity());
      fields.forEach((f) => f.setAttribute('aria-invalid', invalid.includes(f) ? 'true' : 'false'));
      if (invalid.length) {
        e.preventDefault();
        const names = invalid.map((f) => f.dataset.label || (form.querySelector(`label[for="${f.id}"]`)?.textContent || f.name).replace('*', '').trim().split('.')[0]);
        errBox.textContent = `Please check the following: ${names.join(', ')}.`;
        errBox.hidden = false;
        invalid[0].focus();
        return;
      }
      errBox.hidden = true;
      btn.disabled = true;
      btn.textContent = 'Sending…';
    });
  }
})();
