/* ============================================================
   SCRIPT.JS — V1 CYBER TERMINAL HUD
   Muhammad Fazil Ataurrahman Portfolio
   ============================================================ */

/* ============================================================
   1. TRANSLATION & PROJECT DATA
   ============================================================ */
const HUD_I18N = {
  en: {
    nav: {
      terminal: '>_ TERMINAL',
      projects: '[PROJECTS]',
      specs: '[SPECS_BIO]',
      education: '[ACADEMICS]',
      contact: '[COMM_LINK]',
    },
    term: {
      welcome: '[SYSTEM INITIALIZED] Welcome to Muhammad Fazil Ataurrahman\'s interactive developer terminal.',
      intro: 'Undergraduate Informatics Student @ Telkom University Bandung. Specialized in Java Spring Boot, Go, Next.js, and Multi-AI Orchestration.',
      hint: 'Type <span class="cmd-highlight">help</span> or click command shortcuts below:',
    },
    about: {
      label: 'PERSONNEL_DOSSIER',
      title: 'OPERATOR_PROFILE & TELEMETRY',
      bio: 'I\'m an undergraduate Informatics student at <strong>Telkom University Bandung</strong> with a passion for building practical software solutions. I enjoy working across the stack — from enterprise <strong>Java</strong> backends to <strong>AI-powered Next.js</strong> applications and <strong>Go</strong>-based game servers. I love turning complex problems into clean, functional software.',
      stat_projects: 'DEPLOYED PROJECTS',
      stat_langs: 'PRIMARY LANGUAGES',
      stat_stacks: 'CORE ARCHITECTURES',
      sk_langs: 'LANGUAGES //',
      sk_fw: 'FRAMEWORKS & RUNTIMES //',
      sk_db: 'DATABASES, CLOUD & INFRA //',
      sk_tools: 'TOOLS & AI PROTOCOLS //',
    },
    projects: {
      title: 'ACTIVE_PROJECT_REGISTRY',
      sub: 'Verified mission artifacts and deployed production software modules.',
      live: 'LIVE_DEMO',
      local: 'LOCAL_BUILD',
      inspect: 'INSPECT_LOG →',
      source: 'SOURCE_CODE',
      features: '// SYSTEM_FEATURES',
      tech_stack: '// COMPILED_DEPENDENCIES',
    },
    education: {
      title: 'ACADEMIC_QUALIFICATION',
      degree: 'Bachelor of Informatics (S1)',
      faculty: 'Faculty of Informatics',
      status: 'Currently Enrolled — Undergraduate Student',
    },
    contact: {
      title: 'COMMUNICATION_CHANNELS',
      subtitle: 'Open socket for engineering collaborations, inquiries, or professional networking.',
      email: 'TRANSMIT_EMAIL →',
      github: 'OPEN_REPOSITORY →',
      linkedin: 'CONNECT_PROFILE →',
    },
    footer: {
      rights: 'All rights reserved.',
    },
  },

  id: {
    nav: {
      terminal: '>_ TERMINAL',
      projects: '[PROYEK]',
      specs: '[SPESIFIKASI]',
      education: '[AKADEMIK]',
      contact: '[KOMUNIKASI]',
    },
    term: {
      welcome: '[SISTEM AKTIF] Selamat datang di terminal pengembang interaktif Muhammad Fazil Ataurrahman.',
      intro: 'Mahasiswa S1 Informatika @ Universitas Telkom Bandung. Spesialisasi dalam Java Spring Boot, Go, Next.js, dan Orkestrasi Multi-AI.',
      hint: 'Ketik <span class="cmd-highlight">help</span> atau klik pintasan perintah di bawah:',
    },
    about: {
      label: 'BERKAS_PERSONEL',
      title: 'PROFIL_OPERATOR & TELEMETRI',
      bio: 'Saya adalah mahasiswa S1 Informatika di <strong>Universitas Telkom Bandung</strong> dengan semangat membangun solusi perangkat lunak yang praktis. Saya menikmati bekerja di seluruh stack — dari backend <strong>Java</strong> enterprise hingga aplikasi <strong>Next.js bertenaga AI</strong> dan server game berbasis <strong>Go</strong>. Saya suka mengubah masalah kompleks menjadi perangkat lunak yang bersih dan fungsional.',
      stat_projects: 'PROYEK TERSELESAIKAN',
      stat_langs: 'BAHASA PEMROGRAMAN',
      stat_stacks: 'ARSITEKTUR UTAMA',
      sk_langs: 'BAHASA //',
      sk_fw: 'FRAMEWORK & RUNTIME //',
      sk_db: 'DATABASE, CLOUD & INFRA //',
      sk_tools: 'ALAT & PROTOKOL AI //',
    },
    projects: {
      title: 'REGISTRI_PROYEK_AKTIF',
      sub: 'Artefak terverifikasi dan modul perangkat lunak produksi yang telah dibangun.',
      live: 'DEMO_LANGSUNG',
      local: 'PROYEK_LOKAL',
      inspect: 'INSPEKSI_LOG →',
      source: 'KODE_SUMBER',
      features: '// FITUR_UTAMA',
      tech_stack: '// DEPENDENSI_TERKOMPILASI',
    },
    education: {
      title: 'KUALIFIKASI_AKADEMIK',
      degree: 'Sarjana Informatika (S1)',
      faculty: 'Fakultas Informatika',
      status: 'Sedang Menempuh — Mahasiswa S1',
    },
    contact: {
      title: 'SALURAN_KOMUNIKASI',
      subtitle: 'Soket terbuka untuk kolaborasi rekayasa perangkat lunak atau jejaring profesional.',
      email: 'KIRIM_EMAIL →',
      github: 'BUKA_REPOSITORI →',
      linkedin: 'HUBUNGKAN_PROFIL →',
    },
    footer: {
      rights: 'Semua hak dilindungi.',
    },
  },
};

