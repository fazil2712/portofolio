/* ============================================================
   SCRIPT.JS — V2 SWISS EDITORIAL BRUTALISM
   Muhammad Fazil Ataurrahman Portfolio
   ============================================================ */

/* ============================================================
   1. TRANSLATION & PROJECT DATA
   ============================================================ */
const SWISS_I18N = {
  en: {
    ticker: {
      status: 'AVAILABLE FOR HIGH-IMPACT SOFTWARE ENGINEERING',
    },
    nav: {
      about: 'BIOGRAPHY',
      projects: 'WORKS INDEX',
      education: 'ACADEMIA',
      contact: 'DISPATCH',
      inquire: 'INITIATE DIALOGUE ↗',
    },
    hero: {
      kicker: 'INFORMATICS UNDERGRADUATE & FULL-STACK SYSTEM ENGINEER',
      manifesto: 'Building robust enterprise backends in Java Spring Boot, low-latency microservices in Go, and modern generative AI experiences in Next.js. Driven by architectural clarity, intentional ergonomics, and software reliability.',
      view_works: 'EXPLORE WORKS (05) ↓',
      read_bio: 'READ CURRICULUM VITAE',
    },
    about: {
      heading: 'CURATED BIOGRAPHY & TECHNICAL SPECTRUM',
      title: 'ENGINEERING WITH INTENT & RIGOR',
      bio: '<p>I\'m an undergraduate Informatics student at <strong>Telkom University Bandung</strong> with a passion for building practical software solutions. I enjoy working across the stack — from enterprise <strong>Java</strong> backends to <strong>AI-powered Next.js</strong> applications and <strong>Go</strong>-based game servers.</p><p>I love turning complex problems into clean, functional software. By combining rigid algorithmic thinking with modern product engineering, I deliver resilient systems that scale cleanly.</p>',
      stat_projects: 'FLAGSHIP PROJECTS COMPLETED',
      stat_langs: 'PRIMARY PROGRAMMING LANGUAGES',
      stat_stacks: 'CORE PRODUCTION STACKS',
      sk_langs: 'LANGUAGES',
      sk_fw: 'FRAMEWORKS',
      sk_db: 'STORAGE & INFRA',
      sk_tools: 'TOOLS & AI',
    },
    projects: {
      heading: 'INDEXED WORKS & ARTIFACTS',
      live: 'LIVE PRODUCTION',
      local: 'LOCAL ARTIFACT',
      dossier: 'READ DOSSIER →',
      source: 'SOURCE CODE ↗',
      live_demo: 'LIVE SYSTEM ↗',
      features: 'KEY ARCHITECTURAL HIGHLIGHTS',
      tech_stack: 'DEPLOYED STACK & LIBRARIES',
    },
    education: {
      heading: 'ACADEMIC BACKGROUND',
      faculty: 'Faculty of Informatics',
      degree: 'Bachelor of Informatics (S1)',
      status: 'CURRENTLY ENROLLED — UNDERGRADUATE STUDENT',
      desc: 'Focusing on algorithms, enterprise architecture, concurrent programming, distributed data management, and generative artificial intelligence systems.',
    },
    contact: {
      heading: 'CORRESPONDENCE & DISPATCH',
      title: 'LET US COMMENCE COLLABORATION',
      subtitle: 'Feel free to reach out for software engineering opportunities, enterprise system consulting, or open-source collaboration.',
      email: 'SEND INQUIRY ↗',
      github: 'VIEW GITHUB ↗',
      linkedin: 'VIEW LINKEDIN ↗',
    },
    footer: {
      rights: 'All rights reserved.',
    },
  },

  id: {
    ticker: {
      status: 'TERSEDIA UNTUK REKAYASA PERANGKAT LUNAK BERDAMPAK TINGGI',
    },
    nav: {
      about: 'BIOGRAFI',
      projects: 'INDEKS KARYA',
      education: 'AKADEMIK',
      contact: 'SURAT & KONTAK',
      inquire: 'MULAI DIALOG ↗',
    },
    hero: {
      kicker: 'MAHASISWA S1 INFORMATIKA & PENGEMBANG SISTEM FULL-STACK',
      manifesto: 'Membangun backend enterprise yang tangguh dalam Java Spring Boot, microservice berlatensi rendah dalam Go, dan pengalaman AI generatif modern dalam Next.js. Digerakkan oleh kejelasan arsitektur dan keandalan sistem.',
      view_works: 'JELAJAHI KARYA (05) ↓',
      read_bio: 'BACA KURIKULUM VITAE',
    },
    about: {
      heading: 'BIOGRAFI TERKURASI & SPEKTRUM TEKNIS',
      title: 'REKAYASA DENGAN KETELITIAN & STRUKTUR',
      bio: '<p>Saya adalah mahasiswa S1 Informatika di <strong>Universitas Telkom Bandung</strong> dengan semangat membangun solusi perangkat lunak yang praktis. Saya menikmati bekerja di seluruh stack — dari backend <strong>Java</strong> enterprise hingga aplikasi <strong>Next.js bertenaga AI</strong> dan server game berbasis <strong>Go</strong>.</p><p>Saya suka mengubah masalah kompleks menjadi perangkat lunak yang bersih dan fungsional. Menggabungkan ketelitian algoritma dengan rekayasa produk modern untuk menghasilkan sistem yang andal.</p>',
      stat_projects: 'PROYEK UNGGULAN SELESAI',
      stat_langs: 'BAHASA PEMROGRAMAN UTAMA',
      stat_stacks: 'STACK PRODUKSI INTI',
      sk_langs: 'BAHASA PEMROGRAMAN',
      sk_fw: 'FRAMEWORK',
      sk_db: 'STORAGE & INFRASTRUKTUR',
      sk_tools: 'ALAT & AI',
    },
    projects: {
      heading: 'KARYA TERINDEKS & ARTEFAK',
      live: 'PRODUKSI AKTIF',
      local: 'PROYEK LOKAL',
      dossier: 'BACA DOSIR →',
      source: 'KODE SUMBER ↗',
      live_demo: 'SISTEM LANGSUNG ↗',
      features: 'SOROTAN ARSITEKTUR UTAMA',
      tech_stack: 'STACK & PUSTAKA TERPASANG',
    },
    education: {
      heading: 'LATAR BELAKANG AKADEMIK',
      faculty: 'Fakultas Informatika',
      degree: 'Sarjana Informatika (S1)',
      status: 'SEDANG MENEMPUH — MAHASISWA S1',
      desc: 'Fokus pada algoritma, arsitektur enterprise, pemrograman konkuren, manajemen data terdistribusi, dan sistem kecerdasan buatan generatif.',
    },
    contact: {
      heading: 'SURAT & KORESPONDENSI',
      title: 'MARI MEMULAI KOLABORASI',
      subtitle: 'Jangan ragu untuk menghubungi saya untuk peluang rekayasa perangkat lunak, konsultasi sistem enterprise, atau kolaborasi open-source.',
      email: 'KIRIM PESAN ↗',
      github: 'LIHAT GITHUB ↗',
      linkedin: 'LIHAT LINKEDIN ↗',
    },
    footer: {
      rights: 'Semua hak dilindungi.',
    },
  },
};

