const translations = {
    en: {
        "nav.about": "About",
        "nav.projects": "Projects",
        "nav.contact": "Contact",
        "hero.label": "PORTFOLIO.v2026",
        "hero.eduLabel": "LOCATION_ENTRY",
        "hero.eduText": "Telkom University Bandung / B.S. Informatics",
        "about.p1": "I'm an undergraduate Informatics student at Telkom University Bandung with a passion for building practical software solutions. I enjoy working across the stack — from enterprise Java backends to AI-powered Next.js applications and Go-based game servers. I love turning complex problems into clean, functional software.",
        "about.stat1": "Projects",
        "about.stat2": "Languages",
        "about.stat3": "Tech Stacks",
        "about.skills": "SKILLS_MATRIX",
        "skills.cat1": "Languages",
        "skills.cat2": "Frameworks",
        "skills.cat3": "Databases & Cloud",
        "skills.cat4": "Tools",
        "projects.thName": "PROJECT",
        "projects.thTech": "STACK",
        "projects.thStatus": "STATUS",
        "projects.thLinks": "REFS"
    },
    id: {
        "nav.about": "Tentang",
        "nav.projects": "Proyek",
        "nav.contact": "Kontak",
        "hero.label": "PORTOFOLIO.v2026",
        "hero.eduLabel": "ENTRI_LOKASI",
        "hero.eduText": "Telkom University Bandung / S1 Informatika",
        "about.p1": "Saya adalah mahasiswa S1 Informatika di Universitas Telkom Bandung dengan semangat membangun solusi perangkat lunak yang praktis. Saya menikmati bekerja di seluruh stack — dari backend Java enterprise hingga aplikasi Next.js bertenaga AI dan server game berbasis Go. Saya suka mengubah masalah kompleks menjadi perangkat lunak yang bersih dan fungsional.",
        "about.stat1": "Proyek",
        "about.stat2": "Bahasa",
        "about.stat3": "Tech Stack",
        "about.skills": "MATRIKS_SKILL",
        "skills.cat1": "Bahasa",
        "skills.cat2": "Framework",
        "skills.cat3": "Database & Cloud",
        "skills.cat4": "Alat",
        "projects.thName": "PROYEK",
        "projects.thTech": "STACK",
        "projects.thStatus": "STATUS",
        "projects.thLinks": "REF"
    }
};

