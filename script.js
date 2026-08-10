/* ============================================================
   SCRIPT.JS — Portfolio for Muhammad Fazil Ataurrahman
   Static-site compatible (GitHub Pages / Vercel / Netlify)
   ============================================================ */

/* ============================================================
   1. TRANSLATIONS (i18n)
   ============================================================ */
const T = {
  en: {
    nav: {
      projects: 'Projects',
      about: 'About',
      education: 'Education',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm",
      university: '@ Telkom University Bandung',
      cta_projects: 'View Projects',
      cta_contact: 'Get In Touch',
      scroll: 'scroll',
      typing: [
        'Full-Stack Developer',
        'AI Enthusiast',
        'Problem Solver',
        'Java Developer',
        'Go Developer',
      ],
    },
    about: {
      label: 'About Me',
      title: 'Who I Am',
      bio: "I'm an undergraduate Informatics student at <strong>Telkom University Bandung</strong> with a passion for building practical software solutions. I enjoy working across the stack — from enterprise <strong>Java</strong> backends to <strong>AI-powered Next.js</strong> applications and <strong>Go</strong>-based game servers. I love turning complex problems into clean, functional software.",
      stat_projects: 'Projects',
      stat_langs: 'Languages',
      stat_stacks: 'Tech Stacks',
      sk_langs: 'Languages',
      sk_fw: 'Frameworks',
      sk_db: 'Databases & Cloud',
      sk_tools: 'Tools',
    },
    projects: {
      label: 'Portfolio',
      title: 'My Projects',
      subtitle: "A collection of things I've built",
      live_demo: 'Live Demo',
      not_deployed: 'Local Project',
      view: 'View Details →',
      features: 'Key Features',
      tech_stack: 'Tech Stack',
      add_screenshot: 'Add screenshot to assets/screenshots/',
    },
    education: {
      label: 'Background',
      title: 'Education',
      degree: 'Bachelor of Informatics (S1)',
      faculty: 'Faculty of Informatics',
      status: 'Currently Enrolled — Undergraduate Student',
    },
    contact: {
      label: 'Say Hello',
      title: 'Get In Touch',
      subtitle: 'Feel free to reach out for collaborations or just a friendly hello',
      email: 'Send Email',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
    footer: {
      built: 'Built with',
      by: 'by Muhammad Fazil Ataurrahman',
      rights: 'All rights reserved.',
    },
    modal: {
      live_demo: '🌐 Live Demo',
      local: '🔒 Local Project',
      close: 'Close',
    },
  },

  id: {
    nav: {
      projects: 'Proyek',
      about: 'Tentang',
      education: 'Pendidikan',
      contact: 'Kontak',
    },
    hero: {
      greeting: 'Halo, Saya',
      university: '@ Universitas Telkom Bandung',
      cta_projects: 'Lihat Proyek',
      cta_contact: 'Hubungi Saya',
      scroll: 'gulir',
      typing: [
        'Pengembang Full-Stack',
        'Penggemar AI',
        'Pemecah Masalah',
        'Pengembang Java',
        'Pengembang Go',
      ],
    },
    about: {
      label: 'Tentang Saya',
      title: 'Siapa Saya',
      bio: 'Saya adalah mahasiswa S1 Informatika di <strong>Universitas Telkom Bandung</strong> dengan semangat membangun solusi perangkat lunak yang praktis. Saya menikmati bekerja di seluruh stack — dari backend <strong>Java</strong> enterprise hingga aplikasi <strong>Next.js bertenaga AI</strong> dan server game berbasis <strong>Go</strong>. Saya suka mengubah masalah kompleks menjadi perangkat lunak yang bersih dan fungsional.',
      stat_projects: 'Proyek',
      stat_langs: 'Bahasa',
      stat_stacks: 'Tech Stack',
      sk_langs: 'Bahasa Pemrograman',
      sk_fw: 'Framework',
      sk_db: 'Database & Cloud',
      sk_tools: 'Alat',
    },
    projects: {
      label: 'Portofolio',
      title: 'Proyek Saya',
      subtitle: 'Kumpulan hal yang telah saya bangun',
      live_demo: 'Demo Langsung',
      not_deployed: 'Proyek Lokal',
      view: 'Lihat Detail →',
      features: 'Fitur Utama',
      tech_stack: 'Tech Stack',
      add_screenshot: 'Tambahkan screenshot ke assets/screenshots/',
    },
    education: {
      label: 'Latar Belakang',
      title: 'Pendidikan',
      degree: 'Sarjana Informatika (S1)',
      faculty: 'Fakultas Informatika',
      status: 'Sedang Menempuh — Mahasiswa S1',
    },
    contact: {
      label: 'Sapa Saya',
      title: 'Hubungi Saya',
      subtitle: 'Jangan ragu untuk menghubungi saya untuk kolaborasi atau sekadar menyapa',
      email: 'Kirim Email',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
    footer: {
      built: 'Dibuat dengan',
      by: 'oleh Muhammad Fazil Ataurrahman',
      rights: 'Semua hak dilindungi.',
    },
    modal: {
      live_demo: '🌐 Demo Langsung',
      local: '🔒 Proyek Lokal',
      close: 'Tutup',
    },
  },
};

/* ============================================================
   2. PROJECT DATA
   ============================================================ */
const PROJECTS = [
  {
    pid: 'ppip',
    icon: '🏢',
    gradient: 'linear-gradient(135deg, #1e3a8a 0%, #3730a3 100%)',
    screenshots: ['assets/screenshots/ppip.jpeg'],
    liveUrl: 'https://gdpp.me',
    tech: ['Java 21', 'Spring Boot 4', 'Thymeleaf', 'Spring Security', 'MySQL', 'MariaDB', 'Redis', 'Azure Blob', 'Apache POI', 'PDFBox'],
    content: {
      en: {
        name: 'PPIP',
        shortDesc: 'Enterprise ISO 31000 risk management, secure document catalog, and absence system deployed at gdpp.me.',
        desc: 'An enterprise web application built for a company that consolidates three key systems: ISO 31000-compliant risk management, a secure document catalog allowing staff to view, share, and download company files, and a comprehensive module for managing employee absences and business trips.',
        features: [
          'ISO 31000 Risk Management',
          'Document Catalog (View / Share / Download)',
          'Absence Management System',
          'Business Trip Management',
          'Role-Based Access Control',
          'Azure Blob Storage Integration',
          'Redis Caching Layer',
          'PDF & Excel Export',
        ],
      },
      id: {
        name: 'PPIP',
        shortDesc: 'Manajemen risiko ISO 31000 enterprise, katalog dokumen aman, dan sistem absen yang di-deploy di gdpp.me.',
        desc: 'Aplikasi web enterprise yang dibangun untuk sebuah perusahaan yang mengkonsolidasikan tiga sistem utama: manajemen risiko sesuai ISO 31000, katalog dokumen aman yang memungkinkan staf melihat, berbagi, dan mengunduh berkas perusahaan, serta modul komprehensif untuk mengelola absen karyawan dan perjalanan dinas.',
        features: [
          'Manajemen Risiko ISO 31000',
          'Katalog Dokumen (Lihat / Bagikan / Unduh)',
          'Sistem Manajemen Absen',
          'Manajemen Perjalanan Dinas',
          'Kontrol Akses Berbasis Peran',
          'Integrasi Azure Blob Storage',
          'Layer Redis Caching',
          'Ekspor PDF & Excel',
        ],
      },
    },
  },
  {
    pid: 'dnd',
    icon: '⚔️',
    gradient: 'linear-gradient(135deg, #3b0764 0%, #6d28d9 100%)',
    screenshots: [],
    liveUrl: null,
    tech: ['Go', 'HTML', 'CSS', 'JavaScript', 'Gemini API'],
    content: {
      en: {
        name: 'Project DnD',
        shortDesc: 'Web-based Dungeons & Dragons game with Gemini AI as the Dungeon Master.',
        desc: 'A fully web-based Dungeons & Dragons experience powered by the Gemini AI acting as an intelligent Dungeon Master. Players can embark on campaigns, track spells from a complete spell database, build custom lore, and experience dynamically generated storytelling powered by a Go backend.',
        features: [
          'AI Dungeon Master (Gemini API)',
          'Campaign Logging System',
          'Full Spell Database & Tracker',
          'Custom Lore & Rules Engine',
          'Real-time Narrative Generation',
          'Go Backend Server',
          'Single-file Web Interface',
          'Persistent Campaign Log',
        ],
      },
      id: {
        name: 'Project DnD',
        shortDesc: 'Game Dungeons & Dragons berbasis web dengan AI Gemini sebagai Dungeon Master.',
        desc: 'Pengalaman Dungeons & Dragons berbasis web sepenuhnya yang didukung AI Gemini sebagai Dungeon Master yang cerdas. Pemain dapat menjalani kampanye, melacak mantra dari database mantra lengkap, membangun lore kustom, dan merasakan narasi yang dihasilkan secara dinamis oleh backend Go.',
        features: [
          'AI Dungeon Master (Gemini API)',
          'Sistem Pencatatan Kampanye',
          'Database & Pelacak Mantra Lengkap',
          'Mesin Lore & Aturan Kustom',
          'Pembuatan Narasi Real-time',
          'Server Backend Go',
          'Antarmuka Web Single-file',
          'Log Kampanye Persisten',
        ],
      },
    },
  },
  {
    pid: 'superkos',
    icon: '🏠',
    gradient: 'linear-gradient(135deg, #064e3b 0%, #059669 100%)',
    screenshots: ['assets/screenshots/superkos.jpeg'],
    liveUrl: null,
    tech: ['Java', 'Spring Boot', 'MySQL', 'Apache Tomcat 9', 'JDBC', 'Maven', 'MVC'],
    content: {
      en: {
        name: 'SuperKos',
        shortDesc: 'PropTech platform for rental housing with an automatic roommate-matching algorithm.',
        desc: 'A PropTech web application built for marketing rental properties (kos, kontrakan, apartments) with a unique niche: automatic roommate matching. Tenants complete a lifestyle survey and the system recommends compatible roommates. Property owners manage listings, while an admin oversees the platform.',
        features: [
          'Smart Property Search & Filter',
          'Automatic Roommate Matching',
          'Lifestyle & Preference Survey',
          'Real-time Map View',
          'Wishlist & Favorites',
          'Review & Rating System',
          'Property Management Dashboard',
          'Admin Panel & Moderation',
        ],
      },
      id: {
        name: 'SuperKos',
        shortDesc: 'Platform PropTech untuk hunian sewa dengan algoritma pencocokan teman sekamar otomatis.',
        desc: 'Aplikasi web PropTech yang dibangun untuk memasarkan properti sewa (kos, kontrakan, apartemen) dengan niche unik: pencocokan teman sekamar otomatis. Penyewa mengisi survei gaya hidup dan sistem merekomendasikan teman sekamar yang kompatibel. Pemilik properti mengelola listing, sementara admin mengawasi platform.',
        features: [
          'Pencarian & Filter Properti Cerdas',
          'Pencocokan Teman Sekamar Otomatis',
          'Survei Gaya Hidup & Preferensi',
          'Tampilan Peta Real-time',
          'Wishlist & Favorit',
          'Sistem Ulasan & Rating',
          'Dashboard Manajemen Properti',
          'Panel Admin & Moderasi',
        ],
      },
    },
  },
  {
    pid: 'tata',
    icon: '🤖',
    gradient: 'linear-gradient(135deg, #0c4a6e 0%, #0ea5e9 100%)',
    screenshots: ['assets/screenshots/tata.jpeg'],
    liveUrl: null,
    tech: ['Next.js 16', 'React 19', 'TypeScript', 'Gemini API', 'OpenAI', 'ElevenLabs', 'Fal.ai', 'Zustand', 'UploadThing', 'Tailwind CSS'],
    content: {
      en: {
        name: 'Tata AI',
        shortDesc: 'AI-powered social media manager — generates posts, images, and voiceovers.',
        desc: 'An AI-powered social media manager that orchestrates multiple AI services to automate content creation. It generates written posts via Gemini/OpenAI, produces images through Fal.ai, synthesizes voices with ElevenLabs, and organises workflows on a React Flow canvas — all in a single Next.js application.',
        features: [
          'AI Post Generation (Gemini / OpenAI)',
          'AI Image Generation (Fal.ai)',
          'Voice Synthesis (ElevenLabs)',
          'React Flow Workflow Canvas',
          'Media Upload (UploadThing)',
          'Content Scheduling',
          'Multi-AI Orchestration',
          'Zustand State Management',
        ],
      },
      id: {
        name: 'Tata AI',
        shortDesc: 'Manajer media sosial bertenaga AI — menghasilkan postingan, gambar, dan narasi suara.',
        desc: 'Manajer media sosial bertenaga AI yang mengorkestrasikan berbagai layanan AI untuk mengotomasi pembuatan konten. Ini menghasilkan postingan tertulis via Gemini/OpenAI, memproduksi gambar melalui Fal.ai, mensintesis suara dengan ElevenLabs, dan mengorganisir alur kerja di canvas React Flow — semua dalam satu aplikasi Next.js.',
        features: [
          'Pembuatan Postingan AI (Gemini / OpenAI)',
          'Pembuatan Gambar AI (Fal.ai)',
          'Sintesis Suara (ElevenLabs)',
          'Canvas Alur Kerja React Flow',
          'Upload Media (UploadThing)',
          'Penjadwalan Konten',
          'Orkestrasi Multi-AI',
          'Manajemen State Zustand',
        ],
      },
    },
  },
  {
    pid: 'tubesaka',
    icon: '📊',
    gradient: 'linear-gradient(135deg, #7c2d12 0%, #ea580c 100%)',
    screenshots: ['assets/screenshots/tubesaka.jpeg'],
    liveUrl: null,
    tech: ['HTML', 'CSS', 'JavaScript'],
    content: {
      en: {
        name: 'TubesAKA',
        shortDesc: 'Utility program that counts and stores individual character frequencies from input text.',
        desc: 'A focused utility web application that takes a string of text as input, analyses it character by character, counts the frequency of each individual character, and displays the results in a clean, visual format. Built as a coursework project demonstrating fundamental algorithm and data structure concepts.',
        features: [
          'Character Frequency Analysis',
          'Interactive Text Input',
          'Results Persistence & Storage',
          'Visual Frequency Display',
          'Sorted Output View',
          'Pure Frontend Implementation',
        ],
      },
      id: {
        name: 'TubesAKA',
        shortDesc: 'Program utilitas yang menghitung dan menyimpan frekuensi karakter individual dari teks input.',
        desc: 'Aplikasi web utilitas yang mengambil string teks sebagai input, menganalisisnya karakter per karakter, menghitung frekuensi setiap karakter individual, dan menampilkan hasilnya dalam format visual yang bersih. Dibuat sebagai proyek tugas yang menunjukkan konsep dasar algoritma dan struktur data.',
        features: [
          'Analisis Frekuensi Karakter',
          'Input Teks Interaktif',
          'Persistensi & Penyimpanan Hasil',
          'Tampilan Frekuensi Visual',
          'Tampilan Output Terurut',
          'Implementasi Pure Frontend',
        ],
      },
    },
  },
];

/* ============================================================
   3. STATE
   ============================================================ */
let currentLang = 'en';
let activeProjectPid = null;
let currentSlideIndex = 0;

/* ============================================================
   4. i18n HELPERS
   ============================================================ */
function getT(key) {
  const parts = key.split('.');
  let val = T[currentLang];
  for (const p of parts) { val = val?.[p]; }
  return val ?? key;
}

function applyTranslations() {
  // textContent
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = getT(el.dataset.i18n);
    if (v !== undefined) el.textContent = v;
  });
  // innerHTML (for bio with <strong> tags)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const v = getT(el.dataset.i18nHtml);
    if (v !== undefined) el.innerHTML = v;
  });
  // Re-render dynamic project cards
  renderCards();
  observeCards();
  // Re-render open modal if any
  if (activeProjectPid) renderModal(activeProjectPid);
  // Update lang button states
  syncLangButtons();
}