const SWISS_PROJECTS = [
  {
    pid: 'ppip',
    idx: '01',
    icon: '🏢',
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
    idx: '02',
    icon: '⚔️',
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
    idx: '03',
    icon: '🏠',
    screenshots: ['../assets/screenshots/superkos.jpeg'],
    liveUrl: null,
    githubUrl: 'https://github.com/fazil2712/superkos',
    tech: ['Java', 'Spring Boot', 'MySQL', 'Apache Tomcat 9', 'JDBC', 'Maven', 'MVC'],
    content: {
      en: {
        name: 'SuperKos — PropTech Roommate Matching Platform',
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
        name: 'SuperKos — Platform Pencocokan Rekan Kos Cerdas',
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
    idx: '04',
    icon: '🤖',
    screenshots: ['../assets/screenshots/tata.jpeg'],
    liveUrl: null,
    githubUrl: 'https://github.com/fazil2712/tata-ai',
    tech: ['Next.js 16', 'React 19', 'TypeScript', 'Gemini API', 'OpenAI', 'ElevenLabs', 'Fal.ai', 'Zustand', 'UploadThing', 'Tailwind CSS'],
    content: {
      en: {
        name: 'Tata AI — Autonomous Content Orchestrator',
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
        name: 'Tata AI — Orkestrator Konten AI Otonom',
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
    idx: '05',
    icon: '📊',
    screenshots: ['../assets/screenshots/tubesaka.jpeg'],
    liveUrl: null,
    githubUrl: 'https://github.com/fazil2712/tubesaka',
    tech: ['HTML', 'CSS', 'JavaScript'],
    content: {
      en: {
        name: 'TubesAKA — Algorithmic Text Frequency Analyzer',
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
        name: 'TubesAKA — Analisis Frekuensi Teks Algoritmik',
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
   2. STATE & I18N
   ============================================================ */
let currentSwissLang = 'en';

function setSwissLang(lang) {
  if (lang === currentSwissLang) return;
  currentSwissLang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const parts = key.split('.');
    let val = SWISS_I18N[currentSwissLang];
    for (const p of parts) val = val?.[p];
    if (val) el.innerHTML = val;
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    const parts = key.split('.');
    let val = SWISS_I18N[currentSwissLang];
    for (const p of parts) val = val?.[p];
    if (val) el.innerHTML = val;
  });

  document.getElementById('s-lang-en').classList.toggle('active', lang === 'en');
  document.getElementById('s-lang-id').classList.toggle('active', lang === 'id');

  renderSwissWorks();
}

/* ============================================================
   3. RENDER WORKS LIST
   ============================================================ */
function renderSwissWorks() {
  const container = document.getElementById('swiss-works-list');
  if (!container) return;

  container.innerHTML = SWISS_PROJECTS.map(p => {
    const c = p.content[currentSwissLang];
    const isLive = !!p.liveUrl;
    const badge = isLive
      ? `<span class="w-status-badge live">${SWISS_I18N[currentSwissLang].projects.live}</span>`
      : `<span class="w-status-badge local">${SWISS_I18N[currentSwissLang].projects.local}</span>`;

    const stackPills = p.tech.slice(0, 4).map(t => `<span class="stack-pill">${t}</span>`).join('');
    const hasImg = p.screenshots && p.screenshots.length > 0;

    return `
      <article class="work-entry-card" aria-label="${c.name}">
        <div class="work-visual">
          ${hasImg 
            ? `<img class="work-img" src="${p.screenshots[0]}" alt="${c.name}" loading="lazy">`
            : `<div class="work-placeholder-art">
                 <span class="work-ph-glyph">${p.icon}</span>
                 <span class="work-ph-title">${p.pid.toUpperCase()} // EXHIBIT</span>
               </div>`
          }
        </div>
        <div class="work-details">
          <div class="work-index-row">
            <span class="w-idx-badge">ITEM // ${p.idx}</span>
            ${badge}
          </div>
          <h3 class="work-title">${c.name}</h3>
          <p class="work-synopsis">${c.shortDesc}</p>
          <div class="work-stack-pills">${stackPills}</div>
          <div class="work-actions-row">
            <button class="w-btn solid" onclick="openSwissModal('${p.pid}')">${SWISS_I18N[currentSwissLang].projects.dossier}</button>
            ${p.githubUrl ? `<a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="w-btn outline">${SWISS_I18N[currentSwissLang].projects.source}</a>` : ''}
          </div>
        </div>
      </article>
    `;
  }).join('');
}

/* ============================================================
   4. MODAL DOSSIER
   ============================================================ */
function openSwissModal(pid) {
  const p = SWISS_PROJECTS.find(x => x.pid === pid);
  if (!p) return;

  const c = p.content[currentSwissLang];
  const modal = document.getElementById('swiss-modal');

  document.getElementById('sm-idx').textContent = `EXHIBITION ITEM // ${p.idx}`;
  document.getElementById('sm-title').textContent = c.name;

  const isLive = !!p.liveUrl;
  const badgeEl = document.getElementById('sm-badge');
  badgeEl.className = isLive ? 'dossier-badge live' : 'dossier-badge local';
  badgeEl.textContent = isLive ? SWISS_I18N[currentSwissLang].projects.live : SWISS_I18N[currentSwissLang].projects.local;

  document.getElementById('sm-desc').textContent = c.desc;
  document.getElementById('sm-features').innerHTML = c.features.map(f => `<li>${f}</li>`).join('');
  document.getElementById('sm-tech').innerHTML = p.tech.map(t => `<span class="stack-pill">${t}</span>`).join('');

  const imgEl = document.getElementById('sm-img');
  const emptyEl = document.getElementById('sm-empty');
  if (p.screenshots && p.screenshots.length > 0) {
    imgEl.src = p.screenshots[0];
    imgEl.style.display = 'block';
    emptyEl.style.display = 'none';
  } else {
    imgEl.src = '';
    imgEl.style.display = 'none';
    emptyEl.style.display = 'flex';
    document.getElementById('sm-empty-icon').textContent = p.icon;
  }

  let actHTML = '';
  if (p.githubUrl) {
    actHTML += `<a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="w-btn outline">${SWISS_I18N[currentSwissLang].projects.source}</a>`;
  }
  if (isLive) {
    actHTML += `<a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="w-btn solid">${SWISS_I18N[currentSwissLang].projects.live_demo}</a>`;
  }
  document.getElementById('sm-actions').innerHTML = actHTML;

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeSwissModal() {
  const modal = document.getElementById('swiss-modal');
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function handleSwissOverlay(e) {
  if (e.target === document.getElementById('swiss-modal')) {
    closeSwissModal();
  }
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeSwissModal();
});

/* ============================================================
   5. INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  renderSwissWorks();
  const yr = document.getElementById('swiss-year');
  if (yr) yr.textContent = new Date().getFullYear();
});
