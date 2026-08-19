/* ============================================================
   SCRIPT.JS — V3 SPATIAL BENTO & FROSTED GLASS
   Muhammad Fazil Ataurrahman Portfolio
   ============================================================ */

/* ============================================================
   1. TRANSLATIONS & PROJECT DATA
   ============================================================ */
const SPATIAL_I18N = {
  en: {
    nav: {
      overview: 'Overview',
      works: 'Creations',
      stack: 'Ecosystem',
      education: 'Education',
      connect: 'Connect',
    },
    hero: {
      status: 'Available for Software Projects',
      role: 'Full-Stack System Engineer & AI Developer',
      bio: 'Undergraduate Informatics student at <strong>Telkom University Bandung</strong> building robust enterprise backends with <strong>Java Spring Boot</strong>, high-performance engines in <strong>Go</strong>, and intelligent generative AI apps with <strong>Next.js 16</strong>.',
      cta_works: 'Explore 5 Featured Works ↗',
      cta_contact: 'Get In Touch',
      stats_title: 'System Capacity',
      stat_projects: 'Completed Projects',
      stat_langs: 'Core Languages',
      stat_stacks: 'Production Stacks',
      stat_passion: 'Engineering Rigor',
      quote: 'Turning intricate problems into clean, high-performance software.',
    },
    projects: {
      tag: '✦ SELECTED WORKS',
      title: 'Featured Engineering Projects',
      sub: 'A curated showcase of production applications and intelligent web systems.',
      live: 'Live Experience',
      local: 'Local Project',
      explore: 'Explore Details ↗',
      source: 'Source Code ↗',
      features: 'Key Features & Architecture',
      tech_stack: 'Integrated Technologies',
    },
    skills: {
      tag: '✦ ARCHITECTURE & ECOSYSTEM',
      title: 'Technical Capabilities',
      backend: 'Backend & Languages',
      frontend: 'Frontend & Modern Web',
      ai_cloud: 'AI, Database & Cloud',
    },
    education: {
      tag: '✦ ACADEMIC FOUNDATIONS',
      title: 'Education & Credentials',
      status: 'Currently Enrolled — Undergraduate Student',
      degree: 'Bachelor of Informatics (S1)',
      faculty: 'Faculty of Informatics',
      desc: 'Building a rigorous theoretical foundation in algorithms, system architecture, database optimization, and artificial intelligence integration.',
    },
    contact: {
      tag: '✦ GET IN TOUCH',
      title: 'Let\'s build something exceptional together.',
      subtitle: 'Have an exciting idea, project, or full-time opportunity? My inbox is always open.',
      email: 'Send Email',
      github: 'GitHub Repositories',
      linkedin: 'LinkedIn Profile',
    },
    footer: {
      rights: 'All rights reserved.',
    },
  },

  id: {
    nav: {
      overview: 'Ringkasan',
      works: 'Karya',
      stack: 'Ekosistem',
      education: 'Pendidikan',
      connect: 'Kontak',
    },
    hero: {
      status: 'Tersedia untuk Proyek Perangkat Lunak',
      role: 'Pengembang Sistem Full-Stack & AI',
      bio: 'Mahasiswa S1 Informatika di <strong>Universitas Telkom Bandung</strong> yang membangun backend enterprise tangguh dengan <strong>Java Spring Boot</strong>, mesin performa tinggi dalam <strong>Go</strong>, dan aplikasi AI generatif cerdas dengan <strong>Next.js 16</strong>.',
      cta_works: 'Jelajahi 5 Karya Unggulan ↗',
      cta_contact: 'Hubungi Saya',
      stats_title: 'Kapasitas Sistem',
      stat_projects: 'Proyek Selesai',
      stat_langs: 'Bahasa Inti',
      stat_stacks: 'Stack Produksi',
      stat_passion: 'Ketelitian Rekayasa',
      quote: 'Mengubah masalah rumit menjadi perangkat lunak yang bersih dan berkinerja tinggi.',
    },
    projects: {
      tag: '✦ KARYA TERPILIH',
      title: 'Proyek Rekayasa Unggulan',
      sub: 'Koleksi terkurasi dari aplikasi produksi dan sistem web cerdas.',
      live: 'Pengalaman Langsung',
      local: 'Proyek Lokal',
      explore: 'Jelajahi Detail ↗',
      source: 'Kode Sumber ↗',
      features: 'Fitur Utama & Arsitektur',
      tech_stack: 'Teknologi Terintegrasi',
    },
    skills: {
      tag: '✦ ARSITEKTUR & EKOSISTEM',
      title: 'Kemampuan Teknis',
      backend: 'Backend & Bahasa Pemrograman',
      frontend: 'Frontend & Web Modern',
      ai_cloud: 'AI, Database & Cloud',
    },
    education: {
      tag: '✦ LANDASAN AKADEMIK',
      title: 'Pendidikan & Kredensial',
      status: 'Sedang Menempuh — Mahasiswa S1',
      degree: 'Sarjana Informatika (S1)',
      faculty: 'Fakultas Informatika',
      desc: 'Membangun landasan teoretis yang kuat dalam algoritma, arsitektur sistem, optimasi database, dan integrasi kecerdasan buatan.',
    },
    contact: {
      tag: '✦ HUBUNGI SAYA',
      title: 'Mari membangun sesuatu yang luar biasa bersama.',
      subtitle: 'Memiliki ide menarik, proyek, atau peluang kerja? Saya selalu terbuka untuk berdiskusi.',
      email: 'Kirim Email',
      github: 'Repositori GitHub',
      linkedin: 'Profil LinkedIn',
    },
    footer: {
      rights: 'Semua hak dilindungi.',
    },
  },
};