/* ============================================================
   5. LANGUAGE TOGGLE
   ============================================================ */
function setLang(lang) {
  if (lang === currentLang) return;
  currentLang = lang;

  // Reset typing animation with new phrases
  resetTyping();

  applyTranslations();

  // html lang attribute
  document.documentElement.lang = lang;

  // Update aria-pressed on all lang buttons
  ['lang-en', 'lang-id', 'lang-en-m', 'lang-id-m'].forEach(id => {
    const btn = document.getElementById(id);
    if (!btn) return;
    const isActive = id.includes(lang === 'en' ? '-en' : '-id');
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });
}

function syncLangButtons() {
  ['en', 'id'].forEach(l => {
    ['lang-' + l, 'lang-' + l + '-m'].forEach(id => {
      const btn = document.getElementById(id);
      if (!btn) return;
      btn.classList.toggle('active', l === currentLang);
      btn.setAttribute('aria-pressed', l === currentLang ? 'true' : 'false');
    });
  });
}

/* ============================================================
   6. PROJECT CARDS
   ============================================================ */
function renderCards() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  grid.innerHTML = PROJECTS.map((p, i) => buildCardHTML(p, i)).join('');
}

function buildCardHTML(p, idx) {
  const c = p.content[currentLang];
  const isLive = !!p.liveUrl;
  const badgeHTML = isLive
    ? `<span class="badge-live">${getT('projects.live_demo')}</span>`
    : `<span class="badge-local">${getT('projects.not_deployed')}</span>`;

  const techHTML = p.tech.slice(0, 4).map(t => `<span class="tag">${t}</span>`).join('');
  const delay = idx < 3 ? `delay-${idx + 1}` : '';

  return `
    <div class="project-card reveal ${delay}" onclick="openModal('${p.pid}')" role="button" tabindex="0"
         aria-label="${c.name}" onkeydown="if(event.key==='Enter'||event.key===' ')openModal('${p.pid}')">
      <div class="proj-img-wrap" style="background:${p.gradient};">
        <div class="proj-placeholder">
          <span class="ph-icon">${p.icon}</span>
          <span class="ph-name">${c.name}</span>
          <span class="ph-hint">${getT('projects.add_screenshot')}${p.pid}.jpg</span>
        </div>
        <img src="${p.screenshots && p.screenshots.length > 0 ? p.screenshots[0] : ''}" alt="${c.name} screenshot" loading="lazy"
             onerror="this.classList.add('img-error')">
      </div>
      <div class="proj-body">
        <div class="proj-top">
          <h3 class="proj-name">${c.name}</h3>
          ${badgeHTML}
        </div>
        <p class="proj-desc">${c.shortDesc}</p>
        <div class="proj-tags">${techHTML}</div>
        <div class="proj-footer">
          <span class="proj-more">${getT('projects.view')}</span>
        </div>
      </div>
    </div>`;
}