const projectsData = [
    {
        id: 1,
        liveUrl: 'https://gdpp.me',
        githubUrl: 'https://github.com/fazil2712/cutidinas',
        tech: ['Java 21', 'Spring Boot 4', 'Thymeleaf', 'Spring Security', 'MySQL', 'MariaDB', 'Redis', 'Azure Blob', 'Apache POI', 'PDFBox'],
        screenshots: ['../assets/screenshots/ppip.jpeg'],
        en: {
            name: 'PPIP',
            desc: 'An enterprise web application built for a company that consolidates three key systems: ISO 31000-compliant risk management, a secure document catalog allowing staff to view, share, and download company files, and a comprehensive module for managing employee absences and business trips.',
            features: ['ISO 31000 Risk Management', 'Document Catalog (View / Share / Download)', 'Absence Management System', 'Business Trip Management', 'Role-Based Access Control', 'Azure Blob Storage Integration', 'Redis Caching Layer', 'PDF & Excel Export']
        },
        id_lang: {
            name: 'PPIP',
            desc: 'Aplikasi web enterprise yang dibangun untuk sebuah perusahaan yang mengkonsolidasikan tiga sistem utama: manajemen risiko sesuai ISO 31000, katalog dokumen aman yang memungkinkan staf melihat, berbagi, dan mengunduh berkas perusahaan, serta modul komprehensif untuk mengelola absen karyawan dan perjalanan dinas.',
            features: ['Manajemen Risiko ISO 31000', 'Katalog Dokumen (Lihat / Bagikan / Unduh)', 'Sistem Manajemen Absen', 'Manajemen Perjalanan Dinas', 'Kontrol Akses Berbasis Peran', 'Integrasi Azure Blob Storage', 'Layer Redis Caching', 'Ekspor PDF & Excel']
        }
    },
    {
        id: 2,
        liveUrl: null,
        githubUrl: 'https://github.com/fazil2712/projectdnd',
        tech: ['Go', 'HTML', 'CSS', 'JavaScript', 'Gemini API'],
        screenshots: [],
        en: {
            name: 'Project DnD',
            desc: 'A fully web-based Dungeons & Dragons experience powered by the Gemini AI acting as an intelligent Dungeon Master. Players can embark on campaigns, track spells from a complete spell database, build custom lore, and experience dynamically generated storytelling powered by a Go backend.',
            features: ['AI Dungeon Master (Gemini API)', 'Campaign Logging System', 'Full Spell Database & Tracker', 'Custom Lore & Rules Engine', 'Real-time Narrative Generation', 'Go Backend Server', 'Single-file Web Interface', 'Persistent Campaign Log']
        },
        id_lang: {
            name: 'Project DnD',
            desc: 'Pengalaman Dungeons & Dragons berbasis web sepenuhnya yang didukung AI Gemini sebagai Dungeon Master yang cerdas. Pemain dapat menjalani kampanye, melacak mantra dari database mantra lengkap, membangun lore kustom, dan merasakan narasi yang dihasilkan secara dinamis oleh backend Go.',
            features: ['AI Dungeon Master (Gemini API)', 'Sistem Pencatatan Kampanye', 'Database & Pelacak Mantra Lengkap', 'Mesin Lore & Aturan Kustom', 'Pembuatan Narasi Real-time', 'Server Backend Go', 'Antarmuka Web Single-file', 'Log Kampanye Persisten']
        }
    },
    {
        id: 3,
        liveUrl: null,
        githubUrl: 'https://github.com/fazil2712/superkos',
        tech: ['Java', 'Spring Boot', 'MySQL', 'Apache Tomcat 9', 'JDBC', 'Maven', 'MVC'],
        screenshots: ['../assets/screenshots/superkos.jpeg'],
        en: {
            name: 'SuperKos',
            desc: 'A PropTech web application built for marketing rental properties (kos, kontrakan, apartments) with a unique niche: automatic roommate matching. Tenants complete a lifestyle survey and the system recommends compatible roommates. Property owners manage listings, while an admin oversees the platform.',
            features: ['Smart Property Search & Filter', 'Automatic Roommate Matching', 'Lifestyle & Preference Survey', 'Real-time Map View', 'Wishlist & Favorites', 'Review & Rating System', 'Property Management Dashboard', 'Admin Panel & Moderation']
        },
        id_lang: {
            name: 'SuperKos',
            desc: 'Aplikasi web PropTech yang dibangun untuk memasarkan properti sewa (kos, kontrakan, apartemen) dengan niche unik: pencocokan teman sekamar otomatis. Penyewa mengisi survei gaya hidup dan sistem merekomendasikan teman sekamar yang kompatibel. Pemilik properti mengelola listing, sementara admin mengawasi platform.',
            features: ['Pencarian & Filter Properti Cerdas', 'Pencocokan Teman Sekamar Otomatis', 'Survei Gaya Hidup & Preferensi', 'Tampilan Peta Real-time', 'Wishlist & Favorit', 'Sistem Ulasan & Rating', 'Dashboard Manajemen Properti', 'Panel Admin & Moderasi']
        }
    },
    {
        id: 4,
        liveUrl: null,
        githubUrl: 'https://github.com/fazil2712/tata-ai',
        tech: ['Next.js 16', 'React 19', 'TypeScript', 'Gemini API', 'OpenAI', 'ElevenLabs', 'Fal.ai', 'Zustand', 'UploadThing', 'Tailwind CSS'],
        screenshots: ['../assets/screenshots/tata.jpeg'],
        en: {
            name: 'Tata AI',
            desc: 'An AI-powered social media manager that orchestrates multiple AI services to automate content creation. It generates written posts via Gemini/OpenAI, produces images through Fal.ai, synthesizes voices with ElevenLabs, and organises workflows on a React Flow canvas — all in a single Next.js application.',
            features: ['AI Post Generation (Gemini / OpenAI)', 'AI Image Generation (Fal.ai)', 'Voice Synthesis (ElevenLabs)', 'React Flow Workflow Canvas', 'Media Upload (UploadThing)', 'Content Scheduling', 'Multi-AI Orchestration', 'Zustand State Management']
        },
        id_lang: {
            name: 'Tata AI',
            desc: 'Manajer media sosial bertenaga AI yang mengorkestrasikan berbagai layanan AI untuk mengotomasi pembuatan konten. Ini menghasilkan postingan tertulis via Gemini/OpenAI, memproduksi gambar melalui Fal.ai, mensintesis suara dengan ElevenLabs, dan mengorganisir alur kerja di canvas React Flow — semua dalam satu aplikasi Next.js.',
            features: ['Pembuatan Postingan AI (Gemini / OpenAI)', 'Pembuatan Gambar AI (Fal.ai)', 'Sintesis Suara (ElevenLabs)', 'Canvas Alur Kerja React Flow', 'Upload Media (UploadThing)', 'Penjadwalan Konten', 'Orkestrasi Multi-AI', 'Manajemen State Zustand']
        }
    },
    {
        id: 5,
        liveUrl: null,
        githubUrl: 'https://github.com/fazil2712/tubesaka',
        tech: ['HTML', 'CSS', 'JavaScript'],
        screenshots: ['../assets/screenshots/tubesaka.jpeg'],
        en: {
            name: 'TubesAKA',
            desc: 'A focused utility web application that takes a string of text as input, analyses it character by character, counts the frequency of each individual character, and displays the results in a clean, visual format. Built as a coursework project demonstrating fundamental algorithm and data structure concepts.',
            features: ['Character Frequency Analysis', 'Interactive Text Input', 'Results Persistence & Storage', 'Visual Frequency Display', 'Sorted Output View', 'Pure Frontend Implementation']
        },
        id_lang: {
            name: 'TubesAKA',
            desc: 'Aplikasi web utilitas yang mengambil string teks sebagai input, menganalisisnya karakter per karakter, menghitung frekuensi setiap karakter individual, dan menampilkan hasilnya dalam format visual yang bersih. Dibuat sebagai proyek tugas yang menunjukkan konsep dasar algoritma dan struktur data.',
            features: ['Analisis Frekuensi Karakter', 'Input Teks Interaktif', 'Persistensi & Penyimpanan Hasil', 'Tampilan Frekuensi Visual', 'Tampilan Output Terurut', 'Implementasi Pure Frontend']
        }
    }
];

