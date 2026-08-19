/* ============================================================
   HUB.JS — Portfolio Comparison Hub Logic
   ============================================================ */

const DESIGNS = [
  {
    label: 'Original',
    title: 'Dark Space',
    href:  '../index.html',
  },
  {
    label: 'Design A',
    title: 'Meridian',
    href:  '../portfolio-a/index.html',
  },
  {
    label: 'Design B',
    title: 'Prism',
    href:  '../portfolio-b/index.html',
  },
  {
    label: 'Design C',
    title: 'Fieldnotes',
    href:  '../portfolio-c/index.html',
  },
];

let currentLightboxIdx = -1;
let currentView = 'grid';
let currentFocus = 0;

/* ============================================================
   LIGHTBOX
   ============================================================ */
function openDesign(idx) {
  currentLightboxIdx = idx;
  const d = DESIGNS[idx];
  const lb = document.getElementById('lightbox');
  const iframe = document.getElementById('lightbox-iframe');

  document.getElementById('lightbox-label').textContent = d.label;
  document.getElementById('lightbox-title').textContent = d.title;
  document.getElementById('lb-open').href = d.href;
  document.getElementById('lb-counter').textContent = `${idx + 1} / ${DESIGNS.length}`;

  // Only load iframe if not already loaded or changed
  if (iframe.src !== new URL(d.href, window.location.href).href) {
    iframe.src = d.href;
  }

  lb.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  lb.style.display = 'none';
  document.body.style.overflow = '';
  currentLightboxIdx = -1;
}

function lbNav(dir) {
  if (currentLightboxIdx < 0) return;
  const next = (currentLightboxIdx + dir + DESIGNS.length) % DESIGNS.length;
  openDesign(next);
}

/* ============================================================
   VIEW TOGGLE
   ============================================================ */
function setView(view) {
  currentView = view;
  const grid = document.getElementById('designs-grid');
  const focusTabs = document.getElementById('focus-tabs');

  // Update button states
  ['grid', 'row', 'focus'].forEach(v => {
    const btn = document.getElementById(`vt-${v}`);
    btn.classList.toggle('active', v === view);
    btn.setAttribute('aria-pressed', v === view ? 'true' : 'false');
  });

  // Update grid class
  grid.classList.remove('view-row', 'view-focus');
  if (view === 'row') grid.classList.add('view-row');
  if (view === 'focus') {
    grid.classList.add('view-focus');
    focusDesign(currentFocus);
  }

  // Show/hide focus tabs
  focusTabs.style.display = view === 'focus' ? 'flex' : 'none';
}

function focusDesign(idx) {
  currentFocus = idx;
  const cards = document.querySelectorAll('.design-card');
  cards.forEach((card, i) => {
    card.classList.toggle('focus-active', i === idx);
  });

  // Update focus tab buttons
  document.querySelectorAll('.ft-btn').forEach((btn, i) => {
    btn.classList.toggle('active', i === idx);
  });
}

/* ============================================================
   HINT DISMISS
   ============================================================ */
function dismissHint() {
  const hint = document.getElementById('hint-btn');
  if (hint) {
    hint.style.opacity = '0';
    setTimeout(() => hint.remove(), 200);
  }
}

/* ============================================================
   KEYBOARD NAVIGATION
   ============================================================ */
document.addEventListener('keydown', e => {
  const lb = document.getElementById('lightbox');
  if (lb.style.display !== 'none') {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') lbNav(1);
    if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   lbNav(-1);
  }
});

/* ============================================================
   CARD KEYBOARD ACCESSIBILITY
   ============================================================ */
document.querySelectorAll('.design-card').forEach((card, idx) => {
  card.setAttribute('tabindex', '0');
  card.setAttribute('role', 'button');
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openDesign(idx);
    }
  });
});

/* ============================================================
   AUTO-DISMISS HINT AFTER 5s
   ============================================================ */
setTimeout(() => dismissHint(), 5000);