/* ============================================================
   7. MODAL
   ============================================================ */
function openModal(pid) {
  activeProjectPid = pid;
  currentSlideIndex = 0;
  renderModal(pid);
  const overlay = document.getElementById('modal-overlay');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  document.getElementById('modal-close').focus();
}

function renderModal(pid) {
  const p = PROJECTS.find(x => x.pid === pid);
  if (!p) return;
  const c = p.content[currentLang];

  // Image / placeholder
  document.getElementById('modal-img-wrap').style.background = p.gradient;
  document.getElementById('modal-placeholder').style.background = p.gradient;
  updateModalSlider(p);
  document.getElementById('modal-ph-icon').textContent = p.icon;
  document.getElementById('modal-ph-name').textContent = c.name;

  // Header
  document.getElementById('modal-heading').textContent = c.name;

  // Badge
  const isLive = !!p.liveUrl;
  document.getElementById('modal-badge').innerHTML = isLive
    ? `<span class="badge-live">${getT('projects.live_demo')}</span>`
    : `<span class="badge-local">${getT('projects.not_deployed')}</span>`;

  // Description
  document.getElementById('modal-desc').textContent = c.desc;

  // Features
  document.getElementById('modal-features').innerHTML =
    c.features.map(f => `<li>${f}</li>`).join('');

  // Tech tags
  document.getElementById('modal-tech').innerHTML =
    p.tech.map(t => `<span class="tag">${t}</span>`).join('');

  // Actions
  let actHTML = '';
  if (isLive) {
    actHTML += `<a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
                  ${getT('modal.live_demo')}
                </a>`;
  }
  document.getElementById('modal-actions').innerHTML = actHTML;
}