const HUD_PROJECTS = [
  {
    pid: 'ppip',
    icon: '🏢',
    category: 'java',
    screenshots: ['../assets/screenshots/ppip.jpeg'],
    liveUrl: 'https://gdpp.me',
    githubUrl: 'https://github.com/fazil2712/cutidinas',
    tech: ['Java 21', 'Spring Boot 4', 'Thymeleaf', 'Spring Security', 'MySQL', 'MariaDB', 'Redis', 'Azure Blob', 'Apache POI', 'PDFBox'],
    content: {
      en: {
        name: 'PPIP — Enterprise Risk & Document Engine',
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
        name: 'PPIP — Mesin Risiko & Dokumen Enterprise',
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
    category: 'go',
    screenshots: [],
    liveUrl: null,
    githubUrl: 'https://github.com/fazil2712/projectdnd',
    tech: ['Go', 'HTML', 'CSS', 'JavaScript', 'Gemini API'],
    content: {
      en: {
        name: 'Project DnD — AI Dungeon Master Engine',
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
        name: 'Project DnD — Mesin AI Dungeon Master',
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
    category: 'java',
    screenshots: ['../assets/screenshots/superkos.jpeg'],
    liveUrl: null,
    githubUrl: 'https://github.com/fazil2712/superkos',
    tech: ['Java', 'Spring Boot', 'MySQL', 'Apache Tomcat 9', 'JDBC', 'Maven', 'MVC'],
    content: {
      en: {
        name: 'SuperKos — PropTech Roommate Matching',
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
        name: 'SuperKos — Pencocokan Rekan Kos Cerdas',
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
    category: 'ai',
    screenshots: ['../assets/screenshots/tata.jpeg'],
    liveUrl: null,
    githubUrl: 'https://github.com/fazil2712/tata-ai',
    tech: ['Next.js 16', 'React 19', 'TypeScript', 'Gemini API', 'OpenAI', 'ElevenLabs', 'Fal.ai', 'Zustand', 'UploadThing', 'Tailwind CSS'],
    content: {
      en: {
        name: 'Tata AI — Multi-AI Content Orchestrator',
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
        name: 'Tata AI — Orkestrator Konten Multi-AI',
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
    category: 'frontend',
    screenshots: ['../assets/screenshots/tubesaka.jpeg'],
    liveUrl: null,
    githubUrl: 'https://github.com/fazil2712/tubesaka',
    tech: ['HTML', 'CSS', 'JavaScript'],
    content: {
      en: {
        name: 'TubesAKA — Algorithmic Frequency Analyzer',
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
        name: 'TubesAKA — Penganalisis Frekuensi Algoritmik',
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
   2. STATE & AUDIO ENGINE
   ============================================================ */
let currentHudLang = 'en';
let activeFilter = 'all';
let soundEnabled = false;
let audioCtx = null;

function playHudBeep(freq = 800, type = 'sine', duration = 0.05) {
  if (!soundEnabled) return;
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {
    // Graceful fallback
  }
}

function toggleAudio() {
  soundEnabled = !soundEnabled;
  const icon = document.getElementById('sound-icon');
  icon.textContent = soundEnabled ? '🔊' : '🔇';
  if (soundEnabled) playHudBeep(1200, 'triangle', 0.1);
}

/* ============================================================
   3. CLOCK TICKER
   ============================================================ */
function startClock() {
  const clockEl = document.getElementById('system-clock');
  const update = () => {
    const d = new Date();
    const pad = n => String(n).padStart(2, '0');
    clockEl.textContent = `${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(d.getUTCSeconds())} UTC`;
  };
  setInterval(update, 1000);
  update();
}

/* ============================================================
   4. i18n ENGINE
   ============================================================ */
function setHudLang(lang) {
  if (lang === currentHudLang) return;
  currentHudLang = lang;
  playHudBeep(950);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const parts = key.split('.');
    let val = HUD_I18N[currentHudLang];
    for (const p of parts) val = val?.[p];
    if (val) el.innerHTML = val;
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    const parts = key.split('.');
    let val = HUD_I18N[currentHudLang];
    for (const p of parts) val = val?.[p];
    if (val) el.innerHTML = val;
  });

  document.getElementById('lang-en').classList.toggle('active', lang === 'en');
  document.getElementById('lang-id').classList.toggle('active', lang === 'id');
  document.getElementById('lang-en').setAttribute('aria-pressed', lang === 'en');
  document.getElementById('lang-id').setAttribute('aria-pressed', lang === 'id');

  renderHudCards();
}

/* ============================================================
   5. PROJECT CARDS & FILTERING
   ============================================================ */
function filterProjects(cat) {
  activeFilter = cat;
  playHudBeep(700);
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.toLowerCase().includes(cat) || (cat === 'all' && btn.textContent.includes('ALL')));
  });
  renderHudCards();
}

function renderHudCards() {
  const grid = document.getElementById('hud-project-grid');
  if (!grid) return;

  const filtered = HUD_PROJECTS.filter(p => activeFilter === 'all' || p.category === activeFilter);

  grid.innerHTML = filtered.map(p => {
    const c = p.content[currentHudLang];
    const isLive = !!p.liveUrl;
    const badge = isLive
      ? `<span class="badge-hud live">[LIVE: ${HUD_I18N[currentHudLang].projects.live}]</span>`
      : `<span class="badge-hud local">[STATUS: ${HUD_I18N[currentHudLang].projects.local}]</span>`;

    const techChips = p.tech.slice(0, 4).map(t => `<span class="tech-chip">${t}</span>`).join('');
    const hasImg = p.screenshots && p.screenshots.length > 0;

    return `
      <article class="hud-card" role="region" aria-label="${c.name}">
        <div class="card-media">
          ${hasImg 
            ? `<img class="card-img" src="${p.screenshots[0]}" alt="${c.name}" loading="lazy">` 
            : `<div class="card-placeholder">
                 <span class="ph-icon">${p.icon}</span>
                 <span class="ph-title">${p.pid.toUpperCase()}://SYS_MODULE</span>
               </div>`
          }
        </div>
        <div class="card-body">
          <div class="card-header-row">
            <h3 class="card-name">${c.name}</h3>
            ${badge}
          </div>
          <p class="card-desc">${c.shortDesc}</p>
          <div class="card-tech-chips">${techChips}</div>
          <div class="card-actions">
            <button class="btn-hud primary" onclick="openHudModal('${p.pid}')">${HUD_I18N[currentHudLang].projects.inspect}</button>
            ${p.githubUrl ? `<a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-hud outline">GIT_REPO ↗</a>` : ''}
          </div>
        </div>
      </article>
    `;
  }).join('');
}

/* ============================================================
   6. CLI TERMINAL LOGIC
   ============================================================ */
function handleCliSubmit(e) {
  e.preventDefault();
  const input = document.getElementById('cli-input');
  const val = input.value.trim();
  if (!val) return;
  executeCli(val);
  input.value = '';
}

function execQuickCmd(cmd) {
  playHudBeep(650);
  executeCli(cmd);
}

function executeCli(cmd) {
  playHudBeep(850);
  const logs = document.getElementById('term-logs');
  const lower = cmd.toLowerCase().trim();

  let responseHTML = '';

  switch (lower) {
    case 'help':
      responseHTML = `
        <div class="cli-log-entry">
          <strong>AVAILABLE SYSTEM COMMANDS:</strong><br>
          • <span class="cmd-highlight">whoami</span> : Print operator profile dossier<br>
          • <span class="cmd-highlight">projects</span> : Query all mission artifacts<br>
          • <span class="cmd-highlight">skills</span> : Inspect technical architecture stack<br>
          • <span class="cmd-highlight">education</span> : Verify academic credentials<br>
          • <span class="cmd-highlight">contact</span> : Open comm-link socket channels<br>
          • <span class="cmd-highlight">lang en | id</span> : Switch interface language<br>
          • <span class="cmd-highlight">clear</span> : Flush terminal screen buffer
        </div>
      `;
      break;

    case 'whoami':
    case './whoami':
      responseHTML = `
        <div class="cli-log-entry">
          <strong>OPERATOR DOSSIER:</strong><br>
          Name: Muhammad Fazil Ataurrahman<br>
          Degree: Bachelor of Informatics (S1) @ Telkom University Bandung<br>
          Focus: Enterprise Java (Spring Boot), High-performance Go, Multi-AI Next.js Applications.
        </div>
      `;
      break;

    case 'projects':
    case 'cat /projects':
      responseHTML = `
        <div class="cli-log-entry">
          <strong>REGISTERED MISSION ARTIFACTS:</strong><br>
          1. [PPIP] Enterprise ISO 31000 Risk & Absence Management System (Java/Spring Boot) - gdpp.me<br>
          2. [Project DnD] AI Dungeon Master & Lore Narrative Engine (Go/Gemini API)<br>
          3. [SuperKos] PropTech Roommate Matching Platform (Java/Spring Boot/MySQL)<br>
          4. [Tata AI] Social Media Content Automation & Voice Synthesizer (Next.js 16/React Flow)<br>
          5. [TubesAKA] Character Frequency Analysis & Data Structure Engine (HTML/CSS/JS)
        </div>
      `;
      break;

    case 'skills':
    case 'neofetch --skills':
      responseHTML = `
        <div class="cli-log-entry">
          <strong>COMPILED TECHNICAL MATRIX:</strong><br>
          [LANGUAGES]: Java 21, Go, C++, TypeScript, JavaScript, HTML5/CSS3<br>
          [FRAMEWORKS]: Spring Boot 4, Next.js 16, React 19, Thymeleaf, Tailwind CSS<br>
          [STORAGE]: MySQL, MariaDB, Redis, Azure Blob Storage<br>
          [AI & TOOLS]: Gemini API, OpenAI, ElevenLabs, Fal.ai, Git, Maven, Figma
        </div>
      `;
      break;

    case 'education':
    case 'cat /academics':
      responseHTML = `
        <div class="cli-log-entry">
          <strong>ACADEMIC TELEMETRY:</strong><br>
          Institution: Telkom University Bandung<br>
          Faculty: Faculty of Informatics (S1 Informatika)<br>
          Status: Currently Enrolled — Undergraduate Student
        </div>
      `;
      break;

    case 'contact':
    case 'ping -c 3 fazil':
      responseHTML = `
        <div class="cli-log-entry">
          <strong>COMMUNICATION SOCKETS:</strong><br>
          • Direct Mail: <a href="mailto:muhammadfazil2712@gmail.com" style="color:var(--hud-cyan)">muhammadfazil2712@gmail.com</a><br>
          • Git Repositories: <a href="https://github.com/fazil2712" target="_blank" style="color:var(--hud-cyan)">github.com/fazil2712</a><br>
          • LinkedIn Profile: <a href="https://www.linkedin.com/in/fazil-ataurrahman-408083330/" target="_blank" style="color:var(--hud-cyan)">linkedin.com/in/fazil-ataurrahman</a>
        </div>
      `;
      break;

    case 'lang en':
      setHudLang('en');
      responseHTML = `<div class="cli-log-entry">Language successfully switched to <strong>ENGLISH</strong>.</div>`;
      break;

    case 'lang id':
      setHudLang('id');
      responseHTML = `<div class="cli-log-entry">Bahasa sistem berhasil diubah ke <strong>INDONESIA</strong>.</div>`;
      break;

    case 'clear':
      logs.innerHTML = '';
      return;

    default:
      responseHTML = `<div class="cli-log-entry error">bash: ${cmd}: command not recognized. Type <span class="cmd-highlight">help</span> for command list.</div>`;
      break;
  }

  const wrapper = document.createElement('div');
  wrapper.innerHTML = `
    <div style="color:var(--hud-green); font-weight:700; margin-top:8px;">fazil@telkom:~$ ${cmd}</div>
    ${responseHTML}
  `;
  logs.appendChild(wrapper);

  const termBody = document.getElementById('term-output');
  termBody.scrollTop = termBody.scrollHeight;
}

/* ============================================================
   7. MODAL INSPECTOR
   ============================================================ */
function openHudModal(pid) {
  playHudBeep(1100);
  const p = HUD_PROJECTS.find(x => x.pid === pid);
  if (!p) return;

  const c = p.content[currentHudLang];
  const modal = document.getElementById('hud-modal');

  document.getElementById('hm-tag').textContent = `[INSPECT_STREAM: //sys/projects/${p.pid}]`;
  document.getElementById('hm-title').textContent = c.name;

  const isLive = !!p.liveUrl;
  const badgeEl = document.getElementById('hm-badge');
  badgeEl.className = isLive ? 'badge-hud live' : 'badge-hud local';
  badgeEl.textContent = isLive ? '[STATUS: LIVE_DEMO]' : '[STATUS: LOCAL_BUILD]';

  document.getElementById('hm-desc').textContent = c.desc;

  document.getElementById('hm-features').innerHTML = c.features.map(f => `<li>${f}</li>`).join('');
  document.getElementById('hm-tech').innerHTML = p.tech.map(t => `<span class="tech-chip">${t}</span>`).join('');

  const imgEl = document.getElementById('hm-img');
  const emptyEl = document.getElementById('hm-empty');
  if (p.screenshots && p.screenshots.length > 0) {
    imgEl.src = p.screenshots[0];
    imgEl.style.display = 'block';
    emptyEl.style.display = 'none';
  } else {
    imgEl.src = '';
    imgEl.style.display = 'none';
    emptyEl.style.display = 'flex';
    document.getElementById('hm-empty-icon').textContent = p.icon;
  }

  let actHTML = '';
  if (p.githubUrl) {
    actHTML += `<a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-hud outline">${HUD_I18N[currentHudLang].projects.source} ↗</a>`;
  }
  if (isLive) {
    actHTML += `<a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-hud primary">${HUD_I18N[currentHudLang].projects.live} ↗</a>`;
  }
  document.getElementById('hm-actions').innerHTML = actHTML;

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeHudModal() {
  playHudBeep(450);
  const modal = document.getElementById('hud-modal');
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function handleHudOverlay(e) {
  if (e.target === document.getElementById('hud-modal')) {
    closeHudModal();
  }
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeHudModal();
});

/* ============================================================
   8. INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  startClock();
  renderHudCards();
  const yr = document.getElementById('hud-year');
  if (yr) yr.textContent = new Date().getFullYear();
});