const SPATIAL_PROJECTS = [
  {
    pid: 'ppip',
    featured: true,
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
    pid: 'tata',
    featured: false,
    icon: '🤖',
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
    pid: 'dnd',
    featured: false,
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
    featured: false,
    icon: '🏠',
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
    pid: 'tubesaka',
    featured: false,
    icon: '📊',
    screenshots: ['../assets/screenshots/tubesaka.jpeg'],
    liveUrl: null,
    githubUrl: 'https://github.com/fazil2712/tubesaka',
    tech: ['HTML', 'CSS', 'JavaScript'],
    content: {
      en: {
        name: 'TubesAKA — Algorithmic Frequency Engine',
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
        name: 'TubesAKA — Analisis Frekuensi Algoritmik',
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
let currentSpatialLang = 'en';

function setSpatialLang(lang) {
  if (lang === currentSpatialLang) return;
  currentSpatialLang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const parts = key.split('.');
    let val = SPATIAL_I18N[currentSpatialLang];
    for (const p of parts) val = val?.[p];
    if (val) el.innerHTML = val;
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    const parts = key.split('.');
    let val = SPATIAL_I18N[currentSpatialLang];
    for (const p of parts) val = val?.[p];
    if (val) el.innerHTML = val;
  });

  document.getElementById('sp-lang-en').classList.toggle('active', lang === 'en');
  document.getElementById('sp-lang-id').classList.toggle('active', lang === 'id');

  renderSpatialCards();
}

/* ============================================================
   3. 3D PARALLAX TILT & SPOTLIGHT EFFECT
   ============================================================ */
function initTiltCards() {
  document.querySelectorAll('.tilt-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--spot-x', `${x}px`);
      card.style.setProperty('--spot-y', `${y}px`);

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) * 4;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

/* ============================================================
   4. RENDER BENTO PROJECT CARDS
   ============================================================ */
function renderSpatialCards() {
  const grid = document.getElementById('spatial-projects-grid');
  if (!grid) return;

  grid.innerHTML = SPATIAL_PROJECTS.map(p => {
    const c = p.content[currentSpatialLang];
    const isLive = !!p.liveUrl;
    const badge = isLive
      ? `<span class="badge-spatial live">✦ ${SPATIAL_I18N[currentSpatialLang].projects.live}</span>`
      : `<span class="badge-spatial local">${SPATIAL_I18N[currentSpatialLang].projects.local}</span>`;

    const tags = p.tech.slice(0, 4).map(t => `<span class="tag-pill">${t}</span>`).join('');
    const hasImg = p.screenshots && p.screenshots.length > 0;
    const wideClass = p.featured ? 'featured-wide' : '';

    return `
      <article class="bento-card bento-proj-card tilt-card ${wideClass}" aria-label="${c.name}">
        <div class="bento-glow-spot"></div>
        <div class="bento-proj-media">
          ${hasImg 
            ? `<img class="bento-proj-img" src="${p.screenshots[0]}" alt="${c.name}" loading="lazy">`
            : `<div class="bento-placeholder">
                 <span class="bp-icon">${p.icon}</span>
                 <span class="bp-title">${c.name}</span>
               </div>`
          }
        </div>
        <div class="bento-proj-body">
          <div class="bp-top-row">
            <h3 class="bp-title-text">${c.name}</h3>
            ${badge}
          </div>
          <p class="bp-desc-text">${c.shortDesc}</p>
          <div class="bp-tags-row">${tags}</div>
          <div class="bp-actions-row">
            <button class="btn-sp-action primary" onclick="openSpatialModal('${p.pid}')">${SPATIAL_I18N[currentSpatialLang].projects.explore}</button>
            ${p.githubUrl ? `<a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-sp-action ghost">${SPATIAL_I18N[currentSpatialLang].projects.source}</a>` : ''}
          </div>
        </div>
      </article>
    `;
  }).join('');

  initTiltCards();
}

/* ============================================================
   5. SPATIAL MODAL
   ============================================================ */
function openSpatialModal(pid) {
  const p = SPATIAL_PROJECTS.find(x => x.pid === pid);
  if (!p) return;

  const c = p.content[currentSpatialLang];
  const modal = document.getElementById('spatial-modal');

  document.getElementById('spm-title').textContent = c.name;

  const isLive = !!p.liveUrl;
  const badgeEl = document.getElementById('spm-badge');
  badgeEl.className = isLive ? 'sm-badge live' : 'sm-badge local';
  badgeEl.textContent = isLive ? `✦ ${SPATIAL_I18N[currentSpatialLang].projects.live}` : SPATIAL_I18N[currentSpatialLang].projects.local;

  document.getElementById('spm-desc').textContent = c.desc;
  document.getElementById('spm-features').innerHTML = c.features.map(f => `<li>${f}</li>`).join('');
  document.getElementById('spm-tech').innerHTML = p.tech.map(t => `<span class="tag-pill">${t}</span>`).join('');

  const imgEl = document.getElementById('spm-img');
  const emptyEl = document.getElementById('spm-empty');
  if (p.screenshots && p.screenshots.length > 0) {
    imgEl.src = p.screenshots[0];
    imgEl.style.display = 'block';
    emptyEl.style.display = 'none';
  } else {
    imgEl.src = '';
    imgEl.style.display = 'none';
    emptyEl.style.display = 'flex';
    document.getElementById('spm-empty-icon').textContent = p.icon;
    document.getElementById('spm-empty-title').textContent = c.name;
  }

  let actHTML = '';
  if (p.githubUrl) {
    actHTML += `<a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-glass-pill">${SPATIAL_I18N[currentSpatialLang].projects.source}</a>`;
  }
  if (isLive) {
    actHTML += `<a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-aurora-solid">${SPATIAL_I18N[currentSpatialLang].projects.live} ↗</a>`;
  }
  document.getElementById('spm-actions').innerHTML = actHTML;

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeSpatialModal() {
  const modal = document.getElementById('spatial-modal');
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function handleSpatialOverlay(e) {
  if (e.target === document.getElementById('spatial-modal')) {
    closeSpatialModal();
  }
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeSpatialModal();
});

/* ============================================================
   6. INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  renderSpatialCards();
  const yr = document.getElementById('spatial-year');
  if (yr) yr.textContent = new Date().getFullYear();
});