function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  overlay.classList.remove('open');
  document.body.style.overflow = '';
  activeProjectPid = null;
}

function handleOverlayClick(e) {
  if (e.target === document.getElementById('modal-overlay')) closeModal();
}

function updateModalSlider(p) {
  const img = document.getElementById('modal-img');
  const btns = document.getElementById('modal-slider-btns');
  const dots = document.getElementById('modal-slider-dots');
  
  if (!p.screenshots || p.screenshots.length === 0) {
    img.src = '';
    img.classList.add('img-error');
    btns.style.display = 'none';
    dots.innerHTML = '';
    return;
  }

  img.src = p.screenshots[currentSlideIndex];
  img.alt = p.content[currentLang].name + ' screenshot';
  img.classList.remove('img-error');
  
  if (p.screenshots.length > 1) {
    btns.style.display = 'flex';
    dots.innerHTML = p.screenshots.map((_, i) => 
      `<div class="dot ${i === currentSlideIndex ? 'active' : ''}" onclick="goToSlide(${i}, event)"></div>`
    ).join('');
  } else {
    btns.style.display = 'none';
    dots.innerHTML = '';
  }
}

function prevSlide(e) {
  if (e) e.stopPropagation();
  const p = PROJECTS.find(x => x.pid === activeProjectPid);
  if (!p || !p.screenshots || p.screenshots.length <= 1) return;
  currentSlideIndex = (currentSlideIndex - 1 + p.screenshots.length) % p.screenshots.length;
  updateModalSlider(p);
}