let currentLang = 'en';

// Set Copyright Year
document.getElementById('year').textContent = new Date().getFullYear();

// Toggle Language
function setLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    renderProjects();
}

document.getElementById('langToggle').addEventListener('click', () => {
    setLanguage(currentLang === 'en' ? 'id' : 'en');
});

document.getElementById('mobileLangToggle').addEventListener('click', () => {
    setLanguage(currentLang === 'en' ? 'id' : 'en');
});

// Mobile Menu
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Reveal Animation
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => revealObserver.observe(el));

// Render Projects Table
function renderProjects() {
    const container = document.getElementById('projectsContainer');
    // Keep header
    const header = container.querySelector('.table-header');
    container.innerHTML = '';
    container.appendChild(header);

    projectsData.forEach(proj => {
        const t = currentLang === 'en' ? proj.en : proj.id_lang;
        const row = document.createElement('div');
        row.className = 'project-row';

        let techHTML = proj.tech.slice(0, 3).map(tech => `<span class="tech-pill">${tech}</span>`).join('');
        if (proj.tech.length > 3) {
            techHTML += `<span class="tech-pill">+${proj.tech.length - 3}</span>`;
        }

        let linksHTML = '';
        if (proj.liveUrl) linksHTML += `<a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" class="link-icon" onclick="event.stopPropagation()">[LIV]</a>`;
        if (proj.githubUrl) linksHTML += `<a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="link-icon" onclick="event.stopPropagation()">[SRC]</a>`;

        let featuresHTML = t.features.map(f => `<li>${f}</li>`).join('');
        let imgHTML = proj.screenshots.length > 0 
            ? `<img src="${proj.screenshots[0]}" alt="${t.name}" class="detail-img">`
            : `<div class="no-img">[NO_IMAGE_DATA]</div>`;

        row.innerHTML = `
            <div class="project-main">
                <div class="col-num">0${proj.id}</div>
                <div class="col-name">${t.name}</div>
                <div class="col-tech">${techHTML}</div>
                <div class="col-status"><span class="status-badge">${proj.liveUrl ? 'LIVE' : 'LOCAL'}</span></div>
                <div class="col-links">${linksHTML}</div>
            </div>
            <div class="project-detail">
                <div class="detail-info">
                    <p class="detail-desc">${t.desc}</p>
                    <ul class="detail-features">${featuresHTML}</ul>
                </div>
                <div class="detail-media">
                    ${imgHTML}
                </div>
            </div>
        `;

        const mainRow = row.querySelector('.project-main');
        const detailRow = row.querySelector('.project-detail');

        mainRow.addEventListener('click', () => {
            const isActive = detailRow.classList.contains('active');
            
            // Close all
            document.querySelectorAll('.project-detail').forEach(d => d.classList.remove('active'));
            document.querySelectorAll('.project-main').forEach(m => m.classList.remove('active'));

            if (!isActive) {
                detailRow.classList.add('active');
                mainRow.classList.add('active');
            }
        });

        container.appendChild(row);
    });
}

// Typewriter Effect
const roles = [
    "Full-Stack Developer",
    "AI Enthusiast",
    "Problem Solver",
    "Java Developer",
    "Go Developer"
];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;
const typewriterEl = document.getElementById('typewriter');

function type() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        typewriterEl.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50;
    } else {
        typewriterEl.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100;
    }

    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typeSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 500; // Pause before typing next
    }

    setTimeout(type, typeSpeed);
}

// Initialize
setLanguage('en');
setTimeout(type, 1000);