function nextSlide(e) {
  if (e) e.stopPropagation();
  const p = PROJECTS.find(x => x.pid === activeProjectPid);
  if (!p || !p.screenshots || p.screenshots.length <= 1) return;
  currentSlideIndex = (currentSlideIndex + 1) % p.screenshots.length;
  updateModalSlider(p);
}

function goToSlide(i, e) {
  if (e) e.stopPropagation();
  const p = PROJECTS.find(x => x.pid === activeProjectPid);
  if (!p || !p.screenshots || p.screenshots.length <= 1) return;
  currentSlideIndex = i;
  updateModalSlider(p);
}

/* ============================================================
   8. TYPING EFFECT
   ============================================================ */
let typingTimer = null;
let tPhrase = 0;
let tChar = 0;
let tDeleting = false;

function resetTyping() {
  clearTimeout(typingTimer);
  const el = document.getElementById('typing-text');
  if (el) el.textContent = '';
  tPhrase = 0; tChar = 0; tDeleting = false;
  typingTimer = setTimeout(typeStep, 400);
}

function typeStep() {
  const phrases = T[currentLang].hero.typing;
  const el = document.getElementById('typing-text');
  if (!el) return;

  const current = phrases[tPhrase];

  if (tDeleting) {
    el.textContent = current.substring(0, tChar - 1);
    tChar--;
  } else {
    el.textContent = current.substring(0, tChar + 1);
    tChar++;
  }

  let delay = tDeleting ? 50 : 95;

  if (!tDeleting && tChar === current.length) {
    delay = 2200;
    tDeleting = true;
  } else if (tDeleting && tChar === 0) {
    tDeleting = false;
    tPhrase = (tPhrase + 1) % phrases.length;
    delay = 350;
  }

  typingTimer = setTimeout(typeStep, delay);
}

/* ============================================================
   9. PARTICLE CANVAS
   ============================================================ */
function initParticles() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, particles;
  const COUNT = Math.min(60, Math.floor(window.innerWidth / 22));
  let mouse = { x: -9999, y: -9999 };

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function createParticles() {
    particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - .5) * .45,
      vy: (Math.random() - .5) * .45,
      r: Math.random() * 1.6 + .5,
      alpha: Math.random() * .5 + .2,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    particles.forEach(p => {
      // Mouse repulsion (subtle)
      const dx = p.x - mouse.x;
      const dy = p.y - mouse.y;
      const dist = Math.hypot(dx, dy);
      if (dist < 100) {
        const force = (100 - dist) / 100 * .4;
        p.vx += (dx / dist) * force;
        p.vy += (dy / dist) * force;
      }

      // Dampen velocity
      p.vx *= .992;
      p.vy *= .992;

      p.x += p.vx;
      p.y += p.vy;

      // Wrap
      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;

      // Draw dot
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(99,102,241,${p.alpha})`;
      ctx.fill();
    });

    // Draw connecting lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d = Math.hypot(dx, dy);
        if (d < 115) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(99,102,241,${.12 * (1 - d / 115)})`;
          ctx.lineWidth = .6;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', () => { resize(); createParticles(); });
  window.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });
  window.addEventListener('mouseleave', () => { mouse = { x: -9999, y: -9999 }; });

  resize();
  createParticles();
  draw();
}

/* ============================================================
   10. SCROLL REVEAL (IntersectionObserver)
   ============================================================ */
function initScrollReveal() {
  const targets = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(t => io.observe(t));
}

// Re-observe after cards are rendered
function observeCards() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }});
  }, { threshold: 0.1 });
  document.querySelectorAll('.project-card').forEach(c => io.observe(c));
}

/* ============================================================
   11. NAVBAR SCROLL EFFECT
   ============================================================ */
function initNavbar() {
  const nav = document.getElementById('navbar');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ============================================================
   12. MOBILE MENU
   ============================================================ */
function openMobMenu() {
  const m = document.getElementById('mob-menu');
  m.classList.add('open');
  m.setAttribute('aria-hidden', 'false');
  document.getElementById('nav-ham').setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}
function closeMobMenu() {
  const m = document.getElementById('mob-menu');
  m.classList.remove('open');
  m.setAttribute('aria-hidden', 'true');
  document.getElementById('nav-ham').setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

/* ============================================================
   13. KEYBOARD / ACCESSIBILITY
   ============================================================ */
function initKeyboard() {
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if (document.getElementById('modal-overlay').classList.contains('open')) closeModal();
      else if (document.getElementById('mob-menu').classList.contains('open')) closeMobMenu();
    }
  });
}

/* ============================================================
   14. FOOTER YEAR
   ============================================================ */
function setFooterYear() {
  const el = document.getElementById('footer-year');
  if (el) el.textContent = new Date().getFullYear();
}

/* ============================================================
   15. INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  setFooterYear();
  initNavbar();
  initParticles();
  renderCards();
  applyTranslations();
  initScrollReveal();
  observeCards();
  initKeyboard();
  // Start typing after hero animation delay
  setTimeout(() => typeStep(), 1100);
});
